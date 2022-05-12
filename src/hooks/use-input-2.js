import {useState} from 'react';
const useInput2 = (validateValue) => {
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);

    const isValueValid = validateValue(enteredValue);
    const hasError = !isValueValid && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueBlurHandler = (event) => {
        setIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }


    return {
        enteredValue:enteredValue,
        valueIsValid:isValueValid,
        valueChangeHandler,
        valueBlurHandler,
        hasError:hasError,
        reset
    }
}


export default useInput2;