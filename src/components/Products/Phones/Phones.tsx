import React, {useEffect, useState} from "react";
import '../../../Catalog.css'
import {undefinedImage} from "../../../interfaces/interfaces";
import axios from "axios";
import Item from '../../Item/Item'
import {Initial} from "../../../interfaces/interfaces";
import Navigation from "../../Navigation/Navigation";


const Phones: React.FC = () => {
    const [phonesData, setPhonesData] = useState<Array<Initial> | null>(null)
    console.log(phonesData)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/category/smartphones')
            .then(response => setPhonesData(response.data.products))
    }, [])

    return (
        <>
            <Navigation/>
            <div className="phone_wrapper">
                {
                    phonesData && phonesData.map(el =>
                        (
                            <Item
                                title={el.title}
                                description={el.description}
                                price={el.price}
                                image={el.images[1] ? el.images[2] : undefinedImage}
                                brand={el.brand}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}

export default Phones