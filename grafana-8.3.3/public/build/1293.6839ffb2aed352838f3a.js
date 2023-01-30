"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1293],{"./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":(e,a,s)=>{s.d(a,{j:()=>c});var n,t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./public/app/features/panel/state/util.ts"),o=s("./packages/grafana-ui/src/index.ts"),i=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({onChange:e,maxMenuHeight:a})=>{const s=(0,t.useMemo)((()=>(0,r.x)()),[]),i=(0,t.useMemo)((()=>s.map((e=>({label:e.name,imgUrl:e.info.logos.small,value:e}))).sort(((e,a)=>{var s;return null===(s=e.label)||void 0===s?void 0:s.localeCompare(a.label)}))),[s]),[c,p]=(0,t.useState)([]),u=(0,t.useCallback)((a=>{const s=[];for(const e of a)e.value&&s.push(e.value);e(s),p(a)}),[e]),m=(0,o.useStyles2)(d),g={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",styles:(0,o.resetSelectStyles)(),maxMenuHeight:a,options:i,value:c,onChange:u};return(0,l.jsxs)("div",{className:m.container,children:[c.length>0&&(0,l.jsx)("span",{className:m.clear,onClick:()=>u([]),children:"Clear types"}),(0,l.jsx)(o.MultiSelect,Object.assign({menuShouldPortal:!0},g,{prefix:n||(n=(0,l.jsx)(o.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function d(e){return{container:i.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:i.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}},"./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":(e,a,s)=>{s.d(a,{p:()=>z});var n=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=s("./packages/grafana-ui/src/index.ts"),o=s("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx"),i=s("./packages/grafana-data/src/index.ts"),l=s("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),c=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const d={loadingState:i.LoadingState.Loading,dashboardTitles:[]},p=(0,c.PH)("libraryPanels/delete/searchCompleted"),u=(e=d,a)=>p.match(a)?Object.assign({},e,{dashboardTitles:a.payload.dashboards.map((e=>e.title)),loadingState:i.LoadingState.Done}):e;var m=s("./public/app/features/library-panels/state/api.ts");var g,h,b,x,f=s("./public/app/features/library-panels/styles.ts"),y=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const j=({libraryPanel:e,onDismiss:a,onConfirm:s})=>{const t=(0,r.useStyles)(f.J),[{dashboardTitles:o,loadingState:c},b]=(0,n.useReducer)(u,d),x=(0,n.useMemo)((()=>(0,l.tb)(b)),[b]);(0,n.useEffect)((()=>{x(function(e){return async function(a){const s=await(0,m.E8)(e.uid);a(p({dashboards:s}))}}(e))}),[x,e]);const j=Boolean(o.length),S=c===i.LoadingState.Done;return(0,y.jsxs)(r.Modal,{className:t.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:a,isOpen:!0,children:[S?null:g||(g=(0,y.jsx)(P,{})),S?(0,y.jsxs)("div",{children:[j?(0,y.jsx)(w,{dashboardTitles:o}):null,j?null:h||(h=(0,y.jsx)(v,{})),(0,y.jsxs)(r.Modal.ButtonRow,{children:[(0,y.jsx)(r.Button,{variant:"secondary",onClick:a,fill:"outline",children:"Cancel"}),(0,y.jsx)(r.Button,{variant:"destructive",onClick:s,disabled:j,children:"Delete"})]})]}):null]})},P=()=>b||(b=(0,y.jsx)("span",{children:"Loading library panel..."})),v=()=>{const e=(0,r.useStyles)(f.J);return(0,y.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},w=({dashboardTitles:e})=>{const a=(0,r.useStyles)(f.J),s=1===e.length?"dashboard.":"dashboards.",n=`${e.length} ${s}`;return 0===e.length?null:(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:a.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,y.jsx)("strong",{children:n})," Remove the library panel from the dashboards listed below and retry."]}),(0,y.jsxs)("table",{className:a.myTable,children:[x||(x=(0,y.jsx)("thead",{children:(0,y.jsx)("tr",{children:(0,y.jsx)("th",{children:"Dashboard name"})})})),(0,y.jsx)("tbody",{children:e.map(((e,a)=>(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:e})},`dash-title-${a}`)))})]})]})};var S,_,k=s("./packages/grafana-runtime/src/index.ts"),C=s("./public/app/features/panel/components/PanelPluginError.tsx");const z=({libraryPanel:e,onClick:a,onDelete:s,showSecondaryActions:t})=>{var r;const[i,l]=(0,n.useState)(!1),c=null!==(r=k.config.panels[e.model.type])&&void 0!==r?r:(0,C.X)(e.model.type).meta;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.X,{isCurrent:!1,title:e.name,description:e.description,plugin:c,onClick:()=>null==a?void 0:a(e),onDelete:t?()=>l(!0):void 0,children:(0,y.jsx)($,{libraryPanel:e})}),i&&(0,y.jsx)(j,{libraryPanel:e,onConfirm:()=>{null==s||s(e),l(!1)},onDismiss:()=>l(!1)})]})};function $({libraryPanel:e}){const a=(0,r.useStyles2)(F);return e.meta.folderUid||e.meta.folderName?e.meta.folderUid?(0,y.jsx)("span",{className:a.metaContainer,children:(0,y.jsxs)(r.Link,{href:`/dashboards/f/${e.meta.folderUid}`,children:[_||(_=(0,y.jsx)(r.Icon,{name:"folder-upload",size:"sm"})),(0,y.jsx)("span",{children:e.meta.folderName})]})}):(0,y.jsxs)("span",{className:a.metaContainer,children:[S||(S=(0,y.jsx)(r.Icon,{name:"folder",size:"sm"})),(0,y.jsx)("span",{children:e.meta.folderName})]}):null}function F(e){return{metaContainer:t.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},"./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":(e,a,s)=>{s.d(a,{N:()=>k,e:()=>_});var n,t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./packages/grafana-ui/src/index.ts"),o=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./public/app/core/components/Select/SortPicker.tsx"),l=s("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx"),c=s("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx"),d=s("./public/app/core/constants.ts"),p=s("../../opt/drone/yarncache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),u=s.n(p),m=s("./public/app/types/index.ts"),g=s("./public/app/core/services/backend_srv.ts"),h=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function b({onChange:e,maxMenuHeight:a}){const s=(0,r.useStyles2)(x),[o,i]=(0,t.useState)(!1),l=(0,t.useCallback)((e=>async function(e,a){a(!0);const s={query:e,type:"dash-folder",permission:m.bf.View},n=(await(0,g.i)().search(s)).map((e=>({label:e.title,value:{id:e.id,title:e.title}})));e&&!"general".includes(e.toLowerCase())||n.unshift({label:"General",value:{id:0,title:"General"}});return a(!1),n}(e,i)),[]),c=(0,t.useMemo)((()=>u()(l,300)),[l]),[d,p]=(0,t.useState)([]),b=(0,t.useCallback)((a=>{const s=[];for(const e of a)e.value&&s.push(e.value);e(s),p(a)}),[e]),f={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",styles:(0,r.resetSelectStyles)(),maxMenuHeight:a,value:d,onChange:b};return(0,h.jsxs)("div",{className:s.container,children:[d.length>0&&(0,h.jsx)("span",{className:s.clear,onClick:()=>b([]),children:"Clear folders"}),(0,h.jsx)(r.AsyncMultiSelect,Object.assign({menuShouldPortal:!0},f,{isLoading:o,loadOptions:c,prefix:n||(n=(0,h.jsx)(r.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function x(e){return{container:o.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:o.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}var f=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const y={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},j=(0,f.PH)("libraryPanels/search/searchChanged"),P=(0,f.PH)("libraryPanels/search/sortChanged"),v=(0,f.PH)("libraryPanels/search/panelFilterChanged"),w=(0,f.PH)("libraryPanels/search/folderFilterChanged"),S=(e,a)=>j.match(a)?Object.assign({},e,{searchQuery:a.payload}):P.match(a)?Object.assign({},e,{sortDirection:a.payload.value}):v.match(a)?Object.assign({},e,{panelFilter:a.payload.map((e=>e.id))}):w.match(a)?Object.assign({},e,{folderFilter:a.payload.map((e=>String(e.id)))}):e;let _;!function(e){e.Tight="tight",e.Spacious="spacious"}(_||(_={}));const k=({onClick:e,variant:a=_.Spacious,currentPanelId:s,currentFolderId:n,perPage:o=d.gN,showPanelFilter:p=!1,showFolderFilter:u=!1,showSort:m=!1,showSecondaryActions:g=!1})=>{var x,f;const k=(0,r.useStyles2)(C),[{sortDirection:z,panelFilter:$,folderFilter:F,searchQuery:L},N]=(0,t.useReducer)(S,Object.assign({},y,{folderFilter:n?[n.toString(10)]:[]})),O=e=>N(j(e)),D=e=>N(P(e)),T=e=>N(w(e)),I=e=>N(v(e));return a===_.Spacious?(0,h.jsx)("div",{className:k.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"lg",children:[x||(x=(0,h.jsx)(r.FilterInput,{value:L,onChange:O,placeholder:"Search by name or description",width:0})),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:m&&p||u?"space-between":"flex-end",children:[m&&(0,h.jsx)(i.P,{value:z,onChange:D,filter:["alpha-asc","alpha-desc"]}),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:u&&p?"space-between":"flex-end",children:[u&&(0,h.jsx)(b,{onChange:T}),p&&(0,h.jsx)(l.j,{onChange:I})]})]}),(0,h.jsx)("div",{className:k.libraryPanelsView,children:f||(f=(0,h.jsx)(c.u,{onClickCard:e,searchString:L,sortDirection:z,panelFilter:$,folderFilter:F,currentPanelId:s,showSecondaryActions:g,perPage:o}))})]})}):(0,h.jsx)("div",{className:k.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"xs",children:[(0,h.jsxs)("div",{className:k.buttonRow,children:[(0,h.jsx)("div",{className:k.tightFilter,children:(0,h.jsx)(r.FilterInput,{value:L,onChange:O,placeholder:"Search by name",width:0})}),(0,h.jsxs)("div",{className:k.tightSortFilter,children:[m&&(0,h.jsx)(i.P,{value:z,onChange:D}),u&&(0,h.jsx)(b,{onChange:T,maxMenuHeight:200}),p&&(0,h.jsx)(l.j,{onChange:I,maxMenuHeight:200})]})]}),(0,h.jsx)("div",{className:k.libraryPanelsView,children:(0,h.jsx)(c.u,{onClickCard:e,searchString:L,sortDirection:z,panelFilter:$,folderFilter:F,currentPanelId:s,showSecondaryActions:g,perPage:o})})]})})};function C(e){return{container:o.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
    `,buttonRow:o.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(1.5)}; // Clear types link
    `,tightFilter:o.css`
      flex-grow: 1;
    `,tightSortFilter:o.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:o.css`
      width: 100%;
    `}}},"./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":(e,a,s)=>{s.d(a,{u:()=>m});var n,t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useDebounce.js"),o=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),l=s("./packages/grafana-data/src/index.ts"),c=s("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx"),d=s("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts"),p=s("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),u=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=({className:e,onClickCard:a,searchString:s,sortDirection:m,panelFilter:h,folderFilter:b,showSecondaryActions:x,currentPanelId:f,perPage:y=40})=>{const j=(0,i.useStyles)(g),[{libraryPanels:P,page:v,perPage:w,numberOfPages:S,loadingState:_,currentPanelId:k},C]=(0,t.useReducer)(d._p,Object.assign({},d.p$,{currentPanelId:f,perPage:y})),z=(0,t.useMemo)((()=>(0,p.tb)(C)),[C]);(0,r.Z)((()=>z((0,p.Xu)({searchString:s,sortDirection:m,panelFilter:h,folderFilter:b,page:v,perPage:w,currentPanelId:k}))),300,[s,m,h,b,v,z]);const $=({uid:e})=>z((0,p.UO)(e,{searchString:s,page:v,perPage:w}));return(0,u.jsxs)("div",{className:(0,o.cx)(j.container,e),children:[(0,u.jsx)("div",{className:j.libraryPanelList,children:_===l.LoadingState.Loading?n||(n=(0,u.jsx)("p",{children:"Loading library panels..."})):P.length<1?(0,u.jsx)("p",{className:j.noPanelsFound,children:"No library panels found."}):null==P?void 0:P.map(((e,s)=>(0,u.jsx)(c.p,{libraryPanel:e,onDelete:$,onClick:a,showSecondaryActions:x},`library-panel=${s}`)))}),P.length?(0,u.jsx)("div",{className:j.pagination,children:(0,u.jsx)(i.Pagination,{currentPage:v,numberOfPages:S,onNavigate:e=>z((0,d.oO)({page:e})),hideWhenSinglePage:!0})}):null]})},g=e=>({container:o.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:o.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:o.css`
      display: flex;
    `,newPanelButton:o.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:o.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:o.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},"./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":(e,a,s)=>{s.d(a,{Xu:()=>b,UO:()=>x,tb:()=>f});var n=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js"),t=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),r=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),o=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js"),i=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js"),l=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),c=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),d=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js"),p=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js"),u=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),m=s("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),g=s("./public/app/features/library-panels/state/api.ts"),h=s("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");function b(e){return function(a){const s=new n.w0,b=(0,t.Dp)((0,g.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe((0,l.z)((({perPage:e,elements:a,page:s,totalCount:n})=>(0,r.of)((0,h.zK)({libraryPanels:a,page:s,perPage:e,totalCount:n})))),(0,c.K)((a=>(console.error(a),(0,r.of)((0,h.zK)(Object.assign({},h.p$,{page:e.page,perPage:e.perPage})))))),(0,d.x)((()=>s.unsubscribe())),(0,p.B)());s.add((0,o.T)((0,i.H)(50).pipe((0,u.h)((0,h.xU)()),(0,m.R)(b)),b).subscribe(a))}}function x(e,a){return async function(s){try{await(0,g.UO)(e),b(a)(s)}catch(e){console.error(e)}}}function f(e){return function(a){return a instanceof Function?a(e):e(a)}}},"./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":(e,a,s)=>{s.d(a,{p$:()=>r,xU:()=>o,zK:()=>i,oO:()=>l,_p:()=>c});var n=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),t=s("./packages/grafana-data/src/index.ts");const r={loadingState:t.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},o=(0,n.PH)("libraryPanels/view/initSearch"),i=(0,n.PH)("libraryPanels/view/searchCompleted"),l=(0,n.PH)("libraryPanels/view/changePage"),c=(e,a)=>{if(o.match(a))return Object.assign({},e,{loadingState:t.LoadingState.Loading});if(i.match(a)){const{libraryPanels:s,page:n,perPage:r,totalCount:o}=a.payload,i=Math.ceil(o/r);return Object.assign({},e,{libraryPanels:s,perPage:r,totalCount:o,loadingState:t.LoadingState.Done,numberOfPages:i,page:n>i?n-1:n})}return l.match(a)?Object.assign({},e,{page:a.payload.page}):e}},"./public/app/features/library-panels/styles.ts":(e,a,s)=>{s.d(a,{J:()=>t});var n=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");function t(e){return{myTable:n.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:n.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:n.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:n.css`
      margin-top: ${e.spacing.md};
    `,modal:n.css`
      width: 500px;
    `,modalText:n.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},"./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":(e,a,s)=>{s.d(a,{X:()=>c});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=s("./packages/grafana-data/src/index.ts"),t=s("./packages/grafana-ui/src/index.ts"),r=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=s("./packages/grafana-e2e-selectors/src/index.ts"),i=s("./public/app/features/plugins/components/PluginStateInfo.tsx"),l=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({isCurrent:e,title:a,plugin:s,onClick:i,onDelete:c,disabled:u,showBadge:m,description:g,children:h})=>{const b=(0,t.useStyles2)(d),x=(0,r.cx)({[b.item]:!0,[b.disabled]:u||s.state===n.PluginState.deprecated,[b.current]:e});return(0,l.jsxs)("div",{className:x,"aria-label":o.wl.components.PluginVisualization.item(s.name),onClick:u?void 0:i,title:e?"Click again to close this section":s.name,children:[(0,l.jsx)("img",{className:b.img,src:s.info.logos.small,alt:""}),(0,l.jsxs)("div",{className:b.itemContent,children:[(0,l.jsx)("div",{className:b.name,children:a}),g?(0,l.jsx)("span",{className:b.description,children:g}):null,h]}),m&&(0,l.jsx)("div",{className:(0,r.cx)(b.badge,u&&b.disabled),children:(0,l.jsx)(p,{plugin:s})}),c&&(0,l.jsx)(t.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),c()},"aria-label":"Delete button on panel type card"})]})};c.displayName="PanelTypeCard";const d=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      position: relative;
      width: 100%;
      padding: ${e.spacing(0,1)};
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `}),p=({plugin:e})=>(0,n.isUnsignedPluginSignature)(e.signature)?(0,l.jsx)(t.PluginSignatureBadge,{status:e.signature}):(0,l.jsx)(i.u,{state:e.state});p.displayName="PanelPluginBadge"},"./public/app/features/panel/state/util.ts":(e,a,s)=>{s.d(a,{x:()=>r,r:()=>o});var n=s("./packages/grafana-data/src/index.ts"),t=s("./public/app/core/config.ts");function r(){const e=t.vc.panels;return Object.keys(e).filter((a=>!1===e[a].hideFromList)).map((a=>e[a])).sort(((e,a)=>e.sort-a.sort))}function o(e,a,s){if(!a.length)return e.filter((e=>e.state!==n.PluginState.deprecated||s.id===e.id));const t=a.toLowerCase(),r=[],o=[],i="graph".startsWith(t);for(const a of e){if(a.state===n.PluginState.deprecated&&s.id!==a.id)continue;const e=a.name.toLowerCase().indexOf(t);0===e?r.push(a):e>0?o.push(a):i&&"timeseries"===a.id&&r.push(a)}return r.concat(o)}},"./public/app/features/plugins/components/PluginStateInfo.tsx":(e,a,s)=>{s.d(a,{u:()=>o});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=s("./packages/grafana-ui/src/index.ts"),t=s("./packages/grafana-data/src/index.ts"),r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=e=>{const a=function(e){switch(e){case t.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case t.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case t.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return a?(0,r.jsx)(n.Badge,{color:a.color,title:a.tooltip,text:a.text,icon:a.icon}):null}}}]);
//# sourceMappingURL=1293.6839ffb2aed352838f3a.js.map