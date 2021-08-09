import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";


import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#B47030"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuLink: {
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "black",
    textDecoration: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const openProfile = Boolean(anchorProfile);

  const handleProfile = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorProfile(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/" className={classes.menuLink}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Events Near You!
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfile}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorprofile={anchorProfile}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openProfile}
                onClose={handleCloseProfile}
              >
                {!Auth.loggedIn() ? (
                  <>
                    <Link to="/Login" className={classes.link}>
                      <MenuItem onClick={handleCloseProfile}>Login</MenuItem>
                    </Link>
                    <Link to="/SignUp" className={classes.link}>
                      <MenuItem onClick={handleCloseProfile}>SignUp</MenuItem>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/Profile" className={classes.link}>
                      <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                    </Link>
                    <Link to ="/SearchPage" className={classes.link}>
                      <MenuItem onClick={handleCloseProfile}>Search</MenuItem>
                    </Link>
                    <Link to="/" className={classes.link}>
                      <MenuItem onClick={(e) => Auth.logout()}>Logout</MenuItem>
                    </Link>
                  </>
                )}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
