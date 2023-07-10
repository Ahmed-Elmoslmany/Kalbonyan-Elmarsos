import React, { useState } from "react";

import classes from "./form.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import List from "./List";
import ShowModal from "../UI/showModal";
const usersList = [];

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Non valid input",
        message: "Please enter Valid input"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Non valid age",
        message: "Please enter Valid age"
      })
      return;
    }
    props.onAddUser(enteredUserName, enteredAge )
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && <ShowModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="Ahmed Elmoslmany"
          value={enteredUserName}
          onChange={usernameChangeHandler}
          ></input>
        <label>Age</label>
        <input
          type="number"
          placeholder="21"
          value={enteredAge}
          onChange={ageChangeHandler}
          ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
          </div>
  );
};

export default UserForm;
