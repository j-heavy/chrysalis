/**
 * Chrysalis v0.10.4-β
 * Casper Søkol, 2018
 * Distributed under the MIT license
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Chrysalis={})}(this,function(e){function t(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];return{nodeName:e,attributes:t||{},children:n}}var n=function e(t){if("object"!=typeof t)return document.createTextNode(t);var n=document.createElement(t.nodeName);return Object.keys(t.attributes).map(function(e){n.setAttribute(e,t.attributes[e])}),t.children.forEach(function(t){return n.appendChild(e(t))}),n},i=function(e,t){t.appendChild(n(e))},o=function(e,t){var n="object"!=typeof e;return typeof e!=typeof t||e.nodeName!==t.nodeName||n&&e!==t},r=function e(t,n,i,r){if(void 0===r&&(r=0),i)if(n){if(o(n,i))t.replaceChild(x0(n),t.childNodes[r]);else if(n.nodeName){d(t.childNodes[r],n.attributes,i.attributes);for(var c=n.children.length,f=i.children.length,u=0;u<c||u<f;u++)e(t.childNodes[r],n.children[u],i.children[u],u)}}else t.removeChild(t.childNodes[r]);else t.appendChild(x0(n))},d=function(e,t,n){void 0===n&&(n={});var i=Object.assign({},t,n);Object.keys(i).forEach(function(i){c(e,i,t[i],n[i])})},c=function(e,t,n,i){n?i&&n===i||e.setAttribute(t,n):e.removeAttribute(t)};e.h=t,e.render=i,e.updateElement=r,Object.defineProperty(e,"__esModule",{value:!0})});
