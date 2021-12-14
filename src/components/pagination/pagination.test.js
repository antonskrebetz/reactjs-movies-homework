import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from "react-router-dom";
import Pagination from './pagination';

describe('Test Pagination component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Pagination/>
      </Router>
    );
  })

  test('has a pagination', () => {
    const pagination = screen.getByRole('list');
    expect(pagination).toBeDefined();
  });
});