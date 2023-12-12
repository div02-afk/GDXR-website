// import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Model from "./../components/3dmodel";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Ourteam from "./../components/ourteam";
import vrimg from "../assets/images/vrimage.png";
import logo from "../assets/images/logo.svg";
// import TeamMemberCard from "./../components/ourteam";
export default function Home() {
  const arr = [
    { title: "AIT VR Tour", img: vrimg, link: "", about: "" },
    { title: "Other Projects", img: vrimg, link: "", about: "" },
    { title: "Game-a-thon", img: vrimg, link: "/gameathon", about: "" },
    { title: "Genesis", img: vrimg, link: "/genesis", about: "" },
  ];
  const contacts = [
    { link: "https://www.facebook.com/GDXR.AIT/", icon: faFacebook },
    { link: "https://www.instagram.com/gdxr_ait", icon: faInstagram },
    {
      link: "https://www.linkedin.com/company/ait-gdxr-club",
      icon: faLinkedin,
    },
  ];
  const rotation=0;

  return (
    <div className="landing w-full text-white text-center xl:ml-32 xl:mr-4 lg:ml-24 lg:mr-5 z-40 " id="home">
      <div className="home flex-col  h-3/7 lg:h-2/5 w-100 justify-center " >
        <div className="heading">
          <div className="title hometitle text-white text-3xl md:text-4xl lg:text-5xl xl:mt-20 lg:mt-10 mt-20 lg:text-left font-pixelEmulator">
            Game Development <br />
            and <br />
            eXtended Reality club
          </div>
          {/* <Model rotation = {`${rotation}`}/> */}
        </div>

        <div className="parallax-layer ship mt-10 h-96"></div>
        <div className="content flex lg:flex-row w-100  text-neutral-600 lg:justify-evenly items-center justify-center align-middle text-center flex-col gap-3 xl:mt-20 lg:mt-5">
          {arr.map(({ title, img, link, about }) => (
            <div
              key={title}
              className="contentText border-2 rounded-2xl flex flex-col justify-center h-50 xl:h-60 sm:w-1/2 w-2/3 bg-gray-900   backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100"
              onClick={() => {
                const url = link;
                window.location.href = url;
              }}
            >
              <div className="eventImage flex flex-row justify-center">
                <img src={vrimg} alt="vrimage" width={100} />
              </div>
              <div className="projectName">{title}</div>
              <div className="aboutEvent">
                {" "}
                Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="about w-full h-1/5 lg:h-2/6 flex flex-col justify-center text-center"
        id="about"
      >
        <div className="title text-3xl md:text-4xl lg:text-5xl mt-10 font-pixelEmulator">
          About Us
        </div>
        <div className="contentTextAbout w-3/4 h-120 md:h-60 flex flex-row justify-evenly m-auto mt-20 border-2 rounded-2xl  align-middle bg-gray-900   backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
          <div className="aboutContent w-1/2 h-fit text-left m-auto ml-10 mr-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est
            doloribus beatae repellat veritatis eveniet error facere, sit ipsam
            minima commodi ad reiciendis, hic aspernatur iste exercitationem
            quia! Necessitatibus, aperiam.
          </div>
          <div className="logo m-auto ml-0 mr-0">
            <img
              src={logo}
              alt=""
              className="resized-image h-24 mr-10 lg:h-32 lg:mr-0"
              
            />
          </div>
        </div>
      </div>
      <div
        className="team w-full h-2/5 lg:h-1/2 flex flex-col justify-center text-center"
        id="team"
      >
        <div className="title text-3xl md:text-4xl lg:text-5xl font-pixelEmulator">
          OUR Team{" "}
        </div>
        <div className="title">SEC's</div>
        <Ourteam numberOfCards={2} />
        <div className="title">Joint-sec</div>

        <Ourteam numberOfCards={5} />
      </div>
      <div
        className="footer w-full h-10 flex flex-row justify-evenly text-center align-middle mt-20"
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
  );
}
