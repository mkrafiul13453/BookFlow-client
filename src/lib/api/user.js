const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getAllUser = async () => {
    const res = await fetch(`${baseUrl}/user`, {
        method: "GET",
        headers: {

            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return data;
};

export const deleteUser = async (userId) => {
    const res = await fetch(`${baseUrl}/user/${userId}`, {
        method: "DELETE",
    });

    return res.json();
};