import logo from "../assets/Group 6 10.svg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPeopleLine, faInfo } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function Navbar() {
  const navigate = useNavigate();
  const arr = [{link:"/#home",img:faHouse},{link:"/#about",img:faInfo},{link:"/#team",img:faPeopleLine},{link:"#contact",img:faHeadset}]
  return (
    <div className="navBar">
      <motion.div
        className="logo"
        onClick={() => {
          window.location.href = "/#home";
        }}
        // whileHover={{
        //   scale: 1.2,
        //   transition: { duration: 0.3 },
        // }}
        // whileTap={{ scale: 0.9 }}
      >
        
        <img src={logo} width={44} height={46} alt="Logo" />
      </motion.div>
      <nav>
        <div className="navLinks">
          {arr.map(({link,img})=>(  
            <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="navLink"
            onClick={() => {
              window.location.href = link;
            }}
          >
            <FontAwesomeIcon icon={img} className="link-icon" />
          </motion.div>
          ))}
        </div>
      </nav>
    </div>
  );
}
