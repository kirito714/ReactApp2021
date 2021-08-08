import React from 'react';
import { Link } from "react-router-dom";
import "../components/home.css"
import { makeStyles } from '@material-ui/core/styles';
import Auth from "../utils/auth";

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
    
   {!Auth.loggedIn() ? (
    <div className = "home-page">
      <h1>Welcome to Events Near You!</h1>
      <h2>With our application you will never miss out<br/> on the fun events going on in your area! </h2>
      <h4>PLease <Link to="/Login">Login</Link> or <Link to="/Signup">Signup</Link> to find events</h4>
      </div>
      ) : ( 
        <>
        <div className="home-page">
        <h1>Welcome to Events Near You!</h1>
        <h2>With our application you will never miss out<br/> on the fun events going on in your area! </h2>
        </div>
        </>
        )}
        </>
        );
        
  }

