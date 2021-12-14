import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../../redux/store';
import MoviePage from './movie-page';

describe('Test MoviePage component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>  
        <MoviePage/>
      </Provider>
    );
  })

  test('has a movie description', () => {
    const description = screen.getByText(/Lorem /i);
    expect(description).toBeDefined();
  });

  test('has a top cast', () => {
    const cast = screen.getByText(/cast/i);
    expect(cast).toBeDefined();
  });

  test('has a recommendations block', () => {
    const recom = screen.getByText(/recommendations/i);
    expect(recom).toBeDefined();
  });
});