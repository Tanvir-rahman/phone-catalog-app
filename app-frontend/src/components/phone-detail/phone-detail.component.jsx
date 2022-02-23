import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { phoneDetails } from '@store/phones/phone.selectors';

import './phone-detail.styles.scss';

export const PhoneDetailComponent = ({ details, history }) => {
  return (
    <div className="phone">
      {
        details ? details.title : null
      }
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  details: phoneDetails
});

export default connect(mapStateToProps)(PhoneDetailComponent);