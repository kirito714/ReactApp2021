import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
  container: {
    marginTop: "150px"
  },
  iconButton: {
    padding: 10,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 215
  },
}));

// signUp for that handles formState
export default function SignupPage() {
  const classes = useStyles();
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
      <Container maxWidth="sm" className={classes.container}>
        <h2>Sign Up</h2>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <div>
              <TextField
                id="filled-username-input"
                name="username"
                label="Your username"
                type="username"
                autoComplete="current-username"
                variant="filled"
                // value={formState.name}
                value={formState.name}
                onChange={handleChange}
              ></TextField>
            </div>

            <div>
              <TextField
                id="filled-email-input"
                name="email"
                label="Your email"
                type="email"
                autoComplete="current-email"
                variant="filled"
                value={formState.name}
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
                  value={formState.name}
                  onChange={handleChange}
                />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<PersonAddIcon/>}
                  >
                  Submit
                </Button>
              </form>
            )}

        {error && <div>{error.message}</div>}
      </Container>
    </>
  );
}
