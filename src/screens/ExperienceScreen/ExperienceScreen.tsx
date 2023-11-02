import React from 'react'
import "./ExperienceScreen.css"
import { motion } from 'framer-motion'
function ExperienceScreen() {
  return (
    <div className='ExperienceScreen'>
        <motion.div className='WorkContainer' animate={{x:0,scale:1}} initial={{x:-400,scale:0}}>
            <div className='WorkTitle'>
                Work Experience
            </div>
            <div className='workDisc'>
                Here's a brief rundown of my most recent experiences.
            </div>
            <div className='jobs'>
            <div className='Jobscontainer'>
                <div className='sideLine'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill-rule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z" fill="currentColor"></path></svg>
                    <p></p>
                </div>
                <div className='JobTitle'>
                    <p>Software Engineer L1:Frontend</p>
                    <span style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <span>Anora Instrumentation Private Limited</span>
                        <span>2023 Apr - Present</span>
                    </span>
                </div>
                <div className='JobDiscription'>
                    Conducted in-depth client interviews to gather feedback on pain areas, leading to the identification of key UX
                    improvements; modernized solutions that reduced bounce rate by 15% and increased user retention by 20%.. <br/>Revamped a website using React and Redux to create more reusable components, resulting in a 33% reduction in
                    file size. <br/><br/>Revamped User Experience through proactive client communication, identifying pain points, and resolving
                    reported bugs; resulted in a 40% reduction in customer support issues and a 25% increase in customer satisfaction
                    ratings. <br/> Consolidated project timelines and allocated resources effectively, managing multiple initiatives simultaneously;
                   achieved a 30% increase in productivity and delivered all projects ahead of schedule. <br/> <br/>Orchestrated the successful execution of 5 concurrent projects, ensuring on-time delivery and exceeding client
                   expectations; streamlined processes resulting in a 20% increase in project efficiency and a 15% reduction in
                   turnaround time.
                </div>
            </div>
            <div className='Jobscontainer'>
                <div className='sideLine'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill-rule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z" fill="currentColor"></path></svg>
                    <p></p>
                </div>
                <div className='JobTitle'>
                    <p>Software Engineer :Frontend</p>
                    <span style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <span>Anora Instrumentation Private Limited</span>
                        <span>2022 july - 2023 apr</span>
                    </span>
                </div>
                <div className='JobDiscription'>
                    Worked under guidance of manager to develop the business idea into a React web application which resulted in an
                    increase of 13% in productivity. Also has a feature of calendar UI to easily track and visualize past, present, and
                    future events. <br/><br/> Spearheaded the creation of a highly efficient custom component library, utilizing styled components and
                    Typescript, to streamline UI development across multiple projects. This initiative significantly improved team
                    productivity, reduced bugs by 50%, and accelerated time-to-market by 30%. <br/><br/> Developed and Authored a comprehensive custom component library for current and upcoming projects, 
                    leveraging styled components for styling, theme provider for seamless themeing, and Typescript as the primary
                    language; resulting in a 40% reduction in development time and enhanced code re-usability
                </div>
            </div>
            <div className='Jobscontainer'>
                <div className='sideLine'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill-rule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z" fill="currentColor"></path></svg>
                    <p></p>
                </div>
                <div className='JobTitle'>
                    <p>Trainee Engineer:Frontend</p>
                    <span style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                        <span>Anora Instrumentation Private Limited</span>
                        <span>2022 apr - 2022 jul</span>
                    </span>
                </div>
                <div className='JobDiscription'>
                Spearheaded a hands-on project during internship, mastering file handling, exception handling, and other
                advanced concepts; applied knowledge to optimize data flow, resulting in a 30% improvement in processing
                speed and accuracy. <br/> 
                <br/>
                Implemented file handling and exception handling concepts during internship project, reducing error rate by 20%
                and enhancing data integrity in a high-volume data processing system.
                </div>
            </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ExperienceScreen