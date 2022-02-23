import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './homepage.component';

describe('Homepage component', () => {
  let wrapper;
  let mockfetchPhoneList;

  beforeEach(() => {
    mockfetchPhoneList= jest.fn();

    const mockProps = {
      fetchPhoneList: mockfetchPhoneList
    };

    wrapper = shallow(<HomePage {...mockProps} />);
  });

  it('should render Homepage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title in Title Container', () => {
    expect(wrapper.find('.title').text()).toBe(' Phone Catalog App ');
  });
});
