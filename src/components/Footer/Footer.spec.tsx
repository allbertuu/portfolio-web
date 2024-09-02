import { render, screen } from '@/utils/testUtils';
import { Footer } from '.';

test('renders correctly', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

test('renders Author rights', () => {
  const domain = 'albertosantos.dev';
  render(<Footer />);

  expect(screen.getByText(domain)).toBeInTheDocument();
  expect(screen.getByText(/2024 - todos os direitos reservados/i));
});

test('renders Powered by and logo', () => {
  render(<Footer />);

  expect(screen.getByText('Powered')).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: 'Logotipo vermelha' })
  ).toBeInTheDocument();
});
