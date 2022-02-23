import React from 'react';
import { shallow } from 'enzyme';

import { PhoneDetailComponent } from './phone-detail.component';

describe('PhoneDetailComponent component', () => {
  let wrapper;
  const mockId = 'iphone-11'
  const mockTitle = 'Iphone 11';
  const mockScreen = '6.1 inches';
  const mockCapacity = '64 GB';
  const mockRam = '4GB';
  const mockColor = 'Grey';
  const mockDescription = 'Apple iPhone 11 · Released 2019, September 20';
  const mockPrice = '100';
  const mockImageUrl = 'iphone-11.png';

  beforeEach(() => {
    const mockProps = {
      id: mockId,
      title: mockTitle,
      screen: mockScreen,
      capacity: mockCapacity,
      ram: mockRam,
      color: mockColor,
      description: mockDescription,
      price: mockPrice,
      imageurl: mockImageUrl
    };

    wrapper = shallow(<PhoneDetailComponent details={mockProps} />);
  });

  it('should render PhoneDetailComponent component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title prop in Name Container', () => {
    expect(wrapper.find('.details-title').text()).toBe(`Title: ${mockTitle}`);
  });

  it('should render screen prop in Name Container', () => {
    expect(wrapper.find('.details-screen').text()).toBe(`Screen: ${mockScreen}`);
  });

  it('should render capacity prop in Name Container', () => {
    expect(wrapper.find('.details-capacity').text()).toBe(`Capacity: ${mockCapacity}`);
  });

  it('should render ram prop in Name Container', () => {
    expect(wrapper.find('.details-ram').text()).toBe(`Ram: ${mockRam}`);
  });

  it('should render color prop in Name Container', () => {
    expect(wrapper.find('.details-color').text()).toBe(`Color: ${mockColor}`);
  });

  it('should render price prop in Name Container', () => {
    expect(wrapper.find('.details-price').text()).toBe(`Price: $${mockPrice}`);
  });
});
