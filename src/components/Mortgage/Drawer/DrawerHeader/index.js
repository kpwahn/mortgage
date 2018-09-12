import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class DrawerHeader extends React.Component {
    render() {
      let {classes, onClose} = this.props;

      return (
        <div className={classes.DrawerHeader}>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      )
    }
}

DrawerHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(DrawerHeader);
