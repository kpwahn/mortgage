import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import {setExtra} from '../../../Drawer/Content/actions';
import ListItem from '../ListItem';

class ListButton extends React.Component {
  state = {
    open: false,
    extra: 0
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.setExtra({
      index: this.props.data.index,
      value: this.state.extra
    });
    this.setState({ open: false });
  };

  handleExtra = (e) => {
    this.setState({extra: e.target.value});
  };

  render() {
    let {classes} = this.props;

    return (
      <React.Fragment>
        <Button onClick={this.handleClickOpen} style={{...this.props.style, display: 'flex', height: '55px'}}>
          <ListItem mortgage={this.props.data}/>
        </Button>
        <Dialog
          open={this.state.open}
        >
          <DialogContent>
            <TextField
              autoFocus
              id="extra"
              label="Extra Payment"
              onChange={this.handleExtra}
              type="number"
              value={this.state.extra}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default connect(null, {setExtra})(ListButton);
