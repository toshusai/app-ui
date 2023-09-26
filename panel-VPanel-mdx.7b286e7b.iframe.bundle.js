"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[30,920],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/panel/VPanel.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_app_ui_app_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_VPanel_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/panel/VPanel.stories.tsx");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_VPanel_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_app_ui_app_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./src/panel/VPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithHPanel:()=>WithHPanel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/panel/index.ts"),_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/panel/__stories__/ExampleDiv.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_0__.$K},Basic={args:{top:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.R,{children:"top"}),bottom:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.R,{children:"bottom"})},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.f,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.$K,{...args})})},WithHPanel={args:{top:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.DZ,{left:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.R,{children:"left"}),right:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.R,{children:"right"})})}),bottom:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.R,{children:"bottom"})},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_ExampleDiv__WEBPACK_IMPORTED_MODULE_1__.f,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.$K,{...args})})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    top: <ExampleDiv>top</ExampleDiv>,\n    bottom: <ExampleDiv>bottom</ExampleDiv>\n  },\n  render: args => {\n    return <Root>\n        <VPanel {...args} />\n      </Root>;\n  }\n}",...Basic.parameters?.docs?.source}}},WithHPanel.parameters={...WithHPanel.parameters,docs:{...WithHPanel.parameters?.docs,source:{originalSource:'{\n  args: {\n    top: <div style={{\n      width: "100%"\n    }}>\n        <HPanel left={<ExampleDiv>left</ExampleDiv>} right={<ExampleDiv>right</ExampleDiv>} />\n      </div>,\n    bottom: <ExampleDiv>bottom</ExampleDiv>\n  },\n  render: args => {\n    return <Root>\n        <VPanel {...args} />\n      </Root>;\n  }\n}',...WithHPanel.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithHPanel"]},"./src/panel/__stories__/ExampleDiv.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ExampleDiv,f:()=>Root});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/index.ts");const Root=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  width: 100%;
  height: 256px;
`,ExampleDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(${_styled__WEBPACK_IMPORTED_MODULE_0__.kI});
`;try{Root.displayName="Root",Root.__docgenInfo={description:"",displayName:"Root",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/__stories__/ExampleDiv.tsx#Root"]={docgenInfo:Root.__docgenInfo,name:"Root",path:"src/panel/__stories__/ExampleDiv.tsx#Root"})}catch(__react_docgen_typescript_loader_error){}try{ExampleDiv.displayName="ExampleDiv",ExampleDiv.__docgenInfo={description:"",displayName:"ExampleDiv",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/__stories__/ExampleDiv.tsx#ExampleDiv"]={docgenInfo:ExampleDiv.__docgenInfo,name:"ExampleDiv",path:"src/panel/__stories__/ExampleDiv.tsx#ExampleDiv"})}catch(__react_docgen_typescript_loader_error){}},"./src/panel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DZ:()=>HPanel,$K:()=>VPanel});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const DividerBox=styled_components_browser_esm.ZP.div`
  position: relative;
  display: flex;
`;try{DividerBox.displayName="DividerBox",DividerBox.__docgenInfo={description:"",displayName:"DividerBox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/DividerBox.tsx#DividerBox"]={docgenInfo:DividerBox.__docgenInfo,name:"DividerBox",path:"src/panel/DividerBox.tsx#DividerBox"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),getDragHander=__webpack_require__("./src/utils/getDragHander.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HPanelDivider=styled_components_browser_esm.ZP.div`
  min-width: 4px;
  min-height: 100%;
  background-color: var(--color-panel-divider);
  cursor: col-resize;
  user-select: none;
`,HBoxRoot=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`,HPanel=props=>{const[rate,setRate]=react.useState(props.defaultRate??.5),leftWidth=`calc(${100*rate}% - 2px)`,rightWidth=`calc(${100*(1-rate)}% - 2px)`,handleMouseDown=(0,getDragHander.j)((ctx=>{const{diffX}=ctx,el=ctx.startEvent.target,ctxWidth=el.parentElement?.clientWidth??0,newRate=Math.max(0,Math.min(1,rate+diffX/ctxWidth));setRate(newRate)}));return(0,jsx_runtime.jsxs)(HBoxRoot,{children:[(0,jsx_runtime.jsx)(DividerBox,{style:{width:leftWidth},children:props.left}),(0,jsx_runtime.jsx)(HPanelDivider,{onMouseDown:handleMouseDown}),(0,jsx_runtime.jsx)(DividerBox,{style:{width:rightWidth},children:props.right})]})};HPanel.displayName="HPanel";try{HPanel.displayName="HPanel",HPanel.__docgenInfo={description:"",displayName:"HPanel",props:{left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"ReactNode"}},right:{defaultValue:null,description:"",name:"right",required:!0,type:{name:"ReactNode"}},defaultRate:{defaultValue:null,description:"",name:"defaultRate",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/HPanel.tsx#HPanel"]={docgenInfo:HPanel.__docgenInfo,name:"HPanel",path:"src/panel/HPanel.tsx#HPanel"})}catch(__react_docgen_typescript_loader_error){}const VPanelDivider=styled_components_browser_esm.ZP.div`
  width: 100%;
  min-height: 4px;
  background-color: var(--color-panel-divider);
  cursor: row-resize;
  user-select: none;
`,VPanelBox=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,VPanel=props=>{const[rate,setRate]=react.useState(props.defaultRate??.5),topHeight=`calc(${100*rate}% - 2px)`,bottomHeight=`calc(${100*(1-rate)}% - 2px)`,handleMouseDown=(0,getDragHander.j)((ctx=>{const{diffY}=ctx,el=ctx.startEvent.target,ctxWidth=el.parentElement?.clientHeight??0,newRate=Math.max(0,Math.min(1,rate+diffY/ctxWidth));setRate(newRate)}));return(0,jsx_runtime.jsxs)(VPanelBox,{children:[(0,jsx_runtime.jsx)(DividerBox,{style:{height:topHeight},children:props.top}),(0,jsx_runtime.jsx)(VPanelDivider,{onMouseDown:handleMouseDown}),(0,jsx_runtime.jsx)(DividerBox,{style:{height:bottomHeight},children:props.bottom})]})};VPanel.displayName="VPanel";try{VPanel.displayName="VPanel",VPanel.__docgenInfo={description:"",displayName:"VPanel",props:{top:{defaultValue:null,description:"",name:"top",required:!0,type:{name:"ReactNode"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!0,type:{name:"ReactNode"}},defaultRate:{defaultValue:null,description:"",name:"defaultRate",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/panel/VPanel.tsx#VPanel"]={docgenInfo:VPanel.__docgenInfo,name:"VPanel",path:"src/panel/VPanel.tsx#VPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>IconButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ToolTip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/ToolTip.tsx"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styled/GlobalStyle.tsx");const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  position: relative;
  padding: 0;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  height: 16px;
  border: 1px solid var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__.Eu});
  cursor: pointer;
  display: flex;
  border-radius: 4px;
  background-color: var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__.w});
  user-select: none;

  :hover > ${_ToolTip__WEBPACK_IMPORTED_MODULE_0__.e} {
    opacity: 1;
  }
  :hover > ${_ToolTip__WEBPACK_IMPORTED_MODULE_0__.h} {
    opacity: 1;
  }
`,ButtonGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  display: flex;
  ${IconButton}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${IconButton}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/styled/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/IconButton.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/styled/IconButton.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/SelectRect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>SelectRectDiv});const SelectRectDiv=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div.attrs((props=>({style:{left:props.$left+"px",width:props.$width+"px",top:props.$top+"px",height:props.$height+"px"}})))`
  position: absolute;
  background: rgba(110, 132, 255, 0.557);
  pointer-events: none;
`;try{SelectRectDiv.displayName="SelectRectDiv",SelectRectDiv.__docgenInfo={description:"",displayName:"SelectRectDiv",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$left:{defaultValue:null,description:"",name:"$left",required:!0,type:{name:"number"}},$width:{defaultValue:null,description:"",name:"$width",required:!0,type:{name:"number"}},$top:{defaultValue:null,description:"",name:"$top",required:!0,type:{name:"number"}},$height:{defaultValue:null,description:"",name:"$height",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/SelectRect.tsx#SelectRectDiv"]={docgenInfo:SelectRectDiv.__docgenInfo,name:"SelectRectDiv",path:"src/styled/SelectRect.tsx#SelectRectDiv"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/StyledInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>StyledInput});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/GlobalStyle.tsx");const StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.input`
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.Eu});
  background-color: var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.Il});
  border-radius: 8px;
  height: 16px;
  padding-left: 8px;
  caret-color: red;
  max-width: 128px;

  :focus {
    outline: none;
    border-radius: 8px;
    background-color: var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.sO});
  }

  font-family: "Ricty Diminished";
`;try{StyledInput.displayName="StyledInput",StyledInput.__docgenInfo={description:"",displayName:"StyledInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/StyledInput.tsx#StyledInput"]={docgenInfo:StyledInput.__docgenInfo,name:"StyledInput",path:"src/styled/StyledInput.tsx#StyledInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/ToolTip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ToolTip,h:()=>BottomToolTip});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/GlobalStyle.tsx");const toolTipBase=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(${_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.v5});
  color: var(--color-text);
  font-size: 12px;
  white-space: nowrap;
  z-index: 10000;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
`,ToolTip=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  ${toolTipBase}
  top: calc(-100% + -16px);
`,BottomToolTip=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  ${toolTipBase}
  bottom: calc(-100% + -16px);
`;try{ToolTip.displayName="ToolTip",ToolTip.__docgenInfo={description:"",displayName:"ToolTip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/ToolTip.tsx#ToolTip"]={docgenInfo:ToolTip.__docgenInfo,name:"ToolTip",path:"src/styled/ToolTip.tsx#ToolTip"})}catch(__react_docgen_typescript_loader_error){}try{BottomToolTip.displayName="BottomToolTip",BottomToolTip.__docgenInfo={description:"",displayName:"BottomToolTip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/ToolTip.tsx#BottomToolTip"]={docgenInfo:BottomToolTip.__docgenInfo,name:"BottomToolTip",path:"src/styled/ToolTip.tsx#BottomToolTip"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button,v5:()=>GlobalStyle.v5,kI:()=>GlobalStyle.kI,Eu:()=>GlobalStyle.Eu,Ao:()=>GlobalStyle.Ao,KA:()=>GlobalStyle.KA});var GlobalStyle=__webpack_require__("./src/styled/GlobalStyle.tsx"),styled_components_browser_esm=(__webpack_require__("./src/styled/IconButton.tsx"),__webpack_require__("./src/styled/SelectRect.tsx"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledCheckbox=styled_components_browser_esm.ZP.input`
  margin: 0;
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  border: 1px solid var(${GlobalStyle.Eu});
  background-color: var(${GlobalStyle.w});
  border-radius: 2px;
  height: 16px;
  width: 16px;
  padding-left: 8px;
  appearance: none;
  position: relative;
  :checked {
    &:after {
      content: "✔︎";
      position: absolute;
      left: 2px;
      top: 1px;
      font-size: 12px;
      color: white;
      transition: all 0.2s; /* on prévoit une animation */
    }
    accent-color: red;
    background: red;
  }
`;try{StyledCheckbox.displayName="StyledCheckbox",StyledCheckbox.__docgenInfo={description:"",displayName:"StyledCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/StyledCheckbox.tsx#StyledCheckbox"]={docgenInfo:StyledCheckbox.__docgenInfo,name:"StyledCheckbox",path:"src/styled/StyledCheckbox.tsx#StyledCheckbox"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/styled/StyledInput.tsx");const StyledSelect=styled_components_browser_esm.ZP.select`
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${GlobalStyle.Eu});
  background-color: var(${GlobalStyle.Il});
  border-radius: 8px;
  height: 16px;
  padding-left: 8px;
  caret-color: red;
  max-width: 128px;
  width: 128px;

  :focus {
    outline: none;
    border-radius: 8px;
    background-color: var(${GlobalStyle.sO});
  }
  :disabled {
    background-color: var(${GlobalStyle.xf});
    color: var(${GlobalStyle.xz});
  }
  font-family: "Ricty Diminished";
`;try{StyledSelect.displayName="StyledSelect",StyledSelect.__docgenInfo={description:"",displayName:"StyledSelect",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/StyledSelect.tsx#StyledSelect"]={docgenInfo:StyledSelect.__docgenInfo,name:"StyledSelect",path:"src/styled/StyledSelect.tsx#StyledSelect"})}catch(__react_docgen_typescript_loader_error){}const StyledTextarea=styled_components_browser_esm.ZP.textarea`
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${GlobalStyle.Eu});
  background-color: var(${GlobalStyle.Il});
  border-radius: 8px;
  height: 16px;
  padding-left: 8px;
  caret-color: red;
  max-width: 256px;

  resize: none;
  height: 42px;

  :focus {
    outline: none;
    border-radius: 8px;
    background-color: var(${GlobalStyle.sO});
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  font-family: "Ricty Diminished";
`;try{StyledTextarea.displayName="StyledTextarea",StyledTextarea.__docgenInfo={description:"",displayName:"StyledTextarea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/StyledTextarea.tsx#StyledTextarea"]={docgenInfo:StyledTextarea.__docgenInfo,name:"StyledTextarea",path:"src/styled/StyledTextarea.tsx#StyledTextarea"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/styled/ToolTip.tsx");const buttonCss=styled_components_browser_esm.iv`
  cursor: pointer;
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${GlobalStyle.Eu});
  background-color: var(${GlobalStyle.w});
  border-radius: 4px;
  height: 16px;
  padding-left: 8px;
  max-width: 128px;
  :active {
    background-color: var(${GlobalStyle.sO});
  }
  :disabled {
    background-color: var(${GlobalStyle.xf});
    color: var(${GlobalStyle.xz});
  }
  font-family: "Ricty Diminished";
`,Button=styled_components_browser_esm.ZP.button`
  ${buttonCss}
`;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/styled/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/getDragHander.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>getDragHander,z:()=>useDragHandler});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useDragHandler(cb,onDown,onUp){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>getDragHander(cb,onDown,onUp)),[cb,onDown,onUp])}function getDragHander(cb,onDown,onUp){return downEvent=>{const pass=onDown?.({startX:0,startY:0,diffX:0,diffY:0,startEvent:downEvent.nativeEvent,event:downEvent.nativeEvent});downEvent.stopPropagation();const startX=downEvent.clientX,startY=downEvent.clientY;let movePass;const handleMouseMove=e=>{const diffX=e.clientX-startX,diffY=e.clientY-startY;movePass=cb({startX,startY,diffX,diffY,startEvent:downEvent.nativeEvent,pass,event:e})},handleMouseUp=e=>{const diffX=e.clientX-startX,diffY=e.clientY-startY;onUp?.({startX,startY,diffX,diffY,startEvent:e,pass,movePass,event:e}),window.removeEventListener("mousemove",handleMouseMove),window.removeEventListener("mouseup",handleMouseUp)};window.addEventListener("mousemove",handleMouseMove),window.addEventListener("mouseup",handleMouseUp)}}}}]);
//# sourceMappingURL=panel-VPanel-mdx.7b286e7b.iframe.bundle.js.map