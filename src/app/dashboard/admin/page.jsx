import AdminPiChart from "@/components/admin/AdminPiChart";
import AdminUserStats from "@/components/admin/AdminUserStats";
import { getAllBooks } from "@/lib/api/allBooks";
import { getAllUser } from "@/lib/api/user";
import React from "react";

const adminDashBoardHomePage = async () => {
    const booksData = await getAllBooks();

    const allUser = await getAllUser();

    console.log("All Users:", allUser);

    return (
        <div className="space-y-6">
            {/* Dashboard Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Admin Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Overview of your library books and users
                </p>
            </div>

            {/* User Role Statistics */}
            <AdminUserStats allUser={allUser} />

            {/* Books Pie Chart */}
            <AdminPiChart booksData={booksData} />
        </div>
    );
};

export default adminDashBoardHomePage;