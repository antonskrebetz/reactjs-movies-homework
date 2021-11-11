import { render, screen } from '@testing-library/react';
import App from './app';

describe('Test App component', () => {
  beforeEach(() => {
    render(<App/>);
  })

  test('have search input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('have pagination', () => {
    const langBtn = screen.getByRole('list');
    expect(langBtn).toBeInTheDocument();
  });
});
