!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=434)}({367:function(e,t,n){"use strict";function r(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){var t=JSON.parse(e.data);t&&"close"===t.action&&(window.removeEventListener("message",r),tb_remove())}}n.d(t,"a",(function(){return o}));var o=function(e){Array.prototype.slice.call(document.querySelectorAll(e)).forEach((function(e){if("true"!==e.getAttribute("data-jetpack-memberships-button-initialized")){try{!function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");window.scrollTo(0,0),tb_show(null,n+"&display=alternate&TB_iframe=true",null),window.addEventListener("message",r,!1),document.querySelector("#TB_window").classList.add("jetpack-memberships-modal"),window.scrollTo(0,0)}))}(e)}catch(t){console.error("Problem setting up Thickbox",t)}e.setAttribute("data-jetpack-memberships-button-initialized","true")}}))}},434:function(e,t,n){n(53),e.exports=n(435)},435:function(e,t,n){"use strict";n.r(t);var r=n(56),o=n.n(r),i=n(367);n(436);"undefined"!=typeof window&&o()((function(){return Object(i.a)(".wp-block-jetpack-recurring-payments a")}))},436:function(e,t,n){},47:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,n){"use strict";n.r(t);n(47)},56:function(e,t){!function(){e.exports=this.wp.domReady}()}}));