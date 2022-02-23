import React from 'react';
import { withRouter } from 'react-router-dom';

import './phone-list-item.styles.scss';

export const PhoneListItemComponent = ({ id, title, price, imageurl, history }) => {
  return (
    <div onClick={() => history.push(`/phones/${id}`)}>
      {
        <div className="phone">
          <div className="phone-image">
            <img 
              src={require('../../assets/images/' + imageurl)}
              alt={title}
            />
          </div>
          <div className="phone-info">
            <h5>{title}</h5>
            <h6>{price}</h6>
          </div>
        </div>
      }
    </div>
  );
}

export default withRouter(PhoneListItemComponent);