const drawerWidth = 240;

const styles = theme => ({
  hide: {
    display: 'none',
  },
  left: {
    display: 'flex',
    alignItems: 'center'
  },
  MaterialAppBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  MaterialAppBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default styles;
