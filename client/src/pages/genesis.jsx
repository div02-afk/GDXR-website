import React from "react";
import "./event.css";
import { EmblaCarousel } from "../components/gallery";
export default function Genesis() {
  return (
    <div className="event w-full  text-white text-center xl:ml-32 xl:mr-4 lg:ml-24 lg:mr-5">
      <div className="event-title text-5xl mt-20 font-pixelEmulator">
        Genesis
      </div>
      <div className="event-content flex flex-col lg:flex-row ">
        <div className="glass eventContentText h-60 lg:w-2/5 w-3/4 flex flex-col justify-center m-auto mt-20 rounded-2xl align-middle bg-gradient-to-br from-red-700 via-violet-900 to-blue-700  p-0.5">
          <div className="h-full w-full bg-black rounded-2xl flex flex-col justify-center p-4">
            <div className="projectName align-top ">ABOUT</div>
            <div className="aboutEvent text-center ">
              {" "}
              Genesis offers a dynamic and exciting game jam experience that
              challenges participants to push their boundaries and see what they
              can create under pressure. A two Round Game Jam Challenge which
              rewards both initial concept and rapid iteration skills. Creates a
              unique blend of strategy, creativity, and adaptability.{" "}
            </div>
          </div>
        </div>
        <div className="glass eventContentText h-60 lg:w-2/5 w-3/4 flex flex-col justify-center m-auto mt-20 rounded-2xl align-middle bg-gradient-to-br from-red-700 via-violet-900 to-blue-700  p-0.5">
          <div className="h-full w-full bg-black rounded-2xl flex flex-col justify-center p-4">
            <div className="projectName align-top">STATS</div>
            <div className="aboutEvent">
              {" "}
              Lorem, ipsum dolor sit amet consectetur lorem234 adipisicing{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="gallery mt-20">
        <EmblaCarousel />
      </div>
    </div>
  );
}
