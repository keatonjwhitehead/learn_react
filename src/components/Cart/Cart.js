import {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalCount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1});
    }
    const cartItems = (
        <ul className={classes['cart-itesm']}>
            {
                cartCtx.items.map((book) => (
                    <CartItem 
                        isbn = {book.isbn}
                        title = {book.title}
                        subtitle = {book.subtitle}
                        author = {book.author}
                        pages = {book.pages}
                        amount = {book.amount}
                        onRemove={cartItemRemoveHandler.bind(null,book.isbn)}
                        onAdd={cartItemAddHandler.bind(null,book)}
                    />

                ))
            }
        </ul>
    );
    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Number of Books</span>
                <span>{totalCount}</span>
            </div>
            <div className = {classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}> Close</button>
                {hasItems && <button className={classes.button}>Check Out</button>}
            </div>
        </Modal>
    );
}

export default Cart;