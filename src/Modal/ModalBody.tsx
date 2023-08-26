import { FC } from "react";
import { X } from "tabler-icons-react";
import { TransparentIconButton } from "../TransparentIconButton";
import { iconProps } from "../iconProps";
import styled from "styled-components";
import { COLOR_BACKGROUND_2_NAME, COLOR_BACKGROUND_NAME } from "../styled";

export const ModalBody: FC<{
  title?: string;
  onClose?: () => void;
}> = (props) => {
  return (
    <Root>
      <CloseButton>
        <TransparentIconButton onClick={props.onClose}>
          <X {...iconProps} />
        </TransparentIconButton>
      </CloseButton>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{props.title}</div>
      </div>
      <div
        style={{
          display: "flex",
          paddingTop: "4px",
        }}
      >
        {props.children}
      </div>
    </Root>
  );
};
const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Root = styled.div`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  background-color: var(${COLOR_BACKGROUND_NAME});
  position: relative;
  height: min-content;
  width: min-content;
  padding: 8px;
`;
