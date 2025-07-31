/** This is the component responsable for handling the sidebar.
 *  Here we have the buttons for the different sections of data to fill in.
 *  As well as a settings button?
 */

/* Imports*/
import { useState } from 'react'
import './sidebar.css'
import Button from './Button.jsx'

/* Images */
import menu from '../assets/menu.svg'
import persInfo from '../assets/person.svg'
import school from '../assets/school.svg'
import techskills from '../assets/techskills.svg'
import softskills from '../assets/brain.svg'
import languages from '../assets/languages.svg'
import workExp from '../assets/work.svg'
import projects from '../assets/projects.svg'
import certificates from '../assets/licence.svg'
import achievements from  '../assets/reward.svg'
import settings from '../assets/settings.svg'

/* Actual function*/
function Sidebar(
   { activeComponent,
     setActiveComponent
   }
){
    const buttons = [
        { image: persInfo, name: 'Personal Info' },
        { image: school, name: 'Education' },
        { image: techskills, name: 'Technical Skills' },
        { image: softskills, name: 'Soft Skills' },
        { image: languages, name: 'Languages' },
        { image: workExp, name: 'Work Experience' },
        { image: projects, name: 'Projects' },
        { image: certificates, name: 'Certificates' },
        { image: achievements, name: 'Achievements' },
    ];
    const [sidebarClass,setSidebar]= useState('smallSidebar');

    return (
        <aside className={`sidebar ${sidebarClass}`}> 
            <Button key='menu'
                    image={menu}
                    text='Menu'
                    classNa={`togglebtn ${sidebarClass}`}
                    isActive={false}
                    isExpanded={false}
                    handleClick={() => setSidebar(sidebarClass==='smallSidebar'?'bigSidebar':'smallSidebar')}
                    />
            <div className='cvSteps'>
                {buttons.map((btn) => (
                    <Button
                        key={btn.name}
                        image={btn.image}
                        text={btn.name}
                        classNa={`sidebar-btn ${sidebarClass}`}
                        isActive={activeComponent === btn.name}
                        isExpanded={sidebarClass==='bigSidebar'}
                        handleClick={() => setActiveComponent(btn.name)}
                    />))}
            </div>
            <Button key='settings'
                    image={settings}
                    text='Settings'
                    classNa={`sidebar-btn ${sidebarClass}`}
                    isActive={false}
                    isExpanded={sidebarClass==='bigSidebar'}
                    handleClick={() => setActiveComponent('settings')}
                    />
        </aside>
    )
}

export default Sidebar;