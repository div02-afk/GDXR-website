// Navbar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

export default function Toggle() {
  const toggle = () => {
    const toggleContainer = document.getElementById("toggleContainer");
    toggleContainer.classList.toggle("translate");
  };

  const handleClick = (e) => {
    window.location.href = e;
    toggle();
  };
  const navlist = [
    { title: "About Us", link: "/#about" },
    { title: "Events", link: "/#events" },
    { title: "Team", link: "/#team" },
    { title: "Contact Us", link: "/#contact" },
  ]
  return (
    <div className="toggleContainer1">
      <div className="toggleBars">
        <button
          onClick={toggle}
          style={{ background: "transparent", border: 0 }}
        >
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>

      <div id="toggleContainer" className="content-container translate">
        <div className="toggle">
          <div className="content h-full mt-30">
            {navlist.map(({ title, link }) => (
              <div
                key={title}
                className="font-pixelEmulator text-3xl text-left"
                onClick={() => handleClick(link)}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
