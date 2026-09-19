import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export async function POST(request) {
    try {
        const headersList = await headers();

        const origin =
            headersList.get("origin") ||
            process.env.NEXT_PUBLIC_BASE_URL;

        // ==========================================
        // GET CURRENT USER
        // ==========================================

        const userSession = await auth.api.getSession({
            headers: headersList,
        });

        const user = userSession?.user;

        if (!user) {
            return NextResponse.json(
                {
                    error: "Please login first.",
                },
                {
                    status: 401,
                }
            );
        }

        // ==========================================
        // CREATE ORDER FROM EXISTING CART
        // ==========================================

        const orderResponse = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/orders`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    userId: user.id,

                    user: {
                        name: user.name || "",
                        email: user.email || "",
                        image: user.image || "",
                    },
                }),

                cache: "no-store",
            }
        );

        const orderData = await orderResponse.json();

        if (!orderResponse.ok || !orderData.success) {
            return NextResponse.json(
                {
                    error:
                        orderData.message ||
                        "Failed to create order.",
                },
                {
                    status: orderResponse.status || 500,
                }
            );
        }

        const {
            orderId,
            order,
        } = orderData;

        // ==========================================
        // CREATE STRIPE LINE ITEMS
        // ==========================================

        const lineItems = order.products.map((product) => ({
            price_data: {
                currency: "usd",

                // Stripe uses cents
                unit_amount: Math.round(
                    Number(product.price) * 100
                ),

                product_data: {
                    name: product.title,

                    ...(product.image
                        ? {
                            images: [product.image],
                        }
                        : {}),
                },
            },

            quantity: Number(product.quantity),
        }));

        // ==========================================
        // CREATE STRIPE CHECKOUT SESSION
        // ==========================================

        const session =
            await stripe.checkout.sessions.create({
                customer_email: user.email,

                line_items: lineItems,

                mode: "payment",

                metadata: {
                    orderId: orderId,
                    userId: user.id,
                },

                success_url:
                    `${origin}/price/payment-success?session_id={CHECKOUT_SESSION_ID}`,

                cancel_url:
                    `${origin}/cart`,
            });

        // ==========================================
        // SAVE STRIPE SESSION ID
        // ==========================================

        await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${orderId}/stripe`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    userId: user.id,
                    stripeSessionId: session.id,
                }),
            }
        );

        // ==========================================
        // REDIRECT TO STRIPE
        // ==========================================

        return NextResponse.redirect(
            session.url,
            303
        );
    } catch (error) {
        console.error(
            "Stripe checkout error:",
            error
        );

        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status:
                    error.statusCode || 500,
            }
        );
    }
}