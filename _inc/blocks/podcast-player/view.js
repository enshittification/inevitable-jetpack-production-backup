!function(){var e={3197:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},9105:function(e,t){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var n=s.apply(null,r);n&&e.push(n)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},2002:function(e){var t=1e3,r=60*t,a=60*r,s=24*a,o=7*s,n=365.25*s;function i(e,t,r,a){var s=t>=1.5*r;return Math.round(e/r)+" "+a+(s?"s":"")}e.exports=function(e,c){c=c||{};var l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!i)return;var c=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*n;case"weeks":case"week":case"w":return c*o;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*a;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&isFinite(e))return c.long?function(e){var o=Math.abs(e);if(o>=s)return i(e,o,s,"day");if(o>=a)return i(e,o,a,"hour");if(o>=r)return i(e,o,r,"minute");if(o>=t)return i(e,o,t,"second");return e+" ms"}(e):function(e){var o=Math.abs(e);if(o>=s)return Math.round(e/s)+"d";if(o>=a)return Math.round(e/a)+"h";if(o>=r)return Math.round(e/r)+"m";if(o>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},2768:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},2521:function(e,t,r){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let a=0,s=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(a++,"%c"===e&&(s=a))})),t.splice(s,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(r){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(r){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(6709)(t);const{formatters:a}=e.exports;a.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},6709:function(e,t,r){e.exports=function(e){function t(e){let r,s=null;function o(...e){if(!o.enabled)return;const a=o,s=Number(new Date),n=s-(r||s);a.diff=n,a.prev=r,a.curr=s,r=s,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((r,s)=>{if("%%"===r)return"%";i++;const o=t.formatters[s];if("function"==typeof o){const t=e[i];r=o.call(a,t),e.splice(i,1),i--}return r})),t.formatArgs.call(a,e);(a.log||t.log).apply(a,e)}return o.namespace=e,o.useColors=t.useColors(),o.color=t.selectColor(e),o.extend=a,o.destroy=t.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null===s?t.enabled(e):s,set:e=>{s=e}}),"function"==typeof t.init&&t.init(o),o}function a(e,r){const a=t(this.namespace+(void 0===r?":":r)+e);return a.log=this.log,a}function s(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(s),...t.skips.map(s).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.names=[],t.skips=[];const a=("string"==typeof e?e:"").split(/[\s,]+/),s=a.length;for(r=0;r<s;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,a;for(r=0,a=t.skips.length;r<a;r++)if(t.skips[r].test(e))return!1;for(r=0,a=t.names.length;r<a;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(2002),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((r=>{t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}();var a={};!function(){"use strict";r(2768)}(),function(){"use strict";r.r(a);var e={};r.r(e),r.d(e,{error:function(){return j},playing:function(){return T}});var t=r(2521),s=r.n(t),o=window.wp.element,n=window.wp.data;const i="jetpack/media-source",c="is-playing",l="is-error",d="is-paused",u={sources:{},default:null},p={getDefaultMediaSource(e){let t=null;const r=Object.keys(e.sources);if(e.default?t=e.default:null!=r&&r.length&&(t=e.sources[r[0]].id),t)return e.sources[t]},getMediaPlayerState(e,t){var r;const a=t?null===(r=e.sources)||void 0===r?void 0:r[t]:p.getDefaultMediaSource(e);return null==a?void 0:a.state},getMediaSourceCurrentTime(e,t){var r;const a=t?null===(r=e.sources)||void 0===r?void 0:r[t]:p.getDefaultMediaSource(e);return null==a?void 0:a.currentTime},getMediaSourceDuration(e,t){var r,a;if(!t){const t=p.getDefaultMediaSource(e);return null==t?void 0:t.duration}return null===(r=e.sources)||void 0===r||null===(a=r[t])||void 0===a?void 0:a.duration},getMediaSourceDomReference(e,t){var r;const a=t?null===(r=e.sources)||void 0===r?void 0:r[t]:p.getDefaultMediaSource(e);if(!a)return;const s=null==a?void 0:a.domId;return s?document.getElementById(s):void 0}};var m={reducer(e=u,t){var r;const a=t.id||e.default||(null===(r=Object.keys(e.sources))||void 0===r?void 0:r[0]);switch(t.type){case"REGISTER_MEDIA_SOURCE":return{...e,sources:{...e.sources,[t.id]:{id:t.id,...t.mediaSourceState}}};case"UPDATE_MEDIA_SOURCE_DATA":return{...e,sources:{...e.sources,[t.id]:{...e.sources[t.id],...t.data}}};case"UNREGISTER_MEDIA_SOURCE":{const r=Object.assign({},e);var s;if(r.sources[t.id]&&delete r.sources[t.id],t.id===e.default)r.default=null===(s=Object.keys(e.sources))||void 0===s?void 0:s[0];return r}case"SET_DEFAULT_MEDIA_SOURCE":return{...e,default:t.id};case"SET_MEDIA_PLAYER_STATE":return{...e,sources:{...e.sources,[a]:{...e.sources[a],state:t.state}}};case"TOGGLE_MEDIA_PLAYER_STATE":return{...e,sources:{...e.sources,[a]:{...e.sources[a],state:e.sources[a].state===c?d:c}}};case"SET_MEDIA_PLAYER_CURRENT_TIME":return{...e,sources:{...e.sources,[a]:{...e.sources[a],currentTime:t.currentTime}}}}return e},actions:{registerMediaSource:(e,t)=>({type:"REGISTER_MEDIA_SOURCE",id:e,mediaSourceState:t}),updateMediaSourceData:(e,t)=>({type:"UPDATE_MEDIA_SOURCE_DATA",id:e,data:t}),unregisterMediaSource:e=>({type:"UNREGISTER_MEDIA_SOURCE",id:e}),setDefaultMediaSource:e=>({type:"SET_DEFAULT_MEDIA_SOURCE",id:e}),playMediaSource:e=>({type:"SET_MEDIA_PLAYER_STATE",id:e,state:c}),toggleMediaSource:e=>({type:"TOGGLE_MEDIA_PLAYER_STATE",id:e}),pauseMediaSource:e=>({type:"SET_MEDIA_PLAYER_STATE",id:e,state:d}),errorMediaSource:e=>({type:"SET_MEDIA_PLAYER_STATE",id:e,state:l}),setMediaSourceCurrentTime:(e,t)=>({type:"SET_MEDIA_PLAYER_CURRENT_TIME",id:e,currentTime:t})},selectors:p};if(void 0!==n.createReduxStore){const e=(0,n.createReduxStore)(i,m);(0,n.register)(e)}else(0,n.registerStore)(i,m);var h=r(3197),y=r.n(h),f=r(9105),g=r.n(f),k=window.wp.i18n,v=window.wp.a11y,E=window.wp.compose,C=window.lodash;const __=k.__,_="undefined"!=typeof _wpmejsSettings?_wpmejsSettings:{};function S(e,t,r){const a=document.createElement("div");a.className=e;const s=document.createElement("button");return s.innerText=t,s.addEventListener("click",r),s.setAttribute("aria-label",t),s.setAttribute("title",t),a.appendChild(s),a}var w=function({trackSource:e,onPlay:t,onPause:r,onError:a,onTimeChange:s,onSkipForward:n,onJumpBack:i,currentTime:u,playStatus:p="is-paused",onMetadataLoaded:m,loadWhenReady:h=!1,preload:y="metadata"}){const f=(0,o.useRef)(),g=()=>{f.current.play().catch((()=>{}))},k=()=>{f.current.pause(),(0,v.speak)(__("Paused","jetpack"),"assertive")};return(0,o.useEffect)((()=>{MediaElementPlayer.prototype._setResponsiveMode||(MediaElementPlayer.prototype._setResponsiveMode=MediaElementPlayer.prototype.setResponsiveMode,MediaElementPlayer.prototype.setResponsiveMode=function(){const e=this;e.getElement(e.container).parentNode&&e._setResponsiveMode()})}),[]),(0,o.useEffect)((()=>{const e=f.current;e.preload=y;const s=new MediaElementPlayer(e,{..._,success:()=>h&&(null==e?void 0:e.load())});if(i||n){const e=`${s.options.classPrefix}button ${s.options.classPrefix}jump-button`;if(i){const t=`${e} ${s.options.classPrefix}jump-backward-button`;s.addControlElement(S(t,__("Jump Back","jetpack"),i),"jumpBackwardButton")}if(n){const t=`${e} ${s.options.classPrefix}skip-forward-button`;s.addControlElement(S(t,__("Skip Forward","jetpack"),n),"skipForwardButton")}}return t&&e.addEventListener("play",t),r&&e.addEventListener("pause",r),a&&e.addEventListener("error",a),m&&e.addEventListener("loadedmetadata",m),()=>{s.remove(),t&&e.removeEventListener("play",t),r&&e.removeEventListener("pause",r),a&&e.removeEventListener("error",a),m&&e.removeEventListener("loadedmetadata",m)}}),[t,r,a,i,n,m,h,y]),(0,o.useEffect)((()=>{var e;const[t,r]=!1===(null===(e=f.current)||void 0===e?void 0:e.paused)?[c,k]:[d,g],a=(0,C.debounce)(r,100);return l!==p&&t!==p&&a(),()=>{a.cancel()}}),[f,p,e]),(0,o.useEffect)((()=>{if(!s)return;const e=f.current,t=(0,C.throttle)((e=>s(e)),1e3,{leading:!0,trailing:!1}),r=e=>t(e.target.currentTime);return s&&(null==e||e.addEventListener("timeupdate",r)),()=>{t.cancel(),null==e||e.removeEventListener("timeupdate",r)}}),[f,s]),(0,o.useEffect)((()=>{const e=f.current;u&&e&&Math.abs(Math.floor(u-e.currentTime))>1&&(e.currentTime=u)}),[f,u]),(0,o.createElement)("div",{className:"jetpack-audio-player"},(0,o.createElement)("audio",{src:e,ref:f}))},b=window.wp.components;const M={height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},T=(0,o.createElement)(b.SVG,M,(0,o.createElement)(b.Path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,o.createElement)(b.Path,{d:"M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"})),j=(0,o.createElement)(b.SVG,M,(0,o.createElement)(b.Path,{d:"M0 0h24v24H0V0z",fill:"none"}),(0,o.createElement)(b.Path,{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),F=k.__;var A=(0,o.memo)((({isPlaying:t,isError:r,className:a})=>{let s,n;r?(n="error",s=F("Error:","jetpack")):t&&(n="playing",s=F("Playing:","jetpack"));const i=e[n];return i?(0,o.createElement)("span",{className:`${a} ${a}--${n}`},(0,o.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"},`${s} `),i):(0,o.createElement)("span",{className:a})}));const I=k.__;var P=(0,o.memo)((({link:e,title:t,colors:r})=>(0,o.createElement)("div",{className:"jetpack-podcast-player__track-error"},I("Episode unavailable. ","jetpack"),e&&(0,o.createElement)("span",{className:r.secondary.classes,style:{color:r.secondary.custom}},(0,o.createElement)("a",{className:"jetpack-podcast-player__link",href:e,rel:"noopener noreferrer nofollow",target:"_blank"},(0,o.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"},`${(0,k.sprintf)(I("%s:","jetpack"),t)} `),I("Open in a new tab","jetpack"))))));function D(e,t){if(e&&t)return`has-${t}-${e}`}const x=(0,C.memoize)((({primaryColor:e,customPrimaryColor:t,secondaryColor:r,customSecondaryColor:a,backgroundColor:s,customBackgroundColor:o})=>{const n=D("color",e),i=D("color",r),c=D("background-color",s);return{primary:{name:e,custom:t,classes:g()({"has-primary":n||t,[n]:n})},secondary:{name:r,custom:a,classes:g()({"has-secondary":i||a,[i]:i})},background:{name:s,custom:o,classes:g()({"has-background":c||o,[c]:c})}}}),(e=>Object.values(e).join())),N=k.__;var R=(0,o.memo)((({track:e,isActive:t,isPlaying:r,isError:a,selectTrack:s,index:n,colors:i={primary:{},secondary:{}}})=>{const c=D("color",i.primary.name),l=D("color",i.secondary.name),d=g()("jetpack-podcast-player__track",{"is-active":t,"has-primary":t&&(i.primary.name||i.primary.custom),[c]:t&&!!c,"has-secondary":!t&&(i.secondary.name||i.secondary.custom),[l]:!t&&!!l}),u={};t&&i.primary.custom&&!c?u.color=i.primary.custom:t||!i.secondary.custom||l||(u.color=i.secondary.custom);const p=t?N("track","jetpack"):void 0;return(0,o.createElement)("li",{className:d,style:Object.keys(u).length?u:null},(0,o.createElement)("a",{className:"jetpack-podcast-player__link jetpack-podcast-player__track-link",href:e.link||e.src,role:"button","aria-current":p,onClick:e=>{e.shiftKey||e.metaKey||e.altKey||(e.preventDefault(),s(n))},onKeyDown:e=>{" "===event.key&&(e.preventDefault(),s(n))}},(0,o.createElement)(A,{className:"jetpack-podcast-player__track-status-icon",isPlaying:r,isError:a}),(0,o.createElement)("span",{className:"jetpack-podcast-player__track-title"},e.title),e.duration&&(0,o.createElement)("time",{className:"jetpack-podcast-player__track-duration",dateTime:e.duration},e.duration)),t&&a&&(0,o.createElement)(P,{link:e.link,title:e.title,colors:i}))}));var L=(0,o.memo)((({playerId:e,tracks:t,selectTrack:r,currentTrack:a,playerState:s,colors:n})=>(0,o.createElement)("ol",{className:"jetpack-podcast-player__tracks","aria-labelledby":`jetpack-podcast-player__tracklist-title--${e}`,"aria-describedby":`jetpack-podcast-player__tracklist-description--${e}`},t.map(((e,t)=>{const i=a===t;return(0,o.createElement)(R,{key:e.id,index:t,track:e,selectTrack:r,isActive:i,isPlaying:i&&s===c,isError:i&&s===l,colors:n})})))));var O=(0,o.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(b.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));const $=(0,o.memo)((({playerId:e,title:t,cover:r,link:a,track:s,children:n,showEpisodeTitle:i,showCoverArt:c,showEpisodeDescription:l,colors:d})=>c||i||l?(0,o.createElement)("div",{className:"jetpack-podcast-player__header"},(0,o.createElement)("div",{className:"jetpack-podcast-player__current-track-info"},c&&r&&(0,o.createElement)("div",{className:"jetpack-podcast-player__cover"},(0,o.createElement)("img",{className:"jetpack-podcast-player__cover-image",src:r,alt:""})),i&&!!(t||s&&s.title)&&(0,o.createElement)(U,{playerId:e,title:t,link:a,track:s,colors:d})),!!(l&&s&&s.description)&&(0,o.createElement)("p",{id:`${e}__track-description`,className:"jetpack-podcast-player__track-description"},s.description),n):n)),U=(0,o.memo)((({playerId:e,title:t,link:r,track:a,colors:s={primary:{name:null,custom:null,classes:""}}})=>(0,o.createElement)("h2",{id:`${e}__title`,className:"jetpack-podcast-player__title"},!(!a||!a.title)&&(0,o.createElement)("span",{className:g()("jetpack-podcast-player__current-track-title",s.primary.classes),style:{color:s.primary.custom}},a.title,(0,o.createElement)("a",{className:"jetpack-podcast-player__track-title-link",href:a.link||a.src,target:"_blank",rel:"noopener noreferrer nofollow"},O)),!!(a&&a.title&&t)&&(0,o.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"}," - "),!!t&&(0,o.createElement)(z,{title:t,link:r,colors:s})))),z=(0,o.memo)((({title:e,link:t})=>(0,o.createElement)("span",{className:"jetpack-podcast-player__podcast-title"},t?(0,o.createElement)("a",{className:"jetpack-podcast-player__link",href:t,target:"_blank",rel:"noopener noreferrer nofollow"},e):{title:e})));var B=$;const H=k.__;const G=k.__;class J extends o.Component{constructor(...e){super(...e),y()(this,"state",{currentTrack:0,hasUserInteraction:!1}),y()(this,"recordUserInteraction",(()=>{this.state.hasUserInteraction||this.setState({hasUserInteraction:!0})})),y()(this,"selectTrack",(e=>{const{currentTrack:t}=this.state;if(t===e)return this.recordUserInteraction(),void this.props.toggleMediaSource(this.props.playerId);-1!==t&&this.props.pauseMediaSource(this.props.playerId),this.loadAndPlay(e)})),y()(this,"loadTrack",(e=>{const t=this.getTrack(e);if(!t)return!1;this.state.currentTrack!==e&&this.setState({currentTrack:e});const{title:r,link:a,description:s}=t;return this.props.updateMediaSourceData(this.props.playerId,{title:r,link:a}),(0,v.speak)(`${(0,k.sprintf)(G("Loading: %s","jetpack"),r)} ${s}`,"assertive"),!0})),y()(this,"loadAndPlay",(e=>{this.recordUserInteraction(),this.loadTrack(e)&&this.props.playMediaSource(this.props.playerId)})),y()(this,"getTrack",(e=>this.props.tracks[e])),y()(this,"handleError",(e=>{if(!this.state.hasUserInteraction){const t=window.navigator.userAgent.match(/Trident\/7\./)?"IE11: Playing sounds in webpages setting is not checked":e;this.setState((()=>{throw new Error(t)}))}this.props.errorMediaSource(this.props.playerId),(0,v.speak)(`${G("Error: Episode unavailable - Open in a new tab","jetpack")}`,"assertive")})),y()(this,"handlePlay",(()=>{this.props.playMediaSource(this.props.playerId),this.setState({hasUserInteraction:!0})})),y()(this,"handlePause",(()=>{this.props.pauseMediaSource(this.props.playerId),this.props.playerState!==l&&this.props.pauseMediaSource(this.props.playerId)})),y()(this,"handleTimeChange",(e=>{this.props.setMediaSourceCurrentTime(this.props.playerId,e)})),y()(this,"handleJump",(()=>{this.props.setMediaSourceCurrentTime(this.props.playerId,this.props.currentTime-5)})),y()(this,"handleSkip",(()=>{this.props.setMediaSourceCurrentTime(this.props.playerId,this.props.currentTime+30)})),y()(this,"updateMediaData",(e=>{var t,r;this.props.updateMediaSourceData(this.props.playerId,{duration:null===(t=e.target)||void 0===t?void 0:t.duration,domId:null===(r=e.target)||void 0===r?void 0:r.id})}))}registerPlayer(){const e=this.getTrack(this.state.currentTrack)||{},{playerId:t}=this.props;this.props.registerMediaSource(t,{title:e.title,link:e.link,state:d}),this.props.setDefaultMediaSource(t)}componentDidMount(){this.props.playerId&&this.registerPlayer()}componentWillUnmount(){this.props.playerId&&this.props.unregisterMediaSource(this.props.playerId)}componentDidUpdate(e){const t=e=>null!=e&&e.length?e.map((e=>e.guid)):[],r=t(this.props.tracks),a=new Set(t(e.tracks));r.length===a.size&&r.every((e=>a.has(e)))||this.loadTrack(0)}static getDerivedStateFromProps(e,t){return e.tracks.length<=t.currentTrack?{...t,currentTrack:0}:null}render(){const{playerId:e,title:t,link:r,cover:a,tracks:s,attributes:n,currentTime:i,playerState:c}=this.props,{itemsToShow:l,primaryColor:d,customPrimaryColor:u,hexPrimaryColor:p,secondaryColor:m,customSecondaryColor:h,hexSecondaryColor:y,backgroundColor:f,customBackgroundColor:v,hexBackgroundColor:E,showCoverArt:C,showEpisodeTitle:_,showEpisodeDescription:S}=n,{currentTrack:b}=this.state,M=s.slice(0,l),T=this.getTrack(b),j=x({primaryColor:d,customPrimaryColor:u,secondaryColor:m,customSecondaryColor:h,backgroundColor:f,customBackgroundColor:v}),F={color:h,backgroundColor:v,"--jetpack-podcast-player-primary":p,"--jetpack-podcast-player-secondary":y,"--jetpack-podcast-player-background":E},A=g()("jetpack-podcast-player",c,j.secondary.classes,j.background.classes);return(0,o.createElement)("section",{className:A,style:F,"aria-labelledby":t||T&&T.title?`${e}__title`:void 0,"aria-describedby":T&&T.description?`${e}__track-description`:void 0,"data-jetpack-iframe-ignore":!0},(0,o.createElement)(B,{playerId:e,title:t,link:r,cover:a,track:this.getTrack(b),showCoverArt:C,showEpisodeTitle:_,showEpisodeDescription:S,colors:j},(0,o.createElement)(w,{onJumpBack:this.handleJump,onSkipForward:this.handleSkip,trackSource:this.getTrack(b).src,onPlay:this.handlePlay,onPause:this.handlePause,onError:this.handleError,playStatus:c,currentTime:i,onTimeChange:this.handleTimeChange,onMetadataLoaded:this.updateMediaData})),M.length>1&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("h4",{id:`jetpack-podcast-player__tracklist-title--${e}`,className:"jetpack-podcast-player--visually-hidden"},(0,k.sprintf)(G("Playlist: %s","jetpack"),t)),(0,o.createElement)("p",{id:`jetpack-podcast-player__tracklist-description--${e}`,className:"jetpack-podcast-player--visually-hidden"},G("Select an episode to play it in the audio player.","jetpack")),(0,o.createElement)(L,{playerId:e,playerState:c,currentTrack:b,tracks:M,selectTrack:this.selectTrack,colors:j})))}}J.defaultProps={title:"",cover:"",link:"",attributes:{url:null,itemsToShow:5,showCoverArt:!0,showEpisodeTitle:!0,showEpisodeDescription:!0},tracks:[]};var Y=(0,E.compose)([function(e){class t extends o.Component{constructor(...e){super(...e),y()(this,"state",{didError:!1,isIE11AudioIssue:!1}),y()(this,"componentDidCatch",((e,t)=>{this.props.onError(e,t)}))}render(){const{didError:t,isIE11AudioIssue:r}=this.state;return t?(0,o.createElement)("section",{className:"jetpack-podcast-player"},(0,o.createElement)("p",{className:"jetpack-podcast-player__error"},H(r?'The podcast player cannot be displayed as your browser settings do not allow for sounds to be played in webpages. This can be changed in your browser’s "Internet options" settings. In the "Advanced" tab you will have to check the box next to "Play sounds in webpages" in the "Multimedia" section. Once you have confirmed that the box is checked, please press "Apply" and then reload this page.':"An unexpected error occured within the Podcast Player. Reloading this page might fix the problem.","jetpack"))):(0,o.createElement)(e,this.props)}}return y()(t,"getDerivedStateFromError",(e=>({didError:!0,isIE11AudioIssue:!!e.message.match(/IE11/)}))),t.defaultProps={onError:()=>{}},t},(0,n.withSelect)(((e,t)=>{const{playerId:r}=t,{getMediaSourceCurrentTime:a,getMediaPlayerState:s}=e(i);return{currentTime:a(r),playerState:s(r)}})),(0,n.withDispatch)((e=>{const{registerMediaSource:t,updateMediaSourceData:r,unregisterMediaSource:a,setDefaultMediaSource:s,playMediaSource:o,pauseMediaSource:n,toggleMediaSource:c,errorMediaSource:l,setMediaSourceCurrentTime:d}=e(i);return{registerMediaSource:t,updateMediaSourceData:r,unregisterMediaSource:a,setDefaultMediaSource:s,playMediaSource:o,pauseMediaSource:n,toggleMediaSource:c,errorMediaSource:l,setMediaSourceCurrentTime:d}}))])(J);const V=s()("jetpack:podcast-player"),K={},W=function(e){e.classList.add("is-default"),e.setAttribute("data-jetpack-block-initialized","true")};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-jetpack-podcast-player:not([data-jetpack-block-initialized])").forEach((e=>{e.classList.remove("is-default"),function(e){const t=document.getElementById(e);if(V("initializing",e,t),!t)return;if("true"===t.getAttribute("data-jetpack-block-initialized"))return;const r=t.querySelector('script[type="application/json"]');if(!r)return void W(t);let a;try{a=JSON.parse(r.text)}catch(n){return V("error parsing json",n),void W(t)}r.remove();const s=t.innerHTML;if(!a||!a.tracks.length)return V("no tracks found"),void W(t);try{const r=(0,o.createElement)(Y,{...a,onError:function(){(0,o.unmountComponentAtNode)(t),t.innerHTML=s,W(t)}});K[e]=(0,o.render)(r,t)}catch(i){V("unable to render",i),W(t)}t.setAttribute("data-jetpack-block-initialized","true")}(e.id)}))}))}();var s=window;for(var o in a)s[o]=a[o];a.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})}();