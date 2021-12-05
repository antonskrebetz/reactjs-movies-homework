import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store';
import ToggleButtons from './toggle-buttons';

describe('Test ToggleButtons component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ToggleButtons/>
      </Provider>
    );
  })

  test('has a popular button', () => {
    const btn = screen.getByText(/popular/i);
    expect(btn).toBeDefined();
  });
});