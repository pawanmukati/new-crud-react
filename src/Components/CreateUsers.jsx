import React, { useState, useEffect } from "react";
import axios from "axios";

const initialVal = [{
  first_name: "",
  email: "",
  address: "",
  phone: ""
}];
const base_URL = "http://localhost:3000/users";

const createUsers = () => {
  const [users, setUsers] = useState(initialVal);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUsers(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit :", users)
    try {
      const response = await axios.post(base_URL, users);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
    // Reset form after submission if needed
    setUsers(initialVal);
  }

  return (
    <>
      <div className="container crud-table">
        <div className="crude-form__wrapper">
          <h3 ng-show="editForm">Edit user</h3>
          <form name="userForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                value={users.first_name}
                placeholder="Edit name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={users.email}
                placeholder="Edit email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                className="form-control"
                type="text"
                name="address"
                value={users.address}
                placeholder="Edit address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                value={users.phone}
                placeholder="Edit phone"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit" onClick={submitHandler}>
              Save change
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default createUsers;
