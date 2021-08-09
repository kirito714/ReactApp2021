import React from "react";
import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    marginTop: "230px"
  },
  appBar: {
        top: "auto",
        bottom: 0,
        backgroundColor: "#B47030"
  },
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Tabs centered>
          <TabPanel index={0}>
            <Tab 
              edge="start"
              label="Joe Amador"
              icon={
                <img src="https://img.icons8.com/ios-glyphs/60/000000/sonic-the-hedgehog-1.png" />
              }
              onClick={() => window.open("https://kirito714.github.io/React-Portfolio/")}/>
          </TabPanel>
          <TabPanel index={1}>
            <Tab  label="Mikey Thompson"
            icon={
              <img src="https://img.icons8.com/ios-glyphs/60/000000/futurama-nibbler.png" />
            }
            onClick={() => window.open("https://festive-lewin-35e390.netlify.app/")}/>
          </TabPanel>
          <TabPanel index={2}>
            <Tab label="Paola Gonzalez"
            icon={
              <img src="https://img.icons8.com/ios-glyphs/60/000000/stormtrooper.png" />
            }
            onClick={() => window.open("https://pao1ag.github.io/react-portfolio/")}/>
          </TabPanel>
          <TabPanel index={3}>
            <Tab 
              edge="end"
              label="Cassie Pacheco"
              icon={
                <img src="https://img.icons8.com/ios-glyphs/60/000000/spyro.png" />
              }
              onClick={() => window.open("https://gracious-pasteur-71b41c.netlify.app/")}/>
          </TabPanel>
        </Tabs>
      </AppBar>
    </div>
  );
}
