!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=452)}({452:function(e,t,n){n(53),e.exports=n(453)},453:function(e,t,n){"use strict";n.r(t);n(454);document.addEventListener("DOMContentLoaded",(function(){var e="";"undefined"!=typeof window&&window.addEventListener("message",(function(t){if("https://subscribe.wordpress.com"===t.origin&&t.data){var n=JSON.parse(t.data);if(n&&n.result&&n.result.jwt_token){e=n.result.jwt_token;var r=new Date;r.setTime(r.getTime()+31536e6),document.cookie="jp-premium-content-session="+e+"; expires="+r.toGMTString()+"; path=/"}n&&"close"===n.action&&e&&(document.location.href=function(e,t,n){var r=new RegExp("([?&])"+t+"=.*?(&|$)","i"),o=-1!==e.indexOf("?")?"&":"?";if(e.match(r))return e.replace(r,"$1"+t+"="+n+"$2");return e+o+t+"="+n}(document.location.href,"token",e))}}),!1)}))},454:function(e,t,n){},47:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,n){"use strict";n.r(t);n(47)}}));