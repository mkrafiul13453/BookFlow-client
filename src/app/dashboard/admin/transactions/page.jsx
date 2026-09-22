import TransactionsTable from "@/components/admin/TransactionsTable";
import { getAllOrder } from "@/lib/api/order";

const AdminTransactionPage = async () => {
    const orders = await getAllOrder();

    return (
        <div className="space-y-6 p-4 md:p-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    Transactions
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View and monitor all customer transactions.
                </p>
            </div>

            {/* Transaction Table */}
            <TransactionsTable orders={orders} />
        </div>
    );
};

export default AdminTransactionPage;