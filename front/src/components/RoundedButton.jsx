export default function RoundedButton({
  as = "input",
  children,
  href,
  variant = "primary", // 'primary' | 'secondary' | 'disabled'
  disabled = false,
  onClick,
}) {
  const baseClass =
    "block w-[76.74vw] rounded-[6.98vw] text-center text-[4.19vw] font-AppleSDGothicNeoM pt-[3.49vw] pb-[3.49vw]";

  const variantClass =
    variant === "primary"
      ? "bg-[#E50914] text-white"
      : variant === "secondary"
      ? "bg-white text-[#E50914]" // ✅ secondary 스타일 수정
      : "bg-[#808080] text-white"; // disabled

  const className = `${baseClass} ${variantClass}`;

  if (as === "a") {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <input
      type={as === "input" ? "submit" : "button"} // ✅ 여기를 submit로!
      value={children}
      className={className}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
