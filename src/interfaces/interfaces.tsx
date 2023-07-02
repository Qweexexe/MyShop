import React, {Dispatch, SetStateAction} from "react";

export interface Initial {
    title: string,
    description: string,
    price: number,
    images: Array<string>,
    brand: string
}


export interface InitialItemProps {
    description: string | null,
    title: string | null,
    image: string | null,
    brand: string | null,
    price: number
}

export interface headerInterface {
    onFilterChange: React.ChangeEventHandler<HTMLInputElement>
}

export interface Item {
  title: string;
  description: string;
  price: number;
  image: string;
  brand: string;
}


export interface action {
    type: string,
    payload?: any

}

export interface cartState {
    title: string;
    description: string;
    price: number;
    image: string;
    brand: string;
    items: Item[];
}




export interface TakeInfoAction {
    type: "TAKE_INFO";
    title: string;
    description: string;
    price: number;
    image: string;
    brand: string;
}

export interface RemoveItemAction {
  type: "REMOVE_ITEM";
  title: string;
}

export interface Buy{
    type:"BUY",
    payload : null[]
}
export type cartAction = TakeInfoAction | RemoveItemAction | Buy;
export const undefinedImage = "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
