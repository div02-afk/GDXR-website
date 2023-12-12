import React from "react";
import "./event.css";
import { EmblaCarousel } from "../components/gallery";
export default function Genesis() {
  return (
    <div className="event w-full h-1/2 text-white text-center xl:ml-32 xl:mr-4 lg:ml-24 lg:mr-5">
      <div className="event-title text-5xl mt-20 font-pixelEmulator">Genesis</div>
      <div className="event-content flex flex-col lg:flex-row ">
        <div className="eventContentText h-60 lg:w-2/5 w-3/4 flex flex-col justify-center m-auto mt-20 border-2 rounded-2xl bg-gray-900   backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
          <div className="projectName align-top ">
            ABOUT
          </div>
          <div className="aboutEvent text-center ">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dolorum sunt natus, animi officia asperiores quaerat deserunt, porro inventore a commodi minima, aperiam tempora autem sequi perspiciatis sint minus deleniti?{" "}
          </div>
        </div>
        <div className="eventContentText h-60 lg:w-2/5 w-3/4 flex flex-col justify-center m-auto mt-20 border-2 rounded-2xl bg-gray-900   backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100">
          <div className="projectName ">
            STATS
          </div>
          <div className="aboutEvent text-center">
            {" "}
            Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
          </div>
        </div>
      </div>
      <div className="gallery lg:mt-20">
        <EmblaCarousel />
      </div>
    </div>
  );
}
