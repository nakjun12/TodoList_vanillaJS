import { Fragment, useEffect, useRef, useState } from "react";
import { filterTodosByDate } from "../lib/Helper";
import Calendar from "./Calendar";
import Todo from "./Todo";
import "./Todos.css";

export type TodoList = {
  todo: string;
  checked: boolean;
  date: Date;
};

function Todos() {
  const [todo, setTodo] = useState<TodoList[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoList[]>([]); // [1
  const [input, setInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const firstRef = useRef<boolean>(false);
  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);
  useEffect(() => {
    if (firstRef.current) {
      localStorage.setItem("todo", JSON.stringify(todo));
    } else {
      firstRef.current = true;
    }
  }, [todo]);

  useEffect(() => {
    const filteredTodos = filterTodosByDate(todo, startDate);
    setSelectedTodo(filteredTodos);
  }, [startDate, todo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    if (input.trim() === "") {
      return;
    }

    setTodo([...todo, { todo: input, checked: false, date: startDate }]);
    setInput("");
  };
  console.log(selectedTodo);
  return (
    <main className="box">
      <h1>To_DO_LIST</h1>
      <Calendar startDate={startDate} setStartDate={setStartDate} />
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
      {selectedTodo.map((item: TodoList, index: number) => (
        <Fragment key={index}>
          <Todo item={item} todo={todo} setTodo={setTodo} />
        </Fragment>
      ))}
    </main>
  );
}

export default Todos;
