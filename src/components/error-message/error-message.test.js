import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-message';

describe('Test ErrorMessage component', () => {
  beforeEach(() => {
    render(<ErrorMessage/>);
  })

  test('have error image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});