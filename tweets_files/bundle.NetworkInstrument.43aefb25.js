(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{ujfh:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));s("IAdD"),s("kYxP"),s("Cm4o");var r=s("LdEA"),n=s.n(r),i=s("KEM+"),o=s.n(i),a=s("pXBW"),u=s("k49u"),_=s("ZjLa"),c=s("Myq3"),d=s("EhiH"),p=s("/NU0");const h=[u.a.BadOauthToken,u.a.OauthTimestampException,u.a.BadAuthenticationData,u.a.AccessDeniedByBouncer];class m{constructor(e,t){o()(this,"scribeRequest",e=>{let{response:t}=e;const{error:s}=e,r=n()(e,["error"]),i=new window.URL(r.url);if((s||!t)&&(t={headers:{},body:"",status:s?s.status:500},!(s instanceof a.a)))return;if(this._shouldFilter(i))return;this._flushResourceTimingBuffer();const o=Object(c.a)(this._buffer,e=>{const{request:t}=e;return i.protocol===t.uri_scheme&&i.hostname===t.uri_host_name&&i.pathname===t.uri_path&&(i.query||"")===t.uri_query});if(o){const e=this._buffer.indexOf(o);this._buffer[e]=this._updateEventWithRequestResponse(o,r,t,s)}else{const e=this._prepareEvent(r.url),n=e&&this._updateEventWithRequestResponse(e,r,t,s);n&&this._buffer.push(n)}this._flushBuffer()}),o()(this,"_shouldFilter",e=>e.pathname.indexOf("/1.1/jot")>-1),o()(this,"_flushResourceTimingBuffer",()=>{if(!this._resourceTimingApiSupported)return;const e=window.performance.getEntriesByType("resource");window.performance.clearResourceTimings(),e.forEach(e=>{if(e.name){const t=this._prepareEvent(e.name);if(t){const s=this._updateEventWithPrecisionTimings(t,e);this._buffer.push(s)}}})}),o()(this,"_updateNetworkInfo",e=>{this._networkInfo=e}),o()(this,"_getNetworkMeasurements",()=>({connection_type:this._networkInfo.type||"unknown",speed_class:this._networkInfo.effectiveType,download_mbps:this._networkInfo.downlink,download_max_mbps:this._networkInfo.downlinkMax,rtt_ms:this._networkInfo.rtt,reduced_data_usage:this._networkInfo.saveData})),this._resourceTimingApiSupported=window.performance&&window.performance.getEntriesByType&&window.performance.getEntriesByType("resource")&&window.performance.clearResourceTimings,this._scribe=e,this._options=Object.assign({apiErrorSampleSize:0,apiSampleSize:0,cdnSampleSize:0,cdnHostList:[]},t),this._buffer=[],this._networkInfo={},_.a.getConnectionInfo().then(e=>{this._updateNetworkInfo(e),_.a.addEventListener("connectionChange",this._updateNetworkInfo)}),this._resourceTimingApiSupported&&(window.performance.onresourcetimingbufferfull=this._flushResourceTimingBuffer)}_record(e){this._sample(e)&&this._scribe.log(void 0,e)}_possiblyRecordErrorToAllNamespace(e){if("api:error"===e.event_type){const t=Object.assign({},e,{event_type:"api:all"});this._record(t)}}_flushBuffer(){this._buffer.splice(0,this._buffer.length).forEach(e=>{this._record(e),this._possiblyRecordErrorToAllNamespace(e)})}_sample(e){const{event_type:t}=e,s=this._options[{"api:all":"apiSampleSize","api:error":"apiErrorSampleSize","cdn:all":"cdnSampleSize"}[t]]||0;return Math.random()<s}_getEventType(e,t){return this._options.cdnHostList.indexOf(e)>-1?"cdn:all":e.indexOf("twitter.com")>-1?t>=200&&t<300?"api:all":"api:error":"none"}_prepareEvent(e){const t=new window.URL(e);if(this._shouldFilter(t))return null;const s="api.twitter.com"===t.hostname;return{_category_:"client_network_request_event",request:{uri_scheme:t.protocol,uri_host_name:t.hostname,uri_path:t.pathname,uri_query:t.query||"",http_method:"GET",http_status_code:s?0:200,start_time_ms:Date.now(),request_details:{duration_ms:0}},common_header:{commonHeader:{clientHeader:{timestampMs:Date.now(),timezoneOffsetMin:-(new Date).getTimezoneOffset()}}},network_measurements:this._getNetworkMeasurements(),event_type:this._getEventType(t.hostname,200),event_source:"rweb"}}_extractApiErrorCode(e){const{errors:t=[]}=e,s=t.map(({code:e})=>e).filter(e=>void 0!==e),r=Object(d.a)(s,e=>h.indexOf(e)>-1);return r||(s.length>0?s[0]:void 0)}_updateEventWithRequestResponse(e,t,s,r){const n=e.request.request_details;return Object.assign({},e,{request:Object.assign({},e.request,{http_method:t.method,http_status_code:s.status,start_time_ms:t.startTimestamp,trace_id:t.headers["x-b3-traceid"],twitter_api_error_code:r&&this._extractApiErrorCode(r)||void 0,request_details:Object.assign({},n,{duration_ms:n.duration_ms||t.endTimestamp-t.startTimestamp,request_body_size:n.request_body_size||("string"==typeof t.data?t.data.length:t.data?JSON.stringify(t.data).length:void 0),response_body_size:n.response_body_size||(s&&s.body?s.body.length:void 0)})}),event_type:this._getEventType(e.request.uri_host_name,s.status)})}_getTiming(e,t){return Object(p.a)(e)&&Object(p.a)(t)?Math.round(t-e):void 0}_updateEventWithPrecisionTimings(e,t){return Object.assign({},e,{request:Object.assign({},e.request,{request_details:Object.assign({},e.request.request_details,{duration_ms:Math.round(t.responseEnd-t.fetchStart),rx_bytes:t.transferSize,dns_ms:this._getTiming(t.domainLookupStart,t.domainLookupEnd),tcp_ms:this._getTiming(t.connectStart,t.connectEnd),tls_ms:0===t.secureConnectionStart?void 0:Math.round(t.connectEnd-t.secureConnectionStart),response_body_size:t.decodedBodySize})})})}}}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NetworkInstrument.43aefb25.js.map