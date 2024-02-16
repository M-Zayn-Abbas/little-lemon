import Nav from "./Nav"
import logo from'./Logo .png'
const Header = () => {
    return(
        <header>
        <img src={logo} alt="Logo"/>
        <Nav className="Navigation"/>
        </header>
            )
    }

export default Header;