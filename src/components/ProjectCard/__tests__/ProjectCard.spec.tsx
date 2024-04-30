import { render, screen } from '@/utils/testUtils';
import { ProjectCard } from '..';
import { regexWebsiteURL } from '@/utils';

const mockProps = {
  name: 'Test Project',
  myRole: 'Test Role',
  about: 'This is a test project.',
  githubLink: 'https://github.com/test',
  liveUrl: 'https://www.freecodecamp.org',
};

test('renders project name', () => {
  render(<ProjectCard {...mockProps} />);

  const projectName = screen.getByText(mockProps.name);
  expect(projectName).toBeInTheDocument();
});

describe('renders my role in the project', () => {
  test('with role', () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText(mockProps.myRole)).toBeInTheDocument();
  });

  test('without role', () => {
    render(<ProjectCard {...mockProps} myRole={undefined} />);

    expect(screen.getByText(/sem cargo/i)).toBeInTheDocument();
  });
});

describe('renders project about', () => {
  test('with about', () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText(mockProps.about)).toBeInTheDocument();
  });

  test('without about', () => {
    render(<ProjectCard {...mockProps} about={undefined} />);

    expect(
      screen.getByText(/me consulte para mais informações/i)
    ).toBeInTheDocument();
  });
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
