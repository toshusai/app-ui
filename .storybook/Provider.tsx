import React from "react";
import { COLOR_BACKGROUND_2_NAME, GlobalStyle } from "../src/GlobalStyle";
import { createGlobalStyle } from "styled-components";
export const Provider = (story: any) => {
  return (
    <div
      style={{
        background: `var(${COLOR_BACKGROUND_2_NAME})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <GlobalStyle />
      <StoryGlobalStyle />
      {story()}
    </div>
  );
};

const StoryGlobalStyle = createGlobalStyle`
  body {
    height: auto;
    overflow: auto;
  }
`;
