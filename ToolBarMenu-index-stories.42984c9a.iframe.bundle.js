"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[720],{"./src/ToolBarMenu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./src/styled/index.ts");const ToolbarButton=styled_components_browser_esm.ZP.button`
  background-color: var(${styled.v5});
  color: var(--color-text);
  border: 0;
  padding: 2px 8px;
  height: 16px;
  font-size: 12px;
  font-family: "Ricty Diminished";
  cursor: pointer;
  :hover {
    background-color: var(${styled.kI});
  }
`;try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/ToolbarButton.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}const DropdownMenu=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10000;
  top: 16px;
  left: 0;
  background-color: var(${styled.kI});
  border: 1px solid var(${styled.Eu});
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0px 0px 4px 0px var(${styled.v5});
  white-space: nowrap;
`;try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DropdownMenu.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"src/DropdownMenu.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function usePopover(ref,parentRef,show,position1,position2){(0,react.useEffect)((()=>{if(show&&ref.current&&parentRef.current){const rect=parentRef.current.getBoundingClientRect(),tryPositions=[`${position1}-${position2}`];"left"===position1?tryPositions.push(`right-${position2}`):"right"===position1?tryPositions.push(`left-${position2}`):"top"===position1?tryPositions.push(`bottom-${position2}`):"bottom"===position1&&tryPositions.push(`top-${position2}`),"left"===position2?tryPositions.push(`${position1}-right`):"right"===position2?tryPositions.push(`${position1}-left`):"top"===position2?tryPositions.push(`${position1}-bottom`):"bottom"===position2&&tryPositions.push(`${position1}-top`);for(const position of tryPositions){let finalLeft="0",finalTop="0";"bottom-left"===position?(finalLeft=`${rect.left}px`,finalTop=`${rect.bottom}px`):"bottom-right"===position?(finalLeft=rect.right-ref.current.clientWidth+"px",finalTop=`${rect.bottom}px`):"top-left"===position?(finalLeft=`${rect.left}px`,finalTop=rect.top-ref.current.clientHeight+"px"):"top-right"===position?(finalLeft=rect.right-ref.current.clientWidth+"px",finalTop=rect.top-ref.current.clientHeight+"px"):"left-top"===position?(finalLeft=rect.left-ref.current.clientWidth+"px",finalTop=`${rect.top}px`):"left-bottom"===position?(finalLeft=rect.left-ref.current.clientWidth+"px",finalTop=rect.bottom-ref.current.clientHeight+"px"):"right-top"===position?(finalLeft=`${rect.right}px`,finalTop=`${rect.top}px`):"right-bottom"===position&&(finalLeft=`${rect.right}px`,finalTop=rect.bottom-ref.current.clientHeight+"px");let isOverflow=!1;if(finalLeft.startsWith("-")&&(isOverflow=!0,finalLeft="0px"),parseInt(finalLeft)+ref.current.clientWidth>window.innerWidth&&(isOverflow=!0,finalLeft=window.innerWidth-ref.current.clientWidth+"px"),parseInt(finalTop)+ref.current.clientHeight>window.innerHeight&&(isOverflow=!0,finalTop=window.innerHeight-ref.current.clientHeight+"px"),finalTop.startsWith("-")&&(isOverflow=!0,finalTop="0px"),!isOverflow){ref.current.style.left=finalLeft,ref.current.style.top=finalTop;break}}}}),[parentRef,ref,show])}function ToolBarMenu(props){const{showMenu,setShowMenu}=props,ref=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null);return function useKeyboardMenuHandler(ref,showMenu,setShowMenu,buttonRef){(0,react.useEffect)((()=>{if(showMenu){const focusableElements=ref.current?.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select');let index=-1;const handleKeyDown=e=>{if("Escape"===e.key)setShowMenu(!1);else if("Tab"===e.key)setShowMenu(!1),buttonRef.current&&buttonRef.current.focus();else if("ArrowDown"===e.key){if(!focusableElements)return;index++,index>=focusableElements?.length&&(index=0);const focusableElement=focusableElements?.[index];if(!(focusableElement&&focusableElement instanceof HTMLElement))return;focusableElement?.focus()}else if("ArrowUp"===e.key){if(!focusableElements)return;index--,index<0&&(index=focusableElements?.length-1);const focusableElement=focusableElements?.[index];if(!(focusableElement&&focusableElement instanceof HTMLElement))return;focusableElement?.focus()}},handleMouseDown=e=>{if(e.target instanceof HTMLElement){if(ref.current?.contains(e.target))return;if(buttonRef.current?.contains(e.target))return;setShowMenu(!1)}};return window.addEventListener("keydown",handleKeyDown),window.addEventListener("mousedown",handleMouseDown,{capture:!0}),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("mousedown",handleMouseDown)}}}),[buttonRef,ref,setShowMenu,showMenu])}(ref,showMenu,setShowMenu,buttonRef),usePopover(ref,buttonRef,showMenu,"bottom","left"),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ToolbarButton,{ref:buttonRef,onClick:()=>{setShowMenu(!showMenu)},children:props.title}),showMenu&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(DropdownMenu,{ref,children:props.children}),document.body)]})}try{ToolBarMenu.displayName="ToolBarMenu",ToolBarMenu.__docgenInfo={description:"",displayName:"ToolBarMenu",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},showMenu:{defaultValue:null,description:"",name:"showMenu",required:!0,type:{name:"boolean"}},setShowMenu:{defaultValue:null,description:"",name:"setShowMenu",required:!0,type:{name:"(showMenu: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ToolBarMenu/index.tsx#ToolBarMenu"]={docgenInfo:ToolBarMenu.__docgenInfo,name:"ToolBarMenu",path:"src/ToolBarMenu/index.tsx#ToolBarMenu"})}catch(__react_docgen_typescript_loader_error){}var iconProps=__webpack_require__("./src/iconProps.tsx");function MenuItemBase(props){return(0,jsx_runtime.jsxs)(Root,{children:[(0,jsx_runtime.jsxs)(Flex,{children:[props.leftIcon&&props.leftIcon({...iconProps.U,style:{...iconProps.U.style,margin:""}}),(0,jsx_runtime.jsx)(MenuItemWrapper,{$hasLeftIcon:void 0!==props.leftIcon,children:props.text})]}),props.children]})}MenuItemBase.displayName="MenuItemBase";const Root=styled_components_browser_esm.ZP.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Flex=styled_components_browser_esm.ZP.div`
  display: flex;
  gap: 2px;
`,MenuItemWrapper=styled_components_browser_esm.ZP.div`
  padding-left: ${props=>props.$hasLeftIcon?0:12}px;
  padding-right: 8px;
`;try{MenuItemBase.displayName="MenuItemBase",MenuItemBase.__docgenInfo={description:"",displayName:"MenuItemBase",props:{leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"FC<IconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Menu/MenuItemBase.tsx#MenuItemBase"]={docgenInfo:MenuItemBase.__docgenInfo,name:"MenuItemBase",path:"src/Menu/MenuItemBase.tsx#MenuItemBase"})}catch(__react_docgen_typescript_loader_error){}const MenuItemShortcut=styled_components_browser_esm.ZP.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  white-space: nowrap;
  justify-content: space-between;
  padding-right: 12px;
`;function MenuItem(props){return(0,jsx_runtime.jsx)(MenuItemBase,{text:props.text,leftIcon:props.leftIcon,children:(0,jsx_runtime.jsx)(MenuItemShortcut,{children:props.shortcut})})}MenuItem.displayName="MenuItem";try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"FC<IconProps>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},shortcut:{defaultValue:null,description:"",name:"shortcut",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Menu/MenuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/Menu/MenuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}var _rollupPluginBabelHelpers=__webpack_require__("./node_modules/tabler-icons-react/dist/_virtual/_rollupPluginBabelHelpers.js"),_excluded=["size","color"];function ArrowRight(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,restProps=(0,_rollupPluginBabelHelpers.Kd)(_ref,_excluded);return react.createElement("svg",(0,_rollupPluginBabelHelpers.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-right",width:size,height:size,viewBox:"0 0 24 24",stroke:color,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},restProps),react.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),react.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),react.createElement("line",{x1:"13",y1:"18",x2:"19",y2:"12"}),react.createElement("line",{x1:"13",y1:"6",x2:"19",y2:"12"}))}const StyledDiv=styled_components_browser_esm.ZP.div.attrs((p=>({style:{left:p.x+"px",top:p.y+"px"}})))`
  position: fixed;
  background-color: var(${styled.v5});
  border: 1px solid var(${styled.Eu});
  color: var(--color-text);
  font-size: 12px;
  line-height: 12px;
  border-radius: 4px;
  padding: 4px 4px;
  z-index: 10000;
`,ContextMenu=props=>{const ref=useRef(null);if(!props.show)return null;const mouseDown=e=>{ref.current?.contains(e.target)||(props.onClose(),window.removeEventListener("mousedown",mouseDown))};return window.addEventListener("mousedown",mouseDown),_jsxs(_Fragment,{children:[_jsx(Overlay,{}),_jsx(StyledDiv,{x:props.e?.pageX??0,y:props.e?.pageY||0,ref,children:props.children})]})},Overlay=styled_components_browser_esm.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
`;try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:"",displayName:"ContextMenu",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},e:{defaultValue:null,description:"",name:"e",required:!1,type:{name:"MouseEvent<HTMLDivElement, MouseEvent>"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context_menu/ContextMenu.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"src/context_menu/ContextMenu.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}const StyledContextMenuButton=styled_components_browser_esm.ZP.button`
  border: none;
  background: transparent;
  margin: 0;
  display: flex;
  font-family: "Ricty Diminished";
  color: var(--color-text);
  font-size: 12px;
  line-height: 14px;
  height: 16px;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 2px;
  :hover {
    background-color: var(--color-primary);
    color: white;
  }
  :focus-visible {
    background-color: var(--color-primary);
  }
`;try{StyledContextMenuButton.displayName="StyledContextMenuButton",StyledContextMenuButton.__docgenInfo={description:"",displayName:"StyledContextMenuButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/context_menu/StyledContextMenuButton.tsx#StyledContextMenuButton"]={docgenInfo:StyledContextMenuButton.__docgenInfo,name:"StyledContextMenuButton",path:"src/context_menu/StyledContextMenuButton.tsx#StyledContextMenuButton"})}catch(__react_docgen_typescript_loader_error){}function MenuWithClildren(props){const{showMenu,setShowMenu}=props,_id=(0,react.useRef)(null),onMouseEnter=(0,react.useCallback)((()=>{setShowMenu(!0),null!=_id.current&&(clearTimeout(_id.current),_id.current=null)}),[]),onMouseLeave=(0,react.useCallback)((()=>{_id.current=setTimeout((()=>{setShowMenu(!1),_id.current=null}),100)}),[setShowMenu]),ref=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null);!function MenuWithClildren_useKeyboardMenuHandler(ref,showMenu,setShowMenu,buttonRef){(0,react.useEffect)((()=>{if(showMenu){const focusableElements=getFocusableElements(ref.current);let index=-1;const handleKeyDown=e=>{if("Escape"===e.key)setShowMenu(!1);else if("Tab"===e.key)setShowMenu(!1);else if("ArrowDown"===e.key){if(!focusableElements)return;index++,index>=focusableElements?.length&&(index=0);const focusableElement=focusableElements?.[index];if(!(focusableElement&&focusableElement instanceof HTMLElement))return;focusableElement?.focus()}else if("ArrowUp"===e.key){if(!focusableElements)return;index--,index<0&&(index=focusableElements?.length-1);const focusableElement=focusableElements?.[index];if(!(focusableElement&&focusableElement instanceof HTMLElement))return;focusableElement?.focus()}else"ArrowLeft"===e.key&&(setShowMenu(!1),buttonRef?.current?.focus())},handleMouseDown=e=>{if(e.target instanceof HTMLElement){if(ref.current?.contains(e.target))return;setShowMenu(!1)}};return window.addEventListener("keydown",handleKeyDown),window.addEventListener("mousedown",handleMouseDown,{capture:!0}),()=>{window.removeEventListener("keydown",handleKeyDown),window.removeEventListener("mousedown",handleMouseDown)}}}),[buttonRef,ref,setShowMenu,showMenu])}(ref,showMenu,setShowMenu,buttonRef),usePopover(ref,buttonRef,showMenu,"right","top");const handleKeyDown=(0,react.useCallback)((e=>{"ArrowRight"===e.key&&(setShowMenu(!0),function tryRepeatUntilSuccess(func,interval,timeout){const startTime=Date.now(),id=setInterval((()=>{if(Date.now()-startTime>timeout)clearInterval(id);else try{func(),clearInterval(id)}catch(e){console.error(e)}}),interval)}((()=>{if(!ref.current)throw new Error("ref.current is null");const focusableElements=getFocusableElements(ref.current);if(!focusableElements)throw new Error("no focusable");const focusableElement=focusableElements?.[0];if(!(focusableElement&&focusableElement instanceof HTMLElement))throw new Error("no focusable");focusableElement?.focus()}),10,1e3))}),[ref,setShowMenu]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(StyledContextMenuButton,{ref:buttonRef,style:{display:"flex",position:"relative",whiteSpace:"nowrap"},onMouseEnter,onMouseLeave,onClick:onMouseEnter,onKeyDown:handleKeyDown,children:[(0,jsx_runtime.jsx)(MenuItemBase,{text:props.title,leftIcon:props.leftIcon,children:(0,jsx_runtime.jsx)(ArrowRight,{...iconProps.U,color:"rgba(255, 255, 255, 0.5)",style:{...iconProps.U.style,marginRight:"",marginLeft:"auto"}})}),(0,jsx_runtime.jsx)("div",{style:{width:"5px",position:"absolute",right:"-5px",height:"100%"}})]}),showMenu&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(DropdownMenu,{onMouseEnter,onMouseLeave,ref,style:{position:"absolute"},children:props.children}),document.body)]})}function getFocusableElements(element){return element.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')}try{MenuWithClildren.displayName="MenuWithClildren",MenuWithClildren.__docgenInfo={description:"",displayName:"MenuWithClildren",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"FC<IconProps>"}},showMenu:{defaultValue:null,description:"",name:"showMenu",required:!0,type:{name:"boolean"}},setShowMenu:{defaultValue:null,description:"",name:"setShowMenu",required:!0,type:{name:"(showMenu: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Menu/MenuWithClildren.tsx#MenuWithClildren"]={docgenInfo:MenuWithClildren.__docgenInfo,name:"MenuWithClildren",path:"src/Menu/MenuWithClildren.tsx#MenuWithClildren"})}catch(__react_docgen_typescript_loader_error){}const index_stories={component:ToolBarMenu,argTypes:{}},Primary={args:{showMenu:!1,title:"Menu"},render:()=>{const[showMenu,setShowMenu]=(0,react.useState)(!1),[showMenu2,setShowMenu2]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)("div",{style:{position:"absolute"},children:(0,jsx_runtime.jsxs)(ToolBarMenu,{title:"Menu",setShowMenu,showMenu,children:[(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 1"})}),(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 2"})}),(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 3"})}),(0,jsx_runtime.jsxs)(MenuWithClildren,{title:"Item 4",setShowMenu:setShowMenu2,showMenu:showMenu2,children:[(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 1"})}),(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 2"})}),(0,jsx_runtime.jsx)(StyledContextMenuButton,{children:(0,jsx_runtime.jsx)(MenuItem,{text:"Item 3"})})]})]})})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    showMenu: false,\n    title: "Menu"\n  },\n  render: () => {\n    const [showMenu, setShowMenu] = useState(false);\n    const [showMenu2, setShowMenu2] = useState(false);\n    return <div style={{\n      position: "absolute"\n    }}>\n        <ToolBarMenu title="Menu" setShowMenu={setShowMenu} showMenu={showMenu}>\n          <StyledContextMenuButton>\n            <MenuItem text="Item 1" />\n          </StyledContextMenuButton>\n          <StyledContextMenuButton>\n            <MenuItem text="Item 2" />\n          </StyledContextMenuButton>\n          <StyledContextMenuButton>\n            <MenuItem text="Item 3" />\n          </StyledContextMenuButton>\n\n          <MenuWithClildren title="Item 4" setShowMenu={setShowMenu2} showMenu={showMenu2}>\n            <StyledContextMenuButton>\n              <MenuItem text="Item 1" />\n            </StyledContextMenuButton>\n            <StyledContextMenuButton>\n              <MenuItem text="Item 2" />\n            </StyledContextMenuButton>\n            <StyledContextMenuButton>\n              <MenuItem text="Item 3" />\n            </StyledContextMenuButton>\n          </MenuWithClildren>\n        </ToolBarMenu>\n      </div>;\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/iconProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>iconProps});const iconProps={style:{margin:"auto"},strokeWidth:2,color:"white",size:12}},"./src/styled/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>IconButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ToolTip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/ToolTip.tsx"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styled/GlobalStyle.tsx");const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
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
`;try{ToolTip.displayName="ToolTip",ToolTip.__docgenInfo={description:"",displayName:"ToolTip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/ToolTip.tsx#ToolTip"]={docgenInfo:ToolTip.__docgenInfo,name:"ToolTip",path:"src/styled/ToolTip.tsx#ToolTip"})}catch(__react_docgen_typescript_loader_error){}try{BottomToolTip.displayName="BottomToolTip",BottomToolTip.__docgenInfo={description:"",displayName:"BottomToolTip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/ToolTip.tsx#BottomToolTip"]={docgenInfo:BottomToolTip.__docgenInfo,name:"BottomToolTip",path:"src/styled/ToolTip.tsx#BottomToolTip"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v5:()=>GlobalStyle.v5,kI:()=>GlobalStyle.kI,Eu:()=>GlobalStyle.Eu,Ao:()=>GlobalStyle.Ao,KA:()=>GlobalStyle.KA});var GlobalStyle=__webpack_require__("./src/styled/GlobalStyle.tsx"),styled_components_browser_esm=(__webpack_require__("./src/styled/IconButton.tsx"),__webpack_require__("./src/styled/SelectRect.tsx"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const StyledCheckbox=styled_components_browser_esm.ZP.input`
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
//# sourceMappingURL=ToolBarMenu-index-stories.42984c9a.iframe.bundle.js.map