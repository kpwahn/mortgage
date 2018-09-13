import React from 'react';
import PropTypes from 'prop-types';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class List extends React.Component {
    render() {
      let {classes, open} = this.props;

        return (
            <MaterialList>
              <ListItem>
                <ListItemText primary={'Item One'} />
              </ListItem>
              <ListItem>
                <ListItemText primary={'Item Two'} />
              </ListItem>
            </MaterialList>
        )
    }
}


export default withStyles(styles)(List);
