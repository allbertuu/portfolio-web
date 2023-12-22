import { render, screen } from '@/utils/testUtils';
import { Header } from '..';

test('renders correctly', () => {
  render(<Header />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('renders logo image', () => {
  render(<Header />);
  const logoImage = screen.getByTestId('logo-image');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage.tagName).toBe('IMG');
  expect(logoImage).toHaveAttribute('alt', 'Logotipo vermelha');
});

test('renders navigation links', () => {
  render(<Header />);
  const aboutMeLink = screen.getByText('Sobre mim');
  expect(aboutMeLink).toBeInTheDocument();
  expect(aboutMeLink).toHaveAttribute('href', '#about-me');

  const projectsLink = screen.getByText('Projetos');
  expect(projectsLink).toBeInTheDocument();
  expect(projectsLink).toHaveAttribute('href', '#projects');
});
