function Form({
  btnSubmit,
  setName,
  setAge,
  setCity,
  register,
  name,
  age,
  city,
  edit,
  deleteIndex,
  cancel,
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        className="form-control"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        className="form-control"
        value={city}
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
          <input
            type="button"
            onClick={edit}
            value="Save"
            className="btn btn-secondary"
          />
          <input
            type="button"
            onClick={deleteIndex}
            value="Delete"
            className="btn btn-danger"
          />
          <input
            type="button"
            onClick={cancel}
            value="Cancel"
            className="btn btn-success"
          />
        </div>
      )}
    </form>
  );
}

export default Form;
