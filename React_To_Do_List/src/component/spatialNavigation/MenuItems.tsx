import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./spatialComponent.module.css";
type Props = { item: string };

export default function MenuItems({ item }: Props) {
  const { ref, focused, setFocus } = useFocusable({
    focusable: true,
    focusKey: item,
  });
  console.log(ref, focused, item);
  return (
    <span
      ref={ref}
      className={
        focused ? styles.Vertical_State_Focus : styles.Vertical_State_Default
      }
      onClick={() => setFocus(item)}
    >
      {item}
    </span>
  );
}
