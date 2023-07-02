import { cartState, cartAction } from "../interfaces/interfaces";
import { Item } from "../interfaces/interfaces";

export const InitialState: cartState = {
    title: "",
    description: "",
    image: "",
    brand: "",
    price: 0,
    items: [],
};

export const saveReducer = (state = InitialState, action: cartAction) => {
  switch (action.type) {
    case "TAKE_INFO":
      const newItem: Item = {
        title: action.title,
        description: action.description,
        price: action.price,
        image: action.image,
        brand: action.brand,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "REMOVE_ITEM":
      const updatedItems = state.items.filter(
        item => item.title !== action.title
      );
      return {
        ...state,
        items: updatedItems,
      };
      case "BUY":
          return {
              ...state, items: []
          }
    default:
      return state;
  }
};

export default saveReducer;
