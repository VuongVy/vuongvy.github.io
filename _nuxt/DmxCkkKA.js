import{D as M,E as $,r as b,B as E,F as I,u as L,G as B,H as C,m as H,I as R,o as O,c as V,a as g,J as q,K as k,x as v,L as z,M as J,b as A,N as K}from"./CsDjdxJE.js";import U from"./D2Fhqjfh.js";import"./DjoLMu8y.js";import"./BQkc-AXV.js";import"./BqtLjLXK.js";function j(n,t){const e=t/n*100;return 2/Math.PI*100*Math.atan(e/50)}function G(n={}){const{duration:t=2e3,throttle:e=200,hideDelay:r=500,resetDelay:s=400}=n,l=n.estimatedProgress||j,o=I(),a=b(0),u=b(!1);let c=!1,d,f,x,T;const w=()=>y(0);function y(i=0){if(!o.isHydrating){if(i>=100)return m();p(),a.value=i<0?0:i,e?f=setTimeout(()=>{u.value=!0,S()},e):(u.value=!0,S())}}function N(){x=setTimeout(()=>{u.value=!1,T=setTimeout(()=>{a.value=0},s)},r)}function m(i={}){a.value=100,c=!0,p(),P(),i.force?(a.value=0,u.value=!1):N()}function P(){clearTimeout(x),clearTimeout(T)}function p(){clearTimeout(f),cancelAnimationFrame(d)}function S(){c=!1;let i;function h(_){if(c)return;i??(i=_);const F=_-i;a.value=Math.max(0,Math.min(100,l(t,F))),d=requestAnimationFrame(h)}d=requestAnimationFrame(h)}let D=()=>{};{const i=o.hook("page:loading:start",()=>{w()}),h=o.hook("page:loading:end",()=>{m()}),_=o.hook("vue:error",()=>m());D=()=>{_(),i(),h(),p()}}return{_cleanup:D,progress:E(()=>a.value),isLoading:E(()=>u.value),start:w,set:y,finish:m,clear:p}}function X(n={}){const t=I(),e=t._loadingIndicator=t._loadingIndicator||G(n);return M()&&(t._loadingIndicatorDeps=t._loadingIndicatorDeps||0,t._loadingIndicatorDeps++,$(()=>{t._loadingIndicatorDeps--,t._loadingIndicatorDeps===0&&(e._cleanup(),delete t._loadingIndicator)})),e}const Y=L({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"},estimatedProgress:{type:Function,required:!1}},setup(n,{slots:t,expose:e}){const{progress:r,isLoading:s,start:l,finish:o,clear:a}=X({duration:n.duration,throttle:n.throttle,estimatedProgress:n.estimatedProgress});return e({progress:r,isLoading:s,start:l,finish:o,clear:a}),()=>B("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${n.height}px`,opacity:s.value?1:0,background:n.color||void 0,backgroundSize:`${100/r.value*100}% auto`,transform:`scaleX(${r.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},t)}}),Q=Symbol.for("nuxt:client-only"),W="data-n-ids",Z="-";function ee(n){var s,l,o,a,u,c;if(typeof n!="string")throw new TypeError("[nuxt] [useId] key must be a string.");n=`n${n.slice(1)}`;const t=I(),e=H();if(!e)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");t._id||(t._id=0),e._nuxtIdIndex||(e._nuxtIdIndex={}),(s=e._nuxtIdIndex)[n]||(s[n]=0);const r=n+Z+e._nuxtIdIndex[n]++;if(t.payload.serverRendered&&t.isHydrating&&!C(Q,!1)){const d=((l=e.vnode.el)==null?void 0:l.nodeType)===8&&((a=(o=e.vnode.el)==null?void 0:o.nextElementSibling)!=null&&a.getAttribute)?(u=e.vnode.el)==null?void 0:u.nextElementSibling:e.vnode.el,f=JSON.parse(((c=d==null?void 0:d.getAttribute)==null?void 0:c.call(d,W))||"{}");if(f[r])return f[r]}return n+"_"+t._id++}const te={"data-theme":"retro",class:"drawer lg:drawer-open"},ne=["id"],oe={class:"drawer-content bg-base-200"},ae={class:"p-5"},re={class:"drawer-side"},se=["for"],ge=L({__name:"default",setup(n){const t=ee("$i9bCpVDU6M"),e=b(!1);return R("sidebar:toggle",()=>e.value=!e.value),(r,s)=>{const l=Y;return O(),V(K,null,[g("div",te,[q(g("input",{id:v(t),type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=o=>z(e)?e.value=o:null),class:"drawer-toggle"},null,8,ne),[[k,v(e)]]),g("div",oe,[g("div",ae,[J(r.$slots,"default")])]),g("div",re,[g("label",{for:v(t),"aria-label":"close sidebar",class:"drawer-overlay"},null,8,se),A(U,{class:"w-80 min-h-full bg-base-100"})])]),A(l,{height:4})],64)}}});export{ge as default};
