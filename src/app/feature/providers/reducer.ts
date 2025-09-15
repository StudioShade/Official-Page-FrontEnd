import  { combineReducers } from 'redux';
import hoverSlice from './redux';

const hoverReducer = combineReducers({
    hoverState: hoverSlice,
});



export default hoverReducer;