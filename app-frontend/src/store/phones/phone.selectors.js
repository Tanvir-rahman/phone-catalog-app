import { createSelector } from 'reselect';

const phone = state => state.phone;

export const phoneList = createSelector(
  [phone],
  phoneSelector => phoneSelector.phones.list || []
);

export const isPhoneListFetching = createSelector(
  [phone],
  phoneSelector => phoneSelector.phones.isFetching
);

export const isPhoneListLoaded = createSelector(
  [phone],
  phoneSelector => !!phoneSelector.phones.list
);


export const phoneDetails = createSelector(
  [phone],
  phoneSelector => phoneSelector.phoneDetails.details || null
);

export const isPhoneDetailsFetching = createSelector(
  [phone],
  phoneSelector => phoneSelector.phoneDetails.isFetching
);

export const isPhoneDetailsLoaded = createSelector(
  [phone],
  phoneSelector => !!phoneSelector.phoneDetails.details
);