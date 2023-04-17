import { render } from '@testing-library/react';
import Header from '..';

test('Header renders without crashing', () => {
    render(<Header />);
});

test('Header renders site title correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Portfólio')).toBeInTheDocument();
});

test('Header renders site logo correctly', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Logo vermelha')).toBeInTheDocument();
});
