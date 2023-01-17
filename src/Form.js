function Form() {
  return (
    <form>
      <input type="text" placeholder="Name" className="form-control" />
      <input type="text" placeholder="Age" className="form-control" />
      <input type="text" placeholder="City" className="form-control" />

      <input type="button" value="Submit" className="btn btn-primary" />
      <input type="button" value="Edit" className="btn btn-secondary" />
      <input type="button" value="Delete" className="btn btn-danger" />
      <input type="button" value="Cancel" className="btn btn-success" />
    </form>
  );
}

export default Form;
