(this["webpackJsonpyorkie-codepair"]=this["webpackJsonpyorkie-codepair"]||[]).push([[0],{215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},22:function(e,t,n){"use strict";(function(e){function a(e,t,n,a){return e.addEventListener(t,n,a)}function r(e,t,n,a){return e.removeEventListener(t,n,a)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));var o={mouseup:"touchend",mouseout:"touchend",mousedown:"touchstart",mousemove:"touchmove"},c={mouseup:"pointerup",mouseout:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},i={mouseup:"MSPointerUp",mouseout:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};function s(t,n,a,r){e.navigator.pointerEnabled?n(t,c[a],r):e.navigator.msPointerEnabled?n(t,i[a],r):(n(t,o[a],r),n(t,a,r))}}).call(this,n(55))},220:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),s=n(13),l=n.n(s),u=n(7),d=n(282),m=n(139),h=n(18),f=n(137),v=n(279),p=n(140),b=n(278),g=n(27),y=n(34),E=n(35),O=function(){function e(t){Object(y.a)(this,e),this.key=void 0,this.storage=void 0,this.key=t,this.storage=window.localStorage}return Object(E.a)(e,[{key:"getValue",value:function(e){try{return JSON.parse(this.storage[this.key])}catch(t){return e}}},{key:"setValue",value:function(e){this.storage[this.key]=JSON.stringify(e)}}]),e}();!function(e){e.Dark="dark",e.Light="light"}(a||(a={})),function(e){e.Sublime="sublime",e.Vim="vim",e.Emacs="emacs"}(r||(r={})),function(e){e.Two="2",e.Four="4",e.Eight="8"}(o||(o={}));var j=new O("$$codepair$$setting"),k=j.getValue({menu:{theme:a.Dark,codeKeyMap:r.Sublime,tabSize:o.Two}}),C=Object(g.c)({name:"setting",initialState:k,reducers:{setTheme:function(e,t){e.menu.theme=t.payload,j.setValue(e)},setCodeKeyMap:function(e,t){e.menu.codeKeyMap=t.payload,j.setValue(e)},setTabSize:function(e,t){e.menu.tabSize=t.payload,j.setValue(e)}}}),x=C.actions,w=x.setTheme,S=x.setCodeKeyMap,N=x.setTabSize,T=C.reducer,D=n(263),L=n(288),M=n(273),R=n(274),I=n(146),z=n(17),A=n(227),P=n(265),B=n(286),W=n(74),F=n.n(W),K=n(259);function V(e){var t=e.anchorEl,n=e.onClose,a=e.children,r=e.anchorOrigin,o=e.transformOrigin,c=Boolean(t);return i.a.createElement(K.a,{id:c?"simple-popover":void 0,open:c,anchorEl:t,onClose:n,anchorOrigin:r,transformOrigin:o},a)}V.defaultProps={anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}};var U,Y=n(264),H=n(223),X=Object(D.a)((function(){return{root:function(e){return{color:e.peer.metadata.color}}}}));function G(e){var t=X(e),n=e.peer;return i.a.createElement(H.a,{className:t.root},n.metadata.username)}!function(e){e.Connected="connected",e.Disconnected="disconnected"}(U||(U={}));var J=Object(g.c)({name:"peer",initialState:{peers:{}},reducers:{syncPeer:function(e,t){for(var n=t.payload,a=n.myClientID,r=n.changedPeers,o=e.peers,c=0,i=Object.keys(o);c<i.length;c++){var s=i[c];r[s]||(o[s].status=U.Disconnected)}for(var l=0,u=Object.entries(r);l<u.length;l++){var d=Object(z.a)(u[l],2),m=d[0],h=d[1];if(!o[m]||o[m].status===U.Disconnected){var f={id:m,status:U.Connected,metadata:h,isMine:a===m};e.peers[m]=f}}}}}),$=J.actions.syncPeer,q=J.reducer;function _(){var e=Object(u.c)((function(e){return e.docState.client})),t=Object(u.c)((function(e){return e.peerState.peers}));return{activePeers:Object(c.useMemo)((function(){return e?Object.values(t).filter((function(e){return e.status===U.Connected})):[]}),[e,t])}}function Q(){var e=_().activePeers;return i.a.createElement(Y.a,null,i.a.createElement(H.a,null,i.a.createElement(I.a,null,"Total ",e.length)),e.map((function(e){return i.a.createElement(G,{key:e.id,peer:e})})))}var Z=Object(D.a)((function(e){return{group:{"& > *":{cursor:"pointer"}},myAvatar:{borderColor:e.palette.secondary.main}}}));function ee(){var e=Z(),t=Object(u.c)((function(e){return e.docState.client})),n=_().activePeers,a=Object(c.useState)(),r=Object(z.a)(a,2),o=r[0],s=r[1],l=Object(c.useCallback)((function(e){e.target.getAttribute("data-id")||s(e.currentTarget)}),[s]),d=Object(c.useCallback)((function(){s(void 0)}),[s]);return t?i.a.createElement(i.a.Fragment,null,i.a.createElement(P.a,{className:e.group,max:4,onClick:l},n.map((function(t){var n=t.metadata,a=n.username,r=n.color,o=n.image;return i.a.createElement(B.a,{key:t.id,title:t.isMine?"[ME] ".concat(a):a,"data-id":t.id,arrow:!0},i.a.createElement(A.a,{alt:"Peer Image",className:t.isMine?e.myAvatar:"",style:{backgroundColor:r},src:F.a.getImage(o)}))}))),i.a.createElement(V,{anchorEl:o,onClose:d},i.a.createElement(Q,null))):null}var te=n(123),ne=n(284),ae=n(272),re=n(268),oe=n(126),ce=n.n(oe),ie=n(127),se=n.n(ie),le=n(142),ue=n(5),de=n(291),me=n(267),he=n(269),fe=n(270),ve=n(124),pe=n.n(ve),be=n(266),ge=Object(ue.a)((function(e){return Object(L.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,n=e.classes,a=e.onClose,r=Object(le.a)(e,["children","classes","onClose"]);return i.a.createElement(me.a,Object.assign({disableTypography:!0,className:n.root},r),i.a.createElement(I.a,{variant:"h6"},t),a?i.a.createElement(re.a,{"aria-label":"close",className:n.closeButton,onClick:a},i.a.createElement(pe.a,null)):null)})),ye=Object(ue.a)((function(e){return{root:{padding:e.spacing(2)}}}))(he.a),Ee=Object(ue.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(fe.a);function Oe(e){var t=e.open,n=e.onClose,a=e.className,r=e.children;return t?i.a.createElement(de.a,{onClose:n,open:t,maxWidth:"md"},i.a.createElement("div",{className:a},r)):null}Oe.defaultProps={className:""};var je=Oe,ke=n(271);function Ce(e){var t=e.timeout,n=e.show,a=e.onFadeout,r=e.children,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){return n&&(o.current=window.setTimeout((function(){a(),o.current=null}),t)),function(){o.current&&clearTimeout(o.current)}}),[n]),i.a.createElement(ke.a,{in:n},i.a.createElement("div",null,n?r:null))}Ce.defaultProps={timeout:1e3};var xe,we,Se=Ce,Ne=n(44),Te=n.n(Ne),De=n(70),Le=n(92),Me=n.n(Le),Re=n(125),Ie=n.n(Re);!function(e){e.Markdown="gfm",e.Go="go",e.JavaScript="javascript",e.Clojure="clojure",e.Dart="dart",e.Python="python",e.Ruby="ruby",e.Rust="rust"}(xe||(xe={})),function(e){e.Disconnect="disconnect",e.Connect="connect"}(we||(we={}));var ze={mode:xe.Markdown,loading:!0,errorMessage:"",status:we.Connect},Ae=Object(g.b)("doc/activate",function(){var e=Object(De.a)(Te.a.mark((function e(t,n){var a,r,o,c;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=F.a.generate(),r=a.name,o=a.animal,c=Me.a.createClient("".concat("https://api.yorkie.dev"),{metadata:{username:r,image:o,color:Ie()()}}),e.next=5,c.activate();case 5:return e.abrupt("return",{client:c});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()),Pe=Object(g.b)("doc/attach",function(){var e=Object(De.a)(Te.a.mark((function e(t,n){var a,r;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.client,r=t.doc,e.prev=1,e.next=4,a.attach(r);case 4:return r.update((function(e){e.content||e.createText("content"),e.shapes||(e.shapes=[])})),e.next=7,a.sync();case 7:return e.abrupt("return",{doc:r,client:a});case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",n.rejectWithValue(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),Be=Object(g.c)({name:"doc",initialState:ze,reducers:{deactivateClient:function(e){var t=e.client;e.client=void 0,null===t||void 0===t||t.deactivate()},createDocument:function(e,t){e.doc=Me.a.createDocument("codepairs",t.payload)},detachDocument:function(e){var t=e.doc,n=e.client;e.doc=void 0,null===n||void 0===n||n.detach(t)},attachDocLoading:function(e,t){e.loading=t.payload},setCodeMode:function(e,t){e.mode=t.payload},setStatus:function(e,t){e.status=t.payload}},extraReducers:function(e){e.addCase(Ae.fulfilled,(function(e,t){var n=t.payload;e.client=n.client})),e.addCase(Ae.rejected,(function(e,t){var n=t.payload;e.errorMessage=n})),e.addCase(Pe.fulfilled,(function(e,t){var n=t.payload;e.doc=n.doc,e.client=n.client})),e.addCase(Pe.rejected,(function(e,t){var n=t.payload;e.errorMessage=n}))}}),We=Be.actions,Fe=We.deactivateClient,Ke=We.createDocument,Ve=We.detachDocument,Ue=We.attachDocLoading,Ye=We.setCodeMode,He=We.setStatus,Xe=Be.reducer,Ge=Object(D.a)((function(){return{dialog:{borderRadius:"4px"},input:{width:"300px",padding:"12px 8px",fontSize:"18px",borderRadius:"5px",outline:"none",backgroundColor:"hsla(0,0%,100%,0.9)"}}}));function Je(){var e=Ge(),t=Object(u.c)((function(e){return e.docState.status})),n=Object(c.useState)(!1),a=Object(z.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(!1),l=Object(z.a)(s,2),d=l[0],m=l[1],h=Object(c.useRef)(null),f=window.location.href.split("?")[0],v=Object(c.useCallback)((function(){var e;null===(e=h.current)||void 0===e||e.select()}),[]),p=Object(c.useCallback)((function(){m(!0)}),[]),b=Object(c.useCallback)((function(){o(!0)}),[]),g=Object(c.useCallback)((function(){o(!1)}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,{size:"small",color:"primary",variant:"contained",startIcon:i.a.createElement(ce.a,null),onClick:b,disabled:t===we.Disconnect},"Share"),i.a.createElement(je,{open:r,onClose:g,className:e.dialog},i.a.createElement(ge,{onClose:g},"Share Code"),i.a.createElement(ye,{dividers:!0},i.a.createElement(ne.a,{my:3},i.a.createElement(I.a,null,"Anyone can access the code in real time through this URL.")),i.a.createElement(ne.a,{my:1},i.a.createElement(be.a,null,"Share this URL")),i.a.createElement(ne.a,{display:"flex"},i.a.createElement("input",{readOnly:!0,ref:h,className:e.input,value:f,onFocus:v}),i.a.createElement(te.CopyToClipboard,{text:f,onCopy:p},i.a.createElement(re.a,{color:"primary"},i.a.createElement(se.a,null))),i.a.createElement(Se,{show:d,onFadeout:function(){return m(!1)}},i.a.createElement("p",null,"Copy!")))),i.a.createElement(Ee,null,i.a.createElement(ae.a,{onClick:g,color:"primary",variant:"contained",autoFocus:!0},"Close"))))}var $e=n(129),qe=n.n($e),_e=n(128),Qe=n.n(_e),Ze=Object(D.a)((function(){return Object(L.a)({root:{width:"380px"},title:{backgroundColor:"hsla(0,0%,100%,0.1)","& > *":{fontWeight:"bold"}}})}));function et(e){var t=e.title,n=e.subTitle,a=e.content,r=Ze();return i.a.createElement("div",{className:r.root},i.a.createElement(ne.a,{px:2,py:1.5,className:r.title},i.a.createElement(I.a,{variant:"subtitle1"},t)),i.a.createElement(ne.a,{px:2,p:1},i.a.createElement(ne.a,{py:1},i.a.createElement(I.a,{variant:"body1"},n)),i.a.createElement(ne.a,{pb:2.5},i.a.createElement(I.a,{variant:"body2"},a))))}function tt(e){var t=Object(c.useState)(),n=Object(z.a)(t,2),a=n[0],r=n[1],o=e.hasLocalChanges,s=Object(c.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(c.useCallback)((function(){r(void 0)}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,{"aria-label":"doc-status",color:"secondary",startIcon:i.a.createElement(Qe.a,null),onClick:s},"Working offline"),i.a.createElement(V,{anchorEl:a,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},i.a.createElement(et,{title:o?"There are changes that couldn't be sent to Server":"All Changes saved to Server",subTitle:"This document is ready for offline use",content:"Looks like you're offline. Changes will save to this memory now, and save to Server once reconnected."})))}function nt(){var e=Object(c.useState)(),t=Object(z.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){a(e.currentTarget)}),[]),o=Object(c.useCallback)((function(){a(void 0)}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,{"aria-label":"doc-status",color:"secondary",onClick:r},i.a.createElement(qe.a,null)),i.a.createElement(V,{anchorEl:n,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},i.a.createElement(et,{title:"All Changes saved to Server",subTitle:"This document is ready for offline use",content:"You can edit this document without an internet connection. Changes will save to Server once reconnected."})))}function at(){var e=Object(u.c)((function(e){return e.docState.status})),t=Object(u.c)((function(e){return!!e.docState.doc&&e.docState.doc.hasLocalChanges()}));return e===we.Connect?i.a.createElement(nt,null):i.a.createElement(tt,{hasLocalChanges:t})}var rt=Object(D.a)((function(e){return Object(L.a)({root:{flexGrow:1},appBar:{backgroundColor:"black"},grow:{flexGrow:1},title:{fontWeight:"bold",color:e.palette.primary.main,marginRight:e.spacing(1)},items:{display:"flex","& > *":{margin:e.spacing(1)}}})}));function ot(){var e=rt();return i.a.createElement("div",{className:e.root},i.a.createElement(M.a,{position:"static",className:e.appBar},i.a.createElement(R.a,null,i.a.createElement(I.a,{variant:"h6",className:e.title},"CodePair"),i.a.createElement(at,null),i.a.createElement("div",{className:e.grow}),i.a.createElement("div",{className:e.items},i.a.createElement(Je,null),i.a.createElement(ee,null)))))}var ct=Object(c.memo)(ot),it=n(283),st=n(276),lt=n(275),ut=n(130),dt=n.n(ut),mt=Object(D.a)((function(e){return Object(L.a)({root:{minWidth:"320px",borderRadius:"4px"},header:{borderBottom:"1px solid ".concat(e.palette.text.disabled)},title:{padding:"12px 16px"},list:{padding:"12px 24px",lineHeight:"19px"},item:{display:"flex",justifyContent:"space-between",fontSize:"15px",marginTop:"12px"},itemTitle:{whiteSpace:"nowrap",display:"flex",alignItems:"center"},itemInfo:{minWidth:140,paddingLeft:"12px",border:"1px solid #aaa",borderRadius:"4px",textAlign:"left"}})})),ht=function(){var e=Object(u.b)(),t=mt(),n=Object(u.c)((function(e){return e.settingState.menu}));function c(t){return function(n){e(t(n.target.value))}}return i.a.createElement("div",{className:t.root},i.a.createElement(ne.a,null,i.a.createElement("header",{className:t.header},i.a.createElement(I.a,{className:t.title,variant:"h6"},"Settings"))),i.a.createElement("div",{className:t.list},i.a.createElement("div",{className:t.item},i.a.createElement("div",{className:t.itemTitle},"Theme"),i.a.createElement(lt.a,{className:t.itemInfo},i.a.createElement(it.a,{value:n.theme,onChange:c(w),disableUnderline:!0,displayEmpty:!0},Object.entries(a).map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return i.a.createElement(st.a,{value:a,key:a},n)}))))),i.a.createElement("div",{className:t.item},i.a.createElement("div",{className:t.itemTitle},"Key binding"),i.a.createElement(lt.a,{className:t.itemInfo},i.a.createElement(it.a,{value:n.codeKeyMap,onChange:c(S),disableUnderline:!0,displayEmpty:!0},Object.entries(r).map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return i.a.createElement(st.a,{value:a,key:a},n)}))))),i.a.createElement("div",{className:t.item},i.a.createElement("div",{className:t.itemTitle},"Tab Size"),i.a.createElement(lt.a,{className:t.itemInfo},i.a.createElement(it.a,{value:n.tabSize,onChange:c(N),disableUnderline:!0,displayEmpty:!0},Object.entries(o).map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return i.a.createElement(st.a,{value:a,key:n},"".concat(a," spaces"))})))))))},ft=Object(D.a)((function(e){return Object(L.a)({root:{padding:"6px",position:"relative"},formControl:{minWidth:140,border:"1px solid ".concat(e.palette.grey[800]),borderRadius:"4px"},selectEmpty:{paddingLeft:"12px"},rightButtonControl:{float:"right"},rightButton:{padding:"7px"}})}));function vt(){var e=ft(),t=Object(u.b)(),n=Object(u.c)((function(e){return e.docState.doc})),a=Object(u.c)((function(e){return e.docState.mode})),r=Object(c.useState)(),o=Object(z.a)(r,2),s=o[0],l=o[1];Object(c.useEffect)((function(){if(!n)return function(){};var e=n.subscribe((function(e){"remote-change"===e.type&&t(Ye(n.getRoot().mode||xe.Markdown))}));return function(){e()}}),[n]);var d=Object(c.useCallback)((function(e){if(n){var a=e.target.value;n.update((function(e){e.mode=a})),t(Ye(a))}}),[n,t]),m=Object(c.useCallback)((function(e){l(e.currentTarget)}),[]),h=Object(c.useCallback)((function(){l(void 0)}),[]);return i.a.createElement("div",{className:e.root},i.a.createElement(lt.a,{className:e.formControl},i.a.createElement(B.a,{title:"Syntax",arrow:!0},i.a.createElement(it.a,{name:"codeMode",value:a,onChange:d,className:e.selectEmpty,disableUnderline:!0,displayEmpty:!0},Object.entries(xe).map((function(e){var t=Object(z.a)(e,2),n=t[0],a=t[1];return i.a.createElement(st.a,{value:a,key:a},n)}))))),i.a.createElement("div",{className:e.rightButtonControl},i.a.createElement(B.a,{className:e.rightButton,title:"Settings",arrow:!0},i.a.createElement(re.a,{"aria-label":"settings",onClick:m},i.a.createElement(dt.a,{fontSize:"small"})))),i.a.createElement(V,{anchorEl:s,onClose:h},i.a.createElement(ht,null)))}var pt,bt=n(287),gt=n(285),yt=n(277),Et=n(49),Ot=n(131),jt=n(132),kt=n.n(jt);!function(e){e.Deactivated="deactivated",e.Activated="activated"}(pt||(pt={}));var Ct=function(){function e(t,n){Object(y.a)(this,e),this.id=void 0,this.username=void 0,this.color=void 0,this.height=void 0,this.marker=void 0,this.lineMarker=void 0,this.status=void 0,this.nameRemoveTimeMap=void 0,this.nameAnimationDelay=void 0,this.nameAnimationDuration=void 0,this.nameRemoveTime=void 0,this.id=t,this.username=n.username,this.color=n.color,this.height=0,this.status=pt.Deactivated,this.nameRemoveTimeMap=new Map,this.nameAnimationDelay=1,this.nameAnimationDuration=.2,this.nameRemoveTime=1e3*(this.nameAnimationDuration+this.nameAnimationDelay)}return Object(E.a)(e,[{key:"updateCursor",value:function(e,t){this.removeCursor(),this.status=pt.Activated;var n=e.cursorCoords(t),a=document.createElement("span");this.height=n.bottom-n.top,a.classList.add("codePair-cursor"),a.style.borderLeftColor=this.color,a.style.height="".concat(this.height,"px"),this.marker=e.setBookmark(t,{widget:a,insertLeft:!0}),this.showCursorNameReserve(a)}},{key:"updateLine",value:function(e,t,n){this.removeLine(),this.status=pt.Activated,this.lineMarker=e.getDoc().markText(t,n,{css:"background-color : ".concat(this.color,"; opacity:0.7")})}},{key:"showCursorNameReserve",value:function(e){var t=this,n=document.createElement("span");n.classList.add("codePair-name"),e.addEventListener("mouseenter",(function(){t.nameRemoveTimeMap.has(t.id)&&clearTimeout(t.nameRemoveTimeMap.get(t.id)),n.textContent=t.username,n.style.top="-".concat(t.height,"px"),n.style.backgroundColor=t.color,n.style.color=kt()(t.color,!0),n.classList.remove("text-remove"),e.appendChild(n)})),e.addEventListener("mouseleave",(function(){n.classList.add("text-remove"),n.style.animationDuration="".concat(t.nameAnimationDuration,"s"),n.style.animationDelay="".concat(t.nameAnimationDelay,"s"),t.removeNameReserve(n)}))}},{key:"removeNameReserve",value:function(e){var t=this,n=setTimeout((function(){e.parentNode.removeChild(e),t.nameRemoveTimeMap.delete(t.id)}),this.nameRemoveTime);this.nameRemoveTimeMap.set(this.id,n)}},{key:"removeCursor",value:function(){this.marker&&(this.marker.clear(),this.marker=void 0)}},{key:"removeLine",value:function(){this.lineMarker&&(this.lineMarker.clear(),this.lineMarker=void 0)}},{key:"clear",value:function(){this.removeCursor(),this.removeLine()}},{key:"isActive",value:function(){return this.status===pt.Activated}}]),e}();n(191),n(192),n(194),n(199),n(200),n(202),n(203),n(205),n(206),n(207),n(208),n(209),n(210),n(212),n(213),n(214),n(215);function xt(){var e=Object(u.c)((function(e){return e.docState.doc})),t=Object(u.c)((function(e){return e.docState.mode})),n=Object(u.c)((function(e){return e.docState.client})),r=Object(u.c)((function(e){return e.peerState.peers})),o=Object(u.c)((function(e){return e.settingState.menu})),s=Object(c.useRef)(new Map),l=Object(c.useCallback)((function(e,t){s.current.set(e,new Ct(e,t))}),[r]),d=Object(c.useCallback)((function(e){s.current.has(e)&&(s.current.get(e).clear(),s.current.delete(e))}),[]);return Object(c.useEffect)((function(){for(var e=0,t=Object.entries(r);e<t.length;e++){var n=Object(z.a)(t[e],2),a=n[0],o=n[1];s.current.has(a)&&o.status===U.Disconnected?d(a):s.current.has(a)||o.status!==U.Connected||l(a,o.metadata)}}),[r]),n&&e?i.a.createElement(Ot.UnControlled,{className:"CodeMirror",options:{mode:t,theme:o.theme===a.Dark?"monokai":"xq-light",keyMap:o.codeKeyMap,tabSize:Number(o.tabSize),lineNumbers:!0,lineWrapping:!0,autoCloseTags:!0,autoCloseBrackets:!0},editorDidMount:function(t){t.focus();var a=function(e,n){var a=s.current.get(e);null===a||void 0===a||a.updateCursor(t,n)};e.subscribe((function(e){if("remote-change"===e.type){var r,o=Object(Et.a)(e.value);try{for(o.s();!(r=o.n()).done;){var c=r.value.change.getID().getActorID();if(c!==n.getID()){if(!s.current.has(c))return;if(s.current.get(c).isActive())return;a(c,t.posFromIndex(0))}}}catch(i){o.e(i)}finally{o.f()}}}));var r=e.getRoot();r.content.onChanges((function(e){e.forEach((function(e){var r=e.actor,o=e.from,c=e.to;if("content"===e.type){var i=e.content||"";if(r!==n.getID()){var l=t.posFromIndex(o),u=t.posFromIndex(c);t.replaceRange(i,l,u,"yorkie")}}else if("selection"===e.type&&r!==n.getID()){var d=t.posFromIndex(o),m=t.posFromIndex(c);if(a(r,m),o>c){var h=[d,m];m=h[0],d=h[1]}!function(e,n,a){var r=s.current.get(e);null===r||void 0===r||r.updateLine(t,n,a)}(r,d,m)}}))})),t.setValue(r.content.getValue())},onSelection:function(t,n){if(n.origin){var a=t.indexFromPos(n.ranges[0].anchor),r=t.indexFromPos(n.ranges[0].head);e.update((function(e){e.content.select(a,r)}))}},onBeforeChange:function(t,n){if("yorkie"!==n.origin&&"setValue"!==n.origin){var a=t.indexFromPos(n.from),r=t.indexFromPos(n.to),o=n.text.join("\n");e.update((function(e){e.content.edit(a,r,o)}))}}}):null}var wt,St=n(133),Nt=n.n(St),Tt=n(134),Dt=n.n(Tt);!function(e){e[e.None=0]="None",e[e.Line=1]="Line",e[e.Eraser=2]="Eraser"}(wt||(wt={}));var Lt={isOpen:!1,tool:wt.None},Mt=Object(g.c)({name:"board",initialState:Lt,reducers:{toggleBoard:function(e){e.isOpen=!e.isOpen},setTool:function(e,t){e.tool=t.payload}}}),Rt=Mt.actions,It=(Rt.toggleBoard,Rt.setTool),zt=Mt.reducer,At=function(){function e(t){Object(y.a)(this,e),this.canvas=void 0,this.context=void 0,this.width=0,this.height=0,this.canvas=t,this.context=t.getContext("2d"),this.resize()}return Object(E.a)(e,[{key:"getCanvas",value:function(){return this.canvas}},{key:"getContext",value:function(){return this.context}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"setWidth",value:function(e,t){this.width=e,this.canvas.width=t?e*t:e,this.canvas.style.width="".concat(e,"px")}},{key:"setHeight",value:function(e,t){this.height=e,this.canvas.height=t?e*t:e,this.canvas.style.height="".concat(e,"px")}},{key:"setSize",value:function(e,t,n){this.setWidth(e,n),this.setHeight(t,n)}},{key:"clear",value:function(){this.getContext().clearRect(0,0,this.getWidth(),this.getHeight())}},{key:"resize",value:function(){var e=window.devicePixelRatio;e?(this.setSize(this.canvas.width,this.canvas.height,e),this.context.scale(e,e)):this.setSize(this.canvas.width,this.canvas.height)}}]),e}();function Pt(e,t,n){e.beginPath();var a=e.strokeStyle;e.strokeStyle=t;var r,o=!1,c=Object(Et.a)(n.points);try{for(c.s();!(r=c.n()).done;){var i=r.value;!1===o?(o=!0,e.moveTo(i.x,i.y)):e.lineTo(i.x,i.y)}}catch(s){c.e(s)}finally{c.f()}e.lineWidth=3,e.stroke(),e.strokeStyle=a}function Bt(e){return{y:e.y+8,x:e.x+6}}var Wt=n(141);function Ft(e,t){var n=e.x-t.x,a=e.y-t.y;return n*n+a*a}function Kt(e,t,n){var a=t.x,r=t.y,o=n.x-a,c=n.y-r;if(0!==o||0!==c){var i=((e.x-a)*o+(e.y-r)*c)/(o*o+c*c);i>1?(a=n.x,r=n.y):i>0&&(a+=o*i,r+=c*i)}return(o=e.x-a)*o+(c=e.y-r)*c}function Vt(e,t,n,a,r){for(var o=a,c=0,i=t+1;i<n;i+=1){var s=Kt(e[i],e[t],e[n]);s>o&&(c=i,o=s)}o>a&&(t+1<c&&Vt(e,t,c,a,r),r.push(e[c]),c+1<n&&Vt(e,c,n,a,r))}function Ut(e,t){var n=e.length-1,a=[];return a.push(e[0]),Vt(e,0,n,t,a),a.push(e[n]),a}function Yt(e,t){for(var n=e[0],a=n,r=[a],o=1,c=e.length;o<c;o+=1)Ft(n=e[o],a)>t&&(r.push(n),a=n);return a!==n&&r.push(n),r}function Ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Ut(Yt(e,t),t)}function Xt(e,t,n,a){var r,o,c={x:0,y:0,onLine1:!1,onLine2:!1},i=(a.y-n.y)*(t.x-e.x)-(a.x-n.x)*(t.y-e.y);if(0===i)return c;r=e.y-n.y,o=e.x-n.x;var s=(a.x-n.x)*r-(a.y-n.y)*o,l=(t.x-e.x)*r-(t.y-e.y)*o;return r=s/i,o=l/i,c.x=e.x+r*(t.x-e.x),c.y=e.y+r*(t.y-e.y),r>0&&r<1&&(c.onLine1=!0),o>0&&o<1&&(c.onLine2=!0),c}var Gt,Jt,$t=[];var qt,_t=function(){function e(t){Object(y.a)(this,e),this.update=void 0,this.update=t}return Object(E.a)(e,[{key:"isRecordWork",value:function(e){return e===wt.Line||e===wt.Eraser}},{key:"createShape",value:function(e,t){var n;return this.update((function(a){if(e===wt.Line){var r=function(e){return{type:"line",points:[e]}}(t);a.shapes.push(r)}else if(e===wt.Eraser){var o=function(e){return{type:"eraser",points:[e]}}(t);a.shapes.push(o)}var c=a.shapes.getLast();n=c.getID()})),n}},{key:"executeTask",value:function(e,t,n){var a=this;!function(e){Jt=function(){$t.length>0&&(e($t),$t=[])},Gt=setInterval(Jt,50)}((function(r){a.update((function(a){if(t===wt.Line){var o,c=Ht(r.map((function(e){return e.point})));(o=a.shapes.getElementByID(e).points).push.apply(o,Object(Wt.a)(c)),n(a.shapes)}else if(t===wt.Eraser){if(r.length<2)return;var i=Ht(r.map((function(e){return e.point}))),s=Bt(i[0]),l=Bt(i[i.length-1]),u=a.shapes.getElementByID(e),d=function(e,t){var n,r=Object(Et.a)(a.shapes);try{for(r.s();!(n=r.n()).done;)for(var o=n.value,c=1;c<o.points.length;c+=1){var i=Xt(e,t,o.points[c-1],o.points[c]);if(i.onLine1&&i.onLine2){a.shapes.deleteByID(o.getID());break}}}catch(s){r.e(s)}finally{r.f()}};if(u.points.length>0)d(u.points[u.points.length-1],s);d(s,l),u.points=[s,l],n(a.shapes)}}))}))}},{key:"reserveTask",value:function(e){!function(e){$t.push(e)}(e)}},{key:"flushTask",value:function(e,t,n){clearInterval(Gt),"function"===typeof Jt&&Jt(),Jt=void 0,e&&this.update((function(a){t===wt.Line?a.shapes.getElementByID(e).points.length<2&&(a.shapes.deleteByID(e),n(a.shapes)):t===wt.Eraser&&(a.shapes.deleteByID(e),n(a.shapes))}))}}]),e}(),Qt=n(22);!function(e){e[e.Drag=0]="Drag",e[e.Stop=1]="Stop"}(qt||(qt={}));var Zt=function(){function e(t,n,a){Object(y.a)(this,e),this.pointY=void 0,this.pointX=void 0,this.offsetY=void 0,this.offsetX=void 0,this.scene=void 0,this.tool=void 0,this.createId=void 0,this.dragStatus=void 0,this.update=void 0,this.options=void 0,this.worker=void 0,this.pointY=0,this.pointX=0,this.tool=wt.Line,this.dragStatus=qt.Stop,this.update=n,this.options=a,this.scene=new At(t);var r=this.scene.getCanvas().getBoundingClientRect(),o=r.y,c=r.x;this.offsetY=o,this.offsetX=c,this.init(),this.worker=new _t(this.update)}return Object(E.a)(e,[{key:"init",value:function(){this.scene.getContext().strokeStyle=this.options.color,this.drawAll=this.drawAll.bind(this),this.onmouseup=this.onmouseup.bind(this),this.onmousedown=this.onmousedown.bind(this),this.onmousemove=this.onmousemove.bind(this),Object(Qt.c)(this.scene.getCanvas(),Qt.a,"mouseup",this.onmouseup),Object(Qt.c)(this.scene.getCanvas(),Qt.a,"mouseout",this.onmouseup),Object(Qt.c)(this.scene.getCanvas(),Qt.a,"mousedown",this.onmousedown)}},{key:"destroy",value:function(){Object(Qt.c)(this.scene.getCanvas(),Qt.b,"mouseup",this.onmouseup),Object(Qt.c)(this.scene.getCanvas(),Qt.b,"mouseout",this.onmouseup),Object(Qt.c)(this.scene.getCanvas(),Qt.b,"mousedown",this.onmousedown)}},{key:"setTool",value:function(e){this.setMouseClass(e),this.tool=e}},{key:"setMouseClass",value:function(e){this.scene.getCanvas().className="",e===wt.Line?this.scene.getCanvas().classList.add("crosshair","canvas-touch-none"):e===wt.Eraser&&this.scene.getCanvas().classList.add("eraser","canvas-touch-none")}},{key:"getMouse",value:function(e){var t,n;return window.TouchEvent&&e instanceof TouchEvent?(t=e.touches[0].clientY,n=e.touches[0].clientX):(t=e.clientY,n=e.clientX),t+=window.scrollY,n+=window.scrollX,{y:t-this.offsetY,x:n-this.offsetX}}},{key:"onmousedown",value:function(e){Object(Qt.c)(this.scene.getCanvas(),Qt.a,"mousemove",this.onmousemove),this.dragStatus=qt.Drag;var t=this.getMouse(e);this.worker.isRecordWork(this.tool)&&(this.createId=this.worker.createShape(this.tool,t),this.worker.executeTask(this.createId,this.tool,this.drawAll))}},{key:"onmousemove",value:function(e){var t=this.getMouse(e);this.isOutSide(t)||this.dragStatus!==qt.Stop&&this.worker.isRecordWork(this.tool)&&this.worker.reserveTask({point:t})}},{key:"onmouseup",value:function(){Object(Qt.c)(this.scene.getCanvas(),Qt.b,"mousemove",this.onmousemove),this.dragStatus=qt.Stop,this.worker.isRecordWork(this.tool)&&(this.worker.flushTask(this.createId,this.tool,this.drawAll),this.createId=void 0)}},{key:"isOutSide",value:function(e){return(e.y<0||e.x<0||e.y>this.scene.getHeight()||e.x>this.scene.getWidth())&&(this.onmouseup(),!0)}},{key:"drawAll",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.scene;t.clear();var n,a=Object(Et.a)(e);try{for(a.s();!(n=a.n()).done;){var r=n.value;this.draw(r,t)}}catch(o){a.e(o)}finally{a.f()}}},{key:"draw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.scene;"line"===e.type?Pt(t.getContext(),this.options.color,e):"eraser"===e.type&&Pt(t.getContext(),this.options.eraserColor,e)}},{key:"clear",value:function(){this.scene.clear()}}]),e}();n(216);function en(e){var t=e.width,n=e.height,a=Object(c.useRef)(null),r=Object(c.useRef)(null),o=Object(u.c)((function(e){return e.docState.doc})),s=Object(u.c)((function(e){return e.boardState.tool}));return Object(c.useEffect)((function(){if(!a.current||!o)return function(){};var e={color:Nt.a[500],eraserColor:Dt.a[400]};a.current.width=t,a.current.height=n;var c=new Zt(a.current,o.update.bind(o),e);return r.current=c,r.current.setTool(s),r.current.drawAll(o.getRoot().shapes),function(){c.destroy()}}),[t,n,o,s]),Object(c.useEffect)((function(){if(!o)return function(){};var e=o.subscribe((function(e){var t;"remote-change"===e.type&&(null===(t=r.current)||void 0===t||t.drawAll(o.getRoot().shapes))}));return function(){e()}}),[o]),Object(c.useEffect)((function(){var e;null===(e=r.current)||void 0===e||e.setTool(s)}),[o,s]),i.a.createElement("canvas",{ref:a})}var tn=n(136),nn=n.n(tn),an=n(135),rn=n.n(an),on=n(85);function cn(e){var t=e.fontSize;return i.a.createElement(on.a,{fontSize:t},i.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 480.001 480.001"},i.a.createElement("g",null,i.a.createElement("g",null,i.a.createElement("path",{d:"M333.142,350.846c0.115-0.115,0.215-0.239,0.323-0.357l129.681-129.706c10.878-10.878,16.864-25.368,16.855-40.8 c-0.01-15.409-5.999-29.865-16.854-40.694l-97.844-97.874c-10.853-10.845-25.326-16.817-40.75-16.817 c-15.426,0-29.895,5.974-40.741,16.82L16.855,308.329C5.974,319.21-0.012,333.713,0,349.168 c0.013,15.425,6.002,29.884,16.854,40.7l62.592,62.606c0.061,0.061,0.127,0.112,0.188,0.171c0.174,0.165,0.349,0.331,0.534,0.483 c0.082,0.067,0.171,0.126,0.255,0.19c0.175,0.135,0.349,0.271,0.532,0.395c0.07,0.047,0.145,0.085,0.215,0.13 c0.205,0.131,0.412,0.26,0.627,0.376c0.051,0.026,0.103,0.048,0.154,0.074c0.239,0.123,0.482,0.241,0.732,0.346 c0.033,0.014,0.067,0.024,0.101,0.037c0.269,0.108,0.54,0.208,0.819,0.293c0.034,0.011,0.07,0.017,0.104,0.027 c0.276,0.081,0.556,0.154,0.841,0.211c0.082,0.017,0.165,0.023,0.247,0.038c0.239,0.041,0.479,0.084,0.724,0.107 c0.33,0.033,0.663,0.051,0.998,0.051h137.91h159.308c5.522,0,10-4.478,10-10c0-5.522-4.478-10-10-10H248.566l84.22-84.236 C332.904,351.06,333.027,350.96,333.142,350.846z M220.285,435.404H90.66l-59.675-59.689 c-7.076-7.054-10.977-16.487-10.985-26.563c-0.008-10.106,3.897-19.582,10.996-26.681l129.825-129.803l151.091,151.091 L220.285,435.404z M174.965,178.527L297.953,55.56c7.069-7.069,16.516-10.963,26.6-10.963c10.085,0,19.536,3.895,26.609,10.962 l97.85,97.88c7.08,7.063,10.982,16.493,10.989,26.557c0.006,10.085-3.899,19.547-10.998,26.645l-122.95,122.974L174.965,178.527z"})))))}var sn=Object(D.a)((function(e){return Object(L.a)({root:{display:"flex",flexDirection:"column"},button:{marginLeft:5,padding:7},select:{marginLeft:5,padding:7,color:e.palette.primary.main}})}));function ln(){var e=sn(),t=Object(u.b)(),n=Object(u.c)((function(e){return e.boardState.tool})),a=function(e){return function(){t(It(e))}};return i.a.createElement("div",{className:e.root},i.a.createElement(B.a,{title:"Code",arrow:!0,className:n===wt.None?e.select:e.button},i.a.createElement(re.a,{"aria-label":"Code",onClick:a(wt.None)},i.a.createElement(rn.a,{fontSize:"small"}))),i.a.createElement(B.a,{title:"Pencel",arrow:!0,className:n===wt.Line?e.select:e.button},i.a.createElement(re.a,{"aria-label":"Pencel",onClick:a(wt.Line)},i.a.createElement(nn.a,{fontSize:"small"}))),i.a.createElement(B.a,{title:"Eraser",arrow:!0,className:n===wt.Eraser?e.select:e.button},i.a.createElement(re.a,{"aria-label":"eraser",onClick:a(wt.Eraser)},i.a.createElement(cn,{fontSize:"small"}))))}var un=110,dn=Object(D.a)((function(){return Object(L.a)({root:{flexGrow:1,display:"flex"},editor:{width:"calc(100% - ".concat(45,"px)")},codeEditor:{width:"100%",height:"calc(100vh - ".concat(un,"px)")},canvas:{top:un,height:"calc(100vh - ".concat(un,"px)"),width:"calc(100% - ".concat(45,"px)"),position:"fixed",zIndex:function(e){return e===wt.None?1:10}}})}));function mn(e){var t=e.tool,n=dn(t),a=Object(c.useState)(0),r=Object(z.a)(a,2),o=r[0],s=r[1],l=Object(c.useState)(0),u=Object(z.a)(l,2),d=u[0],m=u[1],h=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(){var e;if(h.current){var t=null===(e=h.current)||void 0===e?void 0:e.getBoundingClientRect();s(t.width),m(t.height)}};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),i.a.createElement("div",{className:n.root},i.a.createElement("div",{className:n.editor,ref:h},i.a.createElement("div",{className:n.codeEditor},i.a.createElement(xt,null)),i.a.createElement("div",{className:n.canvas},i.a.createElement(en,{width:o,height:d}))),i.a.createElement(ln,null))}var hn=Object(D.a)((function(){return Object(L.a)({loading:{display:"flex",height:"calc(100vh - ".concat(un,"px)"),alignItems:"center",justifyContent:"center"}})})),fn=function(e){var t=e.docKey,n=hn(),a=Object(u.b)(),r=Object(u.c)((function(e){return e.docState.client})),o=Object(u.c)((function(e){return e.docState.doc})),s=Object(u.c)((function(e){return e.docState.status})),l=Object(u.c)((function(e){return e.boardState.tool})),d=Object(u.c)((function(e){return e.docState.loading})),m=Object(u.c)((function(e){return e.docState.errorMessage}));return Object(c.useEffect)((function(){return a(Ae()),function(){a(Fe())}}),[]),Object(c.useEffect)((function(){if(!r||!o)return function(){};var e=r.subscribe((function(e){if("peers-changed"===e.type){var t=o.getKey().toIDString(),n=e.value[t];a($({myClientID:r.getID(),changedPeers:n}))}s===we.Connect&&("status-changed"===e.type&&"deactivated"===e.value||"stream-connection-status-changed"===e.type&&"disconnected"===e.value||"document-sync-result"===e.type&&"sync-failed"===e.value)?a(He(we.Disconnect)):s===we.Disconnect&&("peers-changed"===e.type||"documents-changed"===e.type||"status-changed"===e.type&&"activated"===e.value||"stream-connection-status-changed"===e.type&&"connected"===e.value||"document-sync-result"===e.type&&"synced"===e.value)&&a(He(we.Connect))}));return function(){e()}}),[r,o,s]),Object(c.useEffect)((function(){return a(Ke(t)),function(){a(Ve())}}),[t]),Object(c.useEffect)((function(){function e(){return(e=Object(De.a)(Te.a.mark((function e(){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&o){e.next=2;break}return e.abrupt("return");case 2:return a(Ue(!0)),e.next=5,a(Pe({client:r,doc:o}));case 5:a(Ye(o.getRoot().mode||xe.Markdown)),a(Ue(!1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){a(Ue(!0))}}),[t,r,o]),m?i.a.createElement("div",null,i.a.createElement(bt.a,{open:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(gt.a,{severity:"warning"},m||"fail to attach document"))):d?i.a.createElement(ne.a,{className:n.loading},i.a.createElement(yt.a,{color:"inherit"})):i.a.createElement(mn,{tool:l})},vn=Object(D.a)((function(){return Object(L.a)({root:{flexGrow:1}})}));function pn(e){var t=vn(),n=e.match.params.docKey;return i.a.createElement("div",{className:t.root},i.a.createElement(ct,null),i.a.createElement(vt,null),i.a.createElement(fn,{docKey:n}))}n(217);var bn=function(){var e=Object(u.c)((function(e){return e.settingState.menu})),t=Object(c.useMemo)((function(){return Object(p.a)({palette:{type:e.theme===a.Dark?"dark":"light",primary:{main:"#d8b01a"},secondary:{main:"#e6b602"}}})}),[e]),n=Object(c.useCallback)((function(){return i.a.createElement(h.a,{to:"/".concat(Math.random().toString(36).substring(7))})}),[]);return i.a.createElement(b.a,{theme:t},i.a.createElement(v.a,null),i.a.createElement(f.a,null,i.a.createElement(h.b,{path:"/",exact:!0,render:n}),i.a.createElement(h.b,{path:"/:docKey",exact:!0,component:pn})))},gn=n(26),yn=Object(gn.c)({docState:Xe,peerState:q,settingState:T,boardState:zt}),En=Object(g.a)({reducer:yn,middleware:Object(g.d)({serializableCheck:{ignoredActions:["doc/attach/fulfilled","doc/activate/fulfilled"],ignoredPaths:["docState.client","docState.doc"]},immutableCheck:{ignoredPaths:["docState.client","docState.doc"]}})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a({dsn:"https://d287d6df8c6f423189266360055e6ca7@o553194.ingest.sentry.io/5680102",release:"yorkie-codepair@".concat("dbb6d4f"),integrations:[new m.a.BrowserTracing],tracesSampleRate:1}),l.a.render(i.a.createElement(u.a,{store:En},i.a.createElement(bn,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[220,1,2]]]);
//# sourceMappingURL=main.d2f43012.chunk.js.map