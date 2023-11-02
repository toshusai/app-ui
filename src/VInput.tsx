import { forwardRef, memo } from "react";

import { useNativeOnChange } from "./utils/useNativeOnChange";
import { mergeRefs } from "./mergeRefs";
import { Input } from "./Input";

export type ClickEditInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onInput">;

export const VInput = forwardRef<HTMLInputElement, ClickEditInputProps>(
  (props, forwardRef) => {
    const {
      value: propsValue,
      style,
      onChange,
      onInput,
      ...inputProps
    } = props;

    const { inputRef, value, setValue } = useNativeOnChange(
      propsValue ?? "",
      (value) => onChange?.(value as string)
    );

    return (
      <>
        <Input
          onChange={(e) => {
            onInput?.(e.target.value);
            setValue(e.target.value);
          }}
          ref={mergeRefs<HTMLInputElement>([inputRef, forwardRef])}
          style={style}
          value={value}
          {...inputProps}
        />
      </>
    );
  }
);

export const MemoClickEditInput = memo(VInput, (prev, next) => {
  return prev.value === next.value && prev.onChange === next.onChange;
});
