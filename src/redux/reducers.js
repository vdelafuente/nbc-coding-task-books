import * as actionsTypes from "./actions-types";

const middleHelpers = {
  SHOPPING_CART: (state, payload) => ({
    ...state,
    shoppingCart: payload,
  }),
};

const initialState = {
  shoppingCart: [],
};

const reducer = (state = initialState, action) => {
  const actionName = actionsTypes[action.type];

  if (actionName) return middleHelpers[actionName](state, action.payload);

  return state;
};

export default reducer;
