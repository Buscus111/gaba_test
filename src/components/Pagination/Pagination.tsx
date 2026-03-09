import './styles.css';

type PaginationProps = {
  page: number;
  totalPages: number;
  labelPrev: string;
  labelNext: string;

  onPageChange: (page: number) => void;
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  labelPrev,
  labelNext,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPages = (): (number | '...')[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | '...')[] = [1];
    if (page > 3) pages.push('...');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <nav className="pagination">
      <button className="page-btn" disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        {labelPrev}
      </button>

      <div className="page-numbers">
        {getPages().map((p, i) =>
          p === '...' ? (
            <span key={`dots-${i}`} className="page-dots">…</span>
          ) : (
            <button
              key={p}
              className={`page-num ${p === page ? 'active' : ''}`}
              onClick={() => onPageChange(p as number)}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button className="page-btn" disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
        {labelNext}
      </button>
    </nav>
  );
}
