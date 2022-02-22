import apiRequest from '@services/apiRequest';
import { PHONE_LIST_URL } from '@config/apiEndpoints';
import PhoneActionTypes from './phone.types';

export const fetchPhoneListStart = () => ({
  type: PhoneActionTypes.FETCH_PHONE_LIST_START
});

export const fetchPhoneListSuccess = phoneList => ({
  type: PhoneActionTypes.FETCH_PHONE_LIST_SUCCESS,
  payload: phoneList
});

export const fetchPhoneListFailure = errorMessage => ({
  type: PhoneActionTypes.FETCH_PHONE_LIST_FAILURE,
  payload: errorMessage
});


export const fetchPhoneList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchPhoneListStart());
    try {
      const response = await apiRequest({
        url: PHONE_LIST_URL,
        method: 'GET',
      });
      dispatch(fetchPhoneListSuccess(response.data.data.phones));
    } catch (error) {
      dispatch(fetchPhoneListFailure(error.message));
    }
  }
}