import React from 'react';
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
}));


function AppNavigation() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        handleDrawerOpen={handleDrawerOpen}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      />
      <SideBar
        open = {open}
        handleDrawerClose={handleDrawerClose}
      />
    </div>
  )
}

export default AppNavigation
