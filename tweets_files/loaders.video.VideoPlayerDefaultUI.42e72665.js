(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{"0W/e":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("rHpw");const n=e=>1===e?{height:r.a.theme.spacesPx.xxLarge,width:r.a.theme.spacesPx.xxLarge}:{height:r.a.theme.spacesPx.xLarge,width:e*r.a.theme.spacesPx.xLarge}},PEva:function(e,t,a){"use strict";a.r(t);a("IAdD");var r=a("ERkP"),n=a("Zl35"),l=(a("kYxP"),a("KEM+")),i=a.n(l),s=a("+xEG"),o=a("aoyV"),c=a("kCRK"),u=a("fZNH"),m=a("ub6r"),p=a("0nHQ"),d=a("USG3"),h=a("Q0n6"),b=a("5VhU"),y=a("hhMf"),f=a("Ur4q"),E=a("oH2E"),S=a("mNIZ"),g=a("MWbm"),v=a("ReFq"),w=a("VLhD");class x extends r.PureComponent{constructor(...e){super(...e),i()(this,"_renderWithHideControls",e=>{var t,a;const{containerRef:n,fullscreenAdsDisabledOnIOS:l,guestsState:i,onScribeEvent:y,playerApi:x,playerDisplayOptions:A,playerState:C,poster:R,showWatchAgain:k}=this.props;if(!x||!C)return null;const O=Object(h.e)(C),T=(null==O?void 0:O.contentType)===c.a.GIF,_="PLAY_REQUESTED"!==(null==(t=C.controls)?void 0:t.playState),P=k&&C.tracksFinished,{Observer:L,observed:I}=e,F=Object(w.c)(C,I,w.b),j=!!C.error,N=F&&C.isPreview,D=!(!F||!(null==O?void 0:O.isLive)),B=!(null==A?void 0:A.hideLeftBadges)&&(T||N||D),M=!(null==A?void 0:A.hideRightBadges)&&F,W=!(null==A?void 0:A.hidePosterImage),H=null==(a=C.controls)?void 0:a.isPosterShown;return r.createElement(u.a,{playerState:C},r.createElement(L,{click:!0,interactionKey:w.a.Root,mousemove:!0,mouseover:!0},j?null:r.createElement(r.Fragment,null,r.createElement(f.a,{hideControls:F,isTouchOnlyUI:w.b,playerApi:x,playerDisplayOptions:A,playerState:C}),W&&!P&&r.createElement(E.a,{imageSrc:R,playerApi:x,playerState:C,withPlayButton:_}),r.createElement(o.a,{playerState:C}),!T&&k&&r.createElement(v.a,{onScribeEvent:y,playerApi:x,playerState:C}),r.createElement(b.a,{guestsState:i,playerState:C}),!T&&r.createElement(L,{focus:!0,interactionKey:w.a.VideoCTA,mouseover:!0},r.createElement(d.a,{show:!F},r.createElement(S.a,{playerApi:x,playerState:C}))),!T&&!H&&r.createElement(r.Fragment,null,r.createElement(L,{focus:!0,interactionKey:w.a.A11YHook},r.createElement(g.a,{accessible:!0})),r.createElement(L,{focus:!0,interactionKey:w.a.ControlBar,mouseover:!0,touch:!0},r.createElement(m.a,{containerRef:n,fullscreenAdsDisabledOnIOS:l,hideControls:F,playerApi:x,playerState:C,publisherDisplayName:null==O?void 0:O.publisherDisplayName,publisherProfileImageUrl:null==O?void 0:O.publisherProfileImageUrl,showScrubber:"ad"!==(null==O?void 0:O.displayType)&&!(null==O?void 0:O.isLive)}))),r.createElement(d.a,{show:B},r.createElement(s.a,{playerDisplayOptions:A,playerState:C,position:"left"})),r.createElement(d.a,{show:M},r.createElement(s.a,{playerDisplayOptions:A,playerState:C,position:"right"}))),r.createElement(d.a,{show:j},j&&r.createElement(p.a,{imageSrc:R,playerApi:x,playerState:C}))))})}render(){const{playerApi:e,playerState:t}=this.props;return e&&t?r.createElement(y.a,null,r.createElement(y.a.Context.Consumer,null,this._renderWithHideControls)):null}}var A=x,C=a("t62R"),R=a("Wms4"),k=a("vCAy"),O=a("w05h"),T=a("N2PN"),_=a("dPHj"),P=a("aNKf"),L=a("/yvb"),I=a("0W/e"),F=a("Lsrn"),j=a("k/Ka");const N=(e={})=>Object(j.a)("svg",Object.assign({},e,{style:[F.a.root,e.style],viewBox:"0 0 24 24"}),r.createElement("g",null,r.createElement("path",{d:"M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z"})));N.metadata={width:24,height:24};var D=N,B=a("cm6r"),M=a("fs1G"),W=a("rHpw"),H=a("U+bB");const U=W.a.create(({colors:e,borderRadii:t,borderWidths:a,spaces:r})=>({thumbnail:{backgroundColor:e.translucentBlack77,borderRadius:t.small,display:"flex",flexDirection:"row",overflow:"hidden",opacity:1},thumbnailRtl:{flexDirection:"row-reverse"},thumbnailFocused:{boxShadow:`0 0 0 ${a.medium} ${e.white}`,outlineStyle:"none"},countdownTime:{paddingHorizontal:r.xxSmall,minWidth:"1em",display:"flex",alignItems:"center",justifyContent:"center",fontVariant:["tabular-nums"]},iconLeftMargin:{marginLeft:"0.5em"}}));var V=({onClick:e})=>{const{playerState:t,aspectRatio:a}=r.useContext(n.b.PeriodicContext);if(!t)return null;const l=Object(h.e)(t);if(!l||l.displayType!==c.c.AD)return null;const i=l.durationMs,s=i<7e3,o=(s?i:5e3)-(l.currentTimeMs||0),u=o>250,m=o<0,p=Object(h.d)(l)||0,b=Object(h.f)(l)||0,y=(s?b:5)-p,f=Object(O.m)({seconds:Object(O.q)(y)});return r.createElement(B.a,{accessibilityLabel:m?O.l:f,accessibilityRole:"button",accessible:!0,interactive:!0,interactiveStyles:null,onClick:m&&e?e:M.a,testID:"ControlBar-containerView"},e=>r.createElement(r.Fragment,null,!m&&r.createElement(d.a,{show:u},r.createElement(g.a,{style:[U.thumbnail,!1,e.isFocused&&U.thumbnailFocused],testID:"ControlBar-videoThumbnail"},r.createElement(C.c,{color:"white",size:"small",style:U.countdownTime},y),r.createElement(H.a,{source:t.posterImage,style:Object(I.a)(a)}))),r.createElement(d.a,{show:m},r.createElement(L.a,{accessible:!1,interactivityState:e,pointerEvents:"auto",size:"normalCompact",testID:"ControlBar-skipButton",type:"onMedia"},r.createElement(C.c,{weight:"normal"},O.k),r.createElement(D,{style:U.iconLeftMargin})))))},z=a("aITJ"),Y=a("kRXa"),K=a("BVo1"),G=a("wtsM"),X=a("5Ixf"),q=a("AtEG"),$=a("NnQ9"),Q=a("p6DB");const J={CAPTIONS:"PrerollControlBar-Captions",FULLSCREEN:"PrerollControlBar-Fullscreen"};class Z extends r.Component{constructor(...e){super(...e),i()(this,"_parentRef",r.createRef()),i()(this,"_renderActionButton",(e,t)=>{const{isPlaying:a,controls:n}=t,{play:l,pause:i}=e,s=Object(h.e)(t);return!s||s.isLive?null:a||n&&"PLAY_REQUESTED"===n.playState?r.createElement(T.a,{accessibilityLabel:G.d,hoverLabelPreferredHorizontalOrientation:"end",icon:r.createElement(X.a,null),onPress:i}):r.createElement(T.a,{accessibilityLabel:G.e,hoverLabelPreferredHorizontalOrientation:"end",icon:r.createElement(q.a,null),onPress:l})}),i()(this,"_renderAdText",()=>r.createElement(_.a,null,O.o)),i()(this,"_renderTimePlayed",()=>r.createElement(n.a,{periodic:!0},({playerState:e})=>{const t=Object(h.e)(e),a=Object(h.d)(t),n=Object(h.f)(t);return t&&"number"==typeof a&&n&&!t.isLive?r.createElement(_.a,null,`${Object(h.b)(a)} / ${Object(h.b)(n)}`):null})),i()(this,"_renderVolumeControls",(e,t)=>{const{isMuted:a,volume:n}=t,{mute:l,unmute:i,setVolume:s}=e,o=a?i:l,c=a?G.g:G.c;return r.createElement(Y.a,{accessibilityLabelIcon:c,accessibilityLabelSlider:G.h,isMuted:a,onMuteToggle:o,onSliderChange:this._setVolumePercent(s),volumePercent:100*n})}),i()(this,"_setVolumePercent",e=>t=>{e(t/100)}),i()(this,"_renderFullScreenButton",(e,t)=>{const{fullscreen:a}=t;return a.isFullscreen?r.createElement(T.a,{accessibilityLabel:G.b,hoverLabelPreferredHorizontalOrientation:"start",icon:r.createElement(te,{isFullscreen:a.isFullscreen}),onPress:this._exitFullScreen(e)}):r.createElement(T.a,{accessibilityLabel:G.a,hoverLabelPreferredHorizontalOrientation:"start",icon:r.createElement(te,{isFullscreen:a.isFullscreen}),onPress:this._requestFullScreen(e)})}),i()(this,"_requestFullScreen",e=>()=>{e.fullScreen(this.props.containerRef)}),i()(this,"_exitFullScreen",e=>()=>e.exitFullScreen()),i()(this,"_renderSkipAffordance",()=>r.createElement(g.a,{pointerEvents:"none",style:ee.skipAffordance},r.createElement(V,null)))}render(){const{playerApi:e,playerState:t}=this.props;if(!e||!t)return null;const a=z.a.isIOS(),n=t.fullscreen.isFullscreen;return r.createElement(y.a.ObserverContext.Consumer,null,l=>r.createElement(g.a,{ref:this._parentRef,style:ee.root},r.createElement(P.a,{colors:[W.a.theme.colors.transparent,W.a.theme.colors.translucentBlack77],style:K.d},r.createElement(g.a,{style:K.c},r.createElement(g.a,{style:K.a},this._renderActionButton(e,t),r.createElement(g.a,{style:[K.g.flexRow,K.g.flexShrink]},this._renderAdText())),r.createElement(g.a,{style:K.b},this._renderTimePlayed(),this._renderVolumeControls(e,t),!a&&r.createElement(l,{focus:!0,interactionKey:J.FULLSCREEN,interactionTimeoutMs:0,mouseover:!0},this._renderFullScreenButton(e,t)),n&&this._renderSkipAffordance())))))}}const ee=W.a.create(e=>({root:{writingDirection:"ltr",cursor:"auto",width:"100%"},skipAffordance:{marginLeft:e.spaces.xSmall,visibility:"hidden"}}));function te({style:e,isFullscreen:t}){const{hidden:a,shown:n}=ae;return r.createElement(r.Fragment,null,r.createElement($.a,{style:t?a:n}),r.createElement(Q.a,{style:t?n:a}))}const ae={hidden:{display:"none",height:"1.5em"},shown:{display:"block",height:"1.5em"}};var re=Z,ne=a("oSwX");class le extends r.PureComponent{constructor(...e){super(...e),i()(this,"_buildMessage",(e,t)=>{switch(e){case c.d.watch_now:return t?Object(O.e)({advertiserName:t}):O.j;case c.d.shop:return t?Object(O.c)({advertiserName:t}):O.h;case c.d.see_more:return t?Object(O.b)({advertiserName:t}):O.g;case c.d.go_to:return t?Object(O.a)({advertiserName:t}):O.f;case c.d.visit_site:default:return t?Object(O.d)({advertiserName:t}):O.i}}),i()(this,"_handlePress",(e,t)=>()=>{e.callToActionClicked(),window.open(t,"_blank")})}componentDidMount(){const{playerApi:e}=this.props;e&&e.callToActionImpression()}render(){const{playerApi:e,advertiserName:t,avatarUri:a,ctaType:n,ctaUrl:l}=this.props;if(!e)return null;const i=this._buildMessage(n,t);return r.createElement(L.a,{accessibilityLabel:i,icon:a?r.createElement(ne.default,{size:"medium",style:ie.avatar,uri:a}):void 0,onPress:this._handlePress(e,l),size:"small",style:ie.root,type:"onMedia"},i)}}const ie=W.a.create(e=>({root:{position:"absolute",left:e.spaces.xSmall,top:e.spaces.xSmall},avatar:{borderColor:e.colors.white,backgroundColor:e.colors.white,borderWidth:e.borderWidths.small,boxShadow:"0 0 0 0.1px "+e.colors.white}}));var se=le;const oe=W.a.create(e=>({root:{position:"absolute",top:0,left:0,width:"100%"},gradientContainer:{padding:e.spaces.small},flexRow:{alignItems:"center",flexDirection:"row"},rightSpacing:{marginRight:e.spaces.xxSmall}}));var ce=({children:e})=>r.createElement(g.a,{style:oe.root},r.createElement(P.a,{colors:[W.a.theme.colors.translucentBlack77,W.a.theme.colors.transparent],style:oe.gradientContainer},r.createElement(g.a,{style:oe.flexRow},r.Children.toArray(e).map((e,t,{length:a})=>{const n="LinearGradient-children-"+t,l=t<a-1?oe.rightSpacing:"";return r.createElement(g.a,{key:n,style:l},e)}))));class ue extends r.Component{constructor(...e){super(...e),i()(this,"state",{showControlBar:!1,stackedLabels:!1}),i()(this,"_durationLabelRef",r.createRef()),i()(this,"_descriptionLabelRef",r.createRef()),i()(this,"_handleLayout",()=>{var e,t;const a=null==(e=this._durationLabelRef)?void 0:e.current,r=null==(t=this._descriptionLabelRef)?void 0:t.current;a&&r&&a.measure((e,t)=>{r.measure((e,a)=>{t!==a?this.setState({stackedLabels:!0}):this.setState({stackedLabels:!1})})})}),i()(this,"_renderWithIntentionContext",e=>{const{containerRef:t,onSkip:a,playerApi:n,playerState:l}=this.props;if(!n||!l)return null;const i=Object(h.e)(l),s=null==i?void 0:i.advertiserProfileImageUrl,o=null==i?void 0:i.advertiserName,c=null==i?void 0:i.cta,{Observer:u,observed:m}=e,p=Object(w.c)(l,m,w.b),b=l.fullscreen.isFullscreen;return r.createElement(r.Fragment,null,c?r.createElement(se,{advertiserName:o,avatarUri:s,ctaType:c.type,ctaUrl:c.url,playerApi:n}):r.createElement(ce,null,s&&r.createElement(ne.default,{size:"medium",style:me.avatarBorder,uri:s}),o&&r.createElement(C.c,{color:"white",weight:"bold"},o)),r.createElement(d.a,{show:p},r.createElement(g.a,{style:me.bottomContentContainer},r.createElement(g.a,{style:[me.bottomContentRow,me.rowBottomSpace,!1]},this._renderLabels(!1),r.createElement(g.a,{style:[me.skipThumbnail,me.alignRight,me.hidden]},r.createElement(V,null))))),r.createElement(g.a,{style:me.bottomContentContainer},!b&&r.createElement(g.a,{style:[me.bottomContentRow,!1]},r.createElement(g.a,{style:[me.skipThumbnail,me.skipThumbnailAbsolute],testID:pe.floatSkipThumbnail},r.createElement(V,{onClick:a}))),r.createElement(g.a,{style:me.bottomContentRow},r.createElement(g.a,{style:me.forceFullWidth},r.createElement(u,{focus:!0,interactionKey:w.a.A11YHook},r.createElement(g.a,{accessible:!0})),r.createElement(d.a,{show:!p},r.createElement(u,{focus:!0,interactionKey:w.a.ControlBar,mouseover:!0,touch:!0},r.createElement(re,{containerRef:t,playerApi:n,playerState:l}))))),b&&r.createElement(g.a,{style:[me.skipThumbnail,me.skipThumbnailAbsolute],testID:pe.inlineSkipThumbnail},r.createElement(V,{onClick:a}))))}),i()(this,"_renderLabels",e=>r.createElement(n.a,{periodic:!0},({playerState:t})=>{const a=Object(h.e)(t),n=Object(h.f)(a),l=Object(h.d)(a)||0,i=n?n-l:null,s=a&&"number"==typeof i&&!a.isLive?r.createElement(g.a,{ref:this._durationLabelRef},r.createElement(R.a,{key:"PrerollVideoOverlay-DurationLabel",style:[k.b.label,k.b.spaceRight,k.b.borderRadiusLeft,this.state.stackedLabels&&k.b.borderRadiusRight,this.state.stackedLabels&&me.labelBottomSpace]},r.createElement(C.c,{numberOfLines:1},Object(h.b)(i)))):null,o=r.createElement(g.a,{ref:this._descriptionLabelRef},r.createElement(R.a,{key:"PrerollVideoOverlay-DescriptionLabel",style:[k.b.label,k.b.spaceRight,k.b.borderRadiusRight,this.state.stackedLabels&&k.b.borderRadiusLeft]},r.createElement(C.c,{numberOfLines:1},O.o))),c=[me.labelContainer,me.alignLeft],u=[me.labelContainer,me.alignRight,me.flexRowReverse];return r.createElement(g.a,{onLayout:this._handleLayout,pointerEvents:"none",style:e?u:c},s,o)}))}render(){const{playerApi:e,playerState:t}=this.props;return e&&t?r.createElement(y.a.Context.Consumer,null,this._renderWithIntentionContext):null}}const me=W.a.create(e=>({avatarBorder:{borderColor:e.colors.white,backgroundColor:e.colors.white,borderWidth:e.borderWidths.small,boxShadow:"0 0 0 0.1px "+e.colors.white},bottomContentContainer:{flexWrap:"wrap",flexDirection:"row",position:"absolute",bottom:0,width:"100%"},bottomContentRow:{alignItems:"flex-end",flexWrap:"nowrap",flexDirection:"row",flexGrow:1,flexShrink:0,justifyContent:"space-between",width:"100%"},rowBottomSpace:{marginBottom:e.spaces.xSmall},forceFullWidth:{width:"100%"},labelBottomSpace:{marginBottom:e.spaces.micro},alignLeft:{marginLeft:e.spaces.xSmall},alignRight:{marginRight:e.spaces.xSmall},labelContainer:{justifyContent:"flex-start",flexWrap:"wrap",flexGrow:1,flexShrink:1,flexBasis:"auto",flexDirection:"row"},skipThumbnail:{flexGrow:0,flexShrink:0,flexBasis:"auto",alignItems:"flex-end"},skipThumbnailAbsolute:{position:"absolute",bottom:e.spaces.xSmall,right:e.spaces.xSmall},flexRowReverse:{flexDirection:"row-reverse"},flexWrap:{flexWrap:"wrap",justifyContent:"space-between"},hidden:{visibility:"hidden"}})),pe={floatSkipThumbnail:"float-SkipThumbnail",inlineSkipThumbnail:"inline-SkipThumbnail"};var de=ue,he=a("uz49");class be extends r.PureComponent{constructor(...e){super(...e),i()(this,"state",{wasPrerollSkipped:!1}),i()(this,"_renderWithRedesignedPrerollUx",e=>{const{playerApi:t,playerState:a,prerollCustomContextMenuDisabled:l,poster:i}=this.props;if(!t||!a)return null;const s=Object(h.e)(a),o=(null==s?void 0:s.displayType)===c.c.AD&&(null==s?void 0:s.playbackCompleted);if(this.state.wasPrerollSkipped||o)return r.createElement(n.a,null,({aspectRatio:e})=>{const t=i||a.posterImage;return r.createElement(he.a,{aspectRatio:e,imageSrc:t,onTransitionComplete:this._handleTransitionAnimationComplete})});return(null==s?void 0:s.displayType)===c.c.AD&&l?this._renderPrerollVideo(e):r.createElement(u.a,{playerState:a},this._renderPrerollVideo(e))}),i()(this,"_renderPrerollVideo",e=>{var t;const{containerRef:a,playerApi:n,playerDisplayOptions:l,playerState:i,poster:s,showWatchAgain:c}=this.props;if(!n||!i)return null;const{Observer:u,observed:m}=e,h="PLAY_REQUESTED"!==(null==(t=i.controls)?void 0:t.playState),b=c&&i.tracksFinished,y=Object(w.c)(i,m,w.b),S=!!i.error,g=!(null==l?void 0:l.hidePosterImage);return r.createElement(u,{click:!0,interactionKey:w.a.Root,mousemove:!0,mouseover:!0},S?null:r.createElement(r.Fragment,null,r.createElement(f.a,{hideControls:y,isTouchOnlyUI:w.b,playerApi:n,playerDisplayOptions:l,playerState:i}),g&&!b&&r.createElement(E.a,{imageSrc:s,playerApi:n,playerState:i,withPlayButton:h}),r.createElement(o.a,{playerState:i}),r.createElement(de,{containerRef:a,onSkip:this._handleSkip,playerApi:n,playerState:i})),r.createElement(d.a,{show:S},S&&r.createElement(p.a,{imageSrc:s,playerApi:n,playerState:i})))}),i()(this,"_handleSkip",()=>{const{playerApi:e}=this.props;e&&e.pause(),this.setState({wasPrerollSkipped:!0})}),i()(this,"_handleTransitionAnimationComplete",()=>{const{playerApi:e}=this.props;e&&e.nextTrack()})}render(){const{playerApi:e,playerState:t}=this.props;if(!e||!t)return null;const a=Object(h.e)(t);return(null==a?void 0:a.displayType)===c.c.AD&&(null==a?void 0:a.useRedesignedPrerollUx)?r.createElement(y.a,null,r.createElement(y.a.Context.Consumer,null,this._renderWithRedesignedPrerollUx)):r.createElement(A,this.props)}}var ye=be;class fe extends r.PureComponent{render(){const{playerApi:e,playerState:t,useRedesignedPrerollUx:a}=this.props;return e&&t?a?r.createElement(n.a,{periodic:!0},({playerState:e})=>r.createElement(ye,Object.assign({},this.props,{playerState:e}))):r.createElement(A,this.props):null}}t.default=fe},ReFq:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("IAdD"),a("kYxP");var r=a("KEM+"),n=a.n(r),l=a("ERkP"),i=a("/yvb"),s=a("3XMw"),o=a.n(s),c=a("rHpw"),u=a("MWbm");const m=o.a.f2d4e6f1;class p extends l.PureComponent{constructor(...e){super(...e),n()(this,"_createWatchAgainHandler",e=>t=>{const{onScribeEvent:a,playerApi:r}=this.props;t.stopPropagation(),a&&a({namespace:{element:e,action:"click"}}),r&&r.replay()}),n()(this,"_handleOnPress",this._createWatchAgainHandler("watch_again_button")),n()(this,"_handleOnClick",this._createWatchAgainHandler("watch_again_overlay"))}render(){const{playerState:e}=this.props;return e&&e.tracksFinished?l.createElement(u.a,{onClick:this._handleOnClick,style:d.overlay},l.createElement(i.a,{accessibilityLabel:m,onPress:this._handleOnPress,type:"onMedia"},m)):null}}const d=c.a.create(e=>({overlay:Object.assign({},c.a.absoluteFillObject,{backgroundColor:c.a.theme.colors.translucentBlack30,alignItems:"center",justifyContent:"center"})}))},uz49:function(e,t,a){"use strict";a("IAdD"),a("kYxP");var r=a("ERkP"),n=a("0W/e"),l=a("rHpw"),i=a("U+bB"),s=a("MWbm");const o={animationStage:"INITIAL",containerSize:null,imageTransform:null},c=(e=o,t)=>{switch(t.type){case"SET_TRANSFORM":if("INITIAL"===e.animationStage){const{aspectRatio:a,containerHeight:r,containerWidth:i}=t.payload,s=Object(n.a)(a),o={width:i,height:r},c={scaleX:s.width/i,scaleY:s.height/r,translateX:-1*l.a.theme.spacesPx.xSmall,translateY:-1*l.a.theme.spacesPx.xSmall};return Object.assign({},e,{animationStage:"SET_TRANSFORM",containerSize:o,imageTransform:c})}return e;case"START_ANIMATION":return"SET_TRANSFORM"===e.animationStage?Object.assign({},e,{animationStage:"START_ANIMATION",imageTransform:{scaleX:1,scaleY:1,translateX:0,translateY:0}}):e;case"FINISH_ANIMATION":return Object.assign({},e,{animationStage:"FINISH_ANIMATION"});default:return e}};const u={imageFill:{width:"100%",height:"100%"},transitionStyle:{transitionDuration:"250ms",transitionProperty:"transform",transitionTimingFunction:"ease",transformOrigin:"bottom right"},posterPositionStyle:{position:"absolute",right:"0",bottom:"0"}};t.a=function({aspectRatio:e,imageSrc:t,onTransitionComplete:a}){const[n,m]=r.useReducer(c,o),{animationStage:p,containerSize:d,imageTransform:h}=n,b=r.useCallback(t=>{if(null!=t){const{height:a,width:r}=t.getBoundingClientRect();requestAnimationFrame(()=>{m({type:"SET_TRANSFORM",payload:{aspectRatio:e,containerHeight:a,containerWidth:r}})})}},[e]),y=r.useCallback(e=>{requestAnimationFrame(()=>{m({type:"START_ANIMATION"})})},[]),f=r.useCallback(()=>{m({type:"FINISH_ANIMATION"})},[]);return r.useEffect(()=>{t||f()},[t,f]),r.useEffect(()=>{"FINISH_ANIMATION"===p&&a&&a()},[a,p]),r.useEffect(()=>{if("START_ANIMATION"===p){const e=setTimeout(()=>{f()},300);return function(){clearTimeout(e)}}},[p,f]),r.createElement(s.a,{ref:b,style:l.a.absoluteFill},(()=>{if(null==d||null==h||!t)return null;const e={position:"absolute",height:d.height,width:d.width,right:"0",bottom:"0"},{scaleX:a,scaleY:n,translateX:l,translateY:s}=h,o={transform:`matrix(${a}, 0, 0, ${n}, ${l}, ${s})`},c=Object.assign({},u.transitionStyle,u.posterPositionStyle,e,o);return r.createElement("div",{onTransitionEnd:f,style:c},r.createElement(i.a,{ref:y,source:t,style:u.imageFill}))})())}}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.42e72665.js.map