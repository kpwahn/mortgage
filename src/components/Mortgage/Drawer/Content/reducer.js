import {handleActions} from 'redux-actions';
import calculatePayment from './calculatePayment';

const INITIAL_STATE = {
  apr: 4.75,
  loanAmount: 300000,
  monthlyPayment: 1564.94,
  term: 30,
}

const setLoanAmount = (state, action) => {
  return {
    ...state,
    [action.payload.name]: action.payload.value,
    monthlyPayment: calculatePayment({
      ...state,
      loanAmount: action.payload.value
    })
  }
};

const setAPR = (state, action) => {
  return {
    ...state,
    [action.payload.name]: action.payload.value,
    monthlyPayment: calculatePayment({
      ...state,
      apr: action.payload.value
    })
  }
};

const setTerm = (state, action) => {
  return {
    ...state,
    [action.payload.name]: action.payload.value,
    monthlyPayment: calculatePayment({
      ...state,
      term: action.payload.value
    })
  }
}

export default handleActions({
  SET_APR: (state, action) => setAPR(state, action),
  SET_LOAN_AMOUNT: (state, action) => setLoanAmount(state, action),
  SET_TERM: (state, action) => setTerm(state, action)
}, INITIAL_STATE);
