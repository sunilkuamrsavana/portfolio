import React from "react";
import "./Homescreen.css";

function Homescreen() {
  return (
    <div className="homescreen">
      <div className="profile">
        <div className="name">
          <h1>
            <span>I'</span>M<span className="sunil">SUNIL KUMAR</span>
          </h1>
        </div>
        <div className="discription">
          Hey there! Thanks for stopping by. Want to know more about me?
        </div>
        <div className="started">
          <button className="lts-gt-std-btn">Let's get started</button>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
