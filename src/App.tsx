import React, {useEffect, useState} from 'react';
import './App.css';
import Phones from "./components/Products/Phones/Phones";
import Navigation from "./components/Navigation/Navigation";
import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Laptops from "./components/Products/laptops/Laptops";
import Watches from "./components/Products/Watches/Watches";
import Parfumes from "./components/Products/Parfumes/Parfumes";
import Furniture from "./components/Products/Furniture/Furniture";
import Jewellery from "./components/Products/Jewellery/Jewellery";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/login";

const App: React.FC = () => {
    const [data, setData] = useState<string[] | null>(null);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then(response => setData(response.data));
    }, []);
    const check: React.MouseEventHandler<HTMLElement> = (e) => {
        console.log((e.target as HTMLElement).innerText);
    }


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="header_wrapper">
                                <Navigation/>
                                <Home/>
                            </div>
                        }
                    />
                    <Route path="/phones" element={<Phones/>}/>
                    <Route path="/laptops" element={<Laptops/>}/>
                    <Route path="/watches" element={<Watches/>}/>
                    <Route path="/parfumes" element={<Parfumes/>}/>
                    <Route path="/jewellery" element={<Jewellery/>}/>
                    <Route path="/furniture" element={<Furniture/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
