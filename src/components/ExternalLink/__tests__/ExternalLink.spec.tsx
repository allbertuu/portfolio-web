import { render, screen } from '@/utils/testUtils';
import { ExternalLink } from '..';

test('renders children correctly', () => {
  const testText = 'Test Link';
  render(<ExternalLink href="http://test.com">{testText}</ExternalLink>);
  const linkElement = screen.getByText(testText);
  expect(linkElement).toBeInTheDocument();
});

test('has correct href attribute', () => {
  const testHref = 'http://test.com';
  render(<ExternalLink href={testHref}>Test Link</ExternalLink>);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveAttribute('href', testHref);
});

test('opens in new tab', () => {
  render(<ExternalLink href="http://test.com">Test Link</ExternalLink>);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
