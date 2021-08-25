import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
  iconButton: {
    padding: 10,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 215
  },
  container: {
    marginTop: "150px"
  },
  error: {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "brown",
    opacity: "95%",
    padding: "10px",
  }
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
      <Container maxWidth="sm" className={classes.container}>
      <h2>Log in</h2>
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <div>
            <TextField
              id="filled-email-input"
              name="email"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="filled"
              value={formState.email}
              onChange={handleChange}
            />
            </div>

            <div>
            <TextField
              id="filled-password-input"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              value={formState.password}
              onChange={handleChange}
            />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<PersonIcon/>}
              >
              Submit
            </Button>
          </form>
        )}

        {error && (<div className={classes.error}>{error.message}</div>)}

        </Container>


    </>
  );
};

export default Login;
