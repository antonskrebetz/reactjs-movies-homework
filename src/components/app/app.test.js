import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import App from './app';

describe('Test App component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  })

  test('has a search input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();
  });

  test('has an app title', () => {
    const appTitle = screen.getByText(/movie app/i);
    expect(appTitle).toBeDefined();
  });
});
