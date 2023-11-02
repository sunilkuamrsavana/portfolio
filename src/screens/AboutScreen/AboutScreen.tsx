import React from 'react'
import "./AboutScreen.css"
import { motion } from 'framer-motion'
function AboutScreen() {
  return (
    <div className='AboutScreen'>
      <motion.div animate={{x:0,scale:1}} initial={{x:-400,scale:0}}>
        <div className='AboutTitle'>
          About <div style={{color:"red"}}>Me</div><p style={{color:"#73cadc"}}>.</p>
        </div>
        <p className='line'></p>
        <div className='AboutDiscription'>
          Hello! My name is <b> Sunil kumar</b> and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </div>
        <div className='AboutDiscription'>
          Fast-forward to today, and I've had the privilege of working at Anora Instrumentation Private Limited. My main focus these days is building accessible, inclusive products and digital experiences at Anora for a variety of clients.
        </div>
        <div className='AboutDiscription'>
          Here are a few technologies I've been working with recently:
        </div>
        <div className='Technologies'>
        <svg   xmlns="http://www.w3.org/2000/svg"><title>file_type_typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style={{fill:"#007acc"}}/></svg>
        <svg   xmlns="http://www.w3.org/2000/svg" ><rect fill="#f7df1e"/><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/></svg>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutScreen