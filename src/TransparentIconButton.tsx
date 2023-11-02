import styled from "styled-components";

import { IconButton } from "./IconButton/IconButton";

export const TransparentIconButton = styled(IconButton)`
  // FIXME: can not override without important
  background: transparent !important;
  // FIXME: can not override without important
  border: 1px solid transparent !important;
`;
