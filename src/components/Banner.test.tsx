/* eslint-disable jest/expect-expect */
import { render } from '@testing-library/react';
import React from 'react';

import Banner from './Banner';

jest.mock('react-slick', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Banner', () => {
  it('renders the banner component', () => {
    render(<Banner />);
    // No need for assertions since the test will fail if any errors occur during rendering
  });
});
