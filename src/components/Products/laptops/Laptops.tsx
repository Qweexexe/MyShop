import React, {useEffect, useState} from "react";
import {Initial} from "../../../interfaces/interfaces";
import '../../../Catalog.css'
import {undefinedImage} from "../../../interfaces/interfaces";
import axios from "axios";
import Item from "../../Item/Item";
import Navigation from "../../Navigation/Navigation";


const Laptops: React.FC = () => {
    const [laptopData, setLaptopDAta] = useState<Array<Initial> | null>(null)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/category/laptops')
            .then(response => setLaptopDAta(response.data.products))
    }, [])

    return (
        <>
            <Navigation/>
            <div className="laptops_wrapper">
                {
                    laptopData && laptopData.map(el => (
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

export default Laptops