!function(){var t={9453:function(t,e){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!n.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},2596:function(t,e,n){var r=n(2373).Symbol;t.exports=r},563:function(t,e,n){var r=n(2596),o=n(8703),i=n(888),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},1367:function(t,e,n){var r=n(4120),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},2117:function(t){var e="object"==typeof window&&window&&window.Object===Object&&window;t.exports=e},8703:function(t,e,n){var r=n(2596),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(s){}var o=c.call(t);return r&&(e?t[u]=n:delete t[u]),o}},888:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2373:function(t,e,n){var r=n(2117),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},4120:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},5034:function(t,e,n){var r=n(7709),o=n(6987),i=n(5812),c=Math.max,u=Math.min;t.exports=function(t,e,n){var s,a,l,f,p,d,v=0,b=!1,m=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var n=s,r=a;return s=a=void 0,v=e,f=t.apply(r,n)}function g(t){return v=t,p=setTimeout(_,e),b?w(t):f}function h(t){var n=t-d;return void 0===d||n>=e||n<0||m&&t-v>=l}function _(){var t=o();if(h(t))return x(t);p=setTimeout(_,function(t){var n=e-(t-d);return m?u(n,l-(t-v)):n}(t))}function x(t){return p=void 0,y&&s?w(t):(s=a=void 0,f)}function j(){var t=o(),n=h(t);if(s=arguments,a=this,d=t,n){if(void 0===p)return g(d);if(m)return clearTimeout(p),p=setTimeout(_,e),w(d)}return void 0===p&&(p=setTimeout(_,e)),f}return e=i(e)||0,r(n)&&(b=!!n.leading,l=(m="maxWait"in n)?c(i(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=a=p=void 0},j.flush=function(){return void 0===p?f:x(o())},j}},7709:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},3474:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},1995:function(t,e,n){var r=n(563),o=n(3474);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},6987:function(t,e,n){var r=n(2373);t.exports=function(){return r.Date.now()}},5812:function(t,e,n){var r=n(1367),o=n(7709),i=n(1995),c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||s.test(t)?a(t.slice(2),n?2:8):c.test(t)?NaN:+t}},2768:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}();var r={};!function(){"use strict";n(2768)}(),function(){"use strict";n.r(r);var t=window.wp.domReady,e=n.n(t),o=n(5034),i=n.n(o),c=n(9453);const u="wp-block-jetpack-mailchimp";function s(t,e){const n=e.value,r="error";return e.classList.remove(r),!!c.validate(n)||(e.classList.add(r),"function"==typeof document.createElement("input").reportValidity&&t.reportValidity(),!1)}const a=(t,e)=>i()((()=>{s(t,e)}),1e3);function l(t,e){const n=t.querySelector("form"),r=t.querySelector("input[name=email]"),o=t.querySelector("."+u+"_processing"),i=t.querySelector("."+u+"_error"),c=t.querySelector("."+u+"_success");r.addEventListener("input",a(n,r)),n.addEventListener("submit",(u=>{u.preventDefault();const l=r.value,f=[].slice.call(n.querySelectorAll("input[type=hidden].mc-submit-param")).reduce(((t,e)=>({...t,[e.name]:e.value})),{});s(n,r)&&(t.classList.add("is-processing"),r.removeEventListener("input",a(n,r)),o.classList.add("is-visible"),function(t,e,n){let r="https://public-api.wordpress.com/rest/v1.1/sites/"+encodeURIComponent(t)+"/email_follow/subscribe?email="+encodeURIComponent(e);for(const o in n)r+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);return new Promise((function(t,e){const n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){if(200===n.status){const e=JSON.parse(n.responseText);t(e)}else{const t=JSON.parse(n.responseText);e(t)}},n.send()}))}(e,l,f).then((t=>{o.classList.remove("is-visible"),t.error&&"member_exists"!==t.error?i.classList.add("is-visible"):c.classList.add("is-visible")}),(()=>{o.classList.remove("is-visible"),i.classList.add("is-visible")})))}))}const f=()=>{Array.from(document.querySelectorAll("."+u)).forEach((t=>{if("true"===t.getAttribute("data-jetpack-block-initialized"))return;const e=t.getAttribute("data-blog-id");try{l(t,e)}catch(n){0}t.setAttribute("data-jetpack-block-initialized","true")}))};"undefined"!=typeof window&&e()(f)}();var o=window;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})}();