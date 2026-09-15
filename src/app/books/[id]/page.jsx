import React from "react";
import { getBookById } from "@/lib/api/allBooks";
import BookDetailsPage from "@/components/BookDetailsPage";

const Page = async ({ params }) => {
    const { id } = await params;

    const book = await getBookById(id);

    return <BookDetailsPage book={book} />;
};

export default Page;