import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Ourteam from "./../components/ourteam";
// import TeamMemberCard from "./../components/ourteam";
export default function Home() {
  return (
    <div className="landing">
      <div className="home">
        <div className="title">
          Game Development <br />
          and <br />
          eXtended Reality club
        </div>
        <div className="parallax-layer ship"></div>
        <div className="content">
          <div className="contentText" >
            <div className="projectName">
              <div className="eventImage">
                <img src="images/vrimage.png" alt="vrimage" />
              </div>
              AIT VR Tour
            </div>
            <div className="aboutEvent">
              {" "}
              Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
            </div>
          </div>
          <div className="contentText">
            <div className="projectName">
              <div className="eventImage">
                <img src="images/vrimage.png" alt="vrimage" />
              </div>
              AIT VR Tour
            </div>
            <div className="aboutEvent">
              {" "}
              Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
            </div>
          </div>
          <div className="contentText" onClick = {()=>{window.location.href = "/gameathon"}}>
            <div className="projectName">
              <div className="eventImage">
                <img src="images/vrimage.png" alt="vrimage" />
              </div>
              Game-a-Thon
            </div>
            <div className="aboutEvent">
              {" "}
              Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
            </div>
          </div>
          <div className="contentText">
            <div className="projectName">
              <div className="eventImage">
                <img src="images/vrimage.png" alt="vrimage" />
              </div>
              AIT VR Tour
            </div>
            <div className="aboutEvent">
              {" "}
              Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="title">About Us</div>
        <div className="contentText">
        <div className="aboutContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est
          doloribus beatae repellat veritatis eveniet error facere, sit ipsam
          minima commodi ad reiciendis, hic aspernatur iste exercitationem quia!
          Necessitatibus, aperiam.
        </div>
      </div>
      </div>
      
      <div className="title">OUR Team </div>
      <div className="title">SEC's</div>
      <Ourteam numberOfCards={2}/>
      <div className="title">Joint-sec</div>

      <Ourteam numberOfCards={5}/>


      <div className="footer" id="footer">
        <div className="title contact" id="contact">
          Contact Us
        </div>
        <div className="contactUsContent">
          <a className="social" href={"https://www.facebook.com/GDXR.AIT/"}>
            <FontAwesomeIcon
              icon={faFacebook}
              size={"2xl"}
              style={{ color: "#ffffff" }}
              className="social"
            />
          </a>
          <a className="social" href={"https://www.instagram.com/gdxr_ait"}>
            <FontAwesomeIcon
              icon={faInstagram}
              size={"2xl"}
              style={{ color: "#ffffff" }}
              className="social"
            />
          </a>
          <a
            className="social"
            href={"https://www.linkedin.com/company/ait-gdxr-club"}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size={"2xl"}
              style={{ color: "#ffffff" }}
              className="social"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
