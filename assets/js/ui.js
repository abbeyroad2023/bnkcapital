!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){},function(e,t,o){"use strict";document.addEventListener("DOMContentLoaded",function(){console.log("loadding page");var e=document.querySelector("#header"),t=document.querySelector("#homeTop"),o=document.querySelector("#homeSearchbar"),r=document.querySelector("#container section");document.querySelector("#bottom"),document.querySelector("#actionbar");r.addEventListener("scroll",function(){var n=Math.round(r.scrollTop);n>0?(null!==e&&e.classList.add("scroll"),null!==o&&(n>t.scrollHeight-(statusbar.clientHeight+e.clientHeight)?o.classList.add("fixed"):o.classList.remove("fixed"))):null!==e&&e.classList.remove("scroll")}),document.querySelectorAll(".popup-open").forEach(function(e){var t=e.dataset.popup,o=document.querySelector("#"+t);null!==o&&(e.addEventListener("click",function(){if(o.classList.add("is-active"),null!==o.querySelector(".pop-head")&&!0===o.querySelector(".pop-head").classList.contains("in-progress-bar")){var e=o.querySelector(".step-list").childElementCount,t=Math.round(1/(e-1)*100);null!==o.querySelector(".progress-bar")&&(o.querySelector(".progress-bar > span").style.width=t+"%")}null!==o.querySelector(".step-list")&&(o.querySelectorAll(".step-item").forEach(function(e,t,r){var n=e.querySelector(".btn");e.classList.remove("is-show"),e.addEventListener("click",function(e){if(!0===e.target.classList.contains("step-disabled")&&(e.target.parentNode.classList.add("is-active"),!0===n.disabled&&(n.disabled=!1)),!0===e.target.classList.contains("next-show")){e.target.parentNode.classList.remove("is-show");var s=Math.round((t+2)/r.length*100);o.querySelector(".progress-bar > span").style.width=s+"%"}})}),o.querySelector(".step-item").classList.add("is-show"));var r=document.getElementById("progress-pop"),n=document.getElementById("countdown");if(null!==r&&r.classList.contains("is-active")){var s=function e(){n.textContent=l,l++,l>100?setTimeout(c,1500):setTimeout(e,40)},c=function(){r.classList.remove("is-active")},l=1;setTimeout(s,100)}}),o.querySelectorAll(".popup-close").forEach(function(e){e.addEventListener("click",function(){o.classList.remove("is-active")})}))}),document.querySelectorAll(".progress-open").forEach(function(e){var t=e.dataset.progress,o=document.querySelector("#"+t);null!==o&&e.addEventListener("click",function(){o.classList.add("is-show");var e=o.offsetTop;document.querySelector("#scrollArea").scrollTo({top:e-120,behavior:"smooth"})})}),document.querySelectorAll(".next-show").forEach(function(e){var t=e.dataset.next,o=document.querySelector("#"+t);null!==o&&e.addEventListener("click",function(){if(o.classList.add("is-show"),"next1-1"===t||"next4-1"===t||"next5-1"===t||"next5-2"===t||"next7-1"===t||"next8-1"===t||"next8-2"===t){var e=o.offsetTop;document.querySelector("#scrollArea").scrollTo({top:e-120,behavior:"smooth"})}})})})}]);