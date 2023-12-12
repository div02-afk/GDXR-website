import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    const contacts = [
        { link: "https://www.facebook.com/GDXR.AIT/", icon: faFacebook },
        { link: "https://www.instagram.com/gdxr_ait", icon: faInstagram },
        {
          link: "https://www.linkedin.com/company/ait-gdxr-club",
          icon: faLinkedin,
        },
      ];
    return(
        <div className="w-full bottom-0">
        <div
        className="text-white footer w-full h-10 flex flex-row justify-evenly text-center align-middle mt-20"
        id="footer"
      >
        <div className="title contact text-xl lg:text-3xl font-pixelEmulator ml-1" id="contact">
          Contact Us
        </div>

        <div className="contactUsContent flex flex-row justify-evenly lg:w-1/4 w-1/2">
          {contacts.map(({ link, icon }) => (
            <a key={link} className="social" href={link}>
              <FontAwesomeIcon
                icon={icon}
                size={window.innerWidth > 600 ? "2xl" : "lg"}
                style={{ color: "#ffffff" }}
                className="social"
              />
            </a>
          ))}
        </div>
      </div>
      </div>
    )
}