import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconButton:{
    width: '25%',
    margin: '10px auto 0px',
    '&:hover': {
      background: '#9eaaee',
      color: '#fafafa',
    }
  }
}));

export default function Settings(props) {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <CssBaseline />
          <Drawer
            className={classes.drawer}
            anchor={props.anchor}
            open={props.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >

            <IconButton className={classes.iconButton} onClick={props.onClose}>
              <CloseIcon className={classes.close} />
            </IconButton>
            <i><h2 align="left">Settings</h2></i>
          </Drawer>
        </div>
  );
}
