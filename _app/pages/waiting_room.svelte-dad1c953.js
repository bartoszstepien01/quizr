import{S as T,i as W,s as $,e as v,t as f,k as j,c as y,a as E,h as m,d as s,m as k,b as q,g as c,Q as x,j as A,E as Q,T as B}from"../chunks/index-82ea7ce8.js";import{c as D}from"../chunks/stores-459f9708.js";import"../chunks/index-d0f4ef2b.js";function F(h){let a,p,r,l,i,_,n,P,w,o,z,u=h[0]?"":" not yet",b,S;return{c(){a=v("h1"),p=f("quizr"),r=j(),l=v("p"),i=f("waiting room"),_=j(),n=v("p"),P=f("wait for the game to start"),w=j(),o=v("p"),z=f("the game has"),b=f(u),S=f(" started"),this.h()},l(t){a=y(t,"H1",{class:!0});var e=E(a);p=m(e,"quizr"),e.forEach(s),r=k(t),l=y(t,"P",{class:!0});var C=E(l);i=m(C,"waiting room"),C.forEach(s),_=k(t),n=y(t,"P",{class:!0});var H=E(n);P=m(H,"wait for the game to start"),H.forEach(s),w=k(t),o=y(t,"P",{class:!0});var d=E(o);z=m(d,"the game has"),b=m(d,u),S=m(d," started"),d.forEach(s),this.h()},h(){q(a,"class","text-white font-bold text-4xl text-center select-none"),q(l,"class","text-white text-xl text-center select-none mt-1"),q(n,"class","text-white text-base text-center select-none mt-8"),q(o,"class","text-white text-base text-center select-none")},m(t,e){c(t,a,e),x(a,p),c(t,r,e),c(t,l,e),x(l,i),c(t,_,e),c(t,n,e),x(n,P),c(t,w,e),c(t,o,e),x(o,z),x(o,b),x(o,S)},p(t,[e]){e&1&&u!==(u=t[0]?"":" not yet")&&A(b,u)},i:Q,o:Q,d(t){t&&s(a),t&&s(r),t&&s(l),t&&s(_),t&&s(n),t&&s(w),t&&s(o)}}}function G(h,a,p){let r;B(h,D,i=>p(1,r=i));let l=!1;return r[0].on("data",i=>{i.type==="start"&&p(0,l=!0)}),[l]}class L extends T{constructor(a){super(),W(this,a,G,F,$,{})}}export{L as default};
