import React from "react";
import './Home.css'
import mainimg from '../../img/shutterstock_1736005427212121212.jpeg'
import laptop from '../../img/laptops.jpeg'
import watches from '../../img/watches.jpeg'
import fragrance from '../../img/fragrance.jpeg'
import decoration from '../../img/decoration.jpeg'
import jewellery from '../../img/jewellery.jpeg'
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home_main">
                <Link to="/phones"><img src={mainimg} alt="" className="main_img image"/></Link>
            </div>
            <div className="home_secondary secondary">
                <Link to="/laptops"><img src={laptop} alt="" className="laptops secondary_image"/></Link>
                <Link to="/watches"><img src={watches} alt="" className="watches secondary_image"/></Link>
                <Link to="/parfumes"><img src={fragrance} alt="" className="fragrance secondary_image"/></Link>
                <Link to="/furniture"><img src={decoration} alt="" className="decoration secondary_image"/></Link>
            </div>
            <Link to="jewellery"><img src={jewellery} alt="" className="decoration main_img image"/></Link>
        </div>
    )
}

export default Home
