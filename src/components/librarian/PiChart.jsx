"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
];

const PiChart = ({ data }) => {
    return (
        <div className="w-full rounded-2xl border bg-white p-5 shadow-sm dark:bg-gray-900">
            <div className="mb-4">
                <h2 className="text-xl font-bold">
                    Books by Category
                </h2>

                <p className="text-sm text-gray-500">
                    Distribution of your books by category
                </p>
            </div>

            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={110}
                            innerRadius={55}
                            paddingAngle={2}
                            label={({ category, percent }) =>
                                `${category} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default PiChart;