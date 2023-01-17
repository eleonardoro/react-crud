import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [btnSubmit, setBtnSubmit] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [vector, setVector] = useState([]);

  const register = () => {
    let obj = {
      name: name,
      age: age,
      city: city,
    };

    setVector([...vector, obj]);
  };

  return (
    <div>
      <h1>{JSON.stringify(vector)}</h1>
      <Form
        btnSubmit={btnSubmit}
        setName={setName}
        setAge={setAge}
        setCity={setCity}
        register={register}
      />
      <Table />
    </div>
  );
}

export default App;
