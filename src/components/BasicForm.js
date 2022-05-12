import useInput2 from "../hooks/use-input-2";

const BasicForm = (props) => {
  
  const {
    enteredValue:firstNameInput,
    valueIsValid:firstNameValid,
    valueChangeHandler: firstNameHandler,
    valueBlurHandler: firstNameBlurHandler,
    hasError:firstNameError,
    reset:firstReset

  } = useInput2(value => value.trim() !== '');
  const {
    enteredValue:lastNameInput,
    valueIsValid:lastNameValid,
    valueChangeHandler: lastNameHandler,
    valueBlurHandler: lastNameBlurHandler,
    hasError:lastNameError,
    reset:lastNameReset

  } = useInput2(value => value.trim() !== '');
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    enteredValue:emailInput,
    valueIsValid:emailValid,
    valueChangeHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    hasError:emailError,
    reset:emailReset

  } = useInput2(value => value.match(pattern));
  let isFormValid = false;
  if(firstNameValid && lastNameValid && emailValid){
    isFormValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if(!isFormValid){
      return;
    }
    
    firstReset();
    lastNameReset();
    emailReset();
  }
  const nameInputClasses = firstNameError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailError ? 'form-control invalid' : 'form-control';
  
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='firstName' onChange={firstNameHandler} onBlur={firstNameBlurHandler} value={firstNameInput} />
          {firstNameError && <p className='error-text'>Please enter a valid first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='laseName' onChange={lastNameHandler} onBlur={lastNameBlurHandler} value={lastNameInput} />
          {lastNameError && <p className='error-text'>Please enter a valid last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailHandler} onBlur={emailBlurHandler} value={emailInput} />
        {emailError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
