"use strict";(self.webpackChunk_jupyterlite_xeus_python_kernel=self.webpackChunk_jupyterlite_xeus_python_kernel||[]).push([[870],{870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>a,expose:()=>u,proxy:()=>y,proxyMarker:()=>r,releaseProxy:()=>s,transfer:()=>E,transferHandlers:()=>c,windowEndpoint:()=>g,wrap:()=>p});const r=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return u(e,t),[n,[n]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>i(e)&&o in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function n(r){if(!r||!r.data)return;const{id:a,type:s,path:i}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(b);let p;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),n=i.reduce(((e,t)=>e[t]),e);switch(s){case"GET":p=n;break;case"SET":t[i.slice(-1)[0]]=b(r.data.value),p=!0;break;case"APPLY":p=n.apply(t,c);break;case"CONSTRUCT":p=y(new n(...c));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;u(e,n),p=E(t,[t])}break;case"RELEASE":p=void 0;break;default:return}}catch(e){p={value:e,[o]:0}}Promise.resolve(p).catch((e=>({value:e,[o]:0}))).then((e=>{const[r,o]=v(e);t.postMessage(Object.assign(Object.assign({},r),{id:a}),o),"RELEASE"===s&&(t.removeEventListener("message",n),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return m(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function m(e,t=[],n=function(){}){let r=!1;const o=new Proxy(n,{get(n,a){if(d(r),a===s)return()=>w(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{l(e),r=!0}));if("then"===a){if(0===t.length)return{then:()=>o};const n=w(e,{type:"GET",path:t.map((e=>e.toString()))}).then(b);return n.then.bind(n)}return m(e,[...t,a])},set(n,a,s){d(r);const[o,i]=v(s);return w(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:o},i).then(b)},apply(n,s,o){d(r);const i=t[t.length-1];if(i===a)return w(e,{type:"ENDPOINT"}).then(b);if("bind"===i)return m(e,t.slice(0,-1));const[c,u]=f(o);return w(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(b)},construct(n,a){d(r);const[s,o]=f(a);return w(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},o).then(b)}});return o}function f(e){const t=e.map(v);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function E(e,t){return h.set(e,t),e}function y(e){return Object.assign(e,{[r]:!0})}function g(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function v(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},h.get(e)||[]]}function b(e){switch(e.type){case"HANDLER":return c.get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}}}]);