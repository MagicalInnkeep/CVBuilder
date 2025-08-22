import download from '../assets/download.svg'
import Button from "./Button"

function Result({data}){
    function handleExport() {
        const json = JSON.stringify(data, null, 2); // pretty print
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
      
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.json";
        link.click();
      }
      
    return (
        <div>
            <span></span>
            <div className='ResumePreview'>
                <div className='workArea'>
                    <div className='styleOptions'></div>
                    <div className='resumeBuild'>
                        <h2>Personal Info</h2>
                        <p>{data.personalInfo?.fname} {data.personalInfo?.lname}</p>
                        <p>{data.personalInfo?.email}</p>
                        <p>{data.personalInfo?.phone}</p>

                        <h2>Education</h2>
                        <ul>
                            {data.education?.map((edu, i) => (
                            <li key={i}>
                                <strong>{edu.degree} {edu.field}</strong> — {edu.institution} ({edu.startYear}-{edu.endYear})
                            </li>
                            ))}
                        </ul>

                        {data.technicalSkills && data.technicalSkills.length > 0 && ( <>
                            <h2>Technical Skills</h2>
                            <ul>
                                {data.technicalSkills?.map((techList, i) => (
                                <li key={i}>
                                    {techList.skill}: {techList.proficiency}
                                </li>
                                ))}
                            </ul>
                            </>
                        )}

                        {data.softSkills && data.softSkills.length > 0 && ( <>
                            <h2>Soft Skills</h2>
                            <ul>
                                {data.softSkills?.map((softList, i) => (
                                <li key={i}>
                                    {softList.skill}: {softList.proficiency}
                                </li>
                                ))}
                            </ul>
                            </>
                        )}

                        {data.languages && data.languages.length > 0 && ( <>
                            <h2>Languages</h2>
                            <ul>
                                {data.languages?.map((lang, i) => (
                                <li key={i}>
                                    {lang.language}: {lang.proficiency}
                                </li>
                                ))}
                            </ul>
                        </>
                        )}

                        {data.worklist && data.worklist.length > 0 && ( <>
                            <h2>Work Experience</h2>
                            <ul>
                            {data.worklist?.map((work, i) => (
                            <li key={i}>
                                <strong>{work.position} @ {work.company}</strong> ({work.startYear}-{work.endYear})
                                <p>{work.description}</p>
                            </li>
                            ))}
                        </ul>
                        </>)}

                        {data.Projects && data.Projects.length > 0 && ( <>
                            <h2>Projects</h2>
                            <ul>
                                {data.Projects?.map((proj, i) => (
                                <li key={i}>
                                    <strong>{proj.name}</strong> — {proj.description}
                                    {proj.url && <a href={proj.url}>🔗</a>}
                                </li>
                                ))}
                            </ul>
                        </>
                        )}

                        {data.certificates && data.certificates.length > 0 && ( <>
                            <h2>Certificates</h2>
                            <ul>
                                {data.certificates?.map((certs, i) => (
                                <li key={i}>
                                    <strong>{certs.name}</strong> — {certs.provider} ({certs.startYear})
                                </li>
                                ))}
                            </ul>
                        </>
                        )}      

                        {data.achievements && data.achievements.length > 0 && ( <>
                            <h2>Achievements</h2>
                            <ul>
                                {data.achievements?.map((achi, i) => (
                                <li key={i}>
                                    <strong>{achi.name}</strong> ({achi.startYear})
                                    <p>{achi.description}</p>
                                </li>
                                ))}
                            </ul>
                        </>
                        )}   
                    </div>
                </div>
                <div className='styleChooser'></div>
            </div>
            <div className='Export'>
                <h3>Undecided about your style?</h3>
                <p>Don't lose your progress! Download your filled in data here!</p>
                <Button
                    type="button"
                    handleClick={handleExport}
                    image={download}
                    text="Export"
                    classNa=""
                    isActive={false}
                    isExpanded={true}
                    key="export"
                />
            </div>
        </div>
    )
}

export default Result