import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../../redux/store';
import ToggleButtons from './toggle-buttons';

describe('Test ToggleButtons component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ToggleButtons/>
        </Router>
      </Provider>
    );
  })

  test('has a toggle buttons', () => {
    const btn = screen.getByRole('group');
    expect(btn).toBeDefined();
  });
});