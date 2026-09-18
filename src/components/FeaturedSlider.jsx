"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";

const FeaturedSlider = ({ books }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -240,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 240,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">

            {/* Left Button */}
            <button
                onClick={scrollLeft}
                aria-label="Previous books"
                className="
                    absolute left-1 sm:left-0
                    top-[35%]
                    z-20
                    flex
                    h-8 w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-md
                    transition
                    hover:bg-gray-100
                    sm:h-10
                    sm:w-10
                    sm:-translate-x-1/2
                "
            >
                <FaChevronLeft size={12} />
            </button>


            {/* Books Slider */}
            <div
                ref={sliderRef}
                className="
                    flex
                    w-full
                    gap-3
                    overflow-x-auto
                    scroll-smooth
                    px-2
                    pb-4
                    snap-x
                    snap-mandatory

                    [&::-webkit-scrollbar]:hidden
                    [-ms-overflow-style:none]
                    [scrollbar-width:none]

                    sm:gap-5
                    sm:px-1
                "
            >

                {books.map((book) => (
                    <div
                        key={book._id}
                        className="
                            group
                            min-w-[calc(50%-6px)]
                            snap-start

                            sm:min-w-[210px]

                            md:min-w-[220px]

                            lg:min-w-[200px]

                            xl:min-w-[210px]
                        "
                    >

                        {/* Book Image */}
                        <div
                            className="
                                relative
                                w-full
                                overflow-hidden
                                rounded-lg
                                bg-gray-100
                                shadow-sm

                                h-[190px]

                                sm:h-[275px]

                                md:h-[290px]

                                lg:h-[285px]
                            "
                        >
                            <img
                                src={
                                    book.image ||
                                    "https://placehold.co/400x600?text=No+Image"
                                }
                                alt={book.title}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />

                            {/* Category */}
                            {book.category && (
                                <span
                                    className="
                                        absolute
                                        left-2
                                        top-2
                                        max-w-[80%]
                                        truncate
                                        rounded-full
                                        bg-white/90
                                        px-2
                                        py-1
                                        text-[9px]
                                        font-semibold
                                        text-gray-700
                                        shadow-sm
                                        backdrop-blur

                                        sm:left-3
                                        sm:top-3
                                        sm:px-3
                                        sm:text-[11px]
                                    "
                                >
                                    {book.category}
                                </span>
                            )}
                        </div>


                        {/* Book Information */}
                        <div className="pt-2 sm:pt-4">

                            {/* Title */}
                            <h3
                                className="
                                    line-clamp-1
                                    text-[11px]
                                    font-bold
                                    leading-4
                                    text-gray-900

                                    sm:text-sm
                                "
                                title={book.title}
                            >
                                {book.title}
                            </h3>


                            {/* Rating */}
                            {/* <div className="mt-1 flex items-center gap-1 sm:mt-2">

                                <div className="flex items-center gap-[1px] text-orange-400">
                                    <FaStar size={9} />
                                    <FaStar size={9} />
                                    <FaStar size={9} />
                                    <FaStar size={9} />

                                    <FaStar
                                        size={9}
                                        className="text-gray-300"
                                    />
                                </div>

                                <span className="text-[9px] text-gray-500 sm:text-xs">
                                    5
                                </span>

                            </div> */}


                            {/* Author */}
                            {/* <p
                                className="
                                    mt-1
                                    line-clamp-1
                                    text-[9px]
                                    text-gray-400

                                    sm:mt-2
                                    sm:text-xs
                                "
                                title={book.author}
                            >
                                {book.author}
                            </p> */}


                            {/* Price */}
                            {/* <p
                                className="
                                    mt-1
                                    text-sm
                                    font-bold
                                    text-[#ff5a4f]

                                    sm:mt-2
                                    sm:text-lg
                                "
                            >
                                ${Number(book.price || 0).toFixed(2)}
                            </p> */}

                        </div>

                    </div>
                ))}

            </div>


            {/* Right Button */}
            <button
                onClick={scrollRight}
                aria-label="Next books"
                className="
                    absolute right-1 sm:right-0
                    top-[35%]
                    z-20
                    flex
                    h-8 w-8
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-md
                    transition
                    hover:bg-gray-100
                    sm:h-10
                    sm:w-10
                    sm:translate-x-1/2
                "
            >
                <FaChevronRight size={12} />
            </button>

        </div>
    );
};

export default FeaturedSlider;