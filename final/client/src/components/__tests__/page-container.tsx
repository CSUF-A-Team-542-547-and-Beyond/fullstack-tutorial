import React from 'react';

//import { render, cleanup } from '../../test-utils';
import { shallow } from 'enzyme';
import PageContainer from '../page-container';

describe('Page Container', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  //afterEach(cleanup);

  it('renders without error', () => {
    shallow(<PageContainer />);
  });
});
