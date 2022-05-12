import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value:enteredName, 
    isValid:enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler:nameChangeHandler, 
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = useInput(value => value.trim() !== '');
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    value:enteredEmail, 
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler:emailChangeHandler, 
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  } = useInput(value => value.trim() !== '' && value.match(pattern));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  }


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  const errorNoticeContent = () => {
    if(enteredEmail.trim() === ''){
      return <p className='error-text'>Email must not be empty</p>
    }
    if(enteredEmail.includes('@') || enteredEmail.includes('.') || enteredEmail.trim().length >= 6){
      return <p className='error-text'>Please enter a valid email</p>
    }
  }
  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value = {enteredName}/>
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler}value = {enteredEmail}/>
        {emailInputHasError && errorNoticeContent()}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
