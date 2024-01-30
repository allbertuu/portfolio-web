import { render, screen } from '@/utils/testUtils';
import { ProjectCard } from '..';

const mockProps = {
  name: 'Test Project',
  segment: 'Test Segment',
  about: 'This is a test project.',
  githubLink: 'https://github.com/test',
  liveUrl: 'https://test.com',
};

test('renders project name', () => {
  render(<ProjectCard {...mockProps} />);

  const projectName = screen.getByText(mockProps.name);
  expect(projectName).toBeInTheDocument();
});

test('renders project segment', () => {
  render(<ProjectCard {...mockProps} />);

  const projectSegment = screen.getByText(mockProps.segment);
  expect(projectSegment).toBeInTheDocument();
});

test('renders project about', () => {
  render(<ProjectCard {...mockProps} />);

  const projectAbout = screen.getByText(mockProps.about);
  expect(projectAbout).toBeInTheDocument();
});

test('renders GitHub link with correct href', () => {
  render(<ProjectCard {...mockProps} />);

  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', mockProps.githubLink);
});

test('renders Live link with correct href', () => {
  render(<ProjectCard {...mockProps} />);

  const liveLink = screen.getByRole('link', { name: /Live/i });
  expect(liveLink).toBeInTheDocument();
  expect(liveLink).toHaveAttribute('href', mockProps.liveUrl);
});
