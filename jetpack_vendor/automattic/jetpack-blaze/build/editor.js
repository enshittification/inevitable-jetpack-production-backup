(()=>{var e={74:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(307);const i=function(e){let{icon:t,size:n=24,...i}=e;return(0,r.cloneElement)(t,{width:n,height:n,...i})}},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(307),i=n(444);const o=(0,r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(i.Path,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))},951:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(i=r))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(741)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},741:(e,t,n)=>{e.exports=function(e){function t(e){let n,i,o,s=null;function c(...e){if(!c.enabled)return;const r=c,i=Number(new Date),o=i-(n||i);r.diff=o,r.prev=n,r.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";s++;const o=t.formatters[i];if("function"==typeof o){const t=e[s];n=o.call(r,t),e.splice(s,1),s--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=r,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(i!==t.namespaces&&(i=t.namespaces,o=t.enabled(e)),o),set:e=>{s=e}}),"function"==typeof t.init&&t.init(c),c}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},171:e=>{var t=1e3,n=60*t,r=60*n,i=24*r,o=7*i,s=365.25*i;function c(e,t,n,r){var i=t>=1.5*n;return Math.round(e/n)+" "+r+(i?"s":"")}e.exports=function(e,a){a=a||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var a=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*s;case"weeks":case"week":case"w":return a*o;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*r;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&isFinite(e))return a.long?function(e){var o=Math.abs(e);if(o>=i)return c(e,o,i,"day");if(o>=r)return c(e,o,r,"hour");if(o>=n)return c(e,o,n,"minute");if(o>=t)return c(e,o,t,"second");return e+" ms"}(e):function(e){var o=Math.abs(e);if(o>=i)return Math.round(e/i)+"d";if(o>=r)return Math.round(e/r)+"h";if(o>=n)return Math.round(e/n)+"m";if(o>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},975:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(951);const i=n.n(r)()("dops:analytics");let o,s;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const c={initialize:function(e,t,n){c.setUser(e,t),c.setSuperProps(n),c.identifyUser()},setGoogleAnalyticsEnabled:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){s={ID:e,username:t}},setSuperProps:function(e){o=e},assignSuperProps:function(e){o=Object.assign(o||{},e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),i('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),i('Built stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){c.tracks.recordPageView(e),c.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,r,i,o,s){c.ga.recordPurchase(e,t,n,r,i,o,s)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(o&&(i("- Super Props: %o",o),t=Object.assign(t,o)),i('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):i('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};c.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){c.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){i("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};c.ga.initialized||(s&&(e={userId:"u-"+s.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),c.ga.initialized=!0)},recordPageView:function(e,t){c.ga.initialize(),i("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,r){c.ga.initialize();let o="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(o+=" [Option Label: "+n+"]"),void 0!==r&&(o+=" [Option Value: "+r+"]"),i(o),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,r)},recordPurchase:function(e,t,n,r,i,o,s){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:r,currency:s}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:i,quantity:o}),window.ga("ecommerce:send")}},identifyUser:function(){s&&window._tkq.push(["identifyUser",s.ID,s.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},a=c},743:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>d});var r=n(132),i=n(483);function o(e){class t extends Error{constructor(){super(...arguments),this.name=e}}return t}const s=o("JsonParseError"),c=o("JsonParseAfterRedirectError"),a=o("Api404Error"),u=o("Api404AfterRedirectError"),l=o("FetchNetworkError");const d=new function(e,t){let n=e,o=e,s={"X-WP-Nonce":t},c={credentials:"same-origin",headers:s},a={method:"post",credentials:"same-origin",headers:Object.assign({},s,{"Content-type":"application/json"})},u=function(e){const t=e.split("?"),n=t.length>1?t[1]:"",r=n.length?n.split("&"):[];return r.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+r.join("&")};const l={setApiRoot(e){n=e},setWpcomOriginApiUrl(e){o=e},setApiNonce(e){s={"X-WP-Nonce":e},c={credentials:"same-origin",headers:s},a={method:"post",credentials:"same-origin",headers:Object.assign({},s,{"Content-type":"application/json"})}},setCacheBusterCallback:e=>{u=e},registerSite:(e,t)=>{const i={registration_nonce:e,no_iframe:!0};return(0,r.jetpackConfigHas)("consumer_slug")&&(i.plugin_slug=(0,r.jetpackConfigGet)("consumer_slug")),null!==t&&(i.redirect_uri=t),h(`${n}jetpack/v4/connection/register`,a,{body:JSON.stringify(i)}).then(p).then(g)},fetchAuthorizationUrl:e=>d((0,i.addQueryArgs)(`${n}jetpack/v4/connection/authorize_url`,{no_iframe:"1",redirect_uri:e}),c).then(p).then(g),fetchSiteConnectionData:()=>d(`${n}jetpack/v4/connection/data`,c).then(g),fetchSiteConnectionStatus:()=>d(`${n}jetpack/v4/connection`,c).then(g),fetchSiteConnectionTest:()=>d(`${n}jetpack/v4/connection/test`,c).then(p).then(g),fetchUserConnectionData:()=>d(`${n}jetpack/v4/connection/data`,c).then(g),fetchUserTrackingSettings:()=>d(`${n}jetpack/v4/tracking/settings`,c).then(p).then(g),updateUserTrackingSettings:e=>h(`${n}jetpack/v4/tracking/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),disconnectSite:()=>h(`${n}jetpack/v4/connection`,a,{body:JSON.stringify({isActive:!1})}).then(p).then(g),fetchConnectUrl:()=>d(`${n}jetpack/v4/connection/url`,c).then(p).then(g),unlinkUser:()=>h(`${n}jetpack/v4/connection/user`,a,{body:JSON.stringify({linked:!1})}).then(p).then(g),reconnect:()=>h(`${n}jetpack/v4/connection/reconnect`,a).then(p).then(g),fetchConnectedPlugins:()=>d(`${n}jetpack/v4/connection/plugins`,c).then(p).then(g),setHasSeenWCConnectionModal:()=>h(`${n}jetpack/v4/seen-wc-connection-modal`,a).then(p).then(g),fetchModules:()=>d(`${n}jetpack/v4/module/all`,c).then(p).then(g),fetchModule:e=>d(`${n}jetpack/v4/module/${e}`,c).then(p).then(g),activateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!0})}).then(p).then(g),deactivateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!1})}),updateModuleOptions:(e,t)=>h(`${n}jetpack/v4/module/${e}`,a,{body:JSON.stringify(t)}).then(p).then(g),updateSettings:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),getProtectCount:()=>d(`${n}jetpack/v4/module/protect/data`,c).then(p).then(g),resetOptions:e=>h(`${n}jetpack/v4/options/${e}`,a,{body:JSON.stringify({reset:!0})}).then(p).then(g),activateVaultPress:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"vaultpress",status:"active"})}).then(p).then(g),getVaultPressData:()=>d(`${n}jetpack/v4/module/vaultpress/data`,c).then(p).then(g),installPlugin:(e,t)=>{const r={slug:e,status:"active"};return t&&(r.source=t),h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify(r)}).then(p).then(g)},activateAkismet:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"akismet",status:"active"})}).then(p).then(g),getAkismetData:()=>d(`${n}jetpack/v4/module/akismet/data`,c).then(p).then(g),checkAkismetKey:()=>d(`${n}jetpack/v4/module/akismet/key/check`,c).then(p).then(g),checkAkismetKeyTyped:e=>h(`${n}jetpack/v4/module/akismet/key/check`,a,{body:JSON.stringify({api_key:e})}).then(p).then(g),fetchStatsData:e=>d(function(e){let t=`${n}jetpack/v4/module/stats/data`;-1!==t.indexOf("?")?t+=`&range=${encodeURIComponent(e)}`:t+=`?range=${encodeURIComponent(e)}`;return t}(e),c).then(p).then(g).then(m),getPluginUpdates:()=>d(`${n}jetpack/v4/updates/plugins`,c).then(p).then(g),getPlans:()=>d(`${n}jetpack/v4/plans`,c).then(p).then(g),fetchSettings:()=>d(`${n}jetpack/v4/settings`,c).then(p).then(g),updateSetting:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSiteData:()=>d(`${n}jetpack/v4/site`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteFeatures:()=>d(`${n}jetpack/v4/site/features`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteProducts:()=>d(`${n}jetpack/v4/site/products`,c).then(p).then(g),fetchSitePurchases:()=>d(`${n}jetpack/v4/site/purchases`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteBenefits:()=>d(`${n}jetpack/v4/site/benefits`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteDiscount:()=>d(`${n}jetpack/v4/site/discount`,c).then(p).then(g).then((e=>e.data)),fetchSetupQuestionnaire:()=>d(`${n}jetpack/v4/setup/questionnaire`,c).then(p).then(g),fetchRecommendationsData:()=>d(`${n}jetpack/v4/recommendations/data`,c).then(p).then(g),fetchRecommendationsProductSuggestions:()=>d(`${n}jetpack/v4/recommendations/product-suggestions`,c).then(p).then(g),fetchRecommendationsUpsell:()=>d(`${n}jetpack/v4/recommendations/upsell`,c).then(p).then(g),fetchRecommendationsConditional:()=>d(`${n}jetpack/v4/recommendations/conditional`,c).then(p).then(g),saveRecommendationsData:e=>h(`${n}jetpack/v4/recommendations/data`,a,{body:JSON.stringify({data:e})}).then(p),fetchProducts:()=>d(`${n}jetpack/v4/products`,c).then(p).then(g),fetchRewindStatus:()=>d(`${n}jetpack/v4/rewind`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchScanStatus:()=>d(`${n}jetpack/v4/scan`,c).then(p).then(g).then((e=>JSON.parse(e.data))),dismissJetpackNotice:e=>h(`${n}jetpack/v4/notice/${e}`,a,{body:JSON.stringify({dismissed:!0})}).then(p).then(g),fetchPluginsData:()=>d(`${n}jetpack/v4/plugins`,c).then(p).then(g),fetchIntroOffers:()=>d(`${n}jetpack/v4/intro-offers`,c).then(p).then(g),fetchVerifySiteGoogleStatus:e=>d(null!==e?`${n}jetpack/v4/verify-site/google/${e}`:`${n}jetpack/v4/verify-site/google`,c).then(p).then(g),verifySiteGoogle:e=>h(`${n}jetpack/v4/verify-site/google`,a,{body:JSON.stringify({keyring_id:e})}).then(p).then(g),submitSurvey:e=>h(`${n}jetpack/v4/marketing/survey`,a,{body:JSON.stringify(e)}).then(p).then(g),saveSetupQuestionnaire:e=>h(`${n}jetpack/v4/setup/questionnaire`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicensingError:e=>h(`${n}jetpack/v4/licensing/error`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicenseKey:e=>h(`${n}jetpack/v4/licensing/set-license`,a,{body:JSON.stringify({license:e})}).then(p).then(g),getUserLicensesCounts:()=>d(`${n}jetpack/v4/licensing/user/counts`,c).then(p).then(g),getUserLicenses:()=>d(`${n}jetpack/v4/licensing/user/licenses`,c).then(p).then(g),updateLicensingActivationNoticeDismiss:e=>h(`${n}jetpack/v4/licensing/user/activation-notice-dismiss`,a,{body:JSON.stringify({last_detached_count:e})}).then(p).then(g),updateRecommendationsStep:e=>h(`${n}jetpack/v4/recommendations/step`,a,{body:JSON.stringify({step:e})}).then(p),confirmIDCSafeMode:()=>h(`${n}jetpack/v4/identity-crisis/confirm-safe-mode`,a).then(p),startIDCFresh:e=>h(`${n}jetpack/v4/identity-crisis/start-fresh`,a,{body:JSON.stringify({redirect_uri:e})}).then(p).then(g),migrateIDC:()=>h(`${n}jetpack/v4/identity-crisis/migrate`,a).then(p),attachLicenses:e=>h(`${n}jetpack/v4/licensing/attach-licenses`,a,{body:JSON.stringify({licenses:e})}).then(p).then(g),fetchSearchPlanInfo:()=>d(`${o}jetpack/v4/search/plan`,c).then(p).then(g),fetchSearchSettings:()=>d(`${o}jetpack/v4/search/settings`,c).then(p).then(g),updateSearchSettings:e=>h(`${o}jetpack/v4/search/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSearchStats:()=>d(`${o}jetpack/v4/search/stats`,c).then(p).then(g),fetchWafSettings:()=>d(`${n}jetpack/v4/waf`,c).then(p).then(g),fetchWordAdsSettings:()=>d(`${n}jetpack/v4/wordads/settings`,c).then(p).then(g),updateWordAdsSettings:e=>h(`${n}jetpack/v4/wordads/settings`,a,{body:JSON.stringify(e)}),fetchSearchPricing:()=>d(`${o}jetpack/v4/search/pricing`,c).then(p).then(g)};function d(e,t){return fetch(u(e),t)}function h(e,t,n){return fetch(e,Object.assign({},t,n)).catch(f)}function m(e){return e.general&&void 0===e.general.response||e.week&&void 0===e.week.response||e.month&&void 0===e.month.response?e:{}}Object.assign(this,l)};function p(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((()=>{throw e.redirected?new u(e.redirected):new a})):e.json().catch((e=>h(e))).then((t=>{const n=new Error(`${t.message} (Status ${e.status})`);throw n.response=t,n.name="ApiError",n}))}function g(e){return e.json().catch((t=>h(t,e.redirected,e.url)))}function h(e,t,n){throw t?new c(n):new s}function f(){throw new l}},895:(e,t,n)=>{"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={};let r;if("undefined"!=typeof window&&(r=window.Initial_State?.calypsoEnv),0===e.search("https://")){const t=new URL(e);e=`https://${t.host}${t.pathname}`,n.url=encodeURIComponent(e)}else n.source=encodeURIComponent(e);Object.keys(t).map((e=>{n[e]=encodeURIComponent(t[e])})),!Object.keys(n).includes("site")&&"undefined"!=typeof jetpack_redirects&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(n.site=jetpack_redirects.currentSiteRawUrl),r&&(n.calypso_env=r);const i=Object.keys(n).map((e=>e+"="+n[e])).join("&");return"https://jetpack.com/redirect/?"+i}n.d(t,{Z:()=>r})},132:(e,t,n)=>{let r={};try{r=n(647)}catch{console.error("jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config"),r={missingConfig:!0}}const i=e=>r.hasOwnProperty(e);e.exports={jetpackConfigHas:i,jetpackConfigGet:e=>{if(!i(e))throw'This app requires the "'+e+'" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';return r[e]}}},294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(743),i=n(818),o=n(196),s=n(428);const c=window?.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},a=function(){let{registrationNonce:e=c.registrationNonce,apiRoot:t=c.apiRoot,apiNonce:n=c.apiNonce,redirectUri:a,autoTrigger:u,from:l,skipUserConnection:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{registerSite:p,connectUser:g,refreshConnectedPlugins:h}=(0,i.useDispatch)(s.t),f=(0,i.useSelect)((e=>e(s.t).getRegistrationError())),{siteIsRegistering:m,userIsConnecting:C,userConnectionData:v,connectedPlugins:y,connectionErrors:w,isRegistered:k,isUserConnected:S,hasConnectedOwner:b}=(0,i.useSelect)((e=>({siteIsRegistering:e(s.t).getSiteIsRegistering(),userIsConnecting:e(s.t).getUserIsConnecting(),userConnectionData:e(s.t).getUserConnectionData(),connectedPlugins:e(s.t).getConnectedPlugins(),connectionErrors:e(s.t).getConnectionErrors(),...e(s.t).getConnectionStatus()}))),_=()=>d?a?(window.location=a,Promise.resolve(a)):Promise.resolve():g({from:l,redirectUri:a}),j=t=>(t&&t.preventDefault(),k?_():p({registrationNonce:e,redirectUri:a}).then((()=>_())));return(0,o.useEffect)((()=>{r.ZP.setApiRoot(t),r.ZP.setApiNonce(n)}),[t,n]),(0,o.useEffect)((()=>{!u||m||C||j()}),[]),{handleRegisterSite:j,handleConnectUser:_,refreshConnectedPlugins:h,isRegistered:k,isUserConnected:S,siteIsRegistering:m,userIsConnecting:C,registrationError:f,userConnectionData:v,hasConnectedOwner:b,connectedPlugins:y,connectionErrors:w}}},523:(e,t,n)=>{"use strict";n.d(t,{LI:()=>o,N4:()=>c,Qo:()=>p,T1:()=>u,TS:()=>l,ZP:()=>S,b5:()=>h,i6:()=>i,qV:()=>a,r7:()=>s,wQ:()=>g});var r=n(743);const i="SET_CONNECTION_STATUS",o="SET_CONNECTION_STATUS_IS_FETCHING",s="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",a="SET_REGISTRATION_ERROR",u="CLEAR_REGISTRATION_ERROR",l="SET_AUTHORIZATION_URL",d="CONNECT_USER",p="DISCONNECT_USER_SUCCESS",g="SET_CONNECTED_PLUGINS",h="SET_CONNECTION_ERRORS",f=e=>({type:i,connectionStatus:e}),m=e=>({type:s,isRegistering:e}),C=e=>({type:c,isConnecting:e}),v=e=>({type:a,registrationError:e}),y=()=>({type:u}),w=e=>({type:l,authorizationUrl:e}),k=e=>({type:g,connectedPlugins:e});const S={setConnectionStatus:f,setConnectionStatusIsFetching:e=>({type:o,isFetching:e}),fetchConnectionStatus:()=>({type:"FETCH_CONNECTION_STATUS"}),fetchAuthorizationUrl:e=>({type:"FETCH_AUTHORIZATION_URL",redirectUri:e}),setSiteIsRegistering:m,setUserIsConnecting:C,setRegistrationError:v,clearRegistrationError:y,setAuthorizationUrl:w,registerSite:function(e){let{registrationNonce:t,redirectUri:n}=e;return function*(){yield y(),yield m(!0);try{const e=yield{type:"REGISTER_SITE",registrationNonce:t,redirectUri:n};return yield f({isRegistered:!0}),yield w(e.authorizeUrl),yield m(!1),Promise.resolve(e)}catch(e){return yield v(e),yield m(!1),Promise.reject(e)}}()},connectUser:function(){let{from:e,redirectFunc:t,redirectUri:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function*(){yield C(!0),yield{type:d,from:e,redirectFunc:t,redirectUri:n}}()},disconnectUserSuccess:()=>({type:p}),setConnectedPlugins:k,refreshConnectedPlugins:()=>async e=>{let{dispatch:t}=e;return await new Promise((e=>r.ZP.fetchConnectedPlugins().then((n=>{t(k(n)),e(n)}))))},setConnectionErrors:e=>({type:h,connectionErrors:e})}},432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(743),i=n(818),o=n(57);const s={FETCH_AUTHORIZATION_URL:e=>{let{redirectUri:t}=e;return r.ZP.fetchAuthorizationUrl(t)},REGISTER_SITE:e=>{let{registrationNonce:t,redirectUri:n}=e;return r.ZP.registerSite(t,n)},CONNECT_USER:(0,i.createRegistryControl)((e=>{let{resolveSelect:t}=e;return function(){let{from:e,redirectFunc:n,redirectUri:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(((i,s)=>{t(o.Z).getAuthorizationUrl(r).then((t=>{const r=n||(e=>window.location.assign(e)),o=new URL(t);e&&o.searchParams.set("from",encodeURIComponent(e));const s=o.toString();r(s),i(s)})).catch((e=>{s(e)}))}))}}))}},479:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(818),i=n(523);const o=(0,r.combineReducers)({connectionStatus:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.i6:return{...e,...t.connectionStatus};case i.Qo:return{...e,isUserConnected:!1}}return e},connectionStatusIsFetching:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===i.LI?t.isFetching:e},siteIsRegistering:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===i.r7?t.isRegistering:e},userIsConnecting:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===i.N4?t.isConnecting:e},registrationError:(e,t)=>{switch(t.type){case i.T1:return!1;case i.qV:return t.registrationError;default:return e}},authorizationUrl:(e,t)=>t.type===i.TS?t.authorizationUrl:e,userConnectionData:(e,t)=>(t.type,e),connectedPlugins:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===i.wQ?t.connectedPlugins:e},connectionErrors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===i.b5?t.connectionErrors:e}})},728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(818),i=n(523),o=n(57);const s={...{getAuthorizationUrl:{isFulfilled:function(e){const t=Boolean(e.authorizationUrl);for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];const c=(0,r.select)(o.Z).hasFinishedResolution("getAuthorizationUrl",i);return t&&!c&&(0,r.dispatch)(o.Z).finishResolution("getAuthorizationUrl",i),t},*fulfill(e){const t=yield i.ZP.fetchAuthorizationUrl(e);yield i.ZP.setAuthorizationUrl(t.authorizeUrl)}}}}},725:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getWpcomUser:e=>e?.userConnectionData?.currentUser?.wpcomUser,getBlogId:e=>e?.userConnectionData?.currentUser?.blogId}}},535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(17),i=n.n(r),o=n(818);class s{static mayBeInit(e,t){null===s.store&&(s.store=(0,o.createReduxStore)(e,t),(0,o.register)(s.store))}}i()(s,"store",null);const c=s},57:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r="jetpack-connection"},428:(e,t,n)=>{"use strict";n.d(t,{t:()=>u.Z});var r=n(523),i=n(432),o=n(479),s=n(728),c=n(725),a=n(535),u=n(57);const l=window.JP_CONNECTION_INITIAL_STATE;l||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),a.Z.mayBeInit(u.Z,{__experimentalUseThunks:!0,reducer:o.Z,actions:r.ZP,selectors:c.Z,resolvers:s.Z,controls:i.Z,initialState:l||{}})},419:(e,t,n)=>{"use strict";n.d(t,{lQ:()=>r.Z,z$:()=>i.Z});var r=n(4),i=(n(714),n(354),n(404),n(53))},4:(e,t,n)=>{"use strict";function r(){return window&&window.Jetpack_Editor_Initial_State&&window.Jetpack_Editor_Initial_State.siteFragment?window.Jetpack_Editor_Initial_State.siteFragment:null}n.d(t,{Z:()=>r})},53:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(975),i=n(294),o=n(307);const{tracks:s}=r.Z,{recordEvent:c}=s,a=function(){let{pageViewEventName:e=null,pageViewNamespace:t="jetpack",pageViewSuffix:n="page_view",pageViewEventProperties:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[u,l]=(0,o.useState)(!1),{isUserConnected:d,isRegistered:p,userConnectionData:g={}}=(0,i.Z)(),{wpcomUser:{login:h,ID:f}={},blogId:m}=g.currentUser||{},C=(0,o.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};d&&f&&h&&c(e,t)}),[d,f,h]);return(0,o.useEffect)((()=>{d&&f&&h&&m&&r.Z.initialize(f,h,{blog_id:m})}),[m,f,h,d]),(0,o.useEffect)((()=>{const r=e?`${t}_${e}_${n}`:null;p&&r&&(u||(C(r,a),l(!0)))}),[u,t,e,n,p,a,C]),{recordEvent:C,tracks:s}}},404:(e,t,n)=>{"use strict";var r=n(736);n(483),n(819);const __=r.__;__("Upgrade your plan to use video covers","jetpack-blaze"),__("Upgrade your plan to upload audio","jetpack-blaze")},714:(e,t,n)=>{"use strict";n(817)},354:(e,t,n)=>{"use strict";n(674),n(333)},128:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(609);function i(){return React.createElement(r.SVG,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement(r.G,{clipPath:"url(#clip0_4728_49296)"},React.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"#D9D9D9"}),React.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"black"}),React.createElement(r.Path,{d:"M14.8665 6.68544C14.7139 6.50468 14.4652 6.43826 14.2436 6.52015C14.0224 6.60204 13.875 6.81412 13.875 7.05149V8.71684C13.875 9.02893 13.6226 9.2829 13.3125 9.2829C13.0024 9.2829 12.75 9.02893 12.75 8.71684V4.72989C12.75 4.56762 12.681 4.41365 12.5602 4.3061C12.4354 4.19515 12.3622 4.13288 12.3622 4.13288C12.1537 3.95627 11.8485 3.95552 11.6389 4.13175C11.4086 4.32572 6 8.9327 6 13.434C6 16.7632 8.69175 19.472 12 19.472C15.3082 19.472 18 16.7632 18 13.434C18 10.9267 16.296 8.38022 14.8665 6.68544ZM12.0728 18.5274C11.508 18.544 10.9699 18.3259 10.5259 17.9742C8.3535 16.2537 10.3856 13.4982 11.4469 12.3106C11.7435 11.9789 12.2584 11.9807 12.555 12.3125C13.2742 13.1178 14.4375 14.6416 14.4375 16.0756C14.4375 17.4059 13.3853 18.4885 12.0728 18.5274Z",fill:"white"})))}},647:e=>{"use strict";if(void 0==={consumer_slug:"jetpack-blaze"}){var t=new Error('Cannot find module \'{"consumer_slug":"jetpack-blaze"}\'');throw t.code="MODULE_NOT_FOUND",t}e.exports={consumer_slug:"jetpack-blaze"}},196:e=>{"use strict";e.exports=window.React},819:e=>{"use strict";e.exports=window.lodash},609:e=>{"use strict";e.exports=window.wp.components},333:e=>{"use strict";e.exports=window.wp.compose},818:e=>{"use strict";e.exports=window.wp.data},67:e=>{"use strict";e.exports=window.wp.editPost},238:e=>{"use strict";e.exports=window.wp.editor},307:e=>{"use strict";e.exports=window.wp.element},736:e=>{"use strict";e.exports=window.wp.i18n},817:e=>{"use strict";e.exports=window.wp.plugins},444:e=>{"use strict";e.exports=window.wp.primitives},483:e=>{"use strict";e.exports=window.wp.url},17:(e,t,n)=>{var r=n(930);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},674:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},61:(e,t,n)=>{var r=n(522).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},930:(e,t,n)=>{var r=n(522).default,i=n(61);e.exports=function(e){var t=i(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},522:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(895),t=n(419),r=n(609),i=n(333),o=n(818),s=n(67),c=n(238),a=n(307),u=n(736),l=n(74),d=n(381),p=n(817),g=n(128);const __=u.__,h=()=>{const{tracks:n}=(0,t.z$)(),p=(0,a.useCallback)((()=>n.recordEvent("jetpack_editor_blaze_publish_click")),[n]),{isPostPublished:h,isPublishingPost:f,postId:m,postType:C,postVisibility:v}=(0,o.useSelect)((e=>({isPostPublished:e(c.store).isCurrentPostPublished(),isPublishingPost:e(c.store).isPublishingPost(),postId:e(c.store).getCurrentPostId(),postType:e(c.store).getCurrentPostType(),postVisibility:e(c.store).getEditedPostVisibility()}))),y=(0,i.usePrevious)(f),w={name:"blaze-panel",title:__("Promote with Blaze","jetpack-blaze"),className:"blaze-panel",icon:React.createElement(g.Z,null),initialOpen:!0},k=(0,e.Z)("jetpack-blaze",{site:(0,t.lQ)(),query:`blazepress-widget=post-${m}`}),S=()=>!!["page","post","product"].includes(C)&&!(!h||"password"===v||"private"===v);return(0,a.useEffect)((()=>{y&&!f&&S()&&h&&n.recordEvent("jetpack_editor_blaze_post_publish_panel_view")}),[n,f,h,y]),S()?React.createElement(s.PluginPostPublishPanel,w,React.createElement(r.PanelRow,null,React.createElement("p",null,__("Reach a larger audience boosting the content to the WordPress.com community of blogs and sites.","jetpack-blaze"))),React.createElement("div",{role:"link",className:"post-publish-panel__postpublish-buttons",tabIndex:0,onClick:p,onKeyDown:p},React.createElement(r.Button,{variant:"secondary",href:k,target:"_top"},(0,u.sprintf)(/* translators: %s is the post type (e.g. Post, Page, Product). */
__("Blaze this %s","jetpack-blaze"),C)," ",React.createElement(l.Z,{icon:d.Z,className:"blaze-panel-outbound-link__external_icon"})))):null};(0,p.getPlugin)("jetpack-blaze")||(0,p.registerPlugin)("jetpack-blaze",{render:h})})()})();