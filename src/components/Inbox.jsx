function Inbox() {
  return (
    <div>
      <div className="items-container">
        <div className="row sb-row">
          <div className="col-6">
            <input type="text" placeholder="Enter your todo" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success sb-btn">
              Success
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
