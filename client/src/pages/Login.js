import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: "", password: "" });
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
      email: "",
      password: "",
    });
  };

  return (
    <>
          <h1>Login Page!</h1>

          <Container maxWidth="sm">
          <h2>Log in</h2>
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/Profile">back to the Profile.</Link>
              </p>
            ) : (
              <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <div>
                <TextField
                  // className="form-input"
                  // placeholder="Your email"
                  // name="email"
                  // type="email"
                  id="filled-email-input"
                  name="email"
                  label="Your email"
                  type="email"
                  autoComplete="current-email"
                  variant="filled"
                  value={formState.email}
                  onChange={handleChange}
                />
                </div>

                <div>
                <TextField
                  // className="form-input"
                  // placeholder="******"
                  // name="password"
                  // type="password"
                  id="filled-password-input"
                  name="password"
                  label="******"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  value={formState.password}
                  onChange={handleChange}
                />
<<<<<<< HEAD

                <button style={{ cursor: "pointer" }} type="submit">
=======
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
>>>>>>> 215ae5a0684d18429d31a5a15c6ad674d7b3ddee
                  Submit
                </button>
              </form>
            )}

            {error && (<div>{error.message}</div>)}

            </Container>


    </>
  );
};

export default Login;
