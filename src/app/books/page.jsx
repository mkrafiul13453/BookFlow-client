import { getAllBooks } from "@/lib/api/allBooks";
import BookCard from "@/components/BookCard";
import React from "react";

const BrowseBooksPage = async () => {
    const books = await getAllBooks();

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-6 lg:px-8">

            {/* Page Header */}
            <div className="mx-auto mb-10 max-w-7xl text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Browse Books
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
                    Explore our collection of books and find your next favorite read.
                </p>
            </div>

            {/* Books Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">

                {books?.map((book) => (
                    <BookCard
                        key={book._id}
                        book={book}
                    />
                ))}

            </div>

        </main>
    );
};

export default BrowseBooksPage;