"use client";

import { deleteBookByAdmin } from "@/lib/api/allBooks";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const BookTable = ({ booksData }) => {
    const router = useRouter();
    const [books, setBooks] = useState(booksData);
    const handleDelete = async (bookId) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (!confirmDelete) return;

        const result = await deleteBookByAdmin(bookId);

        if (result.deletedCount > 0) {
            setBooks((previousBooks) =>
                previousBooks.filter((book) => book._id !== bookId)
            );
        
            toast.error("Book deleted successfully!");
            router.refresh();
        }
    };
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

            {/* Table Header */}
            <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    All Books
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    View and manage all books in your library
                </p>
            </div>

            {/* Responsive Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] text-left">

                    {/* Table Head */}
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Book Name
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Author
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Category
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Price
                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {booksData?.map((book) => (
                            <tr
                                key={book._id}
                                className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                            >
                                {/* Book Name */}
                                <td className="px-6 py-4">
                                    <p className="max-w-[250px] truncate font-medium text-gray-800 dark:text-white">
                                        {book.title}
                                    </p>
                                </td>

                                {/* Author */}
                                <td className="px-6 py-4">
                                    <p className="whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                                        {book.author}
                                    </p>
                                </td>

                                {/* Category */}
                                <td className="px-6 py-4">
                                    <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold capitalize text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                                        {book.category}
                                    </span>
                                </td>

                                {/* Price */}
                                <td className="px-6 py-4">
                                    <p className="whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        ${book.price}
                                    </p>
                                </td>

                                {/* Delete */}
                                <td className="px-6 py-4 text-center">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(book._id)
                                        }
                                        title="Delete Book"
                                        className="
                                            inline-flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            text-red-500
                                            transition-all
                                            duration-200
                                            hover:bg-red-50
                                            hover:text-red-600
                                            dark:hover:bg-red-500/10
                                        "
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
            {(!booksData || booksData.length === 0) && (
                <div className="px-6 py-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        No books found.
                    </p>
                </div>
            )}
        </div>
    );
};

export default BookTable;