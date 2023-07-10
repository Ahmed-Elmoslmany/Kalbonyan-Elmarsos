import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => enteredName.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  



  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true
  }

 
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    

    if (!enteredNameIsValid ) {
      return;
    }

    resetNameInput()
    resetEmailInput()
    console.log(enteredName);
  };

  const nameClassInput = nameInputHasError
    ? "form-control invalid"
    : "form-control";

    const emailClassInput = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClassInput}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError && (
        <p className={"form-control invalid"}>Please input something</p>
      )}

      <div className={emailClassInput}>
        <label htmlFor="email">Your email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError && (
        <p className={"form-control invalid"}>Please input something</p>
      )}

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
