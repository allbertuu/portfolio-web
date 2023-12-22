import { render, screen } from '@/utils/testUtils';
import { ProjectCard } from '..';

const mockProps = {
  name: 'Test Project',
  segment: 'Test Segment',
  about: 'This is a test project.',
  githubLink: 'https://github.com/test',
  liveUrl: 'https://test.com',
};

beforeEach(() => {
  render(<ProjectCard {...mockProps} />);
});

test('renders project name', () => {
  const projectName = screen.getByText(mockProps.name);
  expect(projectName).toBeInTheDocument();
});

test('renders project segment', () => {
  const projectSegment = screen.getByText(mockProps.segment);
  expect(projectSegment).toBeInTheDocument();
});

test('renders project about', () => {
  const projectAbout = screen.getByText(mockProps.about);
  expect(projectAbout).toBeInTheDocument();
});

test('renders GitHub link with correct href', () => {
  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', mockProps.githubLink);
});

test('renders Live link with correct href', () => {
  const liveLink = screen.getByRole('link', { name: /Live/i });
  expect(liveLink).toBeInTheDocument();
  expect(liveLink).toHaveAttribute('href', mockProps.liveUrl);
});
