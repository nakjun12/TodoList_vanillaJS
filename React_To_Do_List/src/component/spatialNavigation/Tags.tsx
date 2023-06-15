import FocusHOC from "./FocusHOC";
import MenuItems from "./MenuItems";
import styles from "./spatialComponent.module.css";
type Props = {};

const menuItems = ["전체", "VOD", "LIVE 채널", "APP", "지니뮤직", "OTT 서비스"];

function Tags({}: Props) {
  return (
    <nav className={styles.Vertical_Landing}>
      {menuItems.map((item, index) => (
        <MenuItems key={index} item={item} />
      ))}
    </nav>
  );
}
const TagsWithFocus = () => <FocusHOC Element={Tags} Key={"Tags"} />;

export default TagsWithFocus;
