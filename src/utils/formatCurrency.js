import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(Boolean(initialValue));

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const reset = useCallback(() => {
    setValue(Boolean(initialValue));
  }, [initialValue]);

  return {
    value,
    setValue,
    toggle,
    setTrue,
    setFalse,
    reset,
  };
};

export default useToggle;
