import Counter from "./Counter";
export type TodoList = {
  todo: string;
  checked: boolean;
};

function Home() {
  return (
    <main className="box">
      <h1>열심히 살자</h1>
      <div className="container">
        서비스 플랫폼 사업부 황낙준 전임의 TodoList
      </div>
      <Counter />
    </main>
  );
}

export default Home;
