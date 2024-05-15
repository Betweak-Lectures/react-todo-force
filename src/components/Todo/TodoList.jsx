import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { todoContext } from "./TodoProvider";

export default function TodoList() {
  // const onRemove={removeTodo} onEdit={editTodo}
  const { removeTodo: onRemove, editTodo: onEdit, filteredTodoList: todos } = useContext(todoContext);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onEdit={(text) => {
            onEdit(todo.id, text);
          }}
          onRemove={() => {
            onRemove(todo.id);
          }}
        />
      ))}
    </ul>
  );
}
