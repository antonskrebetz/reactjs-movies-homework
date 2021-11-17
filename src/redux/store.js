import { createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {...state, value: state.value};
    default:
      return state;
  };
}

const store = createStore(reducer);

export default store;