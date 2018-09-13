import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import {setLoanAmount} from './actions';

class Content extends React.Component {
  constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(
      setLoanAmount({
        name: e.target.name,
        value: e.target.value
      })
    );
  }

  render() {
    return (
      <List>
        <ListItem>
          <TextField
            id="loanAmount"
            label="Loan Amount"
            name="loanAmount"
            onChange={this.handleChange}
            type="number"
            value={this.props.mortgage.loadAmount}
          />
        </ListItem>
      </List>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const mapStateToProps = (state) => ({
  mortgage: state.mortgage
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
