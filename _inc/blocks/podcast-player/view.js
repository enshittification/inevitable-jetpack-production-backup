!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=435)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.data}()},102:function(e,t){var r=1e3,n=6e4,o=60*n,a=24*o;function c(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,t){t=t||{};var i=typeof e;if("string"===i&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"weeks":case"week":case"w":return 6048e5*c;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===i&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=a)return c(e,t,a,"day");if(t>=o)return c(e,t,o,"hour");if(t>=n)return c(e,t,n,"minute");if(t>=r)return c(e,t,r,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=a)return Math.round(e/a)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=n)return Math.round(e/n)+"m";if(t>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},12:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},123:function(e,t,r){var n=r(76);e.exports=function(e){if(Array.isArray(e))return n(e)}},124:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},125:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},127:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},128:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},13:function(e,t,r){var n=r(127),o=r(6);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},14:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},15:function(e,t,r){var n=r(128);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},16:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},171:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"playing",(function(){return N})),r.d(n,"error",(function(){return R}));var o=r(7),a=r.n(o),c=r(12),i=r.n(c),s=r(16),u=r.n(s),l=r(13),p=r.n(l),d=r(14),f=r.n(d),m=r(6),y=r.n(m),v=r(15),b=r.n(v),h=r(3),g=r.n(h),k=r(0),j=r(8),E=r.n(j),C=r(1),_=r(80),O=r(18),S=r(10),w=r(32),M=r(9),T=r.n(M),A=r(4),F=(r(293),"undefined"!=typeof _wpmejsSettings?_wpmejsSettings:{});function I(e,t,r){var n=document.createElement("div");n.className=e;var o=document.createElement("button");return o.innerText=t,o.addEventListener("click",r),o.setAttribute("aria-label",t),o.setAttribute("title",t),n.appendChild(o),n}var x=function(e){var t=e.trackSource,r=e.onPlay,n=e.onPause,o=e.onError,c=e.onTimeChange,i=e.onSkipForward,s=e.onJumpBack,u=e.currentTime,l=e.playStatus,p=void 0===l?w.b:l,d=e.onMetadataLoaded,f=e.loadWhenReady,m=void 0!==f&&f,y=e.preload,v=void 0===y?"metadata":y,b=Object(k.useRef)(),h=function(){b.current.play().catch((function(){}))},g=function(){b.current.pause(),Object(_.speak)(Object(C.__)("Paused","jetpack"),"assertive")};return Object(k.useEffect)((function(){MediaElementPlayer.prototype._setResponsiveMode||(MediaElementPlayer.prototype._setResponsiveMode=MediaElementPlayer.prototype.setResponsiveMode,MediaElementPlayer.prototype.setResponsiveMode=function(){var e=this;e.getElement(e.container).parentNode&&e._setResponsiveMode()})}),[]),Object(k.useEffect)((function(){var e=b.current;e.preload=v;var t=new MediaElementPlayer(e,a()({},F,{success:function(){return m&&(null==e?void 0:e.load())}}));if(s||i){var c="".concat(t.options.classPrefix,"button ").concat(t.options.classPrefix,"jump-button");if(s){var u="".concat(c," ").concat(t.options.classPrefix,"jump-backward-button");t.addControlElement(I(u,Object(C.__)("Jump Back","jetpack"),s),"jumpBackwardButton")}if(i){var l="".concat(c," ").concat(t.options.classPrefix,"skip-forward-button");t.addControlElement(I(l,Object(C.__)("Skip Forward","jetpack"),i),"skipForwardButton")}}return r&&e.addEventListener("play",r),n&&e.addEventListener("pause",n),o&&e.addEventListener("error",o),d&&e.addEventListener("loadedmetadata",d),function(){t.remove(),r&&e.removeEventListener("play",r),n&&e.removeEventListener("pause",n),o&&e.removeEventListener("error",o),d&&e.removeEventListener("loadedmetadata",d)}}),[r,n,o,s,i,d,m,v]),Object(k.useEffect)((function(){var e,t=!1===(null===(e=b.current)||void 0===e?void 0:e.paused)?[w.c,g]:[w.b,h],r=T()(t,2),n=r[0],o=r[1],a=Object(A.debounce)(o,100);return w.a!==p&&n!==p&&a(),function(){a.cancel()}}),[b,p,t]),Object(k.useEffect)((function(){if(c){var e=b.current,t=Object(A.throttle)((function(e){return c(e)}),1e3,{leading:!0,trailing:!1}),r=function(e){return t(e.target.currentTime)};return c&&(null==e||e.addEventListener("timeupdate",r)),function(){t.cancel(),null==e||e.removeEventListener("timeupdate",r)}}}),[b,c]),Object(k.useEffect)((function(){var e=b.current;u&&e&&Math.abs(Math.floor(u-e.currentTime))>1&&(e.currentTime=u)}),[b,u]),Object(k.createElement)("div",{className:"jetpack-audio-player"},Object(k.createElement)("audio",{src:t,ref:b}))},P=r(2),D={height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},N=Object(k.createElement)(P.SVG,D,Object(k.createElement)(P.Path,{d:"M0 0h24v24H0V0z",fill:"none"}),Object(k.createElement)(P.Path,{d:"M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"})),R=Object(k.createElement)(P.SVG,D,Object(k.createElement)(P.Path,{d:"M0 0h24v24H0V0z",fill:"none"}),Object(k.createElement)(P.Path,{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),L=Object(k.memo)((function(e){var t,r,o=e.isPlaying,a=e.isError,c=e.className;a?(r="error",t=Object(C.__)("Error:","jetpack")):o&&(r="playing",t=Object(C.__)("Playing:","jetpack"));var i=n[r];return i?Object(k.createElement)("span",{className:"".concat(c," ").concat(c,"--").concat(r)},Object(k.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"},"".concat(t," ")),i):Object(k.createElement)("span",{className:c})})),U=Object(k.memo)((function(e){var t=e.link,r=e.title,n=e.colors;return Object(k.createElement)("div",{className:"jetpack-podcast-player__track-error"},Object(C.__)("Episode unavailable. ","jetpack"),t&&Object(k.createElement)("span",{className:n.secondary.classes,style:{color:n.secondary.custom}},Object(k.createElement)("a",{className:"jetpack-podcast-player__link",href:t,rel:"noopener noreferrer nofollow",target:"_blank"},Object(k.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"},"".concat(Object(C.sprintf)(Object(C.__)("%s:","jetpack"),r)," ")),Object(C.__)("Open in a new tab","jetpack"))))})),z=r(69),B=Object(k.memo)((function(e){var t,r=e.track,n=e.isActive,o=e.isPlaying,a=e.isError,c=e.selectTrack,i=e.index,s=e.colors,u=void 0===s?{primary:{},secondary:{}}:s,l=Object(z.a)("color",u.primary.name),p=Object(z.a)("color",u.secondary.name),d=E()("jetpack-podcast-player__track",(t={"is-active":n,"has-primary":n&&(u.primary.name||u.primary.custom)},g()(t,l,n&&!!l),g()(t,"has-secondary",!n&&(u.secondary.name||u.secondary.custom)),g()(t,p,!n&&!!p),t)),f={};n&&u.primary.custom&&!l?f.color=u.primary.custom:n||!u.secondary.custom||p||(f.color=u.secondary.custom);var m=n?Object(C.__)("track","jetpack"):void 0;return Object(k.createElement)("li",{className:d,style:Object.keys(f).length?f:null},Object(k.createElement)("a",{className:"jetpack-podcast-player__link jetpack-podcast-player__track-link",href:r.link||r.src,role:"button","aria-current":m,onClick:function(e){e.shiftKey||e.metaKey||e.altKey||(e.preventDefault(),c(i))},onKeyDown:function(e){" "===event.key&&(e.preventDefault(),c(i))}},Object(k.createElement)(L,{className:"jetpack-podcast-player__track-status-icon",isPlaying:o,isError:a}),Object(k.createElement)("span",{className:"jetpack-podcast-player__track-title"},r.title),r.duration&&Object(k.createElement)("time",{className:"jetpack-podcast-player__track-duration",dateTime:r.duration},r.duration)),n&&a&&Object(k.createElement)(U,{link:r.link,title:r.title,colors:u}))})),H=Object(k.memo)((function(e){var t=e.playerId,r=e.tracks,n=e.selectTrack,o=e.currentTrack,a=e.playerState,c=e.colors;return Object(k.createElement)("ol",{className:"jetpack-podcast-player__tracks","aria-labelledby":"jetpack-podcast-player__tracklist-title--".concat(t),"aria-describedby":"jetpack-podcast-player__tracklist-description--".concat(t)},r.map((function(e,t){var r=o===t;return Object(k.createElement)(B,{key:e.id,index:t,track:e,selectTrack:n,isActive:r,isPlaying:r&&a===w.c,isError:r&&a===w.a,colors:c})})))})),G=Object(k.createElement)(P.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(k.createElement)(P.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),J=Object(k.memo)((function(e){var t=e.playerId,r=e.title,n=e.cover,o=e.link,a=e.track,c=e.children,i=e.showEpisodeTitle,s=e.showCoverArt,u=e.showEpisodeDescription,l=e.colors;return s||i||u?Object(k.createElement)("div",{className:"jetpack-podcast-player__header"},Object(k.createElement)("div",{className:"jetpack-podcast-player__current-track-info"},s&&n&&Object(k.createElement)("div",{className:"jetpack-podcast-player__cover"},Object(k.createElement)("img",{className:"jetpack-podcast-player__cover-image",src:n,alt:""})),i&&!!(r||a&&a.title)&&Object(k.createElement)(Y,{playerId:t,title:r,link:o,track:a,colors:l})),!!(u&&a&&a.description)&&Object(k.createElement)("p",{id:"".concat(t,"__track-description"),className:"jetpack-podcast-player__track-description"},a.description),c):c})),Y=Object(k.memo)((function(e){var t=e.playerId,r=e.title,n=e.link,o=e.track,a=e.colors,c=void 0===a?{primary:{name:null,custom:null,classes:""}}:a;return Object(k.createElement)("h2",{id:"".concat(t,"__title"),className:"jetpack-podcast-player__title"},!(!o||!o.title)&&Object(k.createElement)("span",{className:E()("jetpack-podcast-player__current-track-title",c.primary.classes),style:{color:c.primary.custom}},o.title,Object(k.createElement)("a",{className:"jetpack-podcast-player__track-title-link",href:o.link||o.src,target:"_blank",rel:"noopener noreferrer nofollow"},G)),!!(o&&o.title&&r)&&Object(k.createElement)("span",{className:"jetpack-podcast-player--visually-hidden"}," - "),!!r&&Object(k.createElement)(V,{title:r,link:n,colors:c}))})),V=Object(k.memo)((function(e){var t=e.title,r=e.link;return Object(k.createElement)("span",{className:"jetpack-podcast-player__podcast-title"},r?Object(k.createElement)("a",{className:"jetpack-podcast-player__link",href:r,target:"_blank",rel:"noopener noreferrer nofollow"},t):{title:t})})),$=J;var K=function(e){function t(){var e,r;i()(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r=p()(this,(e=f()(t)).call.apply(e,[this].concat(o))),g()(y()(r),"state",{currentTrack:0,hasUserInteraction:!1}),g()(y()(r),"recordUserInteraction",(function(){r.state.hasUserInteraction||r.setState({hasUserInteraction:!0})})),g()(y()(r),"selectTrack",(function(e){var t=r.state.currentTrack;if(t===e)return r.recordUserInteraction(),void r.props.toggleMediaSource(r.props.playerId);-1!==t&&r.props.pauseMediaSource(r.props.playerId),r.loadAndPlay(e)})),g()(y()(r),"loadTrack",(function(e){var t=r.getTrack(e);if(!t)return!1;r.state.currentTrack!==e&&r.setState({currentTrack:e});var n=t.title,o=t.link,a=t.description;return r.props.updateMediaSourceData(r.props.playerId,{title:n,link:o}),Object(_.speak)("".concat(Object(C.sprintf)(Object(C.__)("Loading: %s","jetpack"),n)," ").concat(a),"assertive"),!0})),g()(y()(r),"loadAndPlay",(function(e){r.recordUserInteraction(),r.loadTrack(e)&&r.props.playMediaSource(r.props.playerId)})),g()(y()(r),"getTrack",(function(e){return r.props.tracks[e]})),g()(y()(r),"handleError",(function(e){if(!r.state.hasUserInteraction){var t=window.navigator.userAgent.match(/Trident\/7\./)?"IE11: Playing sounds in webpages setting is not checked":e;r.setState((function(){throw new Error(t)}))}r.props.errorMediaSource(r.props.playerId),Object(_.speak)("".concat(Object(C.__)("Error: Episode unavailable - Open in a new tab","jetpack")),"assertive")})),g()(y()(r),"handlePlay",(function(){r.props.playMediaSource(r.props.playerId),r.setState({hasUserInteraction:!0})})),g()(y()(r),"handlePause",(function(){r.props.pauseMediaSource(r.props.playerId),r.props.playerState!==w.a&&r.props.pauseMediaSource(r.props.playerId)})),g()(y()(r),"handleTimeChange",(function(e){r.props.setMediaSourceCurrentTime(r.props.playerId,e)})),g()(y()(r),"handleJump",(function(){r.props.setMediaSourceCurrentTime(r.props.playerId,r.props.currentTime-5)})),g()(y()(r),"handleSkip",(function(){r.props.setMediaSourceCurrentTime(r.props.playerId,r.props.currentTime+30)})),g()(y()(r),"updateMediaData",(function(e){var t,n;r.props.updateMediaSourceData(r.props.playerId,{duration:null===(t=e.target)||void 0===t?void 0:t.duration,domId:null===(n=e.target)||void 0===n?void 0:n.id})})),r}return b()(t,e),u()(t,[{key:"registerPlayer",value:function(){var e=this.getTrack(this.state.currentTrack)||{},t=this.props.playerId;this.props.registerMediaSource(t,{title:e.title,link:e.link,state:w.b}),this.props.setDefaultMediaSource(t)}},{key:"componentDidMount",value:function(){this.props.playerId&&this.registerPlayer()}},{key:"componentWillUnmount",value:function(){this.props.playerId&&this.props.unregisterMediaSource(this.props.playerId)}},{key:"componentDidUpdate",value:function(e){var t=function(e){return(null==e?void 0:e.length)?e.map((function(e){return e.guid})):[]},r=t(this.props.tracks),n=new Set(t(e.tracks));r.length===n.size&&r.every((function(e){return n.has(e)}))||this.loadTrack(0)}},{key:"render",value:function(){var e=this.props,t=e.playerId,r=e.title,n=e.link,o=e.cover,a=e.tracks,c=e.attributes,i=e.currentTime,s=e.playerState,u=c.itemsToShow,l=c.primaryColor,p=c.customPrimaryColor,d=c.hexPrimaryColor,f=c.secondaryColor,m=c.customSecondaryColor,y=c.hexSecondaryColor,v=c.backgroundColor,b=c.customBackgroundColor,h=c.hexBackgroundColor,g=c.showCoverArt,j=c.showEpisodeTitle,_=c.showEpisodeDescription,O=this.state.currentTrack,S=a.slice(0,u),w=this.getTrack(O),M=Object(z.b)({primaryColor:l,customPrimaryColor:p,secondaryColor:f,customSecondaryColor:m,backgroundColor:v,customBackgroundColor:b}),T={color:m,backgroundColor:b,"--jetpack-podcast-player-primary":d,"--jetpack-podcast-player-secondary":y,"--jetpack-podcast-player-background":h},A=E()("jetpack-podcast-player",s,M.secondary.classes,M.background.classes);return Object(k.createElement)("section",{className:A,style:T,"aria-labelledby":r||w&&w.title?"".concat(t,"__title"):void 0,"aria-describedby":w&&w.description?"".concat(t,"__track-description"):void 0,"data-jetpack-iframe-ignore":!0},Object(k.createElement)($,{playerId:t,title:r,link:n,cover:o,track:this.getTrack(O),showCoverArt:g,showEpisodeTitle:j,showEpisodeDescription:_,colors:M},Object(k.createElement)(x,{onJumpBack:this.handleJump,onSkipForward:this.handleSkip,trackSource:this.getTrack(O).src,onPlay:this.handlePlay,onPause:this.handlePause,onError:this.handleError,playStatus:s,currentTime:i,onTimeChange:this.handleTimeChange,onMetadataLoaded:this.updateMediaData})),S.length>1&&Object(k.createElement)(k.Fragment,null,Object(k.createElement)("h4",{id:"jetpack-podcast-player__tracklist-title--".concat(t),className:"jetpack-podcast-player--visually-hidden"},Object(C.sprintf)(Object(C.__)("Playlist: %s","jetpack"),r)),Object(k.createElement)("p",{id:"jetpack-podcast-player__tracklist-description--".concat(t),className:"jetpack-podcast-player--visually-hidden"},Object(C.__)("Select an episode to play it in the audio player.","jetpack")),Object(k.createElement)(H,{playerId:t,playerState:s,currentTrack:O,tracks:S,selectTrack:this.selectTrack,colors:M})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.tracks.length<=t.currentTrack?a()({},t,{currentTrack:0}):null}}]),t}(k.Component);K.defaultProps={title:"",cover:"",link:"",attributes:{url:null,itemsToShow:5,showCoverArt:!0,showEpisodeTitle:!0,showEpisodeDescription:!0},tracks:[]};t.a=Object(O.compose)([function(e){var t=function(t){function r(){var e,t;i()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=p()(this,(e=f()(r)).call.apply(e,[this].concat(o))),g()(y()(t),"state",{didError:!1,isIE11AudioIssue:!1}),g()(y()(t),"componentDidCatch",(function(e,r){t.props.onError(e,r)})),t}return b()(r,t),u()(r,[{key:"render",value:function(){var t=this.state,r=t.didError,n=t.isIE11AudioIssue;return r?Object(k.createElement)("section",{className:"jetpack-podcast-player"},Object(k.createElement)("p",{className:"jetpack-podcast-player__error"},n?Object(C.__)('The podcast player cannot be displayed as your browser settings do not allow for sounds to be played in webpages. This can be changed in your browser’s "Internet options" settings. In the "Advanced" tab you will have to check the box next to "Play sounds in webpages" in the "Multimedia" section. Once you have confirmed that the box is checked, please press "Apply" and then reload this page.',"jetpack"):Object(C.__)("An unexpected error occured within the Podcast Player. Reloading this page might fix the problem.","jetpack"))):Object(k.createElement)(e,this.props)}}]),r}(k.Component);return g()(t,"getDerivedStateFromError",(function(e){return{didError:!0,isIE11AudioIssue:!!e.message.match(/IE11/)}})),t.defaultProps={onError:function(){}},t},Object(S.withSelect)((function(e,t){var r=t.playerId,n=e(w.d),o=n.getMediaSourceCurrentTime,a=n.getMediaPlayerState;return{currentTime:o(r),playerState:a(r)}})),Object(S.withDispatch)((function(e){var t=e(w.d);return{registerMediaSource:t.registerMediaSource,updateMediaSourceData:t.updateMediaSourceData,unregisterMediaSource:t.unregisterMediaSource,setDefaultMediaSource:t.setDefaultMediaSource,playMediaSource:t.playMediaSource,pauseMediaSource:t.pauseMediaSource,toggleMediaSource:t.toggleMediaSource,errorMediaSource:t.errorMediaSource,setMediaSourceCurrentTime:t.setMediaSourceCurrentTime}}))])(K)},174:function(e,t,r){var n=r(21);e.exports=function(e){function t(e){var r,n=null;function a(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];if(a.enabled){var c=a,i=Number(new Date),s=i-(r||i);c.diff=s,c.prev=r,c.curr=i,r=i,n[0]=t.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var u=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(function(e,r){if("%%"===e)return"%";u++;var o=t.formatters[r];if("function"==typeof o){var a=n[u];e=o.call(c,a),n.splice(u,1),u--}return e})),t.formatArgs.call(c,n);var l=c.log||t.log;l.apply(c,n)}}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=o,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:function(){return null===n?t.enabled(e):n},set:function(e){n=e}}),"function"==typeof t.init&&t.init(a),a}function o(e,r){var n=t(this.namespace+(void 0===r?":":r)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){var e=[].concat(n(t.names.map(a)),n(t.skips.map(a).map((function(e){return"-"+e})))).join(",");return t.enable(""),e},t.enable=function(e){var r;t.save(e),t.names=[],t.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(102),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((function(r){t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){for(var r=0,n=0;n<e.length;n++)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},18:function(e,t){!function(){e.exports=this.wp.compose}()},194:function(e,t,r){"use strict";var n=r(10),o=r(3),a=r.n(o),c=r(7),i=r.n(c),s=r(32),u={sources:{},default:null},l={getDefaultMediaSource:function(e){var t=null,r=Object.keys(e.sources);if(e.default?t=e.default:(null==r?void 0:r.length)&&(t=e.sources[r[0]].id),t)return e.sources[t]},getMediaPlayerState:function(e,t){var r,n=t?null===(r=e.sources)||void 0===r?void 0:r[t]:l.getDefaultMediaSource(e);return null==n?void 0:n.state},getMediaSourceCurrentTime:function(e,t){var r,n=t?null===(r=e.sources)||void 0===r?void 0:r[t]:l.getDefaultMediaSource(e);return null==n?void 0:n.currentTime},getMediaSourceDuration:function(e,t){var r,n;if(!t){var o=l.getDefaultMediaSource(e);return null==o?void 0:o.duration}return null===(r=e.sources)||void 0===r||null===(n=r[t])||void 0===n?void 0:n.duration},getMediaSourceDomReference:function(e,t){var r,n=t?null===(r=e.sources)||void 0===r?void 0:r[t]:l.getDefaultMediaSource(e);if(n){var o=null==n?void 0:n.domId;if(o)return document.getElementById(o)}}},p={reducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0,n=r.id||t.default||(null===(e=Object.keys(t.sources))||void 0===e?void 0:e[0]);switch(r.type){case"REGISTER_MEDIA_SOURCE":return i()({},t,{sources:i()({},t.sources,a()({},r.id,i()({id:r.id},r.mediaSourceState)))});case"UPDATE_MEDIA_SOURCE_DATA":return i()({},t,{sources:i()({},t.sources,a()({},r.id,i()({},t.sources[r.id],{},r.data)))});case"UNREGISTER_MEDIA_SOURCE":var o,c=Object.assign({},t);if(c.sources[r.id]&&delete c.sources[r.id],r.id===t.default)c.default=null===(o=Object.keys(t.sources))||void 0===o?void 0:o[0];return c;case"SET_DEFAULT_MEDIA_SOURCE":return i()({},t,{default:r.id});case"SET_MEDIA_PLAYER_STATE":return i()({},t,{sources:i()({},t.sources,a()({},n,i()({},t.sources[n],{state:r.state})))});case"TOGGLE_MEDIA_PLAYER_STATE":return i()({},t,{sources:i()({},t.sources,a()({},n,i()({},t.sources[n],{state:t.sources[n].state===s.c?s.b:s.c})))});case"SET_MEDIA_PLAYER_CURRENT_TIME":return i()({},t,{sources:i()({},t.sources,a()({},n,i()({},t.sources[n],{currentTime:r.currentTime})))})}return t},actions:{registerMediaSource:function(e,t){return{type:"REGISTER_MEDIA_SOURCE",id:e,mediaSourceState:t}},updateMediaSourceData:function(e,t){return{type:"UPDATE_MEDIA_SOURCE_DATA",id:e,data:t}},unregisterMediaSource:function(e){return{type:"UNREGISTER_MEDIA_SOURCE",id:e}},setDefaultMediaSource:function(e){return{type:"SET_DEFAULT_MEDIA_SOURCE",id:e}},playMediaSource:function(e){return{type:"SET_MEDIA_PLAYER_STATE",id:e,state:s.c}},toggleMediaSource:function(e){return{type:"TOGGLE_MEDIA_PLAYER_STATE",id:e}},pauseMediaSource:function(e){return{type:"SET_MEDIA_PLAYER_STATE",id:e,state:s.b}},errorMediaSource:function(e){return{type:"SET_MEDIA_PLAYER_STATE",id:e,state:s.a}},setMediaSourceCurrentTime:function(e,t){return{type:"SET_MEDIA_PLAYER_CURRENT_TIME",id:e,currentTime:t}}},selectors:l};if(void 0!==n.createReduxStore){var d=Object(n.createReduxStore)(s.d,p);Object(n.register)(d)}else Object(n.registerStore)(s.d,p)},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t,r){var n=r(123),o=r(124),a=r(77),c=r(125);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},293:function(e,t,r){},294:function(e,t,r){},3:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},32:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n="jetpack/media-source",o="is-playing",a="is-error",c="is-paused"},4:function(e,t){!function(){e.exports=this.lodash}()},435:function(e,t,r){r(53),e.exports=r(436)},436:function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),a=r(70),c=r.n(a),i=r(0),s=(r(194),r(171)),u=(r(294),c()("jetpack:podcast-player")),l={},p=function(e){e.classList.add("is-default"),e.setAttribute("data-jetpack-block-initialized","true")};document.querySelectorAll(".wp-block-jetpack-podcast-player:not([data-jetpack-block-initialized])").forEach((function(e){e.classList.remove("is-default"),function(e){var t=document.getElementById(e);if(u("initializing",e,t),t&&"true"!==t.getAttribute("data-jetpack-block-initialized")){var r=t.querySelector('script[type="application/json"]');if(r){var n;try{n=JSON.parse(r.text)}catch(d){return u("error parsing json",d),void p(t)}r.remove();var a=t.innerHTML;if(!n||!n.tracks.length)return u("no tracks found"),void p(t);try{var c=Object(i.createElement)(s.a,o()({},n,{onError:function(){Object(i.unmountComponentAtNode)(t),t.innerHTML=a,p(t)}}));l[e]=Object(i.render)(c,t)}catch(f){u("unable to render",f),p(t)}t.setAttribute("data-jetpack-block-initialized","true")}else p(t)}}(e.id)}))},47:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)},53:function(e,t,r){"use strict";r.r(t);r(47)},6:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return l}));var n=r(3),o=r.n(n),a=r(8),c=r.n(a),i=r(4);function s(e,t){if(e&&t)return"has-".concat(t,"-").concat(e)}function u(e){var t=!1;return{promise:new Promise((function(r,n){e.then((function(e){return t?n({isCanceled:!0}):r(e)}),(function(e){return n(t?{isCanceled:!0}:e)}))})),cancel:function(){t=!0}}}var l=Object(i.memoize)((function(e){var t=e.primaryColor,r=e.customPrimaryColor,n=e.secondaryColor,a=e.customSecondaryColor,i=e.backgroundColor,u=e.customBackgroundColor,l=s("color",t),p=s("color",n),d=s("background-color",i);return{primary:{name:t,custom:r,classes:c()(o()({"has-primary":l||r},l,l))},secondary:{name:n,custom:a,classes:c()(o()({"has-secondary":p||a},p,p))},background:{name:i,custom:u,classes:c()(o()({"has-background":d||u},d,d))}}}),(function(e){return Object.values(e).join()}))},7:function(e,t,r){var n=r(3);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},70:function(e,t,r){var n;t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(n++,"%c"===e&&(o=n))})),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(r){}},t.load=function(){var e;try{e=t.storage.getItem("debug")}catch(r){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(n=!1,function(){n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||function(){},e.exports=r(174)(t),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},76:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},77:function(e,t,r){var n=r(76);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},8:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},80:function(e,t){!function(){e.exports=this.wp.a11y}()},88:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},89:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}},9:function(e,t,r){var n=r(88),o=r(89),a=r(77),c=r(90);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||c()}},90:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}));