import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MaterialDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Content from './Content';
import DrawerHeader from './DrawerHeader';
import {closeDrawer} from './actions';
import styles from './styles';

function Drawer(props) {
  const {classes, closeDrawer, open} = props;

  return (
      <React.Fragment>
          <MaterialDrawer
            variant="persistent"
            open={open}
            classes={{
              paper: classes.MaterialDrawer,
            }}
          >
            <DrawerHeader onClose={closeDrawer}/>
            <Divider />
            <Content />
          </MaterialDrawer>
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  open: state.drawer.open
});

export default connect(mapStateToProps, {closeDrawer})(withStyles(styles)(Drawer));
