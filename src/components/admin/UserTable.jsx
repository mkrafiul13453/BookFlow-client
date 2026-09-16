"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { deleteUser } from "@/lib/api/user";

const UserTable = ({ allUser }) => {
    const [users, setUsers] = useState(allUser);

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        const result = await deleteUser(userId);

        if (result.deletedCount > 0) {
            setUsers((previousUsers) =>
                previousUsers.filter((user) => user._id !== userId)
            );

            alert("User deleted successfully!");
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    All Users
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage all registered users of your library
                </p>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">

                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                User
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Name
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Role
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Email
                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {users?.map((user) => (
                            <tr
                                key={user._id}
                                className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                            >
                                {/* Avatar */}
                                <td className="px-6 py-4">
                                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-gray-100 dark:border-gray-700">
                                        <Image
                                            src={
                                                user.image ||
                                                "/default-avatar.png"
                                            }
                                            alt={user.name || "User"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </td>

                                {/* Name */}
                                <td className="px-6 py-4">
                                    <p className="whitespace-nowrap font-medium text-gray-800 dark:text-white">
                                        {user.name}
                                    </p>
                                </td>

                                {/* Role */}
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${user.role === "admin"
                                                ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                                                : user.role === "librarian"
                                                    ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                                                    : "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>

                                {/* Email */}
                                <td className="px-6 py-4">
                                    <p className="whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                                        {user.email}
                                    </p>
                                </td>

                                {/* Delete */}
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() =>
                                            handleDelete(user._id)
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                                        title="Delete User"
                                    >
                                        <FaTrash className="text-sm" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {(!users || users.length === 0) && (
                <div className="px-6 py-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        No users found.
                    </p>
                </div>
            )}
        </div>
    );
};

export default UserTable;