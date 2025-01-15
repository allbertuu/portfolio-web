import { render, screen } from '@/utils/testUtils';
import { Footer } from '.';

test('renders correctly', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('renders Author rights', () => {
  const domain = 'albertosantos.dev';
  const currentYear = new Date().getFullYear();
  render(<Footer />);

  expect(screen.getByText(domain)).toBeInTheDocument();
  expect(
    screen.getByText(
      new RegExp(`${currentYear} - todos os direitos reservados`, 'i')
    )
  ).toBeInTheDocument();
});

test('renders Powered by and logo', () => {
  render(<Footer />);

  expect(screen.getByText('Powered')).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: 'Logotipo vermelha' })
  ).toBeInTheDocument();
});
