import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {formatMoney} from 'accounting-js';

import styles from './styles';

class ListItem extends React.Component {
    render() {
      let {classes, mortgage} = this.props;

      let extra = (parseFloat(mortgage.extra)) ? ` + ${mortgage.extra}`: '';
      
      return (
          <div className={classes.ListItem}>
            <ListItemText
              primary={`${formatMoney(mortgage.principal)}${extra}`}
              secondary={formatMoney(mortgage.interest)}
              classes={{root: classes.rightRoot}}
            />
            <ListItemText
              primary={''}
              secondary={formatMoney(mortgage.remainingPrincipal)}
              classes={{root: classes.leftRoot}}
            />
          </div>
      )
    }
}

export default withStyles(styles)(ListItem);

/*
  <ListItemText
    primary={''}
    secondary={formatMoney(mortgage.remainingPrincipal)}
    classes={{root: classes.leftRoot}}
  />
*/
