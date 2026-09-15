"use server";
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addBooks = async (bookData) => {
    console.log("bookData", bookData);
    // return;

    const res = await fetch(`${baseUrl}/librarian/add-book`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
        }
    );

    const data = await res.json();
    return data;
};