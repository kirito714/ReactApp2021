import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };



return (
    <>
    <h1>Log In!!</h1>
      <div classNameNameName="container">
      <form classNameName="form signup-form" onSubmit={handleFormSubmit}>
          <input
            className="form-input"
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
};

export default Login;