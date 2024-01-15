import { useState } from "react";
import BookModel from "../../models/BookModel";

const BookCheckoutPage = () => {
    const [book, setBook] = useState<BookModel>();
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [httpError, setHttpError] = useState(null);
    return (
        <div>
            <h3>Hi World..</h3>
        </div>
    );
};
export default BookCheckoutPage;
