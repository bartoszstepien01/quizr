import{_ as k}from"./preload-helper-4d8c9f69.js";import{w as j,d as V}from"./index-d0f4ef2b.js";import{P as p}from"./index-82ea7ce8.js";var se=Object.defineProperty,ne=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,M=(r,e,t)=>e in r?se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))G.call(e,t)&&M(r,t,e[t]);if(D)for(var t of D(e))J.call(e,t)&&M(r,t,e[t]);return r},h=(r,e)=>ne(r,ce(e)),T=(r,e)=>{var t={};for(var a in r)G.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&D)for(var a of D(r))e.indexOf(a)<0&&J.call(r,a)&&(t[a]=r[a]);return t},A=["error","warn","debug"],Q=({logger:r=console,level:e=A[1],prefix:t="[i18n]: "})=>A.reduce((a,l,o)=>h(c({},a),{[l]:i=>A.indexOf(e)>=o&&r[l](`${t}${i}`)}),{}),d=Q({}),ue=r=>{d=r},z=r=>{var e=r,{parser:t,key:a,params:l,translations:o,locale:i,fallbackLocale:s}=e,u=T(e,["parser","key","params","translations","locale","fallbackLocale"]);if(!(a&&i))return d.warn("No translation key or locale provided. Skipping translation..."),"";let n=(o[i]||{})[a];return s&&n===void 0&&(n=(o[s]||{})[a]),u.hasOwnProperty("fallbackValue")&&n===void 0?u.fallbackValue:t.parse(n,l,i,a)},b=(...r)=>r.length?r.filter(e=>!!e).map(e=>{let t=`${e}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(e);if(!a)throw new Error(`'${e}' is non-standard.`);t=a}catch{d.warn(`Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`)}return t}):[],F=(r,e)=>Object.keys(r||{}).reduce((t,a)=>{let l=r[a],o=e?`${e}.${a}`:`${a}`;return l&&typeof l=="object"?c(c({},t),F(l,o)):h(c({},t),{[o]:l})},{}),de=async r=>{try{return(await Promise.all(r.map(e=>{var t=e,{loader:a}=t,l=T(t,["loader"]);return new Promise(async o=>{let i;try{i=await a()}catch(s){d.error(`Failed to load translation. Verify your '${l.locale}' > '${l.key}' Loader.`),d.error(s)}o(h(c({loader:a},l),{data:i}))})}))).reduce((e,{key:t,data:a,locale:l})=>{if(!a)return e;let[o]=b(l);return h(c({},e),{[o]:F(h(c({},e[o]||{}),{[t]:a}))})},{})}catch(e){d.error(e)}return{}},pe=r=>e=>{try{if(typeof e=="string")return e===r;if(typeof e=="object")return e.test(r)}catch{d.error("Invalid route config!")}return!1},fe=(r,e)=>{let t=!0;try{t=Object.keys(r).filter(a=>r[a]!==void 0).every(a=>r[a]===e[a])}catch{}return t},H=1e3*60*60*24,he=class{constructor(r){this.cachedAt=0,this.loadedKeys={},this.currentRoute=j(),this.config=j(),this.isLoading=j(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,t)=>{let a=Array.from(this.promises).filter(l=>fe({locale:b(e)[0],route:t},l)).map(({promise:l})=>l);return Promise.all(a)},get:()=>p(this.isLoading)},this.privateTranslations=j({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>p(this.translations)},this.locales=h(c({},V([this.config,this.privateTranslations],([e,t])=>{if(!e)return[];let{loaders:a=[]}=e,l=a.map(({locale:i})=>i),o=Object.keys(t).map(i=>i);return Array.from(new Set([...b(...l),...b(...o)]))},[])),{get:()=>p(this.locales)}),this.internalLocale=j(),this.loaderTrigger=V([this.internalLocale,this.currentRoute],([e,t],a)=>{var l,o;e!==void 0&&t!==void 0&&!(e===((l=p(this.loaderTrigger))==null?void 0:l[0])&&t===((o=p(this.loaderTrigger))==null?void 0:o[1]))&&(d.debug("Triggering translation load..."),a([e,t]))},[]),this.localeHelper=j(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>p(this.locale)},this.initialized=V([this.locale,this.currentRoute,this.privateTranslations],([e,t,a],l)=>{p(this.initialized)||l(e!==void 0&&t!==void 0&&!!Object.keys(a).length)}),this.translation=V([this.privateTranslations,this.locale,this.isLoading],([e,t,a],l)=>{let o=e[t];o&&Object.keys(o).length&&!a&&l(o)},{}),this.t=h(c({},V([this.config,this.translation],e=>{var[t]=e,a=t,{parser:l,fallbackLocale:o}=a,i=T(a,["parser","fallbackLocale"]);return(s,...u)=>z(c({parser:l,key:s,params:u,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:o},i.hasOwnProperty("fallbackValue")?{fallbackValue:i.fallbackValue}:{}))})),{get:(e,...t)=>p(this.t)(e,...t)}),this.l=h(c({},V([this.config,this.translations],e=>{var[t,...a]=e,l=t,{parser:o,fallbackLocale:i}=l,s=T(l,["parser","fallbackLocale"]),[u]=a;return(n,g,...$)=>z(c({parser:o,key:g,params:$,translations:u,locale:n,fallbackLocale:i},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,t,...a)=>p(this.l)(e,t,...a)}),this.getLocale=e=>{let{fallbackLocale:t=""}=p(this.config)||{},a=e||t;if(!a)return"";let l=this.locales.get();return l.find(o=>b(a).includes(o))||l.find(o=>b(t).includes(o))||""},this.setLocale=e=>{if(!!e&&e!==p(this.internalLocale))return d.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,p(this.currentRoute))},this.setRoute=e=>{if(e!==p(this.currentRoute)){d.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let t=p(this.internalLocale);return this.loading.toPromise(t,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),t=p(this.currentRoute))=>{let a=p(this.config);if(!a||!e)return[];let l=this.translations.get(),{loaders:o,fallbackLocale:i="",cache:s=H}=a||{},u=Number.isNaN(+s)?H:+s;this.cachedAt?Date.now()>u+this.cachedAt&&(d.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(d.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[n,g]=b(e,i),$=l[n],_=l[g],w=(o||[]).map(f=>{var v=f,{locale:P}=v,y=T(v,["locale"]);return h(c({},y),{locale:b(P)[0]})}).filter(({routes:f})=>!f||(f||[]).some(pe(t))).filter(({key:f,locale:v})=>v===n&&(!$||!(this.loadedKeys[n]||[]).includes(f))||i&&v===g&&(!_||!(this.loadedKeys[g]||[]).includes(f)));if(w.length){this.isLoading.set(!0),d.debug("Fetching translations...");let f=await de(w);this.isLoading.set(!1);let v=Object.keys(f).reduce((y,m)=>h(c({},y),{[m]:Object.keys(f[m])}),{}),P=w.filter(({key:y,locale:m})=>(v[m]||[]).some(L=>`${L}`.startsWith(y))).reduce((y,{key:m,locale:L})=>h(c({},y),{[L]:[...y[L]||[],m]}),{});return[f,P]}return[]},this.addTranslations=(e,t)=>{if(!e)return;d.debug("Adding translations...");let a=Object.keys(e||{});this.privateTranslations.update(l=>a.reduce((o,i)=>h(c({},o),{[i]:c(c({},o[i]||{}),F(e[i]))}),l)),a.forEach(l=>{let o=Object.keys(e[l]).map(i=>`${i}`.split(".")[0]);t&&(o=t[l]),this.loadedKeys[l]=Array.from(new Set([...this.loadedKeys[l]||[],...o||[]]))})},this.loader=async([e,t])=>{let a=this.getLocale(e);d.debug(`Adding loader promise for '${a}' locale and '${t}' route.`);let l=(async()=>{let o=await this.getTranslationProps(a,t);o.length&&this.addTranslations(...o)})();this.promises.add({locale:a,route:t,promise:l}),l.then(()=>{a&&this.locale.get()!==a&&this.locale.forceSet(a)})},this.loadTranslations=(e,t=p(this.currentRoute)||"")=>{let a=this.getLocale(e);if(a)return this.setRoute(t),this.setLocale(a),this.loading.toPromise(a,t)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),d.debug("Loader promises have been purged."))}),r&&this.loadConfig(r)}async configLoader(r){if(!r)return d.error("No config provided!");let e=r,{initLocale:t,fallbackLocale:a,translations:l,log:o}=e,i=T(e,["initLocale","fallbackLocale","translations","log"]);o&&ue(Q(o)),[t]=b(t),[a]=b(a),d.debug("Setting config."),this.config.set(c({initLocale:t,fallbackLocale:a,translations:l},i)),l&&this.addTranslations(l),await this.loadTranslations(t)}},U=Object.defineProperty,ge=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,O=(r,e)=>{for(var t in e||(e={}))X.call(e,t)&&q(r,t,e[t]);if(R)for(var t of R(e))Y.call(e,t)&&q(r,t,e[t]);return r},Z=(r,e)=>ge(r,ve(e)),E=(r,e)=>{var t={};for(var a in r)X.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&R)for(var a of R(r))e.indexOf(a)<0&&Y.call(r,a)&&(t[a]=r[a]);return t},ye=(r,e)=>{for(var t in e)U(r,t,{get:e[t],enumerable:!0})},ee={};ye(ee,{ago:()=>_e,date:()=>$e,eq:()=>K,gt:()=>ae,gte:()=>ke,lt:()=>te,lte:()=>be,ne:()=>me,number:()=>Oe});var N=(r,e)=>{let{modifierDefaults:t}=e||{},{[r]:a}=t||{};return a||{}},K=({value:r,options:e=[],defaultValue:t=""})=>(e.find(({key:a})=>`${a}`.toLowerCase()===`${r}`.toLowerCase())||{}).value||t,me=({value:r,options:e=[],defaultValue:t=""})=>(e.find(({key:a})=>`${a}`.toLowerCase()!==`${r}`.toLowerCase())||{}).value||t,te=({value:r,options:e=[],defaultValue:t=""})=>(e.sort((a,l)=>+a.key-+l.key).find(({key:a})=>+r<+a)||{}).value||t,ae=({value:r,options:e=[],defaultValue:t=""})=>(e.sort((a,l)=>+l.key-+a.key).find(({key:a})=>+r>+a)||{}).value||t,be=({value:r,options:e=[],defaultValue:t=""})=>K({value:r,options:e,defaultValue:te({value:r,options:e,defaultValue:t})}),ke=({value:r,options:e=[],defaultValue:t=""})=>K({value:r,options:e,defaultValue:ae({value:r,options:e,defaultValue:t})}),Oe=({value:r,props:e,defaultValue:t="",locale:a="",parserOptions:l})=>{if(!a)return"";let o=N("number",l),{maximumFractionDigits:i}=o,s=E(o,["maximumFractionDigits"]),u=(e==null?void 0:e.number)||{},{maximumFractionDigits:n=i||2}=u,g=E(u,["maximumFractionDigits"]);return new Intl.NumberFormat(a,O(Z(O({},s),{maximumFractionDigits:n}),g)).format(+r||+t)},$e=({value:r,props:e,defaultValue:t="",locale:a="",parserOptions:l})=>{if(!a)return"";let o=E(N("date",l),[]),i=E((e==null?void 0:e.date)||{},[]);return new Intl.DateTimeFormat(a,O(O({},o),i)).format(+r||+t)},S=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],re=(r="",e="")=>new RegExp(`^${r}s?$`).test(e),we=r=>S.indexOf(S.find(({key:e})=>re(e,r))),Le=(r,e)=>S.reduce(([t,a],{key:l,multiplier:o},i)=>{if(re(a,e))return[t,a];if(!a||i===we(a)+1){let s=Math.round(t/o);if(!a||Math.abs(s)>=1||e!=="auto")return[s,l]}return[t,a]},[r,""]),_e=({value:r,defaultValue:e="",locale:t="",props:a,parserOptions:l})=>{if(!t)return"";let o=N("ago",l),{format:i,numeric:s}=o,u=E(o,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:g=i||"auto",numeric:$=s||"auto"}=n,_=E(n,["format","numeric"]),w=+r||+e,f=Le(w,g);return new Intl.RelativeTimeFormat(t,O(Z(O({},u),{numeric:$}),_)).format(...f)},Pe=r=>typeof r=="string"&&/{{(?:(?!{{|}}).)+}}/.test(r),C=r=>typeof r=="string"?r.replace(/\\(?=:|;|{|})/g,""):r,je=({value:r,props:e,payload:t,parserOptions:a,locale:l})=>`${r}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,o=>{let i=C(`${o.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=t==null?void 0:t[i],[,u=""]=o.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];u=u||(t==null?void 0:t.default)||"";let[,n=""]=o.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return u;let g=!!n,{customModifiers:$}=a||{},_=O(O({},ee),$||{});n=Object.keys(_).includes(n)?n:"eq";let w=_[n],f=(o.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((v,P,y)=>{if(y>0){let m=C(`${P.match(/(?:(?:\\:)|[^:])+/)}`.trim()),L=`${P.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(m&&m!=="default"&&L)return[...v,{key:m,value:L}]}return v},[]);return!g&&!f.length?s:w({value:s,options:f,props:e,defaultValue:u,locale:l,parserOptions:a})}),le=({value:r,props:e,payload:t,parserOptions:a,locale:l})=>{if(Pe(r)){let o=je({value:r,payload:t,props:e,parserOptions:a,locale:l});return le({value:o,payload:t,props:e,parserOptions:a,locale:l})}else return C(r)},Ve=r=>({parse:(e,[t,a],l,o)=>((t==null?void 0:t.default)&&e===void 0&&(e=`${t.default}`),e===void 0&&(e=`${o}`),le({value:e,payload:t,props:a,parserOptions:r,locale:l}))}),Te=Ve,Ee=Object.defineProperty,De=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,B=(r,e,t)=>e in r?Ee(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,xe=(r,e)=>{for(var t in e||(e={}))oe.call(e,t)&&B(r,t,e[t]);if(x)for(var t of x(e))ie.call(e,t)&&B(r,t,e[t]);return r},Ae=(r,e)=>De(r,Re(e)),Ie=(r,e)=>{var t={};for(var a in r)oe.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&x)for(var a of x(r))e.indexOf(a)<0&&ie.call(r,a)&&(t[a]=r[a]);return t},W=r=>{var e=r,{parserOptions:t={}}=e,a=Ie(e,["parserOptions"]);return Ae(xe({},a),{parser:Te(t)})},Se=class extends he{constructor(r){super(r&&W(r)),this.loadConfig=e=>super.configLoader(W(e))}},Ce=Se;const Fe="English",Ne="polski",Ke="Deutsch";var I={en:Fe,pl:Ne,de:Ke};const Me={translations:{en:{lang:I},pl:{lang:I},de:{lang:I}},loaders:[{locale:"en",key:"index",routes:["/"],loader:async()=>(await k(()=>import("./index-1510a2c6.js"),[])).default},{locale:"pl",key:"index",routes:["/"],loader:async()=>(await k(()=>import("./index-6d8e59bc.js"),[])).default},{locale:"de",key:"index",routes:["/"],loader:async()=>(await k(()=>import("./index-69a07ba4.js"),[])).default},{locale:"en",key:"host",routes:["/host","/player"],loader:async()=>(await k(()=>import("./host-274907c5.js"),[])).default},{locale:"pl",key:"host",routes:["/host","/player"],loader:async()=>(await k(()=>import("./host-59079c7c.js"),[])).default},{locale:"de",key:"host",routes:["/host","/player"],loader:async()=>(await k(()=>import("./host-7d9d298e.js"),[])).default},{locale:"en",key:"join",routes:["/join"],loader:async()=>(await k(()=>import("./join-d1e9c59e.js"),[])).default},{locale:"pl",key:"join",routes:["/join"],loader:async()=>(await k(()=>import("./join-1d3d3e5e.js"),[])).default},{locale:"de",key:"join",routes:["/join"],loader:async()=>(await k(()=>import("./join-230e5815.js"),[])).default}]},{t:Be,loading:We,locales:Ge,locale:Je,loadTranslations:Qe}=new Ce(Me);export{Qe as l,Be as t};