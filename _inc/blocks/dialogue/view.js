!function(){var t={37836:function(t,e,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},9818:function(t){"use strict";t.exports=window.wp.data},47701:function(t){"use strict";t.exports=window.wp.domReady}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../"}(),function(){"use strict";r(37836)}(),function(){"use strict";var t=r(47701),e=r.n(t),n=r(9818);const o="jetpack/media-source";e()((function(){const t=(0,n.select)(o)?.getDefaultMediaSource();t||document?.body.classList.add("no-media-source"),document.body.addEventListener("click",(e=>{if(!e?.target?.classList?.contains("wp-block-jetpack-dialogue__timestamp_link"))return;const r=e.target?.href?.split("#")?.[1];r&&t&&(e.preventDefault(),(0,n.dispatch)(o).setMediaSourceCurrentTime(t.id,r),(0,n.dispatch)(o).playMediaSource(t.id,r))}))}))}()}();