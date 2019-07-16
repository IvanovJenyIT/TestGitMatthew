import React, { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from "./MenuAppBar"
import LeftDrawer from "./LeftDrawer";
import Typography from "@material-ui/core/Typography";
import Settings from "./Settings"
import ReactPlayer from "react-player";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
      height: '90vh'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },
      content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    // zIndex: theme.zIndex.drawer + 1,    //This is supposed to make the footer draw over the drawer, but it doesn't work
      backgroundColor: '#3f51b5',
      height: '10vh',
      color: '#fff',
      paddingTop: '20px',
  },

}));

export default function Player(props) {
  const [showLeftDrawer, setShowLeftDrawer] = useState(true)
  const [showSettings,setShowSettings] = useState(false)

  const classes = useStyles();

  return (<div>
      <div className={classes.root}>
          <CssBaseline />

          <LeftDrawer
              open={showLeftDrawer} anchor="left"
                      onClose={() => setShowLeftDrawer(false)}
          />

          <MenuAppBar
              showLeftDrawer={showLeftDrawer}
              onClickLeftDrawer={() => setShowLeftDrawer(!showLeftDrawer)}
              onClickSettings={() => setShowSettings(!showSettings)}
          />

          <main
              className={clsx(classes.content, {
                  [classes.contentShift]: showLeftDrawer,
              })}
          >
              <div className={classes.drawerHeader} />

              <h1>Main Window</h1>

              <ReactPlayer
                  className={classes.player}
                  url={"https://www.youtube.com/watch?v=wAtUw6lxcis"}
                  playing
                  muted={true}
                  volume={props.volume}
                  width={'100%'}
                  height={'60vh'}
              />

          </main>

          <Settings open={showSettings} anchor="right"
                    onClose={() => setShowSettings(false)} />
      </div>
          <footer className={classes.footer}>
              <Typography variant="subtitle1" align="center"  component="p">
                  Copyright © 2019
              </Typography>
          </footer>

      </div>





  )
}

