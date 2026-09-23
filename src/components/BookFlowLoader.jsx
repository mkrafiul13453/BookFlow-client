"use client";

import { BookOpen } from "lucide-react";

const BookFlowLoader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white/95 backdrop-blur-sm dark:bg-slate-950/95">

            <div className="flex flex-col items-center">

                {/* Spinner */}
                <div className="relative flex h-20 w-20 items-center justify-center">

                    {/* Outer spinning ring */}
                    <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-slate-200 border-t-blue-600 dark:border-slate-800 dark:border-t-blue-500" />

                    {/* Inner soft circle */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 shadow-sm dark:bg-blue-950/40">

                        {/* Book Icon */}
                        <BookOpen
                            size={27}
                            strokeWidth={2}
                            className="animate-pulse text-blue-600 dark:text-blue-400"
                        />

                    </div>
                </div>

                {/* Loading text */}
                <div className="mt-5 text-center">

                    <p className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
                        Loading BookFlow
                        <span className="inline-flex w-5 text-left">
                            <span className="animate-pulse">...</span>
                        </span>
                    </p>

                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                        Preparing your reading experience
                    </p>

                </div>

            </div>
        </div>
    );
};

export default BookFlowLoader;