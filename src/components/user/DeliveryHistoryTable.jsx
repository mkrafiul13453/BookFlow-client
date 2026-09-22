import React from "react";

const DeliveryHistoryTable = ({ orders, user }) => {
    const deliveryItems = orders.flatMap((order) =>
        order.products.map((product) => ({
            orderId: order._id,
            userName: user.name,
            bookName: product.title,
            deliveryStatus: order.deliveryStatus,
            deliveryDate: order.deliveredAt,
        }))
    );

    return (
        <div className="w-full overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[700px]">
                <thead>
                    <tr className="border-b">
                        <th className="px-6 py-4 text-left">
                            User Name
                        </th>

                        <th className="px-6 py-4 text-left">
                            Book Name
                        </th>

                        <th className="px-6 py-4 text-left">
                            Delivery Date
                        </th>

                        <th className="px-6 py-4 text-left">
                            Delivery Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {deliveryItems.map((item, index) => (
                        <tr
                            key={`${item.orderId}-${index}`}
                            className="border-b last:border-b-0"
                        >
                            <td className="px-6 py-4 font-bold">
                                {item.userName}
                            </td>

                            <td className="px-6 py-4 font-medium">
                                {item.bookName}
                            </td>

                            <td className="px-6 py-4">
                                {item.deliveryDate
                                    ? new Date(
                                        item.deliveryDate
                                    ).toLocaleDateString()
                                    : "Not Delivered"}
                            </td>

                            <td className="px-6 py-4">
                                <span
                                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${item.deliveryStatus === "delivered"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {item.deliveryStatus === "delivered"
                                        ? "Delivered"
                                        : "Pending"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryHistoryTable;