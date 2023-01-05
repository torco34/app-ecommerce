export const initialState = {
  basket: [],
};
//  SAY ACCITION WHAT HACE
export const actionTypes = {
  // AGREGAR ELEMENTO
  ADD_TO_BASKET: "ADD_TO_BASKET",
  // ELIMINAR ELEMTOS DE CAR
  REMOVE_ITEM: "REMOVE_ITEM",
};

// RETO LOGRADO SUMA PRECIO
export const getBasketTotal = (basket) => {
  const sumPrice = basket?.reduce((amount, item) => item.price + amount, 0);
  return sumPrice;
};
// FUCTION
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_ITEM":
      // cuentra la position del id que se le pasa
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // una copia del baske
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
