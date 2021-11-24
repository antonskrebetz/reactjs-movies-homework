import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../../redux/store';
import ActorPage from './actor-page';

describe('Test ActorPage component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ActorPage/>
      </Provider>
    );
  })

  test('has an actor name', () => {
    const title = screen.getByText('Actor Name');
    expect(title).toBeDefined();
  });

  test('has a biography', () => {
    const biography = screen.getByText(/Lorem/);
    expect(biography).toBeDefined();
  });

  test('has s known by block', () => {
    const known = screen.getByText(/known/i)
    expect(known).toBeDefined();
  });
});