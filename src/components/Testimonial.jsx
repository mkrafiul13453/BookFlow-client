"use client";

import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
  FaComments,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Thomas Reed",
    role: "IT Manager",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "My order arrived safely and in great condition. The browsing experience was smooth, and I really appreciated the helpful book recommendations.",
  },
  {
    name: "Emily Chan",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "BookFlow has quickly become one of my favorite places to discover books. The selection feels thoughtful, modern, and suitable for many different readers.",
  },
  {
    name: "Rachel Alvarez",
    role: "Creative Lead",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 4,
    review:
      "BookFlow makes finding new books incredibly easy. I always discover something interesting, and the whole shopping experience feels simple and enjoyable.",
  },
  {
    name: "Daniel Morgan",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "I really enjoyed the overall experience. The book details are clear, navigation is simple, and ordering a book takes only a few moments.",
  },
  {
    name: "Sophia Williams",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "BookFlow has made it much easier for me to find books for my studies and personal reading. The interface is clean and very easy to use.",
  },
  {
    name: "Michael Carter",
    role: "Business Consultant",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 4,
    review:
      "The platform feels professional and well organized. I especially like being able to browse different categories and quickly compare books.",
  },
  {
    name: "Olivia Brown",
    role: "Content Writer",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    review:
      "As someone who reads regularly, I found BookFlow very convenient. The collection is interesting, and the entire purchasing process feels effortless.",
  },
  {
    name: "James Anderson",
    role: "Research Assistant",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    review:
      "I had a great experience using BookFlow. Finding the right book was straightforward, and the clean design made everything feel simple and reliable.",
  },
];

/* =====================================================
   DESKTOP
   3 CARDS VISIBLE
===================================================== */

const desktopSlides = [
  ...testimonials.slice(-3),
  ...testimonials,
  ...testimonials.slice(0, 3),
];

/* =====================================================
   MOBILE
   1 CARD VISIBLE
===================================================== */

const mobileSlides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

const Testimonial = () => {
  /* =========================================
     DESKTOP STATE
  ========================================= */

  const [desktopIndex, setDesktopIndex] = useState(3);
  const [desktopAnimating, setDesktopAnimating] = useState(true);

  /* =========================================
     MOBILE STATE
  ========================================= */

  const [mobileIndex, setMobileIndex] = useState(1);
  const [mobileAnimating, setMobileAnimating] = useState(true);

  /* =========================================
     DESKTOP NEXT
  ========================================= */

  const nextDesktop = () => {
    if (!desktopAnimating) return;

    setDesktopIndex((prev) => prev + 1);
  };

  /* =========================================
     DESKTOP PREVIOUS
  ========================================= */

  const prevDesktop = () => {
    if (!desktopAnimating) return;

    setDesktopIndex((prev) => prev - 1);
  };

  /* =========================================
     MOBILE NEXT
  ========================================= */

  const nextMobile = () => {
    if (!mobileAnimating) return;

    setMobileIndex((prev) => prev + 1);
  };

  /* =========================================
     MOBILE PREVIOUS
  ========================================= */

  const prevMobile = () => {
    if (!mobileAnimating) return;

    setMobileIndex((prev) => prev - 1);
  };

  /* =========================================
     DESKTOP INFINITE LOOP
  ========================================= */

  useEffect(() => {
    if (desktopIndex === testimonials.length + 3) {
      const timer = setTimeout(() => {
        setDesktopAnimating(false);
        setDesktopIndex(3);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (desktopIndex === 0) {
      const timer = setTimeout(() => {
        setDesktopAnimating(false);
        setDesktopIndex(testimonials.length);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [desktopIndex]);

  /* =========================================
     MOBILE INFINITE LOOP
  ========================================= */

  useEffect(() => {
    if (mobileIndex === testimonials.length + 1) {
      const timer = setTimeout(() => {
        setMobileAnimating(false);
        setMobileIndex(1);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (mobileIndex === 0) {
      const timer = setTimeout(() => {
        setMobileAnimating(false);
        setMobileIndex(testimonials.length);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [mobileIndex]);

  /* =========================================
     TURN ANIMATION BACK ON
  ========================================= */

  useEffect(() => {
    if (!desktopAnimating) {
      const timer = setTimeout(() => {
        setDesktopAnimating(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [desktopAnimating]);

  useEffect(() => {
    if (!mobileAnimating) {
      const timer = setTimeout(() => {
        setMobileAnimating(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [mobileAnimating]);

  /* =========================================
     DESKTOP DOT
  ========================================= */

  const desktopDot =
    Math.floor((desktopIndex - 3) / 3) %
    Math.ceil(testimonials.length / 3);

  /* =========================================
     MOBILE DOT
  ========================================= */

  const mobileDot =
    (mobileIndex - 1 + testimonials.length) % testimonials.length;

  /* =========================================
     DESKTOP DOT CLICK
  ========================================= */

  const goToDesktop = (index) => {
    setDesktopAnimating(true);

    setDesktopIndex(3 + index * 3);
  };

  /* =========================================
     MOBILE DOT CLICK
  ========================================= */

  const goToMobile = (index) => {
    setMobileAnimating(true);
    setMobileIndex(index + 1);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">

      {/* =========================================
                BACKGROUND DECORATIONS
            ========================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-950/40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-950/40"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================
                    HEADER
                ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
        >

          {/* LEFT CONTENT */}

          <div className="max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-blue-600 dark:bg-blue-950 dark:text-blue-400"
            >
              <FaComments />
              TESTIMONIAL
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Customer Experiences That{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Inspire Confidence
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-6 h-1.5 rounded-full bg-blue-500"
            />

          </div>

          {/* RATING + BUTTONS */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:gap-10"
          >

            {/* RATING */}

            <div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-4xl font-bold text-slate-900 dark:text-white"
              >
                4.7
              </motion.div>

              <div className="mt-1 flex gap-1 text-lg text-blue-400">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <motion.span
                    key={star}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.08,
                    }}
                  >
                    {star <= 4 ? (
                      <FaStar />
                    ) : (
                      <FaStar className="text-blue-100 dark:text-blue-950" />
                    )}
                  </motion.span>
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Based on 10 reviews
              </p>

            </div>

            {/* BUTTONS */}

            <div className="flex w-full flex-col gap-3 sm:w-48">

              {/* <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-600 dark:shadow-blue-950/40"
              >
                View all reviews
              </motion.button>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-800 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
              >
                Write a review
              </motion.button> */}

            </div>

          </motion.div>

        </motion.div>

        {/* =================================================
                    DESKTOP / LAPTOP CAROUSEL
                    3 CARDS
                ================================================== */}

        <div className="hidden md:block">

          <div className="overflow-hidden">

            <div
              className={`flex ${desktopAnimating
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
                }`}
              style={{
                transform: `translateX(-${desktopIndex * (100 / 3)
                  }%)`,
              }}
            >

              {desktopSlides.map((testimonial, index) => (
                <div
                  key={`desktop-${testimonial.name}-${index}`}
                  className="w-1/3 shrink-0 px-2 lg:px-3"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                  />
                </div>
              ))}

            </div>

          </div>

          {/* DESKTOP CONTROLS */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="mt-9 flex items-center justify-center gap-5"
          >

            {/* PREVIOUS */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={prevDesktop}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              <FaArrowLeft />
            </motion.button>

            {/* DOTS */}

            <div className="flex items-center gap-2">

              {Array.from({
                length: Math.ceil(testimonials.length / 3),
              }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToDesktop(index)}
                  aria-label={`Go to testimonial group ${index + 1
                    }`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${desktopDot === index
                      ? "w-7 bg-blue-500"
                      : "w-2.5 bg-blue-200 dark:bg-blue-950"
                    }`}
                />
              ))}

            </div>

            {/* NEXT */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={nextDesktop}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              <FaArrowRight />
            </motion.button>

          </motion.div>

        </div>

        {/* =================================================
                    MOBILE CAROUSEL
                    1 CARD
                ================================================== */}

        <div className="md:hidden">

          <div className="overflow-hidden">

            <div
              className={`flex ${mobileAnimating
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
                }`}
              style={{
                transform: `translateX(-${mobileIndex * 100
                  }%)`,
              }}
            >

              {mobileSlides.map((testimonial, index) => (
                <div
                  key={`mobile-${testimonial.name}-${index}`}
                  className="w-full shrink-0"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                  />
                </div>
              ))}

            </div>

          </div>

          {/* MOBILE CONTROLS */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="mt-7 flex items-center justify-center gap-4"
          >

            {/* PREVIOUS */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={prevMobile}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              <FaArrowLeft />
            </motion.button>

            {/* DOTS */}

            <div className="flex max-w-[180px] items-center gap-1.5 overflow-hidden">

              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToMobile(index)}
                  aria-label={`Go to testimonial ${index + 1
                    }`}
                  className={`h-2.5 shrink-0 rounded-full transition-all duration-300 ${mobileDot === index
                      ? "w-7 bg-blue-500"
                      : "w-2.5 bg-blue-200 dark:bg-blue-950"
                    }`}
                />
              ))}

            </div>

            {/* NEXT */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={nextMobile}
              aria-label="Next testimonial"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 shadow-sm transition hover:bg-blue-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              <FaArrowRight />
            </motion.button>

          </motion.div>

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:shadow-xl hover:shadow-blue-100/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-slate-950/50 sm:p-7"
    >

      {/* QUOTE ICON */}

      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaQuoteRight className="absolute right-6 top-6 text-3xl text-blue-100 dark:text-blue-950" />
      </motion.div>

      <div>

        {/* STARS */}

        <div className="mb-5 flex gap-1 text-base">

          {[1, 2, 3, 4, 5].map((star, index) =>
            star <= testimonial.rating ? (
              <motion.span
                key={star}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                }}
              >
                <FaStar className="text-blue-500" />
              </motion.span>
            ) : (
              <motion.span
                key={star}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                }}
              >
                <FaRegStar className="text-blue-200 dark:text-blue-950" />
              </motion.span>
            )
          )}

        </div>

        {/* REVIEW */}

        <p className="relative z-10 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
          {testimonial.review}
        </p>

      </div>

      {/* USER */}

      <div className="mt-8 flex items-center gap-4">

        {/* AVATAR */}

        <motion.div
          whileHover={{
            scale: 1.06,
          }}
          transition={{ duration: 0.25 }}
          className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-4 border-blue-50 ring-1 ring-blue-100 dark:border-slate-800 dark:ring-slate-700"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* USER INFO */}

        <div>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-sm text-blue-500 dark:text-blue-400">
            {testimonial.role}
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default Testimonial;