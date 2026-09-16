import PiChart from "@/components/librarian/PiChart";
import { getBooksByUser } from "@/lib/api/allBooks";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Children",
];

const LibrarianDashboardPage = async () => {
    // Get logged-in user's session
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;

    // If user is not logged in
    if (!userId) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <h2 className="text-xl font-semibold">
                    Please login first
                </h2>
            </div>
        );
    }

    // Get only logged-in user's books
    const booksData = await getBooksByUser(userId);

    // If API directly returns an array
    const books = Array.isArray(booksData)
        ? booksData
        : booksData?.data || [];

    // Count books for each category
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = books.filter(
            (book) => book.category === category
        ).length;

        return acc;
    }, {});

    const pieChartData = categories.map((category) => ({
        category,
        count: categoryCounts[category],
    }));

    return (
        <div className="space-y-6 p-4 md:p-6">

            {/* Page Heading */}
            <div>
                <h1 className="text-2xl font-bold md:text-3xl">
                    Librarian Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Overview of your book inventory
                </p>
            </div>
            
            {/* Pie Chart */}
            <div className="grid grid-cols-1 gap-6">
                <PiChart data={pieChartData} />
            </div>

            {/* Total Books + Category Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {/* Total Books Card */}
                <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg sm:col-span-2 lg:col-span-2">
                    <p className="text-sm font-medium opacity-90">
                        Total Books
                    </p>

                    <h2 className="mt-3 text-5xl font-bold">
                        {books.length}
                    </h2>

                    <p className="mt-3 text-sm opacity-90">
                        Total books added by you
                    </p>
                </div>

                {/* Category Cards */}
                {categories.map((category) => (
                    <div
                        key={category}
                        className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-gray-900"
                    >
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {category}
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            {categoryCounts[category]}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Books
                        </p>
                    </div>
                ))}

            </div>
            

        </div>
    );
};

export default LibrarianDashboardPage;