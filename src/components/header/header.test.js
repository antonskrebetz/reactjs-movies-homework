import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import Header from './header'

describe('Test Header component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header/>
      </Provider>
    );
  })

  test('has a main title', () => {
    const title = screen.getByText(/Movie app/i);
    expect(title).toBeDefined();
  });

  test('has a search input', () => {
    const input = screen.getByPlaceholderText(/Movies/i);
    expect(input).toBeDefined();
  });

  test('has a toggle language button', () => {
    const langBtn = screen.getByRole('button');
    expect(langBtn).toBeDefined();
  });
});
