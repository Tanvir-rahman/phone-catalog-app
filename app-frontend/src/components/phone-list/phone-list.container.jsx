import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { isPhoneListFetching } from '@store/phones/phone.selectors';
import WithSpinner from '@components/with-spinner/with-spinner.component';
import PhoneList from './phone-list.component';

const mapStateToProps = createStructuredSelector({
  isLoading: isPhoneListFetching
});

const PhoneListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PhoneList);

export default PhoneListContainer;
