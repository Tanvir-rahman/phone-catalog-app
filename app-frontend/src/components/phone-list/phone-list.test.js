import React from 'react';
import { shallow } from 'enzyme';
import { PhoneListComponent } from './phone-list.component';

it('should render PhoneList component', () => {
  expect(shallow(<PhoneListComponent phones={[]} />)).toMatchSnapshot();
});
