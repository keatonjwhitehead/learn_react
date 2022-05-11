import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './BookItemForm.module.css';



const BookItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const bookRef = useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const bookSelectAmount = bookRef.current.value;
        if(bookSelectAmount.trim().length === 0 || bookSelectAmount < 1 || bookSelectAmount > 5){
            setAmountIsValid(true)
        }
        props.onAddToCart(bookSelectAmount);
    }
    return (
        <div>
            <form className={classes.form +" " + classes.conatiner} onSubmit={submitHandler} > 
                 <Input 
                    ref={bookRef}
                    input={{
                        id:  props.id,
                        type:'number',
                        min:'1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                        
                    }}
                />
                <button>
                    Add
                </button>
                
            </form>
        </div>
    )
}

export default BookItemForm;