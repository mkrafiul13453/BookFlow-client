"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaBookOpen,
    FaCartShopping,
    FaCreditCard,
    FaTruckFast,
    FaShieldHalved,
    FaClock,
    FaArrowRight,
    FaCheck,
} from "react-icons/fa6";

const steps = [
    {
        number: "01",
        icon: FaBookOpen,
        title: "Browse Your Favorite Books",
        description:
            "Explore our growing collection of fiction, science, technology, history, biography, children's books, and more. Use search, categories, and price sorting to quickly find what you need.",
    },
    {
        number: "02",
        icon: FaCartShopping,
        title: "Add Books to Your Cart",
        description:
            "Found something interesting? Add your favorite books to your cart and review your selected items before placing your order.",
    },
    {
        number: "03",
        icon: FaCreditCard,
        title: "Pay Securely",
        description:
            "Complete your purchase through our secure Stripe-powered payment system. Your payment information is handled securely throughout the checkout process.",
    },
    {
        number: "04",
        icon: FaTruckFast,
        title: "Get Your Books Delivered",
        description:
            "Once your payment is confirmed, your order is processed for delivery. Track your order status and receive your books at your doorstep.",
    },
];

const features = [
    {
        icon: FaShieldHalved,
        title: "Secure Payments",
        description:
            "Your transactions are protected through secure payment processing.",
    },
    {
        icon: FaClock,
        title: "Simple & Convenient",
        description:
            "Find, order, and manage your books from one easy-to-use platform.",
    },
    {
        icon: FaBookOpen,
        title: "Growing Collection",
        description:
            "Discover books across multiple categories for every kind of reader.",
    },
];

const HowItWorksPage = () => {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">

                {/* Background decorations */}
                <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />

                <div className="relative mx-auto max-w-5xl text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm dark:border-sky-800 dark:bg-slate-900 dark:text-sky-400"
                    >
                        <FaBookOpen />
                        <span>Simple. Secure. Convenient.</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
                    >
                        How{" "}
                        <span className="text-sky-600 dark:text-sky-400">
                            BookFlow
                        </span>{" "}
                        Works
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg"
                    >
                        Discover your next great read, place your order,
                        complete your payment, and get your favorite books
                        delivered — all through a simple and seamless experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
                    >
                        {/* <Link
                            href="/books"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
                        >
                            Browse Books
                            <FaArrowRight className="text-xs" />
                        </Link> */}

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ================= PROCESS SECTION ================= */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    {/* Section heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                            The Process
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            From Discovery to Delivery
                        </h2>

                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            Getting your favorite books has never been easier.
                            Follow these four simple steps.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative mt-16">

                        {/* Connecting line */}
                        <div className="absolute left-[12.5%] right-[12.5%] top-14 hidden h-px bg-sky-200 dark:bg-sky-900 lg:block" />

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                            {steps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.number}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="relative"
                                    >
                                        <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:shadow-none">

                                            {/* Icon */}
                                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-8 ring-white transition group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-950 dark:text-sky-400 dark:ring-slate-900 dark:group-hover:bg-sky-600 dark:group-hover:text-white">
                                                <Icon className="text-xl" />
                                            </div>

                                            {/* Number */}
                                            <span className="mt-7 block text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400">
                                                STEP {step.number}
                                            </span>

                                            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHY BOOKFLOW ================= */}
            <section className="bg-white px-4 py-20 dark:bg-slate-900/50 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                                Why BookFlow?
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Everything you need for a better reading journey.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                                BookFlow is designed to make discovering and
                                ordering books simple. From finding the right
                                title to receiving it at your doorstep, every
                                part of the experience is built around
                                convenience.
                            </p>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Easy book discovery and filtering",
                                    "Secure online payment",
                                    "Simple order management",
                                    "Personal reading list",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                            <FaCheck className="text-xs" />
                                        </span>

                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right */}
                        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">

                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{
                                            opacity: 0,
                                            x: 30,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                                    >
                                        <div className="flex items-start gap-4">

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                                <Icon />
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-slate-900 dark:text-white">
                                                    {feature.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-sky-600 px-6 py-14 text-center shadow-xl shadow-sky-600/20 sm:px-12"
                >
                    {/* Decorations */}
                    <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10" />
                    <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-white/10" />

                    <div className="relative">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur-sm">
                            <FaBookOpen />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                            Ready to find your next favorite book?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-sky-100 sm:text-base">
                            Explore the BookFlow collection and start your
                            reading journey today.
                        </p>

                        <Link
                            href="/books"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-sky-700 shadow-lg transition hover:bg-sky-50"
                        >
                            Explore Books
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default HowItWorksPage;