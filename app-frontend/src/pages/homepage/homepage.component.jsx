import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect  } from 'react-redux';

import './homepage.styles.scss';

import { fetchPhoneList } from '@store/phones/phone.actions';

import DetailsPage from '@pages/detailspage/detailspage.component';

import Spinner from '@components/spinner/spinner.component';
const PhoneListContainer = lazy(() =>
  import('@components/phone-list/phone-list.container')
);

const HomePage = ({ fetchPhoneList, match }) => {

  useEffect(() => {
    fetchPhoneList();
  }, [fetchPhoneList]);

  return (
    <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={PhoneListContainer}
      />
      <Route 
        path="/phones/:id"
        component={DetailsPage}
      />
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