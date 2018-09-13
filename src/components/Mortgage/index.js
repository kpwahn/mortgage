import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Amortization from './Amortization';
import AppBar from './AppBar';
import Drawer from './Drawer';

import styles from './styles';

class Mortgage extends React.Component {
    render() {
      let {classes} = this.props;

      return (
          <div className={classes.Mortgage}>
              <AppBar />
              <Drawer />
              <Amortization />
          </div>
      )
    }
}

export default withStyles(styles)(Mortgage);
