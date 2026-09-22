"use client";

import React from "react";
import {
    FaArrowRight,
    FaBookOpen,
    FaCartShopping,
    FaPenNib,
    FaUsers,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const stats = [
    {
        id: 1,
        value: "15,254",
        label: "TOTAL BOOKS",
        icon: FaBookOpen,
        iconColor: "text-blue-500",
        iconBg: "bg-blue-50",
    },
    {
        id: 2,
        value: "1,287",
        label: "AUTHORS",
        icon: FaPenNib,
        iconColor: "text-sky-500",
        iconBg: "bg-sky-50",
    },
    {
        id: 3,
        value: "7,589",
        label: "BOOKS SOLD",
        icon: FaCartShopping,
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-50",
    },
    {
        id: 4,
        value: "97%",
        label: "HAPPY CUSTOMER",
        icon: FaUsers,
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-50",
    },
];

const CommunityStats = () => {
    return (
        <section className="bg-white px-4 py-12 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* COMMUNITY BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        bg-gradient-to-r
                        from-sky-100
                        via-blue-100
                        to-cyan-100
                        px-6
                        py-8
                        shadow-sm

                        dark:from-slate-900
                        dark:via-slate-800
                        dark:to-slate-900

                        sm:px-10
                        sm:py-10

                        lg:px-16
                        lg:py-12
                    "
                >
                    {/* Decorative circles */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="
                            absolute
                            -right-16
                            -top-16
                            h-40
                            w-40
                            rounded-full
                            bg-white/30
                            dark:bg-slate-700/30
                        "
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.35,
                            ease: "easeOut",
                        }}
                        className="
                            absolute
                            -bottom-20
                            right-24
                            h-44
                            w-44
                            rounded-full
                            bg-sky-200/30
                            dark:bg-sky-700/20
                        "
                    />

                    <div
                        className="
                            relative
                            z-10
                            grid
                            items-center
                            gap-8
                            lg:grid-cols-2
                        "
                    >
                        {/* Left Content */}
                        <div className="max-w-xl">

                            <motion.h2
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15,
                                    ease: "easeOut",
                                }}
                                className="
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white

                                    sm:text-4xl

                                    lg:text-[42px]
                                "
                            >
                                Join the community
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.25,
                                    ease: "easeOut",
                                }}
                                className="
                                    mt-3
                                    max-w-lg
                                    text-sm
                                    leading-6
                                    text-slate-600
                                    dark:text-slate-300

                                    sm:text-base
                                "
                            >
                                Enter your email address to receive regular
                                updates, as well as news on upcoming events
                                and special offers.
                            </motion.p>

                            {/* Subscribe Form */}
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.35,
                                    ease: "easeOut",
                                }}
                                onSubmit={(e) => e.preventDefault()}
                                className="
                                    mt-6
                                    flex
                                    w-full
                                    max-w-xl
                                    flex-col
                                    gap-2

                                    sm:flex-row
                                    sm:gap-0
                                "
                            >
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="
                                        h-12
                                        w-full
                                        rounded-full
                                        border
                                        border-white
                                        bg-white
                                        px-5
                                        text-sm
                                        text-gray-700
                                        outline-none
                                        placeholder:text-gray-400
                                        focus:border-sky-300
                                        focus:ring-2
                                        focus:ring-sky-200

                                        dark:border-slate-700
                                        dark:bg-slate-800
                                        dark:text-white
                                        dark:placeholder:text-slate-500
                                        dark:focus:border-sky-500
                                        dark:focus:ring-sky-900

                                        sm:rounded-r-none
                                    "
                                />

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                                        flex
                                        h-12
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-full
                                        bg-sky-500
                                        px-6
                                        text-sm
                                        font-semibold
                                        text-white
                                        shadow-sm
                                        transition-colors
                                        hover:bg-sky-600

                                        sm:-ml-4
                                    "
                                >
                                    Subscribe

                                    <motion.span
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaArrowRight size={12} />
                                    </motion.span>
                                </motion.button>
                            </motion.form>

                        </div>

                        {/* Right Illustration */}
                        <div
                            className="
                                hidden
                                items-center
                                justify-center

                                lg:flex
                            "
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, x: 25 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: "easeOut",
                                }}
                                className="relative"
                            >

                                {/* Main Circle */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        flex
                                        h-44
                                        w-44
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/70
                                        shadow-sm
                                        dark:bg-slate-700/70
                                    "
                                >
                                    <FaBookOpen
                                        className="
                                            text-7xl
                                            text-sky-500
                                        "
                                    />
                                </motion.div>

                                {/* Book Icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.7,
                                        ease: "easeOut",
                                    }}
                                    animate={{ y: [0, 5, 0] }}
                                    className="
                                        absolute
                                        -bottom-4
                                        -right-10
                                        flex
                                        h-20
                                        w-28
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-sky-500
                                        shadow-lg
                                    "
                                >
                                    <FaBookOpen
                                        className="text-3xl text-white"
                                    />
                                </motion.div>

                            </motion.div>
                        </div>

                    </div>
                </motion.div>

                {/* STATISTICS CARDS */}
                <div
                    className="
                        mt-12
                        grid
                        grid-cols-2
                        gap-4

                        sm:mt-14
                        sm:gap-6

                        lg:grid-cols-4
                        lg:gap-6
                    "
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.id}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
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
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeOut",
                                    },
                                }}
                                className="
                                    group
                                    flex
                                    min-h-[130px]
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-5
                                    shadow-sm
                                    transition-shadow
                                    duration-300
                                    hover:shadow-md

                                    dark:border-slate-700
                                    dark:bg-slate-900
                                    dark:hover:shadow-slate-950/40

                                    sm:min-h-[140px]
                                    sm:gap-5
                                    sm:px-6
                                "
                            >

                                {/* Icon */}
                                <motion.div
                                    whileHover={{
                                        rotate: 5,
                                        scale: 1.08,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className={`
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        ${stat.iconBg}
                                        ${stat.iconColor}

                                        dark:bg-slate-800

                                        sm:h-14
                                        sm:w-14
                                    `}
                                >
                                    <Icon className="text-xl sm:text-2xl" />
                                </motion.div>

                                {/* Content */}
                                <div className="min-w-0">

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-slate-900
                                            dark:text-white

                                            sm:text-2xl
                                        "
                                    >
                                        {stat.value}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-[8px]
                                            font-medium
                                            tracking-wide
                                            text-slate-400
                                            dark:text-slate-500

                                            sm:text-[10px]
                                        "
                                    >
                                        {stat.label}
                                    </p>

                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CommunityStats;