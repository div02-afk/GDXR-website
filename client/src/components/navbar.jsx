import logo from '../assets/Group 6 10.svg';
// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return(
        <div className="navBar">
            <div className="logo">
                <img src={logo} width={44} height={46} alt="Logo" />
            </div>
            <nav>
            <div className="navLinks">
                <div className="navLink">
              Home
                </div>
                <div className="navLink">Home</div>
                <div className="navLink">Home</div>
                <div className="navLink">Home</div>
            </div>
            </nav>
        </div>
        
    )
}