(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{105:function(t,e,i){},114:function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n),s=i(20),a=i.n(s),r=(i(105),i(27)),c=i(52),l=i(160),h=i(76),u=i(77),d=i(3),p=function(t){var e=t.isOpen,i=t.setOpen;return Object(d.jsx)("button",{id:"menu-opener",onClick:function(){return i(!e)},children:e?Object(d.jsx)(h.a,{style:{width:"40px",height:"40px"}}):Object(d.jsx)(u.a,{style:{width:"40px",height:"40px"}})})},b=i(19),j=function(t){var e=t.button,i=Object(b.e)().pathname;return Object(d.jsx)(c.b,{to:e.route,className:i===e.route?"selected":"",children:e.text})},m=function(t,e){return t/e>=1?"landscape":"portrait"},v=function(t){var e=t.buttons,i=Object(n.useRef)(),o=Object(n.useState)(!1),s=Object(r.a)(o,2),a=s[0],c=s[1],l=Object(n.useState)(m(window.innerWidth,window.innerHeight)),h=Object(r.a)(l,2),u=h[0],b=h[1],v=function(t){i.current&&!i.current.contains(t.target)&&c(!1)};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",v),document.addEventListener("touchstart",v),window.addEventListener("resize",(function(){b(m(window.innerWidth,window.innerHeight))})),function(){document.removeEventListener("mousedown",v),document.removeEventListener("touchstart",v),window.removeEventListener("resize",(function(){b(m(window.innerWidth,window.innerHeight))}))}}),[]),Object(d.jsxs)("div",{id:"nav-bar",ref:i,className:"top-bar ".concat(u," ").concat(a?"open":"closed"),children:["portrait"===u&&Object(d.jsx)(p,{isOpen:a,setOpen:c}),e.map((function(t,e){return Object(d.jsx)(j,{button:t},e)}))]})},f=function(t){var e=t.baseRoute;return Object(d.jsxs)("div",{id:"title-bar",className:"top-bar",children:[Object(d.jsx)("img",{src:e+"/images/favicon/favicon-64x64.png",style:{width:"48px",maxWidth:"100%",height:"auto"},alt:"Logo",title:"Logo"}),Object(d.jsx)("button",{type:"button",className:"title",onClick:function(){window.location.reload()},children:"Marcus_Mills"})]})},x=i(22),O=i.n(x),g=i(30),y=i(4),w=i(5),k=i(7),S=i(6),M=i(14),C=function(t){Object(k.a)(i,t);var e=Object(S.a)(i);function i(t,n,o){var s,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(y.a)(this,i),(s=e.call(this)).spawnPos=t.clone(),s.focalPoint=n.clone(),s.aspect=o,s.frustumSize=a,s.position.set(-1,1,1),s.lookAt(s.focalPoint),s.near=-300,s.far=1500,s.update(),s}return Object(w.a)(i,[{key:"update",value:function(){this.left=this.frustumSize*this.aspect/-2,this.right=this.frustumSize*this.aspect/2,this.top=this.frustumSize/2,this.bottom=this.frustumSize/-2,this.updateProjectionMatrix()}},{key:"follow",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,i=t.position.x-this.position.x,n=t.position.z-this.position.z;if(t.completionPending||t.completedLevel){var o=t.spawnPos.y-this.spawnPos.y,s=t.position.y-this.position.y,a=s-o;this.position.y+=a<0?Math.max(a,-999999):Math.min(a,999999)}this.position.x+=i<0?Math.max(i,-e):Math.min(i,e),this.position.z+=n<0?Math.max(n,-e):Math.min(n,e)}},{key:"reset",value:function(){this.position.set(-1,1,1)}}]),i}(M.j),T=function(){function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(y.a)(this,t),this.moveCallback=function(t){console.log("Move callback never assigned")},e.addEventListener("keydown",this.handleKeyDown.bind(this),!1),e.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),e.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.xDown=null,this.yDown=null,this.solutionLoaded=!1,this.autoSolveTimer=null,n&&(this.loadSolution(n),e.addEventListener("wheel",this.handleScroll.bind(this),!1)),this.lastMoveWasManual=!1,this.isEnabled=i}return Object(w.a)(t,[{key:"loadSolution",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var i=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){i.solution=t,i.solutionIdx=0,i.solutionLoaded=!0}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleScroll",value:function(t){this.solutionLoaded&&this.isEnabled&&(-100===t.deltaY?this.moveCallback("resp")&&(this.solutionIdx=0):100===t.deltaY&&(this.lastMoveWasManual?this.moveCallback("resp")&&(this.solutionIdx=0):this.moveCallback(this.solution[this.solutionIdx])&&this.solutionIdx++),this.lastMoveWasManual=!1)}},{key:"handleKeyDown",value:function(t){if(this.isEnabled){var e=t.which;87===e||38===e?this.moveCallback("u"):83===e||40===e?this.moveCallback("d"):65===e||37===e?this.moveCallback("l"):68===e||39===e?this.moveCallback("r"):13===e?this.autoSolve(.25):console.log("Key pressed: "+e),13!==e&&(clearTimeout(this.autoSolveTimer),this.lastMoveWasManual=!0)}}},{key:"getTouches",value:function(t){return t.touches||t.originalEvent.touches}},{key:"handleTouchStart",value:function(t){var e=this.getTouches(t)[0];this.xDown=e.clientX,this.yDown=e.clientY}},{key:"handleTouchMove",value:function(t){if(this.isEnabled&&this.xDown&&this.yDown){var e=t.touches[0].clientX,i=t.touches[0].clientY,n=this.xDown-e,o=this.yDown-i;if(0!==n&&0!==o){var s=Math.atan2(o,n);0<=s&&s<Math.PI/2?this.moveCallback("l"):Math.PI/2<=s&&s<=Math.PI?this.moveCallback("u"):-Math.PI<=s&&s<-Math.PI/2?this.moveCallback("r"):-Math.PI/2<=s&&s<0?this.moveCallback("d"):console.log("This should not happen - touch input angle: ".concat(s))}this.xDown=null,this.yDown=null,clearTimeout(this.autoSolveTimer),this.lastMoveWasManual=!0}}},{key:"autoSolve",value:function(t){var e=this;this.solutionLoaded&&this.isEnabled&&this.solutionIdx<this.solution.length&&(this.handleScroll({deltaY:100}),this.autoSolveTimer=setTimeout((function(){e.autoSolve(t)}),1e3*t))}},{key:"reset",value:function(){this.solutionIdx=0}}]),t}(),P=i(46),R=function(){function t(e,i,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(y.a)(this,t),this.window=e,this.loadedSound=null,this.baseRoute=i,this.audioiOS=n,this.context=o,this.listener=new M.b,this.loader=new M.c,this.sounds={}}return Object(w.a)(t,[{key:"playSound",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rand",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rand",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.2,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.4,s=function(t){return Math.floor(Math.random()*t)},a=function(t,e){return Math.random()*(e-t)+t};"rand"===e&&(e=s(this.sounds[t].length)),"rand"===i&&(i=a(n,o)),this.audioiOS.isiOS?this._playSoundiOS(t,e,i):this._playSound(t,e,i)}},{key:"_playSound",value:function(t,e,i){if(t in this.sounds){null===this.context&&(console.log("context loaded"),this.loadContext());var n,o=Object(P.a)(this.sounds[t]);try{for(o.s();!(n=o.n()).done;){var s=n.value;s.isPlaying&&s.stop()}}catch(a){o.e(a)}finally{o.f()}this.sounds[t][e].setVolume(i),this.sounds[t][e].play(),console.log("playing sound")}else console.log("Sound: ".concat(t," -- not loaded!"))}},{key:"_playSoundiOS",value:function(t,e,i){this.audioiOS.source.src="http://mmills.io/portfolio/sounds/".concat(t,"-ios/").concat(e,".wav"),this.audioiOS.controller.pause(),this.audioiOS.controller.load(),this.audioiOS.controller.play(),console.log("playing ios sound")}},{key:"loadContext",value:function(){var t=window.AudioContext||window.webkitAudioContext;this.context=new t,this.context.resume().then((function(){console.log("Playback resumed successfully")}))}},{key:"loadSound",value:function(t,e){var i=this;this.sounds[t]=[];for(var n=function(e){i.sounds[t].push(new M.a(i.listener)),i.loader.load("".concat(i.baseRoute,"/sounds/").concat(t,"/").concat(e,".ogg"),(function(n){i.sounds[t][e].setBuffer(n),i.sounds[t][e].setLoop(!1),i.sounds[t][e].setVolume(1)}))},o=0;o<e;o++)n(o)}}]),t}(),I=i(11),z=i(10),E=function(t){Object(k.a)(i,t);var e=Object(S.a)(i);function i(t,n){var o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";Object(y.a)(this,i);var c=new M.d(a[0],a[1],a[2]),l=new M.h;return l.color=new M.e(r),l.blending=M.i,(o=e.call(this,c,l)).name="player",o.position.x=t,o.position.y=s,o.position.z=n,o.size=a,o.spawnPos=o.position.clone(),o.spawnScale=o.scale.clone(),o.fallVelocity=0,o.isReadyToMove=!0,o.isFalling=!1,o.completedLevel=!1,o.lastDirection="resp",o.lastRotation=new M.m(0,0,0),o.respawnPending=!1,o.completionPending=!1,o.animations=[],o.framesLeftOfAnimation=0,o}return Object(w.a)(i,[{key:"setController",value:function(t){var e=this;this.controller=t,this.controller.moveCallback=function(t){return e.move(t)}}},{key:"move",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,o=!1;return!0===this.isReadyToMove&&("u"===t?this.animations.push([function(){e.position.x+=1/i,e.rotateOnWorldAxis(new M.m(0,0,1),-n)},i]):"d"===t?this.animations.push([function(){e.position.x-=1/i,e.rotateOnWorldAxis(new M.m(0,0,1),n)},i]):"l"===t?this.animations.push([function(){e.position.z-=1/i,e.rotateOnWorldAxis(new M.m(1,0,0),-n)},i]):"r"===t?this.animations.push([function(){e.position.z+=1/i,e.rotateOnWorldAxis(new M.m(1,0,0),n)},i]):"resp"===t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t),o}},{key:"animate",value:function(t){for(var e=0;e<this.animations.length;e++)this.animations[e][1]>0&&((this.animations[e].length<3||this.animations[e][2]<=0)&&this.animations[e][0].bind(this)(),this.animations[e][1]--,this.animations[e].length>=3&&this.animations[e][2]--);this.removeCompletedAnimations(),0===this.animations.length&&(this.completionPending?this.complete():(this.getNextAction(),this.checkFloor(t))),this.playSound=!1}},{key:"removeCompletedAnimations",value:function(){for(var t=[],e=0;e<this.animations.length;e++)this.animations[e][1]>0&&t.push(this.animations[e]);this.animations=t}},{key:"getNextAction",value:function(){this.respawnPending?(this.respawnPending=!1,this.respawn()):(this.roundPosition(),this.roundQuaternion(),this.isReadyToMove=!0)}},{key:"checkFloor",value:function(t){var e=this.getGridPosition();t.hasBlockInLocation(e)?t.hasGoalInLocation(e)&&(this.fall(.005,100),this.beginCompletion(),t.completeLevel()):(this.fall(.02),this.respawnPending=!0)}},{key:"fall",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;this.isFalling=!0,this.isReadyToMove=!1,this.animations.push([function(){e.position.y-=e.fallVelocity,e.fallVelocity+=t},i])}},{key:"getGridPosition",value:function(){return[this.position.x,this.position.z]}},{key:"roundPosition",value:function(){this.position.round()}},{key:"roundQuaternion",value:function(){var t,e,i,n;if(void 0!==this.quaternion._x&&void 0!==this.quaternion._y&&void 0!==this.quaternion._z&&void 0!==this.quaternion._w){t=L(this.quaternion._x),e=L(this.quaternion._y),i=L(this.quaternion._z),n=L(this.quaternion._w);var o=new M.k(t,e,i,n);this.setRotationFromQuaternion(o)}}},{key:"respawn",value:function(){this.fallVelocity=0,this.animations=[],this.position.copy(this.spawnPos),this.scale.copy(this.spawnScale),this.setRotationFromQuaternion(new M.k(0,0,0,1))}},{key:"beginCompletion",value:function(){var t=this;this.completionPending=!0;var e=Math.PI/4/25;this.animations.push([function(){t.rotation.y-=e},25]),this.animations.push([function(){t.scale.x*=1.1,t.scale.y*=1.1,t.scale.z*=1.1},75,25])}},{key:"complete",value:function(){this.position.x=9999999,this.position.y=9999999,this.position.z=9999999,this.completionPending=!1,this.completedLevel=!0,console.log("completion called")}}]),i}(M.g),L=function(t){return Math.abs(t)<1e-10?0:Math.abs(t)-.5<1e-10?t<0?-.5:.5:Math.abs(t)-Math.sqrt(2)/2<1e-10?t<0?-Math.sqrt(2)/2:Math.sqrt(2)/2:Math.abs(t)-1<1e-10?t<0?-1:1:void 0},B=function(t){Object(k.a)(i,t);var e=Object(S.a)(i);function i(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,1.8,.9],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";return Object(y.a)(this,i),e.call(this,t,n,o+.25*s[1],s,a)}return Object(w.a)(i,[{key:"move",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,o=!1;if(!0===this.isReadyToMove){var s,a=this.getOrientation(),r=1/i,c=0;"UPRIGHT"!==a&&("UP-DOWN"!==a||"u"!==t&&"d"!==t)&&("LEFT-RIGHT"!==a||"l"!==t&&"r"!==t)||(r*=1.5,c=.25*("UPRIGHT"===a?-1:1)*this.size[1]/i),"u"===t?(s=new M.m(0,0,-1),this.animations.push([function(){e.position.x+=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"d"===t?(s=new M.m(0,0,1),this.animations.push([function(){e.position.x-=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"r"===t?(s=new M.m(1,0,0),this.animations.push([function(){e.position.z+=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"l"===t?(s=new M.m(-1,0,0),this.animations.push([function(){e.position.z-=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"resp"===t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t,this.lastRotation=s}return o}},{key:"getOrientation",value:function(){var t=this.position.x,e=this.position.z;return t===W(t)&&e===W(e)?"UPRIGHT":t===W(t)?"LEFT-RIGHT":e===W(e)?"UP-DOWN":void 0}},{key:"checkFloor",value:function(t){var e=this.getGridPosition(),n=this.getOrientation();if("UPRIGHT"===n)return Object(I.a)(Object(z.a)(i.prototype),"checkFloor",this).call(this,t);t.hasBlockInLocation(e[0])&&t.hasBlockInLocation(e[1])||((t.hasBlockInLocation(e[0])||t.hasBlockInLocation(e[1]))&&(t.hasBlockInLocation(e[0])?(console.log("second off"),"UP-DOWN"===n?this.quickRotate(new M.m(0,0,-1)):this.quickRotate(new M.m(1,0,0),!1)):(console.log("first off"),"UP-DOWN"===n?this.quickRotate(new M.m(0,0,1)):this.quickRotate(new M.m(-1,0,0),!1))),this.fall(.02),this.respawnPending=!0)}},{key:"quickRotate",value:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,s=(i?-1:1)*t.z,a=(i?-1:1)*t.x;this.animations.push([function(){e.position.x+=.5*s/n,e.position.z+=.5*a/n},n]);var r=Math.PI/2/o;this.animations.push([function(){e.rotateOnWorldAxis(t,r)},o])}},{key:"getGridPosition",value:function(){var t=this.position.x,e=this.position.z,i=this.getOrientation();return"UPRIGHT"===i?[t,e]:"UP-DOWN"===i?[[t-.5,e],[t+.5,e]]:"LEFT-RIGHT"===i?[[t,e-.5],[t,e+.5]]:void 0}},{key:"roundPosition",value:function(){this.position.x=Math.round(2*this.position.x)/2,this.position.z=Math.round(2*this.position.z)/2}}]),i}(E),W=function(t){return~~t},A=B,F=function(t){Object(k.a)(i,t);var e=Object(S.a)(i);function i(t,n){var o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16777215,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;Object(y.a)(this,i);var l=new M.d(a,.5*a,a),h=new M.h;return h.color="cycle"===r?new M.e(0):new M.e(r),h.blending=M.i,h.transparent=!0,h.opacity=c,(o=e.call(this,l,h)).position.x=t,o.position.y=s+.325*a,o.position.z=n,"cycle"===r&&o.cycleColor(),o}return Object(w.a)(i,[{key:"getPosition",value:function(){return[this.position.x,this.position.z]}},{key:"cycleColor",value:function(){var t=this;this.material.color=new M.e(function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}()),setTimeout((function(){return t.cycleColor()}),250)}}]),i}(M.g),D=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[16777215],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1];Object(y.a)(this,t),this.tiles=[],this.goalTile=void 0,this.scale=e,this.colors=i,this.colorProb=n}return Object(w.a)(t,[{key:"loadTemplate",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var i=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){i.template=t.split("\n").map((function(t){return t.split("\t")})),i.addTiles()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setTemplate",value:function(t){this.template=t,this.addTiles()}},{key:"addTiles",value:function(){for(var t=0;t<this.template.length;t++)for(var e=0;e<this.template[t].length;e++)"x"===this.template[t][e].toLowerCase()?this.tiles.push(new F(e,t)):"s"===this.template[t][e].toLowerCase()?(void 0!==this.spawnTile&&console.log("ERROR: Multiple spawn tiles! Please fix level template"),this.spawnTile=new F(e,t,0,.9,13948116),this.tiles.push(this.spawnTile)):"g"===this.template[t][e].toLowerCase()&&(void 0!==this.goalTile&&console.log("ERROR: Multiple goal tiles! Please fix level template"),this.goalTile=new F(e,t,0,.9,"cycle",.25),this.tiles.push(this.goalTile))}},{key:"addToScene",value:function(t){var e,i=Object(P.a)(this.tiles);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.add(n)}}catch(o){i.e(o)}finally{i.f()}}},{key:"getBlockInLocation",value:function(t){var e=Math.round(t[0]),i=Math.round(t[1]);return e<0||i<0||e>=this.template[0].length||i>=this.template.length?"":this.template[i][e].toLowerCase()}},{key:"hasBlockInLocation",value:function(t){return["x","s","g"].includes(this.getBlockInLocation(t))}},{key:"hasGoalInLocation",value:function(t){return"g"===this.getBlockInLocation(t)}},{key:"getPositions",value:function(){var t,e=[],i=Object(P.a)(this.tiles);try{for(i.s();!(t=i.n()).done;){var n=t.value;e.push(n.position)}}catch(o){i.e(o)}finally{i.f()}return e}},{key:"completeLevel",value:function(){}}]),t}(),G=i(142),N=i(144),q=i(82),H=i.n(q),U=i(83),_=i.n(U);var Y=function(t){Object(k.a)(i,t);var e=Object(S.a)(i);function i(t){var n;return Object(y.a)(this,i),(n=e.call(this,t)).state={renderer:null,scene:null,camera:null,audioManager:null,floor:null,controller:null,player:null,initialMountWidth:null,initialMountHeight:null,isInitialized:!1,audioiOS:{isiOS:n.props.isiOS,controller:null,source:null},isMuted:n.props.isiOS,shouldResumeCanvas:!0},n}return Object(w.a)(i,[{key:"componentDidMount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas mounted"),this.initThreeCanvas(),window.addEventListener("resize",this.resizeCanvasToMountSize.bind(this));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas updated"),this.state.isInitialized&&(this.state.shouldResumeCanvas?this.resumeThreeCanvas():this.state.shouldResumeCanvas=!0,this.resizeCanvasToMountSize(),this.state.controller.isEnabled=this.props.isActive,this.props.isComplete&&this.state.player.completedLevel&&console.log("completed - ",this.props.level),!this.props.isComplete&&this.state.player.completedLevel&&(this.state.player.completedLevel=!1,this.state.player.respawn(),this.state.camera.reset(),this.state.controller.reset(),this.setState(this.state),console.log(this.state)));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.removeEventListener("resize",this.resizeCanvasToMountSize.bind(this)),console.log("Canvas unmounted");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"initThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(navigator.platform),this.state.initialMountWidth=this.mount.offsetWidth,this.state.initialMountHeight=this.mount.offsetHeight,e=this.state.initialMountWidth/this.state.initialMountHeight,this.state.scene=new M.l,this.state.camera=new C(new M.m(-1,1,1),this.state.scene.position.clone(),e),this.state.renderer=new M.n({alpha:!0,antialias:!0}),this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(this.state.initialMountWidth,this.state.initialMountHeight,!0),this.mount.appendChild(this.state.renderer.domElement),this.state.renderer.domElement.style.zIndex=0,i=new M.f,this.state.scene.add(i),i.position.set(-20,100,50),this.state.audioManager=new R(window,this.props.baseRoute,this.state.audioiOS),this.state.camera.add(this.state.audioManager.listener),this.state.audioManager.loadSound("block-move",4),this.state.floor=new D(.9,[11337592,2697513],[0,1]),t.next=20,this.state.floor.loadTemplate("".concat(this.props.baseRoute,"/levels/").concat(this.props.level,".tsv"));case 20:this.state.floor.addToScene(this.state.scene),this.state.controller=new T(document,this.props.isActive,"".concat(this.props.baseRoute,"/levels/solutions/").concat(this.props.level,".txt")),this.state.player=new A(this.state.floor.spawnTile.position.x,this.state.floor.spawnTile.position.z),this.state.player.setController(this.state.controller),this.state.scene.add(this.state.player),this.state.camera.follow(this.state.player),this.state.isInitialized=!0,this.setState(this.state);case 28:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"resumeThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,i,n,o=this,s=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!(s.length>0&&void 0!==s[0])||s[0],i=0,n=!0,function t(){o.props.isActive&&n&&(o.state.renderer.render(o.state.scene,o.state.camera),o.state.player.completedLevel&&(n=!1),o.state.player.playSound&&!o.state.isMuted&&o.state.audioManager.playSound("block-move"),o.state.player.completionPending&&!o.props.isComplete&&o.props.completeStageCallback(),o.state.player.animate(o.state.floor),o.state.camera.follow(o.state.player,.1),i%200===0&&e&&console.log(o.state.player.getGridPosition()),i+=1,o.state.isRunning=!0,requestAnimationFrame(t))}();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"resizeCanvasToMountSize",value:function(){var t=this.state.renderer.domElement,e=t.offsetWidth,i=t.offsetHeight,n=this.mount.offsetWidth,o=this.mount.offsetHeight;e===n&&i===o||(this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(n,o,!0),this.state.camera.aspect=n/o,this.state.camera.update(),function(t){var e=t.firstElementChild;e.style.width=t.offsetWidth,e.style.height=t.offsetHeight}(this.mount))}},{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[this.props.isActive&&Object(d.jsxs)("audio",{id:"init",ref:function(e){return t.state.audioiOS.controller=e},controls:!0,children:[Object(d.jsx)("source",{ref:function(e){return t.state.audioiOS.source=e},src:"http://mmills.io/portfolio/sounds/block-move-ios/0.wav",type:"audio/mpeg"}),"Your browser does not support the audio tag."]}),this.props.isActive&&!this.props.isComplete&&Object(d.jsx)(G.a,{id:"intro",size:"large","aria-label":"delete",onClick:function(){t.state.audioiOS.isiOS&&t.state.isMuted&&(alert("Warning: Real-time sound on iOS is experimental and may have bugs!"),t.state.audioiOS.controller.play()),t.state.isMuted=!t.state.isMuted,t.state.shouldResumeCanvas=!1,t.setState(t.state)},style:{zIndex:1e3,color:"white",top:"5rem",left:"1rem",transform:"scale(1.5)"},children:this.state.isMuted?Object(d.jsx)(H.a,{}):Object(d.jsx)(_.a,{})}),Object(d.jsxs)("div",{ref:function(e){return t.mount=e},id:this.props.level,className:"canvas-container",style:{display:this.props.isActive?"block":"none"},children:[Object(d.jsx)("h1",{id:"directions-text",style:{display:this.props.isActive&&!this.props.isComplete?"block":"none"},children:"Beat the level to unlock the page!"}),Object(d.jsx)(N.a,{variant:"contained",onClick:function(){t.state.controller.autoSolve(.25)},style:{display:this.props.isActive&&!this.props.isComplete?"block":"none",position:"fixed",margin:"auto",bottom:"2rem",left:0,right:0,textAlign:"center",zIndex:"4"},children:"Auto-solve"})]})]})}}]),i}(n.Component),V=i(146),J=i(147),K=i(145),Q=i(84),X=i.n(Q),Z=i(85),$=i.n(Z),tt=function(){return Object(d.jsx)("div",{id:"footer",children:"Copyright 2021"})},et=function(t){var e=t.Component,i=t.isActive,o=t.replayStageCallback,s=t.nextLevel,a=t.baseRoute,c=Object(n.useState)(!0),l=Object(r.a)(c,2),h=l[0],u=l[1],p=Object(b.d)(),j=Object(K.a)((function(){return{root:{display:"none",top:"4rem",position:"relative",backgroundColor:"white",padding:"2rem",paddingBottom:"5rem",transition:"opacity .3s linear","-moz-transition":"opacity .3s linear","-webkit-transition":"opacity .3s linear",zIndex:1},fade:{display:"block",opacity:0},active:{display:"block",opacity:1}}}));Object(n.useEffect)((function(){setTimeout((function(){return u(!1)}),1e3)}),[]);var m=j();return Object(d.jsx)(d.Fragment,{children:i&&Object(d.jsxs)(V.a,{className:"".concat(m.root," ").concat(h?m.fade:""," ").concat(!h&&i?m.active:""),maxWidth:"lg",style:{minHeight:"96vh"},children:[Object(d.jsx)(N.a,{variant:"contained",startIcon:Object(d.jsx)(X.a,{}),onClick:function(){o()},children:"Replay Level"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(e,{baseRoute:a}),Object(d.jsx)(J.a,{container:!0,justify:"flex-end",children:Object(d.jsx)(N.a,{variant:"contained",endIcon:Object(d.jsx)($.a,{}),onClick:function(){console.log(s),p.push(s.route)},style:{display:void 0!==s?"block":"none",right:0},children:"Next Level"})}),Object(d.jsx)(tt,{})]})})},it=function(t){var e=t.pages,i=t.completeStageCallback,o=t.replayStageCallback,s=t.baseRoute,a=t.isiOS,r=Object(b.e)().pathname,c=Object(b.d)();return Object(n.useEffect)((function(){"/"===r&&c.push("/about")})),Object(n.useEffect)((function(){e.forEach((function(t){if(r===t.route){var e=document.getElementsByTagName("html")[0];e&&(t.completed?e.style.touchAction="auto":e.style.touchAction="none")}}))})),Object(d.jsx)(d.Fragment,{children:e.map((function(t,n){return Object(d.jsxs)(d.Fragment,{children:[t.completed&&Object(d.jsx)(et,{Component:t.component,isActive:r===t.route,replayStageCallback:function(){return o(t.route)},nextLevel:e[n+1],baseRoute:s}),Object(d.jsx)(Y,{level:t.route.replace("/",""),isActive:r===t.route,completeStageCallback:function(){return i(t.route)},isComplete:t.completed,baseRoute:s,isiOS:a})]})}))})},nt=function(t){var e=Object(n.useState)(!0),i=Object(r.a)(e,2),o=i[0],s=(i[1],Object(n.useRef)());return Object(d.jsx)("div",{className:"fade-in-section ".concat(o?"is-visible":""),ref:s,children:t.children})},ot=i(152),st=i(117),at=i(162),rt=i(86),ct=i.n(rt),lt=i(87),ht=i.n(lt),ut=i(88),dt=i.n(ut),pt=i(149),bt=i(150),jt=i(151),mt=i(153),vt=i(154),ft=i(155),xt=i(156),Ot=i(148),gt=i(157),yt=i(158),wt=i(159),kt=i(49),St=i.n(kt),Mt=Object(K.a)((function(t){return{root:{padding:0},card:{},media:{height:140}}})),Ct=function(){var t=Mt(),e=Object(Ot.a)("(min-width:600px)"),i=[{year:"2016-2020",icon:Object(d.jsx)(St.a,{}),image:{title:"UF",link:"about/uf.png"},title:"B.S. in Computer Science",subtitle:"University of Florida",content:"Began pursing a BS in CS at the University of Florida"},{year:"2018-2020",icon:Object(d.jsx)(St.a,{}),image:{title:"Research",link:"about/fics.png"},title:"Undergraduate Research Assistant",subtitle:"Florida Institute of Cybersecurity",content:"Became a machine learning research assistant at FICS under Vincent Bindschadler"},{year:"2020-",icon:Object(d.jsx)(St.a,{}),image:{title:"Motorola",link:"about/motorola.jpg"},title:"Jr. Software Engineer",subtitle:"Motorola Solutions",content:"Became a full time software engineer at Motorola Solutions"},{year:"2021-",icon:Object(d.jsx)(St.a,{}),image:{title:"OMSCS",link:"about/omscs.png"},title:"M.S. in Computer Science",subtitle:"Georgia Institute of Technology",content:"Currently pursuring a masters of science in computer science at Georgia Tech"},{year:"????",icon:Object(d.jsx)(St.a,{}),title:"Future",content:"Who knows what it will hold..."}];return Object(d.jsx)(pt.a,{style:{flexGrow:0},className:t.root,align:e?"alternate":"left",children:i.map((function(i,n){return Object(d.jsxs)(bt.a,{children:[Object(d.jsx)(jt.a,{style:{flexGrow:e?1:0},children:i.year?Object(d.jsx)(ot.a,{color:"textSecondary",children:i.year}):Object(d.jsx)(ot.a,{style:{color:"white"},children:"0000"})}),Object(d.jsxs)(mt.a,{children:[Object(d.jsx)(vt.a,{color:"primary",variant:"outlined",children:Object(d.jsx)(St.a,{})}),Object(d.jsx)(ft.a,{})]}),Object(d.jsx)(xt.a,{children:Object(d.jsxs)(gt.a,{className:t.card,children:[i.image&&Object(d.jsx)(yt.a,{className:t.media,image:"/portfolio/images/"+i.image.link,title:i.image.title,style:{backgroundSize:"contain",margin:".5rem"}}),Object(d.jsxs)(wt.a,{children:[Object(d.jsx)(ot.a,{gutterBottom:!0,variant:"h5",children:i.title}),Object(d.jsx)(ot.a,{gutterBottom:!0,variant:"h6",style:{fontStyle:"italic"},children:i.subtitle}),Object(d.jsx)(ot.a,{variant:"body2",color:"textSecondary",component:"p",children:i.content})]})]})})]},n)}))})},Tt=i(164),Pt=Object(K.a)((function(){return{root:{display:"flex",padding:".5rem"}}})),Rt=function(){var t=Pt(),e=Object(Ot.a)("(min-width:900px)");return Object(d.jsxs)(gt.a,{className:t.root,style:{flexDirection:e?"row":"column"},children:[Object(d.jsx)(Tt.a,{src:"/portfolio/images/headshot.jpg",style:{objectFit:"cover",height:"auto",width:"400px",maxWidth:"100%"},alt:"Me!"}),Object(d.jsxs)(wt.a,{style:{flexGrow:1,padding:"2rem"},children:[Object(d.jsx)(ot.a,{variant:"h4",gutterBottom:!0,children:"Overview"}),Object(d.jsx)(ot.a,{variant:"h6",children:"Occupation: Software Engineer"}),Object(d.jsx)(ot.a,{variant:"h6",children:"Company: Motorola Solutions"}),Object(d.jsx)(ot.a,{variant:"h6",children:"Location: Denver, CO"}),Object(d.jsx)(ot.a,{variant:"h6",children:"Total Experience: 5+ years"}),Object(d.jsx)(ot.a,{variant:"h6",children:"Industry Experience: 1+ year"})]})]})},It=Object(K.a)((function(){return{paper:{padding:".5rem"}}})),zt=function(){var t=It(),e=[{title:"CS Interests",icon:Object(d.jsx)(ct.a,{}),interests:["Backend development","Frontend development","Machine learning"]},{title:"Extracurricular Interests",icon:Object(d.jsx)(ht.a,{}),interests:["Investing / Economics","Disc Golf","Climbing","Hiking","Running","Weightlifting"]},{title:"Languages / Frameworks",icon:Object(d.jsx)(dt.a,{}),interests:["Python - Proficient","Javascript - Experienced","HTML / CSS - Experienced","React.JS - Experienced","Git - Experienced","SQL - Experienced","Node.js - Some knowledge"]}];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ot.a,{variant:"h3",gutterBottom:!0,children:"About Me"}),Object(d.jsx)(Rt,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(nt,{children:[Object(d.jsx)(ot.a,{variant:"h4",gutterBottom:!0,children:"Objective"}),Object(d.jsx)(ot.a,{children:"To make society more productive through the use of software solutions"})]}),Object(d.jsx)("br",{}),e.map((function(e,i){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(nt,{children:Object(d.jsxs)(st.a,{className:t.paper,children:[e.icon,Object(d.jsx)(ot.a,{variant:"h4",gutterBottom:!0,children:e.title}),Object(d.jsx)("ul",{children:e.interests.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)(ot.a,{children:t})},"".concat(i,"-").concat(e))}))})]})}),Object(d.jsx)("br",{})]})})),Object(d.jsxs)(nt,{children:[Object(d.jsx)(ot.a,{variant:"h4",gutterBottom:!0,children:"Timeline"}),Object(d.jsx)(at.a,{style:{left:0},children:Object(d.jsx)(Ct,{})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Et=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ot.a,{variant:"h3",gutterBottom:!0,children:"Projects"}),Object(d.jsxs)(gt.a,{children:[Object(d.jsx)(yt.a,{style:{height:"400px"},image:"/portfolio/images/projects/poli-bias.jpg",title:"Political Bias Detector"}),Object(d.jsxs)(wt.a,{children:[Object(d.jsx)(ot.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Political Bias Detector"}),Object(d.jsx)(ot.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"This project uses a state-of-the-art GPT-2 model, hosted on a dockerized Python server on a Google cloud cluster to make predictions about political bias in text."}),Object(d.jsx)(ot.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"This model underwent reinforcement training on 86,460 tweets from 200 different US senators, using their party affiliation as the label."}),Object(d.jsx)(ot.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"In order to query the model, we built a chrome extension that allows you to highlight text and send an HTTP request to the server. The results come back within a few seconds."}),Object(d.jsxs)(ot.a,{variant:"body2",color:"textSecondary",component:"p",children:["You can find the chrome extension listed on the Chrome Web Store\xa0",Object(d.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma",style:{color:"purple",fontSize:"1rem",textDecoration:"underline"},children:"here"})]})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Lt=i(89),Bt=i(161),Wt=function(){var t=Object(n.useState)({name:"",email:"",message:""}),e=Object(r.a)(t,2),i=e[0],o=e[1],s=Object(n.useState)({name:!1,email:!1}),a=Object(r.a)(s,2),c=a[0],l=a[1],h=Object(n.useState)(!1),u=Object(r.a)(h,2),p=u[0],b=u[1],j=function(t){var e=t.target.id,n=t.target.value,s=Object(Lt.a)({},i);s[e]=n,o(s)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ot.a,{variant:"h3",gutterBottom:!0,children:"Contact"}),Object(d.jsxs)("form",{children:[Object(d.jsx)(Bt.a,{id:"name",label:"Full Name",placeholder:"Your name...",value:i.name,onChange:j,variant:"outlined",error:c.name&&""===i.name,helperText:c.name&&""===i.name&&"Name is required",fullWidth:!0,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(Bt.a,{id:"email",label:"Email",placeholder:"Your email...",value:i.email,onChange:j,variant:"outlined",error:c.email&&""===i.email,helperText:c.email&&""===i.email&&"Email is required",fullWidth:!0,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(Bt.a,{id:"message",label:"Message",placeholder:"Write something...",value:i.message,onChange:j,variant:"outlined",multiline:!0,fullWidth:!0,rows:2,rowMax:4}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),!p&&Object(d.jsx)(N.a,{variant:"contained",onClick:function(t){t.preventDefault();var e="https://script.google.com/macros/s/AKfycbzp6ZdgtfOM6Mz0BSM9KU8Gupa-pKaaJk0iGPCxzRDBb5nD4EZdb_9a8i_znB30nYIZ2w/exec";e+="?name="+encodeURI(i.name),e+="&email="+encodeURI(i.email),e+="&message="+encodeURI(i.message),""!==i.name&&""!==i.email?(fetch(e,{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"}}),b(!0)):l({name:""===i.name,email:""===i.email})},children:"Submit"}),p&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ot.a,{variant:"h6",children:"Email sent!"}),Object(d.jsx)(ot.a,{variant:"body2",children:"Thanks for contacting me! I will get back to you as soon as possible!"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)(ot.a,{variant:"body2",color:"textSecondary",component:"p",children:"Please use the contact form above or send an email to: marcusm009@gmail.com"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},At="/portfolio",Ft="0.7.9";console.log("VER: ",Ft);function Dt(){var t=!1;return/iP(hone|od|ad)/.test(navigator.platform)&&(t=!0),t}var Gt=function(){var t=Object(n.useState)({pages:[{text:"About",route:"/about",completed:!1,component:zt},{text:"Projects",route:"/projects",completed:!1,component:Et},{text:"Contact",route:"/contact",completed:!1,component:Wt}],shouldEntryPage:!0}),e=Object(r.a)(t,2),i=e[0],o=e[1];return Object(d.jsxs)(c.a,{basename:At,children:[Object(d.jsx)(l.a,{}),Object(d.jsx)(f,{baseRoute:At}),Object(d.jsx)(v,{buttons:i.pages,baseRoute:At}),Object(d.jsx)(it,{pages:i.pages,completeStageCallback:function(t){console.log(t," completed!"),i.pages.forEach((function(e,n){if(e.route===t){var s={};Object.assign(s,i),s.pages[n].completed=!0,o(s)}}))},replayStageCallback:function(t){console.log(t," - replaying!"),i.pages.forEach((function(e,n){if(e.route===t){var s={};Object.assign(s,i),s.pages[n].completed=!1,o(s)}}))},baseRoute:At,isiOS:Dt()}),Object(d.jsxs)("div",{id:"ver",style:{color:"white",position:"fixed",right:"2px",bottom:"2px",zIndex:"999"},children:["Ver: ",Ft]})]})},Nt=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,165)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;i(t),n(t),o(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(Gt,{})}),document.getElementById("root")),Nt()}},[[114,1,2]]]);
//# sourceMappingURL=main.50164867.chunk.js.map