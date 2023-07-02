import React, {Dispatch, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../store";
import './Cart.css'
import {Buy, Item, RemoveItemAction} from "../../interfaces/interfaces";
import {BuyFunc} from "../../actions/remove";
import Navigation from "../Navigation/Navigation";
import {removeItem} from "../../actions/remove";
import {BuyAnimation} from "../../animations/animations";

const Cart: React.FC = () => {
    const getInfo = useSelector((state: ReturnType<typeof RootReducer>) => state.save.items as Item[]);
    const [allPrice, setAllPrice] = useState(0);
    const dispatchCancel : Dispatch<RemoveItemAction> = useDispatch()
    const buyDispatch : Dispatch<Buy> = useDispatch()

    const handleBuyClick = () =>{
        buyDispatch(BuyFunc() as Buy)
        BuyAnimation()

    }
    const handleCancelClick = (title:string) => {
        dispatchCancel(removeItem(title));
    }

    useEffect(() => {
        const totalPrice = getInfo.reduce((sum, item) => sum + item.price, 0);
        setAllPrice(totalPrice);
    }, [getInfo]);

    console.log(getInfo);
    return (
        <>
            <Navigation/>
            <div className="cart_wrapper">
                <div className="cart_item">
                    {getInfo &&
                       getInfo.length > 0 ? getInfo.map((el) => (
                            <div className="cart_item_item"  key={el.title}>
                                <img src={el.image} alt="" className="cart_image"/>
                                <div className="cart_item_info">
                                    <h4>{el.title}</h4>
                                    <h4>{el.description}</h4>
                                    <h4>{el.brand}</h4>
                                    <h4>$ {el.price}</h4>
                                    <div className="cancel" onClick={() => handleCancelClick(el.title)}>Cancel</div>
                                </div>
                            </div>
                        )) :
                        (
                            <div className="nothing">Nothing here, please add something</div>
                        )}
                </div>
                {allPrice > 0 && (

                   <div className="cart_footer">
                        <div className="total_price">Total: ${allPrice}</div>
                       <div className="buy" onClick={handleBuyClick}>Buy</div>
                   </div>

                )
                }
            </div>
        </>

    );
};

export default Cart