import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { phoneDetails } from '@store/phones/phone.selectors';

import './phone-detail.styles.scss';

export const PhoneDetailComponent = ({ details, history }) => {
  return (
    details && (<div className='phone-details'>
      <div className='title'>Details</div>
      <div className='details-info'>
        <div className='details-info-img'>
        <img src={require(`@assets/images/${details.imageurl}`)} alt={details.title} />
        </div>
        <div className='details-info-description'>
          <p className='details-title'>
            <span>Title: </span>
            {details.title}
          </p>
          <p className='details-screen'>
            <span>Screen: </span>
            {details.screen}
          </p>
          <p className='details-capacity'>
            <span>Capacity: </span>
            {details.capacity}
          </p>
          <p className='details-ram'>
            <span>Ram: </span>
            {details.ram}
          </p>
          <p className='details-color'>
            <span>Color: </span>
            {details.color}
          </p>
          <p className='details-price'>
            <span>Price: </span>
            ${details.price}
          </p>
          <p>{details.description}</p>
        </div>
      </div>
    </div>)
  );
};

const mapStateToProps = createStructuredSelector({
  details: phoneDetails,
});

export default connect(mapStateToProps)(PhoneDetailComponent);
