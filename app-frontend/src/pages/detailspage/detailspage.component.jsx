import React, { useEffect, Suspense } from 'react';
import { connect  } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './detailspage.styles.scss';

import { fetchPhoneDetails } from '@store/phones/phone.actions';

import Spinner from '@components/spinner/spinner.component';
import PhoneDetailContainer from '@components/phone-detail/phone-detail.container';

export const DetailsPage = ({ fetchPhoneDetails, history, match }) => {
  useEffect(() => {
    fetchPhoneDetails(match.params.phoneId);
  }, [fetchPhoneDetails, match.params.phoneId]);

  return (
    <Suspense fallback={<Spinner />}>
      <button onClick={history.goBack}>
        Back
      </button>
      <PhoneDetailContainer />
    </Suspense>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchPhoneDetails: phoneId => dispatch(fetchPhoneDetails(phoneId))
});

export default withRouter(connect(null, mapDispatchToProps)(DetailsPage));
