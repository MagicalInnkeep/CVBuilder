/** This is the component responsable for handling the sidebar.
 *  Here we have the buttons for the different sections of data to fill in.
 *  As well as a settings button?
 */
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


/* Components */
import Button from './Button.jsx'

/* Variables */

/* Actual function*/
function Sidebar(
   { activeComponent
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

    return (
        <aside className='sidebar'> 
            <Button key='menu'
                    image={menu}
                    classNa='togglebtn'
                    isActive={false}
                    bigSidebar={false}
                    />
            <div className='cvSteps'>
                {buttons.map((btn, index) => (
                    <Button
                        key={index}
                        image={btn.image}
                        classNa='sidebar-btn'
                        isActive={activeComponent === btn.name}
                        bigSidebar={false}
                    />))}
            </div>
            <Button key='settings'
                    image={settings}
                    classNa='sidebar-btn'
                    isActive={false}
                    bigSidebar={false}
                    />
        </aside>
    )
}

export default Sidebar;