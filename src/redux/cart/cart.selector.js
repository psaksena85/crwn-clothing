import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log(1);
    return cartItems.reduce((total, item) => {
      console.log(22);
      return total + item.quantity;
    }, 0);
  }
);

export const selectCartItemTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
