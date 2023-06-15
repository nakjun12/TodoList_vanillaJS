import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import styles from "./spatialComponent.module.css";
type Props = { title: string };

export default function SimilarWord({ title }: Props) {
  const { ref, focused, setFocus, focusKey } = useFocusable({
    focusable: true,
    focusKey: title,
  });
  return (
    <span
      ref={ref}
      className={focused ? styles.Text_focus : styles.Text}
      onClick={() => setFocus(focusKey)}
    >
      {title}
    </span>
  );
}
