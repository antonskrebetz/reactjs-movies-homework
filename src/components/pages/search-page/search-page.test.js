import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from '../../../redux/store';
import SearchPage from './search-page';

describe('Test SearchPage component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <SearchPage/>
        </Router>  
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