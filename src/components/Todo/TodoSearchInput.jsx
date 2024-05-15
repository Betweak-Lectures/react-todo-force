import React, { useContext } from "react";
import { todoContext } from "./TodoProvider";

export default function TodoSearchInput() {
  const { setSearchInput } = useContext(todoContext);
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
