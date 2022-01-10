(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'*{\r\n  color: #ccc;\r\n  font-family: "Verdana", "Arial", serif;\r\n}\r\nbody{\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #7b1a2d;\r\n}\r\na:hover{\r\n  color: tomato;\r\n}\r\n#wrapper{\r\n  margin: 0px;\r\n  width: 320px;\r\n}\r\n#intro, #page, #agree{\r\n  font-size: 16px;\r\n}\r\n#welcome, #page, #agree{\r\n  width: 294px;\r\n  padding: 10px;\r\n  margin: 5px auto;\r\n  border: solid #aaa 2px;\r\n  border-radius: 3px;\r\n}\r\n#agree{\r\n  z-index: 1;\r\n}\r\nbutton{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border: solid #765 2px;\r\n  border-radius: 3px;\r\n}\r\nbutton:hover{\r\n  background-color: #c1eff5;\r\n}\r\ninput, select{\r\n  margin-bottom: 10px;\r\n}\r\nbutton, input, select{\r\n  color: #222;\r\n}\r\n#keyword-results{\r\n  width: 150px;\r\n}\r\n.hidden-elems{\r\n  visibility: hidden;\r\n}\r\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],u=a[l]||0,c="".concat(l," ").concat(u);a[l]=u+1;var m=n(c),y={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(y);else{var p=r(y,o);o.byIndex=s,t.splice(s,0,{identifier:c,updater:p,references:1})}i.push(c)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r=n(379),a=n.n(r),i=n(795),s=n.n(i),d=n(569),l=n.n(d),u=n(565),c=n.n(u),m=n(216),y=n.n(m),p=n(589),f=n.n(p),g=n(426),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=y(),a()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals,document.getElementById("agree").style.position="fixed",document.getElementById("agree").style.top=document.getElementById("page").offsetTop-5+"px",document.getElementById("agree").style.left=`${document.getElementById("page").offsetLeft}px`;var v=["I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?","I couldn't find any stations for pollution detection. Do you want to try a geolocation search?","I couldn't use your position to find any stations for pollution detection. Do you want to try a name search?"],I=["I couldn't find any stations for pollution detection in the location you searched for.","I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.","I couldn't find any stations for pollution detection. Be sure to provide your current position"];const b={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function E(e,t){document.getElementById("answer").innerHTML="",document.getElementById("keyword-results").innerHTML="",document.getElementById("keyword-results").style.visibility="hidden",fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((e=>{B(e,t)})).catch((function(e){B("error",t)}))}function B(e,t){if("error"!=(o=e))if("Unknown station"==o.data||1==t&&0==o.data.length)!function(e){document.getElementById("agree").style.visibility="visible",document.getElementById("page").style.visibility="hidden",document.getElementById("question").innerHTML=v[e],document.getElementById("question").value=e}(t);else if(1==t){for(let e=0;e<o.data.length;e++)document.getElementById("keyword-results").append(M(o.data[e].station.name));o.data.length>1&&(document.getElementById("keyword-results").style.visibility="visible"),T()}else{let e=o.data.aqi,n=k(o.data.city.geo[0],o.data.city.geo[1]);0==t?document.getElementById("answer").innerHTML=`The estimated AQI for ${o.data.city.name} has a value of ${e}. The pollution rate is ${$(e)}.`:2==t&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${o.data.city.name}. The estimated AQI has a value of ${e}. The pollution rate is ${$(e)}.`),null==n&&null==n||(document.getElementById("answer").innerHTML+=`The estimated distance from your position is about ${n} kilometers.`)}else document.getElementById("answer").innerHTML="Something went wrong. Try reloading the page and repeating your search, please."}function w(n,o){if("no"==n)return document.getElementById("answer").innerHTML=I[o],void x();let r=2==o?0:Number(o)+1;E(0==r?`city=${document.getElementById("query").value}`:1==r?`custom=${document.getElementById("query").value}`:`latit=${e}&longi=${t}`,r),x()}function x(){document.getElementById("agree").style.visibility="hidden",document.getElementById("page").style.visibility="visible"}function M(e){let t=document.createElement("option");return t.id="option"+(document.getElementById("keyword-results").options.length+1),t.value=e,t.innerHTML=e,t.className="listOptions",t.style.color="#222",t}function T(){let e=document.getElementById("keyword-results").selectedIndex;if(e>-1){let t=o.data[e],n=t.aqi,r=k(t.station.geo[0],t.station.geo[1]),a=`The estimated AQI for ${t.station.name} has a value of ${n}. The pollution rate is ${$(n)}.`;null==r&&null==r||(a+=` The estimated distance from your position is about ${r} kilometers.`),document.getElementById("answer").innerHTML=a}}function k(n,o){const r=n*Math.PI/180,a=e*Math.PI/180,i=(e-n)*Math.PI/180,s=(t-o)*Math.PI/180,d=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))*6371e3/1e3;return Math.round(l)}function $(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,b))).then((n=>{e=n.coords.latitude,t=n.coords.longitude})).catch((e=>{console.log(e)})),document.getElementById("button-name").addEventListener("click",(function(){E(`city=${document.getElementById("query").value}`,this.value)})),document.getElementById("button-keyword").addEventListener("click",(function(){E(`custom=${document.getElementById("query").value}`,this.value)})),document.getElementById("button-geoloc").addEventListener("click",(function(){E(`latit=${e}&longi=${t}`,this.value)})),document.getElementById("keyword-results").addEventListener("change",T),document.getElementById("button-agree").addEventListener("click",(function(){w("yes",document.getElementById("question").value)})),document.getElementById("button-deny").addEventListener("click",(function(){w("no",document.getElementById("question").value)}))})()})();