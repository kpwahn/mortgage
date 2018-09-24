import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {formatMoney} from 'accounting-js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';

import Amortization from './Amortization';
import AppBar from './AppBar';
import Drawer from './Drawer';

import styles from './styles';

class Mortgage extends React.Component {
    render() {
      let {classes, mortgage} = this.props;

      return (
          <div className={classes.Mortgage}>
              <AppBar />
              <Drawer />
              <Amortization />
          </div>
      )
    }
}

const mapStateToProps = (state) => ({
    mortgage: state.mortgage
})

export default connect(mapStateToProps, null)(withStyles(styles)(Mortgage));
