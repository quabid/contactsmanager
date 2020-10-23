import * as ContactsConstants from '../constants/ContactsConsts';
import axios from 'axios';

export const listContacts = () => async (dispatch) => {
  try {
    dispatch({ type: ContactsConstants.LIST_CONTACTS_REQUEST });

    const { data } = await axios.get('http://localhost:5000/api/contacts');

    dispatch({ type: ContactsConstants.LIST_CONTACTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ContactsConstants.LIST_CONTACTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
