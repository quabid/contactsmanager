import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsListReducer } from './reducers/ContactsReducer';

const reducer = combineReducers({
  contactsList: contactsListReducer,
});

const initState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
