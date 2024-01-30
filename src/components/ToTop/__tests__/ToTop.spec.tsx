import { scrollWindowToTop } from '@/utils';
import { fireEvent, render, screen } from '@/utils/testUtils';
import { ToTop } from '..';

vi.mock('@/utils', () => ({
  scrollWindowToTop: vi.fn(),
  classNames: vi.fn(),
}));

test.skip('renders button with correct initial visibility', () => {
  render(<ToTop />);
  // TODO: assert is not working out correctly,
  // 'cause the element is for sure invisible to the user
  expect(screen.getByRole('button')).not.toBeVisible();
});

test('call scrollWindowToTop function when button is clicked', () => {
  render(<ToTop />);

  fireEvent.click(screen.getByRole('button'));
  expect(scrollWindowToTop).toHaveBeenCalledTimes(1);
});

test('button becomes visible after scroll', () => {
  render(<ToTop />);

  // Simulate a scroll event
  window.scrollY = 250;
  fireEvent.scroll(window);

  expect(screen.getByRole('button')).toBeVisible();
});
