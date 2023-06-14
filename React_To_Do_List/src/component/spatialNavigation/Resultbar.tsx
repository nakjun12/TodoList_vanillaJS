import RightHeader from "./RightHeader";
import styles from "./spatialComponent.module.css";
type Props = {};

export default function Resultbar({}: Props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.right_header}>
          <span className={styles.right_header_em}>앤드게임</span>
          <span className={styles.right_header_font}>검색결과</span>
          <span className={styles.right_header_font}>입니다</span>
        </div>
        <RightHeader />
      </header>
    </>
  );
}
