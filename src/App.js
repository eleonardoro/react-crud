import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [btnSubmit, setBtnSubmit] = useState(true);

  return (
    <div>
      <Form btnSubmit={btnSubmit} />
      <Table />
    </div>
  );
}

export default App;
