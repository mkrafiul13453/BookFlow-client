import BookTable from "@/components/admin/BooksTable";
import { getAllBooks } from "@/lib/api/allBooks";
import React from "react";

const adminBooksPage = async () => {
    const booksData = await getAllBooks();

    console.log("All Books:", booksData);

    return (
        <div className="space-y-6">

            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Books Management
                </h1>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    View and manage all books in your library
                </p>
            </div>

            {/* Books Table */}
            <BookTable booksData={booksData} />

        </div>
    );
};

export default adminBooksPage;