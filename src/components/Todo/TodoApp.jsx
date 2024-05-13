import React, { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import TodoSearchInput from "./TodoSearchInput";

import { TodoStore } from "../../lib/utils";

const colorSet = ["white", "red", "blue", "green", "yellow"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([
    {
      text: "sample1",
      color: "red",
    },
  ]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colorSet[0]);

  const addTodo = useCallback(
    (text, color) => {
      const todos = [...todoList, { text, color }];
      setTodoList(todos);
      TodoStore.setTodo(todos);
    },
    [todoList],
  );
  useEffect(() => {
    setTodoList(TodoStore.getTodo());
  }, []);

  useEffect(() => {
    if (searchInput) {
      setFilteredTodoList(
        todoList.filter((todo) => todo.text.includes(searchInput)),
      );
    } else {
      setFilteredTodoList([...todoList]);
    }
  }, [searchInput, todoList]);

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
        <TodoSearchInput
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>

      <div>
        <TodoInput color={activeColor} addTodo={addTodo} />
      </div>

      <div>
        <Colorbar colors={colorSet} onChangeColor={setActiveColor} />
      </div>

      <div>
        <h4>Todo Items</h4>
        <div>
          <TodoList todos={filteredTodoList} />
        </div>
      </div>
    </div>
  );
}
