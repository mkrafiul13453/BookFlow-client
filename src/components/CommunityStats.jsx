"use client";

import React from "react";
import {
    FaArrowRight,
    FaBookOpen,
    FaCartShopping,
    FaPenNib,
    FaUsers,
} from "react-icons/fa6";

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
        <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* =========================
                    COMMUNITY BANNER
                ========================== */}
                <div
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

                        sm:px-10
                        sm:py-10

                        lg:px-16
                        lg:py-12
                    "
                >
                    {/* Decorative circles */}
                    <div
                        className="
                            absolute
                            -right-16
                            -top-16
                            h-40
                            w-40
                            rounded-full
                            bg-white/30
                        "
                    />

                    <div
                        className="
                            absolute
                            -bottom-20
                            right-24
                            h-44
                            w-44
                            rounded-full
                            bg-sky-200/30
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

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900

                                    sm:text-4xl

                                    lg:text-[42px]
                                "
                            >
                                Join the community
                            </h2>

                            <p
                                className="
                                    mt-3
                                    max-w-lg
                                    text-sm
                                    leading-6
                                    text-slate-600

                                    sm:text-base
                                "
                            >
                                Enter your email address to receive regular
                                updates, as well as news on upcoming events
                                and special offers.
                            </p>


                            {/* Subscribe Form */}
                            <form
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

                                        sm:rounded-r-none
                                    "
                                />

                                <button
                                    type="submit"
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

                                    <FaArrowRight size={12} />
                                </button>
                            </form>

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
                            <div className="relative">

                                {/* Main Circle */}
                                <div
                                    className="
                                        flex
                                        h-44
                                        w-44
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/70
                                        shadow-sm
                                    "
                                >
                                    <FaBookOpen
                                        className="
                                            text-7xl
                                            text-sky-500
                                        "
                                    />
                                </div>

                                {/* Book Icon */}
                                <div
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
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                {/* =========================
                    STATISTICS CARDS
                ========================== */}
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

                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
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

                                    sm:min-h-[140px]
                                    sm:gap-5
                                    sm:px-6
                                "
                            >

                                {/* Icon */}
                                <div
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

                                        sm:h-14
                                        sm:w-14
                                    `}
                                >
                                    <Icon className="text-xl sm:text-2xl" />
                                </div>


                                {/* Content */}
                                <div className="min-w-0">

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-slate-900

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

                                            sm:text-[10px]
                                        "
                                    >
                                        {stat.label}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default CommunityStats;