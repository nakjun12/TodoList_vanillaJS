import React from "react";
import type { TodoList } from "./Todos";
type TodoProps = {
  item: TodoList;

  todo: TodoList[];
  setTodo: React.Dispatch<React.SetStateAction<TodoList[]>>;
};

export default function Todo({
  item,

  todo,
  setTodo,
}: TodoProps) {
  const toggleCompleted = () => {
    const newTodo: TodoList[] = todo.map((itemTodo) =>
      itemTodo.todo === item.todo && itemTodo.date === item.date
        ? { ...item, checked: !item.checked }
        : itemTodo
    );
    setTodo(newTodo);
  };

  const deleteTodo = () => {
    const newTodo: TodoList[] = todo.filter(
      (itemTodo) => itemTodo.todo !== item.todo
    );
    setTodo(newTodo);
  };
  //전체를 바꾸고 넣느냐
  //일부를 바꾸고 집어넣느냐

  return (
    <div className={`todo ${item.checked ? "completed" : ""}`}>
      <span>{item.todo}</span>
      <div>
        <button
          type="button"
          className={`btn ${item.checked ? "btn_completed" : ""}`}
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
