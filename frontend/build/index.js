!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=28)}([function(t,e,r){"use strict";var n=r(2),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function a(t){return void 0===t}function i(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function u(t){return"[object Function]"===o.call(t)}function f(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),s(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:i,isPlainObject:c,isUndefined:a,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return i(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function t(){var e={};function r(r,n){c(e[n])&&c(r)?e[n]=t(e[n],r):c(r)?e[n]=t({},r):s(r)?e[n]=r.slice():e[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return e},extend:function(t,e,r){return f(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},function(t,e,r){t.exports=r(10)},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(0);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var s;if(r)s=r(e);else if(n.isURLSearchParams(e))s=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),s=a.join("&")}if(s){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";(function(e){var n=r(0),o=r(16),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(i=r(6)),i),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(s)})),t.exports=c}).call(this,r(15))},function(t,e,r){"use strict";var n=r(0),o=r(17),s=r(19),a=r(3),i=r(20),c=r(23),u=r(24),f=r(7);t.exports=function(t){return new Promise((function(e,r){var d=t.data,l=t.headers;n.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";l.Authorization="Basic "+btoa(h+":"+m)}var g=i(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),a(g,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,s={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:t,request:p};o(e,r,s),p=null}},p.onabort=function(){p&&(r(f("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(f("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(f(e,t,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=(t.withCredentials||u(g))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;y&&(l[t.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(l,(function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete l[e]:p.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){p&&(p.abort(),r(t),p=null)})),d||(d=null),p.send(d)}))}},function(t,e,r){"use strict";var n=r(18);t.exports=function(t,e,r,o,s){var a=new Error(t);return n(a,e,r,o,s)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){e=e||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function u(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(t[o],e[o])}n.forEach(o,(function(t){n.isUndefined(e[t])||(r[t]=c(void 0,e[t]))})),n.forEach(s,u),n.forEach(a,(function(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=c(void 0,t[o])):r[o]=c(void 0,e[o])})),n.forEach(i,(function(n){n in e?r[n]=c(t[n],e[n]):n in t&&(r[n]=c(void 0,t[n]))}));var f=o.concat(s).concat(a).concat(i),d=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return n.forEach(d,u),r}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){"use strict";var n=r(0),o=r(2),s=r(11),a=r(8);function i(t){var e=new s(t),r=o(s.prototype.request,e);return n.extend(r,s.prototype,e),n.extend(r,e),r}var c=i(r(5));c.Axios=s,c.create=function(t){return i(a(c.defaults,t))},c.Cancel=r(9),c.CancelToken=r(25),c.isCancel=r(4),c.all=function(t){return Promise.all(t)},c.spread=r(26),c.isAxiosError=r(27),t.exports=c,t.exports.default=c},function(t,e,r){"use strict";var n=r(0),o=r(3),s=r(12),a=r(13),i=r(8);function c(t){this.defaults=t,this.interceptors={request:new s,response:new s}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=i(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=i(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(i(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,n){return this.request(i(n||{},{method:t,url:e,data:r}))}})),t.exports=c},function(t,e,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},function(t,e,r){"use strict";var n=r(0),o=r(14),s=r(4),a=r(5);function i(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return i(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return i(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(i(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},function(t,e){var r,n,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],f=!1,d=-1;function l(){f&&c&&(f=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!f){var t=i(l);f=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new h(t,e)),1!==u.length||f||i(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},function(t,e,r){"use strict";var n=r(7);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,s,a){var i=[];i.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,r){"use strict";var n=r(21),o=r(22);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,s,a={};return t?(n.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=n.trim(t.substr(0,s)).toLowerCase(),r=n.trim(t.substr(s+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},function(t,e,r){"use strict";var n=r(9);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);const s=o.a.CancelToken;let a;var i={data:()=>({isLoading:!0,maxCartItems:null,cart:{items:[],total:null,shipping:null,total_items:0},error:!1}),watch:{"cart.total_items"(t){console.log(t)}},methods:{async removeFromCart(t){const e=await o.a.post("/wp-json/wc/store/cart/remove-item",{key:t},{headers:{"X-WC-Store-API-Nonce":storeApi.nonce}});if(200===!e.status)return this.showError(e.data),console.error("product couldn't be removed");e.data&&(this.cart=e.data)},async addToCart(t){const e=await o.a.post("/wp-json/wc/store/cart/add-item",{id:t,quantity:1},{headers:{"X-WC-Store-API-Nonce":storeApi.nonce}});if(200===!e.status)return this.showError(e.data),console.error("product couldn't be added");e.data&&(this.cart=e.data)},async updateToCart(t,e){try{const r=await o.a.post("/wp-json/wc/store/cart/update-item",{key:t,quantity:e,cancelToken:new s((function(t){a=t}))},{headers:{"X-WC-Store-API-Nonce":storeApi.nonce}});if(a(),200===!r.status)return this.showError(r.data),console.error("product couldn't update.");r.data&&(this.cart=r.data)}catch(t){console.log(t)}},async refreshCart(){const t=await o.a.get(storeApi.get_cart);if(200===!t.status)return console.error("cart couldn't be fetched");this.cart={items:t.data.items,total:t.data.totals,shipping:t.data.shipping_rates,total_items:t.data.items.length},this.isLoading=!1},showError(t=""){this.error=t},async addToCartHandler(t,e){await this.addToCart(t,e)}},computed:{emptySlots(){let t=[];return this.maxCartItems>this.cart.items.length&&(t=new Array(this.maxCartItems-this.cart.items.length)),t}},beforeCreate(){storeApi||console.error("storeApi are undefined")},beforeMount(){this.maxCartItems=storeApi.max_cart_items||4,this.refreshCart().then(()=>{console.log("test")})},mounted(){}},c={data:()=>({isLoading:!1,products:[],error:!1}),methods:{async getProducts(){const t=await o.a.get(storeApi.get_products);if(console.log(t.data),200===!t.status)return console.error("cart couldn't be fetched");this.products=t.data}},beforeCreate(){storeApi||console.error("storeApi are undefined")},beforeMount(){this.getProducts().then(()=>{console.log("test")})},mounted(){}};const u=Vue.createApp(i).mount("#cart"),f=Vue.createApp(i).mount("#cart-page");Vue.createApp(c).mount("#products"),document.body.addEventListener("click",t=>{if(t.target&&null!==t.target.dataset&&"object"==typeof t.target.dataset&&"productItem"in t.target.dataset){t.preventDefault(),t.stopPropagation();try{u.addToCartHandler(t.target.dataset.productItem)}catch(t){console.log(t)}try{f.addToCartHandler(t.target.dataset.productItem)}catch(t){console.log(t)}}}),Array.from(document.querySelectorAll("[data-product-item]")).forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault();try{u.addToCartHandler(t.dataset.productItem)}catch(t){console.log(t)}try{f.addToCartHandler(t.dataset.productItem)}catch(t){console.log(t)}})})}]);