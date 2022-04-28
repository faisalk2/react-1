(()=>{"use strict";var e={586:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"#navbar{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid black;\r\n}\r\n#options\r\n{\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n#container\r\n{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,1fr);\r\n    gap: 2%;\r\n    padding: 30px;\r\n    margin-top: 50px;\r\n}\r\n#container>div>img{\r\n    height: 200px;\r\n    width: 100%;\r\n}\r\n#container>div{\r\n    border: 1px solid rgb(226, 222, 222);\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],l=a[p]||0,d="".concat(p," ").concat(l);a[p]=l+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),p=0;p<a.length;p++){var l=t(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=()=>'\n    <h3><a href="index.html">Home</a></h3>\n       <div id="options">\n           <h3><a href="recipe.html">womens</a></h3>\n           <h3><a href="login.html">Login</a></h3>\n           <h3><a href="signin.html">Sign-in</a></h3>\n       </div>\n    ';var n=t(379),r=t.n(n),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),p=t.n(s),l=t(216),d=t.n(l),u=t(589),f=t.n(u),h=t(586),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),r()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,console.log(e),document.getElementById("navbar").innerHTML='\n    <h3><a href="index.html">Home</a></h3>\n       <div id="options">\n           <h3><a href="recipe.html">womens</a></h3>\n           <h3><a href="login.html">Login</a></h3>\n           <h3><a href="signin.html">Sign-in</a></h3>\n       </div>\n    ';let v=document.getElementById("container");(async e=>{let n=await fetch("https://fakestoreapi.com/products/category/men's%20clothing");return await n.json()})().then((e=>{((e,n)=>{console.log(e),e.forEach((({image:e,price:t,title:r,description:o})=>{let a=document.createElement("div"),i=document.createElement("img");i.src=e;let c=document.createElement("p");c.innerText=`Title:-${r}`;let s=document.createElement("p");s.innerText=`Price:-${t}`;let p=document.createElement("p");p.innerText=`Description:-${o}`;let l=document.createElement("div");l.append(c,s,p),a.append(i,l),n.append(a)}))})(e,v)}))})()})();