import Image from "next/image";
import React from "react";

const ReadCard = ({ book }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">

            {/* Book Image */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            {/* Book Information */}
            <div className="p-5">
                <h3 className="line-clamp-1 text-lg font-bold text-gray-900 dark:text-white">
                    {book.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    by {book.author}
                </p>

                <div className="mt-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Delivered
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReadCard;