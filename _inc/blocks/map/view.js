/*! For license information please see view.js.LICENSE.txt */
!function(){var e={84788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2378);let o,i,a,s;const l=/<(\/)?(\w+)\s*(\/)?>/g;function c(e,t,n,r,o){return{element:e,tokenStart:t,tokenLength:n,prevOffset:r,leadingTextStart:o,children:[]}}const u=e=>{const t="object"==typeof e,n=t&&Object.values(e);return t&&n.length&&n.every((e=>(0,r.isValidElement)(e)))};function p(e){const t=function(){const e=l.exec(o);if(null===e)return["no-more-tokens"];const t=e.index,[n,r,i,a]=e,s=n.length;if(a)return["self-closed",i,t,s];if(r)return["closer",i,t,s];return["opener",i,t,s]}(),[n,u,p,m]=t,h=s.length,g=p>i?i:null;if(!e[u])return d(),!1;switch(n){case"no-more-tokens":if(0!==h){const{leadingTextStart:e,tokenStart:t}=s.pop();a.push(o.substr(e,t))}return d(),!1;case"self-closed":return 0===h?(null!==g&&a.push(o.substr(g,p-g)),a.push(e[u]),i=p+m,!0):(f(c(e[u],p,m)),i=p+m,!0);case"opener":return s.push(c(e[u],p,m,p+m,g)),i=p+m,!0;case"closer":if(1===h)return function(e){const{element:t,leadingTextStart:n,prevOffset:i,tokenStart:l,children:c}=s.pop(),u=e?o.substr(i,e-i):o.substr(i);u&&c.push(u);null!==n&&a.push(o.substr(n,l-n));a.push((0,r.cloneElement)(t,null,...c))}(p),i=p+m,!0;const t=s.pop(),n=o.substr(t.prevOffset,p-t.prevOffset);t.children.push(n),t.prevOffset=p+m;const l=c(t.element,t.tokenStart,t.tokenLength,p+m);return l.children=t.children,f(l),i=p+m,!0;default:return d(),!1}}function d(){const e=o.length-i;0!==e&&a.push(o.substr(i,e))}function f(e){const{element:t,tokenStart:n,tokenLength:i,prevOffset:a,children:l}=e,c=s[s.length-1],u=o.substr(c.prevOffset,n-c.prevOffset);u&&c.children.push(u),c.children.push((0,r.cloneElement)(t,null,...l)),c.prevOffset=a||n+i}var m=(e,t)=>{if(o=e,i=0,a=[],s=[],l.lastIndex=0,!u(t))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do{}while(p(t));return(0,r.createElement)(r.Fragment,null,...a)};t.default=m},51806:function(e,t,n){"use strict";var r=n(25877);Object.defineProperty(t,"__esModule",{value:!0});var o={createInterpolateElement:!0,Platform:!0,renderToString:!0,RawHTML:!0};Object.defineProperty(t,"Platform",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"RawHTML",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"createInterpolateElement",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"renderToString",{enumerable:!0,get:function(){return u.default}});var i=r(n(84788)),a=n(2378);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var s=n(29115);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===s[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))}));var l=n(82986);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var c=r(n(82912)),u=r(n(51962)),p=r(n(74745))},82912:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={OS:"web",select:e=>"web"in e?e.web:e.default,isWeb:!0};t.default=n},74745:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,...n}=e,o="";return r.Children.toArray(t).forEach((e=>{"string"==typeof e&&""!==e.trim()&&(o+=e)})),(0,r.createElement)("div",{dangerouslySetInnerHTML:{__html:o},...n})};var r=n(2378)},29115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createPortal",{enumerable:!0,get:function(){return r.createPortal}}),Object.defineProperty(t,"findDOMNode",{enumerable:!0,get:function(){return r.findDOMNode}}),Object.defineProperty(t,"hydrate",{enumerable:!0,get:function(){return r.hydrate}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return r.render}}),Object.defineProperty(t,"unmountComponentAtNode",{enumerable:!0,get:function(){return r.unmountComponentAtNode}});var r=n(91850)},2378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Children",{enumerable:!0,get:function(){return r.Children}}),Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return r.Component}}),Object.defineProperty(t,"Fragment",{enumerable:!0,get:function(){return r.Fragment}}),Object.defineProperty(t,"StrictMode",{enumerable:!0,get:function(){return r.StrictMode}}),Object.defineProperty(t,"Suspense",{enumerable:!0,get:function(){return r.Suspense}}),Object.defineProperty(t,"cloneElement",{enumerable:!0,get:function(){return r.cloneElement}}),t.concatChildren=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t,n)=>(r.Children.forEach(t,((t,o)=>{t&&"string"!=typeof t&&(t=(0,r.cloneElement)(t,{key:[n,o].join()})),e.push(t)})),e)),[])},Object.defineProperty(t,"createContext",{enumerable:!0,get:function(){return r.createContext}}),Object.defineProperty(t,"createElement",{enumerable:!0,get:function(){return r.createElement}}),Object.defineProperty(t,"createRef",{enumerable:!0,get:function(){return r.createRef}}),Object.defineProperty(t,"forwardRef",{enumerable:!0,get:function(){return r.forwardRef}}),Object.defineProperty(t,"isValidElement",{enumerable:!0,get:function(){return r.isValidElement}}),Object.defineProperty(t,"lazy",{enumerable:!0,get:function(){return r.lazy}}),Object.defineProperty(t,"memo",{enumerable:!0,get:function(){return r.memo}}),t.switchChildrenNodeName=function(e,t){return e&&r.Children.map(e,((e,n)=>{if("string"==typeof(null==e?void 0:e.valueOf()))return(0,r.createElement)(t,{key:n},e);const{children:o,...i}=e.props;return(0,r.createElement)(t,{key:n,...i},o)}))},Object.defineProperty(t,"useCallback",{enumerable:!0,get:function(){return r.useCallback}}),Object.defineProperty(t,"useContext",{enumerable:!0,get:function(){return r.useContext}}),Object.defineProperty(t,"useDebugValue",{enumerable:!0,get:function(){return r.useDebugValue}}),Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return r.useEffect}}),Object.defineProperty(t,"useImperativeHandle",{enumerable:!0,get:function(){return r.useImperativeHandle}}),Object.defineProperty(t,"useLayoutEffect",{enumerable:!0,get:function(){return r.useLayoutEffect}}),Object.defineProperty(t,"useMemo",{enumerable:!0,get:function(){return r.useMemo}}),Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return r.useReducer}}),Object.defineProperty(t,"useRef",{enumerable:!0,get:function(){return r.useRef}}),Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return r.useState}});var r=n(99196)},51962:function(e,t,n){"use strict";var r=n(25877);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.hasPrefix=b,t.renderAttributes=E,t.renderComponent=_,t.renderElement=j,t.renderNativeComponent=S,t.renderStyle=L;var o=n(62313),i=n(28132),a=n(81975),s=n(2378),l=r(n(74745));const{Provider:c,Consumer:u}=(0,s.createContext)(void 0),p=(0,s.forwardRef)((()=>null)),d=new Set(["string","boolean","number"]),f=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),m=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),h=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),g=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function b(e,t){return t.some((t=>0===e.indexOf(t)))}function y(e){return"key"===e||"children"===e}function v(e,t){return"style"===e?L(t):t}const k=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),w=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{}),x=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce(((e,t)=>(e[t.replace(":","").toLowerCase()]=t,e)),{});function C(e){switch(e){case"htmlFor":return"for";case"className":return"class"}const t=e.toLowerCase();return w[t]?w[t]:k[t]?(0,i.paramCase)(k[t]):x[t]?x[t]:t}function M(e){return e.startsWith("--")?e:b(e,["ms","O","Moz","Webkit"])?"-"+(0,i.paramCase)(e):(0,i.paramCase)(e)}function O(e,t){return"number"!=typeof t||0===t||g.has(e)?t:t+"px"}function j(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||!1===e)return"";if(Array.isArray(e))return P(e,t,n);switch(typeof e){case"string":return(0,a.escapeHTML)(e);case"number":return e.toString()}const{type:r,props:o}=e;switch(r){case s.StrictMode:case s.Fragment:return P(o.children,t,n);case l.default:const{children:e,...r}=o;return S(Object.keys(r).length?"div":null,{...r,dangerouslySetInnerHTML:{__html:e}},t,n)}switch(typeof r){case"string":return S(r,o,t,n);case"function":return r.prototype&&"function"==typeof r.prototype.render?_(r,o,t,n):j(r(o,n),t,n)}switch(r&&r.$$typeof){case c.$$typeof:return P(o.children,o.value,n);case u.$$typeof:return j(o.children(t||r._currentValue),t,n);case p.$$typeof:return j(r.render(o),t,n)}return""}function S(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o="";if("textarea"===e&&t.hasOwnProperty("value")){o=P(t.value,n,r);const{value:e,...i}=t;t=i}else t.dangerouslySetInnerHTML&&"string"==typeof t.dangerouslySetInnerHTML.__html?o=t.dangerouslySetInnerHTML.__html:void 0!==t.children&&(o=P(t.children,n,r));if(!e)return o;const i=E(t);return f.has(e)?"<"+e+i+"/>":"<"+e+i+">"+o+"</"+e+">"}function _(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=new e(t,r);"function"==typeof o.getChildContext&&Object.assign(r,o.getChildContext());const i=j(o.render(),n,r);return i}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="";e=Array.isArray(e)?e:[e];for(let o=0;o<e.length;o++){r+=j(e[o],t,n)}return r}function E(e){let t="";for(const n in e){const r=C(n);if(!(0,a.isValidAttributeName)(r))continue;let o=v(n,e[n]);if(!d.has(typeof o))continue;if(y(n))continue;const i=m.has(r);if(i&&!1===o)continue;const s=i||b(n,["data-","aria-"])||h.has(r);("boolean"!=typeof o||s)&&(t+=" "+r,i||("string"==typeof o&&(o=(0,a.escapeAttribute)(o)),t+='="'+o+'"'))}return t}function L(e){if(!(0,o.isPlainObject)(e))return e;let t;for(const n in e){const r=e[n];if(null==r)continue;t?t+=";":t="";t+=M(n)+":"+O(n,r)}return t}var A=j;t.default=A},82986:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmptyElement=void 0;t.isEmptyElement=e=>"number"!=typeof e&&("string"==typeof(null==e?void 0:e.valueOf())||Array.isArray(e)?!e.length:!e)},59823:function(e,t,n){"use strict";n.d(t,{AG:function(){return a},Ti:function(){return i},eV:function(){return s}});var r=n(38697),o=n(72867);function i(e,t){return 0===t?e.toLowerCase():(0,o.By)(e,t)}function a(e,t){return 0===t?e.toLowerCase():(0,o.Pv)(e)}function s(e,t){return void 0===t&&(t={}),(0,o.Ho)(e,(0,r.pi)({transform:i},t))}},81338:function(e,t,n){"use strict";n.d(t,{I:function(){return s},w:function(){return a}});var r=n(38697),o=n(68308),i=n(83078);function a(e){return(0,i.l)(e.toLowerCase())}function s(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:" ",transform:a},t))}},28132:function(e,t,n){"use strict";n.r(t),n.d(t,{camelCase:function(){return r.eV},camelCaseTransform:function(){return r.Ti},camelCaseTransformMerge:function(){return r.AG},capitalCase:function(){return o.I},capitalCaseTransform:function(){return o.w},constantCase:function(){return i.c},dotCase:function(){return a.$},headerCase:function(){return s.e},noCase:function(){return l.B},paramCase:function(){return c.o},pascalCase:function(){return u.Ho},pascalCaseTransform:function(){return u.By},pascalCaseTransformMerge:function(){return u.Pv},pathCase:function(){return p.Y},sentenceCase:function(){return d.G},sentenceCaseTransform:function(){return d.a},snakeCase:function(){return f.f}});var r=n(59823),o=n(81338),i=n(56233),a=n(77352),s=n(20025),l=n(68308),c=n(76854),u=n(72867),p=n(76559),d=n(44434),f=n(59491)},56233:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var r=n(38697),o=n(68308),i=n(48936);function a(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:"_",transform:i.L},t))}},77352:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(38697),o=n(68308);function i(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:"."},t))}},20025:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var r=n(38697),o=n(81338);function i(e,t){return void 0===t&&(t={}),(0,o.I)(e,(0,r.pi)({delimiter:"-"},t))}},62313:function(e,t){"use strict";function n(e){return"[object Object]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=function(e){var t,r;return!1!==n(e)&&(void 0===(t=e.constructor)||!1!==n(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}},97740:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});function r(e){return e.toLowerCase()}},68308:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(97740),o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],i=/[^A-Z0-9]+/gi;function a(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,a=void 0===n?o:n,l=t.stripRegexp,c=void 0===l?i:l,u=t.transform,p=void 0===u?r.U:u,d=t.delimiter,f=void 0===d?" ":d,m=s(s(e,a,"$1\0$2"),c,"\0"),h=0,g=m.length;"\0"===m.charAt(h);)h++;for(;"\0"===m.charAt(g-1);)g--;return m.slice(h,g).split("\0").map(p).join(f)}function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},76854:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(38697),o=n(77352);function i(e,t){return void 0===t&&(t={}),(0,o.$)(e,(0,r.pi)({delimiter:"-"},t))}},72867:function(e,t,n){"use strict";n.d(t,{By:function(){return i},Ho:function(){return s},Pv:function(){return a}});var r=n(38697),o=n(68308);function i(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function a(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function s(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:"",transform:i},t))}},76559:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(38697),o=n(77352);function i(e,t){return void 0===t&&(t={}),(0,o.$)(e,(0,r.pi)({delimiter:"/"},t))}},44434:function(e,t,n){"use strict";n.d(t,{G:function(){return s},a:function(){return a}});var r=n(38697),o=n(68308),i=n(83078);function a(e,t){var n=e.toLowerCase();return 0===t?(0,i.l)(n):n}function s(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,r.pi)({delimiter:" ",transform:a},t))}},59491:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(38697),o=n(77352);function i(e,t){return void 0===t&&(t={}),(0,o.$)(e,(0,r.pi)({delimiter:"_"},t))}},93846:function(e,t,n){"use strict";var r=n(90017),o=n.n(r),i=n(51806),a=n(55609),s=n(69307),l=n(65736),c=n(92819),u=n(85007),p=n(45388),d=n(82621),f=n(9262),m=n(90055);const __=l.__;class h extends s.Component{constructor(){super(...arguments),o()(this,"onMarkerClick",(e=>{const{onMarkerClick:t}=this.props;this.setState({activeMarker:e}),t()})),o()(this,"onMapClick",(()=>{this.setState({activeMarker:null})})),o()(this,"clearCurrentMarker",(()=>{this.setState({activeMarker:null})})),o()(this,"updateActiveMarker",(e=>{const{points:t}=this.props,{activeMarker:n}=this.state,{index:r}=n.props,o=t.slice(0);(0,c.assign)(o[r],e),this.props.onSetPoints(o)})),o()(this,"deleteActiveMarker",(()=>{const{points:e}=this.props,{activeMarker:t}=this.state,{index:n}=t.props,r=e.slice(0);r.splice(n,1),this.props.onSetPoints(r),this.setState({activeMarker:null})})),o()(this,"sizeMap",(()=>{const{mapHeight:e}=this.props,{map:t}=this.state,n=this.mapRef.current;if(e)n.style.height=e+"px";else{const e=n.offsetWidth,t=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,r=Math.min(e*(3/4),t);n.style.height=r+"px"}t.resize(),this.setBoundsByMarkers()})),o()(this,"updateZoom",(()=>{const{zoom:e}=this.props,{map:t}=this.state;t.setZoom(e),t.updateZoom(e)})),o()(this,"setBoundsByMarkers",(()=>{const{admin:e,onSetMapCenter:t,onSetZoom:n,points:r,zoom:o}=this.props,{map:i,activeMarker:a,mapboxgl:s,zoomControl:l,boundsSetProgrammatically:c}=this.state;if(!i)return;if(r.length&&e?i.dragPan.disable():i.dragPan.enable(),!r.length)return;if(a)return;const u=new s.LngLatBounds;if(r.forEach((e=>{u.extend([e.coordinates.longitude,e.coordinates.latitude])})),t(u.getCenter()),r.length>1){i.fitBounds(u,{padding:{top:80,bottom:80,left:40,right:40}}),this.setState({boundsSetProgrammatically:!0});try{i.removeControl(l)}catch(e){}}else{if(i.setCenter(u.getCenter()),c){const e=12;i.setZoom(e),n(e)}else i.setZoom(parseInt(o,10));i.addControl(l),this.setState({boundsSetProgrammatically:!1})}})),o()(this,"scriptsLoaded",(()=>{const{mapCenter:e,points:t}=this.props;this.setState({loaded:!0}),t.length,this.initMap(e)})),o()(this,"googlePoint2Mapbox",(e=>e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?e:{lat:e.latitude||0,lng:e.longitude||0})),this.state={map:null,fit_to_bounds:!1,loaded:!1,mapboxgl:null},this.mapRef=(0,s.createRef)(),this.debouncedSizeMap=(0,c.debounce)(this.sizeMap,250)}render(){const{points:e,admin:t,children:n,markerColor:r}=this.props,{map:o,activeMarker:l,mapboxgl:u}=this.state,{onMarkerClick:p,deleteActiveMarker:m,updateActiveMarker:h}=this,g=(0,c.get)(l,"props.point")||{},{title:b,caption:y}=g,v=s.Children.map(n,(e=>{if("AddPoint"===(0,c.get)(e,"props.tagName"))return e})),k=o&&u&&e.map(((e,t)=>(0,i.createElement)(f.Z,{mapRef:this.mapRef,key:t,point:e,index:t,map:o,mapboxgl:u,markerColor:r,onClick:p}))),w=u&&(0,i.createElement)(d.Z,{activeMarker:l,map:o,mapboxgl:u,unsetActiveMarker:()=>this.setState({activeMarker:null})},l&&t&&(0,i.createElement)(s.Fragment,null,(0,i.createElement)(a.TextControl,{label:__("Marker Title","jetpack"),value:b,onChange:e=>h({title:e})}),(0,i.createElement)(a.TextareaControl,{className:"wp-block-jetpack-map__marker-caption",label:__("Marker Caption","jetpack"),value:y,rows:"2",tag:"textarea",onChange:e=>h({caption:e})}),(0,i.createElement)(a.Button,{onClick:m,className:"wp-block-jetpack-map__delete-btn"},(0,i.createElement)(a.Dashicon,{icon:"trash",size:"15"})," ",__("Delete Marker","jetpack"))),l&&!t&&(0,i.createElement)(s.Fragment,null,(0,i.createElement)("h3",null,b),(0,i.createElement)("p",null,y)));return(0,i.createElement)(s.Fragment,null,(0,i.createElement)("div",{className:"wp-block-jetpack-map__gm-container",ref:this.mapRef},k),w,v)}componentDidMount(){const{apiKey:e}=this.props;e&&this.loadMapLibraries()}componentWillUnmount(){this.debouncedSizeMap.cancel(),window.removeEventListener("resize",this.debouncedSizeMap)}componentDidUpdate(e){const{admin:t,apiKey:n,children:r,points:o,mapStyle:i,mapDetails:a,scrollToZoom:s,showFullscreenButton:l}=this.props,{map:c,fullscreenControl:u}=this.state;n&&n.length>0&&n!==e.apiKey&&this.loadMapLibraries(),r!==e.children&&!1!==r&&this.clearCurrentMarker(),o!==e.points&&this.setBoundsByMarkers(),o.length!==e.points.length&&this.clearCurrentMarker(),i===e.mapStyle&&a===e.mapDetails||c.setStyle(this.getMapStyle()),s!==e.scrollToZoom&&(s?c.scrollZoom.enable():c.scrollZoom.disable()),l!==e.showFullscreenButton&&(l?(c.addControl(u),t&&u._fullscreenButton&&(u._fullscreenButton.disabled=!0)):c.removeControl(u))}getMapStyle(){const{mapStyle:e,mapDetails:t}=this.props;return(0,m.h)(e,t)}getMapType(){const{mapStyle:e}=this.props;switch(e){case"satellite":return"HYBRID";case"terrain":return"TERRAIN";default:return"ROADMAP"}}loadMapLibraries(){const{apiKey:e}=this.props,{currentWindow:t}=(0,u.bL)(this.mapRef.current),n={"mapbox-gl-js":()=>{(0,u.Dz)(t,"mapboxgl").then((t=>{t.accessToken=e,this.setState({mapboxgl:t},this.scriptsLoaded)}))}};(0,u.Pp)(p,n,this.mapRef.current)}initMap(e){const{mapboxgl:t}=this.state,{zoom:n,onMapLoaded:r,onError:o,scrollToZoom:i,showFullscreenButton:a,admin:s}=this.props;let l=null;try{l=new t.Map({container:this.mapRef.current,style:this.getMapStyle(),center:this.googlePoint2Mapbox(e),zoom:parseInt(n,10),pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(e){return void o("mapbox_error",e.message)}i||l.scrollZoom.disable();const c=new t.FullscreenControl;l.on("error",(e=>{o("mapbox_error",e.error.message)}));const u=new t.NavigationControl({showCompass:!1,showZoom:!0});l.on("zoomend",(()=>{this.props.onSetZoom(l.getZoom())})),l.on("moveend",(()=>{const{onSetMapCenter:e,points:t}=this.props;t.length<1&&e(l.getCenter())})),l.getCanvas().addEventListener("click",this.onMapClick),this.setState({map:l,zoomControl:u,fullscreenControl:c},(()=>{this.debouncedSizeMap(),l.addControl(u),a&&(l.addControl(c),s&&c._fullscreenButton&&(c._fullscreenButton.disabled=!0)),this.mapRef.current.addEventListener("alignmentChanged",this.debouncedSizeMap),l.resize(),r(),this.setState({loaded:!0}),window.addEventListener("resize",this.debouncedSizeMap)}))}}h.defaultProps={points:[],mapStyle:"default",zoom:13,onSetZoom:()=>{},onSetMapCenter:()=>{},onMapLoaded:()=>{},onMarkerClick:()=>{},onError:()=>{},markerColor:"red",apiKey:null,mapCenter:{}},t.Z=h},82621:function(e,t,n){"use strict";var r=n(90017),o=n.n(r),i=n(69307);class a extends i.Component{constructor(){super(...arguments),o()(this,"closeClick",(()=>{this.props.unsetActiveMarker()}))}componentDidMount(){const{mapboxgl:e}=this.props;this.el=document.createElement("DIV"),this.infowindow=new e.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}}),this.infowindow.setDOMContent(this.el),this.infowindow.on("close",this.closeClick)}componentDidUpdate(e){this.props.activeMarker!==e.activeMarker&&(this.props.activeMarker?this.openWindow():this.closeWindow())}render(){return this.el?(0,i.createPortal)(this.props.children,this.el):null}openWindow(){const{map:e,activeMarker:t}=this.props;this.infowindow.setLngLat(t.getPoint()).addTo(e)}closeWindow(){this.infowindow.remove()}}a.defaultProps={unsetActiveMarker:()=>{},activeMarker:null,map:null,mapboxgl:null},t.Z=a},9262:function(e,t,n){"use strict";var r=n(90017),o=n.n(r),i=n(69307),a=n(85007);class s extends i.Component{constructor(){super(...arguments),o()(this,"handleClick",(()=>{const{onClick:e}=this.props;e(this)})),o()(this,"getPoint",(()=>{const{point:e}=this.props;return[e.coordinates.longitude,e.coordinates.latitude]}))}componentDidMount(){this.renderMarker()}componentWillUnmount(){this.marker&&this.marker.remove()}componentDidUpdate(){this.renderMarker()}renderMarker(){const{map:e,point:t,mapboxgl:n,markerColor:r,mapRef:o}=this.props,{handleClick:i}=this,s=[t.coordinates.longitude,t.coordinates.latitude],{currentDoc:l}=(0,a.bL)(o.current),c=this.marker?this.marker.getElement():l.createElement("div");this.marker?this.marker.setLngLat(s):(c.className="wp-block-jetpack-map-marker",this.marker=new n.Marker(c).setLngLat(s).setOffset([0,-19]).addTo(e),this.marker.getElement().addEventListener("click",i)),c.innerHTML='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill-rule="evenodd"><path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="'+r+'" mask="url(#c)"/></g></svg>'}render(){return null}}s.defaultProps={point:{},map:null,markerColor:"#000000",mapboxgl:null,onClick:()=>{}},t.Z=s},90055:function(e,t,n){"use strict";function r(e,t){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[e][t?"details":"no_details"]}n.d(t,{h:function(){return r}})},82695:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(51806),o=n(65736),i=n(45107),a=n(56932),s=n(65765),l=n(34140);const __=o.__,_x=o._x,c={name:"map",prefix:"jetpack",title:__("Map","jetpack"),icon:(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},(0,r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),(0,r.createElement)("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"})),category:"embed",keywords:[_x("maps","block search term","jetpack"),_x("location","block search term","jetpack"),_x("navigation","block search term","jetpack")],description:__("Add an interactive map showing one or more locations.","jetpack"),attributes:{align:{type:"string"},points:{type:"array",default:[]},address:{type:"string",default:""},mapDetails:{type:"boolean",default:!0},zoom:{type:"integer",default:13},mapCenter:{type:"object",default:{longitude:-122.41941550000001,latitude:37.7749295}},markerColor:{type:"string",default:"red"},preview:{type:"boolean",default:!1},scrollToZoom:{type:"boolean",default:!1},mapHeight:{type:"integer"},showFullscreenButton:{type:"boolean",default:!0}},supports:{defaultStylePicker:!1,html:!1},styles:[{name:"default",label:__("Basic","jetpack"),preview:a,isDefault:!0},{name:"black_and_white",label:__("Black and white","jetpack"),preview:i},{name:"satellite",label:__("Satellite","jetpack"),preview:s},{name:"terrain",label:__("Terrain","jetpack"),preview:l}],validAlignments:["center","wide","full"],markerIcon:(0,r.createElement)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},(0,r.createElement)("g",{id:"outline-add_location-24px",transform:"translate(-5 -2)"},(0,r.createElement)("polygon",{id:"Shape",points:"0 0 24 0 24 24 0 24"}),(0,r.createElement)("path",{d:"M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z",id:"Shape",fill:"#000",fillRule:"nonzero"})))),example:{attributes:{preview:!0}}}},85007:function(e,t,n){"use strict";function r(e){const t=e.ownerDocument;return{currentDoc:t,currentWindow:t.defaultView||t.parentWindow}}function o(e,t,n){const o=`${window.Jetpack_Block_Assets_Base_Url.url}editor-assets`,{currentDoc:i}=r(n),a=i.getElementsByTagName("head")[0];e.forEach((e=>{const[n,r]=e.file.split("/").pop().split(".");if("css"===r){if(i.getElementById(e.id))return;const t=i.createElement("link");t.id=e.id,t.rel="stylesheet",t.href=`${o}/${n}-${e.version}.${r}`,a.appendChild(t)}if("js"===r){const s=t[e.id]?t[e.id]:null;if(i.getElementById(e.id))return s();const l=i.createElement("script");l.id=e.id,l.type="text/javascript",l.src=`${o}/${n}-${e.version}.${r}`,l.onload=s,a.appendChild(l)}}))}function i(e,t){return new Promise((n=>{const r=()=>{e[t]?n(e[t]):e.requestAnimationFrame(r)};r()}))}n.d(t,{Dz:function(){return i},Pp:function(){return o},bL:function(){return r}})},81518:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(29512),o=n.n(r),i=n(92819);function a(e,t){const n=function(e,t){for(const n of new(o())(t).values()){if(-1===n.indexOf("is-style-"))continue;const t=n.substring(9),r=(0,i.find)(e,{name:t});if(r)return r}return(0,i.find)(e,"isDefault")}(e,t);return n?n.name:null}},44241:function(e,t,n){"use strict";var r=n(69307),o=n(92819);t.Z=class{blockIterator(e,t){t.forEach((t=>{this.initializeFrontendReactBlocks(t.component,t.options,e)}))}initializeFrontendReactBlocks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const{attributes:i,name:a,prefix:s}=t.settings,{selector:l}=t,c=`.wp-block-${(s&&s.length?`${s}/${a}`:a).replace("/","-")}`,u=n.querySelectorAll(c);for(const n of u){if("true"===n.getAttribute("data-jetpack-block-initialized"))continue;const a=this.extractAttributesFromContainer(n,i);(0,o.assign)(a,t.props);const s=this.extractChildrenFromContainer(n),c=(0,r.createElement)(e,a,s);(0,r.render)(c,l?n.querySelector(l):n),n.setAttribute("data-jetpack-block-initialized",!0)}}extractAttributesFromContainer(e,t){const n={};for(const r in t){const i=t[r],a="data-"+(0,o.kebabCase)(r);if(n[r]=e.getAttribute(a),"boolean"===i.type&&(n[r]="false"!==n[r]&&!!n[r]),"array"===i.type||"object"===i.type)try{n[r]=JSON.parse(n[r])}catch(e){n[r]=null}}return n}extractChildrenFromContainer(e){return[...e.childNodes].map((e=>{const t={};for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n];t[r.nodeName]=r.nodeValue}return t.dangerouslySetInnerHTML={__html:e.innerHTML},(0,r.createElement)(e.tagName.toLowerCase(),t)}))}}},80425:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},38697:function(e,t,n){"use strict";n.d(t,{pi:function(){return r}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.create;Object.create},83078:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.substr(1)}n.d(t,{l:function(){return r}})},48936:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});function r(e){return e.toUpperCase()}},45107:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_black_and_white-b6ad81a7dd09d09fb34d.jpg"},56932:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_default-b53ccdf170e5ac873ff0.jpg"},65765:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_satellite-cc50c608e244f90d18dc.jpg"},34140:function(e,t,n){"use strict";e.exports=n.p+"images/map-theme_terrain-ac291441b3461820747d.jpg"},99196:function(e){"use strict";e.exports=window.React},91850:function(e){"use strict";e.exports=window.ReactDOM},92819:function(e){"use strict";e.exports=window.lodash},55609:function(e){"use strict";e.exports=window.wp.components},47701:function(e){"use strict";e.exports=window.wp.domReady},69307:function(e){"use strict";e.exports=window.wp.element},81975:function(e){"use strict";e.exports=window.wp.escapeHtml},65736:function(e){"use strict";e.exports=window.wp.i18n},29512:function(e){"use strict";e.exports=window.wp.tokenList},90017:function(e,t,n){var r=n(96930);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},25877:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},45061:function(e,t,n){var r=n(73522).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},96930:function(e,t,n){var r=n(73522).default,o=n(45061);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},73522:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},45388:function(e){"use strict";e.exports=JSON.parse('[{"id":"mapbox-gl-js","file":"node_modules/mapbox-gl/dist/mapbox-gl.js","version":"1.13.0"},{"id":"mapbox-gl-css","file":"node_modules/mapbox-gl/dist/mapbox-gl.css","version":"1.13.0"}]')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){"use strict";n(80425)}(),function(){"use strict";var e=n(47701),t=n.n(e),r=n(81518),o=n(44241),i=n(93846),a=n(82695);t()((function(){(new o.Z).blockIterator(document,[{component:i.Z,options:{settings:{...a.X,attributes:{...a.X.attributes,mapStyle:(0,r.t)(a.X.styles,a.X.className),apiKey:{type:"string",default:""}}}}}])}))}()}();