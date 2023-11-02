import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
interface propsIF{
  OnclickHome:any
  OnclickAbout:any
  OnclickExperience:any 
  OnclickProjects:any 
}
export const Navigation = ({OnclickAbout,OnclickExperience,OnclickHome,OnclickProjects}:propsIF) => (
  <motion.ul variants={variants}>
    <MenuItem i={"Home"} onclick={()=>{OnclickHome()}} />
    <MenuItem i={"About"} onclick={()=>{OnclickAbout()}}  />
    <MenuItem i={"Experience"} onclick={()=>{OnclickExperience()}} />
    <MenuItem i={"Projects"}onclick={()=>{OnclickProjects()}}  />
  </motion.ul>
);

