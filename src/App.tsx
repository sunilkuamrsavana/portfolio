import React from 'react';
import "./App.css"
import Header from './screens/header';
import Homescreen from './screens/Homescreen/Homescreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Body_container'>
        <Homescreen/>
        <div className='buttons_group'>

        </div>
      </div>
    </div>
  );
}

export default App;
