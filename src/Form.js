function Form({ btnSubmit, setName, setAge, setCity, register }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        className="form-control"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        className="form-control"
        onChange={(e) => setCity(e.target.value)}
      />

      {btnSubmit ? (
        <input
          type="button"
          value="Submit"
          className="btn btn-primary"
          onClick={register}
        />
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
