import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
type Props = { Element: React.FC<any>; Key: string };

export default function FocusHOC({ Element, Key }: Props) {
  const { ref, focusSelf, hasFocusedChild, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: Key,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
  });
  useEffect(() => {
    focusSelf();
    console.log("히히");
    console.log(hasFocusedChild);
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={Key}>
      <div ref={ref}>
        <Element />
      </div>
    </FocusContext.Provider>
  );
}
