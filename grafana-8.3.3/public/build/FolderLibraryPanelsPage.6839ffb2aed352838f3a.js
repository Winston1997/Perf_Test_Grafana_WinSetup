"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3778],{"./public/app/features/folders/FolderLibraryPanelsPage.tsx":(e,a,s)=>{s.r(a),s.d(a,{FolderLibraryPanelsPage:()=>h,default:()=>b});var n=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useAsync.js"),t=s("./public/app/core/selectors/navModel.ts"),o=s("./public/app/features/folders/state/navModel.ts"),l=s("./public/app/core/components/Page/Page.tsx"),d=s("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx"),c=s("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx"),u=s("./public/app/features/folders/state/actions.ts"),p=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const f={getFolderByUid:u.Pb};function h({navModel:e,getFolderByUid:a,folderUid:s,folder:r}){const{loading:t}=(0,i.Z)((async()=>await a(s)),[a,s]),[o,u]=(0,n.useState)(void 0);return(0,p.jsx)(l.Z,{navModel:e,children:(0,p.jsxs)(l.Z.Contents,{isLoading:t,children:[(0,p.jsx)(d.N,{onClick:u,currentFolderId:r.id,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0}),o?(0,p.jsx)(c.b,{onDismiss:()=>u(void 0),libraryPanel:o}):null]})})}const b=(0,r.connect)(((e,a)=>{const s=a.match.params.uid;return{navModel:(0,t.h)(e.navIndex,`folder-library-panels-${s}`,(0,o._)(1)),folderUid:s,folder:e.folder}}),f)(h)},"./public/app/features/folders/state/actions.ts":(e,a,s)=>{s.d(a,{Pb:()=>c,OD:()=>u,Go:()=>p,a:()=>f,v7:()=>b,Uk:()=>m,pz:()=>v,W7:()=>y});var n=s("./packages/grafana-data/src/index.ts"),r=s("./packages/grafana-runtime/src/index.ts"),i=s("./public/app/core/services/backend_srv.ts"),t=s("./public/app/core/actions/index.ts"),o=s("./public/app/features/folders/state/navModel.ts"),l=s("./public/app/core/app_events.ts"),d=s("./public/app/features/folders/state/reducers.ts");function c(e){return async a=>{const s=await i.ae.getFolderByUid(e);a((0,d.G3)(s)),a((0,t.RL)((0,o.B)(s)))}}function u(e){return async a=>{const s=await i.ae.put(`/api/folders/${e.uid}`,{title:e.title,version:e.version});l.Z.emit(n.AppEvents.alertSuccess,["Folder saved"]),r.locationService.push(`${s.url}/settings`)}}function p(e){return async()=>{await i.ae.delete(`/api/folders/${e}?forceDeleteRules=false`),r.locationService.push("/dashboards")}}function f(e){return async a=>{const s=await i.ae.get(`/api/folders/${e}/permissions`);a((0,d.R7)(s))}}function h(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function b(e,a){return async(s,n)=>{const r=n().folder,t=[];for(const s of r.permissions){if(s.inherited)continue;const n=h(s);e===s&&(n.permission=a),t.push(n)}await i.ae.post(`/api/folders/${r.uid}/permissions`,{items:t}),await s(f(r.uid))}}function m(e){return async(a,s)=>{const n=s().folder,r=[];for(const a of n.permissions)a.inherited||a===e||r.push(h(a));await i.ae.post(`/api/folders/${n.uid}/permissions`,{items:r}),await a(f(n.uid))}}function v(e){return async(a,s)=>{const n=s().folder,r=[];for(const e of n.permissions)e.inherited||r.push(h(e));r.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),await i.ae.post(`/api/folders/${n.uid}/permissions`,{items:r}),await a(f(n.uid))}}function y(e){return async()=>{const a=await(0,r.getBackendSrv)().post("/api/folders",{title:e});l.Z.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),r.locationService.push(n.locationUtil.stripBaseFromUrl(a.url))}}},"./public/app/features/folders/state/navModel.ts":(e,a,s)=>{function n(e){const a={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:`folder-dashboards-${e.uid}`,text:"Dashboards",url:e.url}]};return a.children.push({active:!1,icon:"library-panel",id:`folder-library-panels-${e.uid}`,text:"Panels",url:`${e.url}/library-panels`}),e.canAdmin&&a.children.push({active:!1,icon:"lock",id:`folder-permissions-${e.uid}`,text:"Permissions",url:`${e.url}/permissions`}),e.canSave&&a.children.push({active:!1,icon:"cog",id:`folder-settings-${e.uid}`,text:"Settings",url:`${e.url}/settings`}),a}function r(e){const a=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return a.children[e].active=!0,{main:a,node:a.children[e]}}s.d(a,{B:()=>n,_:()=>r})},"./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":(e,a,s)=>{s.d(a,{b:()=>p});var n,r=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=s("./packages/grafana-ui/src/index.ts"),o=s("./packages/grafana-data/src/index.ts"),l=s("./packages/grafana-runtime/src/index.ts"),d=s("./public/app/features/library-panels/state/api.ts"),c=s("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),u=s("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function p({libraryPanel:e,onDismiss:a}){const s=(0,t.useStyles2)(f),[i,p]=(0,r.useState)(!1),[h,b]=(0,r.useState)(0),[m,v]=(0,r.useState)(void 0);(0,r.useEffect)((()=>{(async()=>{const a=await(0,d.Ef)(e.uid);b(a.length)})()}),[e.uid]);const y=(0,r.useCallback)((a=>async function(e,a,s){s(!0);const n=(await(0,d.E8)(e)).filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))).map((e=>({label:e.title,value:e})));return s(!1),n}(e.uid,a,p)),[e.uid]),g=(0,r.useMemo)((()=>(0,c.debounce)(y,300,{leading:!0,trailing:!0})),[y]);return(0,u.jsxs)(t.Modal,{title:"View panel in dashboard",onDismiss:a,onClickBackdrop:a,isOpen:!0,children:[(0,u.jsxs)("div",{className:s.container,children:[0===h?n||(n=(0,u.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,h>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["This panel is being used in"," ",(0,u.jsxs)("strong",{children:[h," ",h>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,u.jsx)(t.AsyncSelect,{menuShouldPortal:!0,isClearable:!0,isLoading:i,defaultOptions:!0,loadOptions:g,onChange:v,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,u.jsxs)(t.Modal.ButtonRow,{children:[(0,u.jsx)(t.Button,{variant:"secondary",onClick:a,fill:"outline",children:"Cancel"}),(0,u.jsx)(t.Button,{onClick:e=>{var a;e.preventDefault(),l.locationService.push(o.urlUtil.renderUrl(`/d/${null==m||null===(a=m.value)||void 0===a?void 0:a.uid}`,{}))},disabled:!Boolean(m),children:m?`View panel in ${null==m?void 0:m.label}...`:"View panel in dashboard..."})]})]})}function f(e){return{container:i.css``}}}}]);
//# sourceMappingURL=FolderLibraryPanelsPage.6839ffb2aed352838f3a.js.map