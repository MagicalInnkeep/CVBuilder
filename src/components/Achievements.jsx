import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"

function Achievements({ setActiveComponent, data, updatedata }) {
  const [achievements, setAchievements] = useState(
    data?.Achievements || [
        { name: "", description: "", startYear: "" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...achievements];
    updated[index][name] = value;
    setAchievements(updated);
  }

  function addAchievement() {
    setAchievements([
      ...achievements,
      { name: "", description: "", startYear: "" },
    ]);
  }

  function removeAchievement(index) {
    const updated = achievements.filter((_, i) => i !== index);
    setAchievements(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), achievements: achievements }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Result");
      }}
    >
      {achievements.map((achievements, index) => (
        <div key={index}>
          <label>
            Achievement
            <input
              type="text"
              name="name"
              value={achievements.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
             </label>

          <label>
            Description
            <input
              type="text"
              name="description"
              value={achievements.description}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          <label>
            Year
            <input
              type="number"
              name="startYear"
              min="1900"
              max="2099"
              step="1"
              value={achievements.startYear}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {achievements.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeAchievement(index)}
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
        handleClick={addAchievement}
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

export default Achievements;

