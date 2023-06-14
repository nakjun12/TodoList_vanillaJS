import FocusTable from "../component/spatialNavigation/FocusTable";
import Resultbar from "../component/spatialNavigation/Resultbar";
import styles from "./SpatialNavigation.module.css";
type Props = {};

export default function SpatialNavigation({}: Props) {
  return (
    <main className={styles.container}>
      <Resultbar />
      <FocusTable focusKey="MENU" />
    </main>
  );
}
