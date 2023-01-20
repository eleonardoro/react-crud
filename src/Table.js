import { useState } from "react";

function Table({ vector, select }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type a name to search..."
        className="form-control search"
      />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Select</th>
          </tr>
        </thead>

        <tbody>
          {vector
            .filter(obj => obj.name.includes(search))
            .map((obj, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>{obj.city}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => select(index)}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
