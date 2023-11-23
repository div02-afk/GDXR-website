import React from "react";
import "./event.css";

export default function Event() {
  return (
    <div className="event">
      <div className="title">Event</div>
      <div className="content">
        <div className="contentText">
          <div className="projectName">
            
            ABOUT
          </div>
          <div className="aboutEvent">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dolorum sunt natus, animi officia asperiores quaerat deserunt, porro inventore a commodi minima, aperiam tempora autem sequi perspiciatis sint minus deleniti?{" "}
          </div>
        </div>
        <div className="contentText">
          <div className="projectName">
            STATS
          </div>
          <div className="aboutEvent">
            {" "}
            Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
