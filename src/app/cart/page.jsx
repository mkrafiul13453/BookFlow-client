"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
    getCart,
    removeFromCart,
    updateCartQuantity,
} from "@/lib/api/cart";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
    const { data: session } = authClient.useSession();

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCart = async () => {
        if (!session?.user?.id) {
            setLoading(false);
            return;
        }

        try {
            const data = await getCart(session.user.id);
            setCartItems(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCart();
    }, [session?.user?.id]);

    // Remove item
    const handleRemove = async (cartId) => {
        await removeFromCart(cartId, session.user.id);
        loadCart();
    };

    // Update quantity
    const handleQuantity = async (item, newQuantity) => {
        if (newQuantity < 1) return;

        await updateCartQuantity(
            item._id,
            session.user.id,
            newQuantity
        );

        loadCart();
    };

    // Total price
    const totalPrice = cartItems.reduce(
        (total, item) =>
            total +
            Number(item.price) * Number(item.quantity),
        0
    );

    // Total items
    const totalItems = cartItems.reduce(
        (total, item) =>
            total + Number(item.quantity),
        0
    );

    // Loading
    if (loading) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center bg-gray-50 dark:bg-gray-950">
                <p className="text-sm text-gray-500">
                    Loading cart...
                </p>
            </main>
        );
    }

    // Not logged in
    if (!session?.user) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
                <div className="text-center">
                    <FaShoppingCart className="mx-auto mb-4 text-4xl text-gray-400" />

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Please Login
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Please login to view your shopping cart.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 px-3 py-6 dark:bg-gray-950 sm:px-6 sm:py-10 lg:px-8">

            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}

                <div className="mb-5 sm:mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Shopping Cart
                    </h1>

                    {cartItems.length > 0 && (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                            {totalItems}{" "}
                            {totalItems === 1 ? "item" : "items"} in your cart
                        </p>
                    )}
                </div>

                {/* ================= EMPTY CART ================= */}

                {cartItems.length === 0 ? (
                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-12 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:rounded-2xl sm:p-16">

                        <FaShoppingCart className="mx-auto mb-4 text-4xl text-gray-300 dark:text-gray-600" />

                        <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                            Your cart is empty
                        </h2>

                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                            Add some books to your cart.
                        </p>

                    </div>
                ) : (

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">

                        {/* ================= CART ITEMS ================= */}

                        <div className="space-y-3 sm:space-y-4 lg:col-span-2">

                            {cartItems.map((item) => (

                                <div
                                    key={item._id}
                                    className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:rounded-2xl sm:p-5"
                                >

                                    <div className="flex gap-3 sm:gap-5">

                                        {/* Book Image */}

                                        <div className="flex h-24 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 sm:h-32 sm:w-24 sm:rounded-lg">

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-contain"
                                            />

                                        </div>

                                        {/* Book Information */}

                                        <div className="min-w-0 flex-1">

                                            {/* Title */}

                                            <h2 className="truncate text-sm font-bold text-gray-900 dark:text-white sm:text-lg">
                                                {item.title}
                                            </h2>

                                            {/* Author */}

                                            <p className="mt-0.5 truncate text-[11px] text-gray-500 dark:text-gray-400 sm:mt-1 sm:text-sm">
                                                {item.author}
                                            </p>

                                            {/* Category */}

                                            {item.category && (
                                                <p className="mt-1 hidden text-xs text-gray-400 sm:block">
                                                    {item.category}
                                                </p>
                                            )}

                                            {/* Price */}

                                            <p className="mt-2 text-sm font-bold text-blue-600 dark:text-blue-400 sm:mt-3 sm:text-base">
                                                ${Number(item.price).toFixed(2)}
                                            </p>

                                            {/* Quantity */}

                                            <div className="mt-2.5 flex items-center gap-2 sm:mt-4 sm:gap-3">

                                                <button
                                                    onClick={() =>
                                                        handleQuantity(
                                                            item,
                                                            item.quantity - 1
                                                        )
                                                    }
                                                    disabled={item.quantity <= 1}
                                                    className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 text-[9px] text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:h-8 sm:w-8 sm:text-xs"
                                                >
                                                    <FaMinus />
                                                </button>

                                                <span className="min-w-4 text-center text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        handleQuantity(
                                                            item,
                                                            item.quantity + 1
                                                        )
                                                    }
                                                    className="flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 text-[9px] text-gray-600 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:h-8 sm:w-8 sm:text-xs"
                                                >
                                                    <FaPlus />
                                                </button>

                                            </div>

                                        </div>

                                        {/* Right Section */}

                                        <div className="flex shrink-0 flex-col items-end justify-between">

                                            {/* Item Total */}

                                            <p className="text-xs font-bold text-gray-900 dark:text-white sm:text-base">
                                                $
                                                {(
                                                    Number(item.price) *
                                                    Number(item.quantity)
                                                ).toFixed(2)}
                                            </p>

                                            {/* Remove */}

                                            <button
                                                onClick={() =>
                                                    handleRemove(item._id)
                                                }
                                                className="flex items-center gap-1 text-[10px] font-semibold text-red-500 transition hover:text-red-600 sm:text-xs"
                                            >
                                                <FaTrash className="text-[9px] sm:text-[10px]" />
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* ================= ORDER SUMMARY ================= */}

                        <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:rounded-2xl sm:p-6">

                            <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                                Order Summary
                            </h2>

                            {/* Items */}

                            <div className="mt-5 flex justify-between text-xs text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-sm">

                                <span>
                                    Total Items
                                </span>

                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {totalItems}
                                </span>

                            </div>

                            {/* Subtotal */}

                            <div className="mt-3 flex justify-between text-xs text-gray-600 dark:text-gray-400 sm:text-sm">

                                <span>
                                    Subtotal
                                </span>

                                <span>
                                    ${totalPrice.toFixed(2)}
                                </span>

                            </div>

                            {/* Divider */}

                            <div className="my-4 border-t border-gray-200 dark:border-gray-700 sm:my-5" />

                            {/* Total */}

                            <div className="flex items-center justify-between">

                                <span className="text-base font-bold text-gray-900 dark:text-white sm:text-xl">
                                    Total
                                </span>

                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400 sm:text-xl">
                                    ${totalPrice.toFixed(2)}
                                </span>

                            </div>

                            {/* Checkout */}

                            <button
                                type="button"
                                className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:mt-6 sm:rounded-xl sm:py-3"
                            >
                                Proceed to Checkout
                            </button>

                        </div>

                    </div>
                )}

            </div>

        </main>
    );
};

export default CartPage;