import UserCategoryPieChart from "@/components/user/UserCategoryPieChart";
import { getOrdersByUser } from "@/lib/api/order";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const userDashboardHomePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return (
            <div className="text-gray-900 dark:text-white">
                Please login first.
            </div>
        );
    }

    const orders = await getOrdersByUser(user.id);

    // ------------------------------------
    // Only delivered orders
    // ------------------------------------

    const deliveredOrders = orders.filter(
        (order) => order.deliveryStatus === "delivered"
    );

    // ------------------------------------
    // Category count
    // ------------------------------------

    const categoryCount = {
        Fiction: 0,
        "Non-Fiction": 0,
        Science: 0,
        Technology: 0,
        History: 0,
        Biography: 0,
        Children: 0,
    };

    deliveredOrders.forEach((order) => {
        order.products?.forEach((product) => {
            const category = product.category;

            if (categoryCount[category] !== undefined) {
                categoryCount[category] += 1;
            }
        });
    });

    // ------------------------------------
    // Convert category data for Recharts
    // ------------------------------------

    const categoryData = Object.entries(categoryCount)
        .filter(([_, value]) => value > 0)
        .map(([name, value]) => ({
            name,
            value,
        }));

    // ------------------------------------
    // Total cost from delivered orders
    // ------------------------------------

    const totalOverallCost = deliveredOrders.reduce(
        (total, order) => {
            return total + Number(order.totalPrice || 0);
        },
        0
    );

    // ------------------------------------
    // Colors for pie chart
    // ------------------------------------

    const chartColors = [
        "#6366f1",
        "#22c55e",
        "#f59e0b",
        "#ef4444",
        "#06b6d4",
        "#8b5cf6",
        "#ec4899",
    ];

    const finalCategoryData = categoryData.map((item, index) => ({
        ...item,
        color: chartColors[index % chartColors.length],
    }));

    return (
        <div className="p-4 md:p-6">
            {/* Page Heading */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    Dashboard Overview
                </h1>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Welcome back, {user.name}
                </p>
            </div>

            {/* Total Cost Card */}
            <div className="mb-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Total Overall Cost
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                        ${totalOverallCost.toFixed(2)}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Total amount spent on delivered orders
                    </p>
                </div>
            </div>

            {/* Category Pie Chart */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Delivered Books by Category
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Categories of books from your delivered orders
                    </p>
                </div>

                {finalCategoryData.length > 0 ? (
                    <UserCategoryPieChart data={finalCategoryData} />
                ) : (
                    <div className="flex h-[300px] items-center justify-center text-gray-500 dark:text-gray-400">
                        No delivered books found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default userDashboardHomePage;