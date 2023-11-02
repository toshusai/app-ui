import styled from "styled-components";
import { COLOR_BORDER_NAME, COLOR_BUTTON_BACKGROUND_NAME } from "../GlobalStyle/GlobalStyle";


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
`;