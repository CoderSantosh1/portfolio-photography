// Small line icons (stroke follows currentColor)
const paths: Record<string, React.ReactNode> = {
  chat: <path d="M4 5h16v11H9l-5 4V5Zm4 5h.01M12 10h.01M16 10h.01" />,
  plan: (
    <>
      <path d="M7 3h7l5 5v13H7V3Z" />
      <path d="M14 3v5h5M10 12h6M10 16h6" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4V8Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  gallery: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1" />
      <path d="m6 16 4-5 3 3.5 2-2 3 3.5M15.5 9h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  send: <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Zm-11 10 4-4" />,
  play: <path d="M9 7v10l8-5-8-5Z" fill="currentColor" />,
  down: <path d="M12 5v14m-6-6 6 6 6-6" />,
};

export default function Icon({ name, className = "size-6" }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
