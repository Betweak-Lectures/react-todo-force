import React, { useCallback, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";

const colorSet = ["white", "red", "blue", "green", "yellow"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([
    {
      text: "sample1",
      color: "red",
    },
  ]);
  const [activeColor, setActiveColor] = useState(colorSet[0]);

  const addTodo = useCallback((text, color) => {
    setTodoList((prev) => [...prev, { text, color }]);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h2>Todo App</h2>

      <div>
        <TodoInput color={activeColor} addTodo={addTodo} />
      </div>

      <div>
        <Colorbar colors={colorSet} onChangeColor={setActiveColor} />
      </div>

      <div>
        <h4>Todo Items</h4>
        <div>
          <TodoList todos={todoList} />
        </div>
      </div>
    </div>
  );
}
