import Nav from "./Nav"
import Logo from "./Logo .png";
import '../Cssfiles/Footer.css'

const Footer = ()=>{
    return(
        <footer>
            <div className="logo">
        <img src={Logo} alt="logo"/>
        </div>
        <Nav/>
        </footer>
    )
}

export default Footer;