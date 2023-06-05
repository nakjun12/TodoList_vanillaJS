// 할일 목록 데이터
let todos = [];

const todoList = document.getElementById("todo-list"); //id 가져옴
const addTodoForm = document.getElementById("add-todo-form");
const todoInput = document.getElementById("todo-input");

// 할일 추가 이벤트 핸들러
addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim(); //빈 여백 삭제
  if (todoText) {
    todos.push({
      //객체 추가
      text: todoText,
      completed: false,
    });
    renderTodoList(); //렌더링
    todoInput.value = ""; //지워줌
  }
});

// 할일 삭제 이벤트 핸들러
function deleteTodoItem(index) {
  todos.splice(index, 1);
  renderTodoList();
}

// 할일 완료 상태 변경 이벤트 핸들러
function toggleTodoCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodoList();
}

// 할일 목록 렌더링
function renderTodoList() {
  todoList.innerHTML = ""; //다시 그려질때마다 초기화
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item" + (todo.completed ? " completed" : ""); //완성된 스타일과 구분

    const checkbox = document.createElement("input"); //input 생성
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed; //체크 여부
    checkbox.addEventListener("change", () => {
      toggleTodoCompleted(index);
    }); //체인지 일어날 경우 발생하는 이벤트

    const label = document.createElement("label");
    label.textContent = todo.text; //할일 리스트

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "btn"; //삭제
    deleteBtn.addEventListener("click", () => {
      deleteTodoItem(index); //미리 index 넣어줌
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });
}

// 초기 렌더링
renderTodoList();
