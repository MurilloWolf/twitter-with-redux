import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

describe('Test Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });
  it('Checks that forms render correctly', () => {
    const textarea = screen.getByRole('textbox');
    const btnTweet = screen.getByRole('button', { name: /Tweet/i });
    const avatarImg = screen.getByAltText('user-avatar');

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', "What's happening?");

    expect(btnTweet).toBeInTheDocument();
    expect(btnTweet).toBeDisabled();

    expect(avatarImg).toBeInTheDocument();
  });

  it('Check if the "tweet" button is enabled and disabled when writing to textarea', () => {
    const btnTweet = screen.getByRole('button', { name: /Tweet/i });
    const textarea = screen.getByRole('textbox');

    expect(btnTweet).toBeDisabled();
    userEvent.type(textarea, 'Hello world');
    expect(btnTweet).not.toBeDisabled();

    userEvent.clear(textarea);
    expect(btnTweet).toBeDisabled();
  });
});
