
import "./App.css";
import Select from "react-select";
import { useState } from "react";

function App() {
const [selected,setSelected]=useState(null);

 const arr = [
    { value: "mango", label: "mango" },
    { value: "apple", label: "apple" },
    { value: "banana", label: "banana" },
    { value: "grapes", label: "grapes" },
    { value: "guava", label: "guava" },
  ];
  return (
    <div className="app">
      <Select options={arr} value={selected} onChange={setSelected} isSearchable/>
    </div>
  );
}

export default App;
