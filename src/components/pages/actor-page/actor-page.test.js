import { render, screen } from '@testing-library/react';
import ActorPage from './actor-page';

describe('Test ActorPage component', () => {
  beforeEach(() => {
    render(<ActorPage/>);
  })

  test('have actor name', () => {
    const title = screen.getByText('Actor Name');
    expect(title).toBeInTheDocument();
  });

  test('have biography', () => {
    const biography = screen.getByText(/Lorem/);
    expect(biography).toBeInTheDocument();
  });

  test('have known by', () => {
    const known = screen.getByText(/known/i)
    expect(known).toBeInTheDocument();
  });
});