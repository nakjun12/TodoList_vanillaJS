import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../lib/redux/modalSlice";
import { AppDispatch } from "../lib/redux/store";
interface ModalProps {
  setIsMemberShip: Dispatch<SetStateAction<boolean>>;
  setMemberShipData: Dispatch<SetStateAction<SignUpData[]>>;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

function MemberShip({ setIsMemberShip, setMemberShipData }: ModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [signupData, setSignupData] = useState<SignUpData>({
    username: "",
    email: "",
    password: "",
  });

  const handleCloseModal = () => {
    dispatch(closeModal()); // 모달 닫기 액션 디스패치
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 회원 가입 처리 로직 추가
    if (!signupData.username || !signupData.email || !signupData.password) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    setMemberShipData((prevData) => [...prevData, signupData]);

    setIsMemberShip(true);
    alert("회원가입 성공");
    console.log("Signup Data:", signupData);
    // 모달 닫기
  };

  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>회원 가입</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            사용자명
            <input
              type="text"
              name="username"
              value={signupData.username}
              onChange={handleInputChange}
            />
          </label>

          <label>
            비밀번호
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleInputChange}
            />
          </label>

          <label>
            전자메일
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">회원 가입</button>
          <button type="button" onClick={() => setIsMemberShip(true)}>
            돌아가기
          </button>
        </form>
      </div>
    </div>
  );
}

export default MemberShip;
