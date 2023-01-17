import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [btnSubmit, setBtnSubmit] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{city}</h1>
      <Form
        btnSubmit={btnSubmit}
        setName={setName}
        setAge={setAge}
        setCity={setCity}
      />
      <Table />
    </div>
  );
}

export default App;
