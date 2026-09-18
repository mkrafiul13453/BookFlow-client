import BrowseBooksClient from "@/components/BrowseBooksClient";
import { getAllBooks } from "@/lib/api/allBooks";
import React from "react";

const BrowseBooksPage = async () => {
    const books = await getAllBooks();

    return <BrowseBooksClient books={books} />;
};

export default BrowseBooksPage;