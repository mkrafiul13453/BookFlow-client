"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const CartIcon = ({ cartCount = 0 }) => {
    return (
        <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-blue-400"
        >
            <ShoppingCart size={19} />

            {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] font-bold text-white">
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

export default CartIcon;