"use client";

import Image from "next/image";
import {
    BookOpen,
    Heart,
    Truck,
    Users,
} from "lucide-react";

const About = () => {
    return (
        <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Left - Book Image */}
                    <div className="relative">

                        {/* Decorative Shape */}
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-sky-100 dark:bg-sky-950 sm:h-32 sm:w-32" />

                        <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-sky-50 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                            <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px]">
                                <Image
                                    src="/banner/about.png"
                                    alt="BookFlow Books"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:-right-5">
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
                        </div>

                    </div>

                    {/* Right - Content */}
                    <div className="pt-5 lg:pt-0">

                        {/* Badge */}
                        <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-600 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-400">
                            About BookFlow
                        </span>

                        {/* Heading */}
                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Making Book Shopping
                            <span className="block text-sky-600 dark:text-sky-400">
                                Simple & Convenient
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            BookFlow is a modern online book platform established in{" "}
                            <span className="font-semibold text-slate-800 dark:text-white">
                                2026
                            </span>{" "}
                            with a simple goal — to make discovering and buying books
                            easier, faster, and more convenient for everyone.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            Since our beginning, we have focused on building strong and
                            trustworthy relationships with our customers. We believe that
                            excellent service is not only about delivering books, but also
                            about creating a reliable and enjoyable experience for every
                            reader.
                        </p>

                        {/* Features */}
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">

                            {/* Feature 1 */}
                            <div className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900">
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
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900">
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
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-3 rounded-2xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-700 dark:bg-slate-900 sm:col-span-2">
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
                            </div>

                        </div>

                        {/* Mission */}
                        <div className="mt-7 border-l-4 border-sky-400 pl-4">
                            <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">
                                Our mission is to connect people with the books they love
                                while providing a service they can trust.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;