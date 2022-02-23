import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { phoneList } from '@store/phones/phone.selectors';

import './phone-list.styles.scss';

export const PhoneListComp = ({ phones, history }) => {
  return (
    <div className="phone-list">
      {
        phones.map(({ id, ...otherPhoneProps }) => (
          <div
            key={id}
            {...otherPhoneProps}
            onClick={() => history.push(`/phones/${id}`)}
          >
            <div>{id}</div>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  phones: phoneList
});

export default withRouter(connect(mapStateToProps)(PhoneListComp));