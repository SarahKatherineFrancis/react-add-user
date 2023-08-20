import React, { useState } from "react";
import "./AddUser.css";

const initialUserInput = {
  username: "",
  age: "",
};

const AddUser = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form className="input" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        onChange={(e) => inputChangeHandler("username", e.target.value)}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        name="age"
        type="text"
        onChange={(e) => inputChangeHandler("username", e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
