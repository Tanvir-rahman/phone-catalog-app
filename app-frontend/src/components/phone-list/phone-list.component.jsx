import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { phoneList } from '@store/phones/phone.selectors';

import './phone-list.styles.scss';

export const PhoneListComp = ({ phones }) => {
  return (
    <div className="phone-list">
      {
        phones.map(phone => (
          <div key={phone.id}>
            <div>{phone.title}</div>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  phones: phoneList
});

export default connect(mapStateToProps)(PhoneListComp);