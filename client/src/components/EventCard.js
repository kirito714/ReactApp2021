import React from "react";
import Auth from "../utils/auth";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./eventcard.css";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_CONCERT } from "../utils/mutations";
import { removeConcertId } from "../utils/localStorage";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    maxWidth: 345,
    minWidth: 300,
  },
});

export default function EventCard() {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_ME);
  const userData = data;
  console.log(userData);

  const [removeConcert, { error }] = useMutation(
    REMOVE_CONCERT
    //   , {
    //   update(cache, {data: {removeConcert} }) {
    //     try{
    //       const cacheData = cache.readQuery({
    //         query: GET_ME
    //       });

    //       const newData = {
    //         saveConcert: cacheData.saveConcert.filter((c) => c.concertId !== concertId)
    //       }

    //       if (cacheData) {
    //         cache.writeQuery({
    //           query: GET_ME,
    //           data: newData
    //         });
    //       }

    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }
  );

  const handleRemoveConcert = async (concertId) => {
    console.log(concertId);

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

  if (loading) {
    return <h2> LOADING... </h2>;
  }

  return (
    <>
      <div className="event-container">
        {userData.me.saveConcert.map((concert) => {
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
                      {concert.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    type="button"
                    onClick={function removeOne() {
                      const removeMongo = handleRemoveConcert(concert.concertId);
                      const removeLocal = removeConcertId(concert.concertId);
                      return removeMongo,removeLocal;
                    }}
                  >
                    Delete Event
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
// removeConcertId(concert.concertId)
// handleRemoveConcert(concert.concertId)
