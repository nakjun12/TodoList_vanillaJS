import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../lib/redux/loginSlice";
import { closeModal } from "../lib/redux/modalSlice";
import { AppDispatch, RootState } from "../lib/redux/store";
import type { SignUpData } from "./Member";
import MemberShip from "./Member";
import "./Modal.css";
const Modal = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const [isMemberShip, setIsMemberShip] = useState(true);
  const [MemberShipData, setMemberShipData] = useState<SignUpData[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 로그인 처리 로직 추가
    if (!username || !password) {
      alert("모든 항목을 입력해주세요");
      return;
    }
    const logindata = MemberShipData.filter((data: SignUpData) => {
      if (data.username === username && data.password === password) {
        return true;
      } else {
        return false;
      }
    });
    if (logindata.length === 0) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("로그인 성공");
    dispatch(closeModal());
    dispatch(login());
    console.log("Username:", username);
    console.log("Password:", password);
    // 모달 닫기
  };

  const handleCloseModal = () => {
    dispatch(closeModal()); // 모달 닫기 액션 디스패치
  };
  console.log(isMemberShip, isModalOpen);
  return (
    <div>
      {isModalOpen &&
        (isMemberShip ? (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>로그인</h2>
              <form onSubmit={handleFormSubmit}>
                <label>
                  사용자명
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>
                <br />
                <label>
                  비밀번호
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
                <br />
                <button type="submit">로그인</button>
                <button
                  type="button"
                  onClick={() => setIsMemberShip(!isMemberShip)}
                >
                  회원가입
                </button>
              </form>
            </div>
          </div>
        ) : (
          <MemberShip
            setIsMemberShip={setIsMemberShip}
            setMemberShipData={setMemberShipData}
          />
        ))}
    </div>
  );
};

export default Modal;
