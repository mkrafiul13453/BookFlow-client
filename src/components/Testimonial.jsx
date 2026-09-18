"use client";

import React, { useState } from "react";
import {
    FaStar,
    FaRegStar,
    FaArrowLeft,
    FaArrowRight,
    FaQuoteRight,
    FaComments,
} from "react-icons/fa6";

const testimonials = [
    {
        name: "Thomas Reed",
        role: "IT Manager",
        image:
            "https://i.pravatar.cc/150?img=12",
        rating: 4,
        review:
            "My order arrived safely and in great condition. The browsing experience was smooth, and I really appreciated the helpful book recommendations.",
    },
    {
        name: "Emily Chan",
        role: "Marketing Director",
        image:
            "https://i.pravatar.cc/150?img=47",
        rating: 4,
        review:
            "Bukku has quickly become one of my favorite places to discover books. The selection feels thoughtful, modern, and suitable for many different readers.",
    },
    {
        name: "Rachel Alvarez",
        role: "Creative Lead",
        image:
            "https://i.pravatar.cc/150?img=44",
        rating: 4,
        review:
            "Bukku makes finding new books incredibly easy. I always discover something interesting, and the whole shopping experience feels simple and enjoyable.",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 py-16 sm:px-6 lg:px-8">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

                    {/* Left Content */}
                    <div className="max-w-2xl">

                        {/* Small Label */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-blue-600">
                            <FaComments />
                            TESTIMONIAL
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Customer Experiences That{" "}
                            <span className="text-blue-500">
                                Inspire Confidence
                            </span>
                        </h2>

                        {/* Small Line */}
                        <div className="mt-6 h-1.5 w-16 rounded-full bg-blue-500" />
                    </div>

                    {/* Right Rating */}
                    <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:gap-10">

                        {/* Rating */}
                        <div>
                            <div className="text-4xl font-bold text-slate-900">
                                4.7
                            </div>

                            <div className="mt-1 flex gap-1 text-lg text-blue-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className="text-blue-100" />
                            </div>

                            <p className="mt-1 text-sm text-slate-500">
                                Based on 10 reviews
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex w-full flex-col gap-3 sm:w-48">

                            <button className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-600">
                                View all reviews
                            </button>

                            <button className="rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
                                Write a review
                            </button>

                        </div>
                    </div>
                </div>

                {/* ================= DESKTOP TESTIMONIALS ================= */}
                <div className="hidden gap-6 md:grid md:grid-cols-3">

                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                        />
                    ))}

                </div>

                {/* ================= MOBILE SLIDER ================= */}
                <div className="md:hidden">

                    <TestimonialCard
                        testimonial={testimonials[current]}
                    />

                    {/* Slider Controls */}
                    <div className="mt-7 flex items-center justify-center gap-5">

                        {/* Previous */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50"
                        >
                            <FaArrowLeft />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    className={`h-2.5 rounded-full transition-all ${current === index
                                            ? "w-7 bg-blue-500"
                                            : "w-2.5 bg-blue-200"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50"
                        >
                            <FaArrowRight />
                        </button>

                    </div>
                </div>

                {/* ================= DESKTOP CONTROLS ================= */}
                <div className="mt-9 hidden items-center justify-center gap-5 md:flex">

                    <button
                        onClick={prevSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 transition hover:bg-blue-50"
                    >
                        <FaArrowLeft />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 rounded-full transition-all ${current === index
                                        ? "w-7 bg-blue-500"
                                        : "w-2.5 bg-blue-200"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 transition hover:bg-blue-50"
                    >
                        <FaArrowRight />
                    </button>

                </div>

            </div>
        </section>
    );
};


/* =====================================================
   TESTIMONIAL CARD
===================================================== */

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50 sm:p-7">

            {/* Quote Icon */}
            <FaQuoteRight className="absolute right-6 top-6 text-3xl text-blue-100" />

            <div>

                {/* Stars */}
                <div className="mb-5 flex gap-1 text-base">
                    {[1, 2, 3, 4, 5].map((star) =>
                        star <= testimonial.rating ? (
                            <FaStar
                                key={star}
                                className="text-blue-500"
                            />
                        ) : (
                            <FaRegStar
                                key={star}
                                className="text-blue-200"
                            />
                        )
                    )}
                </div>

                {/* Review */}
                <p className="relative z-10 text-[15px] leading-7 text-slate-600">
                    {testimonial.review}
                </p>

            </div>

            {/* User */}
            <div className="mt-8 flex items-center gap-4">

                {/* Avatar */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-4 border-blue-50 ring-1 ring-blue-100">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* User Info */}
                <div>
                    <h3 className="font-semibold text-slate-900">
                        {testimonial.name}
                    </h3>

                    <p className="mt-0.5 text-sm text-blue-500">
                        {testimonial.role}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;