/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimenstions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import"./header.css"

interface propsIF{
  OnclickHome:any
  OnclickAbout:any
  OnclickExperience:any 
  OnclickProjects:any 
}
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
function Header({  OnclickHome,OnclickAbout,OnclickExperience,OnclickProjects }:propsIF) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
        <motion.div className="background" variants={sidebar} />
        <Navigation OnclickHome={()=>{OnclickHome()}} OnclickAbout={()=>{OnclickAbout()}} OnclickExperience={()=>{OnclickExperience()}} OnclickProjects={()=>{OnclickProjects()}}/>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
  )
}

export default Header
