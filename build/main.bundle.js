(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"body{\r\n  background-color: #888;\r\n}\r\n#keyword-results{\r\n  width: 100px;\r\n}\r\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=o.base?c[0]+o.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t,e,o,r=n(379),a=n.n(r),i=n(795),s=n.n(i),c=n(569),u=n.n(c),l=n(565),d=n.n(l),f=n(216),m=n.n(f),h=n(589),p=n.n(h),y=n(426),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=u().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),a()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const g={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function I(n,o){console.log(n+" "+o);const r=n*Math.PI/180,a=t*Math.PI/180,i=(t-n)*Math.PI/180,s=(e-o)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),u=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))*6371e3/1e3;return Math.round(u)}function w(t){return t>300?"hazardous":t>200?"very unhealthy":t>150?"unhealthy":t>100?"unhealthy for sensitive groups":t>50?"moderate":"good"}function b(n,r){fetch(`/.netlify/functions/lambda?${n}`).then((t=>t.json())).then((n=>{if(console.log(n),"Unknown station"==n.data||2==r&&0==n.data.length)1==r?confirm("I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?")?b(`custom=${document.getElementById("query").value}`,2):document.getElementById("answer").textContent="I couldn't find any stations for pollution detection in the location you searched for.":2==r?confirm("I couldn't find any stations for pollution detection. Do you want to try a geolocation search?")?b(`latit=${t}&longi=${e}`,3):document.getElementById("answer").textContent="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==r&&(confirm("Wanna try name search?")?b(`city=${document.getElementById("query").value}`,1):document.getElementById("answer").textContent="I couldn't find any stations for pollution detection. Be sure to provide your current position");else if(2==r)console.log("array "+n.data.length),o=n,console.log(o),E();else{let t=n.data.aqi,e=I(n.data.city.geo[0],n.data.city.geo[1]);1==r?document.getElementById("answer").textContent=`The estimated AQI for ${n.data.city.name} has a value of ${t}. The pollution rate is ${w(t)}.`:3==r&&(document.getElementById("answer").textContent=`The nearest station to your estimated position is in ${n.data.city.name}. The estimated AQI has a value of ${t}. The pollution rate is ${w(t)}.`),null==e&&null==e||(document.getElementById("answer").textContent+=`The estimated distance from your position is about ${e} kilometers.`)}document.getElementById("answer").textContent+=' For further details, you can check out the reference website infos <a target="_blank" href="https://www.airnow.gov/aqi/aqi-basics/">here</a>.'}))}function E(){let t=document.getElementById("keyword-results").selectedIndex;if(console.log(t),t>-1){let e=o.data[t],n=e.aqi;console.log(n);let r=I(e.station.geo[0],e.station.geo[1]);document.getElementById("answer").textContent+=`The estimated AQI for ${e.station.name} has a value of ${n}. The pollution rate is ${w(n)}.`,null==r&&null==r||(document.getElementById("answer").textContent+=`The estimated distance from your position is about ${r} kilometers.`)}}new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e,g))).then((n=>{t=n.coords.latitude,e=n.coords.longitude})).catch((t=>{console.log(t)})),document.getElementById("butt0").addEventListener("click",(function(){b(`city=${document.getElementById("query").value}`,1)})),document.getElementById("butt1").addEventListener("click",(function(){b(`custom=${document.getElementById("query").value}`,2)})),document.getElementById("butt2").addEventListener("click",(function(){b(`latit=${t}&longi=${e}`,3)})),document.getElementById("keyword-results").addEventListener("change",E)})()})();