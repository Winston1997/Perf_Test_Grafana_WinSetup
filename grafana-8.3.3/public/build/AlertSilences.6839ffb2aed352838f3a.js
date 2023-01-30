"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1783],{"./public/app/core/hooks/useCleanup.ts":(e,t,a)=>{a.d(t,{x:()=>i});var s=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),n=a("./public/app/core/actions/cleanUp.ts");function i(e){const t=(0,r.useDispatch)(),a=(0,s.useRef)(e);a.current=e,(0,s.useEffect)((()=>()=>{t((0,n.e)({stateSelector:a.current}))}),[t])}},"./public/app/core/hooks/useQueryParams.ts":(e,t,a)=>{a.d(t,{K:()=>i});var s=a("./packages/grafana-runtime/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,n.TH)();return[(0,r.useMemo)((()=>(0,s.locationSearchToObject)(e||"")),[e]),(0,r.useCallback)(((e,t)=>setImmediate((()=>s.locationService.partial(e,t)))),[])]}},"./public/app/features/alerting/unified/Silences.tsx":(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var s,r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=a("./packages/grafana-ui/src/index.ts"),i=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),l=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),c=a("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),o=a("./packages/grafana-data/src/index.ts"),d=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=a("./public/app/plugins/datasource/alertmanager/types.ts"),p=a("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),m=a("./public/app/core/services/context_srv.ts"),g=a("./public/app/features/alerting/unified/utils/misc.ts"),h=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const x=({alertManagerSourceName:e})=>m.Vt.isEditor?(0,h.jsx)(p.Z,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,g.eQ)("alerting/silence/new",e),buttonTitle:"New silence"}):s||(s=(0,h.jsx)(n.CallToActionCard,{callToActionElement:(0,h.jsx)("div",{}),message:"No silences found."}));var f,b,v,j=a("./public/app/core/hooks/useQueryParams.ts"),y=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),_=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const S=Object.entries(u.As).map((([e,t])=>({label:e,value:t}))),w=()=>{const[e,t]=(0,r.useState)("queryString-"+100*Math.random()),[a,s]=(0,j.K)(),{queryString:i,silenceState:l}=(0,g.pF)(a),c=(0,n.useStyles2)(A),o=(0,_.debounce)((e=>{const t=e.target;s({queryString:t.value||null})}),400),d=!!(i&&i.length>3)&&0===(0,y.Zh)(i).length;return(0,h.jsxs)("div",{className:c.flexRow,children:[(0,h.jsx)(n.Field,{className:c.rowChild,label:(0,h.jsxs)("span",{className:c.fieldLabel,children:[f||(f=(0,h.jsx)(n.Tooltip,{content:(0,h.jsxs)("div",{children:["Filter silences by matchers using a comma separated list of matchers, ie:",(0,h.jsx)("pre",{children:"severity=critical, instance=~cluster-us-.+"})]}),children:(0,h.jsx)(n.Icon,{name:"info-circle"})}))," ","Search by matchers"]}),invalid:d,error:d?"Query must use valid matcher syntax":null,children:(0,h.jsx)(n.Input,{className:c.searchInput,prefix:b||(b=(0,h.jsx)(n.Icon,{name:"search"})),onChange:o,defaultValue:null!=i?i:"",placeholder:"Search","data-testid":"search-query-input"},e)}),(0,h.jsxs)("div",{className:c.rowChild,children:[v||(v=(0,h.jsx)(n.Label,{children:"State"})),(0,h.jsx)(n.RadioButtonGroup,{options:S,value:l,onChange:e=>{s({silenceState:e})}})]}),(i||l)&&(0,h.jsx)("div",{className:c.rowChild,children:(0,h.jsx)(n.Button,{variant:"secondary",icon:"times",onClick:()=>{s({queryString:null,silenceState:null}),setTimeout((()=>t("")))},children:"Clear filters"})})]})},A=e=>({searchInput:d.css`
    width: 360px;
  `,flexRow:d.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${e.spacing(2)};
    border-bottom: 1px solid ${e.colors.border.strong};
  `,rowChild:d.css`
    margin-right: ${e.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:d.css`
    font-size: 12px;
    font-weight: 500;
  `});var N=a("./public/app/features/alerting/unified/components/DynamicTable.tsx"),k=a("./public/app/features/alerting/unified/components/StateTag.tsx");const C={[u.As.Active]:"good",[u.As.Expired]:"neutral",[u.As.Pending]:"neutral"},$=({state:e})=>(0,h.jsx)(k.i,{state:C[e],children:e});var D=a("./public/app/features/alerting/unified/components/silences/Matchers.tsx"),z=a("./packages/grafana-ui/src/components/Button/index.ts");const M=["className"];const T=e=>{let{className:t}=e,a=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,M);return(0,h.jsx)(z.zx,Object.assign({variant:"secondary",size:"xs",className:(0,d.cx)((0,n.useStyles)(I),t)},a))},I=e=>d.css`
  height: 24px;
  font-size: ${e.typography.size.sm};
`;var R,B=a("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx"),O=a("./public/app/features/alerting/unified/state/actions.ts"),E=a("./public/app/features/alerting/unified/styles/table.ts"),q=a("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),Z=a("./public/app/features/alerting/unified/components/AlertLabels.tsx"),F=a("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");const L=({alert:e,className:t})=>{const[a,s]=(0,r.useState)(!0),i=(0,n.useStyles2)(E.D),l=(0,o.intervalToAbbreviatedDurationString)({start:new Date(e.startsAt),end:new Date(e.endsAt)}),c=Object.entries(e.labels).reduce(((e,[t,a])=>("alertname"!==t&&"__alert_rule_title__"!==t||(e=a),e)),"");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("tr",{className:t,children:[(0,h.jsx)("td",{children:(0,h.jsx)(q.U,{isCollapsed:a,onToggle:e=>s(e)})}),(0,h.jsx)("td",{children:(0,h.jsx)(F.G,{state:e.status.state})}),(0,h.jsxs)("td",{children:["for ",l," seconds"]}),(0,h.jsx)("td",{children:c}),(0,h.jsx)("td",{className:i.actionsCell,children:(0,h.jsx)(B.A,{icon:"chart-line",to:e.generatorURL,tooltip:"View in explorer"})})]}),!a&&(0,h.jsxs)("tr",{className:t,children:[R||(R=(0,h.jsx)("td",{})),(0,h.jsx)("td",{colSpan:5,children:(0,h.jsx)(Z.s,{labels:e.labels})})]})]})};var V,P,Q;const Y=e=>({tableMargin:d.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:d.css`
    width: 110px;
  `,colName:d.css`
    width: 65%;
  `}),G=({silencedAlerts:e})=>{const t=(0,n.useStyles2)(E.D),a=(0,n.useStyles2)(Y);return e.length?(0,h.jsxs)("table",{className:(0,d.cx)(t.table,a.tableMargin),children:[(0,h.jsxs)("colgroup",{children:[(0,h.jsx)("col",{className:t.colExpand}),(0,h.jsx)("col",{className:a.colState}),V||(V=(0,h.jsx)("col",{})),(0,h.jsx)("col",{className:a.colName}),P||(P=(0,h.jsx)("col",{}))]}),Q||(Q=(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"State"}),(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"Alert name"}),(0,h.jsx)("th",{children:"Actions"})]})})),(0,h.jsx)("tbody",{children:e.map(((e,a)=>(0,h.jsx)(L,{alert:e,className:a%2==0?t.evenRow:""},e.fingerprint)))})]}):null},U=({silence:e})=>{const{startsAt:t,endsAt:a,comment:s,createdBy:r,silencedAlerts:i}=e,l=(0,n.useStyles2)(H),c="YYYY-MM-DD HH:mm",d=o.dateMath.parse(t),u=o.dateMath.parse(a),p=(0,o.intervalToAbbreviatedDurationString)({start:new Date(t),end:new Date(a)});return(0,h.jsxs)("div",{className:l.container,children:[(0,h.jsx)("div",{className:l.title,children:"Comment"}),(0,h.jsx)("div",{children:s}),(0,h.jsx)("div",{className:l.title,children:"Schedule"}),(0,h.jsx)("div",{children:`${null==d?void 0:d.format(c)} - ${null==u?void 0:u.format(c)}`}),(0,h.jsx)("div",{className:l.title,children:"Duration"}),(0,h.jsxs)("div",{children:[" ",p]}),(0,h.jsx)("div",{className:l.title,children:"Created by"}),(0,h.jsxs)("div",{children:[" ",r]}),(0,h.jsx)("div",{className:l.title,children:"Affected alerts"}),(0,h.jsx)(G,{silencedAlerts:i})]})},H=e=>({container:d.css`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,title:d.css`
    color: ${e.colors.text.primary};
  `,row:d.css`
    margin: ${e.spacing(1,0)};
  `});var K,W,J,X;const ee=e=>{const[t]=(0,j.K)();return(0,r.useMemo)((()=>{const{queryString:a,silenceState:s}=(0,g.pF)(t),r=null==t?void 0:t.silenceIds;return e.filter((e=>{if("string"==typeof r){if(!r.split(",").includes(e.id))return!1}if(a){if(!(0,y.Zh)(a).every((t=>{var a;return null===(a=e.matchers)||void 0===a?void 0:a.some((({name:e,value:a,isEqual:s,isRegex:r})=>t.name===e&&t.value===a&&t.isEqual===s&&t.isRegex===r))})))return!1}if(s){if(!(e.status.state===s))return!1}return!0}))}),[t,e])},te=e=>({topButtonContainer:d.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:d.css`
    margin: ${e.spacing(2,0)};
  `,callout:d.css`
    background-color: ${e.colors.background.secondary};
    border-top: 3px solid ${e.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${e.spacing(2)};

    & > * {
      margin-left: ${e.spacing(1)};
    }
  `,calloutIcon:d.css`
    color: ${e.colors.info.text};
  `,editButton:d.css`
    margin-left: ${e.spacing(.5)};
  `});const ae=({silences:e,alertManagerAlerts:t,alertManagerSourceName:a})=>{const s=(0,n.useStyles2)(te),[l]=(0,j.K)(),c=ee(e),{silenceState:d}=(0,g.pF)(l),p=!!c.length&&(void 0===d||d===u.As.Expired),f=function(e){const t=(0,i.useDispatch)(),a=(0,n.useStyles2)(te);return(0,r.useMemo)((()=>{const s=a=>{t((0,O.yO)(e,a))},r=[{id:"state",label:"State",renderCell:function({data:{status:e}}){return(0,h.jsx)($,{state:e.state})},size:"88px"},{id:"matchers",label:"Matching labels",renderCell:function({data:{matchers:e}}){return(0,h.jsx)(D.g,{matchers:e||[]})},size:9},{id:"alerts",label:"Alerts",renderCell:function({data:{silencedAlerts:e}}){return(0,h.jsx)("span",{"data-testid":"alerts",children:e.length})},size:1},{id:"schedule",label:"Schedule",renderCell:function({data:{startsAt:e,endsAt:t}}){const a=o.dateMath.parse(e),s=o.dateMath.parse(t),r="YYYY-MM-DD HH:mm";return(0,h.jsxs)(h.Fragment,{children:[" ",null==a?void 0:a.format(r)," ","-",J||(J=(0,h.jsx)("br",{})),null==s?void 0:s.format(r)]})},size:"150px"}];return m.Vt.isEditor&&r.push({id:"actions",label:"Actions",renderCell:function({data:t}){return(0,h.jsxs)(h.Fragment,{children:["expired"===t.status.state?(0,h.jsx)(n.Link,{href:(0,g.eQ)(`/alerting/silence/${t.id}/edit`,e),children:X||(X=(0,h.jsx)(T,{icon:"sync",children:"Recreate"}))}):(0,h.jsx)(T,{icon:"bell",onClick:()=>s(t.id),children:"Unsilence"}),"expired"!==t.status.state&&(0,h.jsx)(B.A,{className:a.editButton,to:(0,g.eQ)(`/alerting/silence/${t.id}/edit`,e),icon:"pen",tooltip:"edit"})]})},size:"140px"}),r}),[e,t,a])}(a),b=(0,r.useMemo)((()=>c.map((e=>{const a=(s=e.id,t.filter((e=>e.status.silencedBy.includes(s))));var s;return{id:e.id,data:Object.assign({},e,{silencedAlerts:a})}}))),[c,t]);return(0,h.jsxs)("div",{"data-testid":"silences-table",children:[!!e.length&&(0,h.jsxs)(h.Fragment,{children:[K||(K=(0,h.jsx)(w,{})),m.Vt.isEditor&&(0,h.jsx)("div",{className:s.topButtonContainer,children:(0,h.jsx)(n.Link,{href:(0,g.eQ)("/alerting/silence/new",a),children:(0,h.jsx)(n.Button,{className:s.addNewSilence,icon:"plus",children:"New Silence"})})}),b.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N.t,{items:b,cols:f,isExpandable:!0,renderExpandedContent:({data:e})=>(0,h.jsx)(U,{silence:e})}),p&&(0,h.jsxs)("div",{className:s.callout,children:[(0,h.jsx)(n.Icon,{className:s.calloutIcon,name:"info-circle"}),W||(W=(0,h.jsx)("span",{children:"Expired silences are automatically deleted after 5 days."}))]})]}):"No matching silences found"]}),!e.length&&(0,h.jsx)(x,{alertManagerSourceName:a})]})};var se=a("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts"),re=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),ne=a("./public/app/features/alerting/unified/utils/constants.ts"),ie=a("./public/app/features/alerting/unified/utils/redux.ts"),le=a("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useDebounce.js"),ce=a("./packages/grafana-runtime/src/index.ts"),oe=a("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/3/opt/drone/yarncache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");const de=["onChange","ref"];const ue=e=>({wrapper:d.css`
      margin-top: ${e.spacing(2)};
    `,row:d.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${e.colors.background.secondary};
      padding: ${e.spacing(1)} ${e.spacing(1)} 0 ${e.spacing(1)};
      & > * + * {
        margin-left: ${e.spacing(2)};
      }
    `,removeButton:d.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,matcherOptions:d.css`
      min-width: 140px;
    `,matchers:d.css`
      max-width: 585px;
      margin: ${e.spacing(1)} 0;
      padding-top: ${e.spacing(.5)};
    `}),pe=({className:e})=>{const t=(0,n.useStyles2)(ue),a=(0,oe.Gc)(),{control:s,register:r,formState:{errors:i}}=a,{fields:l=[],append:c,remove:o}=(0,oe.Dq)({name:"matchers"});return(0,h.jsx)("div",{className:(0,d.cx)(e,t.wrapper),children:(0,h.jsx)(n.Field,{label:"Matching labels",required:!0,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:t.matchers,children:l.map(((e,a)=>{var c,d,u,p,m,g,x,f,b,v;return(0,h.jsxs)("div",{className:t.row,"data-testid":"matcher",children:[(0,h.jsx)(n.Field,{label:"Label",invalid:!(null==i||null===(c=i.matchers)||void 0===c||null===(d=c[a])||void 0===d||!d.name),error:null==i||null===(u=i.matchers)||void 0===u||null===(p=u[a])||void 0===p||null===(m=p.name)||void 0===m?void 0:m.message,children:(0,h.jsx)(n.Input,Object.assign({},r(`matchers.${a}.name`,{required:{value:!0,message:"Required."}}),{defaultValue:e.name,placeholder:"label"}))}),(0,h.jsx)(n.Field,{label:"Operator",children:(0,h.jsx)(n.InputControl,{control:s,render:e=>{let{field:{onChange:a}}=e,s=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e.field,de);return(0,h.jsx)(n.Select,Object.assign({},s,{menuShouldPortal:!0,onChange:e=>a(e.value),className:t.matcherOptions,options:y.tA,"aria-label":"operator"}))},defaultValue:e.operator||y.tA[0].value,name:`matchers.${a}.operator`,rules:{required:{value:!0,message:"Required."}}})}),(0,h.jsx)(n.Field,{label:"Value",invalid:!(null==i||null===(g=i.matchers)||void 0===g||null===(x=g[a])||void 0===x||!x.value),error:null==i||null===(f=i.matchers)||void 0===f||null===(b=f[a])||void 0===b||null===(v=b.value)||void 0===v?void 0:v.message,children:(0,h.jsx)(n.Input,Object.assign({},r(`matchers.${a}.value`,{required:{value:!0,message:"Required."}}),{defaultValue:e.value,placeholder:"value"}))}),l.length>1&&(0,h.jsx)(n.IconButton,{className:t.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>o(a),children:"Remove"})]},`${e.id}`)}))}),(0,h.jsx)(n.Button,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const e={name:"",value:"",operator:u._M.equal};c(e)},children:"Add matcher"})]})})})},me=()=>{const{control:e,getValues:t}=(0,oe.Gc)(),a=(0,n.useStyles)(ge),{field:{onChange:s,value:r},fieldState:{invalid:i}}=(0,oe.bc)({name:"startsAt",control:e,rules:{validate:e=>t().endsAt>e}}),{field:{onChange:l,value:c},fieldState:{invalid:d}}=(0,oe.bc)({name:"endsAt",control:e,rules:{validate:e=>t().startsAt<e}}),{field:{onChange:u,value:p}}=(0,oe.bc)({name:"timeZone",control:e}),m=i||d,g=(0,o.dateTime)(r),x=(0,o.dateTime)(c);return(0,h.jsx)(n.Field,{className:a.timeRange,label:"Silence start and end",error:m?"To is before or the same as from":"",invalid:m,children:(0,h.jsx)(n.TimeRangeInput,{value:{from:g,to:x,raw:{from:g,to:x}},timeZone:p,onChange:e=>{s((0,o.dateTime)(e.from)),l((0,o.dateTime)(e.to))},onChangeTimeZone:e=>u(e),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"})})},ge=e=>({timeRange:d.css`
    width: 400px;
  `});var he,xe,fe,be,ve=a("./public/app/core/hooks/useCleanup.ts"),je=a("./public/app/features/alerting/unified/utils/matchers.ts");const ye=(e,t)=>{const a=new Date;if(t){var s;const e=Date.parse(t.endsAt)<Date.now()?{start:a,end:(0,o.addDurationToDate)(a,{hours:2})}:{start:new Date(t.startsAt),end:new Date(t.endsAt)};return{id:t.id,startsAt:e.start.toISOString(),endsAt:e.end.toISOString(),comment:t.comment,createdBy:t.createdBy,duration:(0,o.intervalToAbbreviatedDurationString)(e),isRegex:!1,matchers:(null===(s=t.matchers)||void 0===s?void 0:s.map(y.cm))||[],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone}}{const t=(0,o.addDurationToDate)(a,{hours:2});return Object.assign({id:"",startsAt:a.toISOString(),endsAt:t.toISOString(),comment:"",createdBy:ce.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:u._M.equal}],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone},(e=>{const t={},{matchers:a,comment:s}=e;if("string"==typeof a){const e=(0,je.R)(a);e.length&&(t.matchers=e.map(y.cm))}return"string"==typeof s&&(t.comment=s),t})(e))}},_e=e=>({field:d.css`
    margin: ${e.spacing(1,0)};
  `,textArea:d.css`
    width: 600px;
  `,createdBy:d.css`
    width: 200px;
  `,flexRow:d.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${e.spacing(1)};
    }
  `}),Se=({silence:e,alertManagerSourceName:t})=>{var a,s;const[l]=(0,j.K)(),c=(0,r.useMemo)((()=>ye(l,e)),[e,l]),u=(0,oe.cI)({defaultValues:c}),p=(0,i.useDispatch)(),m=(0,n.useStyles2)(_e),{loading:x}=(0,re._)((e=>e.updateSilence));(0,ve.x)((e=>e.unifiedAlerting.updateSilence));const{register:f,handleSubmit:b,formState:v,watch:S,setValue:w,clearErrors:A}=u,N=S("duration"),k=S("startsAt"),C=S("endsAt"),[$,D]=(0,r.useState)(N);return(0,le.Z)((()=>{if((0,o.isValidDate)(k)&&(0,o.isValidDate)(C))if(N!==$)w("endsAt",(0,o.dateTime)((0,o.addDurationToDate)(new Date(k),(0,o.parseDuration)(N))).toISOString()),D(N);else{const e=new Date(k).valueOf();if(new Date(C).valueOf()>e){const e=(0,o.intervalToAbbreviatedDurationString)({start:new Date(k),end:new Date(C)});w("duration",e),D(e)}}}),700,[A,N,C,$,w,k]),(0,h.jsx)(oe.RV,Object.assign({},u,{children:(0,h.jsxs)("form",{onSubmit:b((e=>{const{id:a,startsAt:s,endsAt:r,comment:n,createdBy:i,matchers:l}=e,c=l.map(y._J),o=(0,_.pickBy)({id:a,startsAt:s,endsAt:r,comment:n,createdBy:i,matchers:c},(e=>!!e));p((0,O.QY)({alertManagerSourceName:t,payload:o,exitOnSave:!0,successMessage:"Silence "+(o.id?"updated":"created")}))})),children:[(0,h.jsxs)(n.FieldSet,{label:""+(e?"Recreate silence":"Create silence"),children:[(0,h.jsxs)("div",{className:m.flexRow,children:[he||(he=(0,h.jsx)(me,{})),(0,h.jsx)(n.Field,{label:"Duration",invalid:!!v.errors.duration,error:v.errors.duration&&("required"===v.errors.duration.type?"Required field":v.errors.duration.message),children:(0,h.jsx)(n.Input,Object.assign({className:m.createdBy},f("duration",{validate:e=>0===Object.keys((0,o.parseDuration)(e)).length?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),{id:"duration"}))})]}),xe||(xe=(0,h.jsx)(pe,{})),(0,h.jsx)(n.Field,{className:(0,d.cx)(m.field,m.textArea),label:"Comment",required:!0,error:null===(a=v.errors.comment)||void 0===a?void 0:a.message,invalid:!!v.errors.comment,children:(0,h.jsx)(n.TextArea,Object.assign({},f("comment",{required:{value:!0,message:"Required."}}),{placeholder:"Details about the silence"}))}),(0,h.jsx)(n.Field,{className:(0,d.cx)(m.field,m.createdBy),label:"Created by",required:!0,error:null===(s=v.errors.createdBy)||void 0===s?void 0:s.message,invalid:!!v.errors.createdBy,children:(0,h.jsx)(n.Input,Object.assign({},f("createdBy",{required:{value:!0,message:"Required."}}),{placeholder:"User"}))})]}),(0,h.jsxs)("div",{className:m.flexRow,children:[x&&(fe||(fe=(0,h.jsx)(n.Button,{disabled:!0,icon:"fa fa-spinner",variant:"primary",children:"Saving..."}))),!x&&(be||(be=(0,h.jsx)(n.Button,{type:"submit",children:"Submit"}))),(0,h.jsx)(n.LinkButton,{href:(0,g.eQ)("alerting/silences",t),variant:"secondary",fill:"outline",children:"Cancel"})]})]})}))};var we,Ae,Ne=a("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");const ke=(0,n.withErrorBoundary)((()=>{var e,t;const[a,s]=(0,se.k)(),o=(0,i.useDispatch)(),d=(0,re._)((e=>e.silences)),u=(0,re._)((e=>e.amAlerts)),p=a?u[a]||ie.oq:void 0,m=(0,l.TH)().pathname.endsWith("/alerting/silences");(0,r.useEffect)((()=>{function e(){a&&(o((0,O.je)(a)),o((0,O.dB)(a)))}e();const t=setInterval((()=>e),ne.cm);return()=>{clearInterval(t)}}),[a,o]);const{result:g,loading:x,error:f}=a&&d[a]||ie.oq,b=(0,r.useCallback)((e=>g&&g.find((t=>t.id===e))),[g]);return a?(0,h.jsxs)(c.J,{pageId:"silences",children:[(0,h.jsx)(Ne.P,{disabled:!m,current:a,onChange:s}),f&&!x&&(0,h.jsx)(n.Alert,{severity:"error",title:"Error loading silences",children:f.message||"Unknown error."}),(null==p?void 0:p.error)&&!(null!=p&&p.loading)&&(0,h.jsx)(n.Alert,{severity:"error",title:"Error loading Alertmanager alerts",children:(null===(e=p.error)||void 0===e?void 0:e.message)||"Unknown error."}),x&&(Ae||(Ae=(0,h.jsx)(n.LoadingPlaceholder,{text:"loading silences..."}))),g&&!f&&(0,h.jsxs)(l.rs,{children:[(0,h.jsx)(l.AW,{exact:!0,path:"/alerting/silences",children:(0,h.jsx)(ae,{silences:g,alertManagerAlerts:null!==(t=null==p?void 0:p.result)&&void 0!==t?t:[],alertManagerSourceName:a})}),(0,h.jsx)(l.AW,{exact:!0,path:"/alerting/silence/new",children:(0,h.jsx)(Se,{alertManagerSourceName:a})}),(0,h.jsx)(l.AW,{exact:!0,path:"/alerting/silence/:id/edit",children:({match:e})=>(null==e?void 0:e.params.id)&&(0,h.jsx)(Se,{silence:b(e.params.id),alertManagerSourceName:a})})]})]}):we||(we=(0,h.jsx)(l.l_,{to:"/alerting/silences"}))}),{style:"page"})},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,t,a)=>{a.d(t,{J:()=>l});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=a("./public/app/core/components/Page/Page.tsx"),r=a("./public/app/core/selectors/navModel.ts"),n=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=({children:e,pageId:t,isLoading:a})=>{const l=(0,r.h)((0,n.useSelector)((e=>e.navIndex)),t);return(0,i.jsx)(s.Z,{navModel:l,children:(0,i.jsx)(s.Z.Contents,{isLoading:a,children:e})})}},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,t,a)=>{a.d(t,{t:()=>l});var s=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=a("./packages/grafana-ui/src/index.ts"),i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=({cols:e,items:t,isExpandable:a=!1,onCollapse:l,onExpand:o,isExpanded:d,renderExpandedContent:u,testIdGenerator:p,renderPrefixCell:m,renderPrefixHeader:g})=>{if((l||o||d)&&!(l&&o&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((a||u)&&(!a||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const h=(0,n.useStyles2)(c(e,a,!!g)),[x,f]=(0,s.useState)([]);return(0,i.jsxs)("div",{className:h.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:h.row,"data-testid":"header",children:[g&&g(),a&&(0,i.jsx)("div",{className:h.cell}),e.map((e=>(0,i.jsx)("div",{className:h.cell,children:e.label},e.id)))]}),t.map(((s,c)=>{var g;const b=d?d(s):x.includes(s.id);return(0,i.jsxs)("div",{className:h.row,"data-testid":null!==(g=null==p?void 0:p(s,c))&&void 0!==g?g:"row",children:[m&&m(s,c,t),a&&(0,i.jsx)("div",{className:(0,r.cx)(h.cell,h.expandCell),children:(0,i.jsx)(n.IconButton,{"aria-label":(b?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:h.expandButton,name:b?"angle-down":"angle-right",onClick:()=>(e=>{d&&l&&o?d(e)?l(e):o(e):f(x.includes(e.id)?x.filter((t=>t!==e.id)):[...x,e.id])})(s),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,r.cx)(h.cell,h.bodyCell),"data-column":e.label,children:e.renderCell(s,c)},`${s.id}-${e.id}`))),b&&u&&(0,i.jsx)("div",{className:h.expandedContentRow,"data-testid":"expanded-content",children:u(s,c,t)})]},s.id)}))]})},c=(e,t,a)=>{const s=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return t&&s.unshift("calc(1em + 16px)"),a&&s.unshift("0"),e=>({container:r.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:r.css`
      display: grid;
      grid-template-columns: ${s.join(" ")};
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

        ${a?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:r.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:r.css`
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
    `,expandCell:r.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:r.css`
      grid-column-end: ${s.length+1};
      grid-column-start: ${a?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:r.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":(e,t,a)=>{a.d(t,{A:()=>c});var s=a("./packages/grafana-ui/src/index.ts"),r=(a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js")),n=a("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/3/opt/drone/yarncache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js"),i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const c=e=>{var t;let{tooltip:a,icon:c,to:d,target:u,onClick:p,className:m,tooltipPlacement:g="top"}=e,h=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);const x=(0,i.jsx)(s.Icon,Object.assign({role:"button",className:(0,r.cx)((0,s.useStyles)(o),m),onClick:p,name:c},h)),f="string"==typeof a?a:void 0;return(0,i.jsx)(s.Tooltip,{content:a,placement:g,children:d?t||(t=(0,i.jsx)(n.Link,{"aria-label":f,to:d,target:u,children:x})):x})},o=()=>r.css`
  cursor: pointer;
`},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,t,a)=>{a.d(t,{G:()=>l});var s=a("./public/app/plugins/datasource/alertmanager/types.ts"),r=(a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/StateTag.tsx")),n=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i={[s.Z9.Active]:"bad",[s.Z9.Unprocessed]:"neutral",[s.Z9.Suppressed]:"info"},l=({state:e})=>(0,n.jsx)(r.i,{state:i[e],children:e})},"./public/app/features/alerting/unified/components/silences/Matchers.tsx":(e,t,a)=>{a.d(t,{g:()=>o});var s=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=a("./packages/grafana-ui/src/index.ts"),n=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./public/app/features/alerting/unified/components/AlertLabel.tsx"),l=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),c=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({matchers:e,onRemoveLabel:t})=>{const a=(0,r.useStyles)(d),n=(0,s.useCallback)((e=>{t&&t(e)}),[t]);return(0,c.jsx)("div",{className:a.wrapper,children:e.map(((e,a)=>{const{name:s,value:r}=e;return(0,c.jsx)(i.i,{labelKey:s,value:r,operator:(0,l.zy)(e),onRemoveLabel:t?()=>n(a):void 0},`${s}-${r}-${a}`)}))})},d=e=>({wrapper:n.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,t,a)=>{a.d(t,{k:()=>o});var s=a("./public/app/core/hooks/useQueryParams.ts"),r=a("./public/app/core/store.ts"),n=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=a("./public/app/features/alerting/unified/utils/constants.ts"),l=a("./public/app/features/alerting/unified/utils/datasource.ts");function c(e){return e===l.GC||!!(0,l.aM)().find((t=>t.name===e))}function o(){const[e,t]=(0,s.K)(),a=(0,n.useCallback)((e=>{c(e)&&(e===l.GC?(r.Z.delete(i.de),t({[i.c4]:null})):(r.Z.set(i.de,e),t({[i.c4]:e})))}),[t]),o=e[i.c4];if(o&&"string"==typeof o)return c(o)?[o,a]:[void 0,a];const d=r.Z.get(i.de);return d&&"string"==typeof d&&c(d)?(a(d),[d,a]):[l.GC,a]}},"./public/app/features/alerting/unified/styles/table.ts":(e,t,a)=>{a.d(t,{D:()=>r});var s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const r=e=>({table:s.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td {
      padding: 0 ${e.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:s.css`
    background-color: ${e.colors.background.primary};
  `,colExpand:s.css`
    width: 36px;
  `,actionsCell:s.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})}}]);
//# sourceMappingURL=AlertSilences.6839ffb2aed352838f3a.js.map