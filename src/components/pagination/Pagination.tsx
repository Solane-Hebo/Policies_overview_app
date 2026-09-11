import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-container">
      <nav className="pagination" aria-label="Paginering">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Föregående sida"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              className={
                currentPage === pageNumber
                  ? "pagination__button--active"
                  : ""
              }
              aria-current={
                currentPage === pageNumber ? "page" : undefined
              }
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Nästa sida"
        >
          ›
        </button>
      </nav>

      <p className="pagination-info">
        Visar {startItem}–{endItem} av {totalItems} försäkringar
      </p>
    </div>
  );
}

export default Pagination;