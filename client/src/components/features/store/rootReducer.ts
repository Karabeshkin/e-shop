import { combineReducers } from 'redux';
import reducerAuth from '../features/Auth/reducer/reducer';

const rootReducer = combineReducers({
  auth: reducerAuth,
});

export default rootReducer;
