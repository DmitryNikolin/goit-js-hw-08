!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,f=setTimeout(h,t),s?S(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=v();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,p&&o?S(e):(o=i=void 0,u)}function O(){var e=v(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(h,t),S(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(v())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const S="feedback-form-state",j=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");let w={};localStorage.getItem(S)&&(w=JSON.parse(localStorage.getItem(S)),w.email&&(T.value=w.email),w.message&&(h.value=w.message)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),e.currentTarget.reset(),localStorage.removeItem(S)})),j.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(w))}),500))}();
//# sourceMappingURL=03-feedback.36ac499a.js.map