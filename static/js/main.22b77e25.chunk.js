(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(t,e,n){},110:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),a=n(20),s=n.n(a),r=(n(101),n(26)),c=n(52),l=n(155),h=n(76),u=n(77),d=n(3),p=function(t){var e=t.isOpen,n=t.setOpen;return Object(d.jsx)("button",{id:"menu-opener",onClick:function(){return n(!e)},children:e?Object(d.jsx)(h.a,{style:{width:"40px",height:"40px"}}):Object(d.jsx)(u.a,{style:{width:"40px",height:"40px"}})})},b=n(19),j=function(t){var e=t.button,n=Object(b.e)().pathname;return Object(d.jsx)(c.b,{to:e.route,className:n===e.route?"selected":"",children:e.text})},m=function(t,e){return t/e>=1?"landscape":"portrait"},v=function(t){var e=t.buttons,n=Object(i.useRef)(),o=Object(i.useState)(!1),a=Object(r.a)(o,2),s=a[0],c=a[1],l=Object(i.useState)(m(window.innerWidth,window.innerHeight)),h=Object(r.a)(l,2),u=h[0],b=h[1],v=function(t){n.current&&!n.current.contains(t.target)&&c(!1)};return Object(i.useEffect)((function(){return document.addEventListener("mousedown",v),document.addEventListener("touchstart",v),window.addEventListener("resize",(function(){b(m(window.innerWidth,window.innerHeight))})),function(){document.removeEventListener("mousedown",v),document.removeEventListener("touchstart",v),window.removeEventListener("resize",(function(){b(m(window.innerWidth,window.innerHeight))}))}}),[]),Object(d.jsxs)("div",{id:"nav-bar",ref:n,className:"top-bar ".concat(u," ").concat(s?"open":"closed"),children:["portrait"===u&&Object(d.jsx)(p,{isOpen:s,setOpen:c}),e.map((function(t,e){return Object(d.jsx)(j,{button:t},e)}))]})},f=function(t){var e=t.baseRoute;return Object(d.jsxs)("div",{id:"title-bar",className:"top-bar",children:[Object(d.jsx)("img",{src:e+"/images/favicon/favicon-64x64.png",style:{width:"48px",maxWidth:"100%",height:"auto"},alt:"Logo",title:"Logo"}),Object(d.jsx)("button",{type:"button",className:"title",onClick:function(){window.location.reload()},children:"Marcus_Mills"})]})},x=n(22),O=n.n(x),g=n(29),y=n(4),w=n(5),k=n(7),S=n(6),C=n(14),M=function(t){Object(k.a)(n,t);var e=Object(S.a)(n);function n(t,i,o){var a,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(y.a)(this,n),(a=e.call(this)).spawnPos=t.clone(),a.focalPoint=i.clone(),a.aspect=o,a.frustumSize=s,a.position.set(-1,1,1),a.lookAt(a.focalPoint),a.near=-300,a.far=1500,a.update(),a}return Object(w.a)(n,[{key:"update",value:function(){this.left=this.frustumSize*this.aspect/-2,this.right=this.frustumSize*this.aspect/2,this.top=this.frustumSize/2,this.bottom=this.frustumSize/-2,this.updateProjectionMatrix()}},{key:"follow",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,n=t.position.x-this.position.x,i=t.position.z-this.position.z;if(t.completionPending||t.completedLevel){var o=t.spawnPos.y-this.spawnPos.y,a=t.position.y-this.position.y,s=a-o;this.position.y+=s<0?Math.max(s,-999999):Math.min(s,999999)}this.position.x+=n<0?Math.max(n,-e):Math.min(n,e),this.position.z+=i<0?Math.max(i,-e):Math.min(i,e)}},{key:"reset",value:function(){this.position.set(-1,1,1)}}]),n}(C.j),T=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(y.a)(this,t),this.moveCallback=function(t){console.log("Move callback never assigned")},e.addEventListener("keydown",this.handleKeyDown.bind(this),!1),e.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),e.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.xDown=null,this.yDown=null,this.solutionLoaded=!1,this.autoSolveTimer=null,i&&(this.loadSolution(i),e.addEventListener("wheel",this.handleScroll.bind(this),!1)),this.lastMoveWasManual=!1,this.isEnabled=n}return Object(w.a)(t,[{key:"loadSolution",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var n=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){n.solution=t,n.solutionIdx=0,n.solutionLoaded=!0}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleScroll",value:function(t){this.solutionLoaded&&this.isEnabled&&(-100===t.deltaY?this.moveCallback("resp")&&(this.solutionIdx=0):100===t.deltaY&&(this.lastMoveWasManual?this.moveCallback("resp")&&(this.solutionIdx=0):this.moveCallback(this.solution[this.solutionIdx])&&this.solutionIdx++),this.lastMoveWasManual=!1)}},{key:"handleKeyDown",value:function(t){if(this.isEnabled){var e=t.which;87===e||38===e?this.moveCallback("u"):83===e||40===e?this.moveCallback("d"):65===e||37===e?this.moveCallback("l"):68===e||39===e?this.moveCallback("r"):13===e?this.autoSolve(.25):console.log("Key pressed: "+e),13!==e&&(clearTimeout(this.autoSolveTimer),this.lastMoveWasManual=!0)}}},{key:"getTouches",value:function(t){return t.touches||t.originalEvent.touches}},{key:"handleTouchStart",value:function(t){var e=this.getTouches(t)[0];this.xDown=e.clientX,this.yDown=e.clientY}},{key:"handleTouchMove",value:function(t){if(this.isEnabled&&this.xDown&&this.yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY,i=this.xDown-e,o=this.yDown-n;if(0!==i&&0!==o){var a=Math.atan2(o,i);0<=a&&a<Math.PI/2?this.moveCallback("l"):Math.PI/2<=a&&a<=Math.PI?this.moveCallback("u"):-Math.PI<=a&&a<-Math.PI/2?this.moveCallback("r"):-Math.PI/2<=a&&a<0?this.moveCallback("d"):console.log("This should not happen - touch input angle: ".concat(a))}this.xDown=null,this.yDown=null,clearTimeout(this.autoSolveTimer),this.lastMoveWasManual=!0}}},{key:"autoSolve",value:function(t){var e=this;this.solutionLoaded&&this.isEnabled&&this.solutionIdx<this.solution.length&&(this.handleScroll({deltaY:100}),this.autoSolveTimer=setTimeout((function(){e.autoSolve(t)}),1e3*t))}},{key:"reset",value:function(){this.solutionIdx=0}}]),t}(),P=n(43),I=function(){function t(e,n,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(y.a)(this,t),this.window=e,this.loadedSound=null,this.baseRoute=n,this.audioiOS=i,this.context=o,this.listener=new C.b,this.loader=new C.c,this.sounds={}}return Object(w.a)(t,[{key:"playSound",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rand",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rand",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.4,a=function(t){return Math.floor(Math.random()*t)},s=function(t,e){return Math.random()*(e-t)+t};"rand"===e&&(e=a(this.sounds[t].length)),"rand"===n&&(n=s(i,o)),this.audioiOS.isiOS?this._playSoundiOS(t,e,n):this._playSound(t,e,n)}},{key:"_playSound",value:function(t,e,n){if(t in this.sounds){null===this.context&&(console.log("context loaded"),this.loadContext());var i,o=Object(P.a)(this.sounds[t]);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.isPlaying&&a.stop()}}catch(s){o.e(s)}finally{o.f()}this.sounds[t][e].setVolume(n),this.sounds[t][e].play(),console.log("playing sound")}else console.log("Sound: ".concat(t," -- not loaded!"))}},{key:"_playSoundiOS",value:function(t,e,n){this.audioiOS.source.src="http://mmills.io/portfolio/sounds/".concat(t,"-ios/").concat(e,".wav"),this.audioiOS.controller.load(),this.audioiOS.controller.play(),console.log("playing ios sound")}},{key:"loadContext",value:function(){var t=window.AudioContext||window.webkitAudioContext;this.context=new t,this.context.resume().then((function(){console.log("Playback resumed successfully")}))}},{key:"loadSound",value:function(t,e){var n=this;this.sounds[t]=[];for(var i=function(e){n.sounds[t].push(new C.a(n.listener)),n.loader.load("".concat(n.baseRoute,"/sounds/").concat(t,"/").concat(e,".ogg"),(function(i){n.sounds[t][e].setBuffer(i),n.sounds[t][e].setLoop(!1),n.sounds[t][e].setVolume(1)}))},o=0;o<e;o++)i(o)}}]),t}(),R=n(11),z=n(10),L=function(t){Object(k.a)(n,t);var e=Object(S.a)(n);function n(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";Object(y.a)(this,n);var c=new C.d(s[0],s[1],s[2]),l=new C.h;return l.color=new C.e(r),l.blending=C.i,(o=e.call(this,c,l)).name="player",o.position.x=t,o.position.y=a,o.position.z=i,o.size=s,o.spawnPos=o.position.clone(),o.spawnScale=o.scale.clone(),o.fallVelocity=0,o.isReadyToMove=!0,o.isFalling=!1,o.completedLevel=!1,o.lastDirection="resp",o.lastRotation=new C.m(0,0,0),o.respawnPending=!1,o.completionPending=!1,o.animations=[],o.framesLeftOfAnimation=0,o}return Object(w.a)(n,[{key:"setController",value:function(t){var e=this;this.controller=t,this.controller.moveCallback=function(t){return e.move(t)}}},{key:"move",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=Math.PI/2/n,o=!1;return!0===this.isReadyToMove&&("u"===t?this.animations.push([function(){e.position.x+=1/n,e.rotateOnWorldAxis(new C.m(0,0,1),-i)},n]):"d"===t?this.animations.push([function(){e.position.x-=1/n,e.rotateOnWorldAxis(new C.m(0,0,1),i)},n]):"l"===t?this.animations.push([function(){e.position.z-=1/n,e.rotateOnWorldAxis(new C.m(1,0,0),-i)},n]):"r"===t?this.animations.push([function(){e.position.z+=1/n,e.rotateOnWorldAxis(new C.m(1,0,0),i)},n]):"resp"===t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t),o}},{key:"animate",value:function(t){for(var e=0;e<this.animations.length;e++)this.animations[e][1]>0&&((this.animations[e].length<3||this.animations[e][2]<=0)&&this.animations[e][0].bind(this)(),this.animations[e][1]--,this.animations[e].length>=3&&this.animations[e][2]--);this.removeCompletedAnimations(),0===this.animations.length&&(this.completionPending?this.complete():(this.getNextAction(),this.checkFloor(t))),this.playSound=!1}},{key:"removeCompletedAnimations",value:function(){for(var t=[],e=0;e<this.animations.length;e++)this.animations[e][1]>0&&t.push(this.animations[e]);this.animations=t}},{key:"getNextAction",value:function(){this.respawnPending?(this.respawnPending=!1,this.respawn()):(this.roundPosition(),this.roundQuaternion(),this.isReadyToMove=!0)}},{key:"checkFloor",value:function(t){var e=this.getGridPosition();t.hasBlockInLocation(e)?t.hasGoalInLocation(e)&&(this.fall(.005,100),this.beginCompletion(),t.completeLevel()):(this.fall(.02),this.respawnPending=!0)}},{key:"fall",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;this.isFalling=!0,this.isReadyToMove=!1,this.animations.push([function(){e.position.y-=e.fallVelocity,e.fallVelocity+=t},n])}},{key:"getGridPosition",value:function(){return[this.position.x,this.position.z]}},{key:"roundPosition",value:function(){this.position.round()}},{key:"roundQuaternion",value:function(){var t,e,n,i;if(void 0!==this.quaternion._x&&void 0!==this.quaternion._y&&void 0!==this.quaternion._z&&void 0!==this.quaternion._w){t=E(this.quaternion._x),e=E(this.quaternion._y),n=E(this.quaternion._z),i=E(this.quaternion._w);var o=new C.k(t,e,n,i);this.setRotationFromQuaternion(o)}}},{key:"respawn",value:function(){this.fallVelocity=0,this.animations=[],this.position.copy(this.spawnPos),this.scale.copy(this.spawnScale),this.setRotationFromQuaternion(new C.k(0,0,0,1))}},{key:"beginCompletion",value:function(){var t=this;this.completionPending=!0;var e=Math.PI/4/25;this.animations.push([function(){t.rotation.y-=e},25]),this.animations.push([function(){t.scale.x*=1.1,t.scale.y*=1.1,t.scale.z*=1.1},75,25])}},{key:"complete",value:function(){this.position.x=9999999,this.position.y=9999999,this.position.z=9999999,this.completionPending=!1,this.completedLevel=!0,console.log("completion called")}}]),n}(C.g),E=function(t){return Math.abs(t)<1e-10?0:Math.abs(t)-.5<1e-10?t<0?-.5:.5:Math.abs(t)-Math.sqrt(2)/2<1e-10?t<0?-Math.sqrt(2)/2:Math.sqrt(2)/2:Math.abs(t)-1<1e-10?t<0?-1:1:void 0},B=function(t){Object(k.a)(n,t);var e=Object(S.a)(n);function n(t,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,1.8,.9],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";return Object(y.a)(this,n),e.call(this,t,i,o+.25*a[1],a,s)}return Object(w.a)(n,[{key:"move",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=Math.PI/2/n,o=!1;if(!0===this.isReadyToMove){var a,s=this.getOrientation(),r=1/n,c=0;"UPRIGHT"!==s&&("UP-DOWN"!==s||"u"!==t&&"d"!==t)&&("LEFT-RIGHT"!==s||"l"!==t&&"r"!==t)||(r*=1.5,c=.25*("UPRIGHT"===s?-1:1)*this.size[1]/n),"u"===t?(a=new C.m(0,0,-1),this.animations.push([function(){e.position.x+=r,e.position.y+=c,e.rotateOnWorldAxis(a,i)},n])):"d"===t?(a=new C.m(0,0,1),this.animations.push([function(){e.position.x-=r,e.position.y+=c,e.rotateOnWorldAxis(a,i)},n])):"r"===t?(a=new C.m(1,0,0),this.animations.push([function(){e.position.z+=r,e.position.y+=c,e.rotateOnWorldAxis(a,i)},n])):"l"===t?(a=new C.m(-1,0,0),this.animations.push([function(){e.position.z-=r,e.position.y+=c,e.rotateOnWorldAxis(a,i)},n])):"resp"===t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t,this.lastRotation=a}return o}},{key:"getOrientation",value:function(){var t=this.position.x,e=this.position.z;return t===A(t)&&e===A(e)?"UPRIGHT":t===A(t)?"LEFT-RIGHT":e===A(e)?"UP-DOWN":void 0}},{key:"checkFloor",value:function(t){var e=this.getGridPosition(),i=this.getOrientation();if("UPRIGHT"===i)return Object(R.a)(Object(z.a)(n.prototype),"checkFloor",this).call(this,t);t.hasBlockInLocation(e[0])&&t.hasBlockInLocation(e[1])||((t.hasBlockInLocation(e[0])||t.hasBlockInLocation(e[1]))&&(t.hasBlockInLocation(e[0])?(console.log("second off"),"UP-DOWN"===i?this.quickRotate(new C.m(0,0,-1)):this.quickRotate(new C.m(1,0,0),!1)):(console.log("first off"),"UP-DOWN"===i?this.quickRotate(new C.m(0,0,1)):this.quickRotate(new C.m(-1,0,0),!1))),this.fall(.02),this.respawnPending=!0)}},{key:"quickRotate",value:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,a=(n?-1:1)*t.z,s=(n?-1:1)*t.x;this.animations.push([function(){e.position.x+=.5*a/i,e.position.z+=.5*s/i},i]);var r=Math.PI/2/o;this.animations.push([function(){e.rotateOnWorldAxis(t,r)},o])}},{key:"getGridPosition",value:function(){var t=this.position.x,e=this.position.z,n=this.getOrientation();return"UPRIGHT"===n?[t,e]:"UP-DOWN"===n?[[t-.5,e],[t+.5,e]]:"LEFT-RIGHT"===n?[[t,e-.5],[t,e+.5]]:void 0}},{key:"roundPosition",value:function(){this.position.x=Math.round(2*this.position.x)/2,this.position.z=Math.round(2*this.position.z)/2}}]),n}(L),A=function(t){return~~t},W=B,F=function(t){Object(k.a)(n,t);var e=Object(S.a)(n);function n(t,i){var o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16777215,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;Object(y.a)(this,n);var l=new C.d(s,.5*s,s),h=new C.h;return h.color="cycle"===r?new C.e(0):new C.e(r),h.blending=C.i,h.transparent=!0,h.opacity=c,(o=e.call(this,l,h)).position.x=t,o.position.y=a+.325*s,o.position.z=i,"cycle"===r&&o.cycleColor(),o}return Object(w.a)(n,[{key:"getPosition",value:function(){return[this.position.x,this.position.z]}},{key:"cycleColor",value:function(){var t=this;this.material.color=new C.e(function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}()),setTimeout((function(){return t.cycleColor()}),250)}}]),n}(C.g),D=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[16777215],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1];Object(y.a)(this,t),this.tiles=[],this.goalTile=void 0,this.scale=e,this.colors=n,this.colorProb=i}return Object(w.a)(t,[{key:"loadTemplate",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var n=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){n.template=t.split("\n").map((function(t){return t.split("\t")})),n.addTiles()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setTemplate",value:function(t){this.template=t,this.addTiles()}},{key:"addTiles",value:function(){for(var t=0;t<this.template.length;t++)for(var e=0;e<this.template[t].length;e++)"x"===this.template[t][e].toLowerCase()?this.tiles.push(new F(e,t)):"s"===this.template[t][e].toLowerCase()?(void 0!==this.spawnTile&&console.log("ERROR: Multiple spawn tiles! Please fix level template"),this.spawnTile=new F(e,t,0,.9,13948116),this.tiles.push(this.spawnTile)):"g"===this.template[t][e].toLowerCase()&&(void 0!==this.goalTile&&console.log("ERROR: Multiple goal tiles! Please fix level template"),this.goalTile=new F(e,t,0,.9,"cycle",.25),this.tiles.push(this.goalTile))}},{key:"addToScene",value:function(t){var e,n=Object(P.a)(this.tiles);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.add(i)}}catch(o){n.e(o)}finally{n.f()}}},{key:"getBlockInLocation",value:function(t){var e=Math.round(t[0]),n=Math.round(t[1]);return e<0||n<0||e>=this.template[0].length||n>=this.template.length?"":this.template[n][e].toLowerCase()}},{key:"hasBlockInLocation",value:function(t){return["x","s","g"].includes(this.getBlockInLocation(t))}},{key:"hasGoalInLocation",value:function(t){return"g"===this.getBlockInLocation(t)}},{key:"getPositions",value:function(){var t,e=[],n=Object(P.a)(this.tiles);try{for(n.s();!(t=n.n()).done;){var i=t.value;e.push(i.position)}}catch(o){n.e(o)}finally{n.f()}return e}},{key:"completeLevel",value:function(){}}]),t}(),G=n(158);var N=function(t){Object(k.a)(n,t);var e=Object(S.a)(n);function n(t){var i;return Object(y.a)(this,n),(i=e.call(this,t)).state={renderer:null,scene:null,camera:null,audioManager:null,floor:null,controller:null,player:null,initialMountWidth:null,initialMountHeight:null,isInitialized:!1,audioiOS:{isiOS:i.props.isiOS,controller:null,source:null}},i}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas mounted"),this.initThreeCanvas(),window.addEventListener("resize",this.resizeCanvasToMountSize.bind(this));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas updated"),this.state.isInitialized&&(this.resizeCanvasToMountSize(),this.resumeThreeCanvas(),this.state.controller.isEnabled=this.props.isActive,this.props.isComplete&&this.state.player.completedLevel&&console.log("completed - ",this.props.level),!this.props.isComplete&&this.state.player.completedLevel&&(this.state.player.completedLevel=!1,this.state.player.respawn(),this.state.camera.reset(),this.state.controller.reset(),this.setState(this.state),console.log(this.state)));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.removeEventListener("resize",this.resizeCanvasToMountSize.bind(this)),console.log("Canvas unmounted");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"initThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(navigator.platform),this.state.initialMountWidth=this.mount.offsetWidth,this.state.initialMountHeight=this.mount.offsetHeight,e=this.state.initialMountWidth/this.state.initialMountHeight,this.state.scene=new C.l,this.state.camera=new M(new C.m(-1,1,1),this.state.scene.position.clone(),e),this.state.renderer=new C.n({alpha:!0,antialias:!0}),this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(this.state.initialMountWidth,this.state.initialMountHeight,!0),this.mount.appendChild(this.state.renderer.domElement),this.state.renderer.domElement.style.zIndex=0,n=new C.f,this.state.scene.add(n),n.position.set(-20,100,50),this.state.audioManager=new I(window,this.props.baseRoute,this.state.audioiOS),this.state.camera.add(this.state.audioManager.listener),this.state.audioManager.loadSound("block-move",4),this.state.floor=new D(.9,[11337592,2697513],[0,1]),t.next=20,this.state.floor.loadTemplate("".concat(this.props.baseRoute,"/levels/").concat(this.props.level,".tsv"));case 20:this.state.floor.addToScene(this.state.scene),this.state.controller=new T(document,this.props.isActive,"".concat(this.props.baseRoute,"/levels/solutions/").concat(this.props.level,".txt")),this.state.player=new W(this.state.floor.spawnTile.position.x,this.state.floor.spawnTile.position.z),this.state.player.setController(this.state.controller),this.state.scene.add(this.state.player),this.state.camera.follow(this.state.player),this.state.isInitialized=!0,this.setState(this.state);case 28:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"resumeThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,n,i,o=this,a=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!(a.length>0&&void 0!==a[0])||a[0],n=0,i=!0,function t(){o.props.isActive&&i&&(o.state.renderer.render(o.state.scene,o.state.camera),o.state.player.completedLevel&&(i=!1),o.state.player.playSound&&o.state.audioManager.playSound("block-move"),o.state.player.completionPending&&!o.props.isComplete&&o.props.completeStageCallback(),o.state.player.animate(o.state.floor),o.state.camera.follow(o.state.player,.1),n%200===0&&e&&console.log(o.state.player.getGridPosition()),n+=1,requestAnimationFrame(t))}();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"resizeCanvasToMountSize",value:function(){var t=this.state.renderer.domElement,e=t.offsetWidth,n=t.offsetHeight,i=this.mount.offsetWidth,o=this.mount.offsetHeight;e===i&&n===o||(this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(i,o,!0),this.state.camera.aspect=i/o,this.state.camera.update(),function(t){var e=t.firstElementChild;e.style.width=t.offsetWidth,e.style.height=t.offsetHeight}(this.mount))}},{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[this.props.isActive&&Object(d.jsxs)("audio",{id:"init",ref:function(e){return t.state.audioiOS.controller=e},controls:!0,children:[Object(d.jsx)("source",{ref:function(e){return t.state.audioiOS.source=e},src:"http://mmills.io/portfolio/sounds/block-move-ios/0.wav",type:"audio/mpeg"}),"Your browser does not support the audio tag."]}),this.props.isActive&&Object(d.jsx)(G.a,{id:"intro",variant:"contained",onClick:function(){t.state.audioiOS.controller.play()},style:{zIndex:1e3},children:"Hello"}),Object(d.jsxs)("div",{ref:function(e){return t.mount=e},id:this.props.level,className:"canvas-container",style:{display:this.props.isActive?"block":"none"},children:[Object(d.jsx)("h1",{id:"directions-text",style:{display:this.props.isActive&&!this.props.isComplete?"block":"none"},children:"Beat the level to unlock the page!"}),Object(d.jsx)(G.a,{variant:"contained",onClick:function(){t.state.controller.autoSolve(.25)},style:{display:this.props.isActive&&!this.props.isComplete?"block":"none",position:"fixed",margin:"auto",bottom:"2rem",left:0,right:0,textAlign:"center",zIndex:"4"},children:"Auto-solve"})]})]})}}]),n}(i.Component),H=n(141),q=n(142),U=n(140),_=n(82),Y=n.n(_),V=n(83),J=n.n(V),K=function(){return Object(d.jsx)("div",{id:"footer",children:"Copyright 2021"})},Q=function(t){var e=t.Component,n=t.isActive,o=t.replayStageCallback,a=t.nextLevel,s=t.baseRoute,c=Object(i.useState)(!0),l=Object(r.a)(c,2),h=l[0],u=l[1],p=Object(b.d)(),j=Object(U.a)((function(){return{root:{display:"none",top:"4rem",position:"relative",backgroundColor:"white",padding:"2rem",paddingBottom:"5rem",transition:"opacity .3s linear","-moz-transition":"opacity .3s linear","-webkit-transition":"opacity .3s linear",zIndex:1},fade:{display:"block",opacity:0},active:{display:"block",opacity:1}}}));Object(i.useEffect)((function(){setTimeout((function(){return u(!1)}),1e3)}),[]);var m=j();return Object(d.jsx)(d.Fragment,{children:n&&Object(d.jsxs)(H.a,{className:"".concat(m.root," ").concat(h?m.fade:""," ").concat(!h&&n?m.active:""),maxWidth:"lg",style:{minHeight:"96vh"},children:[Object(d.jsx)(G.a,{variant:"contained",startIcon:Object(d.jsx)(Y.a,{}),onClick:function(){o()},children:"Replay Level"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(e,{baseRoute:s}),Object(d.jsx)(q.a,{container:!0,justify:"flex-end",children:Object(d.jsx)(G.a,{variant:"contained",endIcon:Object(d.jsx)(J.a,{}),onClick:function(){console.log(a),p.push(a.route)},style:{display:void 0!==a?"block":"none",right:0},children:"Next Level"})}),Object(d.jsx)(K,{})]})})},X=function(t){var e=t.pages,n=t.completeStageCallback,o=t.replayStageCallback,a=t.baseRoute,s=t.isiOS,r=Object(b.e)().pathname,c=Object(b.d)();Object(i.useState)({audioiOS:{isiOS:s,controller:null,source:null}});return Object(i.useEffect)((function(){"/"===r&&c.push("/about")})),Object(i.useEffect)((function(){e.forEach((function(t){if(r===t.route){var e=document.getElementsByTagName("html")[0];e&&(t.completed?e.style.touchAction="auto":e.style.touchAction="none")}}))})),Object(d.jsx)(d.Fragment,{children:e.map((function(t,i){return Object(d.jsxs)(d.Fragment,{children:[t.completed&&Object(d.jsx)(Q,{Component:t.component,isActive:r===t.route,replayStageCallback:function(){return o(t.route)},nextLevel:e[i+1],baseRoute:a}),Object(d.jsx)(N,{level:t.route.replace("/",""),isActive:r===t.route,completeStageCallback:function(){return n(t.route)},isComplete:t.completed,baseRoute:a,isiOS:s})]})}))})},Z=function(t){var e=Object(i.useState)(!0),n=Object(r.a)(e,2),o=n[0],a=(n[1],Object(i.useRef)());return Object(d.jsx)("div",{className:"fade-in-section ".concat(o?"is-visible":""),ref:a,children:t.children})},$=n(147),tt=n(113),et=n(157),nt=n(84),it=n.n(nt),ot=n(85),at=n.n(ot),st=n(86),rt=n.n(st),ct=n(144),lt=n(145),ht=n(146),ut=n(148),dt=n(149),pt=n(150),bt=n(151),jt=n(143),mt=n(152),vt=n(153),ft=n(154),xt=n(46),Ot=n.n(xt),gt=Object(U.a)((function(t){return{root:{padding:0},card:{},media:{height:140}}})),yt=function(){var t=gt(),e=Object(jt.a)("(min-width:600px)"),n=[{year:"2016-2020",icon:Object(d.jsx)(Ot.a,{}),image:{title:"UF",link:"about/uf.png"},title:"B.S. in Computer Science",subtitle:"University of Florida",content:"Began pursing a BS in CS at the University of Florida"},{year:"2018-2020",icon:Object(d.jsx)(Ot.a,{}),image:{title:"Research",link:"about/fics.png"},title:"Undergraduate Research Assistant",subtitle:"Florida Institute of Cybersecurity",content:"Became a machine learning research assistant at FICS under Vincent Bindschadler"},{year:"2020-",icon:Object(d.jsx)(Ot.a,{}),image:{title:"Motorola",link:"about/motorola.jpg"},title:"Jr. Software Engineer",subtitle:"Motorola Solutions",content:"Became a full time software engineer at Motorola Solutions"},{year:"2021-",icon:Object(d.jsx)(Ot.a,{}),image:{title:"OMSCS",link:"about/omscs.png"},title:"M.S. in Computer Science",subtitle:"Georgia Institute of Technology",content:"Currently pursuring a masters of science in computer science at Georgia Tech"},{year:"????",icon:Object(d.jsx)(Ot.a,{}),title:"Future",content:"Who knows what it will hold..."}];return Object(d.jsx)(ct.a,{style:{flexGrow:0},className:t.root,align:e?"alternate":"left",children:n.map((function(n,i){return Object(d.jsxs)(lt.a,{children:[Object(d.jsx)(ht.a,{style:{flexGrow:e?1:0},children:n.year?Object(d.jsx)($.a,{color:"textSecondary",children:n.year}):Object(d.jsx)($.a,{style:{color:"white"},children:"0000"})}),Object(d.jsxs)(ut.a,{children:[Object(d.jsx)(dt.a,{color:"primary",variant:"outlined",children:Object(d.jsx)(Ot.a,{})}),Object(d.jsx)(pt.a,{})]}),Object(d.jsx)(bt.a,{children:Object(d.jsxs)(mt.a,{className:t.card,children:[n.image&&Object(d.jsx)(vt.a,{className:t.media,image:"/portfolio/images/"+n.image.link,title:n.image.title,style:{backgroundSize:"contain",margin:".5rem"}}),Object(d.jsxs)(ft.a,{children:[Object(d.jsx)($.a,{gutterBottom:!0,variant:"h5",children:n.title}),Object(d.jsx)($.a,{gutterBottom:!0,variant:"h6",style:{fontStyle:"italic"},children:n.subtitle}),Object(d.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",children:n.content})]})]})})]},i)}))})},wt=n(159),kt=Object(U.a)((function(){return{root:{display:"flex",padding:".5rem"}}})),St=function(){var t=kt(),e=Object(jt.a)("(min-width:900px)");return Object(d.jsxs)(mt.a,{className:t.root,style:{flexDirection:e?"row":"column"},children:[Object(d.jsx)(wt.a,{src:"/portfolio/images/headshot.jpg",style:{objectFit:"cover",height:"auto",width:"400px",maxWidth:"100%"},alt:"Me!"}),Object(d.jsxs)(ft.a,{style:{flexGrow:1,padding:"2rem"},children:[Object(d.jsx)($.a,{variant:"h4",gutterBottom:!0,children:"Overview"}),Object(d.jsx)($.a,{variant:"h6",children:"Occupation: Software Engineer"}),Object(d.jsx)($.a,{variant:"h6",children:"Company: Motorola Solutions"}),Object(d.jsx)($.a,{variant:"h6",children:"Location: Denver, CO"}),Object(d.jsx)($.a,{variant:"h6",children:"Total Experience: 5+ years"}),Object(d.jsx)($.a,{variant:"h6",children:"Industry Experience: 1+ year"})]})]})},Ct=Object(U.a)((function(){return{paper:{padding:".5rem"}}})),Mt=function(){var t=Ct(),e=[{title:"CS Interests",icon:Object(d.jsx)(it.a,{}),interests:["Backend development","Frontend development","Machine learning"]},{title:"Extracurricular Interests",icon:Object(d.jsx)(at.a,{}),interests:["Investing / Economics","Disc Golf","Climbing","Hiking","Running","Weightlifting"]},{title:"Languages / Frameworks",icon:Object(d.jsx)(rt.a,{}),interests:["Python - Proficient","Javascript - Experienced","HTML / CSS - Experienced","React.JS - Experienced","Git - Experienced","SQL - Experienced","Node.js - Some knowledge"]}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)($.a,{variant:"h3",gutterBottom:!0,children:"About Me"}),Object(d.jsx)(St,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(Z,{children:[Object(d.jsx)($.a,{variant:"h4",gutterBottom:!0,children:"Objective"}),Object(d.jsx)($.a,{children:"To make society more productive through the use of software solutions"})]}),Object(d.jsx)("br",{}),e.map((function(e,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Z,{children:Object(d.jsxs)(tt.a,{className:t.paper,children:[e.icon,Object(d.jsx)($.a,{variant:"h4",gutterBottom:!0,children:e.title}),Object(d.jsx)("ul",{children:e.interests.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)($.a,{children:t})},"".concat(n,"-").concat(e))}))})]})}),Object(d.jsx)("br",{})]})})),Object(d.jsxs)(Z,{children:[Object(d.jsx)($.a,{variant:"h4",gutterBottom:!0,children:"Timeline"}),Object(d.jsx)(et.a,{style:{left:0},children:Object(d.jsx)(yt,{})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Tt=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)($.a,{variant:"h3",gutterBottom:!0,children:"Projects"}),Object(d.jsxs)(mt.a,{children:[Object(d.jsx)(vt.a,{style:{height:"400px"},image:"/portfolio/images/projects/poli-bias.jpg",title:"Political Bias Detector"}),Object(d.jsxs)(ft.a,{children:[Object(d.jsx)($.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Political Bias Detector"}),Object(d.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"This project uses a state-of-the-art GPT-2 model, hosted on a dockerized Python server on a Google cloud cluster to make predictions about political bias in text."}),Object(d.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"This model underwent reinforcement training on 86,460 tweets from 200 different US senators, using their party affiliation as the label."}),Object(d.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"In order to query the model, we built a chrome extension that allows you to highlight text and send an HTTP request to the server. The results come back within a few seconds."}),Object(d.jsxs)($.a,{variant:"body2",color:"textSecondary",component:"p",children:["You can find the chrome extension listed on the Chrome Web Store\xa0",Object(d.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma",style:{color:"purple",fontSize:"1rem",textDecoration:"underline"},children:"here"})]})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Pt=n(87),It=n(156),Rt=function(){var t=Object(i.useState)({name:"",email:"",message:""}),e=Object(r.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)({name:!1,email:!1}),s=Object(r.a)(a,2),c=s[0],l=s[1],h=Object(i.useState)(!1),u=Object(r.a)(h,2),p=u[0],b=u[1],j=function(t){var e=t.target.id,i=t.target.value,a=Object(Pt.a)({},n);a[e]=i,o(a)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)($.a,{variant:"h3",gutterBottom:!0,children:"Contact"}),Object(d.jsxs)("form",{children:[Object(d.jsx)(It.a,{id:"name",label:"Full Name",placeholder:"Your name...",value:n.name,onChange:j,variant:"outlined",error:c.name&&""===n.name,helperText:c.name&&""===n.name&&"Name is required",fullWidth:!0,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(It.a,{id:"email",label:"Email",placeholder:"Your email...",value:n.email,onChange:j,variant:"outlined",error:c.email&&""===n.email,helperText:c.email&&""===n.email&&"Email is required",fullWidth:!0,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(It.a,{id:"message",label:"Message",placeholder:"Write something...",value:n.message,onChange:j,variant:"outlined",multiline:!0,fullWidth:!0,rows:2,rowMax:4}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),!p&&Object(d.jsx)(G.a,{variant:"contained",onClick:function(t){t.preventDefault();var e="https://script.google.com/macros/s/AKfycbzp6ZdgtfOM6Mz0BSM9KU8Gupa-pKaaJk0iGPCxzRDBb5nD4EZdb_9a8i_znB30nYIZ2w/exec";e+="?name="+encodeURI(n.name),e+="&email="+encodeURI(n.email),e+="&message="+encodeURI(n.message),""!==n.name&&""!==n.email?(fetch(e,{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"}}),b(!0)):l({name:""===n.name,email:""===n.email})},children:"Submit"}),p&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)($.a,{variant:"h6",children:"Email sent!"}),Object(d.jsx)($.a,{variant:"body2",children:"Thanks for contacting me! I will get back to you as soon as possible!"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",children:"Please use the contact form above or send an email to: marcusm009@gmail.com"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},zt="/portfolio",Lt="0.7.7.5";console.log("VER: ",Lt);function Et(){var t=!1;return/iP(hone|od|ad)/.test(navigator.platform)&&(t=!0),t}var Bt=function(){var t=Object(i.useState)({pages:[{text:"About",route:"/about",completed:!1,component:Mt},{text:"Projects",route:"/projects",completed:!1,component:Tt},{text:"Contact",route:"/contact",completed:!1,component:Rt}]}),e=Object(r.a)(t,2),n=e[0],o=e[1];return Object(d.jsxs)(c.a,{basename:zt,children:[Object(d.jsx)(l.a,{}),Object(d.jsx)(f,{baseRoute:zt}),Object(d.jsx)(v,{buttons:n.pages,baseRoute:zt}),Object(d.jsx)(X,{pages:n.pages,completeStageCallback:function(t){console.log(t," completed!"),n.pages.forEach((function(e,i){if(e.route===t){var a={};Object.assign(a,n),a.pages[i].completed=!0,o(a)}}))},replayStageCallback:function(t){console.log(t," - replaying!"),n.pages.forEach((function(e,i){if(e.route===t){var a={};Object.assign(a,n),a.pages[i].completed=!1,o(a)}}))},baseRoute:zt,isiOS:Et()}),Object(d.jsxs)("div",{id:"ver",style:{color:"white",position:"fixed",right:"2px",bottom:"2px",zIndex:"999"},children:["Ver: ",Lt]})]})},At=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),o(t),a(t),s(t)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(Bt,{})}),document.getElementById("root")),At()}},[[110,1,2]]]);
//# sourceMappingURL=main.22b77e25.chunk.js.map