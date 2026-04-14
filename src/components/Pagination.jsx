function Pagination({ page, totalPages, onPageChange }) {
  const pages = [];

  // monta array com até 3 páginas: anterior, atual e próxima
  for (let i = Math.max(1, page - 1); i <= Math.min(totalPages, page + 1); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-1.5 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ‹ Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={p === page ? "w-9 h-9 text-sm rounded-lg border bg-blue-600 text-white border-blue-600" : "w-9 h-9 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next ›
      </button>
    </div>
  );
}

export default Pagination;