"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2721],{"./public/app/features/admin/AdminEditOrgPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{AdminEditOrgPage:()=>b,default:()=>f});var r,t,n,i=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),c=a("./public/app/core/components/Page/Page.tsx"),l=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/3/opt/drone/yarncache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),o=a("./public/app/types/index.ts"),d=a("./public/app/core/selectors/navModel.ts"),u=a("./public/app/features/users/UsersTable.tsx"),p=a("./.yarn/__virtual__/react-use-virtual-ca2705900f/3/opt/drone/yarncache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useAsyncFn.js"),m=a("./packages/grafana-runtime/src/index.ts"),h=a("./packages/grafana-ui/src/index.ts"),g=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/3/opt/drone/yarncache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),x=a("./public/app/core/core.ts"),j=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const b=({match:e})=>{const s=(0,l.useSelector)((e=>e.navIndex)),a=(0,d.h)(s,"global-orgs"),b=parseInt(e.params.id,10),f=x.Vt.hasPermission(o.bW.OrgsWrite),v=x.Vt.hasPermission(o.bW.OrgUsersRead),[y,_]=(0,i.useState)([]),[N,w]=(0,p.Z)((()=>(async e=>await(0,m.getBackendSrv)().get("/api/orgs/"+e))(b)),[]),[,R]=(0,p.Z)((()=>(async e=>x.Vt.hasPermission(o.bW.OrgUsersRead)?await(0,m.getBackendSrv)().get(`/api/orgs/${e}/users`):[])(b)),[]);(0,i.useEffect)((()=>{w(),R().then((e=>_(e)))}),[w,R]);return(0,j.jsx)(c.Z,{navModel:a,children:(0,j.jsx)(c.Z.Contents,{children:(0,j.jsxs)(j.Fragment,{children:[t||(t=(0,j.jsx)(h.Legend,{children:"Edit organization"})),N.value&&(0,j.jsx)(h.Form,{defaultValues:{orgName:N.value.name},onSubmit:async e=>await(async e=>await(0,m.getBackendSrv)().put("/api/orgs/"+b,Object.assign({},N.value,{name:e})))(e.orgName),children:({register:e,errors:s})=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h.Field,{label:"Name",invalid:!!s.orgName,error:"Name is required",disabled:!f,children:(0,j.jsx)(h.Input,Object.assign({},e("orgName",{required:!0}),{id:"org-name-input"}))}),(0,j.jsx)(h.Button,{disabled:!f,children:"Update"})]})}),(0,j.jsxs)("div",{className:g.css`
              margin-top: 20px;
            `,children:[n||(n=(0,j.jsx)(h.Legend,{children:"Organization users"})),!v&&(r||(r=(0,j.jsx)(h.Alert,{severity:"info",title:"Access denied",children:"You do not have permission to see users in this organization. To update this organization, contact your server administrator."}))),v&&!!y.length&&(0,j.jsx)(u.Z,{users:y,orgId:b,onRoleChange:(e,s)=>{(async(e,s)=>{await(0,m.getBackendSrv)().patch("/api/orgs/"+s+"/users/"+e.userId,e)})(Object.assign({},s,{role:e}),b),_(y.map((a=>s.userId===a.userId?Object.assign({},s,{role:e}):a))),R()},onRemoveUser:e=>{(async(e,s)=>{await(0,m.getBackendSrv)().delete("/api/orgs/"+s+"/users/"+e.userId)})(e,b),_(y.filter((s=>e.userId!==s.userId))),R()}})]})]})})})},f=b},"./public/app/features/users/UsersTable.tsx":(e,s,a)=>{a.d(s,{Z:()=>x});var r,t,n,i,c,l,o=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),d=a("./public/app/types/index.ts"),u=a("./public/app/features/admin/OrgRolePicker.tsx"),p=a("./packages/grafana-ui/src/index.ts"),m=a("./public/app/core/core.ts"),h=a("./public/app/core/components/RolePicker/UserRolePicker.tsx"),g=a("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const x=e=>{const{users:s,orgId:a,onRoleChange:x,onRemoveUser:j}=e,b=m.Vt.hasPermission(d.bW.OrgUsersRoleUpdate),f=m.Vt.hasPermission(d.bW.OrgUsersRemove),v=!b,[y,_]=(0,o.useState)(!1),[N,w]=(0,o.useState)([]),[R,k]=(0,o.useState)({});(0,o.useEffect)((()=>{m.Vt.accessControlEnabled()&&async function(){try{let e=await(0,h.ul)(a);w(e);const s=await(0,h.fh)(a);k(s)}catch(e){console.error("Error loading options")}}()}),[a]);const I=async()=>N,O=async()=>R;return(0,g.jsxs)("table",{className:"filter-table form-inline",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[r||(r=(0,g.jsx)("th",{})),t||(t=(0,g.jsx)("th",{children:"Login"})),n||(n=(0,g.jsx)("th",{children:"Email"})),i||(i=(0,g.jsx)("th",{children:"Name"})),c||(c=(0,g.jsx)("th",{children:"Seen"})),l||(l=(0,g.jsx)("th",{children:"Role"})),(0,g.jsx)("th",{style:{width:"34px"}})]})}),(0,g.jsx)("tbody",{children:s.map(((e,s)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"width-2 text-center",children:(0,g.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"User avatar"})}),(0,g.jsx)("td",{className:"max-width-6",children:(0,g.jsx)("span",{className:"ellipsis",title:e.login,children:e.login})}),(0,g.jsx)("td",{className:"max-width-5",children:(0,g.jsx)("span",{className:"ellipsis",title:e.email,children:e.email})}),(0,g.jsx)("td",{className:"max-width-5",children:(0,g.jsx)("span",{className:"ellipsis",title:e.name,children:e.name})}),(0,g.jsx)("td",{className:"width-1",children:e.lastSeenAtAge}),(0,g.jsx)("td",{className:"width-8",children:m.Vt.accessControlEnabled()?(0,g.jsx)(h.RX,{userId:e.userId,orgId:a,builtInRole:e.role,onBuiltinRoleChange:s=>x(s,e),getRoleOptions:I,getBuiltinRoles:O,disabled:v}):(0,g.jsx)(u.A,{"aria-label":"Role",value:e.role,disabled:!b,onChange:s=>x(s,e)})}),f&&(0,g.jsxs)("td",{children:[(0,g.jsx)(p.Button,{size:"sm",variant:"destructive",onClick:()=>_(e.login),icon:"times","aria-label":"Delete user"}),(0,g.jsx)(p.ConfirmModal,{body:`Are you sure you want to delete user ${e.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>_(!1),isOpen:e.login===y,onConfirm:()=>{j(e)}})]})]},`${e.userId}-${s}`)))})]})}}}]);
//# sourceMappingURL=AdminEditOrgPage.6839ffb2aed352838f3a.js.map