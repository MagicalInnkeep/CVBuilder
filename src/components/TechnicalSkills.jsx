import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"


function TechnicalSkills({ setActiveComponent, data, updatedata }) {
  const [techList, setTechList] = useState(
    data?.technicalSkills || [
      { skill: "", proficiency: "2.5" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...techList];
    updated[index][name] = value;
    setTechList(updated);
  }

  function addSkill() {
    setTechList([
      ...techList,
      { skill: "", proficiency: "2.5" },
    ]);
  }

  function removeSkill(index) {
    const updated = techList.filter((_, i) => i !== index);
    setTechList(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), technicalSkills: techList }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("SoftSkills");
      }}
    >
      {techList.map((tech, index) => (
        <div key={index}>
          <label>
            Skill
            <input
              type="text"
              name="skill"
              value={tech.skill}
              onChange={(e) => handleChange(index, e)}
              required 
            />
             </label>

          <label>
            Proficiency ({tech.proficiency})
            <input
              type="range"
              name="proficiency"
              min="0"
              max="5"
              step="0.5"
              value={tech.proficiency}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {techList.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeSkill(index)}
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
        handleClick={addSkill}
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

export default TechnicalSkills;


