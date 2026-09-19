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
        title: "How do I place an order?",
        content:
            "Browse the available books, open the book details, and add your selected books to the cart. Review your order and proceed to checkout to complete your purchase.",
        icon: <ShoppingBag />,
    },
    {
        title: "Can I modify or cancel my order?",
        content:
            "You can request changes or cancellation before your order has been processed for delivery. Once the order has been dispatched, changes may no longer be possible.",
        icon: <Receipt />,
    },
    {
        title: "What payment methods are available?",
        content:
            "BookFlow supports secure payment options for completing your purchase. Available payment methods may vary depending on your checkout configuration.",
        icon: <CreditCard />,
    },
    {
        title: "How much is the delivery fee?",
        content:
            "Delivery charges depend on the selected book and your delivery location. The applicable delivery fee will be shown during the checkout process before you confirm your order.",
        icon: <Box />,
    },
    {
        title: "Do you offer international delivery?",
        content:
            "BookFlow is designed to make book ordering convenient. Delivery availability depends on the supported delivery locations and current shipping policies.",
        icon: <PlanetEarth />,
    },
    {
        title: "How can I request a refund?",
        content:
            "If you receive a damaged or incorrect book, please contact our support team with your order information. Our team will review your request and guide you through the applicable refund process.",
        icon: <ArrowsRotateLeft />,
    },
];

export default function FAQ() {
    return (
        <section className="w-full bg-gradient-to-b from-sky-50/70 via-white to-white px-4 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                {/* Section Header */}
                <div className="mb-10 text-center">

                    <span className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-400">
                        FAQ
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                        Find quick answers to common questions about ordering books,
                        delivery, payments, and refunds.
                    </p>

                </div>

                {/* FAQ Accordion */}
                <Accordion
                    className="w-full space-y-3"
                    variant="splitted"
                >
                    {items.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:shadow-slate-950/40"
                        >
                            <Accordion.Heading>

                                <Accordion.Trigger className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-left sm:px-6">

                                    {/* Icon */}
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 dark:bg-sky-950 dark:text-sky-400 dark:ring-sky-900">
                                        <span className="size-5">
                                            {item.icon}
                                        </span>
                                    </span>

                                    {/* Title */}
                                    <span className="flex-1 text-sm font-semibold text-slate-800 dark:text-white sm:text-base">
                                        {item.title}
                                    </span>

                                    {/* Arrow */}
                                    <Accordion.Indicator>
                                        <span className="flex size-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                            <ChevronDown className="size-4" />
                                        </span>
                                    </Accordion.Indicator>

                                </Accordion.Trigger>
                            </Accordion.Heading>

                            <Accordion.Panel>
                                <Accordion.Body className="border-t border-sky-50 px-5 pb-5 pt-4 pl-[76px] text-sm leading-7 text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:px-6 sm:pl-[82px]">
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Panel>

                        </Accordion.Item>
                    ))}
                </Accordion>

                {/* Bottom Note */}
                <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/70 px-5 py-4 text-center dark:border-slate-700 dark:bg-slate-900">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Still have questions?{" "}
                        <span className="font-semibold text-sky-600 dark:text-sky-400">
                            Our support team is here to help.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}