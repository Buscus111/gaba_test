type IconProps = {
  className?: string;
  size?: number;
};

export function EmailIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" width={size} height={size} aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.5 5L8 9.5L14.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
