function Pagination({page, totalPages, setPage}) {
  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1)
    }
  }

  return (
    <div className="pagination">
      <button type="button" onClick={handlePrev} disabled={page === 1}>
        Prev
      </button>

      {/* IMPORTANT: Must be exactly <p>{page}</p> */}
      <p>{page}</p>

      <button type="button" onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pagination
