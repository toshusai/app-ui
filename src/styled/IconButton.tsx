import styled from "styled-components";

import { BottomToolTip, ToolTip } from "./ToolTip";
import { COLOR_BORDER_NAME, COLOR_BUTTON_BACKGROUND_NAME } from "./GlobalStyle";

export const IconButton = styled.button`
  position: relative;
  padding: 0;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  height: 16px;
  border: 1px solid var(${COLOR_BORDER_NAME});
  cursor: pointer;
  display: flex;
  border-radius: 4px;
  background-color: var(${COLOR_BUTTON_BACKGROUND_NAME});
  user-select: none;

  :hover > ${ToolTip} {
    opacity: 1;
  }
  :hover > ${BottomToolTip} {
    opacity: 1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  ${IconButton}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${IconButton}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
