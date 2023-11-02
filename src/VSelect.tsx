import { FC } from "react";

import { Select } from "./Select/Select";

export type Item = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  items: Item[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export const VSelect: FC<Props> = (props) => {
  return (
    <Select
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    >
      {props.items.map((item) => {
        return (
          <option key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </option>
        );
      })}
    </Select>
  );
};
