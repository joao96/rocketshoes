import { produce } from 'immer';

export default function cart(state = [], action) {
  // state as a param is the previous state
  // state = [] -> initial state
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      // state -> base state to work from
      // draft -> a copy of the current state
      return produce(state, draft => {
        // modifications in draft will reflect in the next state
        const { product } = action;

        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
