"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[975],{5701:(e,o,t)=>{t.r(o),t.d(o,{WebsiteBlocker:()=>ae});var r=t(729),n=t(8335),i=t(1381),a=t(743),l=t(6270),s=t(8258);const c=[Symbol("extendBlockerContentStylesheet"),(e,o)=>{let{jsx:t,boolIf:r,boolSwitch:n}=e,{boolLargeOrMobile:i,blockerOverwrites:{borderColor:a,borderWidth:l},isDialog:s,design:{bg:c,textAlign:d},layout:{dialogBorderRadius:u},footerDesign:p,headerDesign:h}=o;const b=i(h.borderWidth,r),[g]=t("div",{classNames:"header-container",position:"relative",background:r(h.inheritBg,c(),h.bg()),borderRadius:r(s,`${u()} ${u()} 0 0`),padding:i(h.padding,r),paddingBottom:`calc(${b} + ${i(h.padding,r,2)})`,borderWidth:l(),borderStyle:"solid",borderColor:a(),borderBottom:"unset",pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",bottom:"0px",background:h.borderColor(),height:b},">div":{margin:"auto",display:"flex",alignItems:"center",position:"relative",textAlign:r(h.inheritTextAlign,d("val"),h.textAlign("val")),justifyContent:r(h.inheritTextAlign,n([[d("is-center"),"center"],[d("is-right"),"flex-end"]]),n([[h.textAlign("is-center"),"center"],[h.textAlign("is-right"),"flex-end"]]))}}}),v=i(p.borderWidth,r),[f]=t("div",{classNames:"footer-container",fontWeight:p.fontWeight(),color:p.fontColor(),position:"relative",padding:i(p.padding,r),paddingTop:`calc(${v} + ${i(p.padding,r,0)})`,background:r(p.inheritBg,c(),p.bg()),fontSize:i(p.fontSize,r),textAlign:r(p.inheritTextAlign,d("val"),p.textAlign()),borderRadius:r(s,`0 0 ${u()} ${u()}`),borderWidth:l(),borderStyle:"solid",borderColor:a(),borderTop:"unset",pseudos:{":after":{content:"''",display:"block",position:"absolute",left:"0px",right:"0px",top:"0px",background:p.borderColor(),height:v},">div":{margin:"auto",lineHeight:"1.8"}}});return{HeaderContainer:g,FooterContainer:f}}];var d=t(2333);const u=[Symbol("extendBlockerStylesheet"),(e,o)=>{let{jsx:t,boolIf:r,computed:n}=e,{layout:{dialogBorderRadius:i,type:a},design:{textAlign:l,fontFamily:s,fontInheritFamily:c,fontColor:u,borderWidth:p,borderColor:h},headerDesign:{borderWidth:b,borderColor:g},footerDesign:{borderWidth:v,borderColor:f},blocker:x,isMobile:m}=o;const{isDialog:k,isBanner:y}=n([a],(e=>{let[o]=e;return{type:o,isDialog:"dialog"===o,isBanner:"banner"===o}})),w=x.visualType("is-wrapped"),C=n([p,h,b,g,v,f,u],(e=>{let[o,t,r,n,i,a,l]=e;return{borderWidth:(0,d.nw)(o||1),borderColor:0===o?r>0?n:i>0?a:l:t}})),[I]=t("div",{classNames:"inner",textAlign:l("val"),fontFamily:r(c,"inherit",s()),color:u("hex"),borderRadius:r(k,i()),border:`${C.borderWidth()} solid ${C.borderColor()}`,position:"relative",padding:r({when:w,then:{when:m,then:"20px 30px",or:"30px 50px"}}),overflow:r(w,"hidden")}),[B]=t("div",{classNames:"content",boxShadow:r(w,"#0000004d 0px 0px 100px 30px, 0px 2px 5px 2px #0000001c"),borderRadius:r({when:w,then:{when:k,then:i()}}),position:"relative"}),[S]=t("img",{classNames:"inner-bg",objectFit:"cover",position:"absolute",top:0,left:0,width:"100%",height:"100%",filter:`blur(${x.visualBlur()})`},{loading:"lazy"});return{isDialog:k,isBanner:y,Inner:I,Content:B,InnerBackground:S,blockerOverwrites:C}}];var p=t(6552),h=t(9718);function b(e){const{blocker:o}=(0,p._)(),t=e||(0,h.R)();return t.extend(...((e,o)=>{let{presetId:t,isVisualDarkMode:r,visualBlur:n,visualContentType:i,visualType:a,visualThumbnail:l}=o;return[e,e=>{let{className:o,vars:s,variable:c,meta:{id:u}}=e;const p={firstButton:o()},[h]=s({isVisualDarkMode:r,visualBlur:n,visualContentType:i,visualType:a,presetId:t},{visualType:(0,d.IW)(a,["wrapped"]),visualContentType:(0,d.IW)(i,["audio-player","video-player"]),visualBlur:d.nw,presetId:(0,d.IW)(t,["youtube","vimeo"])}),b=l||{},{forceRatio:g,hide:v,titleType:f,width:x,height:m}=b,[k]=s({hide:v||[],forceRatio:g||0,titleType:f||"top",width:x,height:m},{titleType:(0,d.IW)(null==l?void 0:l.titleType,["center","top"]),hide:(0,d.kN)(null==l?void 0:l.hide,["overlay","title"])});return{a11yIds:p,blocker:h,visualThumbnail:{...k,forceRatioIsset:c(g,d.Ey)},individualBlockerClassName:u}}]})(t.reactRootSymbol,o),!0).extend(...u)}var g=t(748).h;const v=[Symbol("extendBlockerBodyStylesheet"),(e,o)=>{let{jsx:t,rule:r,boolIf:n,className:i}=e,{isDialog:a,isMobile:l,blockerOverwrites:{borderWidth:s,borderColor:c},design:{bg:d,fontSize:u},layout:{dialogBorderRadius:p},bodyDesign:{padding:h,descriptionFontSize:b,descriptionInheritFontSize:g},boolLargeOrMobile:v}=o;const f=i(),[x]=t("div",{classNames:"body-container",background:d(),padding:v(h,n),lineHeight:"1.4",borderStyle:"solid",borderColor:c(),borderWidth:s(),borderTopWidth:"0px",borderRadius:n(a,`0 0 ${p()} ${p()}`),pseudos:{">div":{margin:"auto"},[`<.${f} `]:{borderBottom:"0px",borderRadius:"0px"},">div>div,>div>a:last-of-type":{marginBottom:n(l,"10px","15px")}}}),[m]=t("div",r({classNames:"cookie-scroll",fontSize:n(g,v(u,n),v(b,n)),textAlign:"left",marginBottom:"10px",maxHeight:"400px",overflowY:"scroll",paddingRight:"10px"}));return{Container:x,showFooter:f,CookieScroll:m}}];var f=t(1204);function x(){const{blocker:{services:e},consent:o,groups:t}=(0,p._)();return(0,r.Ye)((()=>{const r=[],n=[];for(const e of Object.values(o))n.push(...e);for(const{items:o}of t)for(const t of o)e.indexOf(t.id)>-1&&-1===n.indexOf(t.id)&&r.push(t);return r}),[t,e,o])}var m=t(875),k=t(9524),y=t(9061),w=t(9963),C=t(748).h;const I=(0,w.R)(Promise.all([t.e(812),t.e(595),t.e(713),t.e(376)]).then(t.bind(t,5376)).then((e=>{let{Cookie:o}=e;return o})));var B=t(5712),S=t(748).h,T=t(4440),N=t(413),O=t(748).h;const R=(0,w.R)(Promise.resolve((e=>{let{closeIcon:o}=e;const{hasCloseIcon:t,HeaderTitle:r,HeaderContainer:n}=b().extend(...s.W).extend(...c),i=(0,p._)(),{blocker:{name:a},texts:{blockerHeadline:l}}=i;return g(n,null,g("div",null,g(r,{className:o?t:void 0},l.replace(/{{name}}/gi,a)),o))}))),$=(0,w.R)(Promise.resolve((()=>{const{Container:e,CookieScroll:o,a11yIds:{firstButton:t}}=b().extend(...v),n=(0,p._)(),i=(0,f.q)(),[a,l]=(0,r.eJ)(!1),{texts:{blockerLoadButton:s,blockerLinkShowMissing:c,blockerAcceptInfo:d},onUnblock:u,productionNotice:h,isConsentRecord:g,i18n:{close:w}}=n,B=x(),{description:S,teachings:T}=(0,m.k)({services:B,disableListServicesNotice:!0,disableTcfPurposes:!0});return C(e,null,C("div",null,C(k.I,{description:S,teachings:[...T,d],nl2br:!0}),C(y.z,{id:t,type:"acceptIndividual",onClick:()=>l(!a),forceShow:!0,busyOnClick:!1,"aria-expanded":a,"aria-controls":i},a?w:c),C(o,null,a&&B.map((e=>C(I,{key:e.id,cookie:e,checked:!0,disabled:!0})))),C(y.z,{type:"acceptAll",onClick:e=>u(e),forceShow:!0,sticky:!0,busyOnClick:!g},s),h))}))),A=(0,w.R)(Promise.resolve((()=>{const{FooterContainer:e}=b().extend(...c),{rows:o,render:t}=(0,B.g)({putPoweredByLinkInRow:1});return S(e,null,S("div",null,t(o)))}))),W=e=>{let{closeIcon:o,...t}=e;const n=(0,p._)(),{designVersion:i=N.R,blocker:{visualType:a,visualThumbnail:s,name:c},texts:{blockerHeadline:d},i18n:{skipToConsentChoices:u}}=n,{Inner:h,Content:g,InnerBackground:v,A11ySkipToLink:f,a11yIds:{firstButton:x}}=b().extend(...T.V),m=(0,r.sO)();return O(h,(0,l.Z)({ref:m,className:"wp-exclude-emoji"},t),O(f,{href:`#${x}`,"aria-label":`${d.replace(/{{name}}/gi,c)}, ${u}`},u),"wrapped"===a&&O(v,{src:s.url,alt:s.title,"aria-hidden":!0}),O(g,null,O(R,{closeIcon:o}),O($,null),1===i&&O(A,null)))},H=999999999,D=[Symbol("extendBlockerHeroStylesheet"),(e,o)=>{let{jsx:t,jsxControl:r,control:n,boolIf:i,boolNot:a,boolSwitch:l,boolOr:s,rule:c,varName:u,nestedQuery:p,className:h}=e,{unsetDialogStyles:b,isMobile:g,visualThumbnail:{width:v,height:f,forceRatioIsset:x,forceRatio:m,hide:k,titleType:y},blocker:{visualContentType:w,visualBlur:C,isVisualDarkMode:I,presetId:B},bodyDesign:{acceptAllBg:S}}=o;const T=w("is-audio-player"),N=[w("is-video-player"),B("is-vimeo"),y("is-top")],[O]=t("div",{classNames:"hero-wrapper",aspectRatio:i({when:a(T),then:{when:x("is-set"),then:`1 / calc(${m()} / 100)`,or:`${v()} / ${f()}`}}),position:"relative",height:i(T,"100px"),background:i(I,"linear-gradient(315deg, #2f3237 1%, #5e5e5e 100%)","linear-gradient(hsla(0, 0%, 89%, 1) 1%, hsla(0, 0%, 97%, 1) 100%)")}),[R]=t("div",{classNames:"hero-bg-wrapper",width:i(T,"100px","100%"),overflow:i(T,"hidden"),position:"absolute",inset:"0px"}),[$]=t("img",{classNames:"hero-bg",objectFit:"cover",position:"absolute",inset:"0px",width:"100%",height:"100%",filter:`blur(${C()})`},{loading:"lazy"}),[A]=t("div",{display:i(k("has-title"),"none"),classNames:"hero-title",padding:"5px 10px",maxWidth:"calc(100% - 140px)",fontSize:"15px",overflow:"hidden",textDecoration:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",position:i(y("is-top"),"absolute"),textAlign:i(y("is-center"),"center"),color:l([[T,i(I,"white","black")],[N,"rgb(0, 173, 239)"]],"white"),textShadow:l([[T,i(I,"1px 1px 1px black","1px 1px 1px white")],[N,"none"]],"1px 1px 1px black"),fontWeight:i(N,"bold"),top:i(N,"20px","10px"),background:l([[T,"none"],[y("is-center"),"#0000007d"],[N,"#00000059"]],"none"),left:l([[T,"110px"],[N,"20px"]],"10px"),marginBottom:i(y("is-center"),"15px")}),[W]=t("div",{classNames:"hero-container",cursor:"pointer",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:i(s([k("has-overlay"),T]),"none","rgb(0 0 0 / 38%)"),boxShadow:i(s([k("has-title"),y("is-center"),T]),"none","inset 0 115px 60px -60px rgb(0 0 0 / 77%)")}),[,D]=c({classNames:"hero-button",flex:"none !important",boxShadow:"rgb(0 0 0 / 15%) 0px 0px 100px 30px, rgb(0 0 0 / 40%) 0px 2px 5px 1px",zIndex:9}),L=u(),[z]=t("div",{classNames:"hero-play-wrapper",cursor:"pointer",zIndex:9,borderRadius:i(T,"99px","5px"),position:i(T,"absolute"),left:i(T,"120px"),top:i(T,"49px"),padding:i(T,"10px 10px 10px 13px","15px 30px"),background:l([[T,i(I,"#111213",S())],[N,"rgb(0 0 0 / 70%)"]],S()),[L]:i(T,"0.2","0.3"),pseudos:{":hover":{background:"rgb(26 183 234 / 100%)"},":after":{content:'""',display:"block",background:"transparent",boxSizing:"border-box",width:"0px",height:`calc(60px * var(${L}))`,borderColor:"transparent transparent transparent white",transition:"100ms all ease",cursor:"pointer",borderStyle:"solid",borderWidth:`calc(40px * var(${L})) 0 calc(40px * var(${L})) calc(60px * var(${L}))`}}}),E=u().substr(2);p(`@keyframes ${E}`,{from:{opacity:0},to:{opacity:1}});const[j]=t("div",{classNames:"hero-db-overlay",position:"fixed",inset:"0px",minHeight:"100vh",zIndex:H,background:"#000000cf",animation:`${E} 0.3s`}),M=h();return{HeroWrapper:O,HeroBackgroundWrapper:R,HeroBackground:$,HeroTitle:A,HeroContainer:W,heroButton:D,HeroPlayButton:z,HeroOverlay:j,HeroOverlayBlocker:r("dialog",n({rectTop:0,rectLeft:0,rectWidth:0},{rectTop:d.nw,rectLeft:d.nw,rectWidth:d.nw},(e=>{let{rectLeft:o,rectTop:t,rectWidth:r}=e;const[,n]=c({classNames:["hero-db-container",b],position:"absolute",left:o(),top:t(),padding:i(g,"20px 5px","20px 30px"),boxSizing:"border-box",zIndex:H,animation:`${E} 0.3s`,display:"flex",width:r(),pseudos:{[`.${M}`]:{width:"450px",left:"50%",maxWidth:"calc(100vw - 40px)",transform:"translateX(-50%)"}}});return n})),{tabIndex:0,modifyProps:(e,o)=>{let{rectWidth:t}=o;e.className+=t<=450?` ${M}`:""}})}}];var L=t(748).h;const z=e=>{let{text:o}=e;const{blocker:{isVisualDarkMode:t},bodyDesign:{acceptAllBg:n}}=(0,p._)(),i=(0,r.Ye)((()=>{let e=[];o.split("").forEach((o=>o.charCodeAt(0).toString().split("").map(Number).forEach((o=>e.push(o))))),e=e.map((e=>0===e?1:e)),e=e.map(((o,t)=>t>0?e[t-1]!==o&&o:o)).filter(Boolean),e=e.map(((o,t)=>(0===t||t===e.length-1||!(Math.abs(e[t-1]-o)>=4&&Math.abs(e[t+1]-o)))&&o)).filter(Boolean);for(let o=0;o<100&&!(e.length>500);o++)e=[...e,...e];return e}),[o]);return L("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",position:"absolute",left:170,top:44,right:20,height:46,overflow:"hidden"}},i.map(((e,o)=>L("div",{key:o,style:{height:10*e+"%",background:t?"white":n,paddingLeft:2,marginLeft:0===o?0:2}}))))};var E=t(748).h;const j=e=>{let{svgProps:o={},fill:t}=e;return E("svg",(0,l.Z)({"aria-hidden":!0,width:68,height:48,version:"1.1",enableBackground:"new 0 0 595.3 420.2",viewBox:"0 0 595.3 420.2"},o,{style:{cursor:"pointer",zIndex:9}}),E("path",{d:"m582.3 67.8c-6.8-25.6-17.8-47.4-43.4-54.2-46.5-12.5-241.3-13.6-241.3-13.6s-194.7 1.1-241.2 13.6c-25.6 6.8-36.5 28.5-43.4 54.2-12.5 46.4-13 142.3-13 142.3s.5 95.9 13 142.3c6.8 25.6 17.8 47.4 43.4 54.2 46.5 12.4 241.2 13.6 241.2 13.6s194.8-1.1 241.2-13.6c25.6-6.8 36.6-28.5 43.4-54.2 12.4-46.5 13-142.3 13-142.3s-.4-95.9-12.9-142.3z",fill:t}),E("path",{d:"m401.8 210.1-173.3-96.3v192.6",fill:"#fff"}))};var M=t(7994),P=t(6997),V=t(9869),F=t(510),_=t(748).h;const U=e=>{let{blockerClassName:o,blockerOverlayId:t,heroContainerRef:n}=e;const i=b(),{HeroOverlay:a,HeroOverlayBlocker:l,A11ySkipToLink:s,screenReaderOnlyClass:c}=i.extend(...D).extend(...T.V),d=(0,p._)(),{headerDesign:{fontSize:u,fontColor:h},i18n:{close:g},blockedNode:v}=d,f=(0,r.sO)(),[x,m]=(0,r.eJ)(!(null==v||!v.hasAttribute(F.Cp))),k=(0,M.E)(n,{observe:x}),y=(0,r.sO)(),w=(0,r.I4)((e=>{var o;x&&[y.current,null===(o=y.current)||void 0===o?void 0:o.nextElementSibling].indexOf(e.target)>-1&&m(!1)}),[x,y.current]),C=e=>{var o;e.preventDefault(),m(!1),null===(o=f.current)||void 0===o||o.focus()};return(0,r.d4)((()=>{if(n.current){const e=e=>{f.current=document.activeElement;const o=e.target.classList.contains(c);return m(!0),setTimeout((()=>{var e;o&&(null===(e=y.current)||void 0===e?void 0:e.nextElementSibling.querySelector('a[href^="#a"]')).focus()}),50),e.preventDefault(),e.stopImmediatePropagation(),!1};return n.current.addEventListener("click",e,!0),()=>{var o;return null===(o=n.current)||void 0===o?void 0:o.removeEventListener("click",e,!0)}}return()=>{}}),[n.current]),x&&k?_(P.h,{renderInContainer:document.body},_(r.HY,null,_(a,{ref:y,onClick:w}),_(l,{id:t,rectLeft:k.left+window.scrollX,rectTop:k.top+window.scrollY,rectWidth:k.width,className:o,onClick:w,"interaction-player-uqid":x?"blocker":void 0},_(s,{href:"#",onFocus:C}," "),_(r.n4,{fallback:null},_(W,{closeIcon:_(V.T,{tooltipText:g,width:u,color:h,thickness:2,onClick:()=>m(!1)})})),_(s,{href:"#",onFocus:C}," ")))):null};var Y=t(748).h,Z=t(8200),J=t(2515),q=t(748).h;const G=(0,w.R)(Promise.resolve(W)),X=(0,w.R)(Promise.resolve((e=>{let{blockerClassName:o,blockerOverlayId:t,...n}=e;const i=b(),{HeroWrapper:a,HeroBackgroundWrapper:s,HeroBackground:c,HeroTitle:d,HeroContainer:u,heroButton:h,HeroPlayButton:g,screenReaderOnlyClass:v}=i.extend(...D).extend(...T.V),f=(0,p._)(),{texts:{blockerHeadline:x},blocker:{presetId:m,name:k,visualHeroButtonText:w,visualContentType:C,visualThumbnail:I}}=f,B=(0,r.sO)(),S=(0,r.sO)(),[N,O]=(0,r.eJ)(!1),{url:R}=I,$=I.title||k,A=x.replace(/{{name}}/gi,k),W=`${I.title}ThiS iS jUst ANother TEXT TO reACh minIMum length`||A,H=["video-player","audio-player"].indexOf(C)>-1;return Y(r.HY,null,Y(a,(0,l.Z)({ref:B},n),Y(s,{"aria-hidden":!0},Y(c,{src:R,alt:$})),Y(u,{role:"presentation",onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),ref:S},Y(d,{"aria-hidden":!0},$),Y("a",{href:"#",className:v,"aria-label":`${A}, ${$}`},$),"audio-player"===C&&Y(z,{text:W}),w&&-1===["audio-player","video-player"].indexOf(C)?Y(y.z,{type:"acceptAll",forceShow:!0,busyOnClick:!1,className:h},"  ",w,"  "):H&&("youtube"===m&&"video-player"===C?Y(j,{fill:N?"#ff0808":"rgb(0 0 0 / 70%)"}):Y(g,null)))),Y(U,{blockerClassName:o,blockerOverlayId:t,heroContainerRef:S}))})));var K=t(6358),Q=t(1107),ee=t(7545),oe=t(4670),te=t(3857),re=t(3311),ne=t(748).h;const ie=(0,w.R)(Promise.resolve((e=>{let{skipInitialConsent:o}=e;const t=(0,Z.L)(),{description:n}=t.reactRootSymbol,{recorder:i,isGcm:a,blocker:{visualType:s,visualThumbnail:c},blockedNode:d,updateGcmConsentTypeChecked:u}=(0,p._)(),[g,m]=(0,h.g)(t),k=(e=>{const{individualBlockerClassName:o,showFooter:t}=b(e).extend(...v),{designVersion:r=N.R}=(0,p._)();return[1===r?t:void 0,e.className,o].filter(Boolean).join(" ")})(t),y=(0,f.q)(t),w=x();(0,r.d4)((()=>{a&&!o&&(0,J.u)(w).forEach((e=>u(e,!0)))}),[a,o]),(0,r.d4)((()=>i?(i.restart(),()=>{i.toggle(!1)}):()=>{}),[]);const C={id:y},I={blockerClassName:k,blockerOverlayId:`${n}-o`};return q(g,{value:m},null!=d&&d.hasAttribute(F.St)?q(U,(0,l.Z)({},I,{heroContainerRef:{current:d}})):q("div",{className:k,id:n},"hero"===s&&c?q(X,(0,l.Z)({},I,C)):q(G,C)))}))),ae=e=>{let{container:o,blockedNode:t,poweredLink:l,blocker:s,paintMode:c,setVisualAsLastClickedVisual:d}=e;const{frontend:u,customizeValuesBanner:h,iso3166OneAlpha2:b,bannerDesignVersion:g,bannerI18n:v,isPro:f,isLicensed:x,isDevLicense:m,affiliate:k,isCurrentlyInTranslationEditorPreview:y}=(0,n.u)(),w=(0,i.b)(),C=w.getUserDecision(),I=(0,r.Ye)((()=>new te.K(o)),[]),B=(0,K.H)(),{onUnblock:S}=(T=w.getOptions(),{onUnblock:(e,o)=>{let{onApplyConsent:t,groups:r,blocker:n,recorder:i,isGcm:a,gcmConsent:l}=e;const{decisionCookieName:s,tcfCookieName:c,gcmCookieName:d}=T,{services:u,visualThumbnail:p,id:h}=n,b=(0,Q.h)(s),g=r.find((e=>{let{isEssential:o}=e;return o})),v=!1===b?{[g.id]:g.items.map((e=>{let{id:o}=e;return o}))}:b.consent;for(const{id:e,items:o}of r)for(const{id:t}of o)if(u.indexOf(t)>-1){var f;if((null===(f=v[e])||void 0===f?void 0:f.indexOf(t))>-1)continue;v[e]=v[e]||[],v[e].push(t)}let x;a&&(x=(0,ee.D)(d),x.push(...l.filter((e=>-1===x.indexOf(e))))),t({consent:v,gcmConsent:x,buttonClicked:"unblock",blocker:h,blockerThumbnail:null!=p&&p.embedId?`${p.embedId}-${p.fileMd5}`:void 0,tcfString:()=>oe.Z.get(c),recorderJsonString:i?JSON.stringify(i.createReplay()):void 0,uiView:"initial",event:o})}});var T;const[N,O]=(0,p.C)({recorder:I,container:o,blockedNode:t,...h,...u,productionNotice:ne(re.Z,{isPro:f,isLicensed:x,isDevLicense:m,i18n:v}),paintMode:c,poweredLink:l,iso3166OneAlpha2:b,gcmConsent:[],blocker:s,designVersion:g,i18n:v,keepVariablesInTexts:y,affiliate:k,consent:{...!1===C?{}:C.consent},onApplyConsent:a.$},{...B,onUnblock:(e,o)=>{S(e,o),d(o)}});return ne(N,{value:O},ne(r.n4,{fallback:null},ne(ie,null)))}},6539:(e,o,t)=>{t.d(o,{Z:()=>r});const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"}},2447:(e,o,t)=>{t.d(o,{x:()=>i});var r=function(){return r=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},r.apply(this,arguments)},n={primaryColor:"#333",secondaryColor:"#E6E6E6"};function i(e,o){if(void 0===o&&(o={}),"function"==typeof e.icon){var t=o.placeholders||n;return a(e.icon(t.primaryColor,t.secondaryColor),o)}return a(e.icon,o)}function a(e,o){var t="svg"===e.tag?r(r({},e.attrs),o.extraSVGAttrs||{}):e.attrs,n=Object.keys(t).reduce((function(e,o){var r=o+'="'+t[o]+'"';return e.push(r),e}),[]),i=n.length?" "+n.join(" "):"",l=(e.children||[]).map((function(e){return a(e,o)})).join("");return l&&l.length?"<"+e.tag+i+">"+l+"</"+e.tag+">":"<"+e.tag+i+" />"}},7994:(e,o,t)=>{t.d(o,{E:()=>p});var r,n=t(729),i=["bottom","height","left","right","top","width"],a=new Map,l=function e(){var o=[];a.forEach((function(e,t){var r,n,a=t.getBoundingClientRect();r=a,n=e.rect,void 0===r&&(r={}),void 0===n&&(n={}),i.some((function(e){return r[e]!==n[e]}))&&(e.rect=a,o.push(e))})),o.forEach((function(e){e.callbacks.forEach((function(o){return o(e.rect)}))})),r=window.requestAnimationFrame(e)};const s=function(e,o){return{observe:function(){var t=0===a.size;a.has(e)?a.get(e).callbacks.push(o):a.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[o]}),t&&l()},unobserve:function(){var t=a.get(e);if(t){var n=t.callbacks.indexOf(o);n>=0&&t.callbacks.splice(n,1),t.callbacks.length||a.delete(e),a.size||cancelAnimationFrame(r)}}}};function c(e){return"boolean"==typeof e}function d(e){return!(!e||"[object Function]"!={}.toString.call(e))}var u="undefined"!=typeof window&&window.document&&window.document.createElement?n.bt:n.d4;function p(e,o,t){let r,i;c(o)?r=o:(r=o?.observe??!0,i=o?.onChange),d(t)&&(i=t),n.d4((()=>{c(o)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")}),[o]),n.d4((()=>{d(t)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")}),[t]);let[a,l]=n.eJ(e.current),p=n.sO(!1),h=n.sO(!1),[b,g]=n.eJ(null),v=n.sO(i);return u((()=>{v.current=i,e.current!==a&&l(e.current)})),u((()=>{a&&!p.current&&(p.current=!0,g(a.getBoundingClientRect()))}),[a]),u((()=>{if(!r)return;let o=a;if(h.current||(h.current=!0,o=e.current),!o)return void console.warn("You need to place the ref");let t=s(o,(e=>{v.current?.(e),g(e)}));return t.observe(),()=>{t.unobserve()}}),[r,a,e]),b}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.3/36726372334cf1d144f13185dcf57878/banner-pro-blocker-ui.pro.js.map