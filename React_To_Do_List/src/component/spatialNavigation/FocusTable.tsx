import { init } from "@noriginmedia/norigin-spatial-navigation";
import SimilarWordsWithFocus from "./SimilarWords";
import TagsWithFocus from "./Tags";
import styles from "./spatialComponent.module.css";
init({
  debug: false,
  visualDebug: false,
});

interface MenuProps {}

export default function FocusTable({}: MenuProps) {
  return (
    <>
      <SimilarWordsWithFocus />
      <section className={styles.Tab_DropLanding}>
        <div className={styles.Tab_DropLanding_left}>
          <span className={styles.Tab_DropLanding_left_span}>
            정확도순
            <img src="ic_arw_down_fill_white_16.svg" />
          </span>
        </div>

        <TagsWithFocus />
      </section>
    </>
  );
}
