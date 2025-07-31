import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'

/** Images */
import cvBuilder from '../src/assets/pageview.svg'
import darkMode from '../src/assets/darkmode.svg'

function App() {
  
  const [activeComponent, setActiveComponent]= useState('main')

  return (
    <div class="App">

      <Sidebar 
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
      />
      <main>
        <div class="topbar">
              <div class="logo"><img class="svg-icon" id="logo" src={cvBuilder} width="20" height="20" alt="logo"/> CVBuilder</div>
              <h1>{activeComponent}</h1>
              <button class="togglebtn" id="lightdark">
                  <img class="svg-icon" id="modeIcon" src={darkMode} width="24" height="24" alt="Dark Mode"/>
              </button>  
          </div>
          <div class="content"></div>
          <div class="botbar">
              <div class="version">CVBuilder v0.0.1</div>
              <div>Created by Innkeep</div>
          </div>

      </main>
    </div>
  )
}

export default App
