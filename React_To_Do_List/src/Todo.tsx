import React, { useState } from "react";
import type { TodoList } from "./Todos";
type TodoProps = {
  item: TodoList;
  index: number;
  todo: TodoList[];
  setTodo: React.Dispatch<React.SetStateAction<TodoList[]>>;
};

export default function Todo({ item, index, todo, setTodo }: TodoProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo[index].checked);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
    const newTodo: TodoList[] = todo.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setTodo(newTodo);
  };

  const deleteTodo = () => {
    const newTodo: TodoList[] = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div className={`todo ${isCompleted ? "completed" : ""}`}>
      <span>{item.todo}</span>
      <div>
        <button
          type="button"
          className={`btn ${isCompleted ? "btn_completed" : ""}`}
          onClick={toggleCompleted}
        >
          ✔
        </button>

        <button type="button" className="btn" onClick={deleteTodo}>
          ✖
        </button>
      </div>
    </div>
  );
}
