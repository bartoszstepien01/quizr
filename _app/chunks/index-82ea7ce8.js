function x(){}const K=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(Q)}function B(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pt(t){let e;return U(t,n=>e=n)(),e}function Dt(t,e,n){t.$$.on_destroy.push(U(e,n))}function Tt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function zt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Bt(t,e,n,i,r,u){if(r){const c=V(e,n,i,u);t.p(c,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window!="undefined";let X=W?()=>window.performance.now():()=>Date.now(),L=W?t=>requestAnimationFrame(t):x;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&L(Y)}function Z(t){let e;return g.size===0&&L(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function ft(){O=!0}function _t(){O=!1}function dt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:dt(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[s],f)}}function mt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=et("style");return yt(tt(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function qt(t,e,n){O&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function Ft(){return q(" ")}function Ht(){return q("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){$t(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function wt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Jt(t,e,n){return wt(t,e,n,et)}function vt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Kt(t){return vt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e){t.value=e==null?"":e}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const S=new Map;let M=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:pt(e),rules:{}};return S.set(t,n),n}function it(t,e,n,i,r,u,c,o=0){const s=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=s){const N=e+(n-e)*u(m);l+=m*100+`%{${c(N,1-N)}}
`}const f=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Et(f)}_${o}`,_=tt(t),{stylesheet:d,rules:h}=S.get(_)||Nt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||jt())}function jt(){L(()=>{M||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let k;function v(t){k=t}function F(){if(!k)throw new Error("Function called outside component initialization");return k}function Wt(t){F().$$.on_mount.push(t)}function Xt(t){F().$$.after_update.push(t)}function Yt(t,e){return F().$$.context.set(t,e),e}const w=[],G=[],A=[],J=[],rt=Promise.resolve();let z=!1;function st(){z||(z=!0,rt.then(ct))}function Zt(){return st(),rt}function E(t){A.push(t)}const D=new Set;let j=0;function ct(){const t=k;do{for(;j<w.length;){const e=w[j];j++,v(e),At(e.$$)}for(v(null),w.length=0,j=0;G.length;)G.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];D.has(n)||(D.add(n),n())}A.length=0}while(w.length);for(;J.length;)J.pop()();z=!1,D.clear(),v(t)}function At(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function ot(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const C=new Set;let y;function te(){y={r:0,c:[],p:y}}function ee(){y.r||b(y.c),y=y.p}function Ct(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),y.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const lt={duration:0};function ie(t,e,n){let i=e(t,n),r=!1,u,c,o=0;function s(){u&&T(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=x,css:p}=i||lt;p&&(u=it(t,0,1,_,a,d,p,o++)),h(0,1);const m=X()+a,N=m+_;c&&c.abort(),r=!0,E(()=>R(t,!0,"start")),c=Z(P=>{if(r){if(P>=N)return h(1,0),R(t,!0,"end"),s(),r=!1;if(P>=m){const H=d((P-m)/_);h(H,1-H)}}return r})}let f=!1;return{start(){f||(f=!0,T(t),B(i)?(i=i(),ot().then(l)):l())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}function re(t,e,n){let i=e(t,n),r=!0,u;const c=y;c.r+=1;function o(){const{delay:s=0,duration:l=300,easing:f=K,tick:a=x,css:_}=i||lt;_&&(u=it(t,1,0,l,s,f,_));const d=X()+s,h=d+l;E(()=>R(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),R(t,!1,"end"),--c.r||b(c.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return B(i)?ot().then(()=>{i=i(),o()}):o(),{end(s){s&&i.tick&&i.tick(1,0),r&&(u&&T(t,u),r=!1)}}}function se(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[u]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function oe(t){t&&t.c()}function le(t,e){t&&t.l(e)}function St(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||E(()=>{const s=u.map(Q).filter(B);c?c.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(E)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,u,c,o=[-1]){const s=k;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Rt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ft();const a=bt(e.target);l.fragment&&l.fragment.l(a),a.forEach(xt)}else l.fragment&&l.fragment.c();e.intro&&Ct(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),_t(),ct()}v(s)}class ae{$destroy(){Mt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as A,Mt as B,ut as C,Zt as D,x as E,U as F,b as G,B as H,Bt as I,Lt as J,zt as K,E as L,ie as M,re as N,Tt as O,Pt as P,gt as Q,It as R,ae as S,Dt as T,G as U,Ut as V,bt as a,Gt as b,Jt as c,xt as d,et as e,Vt as f,qt as g,vt as h,ue as i,Qt as j,Ft as k,Ht as l,Kt as m,te as n,ne as o,ee as p,Ct as q,Yt as r,Ot as s,q as t,Xt as u,Wt as v,oe as w,le as x,St as y,se as z};