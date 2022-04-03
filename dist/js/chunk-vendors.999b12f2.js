(self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return h},G6:function(){return I},L:function(){return a},LL:function(){return C},Mn:function(){return _},Sg:function(){return d},UG:function(){return m},X3:function(){return W},ZB:function(){return u},ZR:function(){return k},b$:function(){return y},d:function(){return b},eu:function(){return T},hl:function(){return S},jU:function(){return g},m9:function(){return U},ne:function(){return M},pd:function(){return $},r3:function(){return O},ru:function(){return v},tV:function(){return c},uI:function(){return p},vZ:function(){return R},w1:function(){return w},xO:function(){return L},xb:function(){return N},z$:function(){return f},zd:function(){return P}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,l=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==l){const t=c<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&l(n)&&(t[n]=u(t[n],e[n]));return t}function l(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return"object"===typeof indexedDB}function T(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?x(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new k(i,o,n);return a}}function x(t,e){return t.replace(A,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function R(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(D(n)&&D(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function D(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function P(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function $(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=F(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=B),void 0===i.error&&(i.error=B),void 0===i.complete&&(i.complete=B);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function F(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){return new Promise(((n,i)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;i(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}}))}class z{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e){return new q(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new H(this._db.createObjectStore(t,e))}close(){this._db.close()}}class q{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}}))}objectStore(t){return new H(this._transaction.objectStore(t))}}class H{constructor(t){this._store=t}index(t){return new Z(this._store.index(t))}createIndex(t,e,n){return new Z(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return j(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return j(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return j(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return j(t,"Error clearing IndexedDB object store")}}class Z{constructor(t){this._index=t}get(t){const e=this._index.get(t);return j(e,"Error reading from IndexedDB")}}function W(t,e,n){return new Promise(((i,r)=>{try{const s=indexedDB.open(t,e);s.onsuccess=t=>{i(new z(t.target.result))},s.onerror=t=>{var e;r(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`)},s.onupgradeneeded=t=>{n(new z(s.result),t.oldVersion,t.newVersion,new q(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}}))}},1001:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return i}})},9662:function(t,e,n){var i=n(7854),r=n(614),s=n(6330),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a function")}},6077:function(t,e,n){var i=n(7854),r=n(614),s=i.String,o=i.TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},9670:function(t,e,n){var i=n(7854),r=n(111),s=i.String,o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not an object")}},1318:function(t,e,n){var i=n(5656),r=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=i(e),u=s(c),l=r(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4326:function(t,e,n){var i=n(1702),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},648:function(t,e,n){var i=n(7854),r=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=i.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(i=o(e))&&s(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),r=i("".replace),s=function(t){return String(Error(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(s);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=r(t,o,"");return t}},9920:function(t,e,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=r(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];i(t,h)||n&&i(n,h)||c(t,h,u(e,h))}}},8880:function(t,e,n){var i=n(9781),r=n(3070),s=n(9114);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),r=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",r(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(1320),a=n(3505),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var i=n(4374),r=Function.prototype,s=r.bind,o=r.call,a=i&&s.bind(o,o);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),r=n(614),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var i=n(9781),r=n(7293),s=n(317);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7854),r=n(1702),s=n(7293),o=n(4326),a=i.Object,c=r("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var i=n(614),r=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},8340:function(t,e,n){var i=n(111),r=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&r(t,"cause",e.cause)}},9909:function(t,e,n){var i,r,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),I=c(w.has),S=c(w.set);i=function(t,e){if(I(w,t))throw new g(m);return e.facade=t,S(w,t,e),e},r=function(t){return _(w,t)||{}},s=function(t){return I(w,t)}}else{var T=f("state");p[T]=!0,i=function(t,e){if(h(t,T))throw new g(m);return e.facade=t,l(t,T,e),e},r=function(t){return h(t,T)?t[T]:{}},s=function(t){return h(t,T)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:b}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(7854),r=n(5005),s=n(614),o=n(7976),a=n(3307),c=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&o(e.prototype,c(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},133:function(t,e,n){var i=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),r=n(614),s=n(2788),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},3070:function(t,e,n){var i=n(7854),r=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=i.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=r?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var i=h(t,e);i&&i[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:i[f],enumerable:d in n?n[d]:i[d],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(i){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!r(s.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=s(t),u=0,l=[];for(n in i)!r(a,n)&&r(i,n)&&c(l,n);while(e.length>u)r(i,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),r=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(7854),r=n(6916),s=n(614),o=n(111),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&s(n=t.toString)&&!o(i=r(n,t)))return i;if(s(n=t.valueOf)&&!o(i=r(n,t)))return i;if("string"!==e&&s(n=t.toString)&&!o(i=r(n,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},1320:function(t,e,n){var i=n(7854),r=n(614),s=n(2597),o=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),t!==i?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},4488:function(t,e,n){var i=n(7854),r=i.TypeError;t.exports=function(t){if(void 0==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),r=n(9711),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},5465:function(t,e,n){var i=n(7854),r=n(3505),s="__core-js_shared__",o=i[s]||r(s,{});t.exports=o},2309:function(t,e,n){var i=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5656:function(t,e,n){var i=n(8361),r=n(4488);t.exports=function(t){return i(r(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!==i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(7854),r=n(4488),s=i.Object;t.exports=function(t){return s(r(t))}},7593:function(t,e,n){var i=n(7854),r=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=i.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,i=a(t,h);if(i){if(void 0===e&&(e="default"),n=r(i,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var i=n(7593),r=n(2190);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var i=n(7854),r=n(648),s=i.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t,e,n){var i=n(7854),r=i.String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},9711:function(t,e,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),r=n(7293);t.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=r("wks"),l=i.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},9191:function(t,e,n){"use strict";var i=n(5005),r=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),d=n(7741),f=n(2914),p=n(1913);t.exports=function(t,e,n,m){var g=m?2:1,v=t.split("."),y=v[v.length-1],b=i.apply(null,v);if(b){var w=b.prototype;if(!p&&r(w,"cause")&&delete w.cause,!n)return b;var _=i("Error"),I=e((function(t,e){var n=l(m?e:t,void 0),i=m?new b(t):new b;return void 0!==n&&s(i,"message",n),f&&s(i,"stack",d(i.stack,2)),this&&o(w,this)&&u(i,this,I),arguments.length>g&&h(i,arguments[g]),i}));if(I.prototype=w,"Error"!==y&&(a?a(I,_):c(I,_,{name:!0})),c(I,b),!p)try{w.name!==y&&s(w,"name",y),w.constructor=I}catch(S){}return I}}},1703:function(t,e,n){var i=n(2109),r=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=r[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),i({global:!0,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),i({target:a,stat:!0,forced:u},n)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},1902:function(t,e,n){"use strict";n.d(e,{Z:function(){return i.Z}});var i=n(8180),r="firebase",s="9.6.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i.Z.registerVersion(r,s,"app-compat")},4642:function(t,e,n){"use strict";var i=n(8180),r=n(4444),s=n(2238);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var a=n(3333),c=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new r.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function v(t,...e){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t,...e){throw I(t,...e)}function b(t,...e){return I(t,...e)}function w(t,e,n){const i=Object.assign(Object.assign({},p()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function _(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&y(t,"argument-error"),w(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return m.create(t,...e)}function S(t,e,...n){if(!t)throw I(e,...n)}function T(t){const e="INTERNAL ASSERTION FAILED: "+t;throw v(e),new Error(e)}function E(t,e){t||T(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function C(t){E(t instanceof Function,"Expected a class definition");let e=k.get(t);return e?(E(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===N()||"https:"===N()}function N(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function D(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,e){this.shortDelay=t,this.longDelay=e,E(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){E(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function B(t,e,n,i,s={}){return U(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$.fetch()(z(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),e);try{const e=new q(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw H(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(t,a,o);y(t,a)}}catch(s){if(s instanceof r.ZR)throw s;y(t,"network-request-failed")}}async function j(t,e,n,i,r={}){const s=await B(t,e,n,i,r);return"mfaPendingCredential"in s&&y(t,"multi-factor-auth-required",{_serverResponse:s}),s}function z(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?P(t.config,r):`${t.config.apiScheme}://${r}`}class q{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(b(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){return B(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return B(t,"POST","/v1/accounts:update",e)}async function K(t,e){return B(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=Q(i);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:G(Y(s.auth_time)),issuedAtTime:G(Y(s.iat)),expirationTime:G(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(t){return 1e3*Number(t)}function Q(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function J(t){const e=Q(t);return S(e,"internal-error"),S("undefined"!==typeof e.exp,"internal-error"),S("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&et(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function et({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await tt(t,K(n,{idToken:i}));S(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?at(s.providerUserInfo):[],a=ot(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new it(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function st(t){const e=(0,r.m9)(t);await rt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ot(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function at(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t,e){const n=await U(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=z(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){S(t.idToken,"internal-error"),S("undefined"!==typeof t.idToken,"internal-error"),S("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):J(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return S(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await ct(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ut;return n&&(S("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(S("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(S("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){S("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ht{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new it(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await tt(this,this.stsTokenManager.getToken(this.auth,t));return S(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return X(this,t)}reload(){return st(this)}_assign(t){this!==t&&(S(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await rt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await tt(this,Z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=e;S(y&&I,t,"internal-error");const T=ut.fromJSON(this.name,I);S("string"===typeof y,t,"internal-error"),lt(l,t.name),lt(h,t.name),S("boolean"===typeof b,t,"internal-error"),S("boolean"===typeof w,t,"internal-error"),lt(d,t.name),lt(f,t.name),lt(p,t.name),lt(m,t.name),lt(g,t.name),lt(v,t.name);const E=new ht({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(E.providerData=_.map((t=>Object.assign({},t)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(t,e,n=!1){const i=new ut;i.updateFromServerResponse(e);const r=new ht({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await rt(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dt.type="NONE";const ft=dt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class mt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pt(this.userKey,i.apiKey,r),this.fullPersistenceKey=pt("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new mt(C(ft),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||C(ft);const s=pt(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=ht._fromJSON(t,e);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new mt(r,t,n)):new mt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(It(e))return"Blackberry";if(St(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||bt(e))&&!e.includes("edge/"))return"Chrome";if(_t(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function vt(t=(0,r.z$)()){return/firefox\//i.test(t)}function yt(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bt(t=(0,r.z$)()){return/crios\//i.test(t)}function wt(t=(0,r.z$)()){return/iemobile/i.test(t)}function _t(t=(0,r.z$)()){return/android/i.test(t)}function It(t=(0,r.z$)()){return/blackberry/i.test(t)}function St(t=(0,r.z$)()){return/webos/i.test(t)}function Tt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)}function Et(t=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function kt(t=(0,r.z$)()){var e;return Tt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Ct(){return(0,r.w1)()&&10===document.documentMode}function xt(t=(0,r.z$)()){return Tt(t)||_t(t)||St(t)||It(t)||/windows phone/i.test(t)||wt(t)}function At(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e=[]){let n;switch(t){case"Browser":n=gt((0,r.z$)());break;case"Worker":n=`${gt((0,r.z$)())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dt(this),this.idTokenSubscription=new Dt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=C(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await mt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await rt(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&S(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&S(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&C(t)||this._popupRedirectResolver;S(e,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[C(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ot(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Rt(t){return(0,r.m9)(t)}class Dt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lt(t,e,n){const i=Rt(t);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Pt(e),{host:o,port:a}=$t(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Vt()}function Pt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $t(t){const e=Pt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Mt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Mt(e)}}}function Mt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return T("not implemented")}_getIdTokenResponse(t){return T("not implemented")}_linkToIdToken(t,e){return T("not implemented")}_getReauthenticationResolver(t){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,e){return B(t,"POST","/v1/accounts:resetPassword",F(t,e))}async function Ut(t,e){return B(t,"POST","/v1/accounts:update",e)}async function jt(t,e){return B(t,"POST","/v1/accounts:update",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return j(t,"POST","/v1/accounts:signInWithPassword",F(t,e))}async function qt(t,e){return B(t,"POST","/v1/accounts:sendOobCode",F(t,e))}async function Ht(t,e){return qt(t,e)}async function Zt(t,e){return qt(t,e)}async function Wt(t,e){return qt(t,e)}async function Kt(t,e){return qt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}async function Xt(t,e){return j(t,"POST","/v1/accounts:signInWithEmailLink",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ft{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Yt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Yt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return zt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gt(t,{email:this._email,oobCode:this._password});default:y(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ut(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xt(t,{idToken:e,email:this._email,oobCode:this._password});default:y(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return j(t,"POST","/v1/accounts:signInWithIdp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="http://localhost";class te extends Ft{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new te(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):y("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new te(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return Qt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Qt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Qt(t,e)}buildRequest(){const t={requestUri:Jt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t,e){return B(t,"POST","/v1/accounts:sendVerificationCode",F(t,e))}async function ne(t,e){return j(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e))}async function ie(t,e){const n=await j(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,e));if(n.temporaryProof)throw H(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function se(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return j(t,"POST","/v1/accounts:signInWithPhoneNumber",F(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends Ft{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new oe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new oe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ne(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ie(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return se(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new oe({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ce(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class ue{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ae(null!==(i=c["mode"])&&void 0!==i?i:null);S(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ce(t);try{return new ue(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(){this.providerId=le.PROVIDER_ID}static credential(t,e){return Yt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ue.parseLink(e);return S(n,"argument-error"),Yt._fromEmailAndCode(t,n.code,n.tenantId)}}le.PROVIDER_ID="password",le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends he{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class fe extends de{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return S("providerId"in e&&"signInMethod"in e,"argument-error"),te._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return S(t.idToken||t.accessToken,"argument-error"),te._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return fe.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return fe.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=t;if(!n&&!i&&!e&&!r)return null;if(!o)return null;try{return new fe(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends de{constructor(){super("facebook.com")}static credential(t){return te._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",pe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends de{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return te._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return me.credential(e,n)}catch(i){return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com",me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends de{constructor(){super("github.com")}static credential(t){return te._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ge.credential(t.oauthAccessToken)}catch(e){return null}}}ge.GITHUB_SIGN_IN_METHOD="github.com",ge.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="http://localhost";class ye extends Ft{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Qt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Qt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Qt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i,pendingToken:r}=e;return n&&i&&r&&n===i?new ye(n,r):null}static _create(t,e){return new ye(t,e)}buildRequest(){return{requestUri:ve,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="saml.";class we extends he{constructor(t){S(t.startsWith(be),"argument-error"),super(t)}static credentialFromResult(t){return we.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return we.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=ye.fromJSON(t);return S(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:n}=t;if(!e||!n)return null;try{return ye._create(n,e)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends de{constructor(){super("twitter.com")}static credential(t,e){return te._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return _e.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ie(t,e){return j(t,"POST","/v1/accounts:signUp",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e.TWITTER_SIGN_IN_METHOD="twitter.com",_e.PROVIDER_ID="twitter.com";class Se{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ht._fromIdTokenResponse(t,n,i),s=Te(n),o=new Se({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Te(n);return new Se({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t){var e;const n=Rt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new Se({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Ie(n,{returnSecureToken:!0}),r=await Se._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends r.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ke.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ke(t,e,n,i)}}function Ce(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ke._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return new Set(t.map((({providerId:t})=>t)).filter((t=>!!t)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(t,e){const n=(0,r.m9)(t);await Ne(!0,n,e);const{providerUserInfo:i}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=xe(i||[]);return n.providerData=n.providerData.filter((t=>s.has(t.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Oe(t,e,n=!1){const i=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Se._forOperation(t,"link",i)}async function Ne(t,e,n){await rt(e);const i=xe(e.providerData),r=!1===t?"provider-already-linked":"no-such-provider";S(i.has(n)===t,e.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await tt(t,Ce(i,r,e,t),n);S(s.idToken,i,"internal-error");const o=Q(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(t.uid===a,i,"user-mismatch"),Se._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(t,e,n=!1){const i="signIn",r=await Ce(t,i,e),s=await Se._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Le(t,e){return De(Rt(t),e)}async function Pe(t,e){const n=(0,r.m9)(t);return await Ne(!1,n,e.providerId),Oe(n,e)}async function $e(t,e){return Re((0,r.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e){return j(t,"POST","/v1/accounts:signInWithCustomToken",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(t,e){const n=Rt(t),i=await Me(n,{token:e,returnSecureToken:!0}),r=await Se._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Be._fromServerResponse(t,e):y(t,"internal-error")}}class Be extends Fe{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Be(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e,n){var i;S((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t,e,n){const i=(0,r.m9)(t),s={requestType:"PASSWORD_RESET",email:e};n&&Ue(i,s,n),await Zt(i,s)}async function ze(t,e,n){await Bt((0,r.m9)(t),{oobCode:e,newPassword:n})}async function qe(t,e){await jt((0,r.m9)(t),{oobCode:e})}async function He(t,e){const n=(0,r.m9)(t),i=await Bt(n,{oobCode:e}),s=i.requestType;switch(S(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(i.mfaInfo,n,"internal-error");default:S(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Fe._fromServerResponse(Rt(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ze(t,e){const{data:n}=await He((0,r.m9)(t),e);return n.email}async function We(t,e,n){const i=Rt(t),r=await Ie(i,{returnSecureToken:!0,email:e,password:n}),s=await Se._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ke(t,e,n){return Le((0,r.m9)(t),le.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(t,e,n){const i=(0,r.m9)(t),s={requestType:"EMAIL_SIGNIN",email:e};S(n.handleCodeInApp,i,"argument-error"),n&&Ue(i,s,n),await Wt(i,s)}function Xe(t,e){const n=ue.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Ye(t,e,n){const i=(0,r.m9)(t),s=le.credentialWithLink(e,n||A());return S(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Le(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t,e){return B(t,"POST","/v1/accounts:createAuthUri",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e){const n=O()?A():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:s}=await Qe((0,r.m9)(t),i);return s||[]}async function tn(t,e){const n=(0,r.m9)(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&Ue(n.auth,s,e);const{email:o}=await Ht(n.auth,s);o!==t.email&&await t.reload()}async function en(t,e,n){const i=(0,r.m9)(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Ue(i.auth,o,n);const{email:a}=await Kt(i.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,e){return B(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=(0,r.m9)(t),s=await i.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await tt(i,nn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function sn(t,e){return an((0,r.m9)(t),e,null)}function on(t,e){return an((0,r.m9)(t),null,e)}async function an(t,e,n){const{auth:i}=t,r=await t.getIdToken(),s={idToken:r,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await tt(t,Ut(i,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!i&&(null===t||void 0===t?void 0:t.idToken)){const i=null===(n=null===(e=Q(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const t="anonymous"!==i&&"custom"!==i?i:null;return new un(s,t)}}if(!i)return null;switch(i){case"facebook.com":return new hn(s,r);case"github.com":return new dn(s,r);case"google.com":return new fn(s,r);case"twitter.com":return new pn(s,r,t.screenName||null);case"custom":case"anonymous":return new un(s,null);default:return new un(s,i,r)}}class un{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class ln extends un{constructor(t,e,n,i){super(t,e,n),this.username=i}}class hn extends un{constructor(t,e){super(t,"facebook.com",e)}}class dn extends ln{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class fn extends un{constructor(t,e){super(t,"google.com",e)}}class pn extends ln{constructor(t,e,n){super(t,"twitter.com",e,n)}}function mn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new gn("enroll",t)}static _fromMfaPendingCredential(t){return new gn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return gn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=Rt(t),i=e.customData._serverResponse,r=(i.mfaInfo||[]).map((t=>Fe._fromServerResponse(n,t)));S(i.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new vn(s,r,(async t=>{const r=await t._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(e.operationType){case"signIn":const t=await Se._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return S(e.user,n,"internal-error"),Se._forOperation(e.user,e.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function yn(t,e){var n;const i=(0,r.m9)(t),s=e;return S(e.customData.operationType,i,"argument-error"),S(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),vn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return B(t,"POST","/v2/accounts/mfaEnrollment:start",F(t,e))}function wn(t,e){return B(t,"POST","/v2/accounts/mfaEnrollment:finalize",F(t,e))}function _n(t,e){return B(t,"POST","/v2/accounts/mfaEnrollment:withdraw",F(t,e))}class In{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload((e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map((e=>Fe._fromServerResponse(t.auth,e))))}))}static _fromUser(t){return new In(t)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,i=await this.getSession(),r=await tt(this.user,n._process(this.user.auth,i,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),i=await tt(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter((({uid:t})=>t!==e)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const Sn=new WeakMap;function Tn(t){const e=(0,r.m9)(t);return Sn.has(e)||Sn.set(e,In._fromUser(e)),Sn.get(e)}const En="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(En,"1"),this.storage.removeItem(En),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const t=(0,r.z$)();return yt(t)||Tt(t)}const xn=1e3,An=10;class On extends kn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&At(),this.fallbackToPolling=xt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Ct()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,An):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),xn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}On.type="LOCAL";const Nn=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends kn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Rn.type="SESSION";const Dn=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Pn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Ln(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.receivers=[];class Mn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=$n("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Fn(t){Vn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function Un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function jn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function zn(){return Bn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",Hn=1,Zn="firebaseLocalStorage",Wn="fbase_key";class Kn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Gn(t,e){return t.transaction([Zn],e?"readwrite":"readonly").objectStore(Zn)}function Xn(){const t=indexedDB.deleteDatabase(qn);return new Kn(t).toPromise()}function Yn(){const t=indexedDB.open(qn,Hn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Zn,{keyPath:Wn})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Zn)?e(n):(n.close(),await Xn(),e(await Yn()))}))}))}async function Qn(t,e,n){const i=Gn(t,!0).put({[Wn]:e,value:n});return new Kn(i).toPromise()}async function Jn(t,e){const n=Gn(t,!1).get(e),i=await new Kn(n).toPromise();return void 0===i?null:i.value}function ti(t,e){const n=Gn(t,!0).delete(e);return new Kn(n).toPromise()}const ei=800,ni=3;class ii{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ni)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(zn()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Un(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&jn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yn();return await Qn(t,En,"1"),await ti(t,En),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Jn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ti(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Gn(t,!1).getAll();return new Kn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ii.type="LOCAL";const ri=ii;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){return B(t,"POST","/v2/accounts/mfaSignIn:start",F(t,e))}function oi(t,e){return B(t,"POST","/v2/accounts/mfaSignIn:finalize",F(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t){return(await B(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ui(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=b("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",ci().appendChild(i)}))}function li(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=500,di=6e4,fi=1e12;class pi{constructor(t){this.auth=t,this.counter=fi,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new mi(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||fi;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||fi;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||fi;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class mi{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof t?document.getElementById(t):t;S(i,"argument-error",{appName:e}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gi(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()}),di)}),hi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gi(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=li("rcb"),yi=new L(3e4,6e4),bi="https://www.google.com/recaptcha/api.js?";class wi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vn().grecaptcha}load(t,e=""){return S(_i(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Vn().grecaptcha):new Promise(((n,i)=>{const s=Vn().setTimeout((()=>{i(b(t,"network-request-failed"))}),yi.get());Vn()[vi]=()=>{Vn().clearTimeout(s),delete Vn()[vi];const r=Vn().grecaptcha;if(!r)return void i(b(t,"internal-error"));const o=r.render;r.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(r)};const o=`${bi}?${(0,r.xO)({onload:vi,render:"explicit",hl:e})}`;ui(o).catch((()=>{clearTimeout(s),i(b(t,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Vn().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _i(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Ii{async load(t){return new pi(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="recaptcha",Ti={theme:"light",type:"image"};class Ei{constructor(t,e=Object.assign({},Ti),n){this.parameters=e,this.type=Si,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Rt(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ii:new wi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise((n=>{const i=t=>{t&&(this.tokenChangeListeners.delete(i),n(t))};this.tokenChangeListeners.add(i),this.isInvisible&&e.execute(t)}))}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((t=>{throw this.renderPromise=null,t}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((t=>{this.container.removeChild(t)}))}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach((t=>t(e))),"function"===typeof t)t(e);else if("string"===typeof t){const n=Vn()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){S(O()&&!Bn(),this.auth,"internal-error"),await ki(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await ai(this.auth);S(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ki(){let t=null;return new Promise((e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()})).catch((e=>{throw t&&window.removeEventListener("load",t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=oe._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function xi(t,e,n){const i=Rt(t),s=await Ni(i,e,(0,r.m9)(n));return new Ci(s,(t=>Le(i,t)))}async function Ai(t,e,n){const i=(0,r.m9)(t);await Ne(!1,i,"phone");const s=await Ni(i.auth,e,(0,r.m9)(n));return new Ci(s,(t=>Pe(i,t)))}async function Oi(t,e,n){const i=(0,r.m9)(t),s=await Ni(i.auth,e,(0,r.m9)(n));return new Ci(s,(t=>$e(i,t)))}async function Ni(t,e,n){var i;const r=await n.verify();try{let s;if(S("string"===typeof r,t,"argument-error"),S(n.type===Si,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){S("enroll"===e.type,t,"internal-error");const n=await bn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{S("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;S(n,t,"missing-multi-factor-info");const o=await si(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ee(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}async function Ri(t,e){await Oe((0,r.m9)(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this.providerId=Di.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return Ni(this.auth,t,(0,r.m9)(e))}static credential(t,e){return oe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Di.credentialFromTaggedObject(e)}static credentialFromError(t){return Di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?oe._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(t,e){return e?C(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di.PROVIDER_ID="phone",Di.PHONE_SIGN_IN_METHOD="phone";class Pi extends Ft{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Qt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Qt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function $i(t){return De(t.auth,new Pi(t),t.bypassAuthState)}function Mi(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Re(n,new Pi(t),t.bypassAuthState)}async function Vi(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Oe(n,new Pi(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $i;case"linkViaPopup":case"linkViaRedirect":return Vi;case"reauthViaPopup":case"reauthViaRedirect":return Mi;default:y(this.auth,"internal-error")}}resolve(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new L(2e3,1e4);async function Ui(t,e,n){const i=Rt(t);_(t,e,he);const r=Li(i,n),s=new qi(i,"signInViaPopup",e,r);return s.executeNotNull()}async function ji(t,e,n){const i=(0,r.m9)(t);_(i.auth,e,he);const s=Li(i.auth,n),o=new qi(i.auth,"reauthViaPopup",e,s,i);return o.executeNotNull()}async function zi(t,e,n){const i=(0,r.m9)(t);_(i.auth,e,he);const s=Li(i.auth,n),o=new qi(i.auth,"linkViaPopup",e,s,i);return o.executeNotNull()}class qi extends Fi{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return S(t,this.auth,"internal-error"),t}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const t=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Bi.get())};t()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi="pendingRedirect",Zi=new Map;class Wi extends Fi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Zi.get(this.auth._key());if(!t){try{const e=await Ki(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Zi.set(this.auth._key(),t)}return this.bypassAuthState||Zi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ki(t,e){const n=Qi(e),i=Yi(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Gi(t,e){return Yi(t)._set(Qi(e),"true")}function Xi(){Zi.clear()}function Yi(t){return C(t._redirectPersistence)}function Qi(t){return pt(Hi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e,n){return tr(t,e,n)}async function tr(t,e,n){const i=Rt(t);_(t,e,he);const r=Li(i,n);return await Gi(r,i),r._openRedirect(i,e,"signInViaRedirect")}function er(t,e,n){return nr(t,e,n)}async function nr(t,e,n){const i=(0,r.m9)(t);_(i.auth,e,he);const s=Li(i.auth,n);await Gi(s,i.auth);const o=await ar(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",o)}function ir(t,e,n){return rr(t,e,n)}async function rr(t,e,n){const i=(0,r.m9)(t);_(i.auth,e,he);const s=Li(i.auth,n);await Ne(!1,i,e.providerId),await Gi(s,i.auth);const o=await ar(i);return s._openRedirect(i.auth,e,"linkViaRedirect",o)}async function sr(t,e){return await Rt(t)._initializationPromise,or(t,e,!1)}async function or(t,e,n=!1){const i=Rt(t),r=Li(i,e),s=new Wi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function ar(t){const e=$n(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=6e5;class ur{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!dr(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!hr(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(b(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cr&&this.cachedEventUids.clear(),this.cachedEventUids.has(lr(t))}saveEventToCache(t){this.cachedEventUids.add(lr(t)),this.lastProcessedEventTime=Date.now()}}function lr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function hr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function dr(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e={}){return B(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mr=/^https?/;async function gr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fr(t);for(const i of e)try{if(vr(i))return}catch(n){}y(t,"unauthorized-domain")}function vr(t){const e=A(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!mr.test(n))return!1;if(pr.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new L(3e4,6e4);function br(){const t=Vn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function wr(t){return new Promise(((e,n)=>{var i,r,s;function o(){br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{br(),n(b(t,"network-request-failed"))},timeout:yr.get()})}if(null===(r=null===(i=Vn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const e=li("iframefcb");return Vn()[e]=()=>{gapi.load?o():n(b(t,"network-request-failed"))},ui(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw _r=null,t}))}let _r=null;function Ir(t){return _r=_r||wr(t),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new L(5e3,15e3),Tr="__/auth/iframe",Er="emulator/auth/iframe",kr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xr(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,Er):`https://${t.config.authDomain}/${Tr}`,i={apiKey:e.apiKey,appName:t.name,v:s.SDK_VERSION},o=Cr.get(t.config.apiHost);o&&(i.eid=o);const a=t._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Ar(t){const e=await Ir(t),n=Vn().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:xr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=b(t,"network-request-failed"),s=Vn().setTimeout((()=>{i(r)}),Sr.get());function o(){Vn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nr=500,Rr=600,Dr="_blank",Lr="http://localhost";class Pr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function $r(t,e,n,i=Nr,s=Rr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Or),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=bt(l)?Dr:n),vt(l)&&(e=e||Lr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(kt(l)&&"_self"!==c)return Mr(e||"",c),new Pr(null);const d=window.open(e||"",c,h);S(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Pr(d)}function Mr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="__/auth/handler",Fr="emulator/auth/handler";function Br(t,e,n,i,o,a){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(e instanceof he){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof de){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Ur(t)}?${(0,r.xO)(u).slice(1)}`}function Ur({config:t}){return t.emulator?P(t,Fr):`https://${t.authDomain}/${Vr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="webStorageSupport";class zr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=or}async _openPopup(t,e,n,i){var r;E(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Br(t,e,n,A(),i);return $r(t,s,$n())}async _openRedirect(t,e,n,i){return await this._originValidation(t),Fn(Br(t,e,n,A(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Ar(t),n=new ur(t);return e.register("authEvent",(e=>{S(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(jr,{type:jr},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[jr];void 0!==r&&e(!!r),y(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=gr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return xt()||yt()||Tt()}}const qr=zr;class Hr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return T("unexpected MultiFactorSessionType")}}}class Zr extends Hr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Zr(t)}_finalizeEnroll(t,e,n){return wn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return oi(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wr{constructor(){}static assertion(t){return Zr._fromCredential(t)}}Wr.FACTOR_ID="phone";var Kr="@firebase/auth",Gr="0.19.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qr(t){(0,s._registerComponent)(new c.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{S(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),S(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ot(t)},a=new Nt(e,i,r);return x(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(t=>{const e=Rt(t.getProvider("auth").getImmediate());return(t=>new Xr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Kr,Gr,Yr(t)),(0,s.registerVersion)(Kr,Gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr("Browser");const ts=2e3;async function es(t,e,n){var i;const{BuildInfo:r}=Jr();E(e.sessionId,"AuthEvent did not contain a session ID");const s=await os(e.sessionId),o={};return Tt()?o["ibi"]=r.packageName:_t()?o["apn"]=r.packageName:y(t,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Br(t,n,e.type,void 0,null!==(i=e.eventId)&&void 0!==i?i:void 0,o)}async function ns(t){const{BuildInfo:e}=Jr(),n={};Tt()?n.iosBundleId=e.packageName:_t()?n.androidPackageName=e.packageName:y(t,"operation-not-supported-in-this-environment"),await fr(t,n)}function is(t){const{cordova:e}=Jr();return new Promise((n=>{e.plugins.browsertab.isAvailable((i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,Et()?"_blank":"_system","location=yes"),n(r)}))}))}async function rs(t,e,n){const{cordova:i}=Jr();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var t;s();const e=null===(t=i.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(b(t,"redirect-cancelled-by-user"))}),ts))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),_t()&&document.addEventListener("visibilitychange",l,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{r()}}function ss(t){var e,n,i,r,s,o,a,c,u,l;const h=Jr();S("function"===typeof(null===(e=null===h||void 0===h?void 0:h.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function os(t){const e=as(t),n=await crypto.subtle.digest("SHA-256",e),i=Array.from(new Uint8Array(n));return i.map((t=>t.toString(16).padStart(2,"0"))).join("")}function as(t){if(E(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=20;class us extends ur{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((t=>{this.resolveInialized=t}))}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach((e=>e(t))),super.onEvent(t)}async initialized(){await this.initPromise}}function ls(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:ps(),postBody:null,tenantId:t.tenantId,error:b(t,"no-auth-event")}}function hs(t,e){return ms()._set(gs(t),e)}async function ds(t){const e=await ms()._get(gs(t));return e&&await ms()._remove(gs(t)),e}function fs(t,e){var n,i;const r=ys(e);if(r.includes("/__/auth/callback")){const e=bs(r),s=e["firebaseError"]?vs(decodeURIComponent(e["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?b(o):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function ps(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cs;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function ms(){return C(Nn)}function gs(t){return pt("authEvent",t.config.apiKey,t.name)}function vs(t){try{return JSON.parse(t)}catch(e){return null}}function ys(t){const e=bs(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,i=bs(n)["link"],r=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=bs(r)["link"];return s||r||i||n||t}function bs(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return(0,r.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=500;class _s{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=or}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new us(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){y(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,i){ss(t);const r=await this._initialize(t);await r.initialized(),r.resetRedirect(),Xi(),await this._originValidation(t);const s=ls(t,n,i);await hs(t,s);const o=await es(t,s,e),a=await is(o);return rs(t,r,a)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=ns(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Jr(),s=setTimeout((async()=>{await ds(t),e.onEvent(Ss())}),ws),o=async n=>{clearTimeout(s);const i=await ds(t);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=fs(i,n["url"])),e.onEvent(r||Ss())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=`${r.packageName.toLowerCase()}://`;Jr().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof a)try{a(t)}catch(e){console.error(e)}}}}const Is=_s;function Ss(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,e){Rt(t)._logFramework(e)}var Es="@firebase/auth-compat",ks="0.2.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cs=1e3;function xs(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function As(){return"http:"===xs()||"https:"===xs()}function Os(t=(0,r.z$)()){return!("file:"!==xs()&&"ionic:"!==xs()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ns(){return(0,r.b$)()||(0,r.UG)()}function Rs(){return(0,r.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Ds(t=(0,r.z$)()){return/Edge\/\d+/.test(t)}function Ls(t=(0,r.z$)()){return Rs()||Ds(t)}function Ps(){try{const t=self.localStorage,e=$n();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!Ls()||(0,r.hl)()}catch(t){return $s()&&(0,r.hl)()}return!1}function $s(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Ms(){return(As()||(0,r.ru)()||Os())&&!Ns()&&Ps()&&!$s()}function Vs(){return Os()&&"undefined"!==typeof document}async function Fs(){return!!Vs()&&new Promise((t=>{const e=setTimeout((()=>{t(!1)}),Cs);document.addEventListener("deviceready",(()=>{clearTimeout(e),t(!0)}))}))}function Bs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us={LOCAL:"local",NONE:"none",SESSION:"session"},js=S,zs="persistence";function qs(t,e){js(Object.values(Us).includes(e),t,"invalid-persistence-type"),(0,r.b$)()?js(e!==Us.SESSION,t,"unsupported-persistence-type"):(0,r.UG)()?js(e===Us.NONE,t,"unsupported-persistence-type"):$s()?js(e===Us.NONE||e===Us.LOCAL&&(0,r.hl)(),t,"unsupported-persistence-type"):js(e===Us.NONE||Ps(),t,"unsupported-persistence-type")}async function Hs(t){await t._initializationPromise;const e=Ws(),n=pt(zs,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Zs(t,e){const n=Ws();if(!n)return[];const i=pt(zs,t,e),r=n.getItem(i);switch(r){case Us.NONE:return[ft];case Us.LOCAL:return[ri,Dn];case Us.SESSION:return[Dn];default:return[]}}function Ws(){var t;try{return(null===(t=Bs())||void 0===t?void 0:t.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=S;class Gs{constructor(){this.browserResolver=C(qr),this.cordovaResolver=C(Is),this.underlyingResolver=null,this._redirectPersistence=Dn,this._completeRedirectFn=or}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,i)}async _openRedirect(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,i)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return Vs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ks(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await Fs();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){return t.unwrap()}function Ys(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){return to(t)}function Js(t,e){var n;const i=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new io(t,yn(t,e))}else if(i){const t=to(e),n=e;t&&(n.credential=t,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function to(t){const{_tokenResponse:e}=t instanceof r.ZR?t.customData:t;if(!e)return null;if(!(t instanceof r.ZR)&&"temporaryProof"in e&&"phoneNumber"in e)return Di.credentialFromResult(t);const n=e.providerId;if(!n||n===u.PASSWORD)return null;let i;switch(n){case u.GOOGLE:i=me;break;case u.FACEBOOK:i=pe;break;case u.GITHUB:i=ge;break;case u.TWITTER:i=_e;break;default:const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=e;return r||s||t||o?o?n.startsWith("saml.")?ye._create(n,o):te._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:t,accessToken:r}):new fe(n).credential({idToken:t,accessToken:r,rawNonce:a}):null}return t instanceof r.ZR?i.credentialFromError(t):i.credentialFromResult(t)}function eo(t,e){return e.catch((e=>{throw e instanceof r.ZR&&Js(t,e),e})).then((t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:Qs(t),additionalUserInfo:mn(t),user:ro.getOrCreate(n)}}))}async function no(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>eo(t,n.confirm(e))}}class io{constructor(t,e){this.resolver=e,this.auth=Ys(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return eo(Xs(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this._delegate=t,this.multiFactor=Tn(t)}static getOrCreate(t){return ro.USER_MAP.has(t)||ro.USER_MAP.set(t,new ro(t)),ro.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return eo(this.auth,Pe(this._delegate,t))}async linkWithPhoneNumber(t,e){return no(this.auth,Ai(this._delegate,t,e))}async linkWithPopup(t){return eo(this.auth,zi(this._delegate,t,Gs))}async linkWithRedirect(t){return await Hs(Rt(this.auth)),ir(this._delegate,t,Gs)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return eo(this.auth,$e(this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return no(this.auth,Oi(this._delegate,t,e))}reauthenticateWithPopup(t){return eo(this.auth,ji(this._delegate,t,Gs))}async reauthenticateWithRedirect(t){return await Hs(Rt(this.auth)),er(this._delegate,t,Gs)}sendEmailVerification(t){return tn(this._delegate,t)}async unlink(t){return await Ae(this._delegate,t),this}updateEmail(t){return sn(this._delegate,t)}updatePassword(t){return on(this._delegate,t)}updatePhoneNumber(t){return Ri(this._delegate,t)}updateProfile(t){return rn(this._delegate,t)}verifyBeforeUpdateEmail(t,e){return en(this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ro.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const so=S;class oo{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;so(n,"invalid-api-key",{appName:t.name}),so(n,"invalid-api-key",{appName:t.name});const i="undefined"!==typeof window?Gs:void 0;this._delegate=e.initialize({options:{persistence:co(n,t.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ro.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){Lt(this._delegate,t,e)}applyActionCode(t){return qe(this._delegate,t)}checkActionCode(t){return He(this._delegate,t)}confirmPasswordReset(t,e){return ze(this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return eo(this._delegate,We(this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return Je(this._delegate,t)}isSignInWithEmailLink(t){return Xe(this._delegate,t)}async getRedirectResult(){so(Ms(),this._delegate,"operation-not-supported-in-this-environment");const t=await sr(this._delegate,Gs);return t?eo(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){Ts(this._delegate,t)}onAuthStateChanged(t,e,n){const{next:i,error:r,complete:s}=ao(t,e,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(t,e,n){const{next:i,error:r,complete:s}=ao(t,e,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(t,e){return Ge(this._delegate,t,e)}sendPasswordResetEmail(t,e){return je(this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(qs(this._delegate,t),t){case Us.SESSION:e=Dn;break;case Us.LOCAL:const t=await C(ri)._isAvailable();e=t?ri:Nn;break;case Us.NONE:e=ft;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return eo(this._delegate,Ee(this._delegate))}signInWithCredential(t){return eo(this._delegate,Le(this._delegate,t))}signInWithCustomToken(t){return eo(this._delegate,Ve(this._delegate,t))}signInWithEmailAndPassword(t,e){return eo(this._delegate,Ke(this._delegate,t,e))}signInWithEmailLink(t,e){return eo(this._delegate,Ye(this._delegate,t,e))}signInWithPhoneNumber(t,e){return no(this._delegate,xi(this._delegate,t,e))}async signInWithPopup(t){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),eo(this._delegate,Ui(this._delegate,t,Gs))}async signInWithRedirect(t){return so(Ms(),this._delegate,"operation-not-supported-in-this-environment"),await Hs(this._delegate),Ji(this._delegate,t,Gs)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return Ze(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function ao(t,e,n){let i=t;"function"!==typeof t&&({next:i,error:e,complete:n}=t);const r=i,s=t=>r(t&&ro.getOrCreate(t));return{next:s,error:e,complete:n}}function co(t,e){const n=Zs(t,e);if("undefined"===typeof self||n.includes(ri)||n.push(ri),"undefined"!==typeof window)for(const i of[Nn,Dn])n.includes(i)||n.push(i);return n.includes(ft)||n.push(ft),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.Persistence=Us;class uo{constructor(){this.providerId="phone",this._delegate=new Di(Xs(i.Z.auth()))}static credential(t,e){return Di.credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}uo.PHONE_SIGN_IN_METHOD=Di.PHONE_SIGN_IN_METHOD,uo.PROVIDER_ID=Di.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lo=S;class ho{constructor(t,e,n=i.Z.app()){var r;lo(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Ei(t,e,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="auth-compat";function po(t){t.INTERNAL.registerComponent(new c.wA(fo,(t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new oo(e,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:le,FacebookAuthProvider:pe,GithubAuthProvider:ge,GoogleAuthProvider:me,OAuthProvider:fe,SAMLAuthProvider:we,PhoneAuthProvider:uo,PhoneMultiFactorGenerator:Wr,RecaptchaVerifier:ho,TwitterAuthProvider:_e,Auth:oo,AuthCredential:Ft,Error:r.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Es,ks)}po(i.Z)},6621:function(t,e,n){"use strict";var i,r=n(8180),s=n(2238),o=n(8463),a=n(3333),c=n(4444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,v)&&t[v]||(t[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function b(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:w,_.apply(null,arguments)}function I(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function S(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function T(){this.s=this.s,this.o=this.o}var E=0,k={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=g(this);delete k[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},x=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function A(t){t:{var e=Wn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function O(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function R(t){return/^[\s\xa0]*$/.test(t)}var D,L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P(t,e){return-1!=t.indexOf(e)}function $(t,e){return t<e?-1:t>e?1:0}t:{var M=d.navigator;if(M){var V=M.userAgent;if(V){D=V;break t}}D=""}function F(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function B(t){const e={};for(const n in t)e[n]=t[n];return e}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<U.length;e++)n=U[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function z(t){return z[" "](t),t}function q(t){var e=it;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}z[" "]=f;var H,Z=P(D,"Opera"),W=P(D,"Trident")||P(D,"MSIE"),K=P(D,"Edge"),G=K||W,X=P(D,"Gecko")&&!(P(D.toLowerCase(),"webkit")&&!P(D,"Edge"))&&!(P(D,"Trident")||P(D,"MSIE"))&&!P(D,"Edge"),Y=P(D.toLowerCase(),"webkit")&&!P(D,"Edge");function Q(){var t=d.document;return t?t.documentMode:void 0}t:{var J="",tt=function(){var t=D;return X?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):Z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(tt&&(J=tt?tt[1]:""),W){var et=Q();if(null!=et&&et>parseFloat(J)){H=String(et);break t}}H=J}var nt,it={};function rt(){return q((function(){let t=0;const e=L(String(H)).split("."),n=L("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=$(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||$(0==r[2].length,0==s[2].length)||$(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(d.document&&W){var st=Q();nt=st||(parseInt(H,10)||void 0)}else nt=void 0;var ot=nt,at=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",f,e),d.removeEventListener("test",f,e)}catch(n){}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ut(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{z(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ut.Z.h.call(this)}}ct.prototype.h=function(){this.defaultPrevented=!0},S(ut,ct);var lt={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),dt=0;function ft(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++dt,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function mt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=C(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function vt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}mt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),bt={};function wt(t,e,n,i,r){if(i&&i.once)return St(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ht]?t.N(e,n,m(i)?!!i.capture:!!i,r):_t(t,e,n,!1,i,r)}function _t(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=m(r)?!!r.capture:!!r,a=xt(t);if(a||(t[yt]=a=new mt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=It(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)at||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(kt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function It(){function t(n){return e.call(t.src,t.listener,n)}var e=Ct;return t}function St(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)St(t,e[s],n,i,r);return null}return n=Ot(n),t&&t[ht]?t.O(e,n,m(i)?!!i.capture:!!i,r):_t(t,e,n,!0,i,r)}function Tt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,i,r);else i=m(i)?!!i.capture:!!i,n=Ot(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vt(s,n,i,r),-1<n&&(pt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=xt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vt(e,n,i,r)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])gt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(kt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=xt(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):pt(t)}}}function kt(t){return t in bt?bt[t]:bt[t]="on"+t}function Ct(t,e){if(t.ca)t=!0;else{e=new ut(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Et(t),t=n.call(i,e)}return t}function xt(t){return t=t[yt],t instanceof mt?t:null}var At="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ot(t){return"function"===typeof t?t:(t[At]||(t[At]=function(e){return t.handleEvent(e)}),t[At])}function Nt(){T.call(this),this.i=new mt(this),this.P=this,this.I=null}function Rt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var r=e;e=new ct(i,t),j(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Dt(o,i,!0,e)&&r}if(o=e.g=t,r=Dt(o,i,!0,e)&&r,r=Dt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Dt(o,i,!1,e)&&r}function Dt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}S(Nt,T),Nt.prototype[ht]=!0,Nt.prototype.removeEventListener=function(t,e,n,i){Tt(this,t,e,n,i)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)pt(n[i]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Nt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Lt=d.JSON.stringify;function Pt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $t{constructor(){this.h=this.g=null}add(t,e){const n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Mt,Vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ft),(t=>t.reset()));class Ft{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Bt(t){d.setTimeout((()=>{throw t}),0)}function Ut(t,e){Mt||jt(),zt||(Mt(),zt=!0),qt.add(t,e)}function jt(){var t=d.Promise.resolve(void 0);Mt=function(){t.then(Ht)}}var zt=!1,qt=new $t;function Ht(){for(var t;t=Pt();){try{t.h.call(t.g)}catch(n){Bt(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zt=!1}function Zt(t,e){Nt.call(this),this.h=t||1,this.g=e||d,this.j=_(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function Gt(t){t.g=Kt((()=>{t.g=null,t.i&&(t.i=!1,Gt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}S(Zt,Nt),i=Zt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Rt(this,"tick"),this.da&&(Wt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Zt.Z.M.call(this),Wt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){T.call(this),this.h=t,this.g={}}S(Yt,T);var Qt=[];function Jt(t,e,n,i){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var r=0;r<n.length;r++){var s=wt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function te(t){F(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function ee(){this.g=!0}function ne(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ie(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(t,n)+(i?" "+i:"")}))}function se(t,e){t.info((function(){return"TIMEOUT: "+e}))}function oe(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Lt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),te(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ee.prototype.Aa=function(){this.g=!1},ee.prototype.info=function(){};var ae={},ce=null;function ue(){return ce=ce||new Nt}function le(t){ct.call(this,ae.Ma,t)}function he(t){const e=ue();Rt(e,new le(e,t))}function de(t,e){ct.call(this,ae.STAT_EVENT,t),this.stat=e}function fe(t){const e=ue();Rt(e,new de(e,t))}function pe(t,e){ct.call(this,ae.Na,t),this.size=e}function me(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){t()}),e)}ae.Ma="serverreachability",S(le,ct),ae.STAT_EVENT="statevent",S(de,ct),ae.Na="timingevent",S(pe,ct);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ve={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function be(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var _e,Ie={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Se(){ct.call(this,"d")}function Te(){ct.call(this,"c")}function Ee(){}function ke(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Yt(this),this.P=xe,t=G?125:void 0,this.W=new Zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ce}function Ce(){this.i=null,this.g="",this.h=!1}S(Se,ct),S(Te,ct),S(Ee,ye),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},_e=new Ee;var xe=45e3,Ae={},Oe={};function Ne(t,e,n){t.K=1,t.v=nn(Xe(e)),t.s=n,t.U=!0,Re(t,null)}function Re(t,e){t.F=Date.now(),$e(t),t.A=Xe(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),yn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ce,t.g=Ti(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(_(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?B(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ne(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Le(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Pe(t,n),i==Oe){4==e&&(t.o=4,fe(14),r=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ae){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}re(t.j,t.m,i,null),Ue(t,i)}De(t)&&i!=Oe&&i!=Ae&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gi(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Be(t),Fe(t))}function Pe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Oe:(n=Number(e.substring(n,i)),isNaN(n)?Ae:(i+=1,i+n>e.length?Oe:(e=e.substr(i,n),t.C=i+n,e)))}function $e(t){t.Y=Date.now()+t.P,Me(t,t.P)}function Me(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=me(_(t.eb,t),e)}function Ve(t){t.B&&(d.clearTimeout(t.B),t.B=null)}function Fe(t){0==t.l.G||t.I||bi(t.l,t)}function Be(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),te(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ue(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||kn(n.i,t)))if(n.I=t.N,!t.J&&kn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yi(n),oi(n)}mi(n),fe(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=me(_(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _i(n,11)}else if((t.J||n.g==t)&&yi(n),!R(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(P(t,"spdy")||P(t,"quic")||P(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Cn(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,en(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Si(i,i.H?i.la:null,i.W),o.J){xn(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ve(a),$e(a)),i.g=o}else pi(i);0<n.l.length&&ui(n)}else"stop"!=u[0]&&"close"!=u[0]||_i(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_i(n,7):si(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}he(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function ze(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)x(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=je(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof qe)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Ze(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],Ze(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function Ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=ke.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const l=Jn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||G||this.g&&(this.h.h||this.g.ga()||ti(this.g)))){this.I||4!=l||7==e||he(8==e||0>=h?3:2),Ve(this);var n=this.g.ba();this.N=n;e:if(De(this)){var i=ti(this.g);t="";var r=i.length,s=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Be(this),Fe(this);var o="";break e}this.h.i=new d.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ie(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Be(this),Fe(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ue(this,n)}this.U?(Le(this,l,o),G&&this.i&&3==l&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Ue(this,o)),4==l&&Be(this),this.i&&!this.I&&(4==l?bi(this.l,this):(this.i=!1,$e(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Be(this),Fe(this)}}}catch(l){}},i.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),Le(this,t,e),this.i&&4!=t&&$e(this))}},i.cancel=function(){this.I=!0,Be(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(se(this.j,this.A),2!=this.K&&(he(3),fe(17)),Be(this),this.o=2,Fe(this)):Me(this,this.Y-t)},i=qe.prototype,i.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return He(this),this.g.concat()},i.get=function(t,e){return Ze(this.h,t)?this.h[t]:e},i.set=function(t,e){Ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Qe(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),tn(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=on(n[2]||""),Qe(this,n[3]||"",!0),Je(this,n[4]),this.l=on(n[5]||"",!0),tn(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Xe(t){return new Ge(t)}function Ye(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?on(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tn(t,e,n){e instanceof pn?(t.h=e,wn(t.h,t.g)):(n||(e=an(e,dn)),t.h=new pn(e,t.g))}function en(t,e,n){t.h.set(e,n)}function nn(t){return en(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rn(t){return t instanceof Ge?Xe(t):new Ge(t,void 0)}function sn(t,e,n,i){var r=new Ge(null,void 0);return t&&Ye(r,t),e&&Qe(r,e),n&&Je(r,n),i&&(r.l=i),r}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function an(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,cn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(an(e,un,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(an(e,un,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",an(n,fn)),t.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mn(t){t.g||(t.g=new qe,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){mn(t),e=bn(t,e),Ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function vn(t,e){return mn(t),e=bn(t,e),Ze(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(bn(t,e),N(n)),t.h+=n.length)}function bn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(mn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}i=pn.prototype,i.add=function(t,e){mn(this),this.i=null,t=bn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){mn(this),this.g.forEach((function(n,i){x(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){mn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){mn(this);var e=[];if("string"===typeof t)vn(this,t)&&(e=O(e,this.g.get(bn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=O(e,t[n])}return e},i.set=function(t,e){return mn(this),this.i=null,t=bn(this,t),vn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var _n=class{constructor(t,e){this.h=t,this.g=e}};function In(t){this.l=t||Sn,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Sn=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function kn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Cn(t,e){t.g?t.g.add(e):t.h=e}function xn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function An(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function On(){}function Nn(){this.g=new On}function Rn(t,e,n){const i=n||"";try{ze(t,(function(t,n){let r=t;m(t)&&(r=Lt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Dn(t,e){const n=new ee;if(d.Image){const i=new Image;i.onload=I(Ln,n,i,"TestLoadImage: loaded",!0,e),i.onerror=I(Ln,n,i,"TestLoadImage: error",!1,e),i.onabort=I(Ln,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=I(Ln,n,i,"TestLoadImage: timeout",!1,e),d.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Ln(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Pn(t){this.l=t.$b||null,this.j=t.ib||!1}function $n(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},On.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)},On.prototype.parse=function(t){return d.JSON.parse(t,void 0)},S(Pn,ye),Pn.prototype.g=function(){return new $n(this.l,this.j)},Pn.prototype.i=function(t){return function(){return t}}({}),S($n,Nt);var Mn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Fn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bn(t)}function Bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=$n.prototype,i.open=function(t,e){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||d).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=Mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fn(this):Bn(this),3==this.readyState&&Vn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Fn(this))},i.Ta=function(t){this.g&&(this.response=t,Fn(this))},i.ha=function(){this.g&&Fn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($n.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Un=d.JSON.parse;function jn(t){Nt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zn,this.K=this.L=!1}S(jn,Nt);var zn="",qn=/^https?$/i,Hn=["POST","PUT"];function Zn(t){return W&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),Yn(t)}function Gn(t){t.D||(t.D=!0,Rt(t,"complete"),Rt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))Kt(t.Fa,0,t);else if(Rt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var r=String(t.H).match(We)[1]||null;if(!r&&d.self&&d.self.location){var s=d.self.location.protocol;r=s.substr(0,s.length-1)}i=!qn.test(r?r.toLowerCase():"")}n=i}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Gn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Qn(t);const i=t.g,r=t.C[0]?f:null;t.g=null,t.C=null,e||Rt(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function ti(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case zn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ei(t){let e="";return F(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ni(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ei(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):en(t,e,n))}function ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ri(t){this.za=0,this.l=[],this.h=new ee,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ii("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ii("baseRetryDelayMs",5e3,t),this.$a=ii("retryDelaySeedMs",1e4,t),this.Ya=ii("forwardChannelMaxRetries",2,t),this.ra=ii("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new In(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function si(t){if(ai(t),3==t.G){var e=t.V++,n=Xe(t.F);en(n,"SID",t.J),en(n,"RID",e),en(n,"TYPE","terminate"),di(t,n),e=new ke(t,t.h,e,void 0),e.K=2,e.v=nn(Xe(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ti(e.l,null),e.g.ea(e.v)),e.F=Date.now(),$e(e)}Ii(t)}function oi(t){t.g&&(gi(t),t.g.cancel(),t.g=null)}function ai(t){oi(t),t.u&&(d.clearTimeout(t.u),t.u=null),yi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&d.clearTimeout(t.m),t.m=null)}function ci(t,e){t.l.push(new _n(t.Za++,e)),3==t.G&&ui(t)}function ui(t){Tn(t.i)||t.m||(t.m=!0,Ut(t.Ha,t),t.C=0)}function li(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=me(_(t.Ha,t,e),wi(t,t.C)),t.C++,!0))}function hi(t,e){var n;n=e?e.m:t.V++;const i=Xe(t.F);en(i,"SID",t.J),en(i,"RID",n),en(i,"AID",t.U),di(t,i),t.o&&t.s&&ni(i,t.o,t.s),n=new ke(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Cn(t.i,n),Ne(n,i,e)}function di(t,e){t.j&&ze({},(function(t,n){en(e,n,t)}))}function fi(t,e,n){n=Math.min(t.l.length,n);var i=t.j?_(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Rn(a,t,"req"+n+"_")}catch(tr){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function pi(t){t.g||t.u||(t.Y=1,Ut(t.Ga,t),t.A=0)}function mi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=me(_(t.Ga,t),wi(t,t.A)),t.A++,!0)}function gi(t){null!=t.B&&(d.clearTimeout(t.B),t.B=null)}function vi(t){t.g=new ke(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);en(e,"RID","rpc"),en(e,"SID",t.J),en(e,"CI",t.N?"0":"1"),en(e,"AID",t.U),di(t,e),en(e,"TYPE","xmlhttp"),t.o&&t.s&&ni(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=nn(Xe(e)),n.s=null,n.U=!0,Re(n,t)}function yi(t){null!=t.v&&(d.clearTimeout(t.v),t.v=null)}function bi(t,e){var n=null;if(t.g==e){yi(t),gi(t),t.g=null;var i=2}else{if(!kn(t.i,e))return;n=e.D,xn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ue(),Rt(i,new pe(i,n,e,r)),ui(t)}else pi(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&li(t,e)||2==i&&mi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:_i(t,5);break;case 4:_i(t,10);break;case 3:_i(t,6);break;default:_i(t,2)}}function wi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _i(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=_(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Ye(n,"https"),nn(n)),Dn(n.toString(),i)}else fe(2);t.G=0,t.j&&t.j.va(e),Ii(t),ai(t)}function Ii(t){t.G=0,t.I=-1,t.j&&(0==An(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function Si(t,e,n){let i=rn(n);if(""!=i.i)e&&Qe(i,e+"."+i.i),Je(i,i.m);else{const t=d.location;i=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&F(t.aa,(function(t,e){en(i,e,t)})),e=t.D,n=t.sa,e&&n&&en(i,e,n),en(i,"VER",t.ma),di(t,i),i}function Ti(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new Pn({ib:!0})):new jn(t.qa),e.L=t.H,e}function Ei(){}function ki(){if(W&&!(10<=Number(ot)))throw Error("Environmental error: no available transport.")}function Ci(t,e){Nt.call(this),this.g=new ri(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Oi(this)}function xi(t){Se.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ai(){Te.call(this),this.status=1}function Oi(t){this.g=t}i=jn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_e.g(),this.C=this.u?be(this.u):be(_e),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const r=new qe(this.headers);i&&ze(i,(function(t,e){r.set(e,t)})),i=A(r.T()),n=d.FormData&&t instanceof d.FormData,!(0<=C(Hn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},i.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Yn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),jn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},i.cb=function(){Xn(this)},i.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Un(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ri.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ke(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=B(s),j(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fi(this,r,e),n=Xe(this.F),en(n,"RID",t),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),di(this,n),this.o&&s&&ni(n,this.o,s),Cn(this.i,r),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",e),en(n,"SID","null"),r.$=!0,Ne(r,n,null)):Ne(r,n,e),this.G=2}}else 3==this.G&&(t?hi(this,t):0==this.l.length||Tn(this.i)||hi(this))},i.Ga=function(){if(this.u=null,vi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=me(_(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),oi(this),vi(this))},i.ab=function(){null!=this.v&&(this.v=null,oi(this),mi(this),fe(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},i=Ei.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ki.prototype.g=function(t,e){return new Ci(t,e)},S(Ci,Nt),Ci.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ut(_(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Si(t,null,t.W),ui(t)},Ci.prototype.close=function(){si(this.g)},Ci.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ci(this.g,e)}else this.v?(e={},e.__data__=Lt(t),ci(this.g,e)):ci(this.g,t)},Ci.prototype.M=function(){this.g.j=null,delete this.j,si(this.g),delete this.g,Ci.Z.M.call(this)},S(xi,Se),S(Ai,Te),S(Oi,Ei),Oi.prototype.xa=function(){Rt(this.g,"a")},Oi.prototype.wa=function(t){Rt(this.g,new xi(t))},Oi.prototype.va=function(t){Rt(this.g,new Ai(t))},Oi.prototype.ua=function(){Rt(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,Ci.prototype.send=Ci.prototype.u,Ci.prototype.open=Ci.prototype.m,Ci.prototype.close=Ci.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,ve.COMPLETE="complete",we.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ni=l.createWebChannelTransport=function(){return new ki},Ri=l.getStatEventTarget=function(){return ue()},Di=l.ErrorCode=ge,Li=l.EventType=ve,Pi=l.Event=ae,$i=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=l.FetchXmlHttpFactory=Pn,Vi=l.WebChannel=we,Fi=l.XhrIo=jn;const Bi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ui.UNAUTHENTICATED=new Ui(null),Ui.GOOGLE_CREDENTIALS=new Ui("google-credentials-uid"),Ui.FIRST_PARTY=new Ui("first-party-uid"),Ui.MOCK_USER=new Ui("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ji="9.6.9";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new a.Yd("@firebase/firestore");function qi(){return zi.logLevel}function Hi(t){zi.setLogLevel(t)}function Zi(t,...e){if(zi.logLevel<=a["in"].DEBUG){const n=e.map(Gi);zi.debug(`Firestore (${ji}): ${t}`,...n)}}function Wi(t,...e){if(zi.logLevel<=a["in"].ERROR){const n=e.map(Gi);zi.error(`Firestore (${ji}): ${t}`,...n)}}function Ki(t,...e){if(zi.logLevel<=a["in"].WARN){const n=e.map(Gi);zi.warn(`Firestore (${ji}): ${t}`,...n)}}function Gi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+t;throw Wi(e),new Error(e)}function Yi(t,e){t||Xi()}function Qi(t,e){t||Xi()}function Ji(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class er extends c.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ui.UNAUTHENTICATED)))}shutdown(){}}class sr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class or{constructor(t){this.t=t,this.currentUser=Ui.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new nr,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new nr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Yi("string"==typeof e.accessToken),new ir(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yi(null===t||"string"==typeof t),new Ui(t)}}class ar{constructor(t,e,n){this.type="FirstParty",this.user=Ui.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ar(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ui.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ur{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Yi("string"==typeof t.token),this.p=t.token,new ur(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr.A=-1;class fr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=dr(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function pr(t,e){return t<e?-1:t>e?1:0}function mr(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}function gr(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return vr.fromMillis(Date.now())}static fromDate(t){return vr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new vr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pr(this.nanoseconds,t.nanoseconds):pr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new yr(t)}static min(){return new yr(new vr(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _r(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n){void 0===e?e=0:e>t.length&&Xi(),void 0===n?n=t.length-e:n>t.length-e&&Xi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ir.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ir?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Sr extends Ir{construct(t,e,n){return new Sr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new er(tr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Sr(e)}static emptyPath(){return new Sr([])}}const Tr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Er extends Ir{construct(t,e,n){return new Er(t,e,n)}static isValidIdentifier(t){return Tr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Er.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Er(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new er(tr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new er(tr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new er(tr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new er(tr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Er(e)}static emptyPath(){return new Er([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.fields=t,t.sort(Er.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new xr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new xr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xr.EMPTY_BYTE_STRING=new xr("");const Ar=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(Yi(!!t),"string"==typeof t){let e=0;const n=Ar.exec(t);if(Yi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Nr(t.seconds),nanos:Nr(t.nanos)}}function Nr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rr(t){return"string"==typeof t?xr.fromBase64String(t):xr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Lr(t){const e=t.mapValue.fields.__previous_value__;return Dr(e)?Lr(e):e}function Pr(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new vr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Mr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){return null==t}function Fr(t){return 0===t&&1/t==-1/0}function Br(t){return"number"==typeof t&&Number.isInteger(t)&&!Fr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.path=t}static fromPath(t){return new Ur(Sr.fromString(t))}static fromName(t){return new Ur(Sr.fromString(t).popFirst(5))}static empty(){return new Ur(Sr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Sr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Sr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ur(new Sr(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},zr={nullValue:"NULL_VALUE"};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dr(t)?4:rs(t)?9:10:Xi()}function Hr(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pr(t).isEqual(Pr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Or(t.timestampValue),i=Or(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Rr(t.bytesValue).isEqual(Rr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nr(t.geoPointValue.latitude)===Nr(e.geoPointValue.latitude)&&Nr(t.geoPointValue.longitude)===Nr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nr(t.integerValue)===Nr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nr(t.doubleValue),i=Nr(e.doubleValue);return n===i?Fr(n)===Fr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return mr(t.arrayValue.values||[],e.arrayValue.values||[],Hr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(br(n)!==br(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Hr(n[r],i[r])))return!1;return!0}(t,e);default:return Xi()}}function Zr(t,e){return void 0!==(t.values||[]).find((t=>Hr(t,e)))}function Wr(t,e){if(t===e)return 0;const n=qr(t),i=qr(e);if(n!==i)return pr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return pr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nr(t.integerValue||t.doubleValue),i=Nr(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Kr(t.timestampValue,e.timestampValue);case 4:return Kr(Pr(t),Pr(e));case 5:return pr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rr(t),i=Rr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=pr(n[r],i[r]);if(0!==t)return t}return pr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=pr(Nr(t.latitude),Nr(e.latitude));return 0!==n?n:pr(Nr(t.longitude),Nr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Wr(n[r],i[r]);if(t)return t}return pr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=pr(i[o],s[o]);if(0!==t)return t;const e=Wr(n[i[o]],r[s[o]]);if(0!==e)return e}return pr(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Xi()}}function Kr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return pr(t,e);const n=Or(t),i=Or(e),r=pr(n.seconds,i.seconds);return 0!==r?r:pr(n.nanos,i.nanos)}function Gr(t){return Xr(t)}function Xr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Or(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ur.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Xr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Xr(t.fields[r])}`;return n+"}"}(t.mapValue):Xi();var e,n}function Yr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qr(t){return!!t&&"integerValue"in t}function Jr(t){return!!t&&"arrayValue"in t}function ts(t){return!!t&&"nullValue"in t}function es(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ns(t){return!!t&&"mapValue"in t}function is(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=is(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=is(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function ss(t,e){return void 0===t?e:void 0===e||Wr(t,e)>0?t:e}function os(t,e){return void 0===t?e:void 0===e||Wr(t,e)<0?t:e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this.value=t}static empty(){return new as({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ns(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=is(e)}setAll(t){let e=Er.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=is(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());ns(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){wr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new as(is(this.value))}}function cs(t){const e=[];return wr(t.fields,((t,n)=>{const i=new Er([t]);if(ns(n)){const t=cs(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new kr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class us{constructor(t,e,n,i,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(t){return new us(t,0,yr.min(),yr.min(),as.empty(),0)}static newFoundDocument(t,e,n){return new us(t,1,e,yr.min(),n,0)}static newNoDocument(t,e){return new us(t,2,e,yr.min(),as.empty(),0)}static newUnknownDocument(t,e){return new us(t,3,e,yr.min(),as.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=as.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=as.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof us&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new us(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ls{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}function hs(t){return t.fields.find((t=>2===t.kind))}function ds(t){return t.fields.filter((t=>2!==t.kind))}ls.UNKNOWN_ID=-1;class fs{constructor(t,e){this.fieldPath=t,this.kind=e}}class ps{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new ps(0,ms.min())}}class ms{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ms(yr.min(),Ur.empty(),-1)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.P=null}}function vs(t,e=null,n=[],i=[],r=null,s=null,o=null){return new gs(t,e,n,i,r,s,o)}function ys(t){const e=Ji(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Gr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Gr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Gr(t))).join(",")),e.P=t}return e.P}function bs(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Gr(e.value)}`;var e})).join(", ")}]`),Vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Gr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Gr(t))).join(",")),`Target(${e})`}function ws(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ls(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Hr(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$s(t.startAt,e.startAt)&&$s(t.endAt,e.endAt)}function _s(t){return Ur.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Is(t,e){return t.filters.filter((t=>t instanceof Ss&&t.field.isEqual(e)))}class Ss extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Ts(t,e,n):"array-contains"===e?new xs(t,n):"in"===e?new As(t,n):"not-in"===e?new Os(t,n):"array-contains-any"===e?new Ns(t,n):new Ss(t,e,n)}static V(t,e,n){return"in"===e?new Es(t,n):new ks(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(Wr(e,this.value)):null!==e&&qr(this.value)===qr(e)&&this.v(Wr(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Xi()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ts extends Ss{constructor(t,e,n){super(t,e,n),this.key=Ur.fromName(n.referenceValue)}matches(t){const e=Ur.comparator(t.key,this.key);return this.v(e)}}class Es extends Ss{constructor(t,e){super(t,"in",e),this.keys=Cs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ks extends Ss{constructor(t,e){super(t,"not-in",e),this.keys=Cs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Cs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ur.fromName(t.referenceValue)))}class xs extends Ss{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Jr(e)&&Zr(e.arrayValue,this.value)}}class As extends Ss{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zr(this.value.arrayValue,e)}}class Os extends Ss{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zr(this.value.arrayValue,e)}}class Ns extends Ss{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Jr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zr(this.value.arrayValue,t)))}}class Rs{constructor(t,e){this.position=t,this.inclusive=e}}class Ds{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ls(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ps(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Ur.comparator(Ur.fromName(o.referenceValue),n.key):Wr(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function $s(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Vs(t,e,n,i,r,s,o,a){return new Ms(t,e,n,i,r,s,o,a)}function Fs(t){return new Ms(t)}function Bs(t){return!Vr(t.limit)&&"F"===t.limitType}function Us(t){return!Vr(t.limit)&&"L"===t.limitType}function js(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zs(t){for(const e of t.filters)if(e.S())return e.field;return null}function qs(t){return null!==t.collectionGroup}function Hs(t){const e=Ji(t);if(null===e.D){e.D=[];const t=zs(e),n=js(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Ds(t)),e.D.push(new Ds(Er.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ds(Er.keyField(),t))}}}return e.D}function Zs(t){const e=Ji(t);if(!e.C)if("F"===e.limitType)e.C=vs(e.path,e.collectionGroup,Hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Hs(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Ds(r.field,e))}const n=e.endAt?new Rs(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Rs(e.startAt.position,!e.startAt.inclusive):null;e.C=vs(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.C}function Ws(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ks(t,e){return ws(Zs(t),Zs(e))&&t.limitType===e.limitType}function Gs(t){return`${ys(Zs(t))}|lt:${t.limitType}`}function Xs(t){return`Query(target=${bs(Zs(t))}; limitType=${t.limitType})`}function Ys(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ur.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Ps(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Hs(t),e))&&!(t.endAt&&!function(t,e,n){const i=Ps(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Hs(t),e))}(t,e)}function Qs(t){return(e,n)=>{let i=!1;for(const r of Hs(t)){const t=Js(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Js(t,e,n){const i=t.field.isKeyField()?Ur.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Wr(i,r):Xi()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Xi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function eo(t){return{integerValue:""+t}}function no(t,e){return Br(e)?eo(e):to(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this._=void 0}}function ro(t,e,n){return t instanceof ao?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof co?uo(t,e):t instanceof lo?ho(t,e):function(t,e){const n=oo(t,e),i=po(n)+po(t.k);return Qr(n)&&Qr(t.k)?eo(i):to(t.M,i)}(t,e)}function so(t,e,n){return t instanceof co?uo(t,e):t instanceof lo?ho(t,e):n}function oo(t,e){return t instanceof fo?Qr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ao extends io{}class co extends io{constructor(t){super(),this.elements=t}}function uo(t,e){const n=mo(e);for(const i of t.elements)n.some((t=>Hr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class lo extends io{constructor(t){super(),this.elements=t}}function ho(t,e){let n=mo(e);for(const i of t.elements)n=n.filter((t=>!Hr(t,i)));return{arrayValue:{values:n}}}class fo extends io{constructor(t,e){super(),this.M=t,this.k=e}}function po(t){return Nr(t.integerValue||t.doubleValue)}function mo(t){return Jr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.field=t,this.transform=e}}function vo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof co&&e instanceof co||t instanceof lo&&e instanceof lo?mr(t.elements,e.elements,Hr):t instanceof fo&&e instanceof fo?Hr(t.k,e.k):t instanceof ao&&e instanceof ao}(t.transform,e.transform)}class yo{constructor(t,e){this.version=t,this.transformResults=e}}class bo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bo}static exists(t){return new bo(void 0,t)}static updateTime(t){return new bo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class _o{}function Io(t,e,n){t instanceof Co?function(t,e,n){const i=t.value.clone(),r=Oo(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof xo?function(t,e,n){if(!wo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Oo(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ao(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n){t instanceof Co?function(t,e,n){if(!wo(t.precondition,e))return;const i=t.value.clone(),r=No(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(ko(e),i).setHasLocalMutations()}(t,e,n):t instanceof xo?function(t,e,n){if(!wo(t.precondition,e))return;const i=No(t.fieldTransforms,n,e),r=e.data;r.setAll(Ao(t)),r.setAll(i),e.convertToFoundDocument(ko(e),r).setHasLocalMutations()}(t,e,n):function(t,e){wo(t.precondition,e)&&e.convertToNoDocument(yr.min())}(t,e)}function To(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=oo(i.transform,t||null);null!=r&&(null==n&&(n=as.empty()),n.set(i.field,r))}return n||null}function Eo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&mr(t,e,((t,e)=>vo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ko(t){return t.isFoundDocument()?t.version:yr.min()}class Co extends _o{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class xo extends _o{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ao(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Oo(t,e,n){const i=new Map;Yi(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,so(o,a,n[r]))}return i}function No(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,ro(t,s,e))}return i}class Ro extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Do extends _o{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Po,$o;function Mo(t){switch(t){default:return Xi();case tr.CANCELLED:case tr.UNKNOWN:case tr.DEADLINE_EXCEEDED:case tr.RESOURCE_EXHAUSTED:case tr.INTERNAL:case tr.UNAVAILABLE:case tr.UNAUTHENTICATED:return!1;case tr.INVALID_ARGUMENT:case tr.NOT_FOUND:case tr.ALREADY_EXISTS:case tr.PERMISSION_DENIED:case tr.FAILED_PRECONDITION:case tr.ABORTED:case tr.OUT_OF_RANGE:case tr.UNIMPLEMENTED:case tr.DATA_LOSS:return!0}}function Vo(t){if(void 0===t)return Wi("GRPC error has no .code"),tr.UNKNOWN;switch(t){case Po.OK:return tr.OK;case Po.CANCELLED:return tr.CANCELLED;case Po.UNKNOWN:return tr.UNKNOWN;case Po.DEADLINE_EXCEEDED:return tr.DEADLINE_EXCEEDED;case Po.RESOURCE_EXHAUSTED:return tr.RESOURCE_EXHAUSTED;case Po.INTERNAL:return tr.INTERNAL;case Po.UNAVAILABLE:return tr.UNAVAILABLE;case Po.UNAUTHENTICATED:return tr.UNAUTHENTICATED;case Po.INVALID_ARGUMENT:return tr.INVALID_ARGUMENT;case Po.NOT_FOUND:return tr.NOT_FOUND;case Po.ALREADY_EXISTS:return tr.ALREADY_EXISTS;case Po.PERMISSION_DENIED:return tr.PERMISSION_DENIED;case Po.FAILED_PRECONDITION:return tr.FAILED_PRECONDITION;case Po.ABORTED:return tr.ABORTED;case Po.OUT_OF_RANGE:return tr.OUT_OF_RANGE;case Po.UNIMPLEMENTED:return tr.UNIMPLEMENTED;case Po.DATA_LOSS:return tr.DATA_LOSS;default:return Xi()}}($o=Po||(Po={}))[$o.OK=0]="OK",$o[$o.CANCELLED=1]="CANCELLED",$o[$o.UNKNOWN=2]="UNKNOWN",$o[$o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$o[$o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$o[$o.NOT_FOUND=5]="NOT_FOUND",$o[$o.ALREADY_EXISTS=6]="ALREADY_EXISTS",$o[$o.PERMISSION_DENIED=7]="PERMISSION_DENIED",$o[$o.UNAUTHENTICATED=16]="UNAUTHENTICATED",$o[$o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$o[$o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$o[$o.ABORTED=10]="ABORTED",$o[$o.OUT_OF_RANGE=11]="OUT_OF_RANGE",$o[$o.UNIMPLEMENTED=12]="UNIMPLEMENTED",$o[$o.INTERNAL=13]="INTERNAL",$o[$o.UNAVAILABLE=14]="UNAVAILABLE",$o[$o.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){wr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return _r(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e){this.comparator=t,this.root=e||jo.EMPTY}insert(t,e){return new Bo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,jo.BLACK,null,null))}remove(t){return new Bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,jo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Uo(this.root,t,this.comparator,!0)}}class Uo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class jo{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:jo.RED,this.left=null!=i?i:jo.EMPTY,this.right=null!=r?r:jo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new jo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return jo.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,jo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,jo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xi();if(this.right.isRed())throw Xi();const t=this.left.check();if(t!==this.right.check())throw Xi();return t+(this.isRed()?0:1)}}jo.EMPTY=null,jo.RED=!0,jo.BLACK=!1,jo.EMPTY=new class{constructor(){this.size=0}get key(){throw Xi()}get value(){throw Xi()}get color(){throw Xi()}get left(){throw Xi()}get right(){throw Xi()}copy(t,e,n,i,r){return this}insert(t,e,n){return new jo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(t){this.comparator=t,this.data=new Bo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(t){return new qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof zo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new zo(this.comparator);return e.data=t,e}}class qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ho(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Bo(Ur.comparator);function Wo(){return Zo}const Ko=new Bo(Ur.comparator);function Go(){return Ko}function Xo(){return new Fo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Yo=new Bo(Ur.comparator),Qo=new zo(Ur.comparator);function Jo(...t){let e=Qo;for(const n of t)e=e.add(n);return e}const ta=new zo(pr);function ea(){return ta}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,ia.createSynthesizedTargetChangeForCurrentChange(t,e)),new na(yr.min(),n,ea(),Wo(),Jo())}}class ia{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new ia(xr.EMPTY_BYTE_STRING,e,Jo(),Jo(),Jo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.$=i}}class sa{constructor(t,e){this.targetId=t,this.F=e}}class oa{constructor(t,e,n=xr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class aa{constructor(){this.B=0,this.L=la(),this.q=xr.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.q=t)}H(){let t=Jo(),e=Jo(),n=Jo();return this.L.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Xi()}})),new ia(this.q,this.U,t,e,n)}J(){this.K=!1,this.L=la()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class ca{constructor(t){this.nt=t,this.st=new Map,this.it=Wo(),this.rt=ua(),this.ot=new zo(pr)}at(t){for(const e of t.O)t.$&&t.$.isFoundDocument()?this.ut(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:Xi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.F.count,i=this.wt(e);if(i){const t=i.target;if(_s(t))if(0===n){const n=new Ur(t.path);this.ct(e,n,us.newNoDocument(n,yr.min()))}else Yi(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const r=this.wt(i);if(r){if(n.current&&_s(r.target)){const e=new Ur(r.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,us.newNoDocument(e,t))}n.j&&(e.set(i,n.H()),n.J())}}));let n=Jo();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new na(t,e,this.ot,this.it,n);return this.it=Wo(),this.rt=ua(),this.ot=new zo(pr),i}ut(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new aa,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new zo(pr),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||Zi("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new aa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function ua(){return new Bo(Ur.comparator)}function la(){return new Bo(Ur.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),da=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class fa{constructor(t,e){this.databaseId=t,this.N=e}}function pa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ma(t,e){return t.N?e.toBase64():e.toUint8Array()}function ga(t,e){return pa(t,e.toTimestamp())}function va(t){return Yi(!!t),yr.fromTimestamp(function(t){const e=Or(t);return new vr(e.seconds,e.nanos)}(t))}function ya(t,e){return function(t){return new Sr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ba(t){const e=Sr.fromString(t);return Yi(Ha(e)),e}function wa(t,e){return ya(t.databaseId,e.path)}function _a(t,e){const n=ba(e);if(n.get(1)!==t.databaseId.projectId)throw new er(tr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new er(tr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ur(Ea(n))}function Ia(t,e){return ya(t.databaseId,e)}function Sa(t){const e=ba(t);return 4===e.length?Sr.emptyPath():Ea(e)}function Ta(t){return new Sr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ea(t){return Yi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ka(t,e,n){return{name:wa(t,e),fields:n.value.mapValue.fields}}function Ca(t,e,n){const i=_a(t,e.name),r=va(e.updateTime),s=new as({mapValue:{fields:e.fields}}),o=us.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function xa(t,e){return"found"in e?function(t,e){Yi(!!e.found),e.found.name,e.found.updateTime;const n=_a(t,e.found.name),i=va(e.found.updateTime),r=new as({mapValue:{fields:e.found.fields}});return us.newFoundDocument(n,i,r)}(t,e):"missing"in e?function(t,e){Yi(!!e.missing),Yi(!!e.readTime);const n=_a(t,e.missing),i=va(e.readTime);return us.newNoDocument(n,i)}(t,e):Xi()}function Aa(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Xi()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.N?(Yi(void 0===e||"string"==typeof e),xr.fromBase64String(e||"")):(Yi(void 0===e||e instanceof Uint8Array),xr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?tr.UNKNOWN:Vo(t.code);return new er(e,t.message||"")}(o);n=new oa(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=_a(t,i.document.name),s=va(i.document.updateTime),o=new as({mapValue:{fields:i.document.fields}}),a=us.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new ra(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=_a(t,i.document),s=i.readTime?va(i.readTime):yr.min(),o=us.newNoDocument(r,s),a=i.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=_a(t,i.document),s=i.removedTargetIds||[];n=new ra([],s,r,null)}else{if(!("filter"in e))return Xi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Lo(i),s=t.targetId;n=new sa(s,r)}}return n}function Oa(t,e){let n;if(e instanceof Co)n={update:ka(t,e.key,e.value)};else if(e instanceof Ro)n={delete:wa(t,e.key)};else if(e instanceof xo)n={update:ka(t,e.key,e.data),updateMask:qa(e.fieldMask)};else{if(!(e instanceof Do))return Xi();n={verify:wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ao)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof co)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fo)return{fieldPath:e.field.canonicalString(),increment:n.k};throw Xi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ga(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Xi()}(t,e.precondition)),n}function Na(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?bo.updateTime(va(t.updateTime)):void 0!==t.exists?bo.exists(t.exists):bo.none()}(e.currentDocument):bo.none(),i=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Yi("REQUEST_TIME"===e.setToServerValue),n=new ao;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new co(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new lo(t)}else"increment"in e?n=new fo(t,e.increment):Xi();const i=Er.fromServerFormat(e.fieldPath);return new go(i,n)}(t,e))):[];if(e.update){e.update.name;const r=_a(t,e.update.name),s=new as({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new kr(e.map((t=>Er.fromServerFormat(t))))}(e.updateMask);return new xo(r,s,t,n,i)}return new Co(r,s,n,i)}if(e.delete){const i=_a(t,e.delete);return new Ro(i,n)}if(e.verify){const i=_a(t,e.verify);return new Do(i,n)}return Xi()}function Ra(t,e){return t&&t.length>0?(Yi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?va(t.updateTime):va(e);return n.isEqual(yr.min())&&(n=va(e)),new yo(n,t.transformResults||[])}(t,e)))):[]}function Da(t,e){return{documents:[Ia(t,e.path)]}}function La(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Ia(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ia(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(es(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NAN"}};if(ts(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(es(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NAN"}};if(ts(t.value))return{unaryFilter:{field:Ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(t.field),op:Fa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ba(t.field),direction:Va(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||Vr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Pa(t){let e=Sa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Yi(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Ma(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ds(Ua(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Rs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Rs(n,e)}(n.endAt)),Vs(e,r,o,s,a,"F",c,u)}function $a(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Xi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ma(t){return t?void 0!==t.unaryFilter?[za(t)]:void 0!==t.fieldFilter?[ja(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ma(t))).reduce(((t,e)=>t.concat(e))):Xi():[]}function Va(t){return ha[t]}function Fa(t){return da[t]}function Ba(t){return{fieldPath:t.canonicalString()}}function Ua(t){return Er.fromServerFormat(t.fieldPath)}function ja(t){return Ss.create(Ua(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Xi()}}(t.fieldFilter.op),t.fieldFilter.value)}function za(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ua(t.unaryFilter.field);return Ss.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ua(t.unaryFilter.field);return Ss.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ua(t.unaryFilter.field);return Ss.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ua(t.unaryFilter.field);return Ss.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Xi()}}function qa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ha(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ka(e)),e=Wa(t.get(n),e);return Ka(e)}function Wa(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Ka(t){return t+""}function Ga(t){const e=t.length;if(Yi(e>=2),2===e)return Yi(""===t.charAt(0)&&""===t.charAt(1)),Sr.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&Xi(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=t.substring(s,e),r+="\0";break;case"":r+=t.substring(s,e+1);break;default:Xi()}s=e+2}return new Sr(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=["userId","batchId"];function Ya(t,e){return[t,Za(e)]}function Qa(t,e,n){return[t,Za(e),n]}const Ja={},tc=["parentPath","readTime"],ec=["canonicalId","targetId"],nc=["targetId","path"],ic=["path","targetId"],rc=["collectionId","parent"],sc=["indexId","uid"],oc=["uid","sequenceNumber"],ac=["indexId","uid","arrayValue","directionalValue","documentKey"],cc=["indexId","uid","documentKey"],uc=["userId","collectionPath","documentId"],lc=["userId","collectionPath","largestBatchId"],hc=["userId","collectionGroup","largestBatchId"],dc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fc=[...dc,"documentOverlays"],pc=[...fc,"indexConfiguration","indexState","indexEntries"],mc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Xi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new vc(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof vc?e:vc.resolve(e)}catch(t){return vc.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):vc.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):vc.reject(e)}static resolve(t){return new vc(((e,n)=>{e(t)}))}static reject(t){return new vc(((e,n)=>{n(t)}))}static waitFor(t){return new vc(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=vc.resolve(!1);for(const n of t)e=e.next((t=>t?vc.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.At=new nr,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{e.error?this.At.reject(new _c(t,e.error)):this.At.resolve()},this.transaction.onerror=e=>{const n=kc(e.target.error);this.At.reject(new _c(t,n))}}static open(t,e,n,i){try{return new yc(e,t.transaction(i,n))}catch(t){throw new _c(e,t)}}get Rt(){return this.At.promise}abort(t){t&&this.At.reject(t),this.aborted||(Zi("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Sc(e)}}class bc{constructor(t,e,n){this.name=t,this.version=e,this.Pt=n,12.2===bc.Vt((0,c.z$)())&&Wi("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Zi("SimpleDb","Removing database:",t),Tc(window.indexedDB.deleteDatabase(t)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(bc.St())return!0;const t=(0,c.z$)(),e=bc.Vt(t),n=0<e&&e<10,i=bc.Dt(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static St(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/"})||void 0===t?void 0:t.Ct)}static xt(t,e){return t.store(e)}static Vt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(t){return this.db||(Zi("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{const n=t.target.result;e(n)},i.onblocked=()=>{n(new _c(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=e=>{const i=e.target.error;"VersionError"===i.name?n(new er(tr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new er(tr.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new _c(t,i))},i.onupgradeneeded=t=>{Zi("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Pt.kt(e,i.transaction,t.oldVersion,this.version).next((()=>{Zi("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(t){this.Mt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const r="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Nt(t);const e=yc.open(this.db,t,r?"readonly":"readwrite",n),s=i(e).next((t=>(e.bt(),t))).catch((t=>(e.abort(t),vc.reject(t)))).toPromise();return s.catch((()=>{})),await e.Rt,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(Zi("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wc{constructor(t){this.$t=t,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(t){this.$t=t}done(){this.Ft=!0}qt(t){this.Bt=t}delete(){return Tc(this.$t.delete())}}class _c extends er{constructor(t,e){super(tr.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ic(t){return"IndexedDbTransactionError"===t.name}class Sc{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(Zi("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(Zi("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Tc(n)}add(t){return Zi("SimpleDb","ADD",this.store.name,t,t),Tc(this.store.add(t))}get(t){return Tc(this.store.get(t)).next((e=>(void 0===e&&(e=null),Zi("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return Zi("SimpleDb","DELETE",this.store.name,t),Tc(this.store.delete(t))}count(){return Zi("SimpleDb","COUNT",this.store.name),Tc(this.store.count())}Ut(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.Kt(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new vc(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}Gt(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new vc(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}Qt(t,e){Zi("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.jt=!1;const i=this.cursor(n);return this.Kt(i,((t,e,n)=>n.delete()))}Wt(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.Kt(i,e)}zt(t){const e=this.cursor({});return new vc(((n,i)=>{e.onerror=t=>{const e=kc(t.target.error);i(e)},e.onsuccess=e=>{const i=e.target.result;i?t(i.primaryKey,i.value).next((t=>{t?i.continue():n()})):n()}}))}Kt(t,e){const n=[];return new vc(((i,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void i();const s=new wc(r),o=e(r.primaryKey,r.value,s);if(o instanceof vc){const t=o.catch((t=>(s.done(),vc.reject(t))));n.push(t)}s.isDone?i():null===s.Lt?r.continue():r.continue(s.Lt)}})).next((()=>vc.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.jt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Tc(t){return new vc(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=kc(t.target.error);n(e)}}))}let Ec=!1;function kc(t){const e=bc.Vt((0,c.z$)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new er("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ec||(Ec=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends gc{constructor(t,e){super(),this.Ht=t,this.currentSequenceNumber=e}}function xc(t,e){const n=Ji(t);return bc.xt(n.Ht,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Io(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&So(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&So(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(yr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Jo())}isEqual(t){return this.batchId===t.batchId&&mr(this.mutations,t.mutations,((t,e)=>Eo(t,e)))&&mr(this.baseMutations,t.baseMutations,((t,e)=>Eo(t,e)))}}class Oc{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Yi(t.mutations.length===n.length);let i=Yo;const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Oc(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e,n,i,r=yr.min(),s=yr.min(),o=xr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Rc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Rc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Rc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.Jt=t}}function Lc(t,e){let n;if(e.document)n=Ca(t.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=Ur.fromSegments(e.noDocument.path),i=Fc(e.noDocument.readTime);n=us.newNoDocument(t,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Xi();{const t=Ur.fromSegments(e.unknownDocument.path),i=Fc(e.unknownDocument.version);n=us.newUnknownDocument(t,i)}}return e.readTime&&n.setReadTime(Mc(e.readTime)),n}function Pc(t,e){const n=e.key.path.popLast().toArray(),i=$c(e.readTime);if(e.isFoundDocument()){const r=function(t,e){return{name:wa(t,e.key),fields:e.data.value.mapValue.fields,updateTime:pa(t,e.version.toTimestamp())}}(t.Jt,e);return{document:r,hasCommittedMutations:e.hasCommittedMutations,readTime:i,parentPath:n}}if(e.isNoDocument()){const t=e.key.path.toArray(),r=e.hasCommittedMutations;return{noDocument:{path:t,readTime:Vc(e.version)},hasCommittedMutations:r,readTime:i,parentPath:n}}return e.isUnknownDocument()?{unknownDocument:{path:e.key.path.toArray(),version:Vc(e.version)},hasCommittedMutations:!0,readTime:i,parentPath:n}:Xi()}function $c(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Mc(t){const e=new vr(t[0],t[1]);return yr.fromTimestamp(e)}function Vc(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Fc(t){const e=new vr(t.seconds,t.nanoseconds);return yr.fromTimestamp(e)}function Bc(t,e){const n=(e.baseMutations||[]).map((e=>Na(t.Jt,e)));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map((e=>Na(t.Jt,e))),r=vr.fromMillis(e.localWriteTimeMs);return new Ac(e.batchId,r,n,i)}function Uc(t){const e=Fc(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Fc(t.lastLimboFreeSnapshotVersion):yr.min();let i;var r;return void 0!==t.query.documents?(Yi(1===(r=t.query).documents.length),i=Zs(Fs(Sa(r.documents[0])))):i=function(t){return Zs(Pa(t))}(t.query),new Rc(i,t.targetId,0,t.lastListenSequenceNumber,e,n,xr.fromBase64String(t.resumeToken))}function jc(t,e){const n=Vc(e.snapshotVersion),i=Vc(e.lastLimboFreeSnapshotVersion);let r;r=_s(e.target)?Da(t.Jt,e.target):La(t.Jt,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ys(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function zc(t){const e=Pa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ws(e,e.limit,"L"):e}function qc(t,e){return new Nc(e.largestBatchId,Na(t.Jt,e.overlayMutation))}function Hc(t,e){const n=e.path.lastSegment();return[t,Za(e.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{getBundleMetadata(t,e){return Wc(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:Fc(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return Wc(t).put({bundleId:(n=e).id,createTime:Vc(va(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Kc(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:zc(e.bundledQuery),readTime:Fc(e.readTime)};var e}))}saveNamedQuery(t,e){return Kc(t).put(function(t){return{name:t.name,readTime:Vc(va(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Wc(t){return xc(t,"bundles")}function Kc(t){return xc(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.M=t,this.userId=e}static Yt(t,e){const n=e.uid||"";return new Gc(t,n)}getOverlay(t,e){return Xc(t).get(Hc(this.userId,e)).next((t=>t?qc(this.M,t):null))}saveOverlays(t,e,n){const i=[];return n.forEach(((n,r)=>{const s=new Nc(e,r);i.push(this.Xt(t,s))})),vc.waitFor(i)}removeOverlaysForBatchId(t,e,n){const i=new Set;e.forEach((t=>i.add(Za(t.getCollectionPath()))));const r=[];return i.forEach((e=>{const i=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);r.push(Xc(t).Qt("collectionPathOverlayIndex",i))})),vc.waitFor(r)}getOverlaysForCollection(t,e,n){const i=Xo(),r=Za(e),s=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Xc(t).Ut("collectionPathOverlayIndex",s).next((t=>{for(const e of t){const t=qc(this.M,e);i.set(t.getKey(),t)}return i}))}getOverlaysForCollectionGroup(t,e,n,i){const r=Xo();let s;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Xc(t).Wt({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=qc(this.M,e);r.size()<i||o.largestBatchId===s?(r.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>r))}Xt(t,e){return Xc(t).put(function(t,e,n){const[i,r,s]=Hc(e,n.mutation.key);return{userId:e,collectionPath:r,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Oa(t.Jt,n.mutation)}}(this.M,this.userId,e))}}function Xc(t){return xc(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Nr(t.integerValue));else if("doubleValue"in t){const n=Nr(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),Fr(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ae(Rr(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ue(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?rs(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):Xi()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const i of Object.keys(n))this.re(i,e),this.te(n[i],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const i of n)this.te(i,e)}ue(t,e){this.ne(e,37),Ur.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}}function Qc(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Jc(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const i=Qc(255&t[n]);if(e+=i,8!==i)break}return e}(t);return Math.ceil(e/8)}Yc.fe=new Yc;class tu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this._e(n.value),n=e.next();this.we()}me(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.ge(n.value),n=e.next();this.ye()}pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this._e(t);else if(t<2048)this._e(960|t>>>6),this._e(128|63&t);else if(e<"\ud800"||"\udbff"<e)this._e(480|t>>>12),this._e(128|63&t>>>6),this._e(128|63&t);else{const t=e.codePointAt(0);this._e(240|t>>>18),this._e(128|63&t>>>12),this._e(128|63&t>>>6),this._e(128|63&t)}}this.we()}Ie(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.ge(t);else if(t<2048)this.ge(960|t>>>6),this.ge(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.ge(480|t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t);else{const t=e.codePointAt(0);this.ge(240|t>>>18),this.ge(128|63&t>>>12),this.ge(128|63&t>>>6),this.ge(128|63&t)}}this.ye()}Te(t){const e=this.Ee(t),n=Jc(e);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=255&e[i]}Re(t){const e=this.Ee(t),n=Jc(e);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(t){this.Ae(t.length),this.buffer.set(t,this.position),this.position+=t.length}Se(){return this.buffer.slice(0,this.position)}Ee(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let i=1;i<e.length;++i)e[i]^=n?255:0;return e}_e(t){const e=255&t;0===e?(this.Pe(0),this.Pe(255)):255===e?(this.Pe(255),this.Pe(0)):this.Pe(e)}ge(t){const e=255&t;0===e?(this.ve(0),this.ve(255)):255===e?(this.ve(255),this.ve(0)):this.ve(t)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(t){this.Ae(1),this.buffer[this.position++]=t}ve(t){this.Ae(1),this.buffer[this.position++]=~t}Ae(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class eu{constructor(t){this.De=t}ae(t){this.De.de(t)}ie(t){this.De.pe(t)}se(t){this.De.Te(t)}ee(){this.De.be()}}class nu{constructor(t){this.De=t}ae(t){this.De.me(t)}ie(t){this.De.Ie(t)}se(t){this.De.Re(t)}ee(){this.De.Ve()}}class iu{constructor(){this.De=new tu,this.Ce=new eu(this.De),this.xe=new nu(this.De)}seed(t){this.De.seed(t)}Ne(t){return 0===t?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,e,n,i){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=i}ke(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ru(this.indexId,this.documentKey,this.arrayValue,n)}}function su(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=ou(t.arrayValue,e.arrayValue),0!==n?n:(n=ou(t.directionalValue,e.directionalValue),0!==n?n:Ur.comparator(t.documentKey,e.documentKey)))}function ou(t,e){for(let n=0;n<t.length&&n<e.length;++n){const i=t[n]-e[n];if(0!==i)return i}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Me=t.orderBy,this.Oe=[];for(const e of t.filters){const t=e;t.S()?this.$e=t:this.Oe.push(t)}}Fe(t){const e=hs(t);if(void 0!==e&&!this.Be(e))return!1;const n=ds(t);let i=0,r=0;for(;i<n.length&&this.Be(n[i]);++i);if(i===n.length)return!0;if(void 0!==this.$e){const t=n[i];if(!this.Le(this.$e,t)||!this.qe(this.Me[r++],t))return!1;++i}for(;i<n.length;++i){const t=n[i];if(r>=this.Me.length||!this.qe(this.Me[r++],t))return!1}return!0}Be(t){for(const e of this.Oe)if(this.Le(e,t))return!0;return!1}Le(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}qe(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Ue=new uu}addToCollectionParentIndex(t,e){return this.Ue.add(e),vc.resolve()}getCollectionParents(t,e){return vc.resolve(this.Ue.getEntries(e))}addFieldIndex(t,e){return vc.resolve()}deleteFieldIndex(t,e){return vc.resolve()}getDocumentsMatchingTarget(t,e){return vc.resolve(null)}getFieldIndex(t,e){return vc.resolve(null)}getFieldIndexes(t,e){return vc.resolve([])}getNextCollectionGroupToUpdate(t){return vc.resolve(null)}updateCollectionGroup(t,e,n){return vc.resolve()}updateIndexEntries(t,e){return vc.resolve()}}class uu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new zo(Sr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new zo(Sr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Uint8Array(0);class hu{constructor(t){this.user=t,this.Ke=new uu,this.Ge=new Fo((t=>ys(t)),((t,e)=>ws(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Ke.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener((()=>{this.Ke.add(e)}));const r={collectionId:n,parent:Za(i)};return du(t).put(r)}return vc.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[gr(e),""],!1,!0);return du(t).Ut(i).next((t=>{for(const i of t){if(i.collectionId!==e)break;n.push(Ga(i.parent))}return n}))}addFieldIndex(t,e){const n=pu(t),i=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);return delete i.indexId,n.add(i).next()}deleteFieldIndex(t,e){const n=pu(t),i=mu(t),r=fu(t);return n.delete(e.indexId).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=fu(t);let i=!0;const r=new Map;return vc.forEach(this.Qe(e),(e=>this.getFieldIndex(t,e).next((t=>{i&&(i=!!t),r.set(e,t)})))).next((()=>{if(i){let t=Jo();return vc.forEach(r,((i,r)=>{var s;Zi("IndexedDbIndexManager",`Using index ${s=i,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${ys(e)}`);const o=function(t,e){const n=hs(e);if(void 0===n)return null;for(const i of Is(t,n.fieldPath))switch(i.op){case"array-contains-any":return i.value.arrayValue.values||[];case"array-contains":return[i.value]}return null}(r,i),a=function(t,e){const n=new Map;for(const i of ds(e))for(const e of Is(t,i.fieldPath))switch(e.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(r,i),c=function(t,e){const n=[];let i=!0;for(const s of ds(e)){let e,o=!0;for(const n of Is(t,s.fieldPath)){let t,i=!0;switch(n.op){case"<":case"<=":t="nullValue"in(r=n.value)?zr:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Yr(Mr.empty(),Ur.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:Xi();break;case"==":case"in":case">=":t=n.value;break;case">":t=n.value,i=!1;break;case"!=":case"not-in":t=zr}ss(e,t)===t&&(e=t,o=i)}if(null!==t.startAt)for(let n=0;n<t.orderBy.length;++n)if(t.orderBy[n].field.isEqual(s.fieldPath)){const i=t.startAt.position[n];ss(e,i)===i&&(e=i,o=t.startAt.inclusive);break}if(void 0===e)return null;n.push(e),i&&(i=o)}var r;return new Rs(n,i)}(r,i),u=function(t,e){const n=[];let i=!0;for(const s of ds(e)){let e,o=!0;for(const n of Is(t,s.fieldPath)){let t,i=!0;switch(n.op){case">=":case">":t="nullValue"in(r=n.value)?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Yr(Mr.empty(),Ur.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?jr:Xi(),i=!1;break;case"==":case"in":case"<=":t=n.value;break;case"<":t=n.value,i=!1;break;case"!=":case"not-in":t=jr}os(e,t)===t&&(e=t,o=i)}if(null!==t.endAt)for(let n=0;n<t.orderBy.length;++n)if(t.orderBy[n].field.isEqual(s.fieldPath)){const i=t.endAt.position[n];os(e,i)===i&&(e=i,o=t.endAt.inclusive);break}if(void 0===e)return null;n.push(e),i&&(i=o)}var r;return new Rs(n,i)}(r,i),l=this.je(i,r,c),h=this.je(i,r,u),d=this.We(i,r,a),f=this.ze(i.indexId,o,l,!!c&&c.inclusive,h,!!u&&u.inclusive,d);return vc.forEach(f,(i=>n.Gt(i,e.limit).next((e=>{e.forEach((e=>{t=t.add(new Ur(Ga(e.documentKey)))}))}))))})).next((()=>t))}return vc.resolve(null)}))}Qe(t){let e=this.Ge.get(t);return e||(e=[t],this.Ge.set(t,e),e)}ze(t,e,n,i,r,s,o){const a=(null!=e?e.length:1)*Math.max(null!=n?n.length:1,null!=r?r.length:1),c=a/(null!=e?e.length:1),u=[];for(let l=0;l<a;++l){const a=e?this.He(e[l/c]):lu,h=n?this.Je(t,a,n[l%c],i):this.Ye(t),d=r?this.Xe(t,a,r[l%c],s):this.Ye(t+1);u.push(...this.createRange(h,d,o.map((e=>this.Je(t,a,e,!0)))))}return u}Je(t,e,n,i){const r=new ru(t,Ur.empty(),e,n);return i?r:r.ke()}Xe(t,e,n,i){const r=new ru(t,Ur.empty(),e,n);return i?r.ke():r}Ye(t){return new ru(t,Ur.empty(),lu,lu)}getFieldIndex(t,e){const n=new au(e),i=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next((t=>{const e=t.filter((t=>n.Fe(t)));return e.sort(((t,e)=>e.fields.length-t.fields.length)),e.length>0?e[0]:null}))}Ze(t,e){const n=new iu;for(const i of ds(t)){const t=e.data.field(i.fieldPath);if(null==t)return null;const r=n.Ne(i.kind);Yc.fe.Zt(t,r)}return n.Se()}He(t){const e=new iu;return Yc.fe.Zt(t,e.Ne(0)),e.Se()}We(t,e,n){if(null===n)return[];let i=[];i.push(new iu);let r=0;for(const s of ds(t)){const t=n[r++];for(const n of i)if(this.tn(e,s.fieldPath)&&Jr(t))i=this.en(i,s,t);else{const e=n.Ne(s.kind);Yc.fe.Zt(t,e)}}return this.nn(i)}je(t,e,n){return null==n?null:this.We(t,e,n.position)}nn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Se();return e}en(t,e,n){const i=[...t],r=[];for(const s of n.arrayValue.values||[])for(const t of i){const n=new iu;n.seed(t.Se()),Yc.fe.Zt(s,n.Ne(e.kind)),r.push(n)}return r}tn(t,e){return!!t.filters.find((t=>t instanceof Ss&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=pu(t),i=mu(t);return(e?n.Ut("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.Ut()).next((t=>{const e=[];return vc.forEach(t,(t=>i.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new ps(e.sequenceNumber,new ms(Fc(e.readTime),new Ur(Ga(e.documentKey)),e.largestBatchId)):ps.empty(),i=t.fields.map((([t,e])=>new fs(Er.fromServerFormat(t),e)));return new ls(t.indexId,t.collectionGroup,i,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:pr(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const i=pu(t),r=mu(t);return this.sn(t).next((t=>i.Ut("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>vc.forEach(e,(e=>r.put(function(t,e,n,i){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Vc(i.readTime),documentKey:Za(i.documentKey.path),largestBatchId:i.largestBatchId}}(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return vc.forEach(e,((e,i)=>{const r=n.get(e.collectionGroup);return(r?vc.resolve(r):this.getFieldIndexes(t,e.collectionGroup)).next((r=>(n.set(e.collectionGroup,r),vc.forEach(r,(n=>this.rn(t,e,n).next((e=>{const r=this.on(i,n);return e.isEqual(r)?vc.resolve():this.an(t,i,e,r)})))))))}))}un(t,e,n){return fu(t).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,documentKey:Za(e.key.path)})}cn(t,e,n){return fu(t).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,Za(e.key.path)])}rn(t,e,n){const i=fu(t);let r=new zo(su);return i.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,Za(e.path)])},((t,i)=>{r=r.add(new ru(n.indexId,e,i.arrayValue,i.directionalValue))})).next((()=>r))}on(t,e){let n=new zo(su);const i=this.Ze(e,t);if(null==i)return n;const r=hs(e);if(null!=r){const s=t.data.field(r.fieldPath);if(Jr(s))for(const r of s.arrayValue.values||[])n=n.add(new ru(e.indexId,t.key,this.He(r),i))}else n=n.add(new ru(e.indexId,t.key,lu,i));return n}an(t,e,n,i){Zi("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const r=[];return function(t,e,n,i,r){const s=t.getIterator(),o=e.getIterator();let a=Ho(s),c=Ho(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const i=n(a,c);i<0?e=!0:i>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(i(c),c=Ho(o)):e?(r(a),a=Ho(s)):(a=Ho(s),c=Ho(o))}}(n,i,su,(n=>{r.push(this.un(t,e,n))}),(n=>{r.push(this.cn(t,e,n))})),vc.waitFor(r)}sn(t){let e=1;return mu(t).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,i)=>{i.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>su(t,e))).filter(((t,e,n)=>!e||0!==su(t,n[e-1])));const i=[];i.push(t);for(const s of n){const n=su(s,t),r=su(s,e);if(0===n)i[0]=t.ke();else if(n>0&&r<0)i.push(s),i.push(s.ke());else if(r>0)break}i.push(e);const r=[];for(let s=0;s<i.length;s+=2)r.push(IDBKeyRange.bound([i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,""],[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,""]));return r}}function du(t){return xc(t,"collectionParents")}function fu(t){return xc(t,"indexEntries")}function pu(t){return xc(t,"indexConfiguration")}function mu(t){return xc(t,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vu{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new vu(t,vu.DEFAULT_COLLECTION_PERCENTILE,vu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e,n){const i=t.store("mutations"),r=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Wt({range:o},((t,e,n)=>(a++,n.delete())));s.push(c.next((()=>{Yi(1===a)})));const u=[];for(const l of n.mutations){const t=Qa(e,l.key.path,n.batchId);s.push(r.delete(t)),u.push(l.key)}return vc.waitFor(s).next((()=>u))}function bu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Xi();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vu.DEFAULT_COLLECTION_PERCENTILE=10,vu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vu.DEFAULT=new vu(41943040,vu.DEFAULT_COLLECTION_PERCENTILE,vu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vu.DISABLED=new vu(-1,0,0);class wu{constructor(t,e,n,i){this.userId=t,this.M=e,this.indexManager=n,this.referenceDelegate=i,this.hn={}}static Yt(t,e,n,i){Yi(""!==t.uid);const r=t.isAuthenticated()?t.uid:"";return new wu(r,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Iu(t).Wt({index:"userMutationsIndex",range:n},((t,n,i)=>{e=!1,i.done()})).next((()=>e))}addMutationBatch(t,e,n,i){const r=Su(t),s=Iu(t);return s.add({}).next((o=>{Yi("number"==typeof o);const a=new Ac(o,e,n,i),c=function(t,e,n){const i=n.baseMutations.map((e=>Oa(t.Jt,e))),r=n.mutations.map((e=>Oa(t.Jt,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:r}}(this.M,this.userId,a),u=[];let l=new zo(((t,e)=>pr(t.canonicalString(),e.canonicalString())));for(const t of i){const e=Qa(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(r.put(e,Ja))}return l.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.hn[o]=a.keys()})),vc.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return Iu(t).get(e).next((t=>t?(Yi(t.userId===this.userId),Bc(this.M,t)):null))}ln(t,e){return this.hn[e]?vc.resolve(this.hn[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.hn[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return Iu(t).Wt({index:"userMutationsIndex",range:i},((t,e,i)=>{e.userId===this.userId&&(Yi(e.batchId>=n),r=Bc(this.M,e)),i.done()})).next((()=>r))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Iu(t).Wt({index:"userMutationsIndex",range:e,reverse:!0},((t,e,i)=>{n=e.batchId,i.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Iu(t).Ut("userMutationsIndex",e).next((t=>t.map((t=>Bc(this.M,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ya(this.userId,e.path),i=IDBKeyRange.lowerBound(n),r=[];return Su(t).Wt({range:i},((n,i,s)=>{const[o,a,c]=n,u=Ga(a);if(o===this.userId&&e.path.isEqual(u))return Iu(t).get(c).next((t=>{if(!t)throw Xi();Yi(t.userId===this.userId),r.push(Bc(this.M,t))}));s.done()})).next((()=>r))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new zo(pr);const i=[];return e.forEach((e=>{const r=Ya(this.userId,e.path),s=IDBKeyRange.lowerBound(r),o=Su(t).Wt({range:s},((t,i,r)=>{const[s,o,a]=t,c=Ga(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()}));i.push(o)})),vc.waitFor(i).next((()=>this.fn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,r=Ya(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new zo(pr);return Su(t).Wt({range:s},((t,e,r)=>{const[s,a,c]=t,u=Ga(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()})).next((()=>this.fn(t,o)))}fn(t,e){const n=[],i=[];return e.forEach((e=>{i.push(Iu(t).get(e).next((t=>{if(null===t)throw Xi();Yi(t.userId===this.userId),n.push(Bc(this.M,t))})))})),vc.waitFor(i).next((()=>n))}removeMutationBatch(t,e){return yu(t.Ht,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.dn(e.batchId)})),vc.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}dn(t){delete this.hn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return vc.resolve();const n=IDBKeyRange.lowerBound([this.userId]),i=[];return Su(t).Wt({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=Ga(t[1]);i.push(e)}else n.done()})).next((()=>{Yi(0===i.length)}))}))}containsKey(t,e){return _u(t,this.userId,e)}_n(t){return Tu(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function _u(t,e,n){const i=Ya(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return Su(t).Wt({range:s,jt:!0},((t,n,i)=>{const[s,a,c]=t;s===e&&a===r&&(o=!0),i.done()})).next((()=>o))}function Iu(t){return xc(t,"mutations")}function Su(t){return xc(t,"documentMutations")}function Tu(t){return xc(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t){this.wn=t}next(){return this.wn+=2,this.wn}static mn(){return new Eu(0)}static gn(){return new Eu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e){this.referenceDelegate=t,this.M=e}allocateTargetId(t){return this.yn(t).next((e=>{const n=new Eu(e.highestTargetId);return e.highestTargetId=n.next(),this.pn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.yn(t).next((t=>yr.fromTimestamp(new vr(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.yn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.yn(t).next((i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.pn(t,i))))}addTargetData(t,e){return this.In(t,e).next((()=>this.yn(t).next((n=>(n.targetCount+=1,this.Tn(e,n),this.pn(t,n))))))}updateTargetData(t,e){return this.In(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Cu(t).delete(e.targetId))).next((()=>this.yn(t))).next((e=>(Yi(e.targetCount>0),e.targetCount-=1,this.pn(t,e))))}removeTargets(t,e,n){let i=0;const r=[];return Cu(t).Wt(((s,o)=>{const a=Uc(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(t,a)))})).next((()=>vc.waitFor(r))).next((()=>i))}forEachTarget(t,e){return Cu(t).Wt(((t,n)=>{const i=Uc(n);e(i)}))}yn(t){return xu(t).get("targetGlobalKey").next((t=>(Yi(null!==t),t)))}pn(t,e){return xu(t).put("targetGlobalKey",e)}In(t,e){return Cu(t).put(jc(this.M,e))}Tn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.yn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=ys(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return Cu(t).Wt({range:i,index:"queryTargetsIndex"},((t,n,i)=>{const s=Uc(n);ws(e,s.target)&&(r=s,i.done())})).next((()=>r))}addMatchingKeys(t,e,n){const i=[],r=Au(t);return e.forEach((e=>{const s=Za(e.path);i.push(r.put({targetId:n,path:s})),i.push(this.referenceDelegate.addReference(t,n,e))})),vc.waitFor(i)}removeMatchingKeys(t,e,n){const i=Au(t);return vc.forEach(e,(e=>{const r=Za(e.path);return vc.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=Au(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=Au(t);let r=Jo();return i.Wt({range:n,jt:!0},((t,e,n)=>{const i=Ga(t[1]),s=new Ur(i);r=r.add(s)})).next((()=>r))}containsKey(t,e){const n=Za(e.path),i=IDBKeyRange.bound([n],[gr(n)],!1,!0);let r=0;return Au(t).Wt({index:"documentTargetsIndex",jt:!0,range:i},(([t,e],n,i)=>{0!==t&&(r++,i.done())})).next((()=>r>0))}Et(t,e){return Cu(t).get(e).next((t=>t?Uc(t):null))}}function Cu(t){return xc(t,"targets")}function xu(t){return xc(t,"targetGlobal")}function Au(t){return xc(t,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){if(t.code!==tr.FAILED_PRECONDITION||t.message!==mc)throw t;Zi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu([t,e],[n,i]){const r=pr(t,n);return 0===r?pr(e,i):r}class Ru{constructor(t){this.En=t,this.buffer=new zo(Nu),this.An=0}Rn(){return++this.An}bn(t){const e=[t,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Nu(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Du{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.Pn=!1,this.Vn=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.vn(t)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return null!==this.Vn}vn(t){const e=this.Pn?3e5:6e4;Zi("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Vn=null,this.Pn=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Ic(t)?Zi("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ou(t)}await this.vn(t)}))}}class Lu{constructor(t,e){this.Sn=t,this.params=e}calculateTargetCount(t,e){return this.Sn.Dn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return vc.resolve(hr.A);const n=new Ru(e);return this.Sn.forEachTarget(t,(t=>n.bn(t.sequenceNumber))).next((()=>this.Sn.Cn(t,(t=>n.bn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Sn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Sn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Zi("LruGarbageCollector","Garbage collection skipped; disabled"),vc.resolve(gu)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(Zi("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gu):this.xn(t,e)))}getCacheSize(t){return this.Sn.getCacheSize(t)}xn(t,e){let n,i,r,s,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(Zi("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,s=Date.now(),this.nthSequenceNumber(t,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(r=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),qi()<=a["in"].DEBUG&&Zi("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),vc.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Lu(t,e)}(this,e)}Dn(t){const e=this.Nn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}Nn(t){let e=0;return this.Cn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Cn(t,e){return this.kn(t,((t,n)=>e(n)))}addReference(t,e,n){return $u(t,n)}removeReference(t,e,n){return $u(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return $u(t,e)}Mn(t,e){return function(t,e){let n=!1;return Tu(t).zt((i=>_u(t,i,e).next((t=>(t&&(n=!0),vc.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.kn(t,((s,o)=>{if(o<=e){const e=this.Mn(t,s).next((e=>{if(!e)return r++,n.getEntry(t,s).next((()=>(n.removeEntry(s,yr.min()),Au(t).delete([0,Za(s.path)]))))}));i.push(e)}})).next((()=>vc.waitFor(i))).next((()=>n.apply(t))).next((()=>r))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return $u(t,e)}kn(t,e){const n=Au(t);let i,r=hr.A;return n.Wt({index:"documentTargetsIndex"},(([t,n],{path:s,sequenceNumber:o})=>{0===t?(r!==hr.A&&e(new Ur(Ga(i)),r),r=o,i=s):r=hr.A})).next((()=>{r!==hr.A&&e(new Ur(Ga(i)),r)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function $u(t,e){return Au(t).put(function(t,e){return{targetId:0,path:Za(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this.changes=new Fo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,us.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?vc.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t){this.M=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Uu(t).put(ju(e),n)}removeEntry(t,e){const n=Uu(t),i=ju(e);return n.delete(i)}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.On(t,n))))}getEntry(t,e){return Uu(t).get(ju(e)).next((t=>this.$n(e,t)))}Fn(t,e){return Uu(t).get(ju(e)).next((t=>({document:this.$n(e,t),size:bu(t)})))}getEntries(t,e){let n=Wo();return this.Bn(t,e,((t,e)=>{const i=this.$n(t,e);n=n.insert(t,i)})).next((()=>n))}Ln(t,e){let n=Wo(),i=new Bo(Ur.comparator);return this.Bn(t,e,((t,e)=>{const r=this.$n(t,e);n=n.insert(t,r),i=i.insert(t,bu(e))})).next((()=>({documents:n,qn:i})))}Bn(t,e,n){if(e.isEmpty())return vc.resolve();const i=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),r=e.getIterator();let s=r.getNext();return Uu(t).Wt({range:i},((t,e,i)=>{const o=Ur.fromSegments(t);for(;s&&Ur.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,e),s=r.hasNext()?r.getNext():null),s?i.qt(s.path.toArray()):i.done()})).next((()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null}))}getAll(t,e,n){let i=Wo();const r=e.length+1,s={};if(n.isEqual(yr.min())){const t=e.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.toArray(),i=$c(n);s.range=IDBKeyRange.lowerBound([t,i],!0),s.index="collectionReadTimeIndex"}return Uu(t).Wt(s,((t,n,s)=>{if(t.length!==r)return;const o=this.$n(Ur.fromSegments(t),n);e.isPrefixOf(o.key.path)?i=i.insert(o.key,o):s.done()})).next((()=>i))}newChangeBuffer(t){return new Fu(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return Bu(t).get("remoteDocumentGlobalKey").next((t=>(Yi(!!t),t)))}On(t,e){return Bu(t).put("remoteDocumentGlobalKey",e)}$n(t,e){if(e){const t=Lc(this.M,e);if(!t.isNoDocument()||!t.version.isEqual(yr.min()))return t}return us.newInvalidDocument(t)}}class Fu extends Mu{constructor(t,e){super(),this.Un=t,this.trackRemovals=e,this.Kn=new Fo((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,i=new zo(((t,e)=>pr(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((r,s)=>{const o=this.Kn.get(r);if(s.isValidDocument()){const a=Pc(this.Un.M,s);i=i.add(r.path.popLast());const c=bu(a);n+=c-o,e.push(this.Un.addEntry(t,r,a))}else if(n-=o,this.trackRemovals){const n=Pc(this.Un.M,s.convertToNoDocument(yr.min()));e.push(this.Un.addEntry(t,r,n))}else e.push(this.Un.removeEntry(t,r))})),i.forEach((n=>{e.push(this.Un.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.Un.updateMetadata(t,n)),vc.waitFor(e)}getFromCache(t,e){return this.Un.Fn(t,e).next((t=>(this.Kn.set(e,t.size),t.document)))}getAllFromCache(t,e){return this.Un.Ln(t,e).next((({documents:t,qn:e})=>(e.forEach(((t,e)=>{this.Kn.set(t,e)})),t)))}}function Bu(t){return xc(t,"remoteDocumentGlobal")}function Uu(t){return xc(t,"remoteDocuments")}function ju(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.M=t}kt(t,e,n,i){const r=new yc("createOrUpgrade",e);n<1&&i>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xa,{unique:!0}),t.createObjectStore("documentMutations")}(t),qu(t),function(t){t.createObjectStore("remoteDocuments")}(t));let s=vc.resolve();return n<3&&i>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),qu(t)),s=s.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:yr.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(r)))),n<4&&i>=4&&(0!==n&&(s=s.next((()=>function(t,e){return e.store("mutations").Ut().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xa,{unique:!0});const i=e.store("mutations"),r=n.map((t=>i.put(t)));return vc.waitFor(r)}))}(t,r)))),s=s.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&i>=5&&(s=s.next((()=>this.Gn(r)))),n<6&&i>=6&&(s=s.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.Qn(r))))),n<7&&i>=7&&(s=s.next((()=>this.jn(r)))),n<8&&i>=8&&(s=s.next((()=>this.Wn(t,r)))),n<9&&i>=9&&(s=s.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore("remoteDocuments");e.createIndex("readTimeIndex","readTime",{unique:!1}),e.createIndex("collectionReadTimeIndex",tc,{unique:!1})}(e)}))),n<10&&i>=10&&(s=s.next((()=>this.zn(r)))),n<11&&i>=11&&(s=s.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&i>=12&&(s=s.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:uc});e.createIndex("collectionPathOverlayIndex",lc,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",hc,{unique:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}))),n<13&&i>=13&&(s=s.next((()=>{!function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:sc}).createIndex("sequenceNumberIndex",oc,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:ac}).createIndex("documentKeyIndex",cc,{unique:!1})}(t)}))),s}Qn(t){let e=0;return t.store("remoteDocuments").Wt(((t,n)=>{e+=bu(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Gn(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.Ut().next((e=>vc.forEach(e,(e=>{const i=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Ut("userMutationsIndex",i).next((n=>vc.forEach(n,(n=>{Yi(n.userId===e.userId);const i=Bc(this.M,n);return yu(t,e.userId,i).next((()=>{}))}))))}))))}jn(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const i=[];return n.Wt(((n,r)=>{const s=new Sr(n),o=function(t){return[0,Za(t)]}(s);i.push(e.get(o).next((n=>n?vc.resolve():(n=>e.put({targetId:0,path:Za(n),sequenceNumber:t.highestListenSequenceNumber}))(s))))})).next((()=>vc.waitFor(i)))}))}Wn(t,e){t.createObjectStore("collectionParents",{keyPath:rc});const n=e.store("collectionParents"),i=new uu,r=t=>{if(i.add(t)){const e=t.lastSegment(),i=t.popLast();return n.put({collectionId:e,parent:Za(i)})}};return e.store("remoteDocuments").Wt({jt:!0},((t,e)=>{const n=new Sr(t);return r(n.popLast())})).next((()=>e.store("documentMutations").Wt({jt:!0},(([t,e,n],i)=>{const s=Ga(e);return r(s.popLast())}))))}zn(t){const e=t.store("targets");return e.Wt(((t,n)=>{const i=Uc(n),r=jc(this.M,i);return e.put(r)}))}}function qu(t){t.createObjectStore("targetDocuments",{keyPath:nc}).createIndex("documentTargetsIndex",ic,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ec,{unique:!0}),t.createObjectStore("targetGlobal")}const Hu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zu{constructor(t,e,n,i,r,s,o,a,c,u,l=12){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Hn=r,this.window=s,this.document=o,this.Jn=c,this.Yn=u,this.Xn=l,this.Zn=null,this.ts=!1,this.isPrimary=!1,this.networkEnabled=!0,this.es=null,this.inForeground=!1,this.ns=null,this.ss=null,this.rs=Number.NEGATIVE_INFINITY,this.os=t=>Promise.resolve(),!Zu.vt())throw new er(tr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Pu(this,i),this.us=e+"main",this.M=new Dc(a),this.cs=new bc(this.us,this.Xn,new zu(this.M)),this.hs=new ku(this.referenceDelegate,this.M),this.ls=function(t){return new Vu(t)}(this.M),this.fs=new Zc,this.window&&this.window.localStorage?this.ds=this.window.localStorage:(this.ds=null,!1===u&&Wi("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this._s().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new er(tr.FAILED_PRECONDITION,Hu);return this.ws(),this.gs(),this.ys(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.hs.getHighestSequenceNumber(t)))})).then((t=>{this.Zn=new hr(t,this.Jn)})).then((()=>{this.ts=!0})).catch((t=>(this.cs&&this.cs.close(),Promise.reject(t))))}ps(t){return this.os=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.cs.Ot((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Hn.enqueueAndForget((async()=>{this.started&&await this._s()})))}_s(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Ku(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Is(t).next((t=>{t||(this.isPrimary=!1,this.Hn.enqueueRetryable((()=>this.os(!1))))}))})).next((()=>this.Ts(t))).next((e=>this.isPrimary&&!e?this.Es(t).next((()=>!1)):!!e&&this.As(t).next((()=>!0)))))).catch((t=>{if(Ic(t))return Zi("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return Zi("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Hn.enqueueRetryable((()=>this.os(t))),this.isPrimary=t}))}Is(t){return Wu(t).get("owner").next((t=>vc.resolve(this.Rs(t))))}bs(t){return Ku(t).delete(this.clientId)}async Ps(){if(this.isPrimary&&!this.Vs(this.rs,18e5)){this.rs=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=xc(t,"clientMetadata");return e.Ut().next((t=>{const n=this.vs(t,18e5),i=t.filter((t=>-1===n.indexOf(t)));return vc.forEach(i,(t=>e.delete(t.clientId))).next((()=>i))}))})).catch((()=>[]));if(this.ds)for(const e of t)this.ds.removeItem(this.Ss(e.clientId))}}ys(){this.ss=this.Hn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this._s().then((()=>this.Ps())).then((()=>this.ys()))))}Rs(t){return!!t&&t.ownerId===this.clientId}Ts(t){return this.Yn?vc.resolve(!0):Wu(t).get("owner").next((e=>{if(null!==e&&this.Vs(e.leaseTimestampMs,5e3)&&!this.Ds(e.ownerId)){if(this.Rs(e)&&this.networkEnabled)return!0;if(!this.Rs(e)){if(!e.allowTabSynchronization)throw new er(tr.FAILED_PRECONDITION,Hu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ku(t).Ut().next((t=>void 0===this.vs(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,i=this.networkEnabled===t.networkEnabled;if(e||n&&i)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&Zi("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ts=!1,this.Cs(),this.ss&&(this.ss.cancel(),this.ss=null),this.xs(),this.Ns(),await this.cs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Cc(t,hr.A);return this.Es(e).next((()=>this.bs(e)))})),this.cs.close(),this.ks()}vs(t,e){return t.filter((t=>this.Vs(t.updateTimeMs,e)&&!this.Ds(t.clientId)))}Ms(){return this.runTransaction("getActiveClients","readonly",(t=>Ku(t).Ut().next((t=>this.vs(t,18e5).map((t=>t.clientId))))))}get started(){return this.ts}getMutationQueue(t,e){return wu.Yt(t,this.M,e,this.referenceDelegate)}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getIndexManager(t){return new hu(t)}getDocumentOverlayCache(t){return Gc.Yt(this.M,t)}getBundleCache(){return this.fs}runTransaction(t,e,n){Zi("IndexedDbPersistence","Starting transaction:",t);const i="readonly"===e?"readonly":"readwrite",r=13===(s=this.Xn)?pc:12===s?fc:11===s?dc:void Xi();var s;let o;return this.cs.runTransaction(t,i,r,(i=>(o=new Cc(i,this.Zn?this.Zn.next():hr.A),"readwrite-primary"===e?this.Is(o).next((t=>!!t||this.Ts(o))).next((e=>{if(!e)throw Wi(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Hn.enqueueRetryable((()=>this.os(!1))),new er(tr.FAILED_PRECONDITION,mc);return n(o)})).next((t=>this.As(o).next((()=>t)))):this.Os(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}Os(t){return Wu(t).get("owner").next((t=>{if(null!==t&&this.Vs(t.leaseTimestampMs,5e3)&&!this.Ds(t.ownerId)&&!this.Rs(t)&&!(this.Yn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new er(tr.FAILED_PRECONDITION,Hu)}))}As(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wu(t).put("owner",e)}static vt(){return bc.vt()}Es(t){const e=Wu(t);return e.get("owner").next((t=>this.Rs(t)?(Zi("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):vc.resolve()))}Vs(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Wi(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ws(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ns=()=>{this.Hn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this._s())))},this.document.addEventListener("visibilitychange",this.ns),this.inForeground="visible"===this.document.visibilityState)}xs(){this.ns&&(this.document.removeEventListener("visibilitychange",this.ns),this.ns=null)}gs(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.es=()=>{this.Cs(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hn.enterRestrictedMode(!0),this.Hn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.es))}Ns(){this.es&&(this.window.removeEventListener("pagehide",this.es),this.es=null)}Ds(t){var e;try{const n=null!==(null===(e=this.ds)||void 0===e?void 0:e.getItem(this.Ss(t)));return Zi("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return Wi("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Cs(){if(this.ds)try{this.ds.setItem(this.Ss(this.clientId),String(Date.now()))}catch(S){Wi("Failed to set zombie client id.",S)}}ks(){if(this.ds)try{this.ds.removeItem(this.Ss(this.clientId))}catch(S){}}Ss(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Wu(t){return xc(t,"owner")}function Ku(t){return xc(t,"clientMetadata")}function Gu(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xu{constructor(t,e){this.progress=t,this.$s=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e,n){this.ls=t,this.Fs=e,this.indexManager=n}Bs(t,e){return this.Fs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Ls(t,e,n)))}Ls(t,e,n){return this.ls.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const i of e)i.applyToLocalView(n)}))}Us(t,e){return this.ls.getEntries(t,e).next((e=>this.Ks(t,e).next((()=>e))))}Ks(t,e){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Gs(t,e,n){return function(t){return Ur.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):qs(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new Ur(e)).next((t=>{let e=Go();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}js(t,e,n){const i=e.collectionGroup;let r=Go();return this.indexManager.getCollectionParents(t,i).next((s=>vc.forEach(s,(s=>{const o=function(t,e){return new Ms(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Ws(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}Ws(t,e,n){let i;return this.ls.getAll(t,e.path,n).next((n=>(i=n,this.Fs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=us.newInvalidDocument(n),i=i.insert(n,r)),So(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}})).next((()=>(i.forEach(((t,n)=>{Ys(e,n)||(i=i.remove(t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=i}static Js(t,e){let n=Jo(),i=Jo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Qu(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{Ys(t){this.Xs=t}Gs(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(yr.min())?this.Zs(t,e):this.Xs.Us(t,i).next((r=>{const s=this.ti(e,r);return(Bs(e)||Us(e))&&this.ei(e.limitType,s,i,n)?this.Zs(t,e):(qi()<=a["in"].DEBUG&&Zi("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Xs(e)),this.Xs.Gs(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}ti(t,e){let n=new zo(Qs(t));return e.forEach(((e,i)=>{Ys(t,i)&&(n=n.add(i))})),n}ei(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Zs(t,e){return qi()<=a["in"].DEBUG&&Zi("QueryEngine","Using full collection scan to execute query:",Xs(e)),this.Xs.Gs(t,e,yr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,e,n,i){this.persistence=t,this.ni=e,this.M=i,this.si=new Bo(pr),this.ii=new Fo((t=>ys(t)),ws),this.ri=yr.min(),this.oi=t.getRemoteDocumentCache(),this.hs=t.getTargetCache(),this.fs=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Fs=this.persistence.getMutationQueue(t,this.indexManager),this.ui=new Yu(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.si)))}}function el(t,e,n,i){return new tl(t,e,n,i)}async function nl(t,e){const n=Ji(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.Fs.getAllMutationBatches(t).next((r=>(i=r,n.ai(e),n.Fs.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Jo();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ui.Us(t,o).next((t=>({ci:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function il(t,e){const n=Ji(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.oi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=vc.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Yi(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.Fs.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.Fs.performConsistencyCheck(t))).next((()=>n.ui.Us(t,i)))}))}function rl(t){const e=Ji(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hs.getLastRemoteSnapshotVersion(t)))}function sl(t,e){const n=Ji(t),i=e.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.hs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.hs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(xr.EMPTY_BYTE_STRING,yr.min()).withLastLimboFreeSnapshotVersion(yr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.hs.updateTargetData(t,u))}));let a=Wo();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(ol(t,s,e.documentUpdates).next((t=>{a=t}))),!i.isEqual(yr.min())){const e=n.hs.getLastRemoteSnapshotVersion(t).next((e=>n.hs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return vc.waitFor(o).next((()=>s.apply(t))).next((()=>n.ui.Ks(t,a))).next((()=>a))})).then((t=>(n.si=r,t)))}function ol(t,e,n){let i=Jo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Wo();return n.forEach(((n,r)=>{const s=t.get(n);r.isNoDocument()&&r.version.isEqual(yr.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):Zi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)})),i}))}function al(t,e){const n=Ji(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Fs.getNextMutationBatchAfterBatchId(t,e))))}function cl(t,e){const n=Ji(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.hs.getTargetData(t,e).next((r=>r?(i=r,vc.resolve(i)):n.hs.allocateTargetId(t).next((r=>(i=new Rc(e,r,0,t.currentSequenceNumber),n.hs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.si.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t}))}async function ul(t,e,n){const i=Ji(t),r=i.si.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Ic(t))throw t;Zi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.si=i.si.remove(e),i.ii.delete(r.target)}function ll(t,e,n){const i=Ji(t);let r=yr.min(),s=Jo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Ji(t),r=i.ii.get(n);return void 0!==r?vc.resolve(i.si.get(r)):i.hs.getTargetData(e,n)}(i,t,Zs(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.hs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.ni.Gs(t,e,n?r:yr.min(),n?s:Jo()))).next((t=>({documents:t,hi:s})))))}function hl(t,e){const n=Ji(t),i=Ji(n.hs),r=n.si.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",(t=>i.Et(t,e).next((t=>t?t.target:null))))}function dl(t){const e=Ji(t);return e.persistence.runTransaction("Get new document changes","readonly",(t=>function(t,e,n){const i=Ji(t);let r=Wo(),s=$c(n);const o=Uu(e),a=IDBKeyRange.lowerBound(s,!0);return o.Wt({index:"readTimeIndex",range:a},((t,e)=>{const n=Lc(i.M,e);r=r.insert(n.key,n),s=e.readTime})).next((()=>({$s:r,readTime:Mc(s)})))}(e.oi,t,e.ri))).then((({$s:t,readTime:n})=>(e.ri=n,t)))}async function fl(t){const e=Ji(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",(t=>function(t){const e=Uu(t);let n=yr.min();return e.Wt({index:"readTimeIndex",reverse:!0},((t,e,i)=>{e.readTime&&(n=Mc(e.readTime)),i.done()})).next((()=>n))}(t))).then((t=>{e.ri=t}))}async function pl(t,e,n,i){const r=Ji(t);let s=Jo(),o=Wo();for(const u of n){const t=e.li(u.metadata.name);u.document&&(s=s.add(t));const n=e.fi(u);n.setReadTime(e.di(u.metadata.readTime)),o=o.insert(t,n)}const a=r.oi.newChangeBuffer({trackRemovals:!0}),c=await cl(r,function(t){return Zs(Fs(Sr.fromString(`__bundle__/docs/${t}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",(t=>ol(t,a,o).next((e=>(a.apply(t),e))).next((e=>r.hs.removeMatchingKeysForTargetId(t,c.targetId).next((()=>r.hs.addMatchingKeys(t,s,c.targetId))).next((()=>r.ui.Ks(t,e))).next((()=>e))))))}async function ml(t,e,n=Jo()){const i=await cl(t,Zs(zc(e.bundledQuery))),r=Ji(t);return r.persistence.runTransaction("Save named query","readwrite",(t=>{const s=va(e.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.fs.saveNamedQuery(t,e);const o=i.withResumeToken(xr.EMPTY_BYTE_STRING,s);return r.si=r.si.insert(o.targetId,o),r.hs.updateTargetData(t,o).next((()=>r.hs.removeMatchingKeysForTargetId(t,i.targetId))).next((()=>r.hs.addMatchingKeys(t,n,i.targetId))).next((()=>r.fs.saveNamedQuery(t,e)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.M=t,this._i=new Map,this.wi=new Map}getBundleMetadata(t,e){return vc.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:va(n.createTime)}),vc.resolve()}getNamedQuery(t,e){return vc.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return{name:t.name,query:zc(t.bundledQuery),readTime:va(t.readTime)}}(e)),vc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.overlays=new Bo(Ur.comparator),this.mi=new Map}getOverlay(t,e){return vc.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Xt(t,e,i)})),vc.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.mi.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.mi.delete(n)),vc.resolve()}getOverlaysForCollection(t,e,n){const i=Xo(),r=e.length+1,s=new Ur(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return vc.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Bo(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Xo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Xo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return vc.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.mi.get(i.largestBatchId).delete(n.key);this.mi.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Nc(e,n));let r=this.mi.get(e);void 0===r&&(r=Jo(),this.mi.set(e,r)),this.mi.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.gi=new zo(bl.yi),this.pi=new zo(bl.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new bl(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ei(new bl(t,e))}Ai(t,e){t.forEach((t=>this.removeReference(t,e)))}Ri(t){const e=new Ur(new Sr([])),n=new bl(e,t),i=new bl(e,t+1),r=[];return this.pi.forEachInRange([n,i],(t=>{this.Ei(t),r.push(t.key)})),r}bi(){this.gi.forEach((t=>this.Ei(t)))}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t)}Pi(t){const e=new Ur(new Sr([])),n=new bl(e,t),i=new bl(e,t+1);let r=Jo();return this.pi.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new bl(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class bl{constructor(t,e){this.key=t,this.Vi=e}static yi(t,e){return Ur.comparator(t.key,e.key)||pr(t.Vi,e.Vi)}static Ii(t,e){return pr(t.Vi,e.Vi)||Ur.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Fs=[],this.vi=1,this.Si=new zo(bl.yi)}checkEmpty(t){return vc.resolve(0===this.Fs.length)}addMutationBatch(t,e,n,i){const r=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const s=new Ac(r,e,n,i);this.Fs.push(s);for(const o of i)this.Si=this.Si.add(new bl(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return vc.resolve(s)}lookupMutationBatch(t,e){return vc.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Ci(n),r=i<0?0:i;return vc.resolve(this.Fs.length>r?this.Fs[r]:null)}getHighestUnacknowledgedBatchId(){return vc.resolve(0===this.Fs.length?-1:this.vi-1)}getAllMutationBatches(t){return vc.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bl(e,0),i=new bl(e,Number.POSITIVE_INFINITY),r=[];return this.Si.forEachInRange([n,i],(t=>{const e=this.Di(t.Vi);r.push(e)})),vc.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new zo(pr);return e.forEach((t=>{const e=new bl(t,0),i=new bl(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,i],(t=>{n=n.add(t.Vi)}))})),vc.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Ur.isDocumentKey(r)||(r=r.child(""));const s=new bl(new Ur(r),0);let o=new zo(pr);return this.Si.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Vi)),!0)}),s),vc.resolve(this.xi(o))}xi(t){const e=[];return t.forEach((t=>{const n=this.Di(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Yi(0===this.Ni(e.batchId,"removed")),this.Fs.shift();let n=this.Si;return vc.forEach(e.mutations,(i=>{const r=new bl(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Si=n}))}dn(t){}containsKey(t,e){const n=new bl(e,0),i=this.Si.firstAfterOrEqual(n);return vc.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Fs.length,vc.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.Fs.length?0:t-this.Fs[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.Fs.length?null:this.Fs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.ki=t,this.docs=new Bo(Ur.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return vc.resolve(n?n.document.mutableCopy():us.newInvalidDocument(e))}getEntries(t,e){let n=Wo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():us.newInvalidDocument(t))})),vc.resolve(n)}getAll(t,e,n){let i=Wo();const r=new Ur(e.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||r.readTime.compareTo(n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return vc.resolve(i)}Mi(t,e){return vc.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Il(this)}getSize(t){return vc.resolve(this.size)}}class Il extends Mu{constructor(t){super(),this.Un=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Un.addEntry(t,i)):this.Un.removeEntry(n)})),vc.waitFor(e)}getFromCache(t,e){return this.Un.getEntry(t,e)}getAllFromCache(t,e){return this.Un.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.persistence=t,this.Oi=new Fo((t=>ys(t)),ws),this.lastRemoteSnapshotVersion=yr.min(),this.highestTargetId=0,this.$i=0,this.Fi=new yl,this.targetCount=0,this.Bi=Eu.mn()}forEachTarget(t,e){return this.Oi.forEach(((t,n)=>e(n))),vc.resolve()}getLastRemoteSnapshotVersion(t){return vc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return vc.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),vc.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),vc.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new Eu(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.In(e),this.targetCount+=1,vc.resolve()}updateTargetData(t,e){return this.In(e),vc.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.Fi.Ri(e.targetId),this.targetCount-=1,vc.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Oi.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Oi.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),vc.waitFor(r).next((()=>i))}getTargetCount(t){return vc.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return vc.resolve(n)}addMatchingKeys(t,e,n){return this.Fi.Ti(e,n),vc.resolve()}removeMatchingKeys(t,e,n){this.Fi.Ai(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),vc.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Fi.Ri(e),vc.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Fi.Pi(e);return vc.resolve(n)}containsKey(t,e){return vc.resolve(this.Fi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){this.Li={},this.overlays={},this.Zn=new hr(0),this.ts=!1,this.ts=!0,this.referenceDelegate=t(this),this.hs=new Sl(this),this.indexManager=new cu,this.ls=function(t){return new _l(t)}((t=>this.referenceDelegate.qi(t))),this.M=new Dc(e),this.fs=new gl(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new wl(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(t,e,n){Zi("MemoryPersistence","Starting transaction:",t);const i=new El(this.Zn.next());return this.referenceDelegate.Ui(),n(i).next((t=>this.referenceDelegate.Ki(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gi(t,e){return vc.or(Object.values(this.Li).map((n=>()=>n.containsKey(t,e))))}}class El extends gc{constructor(t){super(),this.currentSequenceNumber=t}}class kl{constructor(t){this.persistence=t,this.Qi=new yl,this.ji=null}static Wi(t){return new kl(t)}get zi(){if(this.ji)return this.ji;throw Xi()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),vc.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),vc.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),vc.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach((t=>this.zi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ui(){this.ji=new Set}Ki(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vc.forEach(this.zi,(n=>{const i=Ur.fromPath(n);return this.Hi(t,i).next((t=>{t||e.removeEntry(i,yr.min())}))})).next((()=>(this.ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hi(t,e).next((t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString())}))}qi(t){return 0}Hi(t,e){return vc.or([()=>vc.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){return`firestore_clients_${t}_${e}`}function xl(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function Al(t,e){return`firestore_targets_${t}_${e}`}class Ol{constructor(t,e,n,i){this.user=t,this.batchId=e,this.state=n,this.error=i}static Ji(t,e,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new er(i.error.code,i.error.message))),s?new Ol(t,e,i.state,r):(Wi("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Nl{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ji(t,e){const n=JSON.parse(e);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new er(n.error.code,n.error.message))),r?new Nl(t,n.state,i):(Wi("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Rl{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ji(t,e){const n=JSON.parse(e);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=ea();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=Br(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new Rl(t,r):(Wi("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Dl{constructor(t,e){this.clientId=t,this.onlineState=e}static Ji(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Dl(e.clientId,e.onlineState):(Wi("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Ll{constructor(){this.activeTargetIds=ea()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pl{constructor(t,e,n,i,r){this.window=t,this.Hn=e,this.persistenceKey=n,this.tr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Bo(pr),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.rr=Cl(this.persistenceKey,this.tr),this.ar=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new Ll),this.ur=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.dr=function(t){return`firestore_bundle_loaded_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ms();for(const n of t){if(n===this.tr)continue;const t=this.getItem(Cl(this.persistenceKey,n));if(t){const e=Rl.Ji(n,t);e&&(this.sr=this.sr.insert(e.clientId,e))}}this._r();const e=this.storage.getItem(this.lr);if(e){const t=this.wr(e);t&&this.mr(t)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.ar,JSON.stringify(t))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(t){let e=!1;return this.sr.forEach(((n,i)=>{i.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.yr(t,"pending")}updateMutationState(t,e,n){this.yr(t,e,n),this.pr(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Al(this.persistenceKey,t));if(n){const i=Nl.Ji(t,n);i&&(e=i.state)}}return this.Ir.Xi(t),this._r(),e}removeLocalQueryTarget(t){this.Ir.Zi(t),this._r()}isLocalQueryTarget(t){return this.Ir.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Al(this.persistenceKey,t))}updateQueryState(t,e,n){this.Tr(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.pr(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.Er(t)}notifyBundleLoaded(){this.Ar()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return Zi("SharedClientState","READ",t,e),e}setItem(t,e){Zi("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){Zi("SharedClientState","REMOVE",t),this.storage.removeItem(t)}nr(t){const e=t;if(e.storageArea===this.storage){if(Zi("SharedClientState","EVENT",e.key,e.newValue),e.key===this.rr)return void Wi("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hn.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.ur.test(e.key)){if(null==e.newValue){const t=this.Rr(e.key);return this.br(t,null)}{const t=this.Pr(e.key,e.newValue);if(t)return this.br(t.clientId,t)}}else if(this.cr.test(e.key)){if(null!==e.newValue){const t=this.Vr(e.key,e.newValue);if(t)return this.vr(t)}}else if(this.hr.test(e.key)){if(null!==e.newValue){const t=this.Sr(e.key,e.newValue);if(t)return this.Dr(t)}}else if(e.key===this.lr){if(null!==e.newValue){const t=this.wr(e.newValue);if(t)return this.mr(t)}}else if(e.key===this.ar){const t=function(t){let e=hr.A;if(null!=t)try{const n=JSON.parse(t);Yi("number"==typeof n),e=n}catch(t){Wi("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==hr.A&&this.sequenceNumberHandler(t)}else if(e.key===this.dr)return this.syncEngine.Cr()}else this.ir.push(e)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(t,e,n){const i=new Ol(this.currentUser,t,e,n),r=xl(this.persistenceKey,this.currentUser,t);this.setItem(r,i.Yi())}pr(t){const e=xl(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Er(t){const e={clientId:this.tr,onlineState:t};this.storage.setItem(this.lr,JSON.stringify(e))}Tr(t,e,n){const i=Al(this.persistenceKey,t),r=new Nl(t,e,n);this.setItem(i,r.Yi())}Ar(){this.setItem(this.dr,"value-not-used")}Rr(t){const e=this.ur.exec(t);return e?e[1]:null}Pr(t,e){const n=this.Rr(t);return Rl.Ji(n,e)}Vr(t,e){const n=this.cr.exec(t),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return Ol.Ji(new Ui(r),i,e)}Sr(t,e){const n=this.hr.exec(t),i=Number(n[1]);return Nl.Ji(i,e)}wr(t){return Dl.Ji(t)}async vr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Nr(t.batchId,t.state,t.error);Zi("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Dr(t){return this.syncEngine.kr(t.targetId,t.state,t.error)}br(t,e){const n=e?this.sr.insert(t,e):this.sr.remove(t),i=this.gr(this.sr),r=this.gr(n),s=[],o=[];return r.forEach((t=>{i.has(t)||s.push(t)})),i.forEach((t=>{r.has(t)||o.push(t)})),this.syncEngine.Mr(s,o).then((()=>{this.sr=n}))}mr(t){this.sr.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}gr(t){let e=ea();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class $l{constructor(){this.Or=new Ll,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Or.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Or.Zi(t)}isLocalQueryTarget(t){return this.Or.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(t){return this.Or.activeTargetIds.has(t)}start(){return this.Or=new Ll,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{Fr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(t){this.Kr.push(t)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){Zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0)}Ur(){Zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t){this.Qr=t.Qr,this.jr=t.jr}Wr(t){this.zr=t}Hr(t){this.Jr=t}onMessage(t){this.Yr=t}close(){this.jr()}send(t){this.Qr(t)}Xr(){this.zr()}Zr(t){this.Jr(t)}eo(t){this.Yr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.no=e+"://"+t.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(t,e,n,i,r){const s=this.ro(t,e);Zi("RestConnection","Sending: ",s,n);const o={};return this.oo(o,i,r),this.ao(t,s,o,n).then((t=>(Zi("RestConnection","Received: ",t),t)),(e=>{throw Ki("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}uo(t,e,n,i,r){return this.io(t,e,n,i,r)}oo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ji,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ro(t,e){const n=Fl[t];return`${this.no}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}ao(t,e,n,i){return new Promise(((r,s)=>{const o=new Fi;o.listenOnce(Li.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Di.NO_ERROR:const e=o.getResponseJson();Zi("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Di.TIMEOUT:Zi("Connection",'RPC "'+t+'" timed out'),s(new er(tr.DEADLINE_EXCEEDED,"Request time out"));break;case Di.HTTP_ERROR:const n=o.getStatus();if(Zi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(tr).indexOf(e)>=0?e:tr.UNKNOWN}(t.status);s(new er(e,t.message))}else s(new er(tr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new er(tr.UNAVAILABLE,"Connection failed."));break;default:Xi()}}finally{Zi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}co(t,e,n){const i=[this.no,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ni(),s=Ri(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mi({})),this.oo(o.initMessageHeaders,e,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Zi("Connection","Creating WebChannel: "+a,o);const u=r.createWebChannel(a,o);let l=!1,h=!1;const d=new Bl({Qr:t=>{h?Zi("Connection","Not sending because WebChannel is closed:",t):(l||(Zi("Connection","Opening WebChannel transport."),u.open(),l=!0),Zi("Connection","WebChannel sending:",t),u.send(t))},jr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Vi.EventType.OPEN,(()=>{h||Zi("Connection","WebChannel transport opened.")})),f(u,Vi.EventType.CLOSE,(()=>{h||(h=!0,Zi("Connection","WebChannel transport closed"),d.Zr())})),f(u,Vi.EventType.ERROR,(t=>{h||(h=!0,Ki("Connection","WebChannel transport errored:",t),d.Zr(new er(tr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Yi(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Zi("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Po[t];if(void 0!==e)return Vo(e)}(t),n=r.message;void 0===e&&(e=tr.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.Zr(new er(e,n)),u.close()}else Zi("Connection","WebChannel received:",n),d.eo(n)}})),f(s,Pi.STAT_EVENT,(t=>{t.stat===$i.PROXY?Zi("Connection","Detected buffering proxy"):t.stat===$i.NOPROXY&&Zi("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Xr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){return"undefined"!=typeof window?window:null}function zl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new fa(t,!0)}class Hl{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hn=t,this.timerId=e,this.ho=n,this.lo=i,this.fo=r,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(t){this.cancel();const e=Math.floor(this._o+this.Io()),n=Math.max(0,Date.now()-this.mo),i=Math.max(0,e-n);i>0&&Zi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this._o} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,i,(()=>(this.mo=Date.now(),t()))),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){null!==this.wo&&(this.wo.skipDelay(),this.wo=null)}cancel(){null!==this.wo&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e,n,i,r,s,o,a){this.Hn=t,this.Eo=n,this.Ao=i,this.Ro=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new Hl(t,e)}So(){return 1===this.state||5===this.state||this.Do()}Do(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&null===this.Po&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,(()=>this.ko())))}Mo(t){this.Oo(),this.stream.send(t)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,4!==t?this.vo.reset():e&&e.code===tr.RESOURCE_EXHAUSTED?(Wi(e.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):e&&e.code===tr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Fo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Hr(e)}Fo(){}auth(){this.state=1;const t=this.Bo(this.bo),e=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.bo===e&&this.Lo(t,n)}),(e=>{t((()=>{const t=new er(tr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Lo(t,e){const n=this.Bo(this.bo);this.stream=this.Uo(t,e),this.stream.Wr((()=>{n((()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,(()=>(this.Do()&&(this.state=3),Promise.resolve()))),this.listener.Wr())))})),this.stream.Hr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Co(){this.state=5,this.vo.po((async()=>{this.state=0,this.start()}))}qo(t){return Zi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Bo(t){return e=>{this.Hn.enqueueAndForget((()=>this.bo===t?e():(Zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wl extends Zl{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.M=r}Uo(t,e){return this.Ro.co("Listen",t,e)}onMessage(t){this.vo.reset();const e=Aa(this.M,t),n=function(t){if(!("targetChange"in t))return yr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yr.min():e.readTime?va(e.readTime):yr.min()}(t);return this.listener.Ko(e,n)}Go(t){const e={};e.database=Ta(this.M),e.addTarget=function(t,e){let n;const i=e.target;return n=_s(i)?{documents:Da(t,i)}:{query:La(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ma(t,e.resumeToken):e.snapshotVersion.compareTo(yr.min())>0&&(n.readTime=pa(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=$a(this.M,t);n&&(e.labels=n),this.Mo(e)}Qo(t){const e={};e.database=Ta(this.M),e.removeTarget=t,this.Mo(e)}}class Kl extends Zl{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.M=r,this.jo=!1}get Wo(){return this.jo}start(){this.jo=!1,this.lastStreamToken=void 0,super.start()}Fo(){this.jo&&this.zo([])}Uo(t,e){return this.Ro.co("Write",t,e)}onMessage(t){if(Yi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.jo){this.vo.reset();const e=Ra(t.writeResults,t.commitTime),n=va(t.commitTime);return this.listener.Ho(n,e)}return Yi(!t.writeResults||0===t.writeResults.length),this.jo=!0,this.listener.Jo()}Yo(){const t={};t.database=Ta(this.M),this.Mo(t)}zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Oa(this.M,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Ro=n,this.M=i,this.Xo=!1}Zo(){if(this.Xo)throw new er(tr.FAILED_PRECONDITION,"The client has already been terminated.")}io(t,e,n){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Ro.io(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}uo(t,e,n){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Ro.uo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}terminate(){this.Xo=!0}}class Xl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){0===this.ta&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve()))))}oa(t){"Online"===this.state?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ia("Offline")))}set(t){this.aa(),this.ta=0,"Online"===t&&(this.na=!1),this.ia(t)}ia(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(Wi(e),this.na=!1):Zi("OnlineStateTracker",e)}aa(){null!==this.ea&&(this.ea.cancel(),this.ea=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=r,this.fa.Fr((t=>{n.enqueueAndForget((async()=>{oh(this)&&(Zi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ji(t);e.ha.add(4),await Jl(e),e.da.set("Unknown"),e.ha.delete(4),await Ql(e)}(this))}))})),this.da=new Xl(n,i)}}async function Ql(t){if(oh(t))for(const e of t.la)await e(!0)}async function Jl(t){for(const e of t.la)await e(!1)}function th(t,e){const n=Ji(t);n.ca.has(e.targetId)||(n.ca.set(e.targetId,e),sh(n)?rh(n):Th(n).Do()&&nh(n,e))}function eh(t,e){const n=Ji(t),i=Th(n);n.ca.delete(e),i.Do()&&ih(n,e),0===n.ca.size&&(i.Do()?i.No():oh(n)&&n.da.set("Unknown"))}function nh(t,e){t._a.Z(e.targetId),Th(t).Go(e)}function ih(t,e){t._a.Z(e),Th(t).Qo(e)}function rh(t){t._a=new ca({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.ca.get(e)||null}),Th(t).start(),t.da.sa()}function sh(t){return oh(t)&&!Th(t).So()&&t.ca.size>0}function oh(t){return 0===Ji(t).ha.size}function ah(t){t._a=void 0}async function ch(t){t.ca.forEach(((e,n)=>{nh(t,e)}))}async function uh(t,e){ah(t),sh(t)?(t.da.oa(e),rh(t)):t.da.set("Unknown")}async function lh(t,e,n){if(t.da.set("Online"),e instanceof oa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.ca.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.ca.delete(i),t._a.removeTarget(i))}(t,e)}catch(n){Zi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hh(t,n)}else if(e instanceof ra?t._a.at(e):e instanceof sa?t._a._t(e):t._a.ht(e),!n.isEqual(yr.min()))try{const e=await rl(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t._a.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.ca.get(i);r&&t.ca.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.ca.get(e);if(!n)return;t.ca.set(e,n.withResumeToken(xr.EMPTY_BYTE_STRING,n.snapshotVersion)),ih(t,e);const i=new Rc(n.target,e,1,n.sequenceNumber);nh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zi("RemoteStore","Failed to raise snapshot:",e),await hh(t,e)}}async function hh(t,e,n){if(!Ic(e))throw e;t.ha.add(1),await Jl(t),t.da.set("Offline"),n||(n=()=>rl(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zi("RemoteStore","Retrying IndexedDB access"),await n(),t.ha.delete(1),await Ql(t)}))}function dh(t,e){return e().catch((n=>hh(t,n,e)))}async function fh(t){const e=Ji(t),n=Eh(e);let i=e.ua.length>0?e.ua[e.ua.length-1].batchId:-1;for(;ph(e);)try{const t=await al(e.localStore,i);if(null===t){0===e.ua.length&&n.No();break}i=t.batchId,mh(e,t)}catch(t){await hh(e,t)}gh(e)&&vh(e)}function ph(t){return oh(t)&&t.ua.length<10}function mh(t,e){t.ua.push(e);const n=Eh(t);n.Do()&&n.Wo&&n.zo(e.mutations)}function gh(t){return oh(t)&&!Eh(t).So()&&t.ua.length>0}function vh(t){Eh(t).start()}async function yh(t){Eh(t).Yo()}async function bh(t){const e=Eh(t);for(const n of t.ua)e.zo(n.mutations)}async function wh(t,e,n){const i=t.ua.shift(),r=Oc.from(i,e,n);await dh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await fh(t)}async function _h(t,e){e&&Eh(t).Wo&&await async function(t,e){if(n=e.code,Mo(n)&&n!==tr.ABORTED){const n=t.ua.shift();Eh(t).xo(),await dh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fh(t)}var n}(t,e),gh(t)&&vh(t)}async function Ih(t,e){const n=Ji(t);n.asyncQueue.verifyOperationInProgress(),Zi("RemoteStore","RemoteStore received new credentials");const i=oh(n);n.ha.add(3),await Jl(n),i&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.ha.delete(3),await Ql(n)}async function Sh(t,e){const n=Ji(t);e?(n.ha.delete(2),await Ql(n)):e||(n.ha.add(2),await Jl(n),n.da.set("Unknown"))}function Th(t){return t.wa||(t.wa=function(t,e,n){const i=Ji(t);return i.Zo(),new Wl(e,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Wr:ch.bind(null,t),Hr:uh.bind(null,t),Ko:lh.bind(null,t)}),t.la.push((async e=>{e?(t.wa.xo(),sh(t)?rh(t):t.da.set("Unknown")):(await t.wa.stop(),ah(t))}))),t.wa}function Eh(t){return t.ma||(t.ma=function(t,e,n){const i=Ji(t);return i.Zo(),new Kl(e,i.Ro,i.authCredentials,i.appCheckCredentials,i.M,n)}(t.datastore,t.asyncQueue,{Wr:yh.bind(null,t),Hr:_h.bind(null,t),Jo:bh.bind(null,t),Ho:wh.bind(null,t)}),t.la.push((async e=>{e?(t.ma.xo(),await fh(t)):(await t.ma.stop(),t.ua.length>0&&(Zi("RemoteStore",`Stopping write stream with ${t.ua.length} pending writes`),t.ua=[]))}))),t.ma
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class kh{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new kh(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new er(tr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(Wi("AsyncQueue",`${e}: ${t}`),Ic(t))return new er(tr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ur.comparator(e.key,n.key):(t,e)=>Ur.comparator(t.key,e.key),this.keyedMap=Go(),this.sortedSet=new Bo(this.comparator)}static emptySet(t){return new xh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof xh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new xh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.ga=new Bo(Ur.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):Xi():this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Oh{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Oh(t,e,xh.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ks(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.pa=void 0,this.listeners=[]}}class Rh{constructor(){this.queries=new Fo((t=>Gs(t)),Ks),this.onlineState="Unknown",this.Ia=new Set}}async function Dh(t,e){const n=Ji(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Nh),r)try{s.pa=await n.onListen(i)}catch(t){const n=Ch(t,`Initialization of query '${Xs(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Ta(n.onlineState),s.pa&&e.Ea(s.pa)&&Mh(n)}async function Lh(t,e){const n=Ji(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Ph(t,e){const n=Ji(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ea(r)&&(i=!0);e.pa=r}}i&&Mh(n)}function $h(t,e,n){const i=Ji(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Mh(t){t.Ia.forEach((t=>{t.next()}))}class Vh{constructor(t,e,n){this.query=t,this.Aa=e,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=n||{}}Ea(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Oh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Ra?this.Pa(t)&&(this.Aa.next(t),e=!0):this.Va(t,this.onlineState)&&(this.va(t),e=!0),this.ba=t,e}onError(t){this.Aa.error(t)}Ta(t){this.onlineState=t;let e=!1;return this.ba&&!this.Ra&&this.Va(this.ba,t)&&(this.va(this.ba),e=!0),e}Va(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Sa||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Pa(t){if(t.docChanges.length>0)return!0;const e=this.ba&&this.ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}va(t){t=Oh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Ra=!0,this.Aa.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.payload=t,this.byteLength=e}Da(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.M=t}li(t){return _a(this.M,t)}fi(t){return t.metadata.exists?Ca(this.M,t.document,!1):us.newNoDocument(this.li(t.metadata.name),this.di(t.metadata.readTime))}di(t){return va(t)}}class Uh{constructor(t,e,n){this.Ca=t,this.localStore=e,this.M=n,this.queries=[],this.documents=[],this.progress=jh(t)}xa(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}Na(t){const e=new Map,n=new Bh(this.M);for(const i of t)if(i.metadata.queries){const t=n.li(i.metadata.name);for(const n of i.metadata.queries){const i=(e.get(n)||Jo()).add(t);e.set(n,i)}}return e}async complete(){const t=await pl(this.localStore,new Bh(this.M),this.documents,this.Ca.id),e=this.Na(this.documents);for(const n of this.queries)await ml(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Xu(Object.assign({},this.progress),t)}}function jh(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.key=t}}class qh{constructor(t){this.key=t}}class Hh{constructor(t,e){this.query=t,this.ka=e,this.Ma=null,this.current=!1,this.Oa=Jo(),this.mutatedKeys=Jo(),this.$a=Qs(t),this.Fa=new xh(this.$a)}get Ba(){return this.ka}La(t,e){const n=e?e.qa:new Ah,i=e?e.Fa:this.Fa;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Bs(this.query)&&i.size===this.query.limit?i.last():null,c=Us(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),l=Ys(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ua(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.$a(l,a)>0||c&&this.$a(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),Bs(this.query)||Us(this.query))for(;s.size>this.query.limit;){const t=Bs(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Fa:s,qa:n,ei:o,mutatedKeys:r}}Ua(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Fa;this.Fa=t.Fa,this.mutatedKeys=t.mutatedKeys;const r=t.qa.ya();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Xi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.$a(t.doc,e.doc))),this.Ka(n);const s=e?this.Ga():[],o=0===this.Oa.size&&this.current?1:0,a=o!==this.Ma;return this.Ma=o,0!==r.length||a?{snapshot:new Oh(this.query,t.Fa,i,r,t.mutatedKeys,0===o,a,!1),Qa:s}:{Qa:s}}Ta(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new Ah,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(t){return!this.ka.has(t)&&!!this.Fa.has(t)&&!this.Fa.get(t).hasLocalMutations}Ka(t){t&&(t.addedDocuments.forEach((t=>this.ka=this.ka.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ka=this.ka.delete(t))),this.current=t.current)}Ga(){if(!this.current)return[];const t=this.Oa;this.Oa=Jo(),this.Fa.forEach((t=>{this.ja(t.key)&&(this.Oa=this.Oa.add(t.key))}));const e=[];return t.forEach((t=>{this.Oa.has(t)||e.push(new qh(t))})),this.Oa.forEach((n=>{t.has(n)||e.push(new zh(n))})),e}Wa(t){this.ka=t.hi,this.Oa=Jo();const e=this.La(t.documents);return this.applyChanges(e,!0)}za(){return Oh.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,0===this.Ma)}}class Zh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wh{constructor(t){this.key=t,this.Ha=!1}}class Kh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ja={},this.Ya=new Fo((t=>Gs(t)),Ks),this.Xa=new Map,this.Za=new Set,this.tu=new Bo(Ur.comparator),this.eu=new Map,this.nu=new yl,this.su={},this.iu=new Map,this.ru=Eu.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return!0===this.ou}}async function Gh(t,e){const n=Td(t);let i,r;const s=n.Ya.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.za();else{const t=await cl(n.localStore,Zs(e));n.isPrimaryClient&&th(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Xh(n,e,i,"current"===s)}return r}async function Xh(t,e,n,i){t.au=(e,n,i)=>async function(t,e,n,i){let r=e.view.La(n);r.ei&&(r=await ll(t.localStore,e.query,!1).then((({documents:t})=>e.view.La(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return ud(t,e.targetId,o.Qa),o.snapshot}(t,e,n,i);const r=await ll(t.localStore,e,!0),s=new Hh(e,r.hi),o=s.La(r.documents),a=ia.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);ud(t,n,c.Qa);const u=new Zh(e,n,s);return t.Ya.set(e,u),t.Xa.has(n)?t.Xa.get(n).push(e):t.Xa.set(n,[e]),c.snapshot}async function Yh(t,e){const n=Ji(t),i=n.Ya.get(e),r=n.Xa.get(i.targetId);if(r.length>1)return n.Xa.set(i.targetId,r.filter((t=>!Ks(t,e)))),void n.Ya.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ul(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),eh(n.remoteStore,i.targetId),ad(n,i.targetId)})).catch(Ou)):(ad(n,i.targetId),await ul(n.localStore,i.targetId,!0))}async function Qh(t,e,n){const i=Ed(t);try{const t=await function(t,e){const n=Ji(t),i=vr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Jo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.ui.Us(t,r).next((r=>{s=r;const o=[];for(const t of e){const e=To(t,s.get(t.key));null!=e&&o.push(new xo(t.key,e,cs(e.value.mapValue),bo.exists(!0)))}return n.Fs.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.su[t.currentUser.toKey()];i||(i=new Bo(pr)),i=i.insert(e,n),t.su[t.currentUser.toKey()]=i}(i,t.batchId,n),await dd(i,t.changes),await fh(i.remoteStore)}catch(t){const e=Ch(t,"Failed to persist write");n.reject(e)}}async function Jh(t,e){const n=Ji(t);try{const t=await sl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.eu.get(e);i&&(Yi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ha=!0:t.modifiedDocuments.size>0?Yi(i.Ha):t.removedDocuments.size>0&&(Yi(i.Ha),i.Ha=!1))})),await dd(n,t,e)}catch(t){await Ou(t)}}function td(t,e,n){const i=Ji(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Ya.forEach(((n,i)=>{const r=i.view.Ta(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ji(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Ta(e)&&(i=!0)})),i&&Mh(n)}(i.eventManager,e),t.length&&i.Ja.Ko(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ed(t,e,n){const i=Ji(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.eu.get(e),s=r&&r.key;if(s){let t=new Bo(Ur.comparator);t=t.insert(s,us.newNoDocument(s,yr.min()));const n=Jo().add(s),r=new na(yr.min(),new Map,new zo(pr),t,n);await Jh(i,r),i.tu=i.tu.remove(s),i.eu.delete(e),hd(i)}else await ul(i.localStore,e,!1).then((()=>ad(i,e,n))).catch(Ou)}async function nd(t,e){const n=Ji(t),i=e.batch.batchId;try{const t=await il(n.localStore,e);od(n,i,null),sd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await dd(n,t)}catch(t){await Ou(t)}}async function id(t,e,n){const i=Ji(t);try{const t=await function(t,e){const n=Ji(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.Fs.lookupMutationBatch(t,e).next((e=>(Yi(null!==e),i=e.keys(),n.Fs.removeMutationBatch(t,e)))).next((()=>n.Fs.performConsistencyCheck(t))).next((()=>n.ui.Us(t,i)))}))}(i.localStore,e);od(i,e,n),sd(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await dd(i,t)}catch(n){await Ou(n)}}async function rd(t,e){const n=Ji(t);oh(n.remoteStore)||Zi("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Ji(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.Fs.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const i=n.iu.get(t)||[];i.push(e),n.iu.set(t,i)}catch(t){const n=Ch(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function sd(t,e){(t.iu.get(e)||[]).forEach((t=>{t.resolve()})),t.iu.delete(e)}function od(t,e,n){const i=Ji(t);let r=i.su[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.su[i.currentUser.toKey()]=r}}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Xa.get(e))t.Ya.delete(i),n&&t.Ja.uu(i,n);t.Xa.delete(e),t.isPrimaryClient&&t.nu.Ri(e).forEach((e=>{t.nu.containsKey(e)||cd(t,e)}))}function cd(t,e){t.Za.delete(e.path.canonicalString());const n=t.tu.get(e);null!==n&&(eh(t.remoteStore,n),t.tu=t.tu.remove(e),t.eu.delete(n),hd(t))}function ud(t,e,n){for(const i of n)i instanceof zh?(t.nu.addReference(i.key,e),ld(t,i)):i instanceof qh?(Zi("SyncEngine","Document no longer in limbo: "+i.key),t.nu.removeReference(i.key,e),t.nu.containsKey(i.key)||cd(t,i.key)):Xi()}function ld(t,e){const n=e.key,i=n.path.canonicalString();t.tu.get(n)||t.Za.has(i)||(Zi("SyncEngine","New document in limbo: "+n),t.Za.add(i),hd(t))}function hd(t){for(;t.Za.size>0&&t.tu.size<t.maxConcurrentLimboResolutions;){const e=t.Za.values().next().value;t.Za.delete(e);const n=new Ur(Sr.fromString(e)),i=t.ru.next();t.eu.set(i,new Wh(n)),t.tu=t.tu.insert(n,i),th(t.remoteStore,new Rc(Zs(Fs(n.path)),i,2,hr.A))}}async function dd(t,e,n){const i=Ji(t),r=[],s=[],o=[];i.Ya.isEmpty()||(i.Ya.forEach(((t,a)=>{o.push(i.au(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Qu.Js(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ja.Ko(r),await async function(t,e){const n=Ji(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>vc.forEach(e,(e=>vc.forEach(e.zs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>vc.forEach(e.Hs,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Ic(t))throw t;Zi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.si.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.si=n.si.insert(t,r)}}}(i.localStore,s))}async function fd(t,e){const n=Ji(t);if(!n.currentUser.isEqual(e)){Zi("SyncEngine","User change. New user:",e.toKey());const t=await nl(n.localStore,e);n.currentUser=e,function(t,e){t.iu.forEach((t=>{t.forEach((t=>{t.reject(new er(tr.CANCELLED,e))}))})),t.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await dd(n,t.ci)}}function pd(t,e){const n=Ji(t),i=n.eu.get(e);if(i&&i.Ha)return Jo().add(i.key);{let t=Jo();const i=n.Xa.get(e);if(!i)return t;for(const e of i){const i=n.Ya.get(e);t=t.unionWith(i.view.Ba)}return t}}async function md(t,e){const n=Ji(t),i=await ll(n.localStore,e.query,!0),r=e.view.Wa(i);return n.isPrimaryClient&&ud(n,e.targetId,r.Qa),r}async function gd(t){const e=Ji(t);return dl(e.localStore).then((t=>dd(e,t)))}async function vd(t,e,n,i){const r=Ji(t),s=await function(t,e){const n=Ji(t),i=Ji(n.Fs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>i.ln(t,e).next((e=>e?n.ui.Us(t,e):vc.resolve(null)))))}(r.localStore,e);null!==s?("pending"===n?await fh(r.remoteStore):"acknowledged"===n||"rejected"===n?(od(r,e,i||null),sd(r,e),function(t,e){Ji(Ji(t).Fs).dn(e)}(r.localStore,e)):Xi(),await dd(r,s)):Zi("SyncEngine","Cannot apply mutation batch with id: "+e)}async function yd(t,e){const n=Ji(t);if(Td(n),Ed(n),!0===e&&!0!==n.ou){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await bd(n,t.toArray());n.ou=!0,await Sh(n.remoteStore,!0);for(const i of e)th(n.remoteStore,i)}else if(!1===e&&!1!==n.ou){const t=[];let e=Promise.resolve();n.Xa.forEach(((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?t.push(r):e=e.then((()=>(ad(n,r),ul(n.localStore,r,!0)))),eh(n.remoteStore,r)})),await e,await bd(n,t),function(t){const e=Ji(t);e.eu.forEach(((t,n)=>{eh(e.remoteStore,n)})),e.nu.bi(),e.eu=new Map,e.tu=new Bo(Ur.comparator)}(n),n.ou=!1,await Sh(n.remoteStore,!1)}}async function bd(t,e,n){const i=Ji(t),r=[],s=[];for(const o of e){let t;const e=i.Xa.get(o);if(e&&0!==e.length){t=await cl(i.localStore,Zs(e[0]));for(const t of e){const e=i.Ya.get(t),n=await md(i,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await hl(i.localStore,o);t=await cl(i.localStore,e),await Xh(i,wd(e),o,!1)}r.push(t)}return i.Ja.Ko(s),r}function wd(t){return Vs(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function _d(t){const e=Ji(t);return Ji(Ji(e.localStore).persistence).Ms()}async function Id(t,e,n,i){const r=Ji(t);if(r.ou)Zi("SyncEngine","Ignoring unexpected query state notification.");else if(r.Xa.has(e))switch(n){case"current":case"not-current":{const t=await dl(r.localStore),i=na.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await dd(r,t,i);break}case"rejected":await ul(r.localStore,e,!0),ad(r,e,i);break;default:Xi()}}async function Sd(t,e,n){const i=Td(t);if(i.ou){for(const t of e){if(i.Xa.has(t)){Zi("SyncEngine","Adding an already active target "+t);continue}const e=await hl(i.localStore,t),n=await cl(i.localStore,e);await Xh(i,wd(e),n.targetId,!1),th(i.remoteStore,n)}for(const t of n)i.Xa.has(t)&&await ul(i.localStore,t,!1).then((()=>{eh(i.remoteStore,t),ad(i,t)})).catch(Ou)}}function Td(t){const e=Ji(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ed.bind(null,e),e.Ja.Ko=Ph.bind(null,e.eventManager),e.Ja.uu=$h.bind(null,e.eventManager),e}function Ed(t){const e=Ji(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=id.bind(null,e),e}function kd(t,e,n){const i=Ji(t);(async function(t,e,n){try{const i=await e.getMetadata();if(await function(t,e){const n=Ji(t),i=va(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n.fs.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(i)>=0))}(t.localStore,i))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(i));n._updateProgress(jh(i));const r=new Uh(i,t.localStore,e.M);let s=await e.cu();for(;s;){const t=await r.xa(s);t&&n._updateProgress(t),s=await e.cu()}const o=await r.complete();await dd(t,o.$s,void 0),await function(t,e){const n=Ji(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n.fs.saveBundleMetadata(t,e)))}(t.localStore,i),n._completeWith(o.progress)}catch(t){Ki("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,e,n).then((()=>{i.sharedClientState.notifyBundleLoaded()}))}class Cd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=ql(t.databaseInfo.databaseId),this.sharedClientState=this.hu(t),this.persistence=this.lu(t),await this.persistence.start(),this.gcScheduler=this.fu(t),this.localStore=this.du(t)}fu(t){return null}du(t){return el(this.persistence,new Ju,t.initialUser,this.M)}lu(t){return new Tl(kl.Wi,this.M)}hu(t){return new $l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xd extends Cd{constructor(t,e,n){super(),this._u=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await fl(this.localStore),await this._u.initialize(this,t),await Ed(this._u.syncEngine),await fh(this._u.remoteStore),await this.persistence.ps((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}du(t){return el(this.persistence,new Ju,t.initialUser,this.M)}fu(t){const e=this.persistence.referenceDelegate.garbageCollector;return new Du(e,t.asyncQueue)}lu(t){const e=Gu(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?vu.withCacheSize(this.cacheSizeBytes):vu.DEFAULT;return new Zu(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,jl(),zl(),this.M,this.sharedClientState,!!this.forceOwnership)}hu(t){return new $l}}class Ad extends xd{constructor(t,e){super(t,e,!1),this._u=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this._u.syncEngine;this.sharedClientState instanceof Pl&&(this.sharedClientState.syncEngine={Nr:vd.bind(null,e),kr:Id.bind(null,e),Mr:Sd.bind(null,e),Ms:_d.bind(null,e),Cr:gd.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ps((async t=>{await yd(this._u.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())}))}hu(t){const e=jl();if(!Pl.vt(e))throw new er(tr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Gu(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Pl(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Od{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>td(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fd.bind(null,this.syncEngine),await Sh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Rh}createDatastore(t){const e=ql(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Ul(i));var i;return function(t,e,n,i){return new Gl(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>td(this.syncEngine,t,0),s=Vl.vt()?new Vl:new Ml,new Yl(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Kh(t,e,n,i,r,s);return o&&(a.ou=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ji(t);Zi("RemoteStore","RemoteStore shutting down."),e.ha.add(5),await Jl(e),e.fa.shutdown(),e.da.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.wu(this.observer.next,t)}error(t){this.observer.error?this.wu(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}mu(){this.muted=!0}wu(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e){this.gu=t,this.M=e,this.metadata=new nr,this.buffer=new Uint8Array,this.yu=new TextDecoder("utf-8"),this.pu().then((t=>{t&&t.Da()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.gu.cancel()}async getMetadata(){return this.metadata.promise}async cu(){return await this.getMetadata(),this.pu()}async pu(){const t=await this.Iu();if(null===t)return null;const e=this.yu.decode(t),n=Number(e);isNaN(n)&&this.Tu(`length string (${e}) is not valid number`);const i=await this.Eu(n);return new Fh(JSON.parse(i),t.length+n)}Au(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async Iu(){for(;this.Au()<0;)if(await this.Ru())break;if(0===this.buffer.length)return null;const t=this.Au();t<0&&this.Tu("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Eu(t){for(;this.buffer.length<t;)await this.Ru()&&this.Tu("Reached the end of bundle when more is expected.");const e=this.yu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Tu(t){throw this.gu.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ru(){const t=await this.gu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new er(tr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=Ji(t),i=Ta(n.M)+"/documents",r={documents:e.map((t=>wa(n.M,t)))},s=await n.uo("BatchGetDocuments",i,r),o=new Map;s.forEach((t=>{const e=xa(n.M,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Yi(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ro(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=Ur.fromPath(e);this.mutations.push(new Do(n,this.precondition(n)))})),await async function(t,e){const n=Ji(t),i=Ta(n.M)+"/documents",r={writes:e.map((t=>Oa(n.M,t)))};await n.io("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Xi();e=yr.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new er(tr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?bo.updateTime(e):bo.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(yr.min()))throw new er(tr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return bo.updateTime(e)}return bo.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(t,e,n,i){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=i,this.bu=5,this.vo=new Hl(this.asyncQueue,"transaction_retry")}run(){this.bu-=1,this.Pu()}Pu(){this.vo.po((async()=>{const t=new Ld(this.datastore),e=this.Vu(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.vu(t)}))))})).catch((t=>{this.vu(t)}))}))}Vu(t){try{const e=this.updateFunction(t);return!Vr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}vu(t){this.bu>0&&this.Su(t)?(this.bu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Pu(),Promise.resolve())))):this.deferred.reject(t)}Su(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Mo(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ui.UNAUTHENTICATED,this.clientId=fr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new er(tr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ch(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Md(t,e){t.asyncQueue.verifyOperationInProgress(),Zi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await nl(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fd(t);Zi("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Ih(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ih(e.remoteStore,n))),t.onlineComponents=e}async function Fd(t){return t.offlineComponents||(Zi("FirestoreClient","Using default OfflineComponentProvider"),await Md(t,new Cd)),t.offlineComponents}async function Bd(t){return t.onlineComponents||(Zi("FirestoreClient","Using default OnlineComponentProvider"),await Vd(t,new Od)),t.onlineComponents}function Ud(t){return Fd(t).then((t=>t.persistence))}function jd(t){return Fd(t).then((t=>t.localStore))}function zd(t){return Bd(t).then((t=>t.remoteStore))}function qd(t){return Bd(t).then((t=>t.syncEngine))}async function Hd(t){const e=await Bd(t),n=e.eventManager;return n.onListen=Gh.bind(null,e.syncEngine),n.onUnlisten=Yh.bind(null,e.syncEngine),n}function Zd(t){return t.asyncQueue.enqueue((async()=>{const e=await Ud(t),n=await zd(t);return e.setNetworkEnabled(!0),function(t){const e=Ji(t);return e.ha.delete(0),Ql(e)}(n)}))}function Wd(t){return t.asyncQueue.enqueue((async()=>{const e=await Ud(t),n=await zd(t);return e.setNetworkEnabled(!1),async function(t){const e=Ji(t);e.ha.add(0),await Jl(e),e.da.set("Offline")}(n)}))}function Kd(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const i=await function(t,e){const n=Ji(t);return n.persistence.runTransaction("read document","readonly",(t=>n.ui.Bs(t,e)))}(t,e);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new er(tr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const i=Ch(t,`Failed to get document '${e} from cache`);n.reject(i)}}(await jd(t),e,n))),n.promise}function Gd(t,e,n={}){const i=new nr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Rd({next:s=>{e.enqueueAndForget((()=>Lh(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new er(tr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new er(tr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Vh(Fs(n.path),s,{includeMetadataChanges:!0,Sa:!0});return Dh(t,o)}(await Hd(t),t.asyncQueue,e,n,i))),i.promise}function Xd(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const i=await ll(t,e,!0),r=new Hh(e,i.hi),s=r.La(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const i=Ch(t,`Failed to execute query '${e} against cache`);n.reject(i)}}(await jd(t),e,n))),n.promise}function Yd(t,e,n={}){const i=new nr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Rd({next:n=>{e.enqueueAndForget((()=>Lh(t,o))),n.fromCache&&"server"===i.source?r.reject(new er(tr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Vh(n,s,{includeMetadataChanges:!0,Sa:!0});return Dh(t,o)}(await Hd(t),t.asyncQueue,e,n,i))),i.promise}function Qd(t,e){const n=new Rd(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){Ji(t).Ia.add(e),e.next()}(await Hd(t),n))),()=>{n.mu(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){Ji(t).Ia.delete(e)}(await Hd(t),n)))}}function Jd(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget((async()=>{const i=await function(t){return Bd(t).then((t=>t.datastore))}(t);new Pd(t.asyncQueue,i,e,n).run()})),n.promise}function tf(t,e,n,i){const r=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Dd(t,e)}(function(t,e){if(t instanceof Uint8Array)return Nd(t,e);if(t instanceof ArrayBuffer)return Nd(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,ql(e));t.asyncQueue.enqueueAndForget((async()=>{kd(await qd(t),r,i)}))}function ef(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=Ji(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n.fs.getNamedQuery(t,e)))}(await jd(t),e)))}const nf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e,n){if(!n)throw new er(tr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sf(t,e,n,i){if(!0===e&&!0===i)throw new er(tr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function of(t){if(!Ur.isDocumentKey(t))throw new er(tr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function af(t){if(Ur.isDocumentKey(t))throw new er(tr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Xi()}function uf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new er(tr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(t);throw new er(tr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lf(t,e){if(e<=0)throw new er(tr.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new er(tr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new er(tr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,sf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hf({}),this._settingsFrozen=!1,t instanceof Mr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new er(tr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(t.options.projectId)}(t))}get app(){if(!this._app)throw new er(tr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new er(tr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rr;switch(t.type){case"gapi":const e=t.client;return Yi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new cr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new er(tr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=nf.get(t);e&&(Zi("ComponentProvider","Removing Datastore"),nf.delete(t),e.terminate())}(this),Promise.resolve()}}function ff(t,e,n,i={}){var r;const s=(t=uf(t,df))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Ki("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ui.MOCK_USER;else{e=(0,c.Sg)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new er(tr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ui(s)}t._authCredentials=new sr(new ir(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pf(this.firestore,t,this._key)}}class mf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new mf(this.firestore,t,this._query)}}class gf extends mf{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pf(this.firestore,null,new Ur(t))}withConverter(t){return new gf(this.firestore,t,this._path)}}function vf(t,e,...n){if(t=(0,c.m9)(t),rf("collection","path",e),t instanceof df){const i=Sr.fromString(e,...n);return af(i),new gf(t,null,i)}{if(!(t instanceof pf||t instanceof gf))throw new er(tr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Sr.fromString(e,...n));return af(i),new gf(t.firestore,null,i)}}function yf(t,e){if(t=uf(t,df),rf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new er(tr.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new mf(t,null,function(t){return new Ms(Sr.emptyPath(),t)}(e))}function bf(t,e,...n){if(t=(0,c.m9)(t),1===arguments.length&&(e=fr.R()),rf("doc","path",e),t instanceof df){const i=Sr.fromString(e,...n);return of(i),new pf(t,null,new Ur(i))}{if(!(t instanceof pf||t instanceof gf))throw new er(tr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Sr.fromString(e,...n));return of(i),new pf(t.firestore,t instanceof gf?t.converter:null,new Ur(i))}}function wf(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),(t instanceof pf||t instanceof gf)&&(e instanceof pf||e instanceof gf)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function _f(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),t instanceof mf&&e instanceof mf&&t.firestore===e.firestore&&Ks(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class If{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new Hl(this,"async_queue_retry"),this.Fu=()=>{const t=zl();t&&Zi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.vo.To()};const t=zl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Bu(),this.Lu(t)}enterRestrictedMode(t){if(!this.xu){this.xu=!0,this.Ou=t||!1;const e=zl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Fu)}}enqueue(t){if(this.Bu(),this.xu)return new Promise((()=>{}));const e=new nr;return this.Lu((()=>this.xu&&this.Ou?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Cu.push(t),this.qu())))}async qu(){if(0!==this.Cu.length){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(S){if(!Ic(S))throw S;Zi("AsyncQueue","Operation failed with retryable error: "+S)}this.Cu.length>0&&this.vo.po((()=>this.qu()))}}Lu(t){const e=this.Du.then((()=>(this.Mu=!0,t().catch((t=>{this.ku=t,this.Mu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Wi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Mu=!1,t))))));return this.Du=e,e}enqueueAfterDelay(t,e,n){this.Bu(),this.$u.indexOf(t)>-1&&(e=0);const i=kh.createAndSchedule(this,t,e,n,(t=>this.Uu(t)));return this.Nu.push(i),i}Bu(){this.ku&&Xi()}verifyOperationInProgress(){}async Ku(){let t;do{t=this.Du,await t}while(t!==this.Du)}Gu(t){for(const e of this.Nu)if(e.timerId===t)return!0;return!1}Qu(t){return this.Ku().then((()=>{this.Nu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Nu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ku()}))}ju(t){this.$u.push(t)}Uu(t){const e=this.Nu.indexOf(t);this.Nu.splice(e,1)}}function Sf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Tf{constructor(){this._progressObserver={},this._taskCompletionResolver=new nr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=-1;class kf extends df{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new If,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xf(this),this._firestoreClient.terminate()}}function Cf(t){return t._firestoreClient||xf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xf(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new $r(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new $d(t._authCredentials,t._appCheckCredentials,t._queue,i)}function Af(t,e){Vf(t=uf(t,kf));const n=Cf(t),i=t._freezeSettings(),r=new Od;return Nf(n,r,new xd(r,i.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Of(t){Vf(t=uf(t,kf));const e=Cf(t),n=t._freezeSettings(),i=new Od;return Nf(e,i,new Ad(i,n.cacheSizeBytes))}function Nf(t,e,n){const i=new nr;return t.asyncQueue.enqueue((async()=>{try{await Md(t,n),await Vd(t,e),i.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===tr.FAILED_PRECONDITION||t.code===tr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}})).then((()=>i.promise))}function Rf(t){if(t._initialized&&!t._terminated)throw new er(tr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nr;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!bc.vt())return Promise.resolve();const e=t+"main";await bc.delete(e)}(Gu(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function Df(t){return function(t){const e=new nr;return t.asyncQueue.enqueueAndForget((async()=>rd(await qd(t),e))),e.promise}(Cf(t=uf(t,kf)))}function Lf(t){return Zd(Cf(t=uf(t,kf)))}function Pf(t){return Wd(Cf(t=uf(t,kf)))}function $f(t,e){const n=Cf(t=uf(t,kf)),i=new Tf;return tf(n,t._databaseId,e,i),i}function Mf(t,e){return ef(Cf(t=uf(t,kf)),e).then((e=>e?new mf(t,null,e.query):null))}function Vf(t){if(t._initialized||t._terminated)throw new er(tr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new er(tr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Er(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bf(xr.fromBase64String(t))}catch(t){throw new er(tr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Bf(xr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new er(tr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new er(tr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pr(this._lat,t._lat)||pr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=/^__.*__$/;class qf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new xo(t,this.data,this.fieldMask,e,this.fieldTransforms):new Co(t,this.data,e,this.fieldTransforms)}}class Hf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new xo(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Zf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xi()}}class Wf{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Wu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get zu(){return this.settings.zu}Hu(t){return new Wf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ju(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Hu({path:n,Yu:!1});return i.Xu(t),i}Zu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Hu({path:n,Yu:!1});return i.Wu(),i}tc(t){return this.Hu({path:void 0,Yu:!0})}ec(t){return fp(t,this.settings.methodName,this.settings.nc||!1,this.path,this.settings.sc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Wu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Xu(this.path.get(t))}Xu(t){if(0===t.length)throw this.ec("Document fields must not be empty");if(Zf(this.zu)&&zf.test(t))throw this.ec('Document fields cannot begin and end with "__"')}}class Kf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||ql(t)}ic(t,e,n,i=!1){return new Wf({zu:t,methodName:e,sc:n,path:Er.emptyPath(),Yu:!1,nc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Gf(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new Kf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xf(t,e,n,i,r,s={}){const o=t.ic(s.merge||s.mergeFields?2:0,e,n,r);up("Data must be an object, but it was:",o,i);const a=ap(i,o);let c,u;if(s.merge)c=new kr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=lp(e,i,n);if(!o.contains(r))throw new er(tr.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);pp(t,r)||t.push(r)}c=new kr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new qf(new as(a),c,u)}class Yf extends Uf{_toFieldTransform(t){if(2!==t.zu)throw 1===t.zu?t.ec(`${this._methodName}() can only appear at the top level of your update data`):t.ec(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Yf}}function Qf(t,e,n){return new Wf({zu:3,sc:e.settings.sc,methodName:t._methodName,Yu:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class Jf extends Uf{_toFieldTransform(t){return new go(t.path,new ao)}isEqual(t){return t instanceof Jf}}class tp extends Uf{constructor(t,e){super(t),this.rc=e}_toFieldTransform(t){const e=Qf(this,t,!0),n=this.rc.map((t=>op(t,e))),i=new co(n);return new go(t.path,i)}isEqual(t){return this===t}}class ep extends Uf{constructor(t,e){super(t),this.rc=e}_toFieldTransform(t){const e=Qf(this,t,!0),n=this.rc.map((t=>op(t,e))),i=new lo(n);return new go(t.path,i)}isEqual(t){return this===t}}class np extends Uf{constructor(t,e){super(t),this.oc=e}_toFieldTransform(t){const e=new fo(t.M,no(t.M,this.oc));return new go(t.path,e)}isEqual(t){return this===t}}function ip(t,e,n,i){const r=t.ic(1,e,n);up("Data must be an object, but it was:",r,i);const s=[],o=as.empty();wr(i,((t,i)=>{const a=dp(e,t,n);i=(0,c.m9)(i);const u=r.Zu(a);if(i instanceof Yf)s.push(a);else{const t=op(i,u);null!=t&&(s.push(a),o.set(a,t))}}));const a=new kr(s);return new Hf(o,a,r.fieldTransforms)}function rp(t,e,n,i,r,s){const o=t.ic(1,e,n),a=[lp(e,i,n)],u=[r];if(s.length%2!=0)throw new er(tr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(lp(e,s[c])),u.push(s[c+1]);const l=[],h=as.empty();for(let f=a.length-1;f>=0;--f)if(!pp(l,a[f])){const t=a[f];let e=u[f];e=(0,c.m9)(e);const n=o.Zu(t);if(e instanceof Yf)l.push(t);else{const i=op(e,n);null!=i&&(l.push(t),h.set(t,i))}}const d=new kr(l);return new Hf(h,d,o.fieldTransforms)}function sp(t,e,n,i=!1){return op(n,t.ic(i?4:3,e))}function op(t,e){if(cp(t=(0,c.m9)(t)))return up("Unsupported field value:",e,t),ap(t,e);if(t instanceof Uf)return function(t,e){if(!Zf(e.zu))throw e.ec(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ec(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Yu&&4!==e.zu)throw e.ec("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=op(r,e.tc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return no(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=vr.fromDate(t);return{timestampValue:pa(e.M,n)}}if(t instanceof vr){const n=new vr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pa(e.M,n)}}if(t instanceof jf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Bf)return{bytesValue:ma(e.M,t._byteString)};if(t instanceof pf){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ec(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ya(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ec(`Unsupported field value: ${cf(t)}`)}(t,e)}function ap(t,e){const n={};return _r(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,((t,i)=>{const r=op(i,e.Ju(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function cp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof vr||t instanceof jf||t instanceof Bf||t instanceof pf||t instanceof Uf)}function up(t,e,n){if(!cp(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=cf(n);throw"an object"===i?e.ec(t+" a custom object"):e.ec(t+" "+i)}}function lp(t,e,n){if((e=(0,c.m9)(e))instanceof Ff)return e._internalPath;if("string"==typeof e)return dp(t,e);throw fp("Field path arguments must be of type string or ",t,!1,void 0,n)}const hp=new RegExp("[~\\*/\\[\\]]");function dp(t,e,n){if(e.search(hp)>=0)throw fp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ff(...e.split("."))._internalPath}catch(i){throw fp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fp(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new er(tr.INVALID_ARGUMENT,a+t+c)}function pp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new gp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class gp extends mp{data(){return super.data()}}function vp(t,e){return"string"==typeof e?dp(t,e):e instanceof Ff?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class bp extends mp{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class wp extends bp{data(t={}){return super.data(t)}}class _p{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new yp(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new wp(this._firestore,this._userDataWriter,n.key,n,new yp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new er(tr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new wp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new yp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new wp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new yp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Ip(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ip(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xi()}}function Sp(t,e){return t instanceof bp&&e instanceof bp?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof _p&&e instanceof _p&&t._firestore===e._firestore&&_f(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){if(Us(t)&&0===t.explicitOrderBy.length)throw new er(tr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}function kp(t,...e){for(const n of e)t=n._apply(t);return t}class Cp extends Ep{constructor(t,e,n){super(),this.ac=t,this.uc=e,this.cc=n,this.type="where"}_apply(t){const e=Gf(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new er(tr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){jp(o,s);const e=[];for(const n of o)e.push(Up(i,t,n));a={arrayValue:{values:e}}}else a=Up(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||jp(o,s),a=sp(n,e,o,"in"===s||"not-in"===s);const c=Ss.create(r,s,a);return function(t,e){if(e.S()){const n=zs(t);if(null!==n&&!n.isEqual(e.field))throw new er(tr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=js(t);null!==i&&zp(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new er(tr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new er(tr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.ac,this.uc,this.cc);return new mf(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function xp(t,e,n){const i=e,r=vp("where",t);return new Cp(r,i,n)}class Ap extends Ep{constructor(t,e){super(),this.ac=t,this.hc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new er(tr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new er(tr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Ds(e,n);return function(t,e){if(null===js(t)){const n=zs(t);null!==n&&zp(t,n,e.field)}}(t,i),i}(t._query,this.ac,this.hc);return new mf(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ms(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Op(t,e="asc"){const n=e,i=vp("orderBy",t);return new Ap(i,n)}class Np extends Ep{constructor(t,e,n){super(),this.type=t,this.lc=e,this.fc=n}_apply(t){return new mf(t.firestore,t.converter,Ws(t._query,this.lc,this.fc))}}function Rp(t){return lf("limit",t),new Np("limit",t,"F")}function Dp(t){return lf("limitToLast",t),new Np("limitToLast",t,"L")}class Lp extends Ep{constructor(t,e,n){super(),this.type=t,this.dc=e,this._c=n}_apply(t){const e=Bp(t,this.type,this.dc,this._c);return new mf(t.firestore,t.converter,function(t,e){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Pp(...t){return new Lp("startAt",t,!0)}function $p(...t){return new Lp("startAfter",t,!1)}class Mp extends Ep{constructor(t,e,n){super(),this.type=t,this.dc=e,this._c=n}_apply(t){const e=Bp(t,this.type,this.dc,this._c);return new mf(t.firestore,t.converter,function(t,e){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Vp(...t){return new Mp("endBefore",t,!1)}function Fp(...t){return new Mp("endAt",t,!0)}function Bp(t,e,n,i){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof mp)return function(t,e,n,i,r){if(!i)throw new er(tr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Hs(t))if(o.field.isKeyField())s.push(Yr(e,i.key));else{const t=i.data.field(o.field);if(Dr(t))throw new er(tr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new er(tr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Rs(s,r)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=Gf(t.firestore);return function(t,e,n,i,r,s){const o=t.explicitOrderBy;if(r.length>o.length)throw new er(tr.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new er(tr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!qs(t)&&-1!==s.indexOf("/"))throw new er(tr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(Sr.fromString(s));if(!Ur.isDocumentKey(n))throw new er(tr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new Ur(n);a.push(Yr(e,r))}else{const t=sp(n,i,s);a.push(t)}}return new Rs(a,s)}(t._query,t.firestore._databaseId,r,e,n,i)}}function Up(t,e,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new er(tr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qs(e)&&-1!==n.indexOf("/"))throw new er(tr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Sr.fromString(n));if(!Ur.isDocumentKey(i))throw new er(tr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Yr(t,new Ur(i))}if(n instanceof pf)return Yr(t,n._key);throw new er(tr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cf(n)}.`)}function jp(t,e){if(!Array.isArray(t)||0===t.length)throw new er(tr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new er(tr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function zp(t,e,n){if(!n.isEqual(e))throw new er(tr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{convertValue(t,e="none"){switch(qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Xi()}}convertObject(t,e){const n={};return wr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new jf(Nr(t.latitude),Nr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Lr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Pr(t));default:return null}}convertTimestamp(t){const e=Or(t);return new vr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Sr.fromString(t);Yi(Ha(n));const i=new Mr(n.get(1),n.get(3)),r=new Ur(n.popFirst(5));return i.isEqual(e)||Wi(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Zp extends qp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pf(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Gf(t)}set(t,e,n){this._verifyNotCommitted();const i=Kp(t,this._firestore),r=Hp(i.converter,e,n),s=Xf(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,bo.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const r=Kp(t,this._firestore);let s;return s="string"==typeof(e=(0,c.m9)(e))||e instanceof Ff?rp(this._dataReader,"WriteBatch.update",r._key,e,n,i):ip(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(s.toMutation(r._key,bo.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Kp(t,this._firestore);return this._mutations=this._mutations.concat(new Ro(e._key,bo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new er(tr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Kp(t,e){if((t=(0,c.m9)(t)).firestore!==e)throw new er(tr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){t=uf(t,pf);const e=uf(t.firestore,kf);return Gd(Cf(e),t._key).then((n=>um(e,t,n)))}class Xp extends qp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pf(this.firestore,null,e)}}function Yp(t){t=uf(t,pf);const e=uf(t.firestore,kf),n=Cf(e),i=new Xp(e);return Kd(n,t._key).then((n=>new bp(e,i,t._key,n,new yp(null!==n&&n.hasLocalMutations,!0),t.converter)))}function Qp(t){t=uf(t,pf);const e=uf(t.firestore,kf);return Gd(Cf(e),t._key,{source:"server"}).then((n=>um(e,t,n)))}function Jp(t){t=uf(t,mf);const e=uf(t.firestore,kf),n=Cf(e),i=new Xp(e);return Tp(t._query),Yd(n,t._query).then((n=>new _p(e,i,t,n)))}function tm(t){t=uf(t,mf);const e=uf(t.firestore,kf),n=Cf(e),i=new Xp(e);return Xd(n,t._query).then((n=>new _p(e,i,t,n)))}function em(t){t=uf(t,mf);const e=uf(t.firestore,kf),n=Cf(e),i=new Xp(e);return Yd(n,t._query,{source:"server"}).then((n=>new _p(e,i,t,n)))}function nm(t,e,n){t=uf(t,pf);const i=uf(t.firestore,kf),r=Hp(t.converter,e,n);return cm(i,[Xf(Gf(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,bo.none())])}function im(t,e,n,...i){t=uf(t,pf);const r=uf(t.firestore,kf),s=Gf(r);let o;return o="string"==typeof(e=(0,c.m9)(e))||e instanceof Ff?rp(s,"updateDoc",t._key,e,n,i):ip(s,"updateDoc",t._key,e),cm(r,[o.toMutation(t._key,bo.exists(!0))])}function rm(t){return cm(uf(t.firestore,kf),[new Ro(t._key,bo.none())])}function sm(t,e){const n=uf(t.firestore,kf),i=bf(t),r=Hp(t.converter,e);return cm(n,[Xf(Gf(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,bo.exists(!1))]).then((()=>i))}function om(t,...e){var n,i,r;t=(0,c.m9)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Sf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Sf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,l,h;if(t instanceof pf)l=uf(t.firestore,kf),h=Fs(t._key.path),u={next:n=>{e[o]&&e[o](um(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=uf(t,mf);l=uf(n.firestore,kf),h=n._query;const i=new Xp(l);u={next:t=>{e[o]&&e[o](new _p(l,i,n,t))},error:e[o+1],complete:e[o+2]},Tp(t._query)}return function(t,e,n,i){const r=new Rd(i),s=new Vh(e,r,n);return t.asyncQueue.enqueueAndForget((async()=>Dh(await Hd(t),s))),()=>{r.mu(),t.asyncQueue.enqueueAndForget((async()=>Lh(await Hd(t),s)))}}(Cf(l),h,a,u)}function am(t,e){return Qd(Cf(t=uf(t,kf)),Sf(e)?e:{next:e})}function cm(t,e){return function(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget((async()=>Qh(await qd(t),e,n))),n.promise}(Cf(t),e)}function um(t,e,n){const i=n.docs.get(e._key),r=new Xp(t);return new bp(t,r,e._key,i,new yp(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Gf(t)}get(t){const e=Kp(t,this._firestore),n=new Zp(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Xi();const i=t[0];if(i.isFoundDocument())return new mp(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new mp(this._firestore,n,e._key,null,e.converter);throw Xi()}))}set(t,e,n){const i=Kp(t,this._firestore),r=Hp(i.converter,e,n),s=Xf(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(t,e,n,...i){const r=Kp(t,this._firestore);let s;return s="string"==typeof(e=(0,c.m9)(e))||e instanceof Ff?rp(this._dataReader,"Transaction.update",r._key,e,n,i):ip(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,s),this}delete(t){const e=Kp(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Kp(t,this._firestore),n=new Xp(this._firestore);return super.get(t).then((t=>new bp(this._firestore,n,e._key,t._document,new yp(!1,!1),e.converter)))}}function hm(t,e){return Jd(Cf(t=uf(t,kf)),(n=>e(new lm(t,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return new Yf("deleteField")}function fm(){return new Jf("serverTimestamp")}function pm(...t){return new tp("arrayUnion",t)}function mm(...t){return new ep("arrayRemove",t)}function gm(t){return new np("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){ji=t}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new kf(i,new or(t.getProvider("auth-internal")),new lr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,s.registerVersion)(Bi,"3.4.6",t),(0,s.registerVersion)(Bi,"3.4.6","esm2017")}();const vm="@firebase/firestore-compat",ym="0.1.15";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bm(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new er("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){if("undefined"===typeof Uint8Array)throw new er("unimplemented","Uint8Arrays are not available in this environment.")}function _m(){if(!Cr())throw new er("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Im{constructor(t){this._delegate=t}static fromBase64String(t){return _m(),new Im(Bf.fromBase64String(t))}static fromUint8Array(t){return wm(),new Im(Bf.fromUint8Array(t))}toBase64(){return _m(),this._delegate.toBase64()}toUint8Array(){return wm(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){return Tm(t,["next","error","complete"])}function Tm(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{enableIndexedDbPersistence(t,e){return Af(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Of(t._delegate)}clearIndexedDbPersistence(t){return Rf(t._delegate)}}class km{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof Mr||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Ki("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){ff(this._delegate,t,e,n)}enableNetwork(){return Lf(this._delegate)}disableNetwork(){return Pf(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,sf("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Df(this._delegate)}onSnapshotsInSync(t){return am(this._delegate,t)}get app(){if(!this._appCompat)throw new er("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new Um(this,vf(this._delegate,t))}catch(e){throw Dm(e,"collection()","Firestore.collection()")}}doc(t){try{return new Rm(this,bf(this._delegate,t))}catch(e){throw Dm(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new Vm(this,yf(this._delegate,t))}catch(e){throw Dm(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return hm(this._delegate,(e=>t(new Am(this,e))))}batch(){return Cf(this._delegate),new Om(new Wp(this._delegate,(t=>cm(this._delegate,t))))}loadBundle(t){return $f(this._delegate,t)}namedQuery(t){return Mf(this._delegate,t).then((t=>t?new Vm(this,t):null))}}class Cm extends qp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Im(new Bf(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return Rm.forKey(e,this.firestore,null)}}function xm(t){Hi(t)}class Am{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Cm(t)}get(t){const e=jm(t);return this._delegate.get(e).then((t=>new $m(this._firestore,new bp(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const i=jm(t);return n?(bm("Transaction.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=jm(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=jm(t);return this._delegate.delete(e),this}}class Om{constructor(t){this._delegate=t}set(t,e,n){const i=jm(t);return n?(bm("WriteBatch.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=jm(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=jm(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class Nm{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new wp(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new Mm(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=Nm.INSTANCES;let i=n.get(t);i||(i=new WeakMap,n.set(t,i));let r=i.get(e);return r||(r=new Nm(t,new Cm(t),e),i.set(e,r)),r}}Nm.INSTANCES=new WeakMap;class Rm{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Cm(t)}static forPath(t,e,n){if(t.length%2!==0)throw new er("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new Rm(e,new pf(e._delegate,n,new Ur(t)))}static forKey(t,e,n){return new Rm(e,new pf(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new Um(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new Um(this.firestore,vf(this._delegate,t))}catch(e){throw Dm(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=(0,c.m9)(t),t instanceof pf&&wf(this._delegate,t)}set(t,e){e=bm("DocumentReference.set",e);try{return e?nm(this._delegate,t,e):nm(this._delegate,t)}catch(n){throw Dm(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?im(this._delegate,t):im(this._delegate,t,e,...n)}catch(i){throw Dm(i,"updateDoc()","DocumentReference.update()")}}delete(){return rm(this._delegate)}onSnapshot(...t){const e=Lm(t),n=Pm(t,(t=>new $m(this.firestore,new bp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return om(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Yp(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Qp(this._delegate):Gp(this._delegate),e.then((t=>new $m(this.firestore,new bp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new Rm(this.firestore,t?this._delegate.withConverter(Nm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Dm(t,e,n){return t.message=t.message.replace(e,n),t}function Lm(t){for(const e of t)if("object"===typeof e&&!Sm(e))return e;return{}}function Pm(t,e){var n,i;let r;return r=Sm(t[0])?t[0]:Sm(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{r.next&&r.next(e(t))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class $m{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new Rm(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Sp(this._delegate,t._delegate)}}class Mm extends $m{data(t){const e=this._delegate.data(t);return Qi(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class Vm{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Cm(t)}where(t,e,n){try{return new Vm(this.firestore,kp(this._delegate,xp(t,e,n)))}catch(i){throw Dm(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new Vm(this.firestore,kp(this._delegate,Op(t,e)))}catch(n){throw Dm(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new Vm(this.firestore,kp(this._delegate,Rp(t)))}catch(e){throw Dm(e,"limit()","Query.limit()")}}limitToLast(t){try{return new Vm(this.firestore,kp(this._delegate,Dp(t)))}catch(e){throw Dm(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new Vm(this.firestore,kp(this._delegate,Pp(...t)))}catch(e){throw Dm(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new Vm(this.firestore,kp(this._delegate,$p(...t)))}catch(e){throw Dm(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new Vm(this.firestore,kp(this._delegate,Vp(...t)))}catch(e){throw Dm(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new Vm(this.firestore,kp(this._delegate,Fp(...t)))}catch(e){throw Dm(e,"endAt()","Query.endAt()")}}isEqual(t){return _f(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?tm(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?em(this._delegate):Jp(this._delegate),e.then((t=>new Bm(this.firestore,new _p(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=Lm(t),n=Pm(t,(t=>new Bm(this.firestore,new _p(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return om(this._delegate,e,n)}withConverter(t){return new Vm(this.firestore,t?this._delegate.withConverter(Nm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class Fm{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new Mm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Bm{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new Vm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new Mm(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new Fm(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new Mm(this._firestore,n))}))}isEqual(t){return Sp(this._delegate,t._delegate)}}class Um extends Vm{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new Rm(this.firestore,t):null}doc(t){try{return new Rm(this.firestore,void 0===t?bf(this._delegate):bf(this._delegate,t))}catch(e){throw Dm(e,"doc()","CollectionReference.doc()")}}add(t){return sm(this._delegate,t).then((t=>new Rm(this.firestore,t)))}isEqual(t){return wf(this._delegate,t._delegate)}withConverter(t){return new Um(this.firestore,t?this._delegate.withConverter(Nm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function jm(t){return uf(t,pf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(...t){this._delegate=new Ff(...t)}static documentId(){return new zm(Er.keyField().canonicalString())}isEqual(t){return t=(0,c.m9)(t),t instanceof Ff&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this._delegate=t}static serverTimestamp(){const t=fm();return t._methodName="FieldValue.serverTimestamp",new qm(t)}static delete(){const t=dm();return t._methodName="FieldValue.delete",new qm(t)}static arrayUnion(...t){const e=pm(...t);return e._methodName="FieldValue.arrayUnion",new qm(e)}static arrayRemove(...t){const e=mm(...t);return e._methodName="FieldValue.arrayRemove",new qm(e)}static increment(t){const e=gm(t);return e._methodName="FieldValue.increment",new qm(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={Firestore:km,GeoPoint:jf,Timestamp:vr,Blob:Im,Transaction:Am,WriteBatch:Om,DocumentReference:Rm,DocumentSnapshot:$m,Query:Vm,QueryDocumentSnapshot:Mm,QuerySnapshot:Bm,CollectionReference:Um,FieldPath:zm,FieldValue:qm,setLogLevel:xm,CACHE_SIZE_UNLIMITED:Ef};function Zm(t,e){t.INTERNAL.registerComponent(new o.wA("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)}),"PUBLIC").setServiceProps(Object.assign({},Hm)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){Zm(t,((t,e)=>new km(t,e,new Em))),t.registerVersion(vm,ym)}Wm(r.Z)},5063:function(t,e,n){"use strict";var i=n(8180),r=n(2238),s=n(4444),o=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends s.ZR{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function m(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function I(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function S(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function T(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function E(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function k(){return new h("no-download-url","The given file does not have any download URLs.")}function C(t){return new h("invalid-argument",t)}function x(){return new h("app-deleted","The Firebase app was deleted.")}function A(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function N(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=R.makeFromUrl(t,e)}catch(i){return new R(t,"")}if(""===n.path)return n;throw I(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:o,indices:c,postModify:r},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const e=b[a],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new R(t,r),e.postModify(n);break}}if(null==n)throw _(t);return n}}class D{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function P(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return void 0!==t}function M(t){return"function"===typeof t}function V(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function B(t){return U()&&t instanceof Blob}function U(){return"undefined"!==typeof Blob}function j(t,e,n,i){if(i<e)throw C(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw C(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(t,e,n,i,r,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new W(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new W(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());$(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=f();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?x():w();i(t)}else{const t=b();i(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function G(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Q(t,e,n,i,r,s){const o=q(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return X(c,e),K(c,n),G(c,s),Y(c,i),new Z(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=J();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(U())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case it.RAW:return new rt(ot(e));case it.BASE64:case it.BASE64URL:return new rt(ct(t,e));case it.DATA_URL:return new rt(lt(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(it.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(r){throw O(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(it.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){let n=0,i="";B(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(B(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new ft(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(U()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(tt.apply(null,e))}{const e=t.map((t=>F(t)?st(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new ft(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return V(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return e}class bt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||yt}}let wt=null;function _t(t){return!F(t)||t.length<2?t:vt(t)}function It(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new bt("size");return r.xform=i,t.push(r),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function St(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new R(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Tt(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return St(i,t),i}function Et(t,e,n){const i=pt(e);if(null===i)return null;const r=i;return Tt(t,r,n)}function kt(t,e,n,i){const r=pt(e);if(null===r)return null;if(!F(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=z(a,n,i),u=q({alt:"media",token:e});return c+u}));return c[0]}function Ct(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="prefixes",At="items";function Ot(t,e,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xt])for(const r of n[xt]){const n=r.replace(/\/$/,""),s=t._makeStorageReference(new R(e,n));i.prefixes.push(s)}if(n[At])for(const r of n[At]){const n=t._makeStorageReference(new R(e,r["name"]));i.items.push(n)}return i}function Nt(t,e,n){const i=pt(n);if(null===i)return null;const r=i;return Ot(t,e,r)}class Rt{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){if(!t)throw f()}function Lt(t,e){function n(n,i){const r=Et(t,i,e);return Dt(null!==r),r}return n}function Pt(t,e){function n(n,i){const r=Nt(t,e,i);return Dt(null!==r),r}return n}function $t(t,e){function n(n,i){const r=Et(t,i,e);return Dt(null!==r),kt(r,i,t.host,t._protocol)}return n}function Mt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():g():402===e.getStatus()?m(t.bucket):403===e.getStatus()?y(t.path):n,i.serverResponse=n.serverResponse,i}return e}function Vt(t){const e=Mt(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=p(t.path)),r.serverResponse=i.serverResponse,r}return n}function Ft(t,e,n){const i=e.fullServerUrl(),r=z(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Rt(r,s,Lt(t,n),o);return a.errorHandler=Vt(e),a}function Bt(t,e,n,i,r){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=e.bucketOnlyServerUrl(),a=z(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Rt(a,c,Pt(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Mt(e),l}function Ut(t,e,n){const i=e.fullServerUrl(),r=z(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Rt(r,s,$t(t,n),o);return a.errorHandler=Vt(e),a}function jt(t,e,n,i){const r=e.fullServerUrl(),s=z(r,t.host,t._protocol),o="PATCH",a=Ct(n,i),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Rt(s,o,Lt(t,i),u);return l.headers=c,l.body=a,l.errorHandler=Vt(e),l}function zt(t,e){const n=e.fullServerUrl(),i=z(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Rt(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=Vt(e),a}function qt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ht(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=qt(null,e)),i}function Zt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Ht(e,i,r),l=Ct(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,i,d);if(null===f)throw T();const p={name:u["fullPath"]},m=z(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new Rt(m,g,Lt(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Mt(e),y}class Wt{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function Kt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){Dt(!1)}const i=e||["active"];return Dt(!!n&&-1!==i.indexOf(n)),n}function Gt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=Ht(e,i,r),a={name:o["fullPath"]},c=z(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ct(o,n),d=t.maxUploadRetryTime;function f(t){let e;Kt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Dt(!1)}return Dt(F(e)),e}const p=new Rt(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Mt(e),p}function Xt(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(t){const e=Kt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Dt(!1)}n||Dt(!1);const r=Number(n);return Dt(!isNaN(r)),new Wt(r,i.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Rt(n,o,s,a);return c.headers=r,c.errorHandler=Mt(e),c}const Yt=262144;function Qt(t,e,n,i,r,s,o,a){const c=new Wt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw E();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=i.slice(h,d);if(null===m)throw T();function g(t,n){const r=Kt(t,["active","final"]),o=c.current+l,a=i.size();let u;return u="final"===r?Lt(e,s)(t,n):null,new Wt(o,a,"final"===r,u)}const v="POST",y=e.maxUploadRetryTime,b=new Rt(n,v,g,y);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Mt(t),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n){const i=M(t)||null!=e||null!=n;if(i)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re=null;class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return re?re():new oe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=It(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const n=Gt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,n)=>{const i=Xt(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,ae,e,n);this._request=r,r.getPromise().then((t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Yt*this._chunkMultiplier,e=new Wt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let s;try{s=Qt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ae,i,r);this._request=o,o.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Yt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const n=Ft(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const n=Zt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const r=new ne(e||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;ie(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&ie(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&ie(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&ie(t.error.bind(t,this._error))();break;default:t.error&&ie(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this._service=t,this._location=e instanceof R?e:R.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ue(t,e)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new R(this._location.bucket,t);return new ue(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw A(t)}}function le(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ce(t,new ft(e),n)}function he(t){const e={prefixes:[],items:[]};return de(t,e).then((()=>e))}async function de(t,e,n){const i={pageToken:n},r=await fe(t,i);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await de(t,e,r.nextPageToken)}function fe(t,e){null!=e&&"number"===typeof e.maxResults&&j("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=Bt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(i,ae)}function pe(t){t._throwIfRoot("getMetadata");const e=Ft(t.storage,t._location,It());return t.storage.makeRequestWithTokens(e,ae)}function me(t,e){t._throwIfRoot("updateMetadata");const n=jt(t.storage,t._location,e,It());return t.storage.makeRequestWithTokens(n,ae)}function ge(t){t._throwIfRoot("getDownloadURL");const e=Ut(t.storage,t._location,It());return t.storage.makeRequestWithTokens(e,ae).then((t=>{if(null===t)throw k();return t}))}function ve(t){t._throwIfRoot("deleteObject");const e=zt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ae)}function ye(t,e){const n=gt(t._location.path,e),i=new R(t._location.bucket,n);return new ue(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return/^[A-Za-z]+:\/\//.test(t)}function we(t,e){return new ue(t,e)}function _e(t,e){if(t instanceof Ee){const n=t;if(null==n._bucket)throw S();const i=new ue(n,n._bucket);return null!=e?_e(i,e):i}return void 0!==e?ye(t,e):t}function Ie(t,e){if(e&&be(e)){if(t instanceof Ee)return we(t,e);throw C("To use ref(service, url), the first argument must be a Storage instance.")}return _e(t,e)}function Se(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:R.makeFromBucketSpec(n,t)}function Te(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:(0,s.Sg)(r,t.app.options.projectId))}class Ee{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?R.makeFromBucketSpec(i,this._host):Se(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=Se(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){j("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ue(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new D(x());{const r=Q(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const ke="@firebase/storage",Ce="0.9.3",xe="storage";function Ae(t,e,n){return t=(0,s.m9)(t),le(t,e,n)}function Oe(t){return t=(0,s.m9)(t),pe(t)}function Ne(t,e){return t=(0,s.m9)(t),me(t,e)}function Re(t,e){return t=(0,s.m9)(t),fe(t,e)}function De(t){return t=(0,s.m9)(t),he(t)}function Le(t){return t=(0,s.m9)(t),ge(t)}function Pe(t){return t=(0,s.m9)(t),ve(t)}function $e(t,e){return t=(0,s.m9)(t),Ie(t,e)}function Me(t,e){return ye(t,e)}function Ve(t,e,n,i={}){Te(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ee(n,i,s,e,r.SDK_VERSION)}function Be(){(0,r._registerComponent)(new o.wA(xe,Fe,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(ke,Ce,""),(0,r.registerVersion)(ke,Ce,"esm2017")}Be();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ue(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then((e=>{if(t)return t(new Ue(e,this,this._ref))}),e)}on(t,e,n,i){let r;return e&&(r="function"===typeof e?t=>e(new Ue(t,this,this._ref)):{next:e.next?t=>e.next(new Ue(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,r,n||void 0,i||void 0)}}class ze{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map((t=>new qe(t,this._service)))}get items(){return this._delegate.items.map((t=>new qe(t,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=Me(this._delegate,t);return new qe(e,this.storage)}get root(){return new qe(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new qe(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new je(Ae(this._delegate,t,e),this)}putString(t,e=it.RAW,n){this._throwIfRoot("putString");const i=st(e,t),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new je(new ce(this._delegate,new ft(i.data,!0),r),this)}listAll(){return De(this._delegate).then((t=>new ze(t,this.storage)))}list(t){return Re(this._delegate,t||void 0).then((t=>new ze(t,this.storage)))}getMetadata(){return Oe(this._delegate)}updateMetadata(t){return Ne(this._delegate,t)}getDownloadURL(){return Le(this._delegate)}delete(){return this._throwIfRoot("delete"),Pe(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw A(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(Ze(t))throw C("ref() expected a child path but got a URL, use refFromURL instead.");return new qe($e(this._delegate,t),this)}refFromURL(t){if(!Ze(t))throw C("refFromURL() expected a full URL but got a child path, use ref() instead.");try{R.makeFromUrl(t,this._delegate.host)}catch(e){throw C("refFromUrl() expected a valid full URL but got an invalid one.")}return new qe($e(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){Ve(this._delegate,t,e,n)}}function Ze(t){return/^[A-Za-z]+:\/\//.test(t)}const We="@firebase/storage-compat",Ke="0.1.11",Ge="storage-compat";function Xe(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:e}),r=new He(n,i);return r}function Ye(t){const e={TaskState:te,TaskEvent:Jt,StringFormat:it,Storage:He,Reference:qe};t.INTERNAL.registerComponent(new o.wA(Ge,Xe,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(We,Ke)}Ye(i.Z)},7273:function(){},8582:function(){},3401:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i=n(5648),r=n(680),s=r.Z,o=n(172),a=n(2936),c=n(8085),u=n(144),l=u.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(3325),d=n(1824),f=(0,h.Z)(i.Z,a.Z,l).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(s,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||c.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},7524:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(1703);var i=n(8085),r=n(3325),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},3130:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(6656),r=n(9109),s=n(3358),o=n(474),a=n(9177),c=n(2936),u=n(4589),l=n(3325);const h=(0,l.Z)(i.Z,o.Z,a.Z,c.Z,(0,s.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var d=h.extend({name:"v-app-bar",directives:{Scroll:r.Z},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return o.Z.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return i.Z.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=i.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i.Z.options.computed.isCollapsed.call(this)},isProminent(){return i.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i.Z.options.computed.styles.call(this),fontSize:(0,u.kb)(this.computedFontSize,"rem"),marginTop:(0,u.kb)(this.computedMarginTop),transform:`translateY(${(0,u.kb)(this.computedTransform)})`,left:(0,u.kb)(this.computedLeft),right:(0,u.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=i.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=i.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},5206:function(t,e,n){"use strict";var i=n(172),r=n(680),s=n(144);e["Z"]=s.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:s,data:o}){const a=Object.assign(o,{staticClass:`v-app-bar__nav-icon ${o.staticClass||""}`.trim(),props:{...s,icon:!0},on:n}),c=e().default;return t(r.Z,a,c||[t(i.Z,"$menu")])}})},6370:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(6952),r=n(2529),s=n(3712),o=n(4589),a=n(3325),c=(0,a.Z)(i.Z,r.Z,s.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},1049:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i=n(3358),r=n(4333),s=r.y.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return r.y.options.computed.classes.call(this)}},methods:{genData:r.y.options.methods.genData}}),o=n(6952),a=n(2529),c=n(1431),u=n(474),l=n(8085),h=n(2936),d=n(3325),f=n(1824),p=(0,d.Z)((0,i.Z)("bottom",["height","inputValue"]),o.Z,a.Z,(0,h.d)("inputValue"),c.Z,u.Z,l.Z).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data(){return{isActive:this.inputValue}},computed:{canScroll(){return u.Z.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles(){return{...this.measurableStyles,transform:this.isActive?"none":"translateY(100%)"}}},watch:{canScroll:"onScroll"},created(){this.$attrs.hasOwnProperty("active")&&(0,f.fK)("active.sync","value or v-model",this)},methods:{thresholdMet(){this.hideOnScroll&&(this.isActive=!this.isScrollingUp||this.currentScroll>this.computedScrollThreshold,this.$emit("update:input-value",this.isActive)),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll)},updateApplication(){return this.$el?this.$el.clientHeight:0},updateValue(t){this.$emit("change",t)}},render(t){const e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(s,this.setTextColor(this.color,e),this.$slots.default)}})},680:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(5648),r=n(8083),s=n(6952),o=n(4589),a=s.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=a,u=n(7352),l=n(2936),h=n(3377),d=n(3536),f=n(6505),p=n(9131),m=n(3325),g=n(1824);const v=(0,m.Z)(i.Z,f.Z,d.Z,p.Z,(0,u.d)("btnToggle"),(0,l.d)("inputValue"));var y=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...f.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},3237:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5648),r=n(1226),s=n(6505),o=n(3325),a=(0,o.Z)(r.Z,s.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,n){"use strict";n.d(e,{EB:function(){return c},Qq:function(){return o},ZB:function(){return a},h7:function(){return s}});var i=n(3237),r=n(4589);const s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},4246:function(t,e,n){"use strict";n.d(e,{Z:function(){return S}});var i=n(8085),r=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),s=n(144),o=s.Z.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}}),a=n(2936),c=n(3325),u=n(4589),l=n(1824);const h=(0,c.Z)(o,a.Z);var d=h.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,u.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,l.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,u.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){var e;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const t=this.internalActivator?this.$el:document;n="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;n=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return(0,u.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),f=n(5907),p=n(8625);function m(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function g(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}var v=(0,c.Z)(p.Z).extend({name:"detachable",props:{attach:{default:!1,validator:m},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),g(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else g(t)}},methods:{getScopeIdAttrs(){const t=(0,u.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,l.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),y=n(390),b=s.Z.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),w=s.Z.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,u.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,u.KK)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)t.includes(i[r])||n.push((0,u.KK)(i[r]));return Math.max(...n)}}}),_=n(5600);const I=(0,c.Z)(f.Z,v,y.Z,b,w,d);var S=I.extend({name:"v-dialog",directives:{ClickOutside:_.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,l.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):y.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{this.$refs.content.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,this.$refs.content.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===u.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(r,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog",tabindex:this.isActive?0:void 0,"aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,u.kb)(this.maxWidth),width:(0,u.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1418:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(8085),r=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},3065:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(1347),r=i.Z,s=n(3325),o=n(5827),a=n(172),c=n(6952),u=n(7352),l=n(8085),h=n(2936),d=n(6505),f=n(9131),p=n(1824),m=(0,s.Z)(c.Z,f.Z,d.Z,l.Z,(0,u.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,p.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o.Zq,t)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,i),e)}}),g=n(4589),v=n(6290),y=r.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,g.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...r.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,g.XE)(e,1024===this.base))},internalArrayValue(){return(0,g.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:n=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${(0,g.XE)(n,1024===this.base)})`:i})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,p.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,g.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(m,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=r.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,v.y0)(t.data.style,{display:"none"})),t},genInput(){const t=r.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,n)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[n],file:e,index:n}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=r.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},6232:function(t,e,n){"use strict";var i=n(3325),r=n(6210),s=n(6257);e["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},2102:function(t,e,n){"use strict";n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>o.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),l={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(u)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],l)l[t].forEach((n=>{const i=e[n],r=h(t,n,i);r&&a.push(r)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.ZP)(n,{class:a}),i)}})},9846:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(8582),n(7273);var i=n(144);function r(t){return i.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n(6290),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},2877:function(t,e,n){"use strict";n(7273);var i=n(144),r=n(6290),s=n(4589);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(t,e){return o.reduce(((n,i)=>(n[t+(0,s.jC)(i)]=e(),n)),{})}const u=t=>[...a,"baseline","stretch"].includes(t),l=c("align",(()=>({type:String,default:null,validator:u}))),h=t=>[...a,"space-between","space-around"].includes(t),d=c("justify",(()=>({type:String,default:null,validator:h}))),f=t=>[...a,"space-between","space-around","stretch"].includes(t),p=c("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(l),justify:Object.keys(d),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...l,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:f},...p},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=y.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],r=v(t,n,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(s,o)}return t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},9762:function(t,e,n){"use strict";n(8582);var i=n(4589);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},6428:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var i,r=n(6210),s=n(6952),o=n(9131),a=n(8085),c=n(4589),u=n(144),l=n(3325);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const f=(0,l.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,c.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((e=>t[e]));return e&&i[e]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=u.Z.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(f,e,i?[i]:n)}})},172:function(t,e,n){"use strict";var i=n(6428);e["Z"]=i.Z},7047:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var i=n(8083),r=n(2529),s=n(3325),o=(0,s.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=o,c=n(8085),u=n(6290),l=n(1824);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var d=(0,s.Z)(a,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!h||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,l.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=a.options.render.call(this,t),n=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},4333:function(t,e,n){"use strict";n.d(e,{y:function(){return l}});var i=n(144),r=n(4589),s=i.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.vZ}}}),o=n(1431),a=n(8085),c=n(3325),u=n(1824);const l=(0,c.Z)(s,o.Z,a.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,u.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>e===t));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},6816:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(3385),r=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i=n(6952),r=n(6505),s=n(7352),o=n(8085),a=n(2936),c=n(6286),u=n(4589),l=n(1824),h=n(3325);const d=(0,h.Z)(i.Z,r.Z,o.Z,(0,s.d)("listItemGroup"),(0,a.d)("inputValue"));var f=d.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,l.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===u.Do.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},6421:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(6370),r=i.Z,s=r.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...r.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=r.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},459:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}})},9851:function(t,e,n){"use strict";n.d(e,{km:function(){return T},oZ:function(){return k},V9:function(){return E}});var i=n(4589),r=n(6816),s=n(172),o=n(7620),a=n(459),c=n(6210),u=n(8625),l=n(6952),h=n(2936),d=n(6257),f=n(6286),p=n(5827),m=n(3325);const g=(0,m.Z)(c.Z,u.Z,l.Z,(0,d.f)("list"),h.Z);var v=g.extend().extend({name:"v-list-group",directives:{ripple:f.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(s.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(p.Fx,this.genItems())])}}),y=n(4333),b=(0,m.Z)(y.y,l.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...y.y.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...y.y.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),w=n(144),_=w.Z.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}}),I=n(6421);const S=(0,i.Ji)("v-list-item__action-text","span"),T=(0,i.Ji)("v-list-item__content","div"),E=(0,i.Ji)("v-list-item__title","div"),k=(0,i.Ji)("v-list-item__subtitle","div");r.Z,o.Z,I.Z,a.Z},7877:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(9177),r=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},7575:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var i=n(7047),r=n(3358),s=n(6952),o=n(5907),a=n(1824),c=n(144),u=c.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?e<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,a.Rn)("mobile-break-point","mobile-breakpoint",this)}}),l=n(390),h=n(9177),d=n(8085),f=n(5600),p=n(549),m=n(4589);const g=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function v(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function y(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),g(e)}function b(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function w(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>v(t,e),touchend:t=>y(t,e),touchmove:t=>b(t,e)}}function _(t,e,n){const i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(!r)return;const o=w(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,(0,m.XP)(o).forEach((t=>{r.addEventListener(t,o[t],s)}))}function I(t,e,n){const i=e.value.parent?t.parentElement:t;if(!i||!i._touchHandlers)return;const r=i._touchHandlers[n.context._uid];(0,m.XP)(r).forEach((t=>{i.removeEventListener(t,r[t])})),delete i._touchHandlers[n.context._uid]}const S={inserted:_,unbind:I};var T=S,E=n(3325);const k=(0,E.Z)((0,r.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),s.Z,o.Z,u,l.Z,h.Z,d.Z);var C=k.extend({name:"v-navigation-drawer",directives:{ClickOutside:f.Z,Resize:p.Z,Touch:T},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&u.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,m.kb)(this.height),top:this.isBottom?"auto":(0,m.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,m.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,m.kb)(this.computedTransform,"%")})`,width:(0,m.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,m.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,m.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},3385:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=n(6210),r=n(6952),s=n(3377),o=n(2529),a=n(3712),c=n(8085),u=n(3325),l=(0,u.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},5648:function(t,e,n){"use strict";var i=n(3385);e["Z"]=i.Z},5533:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(8085),r=n(3325),s=(0,r.Z)(i.Z).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},1347:function(t,e,n){"use strict";n.d(e,{Z:function(){return R}});var i=n(172),r=n(6952),s=n(8085),o=n(3325),a=n(4589),c=(0,o.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:i,props:o}=e,c={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...(0,s.X)(e)},attrs:{for:o.for,"aria-hidden":!o.for},on:i,style:{left:(0,a.kb)(o.left),right:(0,a.kb)(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return t("label",r.Z.options.methods.setTextColor(o.focused&&o.color,c),n)}}),u=c,l=(0,o.Z)(r.Z,s.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,a.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=l,d=n(6210),f=n(6257),p=n(1824);const m=(0,o.Z)(r.Z,(0,f.f)("form"),s.Z);var g=m.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,a.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,p.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),v=n(6290);const y=(0,o.Z)(d.Z,g);var b=y.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const r=this[`${t}Icon`],s=`click:${(0,a.GL)(t)}`,o=!(!this.listeners$[s]&&!e),c=(0,v.ZP)({attrs:{"aria-label":o?(0,a.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(s,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,a.GL)(t)}`:void 0},[this.$createElement(i.Z,c,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,a.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(u,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,a.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),w=b,_=(0,o.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(e)}},o)}}),I=_,S=n(8083),T=n(144);function E(t){return T.Z.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){S.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){S.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?(0,p.Kd)(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var k=n(1226),C=n(549),x=n(6286),A=n(1706);const O=(0,o.Z)(w,E({onVisible:["onResize","tryAutofocus"]}),k.Z),N=["color","file","time","date","datetime-local","week","month"];var R=O.extend().extend({name:"v-text-field",directives:{resize:C.Z,ripple:x.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...w.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=g.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return w.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||N.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,p.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,p.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,p.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=w.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:r}))?t:this.$createElement(I,{props:r})},genControl(){return w.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(u,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,a.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=w.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,A.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===a.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),w.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),w.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,A.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},4350:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(1347),r=n(3325);const s=(0,r.Z)(i.Z);var o=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},6656:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(3385),r=n(7047),s=n(4589),o=n(1824),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,s.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.kb)(this.computedContentHeight)}},(0,s.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.kb)(this.extensionHeight)}},(0,s.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},7921:function(t,e,n){"use strict";n.d(e,{qW:function(){return s}});var i=n(6656),r=n(4589);const s=(0,r.Ji)("v-toolbar__title"),o=(0,r.Ji)("v-toolbar__items");i.Z},5827:function(t,e,n){"use strict";n.d(e,{Fx:function(){return h},Zq:function(){return d},Z5:function(){return u},Qn:function(){return l}});var i=n(6290);function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(4589);function c(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const u=s("fade-transition"),l=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),h=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),d=o("expand-x-transition",c("",!0))},5600:function(t,e,n){"use strict";var i=n(1706);function r(){return!0}function s(t,e,n){if(!t||!1===o(t,n))return!1;const r=(0,i.e)(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(e),!s.some((e=>e.contains(t.target)))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||r;return n(t)}function a(t,e,n,i){const r="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,n)&&setTimeout((()=>{o(t,n)&&r&&r(t)}),0)}function c(t,e){const n=(0,i.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const u={inserted(t,e,n){const i=i=>a(i,t,e,n),r=n=>{t._clickOutside.lastMousedownWasOutside=s(n,t,e)};c(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(c(t,(e=>{var i;if(!e||null==(i=t._clickOutside)||!i[n.context._uid])return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)})),delete t._clickOutside[n.context._uid])}};e["Z"]=u},8083:function(t,e,n){"use strict";function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const u=null==(c=t._observe)?void 0:c[n.context._uid];if(!u)return;const l=s.some((t=>t.isIntersecting));!o||i.quiet&&!u.init||i.once&&!l&&!u.init||o(s,a,l),l&&i.once?r(t,e,n):u.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,n){var i;const r=null==(i=t._observe)?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e["Z"]=s},549:function(t,e,n){"use strict";function i(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,n){var i;if(null==(i=t._onResize)||!i[n.context._uid])return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const s={inserted:i,unbind:r};e["Z"]=s},6286:function(t,e,n){"use strict";n.d(e,{Z:function(){return T}});var i=n(4589);const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const c=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const u=(e.clientWidth-2*s)/2+"px",l=(e.clientHeight-2*s)/2+"px",h=n.center?u:i-s+"px",d=n.center?l:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:u,centerY:l}},u={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:u,y:l,centerX:h,centerY:d}=c(t,e,n),f=2*o+"px";r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}};function l(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else u.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),u.hide(e)}}function f(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let p=!1;function m(t){p||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(p=!0,h(t))}function g(t){p=!1,d(t)}function v(t){!0===p&&(p=!1,d(t))}function y(t,e,n){const i=l(e.value);i||u.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",f,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",f),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function I(t,e){if(e.value===e.oldValue)return;const n=l(e.oldValue);y(t,e,n)}const S={bind:w,unbind:_,update:I};var T=S},9109:function(t,e,n){"use strict";function i(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function r(t,e,n){var i;if(null==(i=t._onScroll)||!i[n.context._uid])return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}n.d(e,{X:function(){return s}});const s={inserted:i,unbind:r};e["Z"]=s},1910:function(t,e,n){"use strict";n.d(e,{Z:function(){return bt}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return y},easeInOutCubic:function(){return w},easeInOutQuad:function(){return v},easeInOutQuart:function(){return S},easeInOutQuint:function(){return k},easeInQuad:function(){return m},easeInQuart:function(){return _},easeInQuint:function(){return T},easeOutCubic:function(){return b},easeOutQuad:function(){return g},easeOutQuart:function(){return I},easeOutQuint:function(){return E},linear:function(){return p}});var r=n(144),s=n(1824);function o(t,e={}){if(o.installed)return;o.installed=!0,r.Z!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},i=e.directives||{};for(const r in i){const e=i[r];t.directive(r,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var u=n(4589);class l{constructor(){this.framework={}}init(t,e){}}class h extends l{constructor(t,e){super();const n=(0,u.Ee)({},c),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,u.Ee)((0,u.Ee)(n,r),o)}}h.property="presets";class d extends l{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}d.property="application";class f extends l{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[f.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}f.property="breakpoint";n(1703);const p=t=>t,m=t=>t**2,g=t=>t*(2-t),v=t=>t<.5?2*t**2:(4-2*t)*t-1,y=t=>t**3,b=t=>--t**3+1,w=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,_=t=>t**4,I=t=>1- --t**4,S=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,T=t=>t**5,E=t=>1+--t**5,k=t=>t<.5?16*t**5:1+16*--t**5;function C(t){if("number"===typeof t)return t;let e=O(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function x(t){const e=O(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(t)} instead.`)}function A(t){return null==t?t:t.constructor.name}function O(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function N(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=x(n.container);if(n.appOffset&&N.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=N.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?C(t)-n.offset:C(t)-C(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const u=i-s,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(l));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===l||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}N.framework={},N.init=()=>{};class R extends l{constructor(){return super(),N}}R.property="goTo";const D={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var L=D;const P={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var $=P;const M={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var V=M;const F={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var B=F;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var j=U;function z(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var q=z("font-awesome-icon",B),H=Object.freeze({mdiSvg:L,md:$,mdi:V,fa:B,fa4:j,faSvg:q});class Z extends l{constructor(t){super();const{iconfont:e,values:n,component:i}=t[Z.property];this.component=i,this.iconfont=e,this.values=(0,u.Ee)(H[e],n)}}Z.property="icons";const W="$vuetify.",K=Symbol("Lang fallback");function G(t,e,n=!1,i){const r=e.replace(W,"");let o=(0,u.vO)(t,r,K);return o===K&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=G(i,e,!0,i))),o}class X extends l{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[X.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return G(e,t,!1,n)}t(t,...e){return t.startsWith(W)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}X.property="lang";var Y=n(7093);const Q=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],J=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,tt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],et=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function nt(t){const e=Array(3),n=J,i=Q;for(let r=0;r<3;++r)e[r]=Math.round(255*(0,u.uZ)(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function it(t){const e=[0,0,0],n=et,i=tt,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const rt=.20689655172413793,st=t=>t>rt**3?Math.cbrt(t):t/(3*rt**2)+4/29,ot=t=>t>rt?t**3:3*rt**2*(t-4/29);function at(t){const e=st,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function ct(t){const e=ot,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function ut(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,Y.hq)(r)):o[i]="object"===typeof r?ut(r,!0,n):mt(i,(0,Y.jx)(r)):o[i]={base:(0,Y.I4)((0,Y.jx)(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const lt=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,ht=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},dt=(t,e="base")=>`--v-${t}-${e}`,ft=(t,e="base")=>`var(${dt(t,e)})`;function pt(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?ft("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${dt("anchor")}: ${n};\n`);for(let c=0;c<r.length;++c){const n=r[c],i=t[n];o+=lt(n,e?ft(n):i.base),e&&(s+=`  ${dt(n)}: ${i.base};\n`);const a=(0,u.XP)(i);for(let t=0;t<a.length;++t){const r=a[t],c=i[r];"base"!==r&&(o+=ht(n,r,e?ft(n,r):c),e&&(s+=`  ${dt(n,r)}: ${c};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function mt(t,e){const n={base:(0,Y.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,Y.I4)(gt(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,Y.I4)(vt(e,i));return n}function gt(t,e){const n=at(it(t));return n[0]=n[0]+10*e,nt(ct(n))}function vt(t,e){const n=at(it(t));return n[0]=n[0]-10*e,nt(ct(n))}class yt extends l{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[yt.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=r.Z.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=pt(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return ut(this.currentTheme||{},void 0,(0,u.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}yt.property="theme";class bt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(h),this.use(d),this.use(f),this.use(R),this.use(Z),this.use(X),this.use(yt)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}bt.install=o,bt.installed=!1,bt.version="2.6.4",bt.config={silent:!1}},3358:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(3536),r=n(3325);function s(t,e=[]){return(0,r.Z)((0,i.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},6210:function(t,e,n){"use strict";var i=n(144);function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},8625:function(t,e,n){"use strict";var i=n(1824),r=n(144);e["Z"]=r.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},6952:function(t,e,n){"use strict";var i=n(144),r=n(1824),s=n(7093);e["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,s.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,s.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},5907:function(t,e,n){"use strict";var i=n(3325);function r(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...r(i.$children))}return e}e["Z"]=(0,i.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},3377:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(6257);function r(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},1226:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(144),r=n(5827),s=n(8083),o=n(6952),a=n(3536),c=n(1431),u=n(8085),l=n(4589),h=n(3325);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),c.Z,u.Z);var f=d.extend({name:"v-progress-linear",directives:{intersect:s.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,l.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,l.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,l.kb)(this.normalizedValue,"%"),width:(0,l.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,l.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,l.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,l.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f,m=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},2529:function(t,e,n){"use strict";var i=n(4589),r=n(144);e["Z"]=r.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},390:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(6952),r=n(8085),s=n(2936),o=n(3325),a=(0,o.Z)(i.Z,r.Z,s.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=a,u=n(4589),l=n(144),h=l.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,u.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,u.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[u.Do.up,u.Do.pageup],n=[u.Do.down,u.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,u.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,u.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},3536:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(144),r=n(4589);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.Z.extend({name:"positionable",props:t.length?(0,r.ji)(s,t):s})}e["Z"]=o()},1431:function(t,e,n){"use strict";var i=n(144);function r(t="value",e="change"){return i.Z.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e["Z"]=s},6257:function(t,e,n){"use strict";n.d(e,{J:function(){return a},f:function(){return o}});var i=n(144),r=n(1824);function s(t,e){return()=>(0,r.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function a(t,e=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},6505:function(t,e,n){"use strict";var i=n(144),r=n(6286),s=n(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},474:function(t,e,n){"use strict";var i=n(9109),r=n(1824),s=n(144);e["Z"]=s.Z.extend({name:"scrollable",directives:{Scroll:i.X},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,r.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}})},9131:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9177:function(t,e,n){"use strict";var i=n(144);e["Z"]=i.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},8085:function(t,e,n){"use strict";n.d(e,{X:function(){return s}});var i=n(144);const r=i.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["Z"]=r},2936:function(t,e,n){"use strict";n.d(e,{d:function(){return r}});var i=n(144);function r(t="value",e="input"){return i.Z.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e["Z"]=s},7093:function(t,e,n){"use strict";n.d(e,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});n(1703);var i=n(1824);function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},1824:function(t,e,n){"use strict";n.d(e,{Jk:function(){return u},Kd:function(){return s},N6:function(){return o},Rn:function(){return a},fK:function(){return c}});var i=n(1910);function r(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?f(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){s(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function c(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function u(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const l=/(?:^|[-_])(\w)/g,h=t=>t.replace(l,(t=>t.toUpperCase())).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==e?` at ${r}`:"")}function f(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}},1706:function(t,e,n){"use strict";function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},4589:function(t,e,n){"use strict";n.d(e,{Do:function(){return g},Ee:function(){return C},GL:function(){return p},Ji:function(){return r},KK:function(){return h},RB:function(){return v},TI:function(){return I},XE:function(){return k},XP:function(){return y},_A:function(){return w},iZ:function(){return x},jC:function(){return _},ji:function(){return d},kb:function(){return f},lj:function(){return a},qh:function(){return s},qw:function(){return c},sp:function(){return S},uZ:function(){return E},vO:function(){return l},vZ:function(){return u},z9:function(){return T}});var i=n(144);function r(t,e="div",n){return i.Z.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(A){console.warn(A)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function c(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function u(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>u(t[n],e[n])))}function l(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c(t,e.split("."),n)):n}function h(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||h(t.parentNode)}function d(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function f(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function p(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(t){return null!==t&&"object"===typeof t}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=l(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function y(t){return Object.keys(t)}const b=/-(\w)/g,w=t=>t.replace(b,((t,e)=>e?e.toUpperCase():""));function _(t){return t.charAt(0).toUpperCase()+t.slice(1)}function I(t){return null!=t?Array.isArray(t)?t:[t]:[]}function S(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function T(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function E(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function k(t,e=!1){const n=e?1024:1e3;if(t<n)return`${t} B`;const i=e?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(t)>=n&&r<i.length-1)t/=n,++r;return`${t.toFixed(1)} ${i[r]}B`}function C(t={},e={}){for(const n in e){const i=t[n],r=e[n];m(i)&&m(r)?t[n]=C(i,r):t[n]=r}return t}function x(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},6290:function(t,e,n){"use strict";n.d(e,{ZP:function(){return o},y0:function(){return a}});var i=n(4589);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,i._A)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=u(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function c(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function u(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},3325:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(144);function r(...t){return i.Z.extend({mixins:t})}},8345:function(t,e){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(t,e){for(var n in e)t[n]=e[n];return t}var i=/[!'()*]/g,r=function(t){return"%"+t.charCodeAt(0).toString(16)},s=/%2C/g,o=function(t){return encodeURIComponent(t).replace(i,r).replace(s,",")};function a(t){try{return decodeURIComponent(t)}catch(e){0}return t}function c(t,e,n){void 0===e&&(e={});var i,r=n||l;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function l(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=a(n.shift()),r=n.length>0?a(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function h(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return o(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(o(e)):i.push(o(e)+"="+o(t)))})),i.join("&")}return o(e)+"="+o(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var d=/\/?$/;function f(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=p(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:v(e,r),matched:t?g(t):[]};return n&&(o.redirectedFrom=v(n,r)),Object.freeze(o)}function p(t){if(Array.isArray(t))return t.map(p);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=p(t[n]);return e}return t}var m=f(null,{path:"/"});function g(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function v(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||h;return(n||"/")+s(i)+r}function y(t,e,n){return e===m?t===e:!!e&&(t.path&&e.path?t.path.replace(d,"")===e.path.replace(d,"")&&(n||t.hash===e.hash&&b(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&b(t.query,e.query)&&b(t.params,e.params))))}function b(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?b(s,a):String(s)===String(a)}))}function w(t,e){return 0===t.path.replace(d,"/").indexOf(e.path.replace(d,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var i=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=i.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&T(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),I(u)};var y=g.props&&g.props[c];return y&&(n(l[c],{route:u,configProps:y}),T(v,o,u,y)),a(v,o,r)}};function T(t,e,i,r){var s=e.props=E(i,r);if(s){s=e.props=n({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function E(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function k(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function C(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/+/g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},O=G,N=$,R=M,D=B,L=K,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=p||m;i.push({name:f||r++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?j(I):v?".*":"[^"+U(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function M(t,e){return B($(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",q(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(r+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");r+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?F(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');r+=u.prefix+l}}else r+=u}return r}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function H(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function Z(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(G(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",q(n));return z(s,e)}function W(t,e,n){return K($(t,n),e,n)}function K(t,e,n){A(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=U(a);else{var c=U(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=U(n.delimiter||"/"),h=s.slice(-l.length)===l;return i||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+l+"|$)",z(new RegExp("^"+s,q(n)),e)}function G(t,e,n){return A(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?H(t,e):A(t)?Z(t,e,n):W(t,e,n)}O.parse=N,O.compile=R,O.tokensToFunction=D,O.tokensToRegExp=L;var X=Object.create(null);function Y(t,e,n){e=e||{};try{var i=X[t]||(X[t]=O.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function Q(t,e,i,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=n({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&e){s=n({},s),s._normalized=!0;var a=n(n({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;s.path=Y(u,a,"path "+e.path)}else 0;return s}var l=C(s.path||""),h=e&&e.path||"/",d=l.path?k(l.path,h,i||s.append):h,f=c(l.query,s.query,r&&r.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var J,tt=[String,Object],et=[String,Array],nt=function(){},it={name:"RouterLink",props:{to:{type:tt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:et,default:"click"}},render:function(t){var e=this,i=this.$router,r=this.$route,s=i.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=i.options.linkActiveClass,h=i.options.linkExactActiveClass,d=null==l?"router-link-active":l,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?p:this.exactActiveClass,v=a.redirectedFrom?f(null,Q(a.redirectedFrom),null,i):a;u[g]=y(r,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:w(r,v);var b=u[g]?this.ariaCurrentValue:null,_=function(t){rt(t)&&(e.replace?i.replace(o,nt):i.push(o,nt))},I={click:rt};Array.isArray(this.event)?this.event.forEach((function(t){I[t]=_})):I[this.event]=_;var S={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?t():t("span",{},T)}if("a"===this.tag)S.on=I,S.attrs={href:c,"aria-current":b};else{var E=st(this.$slots.default);if(E){E.isStatic=!1;var k=E.data=n({},E.data);for(var C in k.on=k.on||{},k.on){var x=k.on[C];C in I&&(k.on[C]=Array.isArray(x)?x:[x])}for(var A in I)A in k.on?k.on[A].push(I[A]):k.on[A]=_;var O=E.data.attrs=n({},E.data.attrs);O.href=c,O["aria-current"]=b}else S.on=I}return t(this.tag,S,this.$slots.default)}};function rt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function st(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=st(e.children)))return e}}function ot(t){if(!ot.installed||J!==t){ot.installed=!0,J=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",it);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var at="undefined"!==typeof window;function ct(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ut(s,o,a,t,r)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ut(t,e,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},u=ht(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var l={path:u,regex:lt(u,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?x(s+"/"+i.path):void 0;ut(t,e,n,i,l,r)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:i.children};ut(t,e,n,p,r,l.path||"/")}a&&(n[a]||(n[a]=l))}function lt(t,e){var n=O(t,[],e);return n}function ht(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function dt(t,e){var n=ct(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){ct(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;ct([e||t],i,r,s,n),n&&n.alias.length&&ct(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function c(){return i.map((function(t){return r[t]}))}function u(t,n,o){var a=Q(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<i.length;f++){var p=i[f],m=r[p];if(ft(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var i=t.redirect,r="function"===typeof i?i(f(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,l=n.query,h=n.hash,p=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:p},void 0,n)}if(c){var m=pt(c,t),g=Y(m,p,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=Y(n,e.params,'aliased route with path "'+n+'"'),r=u({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?l(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):f(t,n,i,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function ft(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?a(i[r]):i[r])}return!0}function pt(t,e){return k(t,e.parent?e.parent.path:"/",!0)}var mt=at&&window.performance&&window.performance.now?window.performance:Date;function gt(){return mt.now().toFixed(3)}var vt=gt();function yt(){return vt}function bt(t){return vt=t}var wt=Object.create(null);function _t(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),i=n({},window.history.state);return i.key=yt(),window.history.replaceState(i,"",e),window.addEventListener("popstate",Tt),function(){window.removeEventListener("popstate",Tt)}}function It(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=Et(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){Rt(t,s)})).catch((function(t){0})):Rt(o,s))}))}}function St(){var t=yt();t&&(wt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Tt(t){St(),t.state&&t.state.key&&bt(t.state.key)}function Et(){var t=yt();if(t)return wt[t]}function kt(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function Ct(t){return Ot(t.x)||Ot(t.y)}function xt(t){return{x:Ot(t.x)?t.x:window.pageXOffset,y:Ot(t.y)?t.y:window.pageYOffset}}function At(t){return{x:Ot(t.x)?t.x:0,y:Ot(t.y)?t.y:0}}function Ot(t){return"number"===typeof t}var Nt=/^#\d/;function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=At(r),e=kt(i,r)}else Ct(t)&&(e=xt(t))}else n&&Ct(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Dt=at&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Lt(t,e){St();var i=window.history;try{if(e){var r=n({},i.state);r.key=yt(),i.replaceState(r,"",t)}else i.pushState({key:bt(gt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Pt(t){Lt(t,!0)}function $t(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return jt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+qt(e)+'" via a navigation guard.')}function Ft(t,e){var n=jt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Bt(t,e){return jt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return jt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function jt(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var zt=["params","query","hash"];function qt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Ht(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Zt(t,e){return Ht(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t){return function(e,n,i){var r=!1,s=0,o=null;Kt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var c,u=Qt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:J.extend(e),n.components[a]=e,s--,s<=0&&i()})),l=Qt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Ht(t)?t:new Error(e),i(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),r||i()}}function Kt(t,e){return Gt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Gt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Qt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var Jt=function(t,e){this.router=t,this.base=te(e),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function te(t){if(!t)if(at){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ee(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ne(t,e,n,i){var r=Kt(t,(function(t,i,r,s){var o=ie(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Gt(i?r.reverse():r)}function ie(t,e){return"function"!==typeof t&&(t=J.extend(t)),t.options[e]}function re(t){return ne(t,"beforeRouteLeave",oe,!0)}function se(t){return ne(t,"beforeRouteUpdate",oe)}function oe(t,e){if(e)return function(){return t.apply(e,arguments)}}function ae(t){return ne(t,"beforeRouteEnter",(function(t,e,n,i){return ce(t,n,i)}))}function ce(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}Jt.prototype.listen=function(t){this.cb=t},Jt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Jt.prototype.onError=function(t){this.errorCbs.push(t)},Jt.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Zt(t,Mt.redirected)&&s===m||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},Jt.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Zt(t)&&Ht(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(y(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&It(this.router,r,t,!1),s(Ft(r,t));var c=ee(this.current.matched,t.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(re(l),this.router.beforeHooks,se(u),h.map((function(t){return t.beforeEnter})),Wt(h)),f=function(e,n){if(i.pending!==t)return s(Bt(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(Ut(r,t))):Ht(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Vt(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};$t(d,f,(function(){var n=ae(h),o=n.concat(i.router.resolveHooks);$t(o,f,(function(){if(i.pending!==t)return s(Bt(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){I(t)}))}))}))},Jt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Jt.prototype.setupListeners=function(){},Jt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=m,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=le(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Dt&&n;i&&this.listeners.push(_t());var r=function(){var n=t.current,r=le(t.base);t.current===m&&r===t._startLocation||t.transitionTo(r,(function(t){i&&It(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Lt(x(i.base+t.fullPath)),It(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Pt(x(i.base+t.fullPath)),It(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(le(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Lt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return le(this.base)},e}(Jt);function le(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(x(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var he=function(t){function e(e,n,i){t.call(this,e,n),i&&de(this.base)||fe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Dt&&n;i&&this.listeners.push(_t());var r=function(){var e=t.current;fe()&&t.transitionTo(pe(),(function(n){i&&It(t.router,n,e,!0),Dt||ve(n.fullPath)}))},s=Dt?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ge(t.fullPath),It(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;pe()!==e&&(t?ge(e):ve(e))},e.prototype.getCurrentLocation=function(){return pe()},e}(Jt);function de(t){var e=le(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function fe(){var t=pe();return"/"===t.charAt(0)||(ve("/"+t),!1)}function pe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function me(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ge(t){Dt?Lt(me(t)):window.location.hash=t}function ve(t){Dt?Pt(me(t)):window.location.replace(me(t))}var ye=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Zt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Jt),be=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=dt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Dt&&!1!==t.fallback,this.fallback&&(e="hash"),at||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new he(this,t.base,this.fallback);break;case"abstract":this.history=new ye(this,t.base);break;default:0}},we={currentRoute:{configurable:!0}};function _e(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var i="hash"===n?"#"+e:e;return t?x(t+"/"+i):i}be.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},we.currentRoute.get=function(){return this.history&&this.history.current},be.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof he){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=Dt&&r;s&&"fullPath"in t&&It(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},be.prototype.beforeEach=function(t){return _e(this.beforeHooks,t)},be.prototype.beforeResolve=function(t){return _e(this.resolveHooks,t)},be.prototype.afterEach=function(t){return _e(this.afterHooks,t)},be.prototype.onReady=function(t,e){this.history.onReady(t,e)},be.prototype.onError=function(t){this.history.onError(t)},be.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},be.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},be.prototype.go=function(t){this.history.go(t)},be.prototype.back=function(){this.go(-1)},be.prototype.forward=function(){this.go(1)},be.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},be.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=Q(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Ie(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},be.prototype.getRoutes=function(){return this.matcher.getRoutes()},be.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},be.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(be.prototype,we),be.install=ot,be.version="3.5.3",be.isNavigationFailure=Zt,be.NavigationFailureType=Mt,be.START_LOCATION=m,at&&window.Vue&&window.Vue.use(be),e["Z"]=be},144:function(t,e,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var i=Object.freeze({});function r(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function h(t){return"[object Object]"===l.call(t)}function d(t){return"[object RegExp]"===l.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function m(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function b(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var w=Object.prototype.hasOwnProperty;function _(t,e){return w.call(t,e)}function I(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var S=/-(\w)/g,T=I((function(t){return t.replace(S,(function(t,e){return e?e.toUpperCase():""}))})),E=I((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,C=I((function(t){return t.replace(k,"-$1").toLowerCase()}));function x(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var O=Function.prototype.bind?A:x;function N(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function R(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&R(e,t[n]);return e}function L(t,e,n){}var P=function(t,e,n){return!1},$=function(t){return t};function M(t,e){if(t===e)return!0;var n=u(t),i=u(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return M(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return M(t[n],e[n])}))}catch(c){return!1}}function V(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B="data-server-rendered",U=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:L,parsePlatformTagName:$,mustUseProp:P,async:!0,_lifecycleHooks:j},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Z(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+q.source+".$_\\d]");function K(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},Y="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Q&&WXEnvironment.platform.toLowerCase(),tt=Y&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0,rt=(tt&&tt.indexOf("android"),tt&&/iphone|ipad|ipod|ios/.test(tt)||"ios"===J),st=(tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt),tt&&tt.match(/firefox\/(\d+)/)),ot={}.watch,at=!1;if(Y)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){at=!0}}),window.addEventListener("test-passive",null,ct)}catch(Eo){}var ut=function(){return void 0===G&&(G=!Y&&!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),G},lt=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ht(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,ft="undefined"!==typeof Symbol&&ht(Symbol)&&"undefined"!==typeof Reflect&&ht(Reflect.ownKeys);dt="undefined"!==typeof Set&&ht(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pt=L,mt=0,gt=function(){this.id=mt++,this.subs=[]};gt.prototype.addSub=function(t){this.subs.push(t)},gt.prototype.removeSub=function(t){b(this.subs,t)},gt.prototype.depend=function(){gt.target&&gt.target.addDep(this)},gt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},gt.target=null;var vt=[];function yt(t){vt.push(t),gt.target=t}function bt(){vt.pop(),gt.target=vt[vt.length-1]}var wt=function(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(wt.prototype,_t);var It=function(t){void 0===t&&(t="");var e=new wt;return e.text=t,e.isComment=!0,e};function St(t){return new wt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new wt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Et=Array.prototype,kt=Object.create(Et),Ct=["push","pop","shift","unshift","splice","sort","reverse"];Ct.forEach((function(t){var e=Et[t];Z(kt,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var xt=Object.getOwnPropertyNames(kt),At=!0;function Ot(t){At=t}var Nt=function(t){this.value=t,this.dep=new gt,this.vmCount=0,Z(t,"__ob__",this),Array.isArray(t)?(X?Rt(t,kt):Dt(t,kt,xt),this.observeArray(t)):this.walk(t)};function Rt(t,e){t.__proto__=e}function Dt(t,e,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];Z(t,s,e[s])}}function Lt(t,e){var n;if(u(t)&&!(t instanceof wt))return _(t,"__ob__")&&t.__ob__ instanceof Nt?n=t.__ob__:At&&!ut()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Nt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,i,r){var s=new gt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!r&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return gt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Vt(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!c||(c?c.call(t,e):n=e,u=!r&&Lt(e),s.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Pt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Vt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Vt(e)}Nt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Nt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var Ft=z.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,i,r,s=ft?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],_(t,n)?i!==r&&h(i)&&h(r)&&Bt(i,r):$t(t,n,r));return t}function Ut(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Bt(i,r):r}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function jt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?zt(n):n}function zt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function qt(t,e,n,i){var r=Object.create(t||null);return e?R(r,e):r}Ft.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},j.forEach((function(t){Ft[t]=jt})),U.forEach((function(t){Ft[t+"s"]=qt})),Ft.watch=function(t,e,n,i){if(t===ot&&(t=void 0),e===ot&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var s in R(r,t),e){var o=r[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},Ft.props=Ft.methods=Ft.inject=Ft.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return R(r,t),e&&R(r,e),r},Ft.provide=Ut;var Ht=function(t,e){return void 0===e?t:e};function Zt(t,e){var n=t.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=T(r),o[s]={type:null})}else if(h(n))for(var a in n)r=n[a],s=T(a),o[s]=h(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(h(n))for(var s in n){var o=n[s];i[s]=h(o)?R({from:s},o):{from:o}}else 0}}function Kt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Zt(e,n),Wt(e,n),Kt(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Gt(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)_(t,s)||a(s);function a(i){var r=Ft[i]||Ht;o[i]=r(t[i],e[i],n,i)}return o}function Xt(t,e,n,i){if("string"===typeof n){var r=t[e];if(_(r,n))return r[n];var s=T(n);if(_(r,s))return r[s];var o=E(s);if(_(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Yt(t,e,n,i){var r=e[t],s=!_(n,t),o=n[t],a=ne(Boolean,r.type);if(a>-1)if(s&&!_(r,"default"))o=!1;else if(""===o||o===C(t)){var c=ne(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Qt(i,r,t);var u=At;Ot(!0),Lt(o),Ot(u)}return o}function Qt(t,e,n){if(_(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==te(e.type)?i.call(t):i}}var Jt=/^\s*function (\w+)/;function te(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function ee(t,e){return te(t)===te(e)}function ne(t,e){if(!Array.isArray(e))return ee(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(ee(e[n],t))return n;return-1}function ie(t,e,n){yt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(Eo){se(Eo,i,"errorCaptured hook")}}}se(t,e,n)}finally{bt()}}function re(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(t){return ie(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(Eo){ie(Eo,i,r)}return s}function se(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(Eo){Eo!==t&&oe(Eo,null,"config.errorHandler")}oe(t,e,n)}function oe(t,e,n){if(!Y&&!Q||"undefined"===typeof console)throw t;console.error(t)}var ae,ce=!1,ue=[],le=!1;function he(){le=!1;var t=ue.slice(0);ue.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ht(Promise)){var de=Promise.resolve();ae=function(){de.then(he),rt&&setTimeout(L)},ce=!0}else if(et||"undefined"===typeof MutationObserver||!ht(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ae="undefined"!==typeof setImmediate&&ht(setImmediate)?function(){setImmediate(he)}:function(){setTimeout(he,0)};else{var fe=1,pe=new MutationObserver(he),me=document.createTextNode(String(fe));pe.observe(me,{characterData:!0}),ae=function(){fe=(fe+1)%2,me.data=String(fe)},ce=!0}function ge(t,e){var n;if(ue.push((function(){if(t)try{t.call(e)}catch(Eo){ie(Eo,e,"nextTick")}else n&&n(e)})),le||(le=!0,ae()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ve=new dt;function ye(t){be(t,ve),ve.clear()}function be(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!u(t)||Object.isFrozen(t)||t instanceof wt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r){n=t.length;while(n--)be(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)be(t[i[n]],e)}}}var we=I((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function _e(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return re(i,null,arguments,e,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)re(r[s],null,t,e,"v-on handler")}return n.fns=t,n}function Ie(t,e,n,i,s,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=we(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=_e(u,a)),o(h.once)&&(u=t[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=we(c),i(h.name,e[c],h.capture))}function Se(t,e,n){var i;t instanceof wt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),b(i.fns,c)}r(a)?i=_e([c]):s(a.fns)&&o(a.merged)?(i=a,i.fns.push(c)):i=_e([a,c]),i.merged=!0,t[e]=i}function Te(t,e,n){var i=e.options.props;if(!r(i)){var o={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in i){var l=C(u);Ee(o,c,u,l,!0)||Ee(o,a,u,l,!1)}return o}}function Ee(t,e,n,i,r){if(s(e)){if(_(e,n))return t[n]=e[n],r||delete e[n],!0;if(_(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function ke(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ce(t){return c(t)?[St(t)]:Array.isArray(t)?Ae(t):void 0}function xe(t){return s(t)&&s(t.text)&&a(t.isComment)}function Ae(t,e){var n,i,a,u,l=[];for(n=0;n<t.length;n++)i=t[n],r(i)||"boolean"===typeof i||(a=l.length-1,u=l[a],Array.isArray(i)?i.length>0&&(i=Ae(i,(e||"")+"_"+n),xe(i[0])&&xe(u)&&(l[a]=St(u.text+i[0].text),i.shift()),l.push.apply(l,i)):c(i)?xe(u)?l[a]=St(u.text+i):""!==i&&l.push(St(i)):xe(i)&&xe(u)?l[a]=St(u.text+i.text):(o(t._isVList)&&s(i.tag)&&r(i.key)&&s(e)&&(i.key="__vlist"+e+"_"+n+"__"),l.push(i)));return l}function Oe(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ne(t){var e=Re(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Ot(!0))}function Re(t,e){if(t){for(var n=Object.create(null),i=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Le)&&delete n[u];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function $e(t,e,n){var r,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==i&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Me(e,c,t[c]))}else r={};for(var u in e)u in r||(r[u]=Ve(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),Z(r,"$stable",o),Z(r,"$key",a),Z(r,"$hasNormal",s),r}function Me(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ce(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ve(t,e){return function(){return t[e]}}function Fe(t,e){var n,i,r,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(u(t))if(ft&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length)),l=c.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,r=o.length;i<r;i++)a=o[i],n[i]=e(t[a],a,i);return s(n)||(n=[]),n._isVList=!0,n}function Be(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=R(R({},i),n)),r=s(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ue(t){return Xt(this.$options,"filters",t,!0)||$}function je(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,i,r){var s=z.keyCodes[e]||n;return r&&i&&!z.keyCodes[e]?je(r,i):s?je(s,t):i?C(i)!==e:void 0===t}function qe(t,e,n,i,r){if(n)if(u(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=i||z.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(o),u=C(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],r)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function He(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(i,"__static__"+t,!1)),i}function Ze(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ke(t[i],e+"_"+i,n);else Ke(t,e,n)}function Ke(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(h(e)){var n=t.on=t.on?R({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function Xe(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var s=t[r];Array.isArray(s)?Xe(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function Ye(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Qe(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=Ze,t._n=g,t._s=m,t._l=Fe,t._t=Be,t._q=M,t._i=V,t._m=He,t._f=Ue,t._k=ze,t._b=qe,t._v=St,t._e=It,t._u=Xe,t._g=Ge,t._d=Ye,t._p=Qe}function tn(t,e,n,r,s){var a,c=this,u=s.options;_(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var l=o(u._compiled),h=!l;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||i,this.injections=Re(u.inject,r),this.slots=function(){return c.$slots||$e(t.scopedSlots,c.$slots=De(n,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return $e(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=$e(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var s=pn(a,t,e,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,i){return pn(a,t,e,n,i,h)}}function en(t,e,n,r,o){var a=t.options,c={},u=a.props;if(s(u))for(var l in u)c[l]=Yt(l,u,e||i);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new tn(n,c,o,r,t),d=a.render.call(null,h._c,h);if(d instanceof wt)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var f=Ce(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=nn(f[m],n,h.parent,a,h);return p}}function nn(t,e,n,i,r){var s=Tt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function rn(t,e){for(var n in e)t[T(n)]=e[n]}Je(tn.prototype);var sn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;sn.prepatch(n,n)}else{var i=t.componentInstance=cn(t,Rn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Mn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),t.data.keepAlive&&(e._isMounted?ti(n):Fn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Bn(e,!0):e.$destroy())}},on=Object.keys(sn);function an(t,e,n,i,a){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,c),void 0===t))return Sn(l,e,n,i,a);e=e||{},Si(t),s(e.model)&&hn(t.options,e);var h=Te(e,t,a);if(o(t.options.functional))return en(t,h,e,n,i);var d=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}un(e);var p=t.options.name||a,m=new wt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:i},l);return m}}}function cn(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return s(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function un(t){for(var e=t.hook||(t.hook={}),n=0;n<on.length;n++){var i=on[n],r=e[i],s=sn[i];r===s||r&&r._merged||(e[i]=r?ln(s,r):s)}}function ln(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function hn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var r=e.on||(e.on={}),o=r[i],a=e.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(r[i]=[a].concat(o)):r[i]=a}var dn=1,fn=2;function pn(t,e,n,i,r,s){return(Array.isArray(n)||c(n))&&(r=i,i=n,n=void 0),o(s)&&(r=fn),mn(t,e,n,i,r)}function mn(t,e,n,i,r){if(s(n)&&s(n.__ob__))return It();if(s(n)&&s(n.is)&&(e=n.is),!e)return It();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===fn?i=Ce(i):r===dn&&(i=ke(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),o=z.isReservedTag(e)?new wt(z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!s(c=Xt(t.$options,"components",e))?new wt(e,n,i,void 0,void 0,t):an(c,n,t,i,e)):o=an(e,n,t,i);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):It()}function gn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var i=0,a=t.children.length;i<a;i++){var c=t.children[i];s(c.tag)&&(r(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,e,n)}}function vn(t){u(t.style)&&ye(t.style),u(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=De(e._renderChildren,r),t.$scopedSlots=i,t._c=function(e,n,i,r){return pn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return pn(t,e,n,i,r,!0)};var s=n&&n.data;Pt(t,"$attrs",s&&s.attrs||i,null,!0),Pt(t,"$listeners",e._parentListeners||i,null,!0)}var bn,wn=null;function _n(t){Je(t.prototype),t.prototype.$nextTick=function(t){return ge(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=$e(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{wn=e,t=i.call(e._renderProxy,e.$createElement)}catch(Eo){ie(Eo,e,"render"),t=e._vnode}finally{wn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof wt||(t=It()),t.parent=r,t}}function In(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function Sn(t,e,n,i,r){var s=It();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function Tn(t,e){if(o(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=wn;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var i=t.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return b(i,n)}));var h=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=F((function(n){t.resolved=In(n,e),a?i.length=0:h(!0)})),f=F((function(e){s(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,f);return u(m)&&(p(m)?r(t.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),s(m.error)&&(t.errorComp=In(m.error,e)),s(m.loading)&&(t.loadingComp=In(m.loading,e),0===m.delay?t.loading=!0:c=setTimeout((function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&f(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function En(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Pe(n)))return n}}function kn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&On(t,e)}function Cn(t,e){bn.$on(t,e)}function xn(t,e){bn.$off(t,e)}function An(t,e){var n=bn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function On(t,e,n){bn=t,Ie(e,n||{},Cn,xn,An,t),bn=void 0}function Nn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var i=N(arguments,1),r='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,i,e,r)}return e}}var Rn=null;function Dn(t){var e=Rn;return Rn=t,function(){Rn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=Dn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Un(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||b(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Un(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function $n(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=It),Un(t,"beforeMount"),i=function(){t._update(t._render(),n)},new ri(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Un(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Un(t,"mounted")),t}function Mn(t,e,n,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s,t.$attrs=r.data.attrs||i,t.$listeners=n||i,e&&t.$options.props){Ot(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Yt(f,p,e,t)}Ot(!0),t.$options.propsData=e}n=n||i;var m=t.$options._parentListeners;t.$options._parentListeners=n,On(t,n,m),u&&(t.$slots=De(s,r.context),t.$forceUpdate())}function Vn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Fn(t,e){if(e){if(t._directInactive=!1,Vn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Un(t,"activated")}}function Bn(t,e){if((!e||(t._directInactive=!0,!Vn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Bn(t.$children[n]);Un(t,"deactivated")}}function Un(t,e){yt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,s=n.length;r<s;r++)re(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),bt()}var jn=[],zn=[],qn={},Hn=!1,Zn=!1,Wn=0;function Kn(){Wn=jn.length=zn.length=0,qn={},Hn=Zn=!1}var Gn=0,Xn=Date.now;if(Y&&!et){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Xn()>document.createEvent("Event").timeStamp&&(Xn=function(){return Yn.now()})}function Qn(){var t,e;for(Gn=Xn(),Zn=!0,jn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<jn.length;Wn++)t=jn[Wn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=zn.slice(),i=jn.slice();Kn(),ei(n),Jn(i),lt&&z.devtools&&lt.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Un(i,"updated")}}function ti(t){t._inactive=!1,zn.push(t)}function ei(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Fn(t[e],!0)}function ni(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Zn){var n=jn.length-1;while(n>Wn&&jn[n].id>t.id)n--;jn.splice(n+1,0,t)}else jn.push(t);Hn||(Hn=!0,ge(Qn))}}var ii=0,ri=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ii,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="","function"===typeof e?this.getter=e:(this.getter=K(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ri.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Eo){if(!this.user)throw Eo;ie(Eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),bt(),this.cleanupDeps()}return t},ri.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ri.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ri.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ni(this)},ri.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ri.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ri.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ri.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var si={enumerable:!0,configurable:!0,get:L,set:L};function oi(t,e,n){si.get=function(){return this[e][n]},si.set=function(t){this[e][n]=t},Object.defineProperty(t,n,si)}function ai(t){t._watchers=[];var e=t.$options;e.props&&ci(t,e.props),e.methods&&gi(t,e.methods),e.data?ui(t):Lt(t._data={},!0),e.computed&&di(t,e.computed),e.watch&&e.watch!==ot&&vi(t,e.watch)}function ci(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],s=!t.$parent;s||Ot(!1);var o=function(s){r.push(s);var o=Yt(s,e,n,t);Pt(i,s,o),s in t||oi(t,"_props",s)};for(var a in e)o(a);Ot(!0)}function ui(t){var e=t.$options.data;e=t._data="function"===typeof e?li(e,t):e||{},h(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&_(i,s)||H(s)||oi(t,"_data",s)}Lt(e,!0)}function li(t,e){yt();try{return t.call(e,e)}catch(Eo){return ie(Eo,e,"data()"),{}}finally{bt()}}var hi={lazy:!0};function di(t,e){var n=t._computedWatchers=Object.create(null),i=ut();for(var r in e){var s=e[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ri(t,o||L,L,hi)),r in t||fi(t,r,s)}}function fi(t,e,n){var i=!ut();"function"===typeof n?(si.get=i?pi(e):mi(n),si.set=L):(si.get=n.get?i&&!1!==n.cache?pi(e):mi(n.get):L,si.set=n.set||L),Object.defineProperty(t,e,si)}function pi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),gt.target&&e.depend(),e.value}}function mi(t){return function(){return t.call(this,this)}}function gi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:O(e[n],t)}function vi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)yi(t,n,i[r]);else yi(t,n,i)}}function yi(t,e,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function bi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var i=this;if(h(e))return yi(i,t,e,n);n=n||{},n.user=!0;var r=new ri(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';yt(),re(e,i,[r.value],i,s),bt()}return function(){r.teardown()}}}var wi=0;function _i(t){t.prototype._init=function(t){var e=this;e._uid=wi++,e._isVue=!0,t&&t._isComponent?Ii(e,t):e.$options=Gt(Si(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),kn(e),yn(e),Un(e,"beforeCreate"),Ne(e),ai(e),Oe(e),Un(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Ii(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Si(t){var e=t.options;if(t.super){var n=Si(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=Ti(t);r&&R(t.extendOptions,r),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ti(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Ei(t){this._init(t)}function ki(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ci(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Gt(n.options,t),o["super"]=n,o.options.props&&Ai(o),o.options.computed&&Oi(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=R({},o.options),r[i]=o,o}}function Ai(t){var e=t.options.props;for(var n in e)oi(t.prototype,"_props",n)}function Oi(t){var e=t.options.computed;for(var n in e)fi(t.prototype,n,e[n])}function Ni(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Ri(t){return t&&(t.Ctor.options.name||t.tag)}function Di(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!d(t)&&t.test(e)}function Li(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pi(n,s,i,r)}}}function Pi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,b(n,e)}_i(Ei),bi(Ei),Nn(Ei),Pn(Ei),_n(Ei);var $i=[String,RegExp,Array],Mi={name:"keep-alive",abstract:!0,props:{include:$i,exclude:$i,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:Ri(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Pi(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pi(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Li(t,(function(t){return Di(e,t)}))})),this.$watch("exclude",(function(e){Li(t,(function(t){return!Di(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=En(t),n=e&&e.componentOptions;if(n){var i=Ri(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Di(s,i))||o&&i&&Di(o,i))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,b(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Vi={KeepAlive:Mi};function Fi(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:pt,extend:R,mergeOptions:Gt,defineReactive:Pt},t.set=$t,t.delete=Mt,t.nextTick=ge,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,R(t.options.components,Vi),ki(t),Ci(t),xi(t),Ni(t)}Fi(Ei),Object.defineProperty(Ei.prototype,"$isServer",{get:ut}),Object.defineProperty(Ei.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ei,"FunctionalRenderContext",{value:tn}),Ei.version="2.6.14";var Bi=v("style,class"),Ui=v("input,textarea,option,select,progress"),ji=function(t,e,n){return"value"===n&&Ui(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},zi=v("contenteditable,draggable,spellcheck"),qi=v("events,caret,typing,plaintext-only"),Hi=function(t,e){return Xi(e)||"false"===e?"false":"contenteditable"===t&&qi(e)?e:"true"},Zi=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Ki=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Gi=function(t){return Ki(t)?t.slice(6,t.length):""},Xi=function(t){return null==t||!1===t};function Yi(t){var e=t.data,n=t,i=t;while(s(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Qi(i.data,e));while(s(n=n.parent))n&&n.data&&(e=Qi(e,n.data));return Ji(e.staticClass,e.class)}function Qi(t,e){return{staticClass:tr(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Ji(t,e){return s(t)||s(e)?tr(t,er(e)):""}function tr(t,e){return t?e?t+" "+e:t:e||""}function er(t){return Array.isArray(t)?nr(t):u(t)?ir(t):"string"===typeof t?t:""}function nr(t){for(var e,n="",i=0,r=t.length;i<r;i++)s(e=er(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ir(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var rr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},sr=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),or=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ar=function(t){return sr(t)||or(t)};function cr(t){return or(t)?"svg":"math"===t?"math":void 0}var ur=Object.create(null);function lr(t){if(!Y)return!0;if(ar(t))return!1;if(t=t.toLowerCase(),null!=ur[t])return ur[t];var e=document.createElement(t);return t.indexOf("-")>-1?ur[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ur[t]=/HTMLUnknownElement/.test(e.toString())}var hr=v("text,number,password,search,email,tel,url");function dr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function fr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pr(t,e){return document.createElementNS(rr[t],e)}function mr(t){return document.createTextNode(t)}function gr(t){return document.createComment(t)}function vr(t,e,n){t.insertBefore(e,n)}function yr(t,e){t.removeChild(e)}function br(t,e){t.appendChild(e)}function wr(t){return t.parentNode}function _r(t){return t.nextSibling}function Ir(t){return t.tagName}function Sr(t,e){t.textContent=e}function Tr(t,e){t.setAttribute(e,"")}var Er=Object.freeze({createElement:fr,createElementNS:pr,createTextNode:mr,createComment:gr,insertBefore:vr,removeChild:yr,appendChild:br,parentNode:wr,nextSibling:_r,tagName:Ir,setTextContent:Sr,setStyleScope:Tr}),kr={create:function(t,e){Cr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Cr(t,!0),Cr(e))},destroy:function(t){Cr(t,!0)}};function Cr(t,e){var n=t.data.ref;if(s(n)){var i=t.context,r=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?b(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var xr=new wt("",{},[]),Ar=["create","activate","update","remove","destroy"];function Or(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&Nr(t,e)||o(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function Nr(t,e){if("input"!==t.tag)return!0;var n,i=s(n=t.data)&&s(n=n.attrs)&&n.type,r=s(n=e.data)&&s(n=n.attrs)&&n.type;return i===r||hr(i)&&hr(r)}function Rr(t,e,n){var i,r,o={};for(i=e;i<=n;++i)r=t[i].key,s(r)&&(o[r]=i);return o}function Dr(t){var e,n,i={},a=t.modules,u=t.nodeOps;for(e=0;e<Ar.length;++e)for(i[Ar[e]]=[],n=0;n<a.length;++n)s(a[n][Ar[e]])&&i[Ar[e]].push(a[n][Ar[e]]);function l(t){return new wt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);s(e)&&u.removeChild(e,t)}function f(t,e,n,i,r,a,c){if(s(t.elm)&&s(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!r,!p(t,e,n,i)){var l=t.data,h=t.children,d=t.tag;s(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),I(t),b(t,h,e),s(l)&&_(t,e),y(n,t.elm,i)):o(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function p(t,e,n,i){var r=t.data;if(s(r)){var a=s(t.componentInstance)&&r.keepAlive;if(s(r=r.hook)&&s(r=r.init)&&r(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,i),o(a)&&g(t,e,n,i),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),I(t)):(Cr(t),e.push(t))}function g(t,e,n,r){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<i.activate.length;++o)i.activate[o](xr,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){s(t)&&(s(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else c(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function _(t,n){for(var r=0;r<i.create.length;++r)i.create[r](xr,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(xr,t),s(e.insert)&&n.push(t))}function I(t){var e;if(s(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}s(e=Rn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function S(t,e,n,i,r,s){for(;i<=r;++i)f(n[i],s,t,e,!1,n,i)}function T(t){var e,n,r=t.data;if(s(r))for(s(e=r.hook)&&s(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)T(t.children[n])}function E(t,e,n){for(;e<=n;++e){var i=t[e];s(i)&&(s(i.tag)?(k(i),T(i)):d(i.elm))}}function k(t,e){if(s(e)||s(t.data)){var n,r=i.remove.length+1;for(s(e)?e.listeners+=r:e=h(t.elm,r),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&k(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function C(t,e,n,i,o){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)r(g)?g=e[++d]:r(v)?v=e[--m]:Or(g,b)?(A(g,b,i,n,p),g=e[++d],b=n[++p]):Or(v,w)?(A(v,w,i,n,y),v=e[--m],w=n[--y]):Or(g,w)?(A(g,w,i,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):Or(v,b)?(A(v,b,i,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(r(a)&&(a=Rr(e,d,m)),c=s(b.key)?a[b.key]:x(b,e,d,m),r(c)?f(b,i,t,g.elm,!1,n,p):(l=e[c],Or(l,b)?(A(l,b,i,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,i,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[y+1])?null:n[y+1].elm,S(t,h,n,p,y,i)):p>y&&E(e,d,m)}function x(t,e,n,i){for(var r=n;r<i;r++){var o=e[r];if(s(o)&&Or(t,o))return r}}function A(t,e,n,a,c,l){if(t!==e){s(e.elm)&&s(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(o(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(s(f)&&w(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);s(d=f.hook)&&s(d=d.update)&&d(t,e)}r(e.text)?s(p)&&s(m)?p!==m&&C(h,p,m,n,l):s(m)?(s(t.text)&&u.setTextContent(h,""),S(h,null,m,0,m.length-1,n)):s(p)?E(p,0,p.length-1):s(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(o(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var N=v("attrs,class,staticClass,staticStyle,key");function R(t,e,n,i){var r,a=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,o(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(r=c.hook)&&s(r=r.init)&&r(e,!0),s(r=e.componentInstance)))return m(e,n),!0;if(s(a)){if(s(u))if(t.hasChildNodes())if(s(r=c)&&s(r=r.domProps)&&s(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(s(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,_(e,n);break}!f&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=s(t.nodeType);if(!d&&Or(t,e))A(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),o(n)&&R(t,e,h))return O(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),s(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](xr,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else Cr(g);g=g.parent}}s(m)?E([t],0,0):s(t.tag)&&T(t)}}return O(e,h,c),e.elm}s(t)&&T(t)}}var Lr={create:Pr,update:Pr,destroy:function(t){Pr(t,xr)}};function Pr(t,e){(t.data.directives||e.data.directives)&&$r(t,e)}function $r(t,e){var n,i,r,s=t===xr,o=e===xr,a=Vr(t.data.directives,t.context),c=Vr(e.data.directives,e.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Br(r,"update",e,t),r.def&&r.def.componentUpdated&&l.push(r)):(Br(r,"bind",e,t),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Br(u[n],"inserted",e,t)};s?Se(e,"insert",h):h()}if(l.length&&Se(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Br(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Br(a[n],"unbind",t,t,o)}var Mr=Object.create(null);function Vr(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Mr),r[Fr(i)]=i,i.def=Xt(e.$options,"directives",i.name,!0);return r}function Fr(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Br(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(Eo){ie(Eo,n.context,"directive "+t.name+" "+e+" hook")}}var Ur=[kr,Lr];function jr(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var i,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(i in s(l.__ob__)&&(l=e.data.attrs=R({},l)),l)o=l[i],a=u[i],a!==o&&zr(c,i,o,e.data.pre);for(i in(et||it)&&l.value!==u.value&&zr(c,"value",l.value),u)r(l[i])&&(Ki(i)?c.removeAttributeNS(Wi,Gi(i)):zi(i)||c.removeAttribute(i))}}function zr(t,e,n,i){i||t.tagName.indexOf("-")>-1?qr(t,e,n):Zi(e)?Xi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):zi(e)?t.setAttribute(e,Hi(e,n)):Ki(e)?Xi(n)?t.removeAttributeNS(Wi,Gi(e)):t.setAttributeNS(Wi,e,n):qr(t,e,n)}function qr(t,e,n){if(Xi(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var Hr={create:jr,update:jr};function Zr(t,e){var n=e.elm,i=e.data,o=t.data;if(!(r(i.staticClass)&&r(i.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Yi(e),c=n._transitionClasses;s(c)&&(a=tr(a,er(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wr,Kr={create:Zr,update:Zr},Gr="__r",Xr="__c";function Yr(t){if(s(t[Gr])){var e=et?"change":"input";t[e]=[].concat(t[Gr],t[e]||[]),delete t[Gr]}s(t[Xr])&&(t.change=[].concat(t[Xr],t.change||[]),delete t[Xr])}function Qr(t,e,n){var i=Wr;return function r(){var s=e.apply(null,arguments);null!==s&&es(t,r,n,i)}}var Jr=ce&&!(st&&Number(st[1])<=53);function ts(t,e,n,i){if(Jr){var r=Gn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Wr.addEventListener(t,e,at?{capture:n,passive:i}:n)}function es(t,e,n,i){(i||Wr).removeEventListener(t,e._wrapper||e,n)}function ns(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Wr=e.elm,Yr(n),Ie(n,i,ts,es,Qr,e.context),Wr=void 0}}var is,rs={create:ns,update:ns};function ss(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,i,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in s(c.__ob__)&&(c=e.data.domProps=R({},c)),a)n in c||(o[n]="");for(n in c){if(i=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=i;var u=r(i)?"":String(i);os(o,u)&&(o.value=u)}else if("innerHTML"===n&&or(o.tagName)&&r(o.innerHTML)){is=is||document.createElement("div"),is.innerHTML="<svg>"+i+"</svg>";var l=is.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(i!==a[n])try{o[n]=i}catch(Eo){}}}}function os(t,e){return!t.composing&&("OPTION"===t.tagName||as(t,e)||cs(t,e))}function as(t,e){var n=!0;try{n=document.activeElement!==t}catch(Eo){}return n&&t.value!==e}function cs(t,e){var n=t.value,i=t._vModifiers;if(s(i)){if(i.number)return g(n)!==g(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var us={create:ss,update:ss},ls=I((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function hs(t){var e=ds(t.style);return t.staticStyle?R(t.staticStyle,e):e}function ds(t){return Array.isArray(t)?D(t):"string"===typeof t?ls(t):t}function fs(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=hs(r.data))&&R(i,n)}(n=hs(t.data))&&R(i,n);var s=t;while(s=s.parent)s.data&&(n=hs(s.data))&&R(i,n);return i}var ps,ms=/^--/,gs=/\s*!important$/,vs=function(t,e,n){if(ms.test(e))t.style.setProperty(e,n);else if(gs.test(n))t.style.setProperty(C(e),n.replace(gs,""),"important");else{var i=bs(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},ys=["Webkit","Moz","ms"],bs=I((function(t){if(ps=ps||document.createElement("div").style,t=T(t),"filter"!==t&&t in ps)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var i=ys[n]+e;if(i in ps)return i}}));function ws(t,e){var n=e.data,i=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(i.staticStyle)&&r(i.style))){var o,a,c=e.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},h=u||l,d=ds(e.data.style)||{};e.data.normalizedStyle=s(d.__ob__)?R({},d):d;var f=fs(e,!0);for(a in h)r(f[a])&&vs(c,a,"");for(a in f)o=f[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var _s={create:ws,update:ws},Is=/\s+/;function Ss(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Is).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Is).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Es(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&R(e,ks(t.name||"v")),R(e,t),e}return"string"===typeof t?ks(t):void 0}}var ks=I((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Cs=Y&&!nt,xs="transition",As="animation",Os="transition",Ns="transitionend",Rs="animation",Ds="animationend";Cs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Os="WebkitTransition",Ns="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Rs="WebkitAnimation",Ds="webkitAnimationEnd"));var Ls=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Ls((function(){Ls(t)}))}function $s(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ss(t,e))}function Ms(t,e){t._transitionClasses&&b(t._transitionClasses,e),Ts(t,e)}function Vs(t,e,n){var i=Bs(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===xs?Ns:Ds,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var Fs=/\b(transform|all)(,|$)/;function Bs(t,e){var n,i=window.getComputedStyle(t),r=(i[Os+"Delay"]||"").split(", "),s=(i[Os+"Duration"]||"").split(", "),o=Us(r,s),a=(i[Rs+"Delay"]||"").split(", "),c=(i[Rs+"Duration"]||"").split(", "),u=Us(a,c),l=0,h=0;e===xs?o>0&&(n=xs,l=o,h=s.length):e===As?u>0&&(n=As,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?xs:As:null,h=n?n===xs?s.length:c.length:0);var d=n===xs&&Fs.test(i[Os+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Us(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return js(e)+js(t[n])})))}function js(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function zs(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Es(t.data.transition);if(!r(i)&&!s(n._enterCb)&&1===n.nodeType){var o=i.css,a=i.type,c=i.enterClass,l=i.enterToClass,h=i.enterActiveClass,d=i.appearClass,f=i.appearToClass,p=i.appearActiveClass,m=i.beforeEnter,v=i.enter,y=i.afterEnter,b=i.enterCancelled,w=i.beforeAppear,_=i.appear,I=i.afterAppear,S=i.appearCancelled,T=i.duration,E=Rn,k=Rn.$vnode;while(k&&k.parent)E=k.context,k=k.parent;var C=!E._isMounted||!t.isRootInsert;if(!C||_||""===_){var x=C&&d?d:c,A=C&&p?p:h,O=C&&f?f:l,N=C&&w||m,R=C&&"function"===typeof _?_:v,D=C&&I||y,L=C&&S||b,P=g(u(T)?T.enter:T);0;var $=!1!==o&&!nt,M=Zs(R),V=n._enterCb=F((function(){$&&(Ms(n,O),Ms(n,A)),V.cancelled?($&&Ms(n,x),L&&L(n)):D&&D(n),n._enterCb=null}));t.data.show||Se(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),R&&R(n,V)})),N&&N(n),$&&($s(n,x),$s(n,A),Ps((function(){Ms(n,x),V.cancelled||($s(n,O),M||(Hs(P)?setTimeout(V,P):Vs(n,a,V)))}))),t.data.show&&(e&&e(),R&&R(n,V)),$||M||V()}}}function qs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Es(t.data.transition);if(r(i)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var o=i.css,a=i.type,c=i.leaveClass,l=i.leaveToClass,h=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,v=i.delayLeave,y=i.duration,b=!1!==o&&!nt,w=Zs(f),_=g(u(y)?y.leave:y);0;var I=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Ms(n,l),Ms(n,h)),I.cancelled?(b&&Ms(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(S):S()}function S(){I.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&($s(n,c),$s(n,h),Ps((function(){Ms(n,c),I.cancelled||($s(n,l),w||(Hs(_)?setTimeout(I,_):Vs(n,a,I)))}))),f&&f(n,I),b||w||I())}}function Hs(t){return"number"===typeof t&&!isNaN(t)}function Zs(t){if(r(t))return!1;var e=t.fns;return s(e)?Zs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ws(t,e){!0!==e.data.show&&zs(e)}var Ks=Y?{create:Ws,activate:Ws,remove:function(t,e){!0!==t.data.show?qs(t,e):e()}}:{},Gs=[Hr,Kr,rs,us,_s,Ks],Xs=Gs.concat(Ur),Ys=Dr({nodeOps:Er,modules:Xs});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&so(t,"input")}));var Qs={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Se(n,"postpatch",(function(){Qs.componentUpdated(t,e,n)})):Js(t,e,n.context),t._vOptions=[].map.call(t.options,no)):("textarea"===n.tag||hr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",io),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Js(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,no);if(r.some((function(t,e){return!M(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return eo(t,r)})):e.value!==e.oldValue&&eo(e.value,r);s&&so(t,"change")}}}};function Js(t,e,n){to(t,e,n),(et||it)&&setTimeout((function(){to(t,e,n)}),0)}function to(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=V(i,no(o))>-1,o.selected!==s&&(o.selected=s);else if(M(no(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function eo(t,e){return e.every((function(e){return!M(e,t)}))}function no(t){return"_value"in t?t._value:t.value}function io(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,so(t.target,"input"))}function so(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function oo(t){return!t.componentInstance||t.data&&t.data.transition?t:oo(t.componentInstance._vnode)}var ao={bind:function(t,e,n){var i=e.value;n=oo(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,zs(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?zs(n,(function(){t.style.display=t.__vOriginalDisplay})):qs(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},co={model:Qs,show:ao},uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?lo(En(e.children)):t}function ho(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var s in r)e[T(s)]=r[s];return e}function fo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function po(t){while(t=t.parent)if(t.data.transition)return!0}function mo(t,e){return e.key===t.key&&e.tag===t.tag}var go=function(t){return t.tag||Pe(t)},vo=function(t){return"show"===t.name},yo={name:"transition",props:uo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var i=this.mode;0;var r=n[0];if(po(this.$vnode))return r;var s=lo(r);if(!s)return r;if(this._leaving)return fo(t,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),u=this._vnode,l=lo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!mo(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},a);if("out-in"===i)return this._leaving=!0,Se(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),fo(t,r);if("in-out"===i){if(Pe(s))return u;var d,f=function(){d()};Se(a,"afterEnter",f),Se(a,"enterCancelled",f),Se(h,"delayLeave",(function(t){d=t}))}}return r}}},bo=R({tag:String,moveClass:String},uo);delete bo.mode;var wo={props:bo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var u=[],l=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(_o),t.forEach(Io),t.forEach(So),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;$s(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Ns,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Ns,t),n._moveCb=null,Ms(n,e))})}})))},methods:{hasMove:function(t,e){if(!Cs)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ts(n,t)})),Ss(n,e),n.style.display="none",this.$el.appendChild(n);var i=Bs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function _o(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Io(t){t.data.newPos=t.elm.getBoundingClientRect()}function So(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var To={Transition:yo,TransitionGroup:wo};Ei.config.mustUseProp=ji,Ei.config.isReservedTag=ar,Ei.config.isReservedAttr=Bi,Ei.config.getTagNamespace=cr,Ei.config.isUnknownElement=lr,R(Ei.options.directives,co),R(Ei.options.components,To),Ei.prototype.__patch__=Y?Ys:L,Ei.prototype.$mount=function(t,e){return t=t&&Y?dr(t):void 0,$n(this,t,e)},Y&&setTimeout((function(){z.devtools&&lt&&lt.emit("init",Ei)}),0),e["Z"]=Ei},3453:function(t){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},8180:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var i=n(4444),r=n(8463),s=n(2238),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,s._addComponent)(t,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(t,e=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,s._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,s._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(t){delete e[t]}function o(t){if(t=t||s._DEFAULT_ENTRY_NAME,!(0,i.r3)(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(r,o={}){const a=s.initializeApp(r,o);if((0,i.r3)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map((t=>e[t]))}function l(e){const r=e.name,a=r.replace("-compat","");if(s._registerComponent(e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:r});return t[a]()};void 0!==e.serviceProps&&(0,i.ZB)(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){(0,i.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),t}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.20";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){(0,s.registerVersion)(p,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},2238:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return G},_DEFAULT_ENTRY_NAME:function(){return $},_addComponent:function(){return B},_addOrOverwriteComponent:function(){return U},_apps:function(){return V},_clearComponents:function(){return H},_components:function(){return F},_getProvider:function(){return z},_registerComponent:function(){return j},_removeServiceInstance:function(){return q},deleteApp:function(){return J},getApp:function(){return Y},getApps:function(){return Q},initializeApp:function(){return X},onLog:function(){return et},registerVersion:function(){return tt},setLogLevel:function(){return nt}});var i=n(8463),r=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.19",l=new r.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",S="@firebase/installations-compat",T="@firebase/messaging",E="@firebase/messaging-compat",k="@firebase/performance",C="@firebase/performance-compat",x="@firebase/remote-config",A="@firebase/remote-config-compat",O="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",P="9.6.9",$="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[S]:"fire-iid-compat",[T]:"fire-fcm",[E]:"fire-fcm-compat",[k]:"fire-perf",[C]:"fire-perf-compat",[x]:"fire-rc",[A]:"fire-rc-compat",[O]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,F=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function U(t,e){t.container.addOrOverwriteComponent(e)}function j(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of V.values())B(n,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function q(t,e,n=$){z(t,e).clearInstance(n)}function H(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},W=new s.LL("app","Firebase",Z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=P;function X(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:$,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw W.create("bad-app-name",{appName:String(r)});const o=V.get(r);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw W.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of F.values())a.addComponent(i);const c=new K(t,n,a);return V.set(r,c),c}function Y(t=$){const e=V.get(t);if(!e)throw W.create("no-app",{appName:t});return e}function Q(){return Array.from(V.values())}async function J(t){const e=t.name;V.has(e)&&(V.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function tt(t,e,n){var r;let s=null!==(r=M[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}j(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw W.create("invalid-log-argument");(0,r.Am)(t,e)}function nt(t){(0,r.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="firebase-heartbeat-database",rt=1,st="firebase-heartbeat-store";let ot=null;function at(){return ot||(ot=(0,s.X3)(it,rt,((t,e)=>{switch(e){case 0:t.createObjectStore(st)}})).catch((t=>{throw W.create("storage-open",{originalErrorMessage:t.message})}))),ot}async function ct(t){try{const e=await at();return e.transaction(st).objectStore(st).get(lt(t))}catch(e){throw W.create("storage-get",{originalErrorMessage:e.message})}}async function ut(t,e){try{const n=await at(),i=n.transaction(st,"readwrite"),r=i.objectStore(st);return await r.put(e,lt(t)),i.complete}catch(n){throw W.create("storage-set",{originalErrorMessage:n.message})}}function lt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=1024,dt=2592e6;class ft{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=pt(),{heartbeatsToSend:e,unsentEntries:n}=mt(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pt(){const t=new Date;return t.toISOString().substring(0,10)}function mt(t,e=ht){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),vt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class gt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function vt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){j(new i.wA("platform-logger",(t=>new o(t)),"PRIVATE")),j(new i.wA("heartbeat",(t=>new ft(t)),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}yt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function l(t){i.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.999b12f2.js.map