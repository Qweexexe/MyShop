import React, {useEffect} from "react";
import axios from "axios";
import Navigation from "../../Navigation/Navigation";


const Watches: React.FC = () => {
    return (
        <>
            <Navigation/>
            <div className="wathces_wrapper">
                <div className="watches_content">
                    <h1>Out of Stock</h1>
                </div>
            </div>
        </>
    )
}

export default Watches