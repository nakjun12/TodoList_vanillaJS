import { Fragment, useEffect, useState } from "react";
import Todo from "./Todo";
import "./Todos.css";

export type TodoList = {
  todo: string;
  checked: boolean;
};

function Todos() {
  const [todo, setTodo] = useState<TodoList[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    if (input.trim() === "") {
      return;
    }

    setTodo([...todo, { todo: input, checked: false }]);
    setInput("");
  };

  return (
    <main className="box">
      <h1>To_DO_LIST</h1>
      <div className="container">
        <input
          type="text"
          placeholder="할일을 추가하세요"
          className="input"
          value={input}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
          onChange={onChange}
        />
        <button type="button" className="btn" onClick={onClick}>
          추가
        </button>
      </div>
      {todo.map((item: TodoList, index: number) => (
        <Fragment key={index}>
          <Todo item={item} index={index} todo={todo} setTodo={setTodo} />
        </Fragment>
      ))}
    </main>
  );
}

export default Todos;
