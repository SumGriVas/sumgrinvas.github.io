(this.webpackJsonpscenery=this.webpackJsonpscenery||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);!function(){var e={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(t){e._canUse||(e._canUse=document.createElement("div"));var n=e._canUse.style,i=t.charAt(0).toUpperCase()+t.slice(1);return t in n||"Moz"+i in n||"Webkit"+i in n||"O"+i in n||"ms"+i in n},init:function(){var t,n,i,a,s=navigator.userAgent;for(t="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],a=0;a<i.length;a++)if(s.match(i[a][1])){t=i[a][0],n=parseFloat(RegExp.$1);break}for(e.name=t,e.version=n,t="other",n=0,i=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],a=0;a<i.length;a++)if(s.match(i[a][1])){t=i[a][0],n=parseFloat(i[a][2]?i[a][2](RegExp.$1):RegExp.$1);break}e.os=t,e.osVersion=n,e.touch="wp"==e.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.mobile="wp"==e.os||"android"==e.os||"ios"==e.os||"bb"==e.os}};e.init()}();var i=function(){var e={list:null,media:{},events:[],init:function(t){e.list=t,window.addEventListener("resize",e.poll),window.addEventListener("orientationchange",e.poll),window.addEventListener("load",e.poll),window.addEventListener("fullscreenchange",e.poll)},active:function(t){var n,i,a,s,o,r,c;if(!(t in e.media)){if(">="==t.substr(0,2)?(i="gte",n=t.substr(2)):"<="==t.substr(0,2)?(i="lte",n=t.substr(2)):">"==t.substr(0,1)?(i="gt",n=t.substr(1)):"<"==t.substr(0,1)?(i="lt",n=t.substr(1)):"!"==t.substr(0,1)?(i="not",n=t.substr(1)):(i="eq",n=t),n&&n in e.list)if(s=e.list[n],Array.isArray(s)){if(o=parseInt(s[0]),r=parseInt(s[1]),isNaN(o)){if(isNaN(r))return;c=s[1].substr(String(r).length)}else c=s[0].substr(String(o).length);if(isNaN(o))switch(i){case"gte":a="screen";break;case"lte":a="screen and (max-width: "+r+c+")";break;case"gt":a="screen and (min-width: "+(r+1)+c+")";break;case"lt":a="screen and (max-width: -1px)";break;case"not":a="screen and (min-width: "+(r+1)+c+")";break;default:a="screen and (max-width: "+r+c+")"}else if(isNaN(r))switch(i){case"gte":a="screen and (min-width: "+o+c+")";break;case"lte":a="screen";break;case"gt":a="screen and (max-width: -1px)";break;case"lt":case"not":a="screen and (max-width: "+(o-1)+c+")";break;default:a="screen and (min-width: "+o+c+")"}else switch(i){case"gte":a="screen and (min-width: "+o+c+")";break;case"lte":a="screen and (max-width: "+r+c+")";break;case"gt":a="screen and (min-width: "+(r+1)+c+")";break;case"lt":a="screen and (max-width: "+(o-1)+c+")";break;case"not":a="screen and (max-width: "+(o-1)+c+"), screen and (min-width: "+(r+1)+c+")";break;default:a="screen and (min-width: "+o+c+") and (max-width: "+r+c+")"}}else a="("==s.charAt(0)?"screen and "+s:s;e.media[t]=a||!1}return!1!==e.media[t]&&window.matchMedia(e.media[t]).matches},on:function(t,n){e.events.push({query:t,handler:n,state:!1}),e.active(t)&&n()},poll:function(){var t,n;for(t=0;t<e.events.length;t++)n=e.events[t],e.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};function t(t){e.init(t)}return t._=e,t.on=function(t,n){e.on(t,n)},t.active=function(t){return e.active(t)},t}(),a=n(0),s=n.n(a),o=n(5),r=n.n(o),c=(n(12),n(1)),l=n(2),u=n(4),h=n(3),d=(n(13),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("header",{id:"header"},a.createElement("h1",null,"Scenery"),a.createElement("p",null,"\u0420\u0438\u0441\u0443\u043d\u043a\u0438 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u043e\u043c \u043f\u0435\u0440\u043e\u043c \u0438 \u043a\u0438\u0441\u0442\u044c\u044e \u043d\u0430 \u0445\u043e\u043b\u0441\u0442\u0435. \u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u0438\u044f, \u043e\u0434\u0438\u043d \u043b\u0438\u0448\u044c \u043c\u0438\u0433."))}}]),n}(a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){o.findDOMNode(this.refs.article).focus()}},{key:"render",value:function(){return a.createElement("article",{className:this.props.isActive?"active":"",ref:"article",onClick:this.handleClick.bind(this)},a.createElement("a",{className:"thumbnail",href:this.props.image.full,"data-index":this.props.index},a.createElement("img",{src:this.props.image.thumb,alt:""})))}},{key:"handleClick",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.isLocked?o.findDOMNode(this.refs.article).blur():this.props.onThumbnailClick(this.props.index)}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[];return this.props.images.forEach((function(n,i){t.push(a.createElement(m,{image:n,index:i,key:i,isActive:e.props.current===i,isLocked:e.props.isLocked,onThumbnailClick:e.props.onThumbnailClick}))})),a.createElement("section",{id:"thumbnails"},t)}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("footer",{id:"footer"},a.createElement("ul",{className:"copyright"},a.createElement("li",null,"\xa9 scenery")))}}]),n}(a.Component);function v(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function g(e,t){e.classList?e.classList.add(t):v(e,t)||(e.className+=" "+t)}function b(e,t){if(e.classList)e.classList.remove(t);else if(v(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function w(e,t,n){null!=e&&"undefined"!=typeof e&&(e.addEventListener?e.addEventListener(t,n,!1):"attachEvent"in e?e.attachEvent("on"+t,n):e["on"+t]=n)}var k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("div",{className:"toggle",onClick:this.toggle.bind(this),onTouchEnd:this.handleTouchEnd.bind(this)})}},{key:"toggle",value:function(){v(document.body,"fullscreen")?this.props.showMain():this.props.hideMain()}},{key:"handleTouchEnd",value:function(e){e.stopPropagation()}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("div",{id:"main",ref:"main",onTouchStart:this.handleTouchStart.bind(this),onTouchMove:this.handleTouchMove.bind(this)},a.createElement(d,null),a.createElement(p,{images:this.props.images,current:this.props.current,isLocked:this.props.isLocked,onThumbnailClick:this.props.onThumbnailClick}),a.createElement(f,null),a.createElement(k,{hideMain:this.props.hideMain,showMain:this.props.showMain}))}},{key:"handleTouchStart",value:function(e){i.active("<=xsmall")||this.setState({touchPosX:e.touches[0].pageX,touchPosY:e.touches[0].pageY})}},{key:"handleTouchMove",value:function(e){if(!i.active("<=xsmall")&&null!==this.state.touchPosX&&null!==this.state.touchPosY){var t=this.state.touchPosX-e.touches[0].pageX,n=this.state.touchPosY-e.touches[0].pageY,a=!1;switch(this.props.settings.mainSide){case"left":a=n<20&&n>-20&&t>50;break;case"right":a=n<20&&n>-20&&t<-50}a&&this.props.hideMain();var s=o.findDOMNode(this.refs.main),r=s.offsetHeight,c=s.scrollHeight-s.scrollTop;(s.scrollTop<=0&&n<0||c>r-2&&c<r+2&&n>0)&&(e.preventDefault(),e.stopPropagation())}}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={slideClass:"slide loading",isLoadingImage:!0},i}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.image!==this.props.image&&this.setState({slideClass:"slide loading"})}},{key:"render",value:function(){var e={backgroundImage:"url("+this.props.image.full+")",backgroundPosition:this.props.image.position||"center"};return a.createElement("div",{className:this.props.detachCurrentImage?"slide":this.state.slideClass},a.createElement("div",{className:"caption"},a.createElement("h2",null,this.props.image.title),a.createElement("p",null,this.props.image.description)),a.createElement("div",{className:"image",style:e}),a.createElement("img",{src:this.props.image.full,onLoad:this.handleImageLoaded.bind(this),style:{display:"none"}}))}},{key:"handleImageLoaded",value:function(){var e=this;window.setTimeout((function(){e.setState({slideClass:"slide active",isLoadingImage:!1}),e.props.onLock(!1)}),0)}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("div",{className:"toggle",onClick:this.toggle.bind(this),onTouchEnd:this.handleTouchEnd.bind(this)})}},{key:"toggle",value:function(){v(document.body,"fullscreen")?this.props.showMain():this.props.hideMain()}},{key:"handleTouchEnd",value:function(e){e.stopPropagation()}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={currentImage:e.image,detachCurrentImage:!1},i}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!!e.isLocked&&(!!t.detachCurrentImage||(t.currentImage===e.image||(this.setState({detachCurrentImage:!0}),!1)))}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.detachCurrentImage&&window.setTimeout((function(){n.setState({currentImage:n.props.image,detachCurrentImage:!1})}),500)}},{key:"handleTouchEnd",value:function(){i.active("<=medium")&&this.props.hideMain()}},{key:"handleTouchStart",value:function(e){this.setState({touchPosX:e.touches[0].pageX,touchPosY:e.touches[0].pageY})}},{key:"handleTouchMove",value:function(e){if(void 0!==this.state.touchPosX&&void 0!==this.state.touchPosY){var t=this.state.touchPosX-e.touches[0].pageX,n=this.state.touchPosY-e.touches[0].pageY;n<20&&n>-20&&t>50?this.props.handleNext():n<20&&n>-20&&t<-50&&this.props.handlePrevious();var i=o.findDOMNode(this.refs.viewer),a=i.offsetHeight,s=i.scrollHeight-i.scrollTop;(i.scrollTop<=0&&n<0||s>a-2&&s<a+2&&n>0)&&(e.preventDefault(),e.stopPropagation())}}},{key:"render",value:function(){var e={width:this.props.width||""},t=null!==this.state.currentImage?a.createElement(E,{image:this.state.currentImage,onLock:this.props.onLock,detachCurrentImage:this.state.detachCurrentImage}):"";return a.createElement("div",{id:"viewer",ref:"viewer",style:e,onTouchStart:this.handleTouchStart.bind(this),onTouchEnd:this.handleTouchEnd.bind(this),onTouchMove:this.handleTouchMove.bind(this)},a.createElement("div",{className:"inner"},a.createElement("div",{className:"nav-next",onClick:this.props.handleNext}),a.createElement("div",{className:"nav-previous",onClick:this.props.handlePrevious}),a.createElement(x,{hideMain:this.props.hideMain,showMain:this.props.showMain})),t)}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={locked:!1,current:null},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout((function(){i.on(">xsmall",(function(){null===e.state.current&&e.switchTo(0,!0)}))}),0);var t={27:function(){e.handleToggle()},38:function(){e.handleUp()},40:function(){e.handleDown()},32:function(){e.handleNext()},39:function(){e.handleNext()},37:function(){e.handlePrevious()}};document.body.querySelectorAll("input,select,textarea").forEach((function(e){return w(e,"keydown",(function(e){e.stopPropagation()}))})),w(window,"keydown",(function(e){i.active("<=xsmall")||"keyCode"in e&&e.keyCode in t&&(e.stopPropagation(),e.preventDefault(),t[e.keyCode]())}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props.images[this.state.current||0];return s.a.createElement("div",null,s.a.createElement(y,{images:this.props.images,isLocked:this.state.locked,current:this.state.current,ref:"main",onThumbnailClick:this.handleThumbnailClick.bind(this),hideMain:this.hideMain.bind(this),showMain:this.showMain.bind(this),settings:this.props.settings}),s.a.createElement(O,{width:this.state.viewerWidth,image:e,onLock:this.handleLock.bind(this),isLocked:this.state.locked,hideMain:this.hideMain.bind(this),showMain:this.showMain.bind(this),handleNext:this.handleNext.bind(this),handlePrevious:this.handlePrevious.bind(this)}))}},{key:"handleResize",value:function(){var e=this,t=o.findDOMNode(this.refs.main);if(t&&"offsetWidth"in t){var n=t.offsetWidth;window.setTimeout((function(){e.setState({viewerWidth:window.innerWidth-n})}),100)}}},{key:"handleLock",value:function(e){this.setState({locked:e})}},{key:"handleThumbnailClick",value:function(e){this.switchTo(e)}},{key:"switchTo",value:function(e,t){(this.state.current!==e||i.active("<=xsmall"))&&(this.state.locked||(!t&&i.active("<=medium")&&this.hideMain(),this.setState({current:e,locked:!0})))}},{key:"hideMain",value:function(){if(b(document.body,"is-loading-0"),!v(document.body,"fullscreen")){g(document.body,"fullscreen");var e=o.findDOMNode(this.refs.main);e&&e.blur()}}},{key:"showMain",value:function(){v(document.body,"fullscreen")&&(b(document.body,"fullscreen"),o.findDOMNode(this.refs.main).focus())}},{key:"handleNext",value:function(){var e,t=this.state.current||0;e=t>=this.props.images.length-1?0:t+1,this.switchTo(e)}},{key:"handlePrevious",value:function(){var e,t=this.state.current||0,n=this.props.images.length;e=t<=0?n-1:t-1,this.switchTo(e)}},{key:"handleDown",value:function(){if(!v(document.body,"fullscreen")){var e,t=this.state.current||0,n=this.props.images.length,i=this.props.settings.thumbnailsPerRow;e=t>=n-i?t-n+i:t+i,this.switchTo(e)}}},{key:"handleUp",value:function(){if(!v(document.body,"fullscreen")){var e,t=this.state.current||0,n=this.props.images.length,i=this.props.settings.thumbnailsPerRow;e=t<=i-1?n-(i-1-t)-1:t-i,this.switchTo(e)}}},{key:"handleToggle",value:function(){v(document.body,"fullscreen")?this.showMain():this.hideMain()}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);i({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]});var M,C={preload:!1,slideDuration:500,layoutDuration:750,thumbnailsPerRow:2,mainSide:"right"};window.onload=function(){b(document.body,"is-loading-0"),window.setTimeout((function(){b(document.body,"is-loading-1")}),100),window.setTimeout((function(){b(document.body,"is-loading-2")}),100+Math.max(C.layoutDuration-150,0))},w(window,"resize",(function(e){g(document.body,"is-loading-0"),window.clearTimeout(M),M=window.setTimeout((function(){b(document.body,"is-loading-0")}),100)})),fetch("https://raw.githubusercontent.com/SumGriVas/SumGriVas.github.io/data/images.json").then((function(e){return e.json()})).then((function(e){r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,{settings:C,images:e})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f2303558.chunk.js.map