"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1999,7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,t)=>{t.r(s),t.d(s,{ServerStats:()=>m});var a=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/types/index.ts"),c=t("./packages/grafana-runtime/src/index.ts");var o,l,d,p,x,u=t("./public/app/core/services/context_srv.ts"),h=t("./public/app/features/plugins/admin/components/Loader.tsx"),g=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=()=>{const[e,s]=(0,a.useState)(null),[t,n]=(0,a.useState)(!1),m=(0,i.useStyles2)(j);return(0,a.useEffect)((()=>{u.Vt.hasAccess(r.bW.ActionServerStatsRead,u.Vt.isGrafanaAdmin)&&(n(!0),(async()=>(0,c.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),n(!1)})))}),[]),u.Vt.hasAccess(r.bW.ActionServerStatsRead,u.Vt.isGrafanaAdmin)?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:m.title,children:"Instance statistics"}),t?(0,g.jsx)("div",{className:m.loader,children:o||(o=(0,g.jsx)(h.a,{text:"Loading instance stats..."}))}):e?(0,g.jsxs)("div",{className:m.row,children:[(0,g.jsx)(f,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:l||(l=(0,g.jsx)(i.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,g.jsxs)("div",{className:m.doubleRow,children:[(0,g.jsx)(f,{content:[{name:"Data sources",value:e.datasources}],footer:d||(d=(0,g.jsx)(i.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"}))}),(0,g.jsx)(f,{content:[{name:"Alerts",value:e.alerts}],footer:p||(p=(0,g.jsx)(i.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,g.jsx)(f,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:x||(x=(0,g.jsx)(i.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"}))})]}):(0,g.jsx)("p",{className:m.notFound,children:"No stats found."})]}):null},j=e=>({title:n.css`
      margin-bottom: ${e.spacing(4)};
    `,row:n.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:n.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:n.css`
      height: 290px;
    `,notFound:n.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),f=({content:e,footer:s})=>{const t=(0,i.useStyles2)(v);return(0,g.jsx)(i.CardContainer,{className:t.container,disableHover:!0,children:(0,g.jsxs)("div",{className:t.inner,children:[(0,g.jsx)("div",{className:t.content,children:e.map((e=>(0,g.jsxs)("div",{className:t.row,children:[(0,g.jsx)("span",{children:e.name}),(0,g.jsx)("span",{children:e.value})]},e.name)))}),s&&(0,g.jsx)("div",{children:s})]})})},v=e=>({container:n.css`
      padding: ${e.spacing(2)};
    `,inner:n.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:n.css`
      flex: 1 0 auto;
    `,row:n.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/admin/UpgradePage.tsx":(e,s,t)=>{t.r(s),t.d(s,{UpgradeInfo:()=>P,UpgradePage:()=>z,default:()=>T});t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),n=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/core/components/Page/Page.tsx"),c=t("./public/app/core/selectors/navModel.ts"),o=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l={fontWeight:500,fontSize:"26px",lineHeight:"123%"},d=(0,i.stylesFactory)((e=>{const s=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",t=e.isDark?e.palette.dark9:e.palette.gray6;return{container:n.css`
      padding: 36px 79px;
      background: ${e.colors.panelBg};
    `,footer:n.css`
      text-align: center;
      padding: 16px;
      background: ${t};
    `,header:n.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${s}') right;
    `}})),p=({header:e,editionNotice:s,subheader:t,children:a})=>{const n=(0,i.useTheme)(),r=d(n);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:r.header,children:[(0,o.jsx)("h2",{style:l,children:e}),t&&(0,o.jsx)("h3",{children:t}),(0,o.jsx)(x,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"},children:(0,o.jsx)("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}})})]}),(0,o.jsx)("div",{className:r.container,children:a}),s&&(0,o.jsx)("div",{className:r.footer,children:s})]})},x=({size:e,style:s,children:t})=>(0,o.jsx)("div",{style:Object.assign({width:e,height:e,position:"absolute",bottom:0,right:0,borderRadius:"50%"},s),children:t});var u,h,g,m,j,f,v,b,y,S,_,k,w,N,A=t("./public/app/features/admin/ServerStats.tsx");const z=({navModel:e})=>(0,o.jsx)(r.Z,{navModel:e,children:u||(u=(0,o.jsxs)(r.Z.Contents,{children:[(0,o.jsx)(A.ServerStats,{}),(0,o.jsx)(P,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})]}))}),L={fontWeight:500,fontSize:"26px",lineHeight:"123%"},P=({editionNotice:e})=>{const s=(0,i.useStyles2)(D);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:s.title,children:"Enterprise license"}),(0,o.jsx)(p,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:e,children:(0,o.jsxs)("div",{className:s.column,children:[h||(h=(0,o.jsx)(B,{})),g||(g=(0,o.jsx)(E,{}))]})})]})},D=e=>({column:n.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:n.css`
      margin: ${e.spacing(4)} 0;
    `}),$=()=>(0,o.jsxs)("div",{style:{marginTop:"40px",marginBottom:"30px"},children:[m||(m=(0,o.jsx)("h2",{style:L,children:"Get Grafana Enterprise"})),j||(j=(0,o.jsx)(G,{})),(0,o.jsx)("p",{style:{paddingTop:"12px"},children:"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."})]}),G=()=>f||(f=(0,o.jsx)(i.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",children:"Contact us and get a free trial"})),E=()=>(0,o.jsxs)("div",{children:[v||(v=(0,o.jsx)("h4",{children:"At your service"})),b||(b=(0,o.jsxs)(C,{children:[(0,o.jsx)(R,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),(0,o.jsx)(R,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),(0,o.jsxs)(R,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg",children:["24 x 7 x 365 support via",(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(R,{title:"Email"}),(0,o.jsx)(R,{title:"Private Slack channel"}),(0,o.jsx)(R,{title:"Phone"})]})]}),(0,o.jsx)(R,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg",children:"in the upgrade process"})]})),(0,o.jsxs)("div",{style:{marginTop:"20px"},children:[y||(y=(0,o.jsx)("strong",{children:"Also included:"})),S||(S=(0,o.jsx)("br",{})),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]}),_||(_=(0,o.jsx)($,{}))]}),B=()=>(0,o.jsxs)("div",{style:{paddingRight:"11px"},children:[k||(k=(0,o.jsx)("h4",{children:"Enhanced functionality"})),w||(w=(0,o.jsx)(M,{}))]}),M=()=>N||(N=(0,o.jsxs)(C,{children:[(0,o.jsx)(R,{title:"Data source permissions"}),(0,o.jsx)(R,{title:"Reporting"}),(0,o.jsx)(R,{title:"SAML authentication"}),(0,o.jsx)(R,{title:"Enhanced LDAP integration"}),(0,o.jsx)(R,{title:"Team Sync",children:"LDAP, GitHub OAuth, Auth Proxy, Okta"}),(0,o.jsx)(R,{title:"White labeling"}),(0,o.jsx)(R,{title:"Auditing"}),(0,o.jsx)(R,{title:"Settings updates at runtime"}),(0,o.jsx)(R,{title:"Grafana usage insights",children:(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(R,{title:"Sort dashboards by popularity in search"}),(0,o.jsx)(R,{title:"Find unused dashboards"}),(0,o.jsx)(R,{title:"Dashboard usage stats drawer"}),(0,o.jsx)(R,{title:"Dashboard presence indicators"})]})}),(0,o.jsx)(R,{title:"Enterprise plugins",children:(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(R,{title:"Oracle"}),(0,o.jsx)(R,{title:"Splunk"}),(0,o.jsx)(R,{title:"Service Now"}),(0,o.jsx)(R,{title:"Dynatrace"}),(0,o.jsx)(R,{title:"New Relic"}),(0,o.jsx)(R,{title:"DataDog"}),(0,o.jsx)(R,{title:"AppDynamics"}),(0,o.jsx)(R,{title:"SAP HANA®"}),(0,o.jsx)(R,{title:"Gitlab"}),(0,o.jsx)(R,{title:"Honeycomb"}),(0,o.jsx)(R,{title:"Jira"}),(0,o.jsx)(R,{title:"MongoDB"}),(0,o.jsx)(R,{title:"Salesforce"}),(0,o.jsx)(R,{title:"Snowflake"}),(0,o.jsx)(R,{title:"Wavefront"})]})})]})),C=({children:e,nested:s})=>{const t=n.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${s?0:8}px;
    }
  `;return(0,o.jsx)("div",{className:t,children:e})},R=({children:e,title:s,image:t})=>{const a=t||"public/img/licensing/checkmark.svg",i=n.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,r=n.css`
    font-weight: 500;
    line-height: 1.7;
  `;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{src:a,alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:r,children:s}),e]})]})},T=(0,a.connect)((e=>({navModel:(0,c.h)(e.navIndex,"upgrading")})))(z)},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,t)=>{t.d(s,{a:()=>r});t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./packages/grafana-ui/src/index.ts"),n=t("./public/app/features/plugins/admin/components/Page.tsx"),i=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=({text:e="Loading..."})=>(0,i.jsx)(n.T,{children:(0,i.jsx)("div",{className:"page-loader-wrapper",children:(0,i.jsx)(a.LoadingPlaceholder,{text:e})})})},"./public/app/features/plugins/admin/components/Page.tsx":(e,s,t)=>{t.d(s,{T:()=>r});t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),i=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=({children:e})=>{const s=(0,n.useStyles2)(c);return(0,i.jsx)("div",{className:"page-container",children:(0,i.jsx)("div",{className:s,children:e})})},c=e=>a.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=1999.6839ffb2aed352838f3a.js.map