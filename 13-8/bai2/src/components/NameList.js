import React, { useState } from "react";

function NameList() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addName = () => {
    if (inputValue.trim() !== "") {
      setNames([...names, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addName}>Thêm</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} <button onClick={() => removeName(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;