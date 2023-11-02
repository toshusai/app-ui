import React from "react";
import styled from "styled-components";

import { COLOR_FOCUS_NAME, COLOR_HOVER_NAME } from "../GlobalStyle";

export type TreeViewItem<T> = {
  id: string;
  children?: TreeViewItem<T>[];
  data: T;
};

export const NEST_SPACE = 6;

export function TreeItem<T>(
  props: {
    children: React.ReactNode;
    depth?: number;
    selected?: boolean;
  } & React.HTMLAttributes<HTMLLIElement>
) {
  const { children, depth, ...rest } = props;
  return (
    <TreeItemRoot
      selected={props.selected}
      padding={props.depth ? props.depth * NEST_SPACE : 0}
      {...rest}
    >
      {props.children}
    </TreeItemRoot>
  );
}

const TreeItemRoot = styled.li<{
  padding: number;
  selected?: boolean;
}>`
  display: flex;
  cursor: pointer;
  padding-left: ${(props) => props.padding}px;
  height: 12px;
  line-height: 12px;
  background-color: ${(props) =>
    props.selected ? `var(${COLOR_FOCUS_NAME})` : "transparent"};
  font-family: "Roboto Mono", monospace;

  :hover {
    background-color: ${(props) =>
      props.selected ? `var(${COLOR_FOCUS_NAME})` : `var(${COLOR_HOVER_NAME})`};
  }
`;
