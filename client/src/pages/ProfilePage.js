import React from "react";
import EventCard from "../components/EventCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Auth from "../utils/auth";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 200,
  },
  buttonDiv: {
    marginTop: 40,
    marginBottom: 40,
    marginRight: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    color: "white",
    backgroundColor: "brown",
    opacity: "90%",
  },
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
      <div className={classes.buttonDiv}>
        <Link to="/SearchEvent" className={classes.link}>
          <Button variant="outlined" size="large" className={classes.button}
          >
            Search By Location
          </Button>
        </Link>
      </div>
      <div className={classes.buttonDiv}>
        <Link to="/SearchArtist" className={classes.link}>
          <Button variant="outlined" size="large" className={classes.button}
          >
            Search By Artist
          </Button>
        </Link>
      </div>
      <EventCard />
    </div>
  );
};

export default Profile;
