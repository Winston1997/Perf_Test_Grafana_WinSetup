"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{"./public/app/core/hooks/useQueryParams.ts":(e,a,s)=>{s.d(a,{K:()=>i});var t=s("./packages/grafana-runtime/src/index.ts"),n=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,r.TH)();return[(0,n.useMemo)((()=>(0,t.locationSearchToObject)(e||"")),[e]),(0,n.useCallback)(((e,a)=>setImmediate((()=>t.locationService.partial(e,a)))),[])]}},"./public/app/features/alerting/unified/AlertGroups.tsx":(e,a,s)=>{s.r(a),s.d(a,{default:()=>Q});var t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),r=s("./packages/grafana-ui/src/index.ts"),i=s("./public/app/core/hooks/useQueryParams.ts"),o=s("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),l=s("./public/app/plugins/datasource/alertmanager/types.ts"),c=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=s("./public/app/features/alerting/unified/components/AlertLabels.tsx"),p=s("./packages/grafana-data/src/index.ts"),u=s("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx"),m=s("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx"),g=s("./public/app/features/alerting/unified/utils/misc.ts"),f=s("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),b=s("./public/app/features/alerting/unified/utils/matchers.ts"),x=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const h=({alert:e,alertManagerSourceName:a})=>{const s=(0,r.useStyles2)(j);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:s.actionsRow,children:[e.status.state===l.Z9.Suppressed&&(0,x.jsx)(r.LinkButton,{href:`${(0,g.eQ)("/alerting/silences",a)}&silenceIds=${e.status.silencedBy.join(",")}`,className:s.button,icon:"bell",size:"sm",children:"Manage silences"}),e.status.state===l.Z9.Active&&(0,x.jsx)(r.LinkButton,{href:`${(0,g.eQ)("/alerting/silence/new",a)}&${(0,b.r)(e.labels)}`,className:s.button,icon:"bell-slash",size:"sm",children:"Silence"}),e.generatorURL&&(0,x.jsx)(r.LinkButton,{className:s.button,href:e.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(e.annotations).map((([e,a])=>(0,x.jsx)(f.a,{annotationKey:e,value:a},e))),(0,x.jsxs)("div",{className:s.receivers,children:["Receivers:"," ",e.receivers.map((({name:e})=>e)).filter((e=>!!e)).join(", ")]})]})},j=e=>({button:c.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:c.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:c.css`
    padding: ${e.spacing(1,0)};
  `}),y=({alerts:e,alertManagerSourceName:a})=>{const s=(0,r.useStyles2)(v),n=(0,t.useMemo)((()=>[{id:"state",label:"State",renderCell:({data:e})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.G,{state:e.status.state}),(0,x.jsxs)("span",{className:s.duration,children:["for"," ",(0,p.intervalToAbbreviatedDurationString)({start:new Date(e.startsAt),end:new Date(e.endsAt)})]})]}),size:"190px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,x.jsx)(d.s,{className:s.labels,labels:e}),size:1}]),[s]),i=(0,t.useMemo)((()=>e.map((e=>({id:e.fingerprint,data:e})))),[e]);return(0,x.jsx)("div",{className:s.tableWrapper,"data-testid":"alert-group-table",children:(0,x.jsx)(m.F,{cols:n,items:i,isExpandable:!0,renderExpandedContent:({data:e})=>(0,x.jsx)(h,{alert:e,alertManagerSourceName:a})})})},v=e=>({tableWrapper:c.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:c.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:c.css`
    padding-bottom: 0;
  `});var $,_=s("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),k=s("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");const S=({alertManagerSourceName:e,group:a})=>{const[s,n]=(0,t.useState)(!0),i=(0,r.useStyles2)(N);return(0,x.jsxs)("div",{className:i.wrapper,children:[(0,x.jsxs)("div",{className:i.header,children:[(0,x.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,x.jsx)(_.U,{isCollapsed:s,onToggle:()=>n(!s),"data-testid":"alert-group-collapse-toggle"}),Object.keys(a.labels).length?(0,x.jsx)(d.s,{className:i.headerLabels,labels:a.labels}):$||($=(0,x.jsx)("span",{children:"No grouping"}))]}),(0,x.jsx)(k.Z,{group:a})]}),!s&&(0,x.jsx)(y,{alertManagerSourceName:e,alerts:a.alerts})]})},N=e=>({wrapper:c.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:c.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:c.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:c.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:c.css``,spanElement:c.css`
    margin-left: ${e.spacing(.5)};
  `,[l.Z9.Active]:c.css`
    color: ${e.colors.error.main};
  `,[l.Z9.Suppressed]:c.css`
    color: ${e.colors.primary.main};
  `,[l.Z9.Unprocessed]:c.css`
    color: ${e.colors.secondary.main};
  `});var w,C=s("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");const z=({className:e,onFilterChange:a,queryString:s})=>{const t=(0,r.useStyles2)(G);return(0,x.jsxs)("div",{className:e,children:[(0,x.jsxs)(r.Label,{children:[(0,x.jsx)(r.Tooltip,{content:w||(w=(0,x.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,x.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,x.jsx)(r.Icon,{className:t.icon,name:"info-circle",size:"xs"})}),"Search by label"]}),(0,x.jsx)(r.Input,{placeholder:"Search",defaultValue:s,onChange:e=>{const s=e.target;a(s.value)},"data-testid":"search-query-input"})]})},G=e=>({icon:c.css`
    margin-right: ${e.spacing(.5)};
  `});var M;const A=({onStateFilterChange:e,stateFilter:a})=>{const s=(0,r.useStyles2)(B),t=Object.entries(l.Z9).sort((([e],[a])=>e<a?-1:1)).map((([e,a])=>({label:e,value:a})));return(0,x.jsxs)("div",{className:s.wrapper,children:[M||(M=(0,x.jsx)(r.Label,{children:"State"})),(0,x.jsx)(r.RadioButtonGroup,{options:t,value:a,onChange:e})]})},B=e=>({wrapper:c.css`
    margin-left: ${e.spacing(1)};
  `});var E,F,O=s("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const I=({className:e,groups:a,groupBy:s,onGroupingChange:t})=>{const n=(0,O.uniq)(a.flatMap((e=>e.alerts)).flatMap((({labels:e})=>Object.keys(e)))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,x.jsxs)("div",{"data-testid":"group-by-container",className:e,children:[E||(E=(0,x.jsx)(r.Label,{children:"Custom group by"})),(0,x.jsx)(r.MultiSelect,{"aria-label":"group by label keys",value:s,placeholder:"Group by",prefix:F||(F=(0,x.jsx)(r.Icon,{name:"tag-alt"})),onChange:e=>{t(e.map((({value:e})=>e)))},options:n})]})};var L=s("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");const Z=({groups:e})=>{const[a,s]=(0,t.useState)(Math.floor(100*Math.random())),[n,o]=(0,i.K)(),{groupBy:l=[],queryString:c,alertState:d}=(0,g.lC)(n),p=`matcher-${a}`,[u,m]=(0,L.k)(),f=(0,r.useStyles2)(T),b=!!(l.length>0||c||d);return(0,x.jsxs)("div",{className:f.wrapper,children:[(0,x.jsx)(C.P,{current:u,onChange:m}),(0,x.jsxs)("div",{className:f.filterSection,children:[(0,x.jsx)(z,{className:f.filterInput,queryString:c,onFilterChange:e=>o({queryString:e||null})},p),(0,x.jsx)(I,{className:f.filterInput,groups:e,groupBy:l,onGroupingChange:e=>o({groupBy:e.length?e.join(","):null})}),(0,x.jsx)(A,{stateFilter:d,onStateFilterChange:e=>o({alertState:e||null})}),b&&(0,x.jsx)(r.Button,{className:f.clearButton,variant:"secondary",icon:"times",onClick:()=>{o({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>s(a+1)),100)},children:"Clear filters"})]})]})},T=e=>({wrapper:c.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:c.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:c.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:c.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var P=s("./public/app/features/alerting/unified/state/actions.ts"),D=s("./public/app/features/alerting/unified/utils/redux.ts"),W=s("./public/app/features/alerting/unified/utils/constants.ts"),q=s("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var K=s("./public/app/features/alerting/unified/utils/alertmanager.ts");var R,U;const H=e=>({groupingBanner:c.css`
    margin: ${e.spacing(2,0)};
  `}),Q=()=>{var e;const[a]=(0,L.k)(),s=(0,n.useDispatch)(),[l]=(0,i.K)(),{groupBy:c=[]}=(0,g.lC)(l),d=(0,r.useStyles2)(H),p=(0,q._)((e=>e.amAlertGroups)),{loading:u,error:m,result:f=[]}=null!==(e=p[a||""])&&void 0!==e?e:D.oq,b=((e,a)=>(0,t.useMemo)((()=>0===a.length?e:e.flatMap((({alerts:e})=>e)).reduce(((e,s)=>{if(a.every((e=>Object.keys(s.labels).includes(e)))){const t=e.find((e=>a.every((a=>e.labels[a]===s.labels[a]))));if(t)t.alerts.push(s);else{const t=a.reduce(((e,a)=>Object.assign({},e,{[a]:s.labels[a]})),{});e.push({alerts:[s],labels:t,receiver:{name:"NONE"}})}}else{const a=e.find((e=>0===Object.keys(e.labels).length));a?a.alerts.push(s):e.push({alerts:[s],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,a]))(f,c),h=(e=>{const[a]=(0,i.K)(),s=(0,g.lC)(a),n=(0,K.Zh)(s.queryString||"");return(0,t.useMemo)((()=>e.reduce(((e,a)=>{const t=a.alerts.filter((({labels:e,status:a})=>{const t=(0,K.eD)(e,n),r=!s.alertState||a.state===s.alertState;return t&&r}));return t.length>0&&(0===Object.keys(a.labels).length?e.unshift(Object.assign({},a,{alerts:t})):e.push(Object.assign({},a,{alerts:t}))),e}),[])),[e,s,n])})(b);return(0,t.useEffect)((()=>{function e(){a&&s((0,P.mS)(a))}e();const t=setInterval(e,W.iF);return()=>{clearInterval(t)}}),[s,a]),(0,x.jsxs)(o.J,{pageId:"groups",children:[(0,x.jsx)(Z,{groups:f}),u&&(R||(R=(0,x.jsx)(r.LoadingPlaceholder,{text:"Loading notifications"}))),m&&!u&&(0,x.jsx)(r.Alert,{title:"Error loading notifications",severity:"error",children:m.message||"Unknown error"}),f&&h.map(((e,s)=>(0,x.jsxs)(t.Fragment,{children:[(1===s&&0===Object.keys(h[0].labels).length||0===s&&Object.keys(e.labels).length>0)&&(0,x.jsxs)("p",{className:d.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,x.jsx)(S,{alertManagerSourceName:a||"",group:e})]},`${JSON.stringify(e.labels)}-group-${s}`))),f&&!h.length&&(U||(U=(0,x.jsx)("p",{children:"No results."})))]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,a,s)=>{s.d(a,{J:()=>o});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=s("./public/app/core/components/Page/Page.tsx"),n=s("./public/app/core/selectors/navModel.ts"),r=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({children:e,pageId:a,isLoading:s})=>{const o=(0,n.h)((0,r.useSelector)((e=>e.navIndex)),a);return(0,i.jsx)(t.Z,{navModel:o,children:(0,i.jsx)(t.Z.Contents,{isLoading:s,children:e})})}},"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,a,s)=>{s.d(a,{a:()=>d});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=s("./public/app/features/alerting/unified/components/Well.tsx"),n=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=s("./packages/grafana-ui/src/index.ts"),i=s("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=s("./public/app/features/alerting/unified/utils/constants.ts"),l=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=["message","description"],d=({annotationKey:e,value:a})=>{const s=o.vY[e]?(0,l.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,l.jsx)("span",{children:o.vY[e]})}):e;return(0,l.jsx)(i.C,{label:s,horizontal:!0,children:(0,l.jsx)(p,{annotationKey:e,value:a})})},p=({annotationKey:e,value:a})=>{const s=(0,r.useStyles)(u);return c.includes(e)?(0,l.jsx)(t.t,{children:a}):a&&a.startsWith("http")?(0,l.jsx)("a",{href:a,target:"__blank",className:s.link,children:a}):(0,l.jsx)(l.Fragment,{children:a})},u=e=>({well:n.css`
    word-break: break-all;
  `,link:n.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,a,s)=>{s.d(a,{C:()=>i});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=s("./packages/grafana-ui/src/index.ts"),r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({className:e,label:a,horizontal:s,children:i})=>{const l=(0,n.useStyles2)(o);return(0,r.jsxs)("div",{className:(0,t.cx)(e,l.field,s?l.fieldHorizontal:l.fieldVertical),children:[(0,r.jsx)("div",{children:a}),(0,r.jsx)("div",{children:i})]})},o=e=>({fieldHorizontal:t.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:t.css`
    flex-direction: column;
  `,field:t.css`
    display: flex;
    margin: ${e.spacing(2)} 0;

    & > div:first-child {
      width: 110px;
      padding-right: ${e.spacing(1)};
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${e.colors.text.secondary};
    }
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,a,s)=>{s.d(a,{t:()=>o});var t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=s("./packages/grafana-ui/src/index.ts"),i=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({cols:e,items:a,isExpandable:s=!1,onCollapse:o,onExpand:c,isExpanded:d,renderExpandedContent:p,testIdGenerator:u,renderPrefixCell:m,renderPrefixHeader:g})=>{if((o||c||d)&&!(o&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((s||p)&&(!s||!p))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const f=(0,r.useStyles2)(l(e,s,!!g)),[b,x]=(0,t.useState)([]);return(0,i.jsxs)("div",{className:f.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:f.row,"data-testid":"header",children:[g&&g(),s&&(0,i.jsx)("div",{className:f.cell}),e.map((e=>(0,i.jsx)("div",{className:f.cell,children:e.label},e.id)))]}),a.map(((t,l)=>{var g;const h=d?d(t):b.includes(t.id);return(0,i.jsxs)("div",{className:f.row,"data-testid":null!==(g=null==u?void 0:u(t,l))&&void 0!==g?g:"row",children:[m&&m(t,l,a),s&&(0,i.jsx)("div",{className:(0,n.cx)(f.cell,f.expandCell),children:(0,i.jsx)(r.IconButton,{"aria-label":(h?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:f.expandButton,name:h?"angle-down":"angle-right",onClick:()=>(e=>{d&&o&&c?d(e)?o(e):c(e):x(b.includes(e.id)?b.filter((a=>a!==e.id)):[...b,e.id])})(t),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,n.cx)(f.cell,f.bodyCell),"data-column":e.label,children:e.renderCell(t,l)},`${t.id}-${e.id}`))),h&&p&&(0,i.jsx)("div",{className:f.expandedContentRow,"data-testid":"expanded-content",children:p(t,l,a)})]},t.id)}))]})},l=(e,a,s)=>{const t=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return a&&t.unshift("calc(1em + 16px)"),s&&t.unshift("0"),e=>({container:n.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:n.css`
      display: grid;
      grid-template-columns: ${t.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${s?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:n.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:n.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:n.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:n.css`
      grid-column-end: ${t.length+1};
      grid-column-start: ${s?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:n.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,a,s)=>{s.d(a,{F:()=>l});var t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=s("./packages/grafana-ui/src/index.ts"),r=(s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=["renderExpandedContent"];const l=e=>{let{renderExpandedContent:a}=e,s=function(e,a){if(null==e)return{};var s,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,o);const l=(0,n.useStyles2)(c);return(0,i.jsx)(r.t,Object.assign({renderExpandedContent:a?(e,s,n)=>(0,i.jsxs)(i.Fragment,{children:[!(s===n.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(l.contentGuideline,l.guideline)}),a(e,s,n)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:l.relative,children:(0,i.jsx)("div",{className:(0,t.cx)(l.headerGuideline,l.guideline)})}),renderPrefixCell:(e,a,s)=>(0,i.jsxs)("div",{className:l.relative,children:[(0,i.jsx)("div",{className:(0,t.cx)(l.topGuideline,l.guideline)}),!(a===s.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(l.bottomGuideline,l.guideline)})]})},s))},c=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},"./public/app/features/alerting/unified/components/Well.tsx":(e,a,s)=>{s.d(a,{t:()=>i});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=s("./packages/grafana-ui/src/index.ts"),n=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({children:e,className:a})=>{const s=(0,t.useStyles)(o);return(0,r.jsx)("div",{className:(0,n.cx)(s.wrapper,a),children:e})},o=e=>({wrapper:n.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,a,s)=>{s.d(a,{G:()=>o});var t=s("./public/app/plugins/datasource/alertmanager/types.ts"),n=(s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s("./public/app/features/alerting/unified/components/StateTag.tsx")),r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i={[t.Z9.Active]:"bad",[t.Z9.Unprocessed]:"neutral",[t.Z9.Suppressed]:"info"},o=({state:e})=>(0,r.jsx)(n.i,{state:i[e],children:e})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,a,s)=>{s.d(a,{k:()=>c});var t=s("./public/app/core/hooks/useQueryParams.ts"),n=s("./public/app/core/store.ts"),r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=s("./public/app/features/alerting/unified/utils/constants.ts"),o=s("./public/app/features/alerting/unified/utils/datasource.ts");function l(e){return e===o.GC||!!(0,o.aM)().find((a=>a.name===e))}function c(){const[e,a]=(0,t.K)(),s=(0,r.useCallback)((e=>{l(e)&&(e===o.GC?(n.Z.delete(i.de),a({[i.c4]:null})):(n.Z.set(i.de,e),a({[i.c4]:e})))}),[a]),c=e[i.c4];if(c&&"string"==typeof c)return l(c)?[c,s]:[void 0,s];const d=n.Z.get(i.de);return d&&"string"==typeof d&&l(d)?(s(d),[d,s]):[o.GC,s]}}}]);
//# sourceMappingURL=AlertGroups.6839ffb2aed352838f3a.js.map