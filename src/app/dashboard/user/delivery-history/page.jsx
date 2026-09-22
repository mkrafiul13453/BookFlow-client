import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getOrdersByUser } from "@/lib/api/order";
import DeliveryHistoryTable from "@/components/user/DeliveryHistoryTable";

const UserDeliveryHistoryPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return (
            <div>
                Please login first.
            </div>
        );
    }

    const orders = await getOrdersByUser(user.id);

    console.log("My Orders:", orders);

    return (
        <div>
            <DeliveryHistoryTable
                orders={orders}
                user={user}
            />
        </div>
    );
};

export default UserDeliveryHistoryPage;