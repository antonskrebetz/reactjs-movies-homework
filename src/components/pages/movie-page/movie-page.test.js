import { render, screen } from '@testing-library/react';
import MoviePage from './movie-page';

describe('Test MoviePage component', () => {
  beforeEach(() => {
    render(<MoviePage/>);
  })

  test('have movie description', () => {
    const description = screen.getByText(/Lorem /i);
    expect(description).toBeInTheDocument();
  });

  test('have top cast', () => {
    const cast = screen.getByText(/cast/i);
    expect(cast).toBeInTheDocument();
  });

  test('have recommendations', () => {
    const recom = screen.getByText(/recommendations/i);
    expect(recom).toBeInTheDocument();
  });
});
