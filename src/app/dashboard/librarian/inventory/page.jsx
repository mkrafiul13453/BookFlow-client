import Table from "@/components/librarian/Table";
import { getBooksByUser } from "@/lib/api/allBooks";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import React from "react";

const LibrarianInventoryPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id;
    console.log("User ID:", userId);
    const data = await getBooksByUser(userId);

    // console.log("data", data);

    return (
        <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                        Inventory
                    </h1>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Manage your books, update information, or remove books
                        from your inventory.
                    </p>
                </div>

                {/* Books Table */}
                <Table books={data} userId={userId} />

            </div>

        </div>
    );
};

export default LibrarianInventoryPage;