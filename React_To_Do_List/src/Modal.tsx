import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { closeModal } from "./lib/redux/modalSlice";
import { AppDispatch, RootState } from "./lib/redux/store";
const Modal = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = () => {
    dispatch(closeModal()); // 모달 닫기 액션 디스패치
  };
  return (
    <div>
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>모달 내용</h2>
            <p>이곳에 모달 내용을 작성하세요.</p>
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
