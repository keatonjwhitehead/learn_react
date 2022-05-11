import { Fragment } from "react";
import BookSummary from './BookSummary';
import AvailableBooks from './AvailableBooks';
const Books = () => {
    return (
        <Fragment>
            <BookSummary />
            <AvailableBooks />
            
        </Fragment>
    )
}

export default Books;