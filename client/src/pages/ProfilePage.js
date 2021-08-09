import React from 'react';
import EventCard from "../components/EventCard";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 200
  }
}));

//FUNCTION TO CREATE SAVED CONCERTS CARDS ..................
const Profile = () => {
    const classes = useStyles();

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    if (!token) {
      return false;
    }

    return (
        <div className={classes.root}>
        <Link to="SearchPage">Search More Concerts!!!!</Link>
        <EventCard />
        </div>
    );

}

export default Profile;
