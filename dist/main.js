!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(t){var r,o=n(2).Teller.extend({eventConfiguration:function(e){var n=this;return{"sentence-start":function(o){var i=t.document.getElementById("root_background"),u=o.data.split(" ").concat(o.story.keywords.slice(0,10).concat(o.story.codes||[]));r({uri:"https://api.tenor.com/v1/search",qs:{key:n.options.tenorApiKey,q:u.join(" "),contentfilter:"off",media_filter:"minimal",ar_range:"all",limit:1}},(function(e,t,n){var r=JSON.parse(n);if(r.results&&r.results[0]){var o=r.results&&r.results[0];if(o.media&&o.media[0]){var u=o.media[0].gif;u&&(i.style.backgroundImage="url('"+u.url+"')")}}})),setTimeout((function(){e.emit("sentence-stop",{})}),0)}}},initializeContext:function(e,t){var n=e.document,r=n.getElementById("root_background");r||((r=n.createElement("div")).setAttribute("id","root_background"),n.body.appendChild(r)),t()},cleanupContext:function(e,t){t()}});"undefined"!=typeof self&&t.StoryTeller&&(t.StoryTeller.BackgroundTeller=o),o.setRequest=function(e){r=e},e.exports=o}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=StoryTeller}]);