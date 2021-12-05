import { render, screen } from '@testing-library/react';
import Pagination from './pagination';

describe('Test Pagination component', () => {
  beforeEach(() => {
    render(<Pagination/>);
  })

  test('has a pagination', () => {
    const pagination = screen.getByRole('list');
    expect(pagination).toBeDefined();
  });
});