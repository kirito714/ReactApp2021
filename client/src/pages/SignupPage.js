import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';

// signUp for that handles formState
export default function SignupPage() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <h1>Sign up</h1>
      <div className="container">
        <form className="form login-form" onSubmit={handleFormSubmit}>
          <input
            classNameName="form-input"
            type="text"
            id="email-login"
            placeholder="Email:"
            value={formState.email}
            onChange={handleChange}
          />

          <input
            classNameName="form-input"
            type="password"
            id="password-login"
            placeholder="Password:"
            value={formState.password}
            onChange={handleChange}
          />

          <button
            classNameName="btn btn-primary"
            type="submit"
            style={{ cursor: "pointer" }}
          >
            login
          </button>
        </form>

        <form classNameName="form signup-form" onSubmit={handleFormSubmit}>
          <input
            classNameName="form-input"
            type="text"
            id="name-signup"
            placeholder="name:"
            value={formState.name}
            onChange={handleChange}
          />

          <input
            classNameName="form-input"
            type="text"
            id="email-signup"
            placeholder="Email:"
            value={formState.email}
            onChange={handleChange}
            value={formState.password}
            onChange={handleChange}
          />

          <input
            classNameName="form-input"
            type="password"
            id="password-signup"
            placeholder="Password:"
          />

          <button classNameName="btn btn-primary" type="submit">
            signup
          </button>
        </form>
      </div>
    </>
  );
}
