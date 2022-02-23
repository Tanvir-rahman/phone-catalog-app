import PhoneActionTypes from './phone.types';
import {
  fetchPhoneListStart,
  fetchPhoneListFailure,
  fetchPhoneDetailsStart,
} from './phone.actions';

describe('fetchPhoneListStart action', () => {
  it('should create the fetchPhoneListStart action', () => {
    expect(fetchPhoneListStart().type).toEqual(
      PhoneActionTypes.FETCH_PHONE_LIST_START
    );
  });
});

describe('fetchPhoneListFailure action', () => {
  it('should create the fetchPhoneListFailure action', () => {
    const action = fetchPhoneListFailure('errored');

    expect(action.type).toEqual(PhoneActionTypes.FETCH_PHONE_LIST_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

describe('fetchPhoneDetailsStart action', () => {
  it('should create the fetchPhoneDetailsStart action', () => {
    expect(fetchPhoneDetailsStart().type).toEqual(
      PhoneActionTypes.FETCH_PHONE_DETAILE_START
    );
  });
});