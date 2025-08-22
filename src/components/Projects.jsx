import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"


function Projects({ setActiveComponent, data, updatedata }) {
  const [projects, setProjects] = useState(
    data?.Projects || [
      { name: "", description: "", url:"" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...projects];
    updated[index][name] = value;
    setProjects(updated);
  }

  function addProject() {
    setProjects([
      ...projects,
      { name: "", description: "", url:"" },
    ]);
  }

  function removeProject(index) {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), Projects: projects }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Certificates");
      }}
    >
      {projects.map((proj, index) => (
        <div key={index}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={proj.name}
              onChange={(e) => handleChange(index, e)}
              required 
            />
             </label>

          <label>
            Description
            <input
              type="text"
              name="description"
              value={proj.description}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            URL
            <input
              type="url"
              name="url"
              value={proj.url}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {projects.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeProject(index)}
            image={remove}
            text="Delete"
            classNa=""
            isActive={false} 
            isExpanded={true}
            key="delete"
          />

          )}
        </div>
      ))}

      <Button
        type="button"
        handleClick={addProject}
        image={add}
        text="Add"
        classNa=""
        isActive={false}
        isExpanded={true}
        key="add"
      />

      <Button
        key="check"
        image={check}
        text="Next"
        classNa=""
        isActive={false}
        isExpanded={true}
        type="submit"
        handleClick={null}
      />
    </form>
  );
}

export default Projects;

