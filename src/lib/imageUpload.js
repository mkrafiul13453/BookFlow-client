export const imageUpload = async (image) => {
    // console.log(image);
    const formData = new FormData();
    // console.log(formData);
    formData.append("image", image);
    // console.log(process.env.NEXT_PUBLIC_IMGBB_KEY);

    const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
            method: "POST",
            body: formData,
        },
    );

    const data = await res.json();
    console.log(data)
    return data.data.url;    //data ter moddeh ase.
    //If you do not get the proper data but  your code is full ok then use Optional Chaining Operator must must must otherwise 4 hours of time will be gone from your life.
};