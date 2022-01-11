(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'*{\r\n  color: #ccc;\r\n  font-family: "Verdana", "Arial", serif;\r\n}\r\nbody{\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #7b1a2d;\r\n}\r\na:hover{\r\n  color: tomato;\r\n}\r\n#wrapper{\r\n  margin: 0px;\r\n  width: 320px;\r\n}\r\n#intro, #page, #agree{\r\n  font-size: 16px;\r\n}\r\n#welcome, #page, #agree{\r\n  width: 294px;\r\n  padding: 10px;\r\n  margin: 5px auto;\r\n  border: solid #aaa 2px;\r\n  border-radius: 3px;\r\n}\r\n#agree{\r\n  z-index: 1;\r\n}\r\nbutton{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border: solid #765 2px;\r\n  border-radius: 3px;\r\n}\r\nbutton:hover{\r\n  background-color: #c1eff5;\r\n}\r\ninput, select{\r\n  margin-bottom: 10px;\r\n}\r\nbutton, input, select{\r\n  color: #222;\r\n}\r\n#keyword-results{\r\n  width: 150px;\r\n}\r\n.hidden-elems{\r\n  visibility: hidden;\r\n}\r\n',""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],l=o.base?s[0]+o.base:s[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var y=r(p,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var s=o(e,r),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),d=n(565),s=n.n(d),l=n(216),c=n.n(l),u=n(589),m=n.n(u),p=n(426),y={};y.styleTagTransform=m(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=c(),t()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;var f,g,h,v=["I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?","I couldn't find any stations for pollution detection. Do you want to try a geolocation search?"],I=["I couldn't find any stations for pollution detection in the location you searched for.","I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword."];const E={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function b(){x("name")?B(`custom=${document.getElementById("query").value}`,1):document.getElementById("answer").innerHTML="The operation failed. Please, type any world location to search for."}function w(){x("position")?B(`latit=${f}&longi=${g}`,2):document.getElementById("answer").innerHTML="The operation failed. Please, provide your current position and reload this page."}function x(e){if("name"==e){if(""!=document.getElementById("query").value)return!0}else if("position"==e&&null!=f&&null!=g)return!0}function B(e,t){document.getElementById("answer").innerHTML="",document.getElementById("keyword-results").innerHTML="",document.getElementById("keyword-results").style.visibility="hidden",fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((e=>{M(e,t)})).catch((function(e){M("error",t)}))}function M(e,t){if("error"!=(h=e))if(0==t&&"Unknown station"==h.data||1==t&&0==h.data.length)!function(e){T(),document.getElementById("agree").style.visibility="visible",document.getElementById("page").style.visibility="hidden",document.getElementById("question").innerHTML=v[e],document.getElementById("question").value=e}(t);else if(1==t){for(let e=0;e<h.data.length;e++)document.getElementById("keyword-results").append(H(h.data[e].station.name));h.data.length>1&&(document.getElementById("keyword-results").style.visibility="visible"),P()}else{let e=h.data.city.name,n=h.data.aqi;A(e,n,q(h.data.city.geo[0],h.data.city.geo[1]),$(n),t)}else document.getElementById("answer").innerHTML="Something went wrong. Try reloading the page and repeating your search, please."}function T(){document.getElementById("agree").style.position="fixed",document.getElementById("agree").style.top=document.getElementById("page").offsetTop-5+"px",document.getElementById("agree").style.left=`${document.getElementById("page").offsetLeft}px`}function k(e,t){if("no"==e)return document.getElementById("answer").innerHTML=I[t],void L();L(),0==t?b():1==t&&w()}function L(){document.getElementById("agree").style.visibility="hidden",document.getElementById("page").style.visibility="visible"}function H(e){let t=document.createElement("option");return t.id="option"+(document.getElementById("keyword-results").options.length+1),t.value=e,t.innerHTML=e,t.className="listOptions",t.style.color="#222",t}function P(){let e=document.getElementById("keyword-results").selectedIndex;if(e>-1){let t=h.data[e].station.name,n=h.data[e].aqi;A(t,n,q(h.data[e].station.geo[0],h.data[e].station.geo[1]),$(n),1)}}function q(e,t){const n=e*Math.PI/180,o=f*Math.PI/180,r=(f-e)*Math.PI/180,a=(g-t)*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(n)*Math.cos(o)*Math.sin(a/2)*Math.sin(a/2),d=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371e3/1e3;return Math.round(d)}function $(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}function A(e,t,n,o,r){let a;a=2==r?`The nearest station to your estimated position is in ${e}. The estimated AQI has a value of ${t}.`:`The estimated AQI for ${e} has a value of ${t}.`,a+=` The pollution rate is ${$(t)}.`,null==n&&null==n||(a+=` The estimated distance from your position is about ${n} kilometers.`),document.getElementById("answer").innerHTML=a}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,E))).then((e=>{f=e.coords.latitude,g=e.coords.longitude})).catch((e=>{console.log(e)})),window.addEventListener("resize",T),document.getElementById("button-name").addEventListener("click",(function(){x("name")?B(`city=${document.getElementById("query").value}`,0):document.getElementById("answer").innerHTML="The operation failed. Please, type any world location to search for."})),document.getElementById("button-keyword").addEventListener("click",b),document.getElementById("button-geoloc").addEventListener("click",w),document.getElementById("keyword-results").addEventListener("change",P),document.getElementById("button-agree").addEventListener("click",(function(){k("yes",document.getElementById("question").value)})),document.getElementById("button-deny").addEventListener("click",(function(){k("no",document.getElementById("question").value)}))})()})();