import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useState } from "react";
import styles from "./spatialComponent.module.css";

init({
  debug: false,
  visualDebug: false,
});

interface MenuProps {
  focusKey: string;
}
const menuItems = ["전체", "VOD", "LIVE 채널", "APP", "지니뮤직", "OTT 서비스"];
export default function FocusTable({ focusKey: focusKeyParam }: MenuProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { ref, focusSelf, hasFocusedChild, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  });
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  console.log(hasFocusedChild);
  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <div ref={ref}>
          <section className={styles.span_group}>
            <span className={styles.Text}>어벤져스</span>
            <span className={styles.Text}>마블 어벤져스</span>
            <span className={styles.Text}>소니 픽쳐스 영화</span>
            <span className={styles.Text}>미국영화</span>
          </section>
          <section className={styles.Tab_DropLanding}>
            <div>
              <div>
                정확도순
                <img src="ic_arw_down_fill_white_16.svg" />
              </div>
            </div>

            <nav className={styles.Vertical_Landing}>
              {menuItems.map((item, index) => (
                <span
                  key={index}
                  className={
                    index === focusedIndex
                      ? styles.Vertical_State_Focus
                      : styles.Vertical_State_Default
                  }
                  onClick={() => setFocusedIndex(index)}
                >
                  {item}
                </span>
              ))}
            </nav>
          </section>
        </div>
      </FocusContext.Provider>
    </>
  );
}
