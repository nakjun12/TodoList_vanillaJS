import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to={`/`} className="logo">
          HOME
        </Link>
        <Link to={`/1`} className="logo">
          TODOS
        </Link>
      </div>
      <Link to={`/`} className="logo">
        <div className="logo">Pineone</div>
      </Link>
    </header>
  );
}
