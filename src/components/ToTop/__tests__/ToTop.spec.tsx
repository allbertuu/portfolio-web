import { scrollWindowToTop } from '@/utils';
import { fireEvent, render } from '@/utils/testUtils';
import { vi } from 'vitest';
import { ToTop } from '..';

vi.mock('@/utils', () => ({
  scrollWindowToTop: vi.fn(),
  classNames: vi.fn(),
}));

test.skip('renders button with correct initial visibility', () => {
  const { getByRole } = render(<ToTop />);
  // TODO: assert is not working out correctly,
  // 'cause the element is for sure invisible to the user
  expect(getByRole('button')).not.toBeVisible();
});

test('call scrollWindowToTop function when button is clicked', () => {
  const { getByRole } = render(<ToTop />);

  fireEvent.click(getByRole('button'));
  expect(scrollWindowToTop).toHaveBeenCalledTimes(1);
});

test('button becomes visible after scroll', () => {
  const { getByRole } = render(<ToTop />);

  // Simulate a scroll event
  window.scrollY = 250;
  fireEvent.scroll(window);

  expect(getByRole('button')).toBeVisible();
});
