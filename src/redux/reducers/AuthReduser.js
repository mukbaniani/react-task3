import * as types from '../action-types';

const initialState = {
  auth: null,
  error: null,
  loading: false,
  companies: null,
};

export const AuthReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_GUEST:
      return {
        ...state,
        auth: null,
      };
    case types.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    case types.GET_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        companies: null,
      };

    case types.GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        companies: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReduser;
