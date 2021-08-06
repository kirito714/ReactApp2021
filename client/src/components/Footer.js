import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    // <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#edc7b7', height: '100vh' }} >
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
      {/* <BottomNavigationAction label="Recents"  icon={<RestoreIcon />}/> */}
      <BottomNavigationAction label="Recents" onClick={()=> window.open("https://github.com/kirito714/ReactApp2021")} icon={<img src = "http://placekitten.com/50/50"/>}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </Typography>
//  </Container>

  );
}

