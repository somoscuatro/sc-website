"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[617],{6425:(e,n,t)=>{function o(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=[];let i=e.parentElement;const a=void 0!==n;let r=0;for(;null!==i;){const s=i.nodeType===Node.ELEMENT_NODE;if(0===r&&1===t&&s&&a){const t=e.closest(n);return t?[t]:[]}if((!a||s&&i.matches(n))&&o.push(i),i=i.parentElement,0!==t&&o.length>=t)break;r++}return o}t.d(n,{w:()=>o})},222:(e,n,t)=>{t.r(n),t.d(n,{WebsiteBanner:()=>Te});var o=t(729),i=t(8335),a=t(1901),r=t(1381),s=t(9682),c=t(5819),l=t(9483),d=t(6069);const u=async e=>{let{supportsCookiesName:n}=e;return!(0,d.E)(n)&&"essentials"};var h=t(1107);const m=async e=>{let{decisionCookieName:n,revisionHash:t}=e;const o=(0,h.h)(n);if(!1===o)return!1;const{revision:i}=o;return t===i&&"consent"};var g=t(9671),v=t(7893),f=t(5033);function p(){const{userAgent:e}=navigator;return!!e&&!/chrome-lighthouse/i.test(e)&&!(0,f.f)()&&(0,v.Z)(e)}function y(){try{const e=window;if((e.doNotTrack||e.navigator.doNotTrack||e.navigator.msDoNotTrack||"msTrackingProtectionEnabled"in e.external)&&("1"==e.doNotTrack||"yes"==e.navigator.doNotTrack||"1"==e.navigator.doNotTrack||"1"==e.navigator.msDoNotTrack||e.external.msTrackingProtectionEnabled()))return!0}catch(e){}return!1}const w=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return async n=>{let{decisionCookieName:t,groups:o}=n;const i=o.find((e=>{let{isEssential:n}=e;return n}));if(!1!==(0,h.h)(t)||!e)return!1;for(const e of o)if(e!==i)for(const{legalBasis:n}of e.items)if("legitimate-interest"===n)return!1;return!!y()&&"dnt"}};function b(e,n){return new Promise(((t,o)=>{e.then(t,o);const i=new Error("Timed out");setTimeout(o,n,i)}))}const k=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return async o=>{let{decisionCookieName:i,revisionHash:a}=o;if(p()||!t)return!1;const r=(0,h.h)(i);if(r){const{revision:e}=r;if(a===e)return"consent"}try{const{predecision:t}=await b(e(),n);return t}catch(e){return!1}}};var C=t(5228),O=t(6945);const x={path:"/consent/dynamic-predecision",method:O.O.POST,obfuscatePath:"keep-last-part"};function D(e){(0,o.d4)((()=>{if((0,i.u)().customizeIdsBanner)return;const{restNamespace:n,restRoot:o,restQuery:d,restNonce:v,restPathObfuscateOffset:f,others:{isPreventPreDecision:y,hasDynamicPreDecisions:b,frontend:{isRespectDoNotTrack:O,isAcceptAllForBots:D}}}=(0,a.m)(),{onSave:S,suspense:P}=e;var I,N,T;!async function(e,n){let o=!0;const i=e instanceof s.G?e.getOptions():e,{gateways:a,args:r,onIsDoNotTrack:d,onShowCookieBanner:u}=n;for(const e of a){const n=await e(i,...r);if(!1!==n){o=!1;const e=e=>Promise.all([t.e(812),t.e(595),t.e(713),t.e(376)]).then(t.bind(t,8477)).then((n=>{let{apply:t}=n;return t({type:e,...i})}));"all"===n?e("all"):"essentials"===n?e("essentials"):"dnt"===n?d((()=>e("essentials"))):"consent"===n&&e("consent");break}}o&&(u(),document.dispatchEvent(new CustomEvent("RCB/Banner/Show/Interactive")),await(0,l.C)(),document.dispatchEvent(new CustomEvent(c.I,{detail:{}})))}((0,r.b)(),{gateways:[async()=>(await P.tcf,!1),u,m,(T=["login-action-"],"force-cookie-banner",async()=>{const{className:e}=document.body;return!(e&&e.indexOf("force-cookie-banner")>-1)&&T.filter((n=>e.indexOf(n)>-1)).length>0&&"consent"}),(N=!!D&&"all",async e=>{let{decisionCookieName:n}=e;return await(0,g.H)(),!(!1!==(0,h.h)(n)||!N)&&!!p()&&N}),w(O),k((()=>{const{clientWidth:e,clientHeight:t}=document.documentElement;return(0,C.D)({location:x,options:{restNamespace:n,restRoot:o,restQuery:d,restNonce:v,restPathObfuscateOffset:f},sendRestNonce:!1,request:{viewPortWidth:e,viewPortHeight:t},params:{_wp_http_referer:window.location.href}})}),1e4,b),(I=y,async()=>!!I&&(p()?"all":"consent"))],args:[e],onIsDoNotTrack:()=>{S(!0,"none")},onShowCookieBanner:()=>{const{tcf:n}=e;e.set({consent:(0,r.b)().getDefaultDecision(),gcmConsent:[],visible:!0})}})}),[])}var S=t(743),P=t(6810),I=t(8856),N=t(1762),T=t(410),A=t(9869),B=t(748).h;const E=()=>{const{headerDesign:{fontColor:e,fontSize:n},texts:{acceptEssentials:t},activeAction:i,pageRequestUuid4:a,i18n:{close:r,closeWithoutSaving:s},buttonClicked:c=""}=(0,I.S)(),{buttonClickedCloseIcon:l,closeIcon:d}=(0,T.T)(),u=(0,o.Ye)((()=>window.innerWidth),[]);return B(A.T,{width:n,color:e,tooltipText:i?"change"===i?s:r:t,tooltipAlways:u<N.y8,framed:c===l,renderInContainer:document.getElementById(a).querySelector("dialog"),onClick:d})};var R=t(2333);const L=[Symbol("extendBannerContentStylesheet"),(e,n)=>{let{boolIf:t,boolSwitch:o,computed:i,boolNot:a,jsx:r}=e,{dimsOverlay:s,boolLargeOrMobile:c,isMobile:l,isBanner:d,design:u,bodyDesign:h,headerDesign:m,layout:g,decision:v,mobile:f,texts:p,activeAction:y,footerDesign:w,individualLayout:b,individualPrivacyOpen:k,footerBorderStyle:C,headerBorderStyle:O}=n;const x=i([m.logo,m.logoRetina,m.logoFitDim,m.logoRetinaFitDim,m.logoMaxHeight],(e=>{let[n,t,o,i,a]=e;const r=t&&(null==n||!n.endsWith(".svg"))&&window.devicePixelRatio>1?i:o;return(null==r?void 0:r[0])>0?{width:(0,R.nw)(r[0]),height:(0,R.nw)(r[1])}:{width:"auto",height:(0,R.nw)(a)}})),D=t({when:d,then:{when:[k,a(b.inheritBannerMaxWidth)],then:b.bannerMaxWidth(),or:g.bannerMaxWidth()}}),S=c(m.borderWidth,t),[P]=r("div",{classNames:"header-container",position:"sticky",zIndex:9,top:0,background:t(m.inheritBg,u.bg(),m.bg()),padding:c(m.padding,t),paddingBottom:`calc(${S} + ${c(m.padding,t,2)})`,...O,pseudos:{":has(>div:empty)":{display:"none"},":has(>div:empty)+div":O,":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",bottom:"0px",background:m.borderColor(),height:S},">div":{transition:"width 500ms, max-width 500ms",maxWidth:D,margin:"auto",display:"flex",alignItems:"center",position:"relative",textAlign:t(m.inheritTextAlign,u.textAlign("val"),m.textAlign("val")),justifyContent:t(m.inheritTextAlign,o([[u.textAlign("is-center"),"center"],[u.textAlign("is-right"),"flex-end"]]),o([[m.textAlign("is-center"),"center"],[m.textAlign("is-right"),"flex-end"]])),flexDirection:t({when:[m.logo("is-filled"),p.headline("is-filled")],then:o([[m.logoPosition("is-left"),"row"],[m.logoPosition("is-right"),"row-reverse"]],"column")})},">div>img":{margin:c(m.logoMargin,t),width:x.width(),height:x.height()}}}),I=o([[[y("is-filled"),v.showCloseIcon()],"51px"]],"0px"),N=s[1].height(),[T]=r("div",{classNames:"content",position:"relative",overflow:"auto",maxHeight:t({when:l,then:{when:k,then:`calc(${N} - ${I})`,or:`calc(min(${N}, ${f.maxHeight()}) - ${I})`},or:`calc(${N} - ${t(d,"0px","20px")} - ${I})`}),..."Win32"===navigator.platform?{overflow:CSS.supports("overflow","overlay")?"overlay":"scroll",scrollbarWidth:"thin",scrollbarColor:`${h.teachingsFontColor()} transparent`,pseudos:{"::-webkit-scrollbar":{width:"11px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{background:h.teachingsFontColor(),borderRadius:g.dialogBorderRadius(),border:`3px solid ${u.bg()}`}}}:{}}),A=c(w.borderWidth,t),[B]=r("div",{classNames:"footer-container",fontWeight:w.fontWeight(),color:w.fontColor(),position:"sticky",bottom:"0px",zIndex:1,padding:c(w.padding,t),paddingTop:`calc(${A} + ${c(w.padding,t,0)})`,background:t(w.inheritBg,u.bg(),w.bg()),fontSize:c(w.fontSize,t),textAlign:t(w.inheritTextAlign,u.textAlign("val"),w.textAlign()),...C,pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",top:"0px",background:w.borderColor(),height:A},">div":{transition:"width 500ms, max-width 500ms",maxWidth:D,margin:"auto",lineHeight:"1.8"},":has(>div:empty)":{display:"none"}}});return{HeaderContainer:P,Content:T,FooterContainer:B}}];var H=t(8258),$=t(748).h;const W=(0,o.Gp)(((e,n)=>{let{className:t}=e;const o=(0,P.Y)(),{a11yIds:i,HeaderContainer:a,hasCloseIcon:r,HeaderTitle:s}=o.extend(...L).extend(...H.W),{headerDesign:{logo:c,logoRetina:l,logoAlt:d},decision:{showCloseIcon:u},texts:{headline:h},activeAction:m,individualPrivacyOpen:g,individualTexts:v,i18n:{headerTitlePrivacyPolicyHistory:f}}=(0,I.S)(),p=l&&(null==c||!c.endsWith(".svg"))&&window.devicePixelRatio>1?l:c,y=!!u||!!m,w=g?"history"===m?f:v.headline:h;return $(a,{ref:n,className:t},$("div",null,!!p&&$("img",{"aria-hidden":!0,alt:d||"",src:p}),!!w&&$(s,{id:i.headline,className:y?r:void 0},w),y&&$(E,null)))}));var V=t(6190),_=t(5712),F=t(9718),M=t(748).h;const z=()=>{const{FooterLanguageSwitcherSelect:e}=(0,F.R)().extend(...H.W),{footerDesign:{languageSwitcher:n},languageSwitcher:t,onLanguageSwitch:i}=(0,I.S)(),a=(0,o.Ye)((()=>t.find((e=>{let{current:n}=e;return n}))),[t]),r="flags"===n&&!(null==a||!a.flag);return M(e,{"data-flag":r},r&&M("span",{style:{backgroundImage:`url(${a.flag})`}}),M("select",{value:null==a?void 0:a.locale,"aria-label":null==a?void 0:a.name,onChange:e=>{null==i||i(t.find((n=>{let{locale:t}=n;return t===e.target.value})))}},t.map((e=>{let{locale:n,name:t}=e;return M("option",{value:n,key:n},t)}))))};var Y=t(748).h;const q=(0,o.Gp)(((e,n)=>{const{FooterContainer:t}=(0,P.Y)().extend(...L),i=(0,I.S)(),{isTcf:a,layout:{type:r},footerDesign:{languageSwitcher:s},individualPrivacyOpen:c,onClose:l,i18n:{tcf:d},isConsentRecord:u,languageSwitcher:h,set:m}=i,g=(0,o.I4)((e=>{l(),e.preventDefault()}),[l]),{rows:v,render:f}=(0,_.g)({onClose:u?g:void 0,putPoweredByLinkInRow:"banner"===r?0:1,row1:[!1],row1End:[(null==h?void 0:h.length)>0&&s&&"disabled"!==s&&Y(z,{key:"languageSwitcher"})]});return Y(t,{ref:n},Y("div",null,f(v)))}));var G=t(4440),U=t(3189),J=t.n(U),j=t(9963),Q=t(748).h;const Z=(0,j.R)(Promise.resolve(W),"BannerHeader"),K=(0,j.R)(Promise.resolve(V.e),"BannerBody"),X=(0,j.R)(Promise.resolve(q),"BannerFooter");var ee=t(6425),ne=t(3861);const te='[href^="#consent-"]';function oe(){window.location.hash.startsWith("#consent-")&&(window.location.hash="")}var ie=t(748).h;function ae(e){let{isVisible:n,animationIn:t,animationOut:o,animationInDuration:i,animationOutDuration:a,animationInDelay:r,animationOutDelay:s}=e;return n?{animation:t,duration:i,delay:r}:{animation:o,duration:a,delay:s}}const re=e=>{let{animateOnMount:n=!0,isVisible:t=!0,animationIn:i="fadeIn",animationOut:a="fadeOut",animationInDelay:r=0,animationOutDelay:s=0,animationInDuration:c=1e3,animationOutDuration:l=1e3,className:d="",style:u={},children:h}=e;const[{animation:m,duration:g,delay:v},f]=(0,o.eJ)(n?ae({isVisible:t,animationIn:i,animationOut:a,animationInDelay:r,animationOutDelay:s,animationInDuration:c,animationOutDuration:l}):{animation:"",delay:void 0,duration:0});return(0,o.d4)((()=>{f(ae({isVisible:t,animationIn:i,animationOut:a,animationInDelay:r,animationOutDelay:s,animationInDuration:c,animationOutDuration:l}))}),[t,i,a,r,s,c,l]),ie("div",{className:`animate__animated animate__${m} ${d}`,style:{animationDelay:`${v}ms`,animationDuration:`${g}ms`,pointerEvents:t?"all":"none",...u,...m?{}:{opacity:t?1:0,transition:`opacity ${v}ms`}}},h)};function se(e,n){const t=(0,o.sO)(0),i=(0,o.sO)(0),[a,r]=(0,o.eJ)(e),[s,c]=(0,o.eJ)(void 0),[l,d]=(0,o.eJ)(n),[u,h]=(0,o.eJ)(void 0);return(0,o.d4)((()=>{t.current>0&&("none"===e?r(e):(r("none"),c(e))),t.current++}),[e]),(0,o.d4)((()=>{i.current>0&&(0===n?d(n):(d(0),h(n),r("none"),c(e))),i.current++}),[n]),(0,o.d4)((()=>{void 0!==s&&(r(s),c(void 0))}),[s]),(0,o.d4)((()=>{void 0!==u&&(d(u),h(void 0))}),[u]),[a,l]}var ce=t(8200),le=t(2375),de=t(3464),ue=t(748).h;const he=(0,j.R)(Promise.resolve((()=>{const{Content:e,hideOnMobileClass:n,dimsContent:t,dimsOverlay:i,dimsHeader:a,dimsFooter:r,A11ySkipToLink:s,a11yIds:{firstButton:c}}=(0,P.Y)().extend(...G.V).extend(...L),{decision:{acceptAll:l,acceptEssentials:d,showCloseIcon:u},mobile:h,individualPrivacyOpen:m,bodyDesign:{acceptEssentialsUseAcceptAll:g},activeAction:v,pageRequestUuid4:f,i18n:{skipToConsentChoices:p}}=(0,I.S)(),y=(0,o.sO)(),w=g&&l===d?l:d,b=!h.hideHeader||v||m||"hide"===w&&u?"":n,k=(0,o.sO)();k.current=k.current||{};const C=(0,o.I4)((()=>[document.querySelector(`#${f} div[class*="animate__"]`)]),[f]),O=(0,o.I4)(((e,n)=>{let[t,,o]=e;n?t(n,C()):o()}),[C]),x=(0,o.I4)((e=>O(a,e)),[O]),D=(0,o.I4)((e=>O(r,e)),[O]);return(0,o.d4)((()=>{const e=C(),n=[t[0](y.current),i[0](document.querySelector(`#${f}`),e)];return()=>n.forEach((e=>e()))}),[]),(0,o.d4)((()=>{J().mutate((()=>setTimeout((()=>y.current.scrollTop=0),0)))}),[m]),Q(e,{ref:y},Q(s,{href:`#${c}`},p),Q(Z,{ref:x,className:b}),Q(K,null),Q(X,{ref:D}))})),"BannerContent"),me=(e,n)=>{const{dataset:t,style:o}=document.body;void 0===t.rcbPreviousOverflow&&(t.rcbPreviousOverflow=o.overflow),o.overflow=e&&n?"hidden":t.rcbPreviousOverflow,document.body.parentElement.style.overflow=o.overflow},ge=(0,j.R)(Promise.resolve((()=>{const e=(0,I.S)(),{recorder:n,visible:t,skipOverlay:i,pageRequestUuid4:a,individualPrivacyOpen:r,fetchLazyLoadedDataForSecondView:s,layout:{overlay:c,animationInDuration:l,animationOutDuration:d}}=e,u=(0,o.sO)(),h=(0,o.sO)(),m=(0,o.sO)(!1),[g,v]=function(e){let{animationIn:n,animationInOnlyMobile:t,animationOut:i,animationOutOnlyMobile:a}=e;const r=(0,o.Ye)((()=>window.innerWidth),[])<N.y8;let s=t?r?n:"none":n,c=a?r?i:"none":i;return(0,o.Ye)((()=>{const e=window.navigator.userAgent.toLowerCase();return 4===["firefox","gecko","mobile","android"].map((n=>e.indexOf(n)>-1)).filter(Boolean).length}),[])&&(s="none",c="none"),[s,c]}(e.layout),[f,p]=se(g,l),[y,w]=se("none"===v?"fadeOut":v,"none"===v?0:d),[b,k]=(0,de.s)(["BannerContent","BannerHeader","BannerBody","BannerFooter","BodyDescription"],J().mutate.bind(J()),(()=>u.current.style.removeProperty("display"))),C=(0,F.R)(),{a11yIds:{firstButton:O},inner:x,Dialog:D,Overlay:S,individualPrivacyOpen:P,registerWindowResize:T}=C.extend(...le.y);if((0,o.Ye)((()=>{P.update(r),r&&(null==s||s())}),[r]),(0,o.d4)(T,[]),(0,o.d4)((()=>()=>{me(!1,c)}),[c]),function(){const{openBanner:e,openHistory:n,revokeConsent:t}=(0,I.S)();(0,o.d4)((()=>{const o=(o,i,a)=>{if(e)switch(o){case"change":e(a);break;case"history":n(a);break;case"revoke":t(i,a)}},i=n=>{if(!e)return;const t=n.target;(0,ee.w)(t,te).concat((0,ne.D)(t,te)?[t]:[]).forEach((e=>{o(e.getAttribute("href").slice(9),e.getAttribute("data-success-message"),n)})),(0,ne.D)(t,".rcb-sc-link")&&o(t.getAttribute("href").slice(1),t.getAttribute("data-success-message"),n)},a=()=>{const{hash:e}=window.location;e.startsWith("#consent-")&&o(e.substring(9),void 0,void 0)};return a(),window.addEventListener("hashchange",a),document.addEventListener("click",i,!0),()=>{window.removeEventListener("hashchange",a),document.removeEventListener("click",i,!0)}}),[e,n,t])}(),(0,o.d4)((()=>{t&&n&&J().mutate((()=>{n.restart()}))}),[t,n]),(0,o.d4)((()=>{const e=u.current,n=h.current||document.getElementById(a),o=function(e){this.querySelector(`a[href="#${O}"]`).focus(),e.preventDefault()};if(t?(m.current=!0,null!=e&&e.isConnected&&(e.open&&e.close(),J().mutate((()=>{var n;null===(n=e[c?"showModal":"show"])||void 0===n||n.call(e)})),e.addEventListener("cancel",o))):null==e||e.close(),n){const e=0,o=t?"none"===g?e:l:"none"===v?e:d,i=o>0,a=e=>{i&&(n.style.transition=`background ${o}ms`),n.style.display=e?"block":"none",me(e,c)};t?J().mutate((()=>{a(!0)})):m.current&&(setTimeout((()=>J().mutate((()=>a(!1)))),o),oe())}return()=>{null==e||e.removeEventListener("keyup",o)}}),[t,c]),(0,o.d4)((()=>{t&&J().mutate((()=>u.current.focus({preventScroll:!0})))}),[t,r]),!t&&!m.current)return null;const A=ue(D,{className:"wp-exclude-emoji "+(r?"second-layer":""),ref:u,style:{display:"none"},"data-nosnippet":!0},ue(b,{value:k},ue(re,{animationIn:f,animationInDuration:p,animationOut:y,animationOutDuration:w,isVisible:t,className:x},ue(he,null))));return i?A:ue(S,{id:a,className:C.className,ref:h},A)})));var ve=t(6358),fe=t(5195),pe=t(1087);const ye=e=>{e&&(e.preventDefault(),e.stopPropagation())},we=(e,n)=>Object.assign(e,{activeAction:n,individualPrivacyOpen:!0,refreshSiteAfterSave:"change"===n&&2e3,visible:!0}),be={path:"/revision/second-view",method:O.O.GET,obfuscatePath:"keep-last-part"},ke={path:"/consent",method:O.O.GET,obfuscatePath:"keep-last-part"};var Ce=t(3311),Oe=t(3857),xe=t(7545),De=t(748).h;const Se=e=>{let{children:n}=e;return De(o.HY,null,n)},Pe=e=>{let{promise:n,children:t,suspenseProbs:i}=e;const a=(0,o.Ye)((()=>(0,j.R)((n||Promise.resolve()).then((()=>Se)),void 0,i)),[n]);return De(a,null,t)};var Ie=t(748).h;const Ne=(0,j.R)(Promise.resolve((()=>{const{pageRequestUuid4:e}=(0,I.S)(),n=(0,ce.L)();n.specify(e);const[t,o]=(0,F.g)(n);return ue(t,{value:o},ue(ge,null))}))),Te=e=>{let{poweredLink:n}=e;const{frontend:t,customizeValuesBanner:s,pageRequestUuid4:c,iso3166OneAlpha2:l,bannerDesignVersion:d,bannerI18n:u,isPro:m,isLicensed:v,isDevLicense:f,affiliate:p,isCurrentlyInTranslationEditorPreview:y}=(0,i.u)(),{restNamespace:w,restRoot:b,restQuery:k,restNonce:O,restPathObfuscateOffset:x}=(0,a.m)(),{decisionCookieName:P}=t,N=(0,r.b)(),T=N.getUserDecision(),A=(0,xe.D)(N.getOption("gcmCookieName")),B=(F=t.isTcf,M=t.tcf,z=t.tcfMetadata,N.getOptions(),Y=async()=>{},q=[F,M,z],(0,o.Ye)((()=>(0,g.H)().then(Y)),q)),[E,R]=function(e,n){const o=window.rcbLazyPromise;let i,a;if(o)[a,i]=o;else{let e=!1;a=!1===n?Promise.resolve({}):new Promise((n=>{i=async()=>{e||(e=!0,n(await(0,C.D)({location:be,options:{restNamespace:w,restRoot:b,restQuery:k,restNonce:O,restPathObfuscateOffset:x},params:{revisionHash:t.revisionHash},sendRestNonce:!1})))}}))}return[a,i]}(0,t.hasLazyData),L=document.getElementById(c),H=(0,o.Ye)((()=>new Oe.K(L)),[]),$=(0,ve.H)(),W={onClose:e=>{Object.assign(e,{visible:!1,refreshSiteAfterSave:!1})},openHistory:(e,n)=>{we(e,"history"),ye(n)},openBanner:(e,n)=>{we(e,"change"),ye(n)},revokeConsent:(e,n,t)=>{let{onApplyConsent:o,isTcf:i,tcf:a,isGcm:r,groups:s}=e;o({consent:(0,pe.R)(s,!0),gcmConsent:r?[]:void 0,buttonClicked:"shortcode_revoke",tcfString:void 0}).then((()=>{n&&alert(n),oe(),setTimeout((()=>window.location.reload()),2e3)})),ye(t)},onSave:(e,n,t)=>{const{refreshSiteAfterSave:o}=e,i=(0,g.H)().then((async()=>{const{onApplyConsent:o,activeAction:i,consent:a,tcf:r,isTcf:s,isGcm:c,gcmConsent:l,recorder:d}=e;let u;if(c)switch(t){case"ind_all":case"ind_custom":case"main_all":case"main_custom":u=l;break;default:u=[]}return o({consent:a,gcmConsent:u,markAsDoNotTrack:n,buttonClicked:t,tcfString:void 0,recorderJsonString:d?JSON.stringify(d.createReplay()):void 0,uiView:"change"===i?"change":"revoke"!==i?"initial":void 0})}));o?i.then((()=>{oe(),setTimeout((()=>window.location.reload()),o||2e3)})):Object.assign(e,{visible:!1})},updateCookieChecked:(e,n,t,o)=>{const{consent:i,isGcm:a,groups:r,updateGcmConsentTypeChecked:s}=e;i[n]||(i[n]=[]);const c=i[n],l=c.indexOf(t);if(o&&-1===l?c.push(t):!o&&l>-1&&c.splice(l,1),c.length||delete i[n],a){const e=r.map((e=>{let{id:n,items:t}=e;return t.filter((e=>{var t;let{id:o}=e;return(null===(t=i[n])||void 0===t?void 0:t.indexOf(o))>-1}))})).flat();for(const i of r.find((e=>{let{id:t}=e;return t===n})).items.find((e=>{let{id:n}=e;return t===n})).googleConsentModeConsentTypes)o?s(i,!0):e.some((e=>{let{googleConsentModeConsentTypes:n}=e;return n.includes(i)}))||s(i,!1)}},updateGroupChecked:(e,n,t)=>{const{groups:o,updateCookieChecked:i}=e;for(const e of o.find((e=>{let{id:t}=e;return t===n})).items)i(n,e.id,t)}},[V,_]=(0,I.g)({...s,...t,recorder:H,productionNotice:Ie(Ce.Z,{isPro:m,isLicensed:v,isDevLicense:f,i18n:u}),pageRequestUuid4:c,iso3166OneAlpha2:l,gcmConsent:A,tcf:void 0,tcfFilterBy:"legInt",poweredLink:n,visible:!1,skipOverlay:!0,previewCheckboxActiveState:!1,individualPrivacyOpen:!1,designVersion:d,i18n:u,keepVariablesInTexts:y,affiliate:p,consent:{...!1===T?{}:T.consent,...(0,r.b)().getDefaultDecision(!1===T)},onApplyConsent:S.$,didGroupFirstChange:!1,fetchLazyLoadedDataForSecondView:R,suspense:{tcf:B,lazyLoadedDataForSecondView:E}},{...$,...W,fetchHistory:()=>(0,C.D)({location:ke,options:{restNamespace:w,restRoot:b,restQuery:k,restNonce:O,restPathObfuscateOffset:x},cookieValueAsParam:[P],sendRestNonce:!1}),onLanguageSwitch:(e,n)=>{let{url:t}=n;window.location.href=t}});var F,M,z,Y,q;return D(_),function(e,n){(0,o.d4)((()=>{const t=()=>{const t=(0,h.h)(n);t&&e.set({consent:t.consent})};return document.addEventListener(fe.V,t),()=>{document.removeEventListener(fe.V,t)}}),[])}(_,P),Ie(V,{value:_},Ie(Pe,{promise:B},Ie(Ne,null)))}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.3/c1f371335a4b426b65f94a6afe50e622/banner-pro-banner-ui.pro.js.map