import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Lightdark from './components/lightdark.jsx'
import Content from './components/Content.jsx'

/** Images */
import cvBuilder from '../src/assets/pageview.svg'


function App() {
  
  const [activeComponent, setActiveComponent]= useState('Welcome');
  const [data, updatedata]=useState({personalInfo: []});

  return (
    <div className="App">

      <Sidebar 
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
      />
      <main>
        <div className="topbar">
              <div className="logo"><img className="svg-icon" id="logo" src={cvBuilder} width="20" height="20" alt="logo"/> CVBuilder</div>
              <Lightdark/>
          </div>

          <Content 
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              data={data}
              updatedata={updatedata}
          />

          <div className="botbar">
              <div className="version">CVBuilder v0.0.1</div>
              <div>Created by Innkeep</div>
          </div>

      </main>
    </div>
  )
}

export default App
