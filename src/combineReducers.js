import { combineReducers } from 'redux';
import drawer from './components/Mortgage/Drawer/reducer';
import mortgage from './components/Mortgage/Drawer/Content/reducer';

const rootReducer = combineReducers({
    drawer,
    mortgage
});

export default rootReducer;
