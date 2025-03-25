export default function RoundedButton({
  as = "input",           // 'input' | 'a'
  children,
  href,
  variant = "primary",    // 'primary' | 'secondary'
}) {
  const baseClass =
    "block w-[76.74vw] rounded-[6.98vw] text-center text-[4.19vw] font-AppleSDGothicNeoM pt-[3.49vw] pb-[3.49vw]";
  const variantClass =
    variant === "primary"
      ? "bg-[#E50914] text-white"
      : "bg-white text-[#E50914]";
  const className = `${baseClass} ${variantClass}`;

  if (as === "a") {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <input type="submit" value={children} className={className} />
  );
}
