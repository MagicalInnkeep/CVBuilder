import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"

function WorkExperience({ setActiveComponent, data, updatedata }) {
  const [workList, setWorkList] = useState(
    data?.worklist || [
        { company: "", position: "", description: "", startYear: "", endYear: "" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...workList];
    updated[index][name] = value;
    setWorkList(updated);
  }

  function addWorkExp() {
    setWorkList([
      ...workList,
      { company: "", position: "", description: "", startYear: "", endYear: "" },
    ]);
  }

  function removeWorkExp(index) {
    const updated = workList.filter((_, i) => i !== index);
    setWorkList(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), worklist: workList }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Projects");
      }}
    >
      {workList.map((work, index) => (
        <div key={index}>
          <label>
            Company
            <input
              type="text"
              name="company"
              value={work.company}
              onChange={(e) => handleChange(index, e)}
              required
            />
             </label>

          <label>
            Position
            <input
              type="text"
              name="position"
              value={work.position}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            Job Description
            <input
              type="text"
              name="description"
              value={work.description}
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
              value={work.startYear}
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
              value={work.endYear}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {workList.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeWorkExp(index)}
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
        handleClick={addWorkExp}
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

export default WorkExperience;

