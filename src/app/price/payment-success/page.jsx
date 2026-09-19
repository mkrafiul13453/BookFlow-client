import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

import { redirect } from "next/navigation";

import {
    CheckCircle2,
    Mail,
    ArrowRight,
} from "lucide-react";

import Link from "next/link";

export default async function PaymentSuccessPage({
    searchParams,
}) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error(
            "Please provide a valid session_id (`cs_test_...`)"
        );
    }

    // ==========================================
    // GET CURRENT USER
    // ==========================================

    const userSession = await auth.api.getSession({
        headers: await import("next/headers").then(
            ({ headers }) => headers()
        ),
    });

    const user = userSession?.user;

    if (!user) {
        return redirect("/login");
    }

    // ==========================================
    // GET STRIPE SESSION
    // ==========================================

    const session =
        await stripe.checkout.sessions.retrieve(
            session_id
        );

    const status = session.status;

    const customerEmail =
        session.customer_details?.email ||
        session.customer_email ||
        user.email;

    // ==========================================
    // PAYMENT NOT COMPLETE
    // ==========================================

    if (status !== "complete") {
        return redirect("/cart");
    }

    // ==========================================
    // GET ORDER INFORMATION
    // ==========================================

    const orderId =
        session.metadata?.orderId;

    const orderUserId =
        session.metadata?.userId;

    if (!orderId || !orderUserId) {
        throw new Error(
            "Order information is missing from Stripe session."
        );
    }

    // Security check
    if (orderUserId !== user.id) {
        throw new Error(
            "You are not authorized to access this order."
        );
    }

    // ==========================================
    // UPDATE ORDER PAYMENT STATUS
    // ==========================================

    const paymentResponse =
        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${orderId}/payment`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    userId: user.id,

                    paymentStatus: "paid",

                    stripePaymentIntentId:
                        typeof session.payment_intent ===
                            "string"
                            ? session.payment_intent
                            : session.payment_intent?.id ||
                            null,
                }),

                cache: "no-store",
            }
        );

    const paymentData =
        await paymentResponse.json();

    if (
        !paymentResponse.ok ||
        !paymentData.success
    ) {
        throw new Error(
            "Failed to update order payment status."
        );
    }

    // ==========================================
    // CLEAR CART
    // ==========================================

    await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cart?userId=${user.id}`,
        {
            method: "DELETE",
            cache: "no-store",
        }
    );

    // ==========================================
    // SUCCESS PAGE
    // ==========================================

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <section className="w-full max-w-lg">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Top Success Section */}

                    <div className="px-6 sm:px-10 pt-10 pb-8 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle2
                                size={48}
                                className="text-green-600"
                                strokeWidth={2}
                            />
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Payment Successful!
                        </h1>

                        <p className="mt-3 text-gray-500 leading-relaxed">
                            Thank you for your purchase. Your
                            payment has been successfully
                            processed.
                        </p>
                    </div>

                    {/* Email Information */}

                    <div className="mx-6 sm:mx-10 rounded-2xl bg-gray-50 border border-gray-100 p-5">
                        <div className="flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                <Mail
                                    size={22}
                                    className="text-blue-600"
                                />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Confirmation email
                                </p>

                                <p className="mt-1 break-all font-semibold text-gray-900">
                                    {customerEmail}
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Your payment has been
                                    successfully received.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Status */}

                    <div className="px-6 sm:px-10 py-6">

                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                            <span className="text-gray-500">
                                Payment status
                            </span>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                Completed
                            </span>

                        </div>

                        <div className="flex items-center justify-between py-4">

                            <span className="text-gray-500">
                                Delivery status
                            </span>

                            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                                Pending
                            </span>

                        </div>

                    </div>

                    {/* Actions */}

                    <div className="border-t border-gray-100 bg-gray-50 px-6 sm:px-10 py-6">

                        <Link
                            href="/"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-gray-800"
                        >
                            Continue Shopping

                            <ArrowRight
                                size={19}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </Link>

                        <p className="mt-4 text-center text-sm text-gray-500">
                            Need help?{" "}
                            <a
                                href="mailto:orders@example.com"
                                className="font-medium text-black underline underline-offset-2 hover:text-gray-600"
                            >
                                Contact our support team
                            </a>
                        </p>

                    </div>

                </div>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Thank you for choosing us. We appreciate
                    your business!
                </p>

            </section>
        </main>
    );
}