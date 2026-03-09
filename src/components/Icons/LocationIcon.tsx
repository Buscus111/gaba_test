type IconProps = {
  className?: string;
  size?: number;
};

export function LocationIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" width={size} height={size} aria-hidden="true">
      <path
        d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}
