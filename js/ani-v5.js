!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Ani",[],t):"object"==typeof exports?exports.Ani=t():e.Ani=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={initialized:!1,force_post:!0,url:"https://suggestion.ciceksepeti.com/api/v1/",const:{ani_id:"ani_id",ls_recentlyView_key:"recentlyViewedProducts",event_productView:"ProductViewEvent",event_maxProductEvent:8}},e.exports=t.default},function(e,t,n){"use strict";function o(){}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createCookie=function(e,t,n){var o=void 0;if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),o="; expires="+r.toGMTString()}else o="";document.cookie=e+"="+t+o+"; path=/"},t.getCookie=function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!==t){t=t+e.length+1;var n=document.cookie.indexOf(";",t);return-1===n&&(n=document.cookie.length),unescape(document.cookie.substring(t,n))}}return""}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=(0,c.default)(s.default.const.ani_id);return e||(e=(0,l.default)(),(0,c.default)(s.default.const.ani_id,e),(0,u.default)("Identifier not found, new one generated")),(0,u.default)("Identifier: ",e),e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),a=n(9),l=o(a),f=n(11),c=o(f),d=n(0),s=o(d);t.default=r,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){(0,a.default)("Sending XML HTTP request");var o=window.XMLHttpRequest?new window.XMLHttpRequest:window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):null,r=i(t),u=r.length>=2e3?"POST":"GET",l=f.default.url+e;f.default.force_post&&(u="POST"),"GET"===u?o.open("GET",l+"?"+r,!0):(o.open("POST",l,!0),o.setRequestHeader("Content-type","application/json; charset=utf8")),o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){if("function"==typeof n){var e=null;this.responseText.length>2&&(e=JSON.parse(this.responseText),n(!0,e)),n(!1)}}else 4===this.readyState&&((0,a.default)("Failed Server XML HTTP request",this.status),"function"==typeof n&&n(!1))},"GET"===u?o.send():o.send(JSON.stringify(t))}function i(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}Object.defineProperty(t,"__esModule",{value:!0}),t.sendRequest=r,t.prepareParams=i;var u=n(1),a=o(u),l=n(0),f=o(l)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=window.ani||[];if(e.length>0){for(var t=void 0,n=-1,o=0;o<e.length;++o)if("apiKey"===e[o][0]){n=o;break}if(-1===n)return void console.warn("Ani api key was not found!");0!==n&&e.splice(0,0,e.splice(n,1)[0]);for(var r=0;r<e.length;r++)if(t=e[r],(0,u.default)("Processing queued call",t),t.constructor===Array&&t.length>0)if("apiKey"===t[0])l.default.apiKey=t[1];else{var i=l.default[t[0]];i&&i.apply(null,t.slice(1))}var a="1.0.0";window.ani={push:function(e){(0,u.default)("Processing array call",e);var t=l.default[e[0]];t&&t.apply(null,e.slice(1))},version:a},(0,u.default)("process finished")}else console.warn("Ani api key was not found!")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(1),u=o(i),a=n(2),l=o(a);e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){(0,u.default)("Track Event "+e);var t={ApiKey:l.default.apiKey,Identifier:(0,s.default)()};for(var n in e)t[n]=e[n];if(c.sendRequest("events",t,function(e){(0,u.default)("XHR finished with",e)}),e.EventName===v.default.const.event_productView){var o=(0,y.getCookie)(v.default.const.ls_recentlyView_key),r=[];try{JSON.parse(o)&&(r=JSON.parse(o)),r.indexOf(e.ProductCode)>=0&&r.splice(r.indexOf(e.ProductCode),1),r.splice(0,0,e.ProductCode),r.length>v.default.const.event_maxProductEvent&&(r.splice(v.default.const.event_maxProductEvent,1),r=r.slice(0,v.default.const.event_maxProductEvent)),(0,y.createCookie)(v.default.const.ls_recentlyView_key,JSON.stringify(r))}catch(t){(0,y.createCookie)(v.default.const.ls_recentlyView_key),r.push(e.ProductCode),(0,y.createCookie)(v.default.const.ls_recentlyView_key,JSON.stringify(r))}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),a=n(2),l=o(a),f=n(5),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),d=n(4),s=o(d),p=n(0),v=o(p),y=n(3);t.default=r,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){(0,u.default)("Track Widget "+e);try{e.ProductCodeList=JSON.parse((0,y.getCookie)(v.default.const.ls_recentlyView_key))}catch(e){(0,y.createCookie)(v.default.const.ls_recentlyView_key,"")}var n={ApiKey:l.default.apiKey,Identifier:(0,s.default)()};for(var o in e)n[o]=e[o];c.sendRequest("widget",n,function(e,n){(0,u.default)("XHR finished with",e),e&&t&&t(n)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=o(i),a=n(2),l=o(a),f=n(5),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),d=n(4),s=o(d),p=n(0),v=o(p),y=n(3);t.default=r,e.exports=t.default},function(e,t,n){"use strict";function o(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(7),i=o(r),u=n(8),a=o(u),l=n(6),f=o(l),c=n(0),d=o(c),s=n(2),p=o(s);p.default.trackEvent=i.default,p.default.widget=a.default,p.default.init=f.default,d.default.initialized||p.default.init()},function(e,t,n){"use strict";function o(e,t,n){function o(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="; expires="+o.toGMTString();document.cookie=e+"="+t+r+"; path=/"}n=n||!1;var i,u=!1;if(void 0!==window.localStorage){u=!0;try{window.localStorage.setItem("testLocal",!0)}catch(e){u=!1}}if(void 0!==t&&null!==t&&("object"===(void 0===t?"undefined":r(t))&&(t=JSON.stringify(t)),u?window.localStorage.setItem(e,t):n||o(e,t,30)),void 0===t){u?i=window.localStorage.getItem(e):n||(i=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0,r=n.length;o<r;o++){var i=n[o];if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}(e));try{i=JSON.parse(i)}catch(e){}return i}null===t&&(u?window.localStorage.removeItem(e):n||o(e,"",-1))}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o,e.exports=t.default}])});