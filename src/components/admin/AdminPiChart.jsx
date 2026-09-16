"use client";

import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Children",
];

const COLORS = [
    "#6366F1",
    "#22C55E",
    "#F59E0B",
    "#06B6D4",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
];

const AdminPiChart = ({ booksData = [] }) => {
    // Count books according to category
    const categoryData = categories.map((category) => {
        const count = booksData.filter(
            (book) =>
                book.category?.toLowerCase() === category.toLowerCase()
        ).length;

        return {
            name: category,
            value: count,
        };
    });

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Books by Category
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Distribution of all books across categories
                </p>
            </div>

            {/* Chart */}
            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={categoryData}
                            cx="50%"
                            cy="45%"
                            innerRadius={80}
                            outerRadius={130}
                            paddingAngle={3}
                            dataKey="value"
                            nameKey="name"
                            label={({ name, value }) =>
                                `${name}: ${value}`
                            }
                        >
                            {categoryData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            formatter={(value, name) => [
                                `${value} books`,
                                name,
                            ]}
                            contentStyle={{
                                borderRadius: "10px",
                                border: "none",
                                boxShadow:
                                    "0 4px 20px rgba(0, 0, 0, 0.12)",
                            }}
                        />

                        <Legend
                            verticalAlign="bottom"
                            height={36}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminPiChart;