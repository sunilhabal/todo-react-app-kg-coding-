function Item1(p) {
  return (
    <div>
      <div className="items-container">
        <div className="row sb-row">
          <div className="col-6">{p.name1} {p.name2}</div>
          <div className="col-4"> {p.date1} {p.date2}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger sb-btn">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item1;
