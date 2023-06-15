import FocusHOC from "./FocusHOC";
import SimilarWord from "./SimilarWord";
import styles from "./spatialComponent.module.css";
type Props = {};

const movieTitles = [
  "어벤져스",
  "마블 어벤져스",
  "소니 픽쳐스 영화",
  "미국영화",
];

function SimilarWords({}: Props) {
  return (
    <section className={styles.span_group}>
      {movieTitles.map((title, index) => (
        <SimilarWord key={index} title={title} />
      ))}
    </section>
  );
}
const SimilarWordsWithFocus = () => (
  <FocusHOC Element={SimilarWords} Key="SimilarWords" />
);
export default SimilarWordsWithFocus;
