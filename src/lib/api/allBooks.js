const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getAllBooks = async () => {
    const res = await fetch(`${baseUrl}/librarian/add-book`, {
        method: "GET",
        headers: {

            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
};

export const getBookById = async (id) => {
    const res = await fetch(`${baseUrl}/librarian/add-book/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch book details");
    }

    return res.json();
};


export const getBooksByUser = async (userId) => {
    const res = await fetch(
        `${baseUrl}/librarian/add-book/data?userId=${userId}`
    );

    return res.json();
};

export const deleteBookByLibrarian = async (bookId, userId) => {
    const res = await fetch(
        `${baseUrl}/librarian/delete-book?bookId=${bookId}&userId=${userId}`,
        {
            method: "DELETE",
        }
    );

    return res.json();
};

export const updateBook = async (bookId, userId, bookData) => {
    const res = await fetch(
        `${baseUrl}/librarian/update-book?bookId=${bookId}&userId=${userId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
        }
    );

    return res.json();
};



export const deleteBookByAdmin = async (bookId) => {
    const res = await fetch(`${baseUrl}/books/${bookId}`, {
        method: "DELETE",
    });

    return res.json();
};