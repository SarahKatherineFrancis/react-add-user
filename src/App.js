import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [userslist, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userslist} />
    </div>
  );
}

export default App;
