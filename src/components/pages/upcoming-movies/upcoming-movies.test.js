import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../../redux/store';
import UpcomingMovies from './upcoming-movies';

describe('Test UpcomingMovies component', () => {
  beforeEach( () => {
    render(
      <Provider store={store}>  
        <UpcomingMovies/>
      </Provider>
    );
  })

  test('has film posters', async () => {
    const poster = await screen.findByRole('img');
    expect(poster).toBeDefined();
  });

  test('has movie cards', async () => {
    const card = await screen.findAllByRole('button');
    expect(card).toBeDefined();
  });

});