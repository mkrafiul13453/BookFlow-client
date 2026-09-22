"use client";

import Image from "next/image";
import {
    BookOpen,
    Heart,
    Truck,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Left - Book Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                    >

                        {/* Decorative Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-sky-100 dark:bg-sky-950 sm:h-32 sm:w-32"
                        />

                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative overflow-hidden rounded-3xl border border-sky-100 bg-sky-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                        >
                            <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px]">
                                <Image
                                    src="/banner/about.png"
                                    alt="BookFlow Books"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -4 }}
                            className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:-right-5"
                        >
                            <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                                <BookOpen className="size-5" />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">
                                    BookFlow
                                </p>

                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Your trusted book partner
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="pt-5 lg:pt-0"
                    >

                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-600 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-400"
                        >
                            About BookFlow
                        </motion.span>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                        >
                            Making Book Shopping
                            <span className="block text-sky-600 dark:text-sky-400">
                                Simple & Convenient
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
                        >
                            BookFlow is a modern online book platform established in{" "}
                            <span className="font-semibold text-slate-800 dark:text-white">
                                2026
                            </span>{" "}
                            with a simple goal — to make discovering and buying books
                            easier, faster, and more convenient for everyone.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                            }}
                            className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
                        >
                            Since our beginning, we have focused on building strong and
                            trustworthy relationships with our customers. We believe that
                            excellent service is not only about delivering books, but also
                            about creating a reliable and enjoyable experience for every
                            reader.
                        </motion.p>

                        {/* Features */}
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">

                            {/* Feature 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.35,
                                }}
                                whileHover={{ y: -4 }}
                                className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm dark:bg-slate-800 dark:text-sky-400">
                                    <Users className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                                        Trusted Relationship
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        We build long-term relationships with our customers
                                        through reliable service.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.45,
                                }}
                                whileHover={{ y: -4 }}
                                className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm dark:bg-slate-800 dark:text-sky-400">
                                    <Truck className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                                        Improved Delivery
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        Our delivery service is designed to make every order
                                        smooth and convenient.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.55,
                                }}
                                whileHover={{ y: -4 }}
                                className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900 sm:col-span-2"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm dark:bg-slate-800 dark:text-sky-400">
                                    <Heart className="size-5" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                                        Customer First
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                        We always prioritize customer satisfaction and strive
                                        to provide a friendly and dependable experience.
                                    </p>
                                </div>
                            </motion.div>

                        </div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.65,
                            }}
                            className="mt-7 border-l-4 border-sky-400 pl-4"
                        >
                            <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                                Our mission is to connect people with the books they love
                                while providing a service they can trust.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;