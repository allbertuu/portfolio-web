import { render, screen } from '@testing-library/react';
import { Footer } from '..';

describe('Footer component', () => {
  test('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  describe('author rights', () => {
    const currentYear = new Date().getFullYear();
    const domain = 'albertosantos.dev';

    test('renders the domain', () => {
      render(<Footer />);
      expect(screen.getByText(domain)).toBeInTheDocument();
    });
    test('renders the current year', () => {
      render(<Footer />);
      expect(screen.getByTestId('author-rights')).toHaveTextContent(
        `©${currentYear} - Todos os direitos reservados.`
      );
    });
  });

  describe('powered by', () => {
    test('renders the text', () => {
      render(<Footer />);
      expect(screen.getByText('Powered')).toBeInTheDocument();
    });

    test('renders the logo', () => {
      render(<Footer />);
      const logoImage = screen.getByTestId('logo-image');
      expect(logoImage).toBeInTheDocument();
      expect(logoImage.tagName).toBe('IMG');
      expect(logoImage).toHaveAttribute('alt', 'Logotipo vermelha');
    });
  });
});
