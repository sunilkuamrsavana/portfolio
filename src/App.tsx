import React, { useState } from 'react';
import "./App.css"
import Homescreen from './screens/Homescreen/Homescreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import Header from './screens/Header/header';
import ExperienceScreen from './screens/ExperienceScreen/ExperienceScreen';
import ProjectScreen from './screens/ProjectScreen/ProjectScreen';

function App() {
  const enum ScreenType {
    homescreen="homescreen",
    AboutScreen="aboutscreen",
    ExperienceScreen="ExperienceScreen",
    ProjectScreen="ProjectScreen"
	}
	const [currentScreen, setCurrentScreen] = useState(ScreenType.homescreen)
  const getScreen = () => {
		switch (currentScreen) {
			case (ScreenType.homescreen):
        return <Homescreen OnclickAbout={()=>{setCurrentScreen(ScreenType.AboutScreen)}}/>
      case (ScreenType.AboutScreen):
        return <AboutScreen/>
      case (ScreenType.ExperienceScreen):
        return <ExperienceScreen/>
      case (ScreenType.ProjectScreen):
        return <ProjectScreen/>
    }
  }
  return (
    <div className="App">
      {/* <Header OnclickHome={()=>{setCurrentScreen(ScreenType.homescreen)}} OnclickAbout={()=>{setCurrentScreen(ScreenType.AboutScreen)}} OnclickExperience={()=>{setCurrentScreen(ScreenType.ExperienceScreen)}} OnclickProjects={()=>{setCurrentScreen(ScreenType.ProjectScreen)}}/> */}
      <div className='Body_container'>
        <div className='header'>
          <div className='logoContainer'>
            <p className='logo' onClick={()=>{setCurrentScreen(ScreenType.homescreen)}}>丂ズ</p>
          </div>
          <div className='headerContainer'>
            <p onClick={()=>{setCurrentScreen(ScreenType.AboutScreen)}}>About</p>
            <p onClick={()=>{setCurrentScreen(ScreenType.ExperienceScreen)}}>Experience</p>
            <p onClick={()=>{setCurrentScreen(ScreenType.ProjectScreen)}}>Projects</p>
          </div>
        </div>
        <div className='screen_container'>
          {getScreen()}
        </div>
      </div>
    </div>
  );
}

export default App;
