import React from "react";
// import "./event.css";
import { EmblaCarousel } from "../components/gallery";
export default function Gameathon() {
  return (
    <div className="event">
      <div className="event-title">Game - a - thon</div>
      <div className="event-content">
        <div className="eventContentText">
          <div className="projectName">
            ABOUT
          </div>
          <div className="aboutEvent">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dolorum sunt natus, animi officia asperiores quaerat deserunt, porro inventore a commodi minima, aperiam tempora autem sequi perspiciatis sint minus deleniti?{" "}
          </div>
        </div>
        <div className="eventContentText">
          <div className="projectName">
            STATS
          </div>
          <div className="aboutEvent">
            {" "}
            Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
          </div>
        </div>
      </div>
      <div className="gallery">
        <EmblaCarousel />
      </div>
    </div>
  );
}
