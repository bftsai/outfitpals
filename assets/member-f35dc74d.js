import"./main-1baa1838.js";function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:de}=Object,G=(e=>t=>{const s=nt.call(t);return e[s]||(e[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),B=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:C}=Array,j=X("undefined");function it(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=B("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const rt=X("string"),A=X("function"),$e=X("number"),Z=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,M=e=>{if(G(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=B("Date"),ct=B("File"),dt=B("Blob"),ut=B("FileList"),mt=e=>Z(e)&&A(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=G(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},pt=B("URLSearchParams"),gt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:s=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),C(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const o=s?Object.getOwnPropertyNames(e):Object.keys(e),r=o.length;let c;for(n=0;n<r;n++)c=o[n],t.call(null,e[c],c,e)}}function Ce(e,t){t=t.toLowerCase();const s=Object.keys(e);let n=s.length,i;for(;n-- >0;)if(i=s[n],t===i.toLowerCase())return i;return null}const Fe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),je=e=>!j(e)&&e!==Fe;function oe(){const{caseless:e}=je(this)&&this||{},t={},s=(n,i)=>{const o=e&&Ce(t,i)||i;M(t[o])&&M(n)?t[o]=oe(t[o],n):M(n)?t[o]=oe({},n):C(n)?t[o]=n.slice():t[o]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&D(arguments[n],s);return t}const ht=(e,t,s,{allOwnKeys:n}={})=>(D(t,(i,o)=>{s&&A(i)?e[o]=Ue(i,s):e[o]=i},{allOwnKeys:n}),e),vt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,s,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),s&&Object.assign(e.prototype,s)},yt=(e,t,s,n)=>{let i,o,r;const c={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)r=i[o],(!n||n(r,e,t))&&!c[r]&&(t[r]=e[r],c[r]=!0);e=s!==!1&&de(e)}while(e&&(!s||s(e,t))&&e!==Object.prototype);return t},wt=(e,t,s)=>{e=String(e),(s===void 0||s>e.length)&&(s=e.length),s-=t.length;const n=e.indexOf(t,s);return n!==-1&&n===s},xt=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!$e(t))return null;const s=new Array(t);for(;t-- >0;)s[t]=e[t];return s},Et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),It=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},St=(e,t)=>{let s;const n=[];for(;(s=e.exec(t))!==null;)n.push(s);return n},Lt=B("HTMLFormElement"),Rt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,n,i){return n.toUpperCase()+i}),be=(({hasOwnProperty:e})=>(t,s)=>e.call(t,s))(Object.prototype),kt=B("RegExp"),De=(e,t)=>{const s=Object.getOwnPropertyDescriptors(e),n={};D(s,(i,o)=>{let r;(r=t(i,o,e))!==!1&&(n[o]=r||i)}),Object.defineProperties(e,n)},Pt=e=>{De(e,(t,s)=>{if(A(e)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const n=e[s];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Tt=(e,t)=>{const s={},n=i=>{i.forEach(o=>{s[o]=!0})};return C(e)?n(e):n(String(e).split(t)),s},At=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",ye="0123456789",_e={DIGIT:ye,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+ye},Bt=(e=16,t=_e.ALPHA_DIGIT)=>{let s="";const{length:n}=t;for(;e--;)s+=t[Math.random()*n|0];return s};function Ut(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nt=e=>{const t=new Array(10),s=(n,i)=>{if(Z(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const o=C(n)?[]:{};return D(n,(r,c)=>{const g=s(r,i+1);!j(g)&&(o[c]=g)}),t[i]=void 0,o}}return n};return s(e,0)},$t=B("AsyncFunction"),Ct=e=>e&&(Z(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:C,isArrayBuffer:Ne,isBuffer:it,isFormData:ft,isArrayBufferView:ot,isString:rt,isNumber:$e,isBoolean:at,isObject:Z,isPlainObject:M,isUndefined:j,isDate:lt,isFile:ct,isBlob:dt,isRegExp:kt,isFunction:A,isStream:mt,isURLSearchParams:pt,isTypedArray:Et,isFileList:ut,forEach:D,merge:oe,extend:ht,trim:gt,stripBOM:vt,inherits:bt,toFlatObject:yt,kindOf:G,kindOfTest:B,endsWith:wt,toArray:xt,forEachEntry:It,matchAll:St,isHTMLForm:Lt,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:De,freezeMethods:Pt,toObjectSet:Tt,toCamelCase:Rt,noop:At,toFiniteNumber:Ot,findKey:Ce,global:Fe,isContextDefined:je,ALPHABET:_e,generateString:Bt,isSpecCompliantForm:Ut,toJSONObject:Nt,isAsyncFn:$t,isThenable:Ct};function h(e,t,s,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),s&&(this.config=s),n&&(this.request=n),i&&(this.response=i)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Me=h.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(h,qe);Object.defineProperty(Me,"isAxiosError",{value:!0});h.from=(e,t,s,n,i,o)=>{const r=Object.create(Me);return a.toFlatObject(e,r,function(g){return g!==Error.prototype},c=>c!=="isAxiosError"),h.call(r,e.message,t,s,n,i),r.cause=e,r.name=e.name,o&&Object.assign(r,o),r};const Ft=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,s){return e?e.concat(t).map(function(i,o){return i=He(i),!s&&o?"["+i+"]":i}).join(s?".":""):t}function jt(e){return a.isArray(e)&&!e.some(re)}const Dt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,s){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,s=a.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,y){return!a.isUndefined(y[f])});const n=s.metaTokens,i=s.visitor||u,o=s.dots,r=s.indexes,g=(s.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(i))throw new TypeError("visitor must be a function");function p(m){if(m===null)return"";if(a.isDate(m))return m.toISOString();if(!g&&a.isBlob(m))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(m)||a.isTypedArray(m)?g&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,f,y){let x=m;if(m&&!y&&typeof m=="object"){if(a.endsWith(f,"{}"))f=n?f:f.slice(0,-2),m=JSON.stringify(m);else if(a.isArray(m)&&jt(m)||(a.isFileList(m)||a.endsWith(f,"[]"))&&(x=a.toArray(m)))return f=He(f),x.forEach(function(d,ee){!(a.isUndefined(d)||d===null)&&t.append(r===!0?we([f],ee,o):r===null?f:f+"[]",p(d))}),!1}return re(m)?!0:(t.append(we(y,f,o),p(m)),!1)}const l=[],b=Object.assign(Dt,{defaultVisitor:u,convertValue:p,isVisitable:re});function I(m,f){if(!a.isUndefined(m)){if(l.indexOf(m)!==-1)throw Error("Circular reference detected in "+f.join("."));l.push(m),a.forEach(m,function(x,T){(!(a.isUndefined(x)||x===null)&&i.call(t,x,a.isString(T)?T.trim():T,f,b))===!0&&I(x,f?f.concat(T):[T])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return I(e),t}function xe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ue(e,t){this._pairs=[],e&&Q(e,this,t)}const ze=ue.prototype;ze.append=function(t,s){this._pairs.push([t,s])};ze.toString=function(t){const s=t?function(n){return t.call(this,n,xe)}:xe;return this._pairs.map(function(i){return s(i[0])+"="+s(i[1])},"").join("&")};function _t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,s){if(!t)return e;const n=s&&s.encode||_t,i=s&&s.serialize;let o;if(i?o=i(t,s):o=a.isURLSearchParams(t)?t.toString():new ue(t,s).toString(n),o){const r=e.indexOf("#");r!==-1&&(e=e.slice(0,r)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mt{constructor(){this.handlers=[]}use(t,s,n){return this.handlers.push({fulfilled:t,rejected:s,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ee=Mt,Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qt=typeof URLSearchParams<"u"?URLSearchParams:ue,Ht=typeof FormData<"u"?FormData:null,zt=typeof Blob<"u"?Blob:null,Jt={isBrowser:!0,classes:{URLSearchParams:qt,FormData:Ht,Blob:zt},protocols:["http","https","file","blob","url","data"]},We=typeof window<"u"&&typeof document<"u",Vt=(e=>We&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Wt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Kt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:We,hasStandardBrowserEnv:Vt,hasStandardBrowserWebWorkerEnv:Wt},Symbol.toStringTag,{value:"Module"})),O={...Kt,...Jt};function Gt(e,t){return Q(e,new O.classes.URLSearchParams,Object.assign({visitor:function(s,n,i,o){return O.isNode&&a.isBuffer(s)?(this.append(n,s.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},s=Object.keys(e);let n;const i=s.length;let o;for(n=0;n<i;n++)o=s[n],t[o]=e[o];return t}function Ke(e){function t(s,n,i,o){let r=s[o++];const c=Number.isFinite(+r),g=o>=s.length;return r=!r&&a.isArray(i)?i.length:r,g?(a.hasOwnProp(i,r)?i[r]=[i[r],n]:i[r]=n,!c):((!i[r]||!a.isObject(i[r]))&&(i[r]=[]),t(s,n,i[r],o)&&a.isArray(i[r])&&(i[r]=Zt(i[r])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const s={};return a.forEachEntry(e,(n,i)=>{t(Xt(n),i,s,0)}),s}return null}function Qt(e,t,s){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(s||JSON.stringify)(e)}const me={transitional:Ve,adapter:["xhr","http"],transformRequest:[function(t,s){const n=s.getContentType()||"",i=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return i&&i?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Gt(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,g&&new g,this.formSerializer)}}return o||i?(s.setContentType("application/json",!1),Qt(t)):t}],transformResponse:[function(t){const s=this.transitional||me.transitional,n=s&&s.forcedJSONParsing,i=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||i)){const r=!(s&&s.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(c){if(r)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{me.headers[e]={}});const fe=me,Yt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),es=e=>{const t={};let s,n,i;return e&&e.split(`
`).forEach(function(r){i=r.indexOf(":"),s=r.substring(0,i).trim().toLowerCase(),n=r.substring(i+1).trim(),!(!s||t[s]&&Yt[s])&&(s==="set-cookie"?t[s]?t[s].push(n):t[s]=[n]:t[s]=t[s]?t[s]+", "+n:n)}),t},Ie=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function ts(e){const t=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=s.exec(e);)t[n[1]]=n[2];return t}const ss=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,s,n,i){if(a.isFunction(n))return n.call(this,t,s);if(i&&(t=s),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function ns(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,s,n)=>s.toUpperCase()+n)}function is(e,t){const s=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+s,{value:function(i,o,r){return this[n].call(this,t,i,o,r)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,s,n){const i=this;function o(c,g,p){const u=F(g);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(i,u);(!l||i[l]===void 0||p===!0||p===void 0&&i[l]!==!1)&&(i[l||g]=q(c))}const r=(c,g)=>a.forEach(c,(p,u)=>o(p,u,g));return a.isPlainObject(t)||t instanceof this.constructor?r(t,s):a.isString(t)&&(t=t.trim())&&!ss(t)?r(es(t),s):t!=null&&o(s,t,n),this}get(t,s){if(t=F(t),t){const n=a.findKey(this,t);if(n){const i=this[n];if(!s)return i;if(s===!0)return ts(i);if(a.isFunction(s))return s.call(this,i,n);if(a.isRegExp(s))return s.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,s){if(t=F(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!s||se(this,this[n],n,s)))}return!1}delete(t,s){const n=this;let i=!1;function o(r){if(r=F(r),r){const c=a.findKey(n,r);c&&(!s||se(n,n[c],c,s))&&(delete n[c],i=!0)}}return a.isArray(t)?t.forEach(o):o(t),i}clear(t){const s=Object.keys(this);let n=s.length,i=!1;for(;n--;){const o=s[n];(!t||se(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const s=this,n={};return a.forEach(this,(i,o)=>{const r=a.findKey(n,o);if(r){s[r]=q(i),delete s[o];return}const c=t?ns(o):String(o).trim();c!==o&&delete s[o],s[c]=q(i),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const s=Object.create(null);return a.forEach(this,(n,i)=>{n!=null&&n!==!1&&(s[i]=t&&a.isArray(n)?n.join(", "):n)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,s])=>t+": "+s).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...s){const n=new this(t);return s.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Ie]=this[Ie]={accessors:{}}).accessors,i=this.prototype;function o(r){const c=F(r);n[c]||(is(i,r),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Y.prototype,({value:e},t)=>{let s=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[s]=n}}});a.freezeMethods(Y);const U=Y;function ne(e,t){const s=this||fe,n=t||s,i=U.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(s,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Ge(e){return!!(e&&e.__CANCEL__)}function _(e,t,s){h.call(this,e??"canceled",h.ERR_CANCELED,t,s),this.name="CanceledError"}a.inherits(_,h,{__CANCEL__:!0});function os(e,t,s){const n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):t(new h("Request failed with status code "+s.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}const rs=O.hasStandardBrowserEnv?{write(e,t,s,n,i,o){const r=[e+"="+encodeURIComponent(t)];a.isNumber(s)&&r.push("expires="+new Date(s).toGMTString()),a.isString(n)&&r.push("path="+n),a.isString(i)&&r.push("domain="+i),o===!0&&r.push("secure"),document.cookie=r.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function as(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ls(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Xe(e,t){return e&&!as(t)?ls(e,t):t}const cs=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");let n;function i(o){let r=o;return t&&(s.setAttribute("href",r),r=s.href),s.setAttribute("href",r),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=i(window.location.href),function(r){const c=a.isString(r)?i(r):r;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function ds(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function us(e,t){e=e||10;const s=new Array(e),n=new Array(e);let i=0,o=0,r;return t=t!==void 0?t:1e3,function(g){const p=Date.now(),u=n[o];r||(r=p),s[i]=g,n[i]=p;let l=o,b=0;for(;l!==i;)b+=s[l++],l=l%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),p-r<t)return;const I=u&&p-u;return I?Math.round(b*1e3/I):void 0}}function Se(e,t){let s=0;const n=us(50,250);return i=>{const o=i.loaded,r=i.lengthComputable?i.total:void 0,c=o-s,g=n(c),p=o<=r;s=o;const u={loaded:o,total:r,progress:r?o/r:void 0,bytes:c,rate:g||void 0,estimated:g&&r&&p?(r-o)/g:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const ms=typeof XMLHttpRequest<"u",fs=ms&&function(e){return new Promise(function(s,n){let i=e.data;const o=U.from(e.headers).normalize();let{responseType:r,withXSRFToken:c}=e,g;function p(){e.cancelToken&&e.cancelToken.unsubscribe(g),e.signal&&e.signal.removeEventListener("abort",g)}let u;if(a.isFormData(i)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[f,...y]=u?u.split(";").map(x=>x.trim()).filter(Boolean):[];o.setContentType([f||"multipart/form-data",...y].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(f+":"+y))}const b=Xe(e.baseURL,e.url);l.open(e.method.toUpperCase(),Je(b,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function I(){if(!l)return;const f=U.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),x={data:!r||r==="text"||r==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:e,request:l};os(function(d){s(d),p()},function(d){n(d),p()},x),l=null}if("onloadend"in l?l.onloadend=I:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(I)},l.onabort=function(){l&&(n(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||Ve;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),n(new h(y,x.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&cs(b))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&rs.read(e.xsrfCookieName);f&&o.set(e.xsrfHeaderName,f)}i===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(y,x){l.setRequestHeader(x,y)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),r&&r!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(g=f=>{l&&(n(!f||f.type?new _(null,e,l):f),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(g),e.signal&&(e.signal.aborted?g():e.signal.addEventListener("abort",g)));const m=ds(b);if(m&&O.protocols.indexOf(m)===-1){n(new h("Unsupported protocol "+m+":",h.ERR_BAD_REQUEST,e));return}l.send(i||null)})},ae={http:Ft,xhr:fs};a.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,ps=e=>a.isFunction(e)||e===null||e===!1,Ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let s,n;const i={};for(let o=0;o<t;o++){s=e[o];let r;if(n=s,!ps(s)&&(n=ae[(r=String(s)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${r}'`);if(n)break;i[r||"#"+o]=n}if(!n){const o=Object.entries(i).map(([c,g])=>`adapter ${c} `+(g===!1?"is not supported by the environment":"is not available in the build"));let r=t?o.length>1?`since :
`+o.map(Le).join(`
`):" "+Le(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n},adapters:ae};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function Re(e){return ie(e),e.headers=U.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||fe.adapter)(e).then(function(n){return ie(e),n.data=ne.call(e,e.transformResponse,n),n.headers=U.from(n.headers),n},function(n){return Ge(n)||(ie(e),n&&n.response&&(n.response.data=ne.call(e,e.transformResponse,n.response),n.response.headers=U.from(n.response.headers))),Promise.reject(n)})}const ke=e=>e instanceof U?e.toJSON():e;function $(e,t){t=t||{};const s={};function n(p,u,l){return a.isPlainObject(p)&&a.isPlainObject(u)?a.merge.call({caseless:l},p,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function i(p,u,l){if(a.isUndefined(u)){if(!a.isUndefined(p))return n(void 0,p,l)}else return n(p,u,l)}function o(p,u){if(!a.isUndefined(u))return n(void 0,u)}function r(p,u){if(a.isUndefined(u)){if(!a.isUndefined(p))return n(void 0,p)}else return n(void 0,u)}function c(p,u,l){if(l in t)return n(p,u);if(l in e)return n(void 0,p)}const g={url:o,method:o,data:o,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:c,headers:(p,u)=>i(ke(p),ke(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=g[u]||i,b=l(e[u],t[u],u);a.isUndefined(b)&&l!==c||(s[u]=b)}),s}const Qe="1.6.2",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Pe={};pe.transitional=function(t,s,n){function i(o,r){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+r+(n?". "+n:"")}return(o,r,c)=>{if(t===!1)throw new h(i(r," has been removed"+(s?" in "+s:"")),h.ERR_DEPRECATED);return s&&!Pe[r]&&(Pe[r]=!0,console.warn(i(r," has been deprecated since v"+s+" and will be removed in the near future"))),t?t(o,r,c):!0}};function gs(e,t,s){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],r=t[o];if(r){const c=e[o],g=c===void 0||r(c,o,e);if(g!==!0)throw new h("option "+o+" must be "+g,h.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const le={assertOptions:gs,validators:pe},N=le.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}request(t,s){typeof t=="string"?(s=s||{},s.url=t):s=t||{},s=$(this.defaults,s);const{transitional:n,paramsSerializer:i,headers:o}=s;n!==void 0&&le.assertOptions(n,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),i!=null&&(a.isFunction(i)?s.paramsSerializer={serialize:i}:le.assertOptions(i,{encode:N.function,serialize:N.function},!0)),s.method=(s.method||this.defaults.method||"get").toLowerCase();let r=o&&a.merge(o.common,o[s.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),s.headers=U.concat(r,o);const c=[];let g=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(s)===!1||(g=g&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const p=[];this.interceptors.response.forEach(function(f){p.push(f.fulfilled,f.rejected)});let u,l=0,b;if(!g){const m=[Re.bind(this),void 0];for(m.unshift.apply(m,c),m.push.apply(m,p),b=m.length,u=Promise.resolve(s);l<b;)u=u.then(m[l++],m[l++]);return u}b=c.length;let I=s;for(l=0;l<b;){const m=c[l++],f=c[l++];try{I=m(I)}catch(y){f.call(this,y);break}}try{u=Re.call(this,I)}catch(m){return Promise.reject(m)}for(l=0,b=p.length;l<b;)u=u.then(p[l++],p[l++]);return u}getUri(t){t=$(this.defaults,t);const s=Xe(t.baseURL,t.url);return Je(s,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(s,n){return this.request($(n||{},{method:t,url:s,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function s(n){return function(o,r,c){return this.request($(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:r}))}}J.prototype[t]=s(),J.prototype[t+"Form"]=s(!0)});const H=J;class ge{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(o){s=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const r=new Promise(c=>{n.subscribe(c),o=c}).then(i);return r.cancel=function(){n.unsubscribe(o)},r},t(function(o,r,c){n.reason||(n.reason=new _(o,r,c),s(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const s=this._listeners.indexOf(t);s!==-1&&this._listeners.splice(s,1)}static source(){let t;return{token:new ge(function(i){t=i}),cancel:t}}}const hs=ge;function vs(e){return function(s){return e.apply(null,s)}}function bs(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});const ys=ce;function Ye(e){const t=new H(e),s=Ue(H.prototype.request,t);return a.extend(s,H.prototype,t,{allOwnKeys:!0}),a.extend(s,t,null,{allOwnKeys:!0}),s.create=function(i){return Ye($(e,i))},s}const E=Ye(fe);E.Axios=H;E.CanceledError=_;E.CancelToken=hs;E.isCancel=Ge;E.VERSION=Qe;E.toFormData=Q;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=vs;E.isAxiosError=bs;E.mergeConfig=$;E.AxiosHeaders=U;E.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Ze.getAdapter;E.HttpStatusCode=ys;E.default=E;const R=E,k="http://localhost:3000/",Te="http://localhost:5173/outfitpals/pages/member.html";function w(e){const t=document.cookie.split(";").find(s=>{if(s.split("=")[0].trim()===e)return s});return t===void 0?void 0:t.split("=")[1]}const P=document.querySelector(".spinner-border"),V={data:[],async getData(){const e=await R.get(`${k}600/users/${w("outfitpalsId")}`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});this.data=e.data},async register(e){try{P.classList.remove("d-none");const t=await R.post(`${k}register`,e);if(t.status===201){document.cookie=`outfitpalsToken=${t.data.accessToken}`,document.cookie=`outfitpalsId=${t.data.user.id}`,document.cookie=`outfitpalsThirdParty=${t.data.user["third party"]}`;const s=Number(w("outfitpalsId")),n=w("outfitpalsToken");await this.patchUsers(s,n,{"sign time":`${new Date}`}),signUpMail.value=account.value,signUpPwd.value=pwd.value,P.classList.add("d-none"),memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignUpData.classList.remove("d-none"),setTimeout(()=>{memberSignUpData.classList.remove("opacity-0")},0)},400)}}catch(t){console.log(t.response),memberIndexForm.classList.add("was-validated"),account.classList.add("is-invalid"),account.classList.add("is-invalid-customer")}},async deleteUser(e){try{P.classList.remove("d-none");const t=await R.delete(`${k}600/users/${e}`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});P.classList.add("d-none"),location.href=Te,document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''"}catch(t){console.log(t)}},async patchUsers(e,t,s){try{P.classList.remove("d-none");const n=await R.patch(`${k}600/users/${e}`,s,{headers:{authorization:`Bearer ${t}`}});P.classList.add("d-none")}catch(n){P.classList.add("d-none"),this.signOut(),console.log(n)}},async signIn(e){try{P.classList.remove("d-none");const t=await R.post(`${k}signin`,e);t.status===200&&(document.cookie=`outfitpalsToken=${t.data.accessToken}`,document.cookie=`outfitpalsId=${t.data.user.id}`,document.cookie=`outfitpalsThirdParty=${t.data.user["third party"]}`,this.data=t.data.user,P.classList.add("d-none"),memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignInProfile.classList.remove("d-none"),setTimeout(()=>{memberSignInProfile.classList.remove("opacity-0")},0)},400),this.renderMemberSignInProfileForm())}catch(t){console.log(t.response.data),P.classList.add("d-none"),memberIndexForm.classList.add("was-validated"),t.response.data.includes("user")?(account.classList.add("is-invalid"),account.nextElementSibling.textContent=t.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(pwd.classList.add("is-invalid"),pwd.nextElementSibling.textContent=t.response.data,pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))}},async signOut(){P.classList.remove("d-none"),document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''",location.href=Te,P.classList.add("d-none")},async renderMemberSignInProfileForm(){const e=Number(w("outfitpalsId")),t=w("outfitpalsToken");P.classList.remove("d-none"),this.data=(await R.get(`${k}600/users/${e}`,{headers:{authorization:`Bearer ${t}`}})).data,P.classList.add("d-none");let s=`
        <div class="row mb-3 fs-lg-5">
            <div class="col">
                <div class="mb-3 d-flex flex-column align-items-center">
                    <img class="mb-3" src="${this.data.image}" alt="profile pic" style="width: 80px;height: 80px;border-radius: 50%;">
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5 fs-lg=5">
            <div class="col-4 col-lg-2">
                <p>姓名</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.name}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>密碼</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">********</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>暱稱</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["nick name"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>生日</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.birthday}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>電子信箱</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.email}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>手機號碼</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.tel}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>性別</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.sex}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約時間</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["reservation time"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約地點</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["reservation location"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>身高</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.height}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>體重</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.weight}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>活動範圍</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.PopArea}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>打扮風格</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.style}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>穿搭價位</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["outfit price"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>逛街愛店</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["love store"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>自我介紹</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.introduce}</p>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInProfileRevise" type="submit">修改</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberMainPage" type="submit">我的主頁</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberCollect" type="submit">我的收藏</button>
            </div>
        </div>`;memberSignInProfileForm.innerHTML=s,memberSignInProfileForm.addEventListener("click",n=>{n.target.className.includes("memberSignInProfileRevise")&&(this.renderMemberSignInForm(),memberSignInProfile.classList.add("opacity-0"),setTimeout(()=>{memberSignInProfile.classList.add("d-none"),memberSignInData.classList.remove("d-none"),setTimeout(()=>{memberSignInData.classList.remove("opacity-0")},0)},400))})},renderMemberSignInForm(){let e=`
        <div class="row mb-3 fs-lg-5">
            <div class="col">
            <div class="mb-3 d-flex flex-column align-items-center">
                <img class="signInPhoto mb-3" src="${this.data.image}" alt="profile pic" style="width: 80px;height: 80px;border-radius: 50%;">
                <label for="signInImg" class="signInImg form-label text-secondary">選擇大頭貼</label>
                <input class="form-control d-none" type="file" id="signInImg" accept="image/png,image/jpeg,image/gif,image/png">
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5 fs-lg=5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInName" class="form-label">姓名</label>
            </div>
            <div class="col-lg-6">
            <input type="name" name="name" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInName" placeholder="請輸入姓名" value="${this.data.name}" required>
            <div class="invalid-feedback">
                請輸入姓名
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInPwd" class="form-label">密碼</label>
            </div>
            <div class="col-lg-6">
            <input type="password" name="pwd" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInPwd" placeholder="請輸入密碼" required>
            <div class="invalid-feedback">
                請輸入密碼
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInNickName" class="form-label">暱稱</label>
            </div>
            <div class="col-lg-6">
            <input type="text" name="nick name" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInNickName" placeholder="請輸入暱稱" value="${this.data["nick name"]}" required>
            <div class="invalid-feedback">
                請輸入暱稱
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInBirth" class="form-label">生日</label>
            </div>
            <div class="col-lg-6">
            <input type="date" name="birthday" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInBirth" placeholder="請輸入生日" value="${this.data.birthday}" required>
            <div class="invalid-feedback">
                請輸入生日
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInMail" class="form-label">電子信箱</label>
            </div>
            <div class="col-lg-6">
            <input type="email" name="email" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInMail" placeholder="請輸入電子信箱" value="${this.data.email}" required>
            <div class="invalid-feedback">
                請輸入電子信箱
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInTel" class="form-label">手機號碼</label>
            </div>
            <div class="col-lg-6">
            <input type="tel" name="tel" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInTel" placeholder="請輸入手機號碼" value="${this.data.tel}" required>
            <div class="invalid-feedback">
                請輸入手機號碼
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInSex" class="form-label">性別</label>
            </div>
            <div class="col-lg-6">
            <input class="form-check-input" type="radio" name="性別" id="signInMale" ${this.data.sex==="Male"?"checked":""}>
            <label class="form-check-label" for="signInMale" required>
                男生
            </label>
            <input class="form-check-input" type="radio" name="性別" id="signInFemale" ${this.data.sex==="Female"?"checked":""}>
            <label class="form-check-label" for="signInFemale">
                女生
            </label>
            <div class="invalid-feedback">
                請選擇性別
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationTime" class="form-label">開放預約時間</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInReservationTime" name="開放預約時間" required>
                <option value="" disabled>請選擇開放預約時間</option>
                <option>無</option>
                <option>09：00～12：00</option>
                <option>13：00～17：00</option>
                <option>18：00～22：00</option>
            </select>
            <div class="invalid-feedback">
                請選擇開放預約時間
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationLocation" class="form-label">開放預約地點</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInReservationLocation" placeholder="請輸入開放預約地點" name="開放預約地點" value="${this.data["reservation location"]}" required>
            <div class="invalid-feedback">
                請輸入開放預約地點
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInHeight" class="form-label">身高</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInHeight" placeholder="請輸入身高" name="身高" value="${this.data.height}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInWeight" class="form-label">體重</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInWeight" placeholder="請輸入體重" name="體重" value="${this.data.weight}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInPopArea" class="form-label">活動範圍</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInPopArea" name="活動範圍">
                <option value="" disabled>請選擇活動範圍</option>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>新竹市</option>
                <option>台中市</option>
                <option>苗栗市</option>
                <option>台南市</option>
                <option>高雄市</option>
                <option>屏東市</option>
                <option>宜蘭市</option>
                <option>花蓮市</option>
                <option>台東市</option>
                <option>綠島</option>
                <option>金門</option>
                <option>馬祖</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInStyle" class="form-label">打扮風格</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInStyle" name="打扮風格">
                <option value="" disabled>請選擇打扮風格</option>
                <option>日系</option>
                <option>韓系</option>
                <option>中國風</option>
                <option>歐系</option>
                <option>美系</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInOutfitPrice" class="form-label">穿搭價位</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInOutfitPrice" name="穿搭價位">
                <option value="" disabled>請選擇穿搭價位</option>
                <option>$1,000 以下</option>
                <option>$2,001～$3,000</option>
                <option>$3,001～$4,000</option>
                <option>$4,001～$5,000</option>
                <option>$5,001～$6,000</option>
                <option>無上限</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInLoveStore" class="form-label">逛街愛店</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInLoveStore" placeholder="請輸入逛街愛店" name="逛街愛店" value="${this.data["love store"]}">
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInIntroduce" class="form-label">自我介紹</label>
            </div>
            <div class="col-lg-6">
            <textarea class="form-control fs-lg-5 py-lg-3 px-lg-7" name="自我介紹" id="signInIntroduce" cols="30" rows="10" placeholder="請輸入自我介紹">${this.data.introduce}</textarea>
            </div>
        </div>
        <div class="row justify-content-center align-items-start fs-lg-5">
            <div class="col-lg-8 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <span>為必填欄位</p>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-lg-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseSubmit" type="submit">修改</button>
            </div>
            <div class="col-6 col-lg-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseCancel" type="button">取消</button>
            </div>
        </div>`;if(memberSignInForm.innerHTML=e,w("outfitpalsThirdParty")==="google"){const n=document.getElementById("signInPwd"),i=document.getElementById("signInMail");n.value=this.data["g-pwd"],n.setAttribute("disabled",""),i.setAttribute("disabled","")}document.getElementById("signInReservationTime").selectedIndex=this.data["reservation time selectedIndex"],document.getElementById("signInPopArea").selectedIndex=this.data["PopArea selectedIndex"],document.getElementById("signInStyle").selectedIndex=this.data["style selectedIndex"],document.getElementById("signInOutfitPrice").selectedIndex=this.data["outfit price selectedIndex"];const t=document.getElementById("signInImg"),s=document.querySelector(".signInPhoto");t.addEventListener("change",n=>{let i=new FileReader;i.addEventListener("load",o=>{s.setAttribute("src",o.target.result)}),i.readAsDataURL(n.target.files[0])})},async postPosts(e){await this.getData(),e.author=this.data.name;const t=await R.post(`${k}600/posts`,e,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});console.log(t)},async getPosts(){const e=(await R.get(`${k}600/posts`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}})).data;console.log(e)},async deletePosts(e){const t=await R.delete(`${k}600/posts/${e}`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});console.log(t)},async postComment(e){const t=await R.post(`${k}600/comments`,e,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});console.log(t)},async getComment(){const e=(await R.get(`${k}600/comments`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}})).data;console.log(e)},async deleteComment(e){const t=await R.delete(`${k}600/comments/${e}`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});console.log(t)},async postProfile(e){try{const t=await R.post(`${k}profile`,e);console.log(t)}catch(t){console.log(t)}},async getProfile(){try{const e=(await R.get(`${k}profile`)).data;console.log(e)}catch(e){console.log(e)}},async deleteProfile(e){const t=await R.delete(`${k}600/profile/${e}`,{headers:{authorization:`Bearer ${w("outfitpalsToken")}`}});console.log(t)}},ws="http://localhost:5173/outfitpals/pages/member.html",v={regexp:new RegExp(""),checkAccount(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkSignUpIndexPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),!1)},checkMail(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{5,}$"),t===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)},checkPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",!1)},checkNickName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),t===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",!1)},checkBirth(e,t){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),t===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",!1)},checkTel(e,t){return this.regexp=new RegExp("^09[\\d]{8}$"),t===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",!1)},checkReservationLocation(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),t===""?(e.nextElementSibling.textContent="請輸入開放預約地點",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)}};async function et(e,t,s,n,i,o,r,c,g,p,u,l,b,I,m,f,y,x,T){if(T.classList.add("was-validated"),t.addEventListener("keyup",d=>{v.checkName(d.target,d.target.value)}),t.addEventListener("paste",d=>{v.checkName(d.target,d.target.value)}),s.addEventListener("keyup",d=>{v.checkPwd(d.target,d.target.value)}),s.addEventListener("paste",d=>{v.checkPwd(d.target,d.target.value)}),n.addEventListener("keyup",d=>{v.checkNickName(d.target,d.target.value)}),n.addEventListener("paste",d=>{v.checkNickName(d.target,d.target.value)}),i.addEventListener("keyup",d=>{v.checkBirth(d.target,d.target.value)}),i.addEventListener("paste",d=>{v.checkBirth(d.target,d.target.value)}),o.addEventListener("keyup",d=>{v.checkMail(d.target,d.target.value)}),o.addEventListener("paste",d=>{v.checkMail(d.target,d.target.value)}),r.addEventListener("keyup",d=>{v.checkTel(d.target,d.target.value)}),r.addEventListener("paste",d=>{v.checkTel(d.target,d.target.value)}),u.addEventListener("keyup",d=>{v.checkReservationLocation(d.target,d.target.value)}),u.addEventListener("paste",d=>{v.checkReservationLocation(d.target,d.target.value)}),v.checkName(t,t.value)&&v.checkPwd(s,s.value)&&v.checkNickName(n,n.value)&&v.checkBirth(i,i.value)&&v.checkTel(r,r.value)&&v.checkReservationLocation(u,u.value)&&T.checkValidity()){let d={};d.image=e.getAttribute("src"),d.name=t.value,d.password=s.value,d["nick name"]=n.value,d.birthday=i.value,d.tel=r.value,d.email=o.value,d["reservation time"]=p.value,d["reservation time selectedIndex"]=p.selectedIndex,d["reservation location"]=u.value,d.height=l.value?l.value:"",d.weight=b.value?b.value:"",d.PopArea=I.value,d["PopArea selectedIndex"]=I.selectedIndex,d.style=m.value,d["style selectedIndex"]=m.selectedIndex,d["outfit price"]=f.value,d["outfit price selectedIndex"]=f.selectedIndex,d["love store"]=y.value?y.value:"",d.introduce=x.value?x.value:"",c.checked===!0?d.sex="Male":d.sex="Female";const ee=Number(w("outfitpalsId")),st=w("outfitpalsToken");await V.patchUsers(ee,st,d),location.href=ws,signUpPhoto.src=e.getAttribute("src"),t.value="",s.value="",n.value="",i.value="",r.value="",o.value="",p.selectedIndex=0,u.value="",l.value="",b.value="",I.selectedIndex=0,m.selectedIndex=0,f.selectedIndex=0,y.value="",x.value=""}else console.log("all false")}const xs="http://localhost:5173/outfitpals/pages/member.html",Ae=document.querySelector(".member-index"),he=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const Es=document.querySelector(".memberSignUpForm"),Oe=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const Be=document.querySelector(".memberSignInForm"),tt=document.querySelector(".signInBtn"),Is=document.querySelector(".signUpBtn"),W=document.querySelector(".gmailSignIn"),K=document.querySelector(".gmailSignUp"),S=document.getElementById("account"),L=document.getElementById("pwd"),Ss=document.getElementById("signUpImg");let z=document.querySelector(".signUpPhoto");const Ls=document.getElementById("signUpPwd"),Rs=document.getElementById("signUpMail"),ks=document.getElementById("signUpName"),Ps=document.getElementById("signUpNickName"),Ts=document.getElementById("signUpBirth"),As=document.getElementById("signUpTel"),Os=document.getElementById("signUpMale"),Bs=document.getElementById("signUpFemale"),Us=document.getElementById("signUpReservationTime"),Ns=document.getElementById("signUpReservationLocation"),$s=document.getElementById("signUpHeight"),Cs=document.getElementById("signUpWeight"),Fs=document.getElementById("signUpPopArea"),js=document.getElementById("signUpStyle"),Ds=document.getElementById("signUpOutfitPrice"),_s=document.getElementById("signUpLoveStore"),Ms=document.getElementById("signUpIntroduce"),ve=document.querySelector(".memberIndexSubmit"),qs=document.querySelector(".memberIndexCancel"),Hs=document.querySelector(".memberSignUpSubmit");(w("outfitpalsThirdParty")==="false"||w("outfitpalsThirdParty")==="google")&&w("outfitpalsToken")&&w("outfitpalsId")&&(Ae.classList.add("opacity-0"),S.value="",L.value="",V.renderMemberSignInProfileForm(),Ae.classList.add("d-none"),Oe.classList.remove("d-none"),Oe.classList.remove("opacity-0"));tt.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),S.value="",L.value="",ve.textContent="登入",he.classList.remove("was-validated"),S.classList.remove("is-invalid"),S.classList.remove("is-valid-customer"),S.classList.remove("is-invalid-customer"),S.setAttribute("style",""),L.classList.remove("is-invalid"),L.classList.remove("is-valid-customer"),L.classList.remove("is-invalid-customer"),L.setAttribute("style",""),e.target.classList.add("active"),K.classList.add("opacity-0"),setTimeout(()=>{K.classList.add("d-none"),W.classList.remove("d-none"),setTimeout(()=>{W.classList.remove("opacity-0")},0)},400)});Is.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),S.value="",L.value="",ve.textContent="註冊",he.classList.remove("was-validated"),S.classList.remove("is-invalid"),S.setAttribute("style",""),L.classList.remove("is-invalid"),L.setAttribute("style",""),e.target.classList.add("active"),W.classList.add("opacity-0"),setTimeout(()=>{W.classList.add("d-none"),K.classList.remove("d-none"),setTimeout(()=>{K.classList.remove("opacity-0")},0)},400)});ve.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),he.classList.add("was-validated"),v.checkAccount(S,S.value),v.checkSignUpIndexPwd(L,L.value),S.addEventListener("keyup",t=>{v.checkAccount(t.target,t.target.value)}),S.addEventListener("paste",t=>{v.checkAccount(t.target,t.target.value)}),L.addEventListener("keyup",t=>{v.checkSignUpIndexPwd(t.target,t.target.value)}),L.addEventListener("paste",t=>{v.checkSignUpIndexPwd(t.target,t.target.value)}),v.checkAccount(S,S.value)&&v.checkSignUpIndexPwd(L,L.value)){let t={};t.email=S.value,t.password=L.value,t["third party"]="false",tt.className.includes("active")?V.signIn(t):V.register(t)}});qs.addEventListener("click",e=>{S.value="",L.value=""});Ss.addEventListener("change",e=>{let t=new FileReader;t.addEventListener("load",s=>{z.setAttribute("src",s.target.result)}),t.readAsDataURL(e.target.files[0])});function zs(e){console.log(e);let t=new Image,s=e.match(/\.jpg/)?"image/jpeg":"image/png";return new Promise((n,i)=>{t.onload=function(){let o=document.createElement("canvas");o.width=this.naturalWidth,o.height=this.naturalHeight,o.getContext("2d").drawImage(this,0,0),n(o.toDataURL(s,1))},t.onerror=function(){i("Error: Image load failed")},t.src=e})}Hs.addEventListener("click",async e=>{e.preventDefault(),e.stopPropagation(),w("outfitpalsThirdParty")==="false"&&await zs(z.getAttribute("src")).then(t=>{z.src=t}).catch(t=>{console.log(t)}),et(z,ks,Ls,Ps,Ts,Rs,As,Os,Bs,Us,Ns,$s,Cs,Fs,js,Ds,_s,Ms,Es)});Be.addEventListener("click",e=>{document.getElementById("signInImg");const t=document.querySelector(".signInPhoto"),s=document.getElementById("signInPwd"),n=document.getElementById("signInMail"),i=document.getElementById("signInName"),o=document.getElementById("signInNickName"),r=document.getElementById("signInBirth"),c=document.getElementById("signInTel"),g=document.getElementById("signInMale"),p=document.getElementById("signInFemale"),u=document.getElementById("signInReservationTime"),l=document.getElementById("signInReservationLocation"),b=document.getElementById("signInHeight"),I=document.getElementById("signInWeight"),m=document.getElementById("signInPopArea"),f=document.getElementById("signInStyle"),y=document.getElementById("signInOutfitPrice"),x=document.getElementById("signInLoveStore"),T=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),et(t,i,s,o,r,n,c,g,p,u,l,b,I,m,f,y,x,T,Be)):e.target.className.includes("memberSignInReviseCancel")&&(location.href=xs)},!1);w("outfitpalsId");
