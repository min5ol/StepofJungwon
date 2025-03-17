function TagAbtn({ bg, color, href, name }) {
  // 만약 bg가 '#'로 시작하면 임의 값, 그렇지 않으면 커스텀 컬러
  const bgClass = bg.startsWith('#') ? `bg-[${bg}]` : `bg-${bg}`;
  const textClass = color.startsWith('#') ? `text-[${color}]` : `text-${color}`;

  return (
    <a 
      href={href} 
      className={`${bgClass} ${textClass} block border-0 w-[75.74vw] h-[11.63vw] text-center rounded-[6.98vw] font-[AppleSDGothicNeoM] text-[4.19vw]`}
    >
      {name}
    </a>
  );
}

export default TagAbtn;
