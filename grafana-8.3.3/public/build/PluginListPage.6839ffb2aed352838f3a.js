"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{"./public/app/features/plugins/admin/components/Badges/index.ts":(e,a,s)=>{s.d(a,{SX:()=>i,IF:()=>p,oZ:()=>c,xh:()=>g});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("./packages/grafana-data/src/index.ts"),n=s("./packages/grafana-ui/src/index.ts"),t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function i({error:e}){const a=function(e){switch(e){case r.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case r.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case r.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(e);return(0,t.jsx)(n.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:a})}var o=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const l=e=>o.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,n.useStyles2)(l);return(0,t.jsx)(n.Badge,{text:"Installed",color:"orange",className:e})}var d,u=s("./packages/grafana-runtime/src/index.ts");function p({plugin:e}){var a;const s=(0,n.useStyles2)(l);return null!==(a=u.config.licenseInfo)&&void 0!==a&&a.hasValidLicense?d||(d=(0,t.jsx)(n.Badge,{text:"Enterprise",color:"blue"})):(0,t.jsxs)(n.HorizontalGroup,{children:[(0,t.jsx)(n.PluginSignatureBadge,{status:e.signature}),(0,t.jsx)(n.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:s}),(0,t.jsx)(n.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:a=>{a.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${e.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g({plugin:e}){const a=(0,n.useStyles2)(m);return e.hasUpdate&&!e.isCore&&e.type!==r.PluginType.renderer?(0,t.jsx)("p",{className:a.hasUpdate,children:"Update available!"}):null}const m=e=>({hasUpdate:o.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Page.tsx":(e,a,s)=>{s.d(a,{T:()=>i});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=s("./packages/grafana-ui/src/index.ts"),t=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({children:e})=>{const a=(0,n.useStyles2)(o);return(0,t.jsx)("div",{className:"page-container",children:(0,t.jsx)("div",{className:a,children:e})})},o=e=>r.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,a,s)=>{s.d(a,{E:()=>n});s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function n({alt:e,className:a,src:s,height:n}){return(0,r.jsx)("img",{src:s,className:a,alt:e,loading:"lazy",height:n})}},"./public/app/features/plugins/admin/pages/Browse.tsx":(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var r,n=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),o=s("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),l=s("./packages/grafana-runtime/src/index.ts"),c=s("./public/app/features/plugins/admin/types.ts"),d=s("./public/app/features/plugins/admin/components/Badges/index.ts"),u=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function p({plugin:e}){var a,s;return e.isEnterprise?(0,u.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[a||(a=(0,u.jsx)(d.IF,{plugin:e})),e.isDisabled&&(0,u.jsx)(d.SX,{error:e.error}),s||(s=(0,u.jsx)(d.xh,{plugin:e}))]}):(0,u.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[(0,u.jsx)(i.PluginSignatureBadge,{status:e.signature}),e.isDisabled&&(0,u.jsx)(d.SX,{error:e.error}),e.isInstalled&&(r||(r=(0,u.jsx)(d.oZ,{}))),(0,u.jsx)(d.xh,{plugin:e})]})}var g=s("./public/app/features/plugins/admin/components/PluginLogo.tsx");const m="48px";function f({plugin:e,pathName:a,displayMode:s=c.lL.Grid}){const r=(0,i.useStyles2)(x),n=s===c.lL.List;return(0,u.jsxs)("a",{href:`${a}/${e.id}`,className:(0,t.cx)(r.container,{[r.list]:n}),children:[(0,u.jsx)(g.E,{src:e.info.logos.small,className:r.pluginLogo,height:m,alt:""}),(0,u.jsx)("h2",{className:(0,t.cx)(r.name,"plugin-name"),children:e.name}),(0,u.jsxs)("div",{className:(0,t.cx)(r.content,"plugin-content"),children:[(0,u.jsxs)("p",{children:["By ",e.orgName]}),(0,u.jsx)(p,{plugin:e})]}),(0,u.jsx)("div",{className:r.pluginType,children:e.type&&(0,u.jsx)(i.Icon,{name:c.Co[e.type],title:`${e.type} plugin`})})]})}const x=e=>({container:t.css`
      display: grid;
      grid-template-columns: ${m} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:t.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:t.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:t.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:t.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:t.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),h=({plugins:e,displayMode:a})=>{const s=a===c.lL.List,r=(0,i.useStyles2)(y),n=(0,o.TH)();return(0,u.jsx)("div",{className:(0,t.cx)(r.container,{[r.list]:s}),"data-testid":"plugin-list",children:e.map((e=>(0,u.jsx)(f,{plugin:e,pathName:n.pathname,displayMode:a},e.id)))})},y=e=>({container:t.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${e.spacing(3)};
    `,list:t.css`
      grid-template-columns: 1fr;
    `});var b=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useDebounce.js");const v=({value:e,onSearch:a})=>{const[s,r]=(0,n.useState)(e);return((e,a=0,s=[])=>{const r=(0,n.useRef)(!0),t=[...s,r];(0,b.Z)((()=>{if(!r.current)return e();r.current=!1}),a,t)})((()=>a(null!=s?s:"")),500,[s]),(0,u.jsx)(i.FilterInput,{value:s,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||a(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{r(e)},width:46})};var j=s("./public/app/features/plugins/admin/components/Page.tsx");const S=({children:e,wrap:a,className:s})=>{const r=(0,i.useTheme2)(),n=_(r,a);return(0,u.jsx)("div",{className:(0,t.cx)(n.container,s),children:e})},_=(e,a)=>({container:t.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${a?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var P=s("./public/app/core/components/Page/Page.tsx"),B=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),w=s("./public/app/core/selectors/navModel.ts"),z=s("./public/app/features/plugins/admin/state/hooks.ts"),N=s("./public/app/features/plugins/admin/helpers.ts");function $({route:e}){const a=(0,o.TH)(),s=(0,l.locationSearchToObject)(a.search),r=D(e.routeName),n=(0,B.useSelector)((e=>(0,w.h)(e.navIndex,r))),{displayMode:d,setDisplayMode:p}=(0,z.iY)(),g=(0,i.useStyles2)(k),m={push:({query:e})=>{(0,l.getLocationSrv)().update({partial:!0,replace:!1,query:e})}},f=(0,z.y9)(),x=s.q||"",y=s.filterBy||"installed",b=s.filterByType||"all",_=s.sortBy||N.Nh.nameAsc,{isLoading:$,error:L,plugins:C}=(0,z.GE)({query:x,filterBy:y,filterByType:b,sortBy:_}),T=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],A=e=>{m.push({query:{filterBy:e}})};return L?(console.error(L.message),null):(0,u.jsx)(P.T,{navModel:n,children:(0,u.jsx)(P.T.Contents,{children:(0,u.jsxs)(j.T,{children:[(0,u.jsxs)(S,{wrap:!0,children:[(0,u.jsx)(v,{value:x,onSearch:e=>{m.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),(0,u.jsxs)(S,{wrap:!0,className:g.actionBar,children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{value:b,onChange:e=>{m.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),f?(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{value:y,onChange:A,options:T})}):(0,u.jsx)(i.Tooltip,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{disabled:!0,value:y,onChange:A,options:T})})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.Select,{menuShouldPortal:!0,"aria-label":"Sort Plugins List",width:24,value:_,onChange:e=>{m.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})}),(0,u.jsx)("div",{children:(0,u.jsx)(i.RadioButtonGroup,{className:g.displayAs,value:d,onChange:p,options:[{value:c.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:c.lL.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,u.jsx)("div",{className:g.listWrap,children:$?(0,u.jsx)(i.LoadingPlaceholder,{className:t.css`
                  margin-bottom: 0;
                `,text:"Loading results"}):(0,u.jsx)(h,{plugins:C,displayMode:d})})]})})})}const k=e=>({actionBar:t.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:t.css`
    margin-top: ${e.spacing(2)};
  `,displayAs:t.css`
    svg {
      margin-right: 0;
    }
  `}),D=e=>e===c.cd.HomeAdmin||e===c.cd.BrowseAdmin?"admin-plugins":"plugins"},"./public/app/features/plugins/admin/state/hooks.ts":(e,a,s)=>{s.d(a,{iY:()=>C,bt:()=>N,ZV:()=>z,GE:()=>j,UQ:()=>_,bJ:()=>S,x3:()=>P,IS:()=>$,y9:()=>w,S1:()=>B,wq:()=>k});var r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),t=s("./public/app/features/plugins/admin/state/reducer.ts"),i=s("./public/app/features/plugins/admin/state/actions.ts"),o=s("../../opt/drone/yarncache/reselect-npm-4.1.0-69c7ae5e35-ef150c3ccc.zip/node_modules/reselect/es/index.js"),l=s("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,d=(0,o.P1)(c,(({items:e})=>e)),u=(0,o.P1)(c,(({settings:e})=>e.displayMode)),{selectAll:p,selectById:g}=t.CD.getSelectors(d),m=(e,a)=>(0,o.P1)((e=>(0,o.P1)(p,(a=>a.filter((a=>"installed"===e?a.isInstalled:!a.isCore)))))(e),(e=>e.filter((e=>"all"===a||e.type===a)))),f=(e,a,s)=>(0,o.P1)(m(a,s),(e=>(0,o.P1)(p,(a=>""===e?[]:a.filter((a=>{const s=[];return a.name&&s.push(a.name.toLowerCase()),a.orgName&&s.push(a.orgName.toLowerCase()),s.some((a=>a.includes(e.toLowerCase())))})))))(e),((a,s)=>""===e?a:s)),x=(0,o.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),h=e=>(0,o.P1)(c,(({requests:a={}})=>a[e])),y=e=>(0,o.P1)(h(e),(e=>(null==e?void 0:e.status)===l.eE.Pending)),b=e=>(0,o.P1)(h(e),(e=>(null==e?void 0:e.status)===l.eE.Rejected?null==e?void 0:e.error:null));var v=s("./public/app/features/plugins/admin/helpers.ts");const j=({query:e="",filterBy:a="installed",filterByType:s="all",sortBy:r=v.Nh.nameAsc})=>{D();const t=(0,n.useSelector)(f(e,a,s)),{isLoading:i,error:o}=z();return{isLoading:i,error:o,plugins:(0,v.AA)(t,r)}},S=e=>(D(),L(e),(0,n.useSelector)((a=>g(a,e)))),_=()=>(D(),(0,n.useSelector)(x)),P=()=>{const e=(0,n.useDispatch)();return(a,s,r)=>e((0,i.N9)({id:a,version:s,isUpdating:r}))},B=()=>{const e=(0,n.useDispatch)();return a=>e((0,i.Tz)(a))},w=()=>null===(0,n.useSelector)(b(i.tQ.typePrefix)),z=()=>({isLoading:(0,n.useSelector)(y(i.Qd.typePrefix)),error:(0,n.useSelector)(b(i.Qd.typePrefix))}),N=()=>({isLoading:(0,n.useSelector)(y(i.DD.typePrefix)),error:(0,n.useSelector)(b(i.DD.typePrefix))}),$=()=>({isInstalling:(0,n.useSelector)(y(i.N9.typePrefix)),error:(0,n.useSelector)(b(i.N9.typePrefix))}),k=()=>({isUninstalling:(0,n.useSelector)(y(i.Tz.typePrefix)),error:(0,n.useSelector)(b(i.Tz.typePrefix))}),D=()=>{const e=(0,n.useDispatch)(),a=(0,n.useSelector)((s=i.Qd.typePrefix,(0,o.P1)(h(s),(e=>void 0===e))));var s;(0,r.useEffect)((()=>{a&&e((0,i.Qd)())}),[])},L=e=>{const a=(0,n.useDispatch)(),s=(0,n.useSelector)((a=>g(a,e))),t=!(0,n.useSelector)(y(i.DD.typePrefix))&&s&&!s.details;(0,r.useEffect)((()=>{t&&a((0,i.DD)(e))}),[s])},C=()=>{const e=(0,n.useDispatch)();return{displayMode:(0,n.useSelector)(u),setDisplayMode:a=>e((0,t.UC)(a))}}}}]);
//# sourceMappingURL=PluginListPage.6839ffb2aed352838f3a.js.map