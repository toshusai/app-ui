import styled from "styled-components";
import { COLOR_BACKGROUND_NAME } from "../../GlobalStyle";

export const Root = styled.div`
  width: 100%;
  height: 256px;
`;

export const ExampleDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(${COLOR_BACKGROUND_NAME});
`;
