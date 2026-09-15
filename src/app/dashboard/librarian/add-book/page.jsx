"use client";

import { useState } from "react";
import {
    Button,
    Input,
    Label,
    TextArea,
    TextField,
    Select,
    ListBox,
} from "@heroui/react";
import { toast } from "react-toastify";
import { addBooks } from "@/lib/action/books";
import { authClient } from "@/lib/auth-client";
import { imageUpload } from "@/lib/imageUpload";
import { useRouter } from "next/navigation";

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Children",
];

export default function AddBookForm() {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const userId = session?.user?.id;

    const [category, setCategory] = useState("");
    const [deliveryFee, setDeliveryFee] = useState(10);
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const image = await imageUpload(data?.image);

        const bookData = {
            ...data,
            userId,
            image,
        };

        console.log("Book Data:", bookData);

        const result = await addBooks(bookData);

        router.refresh();
        toast.success("Book added successfully!");
        
        
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
            <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    Add New Book
                </h2>

                <p className="mt-1 text-sm text-default-500">
                    Add a new book to your BookFlow collection.
                </p>
            </div>

            <form
                onSubmit={onSubmit}
                encType="multipart/form-data"
                className="flex flex-col gap-5"
            >
                {/* Title */}
                <TextField
                    className="w-full"
                    name="title"
                    variant="secondary"
                    isRequired
                >
                    <Label>Title</Label>
                    <Input placeholder="Enter book title" />
                </TextField>

                {/* Author */}
                <TextField
                    className="w-full"
                    name="author"
                    variant="secondary"
                    isRequired
                >
                    <Label>Author</Label>
                    <Input placeholder="Enter author's name" />
                </TextField>

                {/* Description */}
                <TextField
                    className="w-full"
                    name="description"
                    variant="secondary"
                    isRequired
                >
                    <Label>Description</Label>
                    <TextArea
                        placeholder="Enter book description"
                        rows={5}
                    />
                </TextField>

                {/* Price + Delivery Fee */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Price */}
                    <TextField
                        className="w-full"
                        name="price"
                        variant="secondary"
                        isRequired
                    >
                        <Label>Price</Label>
                        <Input
                            type="number"
                            placeholder="Enter book price"
                        />
                    </TextField>

                    {/* Delivery Fee */}
                    <TextField
                        className="w-full"
                        name="deliveryFee"
                        variant="secondary"
                        isRequired
                    >
                        <Label>Delivery Fee</Label>
                        <Input
                            type="number"
                            value={deliveryFee}
                            onChange={(e) => setDeliveryFee(e.target.value)}
                            placeholder="Enter delivery fee"
                        />
                    </TextField>

                </div>

                {/* Category */}
                <div className="w-full">
                    <Select
                        className="w-full"
                        name="category"
                        placeholder="Select a category"
                        selectedKey={category}
                        onSelectionChange={(key) =>
                            setCategory(key?.toString() || "")
                        }
                        isRequired
                    >
                        <Label>Category</Label>

                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                            <ListBox>
                                {categories.map((item) => (
                                    <ListBox.Item
                                        key={item}
                                        id={item}
                                        textValue={item}
                                    >
                                        {item}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/* Image */}
                <TextField
                    className="w-full"
                    name="image"
                    type="file"
                    variant="secondary"
                    isRequired
                >
                    <Label>Book Image</Label>

                    <input
                        name="image"
                        type="file"
                        accept="image/*"
                        className="w-full rounded-lg border border-default-300 
                        bg-default-100 px-3 py-2 text-sm cursor-pointer"
                    />
                </TextField>

                {/* Buttons */}
                <div className="flex flex-col-reverse sm:flex-row 
                justify-end gap-3 pt-4">
                    <Button
                        type="button"
                        variant="secondary"
                        className="w-full sm:w-auto"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto"
                    >
                        Add Book
                    </Button>
                </div>
            </form>
        </div>
    );
}