import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Amortization extends React.Component {
    render() {
      let {classes, open} = this.props;

        return (
            <main className={
              classNames(
                classes.Amortization, {
                [classes.contentShift]: open
              })
            }>
            <h1>Hello</h1>
            </main>
        )
    }
}

const mapStateToProps = (state) => (
  {open: state.drawer.open}
)

export default connect(mapStateToProps, null)(withStyles(styles)(Amortization));

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
