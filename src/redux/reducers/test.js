'use struct';

import { Actions } from '../actions';

const initialState = {
  count: 0
};

export function test(state = initialState, action) {
  switch (action.type) {
    case Actions.Increase : {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case Actions.Decrease : {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default: {
      return state;
    }
  }
}
