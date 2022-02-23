import apiRequest from '@services/apiRequest';
import { 
  PHONE_LIST_URL,
  PHONE_DETAILS_URL,
} from '@config/apiEndpoints';
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


export const fetchPhoneDetailsStart = () => ({
  type: PhoneActionTypes.FETCH_PHONE_DETAILE_START
});

export const fetchPhoneDetailsSucccess = phoneDetails => ({
  type: PhoneActionTypes.FETCH_PHONE_DETAILE_SUCCESS,
  payload: phoneDetails
});

export const fetchPhoneDetailsFailure = errorMessage => ({
  type: PhoneActionTypes.FETCH_PHONE_DETAILE_FAILURE,
  payload: errorMessage
});

export const fetchPhoneDetails = phoneId => {
  return async (dispatch, getState) => {
    dispatch(fetchPhoneDetailsStart());
    try {
      const response = await apiRequest({
        url: PHONE_DETAILS_URL.replace(':phoneId', phoneId),
        method: 'GET',
      });
      dispatch(fetchPhoneDetailsSucccess(response.data.data.phone));
    } catch (error) {
      dispatch(fetchPhoneDetailsFailure(error.message));
    }
  }
}