export default function InputField({ type, label, value, onChange }) {
  return (
    <div className="w-full">
      <label className="block text-white text-[3.5vw] mb-[2vw]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-[76.74vw] p-[2.5vw] text-[3.5vw] text-[#808080] bg-black border border-gray-400 rounded-[2vw] outline-none focus:border-[#E50914] transition duration-300"
      />
    </div>
  );
}
