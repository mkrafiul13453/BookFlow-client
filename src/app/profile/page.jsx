"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import {
    FaUser,
    FaEnvelope,
    FaIdBadge,
    FaShieldAlt,
    FaCalendarAlt,
    FaClock,
    FaImage,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    console.log("Logged in user:", user);

    // Loading state
    if (isPending) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

                    <p className="mt-4 text-sm text-gray-500">
                        Loading profile...
                    </p>
                </div>
            </div>
        );
    }

    // User is not logged in
    if (!user) {
        return (
            <div className="flex min-h-[500px] items-center justify-center px-4">
                <div className="rounded-2xl border bg-white p-8 text-center shadow-sm dark:bg-gray-900">
                    <FaUser className="mx-auto text-4xl text-gray-400" />

                    <h2 className="mt-4 text-xl font-bold">
                        No Profile Found
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Please login to view your profile.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 md:p-6">

            {/* Main Container */}
            <div className="mx-auto max-w-5xl">

                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        My Profile
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage and view your account information
                    </p>
                </div>

                {/* Profile Header */}
                <div className="overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

                    {/* Cover */}
                    <div className="h-32 bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-600 md:h-40" />

                    {/* Profile Information */}
                    <div className="px-5 pb-6 md:px-8">

                        {/* Avatar */}
                        <div className="-mt-16 mb-5 flex flex-col items-start md:-mt-20 md:flex-row md:items-end md:justify-between">

                            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end">

                                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-lg dark:border-gray-900 dark:bg-gray-800">

                                    {user.image ? (
                                        <img
                                            src={user.image}
                                            alt={user.name || "Profile"}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <FaUser className="text-5xl text-gray-400" />
                                    )}

                                </div>

                                <div className="pb-1">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {user.name || "User"}
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {user.email}
                                    </p>
                                </div>

                            </div>

                            {/* Role */}
                            <div className="mt-4 md:mt-0">
                                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold capitalize text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                                    <FaShieldAlt />
                                    {user.role || "User"}
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Account Information */}
                <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8">

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Account Information
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Your personal and account details
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Name */}
                        <ProfileInfo
                            icon={<FaUser />}
                            label="Full Name"
                            value={user.name || "Not available"}
                        />

                        {/* Email */}
                        <ProfileInfo
                            icon={<FaEnvelope />}
                            label="Email Address"
                            value={user.email || "Not available"}
                        />

                        {/* User ID */}
                        <ProfileInfo
                            icon={<FaIdBadge />}
                            label="User ID"
                            value={user.id || "Not available"}
                        />

                        {/* Role */}
                        <ProfileInfo
                            icon={<FaShieldAlt />}
                            label="Account Role"
                            value={user.role || "User"}
                            capitalize
                        />

                        {/* Email Verification */}
                        <ProfileInfo
                            icon={
                                user.emailVerified ? (
                                    <FaCheckCircle />
                                ) : (
                                    <FaTimesCircle />
                                )
                            }
                            label="Email Verification"
                            value={
                                user.emailVerified
                                    ? "Verified"
                                    : "Not Verified"
                            }
                        />

                        {/* Created At */}
                        <ProfileInfo
                            icon={<FaCalendarAlt />}
                            label="Account Created"
                            value={
                                user.createdAt
                                    ? new Date(
                                        user.createdAt
                                    ).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )
                                    : "Not available"
                            }
                        />

                        {/* Updated At */}
                        <ProfileInfo
                            icon={<FaClock />}
                            label="Last Updated"
                            value={
                                user.updatedAt
                                    ? new Date(
                                        user.updatedAt
                                    ).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )
                                    : "Not available"
                            }
                        />

                        {/* Profile Image */}
                        <ProfileInfo
                            icon={<FaImage />}
                            label="Profile Image"
                            value={
                                user.image
                                    ? user.image
                                    : "No profile image"
                            }
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

const ProfileInfo = ({
    icon,
    label,
    value,
    capitalize = false,
}) => {
    return (
        <div className="flex min-w-0 items-start gap-4 rounded-xl border bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950">

            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                {icon}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {label}
                </p>

                <p
                    className={`mt-1 break-words text-sm font-semibold text-gray-900 dark:text-white ${capitalize ? "capitalize" : ""
                        }`}
                >
                    {value}
                </p>
            </div>

        </div>
    );
};

export default ProfilePage;