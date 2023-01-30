"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2001],{"./public/app/plugins/datasource/mixed/module.ts":(e,a,r)=>{r.r(a),r.d(a,{Datasource:()=>h,MixedDatasource:()=>h});var s=r("./packages/grafana-data/src/index.ts"),t=r("./packages/grafana-runtime/src/index.ts"),o=r("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),n=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),d=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),i=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js"),p=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),c=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),u=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js"),l=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),m=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js"),g=r("../../opt/drone/yarncache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js");class h extends s.DataSourceApi{constructor(e){super(e)}query(e){const a=e.targets.filter((e=>{var a;return"-- Mixed --"!==(null===(a=e.datasource)||void 0===a?void 0:a.type)}));if(!a.length)return(0,n.of)({data:[]});const r=(0,o.groupBy)(a,"datasource.uid"),s=[];for(const a in r){const o=r[a];s.push({datasource:(0,t.getDataSourceSrv)().get(o[0].datasource,e.scopedVars),targets:o})}return s.length?this.batchQueries(s,e):(0,n.of)({data:[]})}batchQueries(e,a){const r=e.filter(this.isQueryable).map(((e,r)=>(0,d.Dp)(e.datasource).pipe((0,p.z)((i=>{const p=(0,o.cloneDeep)(a);return p.requestId=`mixed-${r}-${p.requestId||""}`,p.targets=e.targets,(0,d.Dp)(i.query(p)).pipe((0,c.U)((e=>Object.assign({},e,{data:e.data||[],state:s.LoadingState.Loading,key:`mixed-${r}-${e.key||""}`}))),(0,u.q)(),(0,l.K)((e=>((e=(0,t.toDataQueryError)(e)).message=`${i.name}: ${e.message}`,(0,n.of)([{data:[],state:s.LoadingState.Error,error:e,key:`mixed-${r}-${p.requestId||""}`}])))))})))));return(0,i.D)(r).pipe((0,g.u)(((e,a)=>a.reduce(((e,a)=>(e.push.apply(e,a),e)),e)),[]),(0,c.U)(this.finalizeResponses),(0,m.J)())}testDatasource(){return Promise.resolve({})}isQueryable(e){return e&&Array.isArray(e.targets)&&e.targets.length>0}finalizeResponses(e){const{length:a}=e;if(0===a)return e;const r=e.find((e=>e.state===s.LoadingState.Error));return r?e.push(r):e[a-1].state=s.LoadingState.Done,e}}}}]);
//# sourceMappingURL=mixedPlugin.6839ffb2aed352838f3a.js.map