(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{"6d6o":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m})),n.d(e,"__DANGEROUS_IMPORT_VIDEOPLAYER__",(function(){return P}));n("kYxP");var a=n("97Jx"),i=n.n(a),o=n("ERkP"),r=n("v6aA"),c=n("rxPX");const s=()=>(t,e,{api:n})=>n.getHttpClient();var l=Object(c.a)().propsFromActions(()=>({getTwitterAuthedHttpClient:s})).withAnalytics(),u=(n("IAdD"),n("Xq8B"));var p=n("epkG"),d=n("88qn"),y=n("mf9H"),f=n("MWbm"),b=n("Zl35"),g=n("rHpw");function m(t){const{featureSwitches:e}=o.useContext(r.a),{media:n,onEnded:a,onPlayerApi:c,onPlayerState:s}=t,[l,p]=o.useState(null),g=o.useRef({playbackCoordinationEmitter:null,previousPlayerState:null});if(o.useEffect(()=>{null===l&&n&&Object(d.a)({showControls:!1,source:{}},e).then(t=>p(()=>t))},[l,n,e]),o.useEffect(()=>function(){const{playbackCoordinationEmitter:t}=g.current;t&&t.unregister()},[]),null===l||!n)return null;const m=function(t,e){const n=t.analytics.contextualScribeNamespace,a={scribeContext:Object.assign({},n),enableShortFormCompleteLogging:e.isTrue("responsive_web_video_pcomplete_enabled")},i={log:e=>{const{category:n,data:a,namespace:i}=e;(null==i?void 0:i.action)&&t.analytics.scribe(Object.assign({},i,{data:Object.assign({},a,{_category_:n})}))}};return new u.a(i,{log:()=>{}},t.getTwitterAuthedHttpClient(),a)}(t,e),P={contentId:n.id_str,loop:!1,contentType:"media_entity",durationMs:n.video_info.duration_millis,variants:n.video_info.variants.map(({bitrate:t,content_type:e,url:n})=>({type:e,src:n}))};return o.createElement(f.a,{style:C.displayNone},o.createElement(b.b,i()({analytics:m,basePlayerClass:l,configType:"static",httpClient:w,key:P.contentId,onApiReady:function(t){"function"==typeof c&&c(t),g.current.playbackCoordinationEmitter=function(t){const e={onAutoPlayRequest:()=>{},onPauseRequest:t,canAutoplay:!1,isLooping:!1};return y.c.register(e)}(()=>t.pause())},onStateUpdate:function(t){"function"==typeof s&&s(t),function(t){const e=_(t);e&&e.durationMs===e.currentTimeMs&&"function"==typeof a&&(a(),g.current.playbackCoordinationEmitter&&g.current.playbackCoordinationEmitter.signalPlaybackFinish())}(t),function(t){const{playbackCoordinationEmitter:e,previousPlayerState:n}=g.current,a=null===n,i=null==n?void 0:n.isPlaying,o=t.isPlaying,r=!a&&(i&&!o);(a||!i)&&o?e&&e.signalPlay():r&&e&&e.signalPause()}(t),g.current.previousPlayerState=t},twitterAuthedHttpClient:t.getTwitterAuthedHttpClient()},P)))}const P=l(m),_=t=>t&&t.tracks[t.currentTrackId],w=new p.a({}),C=g.a.create(t=>({displayNone:{display:"none"}}))}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.e86ca895.js.map