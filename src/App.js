import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [vectorIndex, setVectorIndex] = useState("");
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

    cleanFields();

  };

  const select = (index) => {
    setVectorIndex(index);
    setName(vector[index].name);
    setAge(vector[index].age);
    setCity(vector[index].city);

    setBtnSubmit(false);
  };

  const edit = () => {
    let obj = {
      name: name,
      age: age,
      city: city,
    };

    let vectorCopy = [...vector];
    vectorCopy[vectorIndex] = obj;

    setVector(vectorCopy);

    cleanFields();
    setBtnSubmit(true);
  };

  const deleteIndex = () => {
    let vectorCopy = [...vector];
    vectorCopy.splice(vectorIndex, 1);

    setVector(vectorCopy);

    cleanFields();
    setBtnSubmit(true);
  };

  const cancel = () => {
    cleanFields();

    setBtnSubmit(true);
  };

  const cleanFields = () => {
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <div>
      <Form
        btnSubmit={btnSubmit}
        setName={setName}
        setAge={setAge}
        setCity={setCity}
        register={register}
        name={name}
        age={age}
        city={city}
        edit={edit}
        deleteIndex={deleteIndex}
        cancel={cancel}
      />
      <Table vector={vector} select={select} />
    </div>
  );
}

export default App;
