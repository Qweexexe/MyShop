import React from "react";
import Swal from 'sweetalert2'
import './Item.css'
import addIcon from '../../icons/add.svg'
import {InitialItemProps} from "../../interfaces/interfaces";
import {useDispatch} from "react-redux";
import {addCart} from "../../animations/animations";


const Item: React.FC<InitialItemProps> = ({title, description, image, price, brand}) => {
    const dispatch = useDispatch()
    const takeInfo: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        dispatch({type: "TAKE_INFO", title, image, price, brand});
        addCart()
    };

    return (
        <div className="item">
            {image && <img src={image} alt="item image" className="item_img"/>}
            <div className="item_item">
                <h3 className="item_name">{title}</h3>
                <h4 className="model">{brand}</h4>
            </div>
            <div className="item_bottom">
                <h4 className="item_cost">$ {price}</h4>
                <button className="item_add_cart" onClick={takeInfo}>
                    <img src={addIcon} alt="cart add icon" className="item_add_cart_icon"/>
                </button>
            </div>
        </div>
    );
};

export default Item
