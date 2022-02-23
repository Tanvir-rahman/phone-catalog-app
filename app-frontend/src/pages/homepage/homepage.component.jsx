import React, { useEffect, lazy, Suspense } from 'react';
import { connect  } from 'react-redux';

import './homepage.styles.scss';

import { fetchPhoneList } from '@store/phones/phone.actions';

import Spinner from '@components/spinner/spinner.component';

const PhoneListContainer = lazy(() =>
  import('@components/phone-list/phone-list.container')
);

export const HomePage = ({ fetchPhoneList, match }) => {
  useEffect(() => {
    fetchPhoneList();
  }, [fetchPhoneList]);

  return (
    <Suspense fallback={<Spinner />}>
      <h1 className="title"> Phone Catalog App </h1>
      <PhoneListContainer />
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPhoneList: () => dispatch(fetchPhoneList())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);