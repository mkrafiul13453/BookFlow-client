import React from "react";
import { FaBookOpen, FaUsers, FaUserShield } from "react-icons/fa";

const AdminUserStats = ({ allUser }) => {
    const users = Array.isArray(allUser) ? allUser : [];

    const librarianCount = users.filter(
        (user) => user.role === "librarian"
    ).length;

    const userCount = users.filter(
        (user) => user.role === "user"
    ).length;

    const adminCount = users.filter(
        (user) => user.role === "admin"
    ).length;

    const stats = [
        {
            title: "Total Librarians",
            count: librarianCount,
            icon: <FaBookOpen />,
            description: "Registered librarians",
            iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
            iconColor: "text-emerald-600 dark:text-emerald-400",
        },
        {
            title: "Total Users",
            count: userCount,
            icon: <FaUsers />,
            description: "Registered users",
            iconBg: "bg-violet-100 dark:bg-violet-500/10",
            iconColor: "text-violet-600 dark:text-violet-400",
        },
        {
            title: "Total Admins",
            count: adminCount,
            icon: <FaUserShield />,
            description: "System administrators",
            iconBg: "bg-amber-100 dark:bg-amber-500/10",
            iconColor: "text-amber-600 dark:text-amber-400",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        dark:border-gray-800
                        dark:bg-gray-900
                    "
                >
                    {/* Top subtle hover effect */}
                    <div
                        className="
                            absolute
                            -right-10
                            -top-10
                            h-24
                            w-24
                            rounded-full
                            bg-gray-100
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:scale-150
                            group-hover:opacity-50
                            dark:bg-gray-800
                        "
                    />

                    <div className="relative flex items-start justify-between">
                        {/* Text */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                {stat.title}
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
                                {stat.count}
                            </h2>

                            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                                {stat.description}
                            </p>
                        </div>

                        {/* Icon */}
                        <div
                            className={`
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                text-xl
                                transition-transform
                                duration-300
                                group-hover:scale-110
                                ${stat.iconBg}
                                ${stat.iconColor}
                            `}
                        >
                            {stat.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminUserStats;