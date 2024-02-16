import Nav from "./Nav"
import logo from'./Logo .png'
import '../Cssfiles/Header.css'
const Header = () => {
    return(
        <header className="Header">
        <img src={logo} alt="Logo"/>
        <Nav/>
        </header>
            )
    }

export default Header;