// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    const toggle = () => {
        const toggleContainer = document.getElementById("toggleContainer");
        toggleContainer.classList.toggle("translate");
    };

    return (
        <div className="toggleContainer1">
            <div className="toggleBars">
                <button onClick={toggle} style={{background:"transparent", border:0}}><FontAwesomeIcon icon={faBars} size="xl" style={{color: "#ffffff",}} /></button>
            </div>
            <div id="toggleContainer" className="content-container translate">
                <div className="toggle">
                    <div className="content">
                        <ul className="navlist">
                            <li className="listitem" onClick = {()=>{window.location.href = "/#about"}}>AboutUs</li>
                            <li className="listitem">Events</li>
                            <li className="listitem">Team</li>
                            <li className="listitem" onClick = {()=>{window.location.href = "/#contact"}}>ContactUs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
