(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function a0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dp={exports:{}},ic={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function l2(){if(gy)return ic;gy=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:n,type:a,key:u,ref:o!==void 0?o:null,props:l}}return ic.Fragment=e,ic.jsx=t,ic.jsxs=t,ic}var vy;function c2(){return vy||(vy=1,Dp.exports=l2()),Dp.exports}var M=c2(),Lp={exports:{}},Et={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function u2(){if(_y)return Et;_y=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function b(F,te,xe){this.props=F,this.context=te,this.refs=T,this.updater=xe||x}b.prototype.isReactComponent={},b.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},b.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=b.prototype;function O(F,te,xe){this.props=F,this.context=te,this.refs=T,this.updater=xe||x}var w=O.prototype=new y;w.constructor=O,S(w,b.prototype),w.isPureReactComponent=!0;var E=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function R(F,te,xe,Te,K,$){return xe=$.ref,{$$typeof:n,type:F,key:te,ref:xe!==void 0?xe:null,props:$}}function V(F,te){return R(F.type,te,void 0,void 0,void 0,F.props)}function U(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function D(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(xe){return te[xe]})}var j=/\/+/g;function ne(F,te){return typeof F=="object"&&F!==null&&F.key!=null?D(""+F.key):te.toString(36)}function Z(){}function ue(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(Z,Z):(F.status="pending",F.then(function(te){F.status==="pending"&&(F.status="fulfilled",F.value=te)},function(te){F.status==="pending"&&(F.status="rejected",F.reason=te)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function re(F,te,xe,Te,K){var $=typeof F;($==="undefined"||$==="boolean")&&(F=null);var ce=!1;if(F===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(F.$$typeof){case n:case e:ce=!0;break;case m:return ce=F._init,re(ce(F._payload),te,xe,Te,K)}}if(ce)return K=K(F),ce=Te===""?"."+ne(F,0):Te,E(K)?(xe="",ce!=null&&(xe=ce.replace(j,"$&/")+"/"),re(K,te,xe,"",function(De){return De})):K!=null&&(U(K)&&(K=V(K,xe+(K.key==null||F&&F.key===K.key?"":(""+K.key).replace(j,"$&/")+"/")+ce)),te.push(K)),1;ce=0;var he=Te===""?".":Te+":";if(E(F))for(var Ae=0;Ae<F.length;Ae++)Te=F[Ae],$=he+ne(Te,Ae),ce+=re(Te,te,xe,$,K);else if(Ae=_(F),typeof Ae=="function")for(F=Ae.call(F),Ae=0;!(Te=F.next()).done;)Te=Te.value,$=he+ne(Te,Ae++),ce+=re(Te,te,xe,$,K);else if($==="object"){if(typeof F.then=="function")return re(ue(F),te,xe,Te,K);throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ce}function X(F,te,xe){if(F==null)return F;var Te=[],K=0;return re(F,Te,"","",function($){return te.call(xe,$,K++)}),Te}function J(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(xe){(F._status===0||F._status===-1)&&(F._status=1,F._result=xe)},function(xe){(F._status===0||F._status===-1)&&(F._status=2,F._result=xe)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var q=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function _e(){}return Et.Children={map:X,forEach:function(F,te,xe){X(F,function(){te.apply(this,arguments)},xe)},count:function(F){var te=0;return X(F,function(){te++}),te},toArray:function(F){return X(F,function(te){return te})||[]},only:function(F){if(!U(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Et.Component=b,Et.Fragment=t,Et.Profiler=o,Et.PureComponent=O,Et.StrictMode=a,Et.Suspense=h,Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Et.__COMPILER_RUNTIME={__proto__:null,c:function(F){return L.H.useMemoCache(F)}},Et.cache=function(F){return function(){return F.apply(null,arguments)}},Et.cloneElement=function(F,te,xe){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Te=S({},F.props),K=F.key,$=void 0;if(te!=null)for(ce in te.ref!==void 0&&($=void 0),te.key!==void 0&&(K=""+te.key),te)!B.call(te,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&te.ref===void 0||(Te[ce]=te[ce]);var ce=arguments.length-2;if(ce===1)Te.children=xe;else if(1<ce){for(var he=Array(ce),Ae=0;Ae<ce;Ae++)he[Ae]=arguments[Ae+2];Te.children=he}return R(F.type,K,void 0,void 0,$,Te)},Et.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:l,_context:F},F},Et.createElement=function(F,te,xe){var Te,K={},$=null;if(te!=null)for(Te in te.key!==void 0&&($=""+te.key),te)B.call(te,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(K[Te]=te[Te]);var ce=arguments.length-2;if(ce===1)K.children=xe;else if(1<ce){for(var he=Array(ce),Ae=0;Ae<ce;Ae++)he[Ae]=arguments[Ae+2];K.children=he}if(F&&F.defaultProps)for(Te in ce=F.defaultProps,ce)K[Te]===void 0&&(K[Te]=ce[Te]);return R(F,$,void 0,void 0,null,K)},Et.createRef=function(){return{current:null}},Et.forwardRef=function(F){return{$$typeof:f,render:F}},Et.isValidElement=U,Et.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:J}},Et.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},Et.startTransition=function(F){var te=L.T,xe={};L.T=xe;try{var Te=F(),K=L.S;K!==null&&K(xe,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(_e,q)}catch($){q($)}finally{L.T=te}},Et.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Et.use=function(F){return L.H.use(F)},Et.useActionState=function(F,te,xe){return L.H.useActionState(F,te,xe)},Et.useCallback=function(F,te){return L.H.useCallback(F,te)},Et.useContext=function(F){return L.H.useContext(F)},Et.useDebugValue=function(){},Et.useDeferredValue=function(F,te){return L.H.useDeferredValue(F,te)},Et.useEffect=function(F,te,xe){var Te=L.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Te.useEffect(F,te)},Et.useId=function(){return L.H.useId()},Et.useImperativeHandle=function(F,te,xe){return L.H.useImperativeHandle(F,te,xe)},Et.useInsertionEffect=function(F,te){return L.H.useInsertionEffect(F,te)},Et.useLayoutEffect=function(F,te){return L.H.useLayoutEffect(F,te)},Et.useMemo=function(F,te){return L.H.useMemo(F,te)},Et.useOptimistic=function(F,te){return L.H.useOptimistic(F,te)},Et.useReducer=function(F,te,xe){return L.H.useReducer(F,te,xe)},Et.useRef=function(F){return L.H.useRef(F)},Et.useState=function(F){return L.H.useState(F)},Et.useSyncExternalStore=function(F,te,xe){return L.H.useSyncExternalStore(F,te,xe)},Et.useTransition=function(){return L.H.useTransition()},Et.version="19.1.0",Et}var xy;function r0(){return xy||(xy=1,Lp.exports=u2()),Lp.exports}var H=r0();const dt=a0(H);var Up={exports:{}},ac={},Pp={exports:{}},Np={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function f2(){return yy||(yy=1,function(n){function e(X,J){var q=X.length;X.push(J);e:for(;0<q;){var _e=q-1>>>1,F=X[_e];if(0<o(F,J))X[_e]=J,X[q]=F,q=_e;else break e}}function t(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var J=X[0],q=X.pop();if(q!==J){X[0]=q;e:for(var _e=0,F=X.length,te=F>>>1;_e<te;){var xe=2*(_e+1)-1,Te=X[xe],K=xe+1,$=X[K];if(0>o(Te,q))K<F&&0>o($,Te)?(X[_e]=$,X[K]=q,_e=K):(X[_e]=Te,X[xe]=q,_e=xe);else if(K<F&&0>o($,q))X[_e]=$,X[K]=q,_e=K;else break e}}return J}function o(X,J){var q=X.sortIndex-J.sortIndex;return q!==0?q:X.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var h=[],p=[],m=1,v=null,_=3,x=!1,S=!1,T=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function E(X){for(var J=t(p);J!==null;){if(J.callback===null)a(p);else if(J.startTime<=X)a(p),J.sortIndex=J.expirationTime,e(h,J);else break;J=t(p)}}function L(X){if(T=!1,E(X),!S)if(t(h)!==null)S=!0,B||(B=!0,ne());else{var J=t(p);J!==null&&re(L,J.startTime-X)}}var B=!1,R=-1,V=5,U=-1;function D(){return b?!0:!(n.unstable_now()-U<V)}function j(){if(b=!1,B){var X=n.unstable_now();U=X;var J=!0;try{e:{S=!1,T&&(T=!1,O(R),R=-1),x=!0;var q=_;try{t:{for(E(X),v=t(h);v!==null&&!(v.expirationTime>X&&D());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,_=v.priorityLevel;var F=_e(v.expirationTime<=X);if(X=n.unstable_now(),typeof F=="function"){v.callback=F,E(X),J=!0;break t}v===t(h)&&a(h),E(X)}else a(h);v=t(h)}if(v!==null)J=!0;else{var te=t(p);te!==null&&re(L,te.startTime-X),J=!1}}break e}finally{v=null,_=q,x=!1}J=void 0}}finally{J?ne():B=!1}}}var ne;if(typeof w=="function")ne=function(){w(j)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ue=Z.port2;Z.port1.onmessage=j,ne=function(){ue.postMessage(null)}}else ne=function(){y(j,0)};function re(X,J){R=y(function(){X(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(X){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var q=_;_=J;try{return X()}finally{_=q}},n.unstable_requestPaint=function(){b=!0},n.unstable_runWithPriority=function(X,J){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var q=_;_=X;try{return J()}finally{_=q}},n.unstable_scheduleCallback=function(X,J,q){var _e=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?_e+q:_e):q=_e,X){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=q+F,X={id:m++,callback:J,priorityLevel:X,startTime:q,expirationTime:F,sortIndex:-1},q>_e?(X.sortIndex=q,e(p,X),t(h)===null&&X===t(p)&&(T?(O(R),R=-1):T=!0,re(L,q-_e))):(X.sortIndex=F,e(h,X),S||x||(S=!0,B||(B=!0,ne()))),X},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(X){var J=_;return function(){var q=_;_=J;try{return X.apply(this,arguments)}finally{_=q}}}}(Np)),Np}var by;function d2(){return by||(by=1,Pp.exports=f2()),Pp.exports}var Op={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function h2(){if(Sy)return Kn;Sy=1;var n=r0();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(h,p,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:h,containerInfo:p,implementation:m}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(h,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(h,p,null,m)},Kn.flushSync=function(h){var p=u.T,m=a.p;try{if(u.T=null,a.p=2,h)return h()}finally{u.T=p,a.p=m,a.d.f()}},Kn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},Kn.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Kn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&a.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},Kn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,v=f(m,p.crossOrigin);a.d.L(h,m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(h,p){if(typeof h=="string")if(p){var m=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},Kn.requestFormReset=function(h){a.d.r(h)},Kn.unstable_batchedUpdates=function(h,p){return h(p)},Kn.useFormState=function(h,p,m){return u.H.useFormState(h,p,m)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.1.0",Kn}var My;function p2(){if(My)return Op.exports;My=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Op.exports=h2(),Op.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function m2(){if(Ey)return ac;Ey=1;var n=d2(),e=r0(),t=p2();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,s=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(s=r.return),i=r.return;while(i)}return r.tag===3?s:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(l(i)!==i)throw Error(a(188))}function h(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var s=i,c=r;;){var d=s.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){s=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===s)return f(d),i;if(g===c)return f(d),r;g=g.sibling}throw Error(a(188))}if(s.return!==c.return)s=d,c=g;else{for(var A=!1,P=d.child;P;){if(P===s){A=!0,s=d,c=g;break}if(P===c){A=!0,c=d,s=g;break}P=P.sibling}if(!A){for(P=g.child;P;){if(P===s){A=!0,s=g,c=d;break}if(P===c){A=!0,c=g,s=d;break}P=P.sibling}if(!A)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?i:r}function p(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=p(i),r!==null)return r;i=i.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=j&&i[j]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Symbol.for("react.client.reference");function ue(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===Z?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case S:return"Fragment";case b:return"Profiler";case T:return"StrictMode";case L:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case x:return"Portal";case w:return(i.displayName||"Context")+".Provider";case O:return(i._context.displayName||"Context")+".Consumer";case E:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case R:return r=i.displayName||null,r!==null?r:ue(i.type)||"Memo";case V:r=i._payload,i=i._init;try{return ue(i(r))}catch{}}return null}var re=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},_e=[],F=-1;function te(i){return{current:i}}function xe(i){0>F||(i.current=_e[F],_e[F]=null,F--)}function Te(i,r){F++,_e[F]=i.current,i.current=r}var K=te(null),$=te(null),ce=te(null),he=te(null);function Ae(i,r){switch(Te(ce,r),Te($,i),Te(K,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?Xx(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=Xx(r),i=jx(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}xe(K),Te(K,i)}function De(){xe(K),xe($),xe(ce)}function Ve(i){i.memoizedState!==null&&Te(he,i);var r=K.current,s=jx(r,i.type);r!==s&&(Te($,i),Te(K,s))}function it(i){$.current===i&&(xe(K),xe($)),he.current===i&&(xe(he),Ql._currentValue=q)}var at=Object.prototype.hasOwnProperty,et=n.unstable_scheduleCallback,N=n.unstable_cancelCallback,Le=n.unstable_shouldYield,Oe=n.unstable_requestPaint,He=n.unstable_now,je=n.unstable_getCurrentPriorityLevel,nt=n.unstable_ImmediatePriority,Pe=n.unstable_UserBlockingPriority,k=n.unstable_NormalPriority,C=n.unstable_LowPriority,ae=n.unstable_IdlePriority,be=n.log,we=n.unstable_setDisableYieldValue,me=null,Fe=null;function Ne(i){if(typeof be=="function"&&we(i),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(me,i)}catch{}}var ke=Math.clz32?Math.clz32:Ye,pt=Math.log,Be=Math.LN2;function Ye(i){return i>>>=0,i===0?32:31-(pt(i)/Be|0)|0}var rt=256,ct=4194304;function Xe(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ht(i,r,s){var c=i.pendingLanes;if(c===0)return 0;var d=0,g=i.suspendedLanes,A=i.pingedLanes;i=i.warmLanes;var P=c&134217727;return P!==0?(c=P&~g,c!==0?d=Xe(c):(A&=P,A!==0?d=Xe(A):s||(s=P&~i,s!==0&&(d=Xe(s))))):(P=c&~g,P!==0?d=Xe(P):A!==0?d=Xe(A):s||(s=c&~i,s!==0&&(d=Xe(s)))),d===0?0:r!==0&&r!==d&&(r&g)===0&&(g=d&-d,s=r&-r,g>=s||g===32&&(s&4194048)!==0)?r:d}function st(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Bt(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ee(){var i=rt;return rt<<=1,(rt&4194048)===0&&(rt=256),i}function qe(){var i=ct;return ct<<=1,(ct&62914560)===0&&(ct=4194304),i}function I(i){for(var r=[],s=0;31>s;s++)r.push(i);return r}function ie(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Me(i,r,s,c,d,g){var A=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var P=i.entanglements,Y=i.expirationTimes,de=i.hiddenUpdates;for(s=A&~s;0<s;){var Ce=31-ke(s),Ue=1<<Ce;P[Ce]=0,Y[Ce]=-1;var pe=de[Ce];if(pe!==null)for(de[Ce]=null,Ce=0;Ce<pe.length;Ce++){var ve=pe[Ce];ve!==null&&(ve.lane&=-536870913)}s&=~Ue}c!==0&&Ie(i,c,0),g!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=g&~(A&~r))}function Ie(i,r,s){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-ke(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|s&4194090}function Je(i,r){var s=i.entangledLanes|=r;for(i=i.entanglements;s;){var c=31-ke(s),d=1<<c;d&r|i[c]&r&&(i[c]|=r),s&=~d}}function Ut(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Pt(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function gt(){var i=J.p;return i!==0?i:(i=window.event,i===void 0?32:uy(i.type))}function fn(i,r){var s=J.p;try{return J.p=i,r()}finally{J.p=s}}var Wt=Math.random().toString(36).slice(2),jt="__reactFiber$"+Wt,Nt="__reactProps$"+Wt,Un="__reactContainer$"+Wt,Vn="__reactEvents$"+Wt,Ri="__reactListeners$"+Wt,Xi="__reactHandles$"+Wt,si="__reactResources$"+Wt,ca="__reactMarker$"+Wt;function ua(i){delete i[jt],delete i[Nt],delete i[Vn],delete i[Ri],delete i[Xi]}function ji(i){var r=i[jt];if(r)return r;for(var s=i.parentNode;s;){if(r=s[Un]||s[jt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(i=$x(i);i!==null;){if(s=i[jt])return s;i=$x(i)}return r}i=s,s=i.parentNode}return null}function Yi(i){if(i=i[jt]||i[Un]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function wa(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function fa(i){var r=i[si];return r||(r=i[si]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function xn(i){i[ca]=!0}var Bo=new Set,Fo={};function Wi(i,r){z(i,r),z(i+"Capture",r)}function z(i,r){for(Fo[i]=r,i=0;i<r.length;i++)Bo.add(r[i])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ge={},W={};function G(i){return at.call(W,i)?!0:at.call(ge,i)?!1:oe.test(i)?W[i]=!0:(ge[i]=!0,!1)}function le(i,r,s){if(G(r))if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+s)}}function Ee(i,r,s){if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+s)}}function ze(i,r,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(r,s,""+c)}}var We,lt;function tt(i){if(We===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);We=r&&r[1]||"",lt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+i+lt}var Ke=!1;function mt(i,r){if(!i||Ke)return"";Ke=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(ve){var pe=ve}Reflect.construct(i,[],Ue)}else{try{Ue.call()}catch(ve){pe=ve}i.call(Ue.prototype)}}else{try{throw Error()}catch(ve){pe=ve}(Ue=i())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(ve){if(ve&&pe&&typeof ve.stack=="string")return[ve.stack,pe.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),A=g[0],P=g[1];if(A&&P){var Y=A.split(`
`),de=P.split(`
`);for(d=c=0;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;for(;d<de.length&&!de[d].includes("DetermineComponentFrameRoot");)d++;if(c===Y.length||d===de.length)for(c=Y.length-1,d=de.length-1;1<=c&&0<=d&&Y[c]!==de[d];)d--;for(;1<=c&&0<=d;c--,d--)if(Y[c]!==de[d]){if(c!==1||d!==1)do if(c--,d--,0>d||Y[c]!==de[d]){var Ce=`
`+Y[c].replace(" at new "," at ");return i.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",i.displayName)),Ce}while(1<=c&&0<=d);break}}}finally{Ke=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?tt(s):""}function Mt(i){switch(i.tag){case 26:case 27:case 5:return tt(i.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return mt(i.type,!1);case 11:return mt(i.type.render,!1);case 1:return mt(i.type,!0);case 31:return tt("Activity");default:return""}}function bt(i){try{var r="";do r+=Mt(i),i=i.return;while(i);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function _t(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function $e(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(i){var r=$e(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,g=s.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(i,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Dt(i){i._valueTracker||(i._valueTracker=Ze(i))}function St(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return i&&(c=$e(i)?i.checked?"true":"false":i.value),i=c,i!==s?(r.setValue(i),!0):!1}function sn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var da=/[\n"\\]/g;function qt(i){return i.replace(da,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Di(i,r,s,c,d,g,A,P){i.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.type=A:i.removeAttribute("type"),r!=null?A==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+_t(r)):i.value!==""+_t(r)&&(i.value=""+_t(r)):A!=="submit"&&A!=="reset"||i.removeAttribute("value"),r!=null?Bn(i,A,_t(r)):s!=null?Bn(i,A,_t(s)):c!=null&&i.removeAttribute("value"),d==null&&g!=null&&(i.defaultChecked=!!g),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?i.name=""+_t(P):i.removeAttribute("name")}function $t(i,r,s,c,d,g,A,P){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),r!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;s=s!=null?""+_t(s):"",r=r!=null?""+_t(r):s,P||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=P?i.checked:!!c,i.defaultChecked=!!c,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(i.name=A)}function Bn(i,r,s){r==="number"&&sn(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function Sn(i,r,s,c){if(i=i.options,r){r={};for(var d=0;d<s.length;d++)r["$"+s[d]]=!0;for(s=0;s<i.length;s++)d=r.hasOwnProperty("$"+i[s].value),i[s].selected!==d&&(i[s].selected=d),d&&c&&(i[s].defaultSelected=!0)}else{for(s=""+_t(s),r=null,d=0;d<i.length;d++){if(i[d].value===s){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function wn(i,r,s){if(r!=null&&(r=""+_t(r),r!==i.value&&(i.value=r),s==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=s!=null?""+_t(s):""}function Mn(i,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(re(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=_t(r),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c)}function li(i,r){if(r){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=r;return}}i.textContent=r}var $n=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fl(i,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,s):typeof s!="number"||s===0||$n.has(r)?r==="float"?i.cssFloat=s:i[r]=(""+s).trim():i[r]=s+"px"}function Vc(i,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&s[d]!==c&&fl(i,d,c)}else for(var g in r)r.hasOwnProperty(g)&&fl(i,g,r[g])}function Qr(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(i){return Ft.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Li=null;function Ui(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ca=null,Ra=null;function Xc(i){var r=Yi(i);if(r&&(i=r.stateNode)){var s=i[Nt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Di(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+qt(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==i&&c.form===i.form){var d=c[Nt]||null;if(!d)throw Error(a(90));Di(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===i.form&&St(c)}break e;case"textarea":wn(i,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Sn(i,!!s.multiple,r,!1)}}}var Io=!1;function ha(i,r,s){if(Io)return i(r,s);Io=!0;try{var c=i(r);return c}finally{if(Io=!1,(Ca!==null||Ra!==null)&&(Ru(),Ca&&(r=Ca,i=Ra,Ra=Ca=null,Xc(r),i)))for(r=0;r<i.length;r++)Xc(i[r])}}function Xn(i,r){var s=i.stateNode;if(s===null)return null;var c=s[Nt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=!1;if(Da)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{Pd=!1}var sr=null,Nd=null,jc=null;function q0(){if(jc)return jc;var i,r=Nd,s=r.length,c,d="value"in sr?sr.value:sr.textContent,g=d.length;for(i=0;i<s&&r[i]===d[i];i++);var A=s-i;for(c=1;c<=A&&r[s-c]===d[g-c];c++);return jc=d.slice(i,1<c?1-c:void 0)}function Yc(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Wc(){return!0}function $0(){return!1}function ui(i){function r(s,c,d,g,A){this._reactName=s,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var P in i)i.hasOwnProperty(P)&&(s=i[P],this[P]=s?s(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Wc:$0,this.isPropagationStopped=$0,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wc)},persist:function(){},isPersistent:Wc}),r}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=ui(Jr),hl=m({},Jr,{view:0,detail:0}),lE=ui(hl),Od,zd,pl,$c=m({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==pl&&(pl&&i.type==="mousemove"?(Od=i.screenX-pl.screenX,zd=i.screenY-pl.screenY):zd=Od=0,pl=i),Od)},movementY:function(i){return"movementY"in i?i.movementY:zd}}),Z0=ui($c),cE=m({},$c,{dataTransfer:0}),uE=ui(cE),fE=m({},hl,{relatedTarget:0}),Bd=ui(fE),dE=m({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),hE=ui(dE),pE=m({},Jr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),mE=ui(pE),gE=m({},Jr,{data:0}),K0=ui(gE),vE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_E={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yE(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=xE[i])?!!r[i]:!1}function Fd(){return yE}var bE=m({},hl,{key:function(i){if(i.key){var r=vE[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Yc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?_E[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(i){return i.type==="keypress"?Yc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Yc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),SE=ui(bE),ME=m({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q0=ui(ME),EE=m({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),TE=ui(EE),AE=m({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=ui(AE),CE=m({},$c,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),RE=ui(CE),DE=m({},Jr,{newState:0,oldState:0}),LE=ui(DE),UE=[9,13,27,32],Id=Da&&"CompositionEvent"in window,ml=null;Da&&"documentMode"in document&&(ml=document.documentMode);var PE=Da&&"TextEvent"in window&&!ml,J0=Da&&(!Id||ml&&8<ml&&11>=ml),ev=" ",tv=!1;function nv(i,r){switch(i){case"keyup":return UE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ko=!1;function NE(i,r){switch(i){case"compositionend":return iv(r);case"keypress":return r.which!==32?null:(tv=!0,ev);case"textInput":return i=r.data,i===ev&&tv?null:i;default:return null}}function OE(i,r){if(ko)return i==="compositionend"||!Id&&nv(i,r)?(i=q0(),jc=Nd=sr=null,ko=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return J0&&r.locale!=="ko"?null:r.data;default:return null}}var zE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!zE[i.type]:r==="textarea"}function rv(i,r,s,c){Ca?Ra?Ra.push(c):Ra=[c]:Ca=c,r=Ou(r,"onChange"),0<r.length&&(s=new qc("onChange","change",null,s,c),i.push({event:s,listeners:r}))}var gl=null,vl=null;function BE(i){Ix(i,0)}function Zc(i){var r=wa(i);if(St(r))return i}function ov(i,r){if(i==="change")return r}var sv=!1;if(Da){var kd;if(Da){var Hd="oninput"in document;if(!Hd){var lv=document.createElement("div");lv.setAttribute("oninput","return;"),Hd=typeof lv.oninput=="function"}kd=Hd}else kd=!1;sv=kd&&(!document.documentMode||9<document.documentMode)}function cv(){gl&&(gl.detachEvent("onpropertychange",uv),vl=gl=null)}function uv(i){if(i.propertyName==="value"&&Zc(vl)){var r=[];rv(r,vl,i,Ui(i)),ha(BE,r)}}function FE(i,r,s){i==="focusin"?(cv(),gl=r,vl=s,gl.attachEvent("onpropertychange",uv)):i==="focusout"&&cv()}function IE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zc(vl)}function kE(i,r){if(i==="click")return Zc(r)}function HE(i,r){if(i==="input"||i==="change")return Zc(r)}function GE(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var vi=typeof Object.is=="function"?Object.is:GE;function _l(i,r){if(vi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var s=Object.keys(i),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var d=s[c];if(!at.call(r,d)||!vi(i[d],r[d]))return!1}return!0}function fv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function dv(i,r){var s=fv(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=r&&c>=r)return{node:s,offset:r-i};i=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fv(s)}}function hv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?hv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function pv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=sn(i.document);r instanceof i.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)i=r.contentWindow;else break;r=sn(i.document)}return r}function Gd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var VE=Da&&"documentMode"in document&&11>=document.documentMode,Ho=null,Vd=null,xl=null,Xd=!1;function mv(i,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xd||Ho==null||Ho!==sn(c)||(c=Ho,"selectionStart"in c&&Gd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xl&&_l(xl,c)||(xl=c,c=Ou(Vd,"onSelect"),0<c.length&&(r=new qc("onSelect","select",null,r,s),i.push({event:r,listeners:c}),r.target=Ho)))}function eo(i,r){var s={};return s[i.toLowerCase()]=r.toLowerCase(),s["Webkit"+i]="webkit"+r,s["Moz"+i]="moz"+r,s}var Go={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionrun:eo("Transition","TransitionRun"),transitionstart:eo("Transition","TransitionStart"),transitioncancel:eo("Transition","TransitionCancel"),transitionend:eo("Transition","TransitionEnd")},jd={},gv={};Da&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function to(i){if(jd[i])return jd[i];if(!Go[i])return i;var r=Go[i],s;for(s in r)if(r.hasOwnProperty(s)&&s in gv)return jd[i]=r[s];return i}var vv=to("animationend"),_v=to("animationiteration"),xv=to("animationstart"),XE=to("transitionrun"),jE=to("transitionstart"),YE=to("transitioncancel"),yv=to("transitionend"),bv=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yd.push("scrollEnd");function qi(i,r){bv.set(i,r),Wi(r,[i])}var Sv=new WeakMap;function Pi(i,r){if(typeof i=="object"&&i!==null){var s=Sv.get(i);return s!==void 0?s:(r={value:i,source:r,stack:bt(r)},Sv.set(i,r),r)}return{value:i,source:r,stack:bt(r)}}var Ni=[],Vo=0,Wd=0;function Kc(){for(var i=Vo,r=Wd=Vo=0;r<i;){var s=Ni[r];Ni[r++]=null;var c=Ni[r];Ni[r++]=null;var d=Ni[r];Ni[r++]=null;var g=Ni[r];if(Ni[r++]=null,c!==null&&d!==null){var A=c.pending;A===null?d.next=d:(d.next=A.next,A.next=d),c.pending=d}g!==0&&Mv(s,d,g)}}function Qc(i,r,s,c){Ni[Vo++]=i,Ni[Vo++]=r,Ni[Vo++]=s,Ni[Vo++]=c,Wd|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function qd(i,r,s,c){return Qc(i,r,s,c),Jc(i)}function Xo(i,r){return Qc(i,null,null,r),Jc(i)}function Mv(i,r,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var d=!1,g=i.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(d=!0)),i=g,g=g.return;return i.tag===3?(g=i.stateNode,d&&r!==null&&(d=31-ke(s),i=g.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=s|536870912),g):null}function Jc(i){if(50<Xl)throw Xl=0,ep=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var jo={};function WE(i,r,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(i,r,s,c){return new WE(i,r,s,c)}function $d(i){return i=i.prototype,!(!i||!i.isReactComponent)}function La(i,r){var s=i.alternate;return s===null?(s=_i(i.tag,r,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=r,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,r=i.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function Ev(i,r){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,r=s.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function eu(i,r,s,c,d,g){var A=0;if(c=i,typeof i=="function")$d(i)&&(A=1);else if(typeof i=="string")A=$T(i,s,K.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case U:return i=_i(31,s,r,d),i.elementType=U,i.lanes=g,i;case S:return no(s.children,d,g,r);case T:A=8,d|=24;break;case b:return i=_i(12,s,r,d|2),i.elementType=b,i.lanes=g,i;case L:return i=_i(13,s,r,d),i.elementType=L,i.lanes=g,i;case B:return i=_i(19,s,r,d),i.elementType=B,i.lanes=g,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case y:case w:A=10;break e;case O:A=9;break e;case E:A=11;break e;case R:A=14;break e;case V:A=16,c=null;break e}A=29,s=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=_i(A,s,r,d),r.elementType=i,r.type=c,r.lanes=g,r}function no(i,r,s,c){return i=_i(7,i,c,r),i.lanes=s,i}function Zd(i,r,s){return i=_i(6,i,null,r),i.lanes=s,i}function Kd(i,r,s){return r=_i(4,i.children!==null?i.children:[],i.key,r),r.lanes=s,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Yo=[],Wo=0,tu=null,nu=0,Oi=[],zi=0,io=null,Ua=1,Pa="";function ao(i,r){Yo[Wo++]=nu,Yo[Wo++]=tu,tu=i,nu=r}function Tv(i,r,s){Oi[zi++]=Ua,Oi[zi++]=Pa,Oi[zi++]=io,io=i;var c=Ua;i=Pa;var d=32-ke(c)-1;c&=~(1<<d),s+=1;var g=32-ke(r)+d;if(30<g){var A=d-d%5;g=(c&(1<<A)-1).toString(32),c>>=A,d-=A,Ua=1<<32-ke(r)+d|s<<d|c,Pa=g+i}else Ua=1<<g|s<<d|c,Pa=i}function Qd(i){i.return!==null&&(ao(i,1),Tv(i,1,0))}function Jd(i){for(;i===tu;)tu=Yo[--Wo],Yo[Wo]=null,nu=Yo[--Wo],Yo[Wo]=null;for(;i===io;)io=Oi[--zi],Oi[zi]=null,Pa=Oi[--zi],Oi[zi]=null,Ua=Oi[--zi],Oi[zi]=null}var ii=null,yn=null,Xt=!1,ro=null,pa=!1,eh=Error(a(519));function oo(i){var r=Error(a(418,""));throw Sl(Pi(r,i)),eh}function Av(i){var r=i.stateNode,s=i.type,c=i.memoizedProps;switch(r[jt]=i,r[Nt]=c,s){case"dialog":zt("cancel",r),zt("close",r);break;case"iframe":case"object":case"embed":zt("load",r);break;case"video":case"audio":for(s=0;s<Yl.length;s++)zt(Yl[s],r);break;case"source":zt("error",r);break;case"img":case"image":case"link":zt("error",r),zt("load",r);break;case"details":zt("toggle",r);break;case"input":zt("invalid",r),$t(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Dt(r);break;case"select":zt("invalid",r);break;case"textarea":zt("invalid",r),Mn(r,c.value,c.defaultValue,c.children),Dt(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||Vx(r.textContent,s)?(c.popover!=null&&(zt("beforetoggle",r),zt("toggle",r)),c.onScroll!=null&&zt("scroll",r),c.onScrollEnd!=null&&zt("scrollend",r),c.onClick!=null&&(r.onclick=zu),r=!0):r=!1,r||oo(i)}function wv(i){for(ii=i.return;ii;)switch(ii.tag){case 5:case 13:pa=!1;return;case 27:case 3:pa=!0;return;default:ii=ii.return}}function yl(i){if(i!==ii)return!1;if(!Xt)return wv(i),Xt=!0,!1;var r=i.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||gp(i.type,i.memoizedProps)),s=!s),s&&yn&&oo(i),wv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){yn=Zi(i.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;i=i.nextSibling}yn=null}}else r===27?(r=yn,Mr(i.type)?(i=yp,yp=null,yn=i):yn=r):yn=ii?Zi(i.stateNode.nextSibling):null;return!0}function bl(){yn=ii=null,Xt=!1}function Cv(){var i=ro;return i!==null&&(hi===null?hi=i:hi.push.apply(hi,i),ro=null),i}function Sl(i){ro===null?ro=[i]:ro.push(i)}var th=te(null),so=null,Na=null;function lr(i,r,s){Te(th,r._currentValue),r._currentValue=s}function Oa(i){i._currentValue=th.current,xe(th)}function nh(i,r,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===s)break;i=i.return}}function ih(i,r,s,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var g=d.dependencies;if(g!==null){var A=d.child;g=g.firstContext;e:for(;g!==null;){var P=g;g=d;for(var Y=0;Y<r.length;Y++)if(P.context===r[Y]){g.lanes|=s,P=g.alternate,P!==null&&(P.lanes|=s),nh(g.return,s,i),c||(A=null);break e}g=P.next}}else if(d.tag===18){if(A=d.return,A===null)throw Error(a(341));A.lanes|=s,g=A.alternate,g!==null&&(g.lanes|=s),nh(A,s,i),A=null}else A=d.child;if(A!==null)A.return=d;else for(A=d;A!==null;){if(A===i){A=null;break}if(d=A.sibling,d!==null){d.return=A.return,A=d;break}A=A.return}d=A}}function Ml(i,r,s,c){i=null;for(var d=r,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var A=d.alternate;if(A===null)throw Error(a(387));if(A=A.memoizedProps,A!==null){var P=d.type;vi(d.pendingProps.value,A.value)||(i!==null?i.push(P):i=[P])}}else if(d===he.current){if(A=d.alternate,A===null)throw Error(a(387));A.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Ql):i=[Ql])}d=d.return}i!==null&&ih(r,i,s,c),r.flags|=262144}function iu(i){for(i=i.firstContext;i!==null;){if(!vi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function lo(i){so=i,Na=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Zn(i){return Rv(so,i)}function au(i,r){return so===null&&lo(i),Rv(i,r)}function Rv(i,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Na===null){if(i===null)throw Error(a(308));Na=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Na=Na.next=r;return s}var qE=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(s){return s()})}},$E=n.unstable_scheduleCallback,ZE=n.unstable_NormalPriority,Pn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ah(){return{controller:new qE,data:new Map,refCount:0}}function El(i){i.refCount--,i.refCount===0&&$E(ZE,function(){i.controller.abort()})}var Tl=null,rh=0,qo=0,$o=null;function KE(i,r){if(Tl===null){var s=Tl=[];rh=0,qo=sp(),$o={status:"pending",value:void 0,then:function(c){s.push(c)}}}return rh++,r.then(Dv,Dv),r}function Dv(){if(--rh===0&&Tl!==null){$o!==null&&($o.status="fulfilled");var i=Tl;Tl=null,qo=0,$o=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function QE(i,r){var s=[],c={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<s.length;d++)(0,s[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),c}var Lv=X.S;X.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&KE(i,r),Lv!==null&&Lv(i,r)};var co=te(null);function oh(){var i=co.current;return i!==null?i:ln.pooledCache}function ru(i,r){r===null?Te(co,co.current):Te(co,r.pool)}function Uv(){var i=oh();return i===null?null:{parent:Pn._currentValue,pool:i}}var Al=Error(a(460)),Pv=Error(a(474)),ou=Error(a(542)),sh={then:function(){}};function Nv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function su(){}function Ov(i,r,s){switch(s=i[s],s===void 0?i.push(r):s!==r&&(r.then(su,su),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i;default:if(typeof r.status=="string")r.then(su,su);else{if(i=ln,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Bv(i),i}throw wl=r,Al}}var wl=null;function zv(){if(wl===null)throw Error(a(459));var i=wl;return wl=null,i}function Bv(i){if(i===Al||i===ou)throw Error(a(483))}var cr=!1;function lh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function ur(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function fr(i,r,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Zt&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=Jc(i),Mv(i,null,s),r}return Qc(i,c,r,s),Jc(i)}function Cl(i,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,Je(i,s)}}function uh(i,r){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var d=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var A={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?d=g=A:g=g.next=A,s=s.next}while(s!==null);g===null?d=g=r:g=g.next=r}else d=g=r;s={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=r:i.next=r,s.lastBaseUpdate=r}var fh=!1;function Rl(){if(fh){var i=$o;if(i!==null)throw i}}function Dl(i,r,s,c){fh=!1;var d=i.updateQueue;cr=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var Y=P,de=Y.next;Y.next=null,A===null?g=de:A.next=de,A=Y;var Ce=i.alternate;Ce!==null&&(Ce=Ce.updateQueue,P=Ce.lastBaseUpdate,P!==A&&(P===null?Ce.firstBaseUpdate=de:P.next=de,Ce.lastBaseUpdate=Y))}if(g!==null){var Ue=d.baseState;A=0,Ce=de=Y=null,P=g;do{var pe=P.lane&-536870913,ve=pe!==P.lane;if(ve?(kt&pe)===pe:(c&pe)===pe){pe!==0&&pe===qo&&(fh=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});e:{var yt=i,vt=P;pe=r;var tn=s;switch(vt.tag){case 1:if(yt=vt.payload,typeof yt=="function"){Ue=yt.call(tn,Ue,pe);break e}Ue=yt;break e;case 3:yt.flags=yt.flags&-65537|128;case 0:if(yt=vt.payload,pe=typeof yt=="function"?yt.call(tn,Ue,pe):yt,pe==null)break e;Ue=m({},Ue,pe);break e;case 2:cr=!0}}pe=P.callback,pe!==null&&(i.flags|=64,ve&&(i.flags|=8192),ve=d.callbacks,ve===null?d.callbacks=[pe]:ve.push(pe))}else ve={lane:pe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Ce===null?(de=Ce=ve,Y=Ue):Ce=Ce.next=ve,A|=pe;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;ve=P,P=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);Ce===null&&(Y=Ue),d.baseState=Y,d.firstBaseUpdate=de,d.lastBaseUpdate=Ce,g===null&&(d.shared.lanes=0),xr|=A,i.lanes=A,i.memoizedState=Ue}}function Fv(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function Iv(i,r){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)Fv(s[i],r)}var Zo=te(null),lu=te(0);function kv(i,r){i=Ga,Te(lu,i),Te(Zo,r),Ga=i|r.baseLanes}function dh(){Te(lu,Ga),Te(Zo,Zo.current)}function hh(){Ga=lu.current,xe(Zo),xe(lu)}var dr=0,Rt=null,Jt=null,Cn=null,cu=!1,Ko=!1,uo=!1,uu=0,Ll=0,Qo=null,JE=0;function En(){throw Error(a(321))}function ph(i,r){if(r===null)return!1;for(var s=0;s<r.length&&s<i.length;s++)if(!vi(i[s],r[s]))return!1;return!0}function mh(i,r,s,c,d,g){return dr=g,Rt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,X.H=i===null||i.memoizedState===null?M_:E_,uo=!1,g=s(c,d),uo=!1,Ko&&(g=Gv(r,s,c,d)),Hv(i),g}function Hv(i){X.H=gu;var r=Jt!==null&&Jt.next!==null;if(dr=0,Cn=Jt=Rt=null,cu=!1,Ll=0,Qo=null,r)throw Error(a(300));i===null||Fn||(i=i.dependencies,i!==null&&iu(i)&&(Fn=!0))}function Gv(i,r,s,c){Rt=i;var d=0;do{if(Ko&&(Qo=null),Ll=0,Ko=!1,25<=d)throw Error(a(301));if(d+=1,Cn=Jt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}X.H=oT,g=r(s,c)}while(Ko);return g}function eT(){var i=X.H,r=i.useState()[0];return r=typeof r.then=="function"?Ul(r):r,i=i.useState()[0],(Jt!==null?Jt.memoizedState:null)!==i&&(Rt.flags|=1024),r}function gh(){var i=uu!==0;return uu=0,i}function vh(i,r,s){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~s}function _h(i){if(cu){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cu=!1}dr=0,Cn=Jt=Rt=null,Ko=!1,Ll=uu=0,Qo=null}function fi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?Rt.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function Rn(){if(Jt===null){var i=Rt.alternate;i=i!==null?i.memoizedState:null}else i=Jt.next;var r=Cn===null?Rt.memoizedState:Cn.next;if(r!==null)Cn=r,Jt=i;else{if(i===null)throw Rt.alternate===null?Error(a(467)):Error(a(310));Jt=i,i={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Cn===null?Rt.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(i){var r=Ll;return Ll+=1,Qo===null&&(Qo=[]),i=Ov(Qo,i,r),r=Rt,(Cn===null?r.memoizedState:Cn.next)===null&&(r=r.alternate,X.H=r===null||r.memoizedState===null?M_:E_),i}function fu(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ul(i);if(i.$$typeof===w)return Zn(i)}throw Error(a(438,String(i)))}function yh(i){var r=null,s=Rt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Rt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=xh(),Rt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(i),c=0;c<i;c++)s[c]=D;return r.index++,s}function za(i,r){return typeof r=="function"?r(i):r}function du(i){var r=Rn();return bh(r,Jt,i)}function bh(i,r,s){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var d=i.baseQueue,g=c.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}r.baseQueue=d=g,c.pending=null}if(g=i.baseState,d===null)i.memoizedState=g;else{r=d.next;var P=A=null,Y=null,de=r,Ce=!1;do{var Ue=de.lane&-536870913;if(Ue!==de.lane?(kt&Ue)===Ue:(dr&Ue)===Ue){var pe=de.revertLane;if(pe===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),Ue===qo&&(Ce=!0);else if((dr&pe)===pe){de=de.next,pe===qo&&(Ce=!0);continue}else Ue={lane:0,revertLane:de.revertLane,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Y===null?(P=Y=Ue,A=g):Y=Y.next=Ue,Rt.lanes|=pe,xr|=pe;Ue=de.action,uo&&s(g,Ue),g=de.hasEagerState?de.eagerState:s(g,Ue)}else pe={lane:Ue,revertLane:de.revertLane,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Y===null?(P=Y=pe,A=g):Y=Y.next=pe,Rt.lanes|=Ue,xr|=Ue;de=de.next}while(de!==null&&de!==r);if(Y===null?A=g:Y.next=P,!vi(g,i.memoizedState)&&(Fn=!0,Ce&&(s=$o,s!==null)))throw s;i.memoizedState=g,i.baseState=A,i.baseQueue=Y,c.lastRenderedState=g}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Sh(i){var r=Rn(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=i;var c=s.dispatch,d=s.pending,g=r.memoizedState;if(d!==null){s.pending=null;var A=d=d.next;do g=i(g,A.action),A=A.next;while(A!==d);vi(g,r.memoizedState)||(Fn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),s.lastRenderedState=g}return[g,c]}function Vv(i,r,s){var c=Rt,d=Rn(),g=Xt;if(g){if(s===void 0)throw Error(a(407));s=s()}else s=r();var A=!vi((Jt||d).memoizedState,s);A&&(d.memoizedState=s,Fn=!0),d=d.queue;var P=Yv.bind(null,c,d,i);if(Pl(2048,8,P,[i]),d.getSnapshot!==r||A||Cn!==null&&Cn.memoizedState.tag&1){if(c.flags|=2048,Jo(9,hu(),jv.bind(null,c,d,s,r),null),ln===null)throw Error(a(349));g||(dr&124)!==0||Xv(c,r,s)}return s}function Xv(i,r,s){i.flags|=16384,i={getSnapshot:r,value:s},r=Rt.updateQueue,r===null?(r=xh(),Rt.updateQueue=r,r.stores=[i]):(s=r.stores,s===null?r.stores=[i]:s.push(i))}function jv(i,r,s,c){r.value=s,r.getSnapshot=c,Wv(r)&&qv(i)}function Yv(i,r,s){return s(function(){Wv(r)&&qv(i)})}function Wv(i){var r=i.getSnapshot;i=i.value;try{var s=r();return!vi(i,s)}catch{return!0}}function qv(i){var r=Xo(i,2);r!==null&&Mi(r,i,2)}function Mh(i){var r=fi();if(typeof i=="function"){var s=i;if(i=s(),uo){Ne(!0);try{s()}finally{Ne(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:i},r}function $v(i,r,s,c){return i.baseState=s,bh(i,Jt,typeof c=="function"?c:za)}function tT(i,r,s,c,d){if(mu(i))throw Error(a(485));if(i=r.action,i!==null){var g={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){g.listeners.push(A)}};X.T!==null?s(!0):g.isTransition=!1,c(g),s=r.pending,s===null?(g.next=r.pending=g,Zv(r,g)):(g.next=s.next,r.pending=s.next=g)}}function Zv(i,r){var s=r.action,c=r.payload,d=i.state;if(r.isTransition){var g=X.T,A={};X.T=A;try{var P=s(d,c),Y=X.S;Y!==null&&Y(A,P),Kv(i,r,P)}catch(de){Eh(i,r,de)}finally{X.T=g}}else try{g=s(d,c),Kv(i,r,g)}catch(de){Eh(i,r,de)}}function Kv(i,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Qv(i,r,c)},function(c){return Eh(i,r,c)}):Qv(i,r,s)}function Qv(i,r,s){r.status="fulfilled",r.value=s,Jv(r),i.state=s,r=i.pending,r!==null&&(s=r.next,s===r?i.pending=null:(s=s.next,r.next=s,Zv(i,s)))}function Eh(i,r,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,Jv(r),r=r.next;while(r!==c)}i.action=null}function Jv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function e_(i,r){return r}function t_(i,r){if(Xt){var s=ln.formState;if(s!==null){e:{var c=Rt;if(Xt){if(yn){t:{for(var d=yn,g=pa;d.nodeType!==8;){if(!g){d=null;break t}if(d=Zi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){yn=Zi(d.nextSibling),c=d.data==="F!";break e}}oo(c)}c=!1}c&&(r=s[0])}}return s=fi(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e_,lastRenderedState:r},s.queue=c,s=y_.bind(null,Rt,c),c.dispatch=s,c=Mh(!1),g=Rh.bind(null,Rt,!1,c.queue),c=fi(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,s=tT.bind(null,Rt,d,g,s),d.dispatch=s,c.memoizedState=i,[r,s,!1]}function n_(i){var r=Rn();return i_(r,Jt,i)}function i_(i,r,s){if(r=bh(i,r,e_)[0],i=du(za)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Ul(r)}catch(A){throw A===Al?ou:A}else c=r;r=Rn();var d=r.queue,g=d.dispatch;return s!==r.memoizedState&&(Rt.flags|=2048,Jo(9,hu(),nT.bind(null,d,s),null)),[c,g,i]}function nT(i,r){i.action=r}function a_(i){var r=Rn(),s=Jt;if(s!==null)return i_(r,s,i);Rn(),r=r.memoizedState,s=Rn();var c=s.queue.dispatch;return s.memoizedState=i,[r,c,!1]}function Jo(i,r,s,c){return i={tag:i,create:s,deps:c,inst:r,next:null},r=Rt.updateQueue,r===null&&(r=xh(),Rt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,r.lastEffect=i),i}function hu(){return{destroy:void 0,resource:void 0}}function r_(){return Rn().memoizedState}function pu(i,r,s,c){var d=fi();c=c===void 0?null:c,Rt.flags|=i,d.memoizedState=Jo(1|r,hu(),s,c)}function Pl(i,r,s,c){var d=Rn();c=c===void 0?null:c;var g=d.memoizedState.inst;Jt!==null&&c!==null&&ph(c,Jt.memoizedState.deps)?d.memoizedState=Jo(r,g,s,c):(Rt.flags|=i,d.memoizedState=Jo(1|r,g,s,c))}function o_(i,r){pu(8390656,8,i,r)}function s_(i,r){Pl(2048,8,i,r)}function l_(i,r){return Pl(4,2,i,r)}function c_(i,r){return Pl(4,4,i,r)}function u_(i,r){if(typeof r=="function"){i=i();var s=r(i);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function f_(i,r,s){s=s!=null?s.concat([i]):null,Pl(4,4,u_.bind(null,r,i),s)}function Th(){}function d_(i,r){var s=Rn();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&ph(r,c[1])?c[0]:(s.memoizedState=[i,r],i)}function h_(i,r){var s=Rn();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&ph(r,c[1]))return c[0];if(c=i(),uo){Ne(!0);try{i()}finally{Ne(!1)}}return s.memoizedState=[c,r],c}function Ah(i,r,s){return s===void 0||(dr&1073741824)!==0?i.memoizedState=r:(i.memoizedState=s,i=gx(),Rt.lanes|=i,xr|=i,s)}function p_(i,r,s,c){return vi(s,r)?s:Zo.current!==null?(i=Ah(i,s,c),vi(i,r)||(Fn=!0),i):(dr&42)===0?(Fn=!0,i.memoizedState=s):(i=gx(),Rt.lanes|=i,xr|=i,r)}function m_(i,r,s,c,d){var g=J.p;J.p=g!==0&&8>g?g:8;var A=X.T,P={};X.T=P,Rh(i,!1,r,s);try{var Y=d(),de=X.S;if(de!==null&&de(P,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var Ce=QE(Y,c);Nl(i,r,Ce,Si(i))}else Nl(i,r,c,Si(i))}catch(Ue){Nl(i,r,{then:function(){},status:"rejected",reason:Ue},Si())}finally{J.p=g,X.T=A}}function iT(){}function wh(i,r,s,c){if(i.tag!==5)throw Error(a(476));var d=g_(i).queue;m_(i,d,r,q,s===null?iT:function(){return v_(i),s(c)})}function g_(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:q},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:s},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function v_(i){var r=g_(i).next.queue;Nl(i,r,{},Si())}function Ch(){return Zn(Ql)}function __(){return Rn().memoizedState}function x_(){return Rn().memoizedState}function aT(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var s=Si();i=ur(s);var c=fr(r,i,s);c!==null&&(Mi(c,r,s),Cl(c,r,s)),r={cache:ah()},i.payload=r;return}r=r.return}}function rT(i,r,s){var c=Si();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},mu(i)?b_(r,s):(s=qd(i,r,s,c),s!==null&&(Mi(s,i,c),S_(s,r,c)))}function y_(i,r,s){var c=Si();Nl(i,r,s,c)}function Nl(i,r,s,c){var d={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(mu(i))b_(r,d);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,P=g(A,s);if(d.hasEagerState=!0,d.eagerState=P,vi(P,A))return Qc(i,r,d,0),ln===null&&Kc(),!1}catch{}finally{}if(s=qd(i,r,d,c),s!==null)return Mi(s,i,c),S_(s,r,c),!0}return!1}function Rh(i,r,s,c){if(c={lane:2,revertLane:sp(),action:c,hasEagerState:!1,eagerState:null,next:null},mu(i)){if(r)throw Error(a(479))}else r=qd(i,s,c,2),r!==null&&Mi(r,i,2)}function mu(i){var r=i.alternate;return i===Rt||r!==null&&r===Rt}function b_(i,r){Ko=cu=!0;var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}function S_(i,r,s){if((s&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,Je(i,s)}}var gu={readContext:Zn,use:fu,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},M_={readContext:Zn,use:fu,useCallback:function(i,r){return fi().memoizedState=[i,r===void 0?null:r],i},useContext:Zn,useEffect:o_,useImperativeHandle:function(i,r,s){s=s!=null?s.concat([i]):null,pu(4194308,4,u_.bind(null,r,i),s)},useLayoutEffect:function(i,r){return pu(4194308,4,i,r)},useInsertionEffect:function(i,r){pu(4,2,i,r)},useMemo:function(i,r){var s=fi();r=r===void 0?null:r;var c=i();if(uo){Ne(!0);try{i()}finally{Ne(!1)}}return s.memoizedState=[c,r],c},useReducer:function(i,r,s){var c=fi();if(s!==void 0){var d=s(r);if(uo){Ne(!0);try{s(r)}finally{Ne(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=rT.bind(null,Rt,i),[c.memoizedState,i]},useRef:function(i){var r=fi();return i={current:i},r.memoizedState=i},useState:function(i){i=Mh(i);var r=i.queue,s=y_.bind(null,Rt,r);return r.dispatch=s,[i.memoizedState,s]},useDebugValue:Th,useDeferredValue:function(i,r){var s=fi();return Ah(s,i,r)},useTransition:function(){var i=Mh(!1);return i=m_.bind(null,Rt,i.queue,!0,!1),fi().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,s){var c=Rt,d=fi();if(Xt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),ln===null)throw Error(a(349));(kt&124)!==0||Xv(c,r,s)}d.memoizedState=s;var g={value:s,getSnapshot:r};return d.queue=g,o_(Yv.bind(null,c,g,i),[i]),c.flags|=2048,Jo(9,hu(),jv.bind(null,c,g,s,r),null),s},useId:function(){var i=fi(),r=ln.identifierPrefix;if(Xt){var s=Pa,c=Ua;s=(c&~(1<<32-ke(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=uu++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=JE++,r="«"+r+"r"+s.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Ch,useFormState:t_,useActionState:t_,useOptimistic:function(i){var r=fi();r.memoizedState=r.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Rh.bind(null,Rt,!0,s),s.dispatch=r,[i,r]},useMemoCache:yh,useCacheRefresh:function(){return fi().memoizedState=aT.bind(null,Rt)}},E_={readContext:Zn,use:fu,useCallback:d_,useContext:Zn,useEffect:s_,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:du,useRef:r_,useState:function(){return du(za)},useDebugValue:Th,useDeferredValue:function(i,r){var s=Rn();return p_(s,Jt.memoizedState,i,r)},useTransition:function(){var i=du(za)[0],r=Rn().memoizedState;return[typeof i=="boolean"?i:Ul(i),r]},useSyncExternalStore:Vv,useId:__,useHostTransitionStatus:Ch,useFormState:n_,useActionState:n_,useOptimistic:function(i,r){var s=Rn();return $v(s,Jt,i,r)},useMemoCache:yh,useCacheRefresh:x_},oT={readContext:Zn,use:fu,useCallback:d_,useContext:Zn,useEffect:s_,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:Sh,useRef:r_,useState:function(){return Sh(za)},useDebugValue:Th,useDeferredValue:function(i,r){var s=Rn();return Jt===null?Ah(s,i,r):p_(s,Jt.memoizedState,i,r)},useTransition:function(){var i=Sh(za)[0],r=Rn().memoizedState;return[typeof i=="boolean"?i:Ul(i),r]},useSyncExternalStore:Vv,useId:__,useHostTransitionStatus:Ch,useFormState:a_,useActionState:a_,useOptimistic:function(i,r){var s=Rn();return Jt!==null?$v(s,Jt,i,r):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:yh,useCacheRefresh:x_},es=null,Ol=0;function vu(i){var r=Ol;return Ol+=1,es===null&&(es=[]),Ov(es,i,r)}function zl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function _u(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function T_(i){var r=i._init;return r(i._payload)}function A_(i){function r(se,Q){if(i){var fe=se.deletions;fe===null?(se.deletions=[Q],se.flags|=16):fe.push(Q)}}function s(se,Q){if(!i)return null;for(;Q!==null;)r(se,Q),Q=Q.sibling;return null}function c(se){for(var Q=new Map;se!==null;)se.key!==null?Q.set(se.key,se):Q.set(se.index,se),se=se.sibling;return Q}function d(se,Q){return se=La(se,Q),se.index=0,se.sibling=null,se}function g(se,Q,fe){return se.index=fe,i?(fe=se.alternate,fe!==null?(fe=fe.index,fe<Q?(se.flags|=67108866,Q):fe):(se.flags|=67108866,Q)):(se.flags|=1048576,Q)}function A(se){return i&&se.alternate===null&&(se.flags|=67108866),se}function P(se,Q,fe,Re){return Q===null||Q.tag!==6?(Q=Zd(fe,se.mode,Re),Q.return=se,Q):(Q=d(Q,fe),Q.return=se,Q)}function Y(se,Q,fe,Re){var ot=fe.type;return ot===S?Ce(se,Q,fe.props.children,Re,fe.key):Q!==null&&(Q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===V&&T_(ot)===Q.type)?(Q=d(Q,fe.props),zl(Q,fe),Q.return=se,Q):(Q=eu(fe.type,fe.key,fe.props,null,se.mode,Re),zl(Q,fe),Q.return=se,Q)}function de(se,Q,fe,Re){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==fe.containerInfo||Q.stateNode.implementation!==fe.implementation?(Q=Kd(fe,se.mode,Re),Q.return=se,Q):(Q=d(Q,fe.children||[]),Q.return=se,Q)}function Ce(se,Q,fe,Re,ot){return Q===null||Q.tag!==7?(Q=no(fe,se.mode,Re,ot),Q.return=se,Q):(Q=d(Q,fe),Q.return=se,Q)}function Ue(se,Q,fe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Zd(""+Q,se.mode,fe),Q.return=se,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return fe=eu(Q.type,Q.key,Q.props,null,se.mode,fe),zl(fe,Q),fe.return=se,fe;case x:return Q=Kd(Q,se.mode,fe),Q.return=se,Q;case V:var Re=Q._init;return Q=Re(Q._payload),Ue(se,Q,fe)}if(re(Q)||ne(Q))return Q=no(Q,se.mode,fe,null),Q.return=se,Q;if(typeof Q.then=="function")return Ue(se,vu(Q),fe);if(Q.$$typeof===w)return Ue(se,au(se,Q),fe);_u(se,Q)}return null}function pe(se,Q,fe,Re){var ot=Q!==null?Q.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return ot!==null?null:P(se,Q,""+fe,Re);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case _:return fe.key===ot?Y(se,Q,fe,Re):null;case x:return fe.key===ot?de(se,Q,fe,Re):null;case V:return ot=fe._init,fe=ot(fe._payload),pe(se,Q,fe,Re)}if(re(fe)||ne(fe))return ot!==null?null:Ce(se,Q,fe,Re,null);if(typeof fe.then=="function")return pe(se,Q,vu(fe),Re);if(fe.$$typeof===w)return pe(se,Q,au(se,fe),Re);_u(se,fe)}return null}function ve(se,Q,fe,Re,ot){if(typeof Re=="string"&&Re!==""||typeof Re=="number"||typeof Re=="bigint")return se=se.get(fe)||null,P(Q,se,""+Re,ot);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case _:return se=se.get(Re.key===null?fe:Re.key)||null,Y(Q,se,Re,ot);case x:return se=se.get(Re.key===null?fe:Re.key)||null,de(Q,se,Re,ot);case V:var Lt=Re._init;return Re=Lt(Re._payload),ve(se,Q,fe,Re,ot)}if(re(Re)||ne(Re))return se=se.get(fe)||null,Ce(Q,se,Re,ot,null);if(typeof Re.then=="function")return ve(se,Q,fe,vu(Re),ot);if(Re.$$typeof===w)return ve(se,Q,fe,au(Q,Re),ot);_u(Q,Re)}return null}function yt(se,Q,fe,Re){for(var ot=null,Lt=null,ft=Q,xt=Q=0,kn=null;ft!==null&&xt<fe.length;xt++){ft.index>xt?(kn=ft,ft=null):kn=ft.sibling;var Ht=pe(se,ft,fe[xt],Re);if(Ht===null){ft===null&&(ft=kn);break}i&&ft&&Ht.alternate===null&&r(se,ft),Q=g(Ht,Q,xt),Lt===null?ot=Ht:Lt.sibling=Ht,Lt=Ht,ft=kn}if(xt===fe.length)return s(se,ft),Xt&&ao(se,xt),ot;if(ft===null){for(;xt<fe.length;xt++)ft=Ue(se,fe[xt],Re),ft!==null&&(Q=g(ft,Q,xt),Lt===null?ot=ft:Lt.sibling=ft,Lt=ft);return Xt&&ao(se,xt),ot}for(ft=c(ft);xt<fe.length;xt++)kn=ve(ft,se,xt,fe[xt],Re),kn!==null&&(i&&kn.alternate!==null&&ft.delete(kn.key===null?xt:kn.key),Q=g(kn,Q,xt),Lt===null?ot=kn:Lt.sibling=kn,Lt=kn);return i&&ft.forEach(function(Cr){return r(se,Cr)}),Xt&&ao(se,xt),ot}function vt(se,Q,fe,Re){if(fe==null)throw Error(a(151));for(var ot=null,Lt=null,ft=Q,xt=Q=0,kn=null,Ht=fe.next();ft!==null&&!Ht.done;xt++,Ht=fe.next()){ft.index>xt?(kn=ft,ft=null):kn=ft.sibling;var Cr=pe(se,ft,Ht.value,Re);if(Cr===null){ft===null&&(ft=kn);break}i&&ft&&Cr.alternate===null&&r(se,ft),Q=g(Cr,Q,xt),Lt===null?ot=Cr:Lt.sibling=Cr,Lt=Cr,ft=kn}if(Ht.done)return s(se,ft),Xt&&ao(se,xt),ot;if(ft===null){for(;!Ht.done;xt++,Ht=fe.next())Ht=Ue(se,Ht.value,Re),Ht!==null&&(Q=g(Ht,Q,xt),Lt===null?ot=Ht:Lt.sibling=Ht,Lt=Ht);return Xt&&ao(se,xt),ot}for(ft=c(ft);!Ht.done;xt++,Ht=fe.next())Ht=ve(ft,se,xt,Ht.value,Re),Ht!==null&&(i&&Ht.alternate!==null&&ft.delete(Ht.key===null?xt:Ht.key),Q=g(Ht,Q,xt),Lt===null?ot=Ht:Lt.sibling=Ht,Lt=Ht);return i&&ft.forEach(function(s2){return r(se,s2)}),Xt&&ao(se,xt),ot}function tn(se,Q,fe,Re){if(typeof fe=="object"&&fe!==null&&fe.type===S&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case _:e:{for(var ot=fe.key;Q!==null;){if(Q.key===ot){if(ot=fe.type,ot===S){if(Q.tag===7){s(se,Q.sibling),Re=d(Q,fe.props.children),Re.return=se,se=Re;break e}}else if(Q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===V&&T_(ot)===Q.type){s(se,Q.sibling),Re=d(Q,fe.props),zl(Re,fe),Re.return=se,se=Re;break e}s(se,Q);break}else r(se,Q);Q=Q.sibling}fe.type===S?(Re=no(fe.props.children,se.mode,Re,fe.key),Re.return=se,se=Re):(Re=eu(fe.type,fe.key,fe.props,null,se.mode,Re),zl(Re,fe),Re.return=se,se=Re)}return A(se);case x:e:{for(ot=fe.key;Q!==null;){if(Q.key===ot)if(Q.tag===4&&Q.stateNode.containerInfo===fe.containerInfo&&Q.stateNode.implementation===fe.implementation){s(se,Q.sibling),Re=d(Q,fe.children||[]),Re.return=se,se=Re;break e}else{s(se,Q);break}else r(se,Q);Q=Q.sibling}Re=Kd(fe,se.mode,Re),Re.return=se,se=Re}return A(se);case V:return ot=fe._init,fe=ot(fe._payload),tn(se,Q,fe,Re)}if(re(fe))return yt(se,Q,fe,Re);if(ne(fe)){if(ot=ne(fe),typeof ot!="function")throw Error(a(150));return fe=ot.call(fe),vt(se,Q,fe,Re)}if(typeof fe.then=="function")return tn(se,Q,vu(fe),Re);if(fe.$$typeof===w)return tn(se,Q,au(se,fe),Re);_u(se,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,Q!==null&&Q.tag===6?(s(se,Q.sibling),Re=d(Q,fe),Re.return=se,se=Re):(s(se,Q),Re=Zd(fe,se.mode,Re),Re.return=se,se=Re),A(se)):s(se,Q)}return function(se,Q,fe,Re){try{Ol=0;var ot=tn(se,Q,fe,Re);return es=null,ot}catch(ft){if(ft===Al||ft===ou)throw ft;var Lt=_i(29,ft,null,se.mode);return Lt.lanes=Re,Lt.return=se,Lt}finally{}}}var ts=A_(!0),w_=A_(!1),Bi=te(null),ma=null;function hr(i){var r=i.alternate;Te(Nn,Nn.current&1),Te(Bi,i),ma===null&&(r===null||Zo.current!==null||r.memoizedState!==null)&&(ma=i)}function C_(i){if(i.tag===22){if(Te(Nn,Nn.current),Te(Bi,i),ma===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(ma=i)}}else pr()}function pr(){Te(Nn,Nn.current),Te(Bi,Bi.current)}function Ba(i){xe(Bi),ma===i&&(ma=null),xe(Nn)}var Nn=te(0);function xu(i){for(var r=i;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||xp(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Dh(i,r,s,c){r=i.memoizedState,s=s(c,r),s=s==null?r:m({},r,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var Lh={enqueueSetState:function(i,r,s){i=i._reactInternals;var c=Si(),d=ur(c);d.payload=r,s!=null&&(d.callback=s),r=fr(i,d,c),r!==null&&(Mi(r,i,c),Cl(r,i,c))},enqueueReplaceState:function(i,r,s){i=i._reactInternals;var c=Si(),d=ur(c);d.tag=1,d.payload=r,s!=null&&(d.callback=s),r=fr(i,d,c),r!==null&&(Mi(r,i,c),Cl(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var s=Si(),c=ur(s);c.tag=2,r!=null&&(c.callback=r),r=fr(i,c,s),r!==null&&(Mi(r,i,s),Cl(r,i,s))}};function R_(i,r,s,c,d,g,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!_l(s,c)||!_l(d,g):!0}function D_(i,r,s,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==i&&Lh.enqueueReplaceState(r,r.state,null)}function fo(i,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(i=i.defaultProps){s===r&&(s=m({},s));for(var d in i)s[d]===void 0&&(s[d]=i[d])}return s}var yu=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function L_(i){yu(i)}function U_(i){console.error(i)}function P_(i){yu(i)}function bu(i,r){try{var s=i.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function N_(i,r,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Uh(i,r,s){return s=ur(s),s.tag=3,s.payload={element:null},s.callback=function(){bu(i,r)},s}function O_(i){return i=ur(i),i.tag=3,i}function z_(i,r,s,c){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;i.payload=function(){return d(g)},i.callback=function(){N_(r,s,c)}}var A=s.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(i.callback=function(){N_(r,s,c),typeof d!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var P=c.stack;this.componentDidCatch(c.value,{componentStack:P!==null?P:""})})}function sT(i,r,s,c,d){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&Ml(r,s,d,!0),s=Bi.current,s!==null){switch(s.tag){case 13:return ma===null?np():s.alternate===null&&bn===0&&(bn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,c===sh?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),ap(i,c,d)),!1;case 22:return s.flags|=65536,c===sh?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),ap(i,c,d)),!1}throw Error(a(435,s.tag))}return ap(i,c,d),np(),!1}if(Xt)return r=Bi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==eh&&(i=Error(a(422),{cause:c}),Sl(Pi(i,s)))):(c!==eh&&(r=Error(a(423),{cause:c}),Sl(Pi(r,s))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=Pi(c,s),d=Uh(i.stateNode,c,d),uh(i,d),bn!==4&&(bn=2)),!1;var g=Error(a(520),{cause:c});if(g=Pi(g,s),Vl===null?Vl=[g]:Vl.push(g),bn!==4&&(bn=2),r===null)return!0;c=Pi(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,i=d&-d,s.lanes|=i,i=Uh(s.stateNode,c,i),uh(s,i),!1;case 1:if(r=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yr===null||!yr.has(g))))return s.flags|=65536,d&=-d,s.lanes|=d,d=O_(d),z_(d,i,s,c),uh(s,d),!1}s=s.return}while(s!==null);return!1}var B_=Error(a(461)),Fn=!1;function jn(i,r,s,c){r.child=i===null?w_(r,null,s,c):ts(r,i.child,s,c)}function F_(i,r,s,c,d){s=s.render;var g=r.ref;if("ref"in c){var A={};for(var P in c)P!=="ref"&&(A[P]=c[P])}else A=c;return lo(r),c=mh(i,r,s,A,g,d),P=gh(),i!==null&&!Fn?(vh(i,r,d),Fa(i,r,d)):(Xt&&P&&Qd(r),r.flags|=1,jn(i,r,c,d),r.child)}function I_(i,r,s,c,d){if(i===null){var g=s.type;return typeof g=="function"&&!$d(g)&&g.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=g,k_(i,r,g,c,d)):(i=eu(s.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(g=i.child,!kh(i,d)){var A=g.memoizedProps;if(s=s.compare,s=s!==null?s:_l,s(A,c)&&i.ref===r.ref)return Fa(i,r,d)}return r.flags|=1,i=La(g,c),i.ref=r.ref,i.return=r,r.child=i}function k_(i,r,s,c,d){if(i!==null){var g=i.memoizedProps;if(_l(g,c)&&i.ref===r.ref)if(Fn=!1,r.pendingProps=c=g,kh(i,d))(i.flags&131072)!==0&&(Fn=!0);else return r.lanes=i.lanes,Fa(i,r,d)}return Ph(i,r,s,c,d)}function H_(i,r,s){var c=r.pendingProps,d=c.children,g=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=g!==null?g.baseLanes|s:s,i!==null){for(d=r.child=i.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;r.childLanes=g&~c}else r.childLanes=0,r.child=null;return G_(i,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&ru(r,g!==null?g.cachePool:null),g!==null?kv(r,g):dh(),C_(r);else return r.lanes=r.childLanes=536870912,G_(i,r,g!==null?g.baseLanes|s:s,s)}else g!==null?(ru(r,g.cachePool),kv(r,g),pr(),r.memoizedState=null):(i!==null&&ru(r,null),dh(),pr());return jn(i,r,d,s),r.child}function G_(i,r,s,c){var d=oh();return d=d===null?null:{parent:Pn._currentValue,pool:d},r.memoizedState={baseLanes:s,cachePool:d},i!==null&&ru(r,null),dh(),C_(r),i!==null&&Ml(i,r,c,!0),null}function Su(i,r){var s=r.ref;if(s===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(i===null||i.ref!==s)&&(r.flags|=4194816)}}function Ph(i,r,s,c,d){return lo(r),s=mh(i,r,s,c,void 0,d),c=gh(),i!==null&&!Fn?(vh(i,r,d),Fa(i,r,d)):(Xt&&c&&Qd(r),r.flags|=1,jn(i,r,s,d),r.child)}function V_(i,r,s,c,d,g){return lo(r),r.updateQueue=null,s=Gv(r,c,s,d),Hv(i),c=gh(),i!==null&&!Fn?(vh(i,r,g),Fa(i,r,g)):(Xt&&c&&Qd(r),r.flags|=1,jn(i,r,s,g),r.child)}function X_(i,r,s,c,d){if(lo(r),r.stateNode===null){var g=jo,A=s.contextType;typeof A=="object"&&A!==null&&(g=Zn(A)),g=new s(c,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Lh,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=c,g.state=r.memoizedState,g.refs={},lh(r),A=s.contextType,g.context=typeof A=="object"&&A!==null?Zn(A):jo,g.state=r.memoizedState,A=s.getDerivedStateFromProps,typeof A=="function"&&(Dh(r,s,A,c),g.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(A=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),A!==g.state&&Lh.enqueueReplaceState(g,g.state,null),Dl(r,c,g,d),Rl(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){g=r.stateNode;var P=r.memoizedProps,Y=fo(s,P);g.props=Y;var de=g.context,Ce=s.contextType;A=jo,typeof Ce=="object"&&Ce!==null&&(A=Zn(Ce));var Ue=s.getDerivedStateFromProps;Ce=typeof Ue=="function"||typeof g.getSnapshotBeforeUpdate=="function",P=r.pendingProps!==P,Ce||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P||de!==A)&&D_(r,g,c,A),cr=!1;var pe=r.memoizedState;g.state=pe,Dl(r,c,g,d),Rl(),de=r.memoizedState,P||pe!==de||cr?(typeof Ue=="function"&&(Dh(r,s,Ue,c),de=r.memoizedState),(Y=cr||R_(r,s,Y,c,pe,de,A))?(Ce||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=de),g.props=c,g.state=de,g.context=A,c=Y):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{g=r.stateNode,ch(i,r),A=r.memoizedProps,Ce=fo(s,A),g.props=Ce,Ue=r.pendingProps,pe=g.context,de=s.contextType,Y=jo,typeof de=="object"&&de!==null&&(Y=Zn(de)),P=s.getDerivedStateFromProps,(de=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A!==Ue||pe!==Y)&&D_(r,g,c,Y),cr=!1,pe=r.memoizedState,g.state=pe,Dl(r,c,g,d),Rl();var ve=r.memoizedState;A!==Ue||pe!==ve||cr||i!==null&&i.dependencies!==null&&iu(i.dependencies)?(typeof P=="function"&&(Dh(r,s,P,c),ve=r.memoizedState),(Ce=cr||R_(r,s,Ce,c,pe,ve,Y)||i!==null&&i.dependencies!==null&&iu(i.dependencies))?(de||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,ve,Y),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,ve,Y)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||A===i.memoizedProps&&pe===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&pe===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ve),g.props=c,g.state=ve,g.context=Y,c=Ce):(typeof g.componentDidUpdate!="function"||A===i.memoizedProps&&pe===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&pe===i.memoizedState||(r.flags|=1024),c=!1)}return g=c,Su(i,r),c=(r.flags&128)!==0,g||c?(g=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,i!==null&&c?(r.child=ts(r,i.child,null,d),r.child=ts(r,null,s,d)):jn(i,r,s,d),r.memoizedState=g.state,i=r.child):i=Fa(i,r,d),i}function j_(i,r,s,c){return bl(),r.flags|=256,jn(i,r,s,c),r.child}var Nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oh(i){return{baseLanes:i,cachePool:Uv()}}function zh(i,r,s){return i=i!==null?i.childLanes&~s:0,r&&(i|=Fi),i}function Y_(i,r,s){var c=r.pendingProps,d=!1,g=(r.flags&128)!==0,A;if((A=g)||(A=i!==null&&i.memoizedState===null?!1:(Nn.current&2)!==0),A&&(d=!0,r.flags&=-129),A=(r.flags&32)!==0,r.flags&=-33,i===null){if(Xt){if(d?hr(r):pr(),Xt){var P=yn,Y;if(Y=P){e:{for(Y=P,P=pa;Y.nodeType!==8;){if(!P){P=null;break e}if(Y=Zi(Y.nextSibling),Y===null){P=null;break e}}P=Y}P!==null?(r.memoizedState={dehydrated:P,treeContext:io!==null?{id:Ua,overflow:Pa}:null,retryLane:536870912,hydrationErrors:null},Y=_i(18,null,null,0),Y.stateNode=P,Y.return=r,r.child=Y,ii=r,yn=null,Y=!0):Y=!1}Y||oo(r)}if(P=r.memoizedState,P!==null&&(P=P.dehydrated,P!==null))return xp(P)?r.lanes=32:r.lanes=536870912,null;Ba(r)}return P=c.children,c=c.fallback,d?(pr(),d=r.mode,P=Mu({mode:"hidden",children:P},d),c=no(c,d,s,null),P.return=r,c.return=r,P.sibling=c,r.child=P,d=r.child,d.memoizedState=Oh(s),d.childLanes=zh(i,A,s),r.memoizedState=Nh,c):(hr(r),Bh(r,P))}if(Y=i.memoizedState,Y!==null&&(P=Y.dehydrated,P!==null)){if(g)r.flags&256?(hr(r),r.flags&=-257,r=Fh(i,r,s)):r.memoizedState!==null?(pr(),r.child=i.child,r.flags|=128,r=null):(pr(),d=c.fallback,P=r.mode,c=Mu({mode:"visible",children:c.children},P),d=no(d,P,s,null),d.flags|=2,c.return=r,d.return=r,c.sibling=d,r.child=c,ts(r,i.child,null,s),c=r.child,c.memoizedState=Oh(s),c.childLanes=zh(i,A,s),r.memoizedState=Nh,r=d);else if(hr(r),xp(P)){if(A=P.nextSibling&&P.nextSibling.dataset,A)var de=A.dgst;A=de,c=Error(a(419)),c.stack="",c.digest=A,Sl({value:c,source:null,stack:null}),r=Fh(i,r,s)}else if(Fn||Ml(i,r,s,!1),A=(s&i.childLanes)!==0,Fn||A){if(A=ln,A!==null&&(c=s&-s,c=(c&42)!==0?1:Ut(c),c=(c&(A.suspendedLanes|s))!==0?0:c,c!==0&&c!==Y.retryLane))throw Y.retryLane=c,Xo(i,c),Mi(A,i,c),B_;P.data==="$?"||np(),r=Fh(i,r,s)}else P.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=Y.treeContext,yn=Zi(P.nextSibling),ii=r,Xt=!0,ro=null,pa=!1,i!==null&&(Oi[zi++]=Ua,Oi[zi++]=Pa,Oi[zi++]=io,Ua=i.id,Pa=i.overflow,io=r),r=Bh(r,c.children),r.flags|=4096);return r}return d?(pr(),d=c.fallback,P=r.mode,Y=i.child,de=Y.sibling,c=La(Y,{mode:"hidden",children:c.children}),c.subtreeFlags=Y.subtreeFlags&65011712,de!==null?d=La(de,d):(d=no(d,P,s,null),d.flags|=2),d.return=r,c.return=r,c.sibling=d,r.child=c,c=d,d=r.child,P=i.child.memoizedState,P===null?P=Oh(s):(Y=P.cachePool,Y!==null?(de=Pn._currentValue,Y=Y.parent!==de?{parent:de,pool:de}:Y):Y=Uv(),P={baseLanes:P.baseLanes|s,cachePool:Y}),d.memoizedState=P,d.childLanes=zh(i,A,s),r.memoizedState=Nh,c):(hr(r),s=i.child,i=s.sibling,s=La(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,i!==null&&(A=r.deletions,A===null?(r.deletions=[i],r.flags|=16):A.push(i)),r.child=s,r.memoizedState=null,s)}function Bh(i,r){return r=Mu({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Mu(i,r){return i=_i(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Fh(i,r,s){return ts(r,i.child,null,s),i=Bh(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function W_(i,r,s){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),nh(i.return,r,s)}function Ih(i,r,s,c,d){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:d}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=d)}function q_(i,r,s){var c=r.pendingProps,d=c.revealOrder,g=c.tail;if(jn(i,r,c.children,s),c=Nn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&W_(i,s,r);else if(i.tag===19)W_(i,s,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Te(Nn,c),d){case"forwards":for(s=r.child,d=null;s!==null;)i=s.alternate,i!==null&&xu(i)===null&&(d=s),s=s.sibling;s=d,s===null?(d=r.child,r.child=null):(d=s.sibling,s.sibling=null),Ih(r,!1,d,s,g);break;case"backwards":for(s=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&xu(i)===null){r.child=d;break}i=d.sibling,d.sibling=s,s=d,d=i}Ih(r,!0,s,null,g);break;case"together":Ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fa(i,r,s){if(i!==null&&(r.dependencies=i.dependencies),xr|=r.lanes,(s&r.childLanes)===0)if(i!==null){if(Ml(i,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,s=La(i,i.pendingProps),r.child=s,s.return=r;i.sibling!==null;)i=i.sibling,s=s.sibling=La(i,i.pendingProps),s.return=r;s.sibling=null}return r.child}function kh(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&iu(i)))}function lT(i,r,s){switch(r.tag){case 3:Ae(r,r.stateNode.containerInfo),lr(r,Pn,i.memoizedState.cache),bl();break;case 27:case 5:Ve(r);break;case 4:Ae(r,r.stateNode.containerInfo);break;case 10:lr(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(hr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?Y_(i,r,s):(hr(r),i=Fa(i,r,s),i!==null?i.sibling:null);hr(r);break;case 19:var d=(i.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(Ml(i,r,s,!1),c=(s&r.childLanes)!==0),d){if(c)return q_(i,r,s);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Te(Nn,Nn.current),c)break;return null;case 22:case 23:return r.lanes=0,H_(i,r,s);case 24:lr(r,Pn,i.memoizedState.cache)}return Fa(i,r,s)}function $_(i,r,s){if(i!==null)if(i.memoizedProps!==r.pendingProps)Fn=!0;else{if(!kh(i,s)&&(r.flags&128)===0)return Fn=!1,lT(i,r,s);Fn=(i.flags&131072)!==0}else Fn=!1,Xt&&(r.flags&1048576)!==0&&Tv(r,nu,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,d=c._init;if(c=d(c._payload),r.type=c,typeof c=="function")$d(c)?(i=fo(c,i),r.tag=1,r=X_(null,r,c,i,s)):(r.tag=0,r=Ph(null,r,c,i,s));else{if(c!=null){if(d=c.$$typeof,d===E){r.tag=11,r=F_(null,r,c,i,s);break e}else if(d===R){r.tag=14,r=I_(null,r,c,i,s);break e}}throw r=ue(c)||c,Error(a(306,r,""))}}return r;case 0:return Ph(i,r,r.type,r.pendingProps,s);case 1:return c=r.type,d=fo(c,r.pendingProps),X_(i,r,c,d,s);case 3:e:{if(Ae(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var g=r.memoizedState;d=g.element,ch(i,r),Dl(r,c,null,s);var A=r.memoizedState;if(c=A.cache,lr(r,Pn,c),c!==g.cache&&ih(r,[Pn],s,!0),Rl(),c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=j_(i,r,c,s);break e}else if(c!==d){d=Pi(Error(a(424)),r),Sl(d),r=j_(i,r,c,s);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(yn=Zi(i.firstChild),ii=r,Xt=!0,ro=null,pa=!0,s=w_(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(bl(),c===d){r=Fa(i,r,s);break e}jn(i,r,c,s)}r=r.child}return r;case 26:return Su(i,r),i===null?(s=Jx(r.type,null,r.pendingProps,null))?r.memoizedState=s:Xt||(s=r.type,i=r.pendingProps,c=Bu(ce.current).createElement(s),c[jt]=r,c[Nt]=i,Wn(c,s,i),xn(c),r.stateNode=c):r.memoizedState=Jx(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ve(r),i===null&&Xt&&(c=r.stateNode=Zx(r.type,r.pendingProps,ce.current),ii=r,pa=!0,d=yn,Mr(r.type)?(yp=d,yn=Zi(c.firstChild)):yn=d),jn(i,r,r.pendingProps.children,s),Su(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Xt&&((d=c=yn)&&(c=zT(c,r.type,r.pendingProps,pa),c!==null?(r.stateNode=c,ii=r,yn=Zi(c.firstChild),pa=!1,d=!0):d=!1),d||oo(r)),Ve(r),d=r.type,g=r.pendingProps,A=i!==null?i.memoizedProps:null,c=g.children,gp(d,g)?c=null:A!==null&&gp(d,A)&&(r.flags|=32),r.memoizedState!==null&&(d=mh(i,r,eT,null,null,s),Ql._currentValue=d),Su(i,r),jn(i,r,c,s),r.child;case 6:return i===null&&Xt&&((i=s=yn)&&(s=BT(s,r.pendingProps,pa),s!==null?(r.stateNode=s,ii=r,yn=null,i=!0):i=!1),i||oo(r)),null;case 13:return Y_(i,r,s);case 4:return Ae(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=ts(r,null,c,s):jn(i,r,c,s),r.child;case 11:return F_(i,r,r.type,r.pendingProps,s);case 7:return jn(i,r,r.pendingProps,s),r.child;case 8:return jn(i,r,r.pendingProps.children,s),r.child;case 12:return jn(i,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,lr(r,r.type,c.value),jn(i,r,c.children,s),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,lo(r),d=Zn(d),c=c(d),r.flags|=1,jn(i,r,c,s),r.child;case 14:return I_(i,r,r.type,r.pendingProps,s);case 15:return k_(i,r,r.type,r.pendingProps,s);case 19:return q_(i,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},i===null?(s=Mu(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=La(i.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return H_(i,r,s);case 24:return lo(r),c=Zn(Pn),i===null?(d=oh(),d===null&&(d=ln,g=ah(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=s),d=g),r.memoizedState={parent:c,cache:d},lh(r),lr(r,Pn,d)):((i.lanes&s)!==0&&(ch(i,r),Dl(r,null,null,s),Rl()),d=i.memoizedState,g=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),lr(r,Pn,c)):(c=g.cache,lr(r,Pn,c),c!==d.cache&&ih(r,[Pn],s,!0))),jn(i,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Ia(i){i.flags|=4}function Z_(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!ay(r)){if(r=Bi.current,r!==null&&((kt&4194048)===kt?ma!==null:(kt&62914560)!==kt&&(kt&536870912)===0||r!==ma))throw wl=sh,Pv;i.flags|=8192}}function Eu(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?qe():536870912,i.lanes|=r,rs|=r)}function Bl(i,r){if(!Xt)switch(i.tailMode){case"hidden":r=i.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function vn(i){var r=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(r)for(var d=i.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=s,r}function cT(i,r,s){var c=r.pendingProps;switch(Jd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(r),null;case 1:return vn(r),null;case 3:return s=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Oa(Pn),De(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(yl(r)?Ia(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cv())),vn(r),null;case 26:return s=r.memoizedState,i===null?(Ia(r),s!==null?(vn(r),Z_(r,s)):(vn(r),r.flags&=-16777217)):s?s!==i.memoizedState?(Ia(r),vn(r),Z_(r,s)):(vn(r),r.flags&=-16777217):(i.memoizedProps!==c&&Ia(r),vn(r),r.flags&=-16777217),null;case 27:it(r),s=ce.current;var d=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Ia(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return vn(r),null}i=K.current,yl(r)?Av(r):(i=Zx(d,c,s),r.stateNode=i,Ia(r))}return vn(r),null;case 5:if(it(r),s=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Ia(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return vn(r),null}if(i=K.current,yl(r))Av(r);else{switch(d=Bu(ce.current),i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?d.createElement(s,{is:c.is}):d.createElement(s)}}i[jt]=r,i[Nt]=c;e:for(d=r.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break e;for(;d.sibling===null;){if(d.return===null||d.return===r)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}r.stateNode=i;e:switch(Wn(i,s,c),s){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ia(r)}}return vn(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Ia(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=ce.current,yl(r)){if(i=r.stateNode,s=r.memoizedProps,c=null,d=ii,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[jt]=r,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||Vx(i.nodeValue,s)),i||oo(r)}else i=Bu(i).createTextNode(c),i[jt]=r,r.stateNode=i}return vn(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=yl(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(a(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[jt]=r}else bl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;vn(r),d=!1}else d=Cv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(Ba(r),r):(Ba(r),null)}if(Ba(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,i=i!==null&&i.memoizedState!==null,s){c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return s!==i&&s&&(r.child.flags|=8192),Eu(r,r.updateQueue),vn(r),null;case 4:return De(),i===null&&fp(r.stateNode.containerInfo),vn(r),null;case 10:return Oa(r.type),vn(r),null;case 19:if(xe(Nn),d=r.memoizedState,d===null)return vn(r),null;if(c=(r.flags&128)!==0,g=d.rendering,g===null)if(c)Bl(d,!1);else{if(bn!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(g=xu(i),g!==null){for(r.flags|=128,Bl(d,!1),i=g.updateQueue,r.updateQueue=i,Eu(r,i),r.subtreeFlags=0,i=s,s=r.child;s!==null;)Ev(s,i),s=s.sibling;return Te(Nn,Nn.current&1|2),r.child}i=i.sibling}d.tail!==null&&He()>wu&&(r.flags|=128,c=!0,Bl(d,!1),r.lanes=4194304)}else{if(!c)if(i=xu(g),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,Eu(r,i),Bl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Xt)return vn(r),null}else 2*He()-d.renderingStartTime>wu&&s!==536870912&&(r.flags|=128,c=!0,Bl(d,!1),r.lanes=4194304);d.isBackwards?(g.sibling=r.child,r.child=g):(i=d.last,i!==null?i.sibling=g:r.child=g,d.last=g)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=He(),r.sibling=null,i=Nn.current,Te(Nn,c?i&1|2:i&1),r):(vn(r),null);case 22:case 23:return Ba(r),hh(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(vn(r),r.subtreeFlags&6&&(r.flags|=8192)):vn(r),s=r.updateQueue,s!==null&&Eu(r,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),i!==null&&xe(co),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Oa(Pn),vn(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function uT(i,r){switch(Jd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Oa(Pn),De(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return it(r),null;case 13:if(Ba(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));bl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return xe(Nn),null;case 4:return De(),null;case 10:return Oa(r.type),null;case 22:case 23:return Ba(r),hh(),i!==null&&xe(co),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Oa(Pn),null;case 25:return null;default:return null}}function K_(i,r){switch(Jd(r),r.tag){case 3:Oa(Pn),De();break;case 26:case 27:case 5:it(r);break;case 4:De();break;case 13:Ba(r);break;case 19:xe(Nn);break;case 10:Oa(r.type);break;case 22:case 23:Ba(r),hh(),i!==null&&xe(co);break;case 24:Oa(Pn)}}function Fl(i,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var d=c.next;s=d;do{if((s.tag&i)===i){c=void 0;var g=s.create,A=s.inst;c=g(),A.destroy=c}s=s.next}while(s!==d)}}catch(P){rn(r,r.return,P)}}function mr(i,r,s){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&i)===i){var A=c.inst,P=A.destroy;if(P!==void 0){A.destroy=void 0,d=r;var Y=s,de=P;try{de()}catch(Ce){rn(d,Y,Ce)}}}c=c.next}while(c!==g)}}catch(Ce){rn(r,r.return,Ce)}}function Q_(i){var r=i.updateQueue;if(r!==null){var s=i.stateNode;try{Iv(r,s)}catch(c){rn(i,i.return,c)}}}function J_(i,r,s){s.props=fo(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){rn(i,r,c)}}function Il(i,r){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(d){rn(i,r,d)}}function ga(i,r){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(d){rn(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){rn(i,r,d)}else s.current=null}function ex(i){var r=i.type,s=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(d){rn(i,i.return,d)}}function Hh(i,r,s){try{var c=i.stateNode;LT(c,i.type,s,r),c[Nt]=r}catch(d){rn(i,i.return,d)}}function tx(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Mr(i.type)||i.tag===4}function Gh(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||tx(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Mr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Vh(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(i),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=zu));else if(c!==4&&(c===27&&Mr(i.type)&&(s=i.stateNode,r=null),i=i.child,i!==null))for(Vh(i,r,s),i=i.sibling;i!==null;)Vh(i,r,s),i=i.sibling}function Tu(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?s.insertBefore(i,r):s.appendChild(i);else if(c!==4&&(c===27&&Mr(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(Tu(i,r,s),i=i.sibling;i!==null;)Tu(i,r,s),i=i.sibling}function nx(i){var r=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);Wn(r,c,s),r[jt]=i,r[Nt]=s}catch(g){rn(i,i.return,g)}}var ka=!1,Tn=!1,Xh=!1,ix=typeof WeakSet=="function"?WeakSet:Set,In=null;function fT(i,r){if(i=i.containerInfo,pp=Vu,i=pv(i),Gd(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var A=0,P=-1,Y=-1,de=0,Ce=0,Ue=i,pe=null;t:for(;;){for(var ve;Ue!==s||d!==0&&Ue.nodeType!==3||(P=A+d),Ue!==g||c!==0&&Ue.nodeType!==3||(Y=A+c),Ue.nodeType===3&&(A+=Ue.nodeValue.length),(ve=Ue.firstChild)!==null;)pe=Ue,Ue=ve;for(;;){if(Ue===i)break t;if(pe===s&&++de===d&&(P=A),pe===g&&++Ce===c&&(Y=A),(ve=Ue.nextSibling)!==null)break;Ue=pe,pe=Ue.parentNode}Ue=ve}s=P===-1||Y===-1?null:{start:P,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(mp={focusedElem:i,selectionRange:s},Vu=!1,In=r;In!==null;)if(r=In,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,In=i;else for(;In!==null;){switch(r=In,g=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,s=r,d=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var yt=fo(s.type,d,s.elementType===s.type);i=c.getSnapshotBeforeUpdate(yt,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(vt){rn(s,s.return,vt)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,s=i.nodeType,s===9)_p(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":_p(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,In=i;break}In=r.return}}function ax(i,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:gr(i,s),c&4&&Fl(5,s);break;case 1:if(gr(i,s),c&4)if(i=s.stateNode,r===null)try{i.componentDidMount()}catch(A){rn(s,s.return,A)}else{var d=fo(s.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(A){rn(s,s.return,A)}}c&64&&Q_(s),c&512&&Il(s,s.return);break;case 3:if(gr(i,s),c&64&&(i=s.updateQueue,i!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{Iv(i,r)}catch(A){rn(s,s.return,A)}}break;case 27:r===null&&c&4&&nx(s);case 26:case 5:gr(i,s),r===null&&c&4&&ex(s),c&512&&Il(s,s.return);break;case 12:gr(i,s);break;case 13:gr(i,s),c&4&&sx(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=yT.bind(null,s),FT(i,s))));break;case 22:if(c=s.memoizedState!==null||ka,!c){r=r!==null&&r.memoizedState!==null||Tn,d=ka;var g=Tn;ka=c,(Tn=r)&&!g?vr(i,s,(s.subtreeFlags&8772)!==0):gr(i,s),ka=d,Tn=g}break;case 30:break;default:gr(i,s)}}function rx(i){var r=i.alternate;r!==null&&(i.alternate=null,rx(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&ua(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var pn=null,di=!1;function Ha(i,r,s){for(s=s.child;s!==null;)ox(i,r,s),s=s.sibling}function ox(i,r,s){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:Tn||ga(s,r),Ha(i,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tn||ga(s,r);var c=pn,d=di;Mr(s.type)&&(pn=s.stateNode,di=!1),Ha(i,r,s),ql(s.stateNode),pn=c,di=d;break;case 5:Tn||ga(s,r);case 6:if(c=pn,d=di,pn=null,Ha(i,r,s),pn=c,di=d,pn!==null)if(di)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(s.stateNode)}catch(g){rn(s,r,g)}else try{pn.removeChild(s.stateNode)}catch(g){rn(s,r,g)}break;case 18:pn!==null&&(di?(i=pn,qx(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),nc(i)):qx(pn,s.stateNode));break;case 4:c=pn,d=di,pn=s.stateNode.containerInfo,di=!0,Ha(i,r,s),pn=c,di=d;break;case 0:case 11:case 14:case 15:Tn||mr(2,s,r),Tn||mr(4,s,r),Ha(i,r,s);break;case 1:Tn||(ga(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&J_(s,r,c)),Ha(i,r,s);break;case 21:Ha(i,r,s);break;case 22:Tn=(c=Tn)||s.memoizedState!==null,Ha(i,r,s),Tn=c;break;default:Ha(i,r,s)}}function sx(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{nc(i)}catch(s){rn(r,r.return,s)}}function dT(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new ix),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new ix),r;default:throw Error(a(435,i.tag))}}function jh(i,r){var s=dT(i);r.forEach(function(c){var d=bT.bind(null,i,c);s.has(c)||(s.add(c),c.then(d,d))})}function xi(i,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var d=s[c],g=i,A=r,P=A;e:for(;P!==null;){switch(P.tag){case 27:if(Mr(P.type)){pn=P.stateNode,di=!1;break e}break;case 5:pn=P.stateNode,di=!1;break e;case 3:case 4:pn=P.stateNode.containerInfo,di=!0;break e}P=P.return}if(pn===null)throw Error(a(160));ox(g,A,d),pn=null,di=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)lx(r,i),r=r.sibling}var $i=null;function lx(i,r){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:xi(r,i),yi(i),c&4&&(mr(3,i,i.return),Fl(3,i),mr(5,i,i.return));break;case 1:xi(r,i),yi(i),c&512&&(Tn||s===null||ga(s,s.return)),c&64&&ka&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var d=$i;if(xi(r,i),yi(i),c&512&&(Tn||s===null||ga(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){e:{c=i.type,s=i.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[ca]||g[jt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),Wn(g,c,s),g[jt]=i,xn(g),c=g;break e;case"link":var A=ny("link","href",d).get(c+(s.href||""));if(A){for(var P=0;P<A.length;P++)if(g=A[P],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){A.splice(P,1);break t}}g=d.createElement(c),Wn(g,c,s),d.head.appendChild(g);break;case"meta":if(A=ny("meta","content",d).get(c+(s.content||""))){for(P=0;P<A.length;P++)if(g=A[P],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){A.splice(P,1);break t}}g=d.createElement(c),Wn(g,c,s),d.head.appendChild(g);break;default:throw Error(a(468,c))}g[jt]=i,xn(g),c=g}i.stateNode=c}else iy(d,i.type,i.stateNode);else i.stateNode=ty(d,c,i.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?iy(d,i.type,i.stateNode):ty(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Hh(i,i.memoizedProps,s.memoizedProps)}break;case 27:xi(r,i),yi(i),c&512&&(Tn||s===null||ga(s,s.return)),s!==null&&c&4&&Hh(i,i.memoizedProps,s.memoizedProps);break;case 5:if(xi(r,i),yi(i),c&512&&(Tn||s===null||ga(s,s.return)),i.flags&32){d=i.stateNode;try{li(d,"")}catch(ve){rn(i,i.return,ve)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,Hh(i,d,s!==null?s.memoizedProps:d)),c&1024&&(Xh=!0);break;case 6:if(xi(r,i),yi(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(ve){rn(i,i.return,ve)}}break;case 3:if(ku=null,d=$i,$i=Fu(r.containerInfo),xi(r,i),$i=d,yi(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{nc(r.containerInfo)}catch(ve){rn(i,i.return,ve)}Xh&&(Xh=!1,cx(i));break;case 4:c=$i,$i=Fu(i.stateNode.containerInfo),xi(r,i),yi(i),$i=c;break;case 12:xi(r,i),yi(i);break;case 13:xi(r,i),yi(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Kh=He()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,jh(i,c)));break;case 22:d=i.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,de=ka,Ce=Tn;if(ka=de||d,Tn=Ce||Y,xi(r,i),Tn=Ce,ka=de,yi(i),c&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(s===null||Y||ka||Tn||ho(i)),s=null,r=i;;){if(r.tag===5||r.tag===26){if(s===null){Y=s=r;try{if(g=Y.stateNode,d)A=g.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{P=Y.stateNode;var Ue=Y.memoizedProps.style,pe=Ue!=null&&Ue.hasOwnProperty("display")?Ue.display:null;P.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(ve){rn(Y,Y.return,ve)}}}else if(r.tag===6){if(s===null){Y=r;try{Y.stateNode.nodeValue=d?"":Y.memoizedProps}catch(ve){rn(Y,Y.return,ve)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,jh(i,s))));break;case 19:xi(r,i),yi(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,jh(i,c)));break;case 30:break;case 21:break;default:xi(r,i),yi(i)}}function yi(i){var r=i.flags;if(r&2){try{for(var s,c=i.return;c!==null;){if(tx(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,g=Gh(i);Tu(i,g,d);break;case 5:var A=s.stateNode;s.flags&32&&(li(A,""),s.flags&=-33);var P=Gh(i);Tu(i,P,A);break;case 3:case 4:var Y=s.stateNode.containerInfo,de=Gh(i);Vh(i,de,Y);break;default:throw Error(a(161))}}catch(Ce){rn(i,i.return,Ce)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function cx(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;cx(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function gr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)ax(i,r.alternate,r),r=r.sibling}function ho(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:mr(4,r,r.return),ho(r);break;case 1:ga(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&J_(r,r.return,s),ho(r);break;case 27:ql(r.stateNode);case 26:case 5:ga(r,r.return),ho(r);break;case 22:r.memoizedState===null&&ho(r);break;case 30:ho(r);break;default:ho(r)}i=i.sibling}}function vr(i,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,g=r,A=g.flags;switch(g.tag){case 0:case 11:case 15:vr(d,g,s),Fl(4,g);break;case 1:if(vr(d,g,s),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(de){rn(c,c.return,de)}if(c=g,d=c.updateQueue,d!==null){var P=c.stateNode;try{var Y=d.shared.hiddenCallbacks;if(Y!==null)for(d.shared.hiddenCallbacks=null,d=0;d<Y.length;d++)Fv(Y[d],P)}catch(de){rn(c,c.return,de)}}s&&A&64&&Q_(g),Il(g,g.return);break;case 27:nx(g);case 26:case 5:vr(d,g,s),s&&c===null&&A&4&&ex(g),Il(g,g.return);break;case 12:vr(d,g,s);break;case 13:vr(d,g,s),s&&A&4&&sx(d,g);break;case 22:g.memoizedState===null&&vr(d,g,s),Il(g,g.return);break;case 30:break;default:vr(d,g,s)}r=r.sibling}}function Yh(i,r){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&El(s))}function Wh(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&El(i))}function va(i,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ux(i,r,s,c),r=r.sibling}function ux(i,r,s,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:va(i,r,s,c),d&2048&&Fl(9,r);break;case 1:va(i,r,s,c);break;case 3:va(i,r,s,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&El(i)));break;case 12:if(d&2048){va(i,r,s,c),i=r.stateNode;try{var g=r.memoizedProps,A=g.id,P=g.onPostCommit;typeof P=="function"&&P(A,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(Y){rn(r,r.return,Y)}}else va(i,r,s,c);break;case 13:va(i,r,s,c);break;case 23:break;case 22:g=r.stateNode,A=r.alternate,r.memoizedState!==null?g._visibility&2?va(i,r,s,c):kl(i,r):g._visibility&2?va(i,r,s,c):(g._visibility|=2,ns(i,r,s,c,(r.subtreeFlags&10256)!==0)),d&2048&&Yh(A,r);break;case 24:va(i,r,s,c),d&2048&&Wh(r.alternate,r);break;default:va(i,r,s,c)}}function ns(i,r,s,c,d){for(d=d&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=i,A=r,P=s,Y=c,de=A.flags;switch(A.tag){case 0:case 11:case 15:ns(g,A,P,Y,d),Fl(8,A);break;case 23:break;case 22:var Ce=A.stateNode;A.memoizedState!==null?Ce._visibility&2?ns(g,A,P,Y,d):kl(g,A):(Ce._visibility|=2,ns(g,A,P,Y,d)),d&&de&2048&&Yh(A.alternate,A);break;case 24:ns(g,A,P,Y,d),d&&de&2048&&Wh(A.alternate,A);break;default:ns(g,A,P,Y,d)}r=r.sibling}}function kl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=i,c=r,d=c.flags;switch(c.tag){case 22:kl(s,c),d&2048&&Yh(c.alternate,c);break;case 24:kl(s,c),d&2048&&Wh(c.alternate,c);break;default:kl(s,c)}r=r.sibling}}var Hl=8192;function is(i){if(i.subtreeFlags&Hl)for(i=i.child;i!==null;)fx(i),i=i.sibling}function fx(i){switch(i.tag){case 26:is(i),i.flags&Hl&&i.memoizedState!==null&&KT($i,i.memoizedState,i.memoizedProps);break;case 5:is(i);break;case 3:case 4:var r=$i;$i=Fu(i.stateNode.containerInfo),is(i),$i=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,is(i),Hl=r):is(i));break;default:is(i)}}function dx(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Gl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];In=c,px(c,i)}dx(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)hx(i),i=i.sibling}function hx(i){switch(i.tag){case 0:case 11:case 15:Gl(i),i.flags&2048&&mr(9,i,i.return);break;case 3:Gl(i);break;case 12:Gl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Au(i)):Gl(i);break;default:Gl(i)}}function Au(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];In=c,px(c,i)}dx(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:mr(8,r,r.return),Au(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Au(r));break;default:Au(r)}i=i.sibling}}function px(i,r){for(;In!==null;){var s=In;switch(s.tag){case 0:case 11:case 15:mr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:El(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,In=c;else e:for(s=i;In!==null;){c=In;var d=c.sibling,g=c.return;if(rx(c),c===s){In=null;break e}if(d!==null){d.return=g,In=d;break e}In=g}}}var hT={getCacheForType:function(i){var r=Zn(Pn),s=r.data.get(i);return s===void 0&&(s=i(),r.data.set(i,s)),s}},pT=typeof WeakMap=="function"?WeakMap:Map,Zt=0,ln=null,Ot=null,kt=0,Kt=0,bi=null,_r=!1,as=!1,qh=!1,Ga=0,bn=0,xr=0,po=0,$h=0,Fi=0,rs=0,Vl=null,hi=null,Zh=!1,Kh=0,wu=1/0,Cu=null,yr=null,Yn=0,br=null,os=null,ss=0,Qh=0,Jh=null,mx=null,Xl=0,ep=null;function Si(){if((Zt&2)!==0&&kt!==0)return kt&-kt;if(X.T!==null){var i=qo;return i!==0?i:sp()}return gt()}function gx(){Fi===0&&(Fi=(kt&536870912)===0||Xt?ee():536870912);var i=Bi.current;return i!==null&&(i.flags|=32),Fi}function Mi(i,r,s){(i===ln&&(Kt===2||Kt===9)||i.cancelPendingCommit!==null)&&(ls(i,0),Sr(i,kt,Fi,!1)),ie(i,s),((Zt&2)===0||i!==ln)&&(i===ln&&((Zt&2)===0&&(po|=s),bn===4&&Sr(i,kt,Fi,!1)),_a(i))}function vx(i,r,s){if((Zt&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&i.expiredLanes)===0||st(i,r),d=c?vT(i,r):ip(i,r,!0),g=c;do{if(d===0){as&&!c&&Sr(i,r,0,!1);break}else{if(s=i.current.alternate,g&&!mT(s)){d=ip(i,r,!1),g=!1;continue}if(d===2){if(g=r,i.errorRecoveryDisabledLanes&g)var A=0;else A=i.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){r=A;e:{var P=i;d=Vl;var Y=P.current.memoizedState.isDehydrated;if(Y&&(ls(P,A).flags|=256),A=ip(P,A,!1),A!==2){if(qh&&!Y){P.errorRecoveryDisabledLanes|=g,po|=g,d=4;break e}g=hi,hi=d,g!==null&&(hi===null?hi=g:hi.push.apply(hi,g))}d=A}if(g=!1,d!==2)continue}}if(d===1){ls(i,0),Sr(i,r,0,!0);break}e:{switch(c=i,g=d,g){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Sr(c,r,Fi,!_r);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(d=Kh+300-He(),10<d)){if(Sr(c,r,Fi,!_r),ht(c,0,!0)!==0)break e;c.timeoutHandle=Yx(_x.bind(null,c,s,hi,Cu,Zh,r,Fi,po,rs,_r,g,2,-0,0),d);break e}_x(c,s,hi,Cu,Zh,r,Fi,po,rs,_r,g,0,-0,0)}}break}while(!0);_a(i)}function _x(i,r,s,c,d,g,A,P,Y,de,Ce,Ue,pe,ve){if(i.timeoutHandle=-1,Ue=r.subtreeFlags,(Ue&8192||(Ue&16785408)===16785408)&&(Kl={stylesheets:null,count:0,unsuspend:ZT},fx(r),Ue=QT(),Ue!==null)){i.cancelPendingCommit=Ue(Tx.bind(null,i,r,g,s,c,d,A,P,Y,Ce,1,pe,ve)),Sr(i,g,A,!de);return}Tx(i,r,g,s,c,d,A,P,Y)}function mT(i){for(var r=i;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var d=s[c],g=d.getSnapshot;d=d.value;try{if(!vi(g(),d))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Sr(i,r,s,c){r&=~$h,r&=~po,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var g=31-ke(d),A=1<<g;c[g]=-1,d&=~A}s!==0&&Ie(i,s,r)}function Ru(){return(Zt&6)===0?(jl(0),!1):!0}function tp(){if(Ot!==null){if(Kt===0)var i=Ot.return;else i=Ot,Na=so=null,_h(i),es=null,Ol=0,i=Ot;for(;i!==null;)K_(i.alternate,i),i=i.return;Ot=null}}function ls(i,r){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,PT(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),tp(),ln=i,Ot=s=La(i.current,null),kt=r,Kt=0,bi=null,_r=!1,as=st(i,r),qh=!1,rs=Fi=$h=po=xr=bn=0,hi=Vl=null,Zh=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-ke(c),g=1<<d;r|=i[d],c&=~g}return Ga=r,Kc(),s}function xx(i,r){Rt=null,X.H=gu,r===Al||r===ou?(r=zv(),Kt=3):r===Pv?(r=zv(),Kt=4):Kt=r===B_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,bi=r,Ot===null&&(bn=1,bu(i,Pi(r,i.current)))}function yx(){var i=X.H;return X.H=gu,i===null?gu:i}function bx(){var i=X.A;return X.A=hT,i}function np(){bn=4,_r||(kt&4194048)!==kt&&Bi.current!==null||(as=!0),(xr&134217727)===0&&(po&134217727)===0||ln===null||Sr(ln,kt,Fi,!1)}function ip(i,r,s){var c=Zt;Zt|=2;var d=yx(),g=bx();(ln!==i||kt!==r)&&(Cu=null,ls(i,r)),r=!1;var A=bn;e:do try{if(Kt!==0&&Ot!==null){var P=Ot,Y=bi;switch(Kt){case 8:tp(),A=6;break e;case 3:case 2:case 9:case 6:Bi.current===null&&(r=!0);var de=Kt;if(Kt=0,bi=null,cs(i,P,Y,de),s&&as){A=0;break e}break;default:de=Kt,Kt=0,bi=null,cs(i,P,Y,de)}}gT(),A=bn;break}catch(Ce){xx(i,Ce)}while(!0);return r&&i.shellSuspendCounter++,Na=so=null,Zt=c,X.H=d,X.A=g,Ot===null&&(ln=null,kt=0,Kc()),A}function gT(){for(;Ot!==null;)Sx(Ot)}function vT(i,r){var s=Zt;Zt|=2;var c=yx(),d=bx();ln!==i||kt!==r?(Cu=null,wu=He()+500,ls(i,r)):as=st(i,r);e:do try{if(Kt!==0&&Ot!==null){r=Ot;var g=bi;t:switch(Kt){case 1:Kt=0,bi=null,cs(i,r,g,1);break;case 2:case 9:if(Nv(g)){Kt=0,bi=null,Mx(r);break}r=function(){Kt!==2&&Kt!==9||ln!==i||(Kt=7),_a(i)},g.then(r,r);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:Nv(g)?(Kt=0,bi=null,Mx(r)):(Kt=0,bi=null,cs(i,r,g,7));break;case 5:var A=null;switch(Ot.tag){case 26:A=Ot.memoizedState;case 5:case 27:var P=Ot;if(!A||ay(A)){Kt=0,bi=null;var Y=P.sibling;if(Y!==null)Ot=Y;else{var de=P.return;de!==null?(Ot=de,Du(de)):Ot=null}break t}}Kt=0,bi=null,cs(i,r,g,5);break;case 6:Kt=0,bi=null,cs(i,r,g,6);break;case 8:tp(),bn=6;break e;default:throw Error(a(462))}}_T();break}catch(Ce){xx(i,Ce)}while(!0);return Na=so=null,X.H=c,X.A=d,Zt=s,Ot!==null?0:(ln=null,kt=0,Kc(),bn)}function _T(){for(;Ot!==null&&!Le();)Sx(Ot)}function Sx(i){var r=$_(i.alternate,i,Ga);i.memoizedProps=i.pendingProps,r===null?Du(i):Ot=r}function Mx(i){var r=i,s=r.alternate;switch(r.tag){case 15:case 0:r=V_(s,r,r.pendingProps,r.type,void 0,kt);break;case 11:r=V_(s,r,r.pendingProps,r.type.render,r.ref,kt);break;case 5:_h(r);default:K_(s,r),r=Ot=Ev(r,Ga),r=$_(s,r,Ga)}i.memoizedProps=i.pendingProps,r===null?Du(i):Ot=r}function cs(i,r,s,c){Na=so=null,_h(r),es=null,Ol=0;var d=r.return;try{if(sT(i,d,r,s,kt)){bn=1,bu(i,Pi(s,i.current)),Ot=null;return}}catch(g){if(d!==null)throw Ot=d,g;bn=1,bu(i,Pi(s,i.current)),Ot=null;return}r.flags&32768?(Xt||c===1?i=!0:as||(kt&536870912)!==0?i=!1:(_r=i=!0,(c===2||c===9||c===3||c===6)&&(c=Bi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Ex(r,i)):Du(r)}function Du(i){var r=i;do{if((r.flags&32768)!==0){Ex(r,_r);return}i=r.return;var s=cT(r.alternate,r,Ga);if(s!==null){Ot=s;return}if(r=r.sibling,r!==null){Ot=r;return}Ot=r=i}while(r!==null);bn===0&&(bn=5)}function Ex(i,r){do{var s=uT(i.alternate,i);if(s!==null){s.flags&=32767,Ot=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(i=i.sibling,i!==null)){Ot=i;return}Ot=i=s}while(i!==null);bn=6,Ot=null}function Tx(i,r,s,c,d,g,A,P,Y){i.cancelPendingCommit=null;do Lu();while(Yn!==0);if((Zt&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(g=r.lanes|r.childLanes,g|=Wd,Me(i,s,g,A,P,Y),i===ln&&(Ot=ln=null,kt=0),os=r,br=i,ss=s,Qh=g,Jh=d,mx=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,ST(k,function(){return Dx(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=X.T,X.T=null,d=J.p,J.p=2,A=Zt,Zt|=4;try{fT(i,r,s)}finally{Zt=A,J.p=d,X.T=c}}Yn=1,Ax(),wx(),Cx()}}function Ax(){if(Yn===1){Yn=0;var i=br,r=os,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=X.T,X.T=null;var c=J.p;J.p=2;var d=Zt;Zt|=4;try{lx(r,i);var g=mp,A=pv(i.containerInfo),P=g.focusedElem,Y=g.selectionRange;if(A!==P&&P&&P.ownerDocument&&hv(P.ownerDocument.documentElement,P)){if(Y!==null&&Gd(P)){var de=Y.start,Ce=Y.end;if(Ce===void 0&&(Ce=de),"selectionStart"in P)P.selectionStart=de,P.selectionEnd=Math.min(Ce,P.value.length);else{var Ue=P.ownerDocument||document,pe=Ue&&Ue.defaultView||window;if(pe.getSelection){var ve=pe.getSelection(),yt=P.textContent.length,vt=Math.min(Y.start,yt),tn=Y.end===void 0?vt:Math.min(Y.end,yt);!ve.extend&&vt>tn&&(A=tn,tn=vt,vt=A);var se=dv(P,vt),Q=dv(P,tn);if(se&&Q&&(ve.rangeCount!==1||ve.anchorNode!==se.node||ve.anchorOffset!==se.offset||ve.focusNode!==Q.node||ve.focusOffset!==Q.offset)){var fe=Ue.createRange();fe.setStart(se.node,se.offset),ve.removeAllRanges(),vt>tn?(ve.addRange(fe),ve.extend(Q.node,Q.offset)):(fe.setEnd(Q.node,Q.offset),ve.addRange(fe))}}}}for(Ue=[],ve=P;ve=ve.parentNode;)ve.nodeType===1&&Ue.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof P.focus=="function"&&P.focus(),P=0;P<Ue.length;P++){var Re=Ue[P];Re.element.scrollLeft=Re.left,Re.element.scrollTop=Re.top}}Vu=!!pp,mp=pp=null}finally{Zt=d,J.p=c,X.T=s}}i.current=r,Yn=2}}function wx(){if(Yn===2){Yn=0;var i=br,r=os,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=X.T,X.T=null;var c=J.p;J.p=2;var d=Zt;Zt|=4;try{ax(i,r.alternate,r)}finally{Zt=d,J.p=c,X.T=s}}Yn=3}}function Cx(){if(Yn===4||Yn===3){Yn=0,Oe();var i=br,r=os,s=ss,c=mx;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Yn=5:(Yn=0,os=br=null,Rx(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(yr=null),Pt(s),r=r.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(me,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=X.T,d=J.p,J.p=2,X.T=null;try{for(var g=i.onRecoverableError,A=0;A<c.length;A++){var P=c[A];g(P.value,{componentStack:P.stack})}}finally{X.T=r,J.p=d}}(ss&3)!==0&&Lu(),_a(i),d=i.pendingLanes,(s&4194090)!==0&&(d&42)!==0?i===ep?Xl++:(Xl=0,ep=i):Xl=0,jl(0)}}function Rx(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,El(r)))}function Lu(i){return Ax(),wx(),Cx(),Dx()}function Dx(){if(Yn!==5)return!1;var i=br,r=Qh;Qh=0;var s=Pt(ss),c=X.T,d=J.p;try{J.p=32>s?32:s,X.T=null,s=Jh,Jh=null;var g=br,A=ss;if(Yn=0,os=br=null,ss=0,(Zt&6)!==0)throw Error(a(331));var P=Zt;if(Zt|=4,hx(g.current),ux(g,g.current,A,s),Zt=P,jl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(me,g)}catch{}return!0}finally{J.p=d,X.T=c,Rx(i,r)}}function Lx(i,r,s){r=Pi(s,r),r=Uh(i.stateNode,r,2),i=fr(i,r,2),i!==null&&(ie(i,2),_a(i))}function rn(i,r,s){if(i.tag===3)Lx(i,i,s);else for(;r!==null;){if(r.tag===3){Lx(r,i,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){i=Pi(s,i),s=O_(2),c=fr(r,s,2),c!==null&&(z_(s,c,r,i),ie(c,2),_a(c));break}}r=r.return}}function ap(i,r,s){var c=i.pingCache;if(c===null){c=i.pingCache=new pT;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(s)||(qh=!0,d.add(s),i=xT.bind(null,i,r,s),r.then(i,i))}function xT(i,r,s){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,ln===i&&(kt&s)===s&&(bn===4||bn===3&&(kt&62914560)===kt&&300>He()-Kh?(Zt&2)===0&&ls(i,0):$h|=s,rs===kt&&(rs=0)),_a(i)}function Ux(i,r){r===0&&(r=qe()),i=Xo(i,r),i!==null&&(ie(i,r),_a(i))}function yT(i){var r=i.memoizedState,s=0;r!==null&&(s=r.retryLane),Ux(i,s)}function bT(i,r){var s=0;switch(i.tag){case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(s=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),Ux(i,s)}function ST(i,r){return et(i,r)}var Uu=null,us=null,rp=!1,Pu=!1,op=!1,mo=0;function _a(i){i!==us&&i.next===null&&(us===null?Uu=us=i:us=us.next=i),Pu=!0,rp||(rp=!0,ET())}function jl(i,r){if(!op&&Pu){op=!0;do for(var s=!1,c=Uu;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var A=c.suspendedLanes,P=c.pingedLanes;g=(1<<31-ke(42|i)+1)-1,g&=d&~(A&~P),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,zx(c,g))}else g=kt,g=ht(c,c===ln?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||st(c,g)||(s=!0,zx(c,g));c=c.next}while(s);op=!1}}function MT(){Px()}function Px(){Pu=rp=!1;var i=0;mo!==0&&(UT()&&(i=mo),mo=0);for(var r=He(),s=null,c=Uu;c!==null;){var d=c.next,g=Nx(c,r);g===0?(c.next=null,s===null?Uu=d:s.next=d,d===null&&(us=s)):(s=c,(i!==0||(g&3)!==0)&&(Pu=!0)),c=d}jl(i)}function Nx(i,r){for(var s=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var A=31-ke(g),P=1<<A,Y=d[A];Y===-1?((P&s)===0||(P&c)!==0)&&(d[A]=Bt(P,r)):Y<=r&&(i.expiredLanes|=P),g&=~P}if(r=ln,s=kt,s=ht(i,i===r?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===r&&(Kt===2||Kt===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&N(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||st(i,s)){if(r=s&-s,r===i.callbackPriority)return r;switch(c!==null&&N(c),Pt(s)){case 2:case 8:s=Pe;break;case 32:s=k;break;case 268435456:s=ae;break;default:s=k}return c=Ox.bind(null,i),s=et(s,c),i.callbackPriority=r,i.callbackNode=s,r}return c!==null&&c!==null&&N(c),i.callbackPriority=2,i.callbackNode=null,2}function Ox(i,r){if(Yn!==0&&Yn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(Lu()&&i.callbackNode!==s)return null;var c=kt;return c=ht(i,i===ln?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(vx(i,c,r),Nx(i,He()),i.callbackNode!=null&&i.callbackNode===s?Ox.bind(null,i):null)}function zx(i,r){if(Lu())return null;vx(i,r,!0)}function ET(){NT(function(){(Zt&6)!==0?et(nt,MT):Px()})}function sp(){return mo===0&&(mo=ee()),mo}function Bx(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ci(""+i)}function Fx(i,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,i.id&&s.setAttribute("form",i.id),r.parentNode.insertBefore(s,r),i=new FormData(i),s.parentNode.removeChild(s),i}function TT(i,r,s,c,d){if(r==="submit"&&s&&s.stateNode===d){var g=Bx((d[Nt]||null).action),A=c.submitter;A&&(r=(r=A[Nt]||null)?Bx(r.formAction):A.getAttribute("formAction"),r!==null&&(g=r,A=null));var P=new qc("action","action",null,c,d);i.push({event:P,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(mo!==0){var Y=A?Fx(d,A):new FormData(d);wh(s,{pending:!0,data:Y,method:d.method,action:g},null,Y)}}else typeof g=="function"&&(P.preventDefault(),Y=A?Fx(d,A):new FormData(d),wh(s,{pending:!0,data:Y,method:d.method,action:g},g,Y))},currentTarget:d}]})}}for(var lp=0;lp<Yd.length;lp++){var cp=Yd[lp],AT=cp.toLowerCase(),wT=cp[0].toUpperCase()+cp.slice(1);qi(AT,"on"+wT)}qi(vv,"onAnimationEnd"),qi(_v,"onAnimationIteration"),qi(xv,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(XE,"onTransitionRun"),qi(jE,"onTransitionStart"),qi(YE,"onTransitionCancel"),qi(yv,"onTransitionEnd"),z("onMouseEnter",["mouseout","mouseover"]),z("onMouseLeave",["mouseout","mouseover"]),z("onPointerEnter",["pointerout","pointerover"]),z("onPointerLeave",["pointerout","pointerover"]),Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function Ix(i,r){r=(r&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],d=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var P=c[A],Y=P.instance,de=P.currentTarget;if(P=P.listener,Y!==g&&d.isPropagationStopped())break e;g=P,d.currentTarget=de;try{g(d)}catch(Ce){yu(Ce)}d.currentTarget=null,g=Y}else for(A=0;A<c.length;A++){if(P=c[A],Y=P.instance,de=P.currentTarget,P=P.listener,Y!==g&&d.isPropagationStopped())break e;g=P,d.currentTarget=de;try{g(d)}catch(Ce){yu(Ce)}d.currentTarget=null,g=Y}}}}function zt(i,r){var s=r[Vn];s===void 0&&(s=r[Vn]=new Set);var c=i+"__bubble";s.has(c)||(kx(r,i,2,!1),s.add(c))}function up(i,r,s){var c=0;r&&(c|=4),kx(s,i,c,r)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function fp(i){if(!i[Nu]){i[Nu]=!0,Bo.forEach(function(s){s!=="selectionchange"&&(CT.has(s)||up(s,!1,i),up(s,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Nu]||(r[Nu]=!0,up("selectionchange",!1,r))}}function kx(i,r,s,c){switch(uy(r)){case 2:var d=t2;break;case 8:d=n2;break;default:d=Tp}s=d.bind(null,r,s,i),d=void 0,!Pd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,s,{capture:!0,passive:d}):i.addEventListener(r,s,!0):d!==void 0?i.addEventListener(r,s,{passive:d}):i.addEventListener(r,s,!1)}function dp(i,r,s,c,d){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var P=c.stateNode.containerInfo;if(P===d)break;if(A===4)for(A=c.return;A!==null;){var Y=A.tag;if((Y===3||Y===4)&&A.stateNode.containerInfo===d)return;A=A.return}for(;P!==null;){if(A=ji(P),A===null)return;if(Y=A.tag,Y===5||Y===6||Y===26||Y===27){c=g=A;continue e}P=P.parentNode}}c=c.return}ha(function(){var de=g,Ce=Ui(s),Ue=[];e:{var pe=bv.get(i);if(pe!==void 0){var ve=qc,yt=i;switch(i){case"keypress":if(Yc(s)===0)break e;case"keydown":case"keyup":ve=SE;break;case"focusin":yt="focus",ve=Bd;break;case"focusout":yt="blur",ve=Bd;break;case"beforeblur":case"afterblur":ve=Bd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=uE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=TE;break;case vv:case _v:case xv:ve=hE;break;case yv:ve=wE;break;case"scroll":case"scrollend":ve=lE;break;case"wheel":ve=RE;break;case"copy":case"cut":case"paste":ve=mE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Q0;break;case"toggle":case"beforetoggle":ve=LE}var vt=(r&4)!==0,tn=!vt&&(i==="scroll"||i==="scrollend"),se=vt?pe!==null?pe+"Capture":null:pe;vt=[];for(var Q=de,fe;Q!==null;){var Re=Q;if(fe=Re.stateNode,Re=Re.tag,Re!==5&&Re!==26&&Re!==27||fe===null||se===null||(Re=Xn(Q,se),Re!=null&&vt.push(Wl(Q,Re,fe))),tn)break;Q=Q.return}0<vt.length&&(pe=new ve(pe,yt,null,s,Ce),Ue.push({event:pe,listeners:vt}))}}if((r&7)===0){e:{if(pe=i==="mouseover"||i==="pointerover",ve=i==="mouseout"||i==="pointerout",pe&&s!==Li&&(yt=s.relatedTarget||s.fromElement)&&(ji(yt)||yt[Un]))break e;if((ve||pe)&&(pe=Ce.window===Ce?Ce:(pe=Ce.ownerDocument)?pe.defaultView||pe.parentWindow:window,ve?(yt=s.relatedTarget||s.toElement,ve=de,yt=yt?ji(yt):null,yt!==null&&(tn=l(yt),vt=yt.tag,yt!==tn||vt!==5&&vt!==27&&vt!==6)&&(yt=null)):(ve=null,yt=de),ve!==yt)){if(vt=Z0,Re="onMouseLeave",se="onMouseEnter",Q="mouse",(i==="pointerout"||i==="pointerover")&&(vt=Q0,Re="onPointerLeave",se="onPointerEnter",Q="pointer"),tn=ve==null?pe:wa(ve),fe=yt==null?pe:wa(yt),pe=new vt(Re,Q+"leave",ve,s,Ce),pe.target=tn,pe.relatedTarget=fe,Re=null,ji(Ce)===de&&(vt=new vt(se,Q+"enter",yt,s,Ce),vt.target=fe,vt.relatedTarget=tn,Re=vt),tn=Re,ve&&yt)t:{for(vt=ve,se=yt,Q=0,fe=vt;fe;fe=fs(fe))Q++;for(fe=0,Re=se;Re;Re=fs(Re))fe++;for(;0<Q-fe;)vt=fs(vt),Q--;for(;0<fe-Q;)se=fs(se),fe--;for(;Q--;){if(vt===se||se!==null&&vt===se.alternate)break t;vt=fs(vt),se=fs(se)}vt=null}else vt=null;ve!==null&&Hx(Ue,pe,ve,vt,!1),yt!==null&&tn!==null&&Hx(Ue,tn,yt,vt,!0)}}e:{if(pe=de?wa(de):window,ve=pe.nodeName&&pe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&pe.type==="file")var ot=ov;else if(av(pe))if(sv)ot=HE;else{ot=IE;var Lt=FE}else ve=pe.nodeName,!ve||ve.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?de&&Qr(de.elementType)&&(ot=ov):ot=kE;if(ot&&(ot=ot(i,de))){rv(Ue,ot,s,Ce);break e}Lt&&Lt(i,pe,de),i==="focusout"&&de&&pe.type==="number"&&de.memoizedProps.value!=null&&Bn(pe,"number",pe.value)}switch(Lt=de?wa(de):window,i){case"focusin":(av(Lt)||Lt.contentEditable==="true")&&(Ho=Lt,Vd=de,xl=null);break;case"focusout":xl=Vd=Ho=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,mv(Ue,s,Ce);break;case"selectionchange":if(VE)break;case"keydown":case"keyup":mv(Ue,s,Ce)}var ft;if(Id)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ko?nv(i,s)&&(xt="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(xt="onCompositionStart");xt&&(J0&&s.locale!=="ko"&&(ko||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ko&&(ft=q0()):(sr=Ce,Nd="value"in sr?sr.value:sr.textContent,ko=!0)),Lt=Ou(de,xt),0<Lt.length&&(xt=new K0(xt,i,null,s,Ce),Ue.push({event:xt,listeners:Lt}),ft?xt.data=ft:(ft=iv(s),ft!==null&&(xt.data=ft)))),(ft=PE?NE(i,s):OE(i,s))&&(xt=Ou(de,"onBeforeInput"),0<xt.length&&(Lt=new K0("onBeforeInput","beforeinput",null,s,Ce),Ue.push({event:Lt,listeners:xt}),Lt.data=ft)),TT(Ue,i,de,s,Ce)}Ix(Ue,r)})}function Wl(i,r,s){return{instance:i,listener:r,currentTarget:s}}function Ou(i,r){for(var s=r+"Capture",c=[];i!==null;){var d=i,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=Xn(i,s),d!=null&&c.unshift(Wl(i,d,g)),d=Xn(i,r),d!=null&&c.push(Wl(i,d,g))),i.tag===3)return c;i=i.return}return[]}function fs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function Hx(i,r,s,c,d){for(var g=r._reactName,A=[];s!==null&&s!==c;){var P=s,Y=P.alternate,de=P.stateNode;if(P=P.tag,Y!==null&&Y===c)break;P!==5&&P!==26&&P!==27||de===null||(Y=de,d?(de=Xn(s,g),de!=null&&A.unshift(Wl(s,de,Y))):d||(de=Xn(s,g),de!=null&&A.push(Wl(s,de,Y)))),s=s.return}A.length!==0&&i.push({event:r,listeners:A})}var RT=/\r\n?/g,DT=/\u0000|\uFFFD/g;function Gx(i){return(typeof i=="string"?i:""+i).replace(RT,`
`).replace(DT,"")}function Vx(i,r){return r=Gx(r),Gx(i)===r}function zu(){}function en(i,r,s,c,d,g){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||li(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&li(i,""+c);break;case"className":Ee(i,"class",c);break;case"tabIndex":Ee(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ee(i,s,c);break;case"style":Vc(i,c,g);break;case"data":if(r!=="object"){Ee(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=ci(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(r!=="input"&&en(i,r,"name",d.name,d,null),en(i,r,"formEncType",d.formEncType,d,null),en(i,r,"formMethod",d.formMethod,d,null),en(i,r,"formTarget",d.formTarget,d,null)):(en(i,r,"encType",d.encType,d,null),en(i,r,"method",d.method,d,null),en(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=ci(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=zu);break;case"onScroll":c!=null&&zt("scroll",i);break;case"onScrollEnd":c!=null&&zt("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(d.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=ci(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":zt("beforetoggle",i),zt("toggle",i),le(i,"popover",c);break;case"xlinkActuate":ze(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ze(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ze(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ze(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ze(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ze(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ze(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ze(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ze(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":le(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Qt.get(s)||s,le(i,s,c))}}function hp(i,r,s,c,d,g){switch(s){case"style":Vc(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(d.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"children":typeof c=="string"?li(i,c):(typeof c=="number"||typeof c=="bigint")&&li(i,""+c);break;case"onScroll":c!=null&&zt("scroll",i);break;case"onScrollEnd":c!=null&&zt("scrollend",i);break;case"onClick":c!=null&&(i.onclick=zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),r=s.slice(2,d?s.length-7:void 0),g=i[Nt]||null,g=g!=null?g[s]:null,typeof g=="function"&&i.removeEventListener(r,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(r,c,d);break e}s in i?i[s]=c:c===!0?i.setAttribute(s,""):le(i,s,c)}}}function Wn(i,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",i),zt("load",i);var c=!1,d=!1,g;for(g in s)if(s.hasOwnProperty(g)){var A=s[g];if(A!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:en(i,r,g,A,s,null)}}d&&en(i,r,"srcSet",s.srcSet,s,null),c&&en(i,r,"src",s.src,s,null);return;case"input":zt("invalid",i);var P=g=A=d=null,Y=null,de=null;for(c in s)if(s.hasOwnProperty(c)){var Ce=s[c];if(Ce!=null)switch(c){case"name":d=Ce;break;case"type":A=Ce;break;case"checked":Y=Ce;break;case"defaultChecked":de=Ce;break;case"value":g=Ce;break;case"defaultValue":P=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,r));break;default:en(i,r,c,Ce,s,null)}}$t(i,g,P,Y,de,A,d,!1),Dt(i);return;case"select":zt("invalid",i),c=A=g=null;for(d in s)if(s.hasOwnProperty(d)&&(P=s[d],P!=null))switch(d){case"value":g=P;break;case"defaultValue":A=P;break;case"multiple":c=P;default:en(i,r,d,P,s,null)}r=g,s=A,i.multiple=!!c,r!=null?Sn(i,!!c,r,!1):s!=null&&Sn(i,!!c,s,!0);return;case"textarea":zt("invalid",i),g=d=c=null;for(A in s)if(s.hasOwnProperty(A)&&(P=s[A],P!=null))switch(A){case"value":c=P;break;case"defaultValue":d=P;break;case"children":g=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(91));break;default:en(i,r,A,P,s,null)}Mn(i,c,d,g),Dt(i);return;case"option":for(Y in s)if(s.hasOwnProperty(Y)&&(c=s[Y],c!=null))switch(Y){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:en(i,r,Y,c,s,null)}return;case"dialog":zt("beforetoggle",i),zt("toggle",i),zt("cancel",i),zt("close",i);break;case"iframe":case"object":zt("load",i);break;case"video":case"audio":for(c=0;c<Yl.length;c++)zt(Yl[c],i);break;case"image":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"embed":case"source":case"link":zt("error",i),zt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in s)if(s.hasOwnProperty(de)&&(c=s[de],c!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:en(i,r,de,c,s,null)}return;default:if(Qr(r)){for(Ce in s)s.hasOwnProperty(Ce)&&(c=s[Ce],c!==void 0&&hp(i,r,Ce,c,s,void 0));return}}for(P in s)s.hasOwnProperty(P)&&(c=s[P],c!=null&&en(i,r,P,c,s,null))}function LT(i,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,A=null,P=null,Y=null,de=null,Ce=null;for(ve in s){var Ue=s[ve];if(s.hasOwnProperty(ve)&&Ue!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":Y=Ue;default:c.hasOwnProperty(ve)||en(i,r,ve,null,c,Ue)}}for(var pe in c){var ve=c[pe];if(Ue=s[pe],c.hasOwnProperty(pe)&&(ve!=null||Ue!=null))switch(pe){case"type":g=ve;break;case"name":d=ve;break;case"checked":de=ve;break;case"defaultChecked":Ce=ve;break;case"value":A=ve;break;case"defaultValue":P=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,r));break;default:ve!==Ue&&en(i,r,pe,ve,c,Ue)}}Di(i,A,P,Y,de,Ce,g,d);return;case"select":ve=A=P=pe=null;for(g in s)if(Y=s[g],s.hasOwnProperty(g)&&Y!=null)switch(g){case"value":break;case"multiple":ve=Y;default:c.hasOwnProperty(g)||en(i,r,g,null,c,Y)}for(d in c)if(g=c[d],Y=s[d],c.hasOwnProperty(d)&&(g!=null||Y!=null))switch(d){case"value":pe=g;break;case"defaultValue":P=g;break;case"multiple":A=g;default:g!==Y&&en(i,r,d,g,c,Y)}r=P,s=A,c=ve,pe!=null?Sn(i,!!s,pe,!1):!!c!=!!s&&(r!=null?Sn(i,!!s,r,!0):Sn(i,!!s,s?[]:"",!1));return;case"textarea":ve=pe=null;for(P in s)if(d=s[P],s.hasOwnProperty(P)&&d!=null&&!c.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:en(i,r,P,null,c,d)}for(A in c)if(d=c[A],g=s[A],c.hasOwnProperty(A)&&(d!=null||g!=null))switch(A){case"value":pe=d;break;case"defaultValue":ve=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==g&&en(i,r,A,d,c,g)}wn(i,pe,ve);return;case"option":for(var yt in s)if(pe=s[yt],s.hasOwnProperty(yt)&&pe!=null&&!c.hasOwnProperty(yt))switch(yt){case"selected":i.selected=!1;break;default:en(i,r,yt,null,c,pe)}for(Y in c)if(pe=c[Y],ve=s[Y],c.hasOwnProperty(Y)&&pe!==ve&&(pe!=null||ve!=null))switch(Y){case"selected":i.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:en(i,r,Y,pe,c,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var vt in s)pe=s[vt],s.hasOwnProperty(vt)&&pe!=null&&!c.hasOwnProperty(vt)&&en(i,r,vt,null,c,pe);for(de in c)if(pe=c[de],ve=s[de],c.hasOwnProperty(de)&&pe!==ve&&(pe!=null||ve!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,r));break;default:en(i,r,de,pe,c,ve)}return;default:if(Qr(r)){for(var tn in s)pe=s[tn],s.hasOwnProperty(tn)&&pe!==void 0&&!c.hasOwnProperty(tn)&&hp(i,r,tn,void 0,c,pe);for(Ce in c)pe=c[Ce],ve=s[Ce],!c.hasOwnProperty(Ce)||pe===ve||pe===void 0&&ve===void 0||hp(i,r,Ce,pe,c,ve);return}}for(var se in s)pe=s[se],s.hasOwnProperty(se)&&pe!=null&&!c.hasOwnProperty(se)&&en(i,r,se,null,c,pe);for(Ue in c)pe=c[Ue],ve=s[Ue],!c.hasOwnProperty(Ue)||pe===ve||pe==null&&ve==null||en(i,r,Ue,pe,c,ve)}var pp=null,mp=null;function Bu(i){return i.nodeType===9?i:i.ownerDocument}function Xx(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jx(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function gp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vp=null;function UT(){var i=window.event;return i&&i.type==="popstate"?i===vp?!1:(vp=i,!0):(vp=null,!1)}var Yx=typeof setTimeout=="function"?setTimeout:void 0,PT=typeof clearTimeout=="function"?clearTimeout:void 0,Wx=typeof Promise=="function"?Promise:void 0,NT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wx<"u"?function(i){return Wx.resolve(null).then(i).catch(OT)}:Yx;function OT(i){setTimeout(function(){throw i})}function Mr(i){return i==="head"}function qx(i,r){var s=r,c=0,d=0;do{var g=s.nextSibling;if(i.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<c&&8>c){s=c;var A=i.ownerDocument;if(s&1&&ql(A.documentElement),s&2&&ql(A.body),s&4)for(s=A.head,ql(s),A=s.firstChild;A;){var P=A.nextSibling,Y=A.nodeName;A[ca]||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&A.rel.toLowerCase()==="stylesheet"||s.removeChild(A),A=P}}if(d===0){i.removeChild(g),nc(r);return}d--}else s==="$"||s==="$?"||s==="$!"?d++:c=s.charCodeAt(0)-48;else c=0;s=g}while(s);nc(r)}function _p(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":_p(s),ua(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function zT(i,r,s,c){for(;i.nodeType===1;){var d=s;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ca])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Zi(i.nextSibling),i===null)break}return null}function BT(i,r,s){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=Zi(i.nextSibling),i===null))return null;return i}function xp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function FT(i,r){var s=i.ownerDocument;if(i.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Zi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var yp=null;function $x(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return i;r--}else s==="/$"&&r++}i=i.previousSibling}return null}function Zx(i,r,s){switch(r=Bu(s),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function ql(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);ua(i)}var Ii=new Map,Kx=new Set;function Fu(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Va=J.d;J.d={f:IT,r:kT,D:HT,C:GT,L:VT,m:XT,X:YT,S:jT,M:WT};function IT(){var i=Va.f(),r=Ru();return i||r}function kT(i){var r=Yi(i);r!==null&&r.tag===5&&r.type==="form"?v_(r):Va.r(i)}var ds=typeof document>"u"?null:document;function Qx(i,r,s){var c=ds;if(c&&typeof r=="string"&&r){var d=qt(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),Kx.has(d)||(Kx.add(d),i={rel:i,crossOrigin:s,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),Wn(r,"link",i),xn(r),c.head.appendChild(r)))}}function HT(i){Va.D(i),Qx("dns-prefetch",i,null)}function GT(i,r){Va.C(i,r),Qx("preconnect",i,r)}function VT(i,r,s){Va.L(i,r,s);var c=ds;if(c&&i&&r){var d='link[rel="preload"][as="'+qt(r)+'"]';r==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+qt(s.imageSizes)+'"]')):d+='[href="'+qt(i)+'"]';var g=d;switch(r){case"style":g=hs(i);break;case"script":g=ps(i)}Ii.has(g)||(i=m({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:i,as:r},s),Ii.set(g,i),c.querySelector(d)!==null||r==="style"&&c.querySelector($l(g))||r==="script"&&c.querySelector(Zl(g))||(r=c.createElement("link"),Wn(r,"link",i),xn(r),c.head.appendChild(r)))}}function XT(i,r){Va.m(i,r);var s=ds;if(s&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+qt(c)+'"][href="'+qt(i)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=ps(i)}if(!Ii.has(g)&&(i=m({rel:"modulepreload",href:i},r),Ii.set(g,i),s.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zl(g)))return}c=s.createElement("link"),Wn(c,"link",i),xn(c),s.head.appendChild(c)}}}function jT(i,r,s){Va.S(i,r,s);var c=ds;if(c&&i){var d=fa(c).hoistableStyles,g=hs(i);r=r||"default";var A=d.get(g);if(!A){var P={loading:0,preload:null};if(A=c.querySelector($l(g)))P.loading=5;else{i=m({rel:"stylesheet",href:i,"data-precedence":r},s),(s=Ii.get(g))&&bp(i,s);var Y=A=c.createElement("link");xn(Y),Wn(Y,"link",i),Y._p=new Promise(function(de,Ce){Y.onload=de,Y.onerror=Ce}),Y.addEventListener("load",function(){P.loading|=1}),Y.addEventListener("error",function(){P.loading|=2}),P.loading|=4,Iu(A,r,c)}A={type:"stylesheet",instance:A,count:1,state:P},d.set(g,A)}}}function YT(i,r){Va.X(i,r);var s=ds;if(s&&i){var c=fa(s).hoistableScripts,d=ps(i),g=c.get(d);g||(g=s.querySelector(Zl(d)),g||(i=m({src:i,async:!0},r),(r=Ii.get(d))&&Sp(i,r),g=s.createElement("script"),xn(g),Wn(g,"link",i),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function WT(i,r){Va.M(i,r);var s=ds;if(s&&i){var c=fa(s).hoistableScripts,d=ps(i),g=c.get(d);g||(g=s.querySelector(Zl(d)),g||(i=m({src:i,async:!0,type:"module"},r),(r=Ii.get(d))&&Sp(i,r),g=s.createElement("script"),xn(g),Wn(g,"link",i),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function Jx(i,r,s,c){var d=(d=ce.current)?Fu(d):null;if(!d)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=hs(s.href),s=fa(d).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=hs(s.href);var g=fa(d).hoistableStyles,A=g.get(i);if(A||(d=d.ownerDocument||d,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,A),(g=d.querySelector($l(i)))&&!g._p&&(A.instance=g,A.state.loading=5),Ii.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ii.set(i,s),g||qT(d,i,s,A.state))),r&&c===null)throw Error(a(528,""));return A}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ps(s),s=fa(d).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function hs(i){return'href="'+qt(i)+'"'}function $l(i){return'link[rel="stylesheet"]['+i+"]"}function ey(i){return m({},i,{"data-precedence":i.precedence,precedence:null})}function qT(i,r,s,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Wn(r,"link",s),xn(r),i.head.appendChild(r))}function ps(i){return'[src="'+qt(i)+'"]'}function Zl(i){return"script[async]"+i}function ty(i,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+qt(s.href)+'"]');if(c)return r.instance=c,xn(c),c;var d=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),xn(c),Wn(c,"style",d),Iu(c,s.precedence,i),r.instance=c;case"stylesheet":d=hs(s.href);var g=i.querySelector($l(d));if(g)return r.state.loading|=4,r.instance=g,xn(g),g;c=ey(s),(d=Ii.get(d))&&bp(c,d),g=(i.ownerDocument||i).createElement("link"),xn(g);var A=g;return A._p=new Promise(function(P,Y){A.onload=P,A.onerror=Y}),Wn(g,"link",c),r.state.loading|=4,Iu(g,s.precedence,i),r.instance=g;case"script":return g=ps(s.src),(d=i.querySelector(Zl(g)))?(r.instance=d,xn(d),d):(c=s,(d=Ii.get(g))&&(c=m({},s),Sp(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),xn(d),Wn(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Iu(c,s.precedence,i));return r.instance}function Iu(i,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,A=0;A<c.length;A++){var P=c[A];if(P.dataset.precedence===r)g=P;else if(g!==d)break}g?g.parentNode.insertBefore(i,g.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(i,r.firstChild))}function bp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Sp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ku=null;function ny(i,r,s){if(ku===null){var c=new Map,d=ku=new Map;d.set(s,c)}else d=ku,c=d.get(s),c||(c=new Map,d.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),d=0;d<s.length;d++){var g=s[d];if(!(g[ca]||g[jt]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var A=g.getAttribute(r)||"";A=i+A;var P=c.get(A);P?P.push(g):c.set(A,[g])}}return c}function iy(i,r,s){i=i.ownerDocument||i,i.head.insertBefore(s,r==="title"?i.querySelector("head > title"):null)}function $T(i,r,s){if(s===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ay(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Kl=null;function ZT(){}function KT(i,r,s){if(Kl===null)throw Error(a(475));var c=Kl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=hs(s.href),g=i.querySelector($l(d));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Hu.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=g,xn(g);return}g=i.ownerDocument||i,s=ey(s),(d=Ii.get(d))&&bp(s,d),g=g.createElement("link"),xn(g);var A=g;A._p=new Promise(function(P,Y){A.onload=P,A.onerror=Y}),Wn(g,"link",s),r.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Hu.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function QT(){if(Kl===null)throw Error(a(475));var i=Kl;return i.stylesheets&&i.count===0&&Mp(i,i.stylesheets),0<i.count?function(r){var s=setTimeout(function(){if(i.stylesheets&&Mp(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(s)}}:null}function Hu(){if(this.count--,this.count===0){if(this.stylesheets)Mp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Gu=null;function Mp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Gu=new Map,r.forEach(JT,i),Gu=null,Hu.call(i))}function JT(i,r){if(!(r.state.loading&4)){var s=Gu.get(i);if(s)var c=s.get(null);else{s=new Map,Gu.set(i,s);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var A=d[g];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(s.set(A.dataset.precedence,A),c=A)}c&&s.set(null,c)}d=r.instance,A=d.getAttribute("data-precedence"),g=s.get(A)||c,g===c&&s.set(null,d),s.set(A,d),this.count++,c=Hu.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Ql={$$typeof:w,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function e2(i,r,s,c,d,g,A,P){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=I(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=I(0),this.hiddenUpdates=I(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function ry(i,r,s,c,d,g,A,P,Y,de,Ce,Ue){return i=new e2(i,r,s,A,P,Y,de,Ue),r=1,g===!0&&(r|=24),g=_i(3,null,null,r),i.current=g,g.stateNode=i,r=ah(),r.refCount++,i.pooledCache=r,r.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:r},lh(g),i}function oy(i){return i?(i=jo,i):jo}function sy(i,r,s,c,d,g){d=oy(d),c.context===null?c.context=d:c.pendingContext=d,c=ur(r),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=fr(i,c,r),s!==null&&(Mi(s,i,r),Cl(s,i,r))}function ly(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<r?s:r}}function Ep(i,r){ly(i,r),(i=i.alternate)&&ly(i,r)}function cy(i){if(i.tag===13){var r=Xo(i,67108864);r!==null&&Mi(r,i,67108864),Ep(i,67108864)}}var Vu=!0;function t2(i,r,s,c){var d=X.T;X.T=null;var g=J.p;try{J.p=2,Tp(i,r,s,c)}finally{J.p=g,X.T=d}}function n2(i,r,s,c){var d=X.T;X.T=null;var g=J.p;try{J.p=8,Tp(i,r,s,c)}finally{J.p=g,X.T=d}}function Tp(i,r,s,c){if(Vu){var d=Ap(c);if(d===null)dp(i,r,c,Xu,s),fy(i,c);else if(a2(d,i,r,s,c))c.stopPropagation();else if(fy(i,c),r&4&&-1<i2.indexOf(i)){for(;d!==null;){var g=Yi(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var A=Xe(g.pendingLanes);if(A!==0){var P=g;for(P.pendingLanes|=2,P.entangledLanes|=2;A;){var Y=1<<31-ke(A);P.entanglements[1]|=Y,A&=~Y}_a(g),(Zt&6)===0&&(wu=He()+500,jl(0))}}break;case 13:P=Xo(g,2),P!==null&&Mi(P,g,2),Ru(),Ep(g,2)}if(g=Ap(c),g===null&&dp(i,r,c,Xu,s),g===d)break;d=g}d!==null&&c.stopPropagation()}else dp(i,r,c,null,s)}}function Ap(i){return i=Ui(i),wp(i)}var Xu=null;function wp(i){if(Xu=null,i=ji(i),i!==null){var r=l(i);if(r===null)i=null;else{var s=r.tag;if(s===13){if(i=u(r),i!==null)return i;i=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Xu=i,null}function uy(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(je()){case nt:return 2;case Pe:return 8;case k:case C:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Cp=!1,Er=null,Tr=null,Ar=null,Jl=new Map,ec=new Map,wr=[],i2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fy(i,r){switch(i){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Jl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ec.delete(r.pointerId)}}function tc(i,r,s,c,d,g){return i===null||i.nativeEvent!==g?(i={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},r!==null&&(r=Yi(r),r!==null&&cy(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function a2(i,r,s,c,d){switch(r){case"focusin":return Er=tc(Er,i,r,s,c,d),!0;case"dragenter":return Tr=tc(Tr,i,r,s,c,d),!0;case"mouseover":return Ar=tc(Ar,i,r,s,c,d),!0;case"pointerover":var g=d.pointerId;return Jl.set(g,tc(Jl.get(g)||null,i,r,s,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ec.set(g,tc(ec.get(g)||null,i,r,s,c,d)),!0}return!1}function dy(i){var r=ji(i.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){i.blockedOn=r,fn(i.priority,function(){if(s.tag===13){var c=Si();c=Ut(c);var d=Xo(s,c);d!==null&&Mi(d,s,c),Ep(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ju(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var s=Ap(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);Li=c,s.target.dispatchEvent(c),Li=null}else return r=Yi(s),r!==null&&cy(r),i.blockedOn=s,!1;r.shift()}return!0}function hy(i,r,s){ju(i)&&s.delete(r)}function r2(){Cp=!1,Er!==null&&ju(Er)&&(Er=null),Tr!==null&&ju(Tr)&&(Tr=null),Ar!==null&&ju(Ar)&&(Ar=null),Jl.forEach(hy),ec.forEach(hy)}function Yu(i,r){i.blockedOn===r&&(i.blockedOn=null,Cp||(Cp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,r2)))}var Wu=null;function py(i){Wu!==i&&(Wu=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Wu===i&&(Wu=null);for(var r=0;r<i.length;r+=3){var s=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(wp(c||s)===null)continue;break}var g=Yi(s);g!==null&&(i.splice(r,3),r-=3,wh(g,{pending:!0,data:d,method:s.method,action:c},c,d))}}))}function nc(i){function r(Y){return Yu(Y,i)}Er!==null&&Yu(Er,i),Tr!==null&&Yu(Tr,i),Ar!==null&&Yu(Ar,i),Jl.forEach(r),ec.forEach(r);for(var s=0;s<wr.length;s++){var c=wr[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<wr.length&&(s=wr[0],s.blockedOn===null);)dy(s),s.blockedOn===null&&wr.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var d=s[c],g=s[c+1],A=d[Nt]||null;if(typeof g=="function")A||py(s);else if(A){var P=null;if(g&&g.hasAttribute("formAction")){if(d=g,A=g[Nt]||null)P=A.formAction;else if(wp(d)!==null)continue}else P=A.action;typeof P=="function"?s[c+1]=P:(s.splice(c,3),c-=3),py(s)}}}function Rp(i){this._internalRoot=i}qu.prototype.render=Rp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=Si();sy(s,c,i,r,null,null)},qu.prototype.unmount=Rp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;sy(i.current,2,null,i,null,null),Ru(),r[Un]=null}};function qu(i){this._internalRoot=i}qu.prototype.unstable_scheduleHydration=function(i){if(i){var r=gt();i={blockedOn:null,target:i,priority:r};for(var s=0;s<wr.length&&r!==0&&r<wr[s].priority;s++);wr.splice(s,0,i),s===0&&dy(i)}};var my=e.version;if(my!=="19.1.0")throw Error(a(527,my,"19.1.0"));J.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=h(r),i=i!==null?p(i):null,i=i===null?null:i.stateNode,i};var o2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{me=$u.inject(o2),Fe=$u}catch{}}return ac.createRoot=function(i,r){if(!o(i))throw Error(a(299));var s=!1,c="",d=L_,g=U_,A=P_,P=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(P=r.unstable_transitionCallbacks)),r=ry(i,1,!1,null,null,s,c,d,g,A,P,null),i[Un]=r.current,fp(i),new Rp(r)},ac.hydrateRoot=function(i,r,s){if(!o(i))throw Error(a(299));var c=!1,d="",g=L_,A=U_,P=P_,Y=null,de=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(A=s.onCaughtError),s.onRecoverableError!==void 0&&(P=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(Y=s.unstable_transitionCallbacks),s.formState!==void 0&&(de=s.formState)),r=ry(i,1,!0,r,s??null,c,d,g,A,P,Y,de),r.context=oy(null),s=r.current,c=Si(),c=Ut(c),d=ur(c),d.callback=null,fr(s,d,c),s=c,r.current.lanes=s,ie(r,s),_a(r),i[Un]=r.current,fp(i),new qu(r)},ac.version="19.1.0",ac}var Ty;function g2(){if(Ty)return Up.exports;Ty=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Up.exports=m2(),Up.exports}var v2=g2();const _2=a0(v2);var ti=function(){return ti=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ti.apply(this,arguments)};function Ws(n,e,t){if(t||arguments.length===2)for(var a=0,o=e.length,l;a<o;a++)(l||!(a in e))&&(l||(l=Array.prototype.slice.call(e,0,a)),l[a]=e[a]);return n.concat(l||Array.prototype.slice.call(e))}var dn="-ms-",bc="-moz-",Yt="-webkit-",nS="comm",gd="rule",o0="decl",x2="@import",iS="@keyframes",y2="@layer",aS=Math.abs,s0=String.fromCharCode,Fm=Object.assign;function b2(n,e){return Gn(n,0)^45?(((e<<2^Gn(n,0))<<2^Gn(n,1))<<2^Gn(n,2))<<2^Gn(n,3):0}function rS(n){return n.trim()}function Ka(n,e){return(n=e.exec(n))?n[0]:n}function Ct(n,e,t){return n.replace(e,t)}function Ff(n,e,t){return n.indexOf(e,t)}function Gn(n,e){return n.charCodeAt(e)|0}function qs(n,e,t){return n.slice(e,t)}function ya(n){return n.length}function oS(n){return n.length}function _c(n,e){return e.push(n),n}function S2(n,e){return n.map(e).join("")}function Ay(n,e){return n.filter(function(t){return!Ka(t,e)})}var vd=1,$s=1,sS=0,Vi=0,Ln=0,rl="";function _d(n,e,t,a,o,l,u,f){return{value:n,root:e,parent:t,type:a,props:o,children:l,line:vd,column:$s,length:u,return:"",siblings:f}}function Br(n,e){return Fm(_d("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ms(n){for(;n.root;)n=Br(n.root,{children:[n]});_c(n,n.siblings)}function M2(){return Ln}function E2(){return Ln=Vi>0?Gn(rl,--Vi):0,$s--,Ln===10&&($s=1,vd--),Ln}function oa(){return Ln=Vi<sS?Gn(rl,Vi++):0,$s++,Ln===10&&($s=1,vd++),Ln}function Do(){return Gn(rl,Vi)}function If(){return Vi}function xd(n,e){return qs(rl,n,e)}function Im(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T2(n){return vd=$s=1,sS=ya(rl=n),Vi=0,[]}function A2(n){return rl="",n}function zp(n){return rS(xd(Vi-1,km(n===91?n+2:n===40?n+1:n)))}function w2(n){for(;(Ln=Do())&&Ln<33;)oa();return Im(n)>2||Im(Ln)>3?"":" "}function C2(n,e){for(;--e&&oa()&&!(Ln<48||Ln>102||Ln>57&&Ln<65||Ln>70&&Ln<97););return xd(n,If()+(e<6&&Do()==32&&oa()==32))}function km(n){for(;oa();)switch(Ln){case n:return Vi;case 34:case 39:n!==34&&n!==39&&km(Ln);break;case 40:n===41&&km(n);break;case 92:oa();break}return Vi}function R2(n,e){for(;oa()&&n+Ln!==57;)if(n+Ln===84&&Do()===47)break;return"/*"+xd(e,Vi-1)+"*"+s0(n===47?n:oa())}function D2(n){for(;!Im(Do());)oa();return xd(n,Vi)}function L2(n){return A2(kf("",null,null,null,[""],n=T2(n),0,[0],n))}function kf(n,e,t,a,o,l,u,f,h){for(var p=0,m=0,v=u,_=0,x=0,S=0,T=1,b=1,y=1,O=0,w="",E=o,L=l,B=a,R=w;b;)switch(S=O,O=oa()){case 40:if(S!=108&&Gn(R,v-1)==58){Ff(R+=Ct(zp(O),"&","&\f"),"&\f",aS(p?f[p-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:R+=zp(O);break;case 9:case 10:case 13:case 32:R+=w2(S);break;case 92:R+=C2(If()-1,7);continue;case 47:switch(Do()){case 42:case 47:_c(U2(R2(oa(),If()),e,t,h),h);break;default:R+="/"}break;case 123*T:f[p++]=ya(R)*y;case 125*T:case 59:case 0:switch(O){case 0:case 125:b=0;case 59+m:y==-1&&(R=Ct(R,/\f/g,"")),x>0&&ya(R)-v&&_c(x>32?Cy(R+";",a,t,v-1,h):Cy(Ct(R," ","")+";",a,t,v-2,h),h);break;case 59:R+=";";default:if(_c(B=wy(R,e,t,p,m,o,f,w,E=[],L=[],v,l),l),O===123)if(m===0)kf(R,e,B,B,E,l,v,f,L);else switch(_===99&&Gn(R,3)===110?100:_){case 100:case 108:case 109:case 115:kf(n,B,B,a&&_c(wy(n,B,B,0,0,o,f,w,o,E=[],v,L),L),o,L,v,f,a?E:L);break;default:kf(R,B,B,B,[""],L,0,f,L)}}p=m=x=0,T=y=1,w=R="",v=u;break;case 58:v=1+ya(R),x=S;default:if(T<1){if(O==123)--T;else if(O==125&&T++==0&&E2()==125)continue}switch(R+=s0(O),O*T){case 38:y=m>0?1:(R+="\f",-1);break;case 44:f[p++]=(ya(R)-1)*y,y=1;break;case 64:Do()===45&&(R+=zp(oa())),_=Do(),m=v=ya(w=R+=D2(If())),O++;break;case 45:S===45&&ya(R)==2&&(T=0)}}return l}function wy(n,e,t,a,o,l,u,f,h,p,m,v){for(var _=o-1,x=o===0?l:[""],S=oS(x),T=0,b=0,y=0;T<a;++T)for(var O=0,w=qs(n,_+1,_=aS(b=u[T])),E=n;O<S;++O)(E=rS(b>0?x[O]+" "+w:Ct(w,/&\f/g,x[O])))&&(h[y++]=E);return _d(n,e,t,o===0?gd:f,h,p,m,v)}function U2(n,e,t,a){return _d(n,e,t,nS,s0(M2()),qs(n,2,-2),0,a)}function Cy(n,e,t,a,o){return _d(n,e,t,o0,qs(n,0,a),qs(n,a+1,-1),a,o)}function lS(n,e,t){switch(b2(n,e)){case 5103:return Yt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Yt+n+n;case 4789:return bc+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Yt+n+bc+n+dn+n+n;case 5936:switch(Gn(n,e+11)){case 114:return Yt+n+dn+Ct(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Yt+n+dn+Ct(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Yt+n+dn+Ct(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Yt+n+dn+n+n;case 6165:return Yt+n+dn+"flex-"+n+n;case 5187:return Yt+n+Ct(n,/(\w+).+(:[^]+)/,Yt+"box-$1$2"+dn+"flex-$1$2")+n;case 5443:return Yt+n+dn+"flex-item-"+Ct(n,/flex-|-self/g,"")+(Ka(n,/flex-|baseline/)?"":dn+"grid-row-"+Ct(n,/flex-|-self/g,""))+n;case 4675:return Yt+n+dn+"flex-line-pack"+Ct(n,/align-content|flex-|-self/g,"")+n;case 5548:return Yt+n+dn+Ct(n,"shrink","negative")+n;case 5292:return Yt+n+dn+Ct(n,"basis","preferred-size")+n;case 6060:return Yt+"box-"+Ct(n,"-grow","")+Yt+n+dn+Ct(n,"grow","positive")+n;case 4554:return Yt+Ct(n,/([^-])(transform)/g,"$1"+Yt+"$2")+n;case 6187:return Ct(Ct(Ct(n,/(zoom-|grab)/,Yt+"$1"),/(image-set)/,Yt+"$1"),n,"")+n;case 5495:case 3959:return Ct(n,/(image-set\([^]*)/,Yt+"$1$`$1");case 4968:return Ct(Ct(n,/(.+:)(flex-)?(.*)/,Yt+"box-pack:$3"+dn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Yt+n+n;case 4200:if(!Ka(n,/flex-|baseline/))return dn+"grid-column-align"+qs(n,e)+n;break;case 2592:case 3360:return dn+Ct(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(a,o){return e=o,Ka(a.props,/grid-\w+-end/)})?~Ff(n+(t=t[e].value),"span",0)?n:dn+Ct(n,"-start","")+n+dn+"grid-row-span:"+(~Ff(t,"span",0)?Ka(t,/\d+/):+Ka(t,/\d+/)-+Ka(n,/\d+/))+";":dn+Ct(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(a){return Ka(a.props,/grid-\w+-start/)})?n:dn+Ct(Ct(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ct(n,/(.+)-inline(.+)/,Yt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ya(n)-1-e>6)switch(Gn(n,e+1)){case 109:if(Gn(n,e+4)!==45)break;case 102:return Ct(n,/(.+:)(.+)-([^]+)/,"$1"+Yt+"$2-$3$1"+bc+(Gn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ff(n,"stretch",0)?lS(Ct(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ct(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,u,f,h,p){return dn+o+":"+l+p+(u?dn+o+"-span:"+(f?h:+h-+l)+p:"")+n});case 4949:if(Gn(n,e+6)===121)return Ct(n,":",":"+Yt)+n;break;case 6444:switch(Gn(n,Gn(n,14)===45?18:11)){case 120:return Ct(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Yt+(Gn(n,14)===45?"inline-":"")+"box$3$1"+Yt+"$2$3$1"+dn+"$2box$3")+n;case 100:return Ct(n,":",":"+dn)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ct(n,"scroll-","scroll-snap-")+n}return n}function Jf(n,e){for(var t="",a=0;a<n.length;a++)t+=e(n[a],a,n,e)||"";return t}function P2(n,e,t,a){switch(n.type){case y2:if(n.children.length)break;case x2:case o0:return n.return=n.return||n.value;case nS:return"";case iS:return n.return=n.value+"{"+Jf(n.children,a)+"}";case gd:if(!ya(n.value=n.props.join(",")))return""}return ya(t=Jf(n.children,a))?n.return=n.value+"{"+t+"}":""}function N2(n){var e=oS(n);return function(t,a,o,l){for(var u="",f=0;f<e;f++)u+=n[f](t,a,o,l)||"";return u}}function O2(n){return function(e){e.root||(e=e.return)&&n(e)}}function z2(n,e,t,a){if(n.length>-1&&!n.return)switch(n.type){case o0:n.return=lS(n.value,n.length,t);return;case iS:return Jf([Br(n,{value:Ct(n.value,"@","@"+Yt)})],a);case gd:if(n.length)return S2(t=n.props,function(o){switch(Ka(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ms(Br(n,{props:[Ct(o,/:(read-\w+)/,":"+bc+"$1")]})),ms(Br(n,{props:[o]})),Fm(n,{props:Ay(t,a)});break;case"::placeholder":ms(Br(n,{props:[Ct(o,/:(plac\w+)/,":"+Yt+"input-$1")]})),ms(Br(n,{props:[Ct(o,/:(plac\w+)/,":"+bc+"$1")]})),ms(Br(n,{props:[Ct(o,/:(plac\w+)/,dn+"input-$1")]})),ms(Br(n,{props:[o]})),Fm(n,{props:Ay(t,a)});break}return""})}}var B2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ai={},Zs=typeof process<"u"&&Ai!==void 0&&(Ai.REACT_APP_SC_ATTR||Ai.SC_ATTR)||"data-styled",cS="active",uS="data-styled-version",yd="6.1.16",l0=`/*!sc*/
`,ed=typeof window<"u"&&"HTMLElement"in window,F2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ai!==void 0&&Ai.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ai.REACT_APP_SC_DISABLE_SPEEDY!==""?Ai.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ai.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ai!==void 0&&Ai.SC_DISABLE_SPEEDY!==void 0&&Ai.SC_DISABLE_SPEEDY!==""&&Ai.SC_DISABLE_SPEEDY!=="false"&&Ai.SC_DISABLE_SPEEDY),I2={},bd=Object.freeze([]),Ks=Object.freeze({});function fS(n,e,t){return t===void 0&&(t=Ks),n.theme!==t.theme&&n.theme||e||t.theme}var dS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),k2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H2=/(^-|-$)/g;function Ry(n){return n.replace(k2,"-").replace(H2,"")}var G2=/(a)(d)/gi,Zu=52,Dy=function(n){return String.fromCharCode(n+(n>25?39:97))};function Hm(n){var e,t="";for(e=Math.abs(n);e>Zu;e=e/Zu|0)t=Dy(e%Zu)+t;return(Dy(e%Zu)+t).replace(G2,"$1-$2")}var Bp,hS=5381,ks=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},pS=function(n){return ks(hS,n)};function c0(n){return Hm(pS(n)>>>0)}function V2(n){return n.displayName||n.name||"Component"}function Fp(n){return typeof n=="string"&&!0}var mS=typeof Symbol=="function"&&Symbol.for,gS=mS?Symbol.for("react.memo"):60115,X2=mS?Symbol.for("react.forward_ref"):60112,j2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},W2=((Bp={})[X2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bp[gS]=vS,Bp);function Ly(n){return("type"in(e=n)&&e.type.$$typeof)===gS?vS:"$$typeof"in n?W2[n.$$typeof]:j2;var e}var q2=Object.defineProperty,$2=Object.getOwnPropertyNames,Uy=Object.getOwnPropertySymbols,Z2=Object.getOwnPropertyDescriptor,K2=Object.getPrototypeOf,Py=Object.prototype;function _S(n,e,t){if(typeof e!="string"){if(Py){var a=K2(e);a&&a!==Py&&_S(n,a,t)}var o=$2(e);Uy&&(o=o.concat(Uy(e)));for(var l=Ly(n),u=Ly(e),f=0;f<o.length;++f){var h=o[f];if(!(h in Y2||t&&t[h]||u&&h in u||l&&h in l)){var p=Z2(e,h);try{q2(n,h,p)}catch{}}}}return n}function Qs(n){return typeof n=="function"}function u0(n){return typeof n=="object"&&"styledComponentId"in n}function Ao(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function td(n,e){if(n.length===0)return"";for(var t=n[0],a=1;a<n.length;a++)t+=n[a];return t}function Ec(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Gm(n,e,t){if(t===void 0&&(t=!1),!t&&!Ec(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)n[a]=Gm(n[a],e[a]);else if(Ec(e))for(var a in e)n[a]=Gm(n[a],e[a]);return n}function f0(n,e){Object.defineProperty(n,"toString",{value:e})}function Uc(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Q2=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,a=0;a<e;a++)t+=this.groupSizes[a];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;e>=l;)if((l<<=1)<0)throw Uc(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(e+1),h=(u=0,t.length);u<h;u++)this.tag.insertRule(f,t[u])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],a=this.indexOfGroup(e),o=a+t;this.groupSizes[e]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var a=this.groupSizes[e],o=this.indexOfGroup(e),l=o+a,u=o;u<l;u++)t+="".concat(this.tag.getRule(u)).concat(l0);return t},n}(),Hf=new Map,nd=new Map,Gf=1,Ku=function(n){if(Hf.has(n))return Hf.get(n);for(;nd.has(Gf);)Gf++;var e=Gf++;return Hf.set(n,e),nd.set(e,n),e},J2=function(n,e){Gf=e+1,Hf.set(n,e),nd.set(e,n)},eA="style[".concat(Zs,"][").concat(uS,'="').concat(yd,'"]'),tA=new RegExp("^".concat(Zs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nA=function(n,e,t){for(var a,o=t.split(","),l=0,u=o.length;l<u;l++)(a=o[l])&&n.registerName(e,a)},iA=function(n,e){for(var t,a=((t=e.textContent)!==null&&t!==void 0?t:"").split(l0),o=[],l=0,u=a.length;l<u;l++){var f=a[l].trim();if(f){var h=f.match(tA);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(J2(m,p),nA(n,m,h[3]),n.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},Ny=function(n){for(var e=document.querySelectorAll(eA),t=0,a=e.length;t<a;t++){var o=e[t];o&&o.getAttribute(Zs)!==cS&&(iA(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function aA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xS=function(n){var e=document.head,t=n||e,a=document.createElement("style"),o=function(f){var h=Array.from(f.querySelectorAll("style[".concat(Zs,"]")));return h[h.length-1]}(t),l=o!==void 0?o.nextSibling:null;a.setAttribute(Zs,cS),a.setAttribute(uS,yd);var u=aA();return u&&a.setAttribute("nonce",u),t.insertBefore(a,l),a},rA=function(){function n(e){this.element=xS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===t)return u}throw Uc(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),oA=function(){function n(e){this.element=xS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),sA=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Oy=ed,lA={isServer:!ed,useCSSOMInjection:!F2},id=function(){function n(e,t,a){e===void 0&&(e=Ks),t===void 0&&(t={});var o=this;this.options=ti(ti({},lA),e),this.gs=t,this.names=new Map(a),this.server=!!e.isServer,!this.server&&ed&&Oy&&(Oy=!1,Ny(this)),f0(this,function(){return function(l){for(var u=l.getTag(),f=u.length,h="",p=function(v){var _=function(y){return nd.get(y)}(v);if(_===void 0)return"continue";var x=l.names.get(_),S=u.getGroup(v);if(x===void 0||!x.size||S.length===0)return"continue";var T="".concat(Zs,".g").concat(v,'[id="').concat(_,'"]'),b="";x!==void 0&&x.forEach(function(y){y.length>0&&(b+="".concat(y,","))}),h+="".concat(S).concat(T,'{content:"').concat(b,'"}').concat(l0)},m=0;m<f;m++)p(m);return h}(o)})}return n.registerId=function(e){return Ku(e)},n.prototype.rehydrate=function(){!this.server&&ed&&Ny(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(ti(ti({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var a=t.useCSSOMInjection,o=t.target;return t.isServer?new sA(o):a?new rA(o):new oA(o)}(this.options),new Q2(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Ku(e),this.names.has(e))this.names.get(e).add(t);else{var a=new Set;a.add(t),this.names.set(e,a)}},n.prototype.insertRules=function(e,t,a){this.registerName(e,t),this.getTag().insertRules(Ku(e),a)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Ku(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),cA=/&/g,uA=/^\s*\/\/.*$/gm;function yS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=yS(t.children,e)),t})}function fA(n){var e,t,a,o=Ks,l=o.options,u=l===void 0?Ks:l,f=o.plugins,h=f===void 0?bd:f,p=function(_,x,S){return S.startsWith(t)&&S.endsWith(t)&&S.replaceAll(t,"").length>0?".".concat(e):_},m=h.slice();m.push(function(_){_.type===gd&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(cA,t).replace(a,p))}),u.prefix&&m.push(z2),m.push(P2);var v=function(_,x,S,T){x===void 0&&(x=""),S===void 0&&(S=""),T===void 0&&(T="&"),e=T,t=x,a=new RegExp("\\".concat(t,"\\b"),"g");var b=_.replace(uA,""),y=L2(S||x?"".concat(S," ").concat(x," { ").concat(b," }"):b);u.namespace&&(y=yS(y,u.namespace));var O=[];return Jf(y,N2(m.concat(O2(function(w){return O.push(w)})))),O};return v.hash=h.length?h.reduce(function(_,x){return x.name||Uc(15),ks(_,x.name)},hS).toString():"",v}var dA=new id,Vm=fA(),bS=dt.createContext({shouldForwardProp:void 0,styleSheet:dA,stylis:Vm});bS.Consumer;dt.createContext(void 0);function Xm(){return H.useContext(bS)}var SS=function(){function n(e,t){var a=this;this.inject=function(o,l){l===void 0&&(l=Vm);var u=a.name+l.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,l(a.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,f0(this,function(){throw Uc(12,String(a.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Vm),this.name+e.hash},n}(),hA=function(n){return n>="A"&&n<="Z"};function zy(n){for(var e="",t=0;t<n.length;t++){var a=n[t];if(t===1&&a==="-"&&n[0]==="-")return n;hA(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var MS=function(n){return n==null||n===!1||n===""},ES=function(n){var e,t,a=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!MS(l)&&(Array.isArray(l)&&l.isCss||Qs(l)?a.push("".concat(zy(o),":"),l,";"):Ec(l)?a.push.apply(a,Ws(Ws(["".concat(o," {")],ES(l),!1),["}"],!1)):a.push("".concat(zy(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in B2||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return a};function Hr(n,e,t,a){if(MS(n))return[];if(u0(n))return[".".concat(n.styledComponentId)];if(Qs(n)){if(!Qs(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return Hr(o,e,t,a)}var l;return n instanceof SS?t?(n.inject(t,a),[n.getName(a)]):[n]:Ec(n)?ES(n):Array.isArray(n)?Array.prototype.concat.apply(bd,n.map(function(u){return Hr(u,e,t,a)})):[n.toString()]}function TS(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Qs(t)&&!u0(t))return!1}return!0}var pA=pS(yd),mA=function(){function n(e,t,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&TS(e),this.componentId=t,this.baseHash=ks(pA,t),this.baseStyle=a,id.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Ao(o,this.staticRulesId);else{var l=td(Hr(this.rules,e,t,a)),u=Hm(ks(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,u)){var f=a(l,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,f)}o=Ao(o,u),this.staticRulesId=u}else{for(var h=ks(this.baseHash,a.hash),p="",m=0;m<this.rules.length;m++){var v=this.rules[m];if(typeof v=="string")p+=v;else if(v){var _=td(Hr(v,e,t,a));h=ks(h,_+m),p+=_}}if(p){var x=Hm(h>>>0);t.hasNameForId(this.componentId,x)||t.insertRules(this.componentId,x,a(p,".".concat(x),void 0,this.componentId)),o=Ao(o,x)}}return o},n}(),d0=dt.createContext(void 0);d0.Consumer;var Ip={};function gA(n,e,t){var a=u0(n),o=n,l=!Fp(n),u=e.attrs,f=u===void 0?bd:u,h=e.componentId,p=h===void 0?function(E,L){var B=typeof E!="string"?"sc":Ry(E);Ip[B]=(Ip[B]||0)+1;var R="".concat(B,"-").concat(c0(yd+B+Ip[B]));return L?"".concat(L,"-").concat(R):R}(e.displayName,e.parentComponentId):h,m=e.displayName,v=m===void 0?function(E){return Fp(E)?"styled.".concat(E):"Styled(".concat(V2(E),")")}(n):m,_=e.displayName&&e.componentId?"".concat(Ry(e.displayName),"-").concat(e.componentId):e.componentId||p,x=a&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=e.shouldForwardProp;if(a&&o.shouldForwardProp){var T=o.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;S=function(E,L){return T(E,L)&&b(E,L)}}else S=T}var y=new mA(t,_,a?o.componentStyle:void 0);function O(E,L){return function(B,R,V){var U=B.attrs,D=B.componentStyle,j=B.defaultProps,ne=B.foldedComponentIds,Z=B.styledComponentId,ue=B.target,re=dt.useContext(d0),X=Xm(),J=B.shouldForwardProp||X.shouldForwardProp,q=fS(R,re,j)||Ks,_e=function($,ce,he){for(var Ae,De=ti(ti({},ce),{className:void 0,theme:he}),Ve=0;Ve<$.length;Ve+=1){var it=Qs(Ae=$[Ve])?Ae(De):Ae;for(var at in it)De[at]=at==="className"?Ao(De[at],it[at]):at==="style"?ti(ti({},De[at]),it[at]):it[at]}return ce.className&&(De.className=Ao(De.className,ce.className)),De}(U,R,q),F=_e.as||ue,te={};for(var xe in _e)_e[xe]===void 0||xe[0]==="$"||xe==="as"||xe==="theme"&&_e.theme===q||(xe==="forwardedAs"?te.as=_e.forwardedAs:J&&!J(xe,F)||(te[xe]=_e[xe]));var Te=function($,ce){var he=Xm(),Ae=$.generateAndInjectStyles(ce,he.styleSheet,he.stylis);return Ae}(D,_e),K=Ao(ne,Z);return Te&&(K+=" "+Te),_e.className&&(K+=" "+_e.className),te[Fp(F)&&!dS.has(F)?"class":"className"]=K,V&&(te.ref=V),H.createElement(F,te)}(w,E,L)}O.displayName=v;var w=dt.forwardRef(O);return w.attrs=x,w.componentStyle=y,w.displayName=v,w.shouldForwardProp=S,w.foldedComponentIds=a?Ao(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=_,w.target=a?o.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=a?function(L){for(var B=[],R=1;R<arguments.length;R++)B[R-1]=arguments[R];for(var V=0,U=B;V<U.length;V++)Gm(L,U[V],!0);return L}({},o.defaultProps,E):E}}),f0(w,function(){return".".concat(w.styledComponentId)}),l&&_S(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function By(n,e){for(var t=[n[0]],a=0,o=e.length;a<o;a+=1)t.push(e[a],n[a+1]);return t}var Fy=function(n){return Object.assign(n,{isCss:!0})};function h0(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Qs(n)||Ec(n))return Fy(Hr(By(bd,Ws([n],e,!0))));var a=n;return e.length===0&&a.length===1&&typeof a[0]=="string"?Hr(a):Fy(Hr(By(a,e)))}function jm(n,e,t){if(t===void 0&&(t=Ks),!e)throw Uc(1,e);var a=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return n(e,t,h0.apply(void 0,Ws([o],l,!1)))};return a.attrs=function(o){return jm(n,e,ti(ti({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return jm(n,e,ti(ti({},t),o))},a}var AS=function(n){return jm(gA,n)},Se=AS;dS.forEach(function(n){Se[n]=AS(n)});var vA=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=TS(e),id.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,a,o){var l=o(td(Hr(this.rules,t,a,o)),""),u=this.componentId+e;a.insertRules(u,u,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,a,o){e>2&&id.registerId(this.componentId+e),this.removeStyles(e,a),this.createStyles(e,t,a,o)},n}();function _A(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var a=h0.apply(void 0,Ws([n],e,!1)),o="sc-global-".concat(c0(JSON.stringify(a))),l=new vA(a,o),u=function(h){var p=Xm(),m=dt.useContext(d0),v=dt.useRef(p.styleSheet.allocateGSInstance(o)).current;return p.styleSheet.server&&f(v,h,p.styleSheet,m,p.stylis),dt.useLayoutEffect(function(){if(!p.styleSheet.server)return f(v,h,p.styleSheet,m,p.stylis),function(){return l.removeStyles(v,p.styleSheet)}},[v,h,p.styleSheet,m,p.stylis]),null};function f(h,p,m,v,_){if(l.isStatic)l.renderStyles(h,I2,m,_);else{var x=ti(ti({},p),{theme:fS(p,v,u.defaultProps)});l.renderStyles(h,x,m,_)}}return dt.memo(u)}function xA(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var a=td(h0.apply(void 0,Ws([n],e,!1))),o=c0(a);return new SS(o,a)}const yA=_A`
  :root {
    /* Backgrounds */
    --bg-primary: #121212;        /* Very dark charcoal (Canvas) */
    --rgb-bg-primary: 18, 18, 18;
    --bg-secondary: #1E1E1E;    /* Dark charcoal (UI elements) */
    --rgb-bg-secondary: 30, 30, 30;
    --bg-tertiary: #2C2C2C;     /* Medium-dark charcoal (Input tracks) */
    --rgb-bg-tertiary: 44, 44, 44;
    --bg-hover: #3A3A3A;         /* Hover grey */

    /* Text */
    --text-primary: #F0F0F0;      /* Off-white */
    --text-secondary: #AAAAAA;    /* Light grey */
    --text-accent: #FFFFFF;       /* White text on accent */

    /* Borders */
    --border-color: #3A3A3A;      /* Subtle grey border */
    --rgb-border-color: 58, 58, 58;
    --border-accent: #E6007A;     /* Accent pink border */

    /* Accents */
    --accent-color: #E6007A;       /* Vibrant Pink/Magenta */
    --rgb-accent-color: 230, 0, 122;
    --accent-hover: #FF33A1;      /* Brighter pink hover */

    /* Other */
    --switch-handle: #F0F0F0;     /* Off-white handle */
    --input-bg: var(--bg-secondary); /* Use UI element bg for inputs */
    --input-text: var(--text-primary);
    --button-text: var(--text-primary);

    /* Fonts (Example - if you want to standardize) */
    /* --font-family-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    /* --font-size-base: 1rem; */
    /* --font-size-small: 0.85rem; */
    /* --font-size-label: 0.8rem; */

    /* Spacing (Example - if you want to standardize) */
    /* --space-xs: 0.25rem; */
    /* --space-sm: 0.5rem; */
    /* --space-md: 1rem; */
    /* --space-lg: 1.5rem; */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary); /* Uses the darkest color now */
    color: var(--text-primary);
    line-height: 1.5;
  }

  /* ReactCrop styles */
  .ReactCrop {
    position: relative;
    display: inline-block;
    cursor: crosshair;
    touch-action: none;
  }

  .ReactCrop__crop-selection {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: crosshair;
    touch-action: none;
  }

  .ReactCrop__drag-handle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    cursor: move;
    touch-action: none;
  }

  .ReactCrop__drag-handle.ord-n {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactCrop__drag-handle.ord-e {
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
  }

  .ReactCrop__drag-handle.ord-s {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .ReactCrop__drag-handle.ord-w {
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  .ReactCrop__drag-handle.ord-ne {
    top: -5px;
    right: -5px;
  }

  .ReactCrop__drag-handle.ord-nw {
    top: -5px;
    left: -5px;
  }

  .ReactCrop__drag-handle.ord-se {
    bottom: -5px;
    right: -5px;
  }

  .ReactCrop__drag-handle.ord-sw {
    bottom: -5px;
    left: -5px;
  }

  .ReactCrop__image {
    max-width: 100%;
    max-height: 70vh;
    display: block;
  }

  .ReactCrop__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
`;var Gi=function(n,e){return Number(n.toFixed(e))},bA=function(n,e){return e},gn=function(n,e,t){t&&typeof t=="function"&&t(n,e)},SA=function(n){return-Math.cos(n*Math.PI)/2+.5},MA=function(n){return n},EA=function(n){return n*n},TA=function(n){return n*(2-n)},AA=function(n){return n<.5?2*n*n:-1+(4-2*n)*n},wA=function(n){return n*n*n},CA=function(n){return--n*n*n+1},RA=function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},DA=function(n){return n*n*n*n},LA=function(n){return 1- --n*n*n*n},UA=function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},PA=function(n){return n*n*n*n*n},NA=function(n){return 1+--n*n*n*n*n},OA=function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n},wS={easeOut:SA,linear:MA,easeInQuad:EA,easeOutQuad:TA,easeInOutQuad:AA,easeInCubic:wA,easeOutCubic:CA,easeInOutCubic:RA,easeInQuart:DA,easeOutQuart:LA,easeInOutQuart:UA,easeInQuint:PA,easeOutQuint:NA,easeInOutQuint:OA},CS=function(n){typeof n=="number"&&cancelAnimationFrame(n)},ta=function(n){n.mounted&&(CS(n.animation),n.animate=!1,n.animation=null,n.velocity=null)};function RS(n,e,t,a){if(n.mounted){var o=new Date().getTime(),l=1;ta(n),n.animation=function(){if(!n.mounted)return CS(n.animation);var u=new Date().getTime()-o,f=u/t,h=wS[e],p=h(f);u>=t?(a(l),n.animation=null):n.animation&&(a(p),requestAnimationFrame(n.animation))},requestAnimationFrame(n.animation)}}function zA(n){var e=n.scale,t=n.positionX,a=n.positionY;return!(Number.isNaN(e)||Number.isNaN(t)||Number.isNaN(a))}function Kr(n,e,t,a){var o=zA(e);if(!(!n.mounted||!o)){var l=n.setTransformState,u=n.transformState,f=u.scale,h=u.positionX,p=u.positionY,m=e.scale-f,v=e.positionX-h,_=e.positionY-p;t===0?l(e.scale,e.positionX,e.positionY):RS(n,a,t,function(x){var S=f+m*x,T=h+v*x,b=p+_*x;l(S,T,b)})}}function BA(n,e,t){var a=n.offsetWidth,o=n.offsetHeight,l=e.offsetWidth,u=e.offsetHeight,f=l*t,h=u*t,p=a-f,m=o-h;return{wrapperWidth:a,wrapperHeight:o,newContentWidth:f,newDiffWidth:p,newContentHeight:h,newDiffHeight:m}}var FA=function(n,e,t,a,o,l,u){var f=n>e?t*(u?1:.5):0,h=a>o?l*(u?1:.5):0,p=n-e-f,m=f,v=a-o-h,_=h;return{minPositionX:p,maxPositionX:m,minPositionY:v,maxPositionY:_}},p0=function(n,e){var t=n.wrapperComponent,a=n.contentComponent,o=n.setup.centerZoomedOut;if(!t||!a)throw new Error("Components are not mounted");var l=BA(t,a,e),u=l.wrapperWidth,f=l.wrapperHeight,h=l.newContentWidth,p=l.newDiffWidth,m=l.newContentHeight,v=l.newDiffHeight,_=FA(u,h,p,f,m,v,!!o);return _},Ym=function(n,e,t,a){return a?n<e?Gi(e,2):n>t?Gi(t,2):Gi(n,2):Gi(n,2)},Lo=function(n,e){var t=p0(n,e);return n.bounds=t,t};function Pc(n,e,t,a,o,l,u){var f=t.minPositionX,h=t.minPositionY,p=t.maxPositionX,m=t.maxPositionY,v=0,_=0;u&&(v=o,_=l);var x=Ym(n,f-v,p+v,a),S=Ym(e,h-_,m+_,a);return{x,y:S}}function Sd(n,e,t,a,o,l){var u=n.transformState,f=u.scale,h=u.positionX,p=u.positionY,m=a-f;if(typeof e!="number"||typeof t!="number")return console.error("Mouse X and Y position were not provided!"),{x:h,y:p};var v=h-e*m,_=p-t*m,x=Pc(v,_,o,l,0,0,null);return x}function Nc(n,e,t,a,o){var l=o?a:0,u=e-l;return!Number.isNaN(t)&&n>=t?t:!Number.isNaN(e)&&n<=u?u:n}var Iy=function(n,e){var t=n.setup.panning.excluded,a=n.isInitialized,o=n.wrapperComponent,l=e.target,u="shadowRoot"in l&&"composedPath"in e,f=u?e.composedPath().some(function(m){return m instanceof Element?o==null?void 0:o.contains(m):!1}):o==null?void 0:o.contains(l),h=a&&l&&f;if(!h)return!1;var p=Md(l,t);return!p},ky=function(n){var e=n.isInitialized,t=n.isPanning,a=n.setup,o=a.panning.disabled,l=e&&t&&!o;return!!l},IA=function(n,e){var t=n.transformState,a=t.positionX,o=t.positionY;n.isPanning=!0;var l=e.clientX,u=e.clientY;n.startCoords={x:l-a,y:u-o}},kA=function(n,e){var t=e.touches,a=n.transformState,o=a.positionX,l=a.positionY;n.isPanning=!0;var u=t.length===1;if(u){var f=t[0].clientX,h=t[0].clientY;n.startCoords={x:f-o,y:h-l}}};function HA(n){var e=n.transformState,t=e.positionX,a=e.positionY,o=e.scale,l=n.setup,u=l.disabled,f=l.limitToBounds,h=l.centerZoomedOut,p=n.wrapperComponent;if(!(u||!p||!n.bounds)){var m=n.bounds,v=m.maxPositionX,_=m.minPositionX,x=m.maxPositionY,S=m.minPositionY,T=t>v||t<_,b=a>x||a<S,y=t>v?p.offsetWidth:n.setup.minPositionX||0,O=a>x?p.offsetHeight:n.setup.minPositionY||0,w=Sd(n,y,O,o,n.bounds,f||h),E=w.x,L=w.y;return{scale:o,positionX:T?E:t,positionY:b?L:a}}}function DS(n,e,t,a,o){var l=n.setup.limitToBounds,u=n.wrapperComponent,f=n.bounds,h=n.transformState,p=h.scale,m=h.positionX,v=h.positionY;if(!(u===null||f===null||e===m&&t===v)){var _=Pc(e,t,f,l,a,o,u),x=_.x,S=_.y;n.setTransformState(p,x,S)}}var GA=function(n,e,t){var a=n.startCoords,o=n.transformState,l=n.setup.panning,u=l.lockAxisX,f=l.lockAxisY,h=o.positionX,p=o.positionY;if(!a)return{x:h,y:p};var m=e-a.x,v=t-a.y,_=u?h:m,x=f?p:v;return{x:_,y:x}},jr=function(n,e){var t=n.setup,a=n.transformState,o=a.scale,l=t.minScale,u=t.disablePadding;return e>0&&o>=l&&!u?e:0},VA=function(n){var e=n.mounted,t=n.setup,a=t.disabled,o=t.velocityAnimation,l=n.transformState.scale,u=o.disabled,f=!u||l>1||!a||e;return!!f},XA=function(n){var e=n.mounted,t=n.velocity,a=n.bounds,o=n.setup,l=o.disabled,u=o.velocityAnimation,f=n.transformState.scale,h=u.disabled,p=!h||f>1||!l||e;return!(!p||!t||!a)};function jA(n,e){var t=n.setup.velocityAnimation,a=t.equalToMove,o=t.animationTime,l=t.sensitivity;return a?o*e*l:o}function Hy(n,e,t,a,o,l,u,f,h,p){if(o){if(e>u&&t>u){var m=u+(n-u)*p;return m>h?h:m<u?u:m}if(e<l&&t<l){var m=l+(n-l)*p;return m<f?f:m>l?l:m}}return a?e:Ym(n,l,u,o)}function YA(n,e){var t=1;return e?Math.min(t,n.offsetWidth/window.innerWidth):t}function WA(n,e){var t=VA(n);if(t){var a=n.lastMousePosition,o=n.velocityTime,l=n.setup,u=n.wrapperComponent,f=l.velocityAnimation.equalToMove,h=Date.now();if(a&&o&&u){var p=YA(u,f),m=e.x-a.x,v=e.y-a.y,_=m/p,x=v/p,S=h-o,T=m*m+v*v,b=Math.sqrt(T)/S;n.velocity={velocityX:_,velocityY:x,total:b}}n.lastMousePosition=e,n.velocityTime=h}}function qA(n){var e=n.velocity,t=n.bounds,a=n.setup,o=n.wrapperComponent,l=XA(n);if(!(!l||!e||!t||!o)){var u=e.velocityX,f=e.velocityY,h=e.total,p=t.maxPositionX,m=t.minPositionX,v=t.maxPositionY,_=t.minPositionY,x=a.limitToBounds,S=a.alignmentAnimation,T=a.zoomAnimation,b=a.panning,y=b.lockAxisY,O=b.lockAxisX,w=T.animationType,E=S.sizeX,L=S.sizeY,B=S.velocityAlignmentTime,R=B,V=jA(n,h),U=Math.max(V,R),D=jr(n,E),j=jr(n,L),ne=D*o.offsetWidth/100,Z=j*o.offsetHeight/100,ue=p+ne,re=m-ne,X=v+Z,J=_-Z,q=n.transformState,_e=new Date().getTime();RS(n,w,U,function(F){var te=n.transformState,xe=te.scale,Te=te.positionX,K=te.positionY,$=new Date().getTime()-_e,ce=$/R,he=wS[S.animationType],Ae=1-he(Math.min(1,ce)),De=1-F,Ve=Te+u*De,it=K+f*De,at=Hy(Ve,q.positionX,Te,O,x,m,p,re,ue,Ae),et=Hy(it,q.positionY,K,y,x,_,v,J,X,Ae);(Te!==Ve||K!==it)&&n.setTransformState(xe,at,et)})}}function Gy(n,e){var t=n.transformState.scale;ta(n),Lo(n,t),window.TouchEvent!==void 0&&e instanceof TouchEvent?kA(n,e):IA(n,e)}function m0(n,e){var t=n.transformState.scale,a=n.setup,o=a.minScale,l=a.alignmentAnimation,u=l.disabled,f=l.sizeX,h=l.sizeY,p=l.animationTime,m=l.animationType,v=u||t<o||!f&&!h;if(!v){var _=HA(n);_&&Kr(n,_,e??p,m)}}function Vy(n,e,t){var a=n.startCoords,o=n.setup,l=o.alignmentAnimation,u=l.sizeX,f=l.sizeY;if(a){var h=GA(n,e,t),p=h.x,m=h.y,v=jr(n,u),_=jr(n,f);WA(n,{x:p,y:m}),DS(n,p,m,v,_)}}function $A(n){if(n.isPanning){var e=n.setup.panning.velocityDisabled,t=n.velocity,a=n.wrapperComponent,o=n.contentComponent;n.isPanning=!1,n.animate=!1,n.animation=null;var l=a==null?void 0:a.getBoundingClientRect(),u=o==null?void 0:o.getBoundingClientRect(),f=(l==null?void 0:l.width)||0,h=(l==null?void 0:l.height)||0,p=(u==null?void 0:u.width)||0,m=(u==null?void 0:u.height)||0,v=f<p||h<m,_=!e&&t&&(t==null?void 0:t.total)>.1&&v;_?qA(n):m0(n)}}function g0(n,e,t,a){var o=n.setup,l=o.minScale,u=o.maxScale,f=o.limitToBounds,h=Nc(Gi(e,2),l,u,0,!1),p=Lo(n,h),m=Sd(n,t,a,h,p,f),v=m.x,_=m.y;return{scale:h,positionX:v,positionY:_}}function LS(n,e,t){var a=n.transformState.scale,o=n.wrapperComponent,l=n.setup,u=l.minScale,f=l.limitToBounds,h=l.zoomAnimation,p=h.disabled,m=h.animationTime,v=h.animationType,_=p||a>=u;if((a>=1||f)&&m0(n),!(_||!o||!n.mounted)){var x=e||o.offsetWidth/2,S=t||o.offsetHeight/2,T=g0(n,u,x,S);T&&Kr(n,T,m,v)}}var Gr=function(){return Gr=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Gr.apply(this,arguments)};function Xy(n,e,t){for(var a=0,o=e.length,l;a<o;a++)(l||!(a in e))&&(l||(l=Array.prototype.slice.call(e,0,a)),l[a]=e[a]);return n.concat(l||Array.prototype.slice.call(e))}var Qu={scale:1,positionX:0,positionY:0},rc={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Wm={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},US=function(n){var e,t,a,o;return{previousScale:(e=n.initialScale)!==null&&e!==void 0?e:Qu.scale,scale:(t=n.initialScale)!==null&&t!==void 0?t:Qu.scale,positionX:(a=n.initialPositionX)!==null&&a!==void 0?a:Qu.positionX,positionY:(o=n.initialPositionY)!==null&&o!==void 0?o:Qu.positionY}},jy=function(n){var e=Gr({},rc);return Object.keys(n).forEach(function(t){var a=typeof n[t]<"u",o=typeof rc[t]<"u";if(o&&a){var l=Object.prototype.toString.call(rc[t]),u=l==="[object Object]",f=l==="[object Array]";u?e[t]=Gr(Gr({},rc[t]),n[t]):f?e[t]=Xy(Xy([],rc[t],!0),n[t]):e[t]=n[t]}}),e},PS=function(n,e,t){var a=n.transformState.scale,o=n.wrapperComponent,l=n.setup,u=l.maxScale,f=l.minScale,h=l.zoomAnimation,p=l.smooth,m=h.size;if(!o)throw new Error("Wrapper is not mounted");var v=p?a*Math.exp(e*t):a+e*t,_=Nc(Gi(v,3),f,u,m,!1);return _};function NS(n,e,t,a,o){var l=n.wrapperComponent,u=n.transformState,f=u.scale,h=u.positionX,p=u.positionY;if(!l)return console.error("No WrapperComponent found");var m=l.offsetWidth,v=l.offsetHeight,_=(m/2-h)/f,x=(v/2-p)/f,S=PS(n,e,t),T=g0(n,S,_,x);if(!T)return console.error("Error during zoom event. New transformation state was not calculated.");Kr(n,T,a,o)}function OS(n,e,t,a){var o=n.setup,l=n.wrapperComponent,u=o.limitToBounds,f=US(n.props),h=n.transformState,p=h.scale,m=h.positionX,v=h.positionY;if(l){var _=p0(n,f.scale),x=Pc(f.positionX,f.positionY,_,u,0,0,l),S={scale:f.scale,positionX:x.x,positionY:x.y};p===f.scale&&m===f.positionX&&v===f.positionY||(a==null||a(),Kr(n,S,e,t))}}function ZA(n,e,t,a){var o=n.getBoundingClientRect(),l=e.getBoundingClientRect(),u=t.getBoundingClientRect(),f=l.x*a.scale,h=l.y*a.scale;return{x:(o.x-u.x+f)/a.scale,y:(o.y-u.y+h)/a.scale}}function KA(n,e,t){var a=n.wrapperComponent,o=n.contentComponent,l=n.transformState,u=n.setup,f=u.limitToBounds,h=u.minScale,p=u.maxScale;if(!a||!o)return l;var m=a.getBoundingClientRect(),v=e.getBoundingClientRect(),_=ZA(e,a,o,l),x=_.x,S=_.y,T=v.width/l.scale,b=v.height/l.scale,y=a.offsetWidth/T,O=a.offsetHeight/b,w=Nc(t||Math.min(y,O),h,p,0,!1),E=(m.width-T*w)/2,L=(m.height-b*w)/2,B=(m.left-x)*w+E,R=(m.top-S)*w+L,V=p0(n,w),U=Pc(B,R,V,f,0,0,a),D=U.x,j=U.y;return{positionX:D,positionY:j,scale:w}}var QA=function(n){return function(e,t,a){e===void 0&&(e=.5),t===void 0&&(t=300),a===void 0&&(a="easeOut"),NS(n,1,e,t,a)}},JA=function(n){return function(e,t,a){e===void 0&&(e=.5),t===void 0&&(t=300),a===void 0&&(a="easeOut"),NS(n,-1,e,t,a)}},ew=function(n){return function(e,t,a,o,l){o===void 0&&(o=300),l===void 0&&(l="easeOut");var u=n.transformState,f=u.positionX,h=u.positionY,p=u.scale,m=n.wrapperComponent,v=n.contentComponent,_=n.setup.disabled;if(!(_||!m||!v)){var x={positionX:Number.isNaN(e)?f:e,positionY:Number.isNaN(t)?h:t,scale:Number.isNaN(a)?p:a};Kr(n,x,o,l)}}},tw=function(n){return function(e,t){e===void 0&&(e=200),t===void 0&&(t="easeOut"),OS(n,e,t)}},nw=function(n){return function(e,t,a){t===void 0&&(t=200),a===void 0&&(a="easeOut");var o=n.transformState,l=n.wrapperComponent,u=n.contentComponent;if(l&&u){var f=zS(e||o.scale,l,u);Kr(n,f,t,a)}}},iw=function(n){return function(e,t,a,o){a===void 0&&(a=600),o===void 0&&(o="easeOut"),ta(n);var l=n.wrapperComponent,u=typeof e=="string"?document.getElementById(e):e;if(l&&u&&l.contains(u)){var f=KA(n,u,t);Kr(n,f,a,o)}}},qm=function(n){return{instance:n,zoomIn:QA(n),zoomOut:JA(n),setTransform:ew(n),resetTransform:tw(n),centerView:nw(n),zoomToElement:iw(n)}},aw=function(n){return{instance:n,state:n.transformState}},cn=function(n){var e={};return Object.assign(e,aw(n)),Object.assign(e,qm(n)),e},kp=!1;function Hp(){try{var n={get passive(){return kp=!0,!1}};return n}catch{return kp=!1,kp}}var Ju=".".concat(Wm.wrapperClass),Md=function(n,e){return e.some(function(t){return n.matches("".concat(Ju," ").concat(t,", ").concat(Ju," .").concat(t,", ").concat(Ju," ").concat(t," *, ").concat(Ju," .").concat(t," *"))})},$m=function(n){n&&clearTimeout(n)},rw=function(n,e,t){return"translate(".concat(n,"px, ").concat(e,"px) scale(").concat(t,")")},zS=function(n,e,t){var a=t.offsetWidth*n,o=t.offsetHeight*n,l=(e.offsetWidth-a)/2,u=(e.offsetHeight-o)/2;return{scale:n,positionX:l,positionY:u}};function ow(n){return function(e){n.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var sw=function(n,e){var t=n.setup.wheel,a=t.disabled,o=t.wheelDisabled,l=t.touchPadDisabled,u=t.excluded,f=n.isInitialized,h=n.isPanning,p=e.target,m=f&&!h&&!a&&p;if(!m||o&&!e.ctrlKey||l&&e.ctrlKey)return!1;var v=Md(p,u);return!v},lw=function(n){return n?n.deltaY<0?1:-1:0};function cw(n,e){var t=lw(n),a=bA(e,t);return a}function BS(n,e,t){var a=e.getBoundingClientRect(),o=0,l=0;if("clientX"in n)o=(n.clientX-a.left)/t,l=(n.clientY-a.top)/t;else{var u=n.touches[0];o=(u.clientX-a.left)/t,l=(u.clientY-a.top)/t}return(Number.isNaN(o)||Number.isNaN(l))&&console.error("No mouse or touch offset found"),{x:o,y:l}}var uw=function(n,e,t,a,o){var l=n.transformState.scale,u=n.wrapperComponent,f=n.setup,h=f.maxScale,p=f.minScale,m=f.zoomAnimation,v=f.disablePadding,_=m.size,x=m.disabled;if(!u)throw new Error("Wrapper is not mounted");var S=l+e*t,T=a?!1:!x,b=Nc(Gi(S,3),p,h,_,T&&!v);return b},fw=function(n,e){var t=n.previousWheelEvent,a=n.transformState.scale,o=n.setup,l=o.maxScale,u=o.minScale;return t?a<l||a>u||Math.sign(t.deltaY)!==Math.sign(e.deltaY)||t.deltaY>0&&t.deltaY<e.deltaY||t.deltaY<0&&t.deltaY>e.deltaY||Math.sign(t.deltaY)!==Math.sign(e.deltaY):!1},dw=function(n,e){var t=n.setup.pinch,a=t.disabled,o=t.excluded,l=n.isInitialized,u=e.target,f=l&&!a&&u;if(!f)return!1;var h=Md(u,o);return!h},hw=function(n){var e=n.setup.pinch.disabled,t=n.isInitialized,a=n.pinchStartDistance,o=t&&!e&&a;return!!o},pw=function(n,e,t){var a=t.getBoundingClientRect(),o=n.touches,l=Gi(o[0].clientX-a.left,5),u=Gi(o[0].clientY-a.top,5),f=Gi(o[1].clientX-a.left,5),h=Gi(o[1].clientY-a.top,5);return{x:(l+f)/2/e,y:(u+h)/2/e}},FS=function(n){return Math.sqrt(Math.pow(n.touches[0].pageX-n.touches[1].pageX,2)+Math.pow(n.touches[0].pageY-n.touches[1].pageY,2))},mw=function(n,e){var t=n.pinchStartScale,a=n.pinchStartDistance,o=n.setup,l=o.maxScale,u=o.minScale,f=o.zoomAnimation,h=o.disablePadding,p=f.size,m=f.disabled;if(!t||a===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return n.transformState.scale;var v=e/a,_=v*t;return Nc(Gi(_,2),u,l,p,!m&&!h)},gw=160,vw=100,_w=function(n,e){var t=n.props,a=t.onWheelStart,o=t.onZoomStart;n.wheelStopEventTimer||(ta(n),gn(cn(n),e,a),gn(cn(n),e,o))},xw=function(n,e){var t=n.props,a=t.onWheel,o=t.onZoom,l=n.contentComponent,u=n.setup,f=n.transformState,h=f.scale,p=u.limitToBounds,m=u.centerZoomedOut,v=u.zoomAnimation,_=u.wheel,x=u.disablePadding,S=u.smooth,T=v.size,b=v.disabled,y=_.step,O=_.smoothStep;if(!l)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var w=cw(e,null),E=S?O*Math.abs(e.deltaY):y,L=uw(n,w,E,!e.ctrlKey);if(h!==L){var B=Lo(n,L),R=BS(e,l,h),V=b||T===0||m||x,U=p&&V,D=Sd(n,R.x,R.y,L,B,U),j=D.x,ne=D.y;n.previousWheelEvent=e,n.setTransformState(L,j,ne),gn(cn(n),e,a),gn(cn(n),e,o)}},yw=function(n,e){var t=n.props,a=t.onWheelStop,o=t.onZoomStop;$m(n.wheelAnimationTimer),n.wheelAnimationTimer=setTimeout(function(){n.mounted&&(LS(n,e.x,e.y),n.wheelAnimationTimer=null)},vw);var l=fw(n,e);l&&($m(n.wheelStopEventTimer),n.wheelStopEventTimer=setTimeout(function(){n.mounted&&(n.wheelStopEventTimer=null,gn(cn(n),e,a),gn(cn(n),e,o))},gw))},IS=function(n){for(var e=0,t=0,a=0;a<2;a+=1)e+=n.touches[a].clientX,t+=n.touches[a].clientY;var o=e/2,l=t/2;return{x:o,y:l}},bw=function(n,e){var t=FS(e);n.pinchStartDistance=t,n.lastDistance=t,n.pinchStartScale=n.transformState.scale,n.isPanning=!1;var a=IS(e);n.pinchLastCenterX=a.x,n.pinchLastCenterY=a.y,ta(n)},Sw=function(n,e){var t=n.contentComponent,a=n.pinchStartDistance,o=n.wrapperComponent,l=n.transformState.scale,u=n.setup,f=u.limitToBounds,h=u.centerZoomedOut,p=u.zoomAnimation,m=u.alignmentAnimation,v=p.disabled,_=p.size;if(!(a===null||!t)){var x=pw(e,l,t);if(!(!Number.isFinite(x.x)||!Number.isFinite(x.y))){var S=FS(e),T=mw(n,S),b=IS(e),y=b.x-(n.pinchLastCenterX||0),O=b.y-(n.pinchLastCenterY||0);if(!(T===l&&y===0&&O===0)){n.pinchLastCenterX=b.x,n.pinchLastCenterY=b.y;var w=Lo(n,T),E=v||_===0||h,L=f&&E,B=Sd(n,x.x,x.y,T,w,L),R=B.x,V=B.y;n.pinchMidpoint=x,n.lastDistance=S;var U=m.sizeX,D=m.sizeY,j=jr(n,U),ne=jr(n,D),Z=R+y,ue=V+O,re=Pc(Z,ue,w,f,j,ne,o),X=re.x,J=re.y;n.setTransformState(T,X,J)}}}},Mw=function(n){var e=n.pinchMidpoint;n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,LS(n,e==null?void 0:e.x,e==null?void 0:e.y)},kS=function(n,e){var t=n.props.onZoomStop,a=n.setup.doubleClick.animationTime;$m(n.doubleClickStopEventTimer),n.doubleClickStopEventTimer=setTimeout(function(){n.doubleClickStopEventTimer=null,gn(cn(n),e,t)},a)},Ew=function(n,e){var t=n.props,a=t.onZoomStart,o=t.onZoom,l=n.setup.doubleClick,u=l.animationTime,f=l.animationType;gn(cn(n),e,a),OS(n,u,f,function(){return gn(cn(n),e,o)}),kS(n,e)};function Tw(n,e){return n==="toggle"?e===1?1:-1:n==="zoomOut"?-1:1}function Aw(n,e){var t=n.setup,a=n.doubleClickStopEventTimer,o=n.transformState,l=n.contentComponent,u=o.scale,f=n.props,h=f.onZoomStart,p=f.onZoom,m=t.doubleClick,v=m.disabled,_=m.mode,x=m.step,S=m.animationTime,T=m.animationType;if(!v&&!a){if(_==="reset")return Ew(n,e);if(!l)return console.error("No ContentComponent found");var b=Tw(_,n.transformState.scale),y=PS(n,b,x);if(u!==y){gn(cn(n),e,h);var O=BS(e,l,u),w=g0(n,y,O.x,O.y);if(!w)return console.error("Error during zoom event. New transformation state was not calculated.");gn(cn(n),e,p),Kr(n,w,S,T),kS(n,e)}}}var ww=function(n,e){var t=n.isInitialized,a=n.setup,o=n.wrapperComponent,l=a.doubleClick,u=l.disabled,f=l.excluded,h=e.target,p=o==null?void 0:o.contains(h),m=t&&h&&p&&!u;if(!m)return!1;var v=Md(h,f);return!v},Cw=function(){function n(e){var t=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(a){t.props=a,Lo(t,t.transformState.scale),t.setup=jy(a)},this.initializeWindowEvents=function(){var a,o,l=Hp(),u=(a=t.wrapperComponent)===null||a===void 0?void 0:a.ownerDocument,f=u==null?void 0:u.defaultView;(o=t.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",t.onWheelPanning,l),f==null||f.addEventListener("mousedown",t.onPanningStart,l),f==null||f.addEventListener("mousemove",t.onPanning,l),f==null||f.addEventListener("mouseup",t.onPanningStop,l),u==null||u.addEventListener("mouseleave",t.clearPanning,l),f==null||f.addEventListener("keyup",t.setKeyUnPressed,l),f==null||f.addEventListener("keydown",t.setKeyPressed,l)},this.cleanupWindowEvents=function(){var a,o,l=Hp(),u=(a=t.wrapperComponent)===null||a===void 0?void 0:a.ownerDocument,f=u==null?void 0:u.defaultView;f==null||f.removeEventListener("mousedown",t.onPanningStart,l),f==null||f.removeEventListener("mousemove",t.onPanning,l),f==null||f.removeEventListener("mouseup",t.onPanningStop,l),u==null||u.removeEventListener("mouseleave",t.clearPanning,l),f==null||f.removeEventListener("keyup",t.setKeyUnPressed,l),f==null||f.removeEventListener("keydown",t.setKeyPressed,l),document.removeEventListener("mouseleave",t.clearPanning,l),ta(t),(o=t.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(a){var o=Hp();a.addEventListener("wheel",t.onWheelZoom,o),a.addEventListener("dblclick",t.onDoubleClick,o),a.addEventListener("touchstart",t.onTouchPanningStart,o),a.addEventListener("touchmove",t.onTouchPanning,o),a.addEventListener("touchend",t.onTouchPanningStop,o)},this.handleInitialize=function(a,o){var l=!1,u=t.setup.centerOnInit,f=function(h,p){for(var m=0,v=h;m<v.length;m++){var _=v[m];if(_.target===p)return!0}return!1};t.applyTransformation(),t.onInitCallbacks.forEach(function(h){h(cn(t))}),t.observer=new ResizeObserver(function(h){if(f(h,a)||f(h,o))if(u&&!l){var p=o.offsetWidth,m=o.offsetHeight;(p>0||m>0)&&(l=!0,t.setCenter())}else ta(t),Lo(t,t.transformState.scale),m0(t,0)}),t.observer.observe(a),t.observer.observe(o)},this.onWheelZoom=function(a){var o=t.setup.disabled;if(!o){var l=sw(t,a);if(l){var u=t.isPressingKeys(t.setup.wheel.activationKeys);u&&(_w(t,a),xw(t,a),yw(t,a))}}},this.onWheelPanning=function(a){var o=t.setup,l=o.disabled,u=o.wheel,f=o.panning;if(!(!t.wrapperComponent||!t.contentComponent||l||!u.wheelDisabled||f.disabled||!f.wheelPanning||a.ctrlKey)){a.preventDefault(),a.stopPropagation();var h=t.transformState,p=h.positionX,m=h.positionY,v=p-a.deltaX,_=m-a.deltaY,x=f.lockAxisX?p:v,S=f.lockAxisY?m:_,T=t.setup.alignmentAnimation,b=T.sizeX,y=T.sizeY,O=jr(t,b),w=jr(t,y);x===p&&S===m||DS(t,x,S,O,w)}},this.onPanningStart=function(a){var o=t.setup.disabled,l=t.props.onPanningStart;if(!o){var u=Iy(t,a);if(u){var f=t.isPressingKeys(t.setup.panning.activationKeys);f&&(a.button===0&&!t.setup.panning.allowLeftClickPan||a.button===1&&!t.setup.panning.allowMiddleClickPan||a.button===2&&!t.setup.panning.allowRightClickPan||(a.preventDefault(),a.stopPropagation(),ta(t),Gy(t,a),gn(cn(t),a,l)))}}},this.onPanning=function(a){var o=t.setup.disabled,l=t.props.onPanning;if(!o){var u=ky(t);if(u){var f=t.isPressingKeys(t.setup.panning.activationKeys);f&&(a.preventDefault(),a.stopPropagation(),Vy(t,a.clientX,a.clientY),gn(cn(t),a,l))}}},this.onPanningStop=function(a){var o=t.props.onPanningStop;t.isPanning&&($A(t),gn(cn(t),a,o))},this.onPinchStart=function(a){var o=t.setup.disabled,l=t.props,u=l.onPinchingStart,f=l.onZoomStart;if(!o){var h=dw(t,a);h&&(bw(t,a),ta(t),gn(cn(t),a,u),gn(cn(t),a,f))}},this.onPinch=function(a){var o=t.setup.disabled,l=t.props,u=l.onPinching,f=l.onZoom;if(!o){var h=hw(t);h&&(a.preventDefault(),a.stopPropagation(),Sw(t,a),gn(cn(t),a,u),gn(cn(t),a,f))}},this.onPinchStop=function(a){var o=t.props,l=o.onPinchingStop,u=o.onZoomStop;t.pinchStartScale&&(Mw(t),gn(cn(t),a,l),gn(cn(t),a,u))},this.onTouchPanningStart=function(a){var o=t.setup.disabled,l=t.props.onPanningStart;if(!o){var u=Iy(t,a);if(u){var f=t.lastTouch&&+new Date-t.lastTouch<200&&a.touches.length===1;if(!f){t.lastTouch=+new Date,ta(t);var h=a.touches,p=h.length===1,m=h.length===2;p&&(ta(t),Gy(t,a),gn(cn(t),a,l)),m&&t.onPinchStart(a)}}}},this.onTouchPanning=function(a){var o=t.setup.disabled,l=t.props.onPanning;if(t.isPanning&&a.touches.length===1){if(o)return;var u=ky(t);if(!u)return;a.preventDefault(),a.stopPropagation();var f=a.touches[0];Vy(t,f.clientX,f.clientY),gn(cn(t),a,l)}else a.touches.length>1&&t.onPinch(a)},this.onTouchPanningStop=function(a){t.onPanningStop(a),t.onPinchStop(a)},this.onDoubleClick=function(a){var o=t.setup.disabled;if(!o){var l=ww(t,a);l&&Aw(t,a)}},this.clearPanning=function(a){t.isPanning&&t.onPanningStop(a)},this.setKeyPressed=function(a){t.pressedKeys[a.key]=!0},this.setKeyUnPressed=function(a){t.pressedKeys[a.key]=!1},this.isPressingKeys=function(a){return a.length?!!a.find(function(o){return t.pressedKeys[o]}):!0},this.setTransformState=function(a,o,l){var u=t.props.onTransformed;if(!Number.isNaN(a)&&!Number.isNaN(o)&&!Number.isNaN(l)){a!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=a),t.transformState.positionX=o,t.transformState.positionY=l,t.applyTransformation();var f=cn(t);t.onChangeCallbacks.forEach(function(h){return h(f)}),gn(f,{scale:a,positionX:o,positionY:l},u)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var a=zS(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(a.scale,a.positionX,a.positionY)}},this.handleTransformStyles=function(a,o,l){return t.props.customTransform?t.props.customTransform(a,o,l):rw(a,o,l)},this.applyTransformation=function(){if(!(!t.mounted||!t.contentComponent)){var a=t.transformState,o=a.scale,l=a.positionX,u=a.positionY,f=t.handleTransformStyles(l,u,o);t.contentComponent.style.transform=f}},this.getContext=function(){return cn(t)},this.onChange=function(a){return t.onChangeCallbacks.has(a)||t.onChangeCallbacks.add(a),function(){t.onChangeCallbacks.delete(a)}},this.onInit=function(a){return t.onInitCallbacks.has(a)||t.onInitCallbacks.add(a),function(){t.onInitCallbacks.delete(a)}},this.init=function(a,o){t.cleanupWindowEvents(),t.wrapperComponent=a,t.contentComponent=o,Lo(t,t.transformState.scale),t.handleInitializeWrapperEvents(a),t.handleInitialize(a,o),t.initializeWindowEvents(),t.isInitialized=!0;var l=cn(t);gn(l,void 0,t.props.onInit)},this.props=e,this.setup=jy(this.props),this.transformState=US(this.props)}return n}(),v0=dt.createContext(null),Rw=function(n,e){return typeof n=="function"?n(e):n},Dw=dt.forwardRef(function(n,e){var t=H.useRef(new Cw(n)).current,a=Rw(n.children,qm(t));return H.useImperativeHandle(e,function(){return qm(t)},[t]),H.useEffect(function(){t.update(n)},[t,n]),dt.createElement(v0.Provider,{value:t},a)});dt.forwardRef(function(n,e){var t=H.useRef(null),a=H.useContext(v0);return H.useEffect(function(){return a.onChange(function(o){if(t.current){var l=0,u=0;t.current.style.transform=a.handleTransformStyles(l,u,1/o.instance.transformState.scale)}})},[a]),dt.createElement("div",Gr({},n,{ref:ow([t,e])}))});function Lw(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}var Uw=`.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
`,Yy={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};Lw(Uw);var Pw=function(n){var e=n.children,t=n.wrapperClass,a=t===void 0?"":t,o=n.contentClass,l=o===void 0?"":o,u=n.wrapperStyle,f=n.contentStyle,h=n.wrapperProps,p=h===void 0?{}:h,m=n.contentProps,v=m===void 0?{}:m,_=H.useContext(v0),x=_.init,S=_.cleanupWindowEvents,T=H.useRef(null),b=H.useRef(null);return H.useEffect(function(){var y=T.current,O=b.current;return y!==null&&O!==null&&x&&(x==null||x(y,O)),function(){S==null||S()}},[]),dt.createElement("div",Gr({},p,{ref:T,className:"".concat(Wm.wrapperClass," ").concat(Yy.wrapper," ").concat(a),style:u}),dt.createElement("div",Gr({},v,{ref:b,className:"".concat(Wm.contentClass," ").concat(Yy.content," ").concat(l),style:f}),e))};const Tc=(n,e=1)=>{let t=n.charAt(0)==="#"?n.substring(1):n;t.length===3&&(t=t.split("").map(f=>f+f).join(""));const a=parseInt(t.substring(0,2),16),o=parseInt(t.substring(2,4),16),l=parseInt(t.substring(4,6),16),u=Math.max(0,Math.min(1,e));return`rgba(${a}, ${o}, ${l}, ${u})`},Wy=n=>{const e=n.match(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?(\d*\.?\d+))?\)/);if(!e)return"#000000";const t=parseInt(e[1],10),a=parseInt(e[2],10),o=parseInt(e[3],10),l=u=>{const f=u.toString(16);return f.length===1?"0"+f:f};return`#${l(t)}${l(a)}${l(o)}`},gs=n=>{const e=n.match(/rgba?\((\d+), ?(\d+), ?(\d+)(?:, ?(\d*\.?\d+))?\)/);return e&&e[4]!==void 0?parseFloat(e[4]):1},qy=(n,e)=>{const t=Math.max(0,Math.min(1,e));return n.startsWith("rgba")?n.replace(/rgba\((\d+), ?(\d+), ?(\d+)(?:, ?[\d\.]+)?\)/,`rgba($1, $2, $3, ${t})`):n.startsWith("rgb")?n.replace(/rgb\((\d+), ?(\d+), ?(\d+)\)/,`rgba($1, $2, $3, ${t})`):n.startsWith("#")?Tc(n,t):n},ad=(n,e,t)=>"#"+[n,e,t].map(a=>{const o=Math.round(a).toString(16);return o.length===1?"0"+o:o}).join(""),vs=new Map,_0=(n,e,t,a,o)=>{const l=a,u=Math.min(a*o.topLeft/100,l),f=Math.min(a*o.topRight/100,l),h=Math.min(a*o.bottomLeft/100,l),p=Math.min(a*o.bottomRight/100,l);n.beginPath(),n.moveTo(e+u,t),n.lineTo(e+a-f,t),n.arcTo(e+a,t,e+a,t+f,f),n.lineTo(e+a,t+a-p),n.arcTo(e+a,t+a,e+a-p,t+a,p),n.lineTo(e+h,t+a),n.arcTo(e,t+a,e,t+a-h,h),n.lineTo(e,t+u),n.arcTo(e,t,e+u,t,u),n.closePath()},HS=(n,e,t,a,o,l,u)=>{n.strokeStyle="rgba(128, 128, 128, 0.5)",n.lineWidth=1;const f=l+u;n.beginPath();for(let h=0;h<=a;h++){const p=h*f;n.moveTo(p,0),n.lineTo(p,t)}n.stroke(),n.beginPath();for(let h=0;h<=o;h++){const p=h*f;n.moveTo(0,p),n.lineTo(e,p)}n.stroke()},x0=(n,e,t,a)=>{const o=a/2,l=e+o,u=t+o;n.beginPath(),n.arc(l,u,o,0,Math.PI*2),n.closePath()},y0=(n,e,t,a)=>{const o=a/2,l=e+o,u=t+o;n.beginPath(),n.moveTo(l,t),n.lineTo(e+a,u),n.lineTo(l,t+a),n.lineTo(e,u),n.closePath()},b0=(n,e,t,a)=>{n.beginPath(),n.moveTo(e+a/2,t),n.lineTo(e+a,t+a),n.lineTo(e,t+a),n.closePath()},S0=(n,e,t,a)=>{const o=a/2,l=e+o,u=t+o;n.beginPath();for(let f=0;f<6;f++){const h=f*Math.PI/3,p=l+o*Math.cos(h),m=u+o*Math.sin(h);f===0?n.moveTo(p,m):n.lineTo(p,m)}n.closePath()},Nw=(n,e,t,a,o)=>{const l=o!=null&&o.enabled?JSON.stringify(o):"none",u=`${e}-${JSON.stringify(t)}-${a}-${l}`;if(vs.has(u))return vs.get(u);const f=document.createElement("canvas"),h=f.getContext("2d");switch(f.width=e,f.height=e,h.fillStyle="#ffffff",a){case"circle":x0(h,0,0,e),h.fill();break;case"diamond":y0(h,0,0,e),h.fill();break;case"triangle":b0(h,0,0,e),h.fill();break;case"hexagon":S0(h,0,0,e),h.fill();break;case"rectangle":default:o!=null&&o.enabled?(_0(h,0,0,e,o),h.fill()):h.fillRect(0,0,e,e);break}h.globalCompositeOperation="source-in";const p=t.positionX/100*e,m=t.positionY/100*e,v=t.radius/100*e,_=t.color||"#ffffff",x=(t.intensity||0)/100,S=h.createRadialGradient(p,m,0,p,m,v);if(S.addColorStop(0,Tc(_,x)),S.addColorStop(1,Tc(_,0)),h.fillStyle=S,h.fillRect(0,0,e,e),h.globalCompositeOperation="source-over",vs.size>100){const T=vs.keys().next().value;vs.delete(T)}return vs.set(u,f),f},GS=(n,e,t,a,o,l,u)=>{if(!o)return;const f=o.blendMode||"screen",h=Nw(n,a,o,l,u);n.save(),n.globalCompositeOperation=f,n.drawImage(h,e,t),n.restore()},VS=(n,e,t,a,o,l,u,f="rectangle")=>{const h=(l.opacity||0)/100,v=(l.spread||0)/100*a*2,_=l.size||0,x=l.offsetX||0,S=l.offsetY||0,T=l.blendMode||"source-over",b=Math.max(_*2,Math.abs(x),Math.abs(S),v),y=a+v*2+b*2,O=a+v*2+b*2,w=document.createElement("canvas"),E=w.getContext("2d");w.width=y,w.height=O;const L=b+v,B=b+v,R=a+v;switch(E.fillStyle=o,f){case"circle":x0(E,L-v/2,B-v/2,R),E.fill();break;case"diamond":y0(E,L-v/2,B-v/2,R),E.fill();break;case"triangle":b0(E,L-v/2,B-v/2,R),E.fill();break;case"hexagon":S0(E,L-v/2,B-v/2,R),E.fill();break;case"rectangle":default:u!=null&&u.enabled?(_0(E,L-v/2,B-v/2,R,u),E.fill()):E.fillRect(L-v/2,B-v/2,R,R);break}_>0&&(E.globalCompositeOperation="copy",E.filter=`blur(${_/2}px)`,E.drawImage(w,0,0),E.filter="none",E.globalCompositeOperation="source-over"),n.save(),n.globalCompositeOperation=T,n.globalAlpha=h;const V=e+x-v-b,U=t+S-v-b;n.drawImage(w,V,U),n.restore()},XS=(n,e,t,a,o,l,u="rectangle")=>{switch(n.save(),n.globalCompositeOperation="source-over",n.globalAlpha=1,n.fillStyle=o,u){case"circle":x0(n,e,t,a),n.fill();break;case"diamond":y0(n,e,t,a),n.fill();break;case"triangle":b0(n,e,t,a),n.fill();break;case"hexagon":S0(n,e,t,a),n.fill();break;case"rectangle":default:l!=null&&l.enabled?(_0(n,e,t,a,l),n.fill()):n.fillRect(e,t,a,a);break}n.restore()},Ow=Se.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  touch-action: none; /* Disable browser touch behaviors */
`;Se.canvas`
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: crisp-edges;
  touch-action: none; // Prevent touch scrolling while drawing
  background-color: ${n=>n.$backgroundColor||"rgba(240, 240, 240, 1)"};
  pointer-events: auto; // Ensure mouse events are captured
`;const zw=H.memo(({gridWidth:n,gridHeight:e,pixelSize:t,gridGap:a,pixelData:o,showGrid:l,isDrawing:u,onMouseDown:f,onMouseUp:h,onMouseLeave:p,onMouseMove:m,style:v,cornerRadius:_,glowEnabled:x,glowSettings:S,bulbEnabled:T,bulbSettings:b,mode:y,interactionSettings:O,pixelShape:w="rectangle",customShape:E,backgroundColor:L="#f0f0f0",activeMode:B,spaceKeyPressed:R=!1})=>{const V=H.useRef(null);H.useRef(null);const[U,D]=H.useState(!1);H.useRef(t),H.useRef(a),H.useRef(t),H.useRef(a),H.useRef(n),H.useRef(e),H.useEffect(()=>{V.current.getContext("2d",{alpha:!0})},[]);const j=H.useCallback(()=>{const $=V.current;if(!$)return;const ce=document.createElement("canvas"),he=ce.getContext("2d",{alpha:!0});ce.width=n*(t+a)-a,ce.height=e*(t+a)-a,he.drawImage($,0,0);const Ae=ce.toDataURL("image/png",1),De=document.createElement("a");De.download="pixel-art.png",De.href=Ae,De.click()},[n,e,t,a]);H.useEffect(()=>{V.current&&(V.current.exportPNG=j)},[j]);const ne=H.useCallback(()=>{var Ve,it,at;const $=V.current;if(!$)return;const ce=$.getContext("2d");if(!ce)return;const he=$.width,Ae=$.height;ce.clearRect(0,0,he,Ae),ce.fillStyle=L||"rgba(0,0,0,0)",ce.fillRect(0,0,he,Ae),l&&HS(ce,he,Ae,n,e,t,a);const De=t+a;if(x){console.log("[CanvasRenderer] Rendering glow effect with settings:",S);for(let et=0;et<e;et++)for(let N=0;N<n;N++){const Le=(Ve=o[et])==null?void 0:Ve[N];if(Le){const Oe=N*De+a/2,He=et*De+a/2;VS(ce,Oe,He,t,Le,S,_,w)}}}else console.log("[CanvasRenderer] Glow effect is disabled");for(let et=0;et<e;et++)for(let N=0;N<n;N++){const Le=(it=o[et])==null?void 0:it[N];if(Le){const Oe=N*De+a/2,He=et*De+a/2;XS(ce,Oe,He,t,Le,_,w)}}if(T){for(let et=0;et<e;et++)for(let N=0;N<n;N++)if((at=o[et])==null?void 0:at[N]){const Oe=N*De+a/2,He=et*De+a/2;GS(ce,Oe,He,t,b,w,_)}}},[n,e,t,a,o,l,_,x,S,T,b,w,E,L]);H.useEffect(()=>{const $=V.current;if($){const ce=n*(t+a),he=e*(t+a);console.log(`[CanvasRenderer Size Effect] Current: ${$.width}x${$.height}, Expected: ${ce}x${he}, GridGap: ${a}`);const Ae=Math.round(ce),De=Math.round(he);$.width!==Ae&&(console.log(`[CanvasRenderer Size Effect] Setting width: ${Ae}`),$.width=Ae),$.height!==De&&(console.log(`[CanvasRenderer Size Effect] Setting height: ${De}`),$.height=De)}},[n,e,t,a]),H.useEffect(()=>{ne()},[ne]);const Z=($,ce)=>{const he=t+a,Ae=Math.floor($/he),De=Math.floor(ce/he);return{gridX:Math.max(0,Math.min(Ae,n-1)),gridY:Math.max(0,Math.min(De,e-1)),offsetX:Ae*he+a/2,offsetY:De*he+a/2}},ue=H.useCallback($=>{$.preventDefault()},[]),re=H.useCallback($=>{if(y!=="preview"&&$.buttons!==0&&m){const{offsetX:ce,offsetY:he}=$.nativeEvent,Ae=Z(ce,he);m({...Ae,buttons:$.buttons,metaKey:$.metaKey,originalEvent:$})}},[y,m,Z,n,e]),X=H.useCallback($=>{if(y!=="preview"&&f){const{offsetX:ce,offsetY:he}=$.nativeEvent,Ae=Z(ce,he);f({...Ae,buttons:$.buttons,metaKey:$.metaKey,originalEvent:$})}},[y,f,Z,n,e]),J=H.useCallback($=>{if(y!=="preview"&&h){const{offsetX:ce,offsetY:he}=$.nativeEvent,Ae=Z(ce,he);h({...Ae,buttons:$.buttons,metaKey:$.metaKey,originalEvent:$})}},[y,h,Z,n,e]),q=H.useCallback($=>{y!=="preview"&&p&&p($)},[y,p]),_e=H.useRef(!1),F=H.useRef(null),te=H.useCallback($=>{if(y!=="preview"){if($.preventDefault(),F.current&&(clearTimeout(F.current),F.current=null),$.touches.length>1){_e.current=!0;return}F.current=setTimeout(()=>{if(!_e.current&&f){const ce=$.touches[0],he=$.target.getBoundingClientRect(),Ae=ce.clientX-he.left,De=ce.clientY-he.top,Ve=he.width/$.target.width,it=he.height/$.target.height,at=Ae/Ve,et=De/it,N=Z(at,et);f({...N,buttons:1,metaKey:!1,originalEvent:$})}F.current=null},20)}},[y,f,Z]),xe=H.useCallback($=>{if(y!=="preview"){if($.preventDefault(),_e.current||$.touches.length>1){_e.current=!0;return}if(m){const ce=$.touches[0],he=$.target.getBoundingClientRect(),Ae=ce.clientX-he.left,De=ce.clientY-he.top,Ve=he.width/$.target.width,it=he.height/$.target.height,at=Ae/Ve,et=De/it,N=Z(at,et);m({...N,buttons:1,metaKey:!1,originalEvent:$})}}},[y,m,Z]),Te=H.useCallback($=>{if(y!=="preview"&&($.preventDefault(),$.touches.length===0&&(_e.current=!1),!_e.current&&h)){let ce=0,he=0;if($.changedTouches.length>0){const De=$.changedTouches[0],Ve=$.target.getBoundingClientRect();ce=De.clientX-Ve.left,he=De.clientY-Ve.top;const it=Ve.width/$.target.width,at=Ve.height/$.target.height;ce=ce/it,he=he/at}const Ae=Z(ce,he);h({...Ae,buttons:0,metaKey:!1,originalEvent:$})}},[y,h,Z]),K=H.useCallback($=>{y!=="preview"&&p&&p($)},[y,p]);return H.useEffect(()=>()=>{F.current&&clearTimeout(F.current)},[]),M.jsx(Ow,{children:M.jsx("canvas",{ref:V,onMouseDown:X,onMouseUp:J,onMouseMove:re,onMouseLeave:q,onTouchStart:te,onTouchMove:xe,onTouchEnd:Te,onTouchCancel:K,onContextMenu:ue,style:v,width:n*(t+a)-a,height:e*(t+a)-a})})}),_s=new Map,Bw=Se.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  touch-action: none; /* Disable browser touch behaviors */
`,Fw=Se.svg`
  display: block;
  background-color: ${n=>n.$backgroundColor||"rgba(240, 240, 240, 1)"};
  overflow: visible;
  transform-origin: top left;
  image-rendering: pixelated;
  transform-origin: 0 0;
  image-rendering: crisp-edges;
  shape-rendering: crispEdges;
  cursor: inherit; /* Inherit cursor from parent */
  will-change: transform; /* Hint for hardware acceleration */
  pointer-events: auto; /* Ensure mouse events are captured */
  backface-visibility: hidden; /* Additional GPU acceleration */
  perspective: 1000; /* Helps with 3D transforms */
  -webkit-font-smoothing: antialiased; /* Smooth rendering */
  -moz-osx-font-smoothing: grayscale; /* Smooth rendering in Firefox */
  filter: translateZ(0); /* Force GPU rendering */
  touch-action: none; /* Disable browser touch behaviors */
`,Gp=Se.path`
  cursor: inherit; /* Inherit cursor from parent container */
  will-change: transform, filter; /* Hint for GPU acceleration */
  transform: translateZ(0); /* Force GPU rendering */
  backface-visibility: hidden; /* Additional GPU hint */
`;Se.path`
  cursor: inherit; /* Inherit cursor from parent container */
  will-change: transform, filter; /* Hint for GPU acceleration */
  transform: translateZ(0); /* Force GPU rendering */
  backface-visibility: hidden; /* Additional GPU hint */
`;const Iw=Se.rect`
  fill: transparent;
  stroke: none;
  pointer-events: all;
  cursor: inherit;
  will-change: transform;
  transform: translateZ(0);
`,kw=H.memo(H.forwardRef(({gridWidth:n,gridHeight:e,pixelSize:t,gridGap:a,pixelData:o,showGrid:l,mode:u,interactionSettings:f,onCanvasMouseDown:h,onCanvasMouseMove:p,onCanvasMouseUp:m,onCanvasMouseLeave:v,onClick:_,zoomState:x,cornerRadius:S={enabled:!1,topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},pixelShape:T="rectangle",customShape:b={path:"",viewBox:"0 0 100 100"},backgroundColor:y="#f0f0f0",activeTool:O,glowEnabled:w=!1,glowSettings:E={},bulbEnabled:L=!1,bulbSettings:B={}},R)=>{const V=n*(t+a),U=e*(t+a),[D,j]=H.useState({left:0,top:0,width:1e3,height:1e3,scale:1}),ne=H.useRef(null),Z=H.useRef(null),ue=H.useRef(!1),re=H.useRef(null);H.useEffect(()=>{var Oe;const N=()=>{if(ne.current){const He=ne.current.parentElement;if(He){const je=He.getBoundingClientRect(),Pe=ne.current.getBoundingClientRect().width/V;j(k=>Math.abs(k.width-je.width/Pe)>1||Math.abs(k.height-je.height/Pe)>1||Math.abs(k.scale-Pe)>.01?{left:0,top:0,width:je.width/Pe,height:je.height/Pe,scale:Pe}:k)}}};N();const Le=new ResizeObserver(()=>{Z.current&&cancelAnimationFrame(Z.current),Z.current=requestAnimationFrame(N)});return(Oe=ne.current)!=null&&Oe.parentElement&&Le.observe(ne.current.parentElement),()=>{Le.disconnect(),Z.current&&cancelAnimationFrame(Z.current)}},[V]),H.useEffect(()=>{R&&ne.current&&(R.current=ne.current)},[R,ne.current]);const X=H.useCallback(N=>{if(!ne.current)return{gridX:-1,gridY:-1,buttons:0};const Oe=ne.current.getBoundingClientRect(),He=Oe.width/V,je=Oe.height/U,nt=N.clientX-Oe.left,Pe=N.clientY-Oe.top,k=nt/He,C=Pe/je,ae=t+a,be=Math.floor(k/ae),we=Math.floor(C/ae);return{gridX:Math.max(0,Math.min(be,n-1)),gridY:Math.max(0,Math.min(we,e-1)),buttons:N.buttons}},[n,e,t,a,V,U,ne]),J=H.useCallback(N=>{const Le=X(N);Le.gridX>=0&&Le.gridY>=0&&Le.gridX<n&&Le.gridY<e&&_&&_(Le)},[X,_,n,e]),q=H.useCallback(N=>{const Le=X(N);Le.gridX>=0&&Le.gridY>=0&&Le.gridX<n&&Le.gridY<e&&h&&h(Le),N.preventDefault()},[X,h,n,e]),_e=H.useCallback(N=>{const Le=X(N);Le.gridX>=0&&Le.gridY>=0&&Le.gridX<n&&Le.gridY<e&&m&&m(Le),N.preventDefault()},[X,m,n,e]),F=H.useCallback(N=>{Z.current&&cancelAnimationFrame(Z.current),Z.current=requestAnimationFrame(()=>{const Le=X(N);Le.gridX>=0&&Le.gridY>=0&&Le.gridX<n&&Le.gridY<e&&p&&p(Le)}),N.preventDefault()},[X,p,n,e]),te=H.useCallback(N=>{v&&v(),N.preventDefault()},[v]),xe=H.useCallback(N=>{if(ne.current){if(N.preventDefault(),re.current&&(clearTimeout(re.current),re.current=null),N.touches.length>1){ue.current=!0;return}re.current=setTimeout(()=>{if(!ue.current){const Le=N.touches[0],Oe={clientX:Le.clientX,clientY:Le.clientY,buttons:1,preventDefault:()=>{}},He=X(Oe);h&&h({...He,buttons:1,metaKey:!1,originalEvent:N})}re.current=null},20)}},[X,h,ne]),Te=H.useCallback(N=>{if(ne.current){if(N.preventDefault(),ue.current||N.touches.length>1){ue.current=!0;return}Z.current&&cancelAnimationFrame(Z.current),Z.current=requestAnimationFrame(()=>{const Le=N.touches[0],Oe={clientX:Le.clientX,clientY:Le.clientY,buttons:1,preventDefault:()=>{}},He=X(Oe);p&&p({...He,buttons:1,metaKey:!1,originalEvent:N})})}},[X,p,ne]),K=H.useCallback(N=>{if(!ne.current||(N.preventDefault(),N.touches.length===0&&(ue.current=!1),ue.current))return;let Le;if(N.changedTouches.length>0){const He=N.changedTouches[0];Le={clientX:He.clientX,clientY:He.clientY,buttons:0,preventDefault:()=>{}}}else Le={clientX:0,clientY:0,buttons:0,preventDefault:()=>{}};const Oe=X(Le);m&&m({...Oe,buttons:0,metaKey:!1,originalEvent:N}),_&&_(Oe)},[X,m,_,ne]),$=H.useCallback(N=>{v&&v()},[v]),ce=H.useMemo(()=>{const{left:N,top:Le,width:Oe,height:He,scale:je}=D,nt=t+a,Pe=5,k=Math.max(0,Math.floor(N/nt)-Pe),C=Math.min(n,Math.ceil((N+Oe)/nt)+Pe),ae=Math.max(0,Math.floor(Le/nt)-Pe),be=Math.min(e,Math.ceil((Le+He)/nt)+Pe);return{startX:k,endX:C,startY:ae,endY:be}},[D,t,a,n,e]),he=H.useMemo(()=>{if(!l)return null;const N=[],Le=t+a,{startX:Oe,endX:He,startY:je,endY:nt}=ce;for(let Pe=Oe;Pe<=He;Pe++)N.push(M.jsx("line",{x1:Pe*Le-.5,y1:0,x2:Pe*Le-.5,y2:U,stroke:"rgba(128, 128, 128, 0.5)",strokeWidth:"1"},`v${Pe}`));for(let Pe=je;Pe<=nt;Pe++)N.push(M.jsx("line",{x1:0,y1:Pe*Le-.5,x2:V,y2:Pe*Le-.5,stroke:"rgba(128, 128, 128, 0.5)",strokeWidth:"1"},`h${Pe}`));return N},[l,t,a,ce,V,U]);H.useCallback(N=>{if(!(S!=null&&S.enabled))return 0;const Le=t;return S[N]/100,Math.min(t*S[N]/100,Le)},[S,t]);const Ae=(N,Le,Oe,He,je,nt)=>{const Pe=`${N}_${Le}_${Oe}_${He}_${JSON.stringify(je)}_${(nt==null?void 0:nt.path)||""}`;if(_s.has(Pe))return _s.get(Pe);let k;if(He==="custom"&&(nt!=null&&nt.path))k=nt.path;else switch(He){case"circle":{const C=Oe/2,ae=N+C;k=`M ${ae},${Le} A ${C},${C} 0 1,1 ${ae-.001},${Le} Z`;break}case"diamond":{const C=Oe/2;k=`M ${N+C},${Le} L ${N+Oe},${Le+C} L ${N+C},${Le+Oe} L ${N},${Le+C} Z`;break}case"triangle":k=`M ${N+Oe/2},${Le} L ${N+Oe},${Le+Oe} L ${N},${Le+Oe} Z`;break;case"hexagon":{const C=Oe/2,ae=N+C,be=Le+C;k="M ";for(let we=0;we<6;we++){const me=we*Math.PI/3,Fe=ae+C*Math.cos(me),Ne=be+C*Math.sin(me);we===0?k+=`${Fe},${Ne} `:k+=`L ${Fe},${Ne} `}k+="Z";break}case"rectangle":default:if(je!=null&&je.enabled){const C=Oe/2,ae=Math.min(Oe*je.topLeft/100,C),be=Math.min(Oe*je.topRight/100,C),we=Math.min(Oe*je.bottomLeft/100,C),me=Math.min(Oe*je.bottomRight/100,C);k=`
              M ${N+ae},${Le}
              H ${N+Oe-be}
              Q ${N+Oe},${Le} ${N+Oe},${Le+be}
              V ${Le+Oe-me}
              Q ${N+Oe},${Le+Oe} ${N+Oe-me},${Le+Oe}
              H ${N+we}
              Q ${N},${Le+Oe} ${N},${Le+Oe-we}
              V ${Le+ae}
              Q ${N},${Le} ${N+ae},${Le}
              Z
            `}else k=`M ${N},${Le} H ${N+Oe} V ${Le+Oe} H ${N} Z`}if(_s.set(Pe,k),_s.size>1e3){const C=_s.keys().next().value;_s.delete(C)}return k},[De,Ve]=H.useState(0),it=H.useRef(o);H.useEffect(()=>{o!==it.current&&(Ve(N=>N+1),it.current=o)},[o]);const at=H.useMemo(()=>{var C;const N=[],Le=[],Oe=[],He=t+a,{startX:je,endX:nt,startY:Pe,endY:k}=ce;for(let ae=Pe;ae<k;ae++)for(let be=je;be<nt;be++){const we=(C=o[ae])==null?void 0:C[be];if(we){const me=be*He+a/2,Fe=ae*He+a/2,Ne=Ae(me,Fe,t,T,S,b),ke=`${be}-${ae}`;if(T==="circle"){const pt=t/2,Be=me+pt,Ye=Fe+pt;Le.push(M.jsx("circle",{cx:Be,cy:Ye,r:pt,fill:we},`${ke}-pixel-circle`))}else Le.push(M.jsx(Gp,{d:Ne,fill:we},`${ke}-pixel`));if(w)if(T==="circle"){const pt=t/2,Be=me+pt,Ye=Fe+pt;N.push(M.jsx("circle",{cx:Be,cy:Ye,r:pt,fill:we,filter:"url(#glowFilter)",style:{mixBlendMode:E.blendMode||"source-over"}},`${ke}-glow-circle`))}else N.push(M.jsx(Gp,{d:Ne,fill:we,filter:"url(#glowFilter)",style:{mixBlendMode:E.blendMode||"source-over"}},`${ke}-glow`));if(L)if(T==="circle"){const pt=t/2,Be=me+pt,Ye=Fe+pt;Oe.push(M.jsx("circle",{cx:Be,cy:Ye,r:pt,fill:"url(#bulbGradient)",style:{mixBlendMode:B.blendMode||"screen"}},`${ke}-bulb-circle`))}else Oe.push(M.jsx(Gp,{d:Ne,fill:"url(#bulbGradient)",style:{mixBlendMode:B.blendMode||"screen"}},`${ke}-bulb`))}}return[...N,...Le,...Oe]},[o,t,a,T,S,b,ce,w,E,L,B,Ae]),et=H.useMemo(()=>M.jsx(Iw,{x:0,y:0,width:V,height:U,onClick:J}),[V,U,J]);return H.useEffect(()=>()=>{Z.current&&cancelAnimationFrame(Z.current),re.current&&clearTimeout(re.current)},[]),M.jsx(Bw,{children:M.jsxs(Fw,{ref:ne,width:V,height:U,viewBox:`0 0 ${V} ${U}`,preserveAspectRatio:"xMinYMin meet",$backgroundColor:y,onMouseDown:q,onMouseUp:_e,onMouseLeave:te,onMouseMove:F,onContextMenu:N=>N.preventDefault(),onTouchStart:xe,onTouchMove:Te,onTouchEnd:K,onTouchCancel:$,children:[M.jsxs("defs",{children:[M.jsxs("filter",{id:"glowFilter",x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[M.jsx("feMorphology",{operator:"dilate",radius:E.spread/100*t||0,in:"SourceGraphic",result:"spread"}),M.jsx("feOffset",{dx:E.offsetX||0,dy:E.offsetY||0,in:"spread",result:"offset"}),M.jsx("feGaussianBlur",{stdDeviation:E.size/2||0,in:"offset",result:"blurred"}),M.jsx("feComponentTransfer",{in:"blurred",result:"opacityControlled",children:M.jsx("feFuncA",{type:"linear",slope:E.opacity/100||0})}),M.jsxs("feMerge",{children:[M.jsx("feMergeNode",{in:"opacityControlled"})," "]})]}),M.jsxs("radialGradient",{id:"bulbGradient",cx:`${B.positionX||50}%`,cy:`${B.positionY||50}%`,r:`${B.radius||50}%`,gradientUnits:"objectBoundingBox",spreadMethod:"pad",children:[M.jsx("stop",{offset:"0%",stopColor:B.color||"#ffffff",stopOpacity:(B.intensity||0)/100}),M.jsx("stop",{offset:"100%",stopColor:B.color||"#ffffff",stopOpacity:"0"})]})]}),M.jsxs("g",{className:"pixels-layer",children:[at," "]}),M.jsx("g",{className:"interaction-layer",children:et}),l&&M.jsx("g",{className:"grid-layer",children:he})]})})}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const M0="175",Hw=0,$y=1,Gw=2,jS=1,Vw=2,Za=3,Yr=0,mi=1,Qa=2,Vr=0,Xs=1,Zy=2,Ky=3,Qy=4,Xw=5,Eo=100,jw=101,Yw=102,Ww=103,qw=104,$w=200,Zw=201,Kw=202,Qw=203,Zm=204,Km=205,Jw=206,eC=207,tC=208,nC=209,iC=210,aC=211,rC=212,oC=213,sC=214,Qm=0,Jm=1,eg=2,Js=3,tg=4,ng=5,ig=6,ag=7,YS=0,lC=1,cC=2,Xr=0,uC=1,fC=2,dC=3,hC=4,pC=5,mC=6,gC=7,WS=300,el=301,tl=302,rg=303,og=304,Ed=306,sg=1e3,wo=1001,lg=1002,wi=1003,vC=1004,ef=1005,Ma=1006,Vp=1007,Co=1008,tr=1009,qS=1010,$S=1011,Ac=1012,E0=1013,Uo=1014,Ea=1015,Oc=1016,T0=1017,A0=1018,wc=1020,ZS=35902,KS=1021,QS=1022,aa=1023,JS=1024,eM=1025,Cc=1026,Rc=1027,w0=1028,C0=1029,tM=1030,R0=1031,D0=1033,Vf=33776,Xf=33777,jf=33778,Yf=33779,cg=35840,ug=35841,fg=35842,dg=35843,hg=36196,pg=37492,mg=37496,gg=37808,vg=37809,_g=37810,xg=37811,yg=37812,bg=37813,Sg=37814,Mg=37815,Eg=37816,Tg=37817,Ag=37818,wg=37819,Cg=37820,Rg=37821,Wf=36492,Dg=36494,Lg=36495,nM=36283,Ug=36284,Pg=36285,Ng=36286,_C=3200,xC=3201,yC=0,bC=1,kr="",Hi="srgb",nl="srgb-linear",rd="linear",nn="srgb",xs=7680,Jy=519,SC=512,MC=513,EC=514,iM=515,TC=516,AC=517,wC=518,CC=519,eb=35044,tb=35048,nb="300 es",Ja=2e3,od=2001;class ol{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xp=Math.PI/180,Og=180/Math.PI;function zc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Qn[n&255]+Qn[n>>8&255]+Qn[n>>16&255]+Qn[n>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function RC(n,e){return(n%e+e)%e}function jp(n,e,t){return(1-t)*n+t*e}function oc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class on{constructor(e=0,t=0){on.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,o=e.elements;return this.x=o[0]*t+o[3]*a+o[6],this.y=o[1]*t+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(It(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*o+e.x,this.y=l*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,a,o,l,u,f,h,p){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,u,f,h,p)}set(e,t,a,o,l,u,f,h,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=h,m[6]=a,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,u=a[0],f=a[3],h=a[6],p=a[1],m=a[4],v=a[7],_=a[2],x=a[5],S=a[8],T=o[0],b=o[3],y=o[6],O=o[1],w=o[4],E=o[7],L=o[2],B=o[5],R=o[8];return l[0]=u*T+f*O+h*L,l[3]=u*b+f*w+h*B,l[6]=u*y+f*E+h*R,l[1]=p*T+m*O+v*L,l[4]=p*b+m*w+v*B,l[7]=p*y+m*E+v*R,l[2]=_*T+x*O+S*L,l[5]=_*b+x*w+S*B,l[8]=_*y+x*E+S*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8];return t*u*m-t*f*p-a*l*m+a*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=m*u-f*p,_=f*h-m*l,x=p*l-u*h,S=t*v+a*_+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=v*T,e[1]=(o*p-m*a)*T,e[2]=(f*a-o*u)*T,e[3]=_*T,e[4]=(m*t-o*h)*T,e[5]=(o*l-f*t)*T,e[6]=x*T,e[7]=(a*h-p*t)*T,e[8]=(u*t-a*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(a*h,a*p,-a*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Yp.makeScale(e,t)),this}rotate(e){return this.premultiply(Yp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<9;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yp=new At;function aM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DC(){const n=sd("canvas");return n.style.display="block",n}const ib={};function qf(n){n in ib||(ib[n]=!0,console.warn(n))}function LC(n,e,t){return new Promise(function(a,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}function UC(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PC(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ab=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rb=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NC(){const n={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===nn&&(o.r=er(o.r),o.g=er(o.g),o.b=er(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===nn&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===kr?rd:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return n.define({[nl]:{primaries:e,whitePoint:a,transfer:rd,toXYZ:ab,fromXYZ:rb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:e,whitePoint:a,transfer:nn,toXYZ:ab,fromXYZ:rb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),n}const Gt=NC();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class OC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ys===void 0&&(ys=sd("canvas")),ys.width=e.width,ys.height=e.height;const o=ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=ys}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sd("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=er(l[u]/255)*255;return a.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(er(t[a]/255)*255):t[a]=er(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zC=0;class L0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=zc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Wp(o[u].image)):l.push(Wp(o[u]))}else l=Wp(o);a.url=l}return t||(e.images[this.uuid]=a),a}}function Wp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BC=0;class oi extends ol{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,a=wo,o=wo,l=Ma,u=Co,f=aa,h=tr,p=oi.DEFAULT_ANISOTROPY,m=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BC++}),this.uuid=zc(),this.name="",this.source=new L0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new on(0,0),this.repeat=new on(1,1),this.center=new on(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==WS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sg:e.x=e.x-Math.floor(e.x);break;case wo:e.x=e.x<0?0:1;break;case lg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sg:e.y=e.y-Math.floor(e.y);break;case wo:e.y=e.y<0?0:1;break;case lg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=WS;oi.DEFAULT_ANISOTROPY=1;class An{constructor(e=0,t=0,a=0,o=1){An.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,o){return this.x=e,this.y=t,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,o,l;const h=e.elements,p=h[0],m=h[4],v=h[8],_=h[1],x=h[5],S=h[9],T=h[2],b=h[6],y=h[10];if(Math.abs(m-_)<.01&&Math.abs(v-T)<.01&&Math.abs(S-b)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+T)<.1&&Math.abs(S+b)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(p+1)/2,E=(x+1)/2,L=(y+1)/2,B=(m+_)/4,R=(v+T)/4,V=(S+b)/4;return w>E&&w>L?w<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(w),o=B/a,l=R/a):E>L?E<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(E),a=B/o,l=V/o):L<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),a=R/l,o=V/l),this.set(a,o,l,t),this}let O=Math.sqrt((b-S)*(b-S)+(v-T)*(v-T)+(_-m)*(_-m));return Math.abs(O)<.001&&(O=1),this.x=(b-S)/O,this.y=(v-T)/O,this.z=(_-m)/O,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FC extends ol{constructor(e=1,t=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t);const o={width:e,height:t,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ma,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new oi(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new L0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Po extends FC{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class rM extends oi{constructor(e=null,t=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=wo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IC extends oi{constructor(e=null,t=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=wo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bc{constructor(e=0,t=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=o}static slerpFlat(e,t,a,o,l,u,f){let h=a[o+0],p=a[o+1],m=a[o+2],v=a[o+3];const _=l[u+0],x=l[u+1],S=l[u+2],T=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=x,e[t+2]=S,e[t+3]=T;return}if(v!==T||h!==_||p!==x||m!==S){let b=1-f;const y=h*_+p*x+m*S+v*T,O=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const L=Math.sqrt(w),B=Math.atan2(L,y*O);b=Math.sin(b*B)/L,f=Math.sin(f*B)/L}const E=f*O;if(h=h*b+_*E,p=p*b+x*E,m=m*b+S*E,v=v*b+T*E,b===1-f){const L=1/Math.sqrt(h*h+p*p+m*m+v*v);h*=L,p*=L,m*=L,v*=L}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,o,l,u){const f=a[o],h=a[o+1],p=a[o+2],m=a[o+3],v=l[u],_=l[u+1],x=l[u+2],S=l[u+3];return e[t]=f*S+m*v+h*x-p*_,e[t+1]=h*S+m*_+p*v-f*x,e[t+2]=p*S+m*x+f*_-h*v,e[t+3]=m*S-f*v-h*_-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,o){return this._x=e,this._y=t,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(a/2),m=f(o/2),v=f(l/2),_=h(a/2),x=h(o/2),S=h(l/2);switch(u){case"XYZ":this._x=_*m*v+p*x*S,this._y=p*x*v-_*m*S,this._z=p*m*S+_*x*v,this._w=p*m*v-_*x*S;break;case"YXZ":this._x=_*m*v+p*x*S,this._y=p*x*v-_*m*S,this._z=p*m*S-_*x*v,this._w=p*m*v+_*x*S;break;case"ZXY":this._x=_*m*v-p*x*S,this._y=p*x*v+_*m*S,this._z=p*m*S+_*x*v,this._w=p*m*v-_*x*S;break;case"ZYX":this._x=_*m*v-p*x*S,this._y=p*x*v+_*m*S,this._z=p*m*S-_*x*v,this._w=p*m*v+_*x*S;break;case"YZX":this._x=_*m*v+p*x*S,this._y=p*x*v+_*m*S,this._z=p*m*S-_*x*v,this._w=p*m*v-_*x*S;break;case"XZY":this._x=_*m*v-p*x*S,this._y=p*x*v-_*m*S,this._z=p*m*S+_*x*v,this._w=p*m*v+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],m=t[6],v=t[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-h)*x,this._y=(l-p)*x,this._z=(u-o)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(m-h)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-o)/x,this._x=(l+p)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,t/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,m=t._w;return this._x=a*m+u*f+o*p-l*h,this._y=o*m+u*h+l*f-a*p,this._z=l*m+u*p+a*h-o*f,this._w=u*m-a*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+a*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=a,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*a+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,f),v=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ye{constructor(e=0,t=0,a=0){ye.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ob.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ob.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*o,this.y=l[1]*t+l[4]*a+l[7]*o,this.z=l[2]*t+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*a),m=2*(f*t-l*o),v=2*(l*a-u*t);return this.x=t+h*p+u*v-f*m,this.y=a+h*m+f*p-l*v,this.z=o+h*v+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*o,this.y=l[1]*t+l[5]*a+l[9]*o,this.z=l[2]*t+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-a*h,this.z=a*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return qp.copy(this).projectOnVector(e),this.sub(qp)}reflect(e){return this.sub(qp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(It(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return t*t+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const o=Math.sin(t)*e;return this.x=o*Math.sin(a),this.y=Math.cos(t)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qp=new ye,ob=new Bc;class zo{constructor(e=new ye(1/0,1/0,1/0),t=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ki):Ki.fromBufferAttribute(l,u),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tf.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),tf.copy(a.boundingBox)),tf.applyMatrix4(e.matrixWorld),this.union(tf)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sc),nf.subVectors(this.max,sc),bs.subVectors(e.a,sc),Ss.subVectors(e.b,sc),Ms.subVectors(e.c,sc),Rr.subVectors(Ss,bs),Dr.subVectors(Ms,Ss),go.subVectors(bs,Ms);let t=[0,-Rr.z,Rr.y,0,-Dr.z,Dr.y,0,-go.z,go.y,Rr.z,0,-Rr.x,Dr.z,0,-Dr.x,go.z,0,-go.x,-Rr.y,Rr.x,0,-Dr.y,Dr.x,0,-go.y,go.x,0];return!$p(t,bs,Ss,Ms,nf)||(t=[1,0,0,0,1,0,0,0,1],!$p(t,bs,Ss,Ms,nf))?!1:(af.crossVectors(Rr,Dr),t=[af.x,af.y,af.z],$p(t,bs,Ss,Ms,nf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xa=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],Ki=new ye,tf=new zo,bs=new ye,Ss=new ye,Ms=new ye,Rr=new ye,Dr=new ye,go=new ye,sc=new ye,nf=new ye,af=new ye,vo=new ye;function $p(n,e,t,a,o){for(let l=0,u=n.length-3;l<=u;l+=3){vo.fromArray(n,l);const f=o.x*Math.abs(vo.x)+o.y*Math.abs(vo.y)+o.z*Math.abs(vo.z),h=e.dot(vo),p=t.dot(vo),m=a.dot(vo);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>f)return!1}return!0}const kC=new zo,lc=new ye,Zp=new ye;class sl{constructor(e=new ye,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):kC.setFromPoints(e).getCenter(a);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lc.subVectors(e,this.center);const t=lc.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),o=(a-this.radius)*.5;this.center.addScaledVector(lc,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lc.copy(e.center).add(Zp)),this.expandByPoint(lc.copy(e.center).sub(Zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ja=new ye,Kp=new ye,rf=new ye,Lr=new ye,Qp=new ye,of=new ye,Jp=new ye;class U0{constructor(e=new ye,t=new ye(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ja.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,t),ja.distanceToSquared(e))}distanceSqToSegment(e,t,a,o){Kp.copy(e).add(t).multiplyScalar(.5),rf.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Kp);const l=e.distanceTo(t)*.5,u=-this.direction.dot(rf),f=Lr.dot(this.direction),h=-Lr.dot(rf),p=Lr.lengthSq(),m=Math.abs(1-u*u);let v,_,x,S;if(m>0)if(v=u*h-f,_=u*f-h,S=l*m,v>=0)if(_>=-S)if(_<=S){const T=1/m;v*=T,_*=T,x=v*(v+u*_+2*f)+_*(u*v+_+2*h)+p}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;else _<=-S?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+p):_<=S?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+p):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*h)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Kp).addScaledVector(rf,_),x}intersectSphere(e,t){ja.subVectors(e.center,this.origin);const a=ja.dot(this.direction),o=ja.dot(ja)-a*a,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=a-u,h=a+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,o,l,u,f,h;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),a>u||l>o||((l>a||isNaN(a))&&(a=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),a>h||f>o)||((f>a||a!==a)&&(a=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(a>=0?a:o,t)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,t,a,o,l){Qp.subVectors(t,e),of.subVectors(a,e),Jp.crossVectors(Qp,of);let u=this.direction.dot(Jp),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const h=f*this.direction.dot(of.crossVectors(Lr,of));if(h<0)return null;const p=f*this.direction.dot(Qp.cross(Lr));if(p<0||h+p>u)return null;const m=-f*Lr.dot(Jp);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,t,a,o,l,u,f,h,p,m,v,_,x,S,T,b){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,u,f,h,p,m,v,_,x,S,T,b)}set(e,t,a,o,l,u,f,h,p,m,v,_,x,S,T,b){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=h,y[2]=p,y[6]=m,y[10]=v,y[14]=_,y[3]=x,y[7]=S,y[11]=T,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,o=1/Es.setFromMatrixColumn(e,0).length(),l=1/Es.setFromMatrixColumn(e,1).length(),u=1/Es.setFromMatrixColumn(e,2).length();return t[0]=a[0]*o,t[1]=a[1]*o,t[2]=a[2]*o,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,o=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),h=Math.cos(o),p=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*m,x=u*v,S=f*m,T=f*v;t[0]=h*m,t[4]=-h*v,t[8]=p,t[1]=x+S*p,t[5]=_-T*p,t[9]=-f*h,t[2]=T-_*p,t[6]=S+x*p,t[10]=u*h}else if(e.order==="YXZ"){const _=h*m,x=h*v,S=p*m,T=p*v;t[0]=_+T*f,t[4]=S*f-x,t[8]=u*p,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=x*f-S,t[6]=T+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*m,x=h*v,S=p*m,T=p*v;t[0]=_-T*f,t[4]=-u*v,t[8]=S+x*f,t[1]=x+S*f,t[5]=u*m,t[9]=T-_*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*m,x=u*v,S=f*m,T=f*v;t[0]=h*m,t[4]=S*p-x,t[8]=_*p+T,t[1]=h*v,t[5]=T*p+_,t[9]=x*p-S,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,x=u*p,S=f*h,T=f*p;t[0]=h*m,t[4]=T-_*v,t[8]=S*v+x,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-p*m,t[6]=x*v+S,t[10]=_-T*v}else if(e.order==="XZY"){const _=u*h,x=u*p,S=f*h,T=f*p;t[0]=h*m,t[4]=-v,t[8]=p*m,t[1]=_*v+T,t[5]=u*m,t[9]=x*v-S,t[2]=S*v-x,t[6]=f*m,t[10]=T*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HC,e,GC)}lookAt(e,t,a){const o=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ur.crossVectors(a,Ei),Ur.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ur.crossVectors(a,Ei)),Ur.normalize(),sf.crossVectors(Ei,Ur),o[0]=Ur.x,o[4]=sf.x,o[8]=Ei.x,o[1]=Ur.y,o[5]=sf.y,o[9]=Ei.y,o[2]=Ur.z,o[6]=sf.z,o[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,u=a[0],f=a[4],h=a[8],p=a[12],m=a[1],v=a[5],_=a[9],x=a[13],S=a[2],T=a[6],b=a[10],y=a[14],O=a[3],w=a[7],E=a[11],L=a[15],B=o[0],R=o[4],V=o[8],U=o[12],D=o[1],j=o[5],ne=o[9],Z=o[13],ue=o[2],re=o[6],X=o[10],J=o[14],q=o[3],_e=o[7],F=o[11],te=o[15];return l[0]=u*B+f*D+h*ue+p*q,l[4]=u*R+f*j+h*re+p*_e,l[8]=u*V+f*ne+h*X+p*F,l[12]=u*U+f*Z+h*J+p*te,l[1]=m*B+v*D+_*ue+x*q,l[5]=m*R+v*j+_*re+x*_e,l[9]=m*V+v*ne+_*X+x*F,l[13]=m*U+v*Z+_*J+x*te,l[2]=S*B+T*D+b*ue+y*q,l[6]=S*R+T*j+b*re+y*_e,l[10]=S*V+T*ne+b*X+y*F,l[14]=S*U+T*Z+b*J+y*te,l[3]=O*B+w*D+E*ue+L*q,l[7]=O*R+w*j+E*re+L*_e,l[11]=O*V+w*ne+E*X+L*F,l[15]=O*U+w*Z+E*J+L*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],m=e[2],v=e[6],_=e[10],x=e[14],S=e[3],T=e[7],b=e[11],y=e[15];return S*(+l*h*v-o*p*v-l*f*_+a*p*_+o*f*x-a*h*x)+T*(+t*h*x-t*p*_+l*u*_-o*u*x+o*p*m-l*h*m)+b*(+t*p*v-t*f*x-l*u*v+a*u*x+l*f*m-a*p*m)+y*(-o*f*m-t*h*v+t*f*_+o*u*v-a*u*_+a*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],v=e[9],_=e[10],x=e[11],S=e[12],T=e[13],b=e[14],y=e[15],O=v*b*p-T*_*p+T*h*x-f*b*x-v*h*y+f*_*y,w=S*_*p-m*b*p-S*h*x+u*b*x+m*h*y-u*_*y,E=m*T*p-S*v*p+S*f*x-u*T*x-m*f*y+u*v*y,L=S*v*h-m*T*h-S*f*_+u*T*_+m*f*b-u*v*b,B=t*O+a*w+o*E+l*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/B;return e[0]=O*R,e[1]=(T*_*l-v*b*l-T*o*x+a*b*x+v*o*y-a*_*y)*R,e[2]=(f*b*l-T*h*l+T*o*p-a*b*p-f*o*y+a*h*y)*R,e[3]=(v*h*l-f*_*l-v*o*p+a*_*p+f*o*x-a*h*x)*R,e[4]=w*R,e[5]=(m*b*l-S*_*l+S*o*x-t*b*x-m*o*y+t*_*y)*R,e[6]=(S*h*l-u*b*l-S*o*p+t*b*p+u*o*y-t*h*y)*R,e[7]=(u*_*l-m*h*l+m*o*p-t*_*p-u*o*x+t*h*x)*R,e[8]=E*R,e[9]=(S*v*l-m*T*l-S*a*x+t*T*x+m*a*y-t*v*y)*R,e[10]=(u*T*l-S*f*l+S*a*p-t*T*p-u*a*y+t*f*y)*R,e[11]=(m*f*l-u*v*l-m*a*p+t*v*p+u*a*x-t*f*x)*R,e[12]=L*R,e[13]=(m*T*o-S*v*o+S*a*_-t*T*_-m*a*b+t*v*b)*R,e[14]=(S*f*o-u*T*o-S*a*h+t*T*h+u*a*b-t*f*b)*R,e[15]=(u*v*o-m*f*o+m*a*h-t*v*h-u*a*_+t*f*_)*R,this}scale(e){const t=this.elements,a=e.x,o=e.y,l=e.z;return t[0]*=a,t[4]*=o,t[8]*=l,t[1]*=a,t[5]*=o,t[9]*=l,t[2]*=a,t[6]*=o,t[10]*=l,t[3]*=a,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,o))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),o=Math.sin(t),l=1-a,u=e.x,f=e.y,h=e.z,p=l*u,m=l*f;return this.set(p*u+a,p*f-o*h,p*h+o*f,0,p*f+o*h,m*f+a,m*h-o*u,0,p*h-o*f,m*h+o*u,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,o,l,u){return this.set(1,a,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,a){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,m=u+u,v=f+f,_=l*p,x=l*m,S=l*v,T=u*m,b=u*v,y=f*v,O=h*p,w=h*m,E=h*v,L=a.x,B=a.y,R=a.z;return o[0]=(1-(T+y))*L,o[1]=(x+E)*L,o[2]=(S-w)*L,o[3]=0,o[4]=(x-E)*B,o[5]=(1-(_+y))*B,o[6]=(b+O)*B,o[7]=0,o[8]=(S+w)*R,o[9]=(b-O)*R,o[10]=(1-(_+T))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,a){const o=this.elements;let l=Es.set(o[0],o[1],o[2]).length();const u=Es.set(o[4],o[5],o[6]).length(),f=Es.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Qi.copy(this);const p=1/l,m=1/u,v=1/f;return Qi.elements[0]*=p,Qi.elements[1]*=p,Qi.elements[2]*=p,Qi.elements[4]*=m,Qi.elements[5]*=m,Qi.elements[6]*=m,Qi.elements[8]*=v,Qi.elements[9]*=v,Qi.elements[10]*=v,t.setFromRotationMatrix(Qi),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,o,l,u,f=Ja){const h=this.elements,p=2*l/(t-e),m=2*l/(a-o),v=(t+e)/(t-e),_=(a+o)/(a-o);let x,S;if(f===Ja)x=-(u+l)/(u-l),S=-2*u*l/(u-l);else if(f===od)x=-u/(u-l),S=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,a,o,l,u,f=Ja){const h=this.elements,p=1/(t-e),m=1/(a-o),v=1/(u-l),_=(t+e)*p,x=(a+o)*m;let S,T;if(f===Ja)S=(u+l)*v,T=-2*v;else if(f===od)S=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=T,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<16;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Es=new ye,Qi=new un,HC=new ye(0,0,0),GC=new ye(1,1,1),Ur=new ye,sf=new ye,Ei=new ye,sb=new un,lb=new Bc;class nr{constructor(e=0,t=0,a=0,o=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,o=this._order){return this._x=e,this._y=t,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],m=o[9],v=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-It(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-It(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return sb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sb,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lb.setFromEuler(this),this.setFromQuaternion(lb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";let P0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VC=0;const cb=new ye,Ts=new Bc,Ya=new un,lf=new ye,cc=new ye,XC=new ye,jC=new Bc,ub=new ye(1,0,0),fb=new ye(0,1,0),db=new ye(0,0,1),hb={type:"added"},YC={type:"removed"},As={type:"childadded",child:null},em={type:"childremoved",child:null};class gi extends ol{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=zc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new ye,t=new nr,a=new Bc,o=new ye(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new At}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(ub,e)}rotateY(e){return this.rotateOnAxis(fb,e)}rotateZ(e){return this.rotateOnAxis(db,e)}translateOnAxis(e,t){return cb.copy(e).applyQuaternion(this.quaternion),this.position.add(cb.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ub,e)}translateY(e){return this.translateOnAxis(fb,e)}translateZ(e){return this.translateOnAxis(db,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ya.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?lf.copy(e):lf.set(e,t,a);const o=this.parent;this.updateWorldMatrix(!0,!1),cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ya.lookAt(cc,lf,this.up):Ya.lookAt(lf,cc,this.up),this.quaternion.setFromRotationMatrix(Ya),o&&(Ya.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(Ya),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hb),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YC),em.child=e,this.dispatchEvent(em),em.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hb),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cc,e,XC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cc,jC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),m=u(e.images),v=u(e.shapes),_=u(e.skeletons),x=u(e.animations),S=u(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),p.length>0&&(a.textures=p),m.length>0&&(a.images=m),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),S.length>0&&(a.nodes=S)}return a.object=o,a;function u(f){const h=[];for(const p in f){const m=f[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}gi.DEFAULT_UP=new ye(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new ye,Wa=new ye,tm=new ye,qa=new ye,ws=new ye,Cs=new ye,pb=new ye,nm=new ye,im=new ye,am=new ye,rm=new An,om=new An,sm=new An;class ia{constructor(e=new ye,t=new ye,a=new ye){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,o){o.subVectors(a,t),Ji.subVectors(e,t),o.cross(Ji);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,a,o,l){Ji.subVectors(o,t),Wa.subVectors(a,t),tm.subVectors(e,t);const u=Ji.dot(Ji),f=Ji.dot(Wa),h=Ji.dot(tm),p=Wa.dot(Wa),m=Wa.dot(tm),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(p*h-f*m)*_,S=(u*m-f*h)*_;return l.set(1-x-S,S,x)}static containsPoint(e,t,a,o){return this.getBarycoord(e,t,a,o,qa)===null?!1:qa.x>=0&&qa.y>=0&&qa.x+qa.y<=1}static getInterpolation(e,t,a,o,l,u,f,h){return this.getBarycoord(e,t,a,o,qa)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qa.x),h.addScaledVector(u,qa.y),h.addScaledVector(f,qa.z),h)}static getInterpolatedAttribute(e,t,a,o,l,u){return rm.setScalar(0),om.setScalar(0),sm.setScalar(0),rm.fromBufferAttribute(e,t),om.fromBufferAttribute(e,a),sm.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rm,l.x),u.addScaledVector(om,l.y),u.addScaledVector(sm,l.z),u}static isFrontFacing(e,t,a,o){return Ji.subVectors(a,t),Wa.subVectors(e,t),Ji.cross(Wa).dot(o)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,o){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,a,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),Ji.cross(Wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ia.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,o,l){return ia.getInterpolation(e,this.a,this.b,this.c,t,a,o,l)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,o=this.b,l=this.c;let u,f;ws.subVectors(o,a),Cs.subVectors(l,a),nm.subVectors(e,a);const h=ws.dot(nm),p=Cs.dot(nm);if(h<=0&&p<=0)return t.copy(a);im.subVectors(e,o);const m=ws.dot(im),v=Cs.dot(im);if(m>=0&&v<=m)return t.copy(o);const _=h*v-m*p;if(_<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(a).addScaledVector(ws,u);am.subVectors(e,l);const x=ws.dot(am),S=Cs.dot(am);if(S>=0&&x<=S)return t.copy(l);const T=x*p-h*S;if(T<=0&&p>=0&&S<=0)return f=p/(p-S),t.copy(a).addScaledVector(Cs,f);const b=m*S-x*v;if(b<=0&&v-m>=0&&x-S>=0)return pb.subVectors(l,o),f=(v-m)/(v-m+(x-S)),t.copy(o).addScaledVector(pb,f);const y=1/(b+T+_);return u=T*y,f=_*y,t.copy(a).addScaledVector(ws,u).addScaledVector(Cs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},cf={h:0,s:0,l:0};function lm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Vt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,a,o=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Gt.toWorkingColorSpace(this,o),this}setHSL(e,t,a,o=Gt.workingColorSpace){if(e=RC(e,1),t=It(t,0,1),a=It(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=lm(u,l,e+1/3),this.g=lm(u,l,e),this.b=lm(u,l,e-1/3)}return Gt.toWorkingColorSpace(this,o),this}setStyle(e,t=Hi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hi){const a=oM[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return Gt.fromWorkingColorSpace(Jn.copy(this),e),Math.round(It(Jn.r*255,0,255))*65536+Math.round(It(Jn.g*255,0,255))*256+Math.round(It(Jn.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Jn.copy(this),t);const a=Jn.r,o=Jn.g,l=Jn.b,u=Math.max(a,o,l),f=Math.min(a,o,l);let h,p;const m=(f+u)/2;if(f===u)h=0,p=0;else{const v=u-f;switch(p=m<=.5?v/(u+f):v/(2-u-f),u){case a:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-a)/v+2;break;case l:h=(a-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Hi){Gt.fromWorkingColorSpace(Jn.copy(this),e);const t=Jn.r,a=Jn.g,o=Jn.b;return e!==Hi?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,t,a){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(cf);const a=jp(Pr.h,cf.h,t),o=jp(Pr.s,cf.s,t),l=jp(Pr.l,cf.l,t);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*o,this.g=l[1]*t+l[4]*a+l[7]*o,this.b=l[2]*t+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Vt;Vt.NAMES=oM;let WC=0;class Fc extends ol{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WC++}),this.uuid=zc(),this.name="",this.type="Material",this.blending=Xs,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zm,this.blendDst=Km,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(a.blending=this.blending),this.side!==Yr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Zm&&(a.blendSrc=this.blendSrc),this.blendDst!==Km&&(a.blendDst=this.blendDst),this.blendEquation!==Eo&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jy&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const o=t.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class N0 extends Fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=YS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new ye,uf=new on;let qC=0;class sa{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=eb,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)uf.fromBufferAttribute(this,t),uf.applyMatrix3(e),this.setXY(t,uf.x,uf.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=oc(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=pi(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oc(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oc(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oc(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),a=pi(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,o){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),a=pi(a,this.array),o=pi(o,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,t,a,o,l){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),a=pi(a,this.array),o=pi(o,this.array),l=pi(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eb&&(e.usage=this.usage),e}}class sM extends sa{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class lM extends sa{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class la extends sa{constructor(e,t,a){super(new Float32Array(e),t,a)}}let $C=0;const ki=new un,cm=new gi,Rs=new ye,Ti=new zo,uc=new zo,Hn=new ye;class rr extends ol{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$C++}),this.uuid=zc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aM(e)?lM:sM)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new At().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,a){return ki.makeTranslation(e,t,a),this.applyMatrix4(ki),this}scale(e,t,a){return ki.makeScale(e,t,a),this.applyMatrix4(ki),this}lookAt(e){return cm.lookAt(e),cm.updateMatrix(),this.applyMatrix4(cm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new la(a,3))}else{const a=Math.min(e.length,t.count);for(let o=0;o<a;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Ti.setFromBufferAttribute(l),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(e){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];uc.setFromBufferAttribute(f),this.morphTargetsRelative?(Hn.addVectors(Ti.min,uc.min),Ti.expandByPoint(Hn),Hn.addVectors(Ti.max,uc.max),Ti.expandByPoint(Hn)):(Ti.expandByPoint(uc.min),Ti.expandByPoint(uc.max))}Ti.getCenter(a);let o=0;for(let l=0,u=e.count;l<u;l++)Hn.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(Hn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Hn.fromBufferAttribute(f,p),h&&(Rs.fromBufferAttribute(e,p),Hn.add(Rs)),o=Math.max(o,a.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<a.count;V++)f[V]=new ye,h[V]=new ye;const p=new ye,m=new ye,v=new ye,_=new on,x=new on,S=new on,T=new ye,b=new ye;function y(V,U,D){p.fromBufferAttribute(a,V),m.fromBufferAttribute(a,U),v.fromBufferAttribute(a,D),_.fromBufferAttribute(l,V),x.fromBufferAttribute(l,U),S.fromBufferAttribute(l,D),m.sub(p),v.sub(p),x.sub(_),S.sub(_);const j=1/(x.x*S.y-S.x*x.y);isFinite(j)&&(T.copy(m).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(j),b.copy(v).multiplyScalar(x.x).addScaledVector(m,-S.x).multiplyScalar(j),f[V].add(T),f[U].add(T),f[D].add(T),h[V].add(b),h[U].add(b),h[D].add(b))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let V=0,U=O.length;V<U;++V){const D=O[V],j=D.start,ne=D.count;for(let Z=j,ue=j+ne;Z<ue;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new ye,E=new ye,L=new ye,B=new ye;function R(V){L.fromBufferAttribute(o,V),B.copy(L);const U=f[V];w.copy(U),w.sub(L.multiplyScalar(L.dot(U))).normalize(),E.crossVectors(B,U);const j=E.dot(h[V])<0?-1:1;u.setXYZW(V,w.x,w.y,w.z,j)}for(let V=0,U=O.length;V<U;++V){const D=O[V],j=D.start,ne=D.count;for(let Z=j,ue=j+ne;Z<ue;Z+=3)R(e.getX(Z+0)),R(e.getX(Z+1)),R(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new sa(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new ye,l=new ye,u=new ye,f=new ye,h=new ye,p=new ye,m=new ye,v=new ye;if(e)for(let _=0,x=e.count;_<x;_+=3){const S=e.getX(_+0),T=e.getX(_+1),b=e.getX(_+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,b),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(a,S),h.fromBufferAttribute(a,T),p.fromBufferAttribute(a,b),f.add(m),h.add(m),p.add(m),a.setXYZ(S,f.x,f.y,f.z),a.setXYZ(T,h.x,h.y,h.z),a.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),a.setXYZ(_+0,m.x,m.y,m.z),a.setXYZ(_+1,m.x,m.y,m.z),a.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(f,h){const p=f.array,m=f.itemSize,v=f.normalized,_=new p.constructor(h.length*m);let x=0,S=0;for(let T=0,b=h.length;T<b;T++){f.isInterleavedBufferAttribute?x=h[T]*f.data.stride+f.offset:x=h[T]*m;for(let y=0;y<m;y++)_[S++]=p[x++]}return new sa(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rr,a=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,a);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let m=0,v=p.length;m<v;m++){const _=p[m],x=e(_,a);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const p=a[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];m.push(x.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],v=l[p];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mb=new un,_o=new U0,ff=new sl,gb=new ye,df=new ye,hf=new ye,pf=new ye,um=new ye,mf=new ye,vb=new ye,gf=new ye;class ra extends gi{constructor(e=new rr,t=new N0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const o=t[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){mf.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=f[h],v=l[h];m!==0&&(um.fromBufferAttribute(v,e),u?mf.addScaledVector(um,m):mf.addScaledVector(um.sub(t),m))}t.add(mf)}return t}raycast(e,t){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ff.copy(a.boundingSphere),ff.applyMatrix4(l),_o.copy(e.ray).recast(e.near),!(ff.containsPoint(_o.origin)===!1&&(_o.intersectSphere(ff,gb)===null||_o.origin.distanceToSquared(gb)>(e.far-e.near)**2))&&(mb.copy(l).invert(),_o.copy(e.ray).applyMatrix4(mb),!(a.boundingBox!==null&&_o.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,_o)))}_computeIntersections(e,t,a){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const b=_[S],y=u[b.materialIndex],O=Math.max(b.start,x.start),w=Math.min(f.count,Math.min(b.start+b.count,x.start+x.count));for(let E=O,L=w;E<L;E+=3){const B=f.getX(E),R=f.getX(E+1),V=f.getX(E+2);o=vf(this,y,e,a,p,m,v,B,R,V),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=b.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let b=S,y=T;b<y;b+=3){const O=f.getX(b),w=f.getX(b+1),E=f.getX(b+2);o=vf(this,u,e,a,p,m,v,O,w,E),o&&(o.faceIndex=Math.floor(b/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let S=0,T=_.length;S<T;S++){const b=_[S],y=u[b.materialIndex],O=Math.max(b.start,x.start),w=Math.min(h.count,Math.min(b.start+b.count,x.start+x.count));for(let E=O,L=w;E<L;E+=3){const B=E,R=E+1,V=E+2;o=vf(this,y,e,a,p,m,v,B,R,V),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=b.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let b=S,y=T;b<y;b+=3){const O=b,w=b+1,E=b+2;o=vf(this,u,e,a,p,m,v,O,w,E),o&&(o.faceIndex=Math.floor(b/3),t.push(o))}}}}function ZC(n,e,t,a,o,l,u,f){let h;if(e.side===mi?h=a.intersectTriangle(u,l,o,!0,f):h=a.intersectTriangle(o,l,u,e.side===Yr,f),h===null)return null;gf.copy(f),gf.applyMatrix4(n.matrixWorld);const p=t.ray.origin.distanceTo(gf);return p<t.near||p>t.far?null:{distance:p,point:gf.clone(),object:n}}function vf(n,e,t,a,o,l,u,f,h,p){n.getVertexPosition(f,df),n.getVertexPosition(h,hf),n.getVertexPosition(p,pf);const m=ZC(n,e,t,a,df,hf,pf,vb);if(m){const v=new ye;ia.getBarycoord(vb,df,hf,pf,v),o&&(m.uv=ia.getInterpolatedAttribute(o,f,h,p,v,new on)),l&&(m.uv1=ia.getInterpolatedAttribute(l,f,h,p,v,new on)),u&&(m.normal=ia.getInterpolatedAttribute(u,f,h,p,v,new ye),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new ye,materialIndex:0};ia.getNormal(df,hf,pf,_.normal),m.face=_,m.barycoord=v}return m}class Ic extends rr{constructor(e=1,t=1,a=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],m=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,a,t,e,u,l,0),S("z","y","x",1,-1,a,t,-e,u,l,1),S("x","z","y",1,1,e,a,t,o,u,2),S("x","z","y",1,-1,e,a,-t,o,u,3),S("x","y","z",1,-1,e,t,a,o,l,4),S("x","y","z",-1,-1,e,t,-a,o,l,5),this.setIndex(h),this.setAttribute("position",new la(p,3)),this.setAttribute("normal",new la(m,3)),this.setAttribute("uv",new la(v,2));function S(T,b,y,O,w,E,L,B,R,V,U){const D=E/R,j=L/V,ne=E/2,Z=L/2,ue=B/2,re=R+1,X=V+1;let J=0,q=0;const _e=new ye;for(let F=0;F<X;F++){const te=F*j-Z;for(let xe=0;xe<re;xe++){const Te=xe*D-ne;_e[T]=Te*O,_e[b]=te*w,_e[y]=ue,p.push(_e.x,_e.y,_e.z),_e[T]=0,_e[b]=0,_e[y]=B>0?1:-1,m.push(_e.x,_e.y,_e.z),v.push(xe/R),v.push(1-F/V),J+=1}}for(let F=0;F<V;F++)for(let te=0;te<R;te++){const xe=_+te+re*F,Te=_+te+re*(F+1),K=_+(te+1)+re*(F+1),$=_+(te+1)+re*F;h.push(xe,Te,$),h.push(Te,K,$),q+=6}f.addGroup(x,q,U),x+=q,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function il(n){const e={};for(const t in n){e[t]={};for(const a in n[t]){const o=n[t][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=o.clone():Array.isArray(o)?e[t][a]=o.slice():e[t][a]=o}}return e}function ri(n){const e={};for(let t=0;t<n.length;t++){const a=il(n[t]);for(const o in a)e[o]=a[o]}return e}function KC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const QC={clone:il,merge:ri};var JC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JC,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=il(e.uniforms),this.uniformsGroups=KC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class uM extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Ja}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ye,_b=new on,xb=new on;class na extends uM{constructor(e=50,t=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Og*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Og*2*Math.atan(Math.tan(Xp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,_b,xb),t.subVectors(xb,_b)}setViewOffset(e,t,a,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xp*.5*this.fov)/this.zoom,a=2*t,o=this.aspect*a,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*a/p,o*=u.width/h,a*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ls=1;class tR extends gi{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new na(Ds,Ls,e,t);o.layers=this.layers,this.add(o);const l=new na(Ds,Ls,e,t);l.layers=this.layers,this.add(l);const u=new na(Ds,Ls,e,t);u.layers=this.layers,this.add(u);const f=new na(Ds,Ls,e,t);f.layers=this.layers,this.add(f);const h=new na(Ds,Ls,e,t);h.layers=this.layers,this.add(h);const p=new na(Ds,Ls,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Ja)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===od)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,m]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(t,l),e.setRenderTarget(a,1,o),e.render(t,u),e.setRenderTarget(a,2,o),e.render(t,f),e.setRenderTarget(a,3,o),e.render(t,h),e.setRenderTarget(a,4,o),e.render(t,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(t,m),e.setRenderTarget(v,_,x),e.xr.enabled=S,a.texture.needsPMREMUpdate=!0}}class fM extends oi{constructor(e=[],t=el,a,o,l,u,f,h,p,m){super(e,t,a,o,l,u,f,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nR extends Po{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new fM(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ma}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ic(5,5,5),l=new Wr({name:"CubemapFromEquirect",uniforms:il(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:mi,blending:Vr});l.uniforms.tEquirect.value=t;const u=new ra(o,l),f=t.minFilter;return t.minFilter===Co&&(t.minFilter=Ma),new tR(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,o);e.setRenderTarget(l)}}class _f extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iR={type:"move"};class fm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _f,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _f,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _f,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const b=t.getJointPose(T,a),y=this._getHandJoint(p,T);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,S=.005;p.inputState.pinching&&_>x+S?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=x-S&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(iR)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new _f;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class aR extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rR extends oi{constructor(e=null,t=1,a=1,o,l,u,f,h,p=wi,m=wi,v,_){super(null,u,f,h,p,m,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zg extends sa{constructor(e,t,a,o=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new un,yb=new un,xf=[],bb=new zo,oR=new un,fc=new ra,dc=new sl;class sR extends ra{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zg(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,oR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zo),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Us),bb.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(bb)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Us),dc.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(dc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(e,t){const a=this.matrixWorld,o=this.count;if(fc.geometry=this.geometry,fc.material=this.material,fc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(a),e.ray.intersectsSphere(dc)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,Us),yb.multiplyMatrices(a,Us),fc.matrixWorld=yb,fc.raycast(e,xf);for(let u=0,f=xf.length;u<f;u++){const h=xf[u];h.instanceId=l,h.object=this,t.push(h)}xf.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new rR(new Float32Array(o*this.count),o,this.count,w0,Ea));const l=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const f=this.geometry.morphTargetsRelative?1:1-u,h=o*e;l[h]=f,l.set(a,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dm=new ye,lR=new ye,cR=new At;class So{constructor(e=new ye(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,o){return this.normal.set(e,t,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const o=dm.subVectors(a,t).cross(lR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(dm),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||cR.getNormalMatrix(e),o=this.coplanarPoint(dm).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xo=new sl,yf=new ye;class dM{constructor(e=new So,t=new So,a=new So,o=new So,l=new So,u=new So){this.planes=[e,t,a,o,l,u]}set(e,t,a,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Ja){const a=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],h=o[3],p=o[4],m=o[5],v=o[6],_=o[7],x=o[8],S=o[9],T=o[10],b=o[11],y=o[12],O=o[13],w=o[14],E=o[15];if(a[0].setComponents(h-l,_-p,b-x,E-y).normalize(),a[1].setComponents(h+l,_+p,b+x,E+y).normalize(),a[2].setComponents(h+u,_+m,b+S,E+O).normalize(),a[3].setComponents(h-u,_-m,b-S,E-O).normalize(),a[4].setComponents(h-f,_-v,b-T,E-w).normalize(),t===Ja)a[5].setComponents(h+f,_+v,b+T,E+w).normalize();else if(t===od)a[5].setComponents(f,v,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xo)}intersectsSprite(e){return xo.center.set(0,0,0),xo.radius=.7071067811865476,xo.applyMatrix4(e.matrixWorld),this.intersectsSphere(xo)}intersectsSphere(e){const t=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const o=t[a];if(yf.x=o.normal.x>0?e.max.x:e.min.x,yf.y=o.normal.y>0?e.max.y:e.min.y,yf.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hM extends Fc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ld=new ye,cd=new ye,Sb=new un,hc=new U0,bf=new sl,hm=new ye,Mb=new ye;class uR extends gi{constructor(e=new rr,t=new hM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let o=1,l=t.count;o<l;o++)ld.fromBufferAttribute(t,o-1),cd.fromBufferAttribute(t,o),a[o]=a[o-1],a[o]+=ld.distanceTo(cd);e.setAttribute("lineDistance",new la(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),bf.copy(a.boundingSphere),bf.applyMatrix4(o),bf.radius+=l,e.ray.intersectsSphere(bf)===!1)return;Sb.copy(o).invert(),hc.copy(e.ray).applyMatrix4(Sb);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,m=a.index,_=a.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=x,b=S-1;T<b;T+=p){const y=m.getX(T),O=m.getX(T+1),w=Sf(this,e,hc,h,y,O,T);w&&t.push(w)}if(this.isLineLoop){const T=m.getX(S-1),b=m.getX(x),y=Sf(this,e,hc,h,T,b,S-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let T=x,b=S-1;T<b;T+=p){const y=Sf(this,e,hc,h,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=Sf(this,e,hc,h,S-1,x,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const o=t[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Sf(n,e,t,a,o,l,u){const f=n.geometry.attributes.position;if(ld.fromBufferAttribute(f,o),cd.fromBufferAttribute(f,l),t.distanceSqToSegment(ld,cd,hm,Mb)>a)return;hm.applyMatrix4(n.matrixWorld);const p=e.ray.origin.distanceTo(hm);if(!(p<e.near||p>e.far))return{distance:p,point:Mb.clone().applyMatrix4(n.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:n}}const Eb=new ye,Tb=new ye;class fR extends uR{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let o=0,l=t.count;o<l;o+=2)Eb.fromBufferAttribute(t,o),Tb.fromBufferAttribute(t,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Eb.distanceTo(Tb);e.setAttribute("lineDistance",new la(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pM extends oi{constructor(e,t,a=Uo,o,l,u,f=wi,h=wi,p,m=Cc){if(m!==Cc&&m!==Rc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,l,u,f,h,m,a,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new L0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kc extends rr{constructor(e=1,t=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(a),h=Math.floor(o),p=f+1,m=h+1,v=e/f,_=t/h,x=[],S=[],T=[],b=[];for(let y=0;y<m;y++){const O=y*_-u;for(let w=0;w<p;w++){const E=w*v-l;S.push(E,-O,0),T.push(0,0,1),b.push(w/f),b.push(1-y/h)}}for(let y=0;y<h;y++)for(let O=0;O<f;O++){const w=O+p*y,E=O+p*(y+1),L=O+1+p*(y+1),B=O+1+p*y;x.push(w,E,B),x.push(E,L,B)}this.setIndex(x),this.setAttribute("position",new la(S,3)),this.setAttribute("normal",new la(T,3)),this.setAttribute("uv",new la(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class dR extends Fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_C,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hR extends Fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mM extends uM{constructor(e=-1,t=1,a=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pR extends na{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ab=new un;class mR{constructor(e,t,a=0,o=1/0){this.ray=new U0(e,t),this.near=a,this.far=o,this.camera=null,this.layers=new P0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ab.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ab),this}intersectObject(e,t=!0,a=[]){return Bg(e,this,a,t),a.sort(wb),a}intersectObjects(e,t=!0,a=[]){for(let o=0,l=e.length;o<l;o++)Bg(e[o],this,a,t);return a.sort(wb),a}}function wb(n,e){return n.distance-e.distance}function Bg(n,e,t,a){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&a===!0){const l=n.children;for(let u=0,f=l.length;u<f;u++)Bg(l[u],e,t,!0)}}class gR extends fR{constructor(e=10,t=10,a=4473924,o=8947848){a=new Vt(a),o=new Vt(o);const l=t/2,u=e/t,f=e/2,h=[],p=[];for(let _=0,x=0,S=-f;_<=t;_++,S+=u){h.push(-f,0,S,f,0,S),h.push(S,0,-f,S,0,f);const T=_===l?a:o;T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3}const m=new rr;m.setAttribute("position",new la(h,3)),m.setAttribute("color",new la(p,3));const v=new hM({vertexColors:!0,toneMapped:!1});super(m,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Cb(n,e,t,a){const o=vR(a);switch(t){case KS:return n*e;case JS:return n*e;case eM:return n*e*2;case w0:return n*e/o.components*o.byteLength;case C0:return n*e/o.components*o.byteLength;case tM:return n*e*2/o.components*o.byteLength;case R0:return n*e*2/o.components*o.byteLength;case QS:return n*e*3/o.components*o.byteLength;case aa:return n*e*4/o.components*o.byteLength;case D0:return n*e*4/o.components*o.byteLength;case Vf:case Xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jf:case Yf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ug:case dg:return Math.max(n,16)*Math.max(e,8)/4;case cg:case fg:return Math.max(n,8)*Math.max(e,8)/2;case hg:case pg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gg:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vg:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _g:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xg:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sg:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mg:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ag:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wg:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rg:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wf:case Dg:case Lg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nM:case Ug:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pg:case Ng:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vR(n){switch(n){case tr:case qS:return{byteLength:1,components:1};case Ac:case $S:case Oc:return{byteLength:2,components:1};case T0:case A0:return{byteLength:2,components:4};case Uo:case E0:case Ea:return{byteLength:4,components:1};case ZS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:M0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=M0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gM(){let n=null,e=!1,t=null,a=null;function o(l,u){t(l,u),a=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(a=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function _R(n){const e=new WeakMap;function t(f,h){const p=f.array,m=f.usage,v=p.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=n.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=n.SHORT;else if(p instanceof Uint32Array)x=n.UNSIGNED_INT;else if(p instanceof Int32Array)x=n.INT;else if(p instanceof Int8Array)x=n.BYTE;else if(p instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,p){const m=h.array,v=h.updateRanges;if(n.bindBuffer(p,f),v.length===0)n.bufferSubData(p,0,m);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],T=v[x];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const T=v[x];n.bufferSubData(p,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(n.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var xR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ER=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$R="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _D=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ND=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ID=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$D=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:xR,alphahash_pars_fragment:yR,alphamap_fragment:bR,alphamap_pars_fragment:SR,alphatest_fragment:MR,alphatest_pars_fragment:ER,aomap_fragment:TR,aomap_pars_fragment:AR,batching_pars_vertex:wR,batching_vertex:CR,begin_vertex:RR,beginnormal_vertex:DR,bsdfs:LR,iridescence_fragment:UR,bumpmap_pars_fragment:PR,clipping_planes_fragment:NR,clipping_planes_pars_fragment:OR,clipping_planes_pars_vertex:zR,clipping_planes_vertex:BR,color_fragment:FR,color_pars_fragment:IR,color_pars_vertex:kR,color_vertex:HR,common:GR,cube_uv_reflection_fragment:VR,defaultnormal_vertex:XR,displacementmap_pars_vertex:jR,displacementmap_vertex:YR,emissivemap_fragment:WR,emissivemap_pars_fragment:qR,colorspace_fragment:$R,colorspace_pars_fragment:ZR,envmap_fragment:KR,envmap_common_pars_fragment:QR,envmap_pars_fragment:JR,envmap_pars_vertex:e3,envmap_physical_pars_fragment:f3,envmap_vertex:t3,fog_vertex:n3,fog_pars_vertex:i3,fog_fragment:a3,fog_pars_fragment:r3,gradientmap_pars_fragment:o3,lightmap_pars_fragment:s3,lights_lambert_fragment:l3,lights_lambert_pars_fragment:c3,lights_pars_begin:u3,lights_toon_fragment:d3,lights_toon_pars_fragment:h3,lights_phong_fragment:p3,lights_phong_pars_fragment:m3,lights_physical_fragment:g3,lights_physical_pars_fragment:v3,lights_fragment_begin:_3,lights_fragment_maps:x3,lights_fragment_end:y3,logdepthbuf_fragment:b3,logdepthbuf_pars_fragment:S3,logdepthbuf_pars_vertex:M3,logdepthbuf_vertex:E3,map_fragment:T3,map_pars_fragment:A3,map_particle_fragment:w3,map_particle_pars_fragment:C3,metalnessmap_fragment:R3,metalnessmap_pars_fragment:D3,morphinstance_vertex:L3,morphcolor_vertex:U3,morphnormal_vertex:P3,morphtarget_pars_vertex:N3,morphtarget_vertex:O3,normal_fragment_begin:z3,normal_fragment_maps:B3,normal_pars_fragment:F3,normal_pars_vertex:I3,normal_vertex:k3,normalmap_pars_fragment:H3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:V3,clearcoat_pars_fragment:X3,iridescence_pars_fragment:j3,opaque_fragment:Y3,packing:W3,premultiplied_alpha_fragment:q3,project_vertex:$3,dithering_fragment:Z3,dithering_pars_fragment:K3,roughnessmap_fragment:Q3,roughnessmap_pars_fragment:J3,shadowmap_pars_fragment:eD,shadowmap_pars_vertex:tD,shadowmap_vertex:nD,shadowmask_pars_fragment:iD,skinbase_vertex:aD,skinning_pars_vertex:rD,skinning_vertex:oD,skinnormal_vertex:sD,specularmap_fragment:lD,specularmap_pars_fragment:cD,tonemapping_fragment:uD,tonemapping_pars_fragment:fD,transmission_fragment:dD,transmission_pars_fragment:hD,uv_pars_fragment:pD,uv_pars_vertex:mD,uv_vertex:gD,worldpos_vertex:vD,background_vert:_D,background_frag:xD,backgroundCube_vert:yD,backgroundCube_frag:bD,cube_vert:SD,cube_frag:MD,depth_vert:ED,depth_frag:TD,distanceRGBA_vert:AD,distanceRGBA_frag:wD,equirect_vert:CD,equirect_frag:RD,linedashed_vert:DD,linedashed_frag:LD,meshbasic_vert:UD,meshbasic_frag:PD,meshlambert_vert:ND,meshlambert_frag:OD,meshmatcap_vert:zD,meshmatcap_frag:BD,meshnormal_vert:FD,meshnormal_frag:ID,meshphong_vert:kD,meshphong_frag:HD,meshphysical_vert:GD,meshphysical_frag:VD,meshtoon_vert:XD,meshtoon_frag:jD,points_vert:YD,points_frag:WD,shadow_vert:qD,shadow_frag:$D,sprite_vert:ZD,sprite_frag:KD},Qe={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new on(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new on(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},ba={basic:{uniforms:ri([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ri([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ri([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ri([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ri([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ri([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ri([Qe.points,Qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ri([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ri([Qe.common,Qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ri([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ri([Qe.sprite,Qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:ri([Qe.common,Qe.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:ri([Qe.lights,Qe.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ba.physical={uniforms:ri([ba.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new on(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new on},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new on},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Mf={r:0,b:0,g:0},yo=new nr,QD=new un;function JD(n,e,t,a,o,l,u){const f=new Vt(0);let h=l===!0?0:1,p,m,v=null,_=0,x=null;function S(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function T(w){let E=!1;const L=S(w);L===null?y(f,h):L&&L.isColor&&(y(L,1),E=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(n.autoClear||E)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(w,E){const L=S(E);L&&(L.isCubeTexture||L.mapping===Ed)?(m===void 0&&(m=new ra(new Ic(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:il(ba.backgroundCube.uniforms),vertexShader:ba.backgroundCube.vertexShader,fragmentShader:ba.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,R,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),yo.copy(E.backgroundRotation),yo.x*=-1,yo.y*=-1,yo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yo.y*=-1,yo.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(QD.makeRotationFromEuler(yo)),m.material.toneMapped=Gt.getTransfer(L.colorSpace)!==nn,(v!==L||_!==L.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,v=L,_=L.version,x=n.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new ra(new kc(2,2),new Wr({name:"BackgroundMaterial",uniforms:il(ba.background.uniforms),vertexShader:ba.background.vertexShader,fragmentShader:ba.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(L.colorSpace)!==nn,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||x!==n.toneMapping)&&(p.material.needsUpdate=!0,v=L,_=L.version,x=n.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function y(w,E){w.getRGB(Mf,cM(n)),a.buffers.color.setClear(Mf.r,Mf.g,Mf.b,E,u)}function O(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,E=1){f.set(w),h=E,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(f,h)},render:T,addToRenderList:b,dispose:O}}function eL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),a={},o=_(null);let l=o,u=!1;function f(D,j,ne,Z,ue){let re=!1;const X=v(Z,ne,j);l!==X&&(l=X,p(l.object)),re=x(D,Z,ne,ue),re&&S(D,Z,ne,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,E(D,j,ne,Z),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return n.createVertexArray()}function p(D){return n.bindVertexArray(D)}function m(D){return n.deleteVertexArray(D)}function v(D,j,ne){const Z=ne.wireframe===!0;let ue=a[D.id];ue===void 0&&(ue={},a[D.id]=ue);let re=ue[j.id];re===void 0&&(re={},ue[j.id]=re);let X=re[Z];return X===void 0&&(X=_(h()),re[Z]=X),X}function _(D){const j=[],ne=[],Z=[];for(let ue=0;ue<t;ue++)j[ue]=0,ne[ue]=0,Z[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ne,attributeDivisors:Z,object:D,attributes:{},index:null}}function x(D,j,ne,Z){const ue=l.attributes,re=j.attributes;let X=0;const J=ne.getAttributes();for(const q in J)if(J[q].location>=0){const F=ue[q];let te=re[q];if(te===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),F===void 0||F.attribute!==te||te&&F.data!==te.data)return!0;X++}return l.attributesNum!==X||l.index!==Z}function S(D,j,ne,Z){const ue={},re=j.attributes;let X=0;const J=ne.getAttributes();for(const q in J)if(J[q].location>=0){let F=re[q];F===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(F=D.instanceColor));const te={};te.attribute=F,F&&F.data&&(te.data=F.data),ue[q]=te,X++}l.attributes=ue,l.attributesNum=X,l.index=Z}function T(){const D=l.newAttributes;for(let j=0,ne=D.length;j<ne;j++)D[j]=0}function b(D){y(D,0)}function y(D,j){const ne=l.newAttributes,Z=l.enabledAttributes,ue=l.attributeDivisors;ne[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),ue[D]!==j&&(n.vertexAttribDivisor(D,j),ue[D]=j)}function O(){const D=l.newAttributes,j=l.enabledAttributes;for(let ne=0,Z=j.length;ne<Z;ne++)j[ne]!==D[ne]&&(n.disableVertexAttribArray(ne),j[ne]=0)}function w(D,j,ne,Z,ue,re,X){X===!0?n.vertexAttribIPointer(D,j,ne,ue,re):n.vertexAttribPointer(D,j,ne,Z,ue,re)}function E(D,j,ne,Z){T();const ue=Z.attributes,re=ne.getAttributes(),X=j.defaultAttributeValues;for(const J in re){const q=re[J];if(q.location>=0){let _e=ue[J];if(_e===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),_e!==void 0){const F=_e.normalized,te=_e.itemSize,xe=e.get(_e);if(xe===void 0)continue;const Te=xe.buffer,K=xe.type,$=xe.bytesPerElement,ce=K===n.INT||K===n.UNSIGNED_INT||_e.gpuType===E0;if(_e.isInterleavedBufferAttribute){const he=_e.data,Ae=he.stride,De=_e.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)y(q.location+Ve,he.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)b(q.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ve=0;Ve<q.locationSize;Ve++)w(q.location+Ve,te/q.locationSize,K,F,Ae*$,(De+te/q.locationSize*Ve)*$,ce)}else{if(_e.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)y(q.location+he,_e.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let he=0;he<q.locationSize;he++)b(q.location+he);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let he=0;he<q.locationSize;he++)w(q.location+he,te/q.locationSize,K,F,te*$,te/q.locationSize*he*$,ce)}}else if(X!==void 0){const F=X[J];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(q.location,F);break;case 3:n.vertexAttrib3fv(q.location,F);break;case 4:n.vertexAttrib4fv(q.location,F);break;default:n.vertexAttrib1fv(q.location,F)}}}}O()}function L(){V();for(const D in a){const j=a[D];for(const ne in j){const Z=j[ne];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete j[ne]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const j=a[D.id];for(const ne in j){const Z=j[ne];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete j[ne]}delete a[D.id]}function R(D){for(const j in a){const ne=a[j];if(ne[D.id]===void 0)continue;const Z=ne[D.id];for(const ue in Z)m(Z[ue].object),delete Z[ue];delete ne[D.id]}}function V(){U(),u=!0,l!==o&&(l=o,p(l.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:U,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:b,disableUnusedAttributes:O}}function tL(n,e,t){let a;function o(p){a=p}function l(p,m){n.drawArrays(a,p,m),t.update(m,a,1)}function u(p,m,v){v!==0&&(n.drawArraysInstanced(a,p,m,v),t.update(m,a,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,v);let x=0;for(let S=0;S<v;S++)x+=m[S];t.update(x,a,1)}function h(p,m,v,_){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<p.length;S++)u(p[S],m[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,m,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=m[T]*_[T];t.update(S,a,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function nL(n,e,t,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(R){return!(R!==aa&&a.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const V=R===Oc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==tr&&a.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ea&&!V)}function h(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:O,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:L,maxSamples:B}}function iL(n){const e=this;let t=null,a=0,o=!1,l=!1;const u=new So,f=new At,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,T=v.clipIntersection,b=v.clipShadows,y=n.get(v);if(!o||S===null||S.length===0||l&&!b)l?m(null):p();else{const O=l?0:a,w=O*4;let E=y.clippingState||null;h.value=E,E=m(S,_,w,x);for(let L=0;L!==w;++L)E[L]=t[L];y.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(v,_,x,S){const T=v!==null?v.length:0;let b=null;if(T!==0){if(b=h.value,S!==!0||b===null){const y=x+T*4,O=_.matrixWorldInverse;f.getNormalMatrix(O),(b===null||b.length<y)&&(b=new Float32Array(y));for(let w=0,E=x;w!==T;++w,E+=4)u.copy(v[w]).applyMatrix4(O,f),u.normal.toArray(b,E),b[E+3]=u.constant}h.value=b,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function aL(n){let e=new WeakMap;function t(u,f){return f===rg?u.mapping=el:f===og&&(u.mapping=tl),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===rg||f===og)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new nR(h.height);return p.fromEquirectangularTexture(n,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Hs=4,Rb=[.125,.215,.35,.446,.526,.582],To=20,pm=new mM,Db=new Vt;let mm=null,gm=0,vm=0,_m=!1;const Mo=(1+Math.sqrt(5))/2,Ps=1/Mo,Lb=[new ye(-Mo,Ps,0),new ye(Mo,Ps,0),new ye(-Ps,0,Mo),new ye(Ps,0,Mo),new ye(0,Mo,-Ps),new ye(0,Mo,Ps),new ye(-1,1,-1),new ye(1,1,-1),new ye(-1,1,1),new ye(1,1,1)],rL=new ye;class Ub{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,o=100,l={}){const{size:u=256,position:f=rL}=l;mm=this._renderer.getRenderTarget(),gm=this._renderer.getActiveCubeFace(),vm=this._renderer.getActiveMipmapLevel(),_m=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ob(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mm,gm,vm),this._renderer.xr.enabled=_m,e.scissorTest=!1,Ef(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===el||e.mapping===tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mm=this._renderer.getRenderTarget(),gm=this._renderer.getActiveCubeFace(),vm=this._renderer.getActiveMipmapLevel(),_m=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Ma,minFilter:Ma,generateMipmaps:!1,type:Oc,format:aa,colorSpace:nl,depthBuffer:!1},o=Pb(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pb(e,t,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oL(l)),this._blurMaterial=sL(l,e,t)}return o}_compileMaterial(e){const t=new ra(this._lodPlanes[0],e);this._renderer.compile(t,pm)}_sceneToCubeUV(e,t,a,o,l){const h=new na(90,1,t,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Db),v.toneMapping=Xr,v.autoClear=!1;const S=new N0({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),T=new ra(new Ic,S);let b=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,b=!0):(S.color.copy(Db),b=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+m[O],l.y,l.z)):w===1?(h.up.set(0,0,p[O]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+m[O],l.z)):(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+m[O]));const E=this._cubeSize;Ef(o,w*E,O>2?E:0,E,E),v.setRenderTarget(o),b&&v.render(T,h),v.render(e,h)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=y}_textureToCubeUV(e,t){const a=this._renderer,o=e.mapping===el||e.mapping===tl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ob()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nb());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new ra(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ef(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(u,pm)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Lb[(o-l-1)%Lb.length];this._blur(e,l-1,l,u,f)}t.autoClear=a}_blur(e,t,a,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,o,"latitudinal",l),this._halfBlur(u,e,a,a,o,"longitudinal",l)}_halfBlur(e,t,a,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new ra(this._lodPlanes[o],p),_=p.uniforms,x=this._sizeLods[a]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*To-1),T=l/S,b=isFinite(l)?1+Math.floor(m*T):To;b>To&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${To}`);const y=[];let O=0;for(let R=0;R<To;++R){const V=R/T,U=Math.exp(-V*V/2);y.push(U),R===0?O+=U:R<b&&(O+=2*U)}for(let R=0;R<y.length;R++)y[R]=y[R]/O;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=S,_.mipInt.value=w-a;const E=this._sizeLods[o],L=3*E*(o>w-Hs?o-w+Hs:0),B=4*(this._cubeSize-E);Ef(t,L,B,3*E,2*E),h.setRenderTarget(t),h.render(v,pm)}}function oL(n){const e=[],t=[],a=[];let o=n;const l=n-Hs+1+Rb.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let h=1/f;u>n-Hs?h=Rb[u-n+Hs-1]:u===0&&(h=0),a.push(h);const p=1/(f-2),m=-p,v=1+p,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,S=6,T=3,b=2,y=1,O=new Float32Array(T*S*x),w=new Float32Array(b*S*x),E=new Float32Array(y*S*x);for(let B=0;B<x;B++){const R=B%3*2/3-1,V=B>2?0:-1,U=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];O.set(U,T*S*B),w.set(_,b*S*B);const D=[B,B,B,B,B,B];E.set(D,y*S*B)}const L=new rr;L.setAttribute("position",new sa(O,T)),L.setAttribute("uv",new sa(w,b)),L.setAttribute("faceIndex",new sa(E,y)),e.push(L),o>Hs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function Pb(n,e,t){const a=new Po(n,e,t);return a.texture.mapping=Ed,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ef(n,e,t,a,o){n.viewport.set(e,t,a,o),n.scissor.set(e,t,a,o)}function sL(n,e,t){const a=new Float32Array(To),o=new ye(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:To,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Nb(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Ob(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:O0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function O0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lL(n){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,p=h===rg||h===og,m=h===el||h===tl;if(p||m){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Ub(n)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const x=f.image;return p&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Ub(n)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function cL(n){const e={};function t(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(a)}return e[a]=o,o}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const o=t(a);return o===null&&qf("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function uL(n,e,t,a){const o={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete o[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)e.update(_[x],n.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,S=v.attributes.position;let T=0;if(x!==null){const O=x.array;T=x.version;for(let w=0,E=O.length;w<E;w+=3){const L=O[w+0],B=O[w+1],R=O[w+2];_.push(L,B,B,R,R,L)}}else if(S!==void 0){const O=S.array;T=S.version;for(let w=0,E=O.length/3-1;w<E;w+=3){const L=w+0,B=w+1,R=w+2;_.push(L,B,B,R,R,L)}}else return;const b=new(aM(_)?lM:sM)(_,1);b.version=T;const y=l.get(v);y&&e.remove(y),l.set(v,b)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:m}}function fL(n,e,t){let a;function o(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,x){n.drawElements(a,x,l,_*u),t.update(x,a,1)}function p(_,x,S){S!==0&&(n.drawElementsInstanced(a,x,l,_*u,S),t.update(x,a,S))}function m(_,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,S);let b=0;for(let y=0;y<S;y++)b+=x[y];t.update(b,a,1)}function v(_,x,S,T){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let y=0;y<_.length;y++)p(_[y]/u,x[y],T[y]);else{b.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,T,0,S);let y=0;for(let O=0;O<S;O++)y+=x[O]*T[O];t.update(y,a,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function dL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:a}}function hL(n,e,t){const a=new WeakMap,o=new An;function l(u,f,h){const p=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let D=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var x=D;_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let E=0;S===!0&&(E=1),T===!0&&(E=2),b===!0&&(E=3);let L=f.attributes.position.count*E,B=1;L>e.maxTextureSize&&(B=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*B*4*v),V=new rM(R,L,B,v);V.type=Ea,V.needsUpdate=!0;const U=E*4;for(let j=0;j<v;j++){const ne=y[j],Z=O[j],ue=w[j],re=L*B*4*j;for(let X=0;X<ne.count;X++){const J=X*U;S===!0&&(o.fromBufferAttribute(ne,X),R[re+J+0]=o.x,R[re+J+1]=o.y,R[re+J+2]=o.z,R[re+J+3]=0),T===!0&&(o.fromBufferAttribute(Z,X),R[re+J+4]=o.x,R[re+J+5]=o.y,R[re+J+6]=o.z,R[re+J+7]=0),b===!0&&(o.fromBufferAttribute(ue,X),R[re+J+8]=o.x,R[re+J+9]=o.y,R[re+J+10]=o.z,R[re+J+11]=ue.itemSize===4?o.w:1)}}_={count:v,texture:V,size:new on(L,B)},a.set(f,_),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let S=0;for(let b=0;b<p.length;b++)S+=p[b];const T=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",p)}h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:l}}function pL(n,e,t,a){let o=new WeakMap;function l(h){const p=a.render.frame,m=h.geometry,v=e.get(h,m);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const vM=new oi,zb=new pM(1,1),_M=new rM,xM=new IC,yM=new fM,Bb=[],Fb=[],Ib=new Float32Array(16),kb=new Float32Array(9),Hb=new Float32Array(4);function ll(n,e,t){const a=n[0];if(a<=0||a>0)return n;const o=e*t;let l=Bb[o];if(l===void 0&&(l=new Float32Array(o),Bb[o]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,a=n.length;t<a;t++)if(n[t]!==e[t])return!1;return!0}function zn(n,e){for(let t=0,a=e.length;t<a;t++)n[t]=e[t]}function Td(n,e){let t=Fb[e];t===void 0&&(t=new Int32Array(e),Fb[e]=t);for(let a=0;a!==e;++a)t[a]=n.allocateTextureUnit();return t}function mL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),zn(t,e)}}function vL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),zn(t,e)}}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),zn(t,e)}}function xL(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(On(t,a))return;Hb.set(a),n.uniformMatrix2fv(this.addr,!1,Hb),zn(t,a)}}function yL(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(On(t,a))return;kb.set(a),n.uniformMatrix3fv(this.addr,!1,kb),zn(t,a)}}function bL(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(On(t,a))return;Ib.set(a),n.uniformMatrix4fv(this.addr,!1,Ib),zn(t,a)}}function SL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ML(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),zn(t,e)}}function EL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),zn(t,e)}}function TL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),zn(t,e)}}function AL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),zn(t,e)}}function CL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),zn(t,e)}}function RL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),zn(t,e)}}function DL(n,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(n.uniform1i(this.addr,o),a[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(zb.compareFunction=iM,l=zb):l=vM,t.setTexture2D(e||l,o)}function LL(n,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(n.uniform1i(this.addr,o),a[0]=o),t.setTexture3D(e||xM,o)}function UL(n,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(n.uniform1i(this.addr,o),a[0]=o),t.setTextureCube(e||yM,o)}function PL(n,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(n.uniform1i(this.addr,o),a[0]=o),t.setTexture2DArray(e||_M,o)}function NL(n){switch(n){case 5126:return mL;case 35664:return gL;case 35665:return vL;case 35666:return _L;case 35674:return xL;case 35675:return yL;case 35676:return bL;case 5124:case 35670:return SL;case 35667:case 35671:return ML;case 35668:case 35672:return EL;case 35669:case 35673:return TL;case 5125:return AL;case 36294:return wL;case 36295:return CL;case 36296:return RL;case 35678:case 36198:case 36298:case 36306:case 35682:return DL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return UL;case 36289:case 36303:case 36311:case 36292:return PL}}function OL(n,e){n.uniform1fv(this.addr,e)}function zL(n,e){const t=ll(e,this.size,2);n.uniform2fv(this.addr,t)}function BL(n,e){const t=ll(e,this.size,3);n.uniform3fv(this.addr,t)}function FL(n,e){const t=ll(e,this.size,4);n.uniform4fv(this.addr,t)}function IL(n,e){const t=ll(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kL(n,e){const t=ll(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HL(n,e){const t=ll(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GL(n,e){n.uniform1iv(this.addr,e)}function VL(n,e){n.uniform2iv(this.addr,e)}function XL(n,e){n.uniform3iv(this.addr,e)}function jL(n,e){n.uniform4iv(this.addr,e)}function YL(n,e){n.uniform1uiv(this.addr,e)}function WL(n,e){n.uniform2uiv(this.addr,e)}function qL(n,e){n.uniform3uiv(this.addr,e)}function $L(n,e){n.uniform4uiv(this.addr,e)}function ZL(n,e,t){const a=this.cache,o=e.length,l=Td(t,o);On(a,l)||(n.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||vM,l[u])}function KL(n,e,t){const a=this.cache,o=e.length,l=Td(t,o);On(a,l)||(n.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||xM,l[u])}function QL(n,e,t){const a=this.cache,o=e.length,l=Td(t,o);On(a,l)||(n.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||yM,l[u])}function JL(n,e,t){const a=this.cache,o=e.length,l=Td(t,o);On(a,l)||(n.uniform1iv(this.addr,l),zn(a,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||_M,l[u])}function eU(n){switch(n){case 5126:return OL;case 35664:return zL;case 35665:return BL;case 35666:return FL;case 35674:return IL;case 35675:return kL;case 35676:return HL;case 5124:case 35670:return GL;case 35667:case 35671:return VL;case 35668:case 35672:return XL;case 35669:case 35673:return jL;case 5125:return YL;case 36294:return WL;case 36295:return qL;case 36296:return $L;case 35678:case 36198:case 36298:case 36306:case 35682:return ZL;case 35679:case 36299:case 36307:return KL;case 35680:case 36300:case 36308:case 36293:return QL;case 36289:case 36303:case 36311:case 36292:return JL}}class tU{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=NL(t.type)}}class nU{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eU(t.type)}}class iU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],a)}}}const xm=/(\w+)(\])?(\[|\.)?/g;function Gb(n,e){n.seq.push(e),n.map[e.id]=e}function aU(n,e,t){const a=n.name,o=a.length;for(xm.lastIndex=0;;){const l=xm.exec(a),u=xm.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Gb(t,p===void 0?new tU(f,n,e):new nU(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new iU(f),Gb(t,v)),t=v}}}class $f{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);aU(l,u,this)}}setValue(e,t,a,o){const l=this.map[t];l!==void 0&&l.setValue(e,a,o)}setOptional(e,t,a){const o=t[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,t,a,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const a=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&a.push(u)}return a}}function Vb(n,e,t){const a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),a}const rU=37297;let oU=0;function sU(n,e){const t=n.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const Xb=new At;function lU(n){Gt._getMatrix(Xb,Gt.workingColorSpace,n);const e=`mat3( ${Xb.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(n)){case rd:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jb(n,e,t){const a=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(a&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+sU(n.getShaderSource(e),u)}else return o}function cU(n,e){const t=lU(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uU(n,e){let t;switch(e){case uC:t="Linear";break;case fC:t="Reinhard";break;case dC:t="Cineon";break;case hC:t="ACESFilmic";break;case mC:t="AgX";break;case gC:t="Neutral";break;case pC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tf=new ye;function fU(){Gt.getLuminanceCoefficients(Tf);const n=Tf.x.toFixed(4),e=Tf.y.toFixed(4),t=Tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dU(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function hU(n){const e=[];for(const t in n){const a=n[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function pU(n,e){const t={},a=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function xc(n){return n!==""}function Yb(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fg(n){return n.replace(mU,vU)}const gU=new Map;function vU(n,e){let t=wt[e];if(t===void 0){const a=gU.get(e);if(a!==void 0)t=wt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Fg(t)}const _U=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qb(n){return n.replace(_U,xU)}function xU(n,e,t,a){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $b(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yU(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Za&&(e="SHADOWMAP_TYPE_VSM"),e}function bU(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case Ed:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SU(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tl:e="ENVMAP_MODE_REFRACTION";break}return e}function MU(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case YS:e="ENVMAP_BLENDING_MULTIPLY";break;case lC:e="ENVMAP_BLENDING_MIX";break;case cC:e="ENVMAP_BLENDING_ADD";break}return e}function EU(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:a,maxMip:t}}function TU(n,e,t,a){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=yU(t),p=bU(t),m=SU(t),v=MU(t),_=EU(t),x=dU(t),S=hU(l),T=o.createProgram();let b,y,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(xc).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(xc).join(`
`),y.length>0&&(y+=`
`)):(b=[$b(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),y=[$b(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xr?"#define TONE_MAPPING":"",t.toneMapping!==Xr?wt.tonemapping_pars_fragment:"",t.toneMapping!==Xr?uU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,cU("linearToOutputTexel",t.outputColorSpace),fU(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xc).join(`
`)),u=Fg(u),u=Yb(u,t),u=Wb(u,t),f=Fg(f),f=Yb(f,t),f=Wb(f,t),u=qb(u),f=qb(f),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",t.glslVersion===nb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=O+b+u,E=O+y+f,L=Vb(o,o.VERTEX_SHADER,w),B=Vb(o,o.FRAGMENT_SHADER,E);o.attachShader(T,L),o.attachShader(T,B),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function R(j){if(n.debug.checkShaderErrors){const ne=o.getProgramInfoLog(T).trim(),Z=o.getShaderInfoLog(L).trim(),ue=o.getShaderInfoLog(B).trim();let re=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,L,B);else{const J=jb(o,L,"vertex"),q=jb(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ne+`
`+J+`
`+q)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||ue==="")&&(X=!1);X&&(j.diagnostics={runnable:re,programLog:ne,vertexShader:{log:Z,prefix:b},fragmentShader:{log:ue,prefix:y}})}o.deleteShader(L),o.deleteShader(B),V=new $f(o,T),U=pU(o,T)}let V;this.getUniforms=function(){return V===void 0&&R(this),V};let U;this.getAttributes=function(){return U===void 0&&R(this),U};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(T,rU)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oU++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=B,this}let AU=0;class wU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new CU(e),t.set(e,a)),a}}class CU{constructor(e){this.id=AU++,this.code=e,this.usedTimes=0}}function RU(n,e,t,a,o,l,u){const f=new P0,h=new wU,p=new Set,m=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return p.add(U),U===0?"uv":`uv${U}`}function b(U,D,j,ne,Z){const ue=ne.fog,re=Z.geometry,X=U.isMeshStandardMaterial?ne.environment:null,J=(U.isMeshStandardMaterial?t:e).get(U.envMap||X),q=J&&J.mapping===Ed?J.image.height:null,_e=S[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const F=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,te=F!==void 0?F.length:0;let xe=0;re.morphAttributes.position!==void 0&&(xe=1),re.morphAttributes.normal!==void 0&&(xe=2),re.morphAttributes.color!==void 0&&(xe=3);let Te,K,$,ce;if(_e){const gt=ba[_e];Te=gt.vertexShader,K=gt.fragmentShader}else Te=U.vertexShader,K=U.fragmentShader,h.update(U),$=h.getVertexShaderID(U),ce=h.getFragmentShaderID(U);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),De=Z.isInstancedMesh===!0,Ve=Z.isBatchedMesh===!0,it=!!U.map,at=!!U.matcap,et=!!J,N=!!U.aoMap,Le=!!U.lightMap,Oe=!!U.bumpMap,He=!!U.normalMap,je=!!U.displacementMap,nt=!!U.emissiveMap,Pe=!!U.metalnessMap,k=!!U.roughnessMap,C=U.anisotropy>0,ae=U.clearcoat>0,be=U.dispersion>0,we=U.iridescence>0,me=U.sheen>0,Fe=U.transmission>0,Ne=C&&!!U.anisotropyMap,ke=ae&&!!U.clearcoatMap,pt=ae&&!!U.clearcoatNormalMap,Be=ae&&!!U.clearcoatRoughnessMap,Ye=we&&!!U.iridescenceMap,rt=we&&!!U.iridescenceThicknessMap,ct=me&&!!U.sheenColorMap,Xe=me&&!!U.sheenRoughnessMap,ht=!!U.specularMap,st=!!U.specularColorMap,Bt=!!U.specularIntensityMap,ee=Fe&&!!U.transmissionMap,qe=Fe&&!!U.thicknessMap,I=!!U.gradientMap,ie=!!U.alphaMap,Me=U.alphaTest>0,Ie=!!U.alphaHash,Je=!!U.extensions;let Ut=Xr;U.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const Pt={shaderID:_e,shaderType:U.type,shaderName:U.name,vertexShader:Te,fragmentShader:K,defines:U.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Ve,batchingColor:Ve&&Z._colorsTexture!==null,instancing:De,instancingColor:De&&Z.instanceColor!==null,instancingMorph:De&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:nl,alphaToCoverage:!!U.alphaToCoverage,map:it,matcap:at,envMap:et,envMapMode:et&&J.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:Le,bumpMap:Oe,normalMap:He,displacementMap:_&&je,emissiveMap:nt,normalMapObjectSpace:He&&U.normalMapType===bC,normalMapTangentSpace:He&&U.normalMapType===yC,metalnessMap:Pe,roughnessMap:k,anisotropy:C,anisotropyMap:Ne,clearcoat:ae,clearcoatMap:ke,clearcoatNormalMap:pt,clearcoatRoughnessMap:Be,dispersion:be,iridescence:we,iridescenceMap:Ye,iridescenceThicknessMap:rt,sheen:me,sheenColorMap:ct,sheenRoughnessMap:Xe,specularMap:ht,specularColorMap:st,specularIntensityMap:Bt,transmission:Fe,transmissionMap:ee,thicknessMap:qe,gradientMap:I,opaque:U.transparent===!1&&U.blending===Xs&&U.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:Ie,combine:U.combine,mapUv:it&&T(U.map.channel),aoMapUv:N&&T(U.aoMap.channel),lightMapUv:Le&&T(U.lightMap.channel),bumpMapUv:Oe&&T(U.bumpMap.channel),normalMapUv:He&&T(U.normalMap.channel),displacementMapUv:je&&T(U.displacementMap.channel),emissiveMapUv:nt&&T(U.emissiveMap.channel),metalnessMapUv:Pe&&T(U.metalnessMap.channel),roughnessMapUv:k&&T(U.roughnessMap.channel),anisotropyMapUv:Ne&&T(U.anisotropyMap.channel),clearcoatMapUv:ke&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:pt&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(U.sheenRoughnessMap.channel),specularMapUv:ht&&T(U.specularMap.channel),specularColorMapUv:st&&T(U.specularColorMap.channel),specularIntensityMapUv:Bt&&T(U.specularIntensityMap.channel),transmissionMapUv:ee&&T(U.transmissionMap.channel),thicknessMapUv:qe&&T(U.thicknessMap.channel),alphaMapUv:ie&&T(U.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(He||C),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!re.attributes.uv&&(it||ie),fog:!!ue,useFog:U.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:it&&U.map.isVideoTexture===!0&&Gt.getTransfer(U.map.colorSpace)===nn,decodeVideoTextureEmissive:nt&&U.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(U.emissiveMap.colorSpace)===nn,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Qa,flipSided:U.side===mi,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Je&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&U.extensions.multiDraw===!0||Ve)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function y(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const j in U.defines)D.push(j),D.push(U.defines[j]);return U.isRawShaderMaterial===!1&&(O(D,U),w(D,U),D.push(n.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function O(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function w(U,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),U.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reverseDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),U.push(f.mask)}function E(U){const D=S[U.type];let j;if(D){const ne=ba[D];j=QC.clone(ne.uniforms)}else j=U.uniforms;return j}function L(U,D){let j;for(let ne=0,Z=m.length;ne<Z;ne++){const ue=m[ne];if(ue.cacheKey===D){j=ue,++j.usedTimes;break}}return j===void 0&&(j=new TU(n,D,U,l),m.push(j)),j}function B(U){if(--U.usedTimes===0){const D=m.indexOf(U);m[D]=m[m.length-1],m.pop(),U.destroy()}}function R(U){h.remove(U)}function V(){h.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:E,acquireProgram:L,releaseProgram:B,releaseShaderCache:R,programs:m,dispose:V}}function DU(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function a(u){n.delete(u)}function o(u,f,h){n.get(u)[f]=h}function l(){n=new WeakMap}return{has:e,get:t,remove:a,update:o,dispose:l}}function LU(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kb(){const n=[];let e=0;const t=[],a=[],o=[];function l(){e=0,t.length=0,a.length=0,o.length=0}function u(v,_,x,S,T,b){let y=n[e];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:S,renderOrder:v.renderOrder,z:T,group:b},n[e]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=S,y.renderOrder=v.renderOrder,y.z=T,y.group=b),e++,y}function f(v,_,x,S,T,b){const y=u(v,_,x,S,T,b);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):t.push(y)}function h(v,_,x,S,T,b){const y=u(v,_,x,S,T,b);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function p(v,_){t.length>1&&t.sort(v||LU),a.length>1&&a.sort(_||Zb),o.length>1&&o.sort(_||Zb)}function m(){for(let v=e,_=n.length;v<_;v++){const x=n[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:o,init:l,push:f,unshift:h,finish:m,sort:p}}function UU(){let n=new WeakMap;function e(a,o){const l=n.get(a);let u;return l===void 0?(u=new Kb,n.set(a,[u])):o>=l.length?(u=new Kb,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function PU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ye,color:new Vt};break;case"SpotLight":t={position:new ye,direction:new ye,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ye,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ye,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":t={color:new Vt,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return n[e.id]=t,t}}}function NU(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new on};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new on};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new on,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OU=0;function zU(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BU(n){const e=new PU,t=NU(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ye);const o=new ye,l=new un,u=new un;function f(p){let m=0,v=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,S=0,T=0,b=0,y=0,O=0,w=0,E=0,L=0,B=0,R=0;p.sort(zU);for(let U=0,D=p.length;U<D;U++){const j=p[U],ne=j.color,Z=j.intensity,ue=j.distance,re=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)m+=ne.r*Z,v+=ne.g*Z,_+=ne.b*Z;else if(j.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(j.sh.coefficients[X],Z);R++}else if(j.isDirectionalLight){const X=e.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const J=j.shadow,q=t.get(j);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,a.directionalShadow[x]=q,a.directionalShadowMap[x]=re,a.directionalShadowMatrix[x]=j.shadow.matrix,O++}a.directional[x]=X,x++}else if(j.isSpotLight){const X=e.get(j);X.position.setFromMatrixPosition(j.matrixWorld),X.color.copy(ne).multiplyScalar(Z),X.distance=ue,X.coneCos=Math.cos(j.angle),X.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),X.decay=j.decay,a.spot[T]=X;const J=j.shadow;if(j.map&&(a.spotLightMap[L]=j.map,L++,J.updateMatrices(j),j.castShadow&&B++),a.spotLightMatrix[T]=J.matrix,j.castShadow){const q=t.get(j);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,a.spotShadow[T]=q,a.spotShadowMap[T]=re,E++}T++}else if(j.isRectAreaLight){const X=e.get(j);X.color.copy(ne).multiplyScalar(Z),X.halfWidth.set(j.width*.5,0,0),X.halfHeight.set(0,j.height*.5,0),a.rectArea[b]=X,b++}else if(j.isPointLight){const X=e.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),X.distance=j.distance,X.decay=j.decay,j.castShadow){const J=j.shadow,q=t.get(j);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,a.pointShadow[S]=q,a.pointShadowMap[S]=re,a.pointShadowMatrix[S]=j.shadow.matrix,w++}a.point[S]=X,S++}else if(j.isHemisphereLight){const X=e.get(j);X.skyColor.copy(j.color).multiplyScalar(Z),X.groundColor.copy(j.groundColor).multiplyScalar(Z),a.hemi[y]=X,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Qe.LTC_FLOAT_1,a.rectAreaLTC2=Qe.LTC_FLOAT_2):(a.rectAreaLTC1=Qe.LTC_HALF_1,a.rectAreaLTC2=Qe.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=_;const V=a.hash;(V.directionalLength!==x||V.pointLength!==S||V.spotLength!==T||V.rectAreaLength!==b||V.hemiLength!==y||V.numDirectionalShadows!==O||V.numPointShadows!==w||V.numSpotShadows!==E||V.numSpotMaps!==L||V.numLightProbes!==R)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=b,a.point.length=S,a.hemi.length=y,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=E,a.spotShadowMap.length=E,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=E+L-B,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=R,V.directionalLength=x,V.pointLength=S,V.spotLength=T,V.rectAreaLength=b,V.hemiLength=y,V.numDirectionalShadows=O,V.numPointShadows=w,V.numSpotShadows=E,V.numSpotMaps=L,V.numLightProbes=R,a.version=OU++)}function h(p,m){let v=0,_=0,x=0,S=0,T=0;const b=m.matrixWorldInverse;for(let y=0,O=p.length;y<O;y++){const w=p[y];if(w.isDirectionalLight){const E=a.directional[v];E.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(b),v++}else if(w.isSpotLight){const E=a.spot[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(b),E.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(b),x++}else if(w.isRectAreaLight){const E=a.rectArea[S];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(b),u.identity(),l.copy(w.matrixWorld),l.premultiply(b),u.extractRotation(l),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(u),E.halfHeight.applyMatrix4(u),S++}else if(w.isPointLight){const E=a.point[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(b),_++}else if(w.isHemisphereLight){const E=a.hemi[T];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(b),T++}}}return{setup:f,setupView:h,state:a}}function Qb(n){const e=new BU(n),t=[],a=[];function o(m){p.camera=m,t.length=0,a.length=0}function l(m){t.push(m)}function u(m){a.push(m)}function f(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function FU(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Qb(n),e.set(o,[f])):l>=u.length?(f=new Qb(n),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const IU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HU(n,e,t){let a=new dM;const o=new on,l=new on,u=new An,f=new dR({depthPacking:xC}),h=new hR,p={},m=t.maxTextureSize,v={[Yr]:mi,[mi]:Yr,[Qa]:Qa},_=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new on},radius:{value:4}},vertexShader:IU,fragmentShader:kU}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new rr;S.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ra(S,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jS;let y=this.type;this.render=function(B,R,V){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||B.length===0)return;const U=n.getRenderTarget(),D=n.getActiveCubeFace(),j=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Vr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=y!==Za&&this.type===Za,ue=y===Za&&this.type!==Za;for(let re=0,X=B.length;re<X;re++){const J=B[re],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const _e=q.getFrameExtents();if(o.multiply(_e),l.copy(q.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/_e.x),o.x=l.x*_e.x,q.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/_e.y),o.y=l.y*_e.y,q.mapSize.y=l.y)),q.map===null||Z===!0||ue===!0){const te=this.type!==Za?{minFilter:wi,magFilter:wi}:{};q.map!==null&&q.map.dispose(),q.map=new Po(o.x,o.y,te),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const F=q.getViewportCount();for(let te=0;te<F;te++){const xe=q.getViewport(te);u.set(l.x*xe.x,l.y*xe.y,l.x*xe.z,l.y*xe.w),ne.viewport(u),q.updateMatrices(J,te),a=q.getFrustum(),E(R,V,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Za&&O(q,V),q.needsUpdate=!1}y=this.type,b.needsUpdate=!1,n.setRenderTarget(U,D,j)};function O(B,R){const V=e.update(T);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Po(o.x,o.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(R,null,V,_,T,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(R,null,V,x,T,null)}function w(B,R,V,U){let D=null;const j=V.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(j!==void 0)D=j;else if(D=V.isPointLight===!0?h:f,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ne=D.uuid,Z=R.uuid;let ue=p[ne];ue===void 0&&(ue={},p[ne]=ue);let re=ue[Z];re===void 0&&(re=D.clone(),ue[Z]=re,R.addEventListener("dispose",L)),D=re}if(D.visible=R.visible,D.wireframe=R.wireframe,U===Za?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:v[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=n.properties.get(D);ne.light=V}return D}function E(B,R,V,U,D){if(B.visible===!1)return;if(B.layers.test(R.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Za)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,B.matrixWorld);const Z=e.update(B),ue=B.material;if(Array.isArray(ue)){const re=Z.groups;for(let X=0,J=re.length;X<J;X++){const q=re[X],_e=ue[q.materialIndex];if(_e&&_e.visible){const F=w(B,_e,U,D);B.onBeforeShadow(n,B,R,V,Z,F,q),n.renderBufferDirect(V,null,Z,F,B,q),B.onAfterShadow(n,B,R,V,Z,F,q)}}}else if(ue.visible){const re=w(B,ue,U,D);B.onBeforeShadow(n,B,R,V,Z,re,null),n.renderBufferDirect(V,null,Z,re,B,null),B.onAfterShadow(n,B,R,V,Z,re,null)}}const ne=B.children;for(let Z=0,ue=ne.length;Z<ue;Z++)E(ne[Z],R,V,U,D)}function L(B){B.target.removeEventListener("dispose",L);for(const V in p){const U=p[V],D=B.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const GU={[Qm]:Jm,[eg]:ig,[tg]:ag,[Js]:ng,[Jm]:Qm,[ig]:eg,[ag]:tg,[ng]:Js};function VU(n,e){function t(){let ee=!1;const qe=new An;let I=null;const ie=new An(0,0,0,0);return{setMask:function(Me){I!==Me&&!ee&&(n.colorMask(Me,Me,Me,Me),I=Me)},setLocked:function(Me){ee=Me},setClear:function(Me,Ie,Je,Ut,Pt){Pt===!0&&(Me*=Ut,Ie*=Ut,Je*=Ut),qe.set(Me,Ie,Je,Ut),ie.equals(qe)===!1&&(n.clearColor(Me,Ie,Je,Ut),ie.copy(qe))},reset:function(){ee=!1,I=null,ie.set(-1,0,0,0)}}}function a(){let ee=!1,qe=!1,I=null,ie=null,Me=null;return{setReversed:function(Ie){if(qe!==Ie){const Je=e.get("EXT_clip_control");Ie?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),qe=Ie;const Ut=Me;Me=null,this.setClear(Ut)}},getReversed:function(){return qe},setTest:function(Ie){Ie?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(Ie){I!==Ie&&!ee&&(n.depthMask(Ie),I=Ie)},setFunc:function(Ie){if(qe&&(Ie=GU[Ie]),ie!==Ie){switch(Ie){case Qm:n.depthFunc(n.NEVER);break;case Jm:n.depthFunc(n.ALWAYS);break;case eg:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case tg:n.depthFunc(n.EQUAL);break;case ng:n.depthFunc(n.GEQUAL);break;case ig:n.depthFunc(n.GREATER);break;case ag:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=Ie}},setLocked:function(Ie){ee=Ie},setClear:function(Ie){Me!==Ie&&(qe&&(Ie=1-Ie),n.clearDepth(Ie),Me=Ie)},reset:function(){ee=!1,I=null,ie=null,Me=null,qe=!1}}}function o(){let ee=!1,qe=null,I=null,ie=null,Me=null,Ie=null,Je=null,Ut=null,Pt=null;return{setTest:function(gt){ee||(gt?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(gt){qe!==gt&&!ee&&(n.stencilMask(gt),qe=gt)},setFunc:function(gt,fn,Wt){(I!==gt||ie!==fn||Me!==Wt)&&(n.stencilFunc(gt,fn,Wt),I=gt,ie=fn,Me=Wt)},setOp:function(gt,fn,Wt){(Ie!==gt||Je!==fn||Ut!==Wt)&&(n.stencilOp(gt,fn,Wt),Ie=gt,Je=fn,Ut=Wt)},setLocked:function(gt){ee=gt},setClear:function(gt){Pt!==gt&&(n.clearStencil(gt),Pt=gt)},reset:function(){ee=!1,qe=null,I=null,ie=null,Me=null,Ie=null,Je=null,Ut=null,Pt=null}}}const l=new t,u=new a,f=new o,h=new WeakMap,p=new WeakMap;let m={},v={},_=new WeakMap,x=[],S=null,T=!1,b=null,y=null,O=null,w=null,E=null,L=null,B=null,R=new Vt(0,0,0),V=0,U=!1,D=null,j=null,ne=null,Z=null,ue=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=J>=2);let _e=null,F={};const te=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Te=new An().fromArray(te),K=new An().fromArray(xe);function $(ee,qe,I,ie){const Me=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(ee,Ie),n.texParameteri(ee,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ee,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<I;Je++)ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?n.texImage3D(qe,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(qe+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Ie}const ce={};ce[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(n.DEPTH_TEST),u.setFunc(Js),Oe(!1),He($y),he(n.CULL_FACE),N(Vr);function he(ee){m[ee]!==!0&&(n.enable(ee),m[ee]=!0)}function Ae(ee){m[ee]!==!1&&(n.disable(ee),m[ee]=!1)}function De(ee,qe){return v[ee]!==qe?(n.bindFramebuffer(ee,qe),v[ee]=qe,ee===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=qe),ee===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=qe),!0):!1}function Ve(ee,qe){let I=x,ie=!1;if(ee){I=_.get(qe),I===void 0&&(I=[],_.set(qe,I));const Me=ee.textures;if(I.length!==Me.length||I[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,Je=Me.length;Ie<Je;Ie++)I[Ie]=n.COLOR_ATTACHMENT0+Ie;I.length=Me.length,ie=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,ie=!0);ie&&n.drawBuffers(I)}function it(ee){return S!==ee?(n.useProgram(ee),S=ee,!0):!1}const at={[Eo]:n.FUNC_ADD,[jw]:n.FUNC_SUBTRACT,[Yw]:n.FUNC_REVERSE_SUBTRACT};at[Ww]=n.MIN,at[qw]=n.MAX;const et={[$w]:n.ZERO,[Zw]:n.ONE,[Kw]:n.SRC_COLOR,[Zm]:n.SRC_ALPHA,[iC]:n.SRC_ALPHA_SATURATE,[tC]:n.DST_COLOR,[Jw]:n.DST_ALPHA,[Qw]:n.ONE_MINUS_SRC_COLOR,[Km]:n.ONE_MINUS_SRC_ALPHA,[nC]:n.ONE_MINUS_DST_COLOR,[eC]:n.ONE_MINUS_DST_ALPHA,[aC]:n.CONSTANT_COLOR,[rC]:n.ONE_MINUS_CONSTANT_COLOR,[oC]:n.CONSTANT_ALPHA,[sC]:n.ONE_MINUS_CONSTANT_ALPHA};function N(ee,qe,I,ie,Me,Ie,Je,Ut,Pt,gt){if(ee===Vr){T===!0&&(Ae(n.BLEND),T=!1);return}if(T===!1&&(he(n.BLEND),T=!0),ee!==Xw){if(ee!==b||gt!==U){if((y!==Eo||E!==Eo)&&(n.blendEquation(n.FUNC_ADD),y=Eo,E=Eo),gt)switch(ee){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zy:n.blendFunc(n.ONE,n.ONE);break;case Ky:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zy:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ky:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}O=null,w=null,L=null,B=null,R.set(0,0,0),V=0,b=ee,U=gt}return}Me=Me||qe,Ie=Ie||I,Je=Je||ie,(qe!==y||Me!==E)&&(n.blendEquationSeparate(at[qe],at[Me]),y=qe,E=Me),(I!==O||ie!==w||Ie!==L||Je!==B)&&(n.blendFuncSeparate(et[I],et[ie],et[Ie],et[Je]),O=I,w=ie,L=Ie,B=Je),(Ut.equals(R)===!1||Pt!==V)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Pt),R.copy(Ut),V=Pt),b=ee,U=!1}function Le(ee,qe){ee.side===Qa?Ae(n.CULL_FACE):he(n.CULL_FACE);let I=ee.side===mi;qe&&(I=!I),Oe(I),ee.blending===Xs&&ee.transparent===!1?N(Vr):N(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),u.setFunc(ee.depthFunc),u.setTest(ee.depthTest),u.setMask(ee.depthWrite),l.setMask(ee.colorWrite);const ie=ee.stencilWrite;f.setTest(ie),ie&&(f.setMask(ee.stencilWriteMask),f.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),f.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),nt(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(ee){D!==ee&&(ee?n.frontFace(n.CW):n.frontFace(n.CCW),D=ee)}function He(ee){ee!==Hw?(he(n.CULL_FACE),ee!==j&&(ee===$y?n.cullFace(n.BACK):ee===Gw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),j=ee}function je(ee){ee!==ne&&(X&&n.lineWidth(ee),ne=ee)}function nt(ee,qe,I){ee?(he(n.POLYGON_OFFSET_FILL),(Z!==qe||ue!==I)&&(n.polygonOffset(qe,I),Z=qe,ue=I)):Ae(n.POLYGON_OFFSET_FILL)}function Pe(ee){ee?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function k(ee){ee===void 0&&(ee=n.TEXTURE0+re-1),_e!==ee&&(n.activeTexture(ee),_e=ee)}function C(ee,qe,I){I===void 0&&(_e===null?I=n.TEXTURE0+re-1:I=_e);let ie=F[I];ie===void 0&&(ie={type:void 0,texture:void 0},F[I]=ie),(ie.type!==ee||ie.texture!==qe)&&(_e!==I&&(n.activeTexture(I),_e=I),n.bindTexture(ee,qe||ce[ee]),ie.type=ee,ie.texture=qe)}function ae(){const ee=F[_e];ee!==void 0&&ee.type!==void 0&&(n.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function be(){try{n.compressedTexImage2D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function we(){try{n.compressedTexImage3D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function me(){try{n.texSubImage2D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Fe(){try{n.texSubImage3D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ne(){try{n.compressedTexSubImage2D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function pt(){try{n.texStorage2D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Be(){try{n.texStorage3D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ye(){try{n.texImage2D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function rt(){try{n.texImage3D(...arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ct(ee){Te.equals(ee)===!1&&(n.scissor(ee.x,ee.y,ee.z,ee.w),Te.copy(ee))}function Xe(ee){K.equals(ee)===!1&&(n.viewport(ee.x,ee.y,ee.z,ee.w),K.copy(ee))}function ht(ee,qe){let I=p.get(qe);I===void 0&&(I=new WeakMap,p.set(qe,I));let ie=I.get(ee);ie===void 0&&(ie=n.getUniformBlockIndex(qe,ee.name),I.set(ee,ie))}function st(ee,qe){const ie=p.get(qe).get(ee);h.get(qe)!==ie&&(n.uniformBlockBinding(qe,ie,ee.__bindingPointIndex),h.set(qe,ie))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},_e=null,F={},v={},_=new WeakMap,x=[],S=null,T=!1,b=null,y=null,O=null,w=null,E=null,L=null,B=null,R=new Vt(0,0,0),V=0,U=!1,D=null,j=null,ne=null,Z=null,ue=null,Te.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Ae,bindFramebuffer:De,drawBuffers:Ve,useProgram:it,setBlending:N,setMaterial:Le,setFlipSided:Oe,setCullFace:He,setLineWidth:je,setPolygonOffset:nt,setScissorTest:Pe,activeTexture:k,bindTexture:C,unbindTexture:ae,compressedTexImage2D:be,compressedTexImage3D:we,texImage2D:Ye,texImage3D:rt,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:pt,texStorage3D:Be,texSubImage2D:me,texSubImage3D:Fe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:ke,scissor:ct,viewport:Xe,reset:Bt}}function XU(n,e,t,a,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new on,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(k,C){return x?new OffscreenCanvas(k,C):sd("canvas")}function T(k,C,ae){let be=1;const we=Pe(k);if((we.width>ae||we.height>ae)&&(be=ae/Math.max(we.width,we.height)),be<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const me=Math.floor(be*we.width),Fe=Math.floor(be*we.height);v===void 0&&(v=S(me,Fe));const Ne=C?S(me,Fe):v;return Ne.width=me,Ne.height=Fe,Ne.getContext("2d").drawImage(k,0,0,me,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+me+"x"+Fe+")."),Ne}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),k;return k}function b(k){return k.generateMipmaps}function y(k){n.generateMipmap(k)}function O(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(k,C,ae,be,we=!1){if(k!==null){if(n[k]!==void 0)return n[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let me=C;if(C===n.RED&&(ae===n.FLOAT&&(me=n.R32F),ae===n.HALF_FLOAT&&(me=n.R16F),ae===n.UNSIGNED_BYTE&&(me=n.R8)),C===n.RED_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.R8UI),ae===n.UNSIGNED_SHORT&&(me=n.R16UI),ae===n.UNSIGNED_INT&&(me=n.R32UI),ae===n.BYTE&&(me=n.R8I),ae===n.SHORT&&(me=n.R16I),ae===n.INT&&(me=n.R32I)),C===n.RG&&(ae===n.FLOAT&&(me=n.RG32F),ae===n.HALF_FLOAT&&(me=n.RG16F),ae===n.UNSIGNED_BYTE&&(me=n.RG8)),C===n.RG_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RG8UI),ae===n.UNSIGNED_SHORT&&(me=n.RG16UI),ae===n.UNSIGNED_INT&&(me=n.RG32UI),ae===n.BYTE&&(me=n.RG8I),ae===n.SHORT&&(me=n.RG16I),ae===n.INT&&(me=n.RG32I)),C===n.RGB_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RGB8UI),ae===n.UNSIGNED_SHORT&&(me=n.RGB16UI),ae===n.UNSIGNED_INT&&(me=n.RGB32UI),ae===n.BYTE&&(me=n.RGB8I),ae===n.SHORT&&(me=n.RGB16I),ae===n.INT&&(me=n.RGB32I)),C===n.RGBA_INTEGER&&(ae===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),ae===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),ae===n.UNSIGNED_INT&&(me=n.RGBA32UI),ae===n.BYTE&&(me=n.RGBA8I),ae===n.SHORT&&(me=n.RGBA16I),ae===n.INT&&(me=n.RGBA32I)),C===n.RGB&&ae===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),C===n.RGBA){const Fe=we?rd:Gt.getTransfer(be);ae===n.FLOAT&&(me=n.RGBA32F),ae===n.HALF_FLOAT&&(me=n.RGBA16F),ae===n.UNSIGNED_BYTE&&(me=Fe===nn?n.SRGB8_ALPHA8:n.RGBA8),ae===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ae===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function E(k,C){let ae;return k?C===null||C===Uo||C===wc?ae=n.DEPTH24_STENCIL8:C===Ea?ae=n.DEPTH32F_STENCIL8:C===Ac&&(ae=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Uo||C===wc?ae=n.DEPTH_COMPONENT24:C===Ea?ae=n.DEPTH_COMPONENT32F:C===Ac&&(ae=n.DEPTH_COMPONENT16),ae}function L(k,C){return b(k)===!0||k.isFramebufferTexture&&k.minFilter!==wi&&k.minFilter!==Ma?Math.log2(Math.max(C.width,C.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?C.mipmaps.length:1}function B(k){const C=k.target;C.removeEventListener("dispose",B),V(C),C.isVideoTexture&&m.delete(C)}function R(k){const C=k.target;C.removeEventListener("dispose",R),D(C)}function V(k){const C=a.get(k);if(C.__webglInit===void 0)return;const ae=k.source,be=_.get(ae);if(be){const we=be[C.__cacheKey];we.usedTimes--,we.usedTimes===0&&U(k),Object.keys(be).length===0&&_.delete(ae)}a.remove(k)}function U(k){const C=a.get(k);n.deleteTexture(C.__webglTexture);const ae=k.source,be=_.get(ae);delete be[C.__cacheKey],u.memory.textures--}function D(k){const C=a.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),a.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(C.__webglFramebuffer[be]))for(let we=0;we<C.__webglFramebuffer[be].length;we++)n.deleteFramebuffer(C.__webglFramebuffer[be][we]);else n.deleteFramebuffer(C.__webglFramebuffer[be]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[be])}else{if(Array.isArray(C.__webglFramebuffer))for(let be=0;be<C.__webglFramebuffer.length;be++)n.deleteFramebuffer(C.__webglFramebuffer[be]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let be=0;be<C.__webglColorRenderbuffer.length;be++)C.__webglColorRenderbuffer[be]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[be]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ae=k.textures;for(let be=0,we=ae.length;be<we;be++){const me=a.get(ae[be]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),u.memory.textures--),a.remove(ae[be])}a.remove(k)}let j=0;function ne(){j=0}function Z(){const k=j;return k>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),j+=1,k}function ue(k){const C=[];return C.push(k.wrapS),C.push(k.wrapT),C.push(k.wrapR||0),C.push(k.magFilter),C.push(k.minFilter),C.push(k.anisotropy),C.push(k.internalFormat),C.push(k.format),C.push(k.type),C.push(k.generateMipmaps),C.push(k.premultiplyAlpha),C.push(k.flipY),C.push(k.unpackAlignment),C.push(k.colorSpace),C.join()}function re(k,C){const ae=a.get(k);if(k.isVideoTexture&&je(k),k.isRenderTargetTexture===!1&&k.version>0&&ae.__version!==k.version){const be=k.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(ae,k,C);return}}t.bindTexture(n.TEXTURE_2D,ae.__webglTexture,n.TEXTURE0+C)}function X(k,C){const ae=a.get(k);if(k.version>0&&ae.__version!==k.version){K(ae,k,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ae.__webglTexture,n.TEXTURE0+C)}function J(k,C){const ae=a.get(k);if(k.version>0&&ae.__version!==k.version){K(ae,k,C);return}t.bindTexture(n.TEXTURE_3D,ae.__webglTexture,n.TEXTURE0+C)}function q(k,C){const ae=a.get(k);if(k.version>0&&ae.__version!==k.version){$(ae,k,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture,n.TEXTURE0+C)}const _e={[sg]:n.REPEAT,[wo]:n.CLAMP_TO_EDGE,[lg]:n.MIRRORED_REPEAT},F={[wi]:n.NEAREST,[vC]:n.NEAREST_MIPMAP_NEAREST,[ef]:n.NEAREST_MIPMAP_LINEAR,[Ma]:n.LINEAR,[Vp]:n.LINEAR_MIPMAP_NEAREST,[Co]:n.LINEAR_MIPMAP_LINEAR},te={[SC]:n.NEVER,[CC]:n.ALWAYS,[MC]:n.LESS,[iM]:n.LEQUAL,[EC]:n.EQUAL,[wC]:n.GEQUAL,[TC]:n.GREATER,[AC]:n.NOTEQUAL};function xe(k,C){if(C.type===Ea&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ma||C.magFilter===Vp||C.magFilter===ef||C.magFilter===Co||C.minFilter===Ma||C.minFilter===Vp||C.minFilter===ef||C.minFilter===Co)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,_e[C.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,_e[C.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,_e[C.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,F[C.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,F[C.minFilter]),C.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===wi||C.minFilter!==ef&&C.minFilter!==Co||C.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function Te(k,C){let ae=!1;k.__webglInit===void 0&&(k.__webglInit=!0,C.addEventListener("dispose",B));const be=C.source;let we=_.get(be);we===void 0&&(we={},_.set(be,we));const me=ue(C);if(me!==k.__cacheKey){we[me]===void 0&&(we[me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),we[me].usedTimes++;const Fe=we[k.__cacheKey];Fe!==void 0&&(we[k.__cacheKey].usedTimes--,Fe.usedTimes===0&&U(C)),k.__cacheKey=me,k.__webglTexture=we[me].texture}return ae}function K(k,C,ae){let be=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(be=n.TEXTURE_3D);const we=Te(k,C),me=C.source;t.bindTexture(be,k.__webglTexture,n.TEXTURE0+ae);const Fe=a.get(me);if(me.version!==Fe.__version||we===!0){t.activeTexture(n.TEXTURE0+ae);const Ne=Gt.getPrimaries(Gt.workingColorSpace),ke=C.colorSpace===kr?null:Gt.getPrimaries(C.colorSpace),pt=C.colorSpace===kr||Ne===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Be=T(C.image,!1,o.maxTextureSize);Be=nt(C,Be);const Ye=l.convert(C.format,C.colorSpace),rt=l.convert(C.type);let ct=w(C.internalFormat,Ye,rt,C.colorSpace,C.isVideoTexture);xe(be,C);let Xe;const ht=C.mipmaps,st=C.isVideoTexture!==!0,Bt=Fe.__version===void 0||we===!0,ee=me.dataReady,qe=L(C,Be);if(C.isDepthTexture)ct=E(C.format===Rc,C.type),Bt&&(st?t.texStorage2D(n.TEXTURE_2D,1,ct,Be.width,Be.height):t.texImage2D(n.TEXTURE_2D,0,ct,Be.width,Be.height,0,Ye,rt,null));else if(C.isDataTexture)if(ht.length>0){st&&Bt&&t.texStorage2D(n.TEXTURE_2D,qe,ct,ht[0].width,ht[0].height);for(let I=0,ie=ht.length;I<ie;I++)Xe=ht[I],st?ee&&t.texSubImage2D(n.TEXTURE_2D,I,0,0,Xe.width,Xe.height,Ye,rt,Xe.data):t.texImage2D(n.TEXTURE_2D,I,ct,Xe.width,Xe.height,0,Ye,rt,Xe.data);C.generateMipmaps=!1}else st?(Bt&&t.texStorage2D(n.TEXTURE_2D,qe,ct,Be.width,Be.height),ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be.width,Be.height,Ye,rt,Be.data)):t.texImage2D(n.TEXTURE_2D,0,ct,Be.width,Be.height,0,Ye,rt,Be.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){st&&Bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ct,ht[0].width,ht[0].height,Be.depth);for(let I=0,ie=ht.length;I<ie;I++)if(Xe=ht[I],C.format!==aa)if(Ye!==null)if(st){if(ee)if(C.layerUpdates.size>0){const Me=Cb(Xe.width,Xe.height,C.format,C.type);for(const Ie of C.layerUpdates){const Je=Xe.data.subarray(Ie*Me/Xe.data.BYTES_PER_ELEMENT,(Ie+1)*Me/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,Ie,Xe.width,Xe.height,1,Ye,Je)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,0,Xe.width,Xe.height,Be.depth,Ye,Xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,I,ct,Xe.width,Xe.height,Be.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,0,Xe.width,Xe.height,Be.depth,Ye,rt,Xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,I,ct,Xe.width,Xe.height,Be.depth,0,Ye,rt,Xe.data)}else{st&&Bt&&t.texStorage2D(n.TEXTURE_2D,qe,ct,ht[0].width,ht[0].height);for(let I=0,ie=ht.length;I<ie;I++)Xe=ht[I],C.format!==aa?Ye!==null?st?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,I,0,0,Xe.width,Xe.height,Ye,Xe.data):t.compressedTexImage2D(n.TEXTURE_2D,I,ct,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?ee&&t.texSubImage2D(n.TEXTURE_2D,I,0,0,Xe.width,Xe.height,Ye,rt,Xe.data):t.texImage2D(n.TEXTURE_2D,I,ct,Xe.width,Xe.height,0,Ye,rt,Xe.data)}else if(C.isDataArrayTexture)if(st){if(Bt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,ct,Be.width,Be.height,Be.depth),ee)if(C.layerUpdates.size>0){const I=Cb(Be.width,Be.height,C.format,C.type);for(const ie of C.layerUpdates){const Me=Be.data.subarray(ie*I/Be.data.BYTES_PER_ELEMENT,(ie+1)*I/Be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,Be.width,Be.height,1,Ye,rt,Me)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Be.width,Be.height,Be.depth,Ye,rt,Be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,Be.width,Be.height,Be.depth,0,Ye,rt,Be.data);else if(C.isData3DTexture)st?(Bt&&t.texStorage3D(n.TEXTURE_3D,qe,ct,Be.width,Be.height,Be.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Be.width,Be.height,Be.depth,Ye,rt,Be.data)):t.texImage3D(n.TEXTURE_3D,0,ct,Be.width,Be.height,Be.depth,0,Ye,rt,Be.data);else if(C.isFramebufferTexture){if(Bt)if(st)t.texStorage2D(n.TEXTURE_2D,qe,ct,Be.width,Be.height);else{let I=Be.width,ie=Be.height;for(let Me=0;Me<qe;Me++)t.texImage2D(n.TEXTURE_2D,Me,ct,I,ie,0,Ye,rt,null),I>>=1,ie>>=1}}else if(ht.length>0){if(st&&Bt){const I=Pe(ht[0]);t.texStorage2D(n.TEXTURE_2D,qe,ct,I.width,I.height)}for(let I=0,ie=ht.length;I<ie;I++)Xe=ht[I],st?ee&&t.texSubImage2D(n.TEXTURE_2D,I,0,0,Ye,rt,Xe):t.texImage2D(n.TEXTURE_2D,I,ct,Ye,rt,Xe);C.generateMipmaps=!1}else if(st){if(Bt){const I=Pe(Be);t.texStorage2D(n.TEXTURE_2D,qe,ct,I.width,I.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ye,rt,Be)}else t.texImage2D(n.TEXTURE_2D,0,ct,Ye,rt,Be);b(C)&&y(be),Fe.__version=me.version,C.onUpdate&&C.onUpdate(C)}k.__version=C.version}function $(k,C,ae){if(C.image.length!==6)return;const be=Te(k,C),we=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+ae);const me=a.get(we);if(we.version!==me.__version||be===!0){t.activeTexture(n.TEXTURE0+ae);const Fe=Gt.getPrimaries(Gt.workingColorSpace),Ne=C.colorSpace===kr?null:Gt.getPrimaries(C.colorSpace),ke=C.colorSpace===kr||Fe===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const pt=C.isCompressedTexture||C.image[0].isCompressedTexture,Be=C.image[0]&&C.image[0].isDataTexture,Ye=[];for(let ie=0;ie<6;ie++)!pt&&!Be?Ye[ie]=T(C.image[ie],!0,o.maxCubemapSize):Ye[ie]=Be?C.image[ie].image:C.image[ie],Ye[ie]=nt(C,Ye[ie]);const rt=Ye[0],ct=l.convert(C.format,C.colorSpace),Xe=l.convert(C.type),ht=w(C.internalFormat,ct,Xe,C.colorSpace),st=C.isVideoTexture!==!0,Bt=me.__version===void 0||be===!0,ee=we.dataReady;let qe=L(C,rt);xe(n.TEXTURE_CUBE_MAP,C);let I;if(pt){st&&Bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ht,rt.width,rt.height);for(let ie=0;ie<6;ie++){I=Ye[ie].mipmaps;for(let Me=0;Me<I.length;Me++){const Ie=I[Me];C.format!==aa?ct!==null?st?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,Ie.width,Ie.height,ct,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,ht,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,Ie.width,Ie.height,ct,Xe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,ht,Ie.width,Ie.height,0,ct,Xe,Ie.data)}}}else{if(I=C.mipmaps,st&&Bt){I.length>0&&qe++;const ie=Pe(Ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ht,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Be){st?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ye[ie].width,Ye[ie].height,ct,Xe,Ye[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,Ye[ie].width,Ye[ie].height,0,ct,Xe,Ye[ie].data);for(let Me=0;Me<I.length;Me++){const Je=I[Me].image[ie].image;st?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Je.width,Je.height,ct,Xe,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,ht,Je.width,Je.height,0,ct,Xe,Je.data)}}else{st?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ct,Xe,Ye[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ht,ct,Xe,Ye[ie]);for(let Me=0;Me<I.length;Me++){const Ie=I[Me];st?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,ct,Xe,Ie.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,ht,ct,Xe,Ie.image[ie])}}}b(C)&&y(n.TEXTURE_CUBE_MAP),me.__version=we.version,C.onUpdate&&C.onUpdate(C)}k.__version=C.version}function ce(k,C,ae,be,we,me){const Fe=l.convert(ae.format,ae.colorSpace),Ne=l.convert(ae.type),ke=w(ae.internalFormat,Fe,Ne,ae.colorSpace),pt=a.get(C),Be=a.get(ae);if(Be.__renderTarget=C,!pt.__hasExternalTextures){const Ye=Math.max(1,C.width>>me),rt=Math.max(1,C.height>>me);we===n.TEXTURE_3D||we===n.TEXTURE_2D_ARRAY?t.texImage3D(we,me,ke,Ye,rt,C.depth,0,Fe,Ne,null):t.texImage2D(we,me,ke,Ye,rt,0,Fe,Ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),He(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,we,Be.__webglTexture,0,Oe(C)):(we===n.TEXTURE_2D||we>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,we,Be.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(k,C,ae){if(n.bindRenderbuffer(n.RENDERBUFFER,k),C.depthBuffer){const be=C.depthTexture,we=be&&be.isDepthTexture?be.type:null,me=E(C.stencilBuffer,we),Fe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=Oe(C);He(C)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,me,C.width,C.height):ae?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,me,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,k)}else{const be=C.textures;for(let we=0;we<be.length;we++){const me=be[we],Fe=l.convert(me.format,me.colorSpace),Ne=l.convert(me.type),ke=w(me.internalFormat,Fe,Ne,me.colorSpace),pt=Oe(C);ae&&He(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,ke,C.width,C.height):He(C)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,ke,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ke,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(k,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(C.depthTexture);be.__renderTarget=C,(!be.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),re(C.depthTexture,0);const we=be.__webglTexture,me=Oe(C);if(C.depthTexture.format===Cc)He(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,we,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,we,0);else if(C.depthTexture.format===Rc)He(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,we,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function De(k){const C=a.get(k),ae=k.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==k.depthTexture){const be=k.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),be){const we=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,be.removeEventListener("dispose",we)};be.addEventListener("dispose",we),C.__depthDisposeCallback=we}C.__boundDepthTexture=be}if(k.depthTexture&&!C.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");Ae(C.__webglFramebuffer,k)}else if(ae){C.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[be]),C.__webglDepthbuffer[be]===void 0)C.__webglDepthbuffer[be]=n.createRenderbuffer(),he(C.__webglDepthbuffer[be],k,!1);else{const we=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),he(C.__webglDepthbuffer,k,!1);else{const be=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,we)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(k,C,ae){const be=a.get(k);C!==void 0&&ce(be.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ae!==void 0&&De(k)}function it(k){const C=k.texture,ae=a.get(k),be=a.get(C);k.addEventListener("dispose",R);const we=k.textures,me=k.isWebGLCubeRenderTarget===!0,Fe=we.length>1;if(Fe||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=C.version,u.memory.textures++),me){ae.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[Ne]=[];for(let ke=0;ke<C.mipmaps.length;ke++)ae.__webglFramebuffer[Ne][ke]=n.createFramebuffer()}else ae.__webglFramebuffer[Ne]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)ae.__webglFramebuffer[Ne]=n.createFramebuffer()}else ae.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let Ne=0,ke=we.length;Ne<ke;Ne++){const pt=a.get(we[Ne]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),u.memory.textures++)}if(k.samples>0&&He(k)===!1){ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Ne=0;Ne<we.length;Ne++){const ke=we[Ne];ae.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ne]);const pt=l.convert(ke.format,ke.colorSpace),Be=l.convert(ke.type),Ye=w(ke.internalFormat,pt,Be,ke.colorSpace,k.isXRRenderTarget===!0),rt=Oe(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Ye,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),he(ae.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),xe(n.TEXTURE_CUBE_MAP,C);for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)ce(ae.__webglFramebuffer[Ne][ke],k,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ke);else ce(ae.__webglFramebuffer[Ne],k,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);b(C)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Ne=0,ke=we.length;Ne<ke;Ne++){const pt=we[Ne],Be=a.get(pt);t.bindTexture(n.TEXTURE_2D,Be.__webglTexture),xe(n.TEXTURE_2D,pt),ce(ae.__webglFramebuffer,k,pt,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),b(pt)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ne=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ne=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,be.__webglTexture),xe(Ne,C),C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)ce(ae.__webglFramebuffer[ke],k,C,n.COLOR_ATTACHMENT0,Ne,ke);else ce(ae.__webglFramebuffer,k,C,n.COLOR_ATTACHMENT0,Ne,0);b(C)&&y(Ne),t.unbindTexture()}k.depthBuffer&&De(k)}function at(k){const C=k.textures;for(let ae=0,be=C.length;ae<be;ae++){const we=C[ae];if(b(we)){const me=O(k),Fe=a.get(we).__webglTexture;t.bindTexture(me,Fe),y(me),t.unbindTexture()}}}const et=[],N=[];function Le(k){if(k.samples>0){if(He(k)===!1){const C=k.textures,ae=k.width,be=k.height;let we=n.COLOR_BUFFER_BIT;const me=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=a.get(k),Ne=C.length>1;if(Ne)for(let ke=0;ke<C.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ke=0;ke<C.length;ke++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(we|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(we|=n.STENCIL_BUFFER_BIT)),Ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const pt=a.get(C[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,ae,be,0,0,ae,be,we,n.NEAREST),h===!0&&(et.length=0,N.length=0,et.push(n.COLOR_ATTACHMENT0+ke),k.depthBuffer&&k.resolveDepthBuffer===!1&&(et.push(me),N.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let ke=0;ke<C.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const pt=a.get(C[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,pt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const C=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Oe(k){return Math.min(o.maxSamples,k.samples)}function He(k){const C=a.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function je(k){const C=u.render.frame;m.get(k)!==C&&(m.set(k,C),k.update())}function nt(k,C){const ae=k.colorSpace,be=k.format,we=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ae!==nl&&ae!==kr&&(Gt.getTransfer(ae)===nn?(be!==aa||we!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),C}function Pe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=it,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=He}function jU(n,e){function t(a,o=kr){let l;const u=Gt.getTransfer(o);if(a===tr)return n.UNSIGNED_BYTE;if(a===T0)return n.UNSIGNED_SHORT_4_4_4_4;if(a===A0)return n.UNSIGNED_SHORT_5_5_5_1;if(a===ZS)return n.UNSIGNED_INT_5_9_9_9_REV;if(a===qS)return n.BYTE;if(a===$S)return n.SHORT;if(a===Ac)return n.UNSIGNED_SHORT;if(a===E0)return n.INT;if(a===Uo)return n.UNSIGNED_INT;if(a===Ea)return n.FLOAT;if(a===Oc)return n.HALF_FLOAT;if(a===KS)return n.ALPHA;if(a===QS)return n.RGB;if(a===aa)return n.RGBA;if(a===JS)return n.LUMINANCE;if(a===eM)return n.LUMINANCE_ALPHA;if(a===Cc)return n.DEPTH_COMPONENT;if(a===Rc)return n.DEPTH_STENCIL;if(a===w0)return n.RED;if(a===C0)return n.RED_INTEGER;if(a===tM)return n.RG;if(a===R0)return n.RG_INTEGER;if(a===D0)return n.RGBA_INTEGER;if(a===Vf||a===Xf||a===jf||a===Yf)if(u===nn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Vf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Xf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===jf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Yf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Vf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Xf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===jf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Yf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===cg||a===ug||a===fg||a===dg)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===cg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ug)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===hg||a===pg||a===mg)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===hg||a===pg)return u===nn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===mg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===gg||a===vg||a===_g||a===xg||a===yg||a===bg||a===Sg||a===Mg||a===Eg||a===Tg||a===Ag||a===wg||a===Cg||a===Rg)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===gg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===vg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_g)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===xg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===yg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===bg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Sg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Mg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Eg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Tg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ag)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===wg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Cg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Rg)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wf||a===Dg||a===Lg)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Wf)return u===nn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Dg)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Lg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nM||a===Ug||a===Pg||a===Ng)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Wf)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Ug)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ng)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===wc?n.UNSIGNED_INT_24_8:n[a]!==void 0?n[a]:null}return{convert:t}}const YU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){const o=new oi,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==a.depthNear||t.depthFar!==a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Wr({vertexShader:YU,fragmentShader:WU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ra(new kc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $U extends ol{constructor(e,t){super();const a=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,m=null,v=null,_=null,x=null,S=null;const T=new qU,b=t.getContextAttributes();let y=null,O=null;const w=[],E=[],L=new on;let B=null;const R=new na;R.viewport=new An;const V=new na;V.viewport=new An;const U=[R,V],D=new pR;let j=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=w[K];return $===void 0&&($=new fm,w[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=w[K];return $===void 0&&($=new fm,w[K]=$),$.getGripSpace()},this.getHand=function(K){let $=w[K];return $===void 0&&($=new fm,w[K]=$),$.getHandSpace()};function Z(K){const $=E.indexOf(K.inputSource);if($===-1)return;const ce=w[$];ce!==void 0&&(ce.update(K.inputSource,K.frame,p||u),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function ue(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",re);for(let K=0;K<w.length;K++){const $=E[K];$!==null&&(E[K]=null,w[K].disconnect($))}j=null,ne=null,T.reset(),e.setRenderTarget(y),x=null,_=null,v=null,o=null,O=null,Te.stop(),a.isPresenting=!1,e.setPixelRatio(B),e.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",re),b.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,he=null,Ae=null;b.depth&&(Ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=b.stencil?Rc:Cc,he=b.stencil?wc:Uo);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(o,t),_=v.createProjectionLayer(De),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Po(_.textureWidth,_.textureHeight,{format:aa,type:tr,depthTexture:new pM(_.textureWidth,_.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Po(x.framebufferWidth,x.framebufferHeight,{format:aa,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function re(K){for(let $=0;$<K.removed.length;$++){const ce=K.removed[$],he=E.indexOf(ce);he>=0&&(E[he]=null,w[he].disconnect(ce))}for(let $=0;$<K.added.length;$++){const ce=K.added[$];let he=E.indexOf(ce);if(he===-1){for(let De=0;De<w.length;De++)if(De>=E.length){E.push(ce),he=De;break}else if(E[De]===null){E[De]=ce,he=De;break}if(he===-1)break}const Ae=w[he];Ae&&Ae.connect(ce)}}const X=new ye,J=new ye;function q(K,$,ce){X.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const he=X.distanceTo(J),Ae=$.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ve=Ae[14]/(Ae[10]-1),it=Ae[14]/(Ae[10]+1),at=(Ae[9]+1)/Ae[5],et=(Ae[9]-1)/Ae[5],N=(Ae[8]-1)/Ae[0],Le=(De[8]+1)/De[0],Oe=Ve*N,He=Ve*Le,je=he/(-N+Le),nt=je*-N;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Pe=Ve+je,k=it+je,C=Oe-nt,ae=He+(he-nt),be=at*it/k*Pe,we=et*it/k*Pe;K.projectionMatrix.makePerspective(C,ae,be,we,Pe,k),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function _e(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let $=K.near,ce=K.far;T.texture!==null&&(T.depthNear>0&&($=T.depthNear),T.depthFar>0&&(ce=T.depthFar)),D.near=V.near=R.near=$,D.far=V.far=R.far=ce,(j!==D.near||ne!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),j=D.near,ne=D.far),R.layers.mask=K.layers.mask|2,V.layers.mask=K.layers.mask|4,D.layers.mask=R.layers.mask|V.layers.mask;const he=K.parent,Ae=D.cameras;_e(D,he);for(let De=0;De<Ae.length;De++)_e(Ae[De],he);Ae.length===2?q(D,R,V):D.projectionMatrix.copy(R.projectionMatrix),F(K,D,he)};function F(K,$,ce){ce===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Og*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(K){h=K,_!==null&&(_.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(D)};let te=null;function xe(K,$){if(m=$.getViewerPose(p||u),S=$,m!==null){const ce=m.views;x!==null&&(e.setRenderTargetFramebuffer(O,x.framebuffer),e.setRenderTarget(O));let he=!1;ce.length!==D.cameras.length&&(D.cameras.length=0,he=!0);for(let Ve=0;Ve<ce.length;Ve++){const it=ce[Ve];let at=null;if(x!==null)at=x.getViewport(it);else{const N=v.getViewSubImage(_,it);at=N.viewport,Ve===0&&(e.setRenderTargetTextures(O,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(O))}let et=U[Ve];et===void 0&&(et=new na,et.layers.enable(Ve),et.viewport=new An,U[Ve]=et),et.matrix.fromArray(it.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(it.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),Ve===0&&(D.matrix.copy(et.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),he===!0&&D.cameras.push(et)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ve=v.getDepthInformation(ce[0]);Ve&&Ve.isValid&&Ve.texture&&T.init(e,Ve,o.renderState)}}for(let ce=0;ce<w.length;ce++){const he=E[ce],Ae=w[ce];he!==null&&Ae!==void 0&&Ae.update(he,$,p||u)}te&&te(K,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),S=null}const Te=new gM;Te.setAnimationLoop(xe),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}const bo=new nr,ZU=new un;function KU(n,e){function t(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function a(b,y){y.color.getRGB(b.fogColor.value,cM(n)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function o(b,y,O,w,E){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(b,y):y.isMeshToonMaterial?(l(b,y),v(b,y)):y.isMeshPhongMaterial?(l(b,y),m(b,y)):y.isMeshStandardMaterial?(l(b,y),_(b,y),y.isMeshPhysicalMaterial&&x(b,y,E)):y.isMeshMatcapMaterial?(l(b,y),S(b,y)):y.isMeshDepthMaterial?l(b,y):y.isMeshDistanceMaterial?(l(b,y),T(b,y)):y.isMeshNormalMaterial?l(b,y):y.isLineBasicMaterial?(u(b,y),y.isLineDashedMaterial&&f(b,y)):y.isPointsMaterial?h(b,y,O,w):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,t(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,t(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,t(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===mi&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,t(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===mi&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,t(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,t(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const O=e.get(y),w=O.envMap,E=O.envMapRotation;w&&(b.envMap.value=w,bo.copy(E),bo.x*=-1,bo.y*=-1,bo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bo.y*=-1,bo.z*=-1),b.envMapRotation.value.setFromMatrix4(ZU.makeRotationFromEuler(bo)),b.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,b.aoMapTransform))}function u(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,t(y.map,b.mapTransform))}function f(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function h(b,y,O,w){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*O,b.scale.value=w*.5,y.map&&(b.map.value=y.map,t(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,t(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,t(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,t(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function m(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function v(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function _(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function x(b,y,O){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===mi&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=O.texture,b.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,b.specularIntensityMapTransform))}function S(b,y){y.matcap&&(b.matcap.value=y.matcap)}function T(b,y){const O=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(O.matrixWorld),b.nearDistance.value=O.shadow.camera.near,b.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function QU(n,e,t,a){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,w){const E=w.program;a.uniformBlockBinding(O,E)}function p(O,w){let E=o[O.id];E===void 0&&(S(O),E=m(O),o[O.id]=E,O.addEventListener("dispose",b));const L=w.program;a.updateUBOMapping(O,L);const B=e.render.frame;l[O.id]!==B&&(_(O),l[O.id]=B)}function m(O){const w=v();O.__bindingPointIndex=w;const E=n.createBuffer(),L=O.__size,B=O.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function v(){for(let O=0;O<f;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const w=o[O.id],E=O.uniforms,L=O.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let B=0,R=E.length;B<R;B++){const V=Array.isArray(E[B])?E[B]:[E[B]];for(let U=0,D=V.length;U<D;U++){const j=V[U];if(x(j,B,U,L)===!0){const ne=j.__offset,Z=Array.isArray(j.value)?j.value:[j.value];let ue=0;for(let re=0;re<Z.length;re++){const X=Z[re],J=T(X);typeof X=="number"||typeof X=="boolean"?(j.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,ne+ue,j.__data)):X.isMatrix3?(j.__data[0]=X.elements[0],j.__data[1]=X.elements[1],j.__data[2]=X.elements[2],j.__data[3]=0,j.__data[4]=X.elements[3],j.__data[5]=X.elements[4],j.__data[6]=X.elements[5],j.__data[7]=0,j.__data[8]=X.elements[6],j.__data[9]=X.elements[7],j.__data[10]=X.elements[8],j.__data[11]=0):(X.toArray(j.__data,ue),ue+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,j.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(O,w,E,L){const B=O.value,R=w+"_"+E;if(L[R]===void 0)return typeof B=="number"||typeof B=="boolean"?L[R]=B:L[R]=B.clone(),!0;{const V=L[R];if(typeof B=="number"||typeof B=="boolean"){if(V!==B)return L[R]=B,!0}else if(V.equals(B)===!1)return V.copy(B),!0}return!1}function S(O){const w=O.uniforms;let E=0;const L=16;for(let R=0,V=w.length;R<V;R++){const U=Array.isArray(w[R])?w[R]:[w[R]];for(let D=0,j=U.length;D<j;D++){const ne=U[D],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let ue=0,re=Z.length;ue<re;ue++){const X=Z[ue],J=T(X),q=E%L,_e=q%J.boundary,F=q+_e;E+=_e,F!==0&&L-F<J.storage&&(E+=L-F),ne.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=E,E+=J.storage}}}const B=E%L;return B>0&&(E+=L-B),O.__size=E,O.__cache={},this}function T(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),w}function b(O){const w=O.target;w.removeEventListener("dispose",b);const E=u.indexOf(w.__bindingPointIndex);u.splice(E,1),n.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function y(){for(const O in o)n.deleteBuffer(o[O]);u=[],o={},l={}}return{bind:h,update:p,dispose:y}}let JU=class{constructor(e={}){const{canvas:t=DC(),context:a=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const S=new Uint32Array(4),T=new Int32Array(4);let b=null,y=null;const O=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Hi;let B=0,R=0,V=null,U=-1,D=null;const j=new An,ne=new An;let Z=null;const ue=new Vt(0);let re=0,X=t.width,J=t.height,q=1,_e=null,F=null;const te=new An(0,0,X,J),xe=new An(0,0,X,J);let Te=!1;const K=new dM;let $=!1,ce=!1;const he=new un,Ae=new un,De=new ye,Ve=new An,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function et(){return V===null?q:1}let N=a;function Le(z,oe){return t.getContext(z,oe)}try{const z={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${M0}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const oe="webgl2";if(N=Le(oe,z),N===null)throw Le(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let Oe,He,je,nt,Pe,k,C,ae,be,we,me,Fe,Ne,ke,pt,Be,Ye,rt,ct,Xe,ht,st,Bt,ee;function qe(){Oe=new cL(N),Oe.init(),st=new jU(N,Oe),He=new nL(N,Oe,e,st),je=new VU(N,Oe),He.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),nt=new dL(N),Pe=new DU,k=new XU(N,Oe,je,Pe,He,st,nt),C=new aL(E),ae=new lL(E),be=new _R(N),Bt=new eL(N,be),we=new uL(N,be,nt,Bt),me=new pL(N,we,be,nt),ct=new hL(N,He,k),Be=new iL(Pe),Fe=new RU(E,C,ae,Oe,He,Bt,Be),Ne=new KU(E,Pe),ke=new UU,pt=new FU(Oe),rt=new JD(E,C,ae,je,me,x,h),Ye=new HU(E,me,He),ee=new QU(N,nt,He,je),Xe=new tL(N,Oe,nt),ht=new fL(N,Oe,nt),nt.programs=Fe.programs,E.capabilities=He,E.extensions=Oe,E.properties=Pe,E.renderLists=ke,E.shadowMap=Ye,E.state=je,E.info=nt}qe();const I=new $U(E,N);this.xr=I,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const z=Oe.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=Oe.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(z){z!==void 0&&(q=z,this.setSize(X,J,!1))},this.getSize=function(z){return z.set(X,J)},this.setSize=function(z,oe,ge=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=z,J=oe,t.width=Math.floor(z*q),t.height=Math.floor(oe*q),ge===!0&&(t.style.width=z+"px",t.style.height=oe+"px"),this.setViewport(0,0,z,oe)},this.getDrawingBufferSize=function(z){return z.set(X*q,J*q).floor()},this.setDrawingBufferSize=function(z,oe,ge){X=z,J=oe,q=ge,t.width=Math.floor(z*ge),t.height=Math.floor(oe*ge),this.setViewport(0,0,z,oe)},this.getCurrentViewport=function(z){return z.copy(j)},this.getViewport=function(z){return z.copy(te)},this.setViewport=function(z,oe,ge,W){z.isVector4?te.set(z.x,z.y,z.z,z.w):te.set(z,oe,ge,W),je.viewport(j.copy(te).multiplyScalar(q).round())},this.getScissor=function(z){return z.copy(xe)},this.setScissor=function(z,oe,ge,W){z.isVector4?xe.set(z.x,z.y,z.z,z.w):xe.set(z,oe,ge,W),je.scissor(ne.copy(xe).multiplyScalar(q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(z){je.setScissorTest(Te=z)},this.setOpaqueSort=function(z){_e=z},this.setTransparentSort=function(z){F=z},this.getClearColor=function(z){return z.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(z=!0,oe=!0,ge=!0){let W=0;if(z){let G=!1;if(V!==null){const le=V.texture.format;G=le===D0||le===R0||le===C0}if(G){const le=V.texture.type,Ee=le===tr||le===Uo||le===Ac||le===wc||le===T0||le===A0,ze=rt.getClearColor(),We=rt.getClearAlpha(),lt=ze.r,tt=ze.g,Ke=ze.b;Ee?(S[0]=lt,S[1]=tt,S[2]=Ke,S[3]=We,N.clearBufferuiv(N.COLOR,0,S)):(T[0]=lt,T[1]=tt,T[2]=Ke,T[3]=We,N.clearBufferiv(N.COLOR,0,T))}else W|=N.COLOR_BUFFER_BIT}oe&&(W|=N.DEPTH_BUFFER_BIT),ge&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),rt.dispose(),ke.dispose(),pt.dispose(),Pe.dispose(),C.dispose(),ae.dispose(),me.dispose(),Bt.dispose(),ee.dispose(),Fe.dispose(),I.dispose(),I.removeEventListener("sessionstart",jt),I.removeEventListener("sessionend",Nt),Un.stop()};function ie(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const z=nt.autoReset,oe=Ye.enabled,ge=Ye.autoUpdate,W=Ye.needsUpdate,G=Ye.type;qe(),nt.autoReset=z,Ye.enabled=oe,Ye.autoUpdate=ge,Ye.needsUpdate=W,Ye.type=G}function Ie(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Je(z){const oe=z.target;oe.removeEventListener("dispose",Je),Ut(oe)}function Ut(z){Pt(z),Pe.remove(z)}function Pt(z){const oe=Pe.get(z).programs;oe!==void 0&&(oe.forEach(function(ge){Fe.releaseProgram(ge)}),z.isShaderMaterial&&Fe.releaseShaderCache(z))}this.renderBufferDirect=function(z,oe,ge,W,G,le){oe===null&&(oe=it);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,ze=wa(z,oe,ge,W,G);je.setMaterial(W,Ee);let We=ge.index,lt=1;if(W.wireframe===!0){if(We=we.getWireframeAttribute(ge),We===void 0)return;lt=2}const tt=ge.drawRange,Ke=ge.attributes.position;let mt=tt.start*lt,Mt=(tt.start+tt.count)*lt;le!==null&&(mt=Math.max(mt,le.start*lt),Mt=Math.min(Mt,(le.start+le.count)*lt)),We!==null?(mt=Math.max(mt,0),Mt=Math.min(Mt,We.count)):Ke!=null&&(mt=Math.max(mt,0),Mt=Math.min(Mt,Ke.count));const bt=Mt-mt;if(bt<0||bt===1/0)return;Bt.setup(G,W,ze,ge,We);let _t,$e=Xe;if(We!==null&&(_t=be.get(We),$e=ht,$e.setIndex(_t)),G.isMesh)W.wireframe===!0?(je.setLineWidth(W.wireframeLinewidth*et()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(G.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),je.setLineWidth(Ze*et()),G.isLineSegments?$e.setMode(N.LINES):G.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else G.isPoints?$e.setMode(N.POINTS):G.isSprite&&$e.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)qf("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))$e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ze=G._multiDrawStarts,Dt=G._multiDrawCounts,St=G._multiDrawCount,sn=We?be.get(We).bytesPerElement:1,da=Pe.get(W).currentProgram.getUniforms();for(let qt=0;qt<St;qt++)da.setValue(N,"_gl_DrawID",qt),$e.render(Ze[qt]/sn,Dt[qt])}else if(G.isInstancedMesh)$e.renderInstances(mt,bt,G.count);else if(ge.isInstancedBufferGeometry){const Ze=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Dt=Math.min(ge.instanceCount,Ze);$e.renderInstances(mt,bt,Dt)}else $e.render(mt,bt)};function gt(z,oe,ge){z.transparent===!0&&z.side===Qa&&z.forceSinglePass===!1?(z.side=mi,z.needsUpdate=!0,ua(z,oe,ge),z.side=Yr,z.needsUpdate=!0,ua(z,oe,ge),z.side=Qa):ua(z,oe,ge)}this.compile=function(z,oe,ge=null){ge===null&&(ge=z),y=pt.get(ge),y.init(oe),w.push(y),ge.traverseVisible(function(G){G.isLight&&G.layers.test(oe.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),z!==ge&&z.traverseVisible(function(G){G.isLight&&G.layers.test(oe.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const W=new Set;return z.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let Ee=0;Ee<le.length;Ee++){const ze=le[Ee];gt(ze,ge,G),W.add(ze)}else gt(le,ge,G),W.add(le)}),y=w.pop(),W},this.compileAsync=function(z,oe,ge=null){const W=this.compile(z,oe,ge);return new Promise(G=>{function le(){if(W.forEach(function(Ee){Pe.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){G(z);return}setTimeout(le,10)}Oe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let fn=null;function Wt(z){fn&&fn(z)}function jt(){Un.stop()}function Nt(){Un.start()}const Un=new gM;Un.setAnimationLoop(Wt),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(z){fn=z,I.setAnimationLoop(z),z===null?Un.stop():Un.start()},I.addEventListener("sessionstart",jt),I.addEventListener("sessionend",Nt),this.render=function(z,oe){if(oe!==void 0&&oe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(oe),oe=I.getCamera()),z.isScene===!0&&z.onBeforeRender(E,z,oe,V),y=pt.get(z,w.length),y.init(oe),w.push(y),Ae.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),K.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,$=Be.init(this.clippingPlanes,ce),b=ke.get(z,O.length),b.init(),O.push(b),I.enabled===!0&&I.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&Vn(le,oe,-1/0,E.sortObjects)}Vn(z,oe,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(_e,F),at=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,at&&rt.addToRenderList(b,z),this.info.render.frame++,$===!0&&Be.beginShadows();const ge=y.state.shadowsArray;Ye.render(ge,z,oe),$===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=b.opaque,G=b.transmissive;if(y.setupLights(),oe.isArrayCamera){const le=oe.cameras;if(G.length>0)for(let Ee=0,ze=le.length;Ee<ze;Ee++){const We=le[Ee];Xi(W,G,z,We)}at&&rt.render(z);for(let Ee=0,ze=le.length;Ee<ze;Ee++){const We=le[Ee];Ri(b,z,We,We.viewport)}}else G.length>0&&Xi(W,G,z,oe),at&&rt.render(z),Ri(b,z,oe);V!==null&&R===0&&(k.updateMultisampleRenderTarget(V),k.updateRenderTargetMipmap(V)),z.isScene===!0&&z.onAfterRender(E,z,oe),Bt.resetDefaultState(),U=-1,D=null,w.pop(),w.length>0?(y=w[w.length-1],$===!0&&Be.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?b=O[O.length-1]:b=null};function Vn(z,oe,ge,W){if(z.visible===!1)return;if(z.layers.test(oe.layers)){if(z.isGroup)ge=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(oe);else if(z.isLight)y.pushLight(z),z.castShadow&&y.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||K.intersectsSprite(z)){W&&Ve.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Ae);const Ee=me.update(z),ze=z.material;ze.visible&&b.push(z,Ee,ze,ge,Ve.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||K.intersectsObject(z))){const Ee=me.update(z),ze=z.material;if(W&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),Ve.copy(z.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ve.copy(Ee.boundingSphere.center)),Ve.applyMatrix4(z.matrixWorld).applyMatrix4(Ae)),Array.isArray(ze)){const We=Ee.groups;for(let lt=0,tt=We.length;lt<tt;lt++){const Ke=We[lt],mt=ze[Ke.materialIndex];mt&&mt.visible&&b.push(z,Ee,mt,ge,Ve.z,Ke)}}else ze.visible&&b.push(z,Ee,ze,ge,Ve.z,null)}}const le=z.children;for(let Ee=0,ze=le.length;Ee<ze;Ee++)Vn(le[Ee],oe,ge,W)}function Ri(z,oe,ge,W){const G=z.opaque,le=z.transmissive,Ee=z.transparent;y.setupLightsView(ge),$===!0&&Be.setGlobalState(E.clippingPlanes,ge),W&&je.viewport(j.copy(W)),G.length>0&&si(G,oe,ge),le.length>0&&si(le,oe,ge),Ee.length>0&&si(Ee,oe,ge),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Xi(z,oe,ge,W){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[W.id]===void 0&&(y.state.transmissionRenderTarget[W.id]=new Po(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Oc:tr,minFilter:Co,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const le=y.state.transmissionRenderTarget[W.id],Ee=W.viewport||j;le.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);const ze=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(ue),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),at&&rt.render(ge);const We=E.toneMapping;E.toneMapping=Xr;const lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),$===!0&&Be.setGlobalState(E.clippingPlanes,W),si(z,ge,W),k.updateMultisampleRenderTarget(le),k.updateRenderTargetMipmap(le),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ke=0,mt=oe.length;Ke<mt;Ke++){const Mt=oe[Ke],bt=Mt.object,_t=Mt.geometry,$e=Mt.material,Ze=Mt.group;if($e.side===Qa&&bt.layers.test(W.layers)){const Dt=$e.side;$e.side=mi,$e.needsUpdate=!0,ca(bt,ge,W,_t,$e,Ze),$e.side=Dt,$e.needsUpdate=!0,tt=!0}}tt===!0&&(k.updateMultisampleRenderTarget(le),k.updateRenderTargetMipmap(le))}E.setRenderTarget(ze),E.setClearColor(ue,re),lt!==void 0&&(W.viewport=lt),E.toneMapping=We}function si(z,oe,ge){const W=oe.isScene===!0?oe.overrideMaterial:null;for(let G=0,le=z.length;G<le;G++){const Ee=z[G],ze=Ee.object,We=Ee.geometry,lt=Ee.group;let tt=Ee.material;tt.allowOverride===!0&&W!==null&&(tt=W),ze.layers.test(ge.layers)&&ca(ze,oe,ge,We,tt,lt)}}function ca(z,oe,ge,W,G,le){z.onBeforeRender(E,oe,ge,W,G,le),z.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),G.onBeforeRender(E,oe,ge,W,z,le),G.transparent===!0&&G.side===Qa&&G.forceSinglePass===!1?(G.side=mi,G.needsUpdate=!0,E.renderBufferDirect(ge,oe,W,G,z,le),G.side=Yr,G.needsUpdate=!0,E.renderBufferDirect(ge,oe,W,G,z,le),G.side=Qa):E.renderBufferDirect(ge,oe,W,G,z,le),z.onAfterRender(E,oe,ge,W,G,le)}function ua(z,oe,ge){oe.isScene!==!0&&(oe=it);const W=Pe.get(z),G=y.state.lights,le=y.state.shadowsArray,Ee=G.state.version,ze=Fe.getParameters(z,G.state,le,oe,ge),We=Fe.getProgramCacheKey(ze);let lt=W.programs;W.environment=z.isMeshStandardMaterial?oe.environment:null,W.fog=oe.fog,W.envMap=(z.isMeshStandardMaterial?ae:C).get(z.envMap||W.environment),W.envMapRotation=W.environment!==null&&z.envMap===null?oe.environmentRotation:z.envMapRotation,lt===void 0&&(z.addEventListener("dispose",Je),lt=new Map,W.programs=lt);let tt=lt.get(We);if(tt!==void 0){if(W.currentProgram===tt&&W.lightsStateVersion===Ee)return Yi(z,ze),tt}else ze.uniforms=Fe.getUniforms(z),z.onBeforeCompile(ze,E),tt=Fe.acquireProgram(ze,We),lt.set(We,tt),W.uniforms=ze.uniforms;const Ke=W.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),Yi(z,ze),W.needsLights=xn(z),W.lightsStateVersion=Ee,W.needsLights&&(Ke.ambientLightColor.value=G.state.ambient,Ke.lightProbe.value=G.state.probe,Ke.directionalLights.value=G.state.directional,Ke.directionalLightShadows.value=G.state.directionalShadow,Ke.spotLights.value=G.state.spot,Ke.spotLightShadows.value=G.state.spotShadow,Ke.rectAreaLights.value=G.state.rectArea,Ke.ltc_1.value=G.state.rectAreaLTC1,Ke.ltc_2.value=G.state.rectAreaLTC2,Ke.pointLights.value=G.state.point,Ke.pointLightShadows.value=G.state.pointShadow,Ke.hemisphereLights.value=G.state.hemi,Ke.directionalShadowMap.value=G.state.directionalShadowMap,Ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ke.spotShadowMap.value=G.state.spotShadowMap,Ke.spotLightMatrix.value=G.state.spotLightMatrix,Ke.spotLightMap.value=G.state.spotLightMap,Ke.pointShadowMap.value=G.state.pointShadowMap,Ke.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=tt,W.uniformsList=null,tt}function ji(z){if(z.uniformsList===null){const oe=z.currentProgram.getUniforms();z.uniformsList=$f.seqWithValue(oe.seq,z.uniforms)}return z.uniformsList}function Yi(z,oe){const ge=Pe.get(z);ge.outputColorSpace=oe.outputColorSpace,ge.batching=oe.batching,ge.batchingColor=oe.batchingColor,ge.instancing=oe.instancing,ge.instancingColor=oe.instancingColor,ge.instancingMorph=oe.instancingMorph,ge.skinning=oe.skinning,ge.morphTargets=oe.morphTargets,ge.morphNormals=oe.morphNormals,ge.morphColors=oe.morphColors,ge.morphTargetsCount=oe.morphTargetsCount,ge.numClippingPlanes=oe.numClippingPlanes,ge.numIntersection=oe.numClipIntersection,ge.vertexAlphas=oe.vertexAlphas,ge.vertexTangents=oe.vertexTangents,ge.toneMapping=oe.toneMapping}function wa(z,oe,ge,W,G){oe.isScene!==!0&&(oe=it),k.resetTextureUnits();const le=oe.fog,Ee=W.isMeshStandardMaterial?oe.environment:null,ze=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:nl,We=(W.isMeshStandardMaterial?ae:C).get(W.envMap||Ee),lt=W.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,tt=!!ge.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ke=!!ge.morphAttributes.position,mt=!!ge.morphAttributes.normal,Mt=!!ge.morphAttributes.color;let bt=Xr;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(bt=E.toneMapping);const _t=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,$e=_t!==void 0?_t.length:0,Ze=Pe.get(W),Dt=y.state.lights;if($===!0&&(ce===!0||z!==D)){const wn=z===D&&W.id===U;Be.setState(W,z,wn)}let St=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Dt.state.version||Ze.outputColorSpace!==ze||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isBatchedMesh&&Ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ze.instancingMorph===!1&&G.morphTexture!==null||Ze.envMap!==We||W.fog===!0&&Ze.fog!==le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Be.numPlanes||Ze.numIntersection!==Be.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==tt||Ze.morphTargets!==Ke||Ze.morphNormals!==mt||Ze.morphColors!==Mt||Ze.toneMapping!==bt||Ze.morphTargetsCount!==$e)&&(St=!0):(St=!0,Ze.__version=W.version);let sn=Ze.currentProgram;St===!0&&(sn=ua(W,oe,G));let da=!1,qt=!1,Di=!1;const $t=sn.getUniforms(),Bn=Ze.uniforms;if(je.useProgram(sn.program)&&(da=!0,qt=!0,Di=!0),W.id!==U&&(U=W.id,qt=!0),da||D!==z){je.buffers.depth.getReversed()?(he.copy(z.projectionMatrix),UC(he),PC(he),$t.setValue(N,"projectionMatrix",he)):$t.setValue(N,"projectionMatrix",z.projectionMatrix),$t.setValue(N,"viewMatrix",z.matrixWorldInverse);const Mn=$t.map.cameraPosition;Mn!==void 0&&Mn.setValue(N,De.setFromMatrixPosition(z.matrixWorld)),He.logarithmicDepthBuffer&&$t.setValue(N,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&$t.setValue(N,"isOrthographic",z.isOrthographicCamera===!0),D!==z&&(D=z,qt=!0,Di=!0)}if(G.isSkinnedMesh){$t.setOptional(N,G,"bindMatrix"),$t.setOptional(N,G,"bindMatrixInverse");const wn=G.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),$t.setValue(N,"boneTexture",wn.boneTexture,k))}G.isBatchedMesh&&($t.setOptional(N,G,"batchingTexture"),$t.setValue(N,"batchingTexture",G._matricesTexture,k),$t.setOptional(N,G,"batchingIdTexture"),$t.setValue(N,"batchingIdTexture",G._indirectTexture,k),$t.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&$t.setValue(N,"batchingColorTexture",G._colorsTexture,k));const Sn=ge.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ct.update(G,ge,sn),(qt||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,$t.setValue(N,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bn.envMap.value=We,Bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&oe.environment!==null&&(Bn.envMapIntensity.value=oe.environmentIntensity),qt&&($t.setValue(N,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&fa(Bn,Di),le&&W.fog===!0&&Ne.refreshFogUniforms(Bn,le),Ne.refreshMaterialUniforms(Bn,W,q,J,y.state.transmissionRenderTarget[z.id]),$f.upload(N,ji(Ze),Bn,k)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($f.upload(N,ji(Ze),Bn,k),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&$t.setValue(N,"center",G.center),$t.setValue(N,"modelViewMatrix",G.modelViewMatrix),$t.setValue(N,"normalMatrix",G.normalMatrix),$t.setValue(N,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const wn=W.uniformsGroups;for(let Mn=0,li=wn.length;Mn<li;Mn++){const $n=wn[Mn];ee.update($n,sn),ee.bind($n,sn)}}return sn}function fa(z,oe){z.ambientLightColor.needsUpdate=oe,z.lightProbe.needsUpdate=oe,z.directionalLights.needsUpdate=oe,z.directionalLightShadows.needsUpdate=oe,z.pointLights.needsUpdate=oe,z.pointLightShadows.needsUpdate=oe,z.spotLights.needsUpdate=oe,z.spotLightShadows.needsUpdate=oe,z.rectAreaLights.needsUpdate=oe,z.hemisphereLights.needsUpdate=oe}function xn(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(z,oe,ge){const W=Pe.get(z);W.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Pe.get(z.texture).__webglTexture=oe,Pe.get(z.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:ge,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,oe){const ge=Pe.get(z);ge.__webglFramebuffer=oe,ge.__useDefaultFramebuffer=oe===void 0};const Bo=N.createFramebuffer();this.setRenderTarget=function(z,oe=0,ge=0){V=z,B=oe,R=ge;let W=!0,G=null,le=!1,Ee=!1;if(z){const We=Pe.get(z);if(We.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(N.FRAMEBUFFER,null),W=!1;else if(We.__webglFramebuffer===void 0)k.setupRenderTarget(z);else if(We.__hasExternalTextures)k.rebindTextures(z,Pe.get(z.texture).__webglTexture,Pe.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const Ke=z.depthTexture;if(We.__boundDepthTexture!==Ke){if(Ke!==null&&Pe.has(Ke)&&(z.width!==Ke.image.width||z.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(z)}}const lt=z.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ee=!0);const tt=Pe.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(tt[oe])?G=tt[oe][ge]:G=tt[oe],le=!0):z.samples>0&&k.useMultisampledRTT(z)===!1?G=Pe.get(z).__webglMultisampledFramebuffer:Array.isArray(tt)?G=tt[ge]:G=tt,j.copy(z.viewport),ne.copy(z.scissor),Z=z.scissorTest}else j.copy(te).multiplyScalar(q).floor(),ne.copy(xe).multiplyScalar(q).floor(),Z=Te;if(ge!==0&&(G=Bo),je.bindFramebuffer(N.FRAMEBUFFER,G)&&W&&je.drawBuffers(z,G),je.viewport(j),je.scissor(ne),je.setScissorTest(Z),le){const We=Pe.get(z.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+oe,We.__webglTexture,ge)}else if(Ee){const We=Pe.get(z.texture),lt=oe;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,ge,lt)}else if(z!==null&&ge!==0){const We=Pe.get(z.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,We.__webglTexture,ge)}U=-1},this.readRenderTargetPixels=function(z,oe,ge,W,G,le,Ee){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Pe.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ee!==void 0&&(ze=ze[Ee]),ze){je.bindFramebuffer(N.FRAMEBUFFER,ze);try{const We=z.texture,lt=We.format,tt=We.type;if(!He.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}oe>=0&&oe<=z.width-W&&ge>=0&&ge<=z.height-G&&N.readPixels(oe,ge,W,G,st.convert(lt),st.convert(tt),le)}finally{const We=V!==null?Pe.get(V).__webglFramebuffer:null;je.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(z,oe,ge,W,G,le,Ee){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Pe.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Ee!==void 0&&(ze=ze[Ee]),ze)if(oe>=0&&oe<=z.width-W&&ge>=0&&ge<=z.height-G){je.bindFramebuffer(N.FRAMEBUFFER,ze);const We=z.texture,lt=We.format,tt=We.type;if(!He.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),N.readPixels(oe,ge,W,G,st.convert(lt),st.convert(tt),0);const mt=V!==null?Pe.get(V).__webglFramebuffer:null;je.bindFramebuffer(N.FRAMEBUFFER,mt);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await LC(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(Ke),N.deleteSync(Mt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,oe=null,ge=0){const W=Math.pow(2,-ge),G=Math.floor(z.image.width*W),le=Math.floor(z.image.height*W),Ee=oe!==null?oe.x:0,ze=oe!==null?oe.y:0;k.setTexture2D(z,0),N.copyTexSubImage2D(N.TEXTURE_2D,ge,0,0,Ee,ze,G,le),je.unbindTexture()};const Fo=N.createFramebuffer(),Wi=N.createFramebuffer();this.copyTextureToTexture=function(z,oe,ge=null,W=null,G=0,le=null){le===null&&(G!==0?(qf("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=G,G=0):le=0);let Ee,ze,We,lt,tt,Ke,mt,Mt,bt;const _t=z.isCompressedTexture?z.mipmaps[le]:z.image;if(ge!==null)Ee=ge.max.x-ge.min.x,ze=ge.max.y-ge.min.y,We=ge.isBox3?ge.max.z-ge.min.z:1,lt=ge.min.x,tt=ge.min.y,Ke=ge.isBox3?ge.min.z:0;else{const Sn=Math.pow(2,-G);Ee=Math.floor(_t.width*Sn),ze=Math.floor(_t.height*Sn),z.isDataArrayTexture?We=_t.depth:z.isData3DTexture?We=Math.floor(_t.depth*Sn):We=1,lt=0,tt=0,Ke=0}W!==null?(mt=W.x,Mt=W.y,bt=W.z):(mt=0,Mt=0,bt=0);const $e=st.convert(oe.format),Ze=st.convert(oe.type);let Dt;oe.isData3DTexture?(k.setTexture3D(oe,0),Dt=N.TEXTURE_3D):oe.isDataArrayTexture||oe.isCompressedArrayTexture?(k.setTexture2DArray(oe,0),Dt=N.TEXTURE_2D_ARRAY):(k.setTexture2D(oe,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,oe.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,oe.unpackAlignment);const St=N.getParameter(N.UNPACK_ROW_LENGTH),sn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),da=N.getParameter(N.UNPACK_SKIP_PIXELS),qt=N.getParameter(N.UNPACK_SKIP_ROWS),Di=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);const $t=z.isDataArrayTexture||z.isData3DTexture,Bn=oe.isDataArrayTexture||oe.isData3DTexture;if(z.isDepthTexture){const Sn=Pe.get(z),wn=Pe.get(oe),Mn=Pe.get(Sn.__renderTarget),li=Pe.get(wn.__renderTarget);je.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),je.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let $n=0;$n<We;$n++)$t&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(z).__webglTexture,G,Ke+$n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(oe).__webglTexture,le,bt+$n)),N.blitFramebuffer(lt,tt,Ee,ze,mt,Mt,Ee,ze,N.DEPTH_BUFFER_BIT,N.NEAREST);je.bindFramebuffer(N.READ_FRAMEBUFFER,null),je.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||z.isRenderTargetTexture||Pe.has(z)){const Sn=Pe.get(z),wn=Pe.get(oe);je.bindFramebuffer(N.READ_FRAMEBUFFER,Fo),je.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi);for(let Mn=0;Mn<We;Mn++)$t?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Sn.__webglTexture,G,Ke+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Sn.__webglTexture,G),Bn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wn.__webglTexture,le,bt+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wn.__webglTexture,le),G!==0?N.blitFramebuffer(lt,tt,Ee,ze,mt,Mt,Ee,ze,N.COLOR_BUFFER_BIT,N.NEAREST):Bn?N.copyTexSubImage3D(Dt,le,mt,Mt,bt+Mn,lt,tt,Ee,ze):N.copyTexSubImage2D(Dt,le,mt,Mt,lt,tt,Ee,ze);je.bindFramebuffer(N.READ_FRAMEBUFFER,null),je.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bn?z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Dt,le,mt,Mt,bt,Ee,ze,We,$e,Ze,_t.data):oe.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,le,mt,Mt,bt,Ee,ze,We,$e,_t.data):N.texSubImage3D(Dt,le,mt,Mt,bt,Ee,ze,We,$e,Ze,_t):z.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,le,mt,Mt,Ee,ze,$e,Ze,_t.data):z.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,le,mt,Mt,_t.width,_t.height,$e,_t.data):N.texSubImage2D(N.TEXTURE_2D,le,mt,Mt,Ee,ze,$e,Ze,_t);N.pixelStorei(N.UNPACK_ROW_LENGTH,St),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,sn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,da),N.pixelStorei(N.UNPACK_SKIP_ROWS,qt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Di),le===0&&oe.generateMipmaps&&N.generateMipmap(Dt),je.unbindTexture()},this.copyTextureToTexture3D=function(z,oe,ge=null,W=null,G=0){return qf('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,oe,ge,W,G)},this.initRenderTarget=function(z){Pe.get(z).__webglFramebuffer===void 0&&k.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?k.setTextureCube(z,0):z.isData3DTexture?k.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?k.setTexture2DArray(z,0):k.setTexture2D(z,0),je.unbindTexture()},this.resetState=function(){B=0,R=0,V=null,je.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ja}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}};const eP=H.memo(H.forwardRef(({gridWidth:n,gridHeight:e,pixelSize:t,gridGap:a,pixelData:o,showGrid:l,onMouseDown:u,onMouseMove:f,onMouseUp:h,onMouseLeave:p,spaceKeyPressed:m=!1},v)=>{const _=H.useRef(null),x=H.useRef(null),S=H.useRef(null),T=H.useRef(null),b=H.useRef(null);H.useRef(new mR);const y=H.useRef(u),O=H.useRef(f),w=H.useRef(h),E=H.useRef(p),L=H.useRef(m),B=H.useRef(null),R=H.useRef(!1),V=H.useRef(null),U=H.useRef(new Set);return H.useEffect(()=>{y.current=u,O.current=f,w.current=h,E.current=p,L.current=m}),H.useEffect(()=>{const D=_.current;if(D)for(;D.firstChild;)D.removeChild(D.firstChild);const j=t+a,ne=new aR;S.current=ne;const Z=new mM(0,n*j,e*j,0,-100,100);T.current=Z;const ue=new JU({alpha:!0,antialias:!0});ue.setClearColor(16777215,1),ue.setSize(n*j,e*j);const re=ue.domElement;re.style.touchAction="none",_.current.style.touchAction="none",_.current.appendChild(re),x.current=ue;const X=new kc(t,t),J=new N0({vertexColors:void 0}),q=n*e,_e=new sR(X,J,q);_e.instanceMatrix.setUsage(tb);const F=new Float32Array(q*3),te=new zg(F,3,!1);te.setUsage(tb),_e.instanceColor=te,_e.geometry.setAttribute("instanceColor",te),ne.add(_e),b.current=_e;const xe=new gR(n*j,n,13421772,13421772);xe.rotation.x=Math.PI/2,xe.position.set(n*j/2,e*j/2,-.01),xe.visible=l,ne.add(xe),B.current=xe;const Te=(De,Ve)=>{const it=re.getBoundingClientRect(),at=De.clientX-it.left,et=De.clientY-it.top,N=x.current.domElement.width,Le=x.current.domElement.height,Oe=it.width/N,He=it.height/Le,je=at/Oe,nt=et/He,Pe=t+a,k=Math.floor(je/Pe),C=Math.floor(nt/Pe);k<0||k>=n||C<0||C>=e||Ve({gridX:k,gridY:C,buttons:De.buttons})},K=De=>{if(!L.current)if(De.preventDefault(),De.pointerType==="touch"){if(V.current&&(clearTimeout(V.current),V.current=null),U.current.add(De.pointerId),U.current.size>1||R.current){R.current=!0;return}V.current=setTimeout(()=>{!R.current&&y.current&&Te(De,y.current),V.current=null},20)}else y.current&&Te(De,y.current)},$=De=>{L.current||(De.preventDefault(),!(De.pointerType==="touch"&&(U.current.size>1&&(R.current=!0),R.current))&&O.current&&Te(De,O.current))},ce=De=>{L.current||(De.preventDefault(),!(De.pointerType==="touch"&&(U.current.delete(De.pointerId),U.current.size===0&&(R.current=!1),R.current))&&w.current&&Te(De,w.current))},he=De=>{L.current||(De.preventDefault(),E.current&&Te(De,E.current))},Ae=De=>{De.pointerType==="touch"&&(U.current.delete(De.pointerId),U.current.size===0&&(R.current=!1)),!L.current&&(De.preventDefault(),E.current&&Te(De,E.current))};return re.addEventListener("pointerdown",K),re.addEventListener("pointermove",$),re.addEventListener("pointerup",ce),re.addEventListener("pointerleave",he),re.addEventListener("pointercancel",Ae),ue.render(ne,Z),()=>{re.removeEventListener("pointerdown",K),re.removeEventListener("pointermove",$),re.removeEventListener("pointerup",ce),re.removeEventListener("pointerleave",he),re.removeEventListener("pointercancel",Ae),V.current&&(clearTimeout(V.current),V.current=null),ne.remove(_e),X.dispose(),J.dispose(),ue.dispose(),_.current&&_.current.contains(re)&&_.current.removeChild(re)}},[n,e,t,a]),H.useEffect(()=>{const D=B.current,j=x.current,ne=S.current,Z=T.current,ue=b.current;D&&j&&ne&&Z&&(D.visible=l,ue&&(ue.instanceMatrix.needsUpdate=!0,ue.instanceColor&&(ue.instanceColor.needsUpdate=!0)),j.render(ne,Z))},[l]),H.useEffect(()=>{const D=b.current,j=x.current,ne=S.current,Z=T.current;if(!D||!j||!ne||!Z)return;const ue=t+a,re=new un;let X=0;o.forEach((J,q)=>{J.forEach((_e,F)=>{_e&&(re.makeTranslation(F*ue+t/2,(e-q-1)*ue+t/2,0),D.setMatrixAt(X,re),D.setColorAt(X,new Vt(_e)),X++)})}),D.count=X,D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),j.render(ne,Z)},[o,n,e,t,a]),M.jsx("div",{ref:_,style:{width:n*(t+a),height:e*(t+a)}})})),bM=(n,e,t,a)=>{if(t<0||t>=n.length||e<0||e>=n[0].length)return n;const o=n.map(l=>[...l]);return o[t][e]!==a?(o[t][e]=a,o):n},Jb=(n,e,t)=>t<0||t>=n.length||e<0||e>=n[0].length?null:n[t][e],tP=(n,e,t,a)=>{console.log(`[applyFill] Start: (${e},${t}), FillColor: ${a}`);const o=n.length;if(o===0)return n;const l=n[0].length;if(l===0)return n;if(t<0||t>=o||e<0||e>=l)return console.log("[applyFill] Start point out of bounds"),n;const u=n[t][e];if(console.log(`[applyFill] Target Color: ${u}`),u===a)return console.log("[applyFill] Target color matches fill color, no change."),n;const f=n.map(v=>[...v]),h=[{x:e,y:t}];let p=!1,m=0;for(;h.length>0;){if(m++,m>l*o*4){console.error("[applyFill] Exceeded max iterations, breaking loop.");break}const{x:v,y:_}=h.pop();_<0||_>=o||v<0||v>=l||f[_][v]!==u||(f[_][v]=a,p||(console.log("[applyFill] First pixel change detected."),p=!0),h.push({x:v+1,y:_}),h.push({x:v-1,y:_}),h.push({x:v,y:_+1}),h.push({x:v,y:_-1}))}return console.log(`[applyFill] Finished. Pixels changed: ${p}, Iterations: ${m}`),p?f:n},nP=(n,e,t,a,o,l)=>{if(n.length===0||n[0].length===0)return n;let h=n;const p=Math.abs(a-e),m=Math.abs(o-t),v=e<a?1:-1,_=t<o?1:-1;let x=p-m,S=e,T=t;for(;;){const b=bM(h,S,T,l);if(b!==h&&(h=b),S===a&&T===o)break;const y=2*x;if(y>-m&&(x-=m,S+=v),y<p&&(x+=p,T+=_),Math.abs(S-e)>p*2||Math.abs(T-t)>m*2){console.error("Breaking line algorithm loop unexpectedly");break}}return h},iP=Se.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
  opacity: ${n=>n.$showGrid?1:0};
  transition: opacity 0.2s ease;
`,aP=dt.forwardRef(({showGrid:n},e)=>M.jsx(iP,{ref:e,$showGrid:n})),rP=({pixelGrid:n,gridWidth:e,gridHeight:t,pixelSize:a,gridGap:o,showGrid:l,mode:u,cornerRadius:f,pixelShape:h,customShape:p,glowEnabled:m,glowColor:v,glowSettings:_,bulbEnabled:x,bulbSettings:S,backgroundColor:T,visibleArea:b})=>{console.log("[useRendererProps] Received: glowEnabled:",m,", glowSettings:",_),console.log("[useRendererProps] Received: bulbEnabled:",x,", bulbSettings:",S);const y=H.useMemo(()=>({pixelData:n,gridWidth:e,gridHeight:t,pixelSize:a,gridGap:o,showGrid:l,cornerRadius:f,pixelShape:h,customShape:p,backgroundColor:T}),[n,e,t,a,o,l,f,h,p,T]),O=H.useMemo(()=>{const E={glowEnabled:m,glowColor:v,glowSettings:_,bulbEnabled:x??!1,bulbSettings:S??{}};return console.log("[useRendererProps] Returning effectProps: bulbEnabled:",E.bulbEnabled),E},[m,v,_,x,S]),w=H.useMemo(()=>({mode:u,visibleArea:b}),[u,b]);return{commonProps:y,effectProps:O,svgProps:w}},e1=(n,e,t,a)=>{const o=[],l=Math.abs(t-n),u=-Math.abs(a-e),f=n<t?1:-1,h=e<a?1:-1;let p=l+u,m=n,v=e;for(;o.push({x:m,y:v}),!(m===t&&v===a);){const _=2*p;if(_>=u){if(m===t)break;p+=u,m+=f}if(_<=l){if(v===a)break;p+=l,v+=h}}return o},oP=xA`
  to {
    stroke-dashoffset: -8; // Adjust based on dash array length
  }
`,sP=Se.div`
  position: absolute;
  border: 1px dashed white;
  box-shadow: 0 0 0 1px black; // Create an inner black border for contrast
  pointer-events: none; // Allow clicks to pass through to the canvas
  mix-blend-mode: difference; // Helps visibility on different backgrounds
  stroke-dasharray: 4 4; // Dashed line pattern (4px line, 4px gap)
  animation: ${oP} 0.5s linear infinite;
  z-index: 10; // Ensure it's above the canvas content but below UI elements
`,lP=({selectionArea:n,gridDimensions:e,pixelSize:t,gridGap:a,zoomScale:o=1})=>{const l=H.useMemo(()=>{if(!n)return{display:"none"};const{x1:u,y1:f,x2:h,y2:p}=n,m=t+a,v=u*m,_=f*m,x=(h-u+1)*m,S=(p-f+1)*m;return{display:"block",left:`${v}px`,top:`${_}px`,width:`${x}px`,height:`${S}px`}},[n,t,a,o]);return n?M.jsx(sP,{style:l}):null},cP=dt.memo(lP),uP=Se.div`
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  outline: none; /* Remove outline when focused */
  touch-action: none; /* Disable browser touch behaviors */
`,fP=Se.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  touch-action: none; /* Disable browser touch behaviors */
`;Se.div`
  position: absolute;
  /* Removed hover effects */
`;const dP=H.memo(H.forwardRef(({gridDimensions:n,pixelSize:e,gridGap:t,activeColor:a,activeColorRef:o,onColorChange:l,onDrawStart:u,pixelGrid:f,setPixelGrid:h,setGridDimensions:p,canUndo:m,canRedo:v,onUndo:_,onRedo:x,cornerRadius:S,glowEnabled:T,bulbEnabled:b,glowSettings:y,bulbSettings:O,activeTool:w,showGrid:E,mode:L,interactionSettings:B,rendererType:R="canvas",pixelShape:V,customShape:U,backgroundColor:D,shiftKeyPressedRef:j,lineStartPoint:ne,setLineStartPoint:Z,selectionArea:ue,setSelectionArea:re,copyBuffer:X},J)=>{console.log("[Canvas] Received props: bulbEnabled:",b,", bulbSettings:",O);const{width:q,height:_e}=n,[F,te]=H.useState(!1),[xe,Te]=H.useState(!1),[K,$]=H.useState(!1),ce=H.useRef(!1),he=H.useRef(null),[Ae,De]=H.useState("pencil"),Ve=H.useRef(null),it=H.useRef(null),at=H.useRef(null),et=H.useRef(null),N=H.useRef(null),[Le,Oe]=H.useState(1),He=H.useRef({x:-1,y:-1}),je={startX:0,endX:q,startY:0,endY:_e},nt=H.useRef(!1),Pe=H.useRef(null),k=H.useRef(null);H.useRef(0);const C=H.useRef(null),{commonProps:ae,effectProps:be,svgProps:we}=rP({pixelGrid:f,gridWidth:q,gridHeight:_e,pixelSize:e,gridGap:t,showGrid:E,mode:L,cornerRadius:S,pixelShape:V,customShape:U,glowEnabled:T,glowColor:o.current,glowSettings:y,bulbEnabled:b,bulbSettings:O,backgroundColor:D,visibleArea:je});H.useEffect(()=>{nt.current=xe},[xe]);const me=H.useRef(!1),Fe=H.useRef(!1);H.useEffect(()=>{const I=Ie=>{Ie.code==="Space"&&!xe?(me.current=!0,te(!0)):Ie.metaKey&&(Fe.current=!0)},ie=Ie=>{Ie.code==="Space"?(me.current=!1,te(!1)):Ie.key==="Meta"&&(Fe.current=!1)},Me=()=>{Fe.current=!1,me.current=!1,te(!1)};return window.addEventListener("keydown",I),window.addEventListener("keyup",ie),window.addEventListener("blur",Me),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",ie),window.removeEventListener("blur",Me)}},[xe]),H.useCallback((I=!1)=>I||w==="eraser"?null:o.current,[w,o]);const Ne=H.useCallback(I=>{if(L==="preview")return;const{gridX:ie,gridY:Me,buttons:Ie}=I;if(ie<0||ie>=q||Me<0||Me>=_e){Z(null);return}const Je=Ie===2,Ut=j.current;if(Fe.current){const gt=Jb(f,ie,Me);gt&&l(gt),Z(null),re(null);return}if(Ut&&ne&&(w==="pencil"||w==="eraser")){console.log("Drawing line from",ne,"to",{gridX:ie,gridY:Me});const gt=e1(ne.x,ne.y,ie,Me),fn=Je||w==="eraser"?null:o.current,Wt=f.map(Nt=>[...Nt]);let jt=!1;gt.forEach(Nt=>{Nt.x>=0&&Nt.x<q&&Nt.y>=0&&Nt.y<_e&&Wt[Nt.y][Nt.x]!==fn&&(Wt[Nt.y][Nt.x]=fn,jt=!0)}),jt&&(h(Wt),u()),Z({x:ie,y:Me}),re(null);return}if(w==="select")return;if(ue&&(console.log("Clearing selection due to non-select tool action"),re(null)),w==="colorPicker"){const gt=Jb(f,ie,Me);gt&&l(gt),Z(null);return}const Pt=Je||w==="eraser"?null:o.current;if(w==="fill"){if(!Je){const gt=tP(f,ie,Me,Pt);gt!==f&&(h(gt),u())}Z(null)}else if(w==="pencil"||w==="eraser"){const gt=bM(f,ie,Me,Pt);gt!==f&&h(gt)}!Ut&&(w==="pencil"||w==="eraser")?(console.log("Setting line start point:",{gridX:ie,gridY:Me}),Z({x:ie,y:Me})):Ut||Z(null)},[w,q,_e,l,f,h,L,u,o,Fe,j,ne,Z,e1,re,ue]),ke=H.useCallback((I,ie,Me,Ie,Je)=>{if(L==="preview")return;const Ut=Je||w==="eraser"?null:o.current,Pt=nP(f,I,ie,Me,Ie,Ut);Pt!==f&&h(Pt)},[f,h,L,w,o]),pt=H.useCallback(()=>{nt.current||(k.current=f.map(I=>[...I]),Pe.current&&clearTimeout(Pe.current))},[f]),Be=H.useCallback(()=>{nt.current&&(JSON.stringify(k.current)!==JSON.stringify(f)&&u(),k.current=null)},[f,u]);H.useCallback(()=>{u()},[u]),H.useEffect(()=>()=>{Pe.current&&clearTimeout(Pe.current),C.current&&clearTimeout(C.current)},[]);const Ye=H.useCallback(I=>{if(me.current||L==="preview")return;const{gridX:ie,gridY:Me,buttons:Ie}=I;if(He.current={x:ie,y:Me},w==="select"){console.log("Selection started at:",I),ce.current=!0,$(!0),he.current={x:I.gridX,y:I.gridY},Te(!1);return}if(Te(!0),pt(),Fe.current){Ne(I);return}(w==="pencil"||w==="eraser")&&Ne(I)},[L,w,pt,Ne,me,Fe,re,$]),rt=H.useCallback(I=>{if(me.current||L==="preview")return;const{gridX:ie,gridY:Me,buttons:Ie}=I;if(ce.current&&he.current){const Je=he.current;if(I.gridX!==Je.x||I.gridY!==Je.y){const Ut=Math.min(Je.x,I.gridX),Pt=Math.min(Je.y,I.gridY),gt=Math.max(Je.x,I.gridX),fn=Math.max(Je.y,I.gridY);re({x1:Ut,y1:Pt,x2:gt,y2:fn})}else(!ue||ue.x1!==Je.x||ue.y1!==Je.y||ue.x2!==Je.x||ue.y2!==Je.y)&&re({x1:Je.x,y1:Je.y,x2:Je.x,y2:Je.y});return}if(nt.current&&!Fe.current&&(w==="pencil"||w==="eraser")&&(ie!==He.current.x||Me!==He.current.y)){const Je=Ie===2;ke(He.current.x,He.current.y,ie,Me,Je),He.current={x:ie,y:Me}}},[L,w,ke,nt,me,Fe,re,ue]),ct=H.useCallback(I=>{if(me.current||L==="preview")return;const{gridX:ie,gridY:Me,buttons:Ie}=I,Je=nt.current;if(ce.current&&he.current){const Pt=he.current;if(Pt.x===ie&&Pt.y===Me)if(X){console.log(`Pasting content at (${ie}, ${Me})`);const{width:fn,height:Wt,data:jt}=X,Nt=f.map(Vn=>[...Vn]);let Un=!1;for(let Vn=0;Vn<Wt;Vn++)for(let Ri=0;Ri<fn;Ri++){const Xi=ie+Ri,si=Me+Vn;Xi>=0&&Xi<q&&si>=0&&si<_e&&Nt[si][Xi]!==jt[Vn][Ri]&&(Nt[si][Xi]=jt[Vn][Ri],Un=!0)}Un&&(h(Nt),u()),re(null)}else console.log("Selection click - clearing area"),re(null);else{const fn=Math.min(Pt.x,ie),Wt=Math.min(Pt.y,Me),jt=Math.max(Pt.x,ie),Nt=Math.max(Pt.y,Me);console.log("Selection drag end - setting area:",{x1:fn,y1:Wt,x2:jt,y2:Nt}),re({x1:fn,y1:Wt,x2:jt,y2:Nt})}ce.current=!1,$(!1),he.current=null,Te(!1);return}!Fe.current&&w==="fill"&&Ie!==2&&Ne(I),Te(!1),Je&&(Fe.current||Be()),He.current={x:-1,y:-1}},[L,w,Ne,Be,me,Fe,re,$,X,f,h,u,q,_e]),Xe=H.useCallback(()=>{me.current||L!=="preview"&&(nt.current&&(Be(),Te(!1)),ce.current&&(console.log("Clearing selection on mouse leave"),re(null),ce.current=!1,$(!1),he.current=null),He.current={x:-1,y:-1})},[L,Be,me,re,$]),ht=H.useCallback(()=>{if(L==="interact")return"pointer";if(F)return"grab";switch(w){case"pencil":return"crosshair";case"eraser":return"crosshair";case"fill":return"crosshair";case"colorPicker":return"eyedropper";default:return"default"}},[F,w,L]),st=H.useCallback(I=>{me.current||I&&I.gridX>=0&&(Ne(I),Fe.current||(w==="pencil"||w==="eraser")&&(Ye(I),ct(I)))},[w,Ne,Ye,ct,me,Fe]),Bt=H.useCallback(I=>{if(nt.current||I.ctrlKey||I.metaKey||(I.preventDefault(),I.stopPropagation(),!N.current))return;te(!0),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{te(!1)},150);const{scale:ie}=N.current.state,Me=1.5,Ie=I.deltaX*Me,Je=I.deltaY*Me;N.current.setPointToPan?N.current.setPointToPan(N.current.state.positionX-Ie/ie,N.current.state.positionY-Je/ie):N.current.setTransform&&N.current.setTransform(N.current.state.positionX-Ie/ie,N.current.state.positionY-Je/ie,ie)},[nt]),ee=H.useCallback(I=>{Oe(I.scale)},[]),qe=H.useCallback(I=>{Ve.current&&I.target===Ve.current&&Ve.current.focus()},[]);return H.useEffect(()=>{Ve.current&&Ve.current.focus()},[]),H.useEffect(()=>{var Me;const I=Ie=>{Ie.preventDefault()},ie=(Me=N.current)==null?void 0:Me.instance.contentComponent;return ie&&ie.addEventListener("contextmenu",I),()=>{ie&&ie.removeEventListener("contextmenu",I)}},[]),H.useImperativeHandle(J,()=>({zoomIn:()=>(console.log("[Canvas] zoomIn method called, zoomWrapperRef:",N.current),N.current?(console.log("[Canvas] Calling zoomIn on TransformWrapper"),N.current.zoomIn(.2),!0):(console.warn("[Canvas] zoomIn failed: zoomWrapperRef not available"),!1)),zoomOut:()=>(console.log("[Canvas] zoomOut method called, zoomWrapperRef:",N.current),N.current?(console.log("[Canvas] Calling zoomOut on TransformWrapper"),N.current.zoomOut(.2),!0):(console.warn("[Canvas] zoomOut failed: zoomWrapperRef not available"),!1)),svgRef:at,exportPNG:()=>{it.current&&it.current.exportPNG&&it.current.exportPNG()},getZoomWrapper:()=>N.current}),[N,it,at]),M.jsx(uP,{ref:Ve,style:{cursor:ht()},onWheel:Bt,tabIndex:0,onClick:qe,onMouseDown:()=>{Ve.current&&Ve.current.focus()},children:M.jsx(Dw,{ref:N,disabled:xe||K,minScale:.1,maxScale:10,limitToBounds:!1,wheel:{step:.1,smoothStep:.01,disabled:xe||K},doubleClick:{disabled:!0},pan:{disabled:xe||K,velocityEqualToMove:!0,activationKeys:["Space"]},pinch:{step:5},options:{limitToBounds:!1,minScale:.1,maxScale:10,transformEnabled:!(xe||K),disabled:xe||K,panningEnabled:!xe&&!K},initialScale:1,initialPositionX:0,initialPositionY:0,centerOnInit:!0,onPanningStart:()=>te(!0),onPanningStop:()=>te(!1),onZoomStop:I=>Oe(I.state.scale),onTransformed:ee,children:({zoomIn:I,zoomOut:ie,state:Me={scale:1,positionX:0,positionY:0},...Ie})=>M.jsx(Pw,{wrapperStyle:{width:"100%",height:"100%",touchAction:"none"},contentStyle:{cursor:ht(),touchAction:"none"},children:M.jsxs(fP,{children:[R==="canvas"?M.jsx(zw,{ref:it,...ae,...be,onMouseDown:Ye,onMouseUp:ct,onMouseLeave:Xe,onMouseMove:rt,spaceKeyPressed:me.current}):R==="svg"?M.jsx(kw,{ref:at,...ae,...be,...we,onCanvasMouseDown:Ye,onCanvasMouseUp:ct,onCanvasMouseLeave:Xe,onCanvasMouseMove:rt,onClick:st,activeTool:w},`svg-renderer-${o.current||"default"}-${R}`):M.jsx(eP,{ref:et,...ae,...be,onMouseDown:Ye,onMouseUp:ct,onMouseLeave:Xe,onMouseMove:rt}),E&&M.jsx(aP,{gridWidth:q,gridHeight:_e,pixelSize:e,gridGap:t}),M.jsx(cP,{selectionArea:ue,gridDimensions:n,pixelSize:e,gridGap:t,zoomScale:Le})]})})})})}));/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function hP(n,e,t){return(e=mP(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t1(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function Ge(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?t1(Object(t),!0).forEach(function(a){hP(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):t1(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function pP(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function mP(n){var e=pP(n,"string");return typeof e=="symbol"?e:e+""}const n1=()=>{};let z0={},SM={},MM=null,EM={mark:n1,measure:n1};try{typeof window<"u"&&(z0=window),typeof document<"u"&&(SM=document),typeof MutationObserver<"u"&&(MM=MutationObserver),typeof performance<"u"&&(EM=performance)}catch{}const{userAgent:i1=""}=z0.navigator||{},qr=z0,hn=SM,a1=MM,Af=EM;qr.document;const or=!!hn.documentElement&&!!hn.head&&typeof hn.addEventListener=="function"&&typeof hn.createElement=="function",TM=~i1.indexOf("MSIE")||~i1.indexOf("Trident/");var gP=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,vP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,AM={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},_P={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ni="classic",Ad="duotone",xP="sharp",yP="sharp-duotone",CM=[ni,Ad,xP,yP],bP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},SP={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},MP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),EP={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},TP=["fak","fa-kit","fakd","fa-kit-duotone"],r1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},AP=["kit"],wP={kit:{"fa-kit":"fak"}},CP=["fak","fakd"],RP={kit:{fak:"fa-kit"}},o1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},wf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},DP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],LP=["fak","fa-kit","fakd","fa-kit-duotone"],UP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},PP={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},NP={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ig={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},OP=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],kg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...DP,...OP],zP=["solid","regular","light","thin","duotone","brands"],RM=[1,2,3,4,5,6,7,8,9,10],BP=RM.concat([11,12,13,14,15,16,17,18,19,20]),FP=[...Object.keys(NP),...zP,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wf.GROUP,wf.SWAP_OPACITY,wf.PRIMARY,wf.SECONDARY].concat(RM.map(n=>"".concat(n,"x"))).concat(BP.map(n=>"w-".concat(n))),IP={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ir="___FONT_AWESOME___",Hg=16,DM="fa",LM="svg-inline--fa",No="data-fa-i2svg",Gg="data-fa-pseudo-element",kP="data-fa-pseudo-element-pending",B0="data-prefix",F0="data-icon",s1="fontawesome-i2svg",HP="async",GP=["HTML","HEAD","STYLE","SCRIPT"],UM=(()=>{try{return!0}catch{return!1}})();function Hc(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[ni]}})}const PM=Ge({},AM);PM[ni]=Ge(Ge(Ge(Ge({},{"fa-duotone":"duotone"}),AM[ni]),r1.kit),r1["kit-duotone"]);const VP=Hc(PM),Vg=Ge({},EP);Vg[ni]=Ge(Ge(Ge(Ge({},{duotone:"fad"}),Vg[ni]),o1.kit),o1["kit-duotone"]);const l1=Hc(Vg),Xg=Ge({},Ig);Xg[ni]=Ge(Ge({},Xg[ni]),RP.kit);const I0=Hc(Xg),jg=Ge({},PP);jg[ni]=Ge(Ge({},jg[ni]),wP.kit);Hc(jg);const XP=gP,NM="fa-layers-text",jP=vP,YP=Ge({},bP);Hc(YP);const WP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ym=_P,qP=[...AP,...FP],Sc=qr.FontAwesomeConfig||{};function $P(n){var e=hn.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function ZP(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}hn&&typeof hn.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,a]=e;const o=ZP($P(t));o!=null&&(Sc[a]=o)});const OM={styleDefault:"solid",familyDefault:ni,cssPrefix:DM,replacementClass:LM,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Sc.familyPrefix&&(Sc.cssPrefix=Sc.familyPrefix);const al=Ge(Ge({},OM),Sc);al.autoReplaceSvg||(al.observeMutations=!1);const ut={};Object.keys(OM).forEach(n=>{Object.defineProperty(ut,n,{enumerable:!0,set:function(e){al[n]=e,Mc.forEach(t=>t(ut))},get:function(){return al[n]}})});Object.defineProperty(ut,"familyPrefix",{enumerable:!0,set:function(n){al.cssPrefix=n,Mc.forEach(e=>e(ut))},get:function(){return al.cssPrefix}});qr.FontAwesomeConfig=ut;const Mc=[];function KP(n){return Mc.push(n),()=>{Mc.splice(Mc.indexOf(n),1)}}const Or=Hg,Ta={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function QP(n){if(!n||!or)return;const e=hn.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=hn.head.childNodes;let a=null;for(let o=t.length-1;o>-1;o--){const l=t[o],u=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(a=l)}return hn.head.insertBefore(e,a),n}const JP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dc(){let n=12,e="";for(;n-- >0;)e+=JP[Math.random()*62|0];return e}function cl(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function k0(n){return n.classList?cl(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function zM(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e4(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(zM(n[t]),'" '),"").trim()}function wd(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function H0(n){return n.size!==Ta.size||n.x!==Ta.x||n.y!==Ta.y||n.rotate!==Ta.rotate||n.flipX||n.flipY}function t4(n){let{transform:e,containerWidth:t,iconWidth:a}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),u="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:h,path:p}}function n4(n){let{transform:e,width:t=Hg,height:a=Hg,startCentered:o=!1}=n,l="";return o&&TM?l+="translate(".concat(e.x/Or-t/2,"em, ").concat(e.y/Or-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Or,"em), calc(-50% + ").concat(e.y/Or,"em)) "):l+="translate(".concat(e.x/Or,"em, ").concat(e.y/Or,"em) "),l+="scale(".concat(e.size/Or*(e.flipX?-1:1),", ").concat(e.size/Or*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var i4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function BM(){const n=DM,e=LM,t=ut.cssPrefix,a=ut.replacementClass;let o=i4;if(t!==n||a!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),u=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(u,"--".concat(t,"-")).replace(f,".".concat(a))}return o}let c1=!1;function bm(){ut.autoAddCss&&!c1&&(QP(BM()),c1=!0)}var a4={mixout(){return{dom:{css:BM,insertCss:bm}}},hooks(){return{beforeDOMElementCreation(){bm()},beforeI2svg(){bm()}}}};const ar=qr||{};ar[ir]||(ar[ir]={});ar[ir].styles||(ar[ir].styles={});ar[ir].hooks||(ar[ir].hooks={});ar[ir].shims||(ar[ir].shims=[]);var Aa=ar[ir];const FM=[],IM=function(){hn.removeEventListener("DOMContentLoaded",IM),ud=1,FM.map(n=>n())};let ud=!1;or&&(ud=(hn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(hn.readyState),ud||hn.addEventListener("DOMContentLoaded",IM));function r4(n){or&&(ud?setTimeout(n,0):FM.push(n))}function Gc(n){const{tag:e,attributes:t={},children:a=[]}=n;return typeof n=="string"?zM(n):"<".concat(e," ").concat(e4(t),">").concat(a.map(Gc).join(""),"</").concat(e,">")}function u1(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Sm=function(e,t,a,o){var l=Object.keys(e),u=l.length,f=t,h,p,m;for(a===void 0?(h=1,m=e[l[0]]):(h=0,m=a);h<u;h++)p=l[h],m=f(m,e[p],p,e);return m};function o4(n){const e=[];let t=0;const a=n.length;for(;t<a;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<a){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Yg(n){const e=o4(n);return e.length===1?e[0].toString(16):null}function s4(n,e){const t=n.length;let a=n.charCodeAt(e),o;return a>=55296&&a<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function f1(n){return Object.keys(n).reduce((e,t)=>{const a=n[t];return!!a.icon?e[a.iconName]=a.icon:e[t]=a,e},{})}function Wg(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=t,o=f1(e);typeof Aa.hooks.addPack=="function"&&!a?Aa.hooks.addPack(n,f1(e)):Aa.styles[n]=Ge(Ge({},Aa.styles[n]||{}),o),n==="fas"&&Wg("fa",e)}const{styles:Lc,shims:l4}=Aa,kM=Object.keys(I0),c4=kM.reduce((n,e)=>(n[e]=Object.keys(I0[e]),n),{});let G0=null,HM={},GM={},VM={},XM={},jM={};function u4(n){return~qP.indexOf(n)}function f4(n,e){const t=e.split("-"),a=t[0],o=t.slice(1).join("-");return a===n&&o!==""&&!u4(o)?o:null}const YM=()=>{const n=a=>Sm(Lc,(o,l,u)=>(o[u]=Sm(l,a,{}),o),{});HM=n((a,o,l)=>(o[3]&&(a[o[3]]=l),o[2]&&o[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=l}),a)),GM=n((a,o,l)=>(a[l]=l,o[2]&&o[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=l}),a)),jM=n((a,o,l)=>{const u=o[2];return a[l]=l,u.forEach(f=>{a[f]=l}),a});const e="far"in Lc||ut.autoFetchSvg,t=Sm(l4,(a,o)=>{const l=o[0];let u=o[1];const f=o[2];return u==="far"&&!e&&(u="fas"),typeof l=="string"&&(a.names[l]={prefix:u,iconName:f}),typeof l=="number"&&(a.unicodes[l.toString(16)]={prefix:u,iconName:f}),a},{names:{},unicodes:{}});VM=t.names,XM=t.unicodes,G0=Cd(ut.styleDefault,{family:ut.familyDefault})};KP(n=>{G0=Cd(n.styleDefault,{family:ut.familyDefault})});YM();function V0(n,e){return(HM[n]||{})[e]}function d4(n,e){return(GM[n]||{})[e]}function Ro(n,e){return(jM[n]||{})[e]}function WM(n){return VM[n]||{prefix:null,iconName:null}}function h4(n){const e=XM[n],t=V0("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function $r(){return G0}const qM=()=>({prefix:null,iconName:null,rest:[]});function p4(n){let e=ni;const t=kM.reduce((a,o)=>(a[o]="".concat(ut.cssPrefix,"-").concat(o),a),{});return CM.forEach(a=>{(n.includes(t[a])||n.some(o=>c4[a].includes(o)))&&(e=a)}),e}function Cd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=ni}=e,a=VP[t][n];if(t===Ad&&!n)return"fad";const o=l1[t][n]||l1[t][a],l=n in Aa.styles?n:null;return o||l||null}function m4(n){let e=[],t=null;return n.forEach(a=>{const o=f4(ut.cssPrefix,a);o?t=o:a&&e.push(a)}),{iconName:t,rest:e}}function d1(n){return n.sort().filter((e,t,a)=>a.indexOf(e)===t)}function Rd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let a=null;const o=kg.concat(LP),l=d1(n.filter(v=>o.includes(v))),u=d1(n.filter(v=>!kg.includes(v))),f=l.filter(v=>(a=v,!wM.includes(v))),[h=null]=f,p=p4(l),m=Ge(Ge({},m4(u)),{},{prefix:Cd(h,{family:p})});return Ge(Ge(Ge({},m),x4({values:n,family:p,styles:Lc,config:ut,canonical:m,givenPrefix:a})),g4(t,a,m))}function g4(n,e,t){let{prefix:a,iconName:o}=t;if(n||!a||!o)return{prefix:a,iconName:o};const l=e==="fa"?WM(o):{},u=Ro(a,o);return o=l.iconName||u||o,a=l.prefix||a,a==="far"&&!Lc.far&&Lc.fas&&!ut.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const v4=CM.filter(n=>n!==ni||n!==Ad),_4=Object.keys(Ig).filter(n=>n!==ni).map(n=>Object.keys(Ig[n])).flat();function x4(n){const{values:e,family:t,canonical:a,givenPrefix:o="",styles:l={},config:u={}}=n,f=t===Ad,h=e.includes("fa-duotone")||e.includes("fad"),p=u.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(h||p||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&v4.includes(t)&&(Object.keys(l).find(_=>_4.includes(_))||u.autoFetchSvg)){const _=MP.get(t).defaultShortPrefixId;a.prefix=_,a.iconName=Ro(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=$r()||"fas"),a}class y4{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=Ge(Ge({},this.definitions[l]||{}),o[l]),Wg(l,o[l]);const u=I0[ni][l];u&&Wg(u,o[l]),YM()})}reset(){this.definitions={}}_pullDefinitions(e,t){const a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(o=>{const{prefix:l,iconName:u,icon:f}=a[o],h=f[2];e[l]||(e[l]={}),h.length>0&&h.forEach(p=>{typeof p=="string"&&(e[l][p]=f)}),e[l][u]=f}),e}}let h1=[],Gs={};const Ys={},b4=Object.keys(Ys);function S4(n,e){let{mixoutsTo:t}=e;return h1=n,Gs={},Object.keys(Ys).forEach(a=>{b4.indexOf(a)===-1&&delete Ys[a]}),h1.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(u=>{t[l]||(t[l]={}),t[l][u]=o[l][u]})}),a.hooks){const l=a.hooks();Object.keys(l).forEach(u=>{Gs[u]||(Gs[u]=[]),Gs[u].push(l[u])})}a.provides&&a.provides(Ys)}),t}function qg(n,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];return(Gs[n]||[]).forEach(u=>{e=u.apply(null,[e,...a])}),e}function Oo(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];(Gs[n]||[]).forEach(l=>{l.apply(null,t)})}function Zr(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ys[n]?Ys[n].apply(null,e):void 0}function $g(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||$r();if(e)return e=Ro(t,e)||e,u1($M.definitions,t,e)||u1(Aa.styles,t,e)}const $M=new y4,M4=()=>{ut.autoReplaceSvg=!1,ut.observeMutations=!1,Oo("noAuto")},E4={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return or?(Oo("beforeI2svg",n),Zr("pseudoElements2svg",n),Zr("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;ut.autoReplaceSvg===!1&&(ut.autoReplaceSvg=!0),ut.observeMutations=!0,r4(()=>{A4({autoReplaceSvgRoot:e}),Oo("watch",n)})}},T4={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Ro(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Cd(n[0]);return{prefix:t,iconName:Ro(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(ut.cssPrefix,"-"))>-1||n.match(XP))){const e=Rd(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||$r(),iconName:Ro(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=$r();return{prefix:e,iconName:Ro(e,n)||n}}}},Ci={noAuto:M4,config:ut,dom:E4,parse:T4,library:$M,findIconDefinition:$g,toHtml:Gc},A4=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=hn}=n;(Object.keys(Aa.styles).length>0||ut.autoFetchSvg)&&or&&ut.autoReplaceSvg&&Ci.dom.i2svg({node:e})};function Dd(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>Gc(t))}}),Object.defineProperty(n,"node",{get:function(){if(!or)return;const t=hn.createElement("div");return t.innerHTML=n.html,t.children}}),n}function w4(n){let{children:e,main:t,mask:a,attributes:o,styles:l,transform:u}=n;if(H0(u)&&t.found&&!a.found){const{width:f,height:h}=t,p={x:f/h/2,y:.5};o.style=wd(Ge(Ge({},l),{},{"transform-origin":"".concat(p.x+u.x/16,"em ").concat(p.y+u.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function C4(n){let{prefix:e,iconName:t,children:a,attributes:o,symbol:l}=n;const u=l===!0?"".concat(e,"-").concat(ut.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ge(Ge({},o),{},{id:u}),children:a}]}]}function X0(n){const{icons:{main:e,mask:t},prefix:a,iconName:o,transform:l,symbol:u,title:f,maskId:h,titleId:p,extra:m,watchable:v=!1}=n,{width:_,height:x}=t.found?t:e,S=CP.includes(a),T=[ut.replacementClass,o?"".concat(ut.cssPrefix,"-").concat(o):""].filter(L=>m.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(m.classes).join(" ");let b={children:[],attributes:Ge(Ge({},m.attributes),{},{"data-prefix":a,"data-icon":o,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(x)})};const y=S&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/x*16*.0625,"em")}:{};v&&(b.attributes[No]=""),f&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(p||Dc())},children:[f]}),delete b.attributes.title);const O=Ge(Ge({},b),{},{prefix:a,iconName:o,main:e,mask:t,maskId:h,transform:l,symbol:u,styles:Ge(Ge({},y),m.styles)}),{children:w,attributes:E}=t.found&&e.found?Zr("generateAbstractMask",O)||{children:[],attributes:{}}:Zr("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=w,O.attributes=E,u?C4(O):w4(O)}function p1(n){const{content:e,width:t,height:a,transform:o,title:l,extra:u,watchable:f=!1}=n,h=Ge(Ge(Ge({},u.attributes),l?{title:l}:{}),{},{class:u.classes.join(" ")});f&&(h[No]="");const p=Ge({},u.styles);H0(o)&&(p.transform=n4({transform:o,startCentered:!0,width:t,height:a}),p["-webkit-transform"]=p.transform);const m=wd(p);m.length>0&&(h.style=m);const v=[];return v.push({tag:"span",attributes:h,children:[e]}),l&&v.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),v}function R4(n){const{content:e,title:t,extra:a}=n,o=Ge(Ge(Ge({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),l=wd(a.styles);l.length>0&&(o.style=l);const u=[];return u.push({tag:"span",attributes:o,children:[e]}),t&&u.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),u}const{styles:Mm}=Aa;function Zg(n){const e=n[0],t=n[1],[a]=n.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(ut.cssPrefix,"-").concat(ym.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ut.cssPrefix,"-").concat(ym.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(ut.cssPrefix,"-").concat(ym.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:o}}const D4={found:!1,width:512,height:512};function L4(n,e){!UM&&!ut.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Kg(n,e){let t=e;return e==="fa"&&ut.styleDefault!==null&&(e=$r()),new Promise((a,o)=>{if(t==="fa"){const l=WM(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&Mm[e]&&Mm[e][n]){const l=Mm[e][n];return a(Zg(l))}L4(n,e),a(Ge(Ge({},D4),{},{icon:ut.showMissingIcons&&n?Zr("missingIconAbstract")||{}:{}}))})}const m1=()=>{},Qg=ut.measurePerformance&&Af&&Af.mark&&Af.measure?Af:{mark:m1,measure:m1},yc='FA "6.7.2"',U4=n=>(Qg.mark("".concat(yc," ").concat(n," begins")),()=>ZM(n)),ZM=n=>{Qg.mark("".concat(yc," ").concat(n," ends")),Qg.measure("".concat(yc," ").concat(n),"".concat(yc," ").concat(n," begins"),"".concat(yc," ").concat(n," ends"))};var j0={begin:U4,end:ZM};const Zf=()=>{};function g1(n){return typeof(n.getAttribute?n.getAttribute(No):null)=="string"}function P4(n){const e=n.getAttribute?n.getAttribute(B0):null,t=n.getAttribute?n.getAttribute(F0):null;return e&&t}function N4(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(ut.replacementClass)}function O4(){return ut.autoReplaceSvg===!0?Kf.replace:Kf[ut.autoReplaceSvg]||Kf.replace}function z4(n){return hn.createElementNS("http://www.w3.org/2000/svg",n)}function B4(n){return hn.createElement(n)}function KM(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?z4:B4}=e;if(typeof n=="string")return hn.createTextNode(n);const a=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){a.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){a.appendChild(KM(l,{ceFn:t}))}),a}function F4(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kf={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(KM(t),e)}),e.getAttribute(No)===null&&ut.keepOriginalSource){let t=hn.createComment(F4(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~k0(e).indexOf(ut.replacementClass))return Kf.replace(n);const a=new RegExp("".concat(ut.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((u,f)=>(f===ut.replacementClass||f.match(a)?u.toSvg.push(f):u.toNode.push(f),u),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>Gc(l)).join(`
`);e.setAttribute(No,""),e.innerHTML=o}};function v1(n){n()}function QM(n,e){const t=typeof e=="function"?e:Zf;if(n.length===0)t();else{let a=v1;ut.mutateApproach===HP&&(a=qr.requestAnimationFrame||v1),a(()=>{const o=O4(),l=j0.begin("mutate");n.map(o),l(),t()})}}let Y0=!1;function JM(){Y0=!0}function Jg(){Y0=!1}let fd=null;function _1(n){if(!a1||!ut.observeMutations)return;const{treeCallback:e=Zf,nodeCallback:t=Zf,pseudoElementsCallback:a=Zf,observeMutationsRoot:o=hn}=n;fd=new a1(l=>{if(Y0)return;const u=$r();cl(l).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!g1(f.addedNodes[0])&&(ut.searchPseudoElements&&a(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&ut.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&g1(f.target)&&~WP.indexOf(f.attributeName))if(f.attributeName==="class"&&P4(f.target)){const{prefix:h,iconName:p}=Rd(k0(f.target));f.target.setAttribute(B0,h||u),p&&f.target.setAttribute(F0,p)}else N4(f.target)&&t(f.target)})}),or&&fd.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function I4(){fd&&fd.disconnect()}function k4(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((a,o)=>{const l=o.split(":"),u=l[0],f=l.slice(1);return u&&f.length>0&&(a[u]=f.join(":").trim()),a},{})),t}function H4(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"";let o=Rd(k0(n));return o.prefix||(o.prefix=$r()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=d4(o.prefix,n.innerText)||V0(o.prefix,Yg(n.innerText))),!o.iconName&&ut.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function G4(n){const e=cl(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return ut.autoA11y&&(t?e["aria-labelledby"]="".concat(ut.replacementClass,"-title-").concat(a||Dc()):(e["aria-hidden"]="true",e.focusable="false")),e}function V4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ta,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:a,rest:o}=H4(n),l=G4(n),u=qg("parseNodeAttributes",{},n);let f=e.styleParser?k4(n):[];return Ge({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:a,transform:Ta,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:l}},u)}const{styles:X4}=Aa;function eE(n){const e=ut.autoReplaceSvg==="nest"?x1(n,{styleParser:!1}):x1(n);return~e.extra.classes.indexOf(NM)?Zr("generateLayersText",n,e):Zr("generateSvgReplacementMutation",n,e)}function j4(){return[...TP,...kg]}function y1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!or)return Promise.resolve();const t=hn.documentElement.classList,a=m=>t.add("".concat(s1,"-").concat(m)),o=m=>t.remove("".concat(s1,"-").concat(m)),l=ut.autoFetchSvg?j4():wM.concat(Object.keys(X4));l.includes("fa")||l.push("fa");const u=[".".concat(NM,":not([").concat(No,"])")].concat(l.map(m=>".".concat(m,":not([").concat(No,"])"))).join(", ");if(u.length===0)return Promise.resolve();let f=[];try{f=cl(n.querySelectorAll(u))}catch{}if(f.length>0)a("pending"),o("complete");else return Promise.resolve();const h=j0.begin("onTree"),p=f.reduce((m,v)=>{try{const _=eE(v);_&&m.push(_)}catch(_){UM||_.name==="MissingIcon"&&console.error(_)}return m},[]);return new Promise((m,v)=>{Promise.all(p).then(_=>{QM(_,()=>{a("active"),a("complete"),o("pending"),typeof e=="function"&&e(),h(),m()})}).catch(_=>{h(),v(_)})})}function Y4(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eE(n).then(t=>{t&&QM([t],e)})}function W4(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:$g(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:$g(o||{})),n(a,Ge(Ge({},t),{},{mask:o}))}}const q4=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Ta,symbol:a=!1,mask:o=null,maskId:l=null,title:u=null,titleId:f=null,classes:h=[],attributes:p={},styles:m={}}=e;if(!n)return;const{prefix:v,iconName:_,icon:x}=n;return Dd(Ge({type:"icon"},n),()=>(Oo("beforeDOMElementCreation",{iconDefinition:n,params:e}),ut.autoA11y&&(u?p["aria-labelledby"]="".concat(ut.replacementClass,"-title-").concat(f||Dc()):(p["aria-hidden"]="true",p.focusable="false")),X0({icons:{main:Zg(x),mask:o?Zg(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:_,transform:Ge(Ge({},Ta),t),symbol:a,title:u,maskId:l,titleId:f,extra:{attributes:p,styles:m,classes:h}})))};var $4={mixout(){return{icon:W4(q4)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=y1,n.nodeCallback=Y4,n}}},provides(n){n.i2svg=function(e){const{node:t=hn,callback:a=()=>{}}=e;return y1(t,a)},n.generateSvgReplacementMutation=function(e,t){const{iconName:a,title:o,titleId:l,prefix:u,transform:f,symbol:h,mask:p,maskId:m,extra:v}=t;return new Promise((_,x)=>{Promise.all([Kg(a,u),p.iconName?Kg(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[T,b]=S;_([e,X0({icons:{main:T,mask:b},prefix:u,iconName:a,transform:f,symbol:h,maskId:m,title:o,titleId:l,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){let{children:t,attributes:a,main:o,transform:l,styles:u}=e;const f=wd(u);f.length>0&&(a.style=f);let h;return H0(l)&&(h=Zr("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(h||o.icon),{children:t,attributes:a}}}},Z4={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Dd({type:"layer"},()=>{Oo("beforeDOMElementCreation",{assembler:n,params:e});let a=[];return n(o=>{Array.isArray(o)?o.map(l=>{a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(ut.cssPrefix,"-layers"),...t].join(" ")},children:a}]})}}}},K4={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:a=[],attributes:o={},styles:l={}}=e;return Dd({type:"counter",content:n},()=>(Oo("beforeDOMElementCreation",{content:n,params:e}),R4({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(ut.cssPrefix,"-layers-counter"),...a]}})))}}}},Q4={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Ta,title:a=null,classes:o=[],attributes:l={},styles:u={}}=e;return Dd({type:"text",content:n},()=>(Oo("beforeDOMElementCreation",{content:n,params:e}),p1({content:n,transform:Ge(Ge({},Ta),t),title:a,extra:{attributes:l,styles:u,classes:["".concat(ut.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:a,transform:o,extra:l}=t;let u=null,f=null;if(TM){const h=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();u=p.width/h,f=p.height/h}return ut.autoA11y&&!a&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,p1({content:e.innerHTML,width:u,height:f,transform:o,title:a,extra:l,watchable:!0})])}}};const J4=new RegExp('"',"ug"),b1=[1105920,1112319],S1=Ge(Ge(Ge(Ge({},{FontAwesome:{normal:"fas",400:"fas"}}),SP),IP),UP),e0=Object.keys(S1).reduce((n,e)=>(n[e.toLowerCase()]=S1[e],n),{}),eN=Object.keys(e0).reduce((n,e)=>{const t=e0[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function tN(n){const e=n.replace(J4,""),t=s4(e,0),a=t>=b1[0]&&t<=b1[1],o=e.length===2?e[0]===e[1]:!1;return{value:Yg(o?e[0]:e),isSecondary:a||o}}function nN(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),o=isNaN(a)?"normal":a;return(e0[t]||{})[o]||eN[t]}function M1(n,e){const t="".concat(kP).concat(e.replace(":","-"));return new Promise((a,o)=>{if(n.getAttribute(t)!==null)return a();const u=cl(n.children).filter(_=>_.getAttribute(Gg)===e)[0],f=qr.getComputedStyle(n,e),h=f.getPropertyValue("font-family"),p=h.match(jP),m=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(u&&!p)return n.removeChild(u),a();if(p&&v!=="none"&&v!==""){const _=f.getPropertyValue("content");let x=nN(h,m);const{value:S,isSecondary:T}=tN(_),b=p[0].startsWith("FontAwesome");let y=V0(x,S),O=y;if(b){const w=h4(S);w.iconName&&w.prefix&&(y=w.iconName,x=w.prefix)}if(y&&!T&&(!u||u.getAttribute(B0)!==x||u.getAttribute(F0)!==O)){n.setAttribute(t,O),u&&n.removeChild(u);const w=V4(),{extra:E}=w;E.attributes[Gg]=e,Kg(y,x).then(L=>{const B=X0(Ge(Ge({},w),{},{icons:{main:L,mask:qM()},prefix:x,iconName:O,extra:E,watchable:!0})),R=hn.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(R,n.firstChild):n.appendChild(R),R.outerHTML=B.map(V=>Gc(V)).join(`
`),n.removeAttribute(t),a()}).catch(o)}else a()}else a()})}function iN(n){return Promise.all([M1(n,"::before"),M1(n,"::after")])}function aN(n){return n.parentNode!==document.head&&!~GP.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Gg)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function E1(n){if(or)return new Promise((e,t)=>{const a=cl(n.querySelectorAll("*")).filter(aN).map(iN),o=j0.begin("searchPseudoElements");JM(),Promise.all(a).then(()=>{o(),Jg(),e()}).catch(()=>{o(),Jg(),t()})})}var rN={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=E1,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=hn}=e;ut.searchPseudoElements&&E1(t)}}};let T1=!1;var oN={mixout(){return{dom:{unwatch(){JM(),T1=!0}}}},hooks(){return{bootstrap(){_1(qg("mutationObserverCallbacks",{}))},noAuto(){I4()},watch(n){const{observeMutationsRoot:e}=n;T1?Jg():_1(qg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const A1=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,a)=>{const o=a.toLowerCase().split("-"),l=o[0];let u=o.slice(1).join("-");if(l&&u==="h")return t.flipX=!0,t;if(l&&u==="v")return t.flipY=!0,t;if(u=parseFloat(u),isNaN(u))return t;switch(l){case"grow":t.size=t.size+u;break;case"shrink":t.size=t.size-u;break;case"left":t.x=t.x-u;break;case"right":t.x=t.x+u;break;case"up":t.y=t.y-u;break;case"down":t.y=t.y+u;break;case"rotate":t.rotate=t.rotate+u;break}return t},e)};var sN={mixout(){return{parse:{transform:n=>A1(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=A1(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:a,containerWidth:o,iconWidth:l}=e;const u={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),h="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(f," ").concat(h," ").concat(p)},v={transform:"translate(".concat(l/2*-1," -256)")},_={outer:u,inner:m,path:v};return{tag:"g",attributes:Ge({},_.outer),children:[{tag:"g",attributes:Ge({},_.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Ge(Ge({},t.icon.attributes),_.path)}]}]}}}};const Em={x:0,y:0,width:"100%",height:"100%"};function w1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function lN(n){return n.tag==="g"?n.children:[n]}var cN={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),a=t?Rd(t.split(" ").map(o=>o.trim())):qM();return a.prefix||(a.prefix=$r()),n.mask=a,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:a,main:o,mask:l,maskId:u,transform:f}=e;const{width:h,icon:p}=o,{width:m,icon:v}=l,_=t4({transform:f,containerWidth:m,iconWidth:h}),x={tag:"rect",attributes:Ge(Ge({},Em),{},{fill:"white"})},S=p.children?{children:p.children.map(w1)}:{},T={tag:"g",attributes:Ge({},_.inner),children:[w1(Ge({tag:p.tag,attributes:Ge(Ge({},p.attributes),_.path)},S))]},b={tag:"g",attributes:Ge({},_.outer),children:[T]},y="mask-".concat(u||Dc()),O="clip-".concat(u||Dc()),w={tag:"mask",attributes:Ge(Ge({},Em),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,b]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:lN(v)},w]};return t.push(E,{tag:"rect",attributes:Ge({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(y,")")},Em)}),{children:t,attributes:a}}}},uN={provides(n){let e=!1;qr.matchMedia&&(e=qr.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:Ge(Ge({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=Ge(Ge({},o),{},{attributeName:"opacity"}),u={tag:"circle",attributes:Ge(Ge({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||u.children.push({tag:"animate",attributes:Ge(Ge({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ge(Ge({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(u),t.push({tag:"path",attributes:Ge(Ge({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Ge(Ge({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:Ge(Ge({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ge(Ge({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},fN={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),a=t===null?!1:t===""?!0:t;return n.symbol=a,n}}}},dN=[a4,$4,Z4,K4,Q4,rN,oN,sN,cN,uN,fN];S4(dN,{mixoutsTo:Ci});Ci.noAuto;Ci.config;Ci.library;Ci.dom;const t0=Ci.parse;Ci.findIconDefinition;Ci.toHtml;const hN=Ci.icon;Ci.layer;Ci.text;Ci.counter;var Tm={exports:{}},Am,C1;function pN(){if(C1)return Am;C1=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Am=n,Am}var wm,R1;function mN(){if(R1)return wm;R1=1;var n=pN();function e(){}function t(){}return t.resetWarningCache=e,wm=function(){function a(u,f,h,p,m,v){if(v!==n){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}a.isRequired=a;function o(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},wm}var D1;function gN(){return D1||(D1=1,Tm.exports=mN()()),Tm.exports}var vN=gN();const Tt=a0(vN);function L1(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function Sa(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?L1(Object(t),!0).forEach(function(a){Vs(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L1(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function dd(n){"@babel/helpers - typeof";return dd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dd(n)}function Vs(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _N(n,e){if(n==null)return{};var t={},a=Object.keys(n),o,l;for(l=0;l<a.length;l++)o=a[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function xN(n,e){if(n==null)return{};var t=_N(n,e),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)a=l[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}function n0(n){return yN(n)||bN(n)||SN(n)||MN()}function yN(n){if(Array.isArray(n))return i0(n)}function bN(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function SN(n,e){if(n){if(typeof n=="string")return i0(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i0(n,e)}}function i0(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function MN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EN(n){var e,t=n.beat,a=n.fade,o=n.beatFade,l=n.bounce,u=n.shake,f=n.flash,h=n.spin,p=n.spinPulse,m=n.spinReverse,v=n.pulse,_=n.fixedWidth,x=n.inverse,S=n.border,T=n.listItem,b=n.flip,y=n.size,O=n.rotation,w=n.pull,E=(e={"fa-beat":t,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":u,"fa-flash":f,"fa-spin":h,"fa-spin-reverse":m,"fa-spin-pulse":p,"fa-pulse":v,"fa-fw":_,"fa-inverse":x,"fa-border":S,"fa-li":T,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Vs(e,"fa-".concat(y),typeof y<"u"&&y!==null),Vs(e,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),Vs(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Vs(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(E).map(function(L){return E[L]?L:null}).filter(function(L){return L})}function TN(n){return n=n-0,n===n}function tE(n){return TN(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var AN=["style"];function wN(n){return n.charAt(0).toUpperCase()+n.slice(1)}function CN(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a=t.indexOf(":"),o=tE(t.slice(0,a)),l=t.slice(a+1).trim();return o.startsWith("webkit")?e[wN(o)]=l:e[o]=l,e},{})}function nE(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(h){return nE(n,h)}),o=Object.keys(e.attributes||{}).reduce(function(h,p){var m=e.attributes[p];switch(p){case"class":h.attrs.className=m,delete e.attributes.class;break;case"style":h.attrs.style=CN(m);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?h.attrs[p.toLowerCase()]=m:h.attrs[tE(p)]=m}return h},{attrs:{}}),l=t.style,u=l===void 0?{}:l,f=xN(t,AN);return o.attrs.style=Sa(Sa({},o.attrs.style),u),n.apply(void 0,[e.tag,Sa(Sa({},o.attrs),f)].concat(n0(a)))}var iE=!1;try{iE=!0}catch{}function RN(){if(!iE&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function U1(n){if(n&&dd(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(t0.icon)return t0.icon(n);if(n===null)return null;if(n&&dd(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Cm(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vs({},n,e):{}}var P1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},an=dt.forwardRef(function(n,e){var t=Sa(Sa({},P1),n),a=t.icon,o=t.mask,l=t.symbol,u=t.className,f=t.title,h=t.titleId,p=t.maskId,m=U1(a),v=Cm("classes",[].concat(n0(EN(t)),n0((u||"").split(" ")))),_=Cm("transform",typeof t.transform=="string"?t0.transform(t.transform):t.transform),x=Cm("mask",U1(o)),S=hN(m,Sa(Sa(Sa(Sa({},v),_),x),{},{symbol:l,title:f,titleId:h,maskId:p}));if(!S)return RN("Could not find icon",m),null;var T=S.abstract,b={ref:e};return Object.keys(t).forEach(function(y){P1.hasOwnProperty(y)||(b[y]=t[y])}),DN(T[0],b)});an.displayName="FontAwesomeIcon";an.propTypes={beat:Tt.bool,border:Tt.bool,beatFade:Tt.bool,bounce:Tt.bool,className:Tt.string,fade:Tt.bool,flash:Tt.bool,mask:Tt.oneOfType([Tt.object,Tt.array,Tt.string]),maskId:Tt.string,fixedWidth:Tt.bool,inverse:Tt.bool,flip:Tt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Tt.oneOfType([Tt.object,Tt.array,Tt.string]),listItem:Tt.bool,pull:Tt.oneOf(["right","left"]),pulse:Tt.bool,rotation:Tt.oneOf([0,90,180,270]),shake:Tt.bool,size:Tt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Tt.bool,spinPulse:Tt.bool,spinReverse:Tt.bool,symbol:Tt.oneOfType([Tt.bool,Tt.string]),title:Tt.string,titleId:Tt.string,transform:Tt.oneOfType([Tt.string,Tt.object]),swapOpacity:Tt.bool};var DN=nE.bind(null,dt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const LN={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},UN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},PN={prefix:"fas",iconName:"arrow-pointer",icon:[320,512,["mouse-pointer"],"f245","M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"]},NN=PN,ON={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},zN={prefix:"fas",iconName:"file-import",icon:[512,512,["arrow-right-to-file"],"f56f","M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z"]},BN={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},FN=BN,IN={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},kN={prefix:"fas",iconName:"table-cells-large",icon:[512,512,["th-large"],"f009","M448 96l0 128-160 0 0-128 160 0zm0 192l0 128-160 0 0-128 160 0zM224 224L64 224 64 96l160 0 0 128zM64 288l160 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},HN={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},GN=HN,Cf={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},VN={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},XN={prefix:"fas",iconName:"eraser",icon:[576,512,[],"f12d","M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7L288 480l9.4 0L512 480c17.7 0 32-14.3 32-32s-14.3-32-32-32l-124.1 0L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416l-9.4 0-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"]},Rf={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},jN={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ld=jN,YN={prefix:"fas",iconName:"fill",icon:[512,512,[],"f575","M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3L122.7 136 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L168 90.7 86.6 9.4zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L429.1 234.3c3.1 3.1 3.1 8.2 0 11.3L386.7 288 67.5 288c1.4-5.4 4.2-10.4 8.4-14.6L168 181.3z"]},WN={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},qN={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},$N={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z"]},ZN={prefix:"fas",iconName:"magnifying-glass-plus",icon:[512,512,["search-plus"],"f00e","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"]},KN=ZN,QN={prefix:"fas",iconName:"magnifying-glass-minus",icon:[512,512,["search-minus"],"f010","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},JN=QN;var aE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N1=dt.createContext&&dt.createContext(aE),eO=["attr","size","title"];function tO(n,e){if(n==null)return{};var t=nO(n,e),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)a=l[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}function nO(n,e){if(n==null)return{};var t={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(e.indexOf(a)>=0)continue;t[a]=n[a]}return t}function hd(){return hd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},hd.apply(this,arguments)}function O1(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function pd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?O1(Object(t),!0).forEach(function(a){iO(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O1(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function iO(n,e,t){return e=aO(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function aO(n){var e=rO(n,"string");return typeof e=="symbol"?e:e+""}function rO(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rE(n){return n&&n.map((e,t)=>dt.createElement(e.tag,pd({key:t},e.attr),rE(e.child)))}function ul(n){return e=>dt.createElement(oO,hd({attr:pd({},n.attr)},e),rE(n.child))}function oO(n){var e=t=>{var{attr:a,size:o,title:l}=n,u=tO(n,eO),f=o||t.size||"1em",h;return t.className&&(h=t.className),n.className&&(h=(h?h+" ":"")+n.className),dt.createElement("svg",hd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:h,style:pd(pd({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&dt.createElement("title",null,l),n.children)};return N1!==void 0?dt.createElement(N1.Consumer,null,t=>e(t)):e(aE)}function sO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"},child:[]}]})(n)}function lO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5Z"},child:[]}]})(n)}function cO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM4 6V18H20V6H4Z"},child:[]}]})(n)}function uO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 16H22V22H16V20H8V22H2V16H4V8H2V2H8V4H16V2H22V8H20V16ZM18 16V8H16V6H8V8H6V16H8V18H16V16H18ZM4 4V6H6V4H4ZM4 18V20H6V18H4ZM18 4V6H20V4H18ZM18 18V20H20V18H18Z"},child:[]}]})(n)}function fO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM4.20568 19.0002H19.7941L11.9999 5.50017L4.20568 19.0002Z"},child:[]}]})(n)}function dO(n){return ul({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"},child:[]}]})(n)}const hO=Se.button`
  position: fixed;
  top: 180px;
  right: 330px; /* Always positioned at sidebar edge */
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  border: none;
  border-radius: 4px 0 0 4px;
  width: 35px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  z-index: 1050;
  transition: transform 0.3s ease; /* Transition transform instead of right position */
  transform: ${n=>n.$isSidebarOpen?"translateX(0)":"translateX(330px)"};
  border-left: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  
  &:hover {
    background-color: var(--bg-hover);
  }
  
  @media (max-width: 768px) {
    transform: ${n=>n.$isSidebarOpen?"translateX(0)":"translateX(280px)"};
    right: 280px; /* Fixed width for mobile */
  }
`,pO=Se.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin: 0.25rem 0;
`,mO=({isSidebarOpen:n,toggleSidebar:e})=>M.jsxs(hO,{onClick:e,$isSidebarOpen:n,"aria-label":n?"Close sidebar":"Open sidebar",children:[M.jsx(an,{icon:n?qN:WN,size:"sm"}),M.jsx(pO,{children:"TOOLS"})]}),gO=Se.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`,vO=Se.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  overflow-y: auto;
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`,_O=Se.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
`,xO=Se.h2`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
`,yO=Se.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  &:hover {
    color: var(--text-primary);
  }
`,bO=Se.div`
  padding: 1.5rem;
  color: var(--text-primary);

  a {
    color: var(--accent-color);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  p {
    margin: 0.75rem 0;
    line-height: 1.5;
    color: var(--text-primary);

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`,oE=({title:n,children:e,onClose:t})=>{const a=o=>{o.target===o.currentTarget&&t()};return dt.useEffect(()=>{const o=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[t]),M.jsx(gO,{onClick:a,children:M.jsxs(vO,{children:[M.jsxs(_O,{children:[M.jsx(xO,{children:n}),M.jsx(yO,{onClick:t,children:M.jsx(an,{icon:Ld})})]}),M.jsx(bO,{children:e})]})})},Df=Se.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-secondary);
    transition: .4s;
    border-radius: 20px;
    border: 1px solid var(--border-color);

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: var(--text-secondary);
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: var(--accent-color);
    border-color: var(--accent-color);

    &:before {
      transform: translateX(16px);
      background-color: var(--switch-handle);
    }
  }
`,SO=Se.aside`
  width: 330px;
  background-color: var(--bg-secondary);
  border-left: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 60px; /* Align with bottom of header */
  bottom: 0;
  z-index: 1000;
  height: calc(100vh - 60px); /* Subtract header height */
  transition: transform 0.3s ease;
  transform: ${n=>n.$isOpen?"translateX(0)":"translateX(100%)"};
  
  @media (max-width: 768px) {
    width: 280px; /* Match toggle button's right value */
  }
`;Se.h2`
  margin-bottom: 1rem; // Adjusted margin
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 1rem;
  margin-bottom: 0;
`;const Ns=Se.h3`
  margin-bottom: 0.75rem; // Adjusted margin
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Is=Se.div`
  border-top: 1px solid var(--border-color);
  padding: 1rem; // Add padding above section content

  // &:first-of-type {
  //   border-top: none; // Remove border for the first section (Color)
  //   padding-top: 0;
  // }
`,MO=Se.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 120px; // Show about 5 rows (24px per swatch + 8px gap)
  overflow-y: auto;
  padding-right: 8px; // Add padding for scrollbar

  // Custom scrollbar styling
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg-primary);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 4px;
    border: 2px solid var(--bg-primary);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-secondary);
  }
`,EO=Se.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background-color: ${n=>n.color};
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`,_n=Se.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* margin-bottom: 1rem; // Remove margin, grid handles gap */
  flex: 1; // Allow groups to grow and share space
`,pc=Se.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,mn=Se.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`,qn=Se.input`
  padding: 0.3rem 0.5rem; // Slightly smaller padding
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--input-text);
  width: 45px; // Reduced fixed width from 50px
  box-sizing: border-box;
  text-align: center; // Center the number
  font-size: 0.8rem; // Smaller font size

  // Hide the default number input arrows (optional, for cleaner look)
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield; // Firefox
`,Lf=Se.div`
  margin-bottom: 1rem;
  padding: 0.4rem 0;
  // background: var(--bg-secondary);
  // border: 1px solid var(--border-color);
  // border-radius: 8px;
`,Uf=Se.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${n=>n.$hasContent?"1rem":"0"};
`,Pf=Se.h3`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-primary);
`,Nf=Se.div`
  padding: 0;
  border-top: none; // Remove top border as it's handled by EffectHeader
  display: flex;
  flex-direction: column;
  gap: 1rem; // Add gap between control groups
`,Rm=Se.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem; // Row gap and column gap
`,ei=Se.div`
  display: flex;
  flex-direction: row; // Changed from column
  align-items: center; // Align items vertically
  gap: 0.25rem; // Reduced gap from 0.5rem
`,z1=Se.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,B1=Se.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,F1=Se.span`
  font-size: 0.7rem;
  color: var(--text-secondary);
  width: 25px;
`;Se.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;Se.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;const ai=Se.input`
  flex: 1; // Let the range input take up available space
  width: 100%; // Explicitly set width to fill container
  min-width: 0; // Allow shrinking below default minimum size
  height: 4px;
  -webkit-appearance: none;
  appearance: none; // Standard property
  background: var(--bg-tertiary);
  border-radius: 2px;
  outline: none;
  padding: 0; // Ensure no padding
  border: 0; // Ensure no border
  margin: 0; // Ensure no margin

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    /* border: none; // Already inherited? */
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    border: 0; // Explicitly set border for Firefox thumb
  }
`,TO=Se.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 0.5rem;
`,Os=Se.button`
  padding: 4px 6px;
  font-size: 0.75rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--button-text);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-hover);
    border-color: var(--border-accent);
  }
`,AO=Se.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
`,zs=Se.button`
  background: ${n=>n.$isActive?"var(--accent-color)":"var(--input-bg)"};
  color: ${n=>n.$isActive?"white":"var(--text-primary)"};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${n=>n.$isActive?"var(--accent-color)":"var(--bg-hover)"};
  }
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`,Qf=Se.input`
  width: 100%;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: 1px solid var(--border-color);
    border-radius: 4px;
  }
`,I1=Se.select`
  width: 100%;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--input-bg);
  color: var(--input-text);
  cursor: pointer;
  font-size: 12px;

  &:focus {
    outline: none;
    border-color: var(--border-accent);
  }

  option {
    background: var(--input-bg);
    color: var(--input-text);
  }
`,wO=Se(Is)`
  // Special styling for the tool section if needed
  // Example: remove top border if it's the very first section
  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`,k1=Se.div`
  display: flex;
  flex-wrap: wrap; // Allow wrapping if needed
  gap: 0.5rem;
  align-items: center; // Align items vertically
`;Se(Qf)`
  width: 32px; // Specific size for the tool picker
  height: 32px;
  flex-shrink: 0; // Prevent shrinking
`;const $a=Se.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--input-bg); /* Consistent bg */
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-hover);
    color: var(--text-primary);
  }

  &.active {
    background-color: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--text-accent);

    &:hover {
       background-color: var(--accent-hover);
    }
  }
`,CO=Se.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-secondary); /* Changed from tertiary for consistency */
  position: sticky;
  top: 0;
  z-index: 10;
`,H1=Se.button`
  flex: 1; /* Make buttons share space */
  padding: 0.75rem 1rem; /* Reduced padding */
  background: none;
  border: none;
  border-bottom: 3px solid ${n=>n.$isActive?"var(--accent-color)":"transparent"};
  color: ${n=>n.$isActive?"var(--text-primary)":"var(--text-secondary)"};
  font-size: 0.9rem; /* Slightly smaller font */
  font-weight: ${n=>n.$isActive?"600":"500"};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px; /* Align bottom border with container's border */

  &:hover {
    color: var(--text-primary);
    background: var(--bg-hover);
  }
`,G1=Se.div`
  /* Removed display property, handled by conditional rendering in JSX */
  /* Removed height/overflow, handled by SidebarContainer */
  padding-top: 1rem; /* Add some space below the sticky tabs */
`,RO=Se.div`
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.8rem;
  text-align: center;
  color: var(--text-secondary);
  a, button {
    color: var(--accent-color);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    padding: 0;
  }
`,DO=({colorHistory:n,onColorSelect:e,gridDimensions:t,setGridDimensions:a,pixelSize:o,setPixelSize:l,gridGap:u,setGridGap:f,hasDrawn:h,cornerRadius:p,setCornerRadius:m,glowEnabled:v,setGlowEnabled:_,glowSettings:x,setGlowSettings:S,bulbEnabled:T,setBulbEnabled:b,bulbSettings:y,setBulbSettings:O,innerShadowEnabled:w,setInnerShadowEnabled:E,activeTool:L,handleToolChange:B,pickerColor:R,handlePickerChange:V,handlePickerBlur:U,showGrid:D,handleToggleGrid:j,handleZoomOut:ne,handleZoomIn:Z,onUndo:ue,onRedo:re,canUndo:X,canRedo:J,mode:q,onModeChange:_e,rendererType:F,setRendererType:te,showPerformanceMonitor:xe,setShowPerformanceMonitor:Te,pixelShape:K,setPixelShape:$,onShowCustomShapeModal:ce,backgroundColor:he,setBackgroundColor:Ae,sidebarVisible:De,onSidebarToggle:Ve})=>{const{width:it,height:at}=t,[et,N]=H.useState(it.toString()),[Le,Oe]=H.useState(at.toString()),[He,je]=H.useState(o.toString()),[nt,Pe]=H.useState(u.toString()),k=H.useRef(null),C=H.useRef(null),ae=H.useRef(null),be=H.useRef(null);H.useEffect(()=>{N(it.toString())},[it]),H.useEffect(()=>{Oe(at.toString())},[at]),H.useEffect(()=>{je(o.toString())},[o]),H.useEffect(()=>{Pe(u.toString())},[u]);const we=(I,ie,Me=300)=>{clearTimeout(I.current),I.current=setTimeout(ie,Me)},me=I=>{N(I.target.value)},Fe=I=>{Oe(I.target.value)},Ne=I=>{const ie=I.target.value;je(ie),we(ae,()=>{const Me=parseInt(ie);!isNaN(Me)&&Me>=1&&Me!==o&&l(Me)})},ke=I=>{const ie=I.target.value;Pe(ie),we(be,()=>{const Me=parseInt(ie);!isNaN(Me)&&Me>=0&&Me!==u&&f(Me)})},pt=()=>{clearTimeout(k.current);const I=parseInt(et);!isNaN(I)&&I>=1?I!==t.width&&a(I,t.height):N(t.width.toString())},Be=()=>{clearTimeout(C.current);const I=parseInt(Le);!isNaN(I)&&I>=1?I!==t.height&&a(t.width,I):Oe(t.height.toString())},Ye=(I,ie)=>{m({[I]:ie})},rt=I=>{const ie=p.enabled;switch(I){case"none":m({enabled:ie,topLeft:0,topRight:0,bottomLeft:0,bottomRight:0});break;case"circle":m({enabled:ie,topLeft:50,topRight:50,bottomLeft:50,bottomRight:50});break;case"top":m({enabled:ie,topLeft:50,topRight:50,bottomLeft:0,bottomRight:0});break;case"bottom":m({enabled:ie,topLeft:0,topRight:0,bottomLeft:50,bottomRight:50});break;case"left":m({enabled:ie,topLeft:50,topRight:0,bottomLeft:50,bottomRight:0});break;case"right":m({enabled:ie,topLeft:0,topRight:50,bottomLeft:0,bottomRight:50});break}},ct=I=>{_(I.target.checked)},Xe=(I,ie)=>{const Me={...x,[I]:ie};console.log("[Sidebar] handleGlowSettingChange:",I,ie,Me),S(Me)},ht=I=>{b(I)},st=(I,ie)=>{const Me={...y,[I]:ie};console.log("[Sidebar] handleBulbSettingChange:",I,ie,Me),O(Me)},Bt=()=>{Ve(!De)};H.useEffect(()=>{const I=()=>{};return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);const[ee,qe]=H.useState(!1);return M.jsxs(M.Fragment,{children:[M.jsx(mO,{isSidebarOpen:De,toggleSidebar:Bt}),M.jsxs(SO,{$isOpen:De,children:[M.jsxs(CO,{children:[M.jsx(H1,{$isActive:q==="edit",onClick:()=>_e("edit"),children:"Edit"}),M.jsx(H1,{$isActive:q==="preview",onClick:()=>_e("preview"),children:"Preview"})]}),q==="edit"&&M.jsxs(G1,{children:[" ",M.jsxs(wO,{children:[M.jsx(Ns,{children:"Tools"}),M.jsxs(k1,{style:{marginBottom:"0.75rem"},children:[M.jsx($a,{className:L==="pencil"?"active":"",onClick:()=>B("pencil"),title:"Pencil (P)",children:M.jsx(an,{icon:LN})}),M.jsx($a,{className:L==="eraser"?"active":"",onClick:()=>B("eraser"),title:"Eraser (E)",children:M.jsx(an,{icon:XN})}),M.jsx($a,{className:L==="fill"?"active":"",onClick:()=>B("fill"),title:"Fill (F)",children:M.jsx(an,{icon:YN})}),M.jsx($a,{className:L==="select"?"active":"",onClick:()=>B("select"),title:"Select (M)",children:M.jsx(an,{icon:NN})}),M.jsx($a,{onClick:j,className:D?"active":"",title:D?"Hide Grid":"Show Grid",children:M.jsx(an,{icon:D?kN:IN})})]}),M.jsxs(k1,{children:[M.jsx($a,{onClick:()=>{console.log("ZoomOut button clicked"),ne()},title:"Zoom Out",children:M.jsx(an,{icon:JN})}),M.jsx($a,{onClick:()=>{console.log("ZoomIn button clicked"),Z()},title:"Zoom In",children:M.jsx(an,{icon:KN})}),M.jsx($a,{onClick:ue,disabled:!X,title:"Undo",children:M.jsx(an,{icon:GN})}),M.jsx($a,{onClick:re,disabled:!J,title:"Redo",children:M.jsx(an,{icon:FN})})]})]}),M.jsxs(Is,{children:[" ",M.jsx(Ns,{children:"Color"}),M.jsxs(pc,{children:[M.jsxs(_n,{children:[M.jsx(mn,{children:"Paint"}),M.jsxs(z1,{children:[M.jsx(Qf,{type:"color",value:typeof R=="string"?R.replace(/rgba?\([^)]+\)/,I=>Wy(I)):"#ff0000",onChange:I=>{const ie=I.target.value,Me=Tc(ie,typeof R=="string"&&R.includes("rgba")?gs(R):1);V({target:{value:Me}})},onBlur:U,title:"Select Paint Color"}),M.jsxs(B1,{children:[M.jsxs(F1,{children:[Math.round(typeof R=="string"&&R.includes("rgba")?gs(R)*100:100),"%"]}),M.jsx(ai,{type:"range",min:"0",max:"1",step:"0.01",value:typeof R=="string"&&R.includes("rgba")?gs(R):1,onChange:I=>{const ie=parseFloat(I.target.value),Ie=qy(R,ie);V({target:{value:Ie}})}})]})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Background"}),M.jsxs(z1,{children:[M.jsx(Qf,{type:"color",value:he.replace(/rgba?\([^)]+\)/,I=>Wy(I)),onChange:I=>{const ie=I.target.value,Me=Tc(ie,he.includes("rgba")?gs(he):1);Ae(Me)},title:"Select Background Color"}),M.jsxs(B1,{children:[M.jsxs(F1,{children:[Math.round(he.includes("rgba")?gs(he)*100:100),"%"]}),M.jsx(ai,{type:"range",min:"0",max:"1",step:"0.01",value:he.includes("rgba")?gs(he):1,onChange:I=>{const ie=parseFloat(I.target.value),Ie=qy(he,ie);Ae(Ie)}})]})]})]})]}),M.jsx(MO,{children:n.map((I,ie)=>M.jsx(EO,{color:I,onClick:()=>e(I),title:I},`${ie}-${I}`))})]}),M.jsxs(Is,{children:[" ",M.jsx(Ns,{children:"Grid Settings"}),M.jsxs(pc,{children:[M.jsxs(_n,{children:[M.jsx(mn,{htmlFor:"gridWidth",children:"Width (px)"}),M.jsx(qn,{type:"number",id:"gridWidth",value:et,onChange:me,onBlur:pt,min:"1",step:"1"})]}),M.jsxs(_n,{children:[M.jsx(mn,{htmlFor:"gridHeight",children:"Height (px)"}),M.jsx(qn,{type:"number",id:"gridHeight",value:Le,onChange:Fe,onBlur:Be,min:"1",step:"1"})]})]}),M.jsxs(pc,{children:[M.jsxs(_n,{children:[M.jsx(mn,{htmlFor:"pixelSize",children:"Pixel Size (px)"}),M.jsx(qn,{type:"number",id:"pixelSize",value:He,onChange:Ne,min:"1",step:"1"})]}),M.jsxs(_n,{children:[M.jsx(mn,{htmlFor:"gridGap",children:"Grid Gap (px)"}),M.jsx(qn,{type:"number",id:"gridGap",value:nt,onChange:ke,min:"0",step:"1"})]})]})]}),M.jsxs(Is,{children:[" ",M.jsx(Ns,{children:"Pixel Effects"}),M.jsxs(Lf,{children:[M.jsx(Uf,{$hasContent:!0,children:M.jsx(Pf,{children:"Pixel Shape"})}),M.jsx(Nf,{children:M.jsxs(AO,{children:[M.jsx(zs,{$isActive:K==="rectangle",onClick:()=>$("rectangle"),title:"Rectangle",children:M.jsx(cO,{})}),M.jsx(zs,{$isActive:K==="circle",onClick:()=>$("circle"),title:"Circle",children:M.jsx(sO,{})}),M.jsx(zs,{$isActive:K==="diamond",onClick:()=>$("diamond"),title:"Diamond",children:M.jsx(uO,{})}),M.jsx(zs,{$isActive:K==="triangle",onClick:()=>$("triangle"),title:"Triangle",children:M.jsx(fO,{})}),M.jsx(zs,{$isActive:K==="hexagon",onClick:()=>$("hexagon"),title:"Hexagon",children:M.jsx(lO,{})}),M.jsxs(zs,{$isActive:K==="custom",onClick:ce,title:"Custom Shape",style:{gridColumn:"1 / -1",marginTop:"0.5rem"},children:[M.jsx(dO,{}),M.jsx("span",{style:{marginLeft:"0.5rem"},children:"Custom"})]})]})})]}),M.jsxs(Lf,{children:[M.jsxs(Uf,{$hasContent:p.enabled,children:[M.jsx(Pf,{children:"Corner Radius"}),M.jsxs(Df,{children:[M.jsx("input",{type:"checkbox",checked:p.enabled,onChange:I=>m({enabled:I.target.checked})}),M.jsx("span",{})]})]}),p.enabled&&M.jsxs(Nf,{children:[M.jsxs(Rm,{children:[M.jsxs(_n,{children:[M.jsx(mn,{children:"Top Left (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:p.topLeft,onChange:I=>Ye("topLeft",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:p.topLeft,onChange:I=>Ye("topLeft",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Top Right (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:p.topRight,onChange:I=>Ye("topRight",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:p.topRight,onChange:I=>Ye("topRight",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Bottom Left (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:p.bottomLeft,onChange:I=>Ye("bottomLeft",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:p.bottomLeft,onChange:I=>Ye("bottomLeft",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Bottom Right (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:p.bottomRight,onChange:I=>Ye("bottomRight",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:p.bottomRight,onChange:I=>Ye("bottomRight",parseInt(I.target.value))})]})]})]}),M.jsxs(TO,{children:[M.jsx(Os,{onClick:()=>rt("none"),children:"None"}),M.jsx(Os,{onClick:()=>rt("circle"),children:"Circle"}),M.jsx(Os,{onClick:()=>rt("top"),children:"Top"}),M.jsx(Os,{onClick:()=>rt("bottom"),children:"Bottom"}),M.jsx(Os,{onClick:()=>rt("left"),children:"Left"}),M.jsx(Os,{onClick:()=>rt("right"),children:"Right"})]})]})]}),M.jsxs(Lf,{children:[M.jsxs(Uf,{$hasContent:v,children:[M.jsx(Pf,{children:"Glow Effect"}),M.jsxs(Df,{children:[M.jsx("input",{type:"checkbox",checked:v,onChange:ct}),M.jsx("span",{})]})]}),v&&M.jsx(Nf,{children:M.jsxs(Rm,{children:[M.jsxs(_n,{children:[M.jsx(mn,{children:"Opacity (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:x.opacity,onChange:I=>Xe("opacity",Number(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:x.opacity,onChange:I=>Xe("opacity",Number(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Blend Mode"}),M.jsx(ei,{children:M.jsxs(I1,{value:x.blendMode||"lighter",onChange:I=>Xe("blendMode",I.target.value),style:{flex:1},children:[M.jsx("option",{value:"source-over",children:"Normal"}),M.jsx("option",{value:"lighter",children:"Lighter"}),M.jsx("option",{value:"screen",children:"Screen"}),M.jsx("option",{value:"color-dodge",children:"Color Dodge"}),M.jsx("option",{value:"add",children:"Add"}),M.jsx("option",{value:"multiply",children:"Multiply"}),M.jsx("option",{value:"color-burn",children:"Color Burn"}),M.jsx("option",{value:"overlay",children:"Overlay"}),M.jsx("option",{value:"soft-light",children:"Soft Light"}),M.jsx("option",{value:"hard-light",children:"Hard Light"}),M.jsx("option",{value:"difference",children:"Difference"}),M.jsx("option",{value:"exclusion",children:"Exclusion"}),M.jsx("option",{value:"hue",children:"Hue"}),M.jsx("option",{value:"saturation",children:"Saturation"}),M.jsx("option",{value:"color",children:"Color"}),M.jsx("option",{value:"luminosity",children:"Luminosity"})]})})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Blur (px)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"50",value:x.size,onChange:I=>Xe("size",Number(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"50",value:x.size,onChange:I=>Xe("size",Number(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Spread (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:x.spread,onChange:I=>Xe("spread",Number(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:x.spread,onChange:I=>Xe("spread",Number(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Offset X (px)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"-50",max:"50",value:x.offsetX,onChange:I=>Xe("offsetX",Number(I.target.value))}),M.jsx(qn,{type:"number",min:"-50",max:"50",value:x.offsetX,onChange:I=>Xe("offsetX",Number(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Offset Y (px)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"-50",max:"50",value:x.offsetY,onChange:I=>Xe("offsetY",Number(I.target.value))}),M.jsx(qn,{type:"number",min:"-50",max:"50",value:x.offsetY,onChange:I=>Xe("offsetY",Number(I.target.value))})]})]})]})})]}),M.jsxs(Lf,{children:[M.jsxs(Uf,{$hasContent:T,children:[M.jsx(Pf,{children:"Bulb Effect"}),M.jsxs(Df,{children:[M.jsx("input",{type:"checkbox",checked:T,onChange:I=>ht(I.target.checked)}),M.jsx("span",{})]})]}),T&&M.jsx(Nf,{children:M.jsxs(Rm,{children:[M.jsxs(_n,{children:[M.jsx(mn,{children:"Intensity (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:y.intensity,onChange:I=>st("intensity",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:y.intensity,onChange:I=>st("intensity",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Radius (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"200",value:y.radius,onChange:I=>st("radius",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"200",value:y.radius,onChange:I=>st("radius",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Position X (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:y.positionX,onChange:I=>st("positionX",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:y.positionX,onChange:I=>st("positionX",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Position Y (%)"}),M.jsxs(ei,{children:[M.jsx(ai,{type:"range",min:"0",max:"100",value:y.positionY,onChange:I=>st("positionY",parseInt(I.target.value))}),M.jsx(qn,{type:"number",min:"0",max:"100",value:y.positionY,onChange:I=>st("positionY",parseInt(I.target.value))})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Color"}),M.jsxs(ei,{children:[" ",M.jsx(Qf,{type:"color",value:y.color,onChange:I=>st("color",I.target.value),style:{flex:1}})]})]}),M.jsxs(_n,{children:[M.jsx(mn,{children:"Blend Mode"}),M.jsxs(ei,{children:[" ",M.jsxs(I1,{value:y.blendMode,onChange:I=>st("blendMode",I.target.value),style:{flex:1},children:[M.jsx("option",{value:"source-over",children:"Normal"}),M.jsx("option",{value:"lighter",children:"Lighter"}),M.jsx("option",{value:"screen",children:"Screen"}),M.jsx("option",{value:"color-dodge",children:"Color Dodge"}),M.jsx("option",{value:"add",children:"Add"}),M.jsx("option",{value:"multiply",children:"Multiply"}),M.jsx("option",{value:"color-burn",children:"Color Burn"}),M.jsx("option",{value:"overlay",children:"Overlay"}),M.jsx("option",{value:"soft-light",children:"Soft Light"}),M.jsx("option",{value:"hard-light",children:"Hard Light"}),M.jsx("option",{value:"difference",children:"Difference"}),M.jsx("option",{value:"exclusion",children:"Exclusion"}),M.jsx("option",{value:"hue",children:"Hue"}),M.jsx("option",{value:"saturation",children:"Saturation"}),M.jsx("option",{value:"color",children:"Color"}),M.jsx("option",{value:"luminosity",children:"Luminosity"})]})]})]})]})})]})]})]}),q==="preview"&&M.jsx(G1,{children:M.jsxs(Is,{children:[M.jsx(Ns,{children:"Preview Mode"}),M.jsx("div",{style:{padding:"12px",textAlign:"center",color:"var(--text-secondary)"},children:"Preview tools coming soon. Edit controls are disabled in this mode."})]})}),M.jsxs(Is,{children:[M.jsx(Ns,{children:"Renderer"}),M.jsxs(_n,{children:[M.jsxs(pc,{children:[M.jsx(mn,{children:"Renderer Type"}),M.jsxs("select",{value:F,onChange:I=>te(I.target.value),style:{padding:"0.3rem 0.5rem",backgroundColor:"var(--input-bg)",border:"1px solid var(--border-color)",borderRadius:"4px",color:"var(--input-text)",fontSize:"0.8rem",cursor:"pointer"},children:[M.jsx("option",{value:"canvas",children:"Canvas"}),M.jsx("option",{value:"svg",children:"SVG"}),M.jsx("option",{value:"webgl",children:"WebGL"})]})]}),M.jsxs(pc,{children:[M.jsx(mn,{children:"Performance Monitor"}),M.jsxs(Df,{children:[M.jsx("input",{type:"checkbox",checked:xe,onChange:()=>Te(!xe)}),M.jsx("span",{})]})]})]})]}),M.jsxs(RO,{children:["© Copyright ",M.jsx("a",{href:"https://reganvause.com",target:"_blank",rel:"noopener noreferrer",children:"Regan Vause"})," | ",M.jsx("button",{onClick:()=>qe(!0),children:"About PixelPop"})]})]}),ee&&M.jsxs(oE,{title:"About PixelPop",onClose:()=>qe(!1),children:[M.jsx("p",{children:"PixelPop is a lightweight pixel art editor built for fun, creativity, and simplicity. Designed for designers, artists, and kids of all ages, it runs right in your browser with full touch support and easy export options."}),M.jsxs("p",{children:["Crafted with care by ",M.jsx("a",{href:"https://reganvause.com",target:"_blank",rel:"noopener noreferrer",children:"Regan Vause"})," — designer, maker, tinkerer."]}),M.jsx("h3",{children:"Credits"}),M.jsx("p",{children:"Built with Cursor."}),M.jsxs("p",{children:["Open source on ",M.jsx("a",{href:"https://github.com/peepshow/pixel-pop",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]})]})]})},LO=Se.div`
  position: absolute;
  /* These positioning values assume the container is placed directly */
  /* relative to the element holding the CanvasRenderer. */
  /* We might adjust this in App.jsx later */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none; /* Allow clicks to pass through the container */
  z-index: 500; 
`,Ud=Se.div`
  position: absolute;
  display: flex;
  gap: 4px;
  pointer-events: all; /* Enable clicks on the buttons themselves */
  background-color: rgba(var(--rgb-bg-secondary), 0.8); 
  padding: 4px;
  border-radius: 4px;
  border: 1px solid rgba(var(--rgb-border-color), 0.5);
  backdrop-filter: blur(2px);
  /* Remove general centering transform */
`,UO=Se(Ud)`
  top: 5px; /* Small offset from the top edge */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  flex-direction: row;
`,PO=Se(Ud)`
  bottom: 5px; /* Small offset from the bottom edge */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  flex-direction: row;
`,NO=Se(Ud)`
  top: 50%;
  left: 5px; /* Small offset from the left edge */
  transform: translateY(-50%); /* Center vertically */
  flex-direction: column;
`,OO=Se(Ud)`
  top: 50%;
  right: 5px; /* Small offset from the right edge */
  transform: translateY(-50%); /* Center vertically */
  flex-direction: column;
`,zr=Se.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--accent-color);
    color: var(--bg-primary);
    border-color: var(--accent-color);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    cursor: not-allowed;
    opacity: ${n=>n.disabledBecauseDrawn?.6:.8};
  }
`,zO=({addRowTop:n,removeRowTop:e,addRowBottom:t,removeRowBottom:a,addColLeft:o,removeColLeft:l,addColRight:u,removeColRight:f,hasDrawn:h,gridWidth:p,gridHeight:m})=>{const v=m<=1,_=p<=1,x="Cannot remove the last row/column";return M.jsxs(LO,{children:[M.jsxs(UO,{children:[M.jsx(zr,{onClick:n,title:"Add Row Above",children:M.jsx(an,{icon:Rf})}),M.jsx(zr,{onClick:e,disabled:v,title:v?x:"Remove Top Row",children:M.jsx(an,{icon:Cf})})]}),M.jsxs(PO,{children:[M.jsx(zr,{onClick:t,title:"Add Row Below",children:M.jsx(an,{icon:Rf})}),M.jsx(zr,{onClick:a,disabled:v,title:v?x:"Remove Bottom Row",children:M.jsx(an,{icon:Cf})})]}),M.jsxs(NO,{children:[M.jsx(zr,{onClick:o,title:"Add Column Left",children:M.jsx(an,{icon:Rf})}),M.jsx(zr,{onClick:l,disabled:_,title:_?x:"Remove Left Column",children:M.jsx(an,{icon:Cf})})]}),M.jsxs(OO,{children:[M.jsx(zr,{onClick:u,title:"Add Column Right",children:M.jsx(an,{icon:Rf})}),M.jsx(zr,{onClick:f,disabled:_,title:_?x:"Remove Right Column",children:M.jsx(an,{icon:Cf})})]})]})},BO="/pixel-pop/assets/PixelPop_logo-B47MID8i.svg",FO=Se.div`
  display: none; /* Hidden by default, shown in media query */
  position: relative;
  
  @media (max-width: 768px) {
    display: block;
  }
`,IO=Se.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--accent-color);
  }
`,kO=Se.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.5rem;
  z-index: 1200;
  min-width: 200px;
  display: ${n=>n.$isOpen?"block":"none"};
  margin-top: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,HO=({children:n})=>{const[e,t]=H.useState(!1),a=H.useRef(null),o=()=>{t(!e)};return H.useEffect(()=>{const l=u=>{a.current&&!a.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),M.jsxs(FO,{ref:a,children:[M.jsx(IO,{onClick:o,children:M.jsx(an,{icon:e?Ld:UN})}),e&&M.jsx(kO,{$isOpen:e,className:"mobile-menu",children:n})]})},GO=Se.header`
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* Fixed height for header */
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100; /* Ensure header is above sidebar */
`,VO=Se.input`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  width: 300px; /* Fixed width */
  text-align: center;
  margin: 0 auto; /* Center the input */
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
  
  @media (max-width: 768px) {
    width: 150px; /* Smaller width on mobile */
    font-size: 0.9rem;
    padding: 0.4rem 0.5rem;
  }
`,Dm=Se.div`
  flex: 1; /* Allows sections to take space */
  display: flex;
  align-items: center; /* Vertically center items like Title and NavMenu */
  justify-content: center; /* Center filename input */
  &:first-child {
    justify-content: flex-start; /* Align Title to the left */
  }
  &:last-child {
    justify-content: flex-end; /* Align NavMenu to the right */
  }
`,XO=Se.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,jO=Se.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`,YO=Se.img`
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 3px var(--accent-color));
  }
  
  @media (max-width: 768px) {
    height: 40px; /* Slightly smaller logo on mobile */
  }
`,WO=Se.div`
  @media (max-width: 768px) {
    display: none; /* Hide desktop nav on mobile */
  }
`,sE=({filename:n,onFilenameChange:e,titleElement:t,navMenuElement:a})=>M.jsxs(GO,{children:[M.jsx(Dm,{children:M.jsx(XO,{children:M.jsx(jO,{href:"/",title:"PixelPop Home",children:M.jsx(YO,{src:BO,alt:"PixelPop Logo"})})})}),M.jsx(Dm,{children:M.jsx(VO,{type:"text",value:n,onChange:o=>e(o.target.value),placeholder:"Enter filename"})}),M.jsxs(Dm,{children:[M.jsx(WO,{children:a}),M.jsx(HO,{children:a})]})]});sE.propTypes={filename:Tt.string.isRequired,onFilenameChange:Tt.func.isRequired,titleElement:Tt.node.isRequired,navMenuElement:Tt.node.isRequired};const qO=Se.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  /* Inside mobile menu, display buttons vertically */
  .mobile-menu & {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`,Of=Se.button`
  background: none;
  border: none;
  color: var(--button-text);
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-hover);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Full width in mobile menu */
  .mobile-menu & {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
    padding: 0.75rem;
  }
`,V1=Se.input`
  display: none;
`,$O=({onImportImage:n,onSaveProject:e,onLoadProject:t,onExport:a})=>{const o=H.useRef(null),l=H.useRef(null),u=()=>{var m;(m=o.current)==null||m.click()},f=()=>{var m;(m=l.current)==null||m.click()},h=m=>{var _;const v=(_=m.target.files)==null?void 0:_[0];v&&n(v)},p=m=>{var _;const v=(_=m.target.files)==null?void 0:_[0];v&&t(v),m.target.value=""};return M.jsxs(qO,{children:[M.jsx(V1,{ref:o,type:"file",accept:"image/*",onChange:h}),M.jsx(V1,{ref:l,type:"file",accept:".json",onChange:p}),M.jsxs(Of,{onClick:u,children:[M.jsx(an,{icon:zN}),"Import Image"]}),M.jsxs(Of,{onClick:f,children:[M.jsx(an,{icon:ON}),"Load Project"]}),M.jsxs(Of,{onClick:e,children:[M.jsx(an,{icon:$N}),"Save Project"]}),M.jsxs(Of,{onClick:a,children:[M.jsx(an,{icon:VN}),"Export"]})]})},md={x:0,y:0,width:0,height:0,unit:"px"},Bs=(n,e,t)=>Math.min(Math.max(n,e),t),ZO=(...n)=>n.filter(e=>e&&typeof e=="string").join(" "),X1=(n,e)=>n===e||n.width===e.width&&n.height===e.height&&n.x===e.x&&n.y===e.y&&n.unit===e.unit;function KO(n,e,t,a){const o=xa(n,t,a);return n.width&&(o.height=o.width/e),n.height&&(o.width=o.height*e),o.y+o.height>a&&(o.height=a-o.y,o.width=o.height*e),o.x+o.width>t&&(o.width=t-o.x,o.height=o.width/e),n.unit==="%"?Ir(o,t,a):o}function QO(n,e,t){const a=xa(n,e,t);return a.x=(e-a.width)/2,a.y=(t-a.height)/2,n.unit==="%"?Ir(a,e,t):a}function Ir(n,e,t){return n.unit==="%"?{...md,...n,unit:"%"}:{unit:"%",x:n.x?n.x/e*100:0,y:n.y?n.y/t*100:0,width:n.width?n.width/e*100:0,height:n.height?n.height/t*100:0}}function xa(n,e,t){return n.unit?n.unit==="px"?{...md,...n,unit:"px"}:{unit:"px",x:n.x?n.x*e/100:0,y:n.y?n.y*t/100:0,width:n.width?n.width*e/100:0,height:n.height?n.height*t/100:0}:{...md,...n,unit:"px"}}function j1(n,e,t,a,o,l=0,u=0,f=a,h=o){const p={...n};let m=Math.min(l,a),v=Math.min(u,o),_=Math.min(f,a),x=Math.min(h,o);e&&(e>1?(m=u?u*e:m,v=m/e,_=f*e):(v=l?l/e:v,m=v*e,x=h/e)),p.y<0&&(p.height=Math.max(p.height+p.y,v),p.y=0),p.x<0&&(p.width=Math.max(p.width+p.x,m),p.x=0);const S=a-(p.x+p.width);S<0&&(p.x=Math.min(p.x,a-m),p.width+=S);const T=o-(p.y+p.height);if(T<0&&(p.y=Math.min(p.y,o-v),p.height+=T),p.width<m&&((t==="sw"||t=="nw")&&(p.x-=m-p.width),p.width=m),p.height<v&&((t==="nw"||t=="ne")&&(p.y-=v-p.height),p.height=v),p.width>_&&((t==="sw"||t=="nw")&&(p.x-=_-p.width),p.width=_),p.height>x&&((t==="nw"||t=="ne")&&(p.y-=x-p.height),p.height=x),e){const b=p.width/p.height;if(b<e){const y=Math.max(p.width/e,v);(t==="nw"||t=="ne")&&(p.y-=y-p.height),p.height=y}else if(b>e){const y=Math.max(p.height*e,m);(t==="sw"||t=="nw")&&(p.x-=y-p.width),p.width=y}}return p}function JO(n,e,t,a){const o={...n};return e==="ArrowLeft"?a==="nw"?(o.x-=t,o.y-=t,o.width+=t,o.height+=t):a==="w"?(o.x-=t,o.width+=t):a==="sw"?(o.x-=t,o.width+=t,o.height+=t):a==="ne"?(o.y+=t,o.width-=t,o.height-=t):a==="e"?o.width-=t:a==="se"&&(o.width-=t,o.height-=t):e==="ArrowRight"&&(a==="nw"?(o.x+=t,o.y+=t,o.width-=t,o.height-=t):a==="w"?(o.x+=t,o.width-=t):a==="sw"?(o.x+=t,o.width-=t,o.height-=t):a==="ne"?(o.y-=t,o.width+=t,o.height+=t):a==="e"?o.width+=t:a==="se"&&(o.width+=t,o.height+=t)),e==="ArrowUp"?a==="nw"?(o.x-=t,o.y-=t,o.width+=t,o.height+=t):a==="n"?(o.y-=t,o.height+=t):a==="ne"?(o.y-=t,o.width+=t,o.height+=t):a==="sw"?(o.x+=t,o.width-=t,o.height-=t):a==="s"?o.height-=t:a==="se"&&(o.width-=t,o.height-=t):e==="ArrowDown"&&(a==="nw"?(o.x+=t,o.y+=t,o.width-=t,o.height-=t):a==="n"?(o.y+=t,o.height-=t):a==="ne"?(o.y+=t,o.width-=t,o.height-=t):a==="sw"?(o.x-=t,o.width+=t,o.height+=t):a==="s"?o.height+=t:a==="se"&&(o.width+=t,o.height+=t)),o}const Fs={capture:!0,passive:!1};let e5=0;const Fr=class ea extends H.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=H.createRef(),this.mediaRef=H.createRef(),this.initChangeCalled=!1,this.instanceId=`rc-${e5++}`,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{const{crop:t,disabled:a}=this.props,o=this.getBox();if(!t)return;const l=xa(t,o.width,o.height);if(a)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const u=e.target.dataset.ord,f=!!u;let h=e.clientX,p=e.clientY,m=l.x,v=l.y;if(u){const _=e.clientX-o.x,x=e.clientY-o.y;let S=0,T=0;u==="ne"||u=="e"?(S=_-(l.x+l.width),T=x-l.y,m=l.x,v=l.y+l.height):u==="se"||u==="s"?(S=_-(l.x+l.width),T=x-(l.y+l.height),m=l.x,v=l.y):u==="sw"||u=="w"?(S=_-l.x,T=x-(l.y+l.height),m=l.x+l.width,v=l.y):(u==="nw"||u=="n")&&(S=_-l.x,T=x-l.y,m=l.x+l.width,v=l.y+l.height),h=m+o.x+S,p=v+o.y+T}this.evData={startClientX:h,startClientY:p,startCropX:m,startCropY:v,clientX:e.clientX,clientY:e.clientY,isResize:f,ord:u},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{const{crop:t,disabled:a,locked:o,keepSelection:l,onChange:u}=this.props,f=this.getBox();if(a||o||l&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const h=e.clientX-f.x,p=e.clientY-f.y,m={unit:"px",x:h,y:p,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:h,startCropY:p,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,u(xa(m,f.width,f.height),Ir(m,f.width,f.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{const{crop:t,disabled:a,onChange:o,onDragStart:l}=this.props,u=this.getBox();if(a||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,l&&l(e));const{evData:f}=this;f.clientX=e.clientX,f.clientY=e.clientY;let h;f.isResize?h=this.resizeCrop():h=this.dragCrop(),X1(t,h)||o(xa(h,u.width,u.height),Ir(h,u.width,u.height))},this.onComponentKeyDown=e=>{const{crop:t,disabled:a,onChange:o,onComplete:l}=this.props;if(a)return;const u=e.key;let f=!1;if(!t)return;const h=this.getBox(),p=this.makePixelCrop(h),m=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?ea.nudgeStepLarge:e.shiftKey?ea.nudgeStepMedium:ea.nudgeStep;if(u==="ArrowLeft"?(p.x-=m,f=!0):u==="ArrowRight"?(p.x+=m,f=!0):u==="ArrowUp"?(p.y-=m,f=!0):u==="ArrowDown"&&(p.y+=m,f=!0),f){e.cancelable&&e.preventDefault(),p.x=Bs(p.x,0,h.width-p.width),p.y=Bs(p.y,0,h.height-p.height);const v=xa(p,h.width,h.height),_=Ir(p,h.width,h.height);o(v,_),l&&l(v,_)}},this.onHandlerKeyDown=(e,t)=>{const{aspect:a=0,crop:o,disabled:l,minWidth:u=0,minHeight:f=0,maxWidth:h,maxHeight:p,onChange:m,onComplete:v}=this.props,_=this.getBox();if(l||!o)return;if(e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="ArrowLeft"||e.key==="ArrowRight")e.stopPropagation(),e.preventDefault();else return;const x=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?ea.nudgeStepLarge:e.shiftKey?ea.nudgeStepMedium:ea.nudgeStep,S=xa(o,_.width,_.height),T=JO(S,e.key,x,t),b=j1(T,a,t,_.width,_.height,u,f,h,p);if(!X1(o,b)){const y=Ir(b,_.width,_.height);m(b,y),v&&v(b,y)}},this.onDocPointerDone=e=>{const{crop:t,disabled:a,onComplete:o,onDragEnd:l}=this.props,u=this.getBox();this.unbindDocMove(),!(a||!t)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,l&&l(e),o&&o(xa(t,u.width,u.height),Ir(t,u.width,u.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;(e=this.componentRef.current)==null||e.scrollTo(0,0)}}get document(){return document}getBox(){const e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};const{x:t,y:a,width:o,height:l}=e.getBoundingClientRect();return{x:t,y:a,width:o,height:l}}componentDidUpdate(e){const{crop:t,onComplete:a}=this.props;if(a&&!e.crop&&t){const{width:o,height:l}=this.getBox();o&&l&&a(xa(t,o,l),Ir(t,o,l))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,Fs),this.document.addEventListener("pointerup",this.onDocPointerDone,Fs),this.document.addEventListener("pointercancel",this.onDocPointerDone,Fs),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,Fs),this.document.removeEventListener("pointerup",this.onDocPointerDone,Fs),this.document.removeEventListener("pointercancel",this.onDocPointerDone,Fs),this.docMoveBound=!1)}getCropStyle(){const{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){const{evData:e}=this,t=this.getBox(),a=this.makePixelCrop(t),o=e.clientX-e.startClientX,l=e.clientY-e.startClientY;return a.x=Bs(e.startCropX+o,0,t.width-a.width),a.y=Bs(e.startCropY+l,0,t.height-a.height),a}getPointRegion(e,t,a,o){const{evData:l}=this,u=l.clientX-e.x,f=l.clientY-e.y;let h;o&&t?h=t==="nw"||t==="n"||t==="ne":h=f<l.startCropY;let p;return a&&t?p=t==="nw"||t==="w"||t==="sw":p=u<l.startCropX,p?h?"nw":"sw":h?"ne":"se"}resolveMinDimensions(e,t,a=0,o=0){const l=Math.min(a,e.width),u=Math.min(o,e.height);return!t||!l&&!u?[l,u]:t>1?l?[l,l/t]:[u*t,u]:u?[u*t,u]:[l,l/t]}resizeCrop(){const{evData:e}=this,{aspect:t=0,maxWidth:a,maxHeight:o}=this.props,l=this.getBox(),[u,f]=this.resolveMinDimensions(l,t,this.props.minWidth,this.props.minHeight);let h=this.makePixelCrop(l);const p=this.getPointRegion(l,e.ord,u,f),m=e.ord||p;let v=e.clientX-e.startClientX,_=e.clientY-e.startClientY;(u&&m==="nw"||m==="w"||m==="sw")&&(v=Math.min(v,-u)),(f&&m==="nw"||m==="n"||m==="ne")&&(_=Math.min(_,-f));const x={unit:"px",x:0,y:0,width:0,height:0};p==="ne"?(x.x=e.startCropX,x.width=v,t?(x.height=x.width/t,x.y=e.startCropY-x.height):(x.height=Math.abs(_),x.y=e.startCropY-x.height)):p==="se"?(x.x=e.startCropX,x.y=e.startCropY,x.width=v,t?x.height=x.width/t:x.height=_):p==="sw"?(x.x=e.startCropX+v,x.y=e.startCropY,x.width=Math.abs(v),t?x.height=x.width/t:x.height=_):p==="nw"&&(x.x=e.startCropX+v,x.width=Math.abs(v),t?(x.height=x.width/t,x.y=e.startCropY-x.height):(x.height=Math.abs(_),x.y=e.startCropY+_));const S=j1(x,t,p,l.width,l.height,u,f,a,o);return t||ea.xyOrds.indexOf(m)>-1?h=S:ea.xOrds.indexOf(m)>-1?(h.x=S.x,h.width=S.width):ea.yOrds.indexOf(m)>-1&&(h.y=S.y,h.height=S.height),h.x=Bs(h.x,0,l.width-h.width),h.y=Bs(h.y,0,l.height-h.height),h}renderCropSelection(){const{ariaLabels:e=ea.defaultProps.ariaLabels,disabled:t,locked:a,renderSelectionAddon:o,ruleOfThirds:l,crop:u}=this.props,f=this.getCropStyle();if(u)return dt.createElement("div",{style:f,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":e.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!t&&!a&&dt.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},dt.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),dt.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),dt.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),dt.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":e.nwDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"nw"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":e.nDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"n"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":e.neDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"ne"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":e.eDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"e"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":e.seDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"se"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":e.sDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"s"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":e.swDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"sw"),role:"button"}),dt.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":e.wDragHandle,onKeyDown:h=>this.onHandlerKeyDown(h,"w"),role:"button"})),o&&dt.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:h=>h.stopPropagation()},o(this.state)),l&&dt.createElement(dt.Fragment,null,dt.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),dt.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){const t={...md,...this.props.crop||{}};return xa(t,e.width,e.height)}render(){const{aspect:e,children:t,circularCrop:a,className:o,crop:l,disabled:u,locked:f,style:h,ruleOfThirds:p}=this.props,{cropIsActive:m,newCropIsBeingDrawn:v}=this.state,_=l?this.renderCropSelection():null,x=ZO("ReactCrop",o,m&&"ReactCrop--active",u&&"ReactCrop--disabled",f&&"ReactCrop--locked",v&&"ReactCrop--new-crop",l&&e&&"ReactCrop--fixed-aspect",l&&a&&"ReactCrop--circular-crop",l&&p&&"ReactCrop--rule-of-thirds",!this.dragStarted&&l&&!l.width&&!l.height&&"ReactCrop--invisible-crop",a&&"ReactCrop--no-animate");return dt.createElement("div",{ref:this.componentRef,className:x,style:h},dt.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),l?dt.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},dt.createElement("defs",null,dt.createElement("mask",{id:`hole-${this.instanceId}`},dt.createElement("rect",{width:"100%",height:"100%",fill:"white"}),a?dt.createElement("ellipse",{cx:`${l.x+l.width/2}${l.unit}`,cy:`${l.y+l.height/2}${l.unit}`,rx:`${l.width/2}${l.unit}`,ry:`${l.height/2}${l.unit}`,fill:"black"}):dt.createElement("rect",{x:`${l.x}${l.unit}`,y:`${l.y}${l.unit}`,width:`${l.width}${l.unit}`,height:`${l.height}${l.unit}`,fill:"black"}))),dt.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,_)}};Fr.xOrds=["e","w"],Fr.yOrds=["n","s"],Fr.xyOrds=["nw","ne","se","sw"],Fr.nudgeStep=1,Fr.nudgeStepMedium=10,Fr.nudgeStepLarge=100,Fr.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let t5=Fr;const n5=Se.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,i5=Se.div`
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 8px;
  max-width: 90vw;
  width: 700px;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,a5=Se.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,r5=Se.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,o5=Se.h2`
  margin: 0;
`,s5=Se.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,Lm=Se.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,l5=Se.div`
  position: relative;
  max-width: 100%;
  max-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
`,c5=Se.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
  align-items: center;
`,Um=Se.label`
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
`,Pm=Se.input`
  width: 70px;
  padding: 0.4rem 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`,Y1=Se.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${n=>n.$isPrimary?"#4CAF50":"#666"};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${n=>n.$isPrimary?"#45a049":"#555"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,u5=({imageUrl:n,onClose:e,onImport:t,importSettings:a,onSettingsChange:o})=>{const[l,u]=H.useState(),[f,h]=H.useState(),[p,m]=H.useState(n),v=H.useRef(null),_=H.useMemo(()=>{const O=parseInt(a==null?void 0:a.width,10),w=parseInt(a==null?void 0:a.height,10);if(O>0&&w>0)return O/w},[a==null?void 0:a.width,a==null?void 0:a.height]),x=H.useCallback(O=>{const{width:w,height:E}=O.currentTarget;u(_?QO(KO({unit:"%",width:90},_,w,E),w,E):{unit:"%",x:10,y:10,width:80,height:80})},[_]);H.useEffect(()=>{if(v.current&&v.current.naturalWidth>0&&_){const{naturalWidth:O,naturalHeight:w}=v.current;let E,L;const B=w*_;B<=O?(E=B,L=w):(E=O,L=O/_);const R={x:(O-E)/2,y:(w-L)/2,width:E,height:L},V={unit:"%",x:R.x/O*100,y:R.y/w*100,width:R.width/O*100,height:R.height/w*100},U=.1;(!l||l.unit!==V.unit||Math.abs((l.width??0)-V.width)>U||Math.abs((l.height??0)-V.height)>U||Math.abs((l.x??0)-V.x)>U||Math.abs((l.y??0)-V.y)>U)&&u(V)}},[_,v.current]);const S=H.useCallback(()=>{const O=v.current;if(!O||!f||!f.width||!f.height)return console.error("Cannot crop: Image or crop dimensions invalid.",{image:O,completedCrop:f}),null;const w=document.createElement("canvas"),E=O.naturalWidth/O.width,L=O.naturalHeight/O.height;w.width=Math.round(f.width*E),w.height=Math.round(f.height*L);const B=w.getContext("2d");if(!B)return console.error("Failed to get canvas context."),null;const R=Math.round(f.x*E),V=Math.round(f.y*L),U=Math.round(f.width*E),D=Math.round(f.height*L),j=w.width,ne=w.height;B.imageSmoothingQuality="high";try{return B.drawImage(O,R,V,U,D,0,0,j,ne),w.toDataURL("image/png")}catch(Z){return console.error("Error drawing cropped image:",Z),null}},[v,f]),T=H.useCallback(()=>{const O=S();O&&t?t(O,a):console.error("Failed to get cropped image data URL.")},[S,t,a]),b=H.useCallback(O=>{const{name:w,value:E}=O.target,L=parseInt(E,10);!isNaN(L)&&L>=1?o(B=>({...B,[w]:L})):E===""&&o(B=>({...B,[w]:""}))},[o]),y=O=>{O.target,O.currentTarget};return M.jsx(n5,{onClick:y,children:M.jsxs(i5,{children:[M.jsxs(r5,{children:[M.jsx(o5,{children:"Import Image"}),M.jsx(a5,{onClick:e,"aria-label":"Close",children:M.jsx(an,{icon:Ld})})]}),M.jsxs(s5,{children:[M.jsxs(Lm,{children:[M.jsx(Um,{htmlFor:"importWidth",children:"Width (px):"}),M.jsx(Pm,{type:"number",id:"importWidth",name:"width",value:(a==null?void 0:a.width)||"",onChange:b,min:"1",placeholder:"e.g. 32"})]}),M.jsxs(Lm,{children:[M.jsx(Um,{htmlFor:"importHeight",children:"Height (px):"}),M.jsx(Pm,{type:"number",id:"importHeight",name:"height",value:(a==null?void 0:a.height)||"",onChange:b,min:"1",placeholder:"e.g. 32"})]}),M.jsxs(Lm,{children:[M.jsx(Um,{htmlFor:"maxColors",children:"Max Colors:"}),M.jsx(Pm,{type:"number",id:"maxColors",name:"maxColors",value:(a==null?void 0:a.maxColors)||"",onChange:b,min:"2",max:"256",placeholder:"e.g. 32"})]})]}),M.jsxs(l5,{children:[p&&M.jsx(t5,{crop:l,onChange:(O,w)=>u(w),onComplete:O=>h(O),aspect:_,className:"crop-area",children:M.jsx("img",{ref:v,src:p,alt:"Crop preview",onLoad:x,style:{maxWidth:"100%",maxHeight:"calc(90vh - 150px)",objectFit:"contain",display:"block"}})}),!p&&M.jsx("div",{children:"Loading image..."})]}),M.jsxs(c5,{children:[M.jsx(Y1,{onClick:e,children:"Cancel"}),M.jsx(Y1,{$isPrimary:!0,onClick:T,disabled:!f||!f.width||!f.height||!p,children:"Import"})]})]})})},f5=Se.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  /* Apply variant styles */
  background-color: ${n=>n.disabled?"var(--bg-disabled)":n.variant==="primary"?"var(--accent-color)":n.variant==="secondary"?"var(--bg-tertiary)":n.variant==="danger"?"#e53935":"var(--bg-tertiary)"};
  
  color: ${n=>n.disabled?"var(--text-disabled)":n.variant==="primary"?"white":"var(--text-primary)"};
  
  &:hover:not(:disabled) {
    background-color: ${n=>n.variant==="primary"?"var(--accent-hover)":n.variant==="secondary"?"var(--bg-hover)":n.variant==="danger"?"#c62828":"var(--bg-hover)"};
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,W1=({children:n,variant:e="secondary",type:t="button",onClick:a,disabled:o=!1,...l})=>M.jsx(f5,{type:t,variant:e,onClick:a,disabled:o,...l,children:n}),d5=Se.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`,q1=Se.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h5=Se.div`
  width: 100%;
`,p5=Se.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
  resize: vertical;
  background-color: #f5f5f5;
`,m5=Se.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 4px;
  background-color: #f9f9f9;
`,g5=Se.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`,v5=Se.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 4px;
  min-height: 150px;
`,_5=Se.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
`,x5=Se.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`,y5=Se.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`,b5=Se.svg`
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
`,S5=({onClose:n,onApply:e,currentPath:t="",currentViewBox:a="0 0 100 100"})=>{const[o,l]=H.useState(t),[u,f]=H.useState(a),[h,p]=H.useState("");H.useEffect(()=>{try{if(o.trim()&&!o.includes("<")&&!o.includes(">")){const x="http://www.w3.org/2000/svg",S=document.createElementNS(x,"svg"),T=document.createElementNS(x,"path");T.setAttribute("d",o),S.appendChild(T),p("")}else o.trim()&&p("Please enter a valid SVG path (d attribute)")}catch(x){p("Invalid SVG path: "+x.message)}},[o]);const m=x=>{f(x.target.value)},v=x=>{l(x.target.value)},_=()=>{!h&&o.trim()&&(e(o,u),n())};return M.jsx(oE,{title:"Custom SVG Shape",onClose:n,children:M.jsxs(d5,{children:[M.jsxs(q1,{children:[M.jsx("label",{htmlFor:"svg-path",children:"SVG Path (d attribute)"}),M.jsx(h5,{children:M.jsx(p5,{id:"svg-path",value:o,onChange:v,placeholder:`Enter SVG path data (d attribute)
Example: M50,0 L100,100 L0,100 Z`})}),h&&M.jsx(x5,{children:h})]}),M.jsxs(q1,{children:[M.jsx("label",{htmlFor:"view-box",children:"View Box"}),M.jsx(_5,{id:"view-box",value:u,onChange:m,placeholder:"0 0 100 100"})]}),M.jsxs(m5,{children:[M.jsx(g5,{children:"Preview"}),M.jsx(v5,{children:o&&!h?M.jsx(b5,{viewBox:u,children:M.jsx("path",{d:o,fill:"#333"})}):M.jsx("div",{children:"Enter a valid SVG path to see preview"})})]}),M.jsxs(y5,{children:[M.jsx(W1,{variant:"secondary",onClick:n,children:"Cancel"}),M.jsx(W1,{variant:"primary",onClick:_,disabled:!!h||!o.trim(),children:"Apply Shape"})]})]})})},M5=(n,e)=>{const{gridDimensions:t,pixelSize:a,gridGap:o,pixelShape:l="square",cornerRadius:u=0,glowEnabled:f=!1,glowSettings:h={}}=e,p=a+o;return{grid:n,width:t.width,height:t.height,pixelSize:a,gridGap:o,pixelShape:l,cornerRadius:u,glowEnabled:f,glowSettings:h,totalWidth:t.width*p-o,totalHeight:t.height*p-o}},E5=(n,e)=>new Promise((t,a)=>{try{const o=M5(n,e),u=`PIXELPOP_FIGMA_DATA:${JSON.stringify(o,null,2)}`;navigator.clipboard.writeText(u).then(()=>{console.log("Pixel art data copied to clipboard"),t({success:!0,message:"Pixel art data copied to clipboard. Paste in the PixelPop Figma plugin."})}).catch(f=>{console.error("Failed to copy to clipboard:",f),a(new Error("Failed to copy to clipboard. Please try again."))})}catch(o){a(o)}}),T5=Se.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`,A5=Se.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`,w5=Se.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-tertiary);
`,C5=Se.h2`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.2rem;
`,R5=Se.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  
  &:hover {
    color: var(--text-primary);
  }
`,D5=Se.div`
  padding: 1.5rem;
  color: var(--text-primary);
`,L5=Se.div`
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background-color: var(--bg-tertiary);
`,W0=Se.button`
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,U5=Se(W0)`
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);

  &:hover:not(:disabled) {
    background-color: var(--bg-hover);
    color: var(--text-primary);
  }
`,P5=Se(W0)`
  background-color: var(--accent-color);
  color: var(--text-accent);
  border: 1px solid var(--accent-color);

  &:hover:not(:disabled) {
    background-color: var(--accent-hover);
  }
`,Nm=Se.div`
  margin-bottom: 1.5rem;
`,Om=Se.h3`
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: var(--text-primary);
`,N5=Se.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,zm=Se.button`
  flex: 1;
  padding: 0.5rem;
  background-color: ${n=>n.$isActive?"var(--accent-color)":"var(--bg-secondary)"};
  color: ${n=>n.$isActive?"var(--text-accent)":"var(--text-secondary)"};
  border: 1px solid ${n=>n.$isActive?"var(--accent-color)":"var(--border-color)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  
  &:hover:not(:disabled) {
    background-color: ${n=>n.$isActive?"var(--accent-hover)":"var(--bg-hover)"};
    color: ${n=>n.$isActive?"var(--text-accent)":"var(--text-primary)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,O5=Se.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,mc=Se.button`
  padding: 0.5rem 0.75rem;
  background-color: ${n=>n.$isActive?"var(--accent-color)":"var(--bg-secondary)"};
  color: ${n=>n.$isActive?"var(--text-accent)":"var(--text-secondary)"};
  border: 1px solid ${n=>n.$isActive?"var(--accent-color)":"var(--border-color)"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${n=>n.$isActive?"var(--accent-hover)":"var(--bg-hover)"};
    color: ${n=>n.$isActive?"var(--text-accent)":"var(--text-primary)"};
  }
`,$1=Se.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`,Z1=Se.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
`,z5=Se.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`,B5=Se.label`
  min-width: 120px;
  font-size: 0.9rem;
`,F5=Se.input`
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--bg-tertiary);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    cursor: pointer;
    border: 0;
  }
`,I5=Se.div`
  min-width: 40px;
  text-align: right;
  font-size: 0.9rem;
`,K1=Se.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-secondary);
    transition: .4s;
    border-radius: 20px;
    border: 1px solid var(--border-color);

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 2px;
      background-color: var(--text-secondary);
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: var(--accent-color);
    border-color: var(--accent-color);

    &:before {
      transform: translateX(16px);
      background-color: var(--switch-handle);
    }
  }
`,k5=Se(W0)`
  background-color: #1E1E1E;
  color: white;
  border: 1px solid #2C2C2C;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background-color: #2C2C2C;
  }
`,Q1=Se.div`
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 57'%3E%3Cpath d='M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z'/%3E%3Cpath d='M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z'/%3E%3Cpath d='M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z'/%3E%3Cpath d='M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z'/%3E%3Cpath d='M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`,H5=({onClose:n,onExport:e,canvasRef:t,svgRef:a,gridDimensions:o,pixelSize:l,gridGap:u,showGrid:f,backgroundColor:h,pixelData:p,rendererType:m,glowEnabled:v,onExportToFigma:_})=>{const[x,S]=H.useState("png"),[T,b]=H.useState(1),[y,O]=H.useState(v?20:0),[w,E]=H.useState(!1),[L,B]=H.useState(!0),[R,V]=H.useState(!1),[U,D]=H.useState(!1),j=_,ne=()=>{V(!0),e({format:x,scale:parseInt(T,10),padding:parseInt(y,10),includeGrid:w,includeBackground:L,rendererType:m}).finally(()=>{V(!1),n()})},Z=()=>{j&&(D(!0),_({scale:parseInt(T,10),padding:parseInt(y,10),includeGrid:w,includeBackground:L}).finally(()=>{D(!1),n()}))},ue=Math.ceil(o.width*(l+u)-u),re=Math.ceil(o.height*(l+u)-u),X=Math.ceil(ue*T),J=Math.ceil(re*T),q=X+y*2,_e=J+y*2;return M.jsx(T5,{onClick:F=>F.target===F.currentTarget&&n(),children:M.jsxs(A5,{children:[M.jsxs(w5,{children:[M.jsx(C5,{children:"Export Artwork"}),M.jsx(R5,{onClick:n,children:M.jsx(an,{icon:Ld})})]}),M.jsxs(D5,{children:[M.jsxs(Nm,{children:[M.jsx(Om,{children:"Export Format"}),M.jsxs(N5,{children:[M.jsx(zm,{$isActive:x==="png",onClick:()=>S("png"),children:"PNG"}),M.jsx(zm,{$isActive:x==="jpg",onClick:()=>S("jpg"),children:"JPG"}),M.jsx(zm,{$isActive:x==="svg",onClick:()=>S("svg"),disabled:m!=="svg",children:"SVG"})]}),m!=="svg"&&x==="svg"?M.jsx("div",{style:{color:"var(--error-color)",fontSize:"0.85rem",marginTop:"-0.5rem",marginBottom:"1rem"},children:"SVG export requires the SVG renderer. Please switch to SVG renderer in the sidebar."}):null,x==="svg"&&m==="svg"&&M.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"-0.5rem",marginBottom:"1rem"},children:"SVG export will create a vector image preserving all pixel shapes and effects."}),j&&M.jsxs("div",{style:{backgroundColor:"rgba(26, 26, 26, 0.1)",padding:"0.75rem",borderRadius:"4px",marginTop:"1rem",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"8px"},children:[M.jsx(Q1,{style:{width:"18px",height:"18px"}}),M.jsx("span",{children:"Export directly to Figma is available! Each pixel will be created as a rectangle in Figma, letting you further customize your artwork in Figma's design environment."})]})]}),M.jsxs(Nm,{children:[M.jsx(Om,{children:"Export Size"}),M.jsxs(O5,{children:[M.jsxs(mc,{$isActive:T===1,onClick:()=>b(1),children:["1x (",ue,"×",re,")"]}),M.jsxs(mc,{$isActive:T===1.5,onClick:()=>b(1.5),children:["1.5x (",Math.ceil(ue*1.5),"×",Math.ceil(re*1.5),")"]}),M.jsxs(mc,{$isActive:T===2,onClick:()=>b(2),children:["2x (",ue*2,"×",re*2,")"]}),M.jsxs(mc,{$isActive:T===3,onClick:()=>b(3),children:["3x (",ue*3,"×",re*3,")"]}),M.jsxs(mc,{$isActive:T===4,onClick:()=>b(4),children:["4x (",ue*4,"×",re*4,")"]})]})]}),M.jsxs(Nm,{children:[M.jsx(Om,{children:"Export Options"}),M.jsx($1,{children:M.jsxs(Z1,{children:[M.jsxs(K1,{children:[M.jsx("input",{type:"checkbox",checked:w,onChange:F=>E(F.target.checked)}),M.jsx("span",{})]}),M.jsx("span",{children:"Include Grid Lines"})]})}),M.jsx($1,{children:M.jsxs(Z1,{children:[M.jsxs(K1,{children:[M.jsx("input",{type:"checkbox",checked:L,onChange:F=>B(F.target.checked)}),M.jsx("span",{})]}),M.jsx("span",{children:"Include Background Color"})]})}),M.jsxs(z5,{children:[M.jsx(B5,{children:"Padding (px)"}),M.jsx(F5,{type:"range",min:"0",max:"100",value:y,onChange:F=>O(Number(F.target.value))}),M.jsx(I5,{children:y})]}),M.jsxs("div",{style:{fontSize:"0.875rem",color:"var(--text-secondary)",marginTop:"1rem"},children:["Final dimensions: ",q,"×",_e," pixels"]})]})]}),M.jsxs(L5,{children:[M.jsx(U5,{onClick:n,children:"Cancel"}),j&&M.jsxs(k5,{onClick:Z,disabled:U,children:[M.jsx(Q1,{}),U?"Exporting...":"Export to Figma"]}),M.jsx(P5,{onClick:ne,disabled:R,children:R?"Exporting...":"Export"})]})]})})},G5=Se.div`
  position: fixed;
  bottom: ${n=>n.$position.y}px;
  left: ${n=>n.$position.x}px;
  background-color: rgba(var(--rgb-bg-secondary), 0.8);
  border: 1px solid rgba(var(--rgb-border-color), 0.5);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  color: var(--text-primary);
  backdrop-filter: blur(2px);
  z-index: 1000;
  user-select: none;
  font-family: monospace;
  display: ${n=>n.$visible?"block":"none"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  min-width: 180px;
`,V5=Se.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(var(--rgb-border-color), 0.5);
  padding-bottom: 4px;
  margin-bottom: 4px;
  cursor: move;
  font-weight: bold;
  color: var(--accent-color);
`,gc=Se.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`,vc=Se.span`
  color: var(--text-secondary);
  margin-right: 8px;
`,zf=Se.span`
  color: ${n=>n.$value>n.$good?"#4caf50":n.$value>n.$medium?"#ff9800":"#f44336"};
  font-weight: bold;
`,X5=({visible:n=!0,rendererType:e})=>{var E;const[t,a]=H.useState({fps:0,renderTime:0,memoryUsage:0,nodeCount:0}),[o,l]=H.useState({x:10,y:10}),[u,f]=H.useState(!1),[h,p]=H.useState({x:0,y:0}),m=H.useRef(null),v=H.useRef(0),_=H.useRef(performance.now()),x=H.useRef([]),S=H.useRef(null),T=H.useRef(null),b=H.useRef(null),y=L=>{if(m.current){const B=m.current.getBoundingClientRect();p({x:L.clientX-B.left,y:L.clientY-B.top}),f(!0)}},O=L=>{u&&l({x:L.clientX-h.x,y:window.innerHeight-L.clientY+h.y})},w=()=>{f(!1)};return H.useEffect(()=>(u?(document.addEventListener("mousemove",O),document.addEventListener("mouseup",w)):(document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",w)),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",w)}),[u]),H.useEffect(()=>{const L=V=>{v.current++;const U=V-_.current;if(U>1e3){const ne=Math.round(v.current*1e3/U),Z=x.current.length>0?x.current.reduce((ue,re)=>ue+re,0)/x.current.length:0;a(ue=>({...ue,fps:ne,renderTime:Z.toFixed(2)})),v.current=0,_.current=V,x.current=[]}const D=performance.now();S.current=requestAnimationFrame(L);const j=performance.now()-D;x.current.push(j),x.current.length>60&&x.current.shift()},B=async()=>{try{if(window.performance&&performance.memory){const V=performance.memory,U=Math.round(V.usedJSHeapSize/(1024*1024));a(D=>({...D,memoryUsage:U}))}}catch(V){console.warn("Memory measurement not supported",V)}},R=()=>{if(e==="svg"){const V=document.querySelectorAll("svg *");a(U=>({...U,nodeCount:V.length}))}};return n&&(S.current=requestAnimationFrame(L),T.current=setInterval(B,2e3),e==="svg"&&(b.current=setInterval(R,2e3))),()=>{S.current&&cancelAnimationFrame(S.current),T.current&&clearInterval(T.current),b.current&&clearInterval(b.current)}},[e,n]),M.jsxs(G5,{ref:m,$visible:n,$position:o,style:{pointerEvents:n?"auto":"none"},children:[M.jsx(V5,{onMouseDown:y,children:"Performance Monitor"}),M.jsxs(gc,{children:[M.jsx(vc,{children:"FPS:"}),M.jsx(zf,{$value:t.fps,$good:55,$medium:30,children:t.fps})]}),M.jsxs(gc,{children:[M.jsx(vc,{children:"Render Time:"}),M.jsxs(zf,{$value:16-t.renderTime,$good:10,$medium:0,children:[t.renderTime," ms"]})]}),((E=window.performance)==null?void 0:E.memory)&&M.jsxs(gc,{children:[M.jsx(vc,{children:"Memory:"}),M.jsxs(zf,{$value:500-t.memoryUsage,$good:400,$medium:300,children:[t.memoryUsage," MB"]})]}),e==="svg"&&M.jsxs(gc,{children:[M.jsx(vc,{children:"DOM Nodes:"}),M.jsx(zf,{$value:1e3-t.nodeCount,$good:900,$medium:500,children:t.nodeCount})]}),M.jsxs(gc,{children:[M.jsx(vc,{children:"Renderer:"}),M.jsx("span",{children:e})]})]})},J1=(n,e)=>{const t=[];for(let a=0;a<e;a++)t[a]=new Array(n).fill(null);return t},j5=(n=32,e=32,t)=>{const[a,o]=H.useState({width:n,height:e}),[l,u]=H.useState(()=>J1(n,e)),[f,h]=H.useState(24),[p,m]=H.useState(0),[v,_]=H.useState("rgba(240, 240, 240, 1)"),x=H.useCallback((T,b)=>{o({width:T,height:b}),u(J1(T,b)),t&&t("grid_reset")},[t]),S=H.useCallback((T,b)=>{var B;const y=a.width,O=a.height;if(T===y&&b===O)return;const w=Array(b).fill(null).map(()=>Array(T).fill(null)),E=Math.min(y,T),L=Math.min(O,b);for(let R=0;R<L;R++)for(let V=0;V<E;V++)w[R][V]=((B=l[R])==null?void 0:B[V])||null;o({width:T,height:b}),u(w),t&&t("grid_change")},[a,l,u,o,t]);return{gridDimensions:a,setGridDimensions:x,resizeGrid:S,setInternalGridDimensions:o,pixelGrid:l,setPixelGrid:u,pixelSize:f,setPixelSize:h,gridGap:p,setGridGap:m,backgroundColor:v,setBackgroundColor:_}},Y5=256,W5=(n="rgba(230, 2, 123, 1)")=>{const[e,t]=H.useState("pencil"),[a,o]=H.useState(n),l=H.useRef(n),[u,f]=H.useState(n),[h,p]=H.useState([n]);H.useEffect(()=>{l.current=a},[a]);const m=H.useCallback(_=>{_&&(o(_),l.current=_,f(_),p(x=>{const S=x.filter(b=>b!==_);return[_,...S].slice(0,Y5)}))},[]),v=H.useCallback(_=>{_&&(f(_),o(_),l.current=_)},[]);return{activeTool:e,setActiveTool:t,activeColor:a,activeColorRef:l,pickerColor:u,updatePickerColor:v,selectColor:m,colorHistory:h,setColorHistory:p}},q5=(n={})=>{const e={cornerRadius:{enabled:!1,topLeft:0,topRight:0,bottomLeft:0,bottomRight:0},glow:{enabled:!1,settings:{size:10,opacity:25,spread:10,offsetX:0,offsetY:0,blendMode:"screen"}},bulb:{enabled:!1,settings:{intensity:50,radius:50,positionX:25,positionY:25,color:"#ffffff",blendMode:"screen"}},pixelShape:{type:"rectangle",customShape:{path:"",viewBox:"0 0 100 100"}}},[t,a]=H.useState(()=>({...e,...n})),o=H.useCallback((L,B)=>{a(R=>{var D;if(!R[L])return console.log(`[useEffectState] Error: Cannot toggle - effect "${L}" doesn't exist`),R;console.log(`[useEffectState] Toggling ${L}. Current enabled: ${(D=R[L])==null?void 0:D.enabled}. Requested enabled: ${B}`);const V=B!==void 0?B:!R[L].enabled,U={...R,[L]:{...R[L],enabled:V}};return console.log(`[useEffectState] ${L} is now ${V?"enabled":"disabled"}`),U})},[]),l=H.useCallback((L,B)=>{a(R=>{if(!R[L])return console.log(`[useEffectState] Error: Effect "${L}" doesn't exist`),R;if(console.log(`[useEffectState] Updating ${L} with:`,B),L==="cornerRadius"){const U={...R,[L]:{...R[L],...B}};return console.log("[useEffectState] Updated cornerRadius:",U[L]),U}const V={...R,[L]:{...R[L],settings:{...R[L].settings,...B}}};return console.log(`[useEffectState] Updated ${L} settings:`,V[L].settings),V})},[]),u=H.useCallback(L=>{a(B=>({...B,pixelShape:{...B.pixelShape,type:L}}))},[]),f=H.useCallback(L=>{a(B=>({...B,pixelShape:{...B.pixelShape,customShape:{...B.pixelShape.customShape,...L}}}))},[]),h=H.useCallback((L,B)=>{t[L]||a(R=>({...R,[L]:B}))},[t]),p=t.cornerRadius,m=t.glow.enabled,v=t.glow.settings,_=t.bulb.enabled,x=t.bulb.settings,S=t.pixelShape.type,T=t.pixelShape.customShape,b=H.useCallback(L=>{l("cornerRadius",L)},[l]),y=H.useCallback(L=>{o("glow",L)},[o]),O=H.useCallback(L=>{l("glow",L)},[l]),w=H.useCallback(L=>{o("bulb",L)},[o]),E=H.useCallback(L=>{l("bulb",L)},[l]);return{effects:t,toggleEffect:o,updateEffectSettings:l,setPixelShape:u,setCustomShape:f,registerEffect:h,cornerRadius:p,setCornerRadius:b,glowEnabled:m,setGlowEnabled:y,glowSettings:v,setGlowSettings:O,bulbEnabled:_,setBulbEnabled:w,bulbSettings:x,setBulbSettings:E,pixelShape:S,customShape:T}},$5=(n={})=>{const e={mode:"edit",showGrid:!0,rendererType:"canvas",showPerformanceMonitor:!1,modals:{export:!1,import:!1,customShape:!1,settings:!1}},[t,a]=H.useState(()=>({...e,...n})),o=H.useCallback(x=>{x!=="edit"&&x!=="preview"||a(S=>({...S,mode:x}))},[]),l=H.useCallback(()=>{a(x=>({...x,showGrid:!x.showGrid}))},[]),u=H.useCallback(x=>{x!=="canvas"&&x!=="svg"&&x!=="webgl"||a(S=>({...S,rendererType:x}))},[]),f=H.useCallback(()=>{a(x=>({...x,showPerformanceMonitor:!x.showPerformanceMonitor}))},[]),h=H.useCallback((x,S)=>{t.modals.hasOwnProperty(x)&&a(T=>({...T,modals:{...T.modals,[x]:S!==void 0?S:!T.modals[x]}}))},[t.modals]),p=H.useCallback(x=>{h("export",x)},[h]),m=H.useCallback(x=>{h("import",x)},[h]),v=H.useCallback(x=>{h("customShape",x)},[h]),_=H.useCallback(x=>{h("settings",x)},[h]);return{uiState:t,setUIState:a,mode:t.mode,showGrid:t.showGrid,rendererType:t.rendererType,showPerformanceMonitor:t.showPerformanceMonitor,modals:t.modals,setMode:o,toggleGrid:l,setRendererType:u,togglePerformanceMonitor:f,toggleModal:h,toggleExportModal:p,toggleImportModal:m,toggleCustomShapeModal:v,toggleSettingsModal:_}},Z5=({initialState:n=null,onChange:e=()=>{},maxHistory:t=100}={})=>{const[a,o]=H.useState([]),[l,u]=H.useState(-1),f=H.useRef(!1);H.useEffect(()=>{n&&!f.current&&(o([{state:n,type:"initial"}]),u(0),f.current=!0)},[n]);const h=l>0,p=l<a.length-1,m=H.useCallback((b,y)=>{b&&(o(O=>{const E=[...O.slice(0,l+1),{state:b,type:y||"unknown"}];return E.length>t?E.slice(E.length-t):E}),u(O=>Math.min(O+1,t-1)))},[l,t]),v=H.useCallback(()=>{if(!h)return;const b=l-1;u(b);const y=a[b].state;e(y,"undo")},[h,l,a,e]),_=H.useCallback(()=>{if(!p)return;const b=l+1;u(b);const y=a[b].state;e(y,"redo")},[p,l,a,e]),x=H.useCallback(()=>l>=0&&l<a.length?a[l].state:null,[a,l]),S=H.useCallback(()=>{o([]),u(-1),f.current=!1},[]),T=H.useCallback((b,y=0)=>{o(b),u(y),f.current=!0,b.length>0&&y>=0&&y<b.length&&e(b[y].state,"replace")},[e]);return{history:a,currentIndex:l,isInitialized:f.current,canUndo:h,canRedo:p,pushHistory:m,undo:v,redo:_,getCurrentState:x,clearHistory:S,replaceHistory:T}},Bm=(n,e,t)=>`${n.replace(/_\d+x\d+$/,"")}_${e}x${t}`,Bf=n=>n.replace(/_\d+x\d+$/,""),eS=n=>{const e=n.match(/_(\d+)x(\d+)$/);return e?{width:parseInt(e[1]),height:parseInt(e[2])}:null},tS=(n,e)=>{if(!n||n.length===0)return[];const t=new Set(n.map(m=>ad(m.r,m.g,m.b)));e=Math.min(e,t.size),e=Math.max(e,1);const a=[],l=[...t].map(m=>{const v=n.find(_=>ad(_.r,_.g,_.b)===m);return{r:v.r,g:v.g,b:v.b}}).sort(()=>.5-Math.random());if(a.push(...l.slice(0,e)),e===1&&n.length>0){const m=Math.round(n.reduce((x,S)=>x+S.r,0)/n.length),v=Math.round(n.reduce((x,S)=>x+S.g,0)/n.length),_=Math.round(n.reduce((x,S)=>x+S.b,0)/n.length);return[{center:{r:m,g:v,b:_},pixels:n}]}const u=20;let f=0,h=[],p=null;for(;f<u;){h=a.map(_=>({center:_,pixels:[]})),n.forEach(_=>{let x=1/0,S=0;a.forEach((T,b)=>{const E=(_.r-T.r)*.2126,L=(_.g-T.g)*.7152,B=(_.b-T.b)*.0722,R=E*E+L*L+B*B;R<x&&(x=R,S=b)}),h[S]&&h[S].pixels.push(_)});const m=h.map(_=>{if(_.pixels.length===0){const x=Math.floor(Math.random()*n.length),S=n[x];return{r:S.r,g:S.g,b:S.b}}return{r:Math.round(_.pixels.reduce((x,S)=>x+S.r,0)/_.pixels.length),g:Math.round(_.pixels.reduce((x,S)=>x+S.g,0)/_.pixels.length),b:Math.round(_.pixels.reduce((x,S)=>x+S.b,0)/_.pixels.length)}}),v=1e-4;if(p&&m.every((_,x)=>{const S=p[x];return Math.abs(_.r-S.r)<v&&Math.abs(_.g-S.g)<v&&Math.abs(_.b-S.b)<v}))break;p=m,a.splice(0,a.length,...m),f++}return h.filter(m=>m.pixels.length>0)},K5=Se.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`,Q5=Se.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  margin-top: 60px; /* Account for fixed header height */
  padding-right: ${n=>n.$sidebarVisible?"330px":"0"};
  transition: padding-right 0.3s ease;
  
  @media (max-width: 768px) {
    padding-right: 0; /* No padding on mobile */
  }
`,J5=Se.div`
  flex: 1;
  overflow: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${n=>n.$backgroundColor||"#f0f0f0"};
  pointer-events: auto; /* Ensure mouse events are captured */
`,ez=Se.h1`
  margin: 0;
  font-size: 1.25rem;
  color: var(--accent-color);
  font-weight: 600;
`,tz=256;function nz(){var ge;const n=H.useRef(null),e=H.useRef(!1),[t,a]=H.useState(!1),[o,l]=H.useState(null),[u,f]=H.useState(null),[h,p]=H.useState("Untitled Pixel Art"),[m,v]=H.useState({width:null,height:null,maxColors:32}),[_,x]=H.useState(null),[S,T]=H.useState(null),[b,y]=H.useState(null),[O,w]=H.useState(!0),{gridDimensions:E,resizeGrid:L,setInternalGridDimensions:B,pixelGrid:R,setPixelGrid:V,pixelSize:U,setPixelSize:D,gridGap:j,setGridGap:ne,backgroundColor:Z,setBackgroundColor:ue}=j5(32,32,l),{activeTool:re,setActiveTool:X,activeColor:J,pickerColor:q,updatePickerColor:_e,selectColor:F,colorHistory:te,setColorHistory:xe,activeColorRef:Te}=W5(),{cornerRadius:K,setCornerRadius:$,glowEnabled:ce,setGlowEnabled:he,glowSettings:Ae,setGlowSettings:De,bulbEnabled:Ve,setBulbEnabled:it,bulbSettings:at,setBulbSettings:et,pixelShape:N,setPixelShape:Le,customShape:Oe,setCustomShape:He}=q5(),{mode:je,showGrid:nt,rendererType:Pe,showPerformanceMonitor:k,modals:C,setMode:ae,toggleGrid:be,setRendererType:we,togglePerformanceMonitor:me,toggleExportModal:Fe,toggleImportModal:Ne,toggleCustomShapeModal:ke}=$5(),pt=C.export,Be=C.import,Ye=C.customShape,rt=H.useCallback(W=>{W&&(V(W.pixelGrid),W.gridDimensions&&B(W.gridDimensions))},[V,B]),{canUndo:ct,canRedo:Xe,pushHistory:ht,undo:st,redo:Bt}=Z5({onChange:rt,maxHistory:256}),ee=H.useRef(!1);H.useEffect(()=>{if(!ee.current&&R){const W={pixelGrid:R.map(G=>[...G]),gridDimensions:{...E},type:"initial"};ht(W,"initial"),ee.current=!0}},[R,E,ht]),H.useEffect(()=>{if(o==="draw"&&ee.current){const W={pixelGrid:R.map(G=>[...G]),gridDimensions:{...E},type:"draw"};ht(W,"draw"),l(null)}},[o,ht,R,E]),H.useEffect(()=>{if(o==="grid_change"&&ee.current){const W={pixelGrid:R.map(G=>[...G]),gridDimensions:{...E},type:"grid_change"};ht(W,"grid_change"),l(null)}},[o,ht,R,E]);const qe=H.useCallback(()=>{st()},[st]),I=H.useCallback(()=>{Bt()},[Bt]),ie=H.useCallback(()=>{t||a(!0),l("draw")},[t]),Me=H.useCallback(()=>{const W=Array(E.height+1).fill().map(()=>Array(E.width).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width;le++)W[G+1][le]=R[G][le];V(W),B(G=>({...G,height:G.height+1})),l("grid_change")},[E,R,V,B]),Ie=H.useCallback(()=>{const W=Array(E.height+1).fill().map(()=>Array(E.width).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width;le++)W[G][le]=R[G][le];V(W),B(G=>({...G,height:G.height+1})),l("grid_change")},[E,R,V,B]),Je=H.useCallback(()=>{if(E.height<=1)return;const W=Array(E.height-1).fill().map(()=>Array(E.width).fill(null));for(let G=0;G<E.height-1;G++)for(let le=0;le<E.width;le++)W[G][le]=R[G+1][le];V(W),B(G=>({...G,height:G.height-1})),l("grid_change")},[E,R,V,B]),Ut=H.useCallback(()=>{if(E.height<=1)return;const W=Array(E.height-1).fill().map(()=>Array(E.width).fill(null));for(let G=0;G<E.height-1;G++)for(let le=0;le<E.width;le++)W[G][le]=R[G][le];V(W),B(G=>({...G,height:G.height-1})),l("grid_change")},[E,R,V,B]),Pt=H.useCallback(()=>{const W=Array(E.height).fill().map(()=>Array(E.width+1).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width;le++)W[G][le+1]=R[G][le];V(W),B(G=>({...G,width:G.width+1})),l("grid_change")},[E,R,V,B]),gt=H.useCallback(()=>{const W=Array(E.height).fill().map(()=>Array(E.width+1).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width;le++)W[G][le]=R[G][le];V(W),B(G=>({...G,width:G.width+1})),l("grid_change")},[E,R,V,B]),fn=H.useCallback(()=>{if(E.width<=1)return;const W=Array(E.height).fill().map(()=>Array(E.width-1).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width-1;le++)W[G][le]=R[G][le+1];V(W),B(G=>({...G,width:G.width-1})),l("grid_change")},[E,R,V,B]),Wt=H.useCallback(()=>{if(E.width<=1)return;const W=Array(E.height).fill().map(()=>Array(E.width-1).fill(null));for(let G=0;G<E.height;G++)for(let le=0;le<E.width-1;le++)W[G][le]=R[G][le];V(W),B(G=>({...G,width:G.width-1})),l("grid_change")},[E,R,V,B]),jt=H.useCallback(W=>{const G=new FileReader;G.onload=le=>{v({width:E.width,height:E.height,maxColors:32}),f(le.target.result),Ne(!0)},G.readAsDataURL(W)},[E,Ne]),Nt=H.useCallback(async()=>{const W={version:"1.0.1",filename:Bf(h),gridDimensions:E,pixelSize:U,gridGap:j,backgroundColor:Z,pixelGrid:R,activeTool:re,activeColor:J,colorHistory:te,effects:{cornerRadius:K,glowEnabled:ce,glowSettings:Ae,bulbEnabled:Ve,bulbSettings:at,pixelShape:N,customShape:Oe},ui:{mode:je,showGrid:nt,rendererType:Pe}},G=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),le=Bm(h,E.width,E.height);if("showSaveFilePicker"in window)try{const ze=await(await window.showSaveFilePicker({suggestedName:`${le}.json`,types:[{description:"Pixel Pop Project",accept:{"application/json":[".json"]}}]})).createWritable();await ze.write(G),await ze.close()}catch(Ee){Ee.name!=="AbortError"?(console.error("Error saving project with File System Access API:",Ee),alert("Failed to save project.")):console.log("Project save aborted by user.")}else{const Ee=URL.createObjectURL(G),ze=document.createElement("a");ze.href=Ee,ze.download=`${le}.json`,document.body.appendChild(ze),ze.click(),document.body.removeChild(ze),URL.revokeObjectURL(Ee)}},[E,U,j,Z,R,re,J,te,K,ce,Ae,Ve,at,N,Oe,je,nt,Pe,h,Bm,Bf]),Un=H.useCallback(W=>{const G=new FileReader;G.onload=le=>{try{const Ee=JSON.parse(le.target.result),ze=Ee.version||"1.0.0";if(!Ee.gridDimensions||!Ee.pixelGrid)throw new Error("Invalid project file format: Missing gridDimensions or pixelGrid");const We=Ee.filename||W.name.replace(/\.json$/,""),tt=eS(We)||Ee.gridDimensions;B(tt),D(Ee.pixelSize||24),ne(Ee.gridGap||0),V(Ee.pixelGrid),ue(Ee.backgroundColor||"rgba(240, 240, 240, 1)"),X(Ee.activeTool||"pencil"),F(Ee.activeColor||"rgba(0, 0, 0, 1)"),xe(Ee.colorHistory||[Ee.activeColor||"rgba(0, 0, 0, 1)"]),Ee.effects?($(Ee.effects.cornerRadius||{enabled:!1,topLeft:0,topRight:0,bottomLeft:0,bottomRight:0}),he(Ee.effects.glowEnabled||!1),De(Ee.effects.glowSettings||{size:5,intensity:100,spread:0,offsetX:0,offsetY:0}),it(Ee.effects.bulbEnabled||!1),et(Ee.effects.bulbSettings||{intensity:50,radius:50,positionX:50,positionY:50,color:"#ffffff",blend:"overlay"}),Le(Ee.effects.pixelShape||"rectangle"),He(Ee.effects.customShape||{path:"",viewBox:"0 0 100 100"})):($({enabled:!1,topLeft:0,topRight:0,bottomLeft:0,bottomRight:0}),he(!1),it(!1),Le("rectangle"),He({path:"",viewBox:"0 0 100 100"})),Ee.ui?(ae(Ee.ui.mode||"edit"),be(Ee.ui.showGrid===!0),we(Ee.ui.rendererType||"canvas")):(ae("edit"),be(!0),we("canvas")),p(Bf(We)),a(!0);const Ke={pixelGrid:Ee.pixelGrid.map(mt=>[...mt]),gridDimensions:{...tt},type:"load"};ht(Ke,"load",!0)}catch(Ee){console.error("Error loading project:",Ee),alert(`Failed to load project file. ${Ee.message}`)}},G.readAsText(W)},[B,D,ne,V,ue,X,F,xe,$,he,De,it,et,Le,He,ae,be,we,p,a,ht,eS,Bf]),Vn=H.useCallback(()=>{Fe(!0)},[Fe]),Ri=H.useCallback(async({format:W,scale:G,padding:le,includeGrid:Ee,rendererType:ze,includeBackground:We})=>{var lt,tt,Ke,mt,Mt;try{const bt=Bm(h,E.width,E.height);if(W==="svg"&&Pe==="svg"){const Qt=(tt=(lt=n.current)==null?void 0:lt.svgRef)==null?void 0:tt.current;if(!Qt)throw new Error("No SVG element found");const Ft=Qt.cloneNode(!0);Ft.setAttribute("xmlns","http://www.w3.org/2000/svg"),Ft.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");const ci=U+j,Li=E.width*ci,Ui=E.height*ci;Ft.setAttribute("viewBox",`0 0 ${Li} ${Ui}`),Ft.setAttribute("width",Li),Ft.setAttribute("height",Ui);const Ca=Ft.querySelector(".interaction-layer");Ca&&Ft.removeChild(Ca);const Ra=Ft.querySelector(".pixels-layer");Ra&&Ra.querySelectorAll("path, circle, rect").forEach(Xn=>{Xn.style.visibility="visible",Xn.style.display="block"});const Xc=new XMLSerializer().serializeToString(Ft),Io=new Blob([Xc],{type:"image/svg+xml;charset=utf-8"});if("showSaveFilePicker"in window)try{const Xn=await(await window.showSaveFilePicker({suggestedName:`${bt}.svg`,types:[{description:"SVG Image",accept:{"image/svg+xml":[".svg"]}}]})).createWritable();await Xn.write(Io),await Xn.close()}catch(ha){ha.name!=="AbortError"?(console.error("Error saving SVG with File System Access API:",ha),alert("Failed to save SVG file.")):console.log("SVG export aborted by user.")}else{const ha=URL.createObjectURL(Io),Xn=document.createElement("a");Xn.href=ha,Xn.download=`${bt}.svg`,document.body.appendChild(Xn),Xn.click(),document.body.removeChild(Xn),URL.revokeObjectURL(ha)}return}const _t=document.createElement("canvas"),$e=_t.getContext("2d"),Ze=U+j,Dt=E.width*Ze,St=E.height*Ze,sn=Math.floor(Dt*G),da=Math.floor(St*G),qt=sn+le*2,Di=da+le*2;_t.width=qt,_t.height=Di,We?$e.fillStyle=W==="jpg"?Z||"#ffffff":Z||"transparent":$e.fillStyle=W==="jpg"?"#ffffff":"transparent",$e.fillRect(0,0,qt,Di),$e.save(),$e.translate(le,le),$e.scale(G,G);const $t=ce,Bn=Ae,Sn=Ve,wn=at,Mn=K.enabled?K:null,li=N,$n=U+j;if($t)for(let Qt=0;Qt<E.height;Qt++)for(let Ft=0;Ft<E.width;Ft++){const ci=(Ke=R[Qt])==null?void 0:Ke[Ft];if(ci){const Li=Ft*$n+j/2,Ui=Qt*$n+j/2;VS($e,Li,Ui,U,ci,Bn,Mn,li)}}for(let Qt=0;Qt<E.height;Qt++)for(let Ft=0;Ft<E.width;Ft++){const ci=(mt=R[Qt])==null?void 0:mt[Ft];if(ci){const Li=Ft*$n+j/2,Ui=Qt*$n+j/2;XS($e,Li,Ui,U,ci,Mn,li)}}if(Sn){for(let Qt=0;Qt<E.height;Qt++)for(let Ft=0;Ft<E.width;Ft++)if((Mt=R[Qt])==null?void 0:Mt[Ft]){const Li=Ft*$n+j/2,Ui=Qt*$n+j/2;GS($e,Li,Ui,U,wn,li,Mn)}}Ee&&HS($e,Dt,St,E.width,E.height,U,j),$e.restore();const fl=W==="png"?"image/png":"image/jpeg",Vc=W==="png"?1:.9,Qr=await new Promise(Qt=>_t.toBlob(Qt,fl,Vc));if(!Qr)throw new Error("Failed to create blob from canvas");if("showSaveFilePicker"in window)try{const Ft=await(await window.showSaveFilePicker({suggestedName:`${bt}.${W}`,types:[{description:`${W.toUpperCase()} Image`,accept:{[fl]:["."+W]}}]})).createWritable();await Ft.write(Qr),await Ft.close()}catch(Qt){Qt.name!=="AbortError"?(console.error(`Error saving ${W.toUpperCase()} with File System Access API:`,Qt),alert(`Failed to save ${W.toUpperCase()} file.`)):console.log(`${W.toUpperCase()} export aborted by user.`)}else{const Qt=URL.createObjectURL(Qr),Ft=document.createElement("a");Ft.download=`${bt}.${W}`,Ft.href=Qt,document.body.appendChild(Ft),Ft.click(),document.body.removeChild(Ft),URL.revokeObjectURL(Qt)}}catch(bt){console.error("Export error:",bt),alert(`Failed to export artwork: ${bt.message}`)}},[E,U,j,Pe,Z,n,R,N,K,h]),Xi=H.useCallback(async W=>{try{return console.log("Starting Figma export process"),(await E5(R,{gridDimensions:E,pixelSize:U,gridGap:j,pixelShape:N,cornerRadius:K,glowEnabled:ce,glowSettings:Ae,...W})).success&&(console.log("Successfully copied Figma data to clipboard"),alert(`Pixel art data copied to clipboard!

Next steps:
1. Open the PixelPop Figma plugin
2. Paste your data into the text box
3. Click "Process Pasted Data" to import your art`)),{success:!0}}catch(G){console.error("Figma export error:",G);let le="Failed to export to Figma.";return G.message.includes("clipboard")&&(le="Failed to copy to clipboard. Please try again or check browser permissions."),alert(le),{success:!1,error:G}}},[R,E,U,j,N,K,ce,Ae]),si=H.useCallback(()=>{be()},[be]),ca=H.useCallback(W=>{ae(W)},[ae]),ua=H.useCallback(()=>{n.current?(console.log("[App] ZoomIn called, canvasRef:",n.current),n.current.zoomIn()):console.warn("[App] ZoomIn failed: canvasRef is not available")},[n]),ji=H.useCallback(()=>{n.current?(console.log("[App] ZoomOut called, canvasRef:",n.current),n.current.zoomOut()):console.warn("[App] ZoomOut failed: canvasRef is not available")},[n]);H.useCallback(()=>{Fe(!0)},[Fe]);const Yi=H.useCallback(()=>{Fe(!1)},[Fe]),wa=H.useCallback(()=>{ke(!0)},[ke]),fa=H.useCallback(()=>{ke(!1)},[ke]);H.useCallback(()=>{Ne(!0)},[Ne]),H.useCallback(()=>{Ne(!1)},[Ne]);const xn=H.useCallback((W,G)=>{He({path:W,viewBox:G}),Le("custom"),ke(!1)},[He,Le,ke]),Bo=H.useCallback(W=>{_e(W.target.value)},[_e]),Fo=H.useCallback(()=>{F(q)},[F,q]),Wi=H.useCallback(W=>{F(W)},[F]),z=H.useCallback(W=>{X(W)},[X]);H.useEffect(()=>{const W=G=>{const le=G.target.tagName.toUpperCase();if(le==="INPUT"||le==="TEXTAREA"||G.target.isContentEditable)return;const Ee=G.metaKey||G.ctrlKey;let ze=!1;if(Ee&&G.key.toLowerCase()==="z")G.shiftKey?I():qe(),ze=!0;else if(!Ee)switch(G.key.toLowerCase()){case"b":X("pencil"),ze=!0;break;case"f":X("fill"),ze=!0;break;case"e":X("eraser"),ze=!0;break;case"g":be(),ze=!0;break}ze&&G.preventDefault()};return window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)}},[X,be,qe,I]);const oe=H.useCallback(async(W,G)=>{if(!W||!G){console.error("Import failed: Missing image data or settings."),Ne(!1),f(null);return}const le=parseInt(G.width,10),Ee=parseInt(G.height,10),ze=parseInt(G.maxColors,10);if(!(le>0&&Ee>0&&ze>=2&&ze<=256)){console.error("Import failed: Invalid width, height, or max colors.",G),alert("Invalid import settings. Width/Height must be > 0, Max Colors must be between 2 and 256.");return}try{L(le,Ee);const We=new Image;We.src=W,await new Promise(($e,Ze)=>{We.onload=$e,We.onerror=Ze});const lt=document.createElement("canvas");lt.width=le,lt.height=Ee;const tt=lt.getContext("2d");if(!tt)throw new Error("Failed to get context for final canvas.");tt.imageSmoothingEnabled=!1,tt.drawImage(We,0,0,le,Ee);const Ke=tt.getImageData(0,0,le,Ee),mt=[];for(let $e=0;$e<Ke.data.length;$e+=4){const Ze=Ke.data[$e],Dt=Ke.data[$e+1],St=Ke.data[$e+2];Ke.data[$e+3]>128&&mt.push({r:Ze,g:Dt,b:St,index:$e/4})}const Mt=tS(mt,ze),bt=Array(Ee).fill().map(()=>Array(le).fill(null)),_t=new Set;Mt.forEach($e=>{const Ze=ad($e.center.r,$e.center.g,$e.center.b);_t.add(Ze),$e.pixels.forEach(Dt=>{const St=Dt.index%le,sn=Math.floor(Dt.index/le);sn<bt.length&&St<bt[0].length&&(bt[sn][St]=Ze)})}),xe($e=>{const Ze=[..._t,...$e];return[...new Set(Ze)].slice(0,tz)}),V(bt),a(!0),Ne(!1),f(null)}catch(We){console.error("Error during image import processing:",We),alert(`Image import failed: ${We.message}`)}},[L,V,xe,Ne,f,a,tS,ad]);return H.useEffect(()=>{const W=le=>{const Ee=le.target.tagName;if(!(Ee==="INPUT"||Ee==="TEXTAREA"||Ee==="SELECT")){if(le.key==="Shift"&&(e.current=!0),le.key.toLowerCase()==="x"&&te&&te.length>=2){const ze=te[1];F(ze),console.log(`Swapped active color to: ${ze}`)}if(le.key.toLowerCase()==="c"&&(le.metaKey||le.ctrlKey))if(S){console.log("Copy shortcut detected with selection:",S),le.preventDefault();const{x1:ze,y1:We,x2:lt,y2:tt}=S,Ke=lt-ze+1,mt=tt-We+1,Mt=[];for(let bt=0;bt<mt;bt++){const _t=[];for(let $e=0;$e<Ke;$e++){const Ze=We+bt,Dt=ze+$e;Ze>=0&&Ze<R.length&&Dt>=0&&Dt<R[0].length?_t.push(R[Ze][Dt]):_t.push(null)}Mt.push(_t)}y({width:Ke,height:mt,data:Mt}),console.log("Data copied to buffer:",{width:Ke,height:mt})}else console.log("Copy shortcut ignored, no selection.");if(le.key.toLowerCase()==="x"&&(le.metaKey||le.ctrlKey))if(S){console.log("Cut shortcut detected with selection:",S),le.preventDefault();const{x1:ze,y1:We,x2:lt,y2:tt}=S,Ke=lt-ze+1,mt=tt-We+1,Mt=[];for(let $e=0;$e<mt;$e++){const Ze=[];for(let Dt=0;Dt<Ke;Dt++){const St=We+$e,sn=ze+Dt;St>=0&&St<R.length&&sn>=0&&sn<R[0].length?Ze.push(R[St][sn]):Ze.push(null)}Mt.push(Ze)}y({width:Ke,height:mt,data:Mt}),console.log("Data copied to buffer for cut:",{width:Ke,height:mt});const bt=R.map($e=>[...$e]);let _t=!1;for(let $e=We;$e<=tt;$e++)for(let Ze=ze;Ze<=lt;Ze++)$e>=0&&$e<bt.length&&Ze>=0&&Ze<bt[0].length&&bt[$e][Ze]!==null&&(bt[$e][Ze]=null,_t=!0);_t&&(V(bt),ht({pixelGrid:bt.map($e=>[...$e]),gridDimensions:{...E},type:"cut"})),T(null)}else console.log("Cut shortcut ignored, no selection.")}},G=le=>{le.key==="Shift"&&(e.current=!1)};return window.addEventListener("keydown",W),window.addEventListener("keyup",G),()=>{window.removeEventListener("keydown",W),window.removeEventListener("keyup",G)}},[te,F,S,R,y,V,ht,E,T]),M.jsxs(K5,{children:[M.jsx(yA,{}),M.jsx(sE,{filename:h,onFilenameChange:p,titleElement:M.jsx(ez,{children:"Pixel Pop"}),navMenuElement:M.jsx($O,{onImportImage:jt,onSaveProject:Nt,onLoadProject:Un,onExport:Vn})}),M.jsxs(Q5,{$sidebarVisible:O,children:[M.jsx(DO,{sidebarVisible:O,onSidebarToggle:w,colorHistory:te,onColorSelect:Wi,pickerColor:q,handlePickerChange:Bo,handlePickerBlur:Fo,activeTool:re,handleToolChange:z,gridDimensions:E,setGridDimensions:L,pixelSize:U,setPixelSize:D,gridGap:j,setGridGap:ne,backgroundColor:Z,setBackgroundColor:ue,hasDrawn:t,mode:je,showGrid:nt,onModeChange:ca,handleToggleGrid:si,handleZoomIn:ua,handleZoomOut:ji,rendererType:Pe,setRendererType:we,showPerformanceMonitor:k,setShowPerformanceMonitor:me,onUndo:qe,onRedo:I,canUndo:ct,canRedo:Xe,cornerRadius:K,setCornerRadius:$,glowEnabled:ce,setGlowEnabled:he,glowSettings:Ae,setGlowSettings:De,bulbEnabled:Ve,setBulbEnabled:it,bulbSettings:at,setBulbSettings:et,pixelShape:N,setPixelShape:Le,onShowCustomShapeModal:wa}),M.jsxs(J5,{$backgroundColor:Z,children:[M.jsx(dP,{ref:n,gridDimensions:E,pixelGrid:R,setPixelGrid:V,pixelSize:U,gridGap:j,activeColor:J,activeTool:re,onColorChange:F,mode:je,rendererType:Pe,onDrawStart:ie,activeColorRef:Te,shiftKeyPressedRef:e,lineStartPoint:_,setLineStartPoint:x,selectionArea:S,setSelectionArea:T,copyBuffer:b,cornerRadius:K,glowEnabled:ce,glowSettings:Ae,bulbEnabled:Ve,bulbSettings:at,pixelShape:N,customShape:Oe,backgroundColor:Z,showGrid:nt}),M.jsx(zO,{addRowTop:Me,removeRowTop:Je,addRowBottom:Ie,removeRowBottom:Ut,addColLeft:Pt,removeColLeft:fn,addColRight:gt,removeColRight:Wt,hasDrawn:t,gridWidth:E.width,gridHeight:E.height})]})]}),Be&&M.jsx(u5,{imageUrl:u,onClose:()=>{Ne(!1),f(null)},onImport:oe,importSettings:m,onSettingsChange:v}),Ye&&M.jsx(S5,{onClose:fa,onApply:xn,currentPath:Oe.path,currentViewBox:Oe.viewBox}),pt&&M.jsx(H5,{onClose:Yi,onExport:Ri,onExportToFigma:Xi,canvasRef:n,svgRef:(ge=n.current)==null?void 0:ge.svgRef,gridDimensions:E,pixelSize:U,gridGap:j,showGrid:nt,backgroundColor:Z,pixelData:R,rendererType:Pe,glowEnabled:ce,pixelShape:N,cornerRadius:K,glowSettings:Ae}),M.jsx(X5,{visible:k,rendererType:Pe})]})}_2.createRoot(document.getElementById("root")).render(M.jsx(dt.StrictMode,{children:M.jsx(nz,{})}));
