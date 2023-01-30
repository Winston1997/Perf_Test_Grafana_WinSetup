"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7918],{"./public/app/features/alerting/unified/RedirectToRuleViewer.tsx":(e,r,n)=>{n.r(r),n.d(r,{RedirectToRuleViewer:()=>b,default:()=>j});n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s,a,t,o,i=n("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),u=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=n("./packages/grafana-ui/src/index.ts"),c=n("./public/app/features/alerting/unified/hooks/useCombinedRule.ts"),d=n("./public/app/features/alerting/unified/utils/misc.ts"),p=n("./public/app/features/alerting/unified/utils/datasource.ts"),f=n("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx"),m=n("./public/app/features/alerting/unified/components/AlertLabels.tsx"),g=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const h="Alerting / Find rule";function b(e){const{name:r,sourceName:n}=e.match.params,u=(0,l.useStyles2)(x),{error:b,loading:j,result:v,dispatched:y}=(0,c.X)(r,n);if(b)return(0,g.jsx)(f.$,{title:h,children:(0,g.jsx)(l.Alert,{title:`Failed to load rules from ${n}`,children:(0,g.jsxs)("details",{className:u.errorMessage,children:[b.message,s||(s=(0,g.jsx)("br",{})),!(null==b||!b.stack)&&b.stack]})})});if(j||!y||!Array.isArray(v))return a||(a=(0,g.jsx)(f.$,{title:h,children:(0,g.jsx)(l.LoadingPlaceholder,{text:"Loading rule..."})}));if(!r||!n)return t||(t=(0,g.jsx)(i.l_,{to:"/notfound"}));const _=(0,p.o_)(n);if(!_)return(0,g.jsx)(f.$,{title:h,children:(0,g.jsx)(l.Alert,{title:"Could not view rule",children:(0,g.jsx)("details",{className:u.errorMessage,children:`Could not find data source with name: ${n}.`})})});if(1===v.length){const[e]=v;return(0,g.jsx)(i.l_,{to:(0,d.V2)(_,e,"/alerting/list")})}return(0,g.jsxs)(f.$,{title:h,children:[(0,g.jsxs)("div",{children:["Several rules in ",(0,g.jsx)("span",{className:u.param,children:n})," matched the name"," ",(0,g.jsx)("span",{className:u.param,children:r}),", please select the rule you want to view."]}),(0,g.jsx)("div",{className:u.rules,children:v.map(((e,r)=>(0,g.jsxs)(l.Card,{heading:e.name,href:(0,d.V2)(_,e,"/alerting/list"),children:[(0,g.jsxs)(l.Card.Meta,{separator:"",children:[o||(o=(0,g.jsx)(l.Icon,{name:"folder"})),(0,g.jsx)("span",{className:u.namespace,children:`${e.namespace.name} / ${e.group.name}`})]}),(0,g.jsx)(l.Card.Tags,{children:(0,g.jsx)(m.s,{labels:e.labels})})]},`${e.name}-${r}`)))})]})}function x(e){return{param:u.css`
      font-style: italic;
      color: ${e.colors.text.secondary};
    `,rules:u.css`
      margin-top: ${e.spacing(2)};
    `,namespace:u.css`
      margin-left: ${e.spacing(1)};
    `,errorMessage:u.css`
      white-space: pre-wrap;
    `}}const j=(0,l.withErrorBoundary)(b,{style:"page"})},"./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":(e,r,n)=>{n.d(r,{$:()=>u,l:()=>l});n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),a=n("./packages/grafana-runtime/src/index.ts"),t=n("./packages/grafana-ui/src/index.ts"),o=n("./public/app/core/components/Page/Page.tsx"),i=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function u(e){const{wrapInContent:r=!0,children:n,title:s}=e,u=(0,t.useStyles2)(c);return(0,i.jsxs)(o.T,{children:[(0,i.jsx)(t.PageToolbar,{title:s,pageIcon:"bell",onGoBack:()=>a.locationService.push("/alerting/list")}),(0,i.jsx)("div",{className:u.content,children:r?(0,i.jsx)(l,Object.assign({},e)):n})]})}function l({children:e,padding:r=2}){const n=(0,t.useStyles2)(d(r));return(0,i.jsx)("div",{className:n.wrapper,children:e})}const c=e=>({content:s.css`
      margin: ${e.spacing(0,2,2)};
      max-width: ${e.breakpoints.values.xxl}px;
    `}),d=e=>r=>({wrapper:s.css`
      background: ${r.colors.background.primary};
      border: 1px solid ${r.colors.border.weak};
      border-radius: ${r.shape.borderRadius()};
      padding: ${r.spacing(e)};
    `})},"./public/app/features/alerting/unified/hooks/useCombinedRule.ts":(e,r,n)=>{n.d(r,{H:()=>d,X:()=>p});var s=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a=n("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),t=n("./public/app/features/alerting/unified/utils/redux.ts"),o=n("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts"),i=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),u=n("./public/app/features/alerting/unified/state/actions.ts"),l=n("./public/app/features/alerting/unified/utils/rule-id.ts"),c=n("./public/app/features/alerting/unified/utils/rules.ts");function d(e,r){const n=f(r),a=(0,o.Z)(r),t=(0,s.useMemo)((()=>{if(e&&r&&0!==a.length)for(const n of a)for(const s of n.groups)for(const n of s.rules){const s=l.Yd(r,n);if(l.Dg(s,e))return n}}),[e,r,a]);return Object.assign({},n,{result:t})}function p(e,r){const n=f(r),a=(0,o.Z)(r),t=(0,s.useMemo)((()=>{if(!e||!r||0===a.length)return[];const n=[];for(const r of a)for(const s of r.groups)for(const r of s.rules)r.name===e&&n.push(r);return n}),[e,r,a]);return Object.assign({},n,{result:t})}function f(e){var r;const n=(0,a.useDispatch)(),t=(0,i._)((e=>e.promRules)),o=m(e,t),l=(0,i._)((e=>e.rulerRules)),d=m(e,l);return(0,s.useEffect)((()=>{e&&(n((0,u.y6)({rulesSourceName:e})),n((0,u.UR)({rulesSourceName:e})))}),[n,e]),{loading:o.loading||d.loading,error:(null!==(r=o.error)&&void 0!==r?r:(0,c.m$)(d))?void 0:d.error,dispatched:o.dispatched&&d.dispatched}}function m(e,r){if(!e)return t.oq;const n=r[e];return n||t.oq}},"./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":(e,r,n)=>{n.d(r,{Z:()=>i});var s=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a=n("./public/app/features/alerting/unified/utils/datasource.ts"),t=n("./public/app/features/alerting/unified/utils/rules.ts"),o=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function i(e){const r=(0,o._)((e=>e.promRules)),n=(0,o._)((e=>e.rulerRules)),i=(0,s.useRef)({}),l=(0,s.useMemo)((()=>{if(e){const r=(0,a.o_)(e);if(!r)throw new Error(`Unknown rules source: ${e}`);return[r]}return(0,a.h_)()}),[e]);return(0,s.useMemo)((()=>l.map((e=>{var s,o;const l=(0,a.jq)(e)?e.name:e,c=null===(s=r[l])||void 0===s?void 0:s.result,d=null===(o=n[l])||void 0===o?void 0:o.result,p=i.current[l];if(p&&p.promRules===c&&p.rulerRules===d)return p.result;const f={};Object.entries(d||{}).forEach((([r,n])=>{const s={rulesSource:e,name:r,groups:[]};f[r]=s,function(e,r){e.groups=r.map((r=>{const n={name:r.name,interval:r.interval,rules:[]};return n.rules=r.rules.map((r=>function(e,r,n){return(0,t.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:r,group:n}:(0,t.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:r,group:n}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:r,group:n}}(r,e,n))),n}))}(s,n)})),null==c||c.forEach((({name:r,groups:n})=>{!function(e,r){r.forEach((r=>{var n;let s=e.groups.find((e=>e.name===r.name));s||(s={name:r.name,rules:[]},e.groups.push(s)),(null!==(n=r.rules)&&void 0!==n?n:[]).forEach((r=>{const n=function(e,r,n){var s;if((0,a.HY)(n))return r.rules.find((r=>r.name===e.name));return null!==(s=r.rules.find((r=>!r.promRule&&u(r,e,!0))))&&void 0!==s?s:r.rules.find((r=>!r.promRule&&u(r,e,!1)))}(r,s,e.rulesSource);n?n.promRule=r:s.rules.push(function(e,r,n){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,t.x_)(e)&&e.annotations||{},promRule:e,namespace:r,group:n}}(r,e,s))}))}))}(f[r]=f[r]||{rulesSource:e,name:r,groups:[]},n)}));const m=Object.values(f);return(0,a.HY)(e)&&m.forEach((e=>{e.groups=[{name:"default",rules:e.groups.flatMap((e=>e.rules)).sort(((e,r)=>e.name.localeCompare(r.name)))}]})),i.current[l]={promRules:c,rulerRules:d,result:m},m})).flat()),[r,n,l])}function u(e,r,n=!0){return e.name===r.name&&JSON.stringify([n?l(e.query):"",e.labels,e.annotations])===JSON.stringify([n?l(r.query):"",r.labels||{},(0,t.x_)(r)&&r.annotations||{}])}function l(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}}}]);
//# sourceMappingURL=AlertingRedirectToRule.6839ffb2aed352838f3a.js.map