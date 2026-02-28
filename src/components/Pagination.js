function Pagination({page, totalPages, setPage}) {
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => setPage(prev => prev - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span className="page-number">Page {page}</span>

      <button
        type="button"
        onClick={() => setPage(prev => prev + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
