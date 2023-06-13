import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CoustomInput from "../CoustomInput";

export type DateProps = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};

const Calendar: React.FC<DateProps> = ({ startDate, setStartDate }) => {
  const formattedStartDate = startDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDateClick = () => {
    // 처리할 로직 작성
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      dateFormat="yyyy년 MM월 dd일"
      popperPlacement="bottom-end" // 원하는 위치로 설정 (예: top-start, top-end, bottom-start, bottom-end 등)
      customInput={
        <CoustomInput onClick={handleDateClick} value={formattedStartDate} />
      }
    />
  );
};

export default Calendar;
