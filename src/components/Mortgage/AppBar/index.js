import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {openDrawer} from '../Drawer/actions';
import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import styles from './styles';

function AppBar(props) {
  const { classes, open } = props;

  return (
    <div className={classes.root}>
        <MaterialAppBar
          className={
            classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-left`]]: open,
            })}
          position="static"
        >
            <Toolbar variant="dense">
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    onClick={props.openDrawer}
                    className={classNames({[classes.hide]: open})}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </MaterialAppBar>
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        open: state.drawer.open
    };
};

export default withStyles(styles)(connect(mapStateToProps, {openDrawer})(AppBar));
