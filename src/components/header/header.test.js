import { render, screen } from '@testing-library/react';
import Header from './header'

describe('Test Header component', () => {
  beforeEach(() => {
    render(<Header/>);
  })

  test('have main title', () => {
    const title = screen.getByText(/Movie app/i);
    expect(title).toBeInTheDocument();
  });

  test('have search input', () => {
    const langBtn = screen.getByPlaceholderText(/Movies/i)
    expect(langBtn).toBeInTheDocument();
  });

  test('have lang button', () => {
    const langBtn = screen.getByRole('button');
    expect(langBtn).toBeInTheDocument();
  });
});
