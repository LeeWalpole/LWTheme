{let e=document.querySelector("#footer-menu-elements"),t=document.querySelector(".footer-socials"),n=e.cloneNode(!0),i=t.cloneNode(!0);document.querySelector("#nav-menu-cloned").appendChild(n),document.querySelector("#nav-menu-cloned").appendChild(i)}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";return function(e,t){return new function(e,t){var n="string"==typeof e?document.querySelectorAll(e):e;"length"in n||(n=[n]);for(var i=t||"js-reframe",o=0;o<n.length;o++){var a=n[o];if(a.className.split(" ").indexOf(i)>=0)return!1;var r=document.createElement("div"),l=a.offsetHeight/a.offsetWidth*100;r.style.paddingTop=l+"%",a.height=a.width="",r.className+=i,a.parentNode.insertBefore(r,a),a.parentNode.removeChild(a),r.appendChild(a)}return this}(e,t)}}),reframe("iframe"),function(e,t){var n=function(e,t,n){"use strict";var i,o;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in o=e.lazySizesConfig||e.lazysizesConfig||{},n)t in o||(o[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:o,noSupport:!0};var a=t.documentElement,r=e.HTMLPictureElement,l="addEventListener",s="getAttribute",c=e[l].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],g={},h=Array.prototype.forEach,v=function(e,t){return g[t]||(g[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),g[t].test(e[s]("class")||"")&&g[t]},p=function(e,t){v(e,t)||e.setAttribute("class",(e[s]("class")||"").trim()+" "+t)},z=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[s]("class")||"").replace(n," "))},C=function(e,t,n){var i=n?l:"removeEventListener";n&&C(e,t),y.forEach(function(n){e[i](n,t)})},b=function(e,n,o,a,r){var l=t.createEvent("Event");return o||(o={}),o.instance=i,l.initEvent(n,!a,!r),l.detail=o,e.dispatchEvent(l),l},E=function(t,n){var i;!r&&(i=e.picturefill||o.pf)?(n&&n.src&&!t[s]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,n){for(n=n||e.offsetWidth;n<o.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=function(){var e,n,i=[],o=[],a=i,r=function(){var t=a;for(a=i.length?o:i,e=!0,n=!1;t.length;)t.shift()();e=!1},l=function(i,o){e&&!o?i.apply(this,arguments):(a.push(i),n||(n=!0,(t.hidden?d:u)(r)))};return l._lsFlush=r,l}(),N=function(e,t){return t?function(){L(e)}:function(){var t=this,n=arguments;L(function(){e.apply(t,n)})}},_=function(e){var t,i=0,a=o.throttleDelay,r=o.ricTimeout,l=function(){t=!1,i=n.now(),e()},s=f&&r>49?function(){f(l,{timeout:r}),r!==o.ricTimeout&&(r=o.ricTimeout)}:N(function(){d(l)},!0);return function(e){var o;(e=!0===e)&&(r=33),t||(t=!0,(o=a-(n.now()-i))<0&&(o=0),e||o<9?s():d(s,o))}},S=function(e){var t,i,o=function(){t=null,e()},a=function(){var e=n.now()-i;e<99?d(a,99-e):(f||o)(o)};return function(){i=n.now(),t||(t=d(a,99))}},B=function(){var r,f,y,g,A,B,x,q,W,T,I,R,k=/^img$/i,F=/^iframe$/i,H="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,D=0,P=-1,$=function(e){D--,(!e||D<0||!e.target)&&(D=0)},V=function(e){return null==R&&(R="hidden"==w(t.body,"visibility")),R||!("hidden"==w(e.parentNode,"visibility")&&"hidden"==w(e,"visibility"))},j=function(e,n){var i,o=e,r=V(e);for(q-=n,I+=n,W-=n,T+=n;r&&(o=o.offsetParent)&&o!=t.body&&o!=a;)(r=(w(o,"opacity")||1)>0)&&"visible"!=w(o,"overflow")&&(i=o.getBoundingClientRect(),r=T>i.left&&W<i.right&&I>i.top-1&&q<i.bottom+1);return r},U=function(){var e,n,l,c,d,u,m,y,h,v,p,z,C=i.elements;if((g=o.loadMode)&&D<8&&(e=C.length)){for(n=0,P++;n<e;n++)if(C[n]&&!C[n]._lazyRace)if(!H||i.prematureUnveil&&i.prematureUnveil(C[n]))Z(C[n]);else if((y=C[n][s]("data-expand"))&&(u=1*y)||(u=O),v||(v=!o.expand||o.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:o.expand,i._defEx=v,p=v*o.expFactor,z=o.hFac,R=null,O<p&&D<1&&P>2&&g>2&&!t.hidden?(O=p,P=0):O=g>1&&P>1&&D<6?v:0),h!==u&&(B=innerWidth+u*z,x=innerHeight+u,m=-1*u,h=u),l=C[n].getBoundingClientRect(),(I=l.bottom)>=m&&(q=l.top)<=x&&(T=l.right)>=m*z&&(W=l.left)<=B&&(I||T||W||q)&&(o.loadHidden||V(C[n]))&&(f&&D<3&&!y&&(g<3||P<4)||j(C[n],u))){if(Z(C[n]),d=!0,D>9)break}else!d&&f&&!c&&D<4&&P<4&&g>2&&(r[0]||o.preloadAfterLoad)&&(r[0]||!y&&(I||T||W||q||"auto"!=C[n][s](o.sizesAttr)))&&(c=r[0]||C[n]);c&&!d&&Z(c)}},Y=_(U),G=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:($(e),p(t,o.loadedClass),z(t,o.loadingClass),C(t,K),b(t,"lazyloaded"))},J=N(G),K=function(e){J({target:e.target})},Q=function(e){var t,n=e[s](o.srcsetAttr);(t=o.customMedia[e[s]("data-media")||e[s]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=N(function(e,t,n,i,a){var r,l,c,u,f,g;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?p(e,o.autosizesClass):e.setAttribute("sizes",i)),l=e[s](o.srcsetAttr),r=e[s](o.srcAttr),a&&(c=e.parentNode,u=c&&m.test(c.nodeName||"")),g=t.firesLoad||"src"in e&&(l||r||u),f={target:e},p(e,o.loadingClass),g&&(clearTimeout(y),y=d($,2500),C(e,K,!0)),u&&h.call(c.getElementsByTagName("source"),Q),l?e.setAttribute("srcset",l):r&&!u&&(F.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,r):e.src=r),a&&(l||u)&&E(e,{src:r})),e._lazyRace&&delete e._lazyRace,z(e,o.lazyClass),L(function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&p(e,"ls-is-cached"),G(f),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&D--},!0)}),Z=function(e){if(!e._lazyRace){var t,n=k.test(e.nodeName),i=n&&(e[s](o.sizesAttr)||e[s]("sizes")),a="auto"==i;(!a&&f||!n||!e[s]("src")&&!e.srcset||e.complete||v(e,o.errorClass)||!v(e,o.lazyClass))&&(t=b(e,"lazyunveilread").detail,a&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,D++,X(e,t,a,i,n))}},ee=S(function(){o.loadMode=3,Y()}),te=function(){3==o.loadMode&&(o.loadMode=2),ee()},ne=function(){if(!f){if(n.now()-A<999)return void d(ne,999);f=!0,o.loadMode=3,Y(),c("scroll",te,!0)}};return{_:function(){A=n.now(),i.elements=t.getElementsByClassName(o.lazyClass),r=t.getElementsByClassName(o.lazyClass+" "+o.preloadClass),c("scroll",Y,!0),c("resize",Y,!0),c("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+o.loadingClass);n.length&&n.forEach&&u(function(){n.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(Y).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a[l]("DOMNodeInserted",Y,!0),a[l]("DOMAttrModified",Y,!0),setInterval(Y,999)),c("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[l](e,Y,!0)}),/d$|^c/.test(t.readyState)?ne():(c("load",ne),t[l]("DOMContentLoaded",Y),d(ne,2e4)),i.elements.length?(U(),L._lsFlush()):Y()},checkElems:Y,unveil:Z,_aLSL:te}}(),M=function(){var e,n=N(function(e,t,n,i){var o,a,r;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),m.test(t.nodeName||""))for(o=t.getElementsByTagName("source"),a=0,r=o.length;a<r;a++)o[a].setAttribute("sizes",i);n.detail.dataAttr||E(e,n.detail)}),i=function(e,t,i){var o,a=e.parentNode;a&&(i=A(e,a,i),(o=b(e,"lazybeforesizes",{width:i,dataAttr:!!t})).defaultPrevented||(i=o.detail.width)&&i!==e._lazysizesWidth&&n(e,a,o,i))},a=S(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(o.autosizesClass),c("resize",a)},checkElems:a,updateElem:i}}(),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,M._(),B._())};return d(function(){o.init&&x()}),i={cfg:o,autoSizer:M,loader:B,init:x,uP:E,aC:p,rC:z,hC:v,fire:b,gW:A,rAF:L}}(e,e.document,Date);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{});{let e=0;window.addEventListener("scroll",function(t){newValue=window.pageYOffset,e-newValue<0?(document.getElementById("body").classList.add("scrolling-down"),document.getElementById("body").classList.remove("scrolling-up"),document.getElementById("body").classList.remove("prescroll")):e-newValue>0&&(document.getElementById("body").classList.add("scrolling-up"),document.getElementById("body").classList.remove("scrolling-down"),document.getElementById("body").classList.remove("prescroll")),e=newValue})}{const e=document.querySelector("#body"),t=document.querySelector(".hamburger"),n=(document.querySelector(".nav-menu"),document.querySelectorAll(".nav-links li"));t.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("link-fade")}),e.classList.toggle("nav-on")})}!function(){let e,t;function n(){e=document.querySelectorAll(".prefade"),t=window.innerHeight}function i(){for(let n=0;n<e.length;n++){let i=e[n];e[n].getBoundingClientRect().top-t<=0&&(i.classList.remove("prefade"),i.classList.add("postfade"))}}window.addEventListener("scroll",i),window.addEventListener("resize",n),n(),i()}();