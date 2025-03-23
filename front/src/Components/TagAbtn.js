import React from 'react';

function TagAbtn({ href, name, className = '' }) {
  return (
    <a 
      href={href}
      className={`flex items-center justify-center border-0 w-[75.74vw] h-[11.63vw] rounded-[6.98vw] font-[AppleSDGothicNeoM] text-[4.19vw] ${className}`}
    >
      {name}
    </a>
  );
}


export default TagAbtn;
