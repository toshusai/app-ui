import { useEffect, useRef, useState } from "react";

export function useNativeOnChange<
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement
>(
  propsValue: string | number,
  propsOnChange: (value: number | string) => void
) {
  const inputRef = useRef<T>(null);
  const [value, setValue] = useState(propsValue);
  useEffect(() => {
    const onChange = (e: Event) => {
      const target = e.target as T;
      propsOnChange?.(target.value);
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("change", onChange);
    }
    const el = inputRef.current;
    return () => {
      el?.removeEventListener("change", onChange);
    };
  }, [propsOnChange, propsValue]);

  return { inputRef, value, setValue };
}
