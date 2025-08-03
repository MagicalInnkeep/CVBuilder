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
        setActiveComponent,
        data,
        updatedata
    }
){

    return (
        <div className="content">
            <h1>{activeComponent}</h1>
            {activeComponent==="Welcome" && <Welcome setActiveComponent={setActiveComponent}/>}
            {activeComponent==="Personal Info" && <PersonalInfo setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Education" && <Education setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Technical Skills" && <TechnicalSkills setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Soft Skills" && <SoftSkills setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Languages" && <Languages setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Work Experience" && <WorkExperience setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Projects" && <Projects setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Certificates" && <Certificates setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
            {activeComponent==="Achievements" && <Achievements setActiveComponent={setActiveComponent} data={data} updatedata={updatedata}/>}
        </div>
    )
}

export default Content;