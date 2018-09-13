import {handleActions} from 'redux-actions';

const INITIAL_STATE = {
    loanAmount: 300000
}

const setLoanAmount = (state, action) => {
  return {
    ...state,
    [action.payload.name]: action.payload.value
  }
};

export default handleActions({
    SET_LOAN_AMOUNT: (state, action) => setLoanAmount(state, action)
}, INITIAL_STATE);
