"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const FeaturedSlider = ({ books = [] }) => {
    const sliderRef = useRef(null);

    const scroll = (amount) => {
        sliderRef.current?.scrollBy({
            left: amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => scroll(-240)}
                aria-label="Previous books"
                className="absolute left-1 top-[35%] z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:left-0 sm:h-10 sm:w-10 sm:-translate-x-1/2"
            >
                <FaChevronLeft size={12} />
            </button>

            <div
                ref={sliderRef}
                className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-2 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-1"
            >
                {books.map((book) => (
                    <div
                        key={book._id}
                        className="group min-w-[calc(50%-6px)] snap-start sm:min-w-[210px] md:min-w-[220px] lg:min-w-[200px] xl:min-w-[210px]"
                    >
                        <div className="relative h-[190px] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm sm:h-[275px] md:h-[290px] lg:h-[285px]">
                            <img
                                src={book.image || "https://placehold.co/400x600?text=No+Image"}
                                alt={book.title || "Book cover"}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {book.category && (
                                <span className="absolute left-2 top-2 max-w-[80%] truncate rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-gray-700 shadow-sm backdrop-blur sm:left-3 sm:top-3 sm:px-3 sm:text-[11px]">
                                    {book.category}
                                </span>
                            )}
                        </div>

                        <div className="pt-2 sm:pt-4">
                            <h3
                                title={book.title}
                                className="line-clamp-1 text-[11px] font-bold leading-4 text-gray-900 sm:text-sm"
                            >
                                {book.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => scroll(240)}
                aria-label="Next books"
                className="absolute right-1 top-[35%] z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-100 sm:right-0 sm:h-10 sm:w-10 sm:translate-x-1/2"
            >
                <FaChevronRight size={12} />
            </button>
        </div>
    );
};

export default FeaturedSlider;