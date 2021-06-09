import getFakerCompanies from '../../services/Faker';
import {
  GET_COMPANY_FAILURE,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
} from '../action-types';

export const getCompanyRequest = () => ({
  type: GET_COMPANY_REQUEST,
});

export const getCompanySuccess = (payload) => ({
  type: GET_COMPANY_SUCCESS,
  payload,
});

export const getCompanyFailure = (payload) => ({
  type: GET_COMPANY_FAILURE,
  payload,
});

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      dispatch(getCompanyRequest());
      const companies = await getFakerCompanies();
      dispatch(getCompanySuccess(companies));
    } catch (error) {
      dispatch(getCompanyFailure(error));
    }
  };
};
