import React from 'react';

function InputField({ name, type, placeholder, value, onChange }) {
  return (
    <div className="mb-[4.65vw]">
      <label className="text-white text-[4.19vw] font-AppleSDGothicNeoR block mb-[1.86vw]">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-[11.63vw] px-[4vw] rounded-[1.16vw] bg-black border border-[#808080] text-[#808080] font-AppleSDGothicNeoM text-[3.5vw]"
      />
    </div>
  );
}

export default InputField;
