"use strict";(self.webpackChunkjupyter_vue=self.webpackChunkjupyter_vue||[]).push([[848,216],{3848:(e,t,n)=>{n.r(t),n.d(t,{ForceLoadModel:()=>le,HtmlModel:()=>oe,TemplateModel:()=>S,Vue:()=>s,VueComponentModel:()=>pe,VueModel:()=>d,VueTemplateModel:()=>m,VueView:()=>ee,createViewContext:()=>Z,version:()=>fe,vueRender:()=>X});var r=n(4009),o=n(4181),i=n.n(o);(0,r.addCompiler)(i());const s=i();var c=n(9553);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class d extends c.DOMWidgetModel{defaults(){return a({},super.defaults(),{},{_jupyter_vue:null,_model_name:"VueModel",_view_name:"VueView",_view_module:"jupyter-vue",_model_module:"jupyter-vue",_view_module_version:"^0.0.3",_model_module_version:"^0.0.3",_metadata:null,children:void 0,slot:null,_events:null,v_model:"!!disabled!!",style_:null,class_:null,attributes:null,v_slots:null,v_on:null})}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}d.serializers=a({},c.DOMWidgetModel.serializers,{children:{deserialize:c.unpack_models},v_slots:{deserialize:c.unpack_models}});class m extends c.DOMWidgetModel{defaults(){return f({},super.defaults(),{},{_jupyter_vue:null,_model_name:"VueTemplateModel",_view_name:"VueView",_view_module:"jupyter-vue",_model_module:"jupyter-vue",_view_module_version:"^0.0.3",_model_module_version:"^0.0.3",template:null,css:null,methods:null,data:null,events:null,_component_instances:null})}}m.serializers=f({},c.DOMWidgetModel.serializers,{template:{deserialize:c.unpack_models},components:{deserialize:c.unpack_models},_component_instances:{deserialize:c.unpack_models}}),n(6992),n(2023),n(5306),n(3123),n(3157),n(3948),n(9575),n(7852);var b=n(1171),g=n.n(b),y=n(6054),v=n.n(y),O=(n(8674),n(9714),n(4723),0);function _(e,t){this.component=e,this.elt=t}function w(e,t){this.component=e,this.elt=t,this.module={exports:{}}}function j(e,t){this.component=e,this.elt=t}function P(e){this.name=e,this.template=null,this.script=null,this.styles=[],this._scopeId=""}function C(e){return e}function E(e){var t=e.match(/(.*?)([^/]+?)\/?(\.vue)?(\?.*|#.*|$)/);return{name:t[2],url:t[1]+t[2]+(void 0===t[3]?"/index.vue":t[3])+t[4]}}function D(e,t){return"./"===t.substr(0,2)||"../"===t.substr(0,3)?e+t:t}function M(e){return M.load(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}_.prototype={withBase:function(e){var t;if(this.component.baseURI){(t=document.createElement("base")).href=this.component.baseURI;var n=this.component.getHead();n.insertBefore(t,n.firstChild)}e.call(this),t&&this.component.getHead().removeChild(t)},scopeStyles:function(e,t){function n(){for(var n=e.sheet,r=n.cssRules,o=0;o<r.length;++o){var i=r[o];if(1===i.type){var s=[];i.selectorText.split(/\s*,\s*/).forEach((function(e){s.push(t+" "+e);var n=e.match(/([^ :]+)(.+)?/);s.push(n[1]+t+(n[2]||""))}));var c=s.join(",")+i.cssText.substr(i.selectorText.length);n.deleteRule(o),n.insertRule(c,o)}}}try{n()}catch(t){if(t instanceof DOMException&&t.code===DOMException.INVALID_ACCESS_ERR)return e.sheet.disabled=!0,void e.addEventListener("load",(function t(){e.removeEventListener("load",t),setTimeout((function(){n(),e.sheet.disabled=!1}))}));throw t}},compile:function(){var e=null!==this.template,t=this.elt.hasAttribute("scoped");if(t){if(!e)return;this.elt.removeAttribute("scoped")}return this.withBase((function(){this.component.getHead().appendChild(this.elt)})),t&&this.scopeStyles(this.elt,"["+this.component.getScopeId()+"]"),Promise.resolve()},getContent:function(){return this.elt.textContent},setContent:function(e){this.withBase((function(){this.elt.textContent=e}))}},w.prototype={getContent:function(){return this.elt.textContent},setContent:function(e){this.elt.textContent=e},compile:function(e){var t=function(e){return M.require(D(this.component.baseURI,e))}.bind(this),n=function(e,t){return M(D(this.component.baseURI,e))}.bind(this);try{Function("exports","require","httpVueLoader","module",this.getContent()).call(this.module.exports,this.module.exports,t,n,this.module)}catch(e){if(!("lineNumber"in e))return Promise.reject(e);var r=responseText.replace(/\r?\n/g,"\n"),o=r.substr(0,r.indexOf(script)).split("\n").length+e.lineNumber-1;throw new e.constructor(e.message,url,o)}return Promise.resolve(this.module.exports).then(M.scriptExportsHandler.bind(this)).then(function(e){this.module.exports=e}.bind(this))}},j.prototype={getContent:function(){return this.elt.innerHTML},setContent:function(e){this.elt.innerHTML=e},getRootElt:function(){var e=this.elt.content||this.elt;if("firstElementChild"in e)return e.firstElementChild;for(e=e.firstChild;null!==e;e=e.nextSibling)if(e.nodeType===Node.ELEMENT_NODE)return e;return null},compile:function(){return Promise.resolve()}},P.prototype={getHead:function(){return document.head||document.getElementsByTagName("head")[0]},getScopeId:function(){return""===this._scopeId&&(this._scopeId="data-s-"+(O++).toString(36),this.template.getRootElt().setAttribute(this._scopeId,"")),this._scopeId},load:function(e){return M.httpRequest(e).then(function(e){var t=document.implementation.createHTMLDocument("");t.body.innerHTML=(this.baseURI?'<base href="'+this.baseURI+'">':"")+e;for(var n=t.body.firstChild;n;n=n.nextSibling)switch(n.nodeName){case"TEMPLATE":this.template=new j(this,n);break;case"SCRIPT":this.script=new w(this,n);break;case"STYLE":this.styles.push(new _(this,n))}return this}.bind(this))},_normalizeSection:function(e){return(null!==e&&e.elt.hasAttribute("src")?M.httpRequest(e.elt.getAttribute("src")).then((function(t){return e.elt.removeAttribute("src"),t})):Promise.resolve(null)).then(function(t){if(null!==e&&e.elt.hasAttribute("lang")){var n=e.elt.getAttribute("lang");return e.elt.removeAttribute("lang"),M.langProcessor[n.toLowerCase()].call(this,null===t?e.getContent():t)}return t}.bind(this)).then((function(t){null!==t&&e.setContent(t)}))},normalize:function(){return Promise.all(Array.prototype.concat(this._normalizeSection(this.template),this._normalizeSection(this.script),this.styles.map(this._normalizeSection))).then(function(){return this}.bind(this))},compile:function(){return Promise.all(Array.prototype.concat(this.template&&this.template.compile(),this.script&&this.script.compile(),this.styles.map((function(e){return e.compile()})))).then(function(){return this}.bind(this))}},M.load=function(e,t){return function(){return new P(t).load(e).then((function(e){return e.normalize()})).then((function(e){return e.compile()})).then((function(e){var t=null!==e.script?e.script.module.exports:{};return null!==e.template&&(t.template=e.template.getContent()),void 0===t.name&&void 0!==e.name&&(t.name=e.name),t._baseURI=e.baseURI,t}))}},M.register=function(e,t){var n=E(t);e.component(n.name,M.load(n.url))},M.install=function(e){e.mixin({beforeCreate:function(){var t=this.$options.components;for(var n in t)if("string"==typeof t[n]&&"url:"===t[n].substr(0,4)){var r=E(t[n].substr(4)),o="_baseURI"in this.$options?D(this.$options._baseURI,r.url):r.url;isNaN(n)?t[n]=M.load(o,n):t[n]=e.component(r.name,M.load(o,r.name))}}})},M.require=function(e){return window[e]},M.httpRequest=function(e){return Promise.resolve(e)},M.langProcessor={html:C,js:C,css:C},M.scriptExportsHandler=C;class S extends c.WidgetModel{defaults(){return x({},super.defaults(),{},{_model_name:"TemplateModel"})}}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){if(e instanceof d)return{render:n=>X(n,e,t,{})};if(!(e instanceof m))return $(e,t);const n=e.get("template")instanceof S?e.get("template"):e,o=n.get("template"),i=function(e){const t=(0,r.parseComponent)(e,{pad:"line"}),n={};if(t.template&&(n.TEMPLATE=t.template.content),t.script){const{content:e}=t.script,r=e.substring(e.indexOf("{"),e.length).replace("\n"," ");n.SCRIPT=Function("return ".concat(r))()}if(t.styles&&t.styles.length>0){const{content:e}=t.styles[0],{id:r}=t.styles[0].attrs;n.STYLE={content:e,id:r}}return n}(o),s=e.get("css")||i.STYLE&&i.STYLE.content,l=i.STYLE&&i.STYLE.id;if(s)if(l){const e="ipyvue-".concat(l);let t=document.getElementById(e);t||(t=document.createElement("style"),t.id=e,document.head.appendChild(t)),t.innerHTML!==s&&(t.innerHTML=s)}else{const n=document.createElement("style");n.id=e.cid,n.innerHTML=s,document.head.appendChild(n),t.once("remove",(()=>{document.head.removeChild(n)}))}const a=e.get("methods")?Function("return ".concat(e.get("methods").replace("\n"," ")))():{},u=e.get("data")?Function("return ".concat(e.get("data").replace("\n"," ")))():{},p=Object.entries(e.get("components")||{}),f=p.filter((([,e])=>e instanceof c.WidgetModel)),h=p.filter((([,e])=>!(e instanceof c.WidgetModel||"string"==typeof e))),b=p.filter((([,e])=>"string"==typeof e));function g(e,t){i.SCRIPT&&i.SCRIPT[e]&&i.SCRIPT[e].bind(t)()}return{inject:["viewCtx"],data:()=>R({},u,{},function(e){return e.keys().filter((e=>!e.startsWith("_")&&!["events","template","components","layout","css","data","methods"].includes(e))).reduce(((t,n)=>(t[n]=v().cloneDeep(e.get(n)),t)),{})}(e)),beforeCreate(){g("beforeCreate",this)},created(){this.__onTemplateChange=()=>{this.$root.$forceUpdate()},n.on("change:template",this.__onTemplateChange),function(e,t){e.keys().filter((e=>!e.startsWith("_")&&!["v_model","components","layout","css","data","methods"].includes(e))).forEach((n=>e.on("change:".concat(n),(()=>{v().isEqual(e.get(n),t[n])||(t[n]=v().cloneDeep(e.get(n)))})))),e.on("msg:custom",((e,n)=>{if(!e.method)return;const r="jupyter_"+e.method;if(!t[r])return;let o=e.args;null==o&&(o=[]),t[r](...o,n)}))}(e,this),g("created",this)},watch:A(e,t,i.SCRIPT&&i.SCRIPT.watch),methods:R({},i.SCRIPT&&i.SCRIPT.methods,{},a,{},V(e,t)),components:R({},W(f,t),{},H(h,e,t),{},(y=b,y.reduce(((e,[t,n])=>R({},e,{[t]:M(n)})),{}))),computed:R({},i.SCRIPT&&i.SCRIPT.computed,{},Y(e)),template:i.TEMPLATE||o,beforeMount(){g("beforeMount",this)},mounted(){g("mounted",this)},beforeUpdate(){g("beforeUpdate",this)},updated(){g("updated",this)},beforeDestroy(){n.off("change:template",this.__onTemplateChange),g("beforeDestroy",this)},destroyed(){g("destroyed",this)}};var y}function A(e,t,n){return e.keys().filter((e=>!e.startsWith("_")&&!["events","template","components","layout","css","data","methods"].includes(e))).reduce(((r,o)=>R({},r,{[o]:{handler(r){n&&n[o]&&n[o].bind(this)(r),v().isEqual(r,e.get(o))||(e.set(o,void 0===r?null:v().cloneDeep(r)),e.save_changes(e.callbacks(t)))},deep:!0}})),{})}function V(e,t){return e.get("events").reduce(((n,r)=>(n[r]=(n,o)=>{o&&(o instanceof Array&&o[0]instanceof ArrayBuffer||(console.warn("second argument is not an BufferArray[View] array"),o=void 0)),e.send({event:r,data:K(n)},e.callbacks(t),o)},n)),{})}function W(e,t){return e.reduce(((e,[n,r])=>(e[n]=L(r,t),e)),{})}function H(e,t,n){return e.reduce(((e,[r,o])=>R({},e,{[r]:{props:o.props.filter((e=>"style"!==e)),data:()=>({model:null,id:g()()}),created(){const e=()=>{if(this.model)t.off("change:_component_instances",e);else{const e=t.get("_component_instances").find((e=>e.model_id===this.id));e&&(this.model=e)}};t.on("change:_component_instances",e),t.send({create_widget:o.class,id:this.id,props:this.$options.propsData},t.callbacks(n))},destroyed(){t.send({destroy_widget:this.id},t.callbacks(n))},watch:o.props.reduce(((e,r)=>R({},e,{[r](e){e.objectRef?t.send({update_ref:e,prop:r,id:this.id},t.callbacks(n)):(this.model.set(r,e),this.model.save_changes(this.model.callbacks(n)))}})),{}),render(e){return this.model?X(e,this.model,n,{}):e("div",["temp-content"])}}})),{})}function Y(e){return e.keys().filter((e=>e.endsWith("_ref"))).map((e=>[e,e.substring(0,e.length-4)])).filter((([,t])=>!e.keys().includes(t))).reduce(((e,[t,n])=>R({},e,{[n](){return this[t]}})),{})}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){return{mounted(){t.create_child_view(e).then((e=>c.JupyterPhosphorWidget.attach(e.pWidget,this.$el)))},render:e=>e("div",{style:{height:"100%"}})}}function K(e){if(null==e)return e;let t;switch(e.constructor){case MouseEvent:t=["altKey","ctrlKey","metaKey","shiftKey","offsetX","offsetY","clientX","clientY","pageX","pageY","screenX","screenY","shiftKey","x","y"];break;case WheelEvent:t=["altKey","ctrlKey","metaKey","shiftKey","offsetX","offsetY","clientX","clientY","pageX","pageY","screenX","screenY","shiftKey","x","y","wheelDelta","wheelDeltaX","wheelDeltaY"];break;default:return e}return t.reduce(((t,n)=>(t[n]=e[n],t)),{})}function X(e,t,n,r){if(t instanceof m)return function(e,t,n){return e(L(t,n))}(e,t,n);if(!(t instanceof d))return e($(t,n));const o=t.getVueTag(),i=e({data:()=>({v_model:t.get("v_model")}),created(){!function(e,t){const n=()=>{t.$forceUpdate()};e.keys().filter((e=>"_events"===e||!e.startsWith("_")&&!["v_model"].includes(e))).forEach((t=>e.on("change:".concat(t),n))),e.on("change:v_model",(()=>{e.get("v_model")!==t.v_model&&(t.v_model=e.get("v_model"))}))}(t,this)},render(e){const i=e(o,function(e,t,n,r,o){const i=t.get("attributes")&&Object.keys(t.get("attributes")).filter((e=>e.startsWith("on")));if(i&&i.length>0)throw new Error("No HTML event attributes may be used: ".concat(i));const s=function(e,t,n,r,o){const i=t.get("v_slots");if(i)return i.map((t=>B({key:t.name},!t.variable&&{proxy:!0},{fn:i=>Q(e,Array.isArray(t.children)?t.children:[t.children],n,r,B({},o,{},t.variable&&{[t.variable]:i}))})))}(e,t,n,r,o);return B({on:B({},F(t,r),{},G(t,o))},t.get("style_")&&{style:t.get("style_")},{},t.get("class_")&&{class:t.get("class_")},{},s&&{scopedSlots:n._u(s)},{attrs:B({},q(t),{},t.get("attributes")&&t.get("attributes"))},"!!disabled!!"!==t.get("v_model")&&{model:{value:n.v_model,callback:e=>{t.set("v_model",void 0===e?null:e),t.save_changes(t.callbacks(r))},expression:"v_model"}})}(e,t,this,n,r),Q(e,t.get("children"),this,n,r));var s;return s=this,Object.keys(s.childCache).filter((e=>!s.childIds.includes(e))).forEach((e=>delete s.childCache[e])),s.childIds=[],i}},B({},t.get("slot")&&{slot:t.get("slot")}));return i.componentOptions.Ctor.options.name=o,i}function q(e){return e.keys().filter((t=>null!==e.get(t)&&!t.startsWith("_")&&!["attributes","v_slots","v_on","layout","children","slot","v_model","style_","class_"].includes(t))).reduce(((t,n)=>(t[n.replace(/_$/g,"").replace(/_/g,"-")]=e.get(n),t)),{})}function F(e,t){return(e.get("_events")||[]).reduce(((n,r)=>function(e,t,n){const{on:r}=s.compile("<dummy @".concat(e,'="fn"></dummy>')).render.bind({_c:(e,t)=>t,_k:s.prototype._k,fn:n})();return B({},t,{},r)}(r,n,(n=>{e.send({event:r,data:K(n)},e.callbacks(t))}))),{})}function J(e,t){const n=e.split(".");return n.slice(1).reduce(((e,t)=>e[t]),t[n[0]])}function G(e,t){const n=e.get("v_on");return n&&function(e,t){return"string"==typeof e?J(e,t):Object.assign({},...e.map((e=>J(e,t))))}(n,t)}function Q(e,t,n,r,o){return n.childCache||(n.childCache={}),n.childIds||(n.childIds=[]),t.map((t=>{if("string"==typeof t)return t;if(n.childIds.push(t.cid),n.childCache[t.cid])return n.childCache[t.cid];const i=X(e,t,r,o);return n.childCache[t.cid]=i,i}))}function Z(e){return{getModelById:t=>e.model.widget_manager.get_model(t),getView:()=>e}}S.serializers=x({},c.WidgetModel.serializers),i().component("jupyter-widget",{props:["widget"],inject:["viewCtx"],data:()=>({component:null}),created(){this.update()},watch:{widget(){this.update()}},methods:{update(){this.viewCtx.getModelById(this.widget.substring(10)).then((e=>{this.component=L(e,this.viewCtx.getView())}))}},render(e){return this.component?e(this.component):e("div")}});class ee extends c.DOMWidgetView{remove(){return this.vueApp.$destroy(),super.remove()}render(){super.render(),this.displayed.then((()=>{const e=document.createElement("div");this.el.appendChild(e),this.vueApp=new(i())({el:e,provide:{viewCtx:Z(this)},render:e=>X(e,this.model,this,{})})}))}}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class oe extends d{defaults(){return ne({},super.defaults(),{},{_model_name:"HtmlModel",tag:null})}getVueTag(){if(!this.get("tag").toLowerCase().includes("script"))return this.get("tag")}}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}oe.serializers=ne({},d.serializers);class le extends c.DOMWidgetModel{defaults(){return se({},super.defaults(),{},{_model_name:"ForceLoadModel",_model_module:"jupyter-vue",_model_module_version:"^0.0.1"})}}function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}le.serializers=se({},c.DOMWidgetModel.serializers),n(4603);class pe extends c.DOMWidgetModel{defaults(){return ue({},super.defaults(),{},{_model_name:"VueComponentModel",_model_module:"jupyter-vue",_model_module_version:"^0.0.3",name:null,component:null})}constructor(...e){super(...e);const[,{widget_manager:t}]=e,n=this.get("name");i().component(n,M(this.get("component"))),this.on("change:component",(()=>{i().component(n,M(this.get("component"))),(async()=>{const e=await Promise.all(Object.values(t._models)),r=e.filter((e=>e instanceof pe)),o=[];function i(e){return new RegExp("\\<".concat(e,"[ />\n]"),"g")}!function e(t){o.push(t),r.filter((e=>e.get("component").match(i(t)))).forEach((t=>{const n=t.get("name");o.includes(n)||e(n)}))}(n),e.filter((e=>e instanceof S&&o.some((t=>e.get("template").match(i(t)))))).forEach((e=>e.trigger("change:template")))})()}))}}pe.serializers=ue({},c.DOMWidgetModel.serializers);const{version:fe}=n(4147)},4147:e=>{e.exports=JSON.parse('{"name":"jupyter-vue","version":"1.7.0","description":"Jupyter widgets base for Vue libraries","license":"MIT","author":"Mario Buikhuizen, Maarten Breddels","main":"lib/index.js","repository":{"type":"git","url":"https://github.com/mariobuikhuizen/ipyvue.git"},"keywords":["jupyter","widgets","ipython","ipywidgets","jupyterlab-extension"],"files":["src/","lib/","dist/"],"browserslist":">0.8%, not ie 11, not op_mini all, not dead","scripts":{"build:babel":"babel src --out-dir lib --copy-files","watch:babel":"babel src --watch --out-dir lib --copy-files --verbose","build:labextension":"jupyter labextension build .","watch:labextension":"jupyter labextension watch .","build:webpack":"webpack","watch:webpack":"webpack --mode development --watch","watch":"run-p watch:*","clean":"rimraf lib/ dist/","prepare":"run-s build:*","test":"echo \\"Error: no test specified\\" && exit 1"},"devDependencies":{"@babel/cli":"^7.5.0","@babel/core":"^7.4.4","@babel/preset-env":"^7.4.4","@jupyterlab/builder":"^3","ajv":"^6.10.0","css-loader":"^5","eslint":"^5.16.0","eslint-config-airbnb-base":"^13.1.0","eslint-plugin-import":"^2.17.2","eslint-plugin-vue":"^5.2.2","file-loader":"^6","npm-run-all":"^4.1.5","rimraf":"^2.6.3","style-loader":"^0.23.1","webpack":"^5","webpack-cli":"^4"},"dependencies":{"@jupyter-widgets/base":"^1 || ^2 || ^3 || ^4","@mariobuikhuizen/vue-compiler-addon":"^2.6.10-alpha.2","core-js":"^3.0.1","lodash":"^4.17.11","uuid":"^3.4.0","vue":"^2.6.10"},"jupyterlab":{"extension":"lib/labplugin","outputDir":"../ipyvue/labextension","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true}}}}')}}]);