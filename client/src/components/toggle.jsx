// Navbar.js
export default function Navbar() {
    const toggle = () => {
        const toggleContainer = document.getElementById("toggleContainer");
        toggleContainer.classList.toggle("translate");
    };

    return (
        <div className="toggleContainer1">
            <div className="toggleBars">
                <button onClick={toggle}>toggle</button>
            </div>
            <div id="toggleContainer" className="content-container translate">
                <div className="toggle">
                    <div className="content">
                        <ul className="navlist">
                            <li className="listitem">AboutUs</li>
                            <li className="listitem">Events</li>
                            <li className="listitem">Team</li>
                            <li className="listitem">ContactUs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
