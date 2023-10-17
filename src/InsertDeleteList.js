
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InsertDeleteList.js";

function CrudApp() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInsert = () => {
    if (inputValue.trim() !== "") {
      if (editIndex === null) {
        setItems([...items, inputValue]);
        alert('Inserted Successfully')
      } else {
        const updatedItems = [...items];
        updatedItems[editIndex] = inputValue;
        setItems(updatedItems);
        setEditIndex(null);
        alert('Updated Successfully')
      }
      setInputValue("");
    
    }
  };

  const handleEdit = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
    
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    alert('Deleted Successfully')
  };

  return (
    <div className="crud-app">
      <h1 className="text-center">CRUD Operation</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item"
        />
        <button className="btn btn-primary" onClick={handleInsert}>
          {editIndex === null ? "Insert" : "Update"}
        </button>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div>
              <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
