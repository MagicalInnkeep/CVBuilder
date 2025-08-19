import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"


function SoftSkills({ setActiveComponent, data, updatedata }) {
  const [softList, setsoftList] = useState(
    data?.softSkills || [
      { skill: "", proficiency: "2.5" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...softList];
    updated[index][name] = value;
    setsoftList(updated);
  }

  function addSkill() {
    setsoftList([
      ...softList,
      { skill: "", proficiency: "2.5" },
    ]);
  }

  function removeSkill(index) {
    const updated = softList.filter((_, i) => i !== index);
    setsoftList(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), softSkills: softList }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Languages");
      }}
    >
      {softList.map((soft, index) => (
        <div key={index}>
          <label>
            Skill
            <input
              type="text"
              name="skill"
              value={soft.skill}
              onChange={(e) => handleChange(index, e)}
              required 
            />
             </label>

          <label>
            Proficiency ({soft.proficiency})
            <input
              type="range"
              name="proficiency"
              min="0"
              max="5"
              step="0.5"
              value={soft.proficiency}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {softList.length > 1 && (
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

export default SoftSkills;


