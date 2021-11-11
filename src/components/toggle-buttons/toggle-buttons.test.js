import { render, screen } from '@testing-library/react';
import ToggleButtons from './toggle-buttons';

describe('Test ToggleButtons component', () => {
  beforeEach(() => {
    render(<ToggleButtons/>);
  })

  test('have button', () => {
    const img = screen.getByText(/popular/i);
    expect(img).toBeInTheDocument();
  });
});