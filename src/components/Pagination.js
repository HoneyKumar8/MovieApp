function Pagination({page, setPage}) {
  return (
    <div style={{marginTop: '20px'}}>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span style={{margin: '0 15px'}}>Page {page}</span>

      <button type="button" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination
