import * as ContactsConsts from '../constants/ContactsActionTypes';
import axios from 'axios';

export const listContacts = () => async dispatch => {
  try {
    dispatch({ type: ContactsConsts.LIST_CONTACTS_REQUEST });

    const { data } = await axios.get('/api/contacts');

    console.log('data: ' + data);
    console.log(`${JSON.stringify(data)}`);

    dispatch({
      type: ContactsConsts.LIST_CONTACTS_SUCCESS,
      payload: [
        { fname: 'william', lname: 'williams', id: '55' },
        { fname: 'brook', lname: 'sexxy', id: '42' },
      ],
    });
  } catch (err) {
    dispatch({
      type: ContactsConsts.LIST_CONTACTS_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getContact = id => async dispatch => {
  try {
    dispatch({ type: ContactsConsts.GET_CONTACT_REQUEST });

    const { data } = await axios.get(`/api/contact/${id}`);

    dispatch({
      type: ContactsConsts.GET_CONTACT_SUCCESS,
      payload: JSON.parse(data.payload),
    });
  } catch (err) {
    dispatch({
      type: ContactsConsts.GET_CONTACT_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
