import { getAllBooks } from "@/lib/api/allBooks";
import React from "react";
import FeaturedSlider from "./FeaturedSlider";

const Featured = async () => {
    const books = await getAllBooks();

    if (!books || books.length === 0) {
        return null;
    }

    const featuredBooks = books.slice(0, 10);

    return (
        <section className="bg-[#fffaf5] py-10 sm:py-14 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-7 text-center sm:mb-10">

                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                        Featured Books
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-xs text-gray-500 sm:text-sm md:text-base">
                        Discover some of our most popular and carefully selected books.
                    </p>

                </div>

                <FeaturedSlider books={featuredBooks} />

            </div>
        </section>
    );
};

export default Featured;