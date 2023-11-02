import React from "react";
import { GlobalStyle } from "../src/GlobalStyle";
export const Provider = (story: any) => {
  return (
    <div>
      <GlobalStyle />
      {story()}
    </div>
  );
};
