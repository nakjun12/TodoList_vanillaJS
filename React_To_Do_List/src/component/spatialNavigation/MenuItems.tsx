import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./spatialComponent.module.css";
type Props = {
  item: string;
  choice: string;
  setChoice: Dispatch<SetStateAction<string>>;
};

export default function MenuItems({ item, choice, setChoice }: Props) {
  const [className, setClassName] = useState(styles.Vertical_State_Default);

  const { ref, focused, setFocus } = useFocusable({
    focusable: true,
    focusKey: item,
    onEnterPress: () => {
      console.log("히히히"); //아래이동 추가하기
      setChoice(item);
    },
    onArrowPress: (direction) => {
      // direction 값을 확인하여 화살표 방향에 따라 다르게 반응하도록 처리
      if (direction === "up") {
        // 위 화살표를 눌렀을 때의 처리
        console.log("위 화살표가 눌렸을 때 동작");
        setChoice(""); // 적절한 상태 업데이트를 적용하세요
      } else if (direction === "down") {
        // 아래 화살표를 눌렀을 때의 처리
        console.log("아래 화살표가 눌렸을 때 동작");
        setChoice(item); // 적절한 상태 업데이트를 적용하세요
      }

      return true;
    },
  });
  console.log(choice, "?", item);
  useEffect(() => {
    if (focused && choice === item) {
      console.log("히히히");
      setClassName(styles.Vertical_State_Choice);
    } else if (focused) {
      setClassName(styles.Vertical_State_Focus);
    } else {
      setClassName(styles.Vertical_State_Default);
    }
  }, [choice, focused]);

  return (
    <span ref={ref} className={className} onClick={() => setFocus(item)}>
      {item}
    </span>
  );
}
