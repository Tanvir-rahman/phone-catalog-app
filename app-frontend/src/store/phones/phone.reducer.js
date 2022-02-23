import PhoneActionTypes from './phone.types';

const INITIAL_STATE = {
  phones: {
    list: [],
    isFetching: false,
    errorMessage: undefined,
  },
  phoneDetails: {
    details: null,
    isFetching: false,
    errorMessage: undefined,
  }
}

const phoneReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PhoneActionTypes.FETCH_PHONE_LIST_START:
      return {
        ...state,
        phones: {
          ...state.phones,
          isFetching: true,
        }
      };
    case PhoneActionTypes.FETCH_PHONE_LIST_SUCCESS:
      return {
        ...state,
        phones: {
          ...state.phones,
          isFetching: false,
          list: action.payload,
        }
      };
    case PhoneActionTypes.FETCH_PHONE_LIST_FAILURE:
      return {
        ...state,
        phones: {
          ...state.phones,
          isFetching: false,
          errorMessage: action.payload,
        }
      };
    case PhoneActionTypes.FETCH_PHONE_DETAILE_START:
      return {
        ...state,
        phoneDetails: {
          ...state.phoneDetails,
          isFetching: true,
        }
      }
    case PhoneActionTypes.FETCH_PHONE_DETAILE_SUCCESS:
      return {
        ...state,
        phoneDetails: {
          ...state.phoneDetails,
          isFetching: false,
          details: action.payload,
        }
      }
    case PhoneActionTypes.FETCH_PHONE_DETAILE_FAILURE:
      return {
        ...state,
        phoneDetails: {
          ...state.phoneDetails,
          isFetching: false,
          errorMessage: action.payload,
        }
      }
    default: return state;
  }
};

export default phoneReducer;