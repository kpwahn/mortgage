import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import {openDrawer} from '../Drawer/actions';
import styles from './styles';

function AppBar(props) {
  const { classes, open } = props;

  return (
    <React.Fragment>
      <MaterialAppBar
        className={
          classNames(
            classes.MaterialAppBar, {
            [classes.MaterialAppBarShift]: open
          })
        }
        position="static"
      >
        <Toolbar variant="dense">
          <IconButton
              color="inherit"
              onClick={props.openDrawer}
              className={
                classNames({[classes.hide]: open})
              }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Name Me
          </Typography>
        </Toolbar>
      </MaterialAppBar>
    </React.Fragment>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  open: state.drawer.open
});

export default connect(mapStateToProps, {openDrawer})(withStyles(styles)(AppBar));
