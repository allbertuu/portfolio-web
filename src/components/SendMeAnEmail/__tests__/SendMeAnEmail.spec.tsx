import { sendEmail } from '@/utils';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import { SendMeAnEmail, draftEmail } from '..';

vi.mock('@/utils', () => ({
  sendEmail: vi.fn(),
}));

describe('SendMeAnEmail component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<SendMeAnEmail />);
    expect(getByText('Me mande um e-mail')).toBeInTheDocument();
  });

  test('call sendEmail function when button is clicked', () => {
    const { getByText } = render(<SendMeAnEmail />);

    fireEvent.click(getByText('Me mande um e-mail'));
    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(sendEmail).toHaveBeenCalledWith(draftEmail);
  });
});
