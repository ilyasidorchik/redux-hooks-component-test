const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export const selectCount = (state) => state.counter.count;

export default reducer;
