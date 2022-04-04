import React from "react";

const AddUser = (props) => {
  const AddUserHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <form action="" onSubmit={AddUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="username">Age(Years)</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
