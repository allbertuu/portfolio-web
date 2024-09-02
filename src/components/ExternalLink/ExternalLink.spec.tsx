import { render, screen } from '@/utils/testUtils';
import { ExternalLink } from '.';

test('renders link text (children) correctly', () => {
  render(<ExternalLink href="http://test.com">Test Link</ExternalLink>);

  expect(screen.getByText(/test link/i)).toBeInTheDocument();
});

test('has href attribute passed to component', () => {
  render(<ExternalLink href="http://test.com">Test Link</ExternalLink>);

  expect(screen.getByText(/test link/i)).toHaveAttribute(
    'href',
    'http://test.com'
  );
});

test('be able to open in new tab', () => {
  render(<ExternalLink href="http://test.com">Test Link</ExternalLink>);
  const linkElement = screen.getByText(/test link/i);

  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
