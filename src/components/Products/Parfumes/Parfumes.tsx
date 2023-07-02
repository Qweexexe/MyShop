import React, {useEffect, useState} from "react";
import axios from "axios";
import '../../../Catalog.css'
import {Initial, undefinedImage} from "../../../interfaces/interfaces";
import Item from "../../Item/Item";
import Navigation from "../../Navigation/Navigation";


const Parfumes: React.FC = () => {
    const [perfumesData, setPerfumesData] = useState<Array<Initial> | null>(null)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/category/fragrances')
            .then(response => setPerfumesData(response.data.products))
    }, [])
    return (
        <>
            <Navigation/>
            <div className="parfumes">
                {perfumesData && perfumesData.map(el => (
                    <Item
                        title={el.title}
                        description={el.description}
                        price={el.price}
                        image={el.images[1] ? el.images[2] : undefinedImage}
                        brand={el.brand}
                    />
                ))}
            </div>
        </>
    )
}

export default Parfumes
