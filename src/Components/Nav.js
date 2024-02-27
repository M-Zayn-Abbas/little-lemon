import {Link } from "react-router-dom";
import "../Cssfiles/Nav.css";
const Nav = () => {
    return (
        <ul className="nav-container">
            <li><Link to="/">Home</Link></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><Link to="booking">Reservation</Link></li>
            <li><a>Order Online </a></li>
            <li><a>Login</a></li>
        </ul>
        
    )
}
export default Nav;