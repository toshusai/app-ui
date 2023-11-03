import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToolBarMenu } from "./ToolBarMenu";
import { MenuItem, MenuWithClildren } from "../Menu";
import { StyledContextMenuButton } from "../context_menu";

const meta = {
  component: ToolBarMenu,
  argTypes: {},
} satisfies Meta<typeof ToolBarMenu>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    showMenu: false,
    title: "Menu",
  },
  render: () => {
    const [showMenu, setShowMenu] = useState(false);

    const [showMenu2, setShowMenu2] = useState(false);

    return (
      <div
        style={{
          position: "absolute",
        }}
      >
        <ToolBarMenu title="Menu" setShowMenu={setShowMenu} showMenu={showMenu}>
          <StyledContextMenuButton>
            <MenuItem text="Item 1" />
          </StyledContextMenuButton>
          <StyledContextMenuButton>
            <MenuItem text="Item 2" />
          </StyledContextMenuButton>
          <StyledContextMenuButton>
            <MenuItem text="Item 3" />
          </StyledContextMenuButton>

          <MenuWithClildren
            title="Item 4"
            setShowMenu={setShowMenu2}
            showMenu={showMenu2}
          >
            <StyledContextMenuButton>
              <MenuItem text="Item 1" />
            </StyledContextMenuButton>
            <StyledContextMenuButton>
              <MenuItem text="Item 2" />
            </StyledContextMenuButton>
            <StyledContextMenuButton>
              <MenuItem text="Item 3" />
            </StyledContextMenuButton>
          </MenuWithClildren>
        </ToolBarMenu>
      </div>
    );
  },
};
