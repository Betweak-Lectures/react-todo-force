import React, { useContext } from "react";
import { todoContext, useTodo } from "./TodoProvider";

export default function TodoSearchInput() {
  const { setSearchInput } = useTodo();
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input
        type="text"
        id="search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
}
