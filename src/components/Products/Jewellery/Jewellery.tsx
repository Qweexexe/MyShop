import React, {useEffect, useState} from "react";
import '../../../Catalog.css'
import {Initial, undefinedImage} from "../../../interfaces/interfaces";
import axios from "axios";
import Item from "../../Item/Item";
import Navigation from "../../Navigation/Navigation";


const Jewellery: React.FC = () => {
    const [jewelleryData, setJewelleryData] = useState<Array<Initial> | null>(null)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/category/womens-jewellery')
            .then(response => setJewelleryData(response.data.products))
    }, [])
    return (
        <>
            <Navigation/>
            <div className="jewellery_wrapper">
                {jewelleryData && jewelleryData.map(el => (
                    <Item
                        title={el.title}
                        description={el.description}
                        price={el.price}
                        image={el.images[0] ? el.images[0] : undefinedImage}
                        brand={el.brand}
                    />
                ))}
            </div>
        </>
    )
}

export default Jewellery