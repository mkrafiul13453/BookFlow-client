"use client";

import {
    ArrowsRotateLeft,
    Box,
    ChevronDown,
    CreditCard,
    PlanetEarth,
    Receipt,
    ShoppingBag,
} from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";

const items = [
    {
        title: "How do I place an order on BookFlow?",
        content:
            "Browse our collection of books, open the details of your preferred book, and add it to your cart. Review your selected books, confirm your delivery information, and proceed to secure checkout to complete your order.",
        icon: <ShoppingBag />,
    },
    {
        title: "Can I modify or cancel my order?",
        content:
            "You can request an order modification or cancellation before your order is processed for delivery. Once the order has been dispatched, changes or cancellations may no longer be available.",
        icon: <Receipt />,
    },
    {
        title: "What payment methods are available?",
        content:
            "BookFlow provides secure online payment through the available checkout options. Your supported payment methods will be displayed during the checkout process before you confirm your purchase.",
        icon: <CreditCard />,
    },
    {
        title: "How is the delivery fee calculated?",
        content:
            "Delivery charges may vary depending on the selected book and delivery information. The applicable delivery fee is clearly displayed during checkout so you can review the complete order cost before payment.",
        icon: <Box />,
    },
    {
        title: "Do you offer international delivery?",
        content:
            "BookFlow is designed to make book ordering simple and convenient. Delivery availability depends on the locations currently supported by our delivery service and the applicable shipping policies.",
        icon: <PlanetEarth />,
    },
    {
        title: "How can I request a refund?",
        content:
            "If you receive a damaged, incorrect, or otherwise eligible book, contact our support team with your order information. Our team will review your request and guide you through the applicable refund process.",
        icon: <ArrowsRotateLeft />,
    },
];

export default function FAQ() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">

            {/* Decorative Background */}
            <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/10" />

            <div className="pointer-events-none absolute -right-32 bottom-20 size-80 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/10" />

            <div className="relative mx-auto max-w-4xl">

                {/* Section Header */}
                <div className="mb-12 text-center">

                    {/* Badge */}
                    <span className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-400">
                        FAQ
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
                        Frequently Asked{" "}
                        <span className="text-sky-600 dark:text-sky-400">
                            Questions
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                        Everything you need to know about ordering books,
                        payments, delivery, cancellations, and refunds on
                        BookFlow.
                    </p>

                    {/* Small Divider */}
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-sky-500" />
                </div>

                {/* FAQ Accordion */}
                <Accordion
                    className="w-full space-y-4"
                    variant="splitted"
                >
                    {items.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:shadow-black/20"
                        >
                            <Accordion.Heading>
                                <Accordion.Trigger className="flex min-h-[72px] w-full items-center gap-4 px-5 py-4 text-left sm:px-6">

                                    {/* Icon */}
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-sky-100 group-hover:ring-sky-200 dark:bg-sky-950 dark:text-sky-400 dark:ring-sky-900 dark:group-hover:bg-sky-900">
                                        <span className="size-5">
                                            {item.icon}
                                        </span>
                                    </span>

                                    {/* Title */}
                                    <span className="flex-1 text-sm font-semibold leading-6 text-slate-800 dark:text-white sm:text-base">
                                        {item.title}
                                    </span>

                                    {/* Arrow */}
                                    <Accordion.Indicator>
                                        <span className="flex size-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-all duration-300 group-hover:bg-sky-50 group-hover:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-sky-950 dark:group-hover:text-sky-400">
                                            <ChevronDown className="size-4" />
                                        </span>
                                    </Accordion.Indicator>

                                </Accordion.Trigger>
                            </Accordion.Heading>

                            <Accordion.Panel>
                                <Accordion.Body className="border-t border-sky-50 px-5 pb-6 pt-4 pl-20 text-sm leading-7 text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:px-6 sm:pl-[86px]">
                                    <div className="max-w-3xl">
                                        {item.content}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>

                {/* Bottom Support Card */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50 px-6 py-6 text-center shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 sm:px-8">

                    <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm ring-1 ring-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:ring-slate-700">
                        <Receipt className="size-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-800 dark:text-white sm:text-lg">
                        Still have questions?
                    </h3>

                    <p className="mx-auto mt-1 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Our support team is ready to help you with your
                        BookFlow orders and account-related questions.
                    </p>

                    <button
                        type="button"
                        className="mt-5 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-sky-700 hover:shadow-md active:scale-95"
                    >
                        Contact Support
                    </button>
                </div>

            </div>
        </section>
    );
}
