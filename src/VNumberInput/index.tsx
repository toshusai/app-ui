import { FC, useCallback, useState } from "react";

import { useNativeOnChange } from "../utils/useNativeOnChange";
import { getDragHandler } from "../utils/getDragHandler";

import { minMax } from "../utils/minMax";
import { Input } from "../Input";

type VNumberInputProps = {
  value?: number;
  scale?: number;
  view?: (value: number) => string;
  style?: React.CSSProperties;
  onChange?: (value: number) => void;
  onInput?: (value: number) => void;
  min?: number;
  max?: number;
};

export function VNumberInput(props: VNumberInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const { inputRef, value, setValue } = useNativeOnChange(
    props.value ?? 0,
    (value) => {
      if (typeof value === "string") {
        const v = parseNumber(value);
        if (isNaN(v)) {
          const finalValue = parseString(value, props.value ?? 0);
          setValue(finalValue);
          props.onChange?.(finalValue);
        } else {
          const value = _minMax(v);
          props.onChange?.(value);
          setValue(value);
        }
      } else {
        const v = _minMax(value);
        props.onChange?.(v);
      }
    }
  );

  const _minMax = useCallback((value: number) => {
    return minMax(
      value,
      props.min ?? Number.MIN_SAFE_INTEGER,
      props.max ?? Number.MAX_SAFE_INTEGER
    );
  }, [props.min, props.max]);

  const handleMouseDown = getDragHandler(
    (ctx) => {
      ctx.startEvent.preventDefault();
      let value = (props.value ?? 0) + ctx.diffX * (props.scale ?? 1);
      value = _minMax(value);
      setValue(value);
      props.onInput?.(value);
    },
    (ctx) => {
      ctx.startEvent.preventDefault();
    },
    (ctx) => {
      if (ctx.diffX === 0 && ctx.diffY === 0) {
        setIsFocused(true);
        inputRef.current?.focus();
        inputRef.current?.select();
      } else {
        let value = (props.value ?? 0) + ctx.diffX * (props.scale ?? 1);
        value = _minMax(value);
        props.onChange?.(value);
      }
    }
  );

  return (
    <Input
      ref={inputRef}
      readOnly={!isFocused}
      value={props.view ? props.view(value as number) : value}
      style={{
        cursor: isFocused ? "default" : "ew-resize",
        userSelect: isFocused ? "text" : "none",
      }}
      onMouseDown={handleMouseDown}
      onChange={(e) => {
        try {
          const x = parseFloat(e.target.value);
          if (isNaN(x) || isNaN(e.target.valueAsNumber)) throw new Error("NaN");
          const value = _minMax(e.target.valueAsNumber);
          props.onInput?.(value);
          setValue(value);
        } catch (_) {
          setValue(e.target.value);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setIsFocused(false);
          inputRef.current?.blur();
        }
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
    />
  );
};


function isEvalSafe(str: string) {
  return /^[0-9+\-*/(). ]+$/.test(str);
}

function parseNumber(value: string) {
  const isOnlyNumber = /^[0-9.]+$/.test(value);
  if (isOnlyNumber) return Number(value);
  return NaN;
}

function runAsFunction(str: string) {
  return new Function(`return (${str})`)();
}

function parseString(str: string, defaultValue: number) {
  if (!isEvalSafe(str)) return defaultValue
  return runAsFunction(str);
}