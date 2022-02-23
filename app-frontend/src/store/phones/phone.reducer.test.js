import PhoneActionTypes from './phone.types';
import phoneReducer from './phone.reducer';

const initialState = {
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
};

describe('phoneReducer', () => {
  it('should return initial state', () => {
    expect(phoneReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchPhoneList action', () => {
    expect(
      phoneReducer(initialState, {
        type: PhoneActionTypes.FETCH_PHONE_LIST_START
      }).phones.isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and phones to payload if fetchingPhonesSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      phoneReducer(initialState, {
        type: PhoneActionTypes.FETCH_PHONE_LIST_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      phones: {
        ...initialState.phones,
        isFetching: false,
        list: mockItems
      }
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingPhonesFailure', () => {
    expect(
      phoneReducer(initialState, {
        type: PhoneActionTypes.FETCH_PHONE_LIST_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      phones: {
        ...initialState.phones,
        isFetching: false,
        errorMessage: 'error'
      }
    });
  });
});
