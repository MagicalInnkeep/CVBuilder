import { useState } from "react"
import Button from "./Button"
import check from "../assets/check.svg"
import add from "../assets/add.svg"
import remove from "../assets/delete.svg"

function Certificates({ setActiveComponent, data, updatedata }) {
  const [certificates, setCertificates] = useState(
    data?.certificates || [
        { name: "", provider: "", startYear: "" },
    ]
  );

  function handleChange(index, e) {
    const { name, value } = e.target;
    const updated = [...certificates];
    updated[index][name] = value;
    setCertificates(updated);
  }

  function addCertificate() {
    setCertificates([
      ...certificates,
      { name: "", provider: "", startYear: "" },
    ]);
  }

  function removeCertificate(index) {
    const updated = certificates.filter((_, i) => i !== index);
    setCertificates(updated);
  }

  function handleSubmit() {
    updatedata((prev) => ({ ...(prev || {}), certificates: certificates }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setActiveComponent("Achievements");
      }}
    >
      {certificates.map((certs, index) => (
        <div key={index}>
          <label>
            Certificate
            <input
              type="text"
              name="name"
              value={certs.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
             </label>

          <label>
            Provider
            <input
              type="text"
              name="provider"
              value={certs.provider}
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
              value={certs.startYear}
              onChange={(e) => handleChange(index, e)}
            />
          </label>

          {certificates.length > 1 && (
            <Button
            type="button"
            handleClick={() => removeCertificate(index)}
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
        handleClick={addCertificate}
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

export default Certificates;

