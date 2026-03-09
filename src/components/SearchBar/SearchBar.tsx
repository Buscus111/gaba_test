import { SearchIcon } from '@components/Icons';

import './styles.css';

type SearchBarProps = {
  value: string;
  placeholder: string;
  clearAriaLabel: string;

  onChange: (value: string) => void;
};

export function SearchBar({
  value,
  onChange,
  placeholder,
  clearAriaLabel,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <SearchIcon className="search-icon" size={16} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="search-clear" onClick={() => onChange('')} aria-label={clearAriaLabel}>
          ✕
        </button>
      )}
    </div>
  );
}
