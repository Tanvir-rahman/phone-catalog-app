import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { phoneList } from '@store/phones/phone.selectors';

import PhoneListItem from '@components/phone-list-item/phone-list-item.component';
import './phone-list.styles.scss';

export const PhoneListComponent = ({ phones, history }) => {
  return (
    <div className="phone-list">
      {
        phones.map(({ id, ...otherPhoneProps }) => (
          <PhoneListItem 
            key={id}
            id={id}
            { ...otherPhoneProps }
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  phones: phoneList
});

export default withRouter(connect(mapStateToProps)(PhoneListComponent));