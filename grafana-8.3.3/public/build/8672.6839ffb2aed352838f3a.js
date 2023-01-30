(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8672],{"./packages/jaeger-ui-components/src/index.ts":(e,t,n)=>{"use strict";n.d(t,{kt:()=>ra,f6:()=>S,f8:()=>T,T2:()=>ta,Ox:()=>zr,y3:()=>pt,Mp:()=>lt,DE:()=>ft,J5:()=>ct,YB:()=>dt,h2:()=>R,rZ:()=>Ma,R1:()=>Oa,Fg:()=>O});var r=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),o=n("../../opt/drone/yarncache/@emotion-cache-npm-11.5.0-713285e054-8b3fac281e.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),a=n("../../opt/drone/yarncache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),s=n("../../opt/drone/yarncache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function i(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function l(e,t,n){var r=[],o=(0,s.f)(e,r,n);return r.length<2?n:o+t(r)}var c=function e(t){for(var n="",r=0;r<t.length;r++){var o=t[r];if(null!=o){var a=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))a=e(o);else for(var s in a="",o)o[s]&&s&&(a&&(a+=" "),a+=s);break;default:a=o}a&&(n&&(n+=" "),n+=a)}}return n};const d=function(e){var t=(0,o.Z)(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=(0,a.O)(n,t.registered,void 0);return(0,s.M)(t,o,!1),t.key+"-"+o.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return l(t.registered,n,c(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=(0,a.O)(n,t.registered);i(t,o)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=(0,a.O)(n,t.registered),s="animation-"+o.name;return i(t,{name:o.name,styles:"@keyframes "+s+"{"+o.styles+"}"}),s},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:s.f.bind(null,t.registered),merge:l.bind(null,t.registered,n)}};var p=d({key:"css"}),u=(p.flush,p.hydrate,p.cx),h=(p.merge,p.getRegisteredStyles,p.injectGlobal,p.keyframes),m=p.css,g=(p.sheet,p.cache,n("../../opt/drone/yarncache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js")),f=n.n(g),b=n("./packages/grafana-ui/src/index.ts"),y=n("../../opt/drone/yarncache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),v=n.n(y),x=n("../../opt/drone/yarncache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js"),w=n("../../opt/drone/yarncache/tinycolor2-npm-1.4.1-c3c0a28523-ffc22d9866.zip/node_modules/tinycolor2/tinycolor.js"),_=n.n(w),k=n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const j=["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#DA70BF","#4DC19C","#776E57"];let T;!function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light"}(T||(T={}));const I={type:T.Light,borderStyle:"1px solid #bbb",servicesColorPalette:["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#162A65","#DA70BF","#125C77","#4DC19C","#776E57"]};function C(e){return!(!e||!e.type)&&e.type===T.Light}const D=r.createContext(void 0);D.displayName="ThemeContext";const S=D.Provider;function E(e){return(0,k.jsx)(D.Consumer,{children:t=>{const n=L(t);return e.children(n)}})}const L=(0,x.Z)((e=>{const t={};return C(e)||(t.servicesColorPalette=j),e?Object.assign({},I,t,e):I})),N=e=>{let t=t=>(0,k.jsx)(E,{children:n=>(0,k.jsx)(e,Object.assign({},Object.assign({},t,{theme:n})))});return t.displayName=`WithTheme(${e.displayName})`,t=v()(t,e),t.wrapped=e,t};function O(){const e=(0,r.useContext)(D);return Object.assign({},I,e)}const M=e=>(0,x.Z)(e);function R(e,t,n){if(C(e))return t;{if(n){const e=_()(t);return _().mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=_()(t).toHsl();e.l=1-e.l;const r=_()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}const z=M((()=>({TimelineCollapser:m`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `})));function P(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:o}=e,a=z();return(0,k.jsxs)("div",{className:a.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[(0,k.jsx)(b.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),(0,k.jsx)(b.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:o}),(0,k.jsx)(b.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),(0,k.jsx)(b.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var H;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(H||(H={}));const $=H;var V=n("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const B=["getBounds","tag","resetBoundsOnResize"];function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class F{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:r=!0}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,B);A(this,"_bounds",void 0),A(this,"_isDragging",void 0),A(this,"_onMouseEnter",void 0),A(this,"_onMouseLeave",void 0),A(this,"_onMouseMove",void 0),A(this,"_onDragStart",void 0),A(this,"_onDragMove",void 0),A(this,"_onDragEnd",void 0),A(this,"_resetBoundsOnResize",void 0),A(this,"getBounds",void 0),A(this,"tag",void 0),A(this,"handleMouseEnter",void 0),A(this,"handleMouseMove",void 0),A(this,"handleMouseLeave",void 0),A(this,"handleMouseDown",void 0),A(this,"resetBounds",(()=>{this._bounds=void 0})),A(this,"_handleMinorMouseEvent",(e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let o,a=null;if("mouseenter"===r)a=$.MouseEnter,o=this._onMouseEnter;else if("mouseleave"===r)a=$.MouseLeave,o=this._onMouseLeave;else{if("mousemove"!==r)throw new Error(`invalid event type: ${r}`);a=$.MouseMove,o=this._onMouseMove}if(!o)return;const{value:s,x:i}=this._getPosition(n);o({event:e,type:a,value:s,x:i,manager:this,tag:this.tag})})),A(this,"_handleDragEvent",(e=>{const{button:t,clientX:n,type:r}=e;let o,a=null;if("mousedown"===r){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=(0,V.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,a=$.DragStart,o=this._onDragStart}else if("mousemove"===r){if(!this._isDragging)return;a=$.DragMove,o=this._onDragMove}else{if("mouseup"!==r)throw new Error(`invalid event type: ${r}`);if(!this._isDragging)return;this._stopDragging(),a=$.DragEnd,o=this._onDragEnd}if(!o)return;const{value:s,x:i}=this._getPosition(n);o({event:e,type:a,value:s,x:i,manager:this,tag:this.tag})})),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(r),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=o.onMouseEnter,this._onMouseLeave=o.onMouseLeave,this._onMouseMove=o.onMouseMove,this._onDragStart=o.onDragStart,this._onDragMove=o.onDragMove,this._onDragEnd=o.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:o}=this._getBounds();let a=e-t,s=a/o;return null!=r&&s<r?(s=r,a=r*o):null!=n&&s>n&&(s=n,a=n*o),{value:s,x:a}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=(0,V.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=M((()=>({TimelineColumnResizer:m`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:m`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:m`
      border-left: 2px solid transparent;
      cursor: col-resize;
      height: 5000px;
      margin-left: -1px;
      position: absolute;
      top: 0;
      width: 1px;
      z-index: 10;
      &:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.3);
      }
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        right: 0;
        content: ' ';
      }
    `,draggerDragging:m`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:m`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:m`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:m`
      position: absolute;
      top: 0;
      bottom: 0;
      &::before,
      &::after {
        border-right: 1px solid #ccc;
        content: ' ';
        height: 9px;
        position: absolute;
        right: 9px;
        top: 25px;
      }
      &::after {
        right: 5px;
      }
    `,gripIconDragging:m`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `})));class U extends r.PureComponent{constructor(e){super(e),W(this,"state",void 0),W(this,"_dragManager",void 0),W(this,"_rootElm",void 0),W(this,"_setRootElm",(e=>{this._rootElm=e})),W(this,"_getDraggingBounds",(()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}})),W(this,"_handleDragUpdate",(({value:e})=>{this.setState({dragPosition:e})})),W(this,"_handleDragEnd",(({manager:e,value:t})=>{e.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(t)})),this._dragManager=new F({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:o}=this.state;e=100*n+"%";const a={left:e};let s=!1,i=!1;const l=G();if(this._dragManager.isDragging()&&this._rootElm&&null!=o){s=o<n,i=o>n,e=100*o+"%";t={left:100*Math.min(n,o)+"%",right:`calc(${100*(1-Math.max(n,o))}% - 1px)`}}else t=a;t.height=r;const c=s||i;return(0,k.jsxs)("div",{className:l.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[(0,k.jsx)("div",{className:f()(l.gripIcon,c&&l.gripIconDragging),style:a,"data-test-id":"TimelineColumnResizer--gripIcon"}),(0,k.jsx)("div",{"aria-hidden":!0,className:f()(l.dragger,c&&l.draggerDragging,i&&l.draggerDraggingRight,s&&l.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const q=M((()=>({TimelineViewingLayer:m`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:m`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:m`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:m`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:m`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:m`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:m`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:m`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `})));function Z(e,t,n){return e+n*(t-e)}function X(e,t,n){return(n-e)/(t-e)}function J(e,t,n,r,o){const a=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(X(e,t,n),X(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(a))return null;const{isDraggingLeft:s,left:i,width:l}=a,c=q(),d=u({[c.TimelineViewingLayerDraggedDraggingRight]:!s,[c.TimelineViewingLayerDraggedReframeDrag]:!o,[c.TimelineViewingLayerDraggedShiftDrag]:o});return(0,k.jsx)("div",{className:u(c.TimelineViewingLayerDragged,c.TimelineViewingLayerDraggedDraggingLeft,d),style:{left:i,width:l},"data-test-id":"Dragged"})}class Y extends r.PureComponent{constructor(e){super(e),K(this,"_draggerReframe",void 0),K(this,"_root",void 0),K(this,"_setRoot",(e=>{this._root=e})),K(this,"_getDraggingBounds",(()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}})),K(this,"_handleReframeMouseMove",(({value:e})=>{const[t,n]=this.props.viewRangeTime.current,r=Z(t,n,e);this.props.updateNextViewRangeTime({cursor:r})})),K(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:void 0})})),K(this,"_handleReframeDragUpdate",(({value:e})=>{const{current:t,reframe:n}=this.props.viewRangeTime,[r,o]=t,a=Z(r,o,e),s={reframe:{anchor:n?n.anchor:a,shift:a}};this.props.updateNextViewRangeTime(s)})),K(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{current:n,reframe:r}=this.props.viewRangeTime,[o,a]=n,s=Z(o,a,t),i=r?r.anchor:s,[l,c]=s<i?[s,i]:[i,s];e.resetBounds(),this.props.updateViewRangeTime(l,c,"timeline-header")})),this._draggerReframe=new F({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:o,shiftStart:a}=e,[s,i]=t;let l;!(null!=r||null!=o||null!=a)&&null!=n&&n>=s&&n<=i&&(l=100*X(s,i,n)+"%");const c=q();return(0,k.jsxs)("div",{"aria-hidden":!0,className:c.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=l&&(0,k.jsx)("div",{className:c.TimelineViewingLayerCursorGuide,style:{left:l},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&J(s,i,r.anchor,r.shift,!1),null!=o&&J(s,i,i,o,!0),null!=a&&J(s,i,s,a,!0)]})}}var Q=n("../../opt/drone/yarncache/moment-timezone-npm-0.5.33-f2b784cd1b-dea6043b4a.zip/node_modules/moment-timezone/index.js"),ee=n.n(Q);const te=1e3,ne=1e6,re=6e7,oe=36e8,ae=Math.log10(te),se=[{unit:"d",microseconds:864e8,ofPrevious:24},{unit:"h",microseconds:oe,ofPrevious:60},{unit:"m",microseconds:re,ofPrevious:60},{unit:"s",microseconds:ne,ofPrevious:1e3},{unit:"ms",microseconds:te,ofPrevious:1e3},{unit:"μs",microseconds:1,ofPrevious:1e3}];const ie=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function le(e){const[t,n]=(0,V.dropWhile)(se,(({microseconds:t},n)=>n<se.length-1&&t>e));if(1e3===t.ofPrevious)return`${(0,V.round)(e/t.microseconds,2)}${t.unit}`;const r=`${Math.floor(e/t.microseconds)}${t.unit}`,o=Math.round(e/n.microseconds%t.ofPrevious),a=`${o}${n.unit}`;return 0===o?r:`${r} ${a}`}function ce(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some((n=>n.key===e&&n.value===t))}const de=ce.bind(null,"span.kind","client"),pe=ce.bind(null,"span.kind","server"),ue=ce.bind(null,"error",!0),he=ce.bind(null,"error","true"),me=e=>ue(e)||he(e);const ge=M((e=>({Ticks:m`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:m`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${R(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:m`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:m`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `})));function fe(e){const{endTime:t,numTicks:n,showLabels:r,startTime:o}=e;let a;if(r){a=[];const e=(t||0)-(o||0);for(let t=0;t<n;t++){const r=(o||0)+t/(n-1)*e;a.push(le(r))}}const s=ge(O()),i=[];for(let e=0;e<n;e++){const t=e/(n-1);i.push((0,k.jsx)("div",{className:s.TicksTick,style:{left:100*t+"%"},children:a&&(0,k.jsx)("span",{className:f()(s.TicksTickLabel,{[s.TicksTickLabelEndAnchor]:t>=1}),children:a[e]})},t))}return(0,k.jsx)("div",{className:s.Ticks,children:i})}fe.defaultProps={endTime:null,showLabels:null,startTime:null};const be=m`
  position: relative;
`,ye=m`
  margin-bottom: 0.25rem;
`,ve=m`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,xe=m`
  margin: 0;
`,we=m`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,_e=m`
  padding-bottom: 0.5rem;
`,ke=m`
  display: flex;
`,je=m`
  align-items: center;
`,Te=m`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,Ie=m`
  text-align: right;
`,Ce=m`
  display: inline-block;
`,De=m`
  margin: -0.2rem 0.25rem 0 0;
`,Se=m`
  text-overflow: ellipsis;
`,Ee=m`
  width: 100%;
`,Le=m`
  color: #aaa;
`,Ne=m`
  justify-content: flex-end;
`,Oe=["children","className"],Me=["children","className","width","style"];function Re(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}const ze=M((()=>({flexRow:m`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `})));function Pe(e){const{children:t,className:n=""}=e,r=Re(e,Oe),o=ze();return(0,k.jsx)("div",Object.assign({className:f()(o.flexRow,n)},r,{children:t}))}function He(e){const{children:t,className:n="",width:r,style:o}=e,a=Re(e,Me),s=100*r+"%",i=Object.assign({},o,{flexBasis:s,maxWidth:s});return(0,k.jsx)("div",Object.assign({className:f()(be,n),style:i},a,{children:t}))}Pe.defaultProps={className:""},He.defaultProps={className:"",style:{}},Pe.Cell=He;const $e=M((e=>({TimelineHeaderRow:m`
      label: TimelineHeaderRow;
      background: ${R(e,"#ececec")};
      border-bottom: 1px solid ${R(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:m`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:m`
      label: TimelineHeaderWrapper;
      align-items: center;
    `})));function Ve(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:o,onCollapseOne:a,onColummWidthChange:s,onExpandAll:i,onExpandOne:l,updateViewRangeTime:c,updateNextViewRangeTime:d,viewRangeTime:p,columnResizeHandleHeight:u}=e,[h,m]=p.current,g=$e(O());return(0,k.jsxs)(Pe,{className:g.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[(0,k.jsxs)(Pe.Cell,{className:f()(ke,we,g.TimelineHeaderWrapper),width:n,children:[(0,k.jsx)("h4",{className:g.TimelineHeaderRowTitle,children:"Service & Operation"}),(0,k.jsx)(P,{onCollapseAll:o,onExpandAll:i,onCollapseOne:a,onExpandOne:l})]}),(0,k.jsxs)(Pe.Cell,{width:1-n,children:[(0,k.jsx)(Y,{boundsInvalidator:n,updateNextViewRangeTime:d,updateViewRangeTime:c,viewRangeTime:p}),(0,k.jsx)(fe,{numTicks:r,startTime:h*t,endTime:m*t,showLabels:!0})]}),(0,k.jsx)(U,{columnResizeHandleHeight:u,position:n,onChange:s,min:.2,max:.85})]})}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ae{constructor(e){Be(this,"bufferLen",void 0),Be(this,"dataLen",void 0),Be(this,"heights",void 0),Be(this,"lastI",void 0),Be(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let o=this.lastI;for(-1===this.lastI&&(o=0,this.ys[0]=0);o<=r;){const e=this.heights[o]=t(o);this.ys[o+1]=this.ys[o]+e,o++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const o=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=o;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=o)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,o=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[o])return o;for(;r<o;)if(n=r+.5*(o-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;o=n}throw new Error(`unable to find floor index for y=${e}`)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const We=100;class Ge extends r.Component{constructor(e){super(e),Fe(this,"_yPositions",void 0),Fe(this,"_knownHeights",void 0),Fe(this,"_startIndexDrawn",void 0),Fe(this,"_endIndexDrawn",void 0),Fe(this,"_startIndex",void 0),Fe(this,"_endIndex",void 0),Fe(this,"_viewHeight",void 0),Fe(this,"_scrollTop",void 0),Fe(this,"_isScrolledOrResized",void 0),Fe(this,"_htmlTopOffset",void 0),Fe(this,"_windowScrollListenerAdded",void 0),Fe(this,"_htmlElm",void 0),Fe(this,"_wrapperElm",void 0),Fe(this,"_itemHolderElm",void 0),Fe(this,"getViewHeight",(()=>this._viewHeight)),Fe(this,"getBottomVisibleIndex",(()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)})),Fe(this,"getTopVisibleIndex",(()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight))),Fe(this,"getRowPosition",(e=>this._yPositions.getRowPosition(e,this._getHeight))),Fe(this,"_onScroll",(()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))})),Fe(this,"_positionList",(()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()})),Fe(this,"_initWrapper",(e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))})),Fe(this,"_initItemHolder",(e=>{this._itemHolderElm=e,this._scanItemHeights()})),Fe(this,"_scanItemHeights",(()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const o=this._itemHolderElm.childNodes,a=o.length;for(let e=0;e<a;e++){const a=o[e],s=a.getAttribute("data-item-key");if(!s){console.warn("itemKey not found");continue}const i=(a.firstElementChild||a).clientHeight;i!==this._knownHeights.get(s)&&(this._knownHeights.set(s,i),r?n=s:(r=!0,t=n=s))}if(null!=t&&null!=n){const r=e(t),o=n===t?r:e(n);this._yPositions.calcHeights(o,this._getHeight,r),this.forceUpdate()}})),Fe(this,"_getHeight",(e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)})),this._yPositions=new Ae(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=We,itemRenderer:r,viewBuffer:o,viewBufferMin:a}=this.props,s=this._getHeight,i=[];let l,c;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=a>this._startIndex?0:this._startIndex-a,n=a<e-this._endIndex?this._endIndex+a:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(l=o>this._startIndex?0:this._startIndex-o,c=this._endIndex+o,c>=e&&(c=e-1)):(l=this._startIndexDrawn,c=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else l=0,c=(n<e?n:e)-1;this._yPositions.calcHeights(c,s,l||-1),this._startIndexDrawn=l,this._endIndexDrawn=c,i.length=c-l+1;for(let e=l;e<=c;e++){const{y:n,height:o}=this._yPositions.getRowPosition(e,s),a={height:o,top:n,position:"absolute"},l=t(e),c={"data-item-key":l};i.push(r(l,a,e,c))}const d={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(d.onScroll=this._onScroll,d.style.height="100%",d.style.overflowY="auto");const p={position:"relative",height:this._yPositions.getEstimatedHeight()};return(0,k.jsx)("div",Object.assign({},d,{children:(0,k.jsx)("div",{style:p,children:(0,k.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:i})})}))}}Fe(Ge,"defaultProps",{initialDraw:We,itemsWrapperClassName:"",windowScroller:!1});var Ue=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js"),Ke=n.n(Ue),qe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js"),Ze=n.n(qe),Xe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js"),Je=n.n(Xe),Ye=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js"),Qe=n.n(Ye),et=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js"),tt=n.n(et);const nt=["isLarge","className"];const rt=M((()=>({NewWindowIconLarge:m`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `})));function ot(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,nt),o=rt(),a=f()({[o.NewWindowIconLarge]:t},n);return(0,k.jsx)(tt(),Object.assign({className:a},r))}ot.defaultProps={isLarge:!1};const at=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Popover,Object.assign({},e))})},st=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Tooltip,Object.assign({},e))})},it=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Icon,Object.assign({},e))})},lt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Dropdown,Object.assign({},e))})},ct=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Menu,Object.assign({},e))})},dt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.MenuItem,Object.assign({},e))})},pt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Button,Object.assign({},e))})},ut=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Divider,Object.assign({},e))})},ht=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Input,Object.assign({},e))})},mt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.InputGroup,Object.assign({},e))})},gt=r.createContext(void 0);gt.displayName="UIElementsContext";const ft=gt;function bt(e){return(0,k.jsx)(gt.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}const yt=r.createContext(void 0);yt.displayName="ExternalLinkContext";const vt=yt,xt=["reference","children","className","focusSpan"];function wt(e){const{reference:t,children:n,className:r,focusSpan:o}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,xt);return delete a.onClick,t.span?(0,k.jsx)("a",Object.assign({role:"button",onClick:()=>o(t.spanID),className:r},a,{children:n})):(0,k.jsx)(vt.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return(0,k.jsx)("a",Object.assign({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},a,{children:n}))}})}const _t=M((()=>({MultiParent:m`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:m`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:m`
      margin: 0.2em 0 0;
    `,tooltip:m`
      max-width: none;
    `})));class kt extends r.PureComponent{constructor(...e){var t,n,r;super(...e),r=e=>{const t=_t();return(0,k.jsx)(ct,{children:e.map((e=>{const{span:n,spanID:r}=e;return(0,k.jsx)(dt,{children:(0,k.jsxs)(wt,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[n?`${n.process.serviceName}:${n.operationName} - ${e.spanID}`:`(another trace) - ${e.spanID}`,!n&&(0,k.jsx)(ot,{className:t.NewWindowIcon})]})},`${r}`)}))})},(n="referencesList")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}render(){const{references:e,children:t,tooltipText:n,focusSpan:r}=this.props,o=_t(),a={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:n,overlayClassName:o.tooltip};if(e.length>1)return(0,k.jsx)(st,Object.assign({},a,{children:(0,k.jsx)(lt,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:(0,k.jsx)("a",{className:o.MultiParent,children:t})})}));const s=e[0];return(0,k.jsx)(st,Object.assign({},a,{children:(0,k.jsx)(wt,{reference:s,focusSpan:r,className:o.MultiParent,children:t})}))}}var jt,Tt,It=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js"),Ct=n.n(It),Dt=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js"),St=n.n(Dt);function Et(e){return(0,V.get)((0,V.find)(e.references,(({span:e,refType:t})=>e&&e.spanID&&("CHILD_OF"===t||"FOLLOWS_FROM"===t))),"span")}function Lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Nt=M((e=>({SpanTreeOffset:m`
      label: SpanTreeOffset;
      color: ${R(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:m`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:m`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${R(e,"lightgrey")};
      }
    `,indentGuideActive:m`
      label: indentGuideActive;
      border-color: ${R(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:m`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `})));class Ot extends r.PureComponent{constructor(e){super(e),Lt(this,"ancestorIds",void 0),Lt(this,"handleMouseLeave",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,V.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)})),Lt(this,"handleMouseEnter",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,V.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)})),this.ancestorIds=function(e){const t=[];if(!e)return t;let n=Et(e);for(;n;)t.push(n.spanID),n=Et(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:o}=this.props,{hasChildren:a,spanID:s}=r,i=a?{onClick:t,role:"switch","aria-checked":e}:null,l=n&&a&&(e?jt||(jt=(0,k.jsx)(St(),{})):Tt||(Tt=(0,k.jsx)(Ct(),{}))),c=Nt(o);return(0,k.jsxs)("span",Object.assign({className:f()(c.SpanTreeOffset,{[c.SpanTreeOffsetParent]:a})},i,{children:[this.ancestorIds.map((e=>(0,k.jsx)("span",{className:f()(c.indentGuide,{[c.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e))),l&&(0,k.jsx)("span",{className:c.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,s),onMouseLeave:e=>this.handleMouseLeave(e,s),"data-test-id":"icon-wrapper",children:l})]}))}}Lt(Ot,"displayName","UnthemedSpanTreeOffset"),Lt(Ot,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});const Mt=N(Ot);var Rt=n("../../opt/drone/yarncache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js"),zt=n.n(Rt),Pt=(n("../../opt/drone/yarncache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),n("../../opt/drone/yarncache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js")),Ht=n("../../opt/drone/yarncache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js"),$t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bt=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},At=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ft=function(e,t,n,o,a){if(!e&&t)return n(a?Vt({},o,{children:a}):o);var s=n;return a?r.createElement(s,o,a):r.createElement(s,o)},Wt=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)},Gt=function(e){return Boolean("function"==typeof e&&!Wt(e)&&!e.defaultProps&&!e.contextTypes)},Ut=function(e){var t=Gt(e);return function(n,r){return Ft(!1,t,e,n,r)}},Kt=function(e){return function(t){var n=Ut(t);return function(t){return n(e(t))}}},qt=function(e,t){for(var n={},r=0;r<t.length;r++){var o=t[r];e.hasOwnProperty(o)&&(n[o]=e[o])}return n},Zt=(Object.keys,function(e){function t(){return $t(this,t),At(this,e.apply(this,arguments))}Bt(t,e),t.prototype.render=function(){return null}}(r.Component),function(e){return function(t){var n=Ut(t),o=function(t){function r(){return $t(this,r),At(this,t.apply(this,arguments))}return Bt(r,t),r.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},r.prototype.render=function(){return n(this.props)},r}(r.Component);return o}}),Xt=function(e){return Zt((function(t,n){return!zt()(qt(n,e),qt(t,e))}))};var Jt,Yt={fromESObservable:null,toESObservable:null},Qt={fromESObservable:function(e){return"function"==typeof Yt.fromESObservable?Yt.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof Yt.toESObservable?Yt.toESObservable(e):e}},en=(Jt=Qt,n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js")),tn=n.n(en);var nn=n("../../opt/drone/yarncache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js"),rn=n.n(nn),on=n("../../opt/drone/yarncache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js"),an=n.n(on);function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ln=M((()=>({CopyIcon:m`
      background-color: transparent;
      border: none;
      color: inherit;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      &:focus {
        background-color: rgba(255, 255, 255, 0.25);
        color: inherit;
      }
    `})));class cn extends r.PureComponent{constructor(...e){super(...e),sn(this,"state",{hasCopied:!1}),sn(this,"handleClick",(()=>{this.setState({hasCopied:!0}),an()(this.props.copyText)})),sn(this,"handleTooltipVisibilityChange",(e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}))}render(){const e=ln();return(0,k.jsx)(st,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:(0,k.jsx)(pt,{className:f()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}sn(cn,"defaultProps",{className:void 0,icon:"copy",placement:"left"});const dn="copyIcon",pn=M((e=>({KeyValueTable:m`
      label: KeyValueTable;
      background: ${R(e,"#fff")};
      border: 1px solid ${R(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:m`
      label: body;
      vertical-align: baseline;
    `,row:m`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${R(e,"#f5f5f5")};
      }
      &:not(:hover) .${dn} {
        visibility: hidden;
      }
    `,keyColumn:m`
      label: keyColumn;
      color: ${R(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:m`
      label: copyColumn;
      text-align: right;
    `,linkIcon:m`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `}))),un=/^(\[|\{)/;function hn(e){if("string"==typeof e&&un.test(e))try{return JSON.parse(e)}catch(e){}return e}const mn=e=>{const t=pn(O());return(0,k.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",(0,k.jsx)(it,{className:t.linkIcon,type:"export"})]})};mn.defaultProps={title:""};const gn=e=>(0,k.jsx)(ct,{children:e.map((({text:e,url:t},n)=>(0,k.jsx)(dt,{children:(0,k.jsx)(mn,{href:t,children:e})},`${t}-${n}`)))});function fn(e){const{data:t,linksGetter:n}=e,r=pn(O());return(0,k.jsx)("div",{className:f()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:(0,k.jsx)("table",{className:Ee,children:(0,k.jsx)("tbody",{className:r.body,children:t.map(((e,o)=>{const a={__html:rn()(hn(e.value))},s=(0,k.jsx)("div",{className:Ce,dangerouslySetInnerHTML:a}),i=n?n(t,o):null;let l;return l=i&&1===i.length?(0,k.jsx)("div",{children:(0,k.jsx)(mn,{href:i[0].url,title:i[0].text,children:s})}):i&&i.length>1?(0,k.jsx)("div",{children:(0,k.jsx)(lt,{overlay:gn(i),placement:"bottomRight",trigger:["click"],children:(0,k.jsxs)("a",{children:[s," ",(0,k.jsx)(it,{className:r.linkIcon,type:"profile"})]})})}):s,(0,k.jsxs)("tr",{className:r.row,children:[(0,k.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),(0,k.jsx)("td",{children:l}),(0,k.jsx)("td",{className:r.copyColumn,children:(0,k.jsx)(cn,{className:dn,copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${o}`)}))})})})}const bn=M((e=>({header:m`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${R(e,"#e8e8e8")};
      }
    `,headerEmpty:m`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:m`
      label: headerHighContrast;
      &:hover {
        background: ${R(e,"#ddd")};
      }
    `,emptyIcon:m`
      label: emptyIcon;
      color: ${R(e,"#aaa")};
    `,summary:m`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:m`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${R(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:m`
      label: summaryLabel;
      color: ${R(e,"#777")};
    `,summaryDelim:m`
      label: summaryDelim;
      color: ${R(e,"#bbb")};
      padding: 0 0.2em;
    `})));function yn(e){const{data:t}=e,n=bn(O());return Array.isArray(t)&&t.length?(0,k.jsx)("ul",{className:n.summary,children:t.map(((e,t)=>(0,k.jsxs)("li",{className:n.summaryItem,children:[(0,k.jsx)("span",{className:n.summaryLabel,children:e.key}),(0,k.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`)))}):null}function vn(e){const{className:t,data:n,highContrast:r,interactive:o,isOpen:a,label:s,linksGetter:i,onToggle:l}=e,c=!Array.isArray(n)||!n.length,d=bn(O()),p=f()(De,{[d.emptyIcon]:c});let u=null,h=null;return o&&(u=a?(0,k.jsx)(St(),{className:p}):(0,k.jsx)(tn(),{className:p}),h={"aria-checked":a,onClick:c?null:l,role:"switch"}),(0,k.jsxs)("div",{className:f()(t,Se),children:[(0,k.jsxs)("div",Object.assign({className:f()(d.header,{[d.headerEmpty]:c,[d.headerHighContrast]:r&&!c})},h,{"data-test-id":"AccordianKeyValues--header",children:[u,(0,k.jsxs)("strong",{"data-test":"label",children:[s,a||":"]}),!a&&(0,k.jsx)(yn,{data:n})]})),a&&(0,k.jsx)(fn,{data:n,linksGetter:i})]})}var xn,wn,_n;yn.defaultProps={data:null},vn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const kn=M((e=>({AccordianLogs:m`
      label: AccordianLogs;
      border: 1px solid ${R(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:m`
      label: AccordianLogsHeader;
      background: ${R(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${R(e,"#dadada")};
      }
    `,AccordianLogsContent:m`
      label: AccordianLogsContent;
      background: ${R(e,"#f0f0f0")};
      border-top: 1px solid ${R(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:m`
      label: AccordianLogsFooter;
      color: ${R(e,"#999")};
    `})));function jn(e){const{interactive:t,isOpen:n,linksGetter:r,logs:o,openedItems:a,onItemToggle:s,onToggle:i,timestamp:l}=e;let c=null,d="span",p=null;t&&(c=n?xn||(xn=(0,k.jsx)(St(),{className:De})):wn||(wn=(0,k.jsx)(tn(),{className:"u-align-icon"})),d="a",p={"aria-checked":n,onClick:i,role:"switch"});const u=kn(O());return(0,k.jsxs)("div",{className:u.AccordianLogs,children:[(0,k.jsxs)(d,Object.assign({className:u.AccordianLogsHeader},p,{children:[c," ",_n||(_n=(0,k.jsx)("strong",{children:"Logs"}))," (",o.length,")"]})),n&&(0,k.jsxs)("div",{className:u.AccordianLogsContent,children:[(0,V.sortBy)(o,"timestamp").map(((e,n)=>(0,k.jsx)(vn,{className:n<o.length-1?ye:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!a&&a.has(e),label:`${le(e.timestamp-l)}`,linksGetter:r,onToggle:t&&s?()=>s(e):null},`${e.timestamp}-${n}`))),(0,k.jsx)("small",{className:u.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}jn.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const Tn=M((e=>({wrapper:m`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:m`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:m`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:m`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:m`
      label: logMarker;
      background-color: ${R(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${R(e,"#464c54")};
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border: 1px solid transparent;
      }
      &::after {
        left: 0;
      }
    `})));function In(e){return`${(100*e).toFixed(1)}%`}const Cn=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}((Sn="label",En="setLabel",Ln=e=>e.shortLabel,function(e){var t=Ut(e),n=function(e){function n(){var t,r;$t(this,n);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=r=At(this,e.call.apply(e,[this].concat(a))),r.state={stateValue:"function"==typeof Ln?Ln(r.props):Ln},r.updateStateValue=function(e,t){return r.setState((function(t){var n=t.stateValue;return{stateValue:"function"==typeof e?e(n):e}}),t)},At(r,t)}return Bt(n,e),n.prototype.render=function(){var e;return t(Vt({},this.props,((e={})[Sn]=this.state.stateValue,e[En]=this.updateStateValue,e)))},n}(r.Component);return n}),(Dn=({setLabel:e,shortLabel:t,longLabel:n})=>({setLongLabel:()=>e(n),setShortLabel:()=>e(t)}),Kt((function(e){return Vt({},e,"function"==typeof Dn?Dn(e):Dn)}))),Xt(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:n,getViewedBounds:r,color:o,label:a,onClick:s,setLongLabel:i,setShortLabel:l,rpc:c,traceStartTime:d,span:p,theme:u,className:h,labelClassName:m}=e,g=(0,V.groupBy)(p.logs,(e=>{const t=r(e.timestamp,e.timestamp).start;return In(Math.round(500*t)/500)})),b=Tn(u);return(0,k.jsxs)("div",{className:f()(b.wrapper,h),onClick:s,onMouseLeave:l,onMouseOver:i,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[(0,k.jsx)("div",{"aria-label":a,className:b.bar,style:{background:o,left:In(n),width:In(t-n)},children:(0,k.jsx)("div",{className:f()(b.label,m),"data-test-id":"SpanBar--label",children:a})}),(0,k.jsx)("div",{children:Object.keys(g).map((e=>(0,k.jsx)(at,{placement:"topLeft",content:(0,k.jsx)(jn,{interactive:!1,isOpen:!0,logs:g[e],timestamp:d}),children:(0,k.jsx)("div",{className:b.logMarker,style:{left:e}})},e)))}),c&&(0,k.jsx)("div",{className:b.rpc,style:{background:c.color,left:In(c.viewStart),width:In(c.viewEnd-c.viewStart)}})]})}));var Dn,Sn,En,Ln,Nn,On,Mn,Rn;function zn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Pn="spanBar",Hn="spanBarLabel",$n="nameWrapper",Vn="jaegerView",Bn="nameColumn",An=M((e=>({nameWrapper:m`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:m`
      label: nameWrapperMatchingFilter;
      background-color: ${R(e,"#fffce4")};
    `,nameColumn:m`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:m`
      label: endpointName;
      color: ${R(e,"#808080")};
    `,view:m`
      label: view;
      position: relative;
    `,viewExpanded:m`
      label: viewExpanded;
      background: ${R(e,"#f8f8f8")};
      outline: 1px solid ${R(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:m`
      label: viewExpandedAndMatchingFilter;
      background: ${R(e,"#fff3d7")};
      outline: 1px solid ${R(e,"#ddd")};
    `,row:m`
      label: row;
      &:hover .${Pn} {
        opacity: 1;
      }
      &:hover .${Hn} {
        color: ${R(e,"#000")};
      }
      &:hover .${$n} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${R(e,"#fafafa")},
          ${R(e,"#f8f8f8")} 75%,
          ${R(e,"#eee")}
        );
      }
      &:hover .${Vn} {
        background-color: ${R(e,"#f5f5f5")};
        outline: 1px solid ${R(e,"#ddd")};
      }
    `,rowClippingLeft:m`
      label: rowClippingLeft;
      & .${Bn}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${R(e,"rgba(25, 25, 25, 0.25)")},
          ${R(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:m`
      label: rowClippingRight;
      & .${Vn}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${R(e,"rgba(25, 25, 25, 0.25)")},
          ${R(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:m`
      label: rowExpanded;
      & .${Pn} {
        opacity: 1;
      }
      & .${Hn} {
        color: ${R(e,"#000")};
      }
      & .${$n}, &:hover .${$n} {
        background: ${R(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${R(e,"#ddd")};
      }
      & .${"nameWrapperMatchingFilter"} {
        background: ${R(e,"#fff3d7")};
      }
      &:hover .${Vn} {
        background: ${R(e,"#eee")};
      }
    `,rowMatchingFilter:m`
      label: rowMatchingFilter;
      background-color: ${R(e,"#fffce4")};
      &:hover .${$n} {
        background: linear-gradient(
          90deg,
          ${R(e,"#fff5e1")},
          ${R(e,"#fff5e1")} 75%,
          ${R(e,"#ffe6c9")}
        );
      }
      &:hover .${Vn} {
        background-color: ${R(e,"#fff3d7")};
        outline: 1px solid ${R(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:m`
      label: rowExpandedAndMatchingFilter;
      &:hover .${Vn} {
        background: ${R(e,"#ffeccf")};
      }
    `,name:m`
      label: name;
      color: ${R(e,"#000")};
      cursor: pointer;
      flex: 1 1 auto;
      outline: none;
      overflow: hidden;
      padding-left: 4px;
      padding-right: 0.25em;
      position: relative;
      text-overflow: ellipsis;
      &::before {
        content: ' ';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 0;
        border-left: 4px solid;
        border-left-color: inherit;
      }

      /* This is so the hit area of the span-name extends the rest of the width of the span-name column */
      &::after {
        background: transparent;
        bottom: 0;
        content: ' ';
        left: 0;
        position: absolute;
        top: 0;
        width: 1000px;
      }
      &:focus {
        text-decoration: none;
      }
      &:hover > small {
        color: ${R(e,"#000")};
      }
    `,nameDetailExpanded:m`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:m`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:m`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:m`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${R(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:m`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:m`
      label: labelRight;
      left: 100%;
    `,labelLeft:m`
      label: labelLeft;
      right: 100%;
    `})));class Fn extends r.PureComponent{constructor(...e){super(...e),zn(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),zn(this,"_childrenToggle",(()=>{this.props.onChildrenToggled(this.props.span.spanID)}))}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:o,isMatchingFilter:a,numTicks:s,rpc:i,noInstrumentedServer:l,showErrorIcon:c,getViewedBounds:d,traceStartTime:p,span:u,focusSpan:h,hoverIndentGuideIds:m,addHoverIndentGuideId:g,removeHoverIndentGuideId:b,clippingLeft:y,clippingRight:v,theme:x,createSpanLink:w}=this.props,{duration:_,hasChildren:j,operationName:T,process:{serviceName:I}}=u,C=le(_),D=d(u.startTime,u.startTime+u.duration),S=D.start,E=D.end,L=An(x),N=`${I}::${T}`;let O,M;return S>1-E?(O=`${N} | ${C}`,M=L.labelLeft):(O=`${C} | ${N}`,M=L.labelRight),(0,k.jsxs)(Pe,{className:f()(L.row,{[L.rowExpanded]:o,[L.rowMatchingFilter]:a,[L.rowExpandedAndMatchingFilter]:a&&o,[L.rowClippingLeft]:y,[L.rowClippingRight]:v},e),children:[(0,k.jsx)(Pe.Cell,{className:f()(L.nameColumn,Bn),width:n,children:(0,k.jsxs)("div",{className:f()(L.nameWrapper,$n,{[L.nameWrapperMatchingFilter]:a,nameWrapperMatchingFilter:a}),children:[(0,k.jsx)(Mt,{childrenVisible:r,span:u,onClick:j?this._childrenToggle:void 0,hoverIndentGuideIds:m,addHoverIndentGuideId:g,removeHoverIndentGuideId:b}),(0,k.jsxs)("a",{className:f()(L.name,{[L.nameDetailExpanded]:o}),"aria-checked":o,title:N,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[(0,k.jsxs)("span",{className:f()(L.svcName,{[L.svcNameChildrenCollapsed]:j&&!r}),children:[c&&(0,k.jsx)(Ke(),{style:{backgroundColor:u.errorIconColor?R(x,u.errorIconColor):R(x,"#db2828")},className:L.errorIcon}),I," ",i&&(0,k.jsxs)("span",{children:[Nn||(Nn=(0,k.jsx)(Ze(),{}))," ",(0,k.jsx)("i",{className:L.rpcColorMarker,style:{background:i.color}}),i.serviceName]}),l&&(0,k.jsxs)("span",{children:[On||(On=(0,k.jsx)(Ze(),{}))," ",(0,k.jsx)("i",{className:L.rpcColorMarker,style:{background:l.color}}),l.serviceName]})]}),(0,k.jsx)("small",{className:L.endpointName,children:i?i.operationName:T}),(0,k.jsxs)("small",{className:L.endpointName,children:[" | ",C]})]}),w&&(()=>{const e=w(u);return e?(0,k.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content}):null})(),u.references&&u.references.length>1&&(0,k.jsx)(kt,{references:u.references,tooltipText:"Contains multiple references",focusSpan:h,children:Mn||(Mn=(0,k.jsx)(Je(),{}))}),u.subsidiarilyReferencedBy&&u.subsidiarilyReferencedBy.length>0&&(0,k.jsx)(kt,{references:u.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===u.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:h,children:Rn||(Rn=(0,k.jsx)(Qe(),{}))})]})}),(0,k.jsxs)(Pe.Cell,{className:f()(L.view,Vn,{[L.viewExpanded]:o,[L.viewExpandedAndMatchingFilter]:a&&o}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[(0,k.jsx)(fe,{numTicks:s}),(0,k.jsx)(Cn,{rpc:i,viewStart:S,viewEnd:E,theme:x,getViewedBounds:d,color:t,shortLabel:C,longLabel:O,traceStartTime:p,span:u,labelClassName:`spanBarLabel ${M}`,className:Pn})]})]})}}zn(Fn,"displayName","UnthemedSpanBarRow"),zn(Fn,"defaultProps",{className:"",rpc:null});const Wn=N(Fn),Gn=M((()=>({TextList:m`
      max-height: 450px;
      overflow: auto;
    `,List:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:m`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `})));function Un(e){const{data:t}=e,n=Gn();return(0,k.jsx)("div",{className:f()(n.TextList),"data-test-id":"TextList",children:(0,k.jsx)("ul",{className:n.List,children:t.map(((e,t)=>(0,k.jsx)("li",{className:n.item,children:e},`${t}`)))})})}const Kn=M((e=>({header:m`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${R(e,"#e8e8e8")};
      }
    `})));function qn({data:e}){return(0,k.jsx)(Un,{data:e})}function Zn(e){const{className:t,data:n,headerClassName:r,interactive:o,isOpen:a,label:s,onToggle:i,TextComponent:l=qn}=e,c=!Array.isArray(n)||!n.length,d=bn(O()),p=f()(De,{[d.emptyIcon]:c});let u=null,h=null;o&&(u=a?(0,k.jsx)(St(),{className:p}):(0,k.jsx)(tn(),{className:p}),h={"aria-checked":a,onClick:c?null:i,role:"switch"});const m=Kn(O());return(0,k.jsxs)("div",{className:t||"",children:[(0,k.jsxs)("div",Object.assign({className:f()(m.header,r)},h,{"data-test-id":"AccordianText--header",children:[u,(0,k.jsx)("strong",{children:s})," (",n.length,")"]})),a&&(0,k.jsx)(l,{data:n})]})}Zn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Xn=M((e=>({LabeledList:m`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:m`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:m`
      label: LabeledListLabel;
      color: ${C(e)?"#999":"#666"};
      margin-right: 0.25rem;
    `})));function Jn(e){var t;const{className:n,dividerClassName:r,items:o}=e,a=Xn(O());return(0,k.jsx)("ul",{className:f()(a.LabeledList,n),children:o.map((({key:e,label:n,value:s},i)=>{const l=i<o.length-1&&(0,k.jsx)("li",{className:a.LabeledListItem,children:t||(t=(0,k.jsx)(ut,{className:r,type:"vertical"}))},`${e}--divider`);return[(0,k.jsxs)("li",{className:a.LabeledListItem,children:[(0,k.jsx)("span",{className:a.LabeledListLabel,children:n}),(0,k.jsx)("strong",{children:s})]},e),l]}))})}var Yn,Qn;const er=M((()=>({ReferencesList:m`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:m`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:m`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:m`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:m`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `})));function tr(e){const{data:t,focusSpan:n}=e,r=er();return(0,k.jsx)("div",{className:f()(r.ReferencesList),children:(0,k.jsx)("ul",{className:r.list,children:t.map((e=>(0,k.jsx)("li",{className:r.item,children:(0,k.jsx)(wt,{reference:e,focusSpan:n,children:(0,k.jsxs)("span",{className:r.itemContent,children:[e.span?(0,k.jsxs)("span",{children:[(0,k.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),(0,k.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):Yn||(Yn=(0,k.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),(0,k.jsxs)("small",{className:r.debugInfo,children:[(0,k.jsx)("span",{className:r.debugLabel,"data-label":"Reference Type:",children:e.refType}),(0,k.jsx)("span",{className:r.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},`${e.spanID}`)))})})}class nr extends r.PureComponent{render(){const{data:e,interactive:t,isOpen:n,onToggle:r,focusSpan:o}=this.props,a=!Array.isArray(e)||!e.length,s=De;let i=null,l=null;return t&&(i=n?(0,k.jsx)(St(),{className:s}):(0,k.jsx)(tn(),{className:s}),l={"aria-checked":n,onClick:a?null:r,role:"switch"}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",Object.assign({},l,{children:[i,Qn||(Qn=(0,k.jsx)("strong",{children:(0,k.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),n&&(0,k.jsx)(tr,{data:e,focusSpan:o})]})}}var rr,or,ar;ar={highContrast:!1,interactive:!0,onToggle:null},(or="defaultProps")in(rr=nr)?Object.defineProperty(rr,or,{value:ar,enumerable:!0,configurable:!0,writable:!0}):rr[or]=ar;const sr=M((e=>({divider:m`
      label: divider;
      background: ${R(e,"#ddd")};
    `,dividerVertical:m`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:m`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:m`
      label: debugLabel;
      &::before {
        color: ${R(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:m`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${R(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${R(e,"#333")};
      }
    `,AccordianWarnings:m`
      label: AccordianWarnings;
      background: ${R(e,"#fafafa")};
      border: 1px solid ${R(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:m`
      label: AccordianWarningsHeader;
      background: ${R(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${R(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:m`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${R(e,"#e8e8e8")};
    `,AccordianWarningsLabel:m`
      label: AccordianWarningsLabel;
      color: ${R(e,"#d36c08")};
    `,Textarea:m`
      word-break: break-all;
      white-space: pre;
    `})));function ir(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:o,processToggle:a,span:s,tagsToggle:i,traceStartTime:l,warningsToggle:c,stackTracesToggle:d,referencesToggle:p,focusSpan:u,createSpanLink:h}=e,{isTagsOpen:m,isProcessOpen:g,logs:y,isWarningsOpen:v,isReferencesOpen:x,isStackTracesOpen:w}=t,{operationName:_,process:j,duration:T,relativeStartTime:I,spanID:C,logs:D,tags:S,warnings:E,references:L,stackTraces:N}=s,M=[{key:"svc",label:"Service:",value:j.serviceName},{key:"duration",label:"Duration:",value:le(T)},{key:"start",label:"Start Time:",value:le(I)}],R=`${window.location.origin}${window.location.pathname}?uiFind=${C}`,z=sr(O()),P=null==h?void 0:h(s);return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:f()(ke,je,ye),children:[(0,k.jsx)("h2",{className:f()(Te,xe),children:_}),(0,k.jsx)(Jn,{className:Ie,dividerClassName:z.divider,items:M})]}),P?(0,k.jsx)(b.DataLinkButton,{link:Object.assign({},P,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,(0,k.jsx)(ut,{className:f()(z.divider,z.dividerVertical,ve)}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(vn,{data:S,label:"Tags",linksGetter:n,isOpen:m,onToggle:()=>i(C)}),j.tags&&(0,k.jsx)(vn,{className:ye,data:j.tags,label:"Process",linksGetter:n,isOpen:g,onToggle:()=>a(C)})]}),D&&D.length>0&&(0,k.jsx)(jn,{linksGetter:n,logs:D,isOpen:y.isOpen,openedItems:y.openedItems,onToggle:()=>o(C),onItemToggle:e=>r(C,e),timestamp:l}),E&&E.length>0&&(0,k.jsx)(Zn,{className:z.AccordianWarnings,headerClassName:z.AccordianWarningsHeader,label:(0,k.jsx)("span",{className:z.AccordianWarningsLabel,children:"Warnings"}),data:E,isOpen:v,onToggle:()=>c(C)}),N&&N.length&&(0,k.jsx)(Zn,{label:"Stack trace",data:N,isOpen:w,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map(((e,t)=>`StackTrace ${t+1}:\n${e}`)).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return(0,k.jsx)(b.TextArea,{className:z.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>d(C)}),L&&L.length>0&&(L.length>1||"CHILD_OF"!==L[0].refType)&&(0,k.jsx)(nr,{data:L,isOpen:x,onToggle:()=>p(C),focusSpan:u}),(0,k.jsxs)("small",{className:z.debugInfo,children:[(0,k.jsx)("span",{className:z.debugLabel,"data-label":"SpanID:"})," ",C,(0,k.jsx)(cn,{copyText:R,icon:"link",placement:"topRight",tooltipTitle:"Copy deep link to this span"})]})]})]})}function lr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const cr=M((e=>({expandedAccent:m`
      cursor: pointer;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      &::before {
        border-left: 4px solid;
        pointer-events: none;
        width: 1000px;
      }
      &::after {
        border-right: 1000px solid;
        border-color: inherit;
        cursor: pointer;
        opacity: 0.2;
      }

      /* border-color inherit must come AFTER other border declarations for accent */
      &::before,
      &::after {
        border-color: inherit;
        content: ' ';
        position: absolute;
        height: 100%;
      }

      &:hover::after {
        opacity: 0.35;
      }
    `,infoWrapper:m`
      label: infoWrapper;
      border: 1px solid ${R(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `})));class dr extends r.PureComponent{constructor(...e){super(...e),lr(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),lr(this,"_linksGetter",((e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)}))}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:o,processToggle:a,referencesToggle:s,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g,theme:f,createSpanLink:b}=this.props,y=cr(f);return(0,k.jsxs)(Pe,{children:[(0,k.jsxs)(Pe.Cell,{width:t,style:{overflow:"hidden"},children:[(0,k.jsx)(Mt,{span:c,showChildrenIcon:!1,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g}),(0,k.jsx)("span",{children:(0,k.jsx)("span",{className:y.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),(0,k.jsx)(Pe.Cell,{width:1-t,children:(0,k.jsx)("div",{className:y.infoWrapper,style:{borderTopColor:e},children:(0,k.jsx)(ir,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:o,processToggle:a,referencesToggle:s,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,createSpanLink:b})})})]})}}const pr=N(dr);function ur(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hr(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class mr{constructor(e){ur(this,"colorsHex",void 0),ur(this,"colorsRgb",void 0),ur(this,"cache",void 0),ur(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(hr),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const gr=(0,x.Z)((e=>new mr(e)));function fr(e,t){return gr(t.servicesColorPalette).getColorByKey(e)}function br(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const yr=M((()=>({rowsWrapper:m`
      width: 100%;
    `,row:m`
      width: 100%;
    `}))),vr=28,xr=161,wr=197;const _r=(0,x.Z)((function(e,t,n){return e?function(e,t,n){if(!e)return[];let r=null;const o=[];for(let a=0;a<e.length;a++){const s=e[a],{spanID:i,depth:l}=s;let c=!1;null!=r&&(l>=r?c=!0:r=null),c||(t.has(i)&&(r=l+1),o.push({span:s,isDetail:!1,spanIndex:a}),n.has(i)&&o.push({span:s,isDetail:!0,spanIndex:a}))}return o}(e.spans,t,n):[]})),kr=(0,x.Z)((function(e){const{min:t,max:n,viewStart:r,viewEnd:o}=e,a=n-t,s=t+r*a,i=n-(1-o)*a-s;return(e,t)=>({start:(e-s)/i,end:(t-s)/i})}),V.isEqual),jr=(0,x.Z)((function(e){const[t,n]=e;return{left:t>0,right:n<1}}),V.isEqual);class Tr extends r.Component{constructor(e){super(e),br(this,"listView",void 0),br(this,"getViewRange",(()=>this.props.currentViewRangeTime)),br(this,"getSearchedSpanIDs",(()=>this.props.findMatchesIDs)),br(this,"getCollapsedChildren",(()=>this.props.childrenHiddenIDs)),br(this,"mapRowIndexToSpanIndex",(e=>this.getRowStates()[e].spanIndex)),br(this,"mapSpanIndexToRowIndex",(e=>{const t=this.getRowStates().length;for(let n=0;n<t;n++){const{spanIndex:t}=this.getRowStates()[n];if(t===e)return n}throw new Error(`unable to find row for span index: ${e}`)})),br(this,"setListView",(e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())})),br(this,"getKeyFromIndex",(e=>{const{isDetail:t,span:n}=this.getRowStates()[e];return`${n.traceID}--${n.spanID}--${t?"detail":"bar"}`})),br(this,"getIndexFromKey",(e=>{const t=e.split("--"),n=t[0],r=t[1],o="detail"===t[2],a=this.getRowStates().length;for(let e=0;e<a;e++){const{span:t,isDetail:a}=this.getRowStates()[e];if(t.spanID===r&&t.traceID===n&&a===o)return e}return-1})),br(this,"getRowHeight",(e=>{const{span:t,isDetail:n}=this.getRowStates()[e];return n?Array.isArray(t.logs)&&t.logs.length?wr:xr:vr})),br(this,"renderRow",((e,t,n,r)=>{const{isDetail:o,span:a,spanIndex:s}=this.getRowStates()[n];return o?this.renderSpanDetailRow(a,e,t,r):this.renderSpanBarRow(a,s,e,t,r)}));const{setTrace:t,trace:n,uiFind:r}=e;t(n,r)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}componentDidUpdate(e){const{registerAccessors:t,trace:n}=e,{shouldScrollToFirstUiFindMatch:r,clearShouldScrollToFirstUiFindMatch:o,scrollToFirstVisibleSpan:a,registerAccessors:s,setTrace:i,trace:l,uiFind:c}=this.props;n!==l&&i(l,c),this.listView&&t!==s&&s(this.getAccessors()),r&&(a(),o())}getRowStates(){const{childrenHiddenIDs:e,detailStates:t,trace:n}=this.props;return _r(n,e,t)}getClipping(){const{currentViewRangeTime:e}=this.props;return jr(e)}getViewedBounds(){const{currentViewRangeTime:e,trace:t}=this.props,[n,r]=e;return kr({min:t.startTime,max:t.endTime,viewStart:n,viewEnd:r})}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,o){const{spanID:a}=e,{serviceName:s}=e.process,{childrenHiddenIDs:i,childrenToggle:l,detailStates:c,detailToggle:d,findMatchesIDs:p,spanNameColumnWidth:u,trace:h,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,theme:y,createSpanLink:v}=this.props;if(!h)return null;const x=fr(s,y),w=i.has(a),_=c.has(a),j=!!p&&p.has(a),T=me(e)||w&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(me(e[r]))return!0;return!1}(h.spans,t);let I=null;if(w){const e=function(e){if(e.length<=1||!de(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if(pe(e[n]))return e[n];n++}return null}(h.spans.slice(t));if(e){const t=this.getViewedBounds()(e.startTime,e.startTime+e.duration);I={color:fr(e.process.serviceName,y),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const C=e.tags.find((e=>"peer.service"===e.key));let D=null;!e.hasChildren&&C&&(e=>e.tags.some((({key:e,value:t})=>"span.kind"===e&&"client"===t)))(e)&&(D={serviceName:C.value,color:fr(C.value,y)});const S=yr();return(0,k.jsx)("div",Object.assign({className:S.row,style:r},o,{children:(0,k.jsx)(Wn,{clippingLeft:this.getClipping().left,clippingRight:this.getClipping().right,color:x,columnDivision:u,isChildrenExpanded:!w,isDetailExpanded:_,isMatchingFilter:j,numTicks:5,onDetailToggled:d,onChildrenToggled:l,rpc:I,noInstrumentedServer:D,showErrorIcon:T,getViewedBounds:this.getViewedBounds(),traceStartTime:h.startTime,span:e,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,createSpanLink:v})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:o}=e,{serviceName:a}=e.process,{detailLogItemToggle:s,detailLogsToggle:i,detailProcessToggle:l,detailReferencesToggle:c,detailWarningsToggle:d,detailStackTracesToggle:p,detailStates:u,detailTagsToggle:h,detailToggle:m,spanNameColumnWidth:g,trace:f,focusSpan:b,hoverIndentGuideIds:y,addHoverIndentGuideId:v,removeHoverIndentGuideId:x,linksGetter:w,theme:_,createSpanLink:j}=this.props,T=u.get(o);if(!f||!T)return null;const I=fr(a,_),C=yr();return(0,k.jsx)("div",Object.assign({className:C.row,style:Object.assign({},n,{zIndex:1})},r,{children:(0,k.jsx)(pr,{color:I,columnDivision:g,onDetailToggled:m,detailState:T,linksGetter:w,logItemToggle:s,logsToggle:i,processToggle:l,referencesToggle:c,warningsToggle:d,stackTracesToggle:p,span:e,tagsToggle:h,traceStartTime:f.startTime,focusSpan:b,hoverIndentGuideIds:y,addHoverIndentGuideId:v,removeHoverIndentGuideId:x,createSpanLink:j})}),t)}render(){const e=yr(),{scrollElement:t}=this.props;return(0,k.jsx)("div",{children:(0,k.jsx)(Ge,{ref:this.setListView,dataLength:this.getRowStates().length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}const Ir=N(Tr);var Cr=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js"),Dr=n.n(Cr);const Sr={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let Er;function Lr(){if(Er)return Er;const e=new(Dr())(document.body);return Er=e,e}const Nr=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"];function Or(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Mr=M((e=>({TraceTimelineViewer:m`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${R(e,"#bbb")};

      & .json-markup {
        line-height: 17px;
        font-size: 13px;
        font-family: monospace;
        white-space: pre-wrap;
      }

      & .json-markup-key {
        font-weight: bold;
      }

      & .json-markup-bool {
        color: ${R(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${R(e,"teal")};
      }

      & .json-markup-null {
        color: ${R(e,"teal")};
      }

      & .json-markup-number {
        color: ${R(e,"blue","black")};
      }
    `})));class Rr extends r.PureComponent{constructor(e){super(e),Or(this,"collapseAll",(()=>{this.props.collapseAll(this.props.trace.spans)})),Or(this,"collapseOne",(()=>{this.props.collapseOne(this.props.trace.spans)})),Or(this,"expandAll",(()=>{this.props.expandAll()})),Or(this,"expandOne",(()=>{this.props.expandOne(this.props.trace.spans)})),this.state={height:0}}componentDidMount(){!function(e){const t=Lr();Object.keys(e).forEach((n=>{const r=e[n];r&&t.bind(Sr[n].binding,r)}))}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:o,createLinkToExternalSpan:a,traceTimeline:s,theme:i}=e,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Nr),{trace:c}=l,d=Mr(i);return(0,k.jsx)(vt.Provider,{value:a,children:(0,k.jsxs)("div",{className:d.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[(0,k.jsx)(Ve,{duration:c.duration,nameColumnWidth:s.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:o.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),(0,k.jsx)(Ir,Object.assign({},l,s,{setSpanNameColumnWidth:t,currentViewRangeTime:o.time.current}))]})})}}const zr=N(Rr);var Pr=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js"),Hr=n.n(Pr);function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Vr=M((e=>({CanvasSpanGraph:m`
      label: CanvasSpanGraph;
      background: ${R(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `})));class Br extends r.PureComponent{constructor(e){super(e),$r(this,"_canvasElm",void 0),$r(this,"getColor",(e=>function(e,t){return gr(t.servicesColorPalette).getRgbColorByKey(e)}(e,this.props.theme))),$r(this,"_setCanvasRef",(e=>{this._canvasElm=e})),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,o){const a=new Map,s=t.length<60?60:Math.min(t.length,200),i=2*window.innerWidth;e.width=i,e.height=s;const l=Math.min(6,Math.max(2,s/t.length)),c=s/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=o,d.fillRect(0,0,i,s);for(let e=0;e<t.length;e++){const{valueWidth:o,valueOffset:s,serviceName:p}=t[e],u=s/n*i;let h=o/n*i;h<10&&(h=10);let m=a.get(p);m||(m=`rgba(${r(p).concat(.8).join()})`,a.set(p,m)),d.fillStyle=m,d.fillRect(u,e*c,h,l)}}(this._canvasElm,t,e,this.getColor,R(this.props.theme,"#fff"))}}render(){return(0,k.jsx)("canvas",{className:Vr(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}const Ar=N(Br),Fr=M((()=>({TickLabels:m`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:m`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `})));function Wr(e){const{numTicks:t,duration:n}=e,r=Fr(),o=[];for(let e=0;e<t+1;e++){const a=e/t,s=1===a?{right:"0%"}:{left:100*a+"%"};o.push((0,k.jsx)("div",{className:r.TickLabelsLabel,style:s,"data-test":"tick",children:le(n*a)},a))}return(0,k.jsx)("div",{className:r.TickLabels,children:o})}const Gr=M((()=>({GraphTick:m`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `})));function Ur(e){const{numTicks:t}=e,n=[];for(let e=1;e<t;e++){const r=e/t*100+"%";n.push((0,k.jsx)("line",{className:Gr().GraphTick,x1:r,y1:"0%",x2:r,y2:"100%"},e/t))}return(0,k.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:n})}const Kr=M((()=>({ScrubberHandleExpansion:f()(m`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:f()(m`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:f()(m`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:m`
      label: ScrubberDragging;
      & .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      & .scrubber-handle {
        fill: #44f;
      }
      & > .scrubber-line {
        stroke: #44f;
      }
    `,ScrubberHandles:m`
      label: ScrubberHandles;
      &:hover > .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      &:hover > .scrubber-handle {
        fill: #44f;
      }
      &:hover + .scrubber.line {
        stroke: #44f;
      }
    `})));function qr({isDragging:e,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,position:o}){const a=100*o+"%",s=Kr(),i=f()({[s.ScrubberDragging]:e});return(0,k.jsxs)("g",{className:i,children:[(0,k.jsxs)("g",{className:s.ScrubberHandles,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,children:[(0,k.jsx)("rect",{x:a,className:s.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),(0,k.jsx)("rect",{x:a,className:s.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),(0,k.jsx)("line",{className:s.ScrubberLine,y2:"100%",x1:a,x2:a})]})}function Zr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Xr=M((e=>{const t="JaegerUiComponents__ViewingLayerResetZoomHoverClassName",n=m`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:m`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${t} {
        display: unset;
      }
    `,ViewingLayerGraph:m`
      label: ViewingLayerGraph;
      border: 1px solid ${R(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:m`
      label: ViewingLayerInactive;
      fill: ${R(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:m`
      label: ViewingLayerCursorGuide;
      stroke: ${R(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:m`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:m`
      label: ViewingLayerDrag;
      fill: ${R(e,"#44f")};
    `,ViewingLayerFullOverlay:m`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:n,ViewingLayerResetZoomHoverClassName:t}})),Jr="SHIFT_END",Yr="SHIFT_START",Qr="REFRAME";class eo extends r.PureComponent{constructor(e){super(e),Zr(this,"state",void 0),Zr(this,"_root",void 0),Zr(this,"_draggerReframe",void 0),Zr(this,"_draggerStart",void 0),Zr(this,"_draggerEnd",void 0),Zr(this,"_setRoot",(e=>{this._root=e})),Zr(this,"_getDraggingBounds",(e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,o]=this.props.viewRange.time.current;let a=1,s=0;return e===Yr?a=o:e===Jr&&(s=r),{clientXLeft:t,maxValue:a,minValue:s,width:n}})),Zr(this,"_handleReframeMouseMove",(({value:e})=>{this.props.updateNextViewRangeTime({cursor:e})})),Zr(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:null})})),Zr(this,"_handleReframeDragUpdate",(({value:e})=>{const t=e,{time:n}=this.props.viewRange,r={reframe:{anchor:n.reframe?n.reframe.anchor:t,shift:t}};this.props.updateNextViewRangeTime(r)})),Zr(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{time:n}=this.props.viewRange,r=n.reframe?n.reframe.anchor:t,[o,a]=t<r?[t,r]:[r,t];e.resetBounds(),this.props.updateViewRangeTime(o,a,"minimap")})),Zr(this,"_handleScrubberEnterLeave",(({type:e})=>{const t=e===$.MouseEnter;this.setState({preventCursorLine:t})})),Zr(this,"_handleScrubberDragUpdate",(({event:e,tag:t,type:n,value:r})=>{n===$.DragStart&&e.stopPropagation(),t===Yr?this.props.updateNextViewRangeTime({shiftStart:r}):t===Jr&&this.props.updateNextViewRangeTime({shiftEnd:r})})),Zr(this,"_handleScrubberDragEnd",(({manager:e,tag:t,value:n})=>{const[r,o]=this.props.viewRange.time.current;let a;if(t===Yr)a=[n,o];else{if(t!==Jr)throw new Error("bad state");a=[r,n]}e.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(a[0],a[1],"minimap")})),Zr(this,"_resetTimeZoomClickHandler",(()=>{this.props.updateViewRangeTime(0,1)})),this._draggerReframe=new F({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:Qr}),this._draggerStart=new F({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Yr}),this._draggerEnd=new F({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Jr}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=Xr(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[(0,k.jsx)("rect",{className:f()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),(0,k.jsx)("rect",{className:f()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:o}=this.state,{current:a,cursor:s,shiftStart:i,shiftEnd:l,reframe:c}=t.time,d=null!=i||null!=l||null!=c,[p,u]=a;let h=0;p&&(h=100*p);let m,g=100;u&&(g=100-100*u),d||null==s||o||(m=100*s+"%");const b=Xr(r);return(0,k.jsxs)("div",{"aria-hidden":!0,className:b.ViewingLayer,style:{height:e},children:[(0!==p||1!==u)&&(0,k.jsx)(pt,{onClick:this._resetTimeZoomClickHandler,className:f()(b.ViewingLayerResetZoom,b.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),(0,k.jsxs)("svg",{height:e,className:b.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[h>0&&(0,k.jsx)("rect",{x:0,y:0,height:"100%",width:`${h}%`,className:b.ViewingLayerInactive}),g>0&&(0,k.jsx)("rect",{x:100-g+"%",y:0,height:"100%",width:`${g}%`,className:b.ViewingLayerInactive}),(0,k.jsx)(Ur,{numTicks:n}),m&&(0,k.jsx)("line",{className:b.ViewingLayerCursorGuide,x1:m,y1:"0",x2:m,y2:e-2,strokeWidth:"1"}),null!=i&&this._getMarkers(p,i),null!=l&&this._getMarkers(u,l),(0,k.jsx)(qr,{isDragging:null!=i,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:p||0}),(0,k.jsx)(qr,{isDragging:null!=l,position:u||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=c&&this._getMarkers(c.anchor,c.shift)]}),d&&(0,k.jsx)("div",{className:b.ViewingLayerFullOverlay})]})}}const to=N(eo);var no;function ro(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}const oo=(0,x.Z)((function(e){return e.spans.map(ro)}));class ao extends r.PureComponent{render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:o}=this.props;if(!t)return no||(no=(0,k.jsx)("div",{}));const a=oo(t);return(0,k.jsxs)("div",{className:f()(_e,we),children:[(0,k.jsx)(Wr,{numTicks:4,duration:t.duration}),(0,k.jsxs)("div",{className:be,children:[(0,k.jsx)(Ar,{valueWidth:t.duration,items:a}),(0,k.jsx)(to,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:o,updateNextViewRangeTime:r})]})]})}}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(ao,"defaultProps",{height:60});var so=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js"),io=n.n(so);function lo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class co extends r.PureComponent{constructor(...e){super(...e),lo(this,"clearUiFind",(()=>{this.props.onChange("")}))}render(){const{allowClear:e,inputProps:t,value:n}=this.props,r=(0,k.jsxs)(k.Fragment,{children:[e&&n&&n.length&&(0,k.jsx)(it,{type:"close",onClick:this.clearUiFind}),t.suffix]});return(0,k.jsx)(ht,Object.assign({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:r,value:n}))}}var po;lo(co,"defaultProps",{inputProps:{},trackFindFunction:void 0,value:void 0});const uo=M((()=>({TracePageSearchBar:m`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:m`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:m`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:m`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:m`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:m`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}))),ho=(0,r.memo)((function(e){const{clearSearch:t,focusUiFindMatches:n,navigable:r,nextResult:o,prevResult:a,resultCount:s,textFilter:i,onSearchValueChange:l,searchValue:c,hideSearchButtons:d}=e,p=uo(),u=i?(0,k.jsx)("span",{className:p.TracePageSearchBarCount,children:s}):null,h=f()(p.TracePageSearchBarBtn,{[p.TracePageSearchBarBtnDisabled]:!i}),m={"data-test":"in-trace-search",className:f()(p.TracePageSearchBarBar,Te),name:"search",suffix:u};return(0,k.jsx)("div",{className:p.TracePageSearchBar,children:(0,k.jsxs)(mt,{className:Ne,compact:!0,style:{display:"flex"},children:[(0,k.jsx)(co,{onChange:l,value:c,inputProps:m}),!d&&(0,k.jsxs)(k.Fragment,{children:[r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(pt,{className:f()(h,p.TracePageSearchBarLocateBtn),disabled:!i,htmlType:"button",onClick:n,children:po||(po=(0,k.jsx)(io(),{}))}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"up",onClick:a}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"down",onClick:o})]}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"close",onClick:t})]})]})})})),mo=M((()=>({BreakableText:m`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `}))),go=/\W*\w+\W*/g;function fo(e){const{className:t,text:n,wordRegexp:r=go}=e;if(!n)return"string"==typeof n?n:null;const o=[];r.exec("");let a=r.exec(n)||[n];for(;a;)o.push((0,k.jsx)("span",{className:t||mo().BreakableText,children:a[0]},`${n}-${o.length}`)),a=r.exec(n);return o}fo.defaultProps={wordRegexp:go};const bo=["centered","className","small"];const yo=M((()=>{const e=h`
    /*
    rgb(0, 128, 128) == teal
    rgba(0, 128, 128, 0.3) == #bedfdf
    */
    from {
      color: #bedfdf;
    }
    to {
      color: teal;
    }
  `;return{LoadingIndicator:m`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:m`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:m`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}}));function vo(e){const{centered:t,className:n,small:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,bo),a=yo(),s=f()(a.LoadingIndicator,{[a.LoadingIndicatorCentered]:t,[a.LoadingIndicatorSmall]:r,className:n});return(0,k.jsx)(it,Object.assign({type:"loading",className:s},o))}vo.defaultProps={centered:!1,className:void 0,small:!1};const xo="<trace-without-root-span>",wo="FETCH_ERROR",_o="FETCH_LOADING";var ko;const jo=M((e=>{var t,n,r,o;return{TraceName:m`
      label: TraceName;
      font-size: ${r=null===(t=e.components)||void 0===t||null===(n=t.TraceName)||void 0===n?void 0:n.fontSize,o="unset",r?"string"==typeof r?r:`${r}px`:o};
    `,TraceNameError:m`
      label: TraceNameError;
      color: #c00;
    `}}));function To(e){const{className:t,error:n,state:r,traceName:o}=e,a=r===wo;let s=o||xo;const i=jo(O());let l="";if(a){l=i.TraceNameError;let e="";n&&(e="string"==typeof n?n:n.message||String(n)),e||(e="Error: Unknown error"),s=e,s=(0,k.jsx)(fo,{text:e})}else if(r===_o)s=ko||(ko=(0,k.jsx)(vo,{small:!0}));else{const e=String(o||xo);s=(0,k.jsx)(fo,{text:e})}return(0,k.jsx)("span",{className:f()(i.TraceName,l,t),children:s})}const Io=(0,V.memoize)((function(e){let t;const n=new Set(e.map((({spanID:e})=>e)));for(let r=0;r<e.length;r++){if(e[r].references&&e[r].references.some((({traceID:t,spanID:o})=>t===e[r].traceID&&n.has(o))))continue;if(!t){t=e[r];continue}const o=e[r].references&&e[r].references.length||0,a=t.references&&t.references.length||0;(o<a||o===a&&e[r].startTime<t.startTime)&&(t=e[r])}return t?`${t.process.serviceName}: ${t.operationName}`:""}),(e=>e.length?e[0].traceID:0));var Co=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function Do(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}}return{get:r,put:function(t,o){r(t)||(n.unshift({key:t,value:o}),n.length>e&&n.pop())}}}(e,t)}function So(e,t){var n=t?function(e,t){return function n(r,o){if(e(r,o))return!0;if(Array.isArray(r))return!(!Array.isArray(o)||r.length!==o.length||!r.every((function(e,t){return n(e,o[t])})));if(Array.isArray(o))return!1;if("object"==typeof r){if("object"!=typeof o)return!1;var a=null===r,s=null===o;if(a||s)return a===s;var i=Object.keys(r),l=Object.keys(o);if(i.length!==l.length)return!1;var c=t?n:e;return!!i.every((function(e){return Co(r,e)&&Co(o,e)&&c(r[e],o[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}const Eo=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];"number"==typeof o[0]&&(e=o.shift()),"function"==typeof o[0]?t=o.shift():void 0===o[0]&&o.shift(),"boolean"==typeof o[0]&&(n=o[0]);var s=Do(e,So(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=s.get(n);return void 0===o&&(o=e.apply(e,n),s.put(n,o)),o}}};var Lo=n("../../opt/drone/yarncache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js");const No=n.n(Lo)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function Oo(e){return(0,V.get)(No,e)}function Mo(e){const t=e.references?e.references.find((e=>"CHILD_OF"===e.refType)):null;return t?t.span:null}const Ro=/#\{([^{}]*)\}/g;function zo(e){const t=new Set;return e.replace(Ro,((e,n)=>(t.add(n),e))),Array.from(t)}function Po(e,t,n){return e.replace(Ro,((e,r)=>{const o=n[r];return null==o?"":t(o)}))}function Ho(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:zo(e),template:Po.bind(null,e,t)}}function $o(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error(`Invalid value: ${e}`)}const Vo=e=>e;function Bo(e,t){if(t)return t.find((t=>t.key===e))}function Ao(e,t){return e.template(t)}function Fo(e,t,n,r){const o=n[r];let a="logs";const s=t.process.tags===n;s&&(a="process");t.tags===n&&(a="tags");const i=[];return e.forEach((e=>{if(e.type(a)&&e.key(o.key)&&e.value(o.value)){const r={},l=e.parameters.every((i=>{let l=Bo(i,n);return l||s||(l=function(e,t){let n=t;for(;n;){const t=Bo(e,n.tags)||Bo(e,n.process.tags);if(t)return t;n=Mo(n)}}(i,t)),l?(r[i]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${i} for key ${o.key} in ${a}.`,e.object),!1)}));l&&i.push({url:Ao(e.url,r),text:Ao(e.text,r)})}})),i}const Wo=(Oo("linkPatterns")||[]).map((function(e){try{const t=Ho(e.url,encodeURIComponent),n=Ho(e.text,Vo);return{object:e,type:$o(e.type),key:$o(e.key),value:$o(e.value),url:t,text:n,parameters:(0,V.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error(`Ignoring invalid link pattern: ${t}`,e),null}})).filter(Boolean),Go=Eo(10)((e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter((e=>"string"==typeof t[e]||"number"===t[e]));return e.filter((e=>e.type("traces"))).forEach((e=>{const o={},a=e.parameters.every((e=>{const n=e;return!!r.includes(n)&&(o[e]=t[n],!0)}));a&&n.push({url:Ao(e.url,o),text:Ao(e.text,o)})})),n}(Wo,e):t}));new WeakMap;var Uo,Ko;const qo=e=>(0,k.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",Uo||(Uo=(0,k.jsx)(ot,{}))]}),Zo=e=>(0,k.jsx)(ct,{children:e.map((({text:e,url:t},n)=>(0,k.jsx)(dt,{children:(0,k.jsx)(qo,{href:t,children:e})},`${t}-${n}`)))});function Xo(e){const{links:t}=e;return 1===t.length?(0,k.jsx)(qo,{href:t[0].url,title:t[0].text,className:e.className}):(0,k.jsx)(lt,{overlay:Zo(t),placement:"bottomRight",trigger:["click"],children:(0,k.jsx)("a",{className:e.className,children:Ko||(Ko=(0,k.jsx)(ot,{isLarge:!0}))})})}var Jo=n("./packages/grafana-data/src/index.ts");const Yo=["renderer"];const Qo=M((e=>({TracePageHeader:m`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${R(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${R(e,"#eee")};
        border-bottom: 1px solid ${R(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${R(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:m`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:m`
      label: TracePageHeaderBack;
      align-items: center;
      align-self: stretch;
      background-color: #fafafa;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: -1px;
      &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
      }
    `,TracePageHeaderTitleLink:m`
      label: TracePageHeaderTitleLink;
      align-items: center;
      display: flex;
      flex: 1;

      &:hover * {
        text-decoration: underline;
      }
      &:hover > *,
      &:hover small {
        text-decoration: none;
      }
    `,TracePageHeaderDetailToggle:m`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:m`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:m`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:m`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:m`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:f()(m`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:m`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:m`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:m`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `}))),ea=[{key:"timestamp",label:"Trace Start",renderer(e,t,n){const r=(0,Jo.dateTimeFormat)(e.startTime/1e3,{timeZone:t,defaultWithMS:!0}),o=r.match(/^(.+)(:\d\d\.\d+)$/);return o?(0,k.jsxs)("span",{className:n.TracePageHeaderOverviewItemValue,children:[o[1],(0,k.jsx)("span",{className:n.TracePageHeaderOverviewItemValueDetail,children:o[2]})]}):r}},{key:"duration",label:"Duration",renderer:e=>le(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set((0,V.values)(e.processes).map((e=>e.serviceName))).size},{key:"depth",label:"Depth",renderer:e=>(0,V.get)((0,V.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function ta(e){const{canCollapse:t,clearSearch:n,focusUiFindMatches:o,hideMap:a,hideSummary:s,nextResult:i,onSlimViewClicked:l,prevResult:c,resultCount:d,slimView:p,textFilter:u,trace:h,traceGraphView:m,updateNextViewRangeTime:g,updateViewRangeTime:b,viewRange:y,searchValue:v,onSearchValueChange:x,hideSearchButtons:w,timeZone:_}=e,j=Qo(O()),T=r.useMemo((()=>h?Go(h):[]),[h]);if(!h)return null;const I=!s&&!p&&ea.map((e=>{const{renderer:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Yo);return Object.assign({},n,{value:t(h,_,j)})})),C=(0,k.jsxs)("h1",{className:f()(j.TracePageHeaderTitle,t&&j.TracePageHeaderTitleCollapsible),children:[(0,k.jsx)(To,{traceName:Io(h.spans)})," ",(0,k.jsx)("small",{className:f()(j.TracePageHeaderTraceId,Le),children:h.traceID})]});return(0,k.jsxs)("header",{className:j.TracePageHeader,children:[(0,k.jsxs)("div",{className:j.TracePageHeaderTitleRow,children:[T&&T.length>0&&(0,k.jsx)(Xo,{links:T,className:j.TracePageHeaderBack}),t?(0,k.jsxs)("a",{className:j.TracePageHeaderTitleLink,onClick:l,role:"switch","aria-checked":!p,children:[(0,k.jsx)(Hr(),{className:f()(j.TracePageHeaderDetailToggle,!p&&j.TracePageHeaderDetailToggleExpanded)}),C]}):C,(0,k.jsx)(ho,{clearSearch:n,focusUiFindMatches:o,nextResult:i,prevResult:c,resultCount:d,textFilter:u,navigable:!m,searchValue:v,onSearchValueChange:x,hideSearchButtons:w})]}),I&&(0,k.jsx)(Jn,{className:j.TracePageHeaderOverviewItems,items:I}),!a&&!p&&(0,k.jsx)(ao,{trace:h,viewRange:y,updateNextViewRangeTime:g,updateViewRangeTime:b})]})}function na(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ra{constructor(e){na(this,"isTagsOpen",void 0),na(this,"isProcessOpen",void 0),na(this,"logs",void 0),na(this,"isWarningsOpen",void 0),na(this,"isStackTracesOpen",void 0),na(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:o,isStackTracesOpen:a,logs:s}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(o),this.isStackTracesOpen=Boolean(a),this.logs={isOpen:Boolean(s&&s.isOpen),openedItems:s&&s.openedItems?new Set(s.openedItems):new Set}}toggleTags(){const e=new ra(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new ra(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new ra(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new ra(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new ra(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new ra(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new ra(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}function oa(e,t){return e===t}function aa(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function sa(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var ia=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,s=r.pop(),i=sa(r),l=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(n)),c=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return l.apply(null,e)}));return c.resultFunc=s,c.dependencies=i,c.recomputations=function(){return a},c.resetRecomputations=function(){return a=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oa,n=null,r=null;return function(){return aa(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var la=n("../../opt/drone/yarncache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js"),ca=n.n(la);const da=e=>e.serviceName,pa=e=>e.spanID,ua=e=>e.operationName,ha=e=>e.duration,ma=e=>e.startTime,ga=e=>e.processID,fa=ia(ia((({span:e})=>e),(e=>e.references||[])),(({type:e})=>e),((e,t)=>e.find((e=>e.refType===t)))),ba=(ia((e=>fa({span:e,type:"CHILD_OF"})),(e=>e?e.spanID:null)),ia((e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process}),da)),ya=(ia((({spans:e})=>e),(({leftBound:e})=>e),(({rightBound:e})=>e),((e,t,n)=>e.filter((e=>ma(e)>=t&&ma(e)<=n)))),ia((({spans:e})=>e),(({text:e})=>e),((e,t)=>ca().filter(t,e,{extract:e=>`${ba(e)} ${ua(e)}`}).map((({original:e})=>e))))),va=ia(ya,(e=>e.reduce(((e,t)=>({...e,[pa(t)]:t})),{})));ia((({spans:e})=>e),va,((e,t)=>e.map((e=>({...e,muted:!t[pa(e)]})))));class xa{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof xa?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce(((e,t)=>Math.max(t.depth+1,e)),1)}get size(){let e=0;return this.walk((()=>e++)),e}addChild(e){return this.children.push(e instanceof xa?e:new xa(e)),this}find(e){if(xa.iterFunction(xa.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=xa.iterFunction(xa.searchFunction(e)),n=(e,r)=>{const o=r.concat([e]);if(t(e))return o;for(let t=0;t<e.children.length;t++){const r=e.children[t],a=n(r,o);if(a)return a}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:o}=n.pop();e(t.value,t,o),r=o+1;let a=t.children.length-1;for(;a>=0;)n.push({node:t.children[a],depth:r}),a--}}}const wa=e=>e.spans,_a=e=>e.processes,ka=ia((e=>e.span),(e=>e.processes),((e,t)=>({...e,process:t[ga(e)]}))),ja=ia(wa,(e=>e.reduce(((e,t)=>e.set(pa(t),t)),new Map)));function Ta(e){const t=new Map(e.spans.map((e=>[e.spanID,new xa(e.spanID)]))),n=new Map(e.spans.map((e=>[e.spanID,e]))),r=new xa("__root__");e.spans.forEach((e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:o,spanID:a}=e.references[0];if("CHILD_OF"!==o&&"FOLLOWS_FROM"!==o)throw new Error(`Unrecognized ref type: ${o}`);(t.get(a)||r).children.push(n)}else r.children.push(n)}));const o=(e,t)=>{const r=n.get(e.value),o=n.get(t.value);return+(r.startTime>o.startTime)||+(r.startTime===o.startTime)-1};return e.spans.forEach((e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(o)})),r.children.sort(o),r}ia(wa,(e=>e.length));const Ia=ia(wa,(e=>e.reduce(((e,t)=>e?Math.min(e,ma(t)):ma(t)),null))),Ca=ia(wa,Ia,((e,t)=>e.reduce(((e,n)=>e?Math.max(ma(n)-t+ha(n),e):ha(n)),null))),Da=(ia(Ia,Ca,((e,t)=>e+t)),ia(Ta,ja,((e,t)=>e.children.map((e=>t.get(e.value))).sort(((e,t)=>{return n=ma(e),r=ma(t),n-r;var n,r}))[0]))),Sa=(ia(Ta,(e=>e.depth-1)),ia(ia((e=>e.trace),Ta),ia((e=>e.span),pa),((e,t)=>e.getPath(t).length-1)),ia(_a,(e=>Object.keys(e).reduce(((t,n)=>t.add(da(e[n]))),new Set)))),Ea=(ia(Sa,(e=>e.size)),{ms:function(e){const t=ie(e,ae,te);return`${ee().duration(t/te).asMilliseconds()}ms`},s:function(e){const t=ie(e,ae,ne);return`${ee().duration(t/te).asSeconds()}s`}}),La=ia(Ca,(e=>e>=ne?Ea.s:Ea.ms)),Na=(ia((({duration:e})=>e),(({unit:e})=>Ea[e]),((e,t)=>t(e))),ia((({duration:e})=>e),ia((({trace:e})=>e),La),((e,t)=>t(e))),ia((({trace:e})=>e),(({spans:e})=>e),(({sort:e})=>e),((e,t,{dir:n,comparator:r,selector:o})=>[...t].sort(((t,a)=>n*r(o(t,e),o(a,e)))))),ia(Ta,(e=>{const t=new Map;let n=0;return e.walk((e=>t.set(e,n++))),t})));ia(ia((e=>e.trace),Ta),ia((e=>e.span),pa),((e,t)=>{const n=e.find(t);return n?n.size-1:-1})),ia(ia((({trace:e})=>e),Na),(({span:e})=>e),((e,t)=>e.get(pa(t)))),ia(ia(ia((e=>{const t=wa(e),n=_a(e);return{...e,spans:t.map((e=>ka({span:e,processes:n})))}}),Da),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ia;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map((function(t){return e[t]})),(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){return e[n[r]]=t,e}),{})}))}({name:ua,serviceName:ba})),(({name:e,serviceName:t})=>`${t}: ${e}`)),ia((({spans:e})=>e),ia((({trace:e})=>e),Ta),(({collapsed:e})=>e),((e,t,n)=>{const r=n.reduce(((e,n)=>(t.find(n).walk((t=>t!==n&&e.add(t))),e)),new Set);return r.size>0?e.filter((e=>!r.has(pa(e)))):e})),ia((({trace:e})=>e),(({interval:e=4})=>e),(({width:e=3})=>e),((e,t,n)=>[...Array(t+1).keys()].map((r=>({timestamp:Ia(e)+Ca(e)*(r/t),width:n}))))),ia((e=>e),wa,((e,t)=>{const n=new Map;return{...e,spans:t.reduce(((e,t)=>{const r=n.has(pa(t))?`${pa(t)}_${n.get(pa(t))}`:pa(t),o={...t,spanID:r};return r!==pa(t)&&console.warn("duplicate spanID in trace replaced",pa(t),"new:",r),n.set(pa(t),(n.get(pa(t))||0)+1),e.concat([o])}),[])}})),ia((e=>e),wa,((e,t)=>({...e,spans:t.filter((e=>!!ma(e)))})));function Oa(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,r=Number.MAX_SAFE_INTEGER;const o=new Map,a=new Map;e.spans=e.spans.filter((e=>Boolean(e.startTime)));const s=e.spans.length;for(let t=0;t<s;t++){const s=e.spans[t],{startTime:i,duration:l,processID:c}=s;let d=s.spanID;i<r&&(r=i),i+l>n&&(n=i+l);const p=o.get(d);null!=p?(console.warn(`Dupe spanID, ${p+1} x ${d}`,s,a.get(d)),(0,V.isEqual)(s,a.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),o.set(d,p+1),d=`${d}_${p}`,s.spanID=d):o.set(d,1),s.process=e.processes[c],a.set(d,s)}const i=Ta(e),l=[],c={};i.walk(((e,n,o=0)=>{if("__root__"===e)return;const s=a.get(e);if(!s)return;const{serviceName:i}=s.process;c[i]=(c[i]||0)+1,s.relativeStartTime=s.startTime-r,s.depth=o-1,s.hasChildren=n.children.length>0,s.warnings=s.warnings||[],s.tags=s.tags||[],s.references=s.references||[];const d=function(e){const t=new Map;return{tags:e.reduce(((e,n)=>(e.some((e=>e.key===n.key&&e.value===n.value))?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e)),[]),warnings:Array.from(t.values())}}(s.tags);s.tags=function(e,t){const n=e.slice(),r=(t||[]).map((e=>e.toLowerCase()));return n.sort(((e,t)=>{const n=e.key.toLowerCase(),o=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!o.startsWith(t))return-1;if(!n.startsWith(t)&&o.startsWith(t))return 1}return n>o?1:n<o?-1:0})),n}(d.tags,Oo("topTagPrefixes")),s.warnings=s.warnings.concat(d.warnings),s.references.forEach(((n,r)=>{const o=a.get(n.spanID);o&&(n.span=o,r>0&&(o.subsidiarilyReferencedBy=o.subsidiarilyReferencedBy||[],o.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:s,refType:n.refType})))})),l.push(s)}));const d=Io(l);return{services:Object.keys(c).map((e=>({name:e,numberOfSpans:c[e]}))),spans:l,traceID:t,traceName:d,processes:e.processes,duration:n-r,startTime:r,endTime:n}}function Ma(e,t){if(!t)return null;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach((e=>{"-"===e[0]?r.push(e.substr(1).toLowerCase()):n.push(e.toLowerCase())}));const o=(e,t)=>e.some((e=>t.toLowerCase().includes(e))),a=e=>!!e&&e.some((e=>!o(r,e.key)&&(o(n,e.key)||o(n,e.value.toString()))));return new Set(t.filter((e=>o(n,e.operationName)||o(n,e.process.serviceName)||a(e.tags)||null!==e.logs&&e.logs.some((e=>a(e.fields)))||a(e.process.tags)||n.some((t=>t===e.spanID)))).map((e=>e.spanID)))}},"./public/app/plugins/datasource/jaeger/responseTransform.ts":(e,t,n)=>{"use strict";n.d(t,{xM:()=>a,Wp:()=>s,c6:()=>l});var r=n("./packages/grafana-data/src/index.ts"),o=n("./packages/jaeger-ui-components/src/index.ts");function a(e){const t=e.spans.map((t=>{return n=t,r=e.processes,{spanID:n.spanID,traceID:n.traceID,parentSpanID:null===(o=n.references)||void 0===o||null===(a=o.find((e=>"CHILD_OF"===e.refType)))||void 0===a?void 0:a.spanID,operationName:n.operationName,startTime:n.startTime/1e3,duration:n.duration/1e3,logs:n.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:n.tags,warnings:null!==(s=n.warnings)&&void 0!==s?s:void 0,stackTraces:n.stackTraces,serviceName:r[n.processID].serviceName,serviceTags:r[n.processID].tags};var n,r,o,a,s})),n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string},{name:"spanID",type:r.FieldType.string},{name:"parentSpanID",type:r.FieldType.string},{name:"operationName",type:r.FieldType.string},{name:"serviceName",type:r.FieldType.string},{name:"serviceTags",type:r.FieldType.other},{name:"startTime",type:r.FieldType.number},{name:"duration",type:r.FieldType.number},{name:"logs",type:r.FieldType.other},{name:"tags",type:r.FieldType.other},{name:"warnings",type:r.FieldType.other},{name:"stackTraces",type:r.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)n.add(e);return n}function s(e,t){const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:r.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:r.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:r.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),o=e.map(i).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of o)n.add(e);return n}function i(e){const t=(0,o.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},n=[];for(let r=0;r<e.length;r++){const o=e.get(r);t.traceID||(t.traceID=o.traceID),n.find((e=>e===o.serviceName))||(n.push(o.serviceName),t.processes[`p${n.length}`]={serviceName:o.serviceName,tags:o.serviceTags}),t.spans.push({traceID:o.traceID,spanID:o.spanID,duration:1e3*o.duration,references:o.parentSpanID?[{refType:"CHILD_OF",spanID:o.parentSpanID,traceID:o.traceID}]:[],flags:0,logs:o.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:o.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===o.serviceName))||"",startTime:1e3*o.startTime,tags:o.tags,warnings:o.warnings?o.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},"./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("../../opt/drone/yarncache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.children,a=e.color,s=e.size,i=e.style,l=e.width,c=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),p=t.reactIconBase,u=void 0===p?{}:p,h=s||u.size||"1em";return o.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||h,width:l||h},u,d,{style:r({verticalAlign:"middle",color:a||u.color},u.style||{},i)}))};i.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number]),width:a.default.oneOfType([a.default.string,a.default.number]),height:a.default.oneOfType([a.default.string,a.default.number]),style:a.default.object},i.contextTypes={reactIconBase:a.default.shape(i.propTypes)},t.default=i,e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("../../opt/drone/yarncache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),a=s(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},"../../opt/drone/yarncache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js":(e,t)=>{"use strict";t.E=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var o=t.indexOf(e);t.splice(o,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var n=this,r=n.constructor;return n.options=Object.assign({storeInstancesGlobally:!0},t||{}),n.callbacks={},n.directMap={},n.sequenceLevels={},n.resetTimer=null,n.ignoreNextKeyup=!1,n.ignoreNextKeypress=!1,n.nextExpectedAction=!1,n.element=e,n.addEvents(),n.options.storeInstancesGlobally&&r.instances.push(n),n},e.exports.prototype.bind=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js"),e.exports.prototype.bindMultiple=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js"),e.exports.prototype.unbind=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js"),e.exports.prototype.trigger=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js"),e.exports.prototype.reset=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js"),e.exports.prototype.stopCallback=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js"),e.exports.prototype.handleKey=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js"),e.exports.prototype.addEvents=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js"),e.exports.prototype.bindSingle=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js"),e.exports.prototype.getKeyInfo=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"),e.exports.prototype.pickBestAction=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js"),e.exports.prototype.getReverseMap=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js"),e.exports.prototype.getMatches=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js"),e.exports.prototype.resetSequences=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js"),e.exports.prototype.fireCallback=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js"),e.exports.prototype.bindSequence=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js"),e.exports.prototype.resetSequenceTimer=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"),e.exports.prototype.detach=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js"),e.exports.instances=[],e.exports.reset=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js"),e.exports.REVERSE_MAP=null},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js":(e,t,n)=>{"use strict";e.exports=function(){var e=this,t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js"),r=e.element;e.eventHandler=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(e),t(r,"keypress",e.eventHandler),t(r,"keydown",e.eventHandler),t(r,"keyup",e.eventHandler)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js":e=>{"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js":e=>{"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,o){var a=this;function s(t){return function(){a.nextExpectedAction=t,++a.sequenceLevels[e],a.resetSequenceTimer()}}function i(t){var s;a.fireCallback(r,t,e),"keyup"!==o&&(s=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js"),a.ignoreNextKeyup=s(t)),setTimeout((function(){a.resetSequences()}),10)}a.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?i:s(o||a.getKeyInfo(t[l+1]).action);a.bindSingle(t[l],c,o,e,l)}}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js":e=>{"use strict";e.exports=function(e,t,n,r,o){var a=this;a.directMap[e+":"+n]=t;var s,i=(e=e.replace(/\s+/g," ")).split(" ");i.length>1?a.bindSequence(e,i,t,n):(s=a.getKeyInfo(e,n),a.callbacks[s.key]=a.callbacks[s.key]||[],a.getMatches(s.key,s.modifiers,{type:s.action},r,e,o),a.callbacks[s.key][r?"unshift":"push"]({callback:t,modifiers:s.modifiers,action:s.action,seq:r,level:o,combo:e}))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js":(e,t,n)=>{var r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js").off;e.exports=function(){var e=this,t=e.element;r(t,"keypress",e.eventHandler),r(t,"keydown",e.eventHandler),r(t,"keyup",e.eventHandler)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js":e=>{function t(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=t,e.exports.on=t,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,o){this.stopCallback(t,t.target||t.srcElement,r,o)||!1===e(t,r)&&(n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js")(t),n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js")(t))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var r,o,a,s,i,l,c=[];for(r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js")(e),s=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js"),i=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js"),l=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),a=0;a<r.length;++a)s[o=r[a]]&&(o=s[o]),t&&"keypress"!==t&&i[o]&&(o=i[o],c.push("shift")),l(o)&&c.push(o);return{key:o,modifiers:c,action:t=this.pickBestAction(o,c,t)}}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,o,a,s){var i,l,c,d,p=this,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(p.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!p.callbacks[e])return u;for(c=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),"keyup"===h&&c(e)&&(t=[e]),i=0;i<p.callbacks[e].length;++i)if(l=p.callbacks[e][i],(o||!l.seq||p.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,l.modifiers))){var m=!o&&l.combo===a,g=o&&l.seq===o&&l.level===s;(m||g)&&p.callbacks[e].splice(i,1),u.push(l)}return u}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js":(e,t,n)=>{"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r){var o,a,s,i,l=this,c={},d=0,p=!1;for(o=l.getMatches(e,t,r),a=0;a<o.length;++a)o[a].seq&&(d=Math.max(d,o[a].level));for(a=0;a<o.length;++a)if(o[a].seq){if(o[a].level!==d)continue;p=!0,c[o[a].seq]=1,l.fireCallback(o[a].callback,r,o[a].combo,o[a].seq)}else p||l.fireCallback(o[a].callback,r,o[a].combo);i="keypress"===r.type&&l.ignoreNextKeypress,s=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),r.type!==l.nextExpectedAction||s(e)||i||l.resetSequences(c),l.ignoreNextKeypress=p&&"keydown"===r.type}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r=this;"number"!=typeof e.which&&(e.which=e.keyCode);var o=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js")(e);void 0!==o&&("keyup"!==e.type||r.ignoreNextKeyup!==o?(t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js"),r.handleKey(o,t(e),e)):r.ignoreNextKeyup=!1)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js":e=>{"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js":e=>{"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js":e=>{"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js":e=>{"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js":e=>{"use strict";e.exports=function(e){var t=this;e=e||{};var n,r=!1;for(n in t.sequenceLevels)e[n]?r=!0:t.sequenceLevels[n]=0;r||(t.nextExpectedAction=!1)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js":e=>{"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js":e=>{"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js":e=>{"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js":e=>{"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r;if(t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"),r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js"),"keypress"===e.type){var o=String.fromCharCode(e.which);return e.shiftKey||(o=o.toLowerCase()),o}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js":e=>{"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js":e=>{"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js":e=>{"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js":e=>{"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js":e=>{"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js":e=>{"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js":e=>{"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js":e=>{"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var t=1;t<20;++t)e.exports[111+t]="f"+t;for(t=0;t<=9;++t)e.exports[t+96]=t},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js":e=>{"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"../../opt/drone/yarncache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js":(e,t,n)=>{"use strict";var r=n("../../opt/drone/yarncache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,s,i,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(s=r(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),s()}return d}},"../../opt/drone/yarncache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js":e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},"../../opt/drone/yarncache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js":e=>{"use strict";var t=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var o=Object.keys(e),a=Object.keys(r);if(o.length!==a.length)return!1;for(var s=0;s<o.length;s++)if(!t.call(r,o[s])||!n(e[o[s]],r[o[s]]))return!1;return!0}},"../../opt/drone/yarncache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js":e=>{var t;t={},e.exports=t,t.simpleFilter=function(e,n){return n.filter((function(n){return t.test(e,n)}))},t.test=function(e,n){return null!==t.match(e,n)},t.match=function(e,t,n){n=n||{};var r,o=0,a=[],s=t.length,i=0,l=0,c=n.pre||"",d=n.post||"",p=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var u=0;u<s;u++)r=t[u],p[u]===e[o]?(r=c+r+d,o+=1,l+=1+l):l=0,i+=l,a[a.length]=r;return o===e.length?(i=p===e?1/0:i,{rendered:a.join(""),score:i}):null},t.filter=function(e,n,r){return n&&0!==n.length?"string"!=typeof e?n:(r=r||{},n.reduce((function(n,o,a,s){var i=o;r.extract&&(i=r.extract(o));var l=t.match(e,i,r);return null!=l&&(n[n.length]={string:l.rendered,score:l.score,index:a,original:o}),n}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},"../../opt/drone/yarncache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":e=>{"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);e.exports=function e(c,d,p){if("string"!=typeof d){if(l){var u=i(d);u&&u!==l&&e(c,u,p)}var h=o(d);a&&(h=h.concat(a(d)));for(var m=0;m<h.length;++m){var g=h[m];if(!(t[g]||n[g]||p&&p[g])){var f=s(d,g);try{r(c,g,f)}catch(e){}}}return c}return c}},"../../opt/drone/yarncache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js":e=>{"use strict";var t="    ";function n(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function r(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,o){var a="",s=n(o),i=function(e,n,r,o){if(!e.length)return n+" "+r;var s=n+"\n";return a+=t,e.forEach((function(t,n){s+=a+o(t)+(n<e.length-1?",":"")+"\n"})),a=a.slice(0,-t.length),s+a+r};return"<div "+s("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+s("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+s("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+r(t.toISOString())+'"</span>';case"null":return"<span "+s("json-markup-null")+">null</span>";case"string":return"<span "+s("json-markup-string")+'>"'+r(t.replace(/\n/g,"\n"+a))+'"</span>';case"link":return"<span "+s("json-markup-string")+'>"<a href="'+r(t)+'">'+r(t)+'</a>"</span>';case"array":return i(t,"[","]",e);case"object":var n=Object.keys(t).filter((function(e){return void 0!==t[e]}));return i(n,"{","}",(function(n){return"<span "+s("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"../../opt/drone/yarncache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),e=n.hmd(e);const r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e)},"../../opt/drone/yarncache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js":e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=8672.6839ffb2aed352838f3a.js.map