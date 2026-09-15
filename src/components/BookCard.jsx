import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
    const {
        _id,
        title,
        author,
        price,
        image,
        deliveryFee,
        category,
    } = book;

    return (
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">

            {/* Category Sticker */}
            <div className="absolute left-3 top-3 z-10 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                {category}
            </div>

            {/* Book Image */}
            <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Book Information */}
            <div className="flex flex-1 flex-col p-4">

                {/* Title */}
                <h2 className="line-clamp-2 text-base font-bold text-gray-900 dark:text-white">
                    {title}
                </h2>

                {/* Author */}
                <p className="mt-1.5 line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
                    By {author}
                </p>

                {/* Price */}
                <div className="mt-2">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ${price}
                    </span>
                </div>

                {/* Delivery Fee */}
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Delivery Fee: ${deliveryFee}
                </p>

                {/* Buttons */}
                <div className="mt-auto space-y-2 pt-4">

                    {/* Add to Cart */}
                    <button
                        type="button"
                        className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>

                    {/* View Details */}
                    <Link
                        href={`/books/${_id}`}
                        className="block w-full rounded-lg border border-blue-600 px-3 py-2 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BookCard;