import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { openModal } from "./lib/redux/modalSlice";
import { AppDispatch } from "./lib/redux/store";
export default function Header() {
  // 모달 상태 가져오기
  const dispatch = useDispatch<AppDispatch>();
  const handleOpenModal = () => {
    dispatch(openModal()); // 모달 열기 액션 디스패치
  };

  return (
    <header className="header">
      <Modal />
      <div>
        <Link to={`/`} className="logo">
          HOME
        </Link>
        <Link to={`/1`} className="logo">
          TODOS
        </Link>
        <Link to={`/path/1/detail`} className="logo">
          Router
        </Link>
      </div>

      <button onClick={handleOpenModal}>로그인</button>
    </header>
  );
}
