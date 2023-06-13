import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { logout } from "../lib/redux/loginSlice";
import { openModal } from "../lib/redux/modalSlice";
import { AppDispatch, RootState } from "../lib/redux/store";
export default function Header() {
  // 모달 상태 가져오기
  const dispatch = useDispatch<AppDispatch>();

  const login = useSelector((state: RootState) => state.login.isLogin);

  const logoutHandler = () => {
    dispatch(logout());
    alert("로그아웃 되었습니다.");
  };

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

      {!login ? (
        <button onClick={handleOpenModal}> 로그인 </button>
      ) : (
        <button onClick={logoutHandler}> 로그아웃</button>
      )}
    </header>
  );
}
