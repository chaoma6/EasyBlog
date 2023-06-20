import { render, screen } from '@testing-library/react';
import React from 'react';

import BannerBottom from './BannerBottom';

describe('BannerBottom', () => {
  it('renders the banner content correctly', () => {
    render(<BannerBottom />);

    const blogName = screen.getByText('My Blog');
    const heading = screen.getByText(
      'The Perfect Blend: Exploring Full Stack Development and Everyday Life'
    );
    const date = screen.getByText('Max Ma / 4 weeks ago');

    expect(blogName).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  // Add more tests for other functionality or behavior of the BannerBottom component
});
