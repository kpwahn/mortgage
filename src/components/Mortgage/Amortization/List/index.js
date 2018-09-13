import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MaterialList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { List as VirtualizedList } from 'react-virtualized';

import styles from './styles';

// <VirtualizedList
//   width={300}
//   height={300}
//   rowCount={1}
//   rowHeight={20}
//   rowRenderer={() => []}
// />

class List extends React.Component {
    render() {
        return (
            <MaterialList>
              <ListItem>
                <ListItemText primary={'hello'} />
              </ListItem>
            </MaterialList>
        )
    }
}

const mapStateToProps = (state) => (
  {mortgage: state.mortgage}
);

export default connect(mapStateToProps, null)(withStyles(styles)(List));
