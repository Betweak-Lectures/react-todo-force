import React, { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import TodoSearchInput from "./TodoSearchInput";

import { TodoStore } from "../../lib/utils";
import { v4 as uuidv4 } from "uuid";

const colorSet = ["white", "red", "blue", "green", "yellow"];

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [activeColor, setActiveColor] = useState(colorSet[0]);

  const addTodo = useCallback(
    (text, color) => {
      const todos = [...todoList, { id: uuidv4(), text, color }];
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

  const removeTodo = useCallback(
    (todoId) => {
      const newTodoList = todoList.filter((todo, idx) => todoId !== todo.id);
      setTodoList(newTodoList);
      TodoStore.setTodo(newTodoList);
    },
    [todoList],
  );
  const editTodo = useCallback(
    (todoId, text) => {
      const newTodoList = todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            text,
          };
        }
        return todo;
      });
      setTodoList(newTodoList);
      TodoStore.setTodo(newTodoList);
    },
    [todoList],
  );

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
          <TodoList
            todos={filteredTodoList}
            onRemove={removeTodo}
            onEdit={editTodo}
          />
        </div>
      </div>
    </div>
  );
}
