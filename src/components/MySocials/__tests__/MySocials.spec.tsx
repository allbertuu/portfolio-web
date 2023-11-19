import aboutMe from '@/data/aboutMe.json';
import { render, screen } from '@testing-library/react';
import { MySocials } from '..';

describe('MySocials component', () => {
  beforeEach(() => {
    render(<MySocials />);
  });

  test('renders LinkedIn link with correct href and title', () => {
    const link = screen.getByRole('link', { name: /LinkedIn/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', aboutMe.links.linkedin.url);
    expect(link).toHaveAttribute('title', 'LinkedIn');
  });

  test('renders GitHub link with correct href and title', () => {
    const link = screen.getByRole('link', { name: /GitHub/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', aboutMe.links.github.url);
    expect(link).toHaveAttribute('title', 'GitHub');
  });

  test('renders Currículo link with correct href and title', () => {
    const link = screen.getByRole('link', { name: /Currículo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', aboutMe.links.cv.url);
    expect(link).toHaveAttribute('title', 'Currículo');
  });
});
