import * as ContactsConstants from '../constants/ContactsConsts';

export const contactsListReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case ContactsConstants.LIST_CONTACTS_REQUEST:
      return { loading: true, contacts: [] };

    case ContactsConstants.LIST_CONTACTS_SUCCESS:
      return { loading: false, contacts: action.payload };

    case ContactsConstants.LIST_CONTACTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
