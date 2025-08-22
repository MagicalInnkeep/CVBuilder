import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"

function Education({ setActiveComponent, data, updatedata }) {
  const [educationList, setEducationList] = useState(
    data?.education || [
      { institution: "", degree: "", field: "", startYear: "", endYear: "" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...educationList];
    updated[index][name] = value;
    setEducationList(updated);
  }

  function addEducation() {
    setEducationList([
      ...educationList,
      { institution: "", degree: "", field: "", startYear: "", endYear: "" },
    ]);
  }

  function removeEducation(index) {
    const updated = educationList.filter((_, i) => i !== index);
    setEducationList(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), education: educationList }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Technical Skills");
      }}
    >
      {educationList.map((edu, index) => (
        <div key={index}>
          <label>
            Institution
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleChange(index, e)}
              required
            />
             </label>

          <label>
            Field of Study (optional)
            <input
              type="text"
              name="field"
              value={edu.field}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            Start Year
            <input
              type="number"
              name="startYear"
              min="1900"
              max="2099"
              step="1"
              value={edu.startYear}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            End Year
            <input
              type="number"
              name="endYear"
              min="1900"
              max="2099"
              step="1"
              value={edu.endYear}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {educationList.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeEducation(index)}
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
        handleClick={addEducation}
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

export default Education;
