import React, { useState, useEffect } from "react";

import Auth from "../utils/auth";
import { getSavedConcertIds, saveConcertIds } from "../utils/localStorage";
import SearchConcertData from "../utils/API";

import { useMutation } from "@apollo/client";
import { SAVE_CONCERT } from "../utils/mutations";
import { GET_ME } from "../utils/queries";

//SEARCH BAR
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

//CARDS THAT CONTAIN RESULTS FROM SEARCH
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
  paper: {
    width: "70ch",
  },
  iconButton: {
    padding: 10,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 215,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

// FUNCTION TO SEARCH CONCERTS AND CHOOSE WHICH TO SAVE ................
export default function Searchform() {
  // create state to hold our returned API Data from predicthq
  const [searchedConcerts, setSearchedConcerts] = useState([]);
  // create state to hold our search field data (from the input field in the search form)
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  // create a state to hold the saved concertId to use for local storage
  // getSavedConcertIds is a function in localstorage.js to get the ids in local storage
  const [savedConcertIds, setSavedConcertIds] = useState(getSavedConcertIds());

  // Using the useEffect hook to save saveConcertIds list to localStorage
  useEffect(() => {
    //saveConcertIds is a function inside of localStorage.js
    //the savedConcertIds is the value from the useState (what is in local storage)
    return () => saveConcertIds(savedConcertIds);
  });

  //HANDLE FORM SUBMIT
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      //Use API function of searchConcertData in API.js to send GET resquest
      const response = await SearchConcertData(searchInput);
      console.log(response);

      //   if (!response.ok) {
      //     throw new Error("Something went wrong!");
      //   }

      //JSON the repsonse for searchConcertData
      const concertInfo = await response.results;
      console.log(response.results);

      //Mapping over data we get back from API and
      //getting each piece of info for our model
      const concertData = concertInfo.map((concert) => ({
        concertId: concert.id,
        title: concert.title,
        description: concert.description,
        place: concert.timezone,
        venue: concert.entities[0].name,
        date: concert.start,
      }));

      //updating useState
      setSearchedConcerts(concertData);
      // clearing searchInput
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  //USE MUTATION TO UPDATE DATABASE
  const [saveConcert, { error }] = useMutation(SAVE_CONCERT, {
    update(cache, { data: { saveConcert } }) {
      try {
        const cacheData = cache.readQuery({
          query: GET_ME,
        });

        if (cacheData) {
          cache.writeQuery({
            query: GET_ME,
            data: { savedBooks: [...cacheData.savedConcerts, saveConcert] },
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  //SAVE Concert TO MODEL/DATABASE
  const handleSaveConcert = async (concertId) => {
    //look through the searchedConcerts useState and
    //find the concert that matches the concertId being passed through this function
    const concertToSave = searchedConcerts.find(
      (concert) => concert.concertId === concertId
    );

    // get token from Auth.js
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      //use mutation function and pass in the concert info that needs to be saved
      const { data } = await saveConcert({
        variables: {
          ...concertToSave,
        },
      });

      //if concert saves to user's account, save the concertId to state,
      // which will save in local storage
      setSavedConcertIds([...savedConcertIds, concertToSave.concertId]);
    } catch (err) {
      console.error(` This is the catch block for handleSaveConcert`, err);
    }
  };

  const classes = useStyles();

  return (
    <>
      {/* SEARCH BAR */}
      <Paper className={classes.paper}>
        <h1>Search for an Event Near You</h1>
        <Container maxWidth="sm">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <div>
              <TextField
                id="filled-city-input"
                label="City"
                type="city"
                autoComplete="current-city"
                variant="filled"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              ></TextField>
            </div>
            {/* <div>
                    <TextField
                    id="filled-artist-input"
                    label="Artist"
                    type="artist"
                    autoComplete="current-artist"
                    variant="filled"
                    >
                    </TextField>
                </div> */}
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                type="submit"
              >
                Search
              </Button>
            </div>
          </form>
        </Container>
      </Paper>

      {/* CARDS */}
      <div className="event-container">
        <h2>
          {searchedConcerts.length
            ? `Viewing ${searchedConcerts.length} results:`
            : "Search for a concert to see your options"}
        </h2>
        <Container maxWidth="sm">
          {searchedConcerts.map((concert) => {
            return (
              <Card className={classes.card} key={concert.concertId}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://placekitten.com/345/140"
                    title={concert.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {concert.venue}
                      {concert.place}
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
                    disabled={savedConcertIds?.some(
                      (savedConcertId) => savedConcertId === concert.concertId
                    )}
                    onClick={() => handleSaveConcert(concert.concertId)}
                  >
                    {savedConcertIds?.some(
                      (savedConcertId) => savedConcertId === concert.concertId
                    )
                      ? "Event has already been saved"
                      : "Save event!"}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Container>
      </div>
    </>
  );
}
