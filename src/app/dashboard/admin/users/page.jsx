import UserTable from "@/components/admin/UserTable";
import { getAllUser } from "@/lib/api/user";
import React from "react";

const adminUsersPage = async () => {
    const allUser = await getAllUser();

    console.log("All Users:", allUser);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Users Management
                </h1>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    View and manage all registered users
                </p>
            </div>

            {/* Users Table */}
            <UserTable allUser={allUser} />
        </div>
    );
};

export default adminUsersPage;