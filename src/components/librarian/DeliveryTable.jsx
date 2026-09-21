"use client";

import { confirmDelivery } from "@/lib/api/order";
import React from "react";

const DeliveryTable = ({ orders, userId }) => {
    const handleConfirmDelivery = async (order) => {
        try {
            const productIds = order.products.map(
                (product) => product.productId
            );

            await confirmDelivery({
                orderId: order._id,
                productIds,
                userId,
            });

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">
                    Manage Deliveries
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage orders containing your books.
                </p>
            </div>

            <div className="w-full overflow-x-auto rounded-xl border border-gray-400 dark:border-gray-600">
                <table className="w-full min-w-[1000px] border-collapse text-left">

                    {/* Table Header */}
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr className="border-b-2 border-gray-400 dark:border-gray-600">
                            <th className="border-r border-gray-300 px-5 py-4 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-100">
                                Customer
                            </th>

                            <th className="border-r border-gray-300 px-5 py-4 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-100">
                                E-mail
                            </th>

                            <th className="border-r border-gray-300 px-5 py-4 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-100">
                                Order Items
                            </th>

                            <th className="border-r border-gray-300 px-5 py-4 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-100">
                                Total Price
                            </th>

                            <th className="border-r border-gray-300 px-5 py-4 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-100">
                                Delivery Status
                            </th>

                            <th className="px-5 py-4 text-sm font-semibold text-gray-800 dark:text-gray-100">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white dark:bg-gray-900">
                        {orders?.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b border-gray-400 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                                >
                                    {/* Customer */}
                                    <td className="border-r border-gray-300 px-5 py-4 dark:border-gray-700">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={order.user?.image}
                                                alt={order.user?.name}
                                                className="h-10 w-10 rounded-full object-cover"
                                            />

                                            <p className="font-medium text-gray-800 dark:text-gray-100">
                                                {order.user?.name}
                                            </p>
                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className="border-r border-gray-300 px-5 py-4 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                                        {order.user?.email}
                                    </td>

                                    {/* Products */}
                                    <td className="border-r border-gray-300 px-5 py-4 dark:border-gray-700">
                                        <div className="space-y-2">
                                            {order.products?.map((product) => (
                                                <div
                                                    key={product.productId}
                                                    className="flex items-center gap-3"
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="h-12 w-9 rounded object-cover"
                                                    />

                                                    <div>
                                                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                                            {product.title}
                                                        </p>

                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            Qty: {product.quantity}
                                                        </p>

                                                        {/* Individual Product Delivery Status */}
                                                        <span
                                                            className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${product.deliveryStatus ===
                                                                    "approved"
                                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                                                                }`}
                                                        >
                                                            {product.deliveryStatus ||
                                                                "pending"}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Total Price */}
                                    <td className="border-r border-gray-300 px-5 py-4 dark:border-gray-700">
                                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                                            ${Number(order.totalPrice).toFixed(2)}
                                        </span>
                                    </td>

                                    {/* Overall Order Status */}
                                    <td className="border-r border-gray-300 px-5 py-4 dark:border-gray-700">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${order.deliveryStatus ===
                                                    "delivered"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                                                }`}
                                        >
                                            {order.deliveryStatus}
                                        </span>
                                    </td>

                                    {/* Action */}
                                    <td className="px-5 py-4">
                                        <button
                                            onClick={() =>
                                                handleConfirmDelivery(order)
                                            }
                                            type="button"
                                            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                                        >
                                            Confirm Delivery
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-5 py-10 text-center text-gray-600 dark:text-gray-400"
                                >
                                    No pending deliveries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeliveryTable;