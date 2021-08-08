import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";


import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorProfile, setAnchorProfile] = React.useState(null);
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const openProfile = Boolean(anchorProfile);
  const openMenu = Boolean(anchorMenu);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleProfile = (event) => {
    setAnchorProfile(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorProfile(null);
  };

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <div className={classes.root}>
      {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <HomeIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorprofile={anchorMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={openMenu}
            onClose={handleCloseMenu}
          >
            <Link to="/">
              <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
            </Link>
            {/* <MenuItem onClick={handleCloseMenu}>Search</MenuItem> */}
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Events Near You!
          </Typography>
          {auth && (
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
                    <Link to="/Login">
                      <MenuItem onClick={handleCloseProfile}>Login</MenuItem>
                    </Link>
                    <Link to="/SignUp">
                      <MenuItem onClick={handleCloseProfile}>SignUp</MenuItem>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/Profile">
                      <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                    </Link>
                  <Link to="/">
                    <MenuItem onClick={(e) => Auth.logout()}>Logout</MenuItem>
                  </Link>
                  </>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
