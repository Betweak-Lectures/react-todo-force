import React, { useEffect, useState } from "react";

export default function TodoListItem({ todo, onRemove, onEdit }) {
  /**
   *
   * 1. todoItem 더블클릭시 input\[type='text'\]와 수정 버튼이 생김.
   *    1-1. editMode라는 boolean state를 하나 둔다.
   *    1-2. todoItem 더블클릭시 editMode를 true로 변경
   *    1-3. editMode가 true일시 input과 수정 버튼 rendering
   *
   * 2. input에 내용입력. (내용을 저장할 State가 필요함.)
   *    2-1. input에 기본 값은 원래 존재하던 todo.text
   *    2-2. onChange 이벤트가 발생할 때 새로운 state에 내용 변경.
   * 3. 수정 버튼을 클릭시 수정
   *    3-1. 수정 버튼 클릭시(onclick) 실제 todoList변경.
   *    3-2. editMode를 false로 변경
   */
  // 1-1. editMode라는 boolean state를 하나 둔다.
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(todo.text);
  }, [todo]);

  return (
    <li
      style={{
        backgroundColor: todo.color,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* 1-3. editMode가 true일시 input과 수정 버튼 rendering */}
      {editMode ? (
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      ) : (
        <div
          // 1-2. todoItem 더블클릭시 editMode를 true로 변경
          onDoubleClick={(e) => {
            e.stopPropagation();
            setEditMode(true);
          }}
        >
          {todo.text}
        </div>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* 1-3. editMode가 true일시 input과 수정 버튼 rendering */}
        {editMode && (
          <li>
            <button
              onClick={(e) => {
                //  editMode를 false로 변경
                onEdit(inputText);
                setEditMode(false);
              }}
            >
              수정
            </button>
          </li>
        )}

        <li>
          <button
            onClick={(e) => {
              onRemove();
            }}
          >
            삭제
          </button>
        </li>
      </ul>
    </li>
  );
}
