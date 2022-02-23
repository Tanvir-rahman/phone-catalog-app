import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { isPhoneDetailsFetching } from '@store/phones/phone.selectors';
import WithSpinner from '@components/with-spinner/with-spinner.component';
import PhoneDetailComponent from './phone-detail.component';

const mapStateToProps = createStructuredSelector({
  isLoading: isPhoneDetailsFetching
});

const PhoneDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PhoneDetailComponent);

export default PhoneDetailContainer;
