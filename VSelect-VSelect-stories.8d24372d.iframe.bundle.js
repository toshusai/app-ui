"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[919],{"./src/VSelect/VSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _VSelect__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/VSelect/VSelect.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_VSelect__WEBPACK_IMPORTED_MODULE_0__.r},Basic={args:{items:[...Array(10).keys()].map((i=>({value:`${i}`,label:`Item ${i}`}))),value:"0"},render:args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_VSelect__WEBPACK_IMPORTED_MODULE_0__.r,{...args,value,onChange:e=>setValue(e)})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: [...Array(10).keys()].map(i => ({\n      value: `${i}`,\n      label: `Item ${i}`\n    })),\n    value: "0"\n  },\n  render: args => {\n    const [value, setValue] = useState(args.value);\n    return <VSelect {...args} value={value} onChange={e => setValue(e)} />;\n  }\n}',...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/GlobalStyle/GlobalStyle.tsx");const Select=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.select`
  display: block;
  color: var(--color-text);
  box-sizing: border-box;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  border: 1px solid var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.Eu});
  background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.Il});
  border-radius: 8px;
  height: 16px;
  padding-left: 8px;
  caret-color: red;
  max-width: 128px;
  width: 128px;

  :focus {
    outline: none;
    border-radius: 8px;
    background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.sO});
  }
  :disabled {
    background-color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.xf});
    color: var(${_GlobalStyle_GlobalStyle__WEBPACK_IMPORTED_MODULE_0__.xz});
  }
  font-family: "Ricty Diminished";
`;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSelectElement | null) => void) | RefObject<HTMLSelectElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/VSelect/VSelect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>VSelect});var _Select_Select__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Select/Select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function VSelect(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Select_Select__WEBPACK_IMPORTED_MODULE_0__.P,{value:props.value,onChange:e=>{props.onChange(e.target.value)},disabled:props.disabled,children:props.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:item.value,disabled:item.disabled,children:item.label},item.value)))})}VSelect.displayName="VSelect";try{VSelect.displayName="VSelect",VSelect.__docgenInfo={description:"",displayName:"VSelect",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/VSelect/VSelect.tsx#VSelect"]={docgenInfo:VSelect.__docgenInfo,name:"VSelect",path:"src/VSelect/VSelect.tsx#VSelect"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=VSelect-VSelect-stories.8d24372d.iframe.bundle.js.map