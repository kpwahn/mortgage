import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Amortization extends React.Component {
    render() {
      let {classes} = this.props;

        return (
            <main className={classes.Amortization}>
            <h1>Hello</h1>
            </main>
        )
    }
}

export default withStyles(styles)(Amortization);

/*
content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  }
*/
