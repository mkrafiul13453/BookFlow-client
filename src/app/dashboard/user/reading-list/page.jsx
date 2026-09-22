import ReadCard from "@/components/user/ReadCard";
import { getOrdersByUser } from "@/lib/api/order";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const userReadingListPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-gray-500">
                    Please login to see your reading list.
                </p>
            </div>
        );
    }

    const orders = await getOrdersByUser(user.id);

    // Only get delivered orders
    const deliveredOrders = orders.filter(
        (order) => order.deliveryStatus === "delivered"
    );

    // Get all books from delivered orders
    const deliveredBooks = deliveredOrders.flatMap(
        (order) => order.products || []
    );

    console.log("Delivered Books:", deliveredBooks);

    return (
        <div className="p-6">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Reading List
                </h1>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Books from your delivered orders
                </p>
            </div>

            {/* No Books */}
            {deliveredBooks.length === 0 ? (
                <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400">
                        You do not have any delivered books yet.
                    </p>
                </div>
            ) : (
                /* Books Grid */
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
                    {deliveredBooks.map((book, index) => (
                        <ReadCard
                            key={`${book.productId}-${index}`}
                            book={book}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default userReadingListPage;