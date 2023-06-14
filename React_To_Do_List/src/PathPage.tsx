import { Link } from "react-router-dom";
import Table from "./component/Table";
function RouterPage() {
  return (
    <main className="box">
      <div className="table">
        <div className="router">
          <Link to={`/path/1/detail`} className="logo">
            <div className="logo">1</div>
          </Link>
          <Link to={`/path/2/detail`} className="logo">
            <div className="logo">2</div>
          </Link>

          <Link to={`/path/3/detail`} className="logo">
            <div className="logo">3</div>
          </Link>
        </div>
        <Table />
      </div>
    </main>
  );
}

export default RouterPage;
