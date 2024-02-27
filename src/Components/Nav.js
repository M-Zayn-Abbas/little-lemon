import {Link } from "react-router-dom";
import "../Cssfiles/Nav.css";
const Nav = () => {
    return (
        <ul className="nav-container">
            <li><Link to="/">Home</Link></li>
            <li><Link to="aboutus">About Us</Link></li>
            <li><Link to="menu">Menu</Link></li>
            <li><Link to="booking">Reservation</Link></li>
            <li><Link to="orderonline">OrderOnline</Link></li>
            <li><Link to="login">Login</Link></li>
        </ul>
        
    )
}
export default Nav;