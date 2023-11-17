import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="home">
      <div className="title">
      Game Development <br/>and <br/> 
      eXtended Reality club
      </div>
      <div className="parallax-layer ship"></div>
      <div className="content">
        <div className="contentText">
          AIT VR Tour
        </div>
        <div className="contentText">
          Genesis
        </div>
        <div className="contentText">
          Game-A-thon
        </div>
        <div className="contentText"></div>
      </div>
    </div>
  );
}
