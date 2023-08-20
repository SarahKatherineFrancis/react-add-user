import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card/Card";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input name="age" type="text" onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
