import React from "react";
import EventCard from "../components/EventCard";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
          <Button variant="outlined" size="large" className={classes.button}>
            Search by Area!
          </Button>
        </Link>
      </div>
      <div className={classes.buttonDiv}>
        <Button
          onClick={() => window.location.assign("/SearchEvent")}
          className={classes.buttonProfile}
        >
          Search By Artist!
        </Button>
      </div>
      <div className={classes.buttonDiv}>
        <Button
          onClick={() => window.location.assign("/SearchArtist")}
          className={classes.buttonProfile}
        >
          Your Saved Concerts Here!!!
        </Button>
      </div>
      <EventCard />
    </div>
  );
};

export default Profile;
