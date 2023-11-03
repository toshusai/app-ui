import styled from "styled-components";

export function MenuItemBase(props: {
  leftIcon?: React.ReactNode;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <Root>
      <Flex>
        {props.leftIcon}
        <MenuItemWrapper $hasLeftIcon={props.leftIcon !== undefined}>
          {props.text}
        </MenuItemWrapper>
      </Flex>
      {props.children}
    </Root>
  );
}
const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  gap: 2px;
`;
const MenuItemWrapper = styled.div<{
  $hasLeftIcon: boolean;
}>`
  padding-left: ${(props) => (props.$hasLeftIcon ? 0 : 12)}px;
  padding-right: 8px;
`;
