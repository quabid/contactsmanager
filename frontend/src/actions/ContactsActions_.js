import * as ContactsConsts from '../constants/ContactsActionTypes';
import axios from 'axios';
import { contacts } from '../data/contacts';

export const listContacts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ContactsConsts.LIST_CONTACTS_REQUEST });

    /*     const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/contacts', config); */

    dispatch({
      type: ContactsConsts.LIST_CONTACTS_SUCCESS,
      payload: contacts,
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

export const getContact = id => async (dispatch, getState) => {
  try {
    dispatch({ type: ContactsConsts.GET_CONTACT_REQUEST });

    /* const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/contacts/${id}`, config); */

    dispatch({
      type: ContactsConsts.GET_CONTACT_SUCCESS,
      payload: contacts.find(x => x.id === id),
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

export const createContact = contact => async (dispatch, getState) => {
  try {
    dispatch({ type: ContactsConsts.CREATE_CONTACT_REQUEST });

    /* const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/contacts', contact, config); */
    contacts.push(contact);

    dispatch({
      type: ContactsConsts.CREATE_CONTACT_SUCCESS,
      payload: contact,
    });
  } catch (err) {
    dispatch({
      type: ContactsConsts.CREATE_CONTACT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateContact = contact => async (dispatch, getState) => {
  try {
    dispatch({ type: ContactsConsts.UPDATE_CONTACT_SUCCESS });

    /* const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/contact/${contact.id}`,
      contact,
      config
    ); */

    const _contact = contacts.find(x => x._id === contact._id) || null;

    if (null !== _contact) {
      Object.assign(_contact, { ...contact });
    } else {
      dispatch({
        type: ContactsConsts.UPDATE_CONTACT_FAIL,
        payload: `Contact does not exist`,
      });
    }

    dispatch({
      type: ContactsConsts.UPDATE_CONTACT_SUCCESS,
      payload: _contact,
    });
  } catch (err) {
    dispatch({
      type: ContactsConsts.UPDATE_CONTACT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
