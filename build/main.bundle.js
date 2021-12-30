(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'*{\r\n  color: #ccc;\r\n  font-family: "Verdana", "Arial", serif;\r\n}\r\nbody{\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #7b1a2d;\r\n}\r\na:hover{\r\n  color: tomato;\r\n}\r\n#wrapper{\r\n  margin: 0px;\r\n  width: 320px;\r\n}\r\np, .page{\r\n  font-size: 16px;\r\n}\r\n.welcome, .page{\r\n  width: 294px;\r\n  padding: 10px;\r\n  margin: 5px auto;\r\n  border: solid #aaa 2px;\r\n  border-radius: 3px;\r\n}\r\nbutton{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\ninput, select{\r\n  margin-bottom: 10px;\r\n}\r\nbutton, input, select{\r\n  color: #222;\r\n}\r\n#keyword-results{\r\n  width: 100px;\r\n}\r\n.hidden-elems{\r\n  visibility: hidden;\r\n}\r\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r=n(379),a=n.n(r),i=n(795),s=n.n(i),c=n(569),l=n.n(c),d=n(565),u=n.n(d),m=n(216),p=n.n(m),f=n(589),y=n.n(f),h=n(426),g={};g.styleTagTransform=y(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function I(n,o){console.log(n+" "+o);const r=n*Math.PI/180,a=e*Math.PI/180,i=(e-n)*Math.PI/180,s=(t-o)*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))*6371e3/1e3;return Math.round(l)}function w(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}function b(e){let t=document.createElement("option");return t.id="option"+(document.getElementById("keyword-results").options.length+1),t.value=e,t.innerHTML=e,t.className="listOptions",t.style.color="#222",t}function E(n,r){document.getElementById("answer").innerHTML="",document.getElementById("keyword-results").style.visibility="hidden",fetch(`/.netlify/functions/lambda?${n}`).then((e=>e.json())).then((n=>{if(console.log(n),"Unknown station"==n.data||2==r&&0==n.data.length)1==r?confirm("I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?")?E(`custom=${document.getElementById("query").value}`,2):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":2==r?confirm("I couldn't find any stations for pollution detection. Do you want to try a geolocation search?")?E(`latit=${e}&longi=${t}`,3):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==r&&(confirm("I couldn't use your position to find any stations for pollution detection. Do you want to try a name search?")?E(`city=${document.getElementById("query").value}`,1):document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide your current position");else if(2==r){if(console.log("array "+n.data.length),n.data.length>1){document.getElementById("keyword-results").style.visibility="visible",document.getElementById("keyword-results").innerHTML="";for(let e=0;e<n.data.length;e++)document.getElementById("keyword-results").append(b(n.data[e].station.name))}o=n,console.log(o),M()}else{let e=n.data.aqi,t=I(n.data.city.geo[0],n.data.city.geo[1]);1==r?document.getElementById("answer").innerHTML=`The estimated AQI for ${n.data.city.name} has a value of ${e}. The pollution rate is ${w(e)}.`:3==r&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${n.data.city.name}. The estimated AQI has a value of ${e}. The pollution rate is ${w(e)}.`),null==t&&null==t||(document.getElementById("answer").innerHTML+=`The estimated distance from your position is about ${t} kilometers.`)}})).catch((function(e){document.getElementById("answer").innerHTML=`Something went wrong. The process brought up this error message: ${e.message}`}))}function M(){let e=document.getElementById("keyword-results").selectedIndex;if(console.log(e),e>-1){let t=o.data[e],n=t.aqi;console.log(n);let r=I(t.station.geo[0],t.station.geo[1]);document.getElementById("answer").innerHTML=`The estimated AQI for ${t.station.name} has a value of ${n}. The pollution rate is ${w(n)}.`,null==r&&null==r||(document.getElementById("answer").innerHTML+=` The estimated distance from your position is about ${r} kilometers.`)}}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,v))).then((n=>{e=n.coords.latitude,t=n.coords.longitude})).catch((e=>{console.log(e)})),document.getElementById("button-name").addEventListener("click",(function(){E(`city=${document.getElementById("query").value}`,1)})),document.getElementById("button-keyword").addEventListener("click",(function(){E(`custom=${document.getElementById("query").value}`,2)})),document.getElementById("button-geoloc").addEventListener("click",(function(){E(`latit=${e}&longi=${t}`,3)})),document.getElementById("keyword-results").addEventListener("change",M)})()})();