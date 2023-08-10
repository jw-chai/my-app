import React, { useState } from "react";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [tableData, setTableData] = useState([]); // set json
  const [tableType, setTableType] = useState("checkbox"); // Default table type
  const [tintColor, setTintColor] = useState("#5C50BB"); // Default tint color

  const handleJsonInputChange = (e) => {
    console.log(e.target.value);
    setJsonInput(e.target.value);
  };

  const handleTableTypeChange = (e) => {
    setTableType(e.target.value);
  };

  const handleGenerateTable = () => {
    console.log("jsonInput", jsonInput);
    setTableData(jsonInput);
  };

  const handleTintColorChange = (e) => {
    setTintColor(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="table-container">
        <textarea
          value={jsonInput}
          onChange={handleJsonInputChange}
          rows="10"
          cols="50"
          placeholder="Enter JSON here..."
        />
        <select value={tableType} onChange={handleTableTypeChange}>
          <option value="checkbox">Table with Checkbox</option>
          <option value="radio">Table with Radio Button</option>
          <option value="sorting">Table with Sorting</option>
        </select>
        <input
          style={{ marginTop: "10px" }}
          type="color"
          value={tintColor}
          onChange={handleTintColorChange}
          placeholder="Choose tint color"
        />
        <button onClick={handleGenerateTable}>Generate Table</button>
        {tableData.length > 0 ? (
          <>
            <Table data={tableData} type={tableType} tintColor={tintColor} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
