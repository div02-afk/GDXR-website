import logo from "../assets/Group 6 10.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import {faPeopleLine} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="logo" onClick = {()=>{window.location.href = "/"}}>
        <img src={logo} width={44} height={46} alt="Logo" />
      </div>
      <nav>
        <div className="navLinks">
          <div className="navLink" onClick = {()=>{window.location.href = "/"}}><FontAwesomeIcon icon={faHouse} /></div>
          <div className="navLink" onClick={()=>{window.location.href ="/#about"}}><FontAwesomeIcon icon= {faPeopleLine}/></div>
          <div className="navLink" onClick={()=>{window.location.href ="/#contact"}}><FontAwesomeIcon icon={faHeadset} /></div>
        </div>
      </nav>
    </div>
  );
}
