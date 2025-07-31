import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'

function App() {
  
  const [activeComponent, setActiveComponent]= useState('main')

  return (
    <div>
      <h1>{activeComponent}</h1>
      <Sidebar 
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
      />
    </div>
  )
}

export default App
