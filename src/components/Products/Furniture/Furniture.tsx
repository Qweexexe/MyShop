import React, {useEffect, useState} from "react";
import '../../../Catalog.css'
import axios from "axios";
import {Initial, undefinedImage} from "../../../interfaces/interfaces";
import Item from "../../Item/Item";
import Navigation from "../../Navigation/Navigation";


const Furniture: React.FC = () => {
    const [furnitureData, setFurnitureData] = useState<Array<Initial> | null>(null)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/category/furniture')
            .then(response => setFurnitureData(response.data.products))
    }, [])

    return (
        <>
            <Navigation/>
            <div className="furniture_wrapper">
                {
                    furnitureData && furnitureData.map(el => (
                        <Item
                            title={el.title}
                            description={el.description}
                            price={el.price}
                            image={el.images[1] ? el.images[2] : undefinedImage}
                            brand={el.brand}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Furniture