const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const addToCart = async (cartData) => {
    const res = await fetch(`${baseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
    });

    return res.json();
};

export const getCart = async (userId) => {
    const res = await fetch(
        `${baseUrl}/cart?userId=${userId}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};

export const removeFromCart = async (cartId, userId) => {
    const res = await fetch(
        `${baseUrl}/cart/${cartId}?userId=${userId}`,
        {
            method: "DELETE",
        }
    );

    return res.json();
};

export const updateCartQuantity = async (
    cartId,
    userId,
    quantity
) => {
    const res = await fetch(
        `${baseUrl}/cart/${cartId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                quantity,
            }),
        }
    );

    return res.json();
};