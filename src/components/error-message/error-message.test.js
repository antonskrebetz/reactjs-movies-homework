import { render, screen } from '@testing-library/react';
import ErrorMessage from './error-message';

describe('Test ErrorMessage component', () => {
  beforeEach(() => {
    render(<ErrorMessage/>);
  })

  test('has an error image', () => {
    const error = screen.getByRole('img');
    expect(error).toBeDefined();
  });
});