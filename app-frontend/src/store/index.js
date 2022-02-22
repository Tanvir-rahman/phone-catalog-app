import { 
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';

import phoneReducer from './phones/phone.reducer';

const rootReducer = combineReducers({
  phone: phoneReducer,
});

export default createStore(rootReducer, applyMiddleware(ReduxThunk));
