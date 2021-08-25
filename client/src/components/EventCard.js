import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./cards.css";

import { useMutation } from "@apollo/client";
import { useLazyQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import { REMOVE_CONCERT } from "../utils/mutations";
import { removeConcertId } from "../utils/localStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
  paper: {
    width: "70ch",
    padding: 25,
  },
  title: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 215,
  },
  card: {
    width: 250,
    height: 400,
    margin: "5px",
  },
  media: {
    height: 140,
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
  buttonProfile: {
    color: "white",
    backgroundColor: "brown",
    opacity: "90%",
  },
}));

export default function EventCard( {props} ) {
  const classes = useStyles();

  console.log(props);

  //lazy loading.. will only get triggered when calling the getUser function
  //down in the delete button
  const [getUser, { data }] = useLazyQuery(GET_ME, {
    fetchPolicy: "cache-and-network"
  })

  const [removeConcert] = useMutation(REMOVE_CONCERT);
  
  const handleRemoveConcert = async (concertId) => {
    // console.log(concertId);

    // get token from Auth.js
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const { data } = await removeConcert({
      variables: {
        concertId,
      },
    });
  };

  return (
    <>
      <div className="card-container">
        {props.saveConcert.length > 0 ? (
          props.saveConcert.map((concert) => {
            return (
              <div className="card" key={concert.concertId}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                      title={concert.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {concert.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {concert.venue}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {concert.date}
                      </Typography>
                      <br></br>
                      <a
                        href={`https://www.ticketmaster.com/search?q=${concert.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Buy tickets here
                      </a>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      type="button"
                      onClick={function removeOne() {
                        // window.location.assign("/Profile");
                        const removeMongo = handleRemoveConcert(
                          concert.concertId
                        );
                        const removeLocal = removeConcertId(concert.concertId);
                        getUser();
                        return removeMongo, removeLocal;
                      }}
                    >
                      Delete Event
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        ) : (
          <h1>No Saved Events!</h1>
        )}
      </div>
    </>
  );
}
