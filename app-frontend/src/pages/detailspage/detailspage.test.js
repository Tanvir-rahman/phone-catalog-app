import React from 'react';
import { shallow } from 'enzyme';
import { DetailsPage } from './detailspage.component';

describe('DetailsPage component', () => {
  let mockfetchPhoneDetails;
  let mockProps;
  let mockHistory;
  let wrapper;

  beforeEach(() => {
    mockfetchPhoneDetails= jest.fn();
    mockHistory = {
      goBack: jest.fn()
    };

    mockProps = {
      fetchPhoneDetails: mockfetchPhoneDetails,
      match: {
        params: {
          phoneId: 'iphone-11'
        }
      },
      history: mockHistory,
    };

    wrapper = shallow(<DetailsPage {...mockProps} />);
  });

  it('should render DetailsPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
