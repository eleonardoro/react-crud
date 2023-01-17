function Form({ btnSubmit }) {
  return (
    <form>
      <input type="text" placeholder="Name" className="form-control" />
      <input type="text" placeholder="Age" className="form-control" />
      <input type="text" placeholder="City" className="form-control" />

      {btnSubmit ? (
        <input type="button" value="Submit" className="btn btn-primary" />
      ) : (
        <div>
          <input type="button" value="Save" className="btn btn-secondary" />
          <input type="button" value="Delete" className="btn btn-danger" />
          <input type="button" value="Cancel" className="btn btn-success" />
        </div>
      )}
    </form>
  );
}

export default Form;
