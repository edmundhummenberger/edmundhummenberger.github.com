(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{"3A2y":function(e,t,s){"use strict";var r=s("zrOZ");t.a=(e,t)=>{const s=Object(r.a)(Array.isArray(t)?t:[t]);return Object.keys(e).reduce((t,r)=>(s.has(r)||(t[r]=e[r]),t),{})}},"72nz":function(e,t,s){"use strict";s.r(t),s.d(t,"SearchBoxContainer",(function(){return De}));s("IAdD"),s("WNMA"),s("MvUL");var r=s("97Jx"),a=s.n(r),n=s("KEM+"),o=s.n(n),c=s("ERkP"),i=s("ZNx0"),h=s("wtjx"),d=s("rxPX");var l=Object(d.a)().propsFromActions(()=>({addQuery:h.a})).withAnalytics({component:"search_box"}),u=s("3XMw"),p=s.n(u),m=s("8jkQ"),S=s("u3ZE"),_=s("rRIm"),f=s("lnti"),y=s("0KEI"),b=s("hqKg"),I=s("kGix"),g=s("3IPs"),E=s("G6rE"),v=s("k49u"),O=s("J4ZH"),R=s("v4XE");const C=e=>Object(v.c)(e,v.a.GenericUserNotFound)||Object(v.c)(e,v.a.OtherUserSuspended)||Object(v.c)(e,v.a.AddressBookLookupNotFound);var D=Object(d.a)().propsFromState(()=>{const e=Object(b.createSelector)(h.g,E.e.selectFetchStatuses,(e,t)=>{const s=Object(f.a)(e.map(e=>e.user&&e.user.id));return Object(O.a)(s.map(e=>({id:e,fetchStatus:t[e]})),e=>e.fetchStatus)}),t=Object(b.createSelector)(e,e=>(e[I.a.FAILED]||[]).map(e=>e.id)),s=Object(b.createSelector)(e,E.e.selectErrors,(e,t)=>(e[I.a.FAILED]||[]).filter(({id:e})=>C(t[e]||{})).map(e=>e.id)),r=Object(b.createSelector)(e,E.e.selectErrors,(e,t)=>{const s=(e[I.a.FAILED]||[]).filter(({id:e})=>!C(t[e]||{}));return(e[I.a.LOADING]||[]).length>0?I.a.LOADING:(e[I.a.LOADED]||[]).length>0?I.a.LOADED:s.length>0?I.a.FAILED:I.a.NONE}),a=Object(b.createSelector)(h.g,e=>e.map(e=>Object.assign({},e,{category:g.b.RecentSearch}))),n=Object(b.createSelector)(R.d,e=>e.map(e=>({keyword:{query:e.query},savedSearchId:e.id_str,category:g.b.SavedSearch})));return{isRecentSearchDataLoaded:h.e,recentSearches:a,usersFetchStatus:r,invalidRecentSearchUserIds:s,failedRecentSearchUserIds:t,savedSearches:n}}).adjustStateProps(({isRecentSearchDataLoaded:e,recentSearches:t,usersFetchStatus:s,invalidRecentSearchUserIds:r,failedRecentSearchUserIds:a,savedSearches:n})=>{const o=!t.filter(({user:e})=>e&&r.indexOf(e.id)<0).length,c=s!==I.a.LOADING&&e&&o?I.a.LOADED:s;return{failedRecentSearchUserIds:a,invalidRecentSearchUserIds:r,recentSearches:t,fetchStatus:c,savedSearches:n}}).propsFromActions(()=>({clearAll:h.b,createLocalApiErrorHandler:Object(y.d)("SEARCH_ONE_CLICK"),deleteSavedSearch:R.a,fetchRecentSearchesIfNeeded:h.c,fetchSavedSearchesIfNeeded:R.b,fetchUsersIfNeeded:E.e.fetchManyIfNeeded,removeQuery:h.d})).withAnalytics({element:"typeahead"}),w=s("sYRn"),A=s("v//M"),x=s("7nmT"),T=s.n(x),k=s("Rp9C");s("kYxP");const N=(e,t)=>E.e.select(e,t.id);var j=Object(d.a)().propsFromState(()=>({user:N})),U=s("hOZg"),F=s("/yvb"),P=s("IMA+"),L=s("rHpw");const M=c.createElement(U.a,null),q=p.a.e68b09b4;class H extends c.Component{UNSAFE_componentWillMount(){const{onRef:e}=this.props;e&&e(this)}componentWillUnmount(){const{onRef:e}=this.props;e&&e(void 0)}componentDidUpdate(e){const{onRef:t}=this.props;e.onRef&&e.onRef!==t&&e.onRef(void 0),t&&t!==e.onRef&&t(this)}render(){const{user:e,onRemove:t}=this.props;if(!e)return null;const s=c.createElement(F.a,{accessibilityLabel:q,icon:M,onPress:t,size:"small",type:"text"});return c.createElement(P.a,{avatarSize:"xLarge",avatarUri:e.profile_image_url_https,decoration:s,displayMode:"UserCompact",isProtected:e.protected,isVerified:e.verified,name:e.name,screenName:e.screen_name,style:B.cell,userId:e.id_str,withLink:!1})}get searchItemData(){return this.props.user?{category:g.b.RecentSearch,link:this.props.user.screen_name,query:this.props.id,recentSearchType:g.a.User}:null}}var V=j(H);const B=L.a.create(e=>({cell:{paddingHorizontal:0,paddingVertical:0}}));var K=s("oQhu"),Q=s("j7Bv"),W=s("5mJL"),z=s("t62R"),G=s("hiGS"),Y=s("VwDm");const J=c.createElement(U.a,null),Z=c.createElement(G.a,null),X=Object(K.a)(e=>e===g.b.SavedSearch?"destructiveText":"text"),$=Object(K.a)(e=>e===g.b.SavedSearch?Z:J);class ee extends c.Component{constructor(...e){super(...e),o()(this,"_getButtonType",()=>{const{category:e}=this.props;return X(e)}),o()(this,"_getRemoveIcon",()=>{const{category:e}=this.props;return $(e)})}render(){const{query:e,onRemove:t}=this.props,s=c.createElement(Q.a,{Icon:Y.a,color:"neutral",size:"xLarge",style:te.searchIcon});return c.createElement(W.a,{avatarCell:s,avatarSize:"xLarge",cellStyle:te.bodyColumn},c.createElement(z.c,{numberOfLines:1,withHashflags:!0},e),c.createElement(F.a,{accessibilityLabel:"",icon:this._getRemoveIcon(),onPress:t,size:"small",type:this._getButtonType()}))}get searchItemData(){const{category:e,query:t}=this.props;return{category:e,query:t,recentSearchType:e===g.b.RecentSearch?g.a.Keyword:void 0}}}const te=L.a.create(e=>({bodyColumn:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},searchIcon:{marginRight:e.spaces.xSmall}}));var se=ee,re=s("htQn");class ae extends c.Component{constructor(...e){super(...e),o()(this,"_renderSearchItem",()=>{const{item:e}=this.props;return e.keyword?c.createElement(se,{category:e.category,onRemove:this._handleOnRemove,query:e.keyword.query,ref:this._handleItemRef}):e.user?c.createElement(V,{id:e.user.id||"",onRef:this._handleItemRef,onRemove:this._handleOnRemove}):null}),o()(this,"_handleItemRef",e=>{this._itemRef=e}),o()(this,"_handleOnRemove",e=>{const{onRemoveQuery:t,item:s,index:r}=this.props;t(s,r),e.stopPropagation()}),o()(this,"_handleOnClick",()=>{const{onItemClick:e,index:t}=this.props;this.searchItemData&&e(this.searchItemData,t)})}render(){const{domId:e}=this.props;return c.createElement(i.a,{viewType:"search_item"},c.createElement(re.a,{accessibilityRole:"option",accessibilityState:{selected:!!e},accessible:!0,nativeID:e,onClick:this._handleOnClick,style:[ne.root,e&&ne.focused]},this._renderSearchItem()))}get searchItemData(){return this._itemRef&&this._itemRef.searchItemData}}const ne=L.a.create(e=>({root:{borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:1,cursor:"pointer",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},focused:{backgroundColor:e.colors.gray0}}));var oe=ae,ce=s("MWbm"),ie=s("eb3s"),he=s("MXDK");const de=p.a.ee295fbe,le={headline:p.a.f45c425f,text:p.a.caae4dd9,confirmButtonLabel:p.a.dbd5d40f},ue=p.a.a8d68f61,pe=p.a.c6530778,me=p.a.e047b8fa;class Se extends c.Component{constructor(e){super(e),o()(this,"_getRecentSearchItems",()=>{const{failedRecentSearchUserIds:e,recentSearches:t}=this.props,s=t.filter(({user:t})=>!t||e.indexOf(t.id)<0);return s.length>15?s.slice(0,15):s}),o()(this,"_render",()=>{const{domId:e,savedSearches:t}=this.props,s=0===this._getNumOfSearchItems(),r=this._getRecentSearchItems();return s?c.createElement(ce.a,{style:[_e.emptyState]},c.createElement(z.c,{align:"center",color:"gray600"},de)):c.createElement(ce.a,{accessibilityRole:"listbox",nativeID:e},r.length>0?c.createElement(c.Fragment,null,c.createElement(ce.a,{importantForAccessibility:"no-hide-descendants",style:_e.header},c.createElement(z.c,{numberOfLines:1,size:"large",weight:"bold"},ue),c.createElement(F.a,{onPress:this._handleClearAllClick,size:"small",type:"text"},me)),r.map((e,t)=>this._renderRecentSearchItem(e,t))):null,t.length>0?c.createElement(c.Fragment,null,c.createElement(ce.a,{importantForAccessibility:"no-hide-descendants",style:_e.header},c.createElement(z.c,{numberOfLines:1,size:"large",weight:"bold"},pe)),this._renderSavedSearches()):null)}),o()(this,"_renderRecentSearchItem",(e,t)=>{const{ariaDescendantId:s}=this.props,r=this.state.focusIndex===t,a=e.keyword?"keyword_"+e.keyword.query:e.user?"user_"+e.user.id:""+t;return c.createElement(oe,{domId:r?s:void 0,index:t,item:e,key:a,onItemClick:this._handleOnItemClick,onRemoveQuery:this._handleRemoveQuery,ref:r?this._setFocusedItemRef:void 0})}),o()(this,"_renderSavedSearches",()=>{const{ariaDescendantId:e,savedSearches:t}=this.props,{focusIndex:s}=this.state,r=this._getRecentSearchItems();return c.createElement(ce.a,null,t.map((t,a)=>{const n=s===a+r.length;return c.createElement(oe,{domId:n?e:void 0,index:a,item:t,key:t.savedSearchId,onItemClick:this._handleOnItemClick,onRemoveQuery:this._handleRemoveQuery,ref:n?this._setFocusedItemRef:void 0})}))}),o()(this,"_getNumOfSearchItems",()=>{const{savedSearches:e}=this.props,t=this._getRecentSearchItems();return e.length+t.length}),o()(this,"_handleUsersRetry",()=>{this._fetchUsersIfNeeded()}),o()(this,"_fetchUsersIfNeeded",()=>{const{fetchUsersIfNeeded:e,createLocalApiErrorHandler:t,recentSearches:s,invalidRecentSearchUserIds:r}=this.props;e(s.map(e=>e.user).filter(Boolean).map(e=>e.id).filter(e=>r.indexOf(e)<0)).catch(t({}))}),o()(this,"_handleRemoveQuery",(e,t)=>{const{analytics:s,removeQuery:r}=this.props;switch(e.category){case g.b.RecentSearch:{const a={keyword:e.keyword,user:e.user};r(a),this._resetFocus();const n=k.a.forRecentSearchResult(a,t),o=e.user?"clear_user":"clear_topic";n&&s.scribe({action:o,data:{items:[n]}});break}case g.b.SavedSearch:this.setState({shouldShowDeleteSavedSearchConfirmation:!0,savedSearchIdToDelete:e.savedSearchId});break;default:return}}),o()(this,"_handleClearAllClick",()=>{this.setState({shouldShowClearAllConfirmationSheet:!0})}),o()(this,"_handleOnClearAllConfirm",()=>{const{analytics:e,clearAll:t}=this.props;t(),e.scribeAction("clear_all"),this.setState({shouldShowClearAllConfirmationSheet:!1})}),o()(this,"_handleOnClearAllCancel",()=>{this.setState({shouldShowClearAllConfirmationSheet:!1})}),o()(this,"_handleOnDeleteSavedSearchConfirm",()=>{const{analytics:e,deleteSavedSearch:t,savedSearches:s}=this.props,{savedSearchIdToDelete:r}=this.state,a=s.find(e=>e.savedSearchId===r);if(r){t(r);const s=a&&k.a.forSavedSearchResult(a.keyword.query);s&&e.scribe({element:"saved_search",action:"delete",data:{items:[s]}})}this.setState({shouldShowDeleteSavedSearchConfirmation:!1,savedSearchIdToDelete:void 0})}),o()(this,"_handleOnDeleteSavedSearchCancel",()=>{this.setState({shouldShowDeleteSavedSearchConfirmation:!1,savedSearchIdToDelete:void 0})}),o()(this,"_handleOnItemClick",(e,t)=>{const{onDismiss:s,onItemClick:r}=this.props;r(e,t),this._scribeClick(e,t),s&&s()}),o()(this,"_scribeRecentSearchImpression",()=>{const{analytics:e,recentSearches:t}=this.props;if(t&&t.length){const s=Object(f.a)(t.map((e,t)=>k.a.forRecentSearchResult(e,t)));e.scribe({action:"impression",data:{items:s}})}}),o()(this,"_scribeSavedSearchImpression",()=>{const{analytics:e,savedSearches:t}=this.props;if(t&&t.length){const s=Object(f.a)(t.map((e,t)=>k.a.forSavedSearchResult(e.keyword.query)));e.scribe({element:"saved_search",action:"impression",data:{items:s}})}}),o()(this,"_scribeClick",(e,t)=>{const{analytics:s}=this.props;switch(e.category){case g.b.SavedSearch:{const t=k.a.forSavedSearchResult(e.query);s.scribe({element:"saved_search",action:"search",data:{targets:[t]}});break}case g.b.RecentSearch:{let r;e.recentSearchType&&(r=e.recentSearchType===g.a.User?{user:{type:g.a.User,id:e.query}}:{keyword:{type:g.a.Keyword,query:e.query}});const a=r&&k.a.forRecentSearchResult(r,t);a&&s.scribe({action:"click",data:{targets:[a]}});break}}}),o()(this,"_setFocusedItemRef",e=>{this._focusedItemRef=e,e&&this._shouldScrollToFocusedItem&&(Object(he.c)(this._getScrollParent(),this._getFocusedItem()),this._shouldScrollToFocusedItem=!1)}),o()(this,"hasFocusedItem",()=>this._getNumOfSearchItems()>0),o()(this,"selectFocusedItem",()=>{if(this.hasFocusedItem()){const e=this._focusedItemRef&&this._focusedItemRef.searchItemData;e&&this._handleOnItemClick(e,this.state.focusIndex)}}),o()(this,"_setFocusIndex",(e,t)=>{const{onItemFocusChanged:s}=this.props;this._shouldScrollToFocusedItem=t,this.setState({focusIndex:e}),s&&s()}),o()(this,"_resetFocus",()=>{this._setFocusIndex(-1)}),o()(this,"focusNext",()=>{const{focusIndex:e}=this.state,t=this._getNumOfSearchItems();if(0===t)return;const s=e+1>=t?0:e+1;this._setFocusIndex(s,!0)}),o()(this,"focusPrevious",()=>{const{focusIndex:e}=this.state,t=this._getNumOfSearchItems();if(0===t)return;const s=e-1<0?t-1:e-1;this._setFocusIndex(s,!0)}),this.state={focusIndex:0,shouldShowClearAllConfirmationSheet:!1,shouldShowDeleteSavedSearchConfirmation:!1}}componentDidMount(){const{createLocalApiErrorHandler:e,fetchRecentSearchesIfNeeded:t,fetchSavedSearchesIfNeeded:s,recentSearches:r,savedSearches:a,onRef:n}=this.props;n&&n(this),t(),this._fetchUsersIfNeeded(),s().catch(e({})),this._scribeRecentSearchImpression(),this._scribeSavedSearchImpression(),(r&&r.length||a&&a.length)&&this._resetFocus()}componentDidUpdate(e){const{recentSearches:t,savedSearches:s,onRef:r}=this.props;e.recentSearches!==t&&(this._fetchUsersIfNeeded(),this._resetFocus(),this._scribeRecentSearchImpression()),e.savedSearches!==s&&(this._resetFocus(),this._scribeSavedSearchImpression()),e.onRef&&e.onRef!==r&&e.onRef(void 0),r&&r!==e.onRef&&r(this)}componentWillUnmount(){this.props.onRef&&this.props.onRef(void 0)}render(){const{style:e,fetchStatus:t}=this.props,{shouldShowClearAllConfirmationSheet:s,shouldShowDeleteSavedSearchConfirmation:r}=this.state;return c.createElement(ce.a,{style:e},c.createElement(A.a,{fetchStatus:t,onRequestRetry:this._handleUsersRetry,render:this._render}),s?c.createElement(ie.a,{confirmButtonLabel:le.confirmButtonLabel,confirmButtonType:"destructive",headline:le.headline,onCancel:this._handleOnClearAllCancel,onConfirm:this._handleOnClearAllConfirm,text:le.text}):null,r?c.createElement(w.a,{onCancel:this._handleOnDeleteSavedSearchCancel,onConfirm:this._handleOnDeleteSavedSearchConfirm}):null)}_getScrollParent(){if(!this._scrollParent){const e=Object(he.a)(T.a.findDOMNode(this));this._scrollParent=e===window?null:e}return this._scrollParent}_getFocusedItem(){const e=this._focusedItemRef&&T.a.findDOMNode(this._focusedItemRef);return e instanceof Element?e:null}}const _e=L.a.create(e=>({emptyState:{padding:e.spaces.xSmall,paddingTop:e.spaces.medium},header:{alignItems:"center",borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:1,flexDirection:"row",justifyContent:"space-between",paddingVertical:e.componentDimensions.gutterVertical,paddingHorizontal:e.componentDimensions.gutterHorizontal}}));var fe=D(Se),ye="SearchBox_Search_Input",be=s("TnY3"),Ie=s("GZwR"),ge=s("4e/K");const Ee=p.a.ib2e46ee,ve=p.a.hbc99b02,Oe=/^(\w+)$/,Re=[Ie.a.Events,Ie.a.Users,Ie.a.Topics],Ce=e=>"@"===e[0]?e.substring(1):e;class De extends c.Component{constructor(e,t){super(e,t),o()(this,"_renderSearchBoxEmptyState",e=>c.createElement(fe,a()({},e,{onItemClick:this._handleSearchItemClick}))),o()(this,"_handleSearchItemClick",({link:e,query:t,recentSearchType:s,category:r})=>{const{addQuery:a}=this.props;r===g.b.SavedSearch?this._submitQuery({query:t,shouldAddToRecentSearch:!1,src:S.a.SavedSearchClick}):s===g.a.Keyword?this._submitQuery({query:t,shouldAddToRecentSearch:!0,src:S.a.RecentSearchClick}):e&&(this._routeTransition({pathname:"/"+e}),a({user:{id:t,type:g.a.User}}))}),o()(this,"_handleSearchShortcut",e=>{const t=this._inputRef;t&&(e&&t.setQuery(e),t.focus())}),o()(this,"_getUserExactMatch",({query:e,hasResults:t,isLoaded:s})=>{const r=Ce(e);if(r.match(Oe))return{id:e+"_no_result_user",type:Ie.b.NoResult,data:{text:ve({screenName:r}),type:"user"}}}),o()(this,"_handleOnDismiss",()=>{const{history:e}=this.props,{location:t}=e,s=t.state||{};if(s.searchFocused){const r=Object.assign({},t,{state:Object.assign({},s,{lockScroll:!1,searchFocused:!1})});e.replace(r)}}),o()(this,"_handleOnFocus",()=>{const{analytics:e,history:t}=this.props,{location:s}=t,r=s.state||{};if(!r.searchFocused){const a=Object.assign({},s,{state:Object.assign({},r,{searchFocused:!0,lockScroll:!0})});e.scribe({action:"focus_field"}),t.push(a)}}),o()(this,"_handleChange",e=>{this.setState({query:e,querySubmitted:!1})}),o()(this,"_handleTypeaheadSubmit",()=>{const{query:e}=this.state;/^\s*$/.test(e)||this._submitQuery({query:e,shouldAddToRecentSearch:!0})}),o()(this,"_handleItemClick",(e,t)=>{const{addQuery:s}=this.props,{query:r}=this.state;switch(e.type){case Ie.b.User:if(e.data.id_str){s({user:{id:e.data.id_str,type:g.a.User}})}this._routeTransition({pathname:"/"+e.data.screen_name});break;case Ie.b.Topic:case Ie.b.Hashtag:this._submitQuery({query:e.data.topic,shouldAddToRecentSearch:!0,src:S.a.TypeaheadClick});break;case Ie.b.Event:e.data&&e.data.url?this._routeTransition({pathname:m.b.parseInternalUrl(e.data.url)}):this._submitQuery({query:e.data.topic,src:S.a.TypeaheadClick});break;case Ie.b.NoResult:{const{type:t}=e.data;"user"===t?this._routeTransition({pathname:"/"+Ce(r)}):"topic"===t&&this._submitQuery({query:r,shouldAddToRecentSearch:!0,src:S.a.TypeaheadClick});break}}}),o()(this,"_routeTransition",({pathname:e,query:t,params:s,src:r})=>{const{history:a,location:n}=this.props,o=Object.assign({},n,{pathname:e,search:"",query:s||(t?{q:t,src:r}:{}),state:Object.assign({},n.state,{searchFocused:!1,lockScroll:!1})});a.replace(o)}),o()(this,"_submitQuery",({query:e,shouldAddToRecentSearch:t=!1,src:s=S.a.Typed})=>{const{addQuery:r,mode:a,onSubmit:n,searchFilters:o,searchRoute:c}=this.props;if(n&&n(e,s),t){r({keyword:{query:e,type:g.a.Keyword}})}const i=Object(g.g)({query:e,querySrc:s,mode:a,searchFilters:o});this._routeTransition({pathname:c,params:i,src:s}),this.setState({querySubmitted:!0})}),o()(this,"_setInputRef",e=>{this._inputRef=e}),this.state={query:e.initialValue,querySubmitted:!0}}UNSAFE_componentWillMount(){const{location:e,shouldHandleSearchShortcut:t}=this.props,{searchFocused:s}=e.state||{};this._autoFocus=!!s,t&&(this._unregisterSearchShortcutHandler=Object(_.b)(this._handleSearchShortcut))}componentWillUnmount(){this._unregisterSearchShortcutHandler&&this._unregisterSearchShortcutHandler()}UNSAFE_componentWillReceiveProps(e){this.props.initialValue!==e.initialValue&&this.setState({query:e.initialValue,querySubmitted:!0})}render(){const{location:e,placeholder:t}=this.props,{query:s}=this.state,{searchPrefill:r}=e.state||{},a=this.props.initialValue||r;return c.createElement(i.a,{viewType:"search_field"},c.createElement(ce.a,{style:we.root},c.createElement(ge.default,{filter:Re,getTopicExactMatch:s?Ie.e:void 0,getUserExactMatch:s?this._getUserExactMatch:void 0,initialValue:a,inputStyle:we.input,onDismiss:this._handleOnDismiss,onFocus:this._handleOnFocus,onItemClick:this._handleItemClick,onQueryChange:this._handleChange,onSubmit:this._handleTypeaheadSubmit,placeholder:t,ref:this._setInputRef,renderEmptyState:this._renderSearchBoxEmptyState,rounded:!0,shouldAutoFocus:!!this._autoFocus,shouldClearOnSelect:!0,shouldDeferPrefetch:!0,source:Ie.d.SearchBox,testID:ye,withFixedPositioning:!0,withFocusStyling:!0})))}}o()(De,"defaultProps",{initialValue:"",placeholder:Ee,searchRoute:"/search"});const we=L.a.create(e=>({root:{alignItems:"stretch",flexBasis:0,flexDirection:"row",flexGrow:1},input:{flexShrink:1}}));t.default=Object(be.a)(l(De))},BqYg:function(e,t){function s(e,t,s){var r,a,n,o,c;function i(){var h=Date.now()-o;h<t&&h>=0?r=setTimeout(i,t-h):(r=null,s||(c=e.apply(n,a),n=a=null))}null==t&&(t=100);var h=function(){n=this,a=arguments,o=Date.now();var h=s&&!r;return r||(r=setTimeout(i,t)),h&&(c=e.apply(n,a),n=a=null),c};return h.clear=function(){r&&(clearTimeout(r),r=null)},h.flush=function(){r&&(c=e.apply(n,a),n=a=null,clearTimeout(r),r=null)},h}s.debounce=s,e.exports=s},V2l4:function(e,t,s){"use strict";s.r(t),s.d(t,"UserPicker",(function(){return y}));var r=s("KEM+"),a=s.n(r),n=s("ERkP"),o=s("ZcYN"),c=s("3XMw"),i=s.n(c),h="searchPeople",d=s("4e/K"),l=s("MWbm"),u=s("aV/s"),p=s("rHpw"),m=s("GZwR");const S=[m.a.Users],_=i.a.fc9dd578,f=i.a.gdb7bc24;class y extends n.Component{constructor(e,t){super(e,t),a()(this,"_renderSelectedUsersList",()=>{const{selectedUsers:e}=this.props;return n.createElement(l.a,{style:b.selectedUsersList},e.map(this._renderSelectedUserPill))}),a()(this,"_renderSelectedUserPill",e=>{const{withCompactPills:t}=this.props,s=this.props.onRemove.bind(this,e);let r;return e.type===m.b.User&&(r=e.data.profile_image_url_https),n.createElement(u.a,{accessibilityLabel:f({name:e.data.name}),compact:t,key:e.id,mode:"remove",onClick:s,style:b.selectionPill,text:e.data.name,userAvatarURI:r})}),a()(this,"_getItemIsDisabled",e=>{const{getItemIsDisabled:t,preselectedUsers:s}=this.props;return s.indexOf(e.id)>=0||!(!t||!t(e))}),a()(this,"_getItemDisabledMessage",e=>{const{getItemDisabledMessage:t,preselectedUsers:s}=this.props;return s.indexOf(e.id)>=0?null:t&&t(e)}),a()(this,"_handleQueryChange",e=>{const{onQueryChange:t}=this.props;this.setState({query:e}),t&&t(e)}),a()(this,"_handleOnSelect",e=>{const{onSelect:t}=this.props;t&&t(e)}),this.state={query:""}}render(){const{injections:e,selectedUsers:t,shouldAutoFocus:s,preselectedUsers:r,source:a}=this.props,c=t.map(({id:e})=>e).concat(r);return n.createElement(l.a,{style:b.root},n.createElement(d.default,{alwaysOpen:!0,disableClearButton:!0,filter:S,getItemDisabledMessage:this._getItemDisabledMessage,getItemIsDisabled:this._getItemIsDisabled,injectedItems:e,isModal:!0,onItemClick:this._handleOnSelect,onQueryChange:this._handleQueryChange,placeholder:_,renderInSearchField:t.length?this._renderSelectedUsersList:null,renderUserDecoration:o.a,selectedItems:c,shouldAutoFocus:s,shouldClearOnSelect:!0,shouldFocusOnClear:!0,source:a,testID:h,withSectionDivider:!1}))}}a()(y,"defaultProps",{preselectedUsers:[],shouldAutoFocus:!0,withCompactPills:!1});const b=p.a.create(e=>({root:{flex:1},selectionPill:{margin:e.spaces.xxSmall,maxWidth:`calc(100% - ${e.spaces.small})`},selectedUsersList:{flexDirection:"row",flexWrap:"wrap",padding:e.spaces.xxSmall}}));t.default=y},VY6S:function(e,t,s){"use strict";var r=s("BqYg"),a=s.n(r);t.a=(e,t,s)=>a()(e,t,s)},aWyx:function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return a})),s.d(t,"b",(function(){return n})),s.d(t,"d",(function(){return o}));const r=Object.freeze({ONE_TO_ONE:"ONE_TO_ONE",GROUP:"GROUP_DM"}),a=Object.freeze({AT_END:"AT_END",HAS_MORE:"HAS_MORE"}),n=Object.freeze({CONVERSATION_AVATAR_UPDATE:"conversation_avatar_update",CONVERSATION_NAME_UPDATE:"conversation_name_update",CONVERSATION_PROFILE_INFO_HEADER:"conversation_profile_info_header",CONVERSATION_READ:"conversation_read",CONVO_METADATA_UPDATE:"convo_metadata_update",DISABLE_NOTIFICATIONS:"disable_notifications",ENABLE_NOTIFICATIONS:"enable_notifications",JOIN_CONVERSATION:"join_conversation",MARK_ALL_AS_READ:"mark_all_as_read",MENTION_NOTIFICATIONS_UPDATE:"mention_notifications_setting_update",MESSAGE:"message",MESSAGE_DELETE:"message_delete",MESSAGE_MARK_AS_NOT_SPAM:"message_unmark_as_spam",MESSAGE_MARK_AS_SPAM:"message_mark_as_spam",PARTICIPANTS_JOIN:"participants_join",PARTICIPANTS_LEAVE:"participants_leave",REACTION_CREATE:"reaction_create",REACTION_DELETE:"reaction_delete",READ_ONLY_INDICATOR:"read_only_indicator",REMOVE_CONVERSATION:"remove_conversation",TRUST_CONVERSATION:"trust_conversation",TYPING_INDICATOR:"typing_indicator",WELCOME_MESSAGE:"welcome_message_create"}),o=Object.freeze({MUTUAL_FRIENDS:"mutual_friends"})},bJYH:function(e,t,s){"use strict";s.r(t),s.d(t,"GenericTypeaheadComposeWrapper",(function(){return O}));s("IAdD");var r=s("KEM+"),a=s.n(r),n=s("ERkP"),o=s("oEoC"),c=s("oQhu"),i=s("7nmT"),h=s.n(i),d=s("7JQg"),l=s("WPfJ"),u=s("OEYw"),p=s("MWbm"),m=s("Irs7"),S=s("0FVZ"),_=s("xoZN"),f=s("7N4s"),y=s("rHpw"),b=s("GZwR");const I={component:"compose"},g=[b.a.Users],E=[b.a.Topics];let v=0;class O extends n.Component{constructor(e,t){super(e,t),a()(this,"_typeaheadActive",!1),a()(this,"_renderTypeaheadDropdown",e=>{const{contextText:t,isInline:s,onSelectItem:r,source:a}=this.props,{isModal:o}=this.context,c=e.resultType===b.a.Topics?"hashtag":void 0,i=n.createElement(u.a,{ariaDescendantId:this.state.ariaDescendantId,contextText:t,domId:this._dropdownDomId,filter:this._getFilter(e.resultType),maxTopics:8,onItemClick:r,onItemFocusChanged:this._handleItemFocusChanged,onRef:this._handleTypeaheadRef,query:e.word,source:a,style:this._calcStyle(),topicType:c,withItemAlwaysSelected:!0});return o||s?n.createElement(S.a.HalfSheet,null,n.createElement(d.b,{namespace:I},n.createElement(n.Fragment,null,n.createElement(p.a,{onClick:this._handleDismiss,style:R.mask}),i))):n.createElement(n.Fragment,null,n.createElement(p.a,{onClick:this._handleDismiss,style:R.mask}),i)}),a()(this,"render",()=>{const{children:e,query:t}=this.props,s=n.cloneElement(e,{ariaAutocomplete:"list",ariaControls:this._dropdownDomId,ariaActiveDescendant:this.state.ariaDescendantId,ref:t=>{this._textInputNode=h.a.findDOMNode(t),this._textInputRef=t;const{ref:s}=e;s&&s(t)}});return n.createElement(p.a,{style:R.inputContainer},n.createElement(_.a,{onKeyDown:this._handleKeyDown},s,this._textInputNode&&t?this._renderTypeaheadDropdown(t):null))}),a()(this,"_getFilter",e=>"users"===e?g:E),a()(this,"_calcStyle",()=>{const{isModal:e}=this.context,{isInline:t}=this.props,s=this._textInputNode,r=window.innerHeight,a=window.innerWidth,n=this._textInputRef&&this._textInputRef.getTextInputHeight()||20;if(s instanceof window.HTMLElement){const o=s.getBoundingClientRect();return e||t?[this._getDropdownPositioningStyle(r,a,o.top,o.top+n,o.left),R.dropdownStyle]:[this._getInlinePositioningStyle(n),R.inlineStyle]}return[this._getDropdownPositioningStyle(n,a,0,0,0),R.dropdownStyle]}),a()(this,"_handleKeyDown",e=>{const{selectedItem:t}=this.state,{onSelectItem:s,query:r}=this.props,{key:a}=e;o.e(e)&&r&&("ArrowDown"===a?(this._typeaheadRef&&this._typeaheadRef.focusNext(),e.preventDefault()):"ArrowUp"===a?(this._typeaheadRef&&this._typeaheadRef.focusPrevious(),e.preventDefault()):"Enter"===a||"Tab"===a?t&&(s(t),e.preventDefault()):"Escape"===a&&(this._handleDismiss(),e.preventDefault()))}),a()(this,"_handleItemFocusChanged",e=>this.setState({ariaDescendantId:o.b(),selectedItem:e})),a()(this,"_handleTypeaheadRef",e=>{this._typeaheadRef=e}),a()(this,"_handleDismiss",()=>{this._textInputRef&&this._textInputRef.focus(),this.props.onDismiss()}),a()(this,"_getDropdownHeight",Object(c.a)((e,t)=>{const s=50*e/100;return s>t?t:s})),a()(this,"_getDropdownPositioningStyle",Object(c.a)((e,t,s=0,r=0,a=0)=>{const n=e-r,o=s,c=o>n,i=n/e<.5,h=t-a-10,d=Math.min(h,300);return i&&c?{bottom:e-s+"px",left:a+"px",maxHeight:this._getDropdownHeight(e,o-10)+"px",maxWidth:h+"px",minWidth:d+"px"}:{top:r+"px",left:a+"px",maxHeight:this._getDropdownHeight(e,n-10)+"px",maxWidth:h+"px",minWidth:d+"px"}})),a()(this,"_getInlinePositioningStyle",Object(c.a)(e=>({position:"absolute",top:(e||0)+"px",overflowX:"hidden",overflowY:"auto"}))),this.state={ariaDescendantId:o.b()},this._dropdownDomId="typeaheadDropdownWrapped-"+v,v+=1}componentDidUpdate(){const{onTypeaheadStateChange:e,query:t}=this.props,s=!(!this._textInputNode||!t);s!==this._typeaheadActive&&(this._typeaheadActive=s,e&&e(s))}resetSelectedItem(){this.setState({selectedItem:void 0})}}a()(O,"contextType",f.a),a()(O,"defaultProps",{source:b.d.Compose});const R=y.a.create(e=>({dropdownStyle:{backgroundColor:e.colors.cellBackground,borderRadius:e.borderRadii.small,boxShadow:e.boxShadows.medium,minHeight:100,position:"fixed",overflowX:"hidden",overflowY:"auto"},mask:Object.assign({},y.a.absoluteFillObject,{position:"fixed"}),inlineStyle:{backgroundColor:e.colors.cellBackground,right:0,left:0,borderTopColor:e.colors.borderColor,borderTopStyle:"solid",borderTopWidth:e.borderWidths.small,minHeight:100},inputContainer:{flexGrow:1,position:"static",width:"100%",zIndex:l.g}}));t.default=Object(m.a)(O,I)},hiGS:function(e,t,s){"use strict";s("IAdD");var r=s("ERkP"),a=s("Lsrn"),n=s("k/Ka");const o=(e={})=>Object(n.a)("svg",Object.assign({},e,{style:[a.a.root,e.style],viewBox:"0 0 24 24"}),r.createElement("g",null,r.createElement("path",{d:"M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"}),r.createElement("path",{d:"M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"})));o.metadata={width:24,height:24},t.a=o},kIAd:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return n}));var r=s("0vv5");const a=500,n={scoper:[{type:"dmUserSearch",regexp:/^[@＠]?(.*)|^$/,srcInputs:["compose_message"],scope:{result_type:"users",count:20}},{type:"username",regexp:/^[@＠](\w{1,20})/,srcInputs:["compose"],scope:{result_type:"users",count:20}},{type:"hashtag",regexp:s.n(r).a,srcInputs:["compose"],scope:{result_type:"topics",count:20}},{type:"topic",regexp:/(.+)/,srcInputs:["search_box"],scope:{result_type:"all"}},{type:"ttt",regexp:/(.+)/,srcInputs:["welcome_flow"],scope:{count:10,result_type:"topics,ttt"}}],WordBoundary:/[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,WordEnd:/[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/}},oEoC:function(e,t,s){"use strict";s.d(t,"d",(function(){return a})),s.d(t,"c",(function(){return n})),s.d(t,"b",(function(){return o})),s.d(t,"e",(function(){return c})),s.d(t,"a",(function(){return i}));s("IAdD"),s("WNMA"),s("LJOr"),s("tVqn"),s("kYxP");var r=s("kIAd");function a(e,t){let s;const a=r.b.scoper.find(r=>{if(-1!==r.srcInputs.indexOf(t))return s=e.match(r.regexp),s});let n="";return s&&(n=s&&(1===s.length?s[0]:s[1])),a?Object.assign({},a.scope,{src:t,q:n}):null}function n(e,t){const s=t.slice(0,e),a=t.slice(e,t.length),n=s.search(r.b.WordEnd),o=n>=0?s.slice(n):"",c=a.search(r.b.WordBoundary),i=o+a.slice(0,c);return i.trim()?{start:n,end:e+c,word:i}:{start:-1,end:-1,word:""}}function o(){return"typeaheadFocus-"+Math.random()}function c(e){const{altKey:t,ctrlKey:s,metaKey:r}=e;return!(t||s||r)}function i(e,t){const s=[];e.forEach(e=>{const r=t.find(t=>t.id===e.id);r&&r.data&&r.data.result_context?s.push(r):s.push(e)});const r=s.map(e=>e.id),a=t.filter(e=>r.indexOf(e.id)<0);return[...s,...a]}},rRIm:function(e,t,s){"use strict";s.d(t,"b",(function(){return C}));s("IAdD"),s("LJOr"),s("kYxP");var r=s("KEM+"),a=s.n(r),n=s("ERkP"),o=s("sTyV"),c=s("rxPX"),i=s("G6rE"),h=Object(c.a)().propsFromState(()=>({loggedInUser:i.e.selectLoggedInUser})).adjustStateProps(({loggedInUser:e})=>({loggedInUserScreenName:e?e.screen_name:void 0})),d=s("3XMw"),l=s.n(d),u=s("V/Zl"),p=s("OrGc"),m=s("QK5w"),S=s("aITJ"),_=s("MWbm"),f=s("TnY3"),y=s("rHpw"),b=s("t62R"),I=s("uScj"),g=s("BcsE");const E=l.a.b47e760d,v=l.a.fd2c7b43,O=new I.a,R=e=>{if(e.target instanceof HTMLInputElement){const t=e.target.tagName.toLowerCase();return"input"===t||"textarea"===t}return!1},C=e=>O.subscribe(e).unsubscribe;class D extends n.Component{constructor(...e){super(...e),a()(this,"_bindKeyboardShortcuts",()=>{const{history:e,loggedInUserScreenName:t}=this.props,s=t=>s=>{s.preventDefault(),O._listeners.length?O.notify(t):e.push({pathname:"/explore",state:{searchFocused:!0,searchPrefill:t}})},r={[p.d.search]:s(),[p.d.goToUser]:s("@"),[p.d.openKeyboardShortcuts]:()=>e.push("/i/keyboard_shortcuts"),[p.d.goExplore]:()=>e.push("/explore"),[p.d.goSettings]:()=>e.push("/settings")},a=t?{[p.d.goProfile]:()=>e.push("/"+t),[p.d.goLikes]:()=>e.push(`/${t}/likes`),[p.d.goLists]:()=>e.push(`/${t}/lists`)}:{},n=Object.assign({},r,a,{[p.d.goHome]:()=>e.push("/home"),[p.d.goDisplay]:()=>e.push("/i/display"),[p.d.goNotifications]:()=>e.push("/notifications"),[p.d.goMentions]:()=>e.push("/notifications/mentions"),[p.d.goMessages]:()=>e.push("/messages"),[p.d.newMessage]:()=>e.push("/messages/compose"),[p.d.newTweet]:()=>e.push("/compose/tweet"),[p.d.goBookmarks]:()=>e.push("/i/bookmarks")}),c=this.props.loggedInUserScreenName?n:r;this._unbindKeyboardShortcuts=Object(o.a)(c)}),a()(this,"_handleKeyDown",e=>{R(e)||"Backspace"!==e.key||(this._backspaceDown=Date.now(),e.preventDefault(),e.stopPropagation())}),a()(this,"_handleKeyUp",e=>{if(!R(e)&&"Backspace"===e.key){e.preventDefault(),e.stopPropagation();const t=this._backspaceDown,s=!!Object(g.a)(t)&&Date.now()-t<500,r=Object(m.a)({},{location:this.props.location});s&&r?this.props.history.goBack():window.close()}})}componentDidMount(){this._bindKeyboardShortcuts(),S.a.isKaiOS()&&Object(u.a)()&&(document.addEventListener("keydown",this._handleKeyDown),document.addEventListener("keyup",this._handleKeyUp))}componentWillUnmount(){this._unbindKeyboardShortcuts&&this._unbindKeyboardShortcuts(),S.a.isKaiOS()&&Object(u.a)()&&(document.removeEventListener("keydown",this._handleKeyDown),document.removeEventListener("keyup",this._handleKeyUp))}render(){return this.props.loggedInUserScreenName?n.createElement(_.a,{accessibilityRole:"heading","aria-level":"2",style:y.a.visuallyHidden},n.createElement(b.c,null,E),n.createElement(b.c,{importantForAccessibility:"no",link:"/i/keyboard_shortcuts"},v)):null}}const w=h(D);t.a=Object(f.a)(w)},sYRn:function(e,t,s){"use strict";var r=s("ERkP"),a=s("eb3s"),n=s("3XMw"),o=s.n(n);const c=o.a.hffea05c,i=o.a.j037e373,h=o.a.d96cf7cd;t.a=({onCancel:e,onConfirm:t})=>r.createElement(a.a,{confirmButtonLabel:h,confirmButtonType:"destructive",headline:c,onCancel:e,onConfirm:t,text:i})},v4XE:function(e,t,s){"use strict";s.d(t,"d",(function(){return p})),s.d(t,"c",(function(){return m})),s.d(t,"a",(function(){return S})),s.d(t,"b",(function(){return _}));s("IAdD"),s("JtPf"),s("kYxP");var r=s("kGix"),a=s("Ssj5"),n=s("RqPI"),o=s("oEOe");const c="rweb/savedSearches",i={fetchStatus:r.a.NONE,savedSearches:[]},h=Object(o.a)(c,"FETCH_SAVED_SEARCHES"),d=Object(o.a)(c,"SAVE_SEARCH"),l=Object(o.a)(c,"DELETE_SAVED_SEARCH");function u(e=i,t){switch(t.type){case h.SUCCESS:return Object.assign({},e,{fetchStatus:r.a.LOADED,savedSearches:t.payload});case h.FAILURE:return Object.assign({},e,{fetchStatus:r.a.FAILED});case d.SUCCESS:return Object.assign({},e,{savedSearches:[...e.savedSearches,t.payload]});case l.SUCCESS:return Object.assign({},e,{savedSearches:e.savedSearches.filter(e=>e.id_str!==t.payload.id_str)});default:return e}}a.a.register({savedSearches:u});const p=e=>e.savedSearches.savedSearches,m=e=>(t,s,{api:r})=>Object(o.b)(t,{request:r.SavedSearches.create,params:{query:e}})({actionTypes:d,context:"SAVE_SEARCH"}),S=e=>(t,s,{api:r})=>Object(o.b)(t,{request:r.SavedSearches.destroy,params:{id:e}})({actionTypes:l,context:"DELETE_SAVED_SEARCH"}),_=()=>(e,t,{api:s})=>{const a=t();if(!Object(n.e)(a))return Promise.resolve();return(e=>e.savedSearches.fetchStatus)(a)===r.a.LOADED?Promise.resolve():e((e,t,{api:s})=>Object(o.b)(e,{request:s.SavedSearches.fetch,params:{}})({actionTypes:h,context:"FETCH_SAVED_SEARCHES"}))}},wtjx:function(e,t,s){"use strict";s.d(t,"g",(function(){return i})),s.d(t,"f",(function(){return h})),s.d(t,"e",(function(){return d})),s.d(t,"d",(function(){return m})),s.d(t,"b",(function(){return _})),s.d(t,"a",(function(){return y})),s.d(t,"c",(function(){return b}));s("IAdD"),s("JtPf");var r=s("Ssj5"),a=s("RqPI");const n=e=>(t,s,{userPersistence:r})=>r.set("rweb.recentSearches",{recentSearches:e}).catch(()=>{Promise.resolve()}),o=(e,t)=>{let s=[];if(e&&e.user){const r=e.user;s=t.filter(e=>e.keyword||e.user&&e.user.id!==r.id)}else if(e&&e.keyword){const r=e.keyword;s=t.filter(e=>e.keyword&&e.keyword.query!==r.query||e.user)}return s},c={fetched:!1,recentSearches:[]};const i=e=>e.recentSearches.recentSearches,h=e=>i(e)[0]||null,d=e=>e.recentSearches.fetched,l="rweb/recentSearches/INIT_FROM_CACHE",u=e=>({type:l,payload:e}),p="rweb/recentSearches/REMOVE_QUERY",m=e=>(t,s,{userPersistence:r})=>{t({payload:e,type:p});const o=s().recentSearches;return Object(a.e)(s())?t(n(o.recentSearches)):Promise.resolve()},S="rweb/recentSearches/CLEAR_ALL",_=()=>(e,t,{userPersistence:s})=>{e({type:S});const r=t().recentSearches;return Object(a.e)(t())?e(n(r.recentSearches)):Promise.resolve()},f="rweb/recentSearches/ADD_QUERY",y=e=>(t,s,{userPersistence:r})=>{t({payload:e,type:f});const o=s().recentSearches;return Object(a.e)(s())?t(n(o.recentSearches)):Promise.resolve()},b=()=>(e,t,{userPersistence:s})=>t().recentSearches.fetched?Promise.resolve():e((e,t,{userPersistence:s})=>{const r=t();return Object(a.e)(r)?s.get("rweb.recentSearches").then(t=>{e(u(t))}).catch(()=>{e(u())}):(e(u()),Promise.resolve())});r.a.register({recentSearches:function(e=c,t){switch(t.type){case f:{const s=t.payload,r=s?o(s,e.recentSearches):[];return r.length>49&&r.splice(49,1),s&&r.unshift(s),Object.assign({},e,{recentSearches:r})}case p:{const s=t.payload,r=s?o(s,e.recentSearches):[];return Object.assign({},e,{recentSearches:r})}case S:return{fetched:!0,recentSearches:[]};case l:return Object.assign({},e,t.payload,{fetched:!0});default:return e}}})}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead.3295cbd5.js.map