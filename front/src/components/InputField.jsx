// src/components/InputField.jsx
export default function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="w-[76.74vw]">
      <label className="block text-white text-[4.65vw] font-AppleSDGothicNeoL mb-[2.33vw]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[76.74vw] border border-[#808080] bg-black rounded-[1.16vw] pt-[3.37vw] pb-[3.37vw] pl-[2.33vw] placeholder-[#808080] font-AppleSDGothicNeoL text-[#808080] text-[4.19vw]"
      />
    </div>
  );
}
