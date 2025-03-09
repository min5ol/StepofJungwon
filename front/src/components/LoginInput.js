import React from "react";

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <section>
      <div className="ID">{label}</div>
      <input
        className="IdInput"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </section>
  );
};

export default InputField;
