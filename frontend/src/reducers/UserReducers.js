import * as UserConsts from '../constants/UserActionTypes';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConsts.USER_LOGIN_REQUEST:
      return { loading: true };

    case UserConsts.USER_LOGIN_SUCCESS:
      return { loading: false, userinfo: action.payload };

    case UserConsts.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case UserConsts.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
