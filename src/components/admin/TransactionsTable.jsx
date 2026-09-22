"use client";

import React from "react";
import { FaCircleCheck, FaClock, FaXmark } from "react-icons/fa6";

const TransactionsTable = ({ orders }) => {
    const formatDate = (date) => {
        if (!date) return "N/A";

        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const getDeliveryStatus = (status) => {
        switch (status?.toLowerCase()) {
            case "delivered":
                return (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        <FaCircleCheck />
                        Delivered
                    </span>
                );

            case "pending":
                return (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                        <FaClock />
                        Pending
                    </span>
                );

            case "cancelled":
            case "canceled":
                return (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        <FaXmark />
                        Cancelled
                    </span>
                );

            default:
                return (
                    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        {status || "Unknown"}
                    </span>
                );
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm">
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                    <thead className="bg-sky-50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                User Name
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                Delivery Status
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                Total Price
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                Stripe Payment ID
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                Paid Date
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {orders?.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="transition hover:bg-sky-50/50"
                                >
                                    {/* User Name */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="font-medium text-gray-800">
                                            {order.user?.name || "Unknown User"}
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            {order.user?.email || "No email"}
                                        </div>
                                    </td>

                                    {/* Delivery Status */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {getDeliveryStatus(
                                            order.deliveryStatus
                                        )}
                                    </td>

                                    {/* Total Price */}
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="font-semibold text-gray-800">
                                            ${Number(order.totalPrice || 0).toFixed(2)}
                                        </span>
                                    </td>

                                    {/* Stripe Payment ID */}
                                    <td className="px-6 py-4">
                                        <span
                                            className="block max-w-[220px] truncate text-sm text-gray-600"
                                            title={order.stripePaymentIntentId}
                                        >
                                            {order.stripePaymentIntentId || "N/A"}
                                        </span>
                                    </td>

                                    {/* Paid Date */}
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                        {formatDate(order.paidAt)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-12 text-center text-gray-500"
                                >
                                    No transactions found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 p-4 md:hidden">
                {orders?.length > 0 ? (
                    orders.map((order) => (
                        <div
                            key={order._id}
                            className="rounded-xl border border-sky-100 bg-white p-4 shadow-sm"
                        >
                            {/* User */}
                            <div className="mb-4">
                                <p className="text-xs font-medium uppercase text-gray-400">
                                    User
                                </p>

                                <p className="font-semibold text-gray-800">
                                    {order.user?.name || "Unknown User"}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {order.user?.email || "No email"}
                                </p>
                            </div>

                            {/* Information */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Delivery Status
                                    </p>

                                    <div className="mt-1">
                                        {getDeliveryStatus(
                                            order.deliveryStatus
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400">
                                        Total Price
                                    </p>

                                    <p className="mt-1 font-semibold text-gray-800">
                                        $
                                        {Number(
                                            order.totalPrice || 0
                                        ).toFixed(2)}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-xs text-gray-400">
                                        Stripe Payment ID
                                    </p>

                                    <p className="mt-1 break-all text-sm text-gray-600">
                                        {order.stripePaymentIntentId || "N/A"}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-xs text-gray-400">
                                        Paid Date
                                    </p>

                                    <p className="mt-1 text-sm text-gray-600">
                                        {formatDate(order.paidAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-10 text-center text-gray-500">
                        No transactions found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionsTable;