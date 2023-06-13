import type { TodoList } from "../component/Todos";

const filterTodosByDate = (todos: TodoList[], date: Date): TodoList[] => {
  const filteredTodos = todos.filter((item) => {
    const itemDate = new Date(item.date);
    const itemYear = itemDate.getFullYear();
    const itemMonth = itemDate.getMonth();
    const itemDay = itemDate.getDate();

    const selectedYear = date.getFullYear();
    const selectedMonth = date.getMonth();
    const selectedDay = date.getDate();

    return (
      itemYear === selectedYear &&
      itemMonth === selectedMonth &&
      itemDay === selectedDay
    );
  });

  return filteredTodos;
};

export { filterTodosByDate };
