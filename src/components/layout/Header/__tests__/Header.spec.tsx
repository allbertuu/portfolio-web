import { render } from '@testing-library/react';
import { it } from 'vitest';
import Header from '..';

it('should renders without crashing', () => {
  render(<Header />);
});
