"use strict";(self.webpackChunkjupyterlab_datawidgets=self.webpackChunkjupyterlab_datawidgets||[]).push([[824],{558:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.DataModel=void 0;const a=t(0),n=t(788);class i extends a.WidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_module:i.model_module,_model_module_version:i.model_module_version,_view_name:i.view_name,_view_module:i.view_module,_view_module_version:i.view_module_version})}}r.DataModel=i,i.serializers=Object.assign({},a.WidgetModel.serializers),i.model_module="jupyter-datawidgets",i.model_module_version=n.version,i.view_name=null,i.view_module=null,i.view_module_version=""},824:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.DataImageView=r.DataImageModel=r.NDArrayBaseModel=r.NDArrayModel=void 0;var a=t(153);Object.defineProperty(r,"NDArrayModel",{enumerable:!0,get:function(){return a.NDArrayModel}}),Object.defineProperty(r,"NDArrayBaseModel",{enumerable:!0,get:function(){return a.NDArrayBaseModel}});var n=t(779);Object.defineProperty(r,"DataImageModel",{enumerable:!0,get:function(){return n.DataImageModel}}),Object.defineProperty(r,"DataImageView",{enumerable:!0,get:function(){return n.DataImageView}});var i=t(788);Object.defineProperty(r,"version",{enumerable:!0,get:function(){return i.version}})},779:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.DataImageView=r.DataImageModel=void 0;const a=t(0),n=t(953),i=t(788),o=t(887);class s extends a.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:s.model_module,_model_module_version:s.model_module_version,_model_module:s.model_module,_view_name:s.view_name,_view_module:s.view_module,_view_module_version:s.view_module_version,data:o([])})}}r.DataImageModel=s,s.serializers=Object.assign(Object.assign({},a.DOMWidgetModel.serializers),{data:n.data_union_serialization}),s.model_name="DataImageModel",s.model_module="jupyter-datawidgets",s.model_module_version=i.version,s.view_name="DataImageView",s.view_module="jupyter-datawidgets",s.view_module_version=i.version;class l extends a.DOMWidgetView{constructor(){super(...arguments),this.canvas=null}initialize(e){super.initialize(e),(0,n.listenToUnion)(this.model,"data",this.update.bind(this),!0)}render(){super.render(),this.pWidget.addClass("jupyter-widgets"),this.pWidget.addClass("widget-image"),this.update()}update(){let e,r=(0,n.getArray)(this.model.get("data"));if(null===r||0===r.data.length)e="",this.el.setAttribute("width","0"),this.el.setAttribute("height","0");else{if(3!==r.shape.length||4!==r.shape[2])throw new Error(`DataImage data has invalid shape: ${JSON.stringify(r.shape)}`);null===this.canvas&&(this.canvas=document.createElement("canvas")),this.el.setAttribute("width",`${r.shape[0]}`),this.el.setAttribute("height",`${r.shape[1]}`),this.canvas.setAttribute("width",`${r.shape[0]}`),this.canvas.setAttribute("height",`${r.shape[1]}`);const t=this.canvas.getContext("2d"),a=new ImageData(new Uint8ClampedArray(r.data),r.shape[0],r.shape[1]);t.putImageData(a,0,0),e=this.canvas.toDataURL()}return this.el.src=e,super.update()}remove(){null!==this.canvas&&(this.canvas=null),super.remove()}get tagName(){return"img"}}r.DataImageView=l},153:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.NDArrayModel=r.NDArrayBaseModel=void 0;const a=t(558),n=t(953),i=t(887);class o extends a.DataModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{array:i([]),compression_level:0})}getNDArray(e="array"){return this.get(e)}}r.NDArrayBaseModel=o,o.serializers=Object.assign(Object.assign({},a.DataModel.serializers),{array:n.compressed_array_serialization});class s extends o{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:s.model_name})}canWriteBack(e="array"){return"array"===e}setNDArray(e,r="array",t){this.set(r,e,t)}}r.NDArrayModel=s,s.serializers=Object.assign({},o.serializers),s.model_name="NDArrayModel"},788:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.version=void 0,r.version=t(947).version},534:(e,r)=>{function t(e){return e&&"function"==typeof e.getNDArray}function a(e){return e&&"function"==typeof e.setNDArray}Object.defineProperty(r,"__esModule",{value:!0}),r.setArray=r.getArray=r.isDataWriteBack=r.isDataSource=void 0,r.isDataSource=t,r.isDataWriteBack=a,r.getArray=function(e,r){return t(e)?e.getNDArray(r):e},r.setArray=function(e,r,t,n){const i=e.get(r);a(i)&&i.canWriteBack()?i.setNDArray(t,void 0,n):e.set(r,t,n)}},424:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.decompress=r.compress=void 0;const a=t(845);r.compress=function(e,r){return a.deflate(new Uint8Array(e),{level:r})},r.decompress=function(e){return a.inflate(new Uint8Array(e)).buffer}},953:function(e,r,t){var a=this&&this.__createBinding||(Object.create?function(e,r,t,a){void 0===a&&(a=t);var n=Object.getOwnPropertyDescriptor(r,t);n&&!("get"in n?!r.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,a,n)}:function(e,r,t,a){void 0===a&&(a=t),e[a]=r[t]}),n=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||a(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.version=void 0,n(t(179),r),n(t(534),r),n(t(115),r),r.version=t(675).version},179:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.fixed_shape_serialization=r.simplearray_serialization=r.simpleToJSON=r.JSONToSimple=r.typedarray_serialization=r.typedArrayToJSON=r.JSONToTypedArray=r.typedArrayToType=r.compressed_array_serialization=r.arrayToCompressedJSON=r.compressedJSONToArray=r.typesToArray=r.array_serialization=r.arrayToJSON=r.JSONToArray=r.ensureSerializableDtype=void 0;const a=t(374),n=t(424),i=t(887);function o(e){if("array"===e||"buffer"===e||"generic"===e||"bigint64"===e||"biguint64"===e)throw new Error(`Cannot serialize ndarray with dtype: ${e}.`);return"uint8_clamped"===e&&(e="uint8"),e}function s(e,t){return null===e?null:i(new r.typesToArray[e.dtype](e.buffer.buffer),e.shape)}function l(e,r){if(null===e)return null;let t=o(e.dtype);return{shape:e.shape,dtype:t,buffer:e.data}}function u(e,t){if(null===e)return null;let a;return a=void 0!==e.compressed_buffer?(0,n.decompress)(e.compressed_buffer.buffer):e.buffer.buffer,i(new r.typesToArray[e.dtype](a),e.shape)}function d(e,r){if(null===e)return null;let t=o(e.dtype);const a=r?r.get("compression_level"):0;if(void 0!==a&&a>0){const r=(0,n.compress)(e.data.buffer,a);return{shape:e.shape,dtype:t,compressed_buffer:r}}return{shape:e.shape,dtype:t,buffer:e.data}}function y(e){if(e instanceof Int8Array)return"int8";if(e instanceof Int16Array)return"int16";if(e instanceof Int32Array)return"int32";if(e instanceof Uint8Array)return"uint8";if(e instanceof Uint8ClampedArray)return"uint8";if(e instanceof Uint16Array)return"uint16";if(e instanceof Uint32Array)return"uint32";if(e instanceof Float32Array)return"float32";if(e instanceof Float64Array)return"float64";throw new Error(`Unknown TypedArray type: ${e}`)}function f(e,t){return null===e?null:new r.typesToArray[e.dtype](e.buffer.buffer)}function c(e,r){return null===e?null:{shape:[e.length],dtype:y(e),buffer:e}}function p(e,t){return null===e?null:{array:new r.typesToArray[e.dtype](e.buffer.buffer),shape:e.shape}}function _(e,r){return null===e?null:{shape:e.shape,dtype:y(e.array),buffer:e.array}}r.ensureSerializableDtype=o,r.JSONToArray=s,r.arrayToJSON=l,r.array_serialization={deserialize:s,serialize:l},r.typesToArray={int8:Int8Array,int16:Int16Array,int32:Int32Array,uint8:Uint8Array,uint8_clamped:Uint8ClampedArray,uint16:Uint16Array,uint32:Uint32Array,float32:Float32Array,float64:Float64Array},r.compressedJSONToArray=u,r.arrayToCompressedJSON=d,r.compressed_array_serialization={deserialize:u,serialize:d},r.typedArrayToType=y,r.JSONToTypedArray=f,r.typedArrayToJSON=c,r.typedarray_serialization={deserialize:f,serialize:c},r.JSONToSimple=p,r.simpleToJSON=_,r.simplearray_serialization={deserialize:p,serialize:_},r.fixed_shape_serialization=function(e){let t=1;for(let r of e)t*=r;return{deserialize:function(t,n){if(null===t)return null;if(!(0,a.arraysEqual)(t.shape,e))throw new Error(`Incoming data unexpected shape: ${t.shape}, expected ${e}`);return new r.typesToArray[t.dtype](t.buffer.buffer)},serialize:function(r,a){if(null===r)return null;if(r.length!==t)throw new Error(`Data has wrong size for fixed shape serialization! Expected ${t} elements, got ${r.length}.`);return{shape:e,dtype:y(r),buffer:r}}}}},115:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.data_union_simple_serialization=r.JSONToSimpleUnion=r.data_union_typedarray_serialization=r.JSONToUnionTypedArray=r.data_union_serialization=r.data_union_array_serialization=r.listenToUnion=r.unionToJSON=r.JSONToUnionArray=r.JSONToUnion=void 0;const a=t(0),n=t(179),i=t(534);async function o(e,r){return"string"==typeof e?(0,a.unpack_models)(e,r):Promise.resolve((0,n.JSONToArray)(e,r))}async function s(e,r){return(0,i.getArray)(await o(e,r))}function l(e,r){return e instanceof a.WidgetModel?e.toJSON(void 0):(0,n.arrayToJSON)(e,r)}function u(e,r){return"string"==typeof e?(0,a.unpack_models)(e,r).then((e=>{const r=e.getNDArray();return null===r?r:r.data})):Promise.resolve((0,n.JSONToTypedArray)(e,r))}function d(e,r){return"string"==typeof e?(0,a.unpack_models)(e,r).then((e=>{const r=e.getNDArray();return null===r?null:{array:r.data,shape:r.shape}})):Promise.resolve((0,n.JSONToSimple)(e,r))}r.JSONToUnion=o,r.JSONToUnionArray=s,r.unionToJSON=l,r.listenToUnion=function(e,r,t,n){function i(r){r instanceof a.WidgetModel&&e.listenTo(r,"change",t)}function o(o,s,l){const u=e.previous(r)||[],d=s||[];u instanceof a.WidgetModel?e.stopListening(u):!n||d instanceof a.WidgetModel||t(o,l),n&&u instanceof a.WidgetModel!=d instanceof a.WidgetModel&&t(o,l),i(d)}return i(e.get(r)),e.on("change:"+r,o),function(){const t=e.get(r);t instanceof a.WidgetModel&&e.stopListening(t),e.off("change:"+r,o)}},r.data_union_array_serialization={deserialize:s,serialize:l},r.data_union_serialization={deserialize:o,serialize:l},r.JSONToUnionTypedArray=u,r.data_union_typedarray_serialization={deserialize:u,serialize:n.typedArrayToJSON},r.JSONToSimpleUnion=d,r.data_union_simple_serialization={deserialize:d,serialize:n.simpleToJSON}},374:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.arraysEqual=void 0,r.arraysEqual=function(e,r){if(e===r)return!0;if(null==e||null==r)return!1;if(e.length!==r.length)return!1;for(let t=0;t<e.length;++t)if(e[t]!==r[t])return!1;return!0}},947:e=>{e.exports={version:"5.5.1"}},675:e=>{e.exports={version:"3.0.0"}}}]);