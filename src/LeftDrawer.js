import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
      zIndex: '0',
      marginTop: '64px',
      height: 'calc(90vh - 64px)',
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

export default function LeftDrawer(props) {
  const classes = useStyles(); 

  const numbers = Array(20).fill().map((_, idx) => idx)

  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor={props.anchor}
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <IconButton
            className={classes.iconButton}
            onClick={props.onClose}>
          <CloseIcon />
        </IconButton>

        <h1>Left Drawer</h1>

        {numbers.map(n =>
          <h3>Item {n}</h3>
        )}
      </Drawer>

    </div>
  );
}
