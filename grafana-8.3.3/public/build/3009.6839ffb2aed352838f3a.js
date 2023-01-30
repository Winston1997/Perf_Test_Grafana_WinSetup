"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3009],{"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,n,a)=>{a.d(n,{a:()=>d});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./public/app/features/alerting/unified/components/Well.tsx"),s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=a("./public/app/features/alerting/unified/utils/constants.ts"),l=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=["message","description"],d=({annotationKey:e,value:n})=>{const a=o.vY[e]?(0,l.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,l.jsx)("span",{children:o.vY[e]})}):e;return(0,l.jsx)(i.C,{label:a,horizontal:!0,children:(0,l.jsx)(u,{annotationKey:e,value:n})})},u=({annotationKey:e,value:n})=>{const a=(0,r.useStyles)(p);return c.includes(e)?(0,l.jsx)(t.t,{children:n}):n&&n.startsWith("http")?(0,l.jsx)("a",{href:n,target:"__blank",className:a.link,children:n}):(0,l.jsx)(l.Fragment,{children:n})},p=e=>({well:s.css`
    word-break: break-all;
  `,link:s.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,n,a)=>{a.d(n,{C:()=>i});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({className:e,label:n,horizontal:a,children:i})=>{const l=(0,s.useStyles2)(o);return(0,r.jsxs)("div",{className:(0,t.cx)(e,l.field,a?l.fieldHorizontal:l.fieldVertical),children:[(0,r.jsx)("div",{children:n}),(0,r.jsx)("div",{children:i})]})},o=e=>({fieldHorizontal:t.css`
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
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,n,a)=>{a.d(n,{t:()=>o});var t=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({cols:e,items:n,isExpandable:a=!1,onCollapse:o,onExpand:c,isExpanded:d,renderExpandedContent:u,testIdGenerator:p,renderPrefixCell:m,renderPrefixHeader:f})=>{if((o||c||d)&&!(o&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((a||u)&&(!a||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const g=(0,r.useStyles2)(l(e,a,!!f)),[x,h]=(0,t.useState)([]);return(0,i.jsxs)("div",{className:g.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:g.row,"data-testid":"header",children:[f&&f(),a&&(0,i.jsx)("div",{className:g.cell}),e.map((e=>(0,i.jsx)("div",{className:g.cell,children:e.label},e.id)))]}),n.map(((t,l)=>{var f;const b=d?d(t):x.includes(t.id);return(0,i.jsxs)("div",{className:g.row,"data-testid":null!==(f=null==p?void 0:p(t,l))&&void 0!==f?f:"row",children:[m&&m(t,l,n),a&&(0,i.jsx)("div",{className:(0,s.cx)(g.cell,g.expandCell),children:(0,i.jsx)(r.IconButton,{"aria-label":(b?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:g.expandButton,name:b?"angle-down":"angle-right",onClick:()=>(e=>{d&&o&&c?d(e)?o(e):c(e):h(x.includes(e.id)?x.filter((n=>n!==e.id)):[...x,e.id])})(t),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,s.cx)(g.cell,g.bodyCell),"data-column":e.label,children:e.renderCell(t,l)},`${t.id}-${e.id}`))),b&&u&&(0,i.jsx)("div",{className:g.expandedContentRow,"data-testid":"expanded-content",children:u(t,l,n)})]},t.id)}))]})},l=(e,n,a)=>{const t=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return n&&t.unshift("calc(1em + 16px)"),a&&t.unshift("0"),e=>({container:s.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:s.css`
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

        ${a?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:s.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:s.css`
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
    `,expandCell:s.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:s.css`
      grid-column-end: ${t.length+1};
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
    `,expandButton:s.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/Well.tsx":(e,n,a)=>{a.d(n,{t:()=>i});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./packages/grafana-ui/src/index.ts"),s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({children:e,className:n})=>{const a=(0,t.useStyles)(o);return(0,r.jsx)("div",{className:(0,s.cx)(a.wrapper,n),children:e})},o=e=>({wrapper:s.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":(e,n,a)=>{a.d(n,{f:()=>_});var t,s,r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),o=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),l=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),c=a("./packages/grafana-data/src/index.ts"),d=a("./packages/grafana-runtime/src/index.ts"),u=a("./packages/grafana-ui/src/index.ts"),p=a("./public/app/core/services/context_srv.ts"),m=a("./public/app/core/core.ts"),f=a("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts"),g=a("./public/app/features/alerting/unified/utils/constants.ts"),x=a("./public/app/features/alerting/unified/utils/datasource.ts"),h=a("./public/app/features/alerting/unified/utils/misc.ts"),b=a("./public/app/features/alerting/unified/utils/rule-id.ts"),y=a("./public/app/features/alerting/unified/state/actions.ts"),j=a("./public/app/features/alerting/unified/utils/alertmanager.ts"),v=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const _=({rule:e,rulesSource:n})=>{var a;const l=(0,i.useDispatch)(),_=(0,o.TH)(),k=(0,u.useStyles2)(z),{namespace:w,group:$,rulerRule:S}=e,[C,R]=(0,r.useState)(),E=(0,x.HY)(n)?n:null===(a=(0,j.Xy)(n.jsonData.alertmanagerUid))||void 0===a?void 0:a.name,N=[],D=[],{isEditable:q}=(0,f.M)((0,x.EG)(n),S),U=_.pathname+_.search,I=_.pathname.endsWith("/view");const F=()=>{if(C&&C.rulerRule){const e=b.Zk((0,x.EG)(C.namespace.rulesSource),C.namespace.name,C.group.name,C.rulerRule);l((0,y.hS)(e,{navigateTo:I?"/alerting/list":void 0})),R(void 0)}},B=()=>{if((0,x.jq)(n)){const a=`${encodeURIComponent(n.name)}/${encodeURIComponent(e.name)}`;return`${d.config.appUrl}${d.config.appSubUrl}/alerting/${a}/find`}return window.location.href.split("?")[0]};if((0,x.jq)(n)&&p.Vt.isEditor&&N.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:(0,h.mH)(n.name,e.query),children:"See graph"},"explore")),e.annotations[g.q6.runbookURL]&&N.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:e.annotations[g.q6.runbookURL],children:"View runbook"},"runbook")),e.annotations[g.q6.dashboardUID]){const n=e.annotations[g.q6.dashboardUID];if(n){N.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(n)}`,children:"Go to dashboard"},"dashboard"));const a=e.annotations[g.q6.panelID];a&&N.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(n)}?viewPanel=${encodeURIComponent(a)}`,children:"Go to panel"},"panel"))}}if(E&&N.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",icon:"bell-slash",target:"__blank",href:(0,h.S1)(E,e),children:"Silence"},"silence")),I||D.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"secondary",icon:"eye",href:(0,h.V2)(n,e,U),children:"View"},"view")),q&&S){const a=(0,x.EG)(n),t=b.Zk(a,w.name,$.name,S),s=c.urlUtil.renderUrl(`${d.config.appSubUrl}/alerting/${encodeURIComponent(b.$V(t))}/edit`,{returnTo:U});I&&D.push((0,v.jsx)(u.ClipboardButton,{onClipboardCopy:()=>{m.h$.emit(c.AppEvents.alertSuccess,["URL copied!"])},onClipboardError:e=>{m.h$.emit(c.AppEvents.alertError,["Error while copying URL",e.text])},className:k.button,size:"sm",getText:B,children:"Copy link to rule"},"copy")),D.push((0,v.jsx)(u.LinkButton,{className:k.button,size:"xs",variant:"secondary",icon:"pen",href:s,children:"Edit"},"edit"),(0,v.jsx)(u.Button,{className:k.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>R(e),children:"Delete"},"delete"))}return N.length||D.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:k.wrapper,children:[(0,v.jsx)(u.HorizontalGroup,{width:"auto",children:N.length?N:t||(t=(0,v.jsx)("div",{}))}),(0,v.jsx)(u.HorizontalGroup,{width:"auto",children:D.length?D:s||(s=(0,v.jsx)("div",{}))})]}),!!C&&(0,v.jsx)(u.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:F,onDismiss:()=>R(void 0)})]}):null};const z=e=>({wrapper:l.css`
    padding: ${e.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${e.colors.border.medium};
  `,button:l.css`
    height: 24px;
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.size.sm};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":(e,n,a)=>{a.d(n,{J:()=>o});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("./packages/grafana-ui/src/index.ts"),r=a("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function o(e){const{annotations:n}=e,a=(0,s.useStyles2)(l);return 0===n.length?null:(0,i.jsx)("div",{className:a.annotations,children:n.map((([e,n])=>(0,i.jsx)(r.a,{annotationKey:e,value:n},e)))})}const l=()=>({annotations:t.css`
    margin-top: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":(e,n,a)=>{a.d(n,{C:()=>p});var t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("./packages/grafana-runtime/src/index.ts"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./public/app/features/expressions/ExpressionDatasource.ts"),o=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),l=a("./public/app/features/alerting/unified/utils/datasource.ts"),c=a("./public/app/features/alerting/unified/utils/rules.ts"),d=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),u=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function p(e){const{rulesSource:n,rule:a}=e,t=(0,r.useStyles2)(m),p=(0,o.useMemo)((()=>{if((0,l.jq)(n))return[{name:n.name,icon:n.meta.info.logos.small}];if((0,c.Pc)(a.rulerRule)){const{data:e}=a.rulerRule.grafana_alert,n=e.reduce(((e,n)=>{const a=(0,s.getDataSourceSrv)().getInstanceSettings(n.datasourceUid);return a&&a.uid!==i.Yq?(e[a.name]={name:a.name,icon:a.meta.info.logos.small},e):e}),{});return Object.values(n)}return[]}),[a,n]);return 0===p.length?null:(0,u.jsx)(d.C,{label:"Data source",children:p.map((({name:e,icon:n},a)=>(0,u.jsxs)("div",{children:[n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{alt:`${e} datasource logo`,className:t.dataSourceIcon,src:n})," "]}),e]},e)))})}function m(e){const n=e.spacing(2);return{dataSourceIcon:t.css`
      width: ${n};
      height: ${n};
    `}}},"./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":(e,n,a)=>{a.d(n,{C:()=>h});var t=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./public/app/features/alerting/unified/utils/datasource.ts"),i=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=a("./.yarn/__virtual__/@grafana-slate-react-virtual-13c8a80c0a/3/opt/drone/yarncache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js"),l=a("./public/app/plugins/datasource/prometheus/promql.ts"),c=a("./public/app/plugins/datasource/loki/syntax.ts"),d=a("../../opt/drone/yarncache/prismjs-npm-1.25.0-8d60169ac0-04d8eae9d1.zip/node_modules/prismjs/prism.js"),u=a("./packages/grafana-ui/src/index.ts"),p=a("./public/app/features/alerting/unified/components/Well.tsx"),m=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const f=({language:e,expr:n})=>{const a=(0,t.useMemo)((()=>[(0,u.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>e},Object.assign({},d.languages,{[e]:"logql"===e?c.ZP:l.ZP}))]),[e]),s=(0,t.useMemo)((()=>(0,u.makeValue)(n)),[n]);return(0,m.jsx)(o.ML,{plugins:a,value:s,readOnly:!0})},g=({expression:e,rulesSource:n})=>{const a=(0,u.useStyles)(x);return(0,m.jsx)(p.t,{className:(0,s.cx)(a.well,"slate-query-field"),children:(0,r.jq)(n)?(0,m.jsx)(f,{expr:e,language:n.type===r.ye.Loki?"logql":"promql"}):e})},x=e=>({well:s.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});function h(e){const{annotations:n,rulesSource:a,rule:t}=e,o=b();return(0,r.jq)(a)?(0,m.jsx)(i.C,{label:"Expression",horizontal:!0,className:(0,s.cx)({[o.exprRow]:!!n.length}),children:(0,m.jsx)(g,{expression:t.query,rulesSource:a})}):null}const b=()=>({exprRow:s.css`
    margin-bottom: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":(e,n,a)=>{a.d(n,{M:()=>f});var t=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=a("./public/app/features/alerting/unified/utils/rules.ts"),r=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),i=(a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),a("./public/app/features/alerting/unified/components/AlertLabels.tsx")),o=a("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),l=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({instance:e})=>{const n=(Object.entries(e.annotations||{})||[]).filter((([e,n])=>!!n.trim()));return(0,l.jsxs)("div",{children:[e.value&&(0,l.jsx)(r.C,{label:"Value",horizontal:!0,children:e.value}),n.map((([e,n])=>(0,l.jsx)(o.a,{annotationKey:e,value:n},e)))]})};var d=a("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),u=a("./public/app/features/alerting/unified/components/DynamicTable.tsx");const p=({instances:e})=>{const n=(0,t.useMemo)((()=>e.map((e=>({data:e,id:(0,s.pB)(e)}))).sort(((e,n)=>e.id.localeCompare(n.id)))),[e]);return(0,l.jsx)(u.t,{cols:m,isExpandable:!0,items:n,renderExpandedContent:({data:e})=>(0,l.jsx)(c,{instance:e})})},m=[{id:"state",label:"State",renderCell:({data:{state:e}})=>(0,l.jsx)(d.l,{state:e}),size:"80px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,l.jsx)(i.s,{labels:e})},{id:"created",label:"Created",renderCell:({data:{activeAt:e}})=>(0,l.jsx)(l.Fragment,{children:e.startsWith("0001")?"-":e.substr(0,19).replace("T"," ")}),size:"150px"}];function f(e){var n;const{promRule:a}=e;return(0,s.x_)(a)&&null!==(n=a.alerts)&&void 0!==n&&n.length?(0,l.jsx)(r.C,{label:"Matching instances",horizontal:!0,children:(0,l.jsx)(p,{instances:a.alerts})}):null}},"./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":(e,n,a)=>{a.d(n,{V:()=>l});var t,s,r=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./packages/grafana-ui/src/index.ts"),o=(a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js"));const l=({rule:e})=>{const n=(0,i.useStyles2)(c);return"err"===e.health||"error"===e.health?(0,o.jsx)(i.Tooltip,{theme:"error",content:e.lastError||"No error message provided.",children:(0,o.jsxs)("div",{className:n.warn,children:[t||(t=(0,o.jsx)(i.Icon,{name:"exclamation-triangle"})),s||(s=(0,o.jsx)("span",{children:"error"}))]})}):(0,o.jsx)(o.Fragment,{children:e.health})},c=e=>({warn:r.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},"./public/app/features/alerting/unified/components/rules/RuleState.tsx":(e,n,a)=>{a.d(n,{p:()=>m});var t,s,r=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./packages/grafana-data/src/index.ts"),o=a("./packages/grafana-ui/src/index.ts"),l=a("./public/app/types/unified-alerting-dto.ts"),c=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),d=a("./public/app/features/alerting/unified/utils/rules.ts"),u=a("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),p=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=({rule:e,isDeleting:n,isCreating:a})=>{const r=(0,o.useStyles2)(f),{promRule:m}=e,g=(0,c.useMemo)((()=>{var e;if(m&&(0,d.x_)(m)&&null!==(e=m.alerts)&&void 0!==e&&e.length&&m.state!==l.x_.Inactive){const e=(0,d.ub)(m);if(e)return(0,p.jsxs)("span",{title:String(e),className:r.for,children:["for"," ",(0,i.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null}),[m,r]);return n?t||(t=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(o.Spinner,{}),"deleting"]})):a?s||(s=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[" ",(0,p.jsx)(o.Spinner,{}),"creating"]})):m&&(0,d.x_)(m)?(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(u.l,{state:m.state}),g]}):m&&(0,d.OP)(m)?(0,p.jsx)(p.Fragment,{children:"Recording rule"}):(0,p.jsx)(p.Fragment,{children:"n/a"})},f=e=>({for:r.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},"./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":(e,n,a)=>{a.d(n,{Z:()=>o});var t=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=a("./public/app/features/alerting/unified/utils/datasource.ts"),r=a("./public/app/features/alerting/unified/utils/rules.ts"),i=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function o(e){const n=(0,i._)((e=>e.promRules)),a=(0,i._)((e=>e.rulerRules)),o=(0,t.useRef)({}),c=(0,t.useMemo)((()=>{if(e){const n=(0,s.o_)(e);if(!n)throw new Error(`Unknown rules source: ${e}`);return[n]}return(0,s.h_)()}),[e]);return(0,t.useMemo)((()=>c.map((e=>{var t,i;const c=(0,s.jq)(e)?e.name:e,d=null===(t=n[c])||void 0===t?void 0:t.result,u=null===(i=a[c])||void 0===i?void 0:i.result,p=o.current[c];if(p&&p.promRules===d&&p.rulerRules===u)return p.result;const m={};Object.entries(u||{}).forEach((([n,a])=>{const t={rulesSource:e,name:n,groups:[]};m[n]=t,function(e,n){e.groups=n.map((n=>{const a={name:n.name,interval:n.interval,rules:[]};return a.rules=n.rules.map((n=>function(e,n,a){return(0,r.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:n,group:a}:(0,r.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:n,group:a}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:n,group:a}}(n,e,a))),a}))}(t,a)})),null==d||d.forEach((({name:n,groups:a})=>{!function(e,n){n.forEach((n=>{var a;let t=e.groups.find((e=>e.name===n.name));t||(t={name:n.name,rules:[]},e.groups.push(t)),(null!==(a=n.rules)&&void 0!==a?a:[]).forEach((n=>{const a=function(e,n,a){var t;if((0,s.HY)(a))return n.rules.find((n=>n.name===e.name));return null!==(t=n.rules.find((n=>!n.promRule&&l(n,e,!0))))&&void 0!==t?t:n.rules.find((n=>!n.promRule&&l(n,e,!1)))}(n,t,e.rulesSource);a?a.promRule=n:t.rules.push(function(e,n,a){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,r.x_)(e)&&e.annotations||{},promRule:e,namespace:n,group:a}}(n,e,t))}))}))}(m[n]=m[n]||{rulesSource:e,name:n,groups:[]},a)}));const f=Object.values(m);return(0,s.HY)(e)&&f.forEach((e=>{e.groups=[{name:"default",rules:e.groups.flatMap((e=>e.rules)).sort(((e,n)=>e.name.localeCompare(n.name)))}]})),o.current[c]={promRules:d,rulerRules:u,result:f},f})).flat()),[n,a,c])}function l(e,n,a=!0){return e.name===n.name&&JSON.stringify([a?c(e.query):"",e.labels,e.annotations])===JSON.stringify([a?c(n.query):"",n.labels||{},(0,r.x_)(n)&&n.annotations||{}])}function c(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},"./public/app/features/alerting/unified/hooks/useFolder.ts":(e,n,a)=>{a.d(n,{W:()=>l});var t=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),s=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=a("./public/app/features/alerting/unified/state/actions.ts"),o=a("./public/app/features/alerting/unified/utils/redux.ts");function l(e){const n=(0,t.useDispatch)(),a=(0,s._)((e=>e.folders));if((0,r.useEffect)((()=>{e&&n((0,i.sw)(e))}),[n,e]),e){const n=a[e]||o.oq;return{folder:n.result,loading:n.loading}}return{loading:!1}}},"./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":(e,n,a)=>{a.d(n,{M:()=>u});var t=a("./public/app/core/services/context_srv.ts"),s=a("./public/app/features/alerting/unified/utils/rules.ts"),r=a("./public/app/features/alerting/unified/hooks/useFolder.ts"),i=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),o=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),l=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),c=a("./public/app/features/alerting/unified/state/actions.ts"),d=a("./public/app/features/alerting/unified/utils/datasource.ts");function u(e,n){var a,u;const p=(0,i._)((e=>e.lotexSupportsRuleEditing)),m=(0,o.useDispatch)(),f=n&&(0,s.Pc)(n)?n.grafana_alert.namespace_uid:void 0,{folder:g,loading:x}=(0,r.W)(f);if((0,l.useEffect)((()=>{void 0===p[e]&&e!==d.GC&&m((0,c.Yb)(e))}),[e,p,m]),!n)return{isEditable:!1,loading:!1};if((0,s.Pc)(n)){if(!f)throw new Error(`Rule ${n.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:null==g?void 0:g.canSave,loading:x}}return{isEditable:t.Vt.isEditor&&!(null===(a=p[e])||void 0===a||!a.result),loading:!(null===(u=p[e])||void 0===u||!u.loading)}}}}]);
//# sourceMappingURL=3009.6839ffb2aed352838f3a.js.map