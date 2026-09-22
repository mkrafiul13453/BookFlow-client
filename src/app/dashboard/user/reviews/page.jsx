"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    FaBookOpen,
    FaCalendarAlt,
    FaPen,
    FaStar,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { getReviewsByUser } from "@/lib/api/review";

const UserReviewPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserReviews = async () => {
            if (!user?.id) {
                setLoading(false);
                return;
            }

            const result = await getReviewsByUser(user.id);

            if (result.success) {
                setReviews(result.reviews);
            }

            setLoading(false);
        };

        loadUserReviews();
    }, [user?.id]);

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-500 dark:text-gray-400">
                Loading your reviews...
            </div>
        );
    }

    if (!user) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Please log in first
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Log in to see the reviews you have written.
                </p>
            </div>
        );
    }

    return (
        <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="mb-8">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    MY ACTIVITY
                </p>

                <h1 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                    My Reviews
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    You have written {reviews.length} review
                    {reviews.length !== 1 ? "s" : ""}.
                </p>
            </div>

            {reviews.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
                    <FaStar className="mx-auto mb-4 text-4xl text-yellow-400" />

                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        No reviews yet
                    </h2>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Your submitted book reviews will appear here.
                    </p>

                    <Link
                        href="/books"
                        className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Browse Books
                    </Link>
                </div>
            ) : (
                <div className="grid gap-5 md:grid-cols-2">
                    {reviews.map((item) => (
                        <article
                            key={item._id}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                                    <FaBookOpen className="text-lg" />
                                </div>

                                <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                                    <FaStar className="mr-1 inline" />
                                    Review
                                </span>
                            </div>

                            <h2 className="mt-5 text-lg font-semibold text-gray-800 dark:text-white">
                                {item.bookName || "Book name unavailable"}
                            </h2>

                            <p className="mt-3 line-clamp-4 leading-7 text-gray-600 dark:text-gray-400">
                                “{item.review}”
                            </p>

                            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    {item.createdAt
                                        ? new Intl.DateTimeFormat("bn-BD", {
                                            dateStyle: "medium",
                                        }).format(new Date(item.createdAt))
                                        : "Date unavailable"}
                                </span>

                                <Link
                                    href={`/books/${item.bookId}`}
                                    className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    <FaPen />
                                    View Book
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default UserReviewPage;