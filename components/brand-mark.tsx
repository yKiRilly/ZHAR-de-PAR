export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* flame / ember */}
      <path
        d="M16 3c1.6 3.2.9 5.6-.9 7.5-1.8 1.9-3.1 3.6-3.1 6a4 4 0 0 0 8 0c0-1.3-.4-2.3-1-3.2 2.4 1 4 3.3 4 6.2A7 7 0 0 1 16 26a7 7 0 0 1-7-6.9c0-4.6 3.3-6.9 5-9.4C20.6 6.6 16 3 16 3Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* birch sprig */}
      <path
        d="M16 30c0-3 0-5.5 0-7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}