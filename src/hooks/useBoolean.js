import { useMemo } from "react";
import useToggle from "./useToggle";

const useBoolean = (initialValue = false) => {
  const [value, toggle] = useToggle(initialValue);
  const handlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false),
    }),
    [toggle]
  );
  return [value, handlers];
};

export default useBoolean;
