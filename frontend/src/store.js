import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  contactsListReducer,
  getContactReducer,
} from './reducers/ContactsReducers';

const reducer = combineReducers({
  contactsList: contactsListReducer,
  contactObject: getContactReducer,
});

const initState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
