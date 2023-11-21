import logo from '../assets/Group 6 10.svg';

export default function Navbar() {
    return(
        <div className="navBar">
            <div className="logo">
                <img src={logo} width={44} height={46} alt="Logo" />
            </div>
            <nav>
            <div className="navLinks">
                <div className="navLink">Home</div>
                <div className="navLink">Home</div>
                <div className="navLink">Home</div>
                <div className="navLink">Home</div>
            </div>
            </nav>
        </div>
        
    )
}