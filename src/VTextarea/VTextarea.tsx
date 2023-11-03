import { FC, forwardRef } from "react";

import { useNativeOnChange } from "../utils/useNativeOnChange";

import { Textarea } from "../Textarea/Textarea";
import { mergeRefs } from "../utils/mergeRefs";

export type VTextareaProps = {
  value?: string;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "onInput"
>;

export const VTextarea = forwardRef<HTMLTextAreaElement, VTextareaProps>(
  (props, forwardRef) => {
    const {
      value: propsValue,
      onChange: propsOnChange,
      onInput: propsOnInput,
      ...rest
    } = props;
    const { inputRef, value, setValue } =
      useNativeOnChange<HTMLTextAreaElement>(propsValue ?? "", (value) =>
        props.onChange?.(value as string)
      );
    return (
      <>
        <Textarea
          {...rest}
          onChange={(e) => {
            props.onInput?.(e.target.value);
            setValue(e.target.value);
          }}
          ref={mergeRefs<HTMLTextAreaElement>([inputRef, forwardRef])}
          style={props.style}
          value={value}
        />
      </>
    );
  }
);
