YUI.add("get",function(e,t){var n=require("path"),r=require("vm"),i=require("fs"),s=require("request"),o=i.existsSync||n.existsSync;e.Get=function(){},e.config.base=n.join(__dirname,"../"),YUI.require=require,YUI.process=process;var u=function(e){return e.replace(/\\/g,"\\\\")};e.Get._exec=function(e,t,i){var s=u(n.dirname(t)),o=u(t);s.match(/^https?:\/\//)&&(s=".",o="remoteResource");var a="(function(YUI) { var __dirname = '"+s+"'; "+"var __filename = '"+o+"'; "+"var process = YUI.process;"+"var require = function(file) {"+" if (file.indexOf('./') === 0) {"+"   file = __dirname + file.replace('./', '/'); }"+" return YUI.require(file); }; "+e+" ;return YUI; })",f=r.createScript(a,t),l=f.runInThisContext(a);YUI=l(YUI),i(null,t)},e.Get._include=function(t,n){var r=this;if(t.match(/^https?:\/\//)){var u={url:t,timeout:r.timeout};s(u,function(r,i,s){r?n(r,t):e.Get._exec(s,t,n)})}else if(e.config.useSync)if(o(t)){var a=i.readFileSync(t,"utf8");e.Get._exec(a,t,n)}else n("Path does not exist: "+t,t);else i.readFile(t,"utf8",function(r,i){r?n(r,t):e.Get._exec(i,t,n)})};var a=function(t,n,r){e.Lang.isFunction(t.onEnd)&&t.onEnd.call(e,n,r)},f=function(t){e.Lang.isFunction(t.onSuccess)&&t.onSuccess.call(e,t),a(t,"success","success")},l=function(t,n){n.errors=[n],e.Lang.isFunction(t.onFailure)&&t.onFailure.call(e,n,t),a(t,n,"fail")};e.Get.js=function(t,n){var r=e.Array,i=this,s=r(t),o,u,a=s.length,c=0,h=function(){c===a&&f(n)};for(u=0;u<a;u++)o=s[u],e.Lang.isObject(o)&&(o=o.url),o=o.replace(/'/g,"%27"),e.Get._include(o,function(t,r){e.config||(e.config={debug:!0}),n.onProgress&&n.onProgress.call(n.context||e,r),t?l(n,t):(c++,h())})},e.Get.script=e.Get.js,e.Get.css=function(e,t){f(t)}},"@VERSION@")