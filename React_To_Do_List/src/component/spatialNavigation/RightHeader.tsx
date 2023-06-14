import styles from "./spatialComponent.module.css";

type Props = {};

export default function RightHeader({}: Props) {
  return (
    <div className={styles.Etc_Direction_Induction_Key}>
      <img
        src="/ic_arw_2line_up_mix_24.svg"
        alt=""
        className={styles.ic_arw_2line_up_mix_24}
      />
      <img
        src="/ic_search_white_24.svg"
        alt=""
        className={styles.ic_search_white_24}
      />
      <span className={styles.right_span}>전체메뉴</span>
    </div>
  );
}
