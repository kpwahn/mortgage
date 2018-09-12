import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MaterialDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Content from './Content';
import DrawerHeader from './DrawerHeader';
import {closeDrawer} from './actions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Drawer(props) {
  const {classes} = props;
  console.log(classes)
  return (
      <div>
          <MaterialDrawer
            variant="persistent"
            anchor={'left'}
            open={props.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <DrawerHeader onClose={props.closeDrawer}/>
            <Divider />
            <Content />
          </MaterialDrawer>
      </div>
  );
}

const mapStateToProps = (state) => {
    return {
        open: state.drawer.open
    };
};

export default connect(mapStateToProps, {closeDrawer})(withStyles(styles)(Drawer));
