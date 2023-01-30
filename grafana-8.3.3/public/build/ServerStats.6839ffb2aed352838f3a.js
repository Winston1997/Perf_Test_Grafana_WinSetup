"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,a)=>{a.r(s),a.d(s,{ServerStats:()=>x});var n=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),c=a("./public/app/types/index.ts"),i=a("./packages/grafana-runtime/src/index.ts");var o,d,l,p,u,m=a("./public/app/core/services/context_srv.ts"),h=a("./public/app/features/plugins/admin/components/Loader.tsx"),f=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const x=()=>{const[e,s]=(0,n.useState)(null),[a,t]=(0,n.useState)(!1),x=(0,r.useStyles2)(g);return(0,n.useEffect)((()=>{m.Vt.hasAccess(c.bW.ActionServerStatsRead,m.Vt.isGrafanaAdmin)&&(t(!0),(async()=>(0,i.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),t(!1)})))}),[]),m.Vt.hasAccess(c.bW.ActionServerStatsRead,m.Vt.isGrafanaAdmin)?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:x.title,children:"Instance statistics"}),a?(0,f.jsx)("div",{className:x.loader,children:o||(o=(0,f.jsx)(h.a,{text:"Loading instance stats..."}))}):e?(0,f.jsxs)("div",{className:x.row,children:[(0,f.jsx)(v,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:d||(d=(0,f.jsx)(r.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,f.jsxs)("div",{className:x.doubleRow,children:[(0,f.jsx)(v,{content:[{name:"Data sources",value:e.datasources}],footer:l||(l=(0,f.jsx)(r.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"}))}),(0,f.jsx)(v,{content:[{name:"Alerts",value:e.alerts}],footer:p||(p=(0,f.jsx)(r.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,f.jsx)(v,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:u||(u=(0,f.jsx)(r.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"}))})]}):(0,f.jsx)("p",{className:x.notFound,children:"No stats found."})]}):null},g=e=>({title:t.css`
      margin-bottom: ${e.spacing(4)};
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:t.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:t.css`
      height: 290px;
    `,notFound:t.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),v=({content:e,footer:s})=>{const a=(0,r.useStyles2)(j);return(0,f.jsx)(r.CardContainer,{className:a.container,disableHover:!0,children:(0,f.jsxs)("div",{className:a.inner,children:[(0,f.jsx)("div",{className:a.content,children:e.map((e=>(0,f.jsxs)("div",{className:a.row,children:[(0,f.jsx)("span",{children:e.name}),(0,f.jsx)("span",{children:e.value})]},e.name)))}),s&&(0,f.jsx)("div",{children:s})]})})},j=e=>({container:t.css`
      padding: ${e.spacing(2)};
    `,inner:t.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:t.css`
      flex: 1 0 auto;
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,a)=>{a.d(s,{a:()=>c});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=a("./packages/grafana-ui/src/index.ts"),t=a("./public/app/features/plugins/admin/components/Page.tsx"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({text:e="Loading..."})=>(0,r.jsx)(t.T,{children:(0,r.jsx)("div",{className:"page-loader-wrapper",children:(0,r.jsx)(n.LoadingPlaceholder,{text:e})})})},"./public/app/features/plugins/admin/components/Page.tsx":(e,s,a)=>{a.d(s,{T:()=>c});a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({children:e})=>{const s=(0,t.useStyles2)(i);return(0,r.jsx)("div",{className:"page-container",children:(0,r.jsx)("div",{className:s,children:e})})},i=e=>n.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=ServerStats.6839ffb2aed352838f3a.js.map