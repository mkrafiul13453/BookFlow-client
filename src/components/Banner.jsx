"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    eyebrow: "EDITOR'S CHOICE",
    title: "Discover Your Next Favorite Book",
    description:
      "Explore inspiring stories, timeless classics, and unforgettable reads.",
    image: "/banner/book-1.png",
  },
  {
    id: 2,
    eyebrow: "READ • LEARN • GROW",
    title: "Books That Inspire Great Ideas",
    description:
      "Find carefully selected books that make every reading moment meaningful.",
    image: "/banner/book-2.png",
  },
  {
    id: 3,
    eyebrow: "BOOKFLOW COLLECTION",
    title: "Build Your Perfect Reading List",
    description:
      "From fiction to technology, discover books for every kind of reader.",
    image: "/banner/book-3.png",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === slides.length - 1 ? 0 : previous + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="w-full px-3 pt-4 sm:px-5 md:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-blue-300 shadow-sm">

        {/* Decorative Background Circle */}
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/50 blur-sm sm:h-72 sm:w-72" />

        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-blue-200/60 blur-sm" />

        {/* Main Slider */}
        <div className="relative min-h-[500px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 py-7 sm:gap-5 sm:px-8 sm:py-8 md:flex-row md:gap-10 md:px-12 md:py-10 lg:gap-16 lg:px-20"            >

              {/* =========================
                                LEFT - BOOK IMAGE
                            ========================== */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="relative flex w-full items-center justify-center md:w-1/2"
              >

                {/* White Circle Behind Book */}
                <div className="absolute h-48 w-48 rounded-full bg-white/70 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-72 lg:w-72" />

                {/* Decorative Shape */}
                <motion.div
                  animate={{
                    rotate: [0, 4, 0, -4, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-20 w-20 rounded-full bg-blue-200/70 blur-sm sm:h-28 sm:w-28"
                />

                {/* Book */}
                <motion.img
                  src={current.image}
                  alt={current.title}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 h-36 w-auto object-contain drop-shadow-2xl sm:h-48 md:h-64 lg:h-72"                />
              </motion.div>

              {/* =========================
                                RIGHT - CONTENT
                            ========================== */}
              <div className="z-10 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">

                {/* Eyebrow */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-slate-500 sm:text-xs"
                >
                  {current.eyebrow}
                </motion.p>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  {current.title}
                </motion.h1>

                {/* Small Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 75 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                  }}
                  className="my-4 h-1 rounded-full bg-blue-400"
                />

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="max-w-md text-sm leading-6 text-slate-600 sm:text-base"
                >
                  {current.description}
                </motion.p>

                {/* Buy Now Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 sm:mt-6"                >
                  <Link
                    href="/books"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition-all duration-300 hover:bg-slate-950 hover:text-white hover:shadow-lg"
                  >
                    Buy Now

                    <span className="text-sky-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================
                        SLIDER DOTS
                    ========================== */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-5">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group flex h-5 w-5 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${currentSlide === index
                      ? "h-2.5 w-7 bg-blue-500"
                      : "h-2.5 w-2.5 bg-slate-400/70 group-hover:bg-slate-500"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;