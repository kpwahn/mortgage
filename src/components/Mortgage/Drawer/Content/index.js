import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Content extends React.Component {
  render() {
    return (
      <List>
        <ListItem>
          <ListItemText
            primary="Single-line item"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Here's another item"
          />
        </ListItem>
      </List>
    )
  }
}

export default Content;
