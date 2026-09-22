"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
    FaStar,
    FaUser,
    FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { addReview, getReviewsByBook } from "@/lib/api/review";

const ReviewSection = ({ bookId }) => {
    const { data: session } = authClient.useSession();

    const user = session?.user;
    const role = user?.role || "guest";

    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [loading, setLoading] = useState(false);

    // Load reviews
    useEffect(() => {
        const loadReviews = async () => {
            const result = await getReviewsByBook(bookId);

            if (result.success) {
                setReviews(result.reviews);
            }
        };

        if (bookId) {
            loadReviews();
        }
    }, [bookId]);

    // Submit review
    const handleSubmitReview = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login to write a review");
            return;
        }

        if (role === "admin" || role === "librarian") {
            toast.error("You are not allowed to write a review");
            return;
        }

        if (!reviewText.trim()) {
            toast.error("Please write something");
            return;
        }

        setLoading(true);

        const result = await addReview({
            bookId,
            userId: user.id,
            userName: user.name || "Anonymous",
            userImage: user.image || "",
            review: reviewText.trim(),
        });
        if (result.success) {
            toast.success("Review added successfully");

            setReviews((prev) => [
                result.review,
                ...prev,
            ]);

            setReviewText("");
        } else {
            toast.error(
                result.message || "Failed to add review"
            );
        }

        setLoading(false);
    };

    return (
        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

            {/* Header */}
            <div className="border-b border-gray-200 p-6 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Customer Reviews
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    See what readers are saying about this book
                </p>
            </div>

            {/* Review Form - Only Normal User */}
            {role === "user" && (
                <div className="border-b border-gray-200 p-6 dark:border-gray-800">

                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Write a Review
                    </h3>

                    <form onSubmit={handleSubmitReview}>

                        <textarea
                            value={reviewText}
                            onChange={(e) =>
                                setReviewText(e.target.value)
                            }
                            placeholder="Share your thoughts about this book..."
                            rows={4}
                            className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 p-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-900"
                        />

                        <div className="mt-3 flex justify-end">

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <FaPaperPlane />

                                {loading
                                    ? "Submitting..."
                                    : "Submit Review"}
                            </button>

                        </div>

                    </form>
                </div>
            )}

            {/* Reviews */}
            <div className="p-6">

                {reviews.length === 0 ? (
                    <div className="py-10 text-center">

                        <FaStar className="mx-auto mb-3 text-3xl text-gray-300" />

                        <p className="text-gray-500 dark:text-gray-400">
                            No reviews yet.
                        </p>

                        {role === "user" && (
                            <p className="mt-1 text-sm text-gray-400">
                                Be the first person to review this book.
                            </p>
                        )}

                    </div>
                ) : (
                    <div className="space-y-5">

                        {reviews.map((item) => (
                            <div
                                key={item._id}
                                className="rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-800/50"
                            >

                                <div className="flex items-start gap-3">

                                    {/* User Image */}
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">

                                        {item.userImage ? (
                                            <img
                                                src={item.userImage}
                                                alt={item.userName}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <FaUser />
                                        )}

                                    </div>

                                    {/* User Info */}
                                    <div className="min-w-0 flex-1">

                                        <div className="flex items-center justify-between gap-3">

                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                {item.userName}
                                            </h4>

                                            <div className="flex text-yellow-400">
                                                <FaStar />
                                            </div>

                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            {item.review}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </section>
    );
};

export default ReviewSection;