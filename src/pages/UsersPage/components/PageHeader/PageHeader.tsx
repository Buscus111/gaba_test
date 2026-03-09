import { SearchBar } from '@components/SearchBar';
import { useLocale } from '@hooks/useLocale';

type PageHeaderProps = {
  total: number;
  loading: boolean;
  error: string | null;
  query: string;
  onSearch: (q: string) => void;
  onHome: () => void;
};

export function PageHeader({ total, loading, error, query, onSearch, onHome }: PageHeaderProps) {
  const { t } = useLocale();

  return (
    <header className="page-header">
      <div className="header-inner">
        <div className="header-title">
          <h1 className="title-link" onClick={onHome} title={t.app.homeTitle}>
            {t.app.title}
          </h1>
          {!loading && !error && (
            <span className="total-badge">{total} {t.app.totalUsers}</span>
          )}
        </div>
        <SearchBar
          value={query}
          onChange={onSearch}
          placeholder={t.search.placeholder}
          clearAriaLabel={t.search.clearAriaLabel}
        />
      </div>
    </header>
  );
}
