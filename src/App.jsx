import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Lightdark from './components/lightdark.jsx'

/** Images */
import cvBuilder from '../src/assets/pageview.svg'

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
              <Lightdark/>
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
