import { render, screen } from '@/utils/testUtils';
import { IProjectCardProps, ProjectCard } from '..';
import { regexWebsiteURL } from '@/utils';

const mockProps: IProjectCardProps = {
  name: 'Test Project',
  stack: ['Test stack 1', 'Test stack 2'],
  about: 'This is a test project.',
  githubLink: 'https://github.com/test',
  liveUrl: 'https://www.freecodecamp.org',
};

test('renders project name', () => {
  render(<ProjectCard {...mockProps} />);

  const projectName = screen.getByText(mockProps.name);
  expect(projectName).toBeInTheDocument();
});

describe('renders project stack', () => {
  test('renders the stack correctly', () => {
    const stack = ['React', 'Node.js', 'Express', 'MongoDB'];

    render(<ProjectCard {...mockProps} stack={stack} />);

    // Verificando se o texto esperado está no documento
    expect(
      screen.getByText((content) => content.startsWith('Stack:'))
    ).toBeInTheDocument();
    expect(
      screen.getByText('React - Node.js - Express - MongoDB')
    ).toBeInTheDocument();
  });

  test('renders correctly with an empty stack', () => {
    const stack: string[] = [];

    render(<ProjectCard {...mockProps} stack={stack} />);

    // Verificando se o texto 'Stack:' está presente e a junção do stack vazio não apresenta erro
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });
});

test('renders project about', () => {
  render(<ProjectCard {...mockProps} />);

  expect(screen.getByText(mockProps.about)).toBeInTheDocument();
});

describe('renders GitHub link', () => {
  test('with correct href', () => {
    render(<ProjectCard {...mockProps} />);

    const githubLink = screen.getByRole('link', {
      name: /github/i,
    }) as HTMLAnchorElement;

    expect(githubLink.href).toMatch(regexWebsiteURL); // válido
    expect(githubLink).toHaveAttribute('href', mockProps.githubLink); // acessível
  });

  test('with incorrect href', () => {
    render(<ProjectCard {...mockProps} githubLink="linkerrado" />);

    const githubLink = screen.queryByRole('link', {
      name: /github/i,
    }) as HTMLAnchorElement | null;

    expect(githubLink).not.toBeInTheDocument(); // ausente
  });

  test('with empty href', () => {
    render(<ProjectCard {...mockProps} githubLink="" />);

    const githubLink = screen.queryByRole('link', { name: /github/i });

    expect(githubLink).not.toBeInTheDocument(); // ausente
  });
});

describe('renders Live link', () => {
  test('with correct href', () => {
    render(<ProjectCard {...mockProps} />);

    const liveLink = screen.getByRole('link', {
      name: /live/i,
    }) as HTMLAnchorElement;

    expect(liveLink.href).toMatch(regexWebsiteURL); // válido
    expect(liveLink).toHaveAttribute('href', mockProps.liveUrl); // acessível
  });

  test('with incorrect href', () => {
    render(<ProjectCard {...mockProps} liveUrl="linkerrado" />);

    const liveLink = screen.queryByRole('link', {
      name: /live/i,
    }) as HTMLAnchorElement | null;

    expect(liveLink).not.toBeInTheDocument(); // ausente
  });

  test('with empty href', () => {
    render(<ProjectCard {...mockProps} liveUrl="" />);

    const liveLink = screen.queryByRole('link', { name: /live/i });

    expect(liveLink).not.toBeInTheDocument(); // ausente
  });
});
