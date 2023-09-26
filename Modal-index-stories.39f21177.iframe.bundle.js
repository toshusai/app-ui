"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[898],{"./src/Modal/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),_rollupPluginBabelHelpers=__webpack_require__("./node_modules/tabler-icons-react/dist/_virtual/_rollupPluginBabelHelpers.js"),_excluded=["size","color"];function X(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,restProps=(0,_rollupPluginBabelHelpers.Kd)(_ref,_excluded);return react.createElement("svg",(0,_rollupPluginBabelHelpers.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-x",width:size,height:size,viewBox:"0 0 24 24",stroke:color,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},restProps),react.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),react.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),react.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),IconButton=__webpack_require__("./src/styled/IconButton.tsx");const TransparentIconButton=(0,styled_components_browser_esm.ZP)(IconButton.e)`
  // FIXME: can not override without important
  background: transparent !important;
  // FIXME: can not override without important
  border: 1px solid transparent !important;
`;try{TransparentIconButton.displayName="TransparentIconButton",TransparentIconButton.__docgenInfo={description:"",displayName:"TransparentIconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TransparentIconButton.tsx#TransparentIconButton"]={docgenInfo:TransparentIconButton.__docgenInfo,name:"TransparentIconButton",path:"src/TransparentIconButton.tsx#TransparentIconButton"})}catch(__react_docgen_typescript_loader_error){}var iconProps=__webpack_require__("./src/iconProps.tsx"),styled=__webpack_require__("./src/styled/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalBody=props=>(0,jsx_runtime.jsxs)(Root,{children:[(0,jsx_runtime.jsx)(CloseButton,{children:(0,jsx_runtime.jsx)(TransparentIconButton,{onClick:props.onClose,children:(0,jsx_runtime.jsx)(X,{...iconProps.U})})}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)("div",{children:props.title})}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",paddingTop:"4px"},children:props.children})]});ModalBody.displayName="ModalBody";const CloseButton=styled_components_browser_esm.ZP.div`
  position: absolute;
  right: 0;
  top: 0;
`,Root=styled_components_browser_esm.ZP.div`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  background-color: var(${styled.kI});
  position: relative;
  height: min-content;
  width: min-content;
  padding: 8px;
`;try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Modal/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/Modal/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}const Modal=({isOpen,onClose,children,title,canOutsideClickClose})=>{const ref=(0,react.useRef)(null);!function useFocusTrap(elementRef,isOpen,onClose){(0,react.useEffect)((()=>{const element=elementRef.current;if(!element)return;const focusableElements=element.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'),firstFocusable=focusableElements[0],secondFocusable=focusableElements[1],lastFocusable=focusableElements[focusableElements.length-1],handleKeyDown=event=>{"Tab"===event.key?event.shiftKey?document.activeElement===firstFocusable&&(event.preventDefault(),lastFocusable instanceof HTMLElement&&lastFocusable.focus()):document.activeElement===lastFocusable&&(event.preventDefault(),firstFocusable instanceof HTMLElement&&firstFocusable.focus()):"Escape"===event.key&&isOpen&&(event.preventDefault(),onClose?.())};return secondFocusable instanceof HTMLElement&&secondFocusable.focus(),window.addEventListener("keydown",handleKeyDown),()=>{window.removeEventListener("keydown",handleKeyDown)}}),[elementRef,isOpen,onClose])}(ref,isOpen,onClose);const handleOutsideClick=(0,react.useCallback)((event=>{canOutsideClickClose&&onClose()}),[canOutsideClickClose,onClose]);return isOpen?(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{ref,style:{backgroundColor:"rgba(0, 0, 0, 0.2)",position:"absolute",top:0,left:0,width:"100vw",height:"100vh",zIndex:100,justifyContent:"center",alignItems:"center",display:"flex"},onClick:handleOutsideClick,children:(0,jsx_runtime.jsx)(ModalBody,{onClose,title,children})}),document.body):null};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},canEscapeKeyClose:{defaultValue:null,description:"",name:"canEscapeKeyClose",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},canOutsideClickClose:{defaultValue:null,description:"",name:"canOutsideClickClose",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const index_stories={component:Modal,argTypes:{}},Primary={args:{isOpen:!1,canEscapeKeyClose:!0,title:"Modal"},render:()=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(styled.zx,{onClick:()=>setIsOpen(!0),children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal,{isOpen,onClose:()=>setIsOpen(!1),title:"Title",children:(0,jsx_runtime.jsx)("input",{type:"text"})})]})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    isOpen: false,\n    canEscapeKeyClose: true,\n    title: "Modal"\n  },\n  render: () => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <div>\n        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">\n          <input type="text" />\n        </Modal>\n      </div>;\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/iconProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>iconProps});const iconProps={style:{margin:"auto"},strokeWidth:2,color:"white",size:12}},"./src/styled/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>IconButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ToolTip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/ToolTip.tsx"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styled/GlobalStyle.tsx");const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
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
`;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/styled/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/tabler-icons-react/dist/_virtual/_rollupPluginBabelHelpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Kd:()=>_objectWithoutProperties,gY:()=>_extends})}}]);
//# sourceMappingURL=Modal-index-stories.39f21177.iframe.bundle.js.map