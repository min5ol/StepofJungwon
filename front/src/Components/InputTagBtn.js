import React from 'react';

function InputTagBtn({ value, bg, color }) {
  // 만약 bg가 '#'로 시작하면 임의 값, 그렇지 않으면 커스텀 컬러
  const bgClass = bg.startsWith('#') ? `bg-[${bg}]` : `bg-${bg}`;
  const textClass = color.startsWith('#') ? `text-[${color}]` : `text-${color}`;

  return (
      <input 
        type="submit" 
        value={value} 
        className={`${bgClass} ${textClass} border-0 w-[75.74vw] h-[11.63vw] text-center rounded-[6.98vw] font-[AppleSDGothicNeoM] text-[4.19vw]`}
      />
  );
}

export default InputTagBtn;
