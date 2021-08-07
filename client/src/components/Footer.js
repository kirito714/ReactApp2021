import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import { SignalWifi1BarLock } from "@material-ui/icons";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "20vh",
    bottom: "0px",
    left: "0px",
    right: "0px",
    backgroundColor: "#C8C7D9",
    marginTop: "65px",
    color: "black",

  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
<>
<AppBar position="fixed" color="primary" className={classes.appBar}>
    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
      className={classes.root}
      >
      {/* <BottomNavigationAction label="Recents"  icon={<RestoreIcon />}/> */}
      <BottomNavigationAction label="Joe Amador" icon={<img src="https://img.icons8.com/ios-glyphs/60/000000/sonic-the-hedgehog-1.png"/>} onClick={()=> window.open("https://github.com/kirito714")}/>
      <BottomNavigationAction label="Mikey Thompson" icon={<img src="https://img.icons8.com/ios-glyphs/60/000000/futurama-nibbler.png"/>} onClick={()=> window.open("https://github.com/methom21")}/>
      <BottomNavigationAction label="Paola Gonzalez" icon={<img src="https://img.icons8.com/ios-glyphs/60/000000/stormtrooper.png"/>} onClick={()=> window.open("https://github.com/Pao1aG")}/>
      <BottomNavigationAction label="Cassie Pacheco" icon={<img src="https://img.icons8.com/ios-glyphs/60/000000/spyro.png"/>} onClick={()=> window.open("https://github.com/Cassiep1986")}/>
    </BottomNavigation>
</AppBar>

</>
  );
}

