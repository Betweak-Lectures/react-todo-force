import React from "react";

export default function TodoSearchInput({ onChange }) {
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input type="text" id="search" onChange={onChange} />
    </div>
  );
}
