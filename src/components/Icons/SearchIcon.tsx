type IconProps = {
  className?: string;
  size?: number;
};

export function SearchIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
