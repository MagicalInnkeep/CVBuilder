import Achievements from "./Achievements";
import Certificates from "./Certificates";
import Education from "./Education";
import Languages from "./Languages";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import Welcome from "./Welcome";
import WorkExperience from "./WorkExperience";

function Content(
    {   activeComponent,
        setActiveComponent
    }
){

    return (
        <div className="content">
            <h1>{activeComponent}</h1>
            {activeComponent==="Welcome" && <Welcome setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Personal Info" && <PersonalInfo setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Education" && <Education setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Technical Skills" && <TechnicalSkills setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Soft Skills" && <SoftSkills setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Languages" && <Languages setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Work Experience" && <WorkExperience setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Projects" && <Projects setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Certificates" && <Certificates setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Achievements" && <Achievements setActiveComponent={setActiveComponent}/>}
        </div>
    )
}

export default Content;