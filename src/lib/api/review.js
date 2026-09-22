const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;


// Get reviews
export const getReviewsByBook = async (bookId) => {
    try {

        const response = await fetch(
            `${baseUrl}/reviews?bookId=${bookId}`
        );

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(
            "Get reviews error:",
            error
        );

        return {
            success: false,
            reviews: [],
        };
    }
};


// Add review
export const addReview = async (reviewData) => {
    try {

        const response = await fetch(
            `${baseUrl}/reviews`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(reviewData),
            }
        );

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(
            "Add review error:",
            error
        );

        return {
            success: false,
            message: "Failed to add review",
        };
    }
};



// Get all reviews written by one user
export const getReviewsByUser = async (userId) => {
    try {
        const response = await fetch(
            `${baseUrl}/reviews/user/${userId}`
        );

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Get user reviews error:", error);

        return {
            success: false,
            reviews: [],
        };
    }
};