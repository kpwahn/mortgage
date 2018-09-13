import {createAction} from 'redux-actions';

const setAPR = createAction(
  'SET_APR',
  ({name, value}) => ({name, value})
);

const setLoanAmount = createAction(
  'SET_LOAN_AMOUNT',
  ({name, value}) => ({name, value})
);

const setTerm = createAction(
  'SET_TERM',
  ({name, value}) => ({name, value})
)

export {
  setAPR,
  setLoanAmount,
  setTerm
};
