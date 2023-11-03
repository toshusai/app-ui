"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[724],{"./src/ToolTip/ToolTip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ToolTip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/ToolTip/ToolTip.tsx"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_ToolTip__WEBPACK_IMPORTED_MODULE_0__.e,parameters:{layout:"centered"}},Basic={args:{children:"",content:"ToolTip"},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ToolTip__WEBPACK_IMPORTED_MODULE_0__.e,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.z,{children:"???"})})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "",\n    content: "ToolTip"\n  },\n  render: args => {\n    return <ToolTip {...args}>\n        <Button>???</Button>\n      </ToolTip>;\n  }\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/GlobalStyle/GlobalStyle.tsx");const buttonCss=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
  cursor: pointer;
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.Eu});
  background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.w});
  border-radius: 4px;
  height: 16px;
  padding-left: 8px;
  max-width: 128px;
  :active {
    background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.sO});
  }
  :disabled {
    background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.xf});
    color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.xz});
  }
  font-family: "Ricty Diminished";
`,Button=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.button`
  ${buttonCss}
`;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.z});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Button/Button.tsx")},"./src/ToolTip/ToolTip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ToolTip});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/GlobalStyle/GlobalStyle.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),_useTooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ToolTip/useTooltip.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToolTipDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  position: absolute;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.v5});
  color: var(--color-text);
  font-size: 12px;
  white-space: nowrap;
  z-index: 10000;
  border: 1px solid var(--color-border);
`,TriggerDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  width: fit-content;
`,DELAY=0;function ToolTip({children,content}){const toolTipRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),{isVisible,setIsVisible,position,childRef}=(0,_useTooltip__WEBPACK_IMPORTED_MODULE_4__.l)(toolTipRef),tooltipStyle={top:`${position.top}px`,left:`${position.left}px`};let cancel=0;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>()=>{clearTimeout(cancel)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TriggerDiv,{ref:childRef,onMouseEnter:()=>{clearTimeout(cancel),setIsVisible(!0)},onMouseLeave:e=>{cancel=setTimeout((()=>{setIsVisible(!1)}),DELAY)},children}),isVisible&&react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToolTipDiv,{ref:toolTipRef,style:{...tooltipStyle,opacity:1},onMouseEnter:e=>{clearTimeout(cancel),setIsVisible(!0)},onMouseLeave:e=>{cancel=setTimeout((()=>{setIsVisible(!1)}),DELAY)},children:content}),document.body)]})}try{ToolTip.displayName="ToolTip",ToolTip.__docgenInfo={description:"",displayName:"ToolTip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ToolTip/ToolTip.tsx#ToolTip"]={docgenInfo:ToolTip.__docgenInfo,name:"ToolTip",path:"src/ToolTip/ToolTip.tsx#ToolTip"})}catch(__react_docgen_typescript_loader_error){}},"./src/ToolTip/useTooltip.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>useTooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useTooltip(tooltipRef){const[isVisible,setIsVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[position,setPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({top:0,left:0}),childRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(isVisible&&childRef.current&&tooltipRef.current){const rect=childRef.current.getBoundingClientRect(),toolTipRect=tooltipRef.current.getBoundingClientRect();let top=0,left=0;top=rect.top-toolTipRect.height-4>0?rect.top-toolTipRect.height-4:rect.bottom+4,left=rect.left+toolTipRect.width>window.innerWidth?window.innerWidth-toolTipRect.width:rect.left,setPosition({top,left})}}),[isVisible]),{isVisible,setIsVisible,position,childRef}}}}]);
//# sourceMappingURL=ToolTip-ToolTip-stories.45c4a637.iframe.bundle.js.map