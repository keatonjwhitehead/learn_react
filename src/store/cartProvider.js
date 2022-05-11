import {useReducer, useContext} from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalCount: 0
}

//action is given by the manipulation your code does, where as state is the last snapshot of the known data
const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedCount = state.totalCount + action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.isbn === action.item.isbn
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount:Number(existingCartItem.amount) + Number(action.item.amount),
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            
        }
        else {
            updatedItems = state.items.concat(action.item);
            
        }
        return{
            items: updatedItems,
            totalCount: updatedCount
        }

    }
    if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.isbn === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedCount = state.totalCount - 1;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(
                (item) => item.isbn != action.id
            );
        }
        else {
            const updatedItem = {...existingItem, amount: existingItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
            
        }
        return {
            items: updatedItems,
            totalAmount: updatedCount
        }
    }
    return defaultCartState;
}



const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item:item});
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id:id});
    }

    const cartContext = {
        items:cartState.items,
        totalCount:cartState.totalCount,
        addItem: addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider; 