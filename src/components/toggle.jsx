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
    {title:"Home", link:"/home"},
    { title: "About Us", link: "/#about" },
    { title: "Events", link: "/#events" },
    { title: "Team", link: "/#team" },
    { title: "Contact Us", link: "#contact" },
  ];
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
          <div className="content h-max mt-30">
            <div className="w-full h-96 absolute top-24 left-5">
              {navlist.map(({ title, link }) => (
                <div
                  key={title}
                  className="font-pixelEmulator text-2xl lg:text-3xl text-left mt-5"
                  onClick={() => handleClick(link)}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
