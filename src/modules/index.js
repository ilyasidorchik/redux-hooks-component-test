import { combineReducers } from 'redux';

import counter from './Counter';

export const rootPreloadedState = {
  counter: {
    count: 0,
  },
};

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
