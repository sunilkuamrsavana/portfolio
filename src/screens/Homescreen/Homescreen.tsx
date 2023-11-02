import React from "react";
import "./Homescreen.css";
import { motion } from 'framer-motion'
interface propsIF{
  OnclickAbout:any
}
function Homescreen({OnclickAbout}:propsIF) {
  return (
    <div className="homescreen">
      <div className="profile">
        <motion.div className="name" animate={{x:0,scale:1}} initial={{x:-500,scale:0}}>
          <h1>
            <span>I'</span>M<span className="sunil">SUNIL KUMAR</span>
          </h1>
        </motion.div>
        <motion.div className="discription" animate={{x:0,scale:1}} initial={{x:-500,scale:0}}>
          Hey there! Thanks for stopping by. Want to know more about me?
        </motion.div>
        <motion.div className="About" animate={{x:0,scale:1}} initial={{x:-500,scale:0}}>
          <p onClick={()=>{OnclickAbout()}}>
            See More About Me
          </p>
          <div className="svg" onClick={()=>{OnclickAbout()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Homescreen;
