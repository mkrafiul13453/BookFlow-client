"use client";

import { deleteBookByLibrarian, updateBook } from "@/lib/api/allBooks";
import React, { useState } from "react";
import {
    FaEdit,
    FaTrash,
    FaBook,
    FaUser,
    FaDollarSign,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Table = ({ books, userId }) => {

    const handleDelete = async (id) => {
        console.log("Delete book:", id);

        const result = await deleteBookByLibrarian(id, userId);

        // console.log("Delete result:", result);

        if (result.deletedCount > 0) {
            window.location.reload();
        }
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleUpdate = (book) => {
        console.log("book id", book._id);
        setSelectedBook(book);
        setIsModalOpen(true);
    };
    const bookId = selectedBook?._id;
    

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log("formData",formData);

        

        const updatedBook = {
            title: formData.get("title"),
            author: formData.get("author"),
            price: Number(formData.get("price")),
            category: formData.get("category"),
            description: formData.get("description"),
        };

        // console.log("Book ID:", bookId);
        console.log("User ID:", userId);
        console.log("Updated Book:", updatedBook);

        const result = await updateBook(
            bookId,
            userId,
            updatedBook
        );

        console.log("Update Result:", result);

        if (result.modifiedCount > 0) {
            setIsModalOpen(false);
            toast.success("Book updated successfully!");
            window.location.reload();
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">

            {/* Table Header */}
            <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Book Inventory
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Manage all books in your inventory.
                </p>
            </div>

            {/* Responsive Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">

                    {/* Table Head */}
                    <thead className="bg-gray-50 text-xs uppercase text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        <tr>

                            <th className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <FaBook />
                                    Title
                                </div>
                            </th>

                            <th className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <FaUser />
                                    Author
                                </div>
                            </th>

                            <th className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <FaDollarSign />
                                    Price
                                </div>
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                        {books?.map((book) => (
                            <tr
                                key={book._id}
                                className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/70"
                            >

                                {/* Title */}
                                <td className="px-6 py-4">
                                    <div className="max-w-[280px]">
                                        <p className="font-semibold text-gray-900 dark:text-white">
                                            {book.title}
                                        </p>
                                    </div>
                                </td>

                                {/* Author */}
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                    {book.author}
                                </td>

                                {/* Price */}
                                <td className="px-6 py-4">
                                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                                        ${book.price}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">

                                        {/* Update Button */}
                                        <button
                                            onClick={() => handleUpdate(book)}
                                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
                                        >
                                            <FaEdit />
                                            Update
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(book._id)}
                                            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-red-700"
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>

                                    </div>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {(!books || books.length === 0) && (
                <div className="px-6 py-12 text-center">
                    <FaBook className="mx-auto mb-3 text-4xl text-gray-400" />

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        No Books Found
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        There are no books available in your inventory.
                    </p>
                </div>
            )}

            {/* This the update modal */}
            {
                isModalOpen && selectedBook && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

                        <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900">

                            <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
                                Update Book
                            </h2>

                            <form
                                onSubmit={handleUpdateSubmit}
                                className="space-y-4"
                            >

                                {/* Title */}
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Book Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={selectedBook.title}
                                        className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800"
                                    />
                                </div>

                                {/* Author */}
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Author
                                    </label>

                                    <input
                                        type="text"
                                        name="author"
                                        defaultValue={selectedBook.author}
                                        className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800"
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        name="price"
                                        defaultValue={selectedBook.price}
                                        className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800"
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                        Category
                                    </label>

                                    <input
                                        type="text"
                                        name="category"
                                        defaultValue={selectedBook.category}
                                        className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800"
                                    />
                                </div>

                                { }
                                <div>
                                    <label className="mb-1 block text-sm font-medium">
                                         Description
                                    </label>

                                    <textarea
                                        name="description"
                                        defaultValue={selectedBook.description}
                                        rows={4}
                                        className="w-full rounded-lg border px-4 py-2 dark:bg-gray-800"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-3">

                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Save Changes
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                )
            }

        </div>
        
    );
    
};



export default Table;