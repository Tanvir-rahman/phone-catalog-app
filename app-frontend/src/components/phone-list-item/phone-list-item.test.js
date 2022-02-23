import React from 'react';
import { shallow } from 'enzyme';

import { PhoneListItemComponent } from './phone-list-item.component';

describe('PhoneListItem component', () => {
  let wrapper;
  const mockId = 'iphone-11'
  const mockTitle = 'Iphone 11';
  const mockPrice = '100';
  const mockImageUrl = 'iphone-11.png';

  beforeEach(() => {
    const mockProps = {
      id: mockId,
      title: mockTitle,
      price: mockPrice,
      imageurl: mockImageUrl
    };

    wrapper = shallow(<PhoneListItemComponent {...mockProps} />);
  });

  it('should render PhoneListItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title prop in Name Containerr', () => {
    expect(wrapper.find('.info-title').text()).toBe(mockTitle);
  });

  it('should render price prop in Price Container', () => {
    const price =wrapper.find('.info-price').text();
    expect(price).toBe(`$${mockPrice}`);
  });
});
