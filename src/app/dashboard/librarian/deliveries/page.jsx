import DeliveryTable from "@/components/librarian/DeliveryTable";
import { getLibrarianOrders } from "@/lib/api/order";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const LibrarianDeliveriesPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;

    if (!userId) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-semibold">
                    Please login first.
                </h2>
            </div>
        );
    }

    const orderData = await getLibrarianOrders(userId);

    return (
        <div className="p-6">
            <DeliveryTable
                orders={orderData}
                userId={userId}
            />
        </div>
    );
};

export default LibrarianDeliveriesPage;