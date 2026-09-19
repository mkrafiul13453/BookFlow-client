"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaBookOpen,
    FaCartShopping,
    FaRecycle,
    FaTruckFast,
} from "react-icons/fa6";

const features = [
    {
        id: 1,
        title: "Selection",
        description:
            "We have more than 13 million titles to choose from, from the earliest board books to the all-time classics.",
        icon: FaBookOpen,
    },
    {
        id: 2,
        title: "Purchasing Power",
        description:
            "With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles.",
        icon: FaCartShopping,
    },
    {
        id: 3,
        title: "Used & New books",
        description:
            "If there is no demand for a book, we will donate it to charity, or we'll recycle it.",
        icon: FaRecycle,
    },
    {
        id: 4,
        title: "Shipping & More",
        description:
            "When you've found the books you want we'll ship qualifying orders to your door for FREE.",
        icon: FaTruckFast,
    },
];

const Features = () => {
    return (
        <section className="bg-white py-12 dark:bg-slate-950 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div
                    className="
            grid
            grid-cols-2
            gap-x-4
            gap-y-10

            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-12

            lg:grid-cols-4
            lg:gap-8
          "
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{
                                    opacity: 0,
                                    y: 35,
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
                                    duration: 0.6,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="
                  group
                  mx-auto
                  w-full
                  max-w-[180px]
                  text-center
                "
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: -3,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 12,
                                    }}
                                    className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl

                    bg-sky-50
                    text-sky-500

                    shadow-sm

                    transition-colors
                    duration-300

                    group-hover:bg-sky-500
                    group-hover:text-white

                    dark:bg-sky-950
                    dark:text-sky-400
                    dark:group-hover:bg-sky-500
                    dark:group-hover:text-white

                    sm:h-20
                    sm:w-20

                    lg:h-24
                    lg:w-24
                  "
                                >
                                    <Icon
                                        className="
                      text-3xl
                      sm:text-4xl
                      lg:text-5xl
                    "
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="
                    mt-4
                    text-sm
                    font-bold
                    leading-5
                    tracking-tight
                    text-gray-900
                    dark:text-white

                    sm:mt-5
                    sm:text-lg

                    lg:mt-6
                    lg:text-xl
                  "
                                >
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                    mx-auto
                    mt-2
                    max-w-[160px]
                    text-[11px]
                    leading-5
                    text-gray-500
                    dark:text-slate-400

                    sm:mt-3
                    sm:max-w-[230px]
                    sm:text-sm
                    sm:leading-6

                    lg:max-w-[270px]
                    lg:text-[15px]
                  "
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Features;