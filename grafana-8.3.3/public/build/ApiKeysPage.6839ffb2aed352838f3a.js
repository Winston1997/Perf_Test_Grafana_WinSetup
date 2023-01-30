"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3082],{"./public/app/features/api-keys/ApiKeysPage.tsx":(e,s,t)=>{t.r(s),t.d(s,{ApiKeysPageUnconnected:()=>V,default:()=>q});var n=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),a=t("./public/app/core/selectors/navModel.ts");const r=e=>e.keys.length,o=e=>{const s=RegExp(e.searchQuery,"i");return e.keys.filter((e=>s.test(e.name)||s.test(e.role)))};var l=t("./public/app/core/services/backend_srv.ts"),c=t("./public/app/features/api-keys/state/reducers.ts");function d(e){return async s=>{const t=await(0,l.i)().get("/api/auth/keys?includeExpired="+e);s((0,c.iK)(t))}}var p,h,u=t("./public/app/core/components/Page/Page.tsx"),y=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),m=t("./packages/grafana-ui/src/index.ts"),x=t("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function g({onDismiss:e,apiKey:s,rootPath:t}){const n=(0,m.useStyles2)(f);return(0,x.jsxs)(m.Modal,{title:"API Key Created",onDismiss:e,onClickBackdrop:e,isOpen:!0,children:[(0,x.jsx)(m.Field,{label:"Key",children:(0,x.jsx)("span",{className:n.label,children:s})}),p||(p=(0,x.jsx)(m.Alert,{severity:"info",title:"You will only be able to view this key here once!",children:"It is not stored in this form, so be sure to copy it now."})),h||(h=(0,x.jsx)("p",{className:"text-muted",children:"You can authenticate a request using the Authorization HTTP header, example:"})),(0,x.jsxs)("pre",{className:n.small,children:['curl -H "Authorization: Bearer ',s,'" ',t,"/api/dashboards/home"]})]})}function f(e){return{label:y.css`
      padding: ${e.spacing(1)};
      background-color: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
    `,small:y.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.bodySmall.fontWeight};
    `}}var j,b,v,A=t("./public/app/core/config.ts"),k=t("./public/app/core/app_events.ts"),K=t("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),C=t("./packages/grafana-data/src/index.ts"),w=t("./public/app/features/profile/state/selectors.ts"),S=t("./public/app/types/index.ts"),I=t("./public/app/core/components/Animations/SlideDown.tsx"),N=t("./public/app/core/components/CloseButton/CloseButton.tsx");const{Input:P}=m.LegacyForms,E=Object.keys(S.B5).map((e=>({label:e,value:e})));function T(e){if(!e)return!0;try{return C.rangeUtil.intervalToSeconds(e),!0}catch{}return!1}const F={[m.EventsWithValidation.onBlur]:[{rule:T,errorMessage:"Not a valid duration"}]},_=({show:e,onClose:s,onKeyAdded:t})=>{const[i,a]=(0,n.useState)(""),[r,o]=(0,n.useState)(S.B5.Viewer),[l,c]=(0,n.useState)("");(0,n.useEffect)((()=>{a(""),o(S.B5.Viewer),c("")}),[e]);return(0,x.jsx)(I.s,{in:e,children:(0,x.jsxs)("div",{className:"gf-form-inline cta-form",children:[(0,x.jsx)(N.P,{onClick:s}),(0,x.jsxs)("form",{className:"gf-form-group",onSubmit:e=>{e.preventDefault(),T(l)&&(t({name:i,role:r,secondsToLive:l}),s())},children:[j||(j=(0,x.jsx)("h5",{children:"Add API Key"})),(0,x.jsxs)("div",{className:"gf-form-inline",children:[(0,x.jsxs)("div",{className:"gf-form max-width-21",children:[b||(b=(0,x.jsx)("span",{className:"gf-form-label",children:"Key name"})),(0,x.jsx)(P,{type:"text",className:"gf-form-input",value:i,placeholder:"Name",onChange:e=>{a(e.currentTarget.value)}})]}),(0,x.jsx)("div",{className:"gf-form",children:(0,x.jsx)(m.InlineField,{label:"Role",children:(0,x.jsx)(m.Select,{inputId:"role-select",value:r,onChange:e=>{o(e.value)},options:E,menuShouldPortal:!0})})}),(0,x.jsx)("div",{className:"gf-form max-width-21",children:(0,x.jsx)(m.InlineField,{tooltip:"The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y",label:"Time to live",children:(0,x.jsx)(P,{id:"time-to-live-input",type:"text",placeholder:"1d",validationEvents:F,value:l,onChange:e=>{c(e.currentTarget.value)}})})}),v||(v=(0,x.jsx)("div",{className:"gf-form",children:(0,x.jsx)(m.Button,{children:"Add"})}))]})]})]})})},Z=({searchQuery:e,disabled:s,onAddClick:t,onSearchChange:n})=>(0,x.jsxs)("div",{className:"page-action-bar",children:[(0,x.jsx)("div",{className:"gf-form gf-form--grow",children:(0,x.jsx)(m.FilterInput,{placeholder:"Search keys",value:e,onChange:n})}),(0,x.jsx)(m.Button,{className:"pull-right",onClick:t,disabled:s,children:"Add API key"})]});var D,B,Q;const z=({apiKeys:e,timeZone:s,onDelete:t})=>(0,x.jsxs)("table",{className:"filter-table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[D||(D=(0,x.jsx)("th",{children:"Name"})),B||(B=(0,x.jsx)("th",{children:"Role"})),Q||(Q=(0,x.jsx)("th",{children:"Expires"})),(0,x.jsx)("th",{style:{width:"34px"}})]})}),e.length>0?(0,x.jsx)("tbody",{children:e.map((e=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.name}),(0,x.jsx)("td",{children:e.role}),(0,x.jsx)("td",{children:M(e.expiration,s)}),(0,x.jsx)("td",{children:(0,x.jsx)(m.DeleteButton,{"aria-label":"Delete API key",size:"sm",onConfirm:()=>t(e)})})]},e.id)))}):null]});function M(e,s){return e?(0,C.dateTimeFormat)(e,{timeZone:s}):"No expiration date"}const L=({children:e})=>{const[s,t]=(0,n.useState)(!1),i=(0,n.useCallback)((()=>{t(!s)}),[s]);return e({isAdding:s,toggleIsAdding:i})};var $=t("./public/app/types/events.ts");function O(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const R={loadApiKeys:d,deleteApiKey:function(e,s){return async t=>{(0,l.i)().delete(`/api/auth/keys/${e}`).then((()=>t(d(s))))}},setSearchQuery:c.ql,addApiKey:function(e,s,t){return async n=>{const i=await(0,l.i)().post("/api/auth/keys",e);n((0,c.ql)("")),n(d(t)),s(i.key)}}},U=(0,i.connect)((function(e){return{navModel:(0,a.h)(e.navIndex,"apikeys"),apiKeys:o(e.apiKeys),searchQuery:e.apiKeys.searchQuery,apiKeysCount:r(e.apiKeys),hasFetched:e.apiKeys.hasFetched,timeZone:(0,w.Z)(e.user)}}),R);class V extends n.PureComponent{constructor(e){super(e),O(this,"onDeleteApiKey",(e=>{this.props.deleteApiKey(e.id,this.state.includeExpired)})),O(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),O(this,"onIncludeExpiredChange",(e=>{this.setState({hasFetched:!1,includeExpired:e.currentTarget.checked},this.fetchApiKeys)})),O(this,"onAddApiKey",(e=>{const s=e=>{const s=window.location.origin+A.ZP.appSubUrl;k.Z.publish(new $.Dn({props:{apiKey:e,rootPath:s},component:g}))},t=e.secondsToLive;try{const n=t?C.rangeUtil.intervalToSeconds(t):null,i=Object.assign({},e,{secondsToLive:n});this.props.addApiKey(i,s,this.state.includeExpired),this.setState((e=>Object.assign({},e,{isAdding:!1})))}catch(e){console.error(e)}})),this.state={includeExpired:!1,hasFetched:!1}}componentDidMount(){this.fetchApiKeys()}async fetchApiKeys(){await this.props.loadApiKeys(this.state.includeExpired)}render(){const{hasFetched:e,navModel:s,apiKeysCount:t,apiKeys:n,searchQuery:i,timeZone:a}=this.props,{includeExpired:r}=this.state;return e?(0,x.jsx)(u.Z,{navModel:s,children:(0,x.jsx)(u.Z.Contents,{isLoading:!1,children:(0,x.jsx)(L,{children:({isAdding:e,toggleIsAdding:s})=>{const o=!e&&0===t,l=t>0;return(0,x.jsxs)(x.Fragment,{children:[o?(0,x.jsx)(K.Z,{title:"You haven't added any API keys yet.",buttonIcon:"key-skeleton-alt",onClick:s,buttonTitle:"New API key",proTip:"Remember, you can provide view-only API access to other applications."}):null,l?(0,x.jsx)(Z,{searchQuery:i,disabled:e,onAddClick:s,onSearchChange:this.onSearchQueryChange}):null,(0,x.jsx)(_,{show:e,onClose:s,onKeyAdded:this.onAddApiKey}),l?(0,x.jsxs)(m.VerticalGroup,{children:[(0,x.jsx)(m.InlineField,{label:"Show expired",children:(0,x.jsx)(m.InlineSwitch,{id:"showExpired",value:r,onChange:this.onIncludeExpiredChange})}),(0,x.jsx)(z,{apiKeys:n,timeZone:a,onDelete:this.onDeleteApiKey})]}):null]})}})})}):(0,x.jsx)(u.Z,{navModel:s,children:(0,x.jsx)(u.Z.Contents,{isLoading:!0})})}}const q=U(V)}}]);
//# sourceMappingURL=ApiKeysPage.6839ffb2aed352838f3a.js.map