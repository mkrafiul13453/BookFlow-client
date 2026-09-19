"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    eyebrow: "Editor's choice",
    title: "Discover your next favorite book",
    description:
      "Explore inspiring stories, timeless classics, and unforgettable reads.",
    image: "/banner/book-1.png",
  },
  {
    id: 2,
    eyebrow: "Read · learn · grow",
    title: "Books that inspire great ideas",
    description:
      "Find carefully selected books that make every reading moment meaningful.",
    image: "/banner/book-2.png",
  },
  {
    id: 3,
    eyebrow: "Bookflow collection",
    title: "Build your perfect reading list",
    description:
      "From fiction to technology, discover books for every kind of reader.",
    image: "/banner/book-3.png",
  },
];

const AUTOPLAY_MS = 5500;

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const progressKey = useRef(0);

  // Go to a specific slide
  const goTo = useCallback(
    (index) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      progressKey.current += 1;
    },
    [currentSlide]
  );

  // Next slide
  const next = useCallback(() => {
    setDirection(1);

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

    progressKey.current += 1;
  }, []);

  // Previous slide
  const prev = useCallback(() => {
    setDirection(-1);

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

    progressKey.current += 1;
  }, []);

  // Auto play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      next();
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [isPaused, next]);

  const current = slides[currentSlide];

  return (
    <section className="w-full px-3 pt-4 sm:px-5 md:px-6 lg:px-8">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 via-sky-100 to-cyan-50 shadow-[0_20px_60px_-25px_rgba(14,116,190,0.35)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 sm:rounded-3xl"
      >
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 14% 20%, rgba(56,155,224,0.18) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(14,116,190,0.14) 0%, transparent 50%)",
          }}
        />

        <div className="relative min-h-[540px] sm:min-h-[440px] md:min-h-[460px] lg:min-h-[480px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction * 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction * -40,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex flex-col-reverse items-center justify-center gap-8 px-6 py-10 sm:gap-6 sm:px-8 sm:py-10 md:flex-row md:gap-10 md:px-12 md:py-12 lg:gap-16 lg:px-16 xl:px-20"
            >
              {/* Book Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="relative flex w-full items-center justify-center md:w-2/5"
              >
                <div className="absolute h-44 w-44 rounded-[40%] bg-white/60 shadow-inner ring-1 ring-white/70 dark:bg-slate-700/60 dark:ring-slate-600/70 sm:h-56 sm:w-56 md:h-60 md:w-60 lg:h-72 lg:w-72" />

                <motion.img
                  src={current.image}
                  alt={current.title}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 h-40 w-auto object-contain drop-shadow-[0_25px_35px_rgba(15,64,110,0.25)] sm:h-52 md:h-56 lg:h-64 xl:h-72"
                />
              </motion.div>

              {/* Content */}
              <div className="z-10 flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.45,
                  }}
                  className="mb-3 inline-flex items-center rounded-full bg-white/80 px-3.5 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-200/80 dark:bg-slate-800/80 dark:text-sky-300 dark:ring-slate-600 sm:text-sm"
                >
                  {current.eyebrow}
                </motion.span>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.28,
                    duration: 0.5,
                  }}
                  className="max-w-xl font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-[2.6rem] lg:text-5xl"
                >
                  {current.title}
                </motion.h1>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.38,
                    duration: 0.45,
                  }}
                  className="mt-4 max-w-md text-balance text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base"
                >
                  {current.description}
                </motion.p>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.48,
                    duration: 0.45,
                  }}
                  className="mt-7 flex items-center gap-4 sm:mt-8"
                >
                  <Link
                    href="/books"
                    className="group inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-900/15 transition-colors duration-300 hover:bg-slate-900 dark:bg-sky-600 dark:hover:bg-sky-500 sm:px-7"
                  >
                    Shop the collection

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Previous Button */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2.5 text-slate-700 shadow-md ring-1 ring-sky-100 transition hover:bg-white hover:text-sky-700 dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-sky-400 lg:flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2.5 text-slate-700 shadow-md ring-1 ring-sky-100 transition hover:bg-white hover:text-sky-700 dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700 dark:hover:text-sky-400 lg:flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div
            className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6"
            role="tablist"
            aria-label="Slide navigation"
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;