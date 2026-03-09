import { useUsers } from '@hooks/useUsers';
import { useLocale } from '@hooks/useLocale';

import { PageHeader } from './components/PageHeader';
import { UsersList } from './components/UsersList';

import './styles.css';

export function UsersPage() {
  const { users, total, page, totalPages, loading, error, query, setQuery, setPage, retry, resetToHome } =
    useUsers();
  const { t, interpolate } = useLocale();

  return (
    <div className="page">
      <PageHeader
        total={total}
        loading={loading}
        error={error}
        query={query}
        onSearch={setQuery}
        onHome={resetToHome}
      />

      <main className="page-content">
        {loading && (
          <div className="state-center">
            <div className="spinner" />
            <p>{t.states.loading}</p>
          </div>
        )}

        {!loading && error && (
          <div className="state-center state-error">
            <p>{error}</p>
            <div className="error-actions">
              <button className="btn-retry" onClick={retry}>{t.states.retry}</button>
              <button className="btn-secondary" onClick={resetToHome}>{t.states.goHome}</button>
            </div>
          </div>
        )}

        {!loading && !error && users.length === 0 && query && (
          <div className="state-center">
            <p className="state-empty">{interpolate(t.states.notFound, { query })}</p>
            <button className="btn-secondary" onClick={resetToHome}>{t.states.backToList}</button>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <UsersList
            users={users}
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </main>
    </div>
  );
}
