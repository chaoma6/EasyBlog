import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  it('renders the logo and copyright text', () => {
    render(<Footer />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const copyrightText = screen.getByText(
      /Max EasyBlog \|{2} all rights reserved/i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
