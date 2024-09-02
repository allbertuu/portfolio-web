import aboutMe from '@/data/aboutMe.json';
import { render, screen } from '@/utils/testUtils';
import { MySocials } from '.';

test('renders LinkedIn link with correct href and title', () => {
  render(<MySocials />);
  const link = screen.getByRole('link', { name: /linkedIn/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', aboutMe.links.linkedin.url);
  expect(link).toHaveAttribute('title', 'LinkedIn');
});

test('renders GitHub link with correct href and title', () => {
  render(<MySocials />);
  const link = screen.getByRole('link', { name: /gitHub/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', aboutMe.links.github.url);
  expect(link).toHaveAttribute('title', 'GitHub');
});

test('renders Currículo link with correct href and title', () => {
  render(<MySocials />);
  const link = screen.getByRole('link', { name: /currículo/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', aboutMe.links.cv.url);
  expect(link).toHaveAttribute('title', 'Currículo');
});
