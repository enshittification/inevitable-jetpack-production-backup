!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=450)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},123:function(e,t,n){var r=n(76);e.exports=function(e){if(Array.isArray(e))return r(e)}},124:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},125:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},159:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,n=void 0===t?24:t,c=e.onClick,a=(e.icon,e.className),o=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["size","onClick","icon","className"]),i=["gridicon","gridicons-fullscreen",a,!1,!1,!1].filter(Boolean).join(" ");return l.default.createElement("svg",r({className:i,height:n,width:n,onClick:c},o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),l.default.createElement("g",null,l.default.createElement("path",{d:"M21 3v6h-2V6.41l-3.29 3.3-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3 1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29-1.41-1.42L5 17.59V15H3v6z"})))};var c,a=n(19),l=(c=a)&&c.__esModule?c:{default:c};e.exports=t.default},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return te}));var r=n(23),c=n.n(r),a=n(39),l=n.n(a),o=n(4),i=n(0),s=(n(304),n(21)),u=n.n(s),d=n(9),f=n.n(d),m=n(8),p=n.n(m),b=n(34),v=n(18),y=n(1),O=n(7),j=n.n(O),h=n(27),g=n.n(h);function w(){return(w=g()(regeneratorRuntime.mark((function e(t){var n,r,c,a,l,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]&&o[1],"img"!==(r=t.tagName.toLowerCase())){e.next=9;break}if(!t.complete){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,new Promise((function(e){t.addEventListener("load",e,{once:!0})}));case 7:e.next=21;break;case 9:if("video"!==r&&"audio"!==r){e.next=21;break}if(c=t.src,!(n&&c&&c.startsWith(window.location.origin))){e.next=17;break}return t.src="",a=new Request(c),l=new Headers,t.type&&l.append("Content-Type",t.type),e.abrupt("return",fetch(a,{method:"GET",headers:l,mode:"no-cors",cache:"default"}).then((function(e){return e.blob()})).then((function(e){t.src=URL.createObjectURL(e)})));case 17:if(t.HAVE_ENOUGH_DATA!==t.readyState){e.next=19;break}return e.abrupt("return");case 19:return e.next=21,new Promise((function(e){t.addEventListener("canplaythrough",e,{once:!0}),t.load()}));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(2);function x(e){var t=e.isEllipsis,n=e.disabled,r=e.index,c=e.isSelected,a=e.progress,l=e.onClick,o=n||t,s=null;return t||(s=c?Object(y.sprintf)(Object(y.__)("Slide %d, currently selected.","jetpack"),r+1):Object(y.sprintf)(Object(y.__)("Slide %d","jetpack"),r+1)),Object(i.createElement)(E.Button,{role:o?"presentation":"tab",key:r,className:p()("wp-story-pagination-bullet",{"wp-story-pagination-ellipsis":t}),"aria-label":s,"aria-disabled":o||c,onClick:o||c?void 0:l,disabled:o},Object(i.createElement)("div",{className:"wp-story-pagination-bullet-bar"},Object(i.createElement)("div",{className:"wp-story-pagination-bullet-bar-progress",style:{width:"".concat(a,"%")}})))}n(305);var S=function(e){var t=e.className,n=e.size,r=e.isPressed,a=l()(e,["className","size","isPressed"]);return Object(i.createElement)("button",c()({type:"button","aria-pressed":r,className:p()("jetpack-mdc-icon-button","circle-icon","outlined","bordered",t),style:{width:"".concat(n,"px"),height:"".concat(n,"px")}},a))},k=function(e){var t=e.className,n=e.size,r=void 0===n?24:n,a=e.isPressed,o=l()(e,["className","size","isPressed"]);return Object(i.createElement)("button",c()({type:"button","aria-pressed":a,className:p()("jetpack-mdc-icon-button",t),style:{width:"".concat(r,"px"),height:"".concat(r,"px")}},o))},P=n(26),N=function(e){var t=e.children,n=e.size;return Object(P.a)(t,n,n)},z=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M8 5v14l11-7z"}))},M=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}))},_=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))},A=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}))},L=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"}))},T=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))},C=function(e){var t=e.size;return Object(i.createElement)(N,{size:t},Object(i.createElement)(E.Path,{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))};function F(e){var t=e.playing,n=e.muted,r=e.setPlaying,c=e.setMuted,a=e.showMute;return Object(i.createElement)("div",{className:"wp-story-controls"},Object(i.createElement)(k,{isPressed:t,label:Object(y.__)("Play","jetpack"),onClick:function(){return r(!t)}},t?Object(i.createElement)(M,null):Object(i.createElement)(z,null)),a&&Object(i.createElement)(k,{isPressed:n,label:Object(y.__)("Mute","jetpack"),onClick:function(){return c(!n)}},n?Object(i.createElement)(L,null):Object(i.createElement)(A,null)))}function R(e){var t=e.fullscreen,n=e.onExitFullscreen,r=e.siteIconUrl,c=e.storyTitle;return t?Object(i.createElement)("div",{className:"wp-story-meta"},Object(i.createElement)("div",{className:"wp-story-icon"},Object(i.createElement)("img",{alt:"Site icon",src:r})),Object(i.createElement)("div",null,Object(i.createElement)("div",{className:"wp-story-title"},c)),Object(i.createElement)(k,{className:"wp-story-exit-fullscreen",label:Object(y.__)("Exit Fullscreen","jetpack"),onClick:n},Object(i.createElement)(_,null))):null}var B=n(159),I=n.n(B);function U(e){var t=e.ended,n=e.hasPrevious,r=e.hasNext,c=e.onNextSlide,a=e.onPreviousSlide,l=e.icon,o=e.slideCount,s=e.showSlideCount,u=Object(i.useCallback)((function(e){t||(e.stopPropagation(),a())}),[a,t]),d=Object(i.useCallback)((function(e){t||(e.stopPropagation(),c())}),[c,t]);return Object(i.createElement)("div",{className:"wp-story-overlay"},s&&Object(i.createElement)("div",{className:"wp-story-embed-icon"},l,Object(i.createElement)("span",null,o)),!s&&Object(i.createElement)("div",{className:"wp-story-embed-icon-expand"},Object(i.createElement)(I.a,{role:"img"})),n&&Object(i.createElement)("div",{className:"wp-story-prev-slide",onClick:u},Object(i.createElement)(S,{size:44,label:Object(y.__)("Previous Slide","jetpack"),className:"outlined-w"},Object(i.createElement)(T,{size:24}))),r&&Object(i.createElement)("div",{className:"wp-story-next-slide",onClick:d},Object(i.createElement)(S,{size:44,label:Object(y.__)("Next Slide","jetpack"),className:"outlined-w"},Object(i.createElement)(C,{size:24}))))}function H(e){var t=e.currentMedia,n=t&&"image"===t.type?t.url:null;return Object(i.createElement)("div",{className:"wp-story-background"},Object(i.createElement)("div",{className:"wp-story-background-image",style:{backgroundImage:n?'url("'.concat(n,'")'):"none"}}),Object(i.createElement)("div",{className:"wp-story-background-blur"}),Object(i.createElement)(E.SVG,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"0",height:"0"},Object(i.createElement)("filter",{id:"gaussian-blur-18"},Object(i.createElement)("feGaussianBlur",{stdDeviation:"18"}))))}var V=function(){return Object(i.createElement)("div",{className:"wp-story-loading-spinner"},Object(i.createElement)("div",{className:"wp-story-loading-spinner__outer"},Object(i.createElement)("div",{className:"wp-story-loading-spinner__inner"})))},q=function(e){var t=e.title,n=e.alt,r=e.className,c=e.id,a=e.mediaRef,l=e.mime,o=e.sizes,s=e.srcset,u=e.url;return Object(i.createElement)("img",{ref:a,"data-id":c,"data-mime":l,title:t,alt:n,src:u,className:p()("wp-story-image","wp-image-".concat(c),r),srcSet:s,sizes:o})},D=function(e){var t=e.title,n=e.className,r=e.id,c=e.mediaRef,a=e.mime,l=e.url;return Object(i.createElement)("video",{className:p()("wp-story-video","intrinsic-ignore","wp-video-".concat(r),n),ref:c,"data-id":r,title:t,type:a,src:l,playsInline:!0})},G=function(e){var t=e.targetAspectRatio,n=e.cropUpTo,r=e.type,a=e.width,o=e.height,s=l()(e,["targetAspectRatio","cropUpTo","type","width","height"]),u=null;if(a&&o){var d=a/o;if(d>=t)d>t/(1-n)||(u="wp-story-crop-wide");else d<t*(1-n)||(u="wp-story-crop-narrow")}var f="video"===r||(s.mime||"").startsWith("video/");return Object(i.createElement)("figure",null,f?Object(i.createElement)(D,c()({},s,{className:u})):Object(i.createElement)(q,c()({},s,{className:u})))},J=function(e){var t=e.media,n=e.index,r=e.currentSlideIndex,a=e.playing,l=e.uploading,o=e.ended,s=e.muted,u=e.setMuted,d=e.onEnd,m=e.onProgress,b=e.settings,v=e.targetAspectRatio,y=n===r,O=y&&a,h=Object(i.useRef)(null),E=Object(i.useState)(!1),x=f()(E,2),S=x[0],k=x[1],P=Object(i.useState)(!0),N=f()(P,2),z=N[0],M=N[1],_=function(){return h.current&&h.current.src&&"video"===h.current.tagName.toLowerCase()},A=Object(i.useState)({currentTime:0,duration:null,timeout:null}),L=f()(A,2),T=L[0],C=L[1],F=function(){var e=g()(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.play();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),u(!0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.useLayoutEffect)((function(){_()&&(h.current.muted=s,s||(h.current.volume=b.volume))}),[s]),Object(i.useEffect)((function(){_()&&(O?F(h.current):h.current.pause())}),[O,z,s]),Object(i.useLayoutEffect)((function(){_()&&o&&y&&(h.current.currentTime=h.current.duration)}),[o,y]),Object(i.useEffect)((function(){y||(C({currentTime:0,duration:null,timeout:null,lastUpdate:null}),_()&&(h.current.pause(),h.current.currentTime=0))}),[y]),Object(i.useEffect)((function(){O&&o&&(C({currentTime:0,duration:null,timeout:null,lastUpdate:null}),_()&&(h.current.currentTime=0))}),[O,o]),Object(i.useLayoutEffect)((function(){if(clearTimeout(T.timeout),!z){if(a&&y){var e=_()?h.current:null,t=e?e.duration:b.imageTime;if(T.currentTime>=t)return;T.timeout=setTimeout((function(){var n=T.lastUpdate?Date.now()-T.lastUpdate:b.renderInterval,r=e?e.currentTime:T.currentTime+n;C(j()({},T,{lastUpdate:Date.now(),duration:t,currentTime:r}))}),b.renderInterval)}y&&!a&&T.lastUpdate&&C(j()({},T,{lastUpdate:null}))}}),[z,a,y,T]),Object(i.useEffect)((function(){if(O&&!o&&null!==T.duration){var e=Math.round(1e3*T.currentTime/T.duration)/10;e>=100?(m(100),d()):m(e)}}),[O,y,T]),Object(i.useEffect)((function(){n<=r+(a?1:0)&&k(!0)}),[a,r]),Object(i.useLayoutEffect)((function(){h.current&&function(e){return w.apply(this,arguments)}(h.current,!0).then((function(){M(!1)}))}),[S,l]),Object(i.createElement)(i.Fragment,null,y&&(z||l)&&Object(i.createElement)("div",{className:p()("wp-story-slide","is-loading",{transparent:l})},Object(i.createElement)(V,null)),Object(i.createElement)("div",{className:"wp-story-slide",style:{display:y&&!z?"block":"none"}},S&&Object(i.createElement)(G,c()({},t,{targetAspectRatio:v,cropUpTo:b.cropUpTo,index:n,mediaRef:h}))))},W=n(83),K=function(e){var t,n=e.slides,r=e.disabled,c=e.currentSlideIndex,a=e.currentSlideProgress,l=e.onSlideSeek,s=e.maxBullets,u=Math.min(n.length,s),d=Math.floor(u/2),f=0,m=n.length-1;return n.length<=s||c<d?(t=c,m=u-1):c>n.length-d?(t=c-n.length+u,f=n.length-u):(t=d,f=c-d,m=c+d),Object(i.createElement)("div",{className:"wp-story-pagination wp-story-pagination-bullets",role:"tablist"},f>0&&Object(i.createElement)(x,{key:"bullet-0",index:f-1,progress:100,isEllipsis:!0}),Object(o.range)(1,u+1).map((function(e,n){var o,s=n+f;return o=s<c?100:s>c?0:a,Object(i.createElement)(x,{key:"bullet-".concat(n),index:s,progress:o,disabled:r,isSelected:t===n,onClick:function(){return l(s)}})})),m<n.length-1&&Object(i.createElement)(x,{key:"bullet-".concat(u+1),index:m+1,progress:0,isEllipsis:!0}))},Y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),$=function(e){var t=e.slides,n=e.disabled,r=(e.ref,l()(e,["slides","disabled","ref"])),a=Object(i.useState)(0),s=f()(a,2),d=s[0],m=s[1],O=Object(i.useState)(!1),j=f()(O,2),h=j[0],g=j[1],w=Object(i.useState)(!1),E=f()(w,2),x=E[0],S=E[1],k=Object(i.useState)(r.startMuted),P=f()(k,2),N=P[0],z=P[1],M=Object(i.useState)(0),_=f()(M,2),A=_[0],L=_[1],T=Object(i.useRef)(),C=Object(i.useRef)(),B=Object(i.useState)(null),I=f()(B,2),V=I[0],q=I[1],D=Object(v.useResizeObserver)(),G=f()(D,2),$=G[0],Q=G[1],X=Q.width,Z=Q.height,ee=Object(i.useState)(r.defaultAspectRatio),te=f()(ee,2),ne=te[0],re=te[1],ce=Object(i.useState)(!1),ae=f()(ce,2),le=ae[0],oe=ae[1],ie=Object(i.useState)(null),se=f()(ie,2),ue=se[0],de=se[1],fe=Object(o.some)(t,(function(e){return Object(b.isBlobURL)(e.url)})),me=function(e){var n=e<t.length?t[e]:null;return!!n&&("video"===n.type||(n.mime||"").startsWith("video/"))},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.playOnNextSlide;L(0),m(e),t&&g(t)},be=Object(i.useCallback)((function(){n||(le||h||!r.playInFullscreen||oe(!0),x&&!h&&pe(0),h||le||g(!0))}),[h,x,le,n]),ve=Object(i.useCallback)((function(){d>0&&pe(d-1)}),[d]),ye=Object(i.useCallback)((function(){d<t.length-1?pe(d+1):(g(!1),S(!0),L(100),r.exitFullscreenOnEnd&&oe(!1))}),[d,t]),Oe=Object(i.useCallback)((function(){oe(!1),r.playInFullscreen&&g(!1)}),[le]);return Object(i.useEffect)((function(){n&&h&&g(!1)}),[n,h]),Object(i.useLayoutEffect)((function(){h&&S(!1)}),[h]),Object(i.useEffect)((function(){r.loadInFullscreen&&oe(!0),r.playOnLoad&&g(!0)}),[]),Object(i.useLayoutEffect)((function(){if(T.current){var e=Math.round(r.defaultAspectRatio*T.current.offsetHeight);le&&(e=Math.abs(1-e/X)<r.cropUpTo?X:e),q(e)}}),[X,Z,le]),Object(i.useLayoutEffect)((function(){V&&T.current&&T.current.offsetHeight>0&&re(V/T.current.offsetHeight)}),[V]),Object(i.useLayoutEffect)((function(){if(le)Y&&(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&!r.loadInFullscreen?((t=C.current).requestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen).call(t):(de([document.documentElement.scrollLeft,document.documentElement.scrollTop]),document.body.classList.add("wp-story-in-fullscreen"),document.getElementsByTagName("html")[0].classList.add("wp-story-in-fullscreen"));else if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullScreenElement)(document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen).call(document);else{var e;if(document.body.classList.remove("wp-story-in-fullscreen"),ue)(e=window).scrollTo.apply(e,u()(ue));document.getElementsByTagName("html")[0].classList.remove("wp-story-in-fullscreen")}var t}),[le]),Object(i.createElement)("div",{ref:C,className:p()(["wp-story-app",{"wp-story-fullscreen":le}])},$,Object(i.createElement)("div",{role:n?"presentation":"button","aria-label":Object(y.__)("Play story","jetpack"),tabIndex:le?-1:0,className:p()("wp-story-container",{"wp-story-with-controls":!n&&!le&&!r.playInFullscreen,"wp-story-fullscreen":le,"wp-story-ended":x,"wp-story-disabled":n,"wp-story-clickable":!n&&!le}),style:{maxWidth:"".concat(V,"px")},onClick:be},Object(i.createElement)(R,c()({},r.metadata,{fullscreen:le,onExitFullscreen:Oe})),Object(i.createElement)("div",{ref:T,className:"wp-story-wrapper"},t.map((function(e,t){return Object(i.createElement)(J,{key:t,media:e,index:t,currentSlideIndex:d,playing:h,uploading:fe,muted:N,setMuted:z,ended:x,onProgress:L,onEnd:ye,settings:r,targetAspectRatio:ne,isVideo:me(d)})}))),Object(i.createElement)(U,{icon:W.a,slideCount:t.length,showSlideCount:r.showSlideCount,ended:x,hasPrevious:d>0,hasNext:d<t.length-1,onPreviousSlide:ve,onNextSlide:ye}),r.showProgressBar&&Object(i.createElement)(K,{slides:t,disabled:!le,currentSlideIndex:d,currentSlideProgress:A,onSlideSeek:pe,maxBullets:le?r.maxBulletsFullscreen:r.maxBullets}),Object(i.createElement)(F,{playing:h,muted:N,setPlaying:g,setMuted:z,showMute:me(d)})),le&&Object(i.createElement)(H,{currentMedia:r.blurredBackground&&t.length>d&&t[d]}))},Q=window&&window.Element&&window.Element.prototype.hasOwnProperty("attachShadow");function X(e){var t=e.enabled,n=e.delegatesFocus,r=void 0!==n&&n,c=e.mode,a=void 0===c?"open":c,l=e.globalStyleElements,o=void 0===l?[]:l,s=e.adoptedStyleSheets,d=void 0===s?null:s,m=e.children,p=Object(i.useState)(null),b=f()(p,2),v=b[0],y=b[1],O=Object(i.useCallback)((function(e){null!==e&&y(e)}),[]),j=Object(i.useState)(!1),h=f()(j,2),g=h[0],w=h[1],E="string"==typeof o?u()(document.querySelectorAll(o)):o,x=Q&&t&&E.length>0;if(Object(i.useEffect)((function(){if(v)if(v.parentNode.shadowRoot)w(v.parentNode.shadowRoot);else{var e=v.parentNode.attachShadow({delegatesFocus:r,mode:a});d&&(e.adoptedStyleSheets=d),w(e)}}),[v]),x&&!g)return Object(i.createElement)("span",{ref:O});var S=Object(i.createElement)(i.Fragment,null,x&&Object(i.createElement)(Z,{globalStyleElements:E}),m);return x?Object(i.createPortal)(S,g):S}function Z(e){var t=e.globalStyleElements;return Object(i.createElement)(i.Fragment,null,t.map((function(e,t){var n=e.id,r=e.tagName,c=e.attributes,a=e.innerHTML;return"LINK"===r?Object(i.createElement)("link",{key:n||t,id:n,rel:c.rel.value,href:c.href.value}):"STYLE"===r?Object(i.createElement)("style",{key:n||t,id:n},a):void 0})))}var ee={imageTime:5e3,startMuted:!1,playInFullscreen:!0,playOnNextSlide:!0,playOnLoad:!1,exitFullscreenOnEnd:!0,loadInFullscreen:!1,blurredBackground:!0,showSlideCount:!1,showProgressBar:!0,shadowDOM:{enabled:!0,mode:"open",globalStyleElements:'#jetpack-block-story-css, link[href*="jetpack/_inc/blocks/story/view.css"]'},defaultAspectRatio:.5625,cropUpTo:.2,volume:.5,renderInterval:50,maxBullets:7,maxBulletsFullscreen:14};function te(e){var t=e.slides,n=e.metadata,r=e.disabled,a=l()(e,["slides","metadata","disabled"]),s=Object(o.merge)({},ee,a);return Object(i.createElement)(X,s.shadowDOM,Object(i.createElement)($,c()({slides:t,metadata:n,disabled:r},s)))}},177:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}},18:function(e,t){!function(){e.exports=this.wp.compose}()},19:function(e,t){!function(){e.exports=this.React}()},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t,n){var r=n(123),c=n(124),a=n(77),l=n(125);e.exports=function(e){return r(e)||c(e)||a(e)||l()}},23:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},26:function(e,t,n){"use strict";var r=n(0),c=n(2);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"0 0 24 24";return Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",width:t,height:n,viewBox:a},Object(r.createElement)(c.Path,{fill:"none",d:"M0 0h24v24H0V0z"}),e)}},27:function(e,t){function n(e,t,n,r,c,a,l){try{var o=e[a](l),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,c)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var l=e.apply(t,r);function o(e){n(l,c,a,o,i,"next",e)}function i(e){n(l,c,a,o,i,"throw",e)}o(void 0)}))}}},3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},304:function(e,t,n){},305:function(e,t,n){},34:function(e,t){!function(){e.exports=this.wp.blob}()},39:function(e,t,n){var r=n(177);e.exports=function(e,t){if(null==e)return{};var n,c,a=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},4:function(e,t){!function(){e.exports=this.lodash}()},450:function(e,t,n){n(53),e.exports=n(451)},451:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),a=n(21),l=n.n(a),o=n(23),i=n.n(o),s=n(0),u=n(55),d=n.n(u),f=n(170);function m(e,t){"string"==typeof e&&(e=document.querySelectorAll(e));var n=e.querySelector(".wp-story-wrapper"),r=e.querySelector(".wp-story-meta"),c=[];n&&n.children.length>0&&(c=function(e){return l()(e.querySelectorAll("li > figure > :first-child")).map((function(e){return{alt:e.getAttribute("alt")||e.getAttribute("title"),mime:e.getAttribute("data-mime")||e.getAttribute("type"),url:e.getAttribute("src"),id:e.getAttribute("data-id"),type:"img"===e.tagName.toLowerCase()?"image":"video",srcset:e.getAttribute("srcset"),sizes:e.getAttribute("sizes")}}))}(n));var a={};r&&r.children.length>0&&(a=function(e){var t=e.querySelector("div:first-child > img"),n=e.querySelector(".wp-story-title"),r=t&&t.src;return{storyTitle:n&&n.innerText,siteIconUrl:r}}(r)),Object(s.render)(Object(s.createElement)(f.a,i()({slides:c,metadata:a,disabled:!1},t)),e)}if("undefined"!=typeof window){var p=Array.from(new URLSearchParams(window.location.search).entries()).filter((function(e){return e[0].startsWith("wp-story-")})).reduce((function(e,t){var n=t[0].replace(/^wp-story-/,"").replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}));try{e[n]=JSON.parse(t[1])}catch(r){e[n]=JSON.parse('"'.concat(t[1],'"'))}return e}),{});d()((function(){var e=l()(document.getElementsByClassName("wp-story"));e.forEach((function(t){if("true"!==t.getAttribute("data-block-initialized")){var n=null;1===e.length&&(n=c()({},p));var r=t.getAttribute("data-settings");if(r)try{n=c()({},n,{},JSON.parse(r))}catch(a){}m(t,n)}}))}))}},47:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,n){"use strict";n.r(t);n(47)},55:function(e,t){!function(){e.exports=this.wp.domReady}()},7:function(e,t,n){var r=n(3);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},76:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},77:function(e,t,n){var r=n(76);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},8:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=c.apply(null,r);l&&e.push(l)}else if("object"===a)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},83:function(e,t,n){"use strict";var r=n(0),c=n(2),a=n(26),l=Object(a.a)(Object(r.createElement)(c.G,null,Object(r.createElement)(c.Path,{d:"M17 5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2h9z"}),Object(r.createElement)(c.Path,{d:"M13 4H5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"}),Object(r.createElement)(c.Path,{d:"M7 16h8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"})));t.a=l},88:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},89:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){c=!0,a=i}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}},9:function(e,t,n){var r=n(88),c=n(89),a=n(77),l=n(90);e.exports=function(e,t){return r(e)||c(e,t)||a(e,t)||l()}},90:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));