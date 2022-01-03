(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,'*{\r\n  color: #ccc;\r\n  font-family: "Verdana", "Arial", serif;\r\n}\r\nbody{\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #7b1a2d;\r\n}\r\na:hover{\r\n  color: tomato;\r\n}\r\n#wrapper{\r\n  margin: 0px;\r\n  width: 320px;\r\n}\r\n#intro, #page, #agree{\r\n  font-size: 16px;\r\n}\r\n#welcome, #page, #agree{\r\n  width: 294px;\r\n  padding: 10px;\r\n  margin: 5px auto;\r\n  border: solid #aaa 2px;\r\n  border-radius: 3px;\r\n}\r\n#agree{\r\n  z-index: 1;\r\n  background-color: #7c1a2d;\r\n}\r\nbutton{\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border: solid #765 2px;\r\n  border-radius: 3px;\r\n}\r\nbutton:hover{\r\n  background-color: #c1eff5;\r\n}\r\ninput, select{\r\n  margin-bottom: 10px;\r\n}\r\nbutton, input, select{\r\n  color: #222;\r\n}\r\n#keyword-results{\r\n  width: 150px;\r\n}\r\n.hidden-elems{\r\n  visibility: hidden;\r\n}\r\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var m=n(u),y={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(y);else{var p=r(y,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t,o,r,a=n(379),i=n.n(a),s=n(795),d=n.n(s),l=n(569),c=n.n(l),u=n(565),m=n.n(u),y=n(216),p=n.n(y),g=n(589),f=n.n(g),h=n(426),v={};v.styleTagTransform=f(),v.setAttributes=m(),v.insert=c().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=p(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const I={enableHighAccuracy:!0,maximumAge:3e4,timeout:27e3};function E(n,o){console.log(n+" "+o);const r=n*Math.PI/180,a=e*Math.PI/180,i=(e-n)*Math.PI/180,s=(t-o)*Math.PI/180,d=Math.sin(i/2)*Math.sin(i/2)+Math.cos(r)*Math.cos(a)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))*6371e3/1e3;return Math.round(l)}function b(e){return e>300?"hazardous":e>200?"very unhealthy":e>150?"unhealthy":e>100?"unhealthy for sensitive groups":e>50?"moderate":"good"}function B(e){let t=document.createElement("option");return t.id="option"+(document.getElementById("keyword-results").options.length+1),t.value=e,t.innerHTML=e,t.className="listOptions",t.style.color="#222",t}function w(){let e=document.getElementById("keyword-results").selectedIndex;if(console.log(e),e>-1&&!r){let t=o.data[e],n=t.aqi;console.log(n);let r=E(t.station.geo[0],t.station.geo[1]);document.getElementById("answer").innerHTML=`The estimated AQI for ${t.station.name} has a value of ${n}. The pollution rate is ${b(n)}.`,null==r&&null==r||(document.getElementById("answer").innerHTML+=` The estimated distance from your position is about ${r} kilometers.`)}}function M(e,t){document.getElementById("answer").innerHTML="",document.getElementById("keyword-results").style.visibility="hidden",fetch(`/.netlify/functions/lambda?${e}`).then((e=>e.json())).then((e=>{if(console.log(e),"Unknown station"==e.data||2==t&&0==e.data.length)1==t?document.getElementById("question").innerHTML="I couldn't find any stations for pollution detection in the location you searched for. Do you want to try a keyword search?":2==t?document.getElementById("question").innerHTML="I couldn't find any stations for pollution detection. Do you want to try a geolocation search?":3==t&&(document.getElementById("question").innerHTML="I couldn't use your position to find any stations for pollution detection. Do you want to try a name search?"),document.getElementById("agree").style.position="fixed",document.getElementById("agree").style.top=document.getElementById("welcome").style.top,document.getElementById("agree").style.visibility="visible",document.getElementById("question").value=t,r=!0;else if(2==t){if(console.log("array "+e.data.length),e.data.length>1){document.getElementById("keyword-results").style.visibility="visible",document.getElementById("keyword-results").innerHTML="";for(let t=0;t<e.data.length;t++)document.getElementById("keyword-results").append(B(e.data[t].station.name))}o=e,console.log(o),w()}else{let n=e.data.aqi,o=E(e.data.city.geo[0],e.data.city.geo[1]);1==t?document.getElementById("answer").innerHTML=`The estimated AQI for ${e.data.city.name} has a value of ${n}. The pollution rate is ${b(n)}.`:3==t&&(document.getElementById("answer").innerHTML=`The nearest station to your estimated position is in ${e.data.city.name}. The estimated AQI has a value of ${n}. The pollution rate is ${b(n)}.`),null==o&&null==o||(document.getElementById("answer").innerHTML+=`The estimated distance from your position is about ${o} kilometers.`)}})).catch((function(e){document.getElementById("answer").innerHTML=`Something went wrong. The process brought up this error message: ${e.message}`}))}new Promise(((e,t)=>navigator.geolocation.getCurrentPosition(e,t,I))).then((n=>{e=n.coords.latitude,t=n.coords.longitude})).catch((e=>{console.log(e)})),document.getElementById("button-name").addEventListener("click",(function(){r||M(`city=${document.getElementById("query").value}`,1)})),document.getElementById("button-keyword").addEventListener("click",(function(){r||M(`custom=${document.getElementById("query").value}`,2)})),document.getElementById("button-geoloc").addEventListener("click",(function(){r||M(`latit=${e}&longi=${t}`,3)})),document.getElementById("keyword-results").addEventListener("change",w),document.getElementById("button-agree").addEventListener("click",(function(){r=!1,1==document.getElementById("question").value?M(`custom=${document.getElementById("query").value}`,2):2==document.getElementById("question").value?M(`latit=${e}&longi=${t}`,3):3==document.getElementById("question").value&&M(`city=${document.getElementById("query").value}`,1),document.getElementById("agree").style.visibility="hidden"})),document.getElementById("button-deny").addEventListener("click",(function(){r=!1,console.log(document.getElementById("question").value+" "+r),1==document.getElementById("question").value?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection in the location you searched for.":2==document.getElementById("question").value?document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide a proper location keyword.":3==document.getElementById("question").value&&(document.getElementById("answer").innerHTML="I couldn't find any stations for pollution detection. Be sure to provide your current position"),document.getElementById("agree").style.visibility="hidden"}))})()})();