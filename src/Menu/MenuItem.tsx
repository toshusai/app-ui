import styled from "styled-components";
import { type IconProps } from "tabler-icons-react";

import { MenuItemBase } from "./MenuItemBase";

const MenuItemShortcut = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  white-space: nowrap;
  justify-content: space-between;
  padding-right: 12px;
`;

export function MenuItem(props: {
  leftIcon?: React.FC<IconProps>;
  text: string;
  shortcut?: string;
}) {
  return (
    <MenuItemBase text={props.text} leftIcon={props.leftIcon}>
      <MenuItemShortcut>{props.shortcut}</MenuItemShortcut>
    </MenuItemBase>
  );
}
