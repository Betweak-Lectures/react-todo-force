import React, { useCallback, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import TodoSearchInput from "./TodoSearchInput";

import { TodoStore } from "../../lib/utils";
import { v4 as uuidv4 } from "uuid";
import TodoProvider from "./TodoProvider";

const colorSet = ["white", "red", "blue", "green", "yellow"];

export default function TodoApp() {
  const [activeColor, setActiveColor] = useState(colorSet[0]);

  return (
    <TodoProvider>
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
          <TodoSearchInput />
        </div>

        <div>
          <TodoInput color={activeColor} />
        </div>

        <div>
          <Colorbar colors={colorSet} onChangeColor={setActiveColor} />
        </div>

        <div>
          <h4>Todo Items</h4>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
