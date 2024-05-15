import React, { useContext, useState } from "react";
import { todoContext } from "./TodoProvider";

export default function TodoInput({ color }) {
  const [inputText, setInputText] = useState("");

  const { addTodo } = useContext(todoContext);

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
