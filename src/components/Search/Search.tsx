import React, {useEffect, useState} from "react";
import './Search.css'
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import {Initial, undefinedImage} from "../../interfaces/interfaces";
import Item from "../Item/Item";
import Header from "../Header/Header";
import {Link} from "react-router-dom";

const Search: React.FC = () => {
    const [products, setProducts] = useState<Array<Initial> | null>(null)
    const [filteredProducts, setFilteredProducts] = useState<Array<Initial> | null>(null)
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products)
                setFilteredProducts(response.data.products);
            })
    }, [])
    const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const searchText = e.target.value.toLowerCase()
        if (products) {
            const filtered = products.filter(product => product.title.toLowerCase().includes(searchText))
            setFilteredProducts(filtered)
        }
    }
    return (
        <>
            <div className="head">
                <Link to="/" className="head_back">Back to home</Link>
                <Header onFilterChange={handleFilterChange}/>
            </div>
            <div className="search_wrapper">
                {filteredProducts && filteredProducts.map(el => filteredProducts ? (
                        <div className="search_item">
                            <Item
                                title={el.title}
                                description={el.description}
                                price={el.price}
                                image={el.images[0] ? el.images[0] : undefinedImage}
                                brand={el.brand}

                            />
                        </div>
                    )
                    :
                    (
                        <div>
                            <h1>Sorry , we didn't found everything on our server</h1>
                            <br/>
                            <h1> 404</h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Search