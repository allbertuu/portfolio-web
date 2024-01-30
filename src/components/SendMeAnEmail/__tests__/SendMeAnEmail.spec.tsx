import { sendEmail } from '@/utils';
import { fireEvent, render, screen } from '@/utils/testUtils';
import { SendMeAnEmail, draftEmail } from '..';

vi.mock('@/utils', () => ({
  sendEmail: vi.fn(),
}));

test('renders button with correct text', () => {
  render(<SendMeAnEmail />);

  expect(screen.getByText('Me mande um e-mail')).toBeInTheDocument();
});

test('call sendEmail function when button is clicked', () => {
  render(<SendMeAnEmail />);

  fireEvent.click(screen.getByText('Me mande um e-mail'));
  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledWith(draftEmail);
});
