import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '..';

it('should be in the document', () => {
  render(<Footer />);
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});

it('should be the current year', () => {
  render(<Footer />);
  expect(screen.getByTestId('author-rights')).toHaveTextContent(
    new Date().getFullYear().toString()
  );
});

it('should be the current URL domain', () => {
  render(<Footer />);
  expect(screen.getByTestId('site-url')).toHaveTextContent('localhost');
});
