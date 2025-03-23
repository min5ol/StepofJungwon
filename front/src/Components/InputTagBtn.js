// Components/InputTagBtn.js
import React from 'react';

function InputTagBtn({ value, className = '', onClick }) {
  return (
    <input 
      type="button"  // ✅ submit → button으로 변경
      value={value} 
      onClick={onClick} // ✅ 클릭 이벤트 추가
      className={`border-0 w-[75.74vw] h-[11.63vw] text-center rounded-[6.98vw] font-[AppleSDGothicNeoM] text-[4.19vw] ${className}`}
    />
  );
}

export default InputTagBtn;
