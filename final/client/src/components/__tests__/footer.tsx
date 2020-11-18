import React from 'react';
import { mount, shallow, render } from 'enzyme';	//added for shallow rendering
//import { renderApollo, cleanup } from '../../test-utils';
import { cleanup } from '../../test-utils';
import Footer from '../footer';

describe('Footer', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    //renderApollo(<Footer />);
    const wrapper = shallow(<Footer />);
  });
});
