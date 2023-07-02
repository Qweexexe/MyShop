
import { RemoveItemAction } from "../interfaces/interfaces";

export const removeItem = (title: string): RemoveItemAction => {
    return {
        type: "REMOVE_ITEM",
        title: title,
    };
};

export const BuyFunc = () =>{
    return{
        type: "BUY",
        payload : []
    }
}