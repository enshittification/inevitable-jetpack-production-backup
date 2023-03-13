(()=>{var t={6209:(t,e,n)=>{"use strict";n.d(e,{Z:()=>M});var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=2;var a=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&u()}function a(){s(o)}function u(){var t=Date.now();if(n){if(t-i<c)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),d=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=w(0,0,0,0);function p(t){return parseFloat(t)||0}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=p(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=p(r.width),a=p(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=_(r,"left","right")+o),Math.round(a+s)!==n&&(a-=_(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var u=Math.round(c+o)-e,h=Math.round(a+s)-n;1!==Math.abs(u)&&(c-=u),1!==Math.abs(h)&&(a-=h)}return w(i.left,i.top,c,a)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return i?b(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):v(t):l}function w(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,i,o,s,c,a,u=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),d(a,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),a);d(this,{target:t,contentRect:u})},E=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,A=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),r=new E(e,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){A.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));const M=void 0!==o.ResizeObserver?o.ResizeObserver:A},3740:(t,e,n)=>{"use strict";n.d(e,{q3:()=>r});const r=4},99856:(t,e,n)=>{"use strict";n.d(e,{i:()=>o});var r=n(3740);function i(t,e){const n=(e-t.reduce(((t,e)=>t+e),0))/t.length;return t.map((t=>t+n))}function o(t,e){return function(t,e,n){let[o,h]=e;const d=1/o*(n-r.q3*(t.childElementCount-1)-h);return function(t,e){let{rawHeight:n,rowWidth:o}=e;const h=s(t),d=h.map((t=>(n-r.q3*(t.childElementCount-1))*a(t)[0])),f=i(d,o);h.forEach(((t,e)=>{const o=d[e],s=f[e];!function(t,e){let{colHeight:n,width:r,rawWidth:o}=e;const s=c(t).map((t=>o/u(t))),a=i(s,n);Array.from(t.children).forEach(((t,e)=>{const n=a[e];t.setAttribute("style",`height:${n}px;width:${r}px;`)}))}(t,{colHeight:n-r.q3*(t.childElementCount-1),width:s,rawWidth:o})}));return f.map((t=>parseFloat(t/o*100).toFixed(5)))}(t,{rawHeight:d,rowWidth:n-r.q3*(t.childElementCount-1)})}(t,function(t){const e=s(t).map(a).reduce(((t,e)=>{let[n,r]=t,[i,o]=e;return[n+i,r+o]}),[0,0]);return e}(t),e)}function s(t){return Array.from(t.querySelectorAll(".tiled-gallery__col"))}function c(t){return Array.from(t.querySelectorAll(".tiled-gallery__item > img, .tiled-gallery__item > a > img"))}function a(t){const e=c(t),n=e.length,r=1/e.map(u).reduce(((t,e)=>t+1/e),0);return[r,r*n||1]}function u(t){const e=parseInt(t.dataset.width,10),n=parseInt(t.dataset.height,10);return e&&!Number.isNaN(e)&&n&&!Number.isNaN(n)?e/n:1}},80425:(t,e,n)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:t=>{"use strict";t.exports=window.wp.domReady}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"})(),(()=>{"use strict";n(80425)})(),(()=>{"use strict";var t=n(47701),e=n.n(t),r=n(6209),i=n(99856);function o(t){o.pendingRaf&&cancelAnimationFrame(o.pendingRaf),o.pendingRaf=requestAnimationFrame((()=>{o.pendingRaf=null;for(const e of t){const{width:t}=e.contentRect;Array.from(e.target.querySelectorAll(".tiled-gallery__row")).forEach((e=>(0,i.i)(e,t)))}}))}const s=()=>{const t=Array.from(document.querySelectorAll(".wp-block-jetpack-tiled-gallery.is-style-rectangular > .tiled-gallery__gallery,.wp-block-jetpack-tiled-gallery.is-style-columns > .tiled-gallery__gallery"));if(0===t.length)return;const e=new r.Z(o);t.forEach((t=>{"true"!==t.getAttribute("data-jetpack-block-initialized")&&(e.observe(t),t.setAttribute("data-jetpack-block-initialized","true"))}))};"undefined"!=typeof window&&e()(s)})()})();