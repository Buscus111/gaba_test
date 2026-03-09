type IconProps = {
  className?: string;
  size?: number;
};

export function CompanyIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" width={size} height={size} aria-hidden="true">
      <rect x="1.5" y="5.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 5.5V3.5A1 1 0 0 1 6 2.5h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4.5" y="8" width="2" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9.5" y="8" width="2" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.5 14.5v-2a1.5 1.5 0 0 1 3 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
