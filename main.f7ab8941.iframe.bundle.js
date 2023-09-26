(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[179],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});__webpack_require__("./node_modules/react/index.js");var GlobalStyle=__webpack_require__("./src/styled/GlobalStyle.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Provider=story=>(0,jsx_runtime.jsxs)("div",{style:{background:`var(${GlobalStyle.v5})`,display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem"},children:[(0,jsx_runtime.jsx)(GlobalStyle.ZL,{}),(0,jsx_runtime.jsx)(StoryGlobalStyle,{}),story()]});Provider.displayName="Provider";const StoryGlobalStyle=styled_components_browser_esm.vJ`
  body {
    height: auto;
    overflow: auto;
  }
`;try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/Provider.tsx#Provider"]={docgenInfo:Provider.__docgenInfo,name:"Provider",path:".storybook/Provider.tsx#Provider"})}catch(__react_docgen_typescript_loader_error){}const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[Provider]}},"./src/styled/GlobalStyle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v5:()=>COLOR_BACKGROUND_2_NAME,kI:()=>COLOR_BACKGROUND_NAME,Eu:()=>COLOR_BORDER_NAME,w:()=>COLOR_BUTTON_BACKGROUND_NAME,Ao:()=>COLOR_FOCUS_NAME,KA:()=>COLOR_HOVER_NAME,xf:()=>COLOR_INPUT_BACKGROUND_DISABLED_NAME,sO:()=>COLOR_INPUT_BACKGROUND_FOCUS_NAME,Il:()=>COLOR_INPUT_BACKGROUND_NAME,xz:()=>COLOR_TEXT_DISABLED_NAME,ZL:()=>GlobalStyle});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const tailwindLike=styled_components_browser_esm.iv`
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-col-revserse {
    flex-direction: column-reverse;
  }

  .w-full {
    width: 100%;
  }

  .relative {
    position: relative;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-4 {
    gap: 4px;
  }

  .gap-8 {
    gap: 8px;
  }
`,COLOR_BACKGROUND_NAME="--color-background",COLOR_BACKGROUND_2_NAME="--color-background-2",COLOR_BORDER_NAME="--color-border",COLOR_INPUT_BACKGROUND_NAME="--color-input-background",COLOR_INPUT_BACKGROUND_FOCUS_NAME="--color-input-background-focus",COLOR_INPUT_BACKGROUND_DISABLED_NAME="--color-input-background-disabled",COLOR_BUTTON_BACKGROUND_NAME="--color-button-background",COLOR_TEXT_DISABLED_NAME="--color-text-disabled",COLOR_HOVER_NAME="--color-hover",COLOR_FOCUS_NAME="--color-focus",GlobalStyle=styled_components_browser_esm.vJ`
:root {
  ${COLOR_HOVER_NAME}: #4d4d4d;
  ${COLOR_FOCUS_NAME}: #5b5b5b;

  ${COLOR_BACKGROUND_2_NAME}: #222222;
  ${COLOR_BACKGROUND_NAME}: #3a3a3a;
  ${"--color-primary"}: #2c7be3;
  ${"--color-primary-bg"}: #1d1d1d;

  ${COLOR_BORDER_NAME}: #545454;
  ${COLOR_INPUT_BACKGROUND_NAME}: #8b8b8b;
  ${COLOR_INPUT_BACKGROUND_FOCUS_NAME}: #272727;
  ${COLOR_INPUT_BACKGROUND_DISABLED_NAME}: #3a3a3a;
  ${"--color-text"}: #ffffff;

  ${COLOR_BUTTON_BACKGROUND_NAME}: #5c5c5c;

  ${"--color-text-strip"}: #3481e6;
  ${COLOR_TEXT_DISABLED_NAME}: #545454;
  ${"--color-text-strip-border"}: #3e87e0;
  ${"--color-strip-handle"}: #0000002e;
  ${"--color-strip-selected"}: #fb8d33;

  ${"--mono-font"}: "Ricty Diminished";
}

*:focus {
    outline: 1px solid var(${"--color-strip-selected"});
    outline-offset: -1px;
  }

::-webkit-scrollbar {
    width: 8px;
    position: relative;
    background: var(${COLOR_INPUT_BACKGROUND_NAME});
    padding: 0;
    margin: 0;
    overflow: visible;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: var(${COLOR_BORDER_NAME});
    right: 0;
    border: 1px solid var(${COLOR_INPUT_BACKGROUND_NAME});
}
::-webkit-scrollbar-track {
  background: transparent;
}
body{
  margin: 0;
  height: 100vh;
  background-color: var(${COLOR_BACKGROUND_2_NAME});

  color: white;
  font-family: "Ricty Diminished";
  position: relative;
  line-height: 16px;
  font-size: 12px;
  overflow: hidden;

  font-family: Arial, Helvetica, sans-serif
}
#__next{
  height: 100%;
}

${tailwindLike}
`;try{GlobalStyle.displayName="GlobalStyle",GlobalStyle.__docgenInfo={description:"",displayName:"GlobalStyle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},suppressMultiMountWarning:{defaultValue:null,description:"",name:"suppressMultiMountWarning",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/GlobalStyle.tsx#GlobalStyle"]={docgenInfo:GlobalStyle.__docgenInfo,name:"GlobalStyle",path:"src/styled/GlobalStyle.tsx#GlobalStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Modal/index.mdx":["./src/Modal/index.mdx",719,377],"./ScaleScrollBar/index.mdx":["./src/ScaleScrollBar/index.mdx",719,220],"./TimeView/index.mdx":["./src/TimeView/index.mdx",719,174],"./ToolBarMenu/index.mdx":["./src/ToolBarMenu/index.mdx",719,551],"./TreeView/EditableTree.mdx":["./src/TreeView/EditableTree.mdx",719,549],"./TreeView/TreeView.mdx":["./src/TreeView/TreeView.mdx",719,721],"./panel/HPanel.mdx":["./src/panel/HPanel.mdx",719,899],"./panel/VPanel.mdx":["./src/panel/VPanel.mdx",719,30],"./styled/SelectRect.mdx":["./src/styled/SelectRect.mdx",719,253]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Modal/index.stories":["./src/Modal/index.stories.tsx",898],"./Modal/index.stories.tsx":["./src/Modal/index.stories.tsx",898],"./ScaleScrollBar/index.stories":["./src/ScaleScrollBar/index.stories.tsx",453],"./ScaleScrollBar/index.stories.tsx":["./src/ScaleScrollBar/index.stories.tsx",453],"./TimeView/index.stories":["./src/TimeView/index.stories.tsx",46],"./TimeView/index.stories.tsx":["./src/TimeView/index.stories.tsx",46],"./ToolBarMenu/index.stories":["./src/ToolBarMenu/index.stories.tsx",720],"./ToolBarMenu/index.stories.tsx":["./src/ToolBarMenu/index.stories.tsx",720],"./TreeView/EditableTree.stories":["./src/TreeView/EditableTree.stories.tsx",51],"./TreeView/EditableTree.stories.tsx":["./src/TreeView/EditableTree.stories.tsx",51],"./TreeView/TreeView.stories":["./src/TreeView/TreeView.stories.tsx",244],"./TreeView/TreeView.stories.tsx":["./src/TreeView/TreeView.stories.tsx",244],"./VNumberInput/index.stories":["./src/VNumberInput/index.stories.tsx",517,626],"./VNumberInput/index.stories.tsx":["./src/VNumberInput/index.stories.tsx",517,626],"./panel/HPanel.stories":["./src/panel/HPanel.stories.tsx",971],"./panel/HPanel.stories.tsx":["./src/panel/HPanel.stories.tsx",971],"./panel/VPanel.stories":["./src/panel/VPanel.stories.tsx",920],"./panel/VPanel.stories.tsx":["./src/panel/VPanel.stories.tsx",920],"./styled/SelectRect.stories":["./src/styled/SelectRect.stories.tsx",498],"./styled/SelectRect.stories.tsx":["./src/styled/SelectRect.stories.tsx",498]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[924],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.f7ab8941.iframe.bundle.js.map