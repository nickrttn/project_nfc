!function(t,e){"function"==typeof define&&define.amd?define("smoothScroll",e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}(window||this,function(t){"use strict";var e={},n=!!document.querySelector&&!!t.addEventListener,o,r={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},a=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else for(var r=0,a=t.length;a>r;r++)e.call(n,t[r],r,t)},c=function(t,e){var n={};return a(t,function(e,o){n[o]=t[o]}),a(e,function(t,o){n[o]=e[o]}),n},u=function(t,e){for(var n=e.charAt(0);t&&t!==document;t=t.parentNode)if("."===n){if(t.classList.contains(e.substr(1)))return t}else if("#"===n){if(t.id===e.substr(1))return t}else if("["===n&&t.hasAttribute(e.substr(1,e.length-2)))return t;return!1},i=function(t){for(var e=String(t),n=e.length,o=-1,r,a="",c=e.charCodeAt(0);++o<n;){if(r=e.charCodeAt(o),0===r)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=r>=1&&31>=r||127==r||0===o&&r>=48&&57>=r||1===o&&r>=48&&57>=r&&45===c?"\\"+r.toString(16)+" ":r>=128||45===r||95===r||r>=48&&57>=r||r>=65&&90>=r||r>=97&&122>=r?e.charAt(o):"\\"+e.charAt(o)}return a},s=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},f=function(t,e,n){var o=0;if(t.offsetParent)do o+=t.offsetTop,t=t.offsetParent;while(t);return o=o-e-n,o>=0?o:0},l=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},d=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},h=function(t,e){history.pushState&&(e||"true"===e)&&history.pushState({pos:t.id},"",window.location.pathname+t)};e.animateScroll=function(e,n,o){var a=c(a||r,o||{}),u=d(e?e.getAttribute("data-options"):null);a=c(a,u),n="#"+i(n.substr(1));var p=document.querySelector(n),m=document.querySelector("[data-scroll-header]"),b=null===m?0:m.offsetHeight+m.offsetTop,v=t.pageYOffset,g=f(p,b,parseInt(a.offset,10)),O,y=g-v,I=l(),S=0,w,A;h(n,a.updateURL);var Q=function(o,r,c){var u=t.pageYOffset;(o==r||u==r||t.innerHeight+u>=I)&&(clearInterval(c),p.focus(),a.callbackAfter(e,n))},C=function(){S+=16,w=S/parseInt(a.speed,10),w=w>1?1:w,A=v+y*s(a.easing,w),t.scrollTo(0,Math.floor(A)),Q(A,g,O)},H=function(){a.callbackBefore(e,n),O=setInterval(C,16)};0===t.pageYOffset&&t.scrollTo(0,0),H()};var p=function(t){var n=u(t.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(t.preventDefault(),e.animateScroll(n,n.hash,o,t))};return e.destroy=function(){o&&(document.removeEventListener("click",p,!1),o=null)},e.init=function(t){n&&(e.destroy(),o=c(r,t||{}),document.addEventListener("click",p,!1))},e});