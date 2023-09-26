"use strict";(self.webpackChunk_toshusai_app_ui=self.webpackChunk_toshusai_app_ui||[]).push([[549,51],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/TreeView/EditableTree.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_app_ui_app_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_EditableTree_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/TreeView/EditableTree.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_home_runner_work_app_ui_app_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_EditableTree_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"editabletree",children:"EditableTree"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A tree component that allows you to edit the tree structure."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sortable",children:"Sortable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_EditableTree_stories__WEBPACK_IMPORTED_MODULE_2__.Sortable}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_app_ui_app_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/TreeView/EditableTree.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{$Select2ItemsAndDaDToDir:()=>$Select2ItemsAndDaDToDir,Basic:()=>Basic,Sortable:()=>Sortable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EditableTree_stories});var react=__webpack_require__("./node_modules/react/index.js");class KeyboardInput{static map=new Map;static isInitialized=!1;static init(cb){"undefined"!=typeof document&&(KeyboardInput.isInitialized||(document.addEventListener("keydown",KeyboardInput.onKeyDown),document.addEventListener("keyup",KeyboardInput.onKeyUp),cb()))}static listners=new Map;static id=0;static addKeyDownListener(key,listener){const[id,f]=KeyboardInput.getIdAndHandler(key,listener);return document.addEventListener("keydown",f),id}static getIdAndHandler(key,listener){const id=key+KeyboardInput.id++;return[id,e=>{e.key.toLowerCase()===key.toLowerCase()&&(listener(e),KeyboardInput.listners.has(id)||KeyboardInput.listners.set(id,[]),KeyboardInput.listners.get(id)?.push(listener))}]}static addKeyUpListener(key,listener){const[id,f]=KeyboardInput.getIdAndHandler(key,listener);return document.addEventListener("keyup",f),id}static removeKeyDownListener(id){const listeners=KeyboardInput.listners.get(id);listeners&&listeners.forEach((listener=>{document.removeEventListener("keydown",listener)}))}static onKeyDown(e){KeyboardInput.map.set(e.key,!0)}static onKeyUp(e){KeyboardInput.map.set(e.key,!1)}static isPressed(key){return KeyboardInput.map.get(key)||!1}}let Key=function(Key){return Key.ArrowLeft="ArrowLeft",Key.ArrowRight="ArrowRight",Key.ArrowUp="ArrowUp",Key.ArrowDown="ArrowDown",Key.Space=" ",Key.Shift="Shift",Key.Control="Control",Key.Alt="Alt",Key.Meta="Meta",Key.Backspace="Backspace",Key.Delete="Delete",Key.Enter="Enter",Key.Escape="Escape",Key.Tab="Tab",Key.Home="Home",Key.End="End",Key.PageUp="PageUp",Key.PageDown="PageDown",Key.Digit0="0",Key.Digit1="1",Key.Digit2="2",Key.Digit3="3",Key.Digit4="4",Key.Digit5="5",Key.Digit6="6",Key.Digit7="7",Key.Digit8="8",Key.Digit9="9",Key.KeyA="a",Key.KeyS="s",Key.KeyZ="z",Key}({});var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("./src/utils/index.ts"),TreeView=__webpack_require__("./src/TreeView/TreeView.tsx");let PosType=function(PosType){return PosType[PosType.Top=0]="Top",PosType[PosType.Bottom=1]="Bottom",PosType[PosType.Middle=2]="Middle",PosType}({});var SelectedItemsContext=__webpack_require__("./src/TreeView/SelectedItemsContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function EditableTree(props){const lineRef=react.useRef(null),[selectedItems,setSelectedItems]=(0,react.useState)([]),[pos,setPos]=(0,react.useState)(null),[dragging,setDragging]=(0,react.useState)(!1);(0,react.useEffect)((()=>{props.onChangeSelection?.(selectedItems)}),[selectedItems]);const handleMouseDown=(0,utils.zF)((ctx=>{setDragging(!0);const e=ctx.event;e.preventDefault();const tx=e.clientX,ty=e.clientY;dragRef.current&&(dragRef.current.style.top=ty-12+"px",dragRef.current.style.left=tx+"px")}),void 0,(()=>{setDragging(!1)})),handleMouseDownMemo=react.useCallback(((item,e)=>{handleMouseDown(e),KeyboardInput.isPressed(Key.Shift)?setSelectedItems((items=>[...items??[],item])):selectedItems.find((i=>i.id===item.id))||setSelectedItems([item])}),[handleMouseDown,selectedItems]),handleMouseMove=react.useCallback(((item,e)=>{if(dragging){const posType=void 0===item.children?function checkPosType2(e){if(e.target instanceof HTMLElement){const rect=e.target.getBoundingClientRect();return e.clientY-rect.top<rect.height/2?PosType.Top:PosType.Bottom}console.error("currentTarget is not HTMLElement",e.target)}(e.nativeEvent):function checkPosType(e){if(e.target instanceof HTMLElement){const rect=e.target.getBoundingClientRect(),y=e.clientY-rect.top,height=rect.height;return y<height/3?PosType.Top:y>2*height/3?PosType.Bottom:PosType.Middle}console.error("currentTarget is not HTMLElement",e.target)}(e.nativeEvent),target=e.target;if("BUTTON"===target.tagName)return;if(!ref.current?.contains(target))return;if(!props.sortable&&posType===PosType.Top)return;if(!props.sortable&&posType===PosType.Bottom)return;let top=0;if(posType===PosType.Top&&(top=target.offsetTop),posType===PosType.Bottom&&(top=target.offsetTop+target.offsetHeight),posType===PosType.Middle&&(top=target.offsetTop+target.offsetHeight/2-6),void 0!==posType&&setPos(posType),lineRef.current){lineRef.current.style.top=top+"px";const pd=getComputedStyle(target).getPropertyValue("padding-left"),left=parseInt(pd.substring(0,pd.length-2));lineRef.current.style.marginLeft=left+"px",lineRef.current.style.width=target.clientWidth-left+"px",lineRef.current.style.visibility="visible"}}}),[dragging]),handleMouseUpMemo=react.useCallback(((item,e)=>{dragging?selectedItems.forEach((i=>{props.onOrderChange?.(i,item,pos??PosType.Middle)})):KeyboardInput.isPressed(Key.Shift)||setSelectedItems([item]),setDragging(!1),setPos(null),lineRef.current?.style.setProperty("visibility","hidden")}),[dragging,selectedItems,props,pos]),handleMouseLeave=react.useCallback((()=>{setPos(null),lineRef.current?.style.setProperty("visibility","hidden")}),[]),handleMouseEnter=react.useCallback((()=>{setPos(null),dragging&&lineRef.current?.style.setProperty("visibility","visible")}),[dragging]),memoTreeView=react.useMemo((()=>(0,jsx_runtime.jsx)(TreeView.L,{items:props.items,depth:props.depth,renderItem:item=>props.renderItem(item),onMouseMove:handleMouseMove,onMouseDown:handleMouseDownMemo,onMouseUp:handleMouseUpMemo})),[props,handleMouseMove,handleMouseDownMemo,handleMouseUpMemo,selectedItems]),ref=react.useRef(null),dragRef=react.useRef(null);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SelectedItemsContext._.Provider,{value:selectedItems,children:[(0,jsx_runtime.jsxs)(EditableTreeRoot,{ref,onMouseLeave:handleMouseLeave,onMouseEnter:handleMouseEnter,children:[(0,jsx_runtime.jsx)(InsertionLine,{pos:pos??void 0,ref:lineRef}),memoTreeView]}),dragging&&react_dom.createPortal((0,jsx_runtime.jsxs)(DragDiv,{ref:dragRef,children:[props.renderItem(selectedItems[0]),(0,jsx_runtime.jsx)("div",{children:selectedItems.length>1&&"+"+(selectedItems.length-1)})]}),document.body)]})})}const DragDiv=styled_components_browser_esm.ZP.div`
  position: absolute;
  display: flex;
  gap: 8px;
  z-index: 1000;
  pointer-events: none;
  top: -9999px;
`,InsertionLine=styled_components_browser_esm.ZP.div`
  display: flex;
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: ${props=>props.pos===PosType.Middle?"12px":"1px"};
  background-color: ${props=>props.pos===PosType.Middle?"transparent":"var(--color-primary)"};
  border: ${props=>props.pos===PosType.Middle?"1px dashed var(--color-primary)":"none"};
  z-index: 1000;
  pointer-events: none;
  transform: translateY(-1px);
`,EditableTreeRoot=styled_components_browser_esm.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;try{EditableTree.displayName="EditableTree",EditableTree.__docgenInfo={description:"",displayName:"EditableTree",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"T[]"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: T) => ReactNode"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},onOrderChange:{defaultValue:null,description:"",name:"onOrderChange",required:!1,type:{name:"((start: T, end: T, pos: PosType) => void)"}},onChangeSelection:{defaultValue:null,description:"",name:"onChangeSelection",required:!1,type:{name:"((items: T[]) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((item: T) => void)"}},sortable:{defaultValue:null,description:"",name:"sortable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/EditableTree.tsx#EditableTree"]={docgenInfo:EditableTree.__docgenInfo,name:"EditableTree",path:"src/TreeView/EditableTree.tsx#EditableTree"})}catch(__react_docgen_typescript_loader_error){}function findItem(items,id){for(const item of items){if(item.id===id)return item;if(item.children){const found=findItem(item.children,id);if(found)return found}}return null}function insertNextSibling(items,id,newItem){const newItems=[];for(const item of items)item.id!==id?(item.children&&(item.children=insertNextSibling(item.children,id,newItem)),newItems.push(item)):(newItems.push(item),newItems.push(newItem));return newItems}function insertPrevSibling(items,id,newItem){const newItems=[];for(const item of items)item.id!==id?(item.children&&(item.children=insertPrevSibling(item.children,id,newItem)),newItems.push(item)):(newItems.push(newItem),newItems.push(item));return newItems}function pushItem(items,parentId,addItem){return items.map((item=>(item.id===parentId?item.children&&item.children.push(addItem):item.children&&(item.children=pushItem(item.children,parentId,addItem)),item)))}function removeItem(items,id){const newItems=[];for(const item of items)item.id!==id&&(item.children&&(item.children=removeItem(item.children,id)),newItems.push(item));return newItems}function useTreeItems(items){const[itemsState,setItems]=(0,react.useState)(items),handleOrderChange=(0,react.useCallback)(((sourceItem,targetItem,pos)=>{setItems((items=>{if(!items)return;let newItems=JSON.parse(JSON.stringify(items));const parent=findItem(newItems,sourceItem.id);return parent&&findItem([parent],targetItem.id)||(pos===PosType.Middle?void 0!==targetItem.children&&(newItems=removeItem(newItems,sourceItem.id),newItems=pushItem(newItems,targetItem.id,sourceItem)):pos===PosType.Bottom?(newItems=removeItem(newItems,sourceItem.id),newItems=insertNextSibling(newItems,targetItem.id,sourceItem)):pos===PosType.Top&&(newItems=removeItem(newItems,sourceItem.id),newItems=insertPrevSibling(newItems,targetItem.id,sourceItem))),newItems}))}),[]);return[itemsState,handleOrderChange]}async function wait(ms){await new Promise((resolve=>setTimeout(resolve,ms)))}class DummyClick{static makeRippleBase(){const ripple=document.createElement("div");return ripple.style.position="absolute",ripple.style.width="8px",ripple.style.height="8px",ripple.style.zIndex="100000",ripple.style.borderRadius="50%",ripple.style.pointerEvents="none",ripple.style.transform="translate(-50%, -50%)",ripple.style.opacity="1",ripple.style.transition="0.4s ease-out",ripple}static async makeRippleDom(x,y,color){const ripple=DummyClick.makeRippleBase();ripple.style.backgroundColor=color??"#ff4242",ripple.style.top=`${y}px`,ripple.style.left=`${x}px`,document.body.appendChild(ripple),await wait(1),ripple.style.width="32px",ripple.style.height="32px",ripple.style.opacity="0",setTimeout((()=>{document.body.removeChild(ripple)}),400)}constructor(){this.el=document.createElement("div"),this.el.style.position="absolute",this.el.style.top="0",this.el.style.left="0",this.el.style.width="4px",this.el.style.height="4px",this.el.style.backgroundColor="#ffffff",this.el.style.border="1px solid #000000",this.el.style.boxShadow="0px 0px 4px 0px #000000",this.el.style.zIndex="100000",this.el.style.borderRadius="50%",this.el.style.pointerEvents="none",this.el.style.transform="translate(-50%, -50%)",this.el.style.visibility="hidden",document.body.appendChild(this.el)}async down(el){await wait(10),this.el.style.visibility="visible";const rect=el.getBoundingClientRect(),cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;return this.el.style.left=`${cx}px`,this.el.style.top=`${cy}px`,el.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,clientX:cx,clientY:cy})),await DummyClick.makeRippleDom(cx,cy),{x:cx,y:cy}}async move(sx,sy,dx,dy,ms){this.el.style.visibility="visible";const length=Math.sqrt((dx-sx)**2+(dy-sy)**2),stepTime=ms/length;for(let i=0;i<length;i++){await wait(stepTime);const x=sx+(dx-sx)/length*i,y=sy+(dy-sy)/length*i;this.el.style.left=`${x}px`,this.el.style.top=`${y}px`;const el=document.elementFromPoint(x,y);el&&el.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,clientX:x,clientY:y}))}}async up(el){this.el.style.visibility="visible";const rect=el.getBoundingClientRect(),cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;this.el.style.left=`${cx}px`,this.el.style.top=`${cy}px`,el.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,clientX:cx,clientY:cy})),await DummyClick.makeRippleDom(cx,cy,"#54ff54")}async upFromPos(x,y){this.el.style.visibility="visible",await wait(10),this.el.style.left=`${x}px`,this.el.style.top=`${y}px`;const el=document.elementFromPoint(x,y);el&&(el.dispatchEvent(new MouseEvent("mouseup",{bubbles:!0,clientX:x,clientY:y})),await DummyClick.makeRippleDom(x,y,"#54ff54"))}destory(){document.body.removeChild(this.el)}}const EditableTree_stories={component:EditableTree,args:{items:[],renderItem:item=>(0,jsx_runtime.jsx)("div",{style:{},children:item.data.name})}},items=[{id:"root",data:{name:"root"},children:[{id:"item-1",data:{name:"item-1"}},{id:"item-2",data:{name:"item-2"}},{id:"dir-2",data:{name:"dir-2"},children:[{id:"item-3",data:{name:"item-3"}},{id:"item-4",data:{name:"item-4"}}]},{id:"dir-1",children:[],data:{name:"dir-1"}}]}],Basic={args:{items},render:props=>{(0,react.useEffect)((()=>{KeyboardInput.init((()=>{}))}),[]);const[items,handleOrderChange]=useTreeItems(props.items);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(EditableTree,{onOrderChange:handleOrderChange,items,renderItem:item=>(0,jsx_runtime.jsx)("div",{style:{},children:item.data.name}),onClick:item=>{}})})}},Sortable={args:{items},render:props=>{(0,react.useEffect)((()=>{KeyboardInput.init((()=>{}))}),[]);const[items,handleOrderChange]=useTreeItems(props.items);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(EditableTree,{sortable:!0,onOrderChange:handleOrderChange,items,renderItem:item=>(0,jsx_runtime.jsx)("div",{style:{},children:item.data.name}),onClick:item=>{}})})}},$Select2ItemsAndDaDToDir={args:{items},play:async()=>{await new Promise((resolve=>setTimeout(resolve,1e3)));const mouse=new DummyClick,lis=document.querySelectorAll("li");for(let i=0;i<lis.length;i++){const el=lis[i];if("item-1"===el.textContent&&(await mouse.down(el),await mouse.up(el)),document.dispatchEvent(new KeyboardEvent("keydown",{key:"Shift"})),await wait(100),"item-3"===el.textContent){const p=await mouse.down(el);document.dispatchEvent(new KeyboardEvent("keyup",{key:"Shift"})),await wait(100),await mouse.move(p.x,p.y,p.x,p.y+24,1e3),await mouse.upFromPos(p.x,p.y+24)}}mouse.destory()},render:props=>{(0,react.useEffect)((()=>{KeyboardInput.init((()=>{}))}),[]);const[items,handleOrderChange]=useTreeItems(props.items);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(EditableTree,{onOrderChange:handleOrderChange,items,renderItem:item=>(0,jsx_runtime.jsx)("div",{style:{},children:item.data.name}),onClick:item=>{}})})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    items\n  },\n  render: props => {\n    useEffect(() => {\n      KeyboardInput.init(() => {});\n    }, []);\n    const [items, handleOrderChange] = useTreeItems<Data>((props.items as TreeViewItem<Data>[]));\n    return <>\n        <EditableTree<Data, Item> onOrderChange={handleOrderChange} items={(items as Item[])} renderItem={item => {\n        return <div style={{}}>{item.data.name}</div>;\n      }} onClick={item => {}} />\n      </>;\n  }\n}",...Basic.parameters?.docs?.source}}},Sortable.parameters={...Sortable.parameters,docs:{...Sortable.parameters?.docs,source:{originalSource:"{\n  args: {\n    items\n  },\n  render: props => {\n    useEffect(() => {\n      KeyboardInput.init(() => {});\n    }, []);\n    const [items, handleOrderChange] = useTreeItems<Data>((props.items as TreeViewItem<Data>[]));\n    return <>\n        <EditableTree<Data, Item> sortable onOrderChange={handleOrderChange} items={(items as Item[])} renderItem={item => {\n        return <div style={{}}>{item.data.name}</div>;\n      }} onClick={item => {}} />\n      </>;\n  }\n}",...Sortable.parameters?.docs?.source}}},$Select2ItemsAndDaDToDir.parameters={...$Select2ItemsAndDaDToDir.parameters,docs:{...$Select2ItemsAndDaDToDir.parameters?.docs,source:{originalSource:'{\n  args: {\n    items\n  },\n  play: async () => {\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    const mouse = new DummyClick();\n    const lis = document.querySelectorAll(`li`);\n    for (let i = 0; i < lis.length; i++) {\n      const el = lis[i];\n      if (el.textContent === "item-1") {\n        await mouse.down(el);\n        await mouse.up(el);\n      }\n      document.dispatchEvent(new KeyboardEvent("keydown", {\n        key: "Shift"\n      }));\n      await wait(100);\n      if (el.textContent === "item-3") {\n        const p = await mouse.down(el);\n        document.dispatchEvent(new KeyboardEvent("keyup", {\n          key: "Shift"\n        }));\n        await wait(100);\n        await mouse.move(p.x, p.y, p.x, p.y + 24, 1000);\n        await mouse.upFromPos(p.x, p.y + 24);\n      }\n    }\n    mouse.destory();\n  },\n  render: props => {\n    useEffect(() => {\n      KeyboardInput.init(() => {});\n    }, []);\n    const [items, handleOrderChange] = useTreeItems<Data>((props.items as TreeViewItem<Data>[]));\n    return <>\n        <EditableTree<Data, Item> onOrderChange={handleOrderChange} items={(items as Item[])} renderItem={item => {\n        return <div style={{}}>{item.data.name}</div>;\n      }} onClick={item => {}} />\n      </>;\n  }\n}',...$Select2ItemsAndDaDToDir.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Sortable","$Select2ItemsAndDaDToDir"]},"./src/TreeView/SelectedItemsContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SelectedItemsContext});const SelectedItemsContext=__webpack_require__("./node_modules/react/index.js").createContext([])},"./src/TreeView/TreeView.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>TreeView});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled=__webpack_require__("./src/styled/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NEST_SPACE=6;function TreeItem(props){const{children,depth,...rest}=props;return(0,jsx_runtime.jsx)(TreeItemRoot,{selected:props.selected,padding:props.depth?props.depth*NEST_SPACE:0,...rest,children:props.children})}TreeItem.displayName="TreeItem";const TreeItemRoot=styled_components_browser_esm.ZP.li`
  display: flex;
  cursor: pointer;
  padding-left: ${props=>props.padding}px;
  height: 12px;
  line-height: 12px;
  background-color: ${props=>props.selected?`var(${styled.Ao})`:"transparent"};
  font-family: "Roboto Mono", monospace;

  :hover {
    background-color: ${props=>props.selected?`var(${styled.Ao})`:`var(${styled.KA})`};
  }
`;try{TreeItem.displayName="TreeItem",TreeItem.__docgenInfo={description:"",displayName:"TreeItem",props:{depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/TreeItem.tsx#TreeItem"]={docgenInfo:TreeItem.__docgenInfo,name:"TreeItem",path:"src/TreeView/TreeItem.tsx#TreeItem"})}catch(__react_docgen_typescript_loader_error){}var SelectedItemsContext=__webpack_require__("./src/TreeView/SelectedItemsContext.ts");function useIsSelectedItem(item){return void 0!==react.useContext(SelectedItemsContext._).find((i=>i.id===item.id))}const DirectoryTreeItem=react.memo((function DirectoryTreeView(props){const[open,setOpen]=(0,react.useState)(!0),depth=props.depth??0,isSelected=useIsSelectedItem(props.item);return(0,jsx_runtime.jsxs)(TreeViewRootUl,{children:[(0,jsx_runtime.jsxs)(TreeItem,{depth,selected:isSelected,onMouseDown:e=>props.onMouseDown?.(props.item,e),onMouseMove:e=>props.onMouseMove?.(props.item,e),onMouseUp:e=>props.onMouseUp?.(props.item,e),onClick:e=>props.onClick?.(props.item,e),children:[(props.item.children?.length??0)>0?(0,jsx_runtime.jsx)(Button,{onClick:()=>setOpen(!open),children:open?"-":"+"}):(0,jsx_runtime.jsx)(Button,{style:{visibility:"hidden"},children:"-"}),(0,jsx_runtime.jsx)(PointerEventsNone,{children:props.renderItem(props.item)})]}),open&&(0,jsx_runtime.jsx)(TreeView,{depth:depth+1,items:props.item.children,renderItem:props.renderItem,onMouseMove:props.onMouseMove,onMouseDown:props.onMouseDown,onMouseUp:props.onMouseUp,onClick:props.onClick})]})})),PointerEventsNone=styled_components_browser_esm.ZP.div`
  pointer-events: none;
  display: flex;
  width: calc(100% - 12px);
`,Button=styled_components_browser_esm.ZP.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: var(--color-text);
  width: ${NEST_SPACE}px;
  min-width: ${NEST_SPACE}px;
  display: flex;
  justify-content: center;
  align-items: center;
`,TreeViewRootUl=styled_components_browser_esm.ZP.ul`
  padding: 0;
  margin: 0;

  user-select: none;
  width: 100%;
`;try{DirectoryTreeItem.displayName="DirectoryTreeItem",DirectoryTreeItem.__docgenInfo={description:"",displayName:"DirectoryTreeItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TreeViewItem<unknown>"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: TreeViewItem<unknown>) => ReactNode"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/DirectoryTreeItem.tsx#DirectoryTreeItem"]={docgenInfo:DirectoryTreeItem.__docgenInfo,name:"DirectoryTreeItem",path:"src/TreeView/DirectoryTreeItem.tsx#DirectoryTreeItem"})}catch(__react_docgen_typescript_loader_error){}try{PointerEventsNone.displayName="PointerEventsNone",PointerEventsNone.__docgenInfo={description:"",displayName:"PointerEventsNone",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/DirectoryTreeItem.tsx#PointerEventsNone"]={docgenInfo:PointerEventsNone.__docgenInfo,name:"PointerEventsNone",path:"src/TreeView/DirectoryTreeItem.tsx#PointerEventsNone"})}catch(__react_docgen_typescript_loader_error){}const TreeView=react.memo((function TreeView(props){const depth=props.depth??0;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.items?.map((item=>(0,jsx_runtime.jsx)(TreeItemOrDir,{item,depth,renderItem:props.renderItem,onClick:props.onClick,onMouseDown:props.onMouseDown,onMouseMove:props.onMouseMove,onMouseUp:props.onMouseUp},item.id)))})}));function TreeItemOrDir(props){const item=props.item,isSelected=useIsSelectedItem(item);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:void 0!==props.item.children?(0,jsx_runtime.jsx)(DirectoryTreeItem,{item,depth:props.depth,onMouseMove:props.onMouseMove,renderItem:props.renderItem,onMouseDown:props.onMouseDown,onMouseUp:props.onMouseUp}):(0,jsx_runtime.jsx)(TreeItem,{selected:isSelected,onMouseDown:e=>props.onMouseDown?.(item,e),onMouseMove:e=>props.onMouseMove?.(item,e),onMouseUp:e=>props.onMouseUp?.(item,e),onClick:e=>props.onClick?.(item,e),depth:(props.depth??0)+1,children:(0,jsx_runtime.jsx)(PointerEventsNone,{children:props.renderItem(item)})})})}try{TreeView.displayName="TreeView",TreeView.__docgenInfo={description:"",displayName:"TreeView",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"TreeViewItem<unknown>[]"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: TreeViewItem<unknown>) => ReactNode"}},depth:{defaultValue:null,description:"",name:"depth",required:!1,type:{name:"number"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"WithTreeItemEvent<unknown, TreeViewItem<unknown>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TreeView/TreeView.tsx#TreeView"]={docgenInfo:TreeView.__docgenInfo,name:"TreeView",path:"src/TreeView/TreeView.tsx#TreeView"})}catch(__react_docgen_typescript_loader_error){}},"./src/styled/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>IconButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ToolTip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styled/ToolTip.tsx"),_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styled/GlobalStyle.tsx");const IconButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
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
`;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/styled/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/styled/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/getDragHander.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>getDragHander,z:()=>useDragHandler});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useDragHandler(cb,onDown,onUp){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>getDragHander(cb,onDown,onUp)),[cb,onDown,onUp])}function getDragHander(cb,onDown,onUp){return downEvent=>{const pass=onDown?.({startX:0,startY:0,diffX:0,diffY:0,startEvent:downEvent.nativeEvent,event:downEvent.nativeEvent});downEvent.stopPropagation();const startX=downEvent.clientX,startY=downEvent.clientY;let movePass;const handleMouseMove=e=>{const diffX=e.clientX-startX,diffY=e.clientY-startY;movePass=cb({startX,startY,diffX,diffY,startEvent:downEvent.nativeEvent,pass,event:e})},handleMouseUp=e=>{const diffX=e.clientX-startX,diffY=e.clientY-startY;onUp?.({startX,startY,diffX,diffY,startEvent:e,pass,movePass,event:e}),window.removeEventListener("mousemove",handleMouseMove),window.removeEventListener("mouseup",handleMouseUp)};window.addEventListener("mousemove",handleMouseMove),window.addEventListener("mouseup",handleMouseUp)}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j1:()=>_getDragHander__WEBPACK_IMPORTED_MODULE_0__.j,zF:()=>_getDragHander__WEBPACK_IMPORTED_MODULE_0__.z});var _getDragHander__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/getDragHander.ts");__webpack_require__("./src/utils/useNativeOnChange.tsx")},"./src/utils/useNativeOnChange.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>useNativeOnChange});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useNativeOnChange(propsValue,propsOnChange){const inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propsValue);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const onChange=e=>{const target=e.target;propsOnChange?.(target.value)};inputRef.current&&inputRef.current.addEventListener("change",onChange);const el=inputRef.current;return()=>{el?.removeEventListener("change",onChange)}}),[propsOnChange,propsValue]),{inputRef,value,setValue}}}}]);
//# sourceMappingURL=TreeView-EditableTree-mdx.197a9740.iframe.bundle.js.map