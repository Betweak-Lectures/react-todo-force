import React, { useState } from "react";

export default function TodoInput({ color, addTodo }) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        style={{ backgroundColor: color }}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button
        type="button"
        onClick={(e) => {
          addTodo(inputText, color);
          setInputText("");
        }}
      >
        작성
      </button>
    </div>
  );
}
