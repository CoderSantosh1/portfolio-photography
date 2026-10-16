// A line of heading text that slides up from behind a mask on page load
export default function MaskLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[.12em]">
      <span className={`block animate-line-up motion-reduce:animate-none ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}
