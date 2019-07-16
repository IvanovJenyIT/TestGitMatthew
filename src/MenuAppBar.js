import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
      minHeight: '16vh',
  },
  appBar: {
    // Make the app bar z-index always one more than the drawer z-index
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 10
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState(null);

  const classes = useStyles();

  const closeMainMenu = () => {
    setMainMenuAnchorEl(null)
  }

  const closeUserMenu = () => {
    setUserMenuAnchorEl(null)
  }

  return (
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Main Menu" onClick={event => setMainMenuAnchorEl(event.currentTarget)} >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Test App
              </Typography>
              <div>
                <IconButton
                  aria-label="User Account"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={event => setUserMenuAnchorEl(event.currentTarget)}
                  color="inherit"
                  data-tip="My Account"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="main-menu-appbar"
                  anchorEl={userMenuAnchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  open={Boolean(userMenuAnchorEl)}
                  onClose={() => setUserMenuAnchorEl(null)}
                >
                  <MenuItem onClick={() => {props.onClickSettings(); closeUserMenu()}}>Settings</MenuItem>
                </Menu>
                <Menu
                  id="user-menu-appbar"
                  anchorEl={mainMenuAnchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  open={Boolean(mainMenuAnchorEl)}
                  onClose={() => closeMainMenu()}
                >
                  <MenuItem onClick={() => {props.onClickLeftDrawer(); closeMainMenu()}}>{(props.showLeftDrawer ? "Hide" : "Show") + " Left Drawer"}</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </div>
  );
}

