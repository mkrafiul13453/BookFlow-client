import { getAllBooks } from '@/lib/api/allBooks';
import React from 'react';

const adminBooksPage = async () => {
    const allBooks = await getAllBooks();

    console.log("All Books:", allBooks);
    return (
        <div>
            this is the admin books page
        </div>
    );
};

export default adminBooksPage;