"use client";

import { addToCart } from "@/lib/api/cart";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import {
    FaBookOpen,
    FaUser,
    FaTag,
    FaDollarSign,
    FaTruck,
    FaShoppingCart,
    FaBolt,
    FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const BookDetailsPage = ({ book }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const role = user?.role || "user";
    console.log(role);


    const handleAddToCart = async () => {
        if (!session?.user) {
            toast.error("Please login to add to cart");
            redirect("/login");
            return;
        }

        try {
            const result = await addToCart({
                userId: session.user.id,
                bookId: book._id,
            });

            if (result.success) {
                toast.success("Book added to cart");
            } else {
                toast.error("Failed to add book to cart");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to add book to cart");
        }
    };


    if (!book) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center px-4">
                <div className="text-center">
                    <FaBookOpen className="mx-auto mb-4 text-5xl text-gray-400" />

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Book Not Found
                    </h2>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        The book you are looking for does not exist.
                    </p>
                </div>
            </div>
        );
    }

    const {
        title,
        author,
        description,
        price,
        deliveryFee,
        category,
        image,
    } = book;

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl">

                {/* Main Details Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ================= IMAGE SECTION ================= */}
                        <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-6 dark:bg-gray-800/50 sm:p-10">

                            <div className="relative h-[420px] w-full max-w-[320px]">

                                {/* Category */}
                                <div className="absolute left-0 top-0 z-10 flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                                    <FaTag />
                                    {category}
                                </div>

                                <img
                                    src={image}
                                    alt={title}
                                    className="h-full w-full object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>

                        {/* ================= INFORMATION SECTION ================= */}
                        <div className="flex flex-col p-6 sm:p-10">

                            {/* Category */}
                            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                                <FaBookOpen />
                                <span>{category}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                                {title}
                            </h1>

                            {/* Author */}
                            <div className="mt-5 flex items-center gap-3 border-b border-gray-200 pb-5 dark:border-gray-700">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                                    <FaUser />
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Written by
                                    </p>

                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        {author}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-6">
                                <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                                    <FaBookOpen className="text-blue-600" />
                                    About This Book
                                </h2>

                                <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                                    {description}
                                </p>
                            </div>

                            {/* Book Information */}
                            <div className="mt-6 grid grid-cols-2 gap-3">

                                {/* Price */}
                                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                                    <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <FaDollarSign />
                                        <span className="text-xs">
                                            Price
                                        </span>
                                    </div>

                                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                        ${price}
                                    </p>
                                </div>

                                {/* Delivery */}
                                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                                    <div className="mb-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <FaTruck />
                                        <span className="text-xs">
                                            Delivery
                                        </span>
                                    </div>

                                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                                        ${deliveryFee}
                                    </p>
                                </div>

                            </div>

                            {/* Available */}
                            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                                <FaCheckCircle />
                                <span>Available for order</span>
                            </div>

                            {/* Buttons */}
                            <div className="mt-auto grid grid-cols-1 gap-3 pt-8 sm:grid-cols-2">

                                {/* Buy Now */}
                                <button
                                    // onClick={handleAddToCart}
                                    type="button"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                                >
                                    <FaBolt />
                                    Buy Now
                                </button>

                                {/* Add to Cart */}
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-5 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white"
                                >
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;