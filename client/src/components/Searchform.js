import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
    paper: {
        width: "70ch"
    },
    iconButton: {
        padding: 10,
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: 215
    },
  }));

export default function Searchform() {
    const classes = useStyles();

    return(
        <>
        <h1>Search for an Event Near You</h1>
        <Paper component="form" className={classes.paper}>
            <Container maxWidth="sm">
                <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    id="filled-city-input"
                    label="City"
                    type="city"
                    autoComplete="current-city"
                    variant="filled"
                    >
                    </TextField>
                </div>
                <div>
                    <TextField
                    id="filled-artist-input"
                    label="Artist"
                    type="artist"
                    autoComplete="current-artist"
                    variant="filled"
                    >
                    </TextField>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >
                        Search
                    </Button>
                </div>
                </form>
            </Container>
        </Paper>
        </>
    )

}