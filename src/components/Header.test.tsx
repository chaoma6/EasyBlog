import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

import Header from './Header';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    (useSession as any).mockReturnValue({ data: null }); // Set the initial session data to null
  });

  it('renders the header with "Sign In" button when there is no session', () => {
    render(<Header />);

    // Assert that the "Sign In" button is rendered
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();

    // Assert that the "Sign Out" button is not rendered
    expect(
      screen.queryByRole('button', { name: /sign out/i })
    ).not.toBeInTheDocument();

    // You can add more assertions to check other parts of the header when there is no session
  });

  it('renders the header with "Sign Out" button and user information when there is a session', () => {
    const session = {
      user: {
        name: 'John Doe',
        image: 'https://example.com/avatar.png',
      },
    };
    (useSession as any).mockReturnValue({ data: session }); // Set the session data

    render(<Header />);

    // Assert that the "Sign Out" button is rendered
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument();

    // Assert that the "Sign In" button is not rendered
    expect(
      screen.queryByRole('button', { name: /sign in/i })
    ).not.toBeInTheDocument();

    // Assert that the user's name is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // You can add more assertions to check other parts of the header when there is a session
  });
});
