import React from 'react';
import { Link } from "react-router-dom";
import "../components/home.css"
//Paola test for signup form styling
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Searchform from "../components/Searchform";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}));

export default function SearchPage() {
  const classes = useStyles();
  return (
    <>
    <div className = "home-page">
      <h1>Home Page!</h1>
      <h1>welcome to Events near you!</h1>
      <h2>With our application you will never miss out<br/> on the fun events going on in your area! </h2>
      <h4>PLease <Link to="/Login">Login</Link> or <Link to="/Signup">Signup</Link> to find events</h4>
      </div>
      {/* <Searchform /> */}

      {/* <Container maxWidth="sm">
        <h1>Sign Up</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="filled-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          variant="filled"
        >
        </TextField>
        </div>

        <div>
        <TextField
          id="filled-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="filled"
        />
        </div>

        <div>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        </div>
      </form>
      </Container>

      <Container maxWidth="sm">
        <h1>Sign In</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
          id="filled-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="filled"
        />
        </div>

        <div>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        </div>
      </form>
      </Container> */}
    </>
  );
}
