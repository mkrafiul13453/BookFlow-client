const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getAllOrder = async () => {
    const res = await fetch(`${baseUrl}/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    return data;
};

export const getOrdersByUser = async (userId) => {
    const res = await fetch(
        `${baseUrl}/orders?userId=${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    const data = await res.json();
    return data;
};


export const getLibrarianOrders = async (userId) => {
    const res = await fetch(
        `${baseUrl}/librarian/orders?userId=${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch librarian orders");
    }

    const data = await res.json();

    return data;
};


export const confirmDelivery = async ({
    orderId,
    productIds,
    userId,
}) => {
    const res = await fetch(
        `${baseUrl}/librarian/orders/${orderId}/delivery`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productIds,
                userId,
            }),
        }
    );

    if (!res.ok) {
        throw new Error("Failed to confirm delivery");
    }

    return await res.json();
};