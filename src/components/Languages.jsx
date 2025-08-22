import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"


function Languages({ setActiveComponent, data, updatedata }) {
  const [languages, setLanguages] = useState(
    data?.softlanguages || [
      { language: "", proficiency: "2.5" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...languages];
    updated[index][name] = value;
    setLanguages(updated);
  }

  function addLanguage() {
    setLanguages([
      ...languages,
      { language: "", proficiency: "2.5" },
    ]);
  }

  function removeLanguage(index) {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), languages: languages }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Work Experience");
      }}
    >
      {languages.map((soft, index) => (
        <div key={index}>
          <label>
            Language
            <input
              type="text"
              name="language"
              value={soft.language}
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

          {languages.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeLanguage(index)}
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
        handleClick={addLanguage}
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

export default Languages;


