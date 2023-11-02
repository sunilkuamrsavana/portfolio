import React from 'react'
import "./ProjectScreen.css"
import { motion } from 'framer-motion'
function ProjectScreen() {
  return (
    <div className='ProjectScreen'>
        <motion.div animate={{x:0,scale:1}} initial={{x:-400,scale:0}}>ProjectScreen</motion.div>
    </div>  
)
}

export default ProjectScreen