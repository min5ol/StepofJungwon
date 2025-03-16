import React from 'react';

function InputField(props){
  return (
    <div className="pb-[3.72vw]"> 
      <p className="text-white text-[4.65vw] font-AppleSDGothicNeoR pb-[2.33vw]">{props.name}</p>
      <input type={props.type} placeholder={props.placeholder} className="border border-[#707070] bg-transparent rounded-[1.16vw] w-[76.74vw] h-[11.63vw] pl-[2.33vw] placeholder:font-AppleSDGothicNeoL text-[4.19vw] text-[#707070]"></input>
    </div>
  );
}

export default InputField;