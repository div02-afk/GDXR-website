import logo from "../assets/Group 6 10.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPeopleLine, faInfo } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function Navbar() {
  
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
        
        <img src={logo} className="w-20" alt="Logo" />
      </motion.div>
      <nav>
        <div className="navLinks">
          {arr.map(({link,img,index})=>(  
            <motion.div
            key={index}
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
            <FontAwesomeIcon icon={img} className="link-icon xl:text-3xl" />
          </motion.div>
          ))}
        </div>
      </nav>
    </div>
  );
}
