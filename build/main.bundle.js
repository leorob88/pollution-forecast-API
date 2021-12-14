(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"body{\r\n  background-color: #888;\r\n}\r\n#keyword-results{\r\n  width: 100px;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r=n(379),a=n.n(r),i=n(795),s=n.n(i),c=n(569),l=n.n(c),u=n(565),d=n.n(u),f=n(216),m=n.n(f),h=n(589),p=n.n(h),y=n(426),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),a()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;const v={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function I(n,o){console.log(n+" "+o);const r=n*Math.PI/180,a=e*Math.PI/180,i=(e-n)*Math.PI/180,s=(t-o)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))*6371e3/1e3;return Math.round(l)}function w(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}function M(n,r){fetch(`/.netlify/functions/lambda?${n}`).then((e=>e.json())).then((n=>{if(console.log(n),"Unknown station"==n.data||2==r&&0==n.data.length)1==r?confirm("I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?")?M(`custom=${document.getElementById("query").value}`,2):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":2==r?confirm("I couldn't find any stations for pollution detection. Do you want to try a geolocation search?")?M(`latit=${e}&longi=${t}`,3):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==r&&(confirm("Wanna try name search?")?M(`city=${document.getElementById("query").value}`,1):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide your current position");else if(2==r){if(console.log("array "+n.data.length),n.data.length>1){document.getElementById("keyword-results").innerHTML="";for(let e=0;e<n.data.length;e++)document.getElementById("keyword-results").appendChild((a=n.data[e].station.name,new Option(a,a,!1,!1)))}o=n,console.log(o),E()}else{let e=n.data.aqi,t=I(n.data.city.geo[0],n.data.city.geo[1]);1==r?document.getElementById("answer").innerHTML=`The estimated AQI for ${n.data.city.name} has a value of ${e}. The pollution rate is ${w(e)}.`:3==r&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${n.data.city.name}. The estimated AQI has a value of ${e}. The pollution rate is ${w(e)}.`),null==t&&null==t||(document.getElementById("answer").innerHTML+=`The estimated distance from your position is about ${t} kilometers.`)}var a;document.getElementById("answer").innerHTML+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}function E(){let e=document.getElementById("keyword-results").selectedIndex;if(console.log(e),e>-1){let e=o.data[0],t=e.aqi;console.log(t);let n=I(e.station.geo[0],e.station.geo[1]);document.getElementById("answer").innerHTML+=`The estimated AQI for ${e.station.name} has a value of ${t}. The pollution rate is ${w(t)}.`,null==n&&null==n||(document.getElementById("answer").innerHTML+=`The estimated distance from your position is about ${n} kilometers.`)}}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,v))).then((n=>{e=n.coords.latitude,t=n.coords.longitude})).catch((e=>{console.log(e)})),document.getElementById("butt0").addEventListener("click",(function(){M(`city=${document.getElementById("query").value}`,1)})),document.getElementById("butt1").addEventListener("click",(function(){M(`custom=${document.getElementById("query").value}`,2)})),document.getElementById("butt2").addEventListener("click",(function(){M(`latit=${e}&longi=${t}`,3)})),document.getElementById("keyword-results").addEventListener("click",E())})()})();