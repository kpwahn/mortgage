import {createAction} from 'redux-actions';

const setLoanAmount = createAction(
  'SET_LOAN_AMOUNT',
  ({name, value}) => ({name, value})
)

export {
  setLoanAmount
};
