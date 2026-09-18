"use client";

import React, { useMemo, useState } from "react";
import BookCard from "@/components/BookCard";

const categories = [
    "All Categories",
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Children",
];

const BrowseBooksClient = ({ books = [] }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [priceSort, setPriceSort] = useState("");

    const filteredBooks = useMemo(() => {
        let result = [...books];

        // Search by book title
        if (search.trim() !== "") {
            result = result.filter((book) =>
                book.title
                    ?.toLowerCase()
                    .includes(search.toLowerCase().trim())
            );
        }

        // Filter by category
        if (category !== "All Categories") {
            result = result.filter(
                (book) => book.category === category
            );
        }

        // Sort by price
        if (priceSort === "low-to-high") {
            result.sort(
                (a, b) => Number(a.price) - Number(b.price)
            );
        }

        if (priceSort === "high-to-low") {
            result.sort(
                (a, b) => Number(b.price) - Number(a.price)
            );
        }

        return result;
    }, [books, search, category, priceSort]);

    const clearFilters = () => {
        setSearch("");
        setCategory("All Categories");
        setPriceSort("");
    };

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-6 lg:px-8">

            {/* Page Header */}
            <div className="mx-auto mb-8 max-w-7xl text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Browse Books
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
                    Explore our collection of books and find your next favorite read.
                </p>
            </div>

            {/* Filter Section */}
            <div className="mx-auto mb-10 max-w-7xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-6">

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                    {/* Search */}
                    <div>
                        <label
                            htmlFor="search"
                            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >
                            Search Book
                        </label>

                        <div className="relative">
                            <input
                                id="search"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by book title..."
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-700"
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >
                            Category
                        </label>

                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500 dark:focus:ring-gray-700"
                        >
                            {categories.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Sorting */}
                    <div>
                        <label
                            htmlFor="price"
                            className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >
                            Sort by Price
                        </label>

                        <select
                            id="price"
                            value={priceSort}
                            onChange={(e) => setPriceSort(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-500 dark:focus:ring-gray-700"
                        >
                            <option value="">Default</option>
                            <option value="low-to-high">
                                Price: Low to High
                            </option>
                            <option value="high-to-low">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                </div>

                {/* Filter Bottom Section */}
                <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-gray-800 sm:flex-row">

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            {filteredBooks.length}
                        </span>{" "}
                        {filteredBooks.length === 1 ? "book" : "books"}
                    </p>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
                    {filteredBooks.map((book) => (
                        <BookCard
                            key={book._id}
                            book={book}
                        />
                    ))}
                </div>
            ) : (
                /* No Result */
                <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center dark:border-gray-700 dark:bg-gray-900">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        No books found
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Try a different book title or category.
                    </p>

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </main>
    );
};

export default BrowseBooksClient;