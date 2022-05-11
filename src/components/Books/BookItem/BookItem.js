import { useContext, useRef } from 'react';
import classes from './BookItem.module.css';
import BookItemForm from './BookItemForm';
import CartContext from '../../../store/cart-context';



const BookItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        
        cartCtx.addItem({
            isbn: props.isbn,
            title: props.title,
            subtitle: props.subtitle,
            author: props.author,
            amount: amount,
            pages: props.pages,
        });
    }
    const bookRef = useRef();
    return (
        <li id ={props.isbn} className={classes.container}>
            <div className={classes.book}>
                <h3>{props.title}</h3>
                <p className={classes.subtitle}>{props.subtitle}</p>
                <div className={classes.description}>{props.description}</div>
                <a href={props.website}>{props.website}</a>
            </div>
            <div>
            <p className={classes.inStock}>{props.inStock} In Stock</p>
            </div>
            <div>
                <BookItemForm onAddToCart={addToCartHandler} id={props.isbn}/> 
            </div>
        </li>
    )
}

export default BookItem;