import React from 'react'
import { shallow } from 'enzyme'

import App from '../../modules/App'

describe('App', () => {
  const app = shallow(<App />)
  it('should redenders properly', () => {
    expect(app).toMatchSnapshot()
  });
});