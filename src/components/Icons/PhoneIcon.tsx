type IconProps = {
  className?: string;
  size?: number;
};

export function PhoneIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" width={size} height={size} aria-hidden="true">
      <path
        d="M3.5 2h2.25l1 2.5-1.5 1C6.1 7.55 8.45 9.9 10.5 10.75l1-1.5 2.5 1V12.5A1.5 1.5 0 0 1 12.5 14C6.7 14 2 9.3 2 3.5A1.5 1.5 0 0 1 3.5 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
