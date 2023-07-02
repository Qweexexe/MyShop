import './Header.css'
import React from "react";
import {headerInterface} from "../../interfaces/interfaces";

const Header : React.FC<headerInterface> = ({onFilterChange}) => {
    return (
        <>
            <div className="header">
                <input type="text" placeholder="Apple Watch, Samsung S21, MacBook Pro..." className="header_input" onChange={onFilterChange}/>
            </div>
        </>
    )
}

export default Header