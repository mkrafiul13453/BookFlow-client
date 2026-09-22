"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaBookOpen,
    FaUsers,
    FaTruckFast,
    FaShieldHalved,
    FaHeart,
    FaMagnifyingGlass,
    FaArrowRight,
    FaCheck,
} from "react-icons/fa6";

const values = [
    {
        icon: FaBookOpen,
        title: "Love for Books",
        description:
            "We believe every book has the power to introduce a new idea, perspective, or story into someone's life.",
    },
    {
        icon: FaUsers,
        title: "Reader First",
        description:
            "Everything at BookFlow is designed around making the reading and book-buying experience simple and enjoyable.",
    },
    {
        icon: FaShieldHalved,
        title: "Trust & Security",
        description:
            "We focus on providing a reliable platform with secure payments and transparent order management.",
    },
    {
        icon: FaHeart,
        title: "Built with Care",
        description:
            "From discovering a book to receiving it, every part of the BookFlow experience is designed with care.",
    },
];

const features = [
    "Explore books across multiple categories",
    "Search and filter books effortlessly",
    "Secure online payment through Stripe",
    "Track your order and delivery status",
    "Save delivered books to your reading list",
    "Manage your orders from a personal dashboard",
];

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

            {/* =====================================================
                HERO SECTION
            ====================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">

                {/* Decorative background */}
                <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20" />

                <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm dark:border-sky-800 dark:bg-slate-900 dark:text-sky-400">
                                <FaBookOpen />
                                <span>Welcome to BookFlow</span>
                            </div>

                            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                                Where Every Book
                                <span className="block text-sky-600 dark:text-sky-400">
                                    Finds Its Reader.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                                BookFlow is a modern online book platform
                                created to make discovering, ordering, and
                                managing books simple, convenient, and enjoyable.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                                <Link
                                    href="/books"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
                                >
                                    Explore Books
                                    <FaArrowRight className="text-xs" />
                                </Link>

                                <Link
                                    href="/how-it-works"
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                                >
                                    How It Works
                                </Link>

                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="relative"
                        >
                            <div className="relative mx-auto max-w-md">

                                {/* Main card */}
                                <div className="rounded-3xl border border-sky-100 bg-white p-7 shadow-2xl shadow-sky-100/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                            <FaBookOpen />
                                        </div>

                                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-950 dark:text-green-400">
                                            Reader First
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-slate-900 dark:text-white">
                                        Your Reading Journey
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                        Discover meaningful stories, explore
                                        new ideas, and build your personal
                                        reading collection with BookFlow.
                                    </p>

                                    {/* Progress */}
                                    <div className="mt-7">
                                        <div className="mb-2 flex justify-between text-xs font-medium">
                                            <span className="text-slate-500 dark:text-slate-400">
                                                Reading Experience
                                            </span>
                                            <span className="text-sky-600 dark:text-sky-400">
                                                100%
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                            <div className="h-full w-full rounded-full bg-sky-500" />
                                        </div>
                                    </div>

                                    {/* Mini features */}
                                    <div className="mt-7 grid grid-cols-3 gap-3">

                                        <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
                                            <FaMagnifyingGlass className="mx-auto text-sky-500" />
                                            <p className="mt-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                                                Discover
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
                                            <FaBookOpen className="mx-auto text-sky-500" />
                                            <p className="mt-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                                                Read
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
                                            <FaHeart className="mx-auto text-sky-500" />
                                            <p className="mt-2 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                                                Enjoy
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Floating card */}
                                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                            <FaTruckFast />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold text-slate-900 dark:text-white">
                                                Easy Delivery
                                            </p>

                                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                                From cart to doorstep
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                INTRODUCTION
            ====================================================== */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                                About BookFlow
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                A simpler way to discover and order books.
                            </h2>

                            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                                BookFlow is built around a simple idea:
                                finding and ordering a book should be an
                                enjoyable experience rather than a complicated
                                process.
                            </p>

                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                Our platform brings book discovery, shopping,
                                secure payments, delivery management, and
                                personal reading collections together in one
                                convenient place.
                            </p>

                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                Whether you are looking for a timeless classic,
                                learning something new, or searching for your
                                next favorite story, BookFlow is designed to
                                help you find it.
                            </p>
                        </motion.div>

                        {/* Feature list */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-9"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                Everything in one place
                            </h3>

                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                Designed to make every step of your book
                                journey easier.
                            </p>

                            <div className="mt-7 space-y-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                            <FaCheck className="text-xs" />
                                        </span>

                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                VALUES
            ====================================================== */}
            <section className="bg-white px-4 py-20 dark:bg-slate-900/50 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                            What We Value
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                            Built around readers
                        </h2>

                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            The principles that shape the BookFlow experience.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-800 dark:hover:bg-slate-800"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-950 dark:text-sky-400 dark:group-hover:bg-sky-600 dark:group-hover:text-white">
                                        <Icon />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
                                        {value.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* =====================================================
                MISSION SECTION
            ====================================================== */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="relative overflow-hidden rounded-3xl bg-sky-600 px-6 py-14 sm:px-12 lg:px-20">

                        {/* Decorations */}
                        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
                        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-white/10" />

                        <div className="relative grid items-center gap-10 lg:grid-cols-2">

                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-sky-100">
                                    Our Mission
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                                    Making books more accessible, one reader at a time.
                                </h2>

                                <p className="mt-5 max-w-xl leading-7 text-sky-100">
                                    We want to create a place where readers can
                                    easily discover books they love and enjoy
                                    a smooth experience from their first click
                                    to the moment their order arrives.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                                    <FaBookOpen className="text-2xl text-white" />
                                    <p className="mt-4 text-sm font-semibold text-white">
                                        Discover
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-sky-100">
                                        Find books that match your interests.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                                    <FaUsers className="text-2xl text-white" />
                                    <p className="mt-4 text-sm font-semibold text-white">
                                        Connect
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-sky-100">
                                        Build your personal reading journey.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                                    <FaTruckFast className="text-2xl text-white" />
                                    <p className="mt-4 text-sm font-semibold text-white">
                                        Receive
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-sky-100">
                                        Get your selected books delivered.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                                    <FaHeart className="text-2xl text-white" />
                                    <p className="mt-4 text-sm font-semibold text-white">
                                        Enjoy
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-sky-100">
                                        Keep building your reading collection.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="px-4 pb-20 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                        <FaBookOpen />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                        Your next great read is waiting.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
                        Explore the BookFlow collection and discover a book
                        that belongs on your reading list.
                    </p>

                    <Link
                        href="/books"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
                    >
                        Start Exploring
                        <FaArrowRight className="text-xs" />
                    </Link>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;
