"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[376],{8477:(e,t,n)=>{n.r(t),n.d(t,{apply:()=>f});var a=n(9483),o=n(9671),s=n(3460),l=n(1107),i=n(8017);function r(e){let t,{decisionCookieName:n,setCookiesViaManager:a,isGcm:o,groups:s,type:r}=e;const{useManager:c}=(0,i.Lg)(a,{isGcm:o,presetId:""}),u=s.find((e=>{let{isEssential:t}=e;return t})),d={[u.id]:u.items.map((e=>{let{id:t}=e;return t}))};if("consent"===r){const e=(0,l.h)(n);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=d)}return"essentials"===r&&(t=d),{isManagerActive:"none"!==c,selectedGroups:t,iterateServices:async function(e){for(const l of s)for(const s of l.items){var n;const c="all"===r||(null===(n=t[l.id])||void 0===n?void 0:n.indexOf(s.id))>-1,u=(0,i.Lg)(a,{presetId:s.presetId,isGcm:o});await e(l,s,c,u)}}}}var c=n(4322),u=n(1214),d=n(4670),p=n(9576),g=n(5855);var v=n(9163),h=n(5195),m=n(791);async function f(e){const t=[];await r(e).iterateServices((async(e,n,a)=>{a&&t.push({group:e,service:n})})),document.dispatchEvent(new CustomEvent(v.x,{detail:{services:t}})),await(0,a.C)();const{dataLayer:n,isManagerOptOut:l,services:i,ready:f}=await async function(e){const t=[],{isManagerActive:n,iterateServices:a}=r(e),{skipOptIn:o}=e;let l,i=!1;const u=[];return await a((async(e,r,d,p)=>{let{getDataLayer:g,serviceIsManager:v}=p;const{codeDynamics:h,codeOptIn:m,executeCodeOptInWhenNoTagManagerConsentIsGiven:f}=r,y=n&&v;if(d){const i=n&&f,d="function"==typeof o&&o(r);if(y){const e={},t={},n={};await a(((a,o,s,l)=>{let{serviceIsManager:i}=l;if(!i){const{tagManagerOptInEventName:a,tagManagerOptOutEventName:l,uniqueName:i}=o;a&&(t[a]=s),l&&(n[l]=!s),i&&(e[i]=s)}})),Object.assign(e,t),Object.assign(e,n),l=g(),l.push({realCookieBannerConsents:e,realCookieBannerOptInEvents:t,realCookieBannerOptOutEvents:n})}i||d||!m||u.push((0,s.K)(m,h));const p={group:e,service:r};document.dispatchEvent(new CustomEvent(c.g,{detail:p})),t.push(p)}else y&&(i=!0)})),{isManagerOptOut:i,dataLayer:l,services:t,ready:Promise.all(u)}}(e),{ready:y}=await async function(e,t,n){const a=[],{isManagerActive:o,iterateServices:l}=r(e);return t?(l(((e,n,a,o)=>{let{tagManagerOptInEventName:s}=n,{features:l}=o;a&&s&&l.events&&t.push({event:s})})),setTimeout((()=>l(((e,n,a,o)=>{let{tagManagerOptOutEventName:s}=n,{features:l}=o;!a&&s&&l.events&&t.push({event:s})}))),1e3)):o&&n&&await l((async(e,t,n)=>{let{codeDynamics:o,codeOptIn:l,executeCodeOptInWhenNoTagManagerConsentIsGiven:i}=t;n&&i&&a.push((0,s.K)(l,o))})),{ready:Promise.all(a)}}(e,n,l),C=Promise.all([f,y]);await(0,o.H)(),document.dispatchEvent(new CustomEvent(h.V,{detail:{services:i,ready:C}}));const{deleteHttpCookies:b,services:k,ready:S}=await async function(e,t){const n=[],{isManagerActive:a,iterateServices:o}=r(e),l=[],i=[];return await o((async(e,o,r)=>{const{id:c,codeDynamics:v,codeOptOut:h,deleteTechnicalDefinitionsAfterOptOut:m,isEmbeddingOnlyExternalResources:f,technicalDefinitions:y,executeCodeOptOutWhenNoTagManagerConsentIsGiven:C}=o;if(!r){const r=a&&C;(r&&t||!r)&&l.push((0,s.K)(h,v)),m&&!f&&(function(e,t){for(const{type:n,name:a}of e){const e=(0,p.c)(a,t);if("*"===e)continue;const o=new RegExp((0,g.L)(e),"g");switch(n){case"http":for(const e of Object.keys(d.Z.get()))o.test(e)&&d.Z.remove(e);break;case"local":case"session":try{const e="local"===n?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(o.test(t)){try{e.setItem(t,null)}catch(e){}let n=0;for(;e.getItem(t)&&n<100;)n++,e.removeItem(t)}}catch(e){continue}}}}(y,v),y.some((e=>{let{type:t}=e;return"http"===t}))&&i.push(c));const b={group:e,service:o};document.dispatchEvent(new CustomEvent(u.E,{detail:b})),n.push(b)}})),{services:n,ready:Promise.all(l),deleteHttpCookies:i}}(e,l);document.dispatchEvent(new CustomEvent(m.C,{detail:{services:k,deleteHttpCookies:b,ready:Promise.all([C,S])}}))}},3838:(e,t,n)=>{n.r(t),n.d(t,{BannerHistorySelect:()=>o});var a=n(748).h;const o=()=>{const e=(0,n(8856).S)(),{Select:t}=(0,n(6810).Y)().extend(...n(1440).A),{set:o,consent:s,groups:l,tcf:i,isGcm:r,gcmConsent:c,lazyLoadedDataForSecondView:u,activeAction:d,history:p,fetchHistory:g,i18n:{historyLabel:v,historySelectNone:h}}=e,[m,f]=(0,n(729).eJ)(),[y,C]=(0,n(729).eJ)({consent:s,groups:l,tcf:i,gcmConsent:c,lazyLoadedDataForSecondView:u}),b=e=>{let{tcf:t,gcmConsent:a=[],...s}=e;const l={isTcf:!!t,tcf:null,gcmConsent:[]};t&&Object.assign(l,{tcf:"gvl"in t?t:(0,n(382).P)(t)}),r&&Object.assign(l,{gcmConsent:a}),o({...s,...l})};(0,n(729).d4)((()=>{b(m?m.context:{consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0})}),[m]);const k=(0,n(729).sO)(!1);(0,n(729).d4)((()=>{u&&!k.current&&"history"===d&&(k.current=!0,async function(){const e=await g();C({consent:s,groups:l,tcf:i,gcmConsent:c,lazyLoadedDataForSecondView:u}),o({history:e}),f(e[0])}())}),[u,d]),(0,n(729).d4)((()=>()=>b(y)),[]);const S=null==m?void 0:m.uuid;return a(n(729).HY,null,v," ",a(t,{disabled:!(null!=p&&p.length),value:(null==m?void 0:m.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of p){const{id:n}=e;if(n===t){f(e);break}}}},(null==p?void 0:p.length)>0?p.map((e=>{let{id:t,isDoNotTrack:n,isUnblock:o,isForwarded:s,created:l}=e;return a("option",{key:t,value:t},new Date(l).toLocaleString(document.documentElement.lang),n?" (Do Not Track)":"",o?" (Content Blocker)":"",s?" (Consent Forwarding)":"")})):a("option",{value:-1},h)),a("div",{style:{opacity:.5,marginTop:5}},"UUID: ",S||"-"))}},4425:(e,t,n)=>{n.r(t),n.d(t,{BannerGcmGroupList:()=>o});var a=n(748).h;const o=()=>{const e=(0,n(8856).S)(),{i18n:{purposes:t,gcm:{standard:o,standardDesc:s}}}=e,l=(0,n(9201).j)(),i=(0,n(2515).u)(l);return a(n(729).HY,null,a(n(130).Z,{headline:o,style:n(6190).L,borderless:!0},s),a(n(3797).c,null,a(n(130).Z,{headline:t},i.map((e=>a(n(7442).p,{key:e,type:e,isBold:!0}))))))}},6390:(e,t,n)=>{n.r(t),n.d(t,{BannerGroupList:()=>h});var a=n(8856),o=n(729),s=n(7400),l=n(387),i=n(574),r=n(748).h;const c=e=>{let{group:{id:t,isEssential:n},cookie:s}=e;const{id:l}=s,c=(0,a.S)(),{consent:u,activeAction:d}=c,p=n||"history"===d,g=n||((null==u?void 0:u[t])||[]).some((e=>e===l)),v=(0,o.I4)((e=>c.updateCookieChecked(t,l,e)),[c,t,l]);return r(i.Cookie,{cookie:s,propertyListProps:{isEssentialGroup:n},checked:g,disabled:p,onToggle:v})};var u=n(130),d=n(748).h;const p=e=>{var t;let{group:n}=e;const i=(0,a.S)(),{id:r,name:p,description:g,items:v,isEssential:h}=n,{previewCheckboxActiveState:m,consent:f,activeAction:y,group:{headlineFontSize:C},individualTexts:{headline:b,showMore:k,hideMore:S}}=i,w=h||"history"===y,I=m||h||!!f[r],O=!h&&(null===(t=f[r])||void 0===t?void 0:t.length)&&JSON.stringify(v.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(f[r].sort()||[]),P=(0,o.I4)((e=>i.updateGroupChecked(r,e)),[i,r,I]);return d(u.Z,{legend:`${b}: ${p}`,headline:d(s.X,{onToggle:P,isPartial:O,isChecked:I,isDisabled:w,fontSize:C},p," (",v.length,")")},d("span",null,g),!!v&&d(l.O,{showMore:k,hideMore:S},v.map((e=>d(c,{key:e.id,group:n,cookie:e})))))};var g=n(3797),v=n(748).h;const h=()=>{const{groups:e}=(0,a.S)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return v(g.c,null,t.map((e=>v(p,{key:e.id,group:e}))))}},7698:(e,t,n)=>{n.r(t),n.d(t,{BannerTcfGroupList:()=>G});var a=n(729),o=n(8856),s=n(6190),l=n(1440),i=n(9718),r=n(1204),c=n(748).h;const u=e=>{let{legend:t,active:n,onChange:a,items:o}=e;const{ButtonGroup:s,buttonGroupItem:u,screenReaderOnlyClass:d,Label:p}=(0,i.R)().extend(...l.A),g=(0,r.q)(),v=e=>{const{value:t}=e.target;a(t)};return c(s,null,c("legend",{className:d},t),o.map((e=>{let{key:t,value:a}=e;return c(p,{key:t},c("input",{name:g,type:"radio",value:t,checked:n===t,className:u,"aria-label":a,onChange:v}),c("span",{"aria-hidden":!0},a))})))};var d=n(3007),p=n(7305),g=n(6810),v=n(8441),h=n(6107),m=n(7400),f=n(387),y=n(1159),C=n(7431),b=n(1717),k=n(748).h;function S(e,t,n){return e?e[n?"specialPurposes":"purposes"][`${t}`]||e.stdRetention:void 0}const w=e=>{var t,n;let{id:s}=e;const{Cookie:l}=(0,g.Y)().extend(...C.w),[i,r]=(0,a.eJ)(!1),c=(0,o.S)(),u=(0,v.E)(),{isEPrivacyUSA:d,isDataProcessingInUnsafeCountries:w,dataProcessingInUnsafeCountriesSafeCountries:O,iso3166OneAlpha2:P,designVersion:D,tcfFilterBy:x,lazyLoadedDataForSecondView:A,tcf:{gvl:E,model:L,original:{vendorConfigurations:T}}}=c,{vendors:{[s]:M},purposes:F,specialPurposes:B,features:U,specialFeatures:N,dataCategories:V}=E,{name:Y,["consent"===x?"purposes":"legIntPurposes"]:R,flexiblePurposes:j,specialPurposes:G,features:H,specialFeatures:$,dataDeclaration:z,usesCookies:Z,cookieMaxAgeSeconds:J,cookieRefresh:_,usesNonCookieAccess:q,dataRetention:W}=M,{ePrivacyUSA:X,dataProcessingInCountries:K,dataProcessingInCountriesSpecialTreatments:Q}=(0,a.Ye)((()=>Object.values(T).filter((e=>{let{vendorId:t}=e;return t===s}))[0]),[s]),ee=(0,a.Ye)((()=>[...R,...j.filter((e=>-1===R.indexOf(e)))].filter((e=>(0,p.a)(L,e,"legInt"===x,M)))),[s,x]),{group:{descriptionFontSize:te},i18n:{tcf:{declarations:ne,dataRetentionPeriod:ae,...oe},...se},activeAction:le}=c,{urls:ie,additionalInformation:re,deviceStorageDisclosure:ce}=(null==A||null===(t=A.tcf)||void 0===t?void 0:t.vendors[s])||{urls:[],additionalInformation:{},deviceStorageDisclosure:{}},ue=null==re?void 0:re.legalAddress,de=!(null==re||!re.internationalTransfers),pe=(null==re?void 0:re.transferMechanisms)||[],ge=L["consent"===x?"vendorConsents":"vendorLegitimateInterests"],ve="history"===le,he=ge.has(s),[me,fe]=(0,a.eJ)(he);(0,a.d4)((()=>{fe(he)}),[he]);const ye=(0,a.I4)((e=>{try{ge[e?"set":"unset"](s),fe(e)}catch(e){}}),[s,ge,fe]),Ce=(0,a.Ye)((()=>w?(0,h.D)({dataProcessingInCountries:K,safeCountries:O,specialTreatments:Q.filter((e=>-1===[b.gt.StandardContractualClauses].indexOf(e))),designVersion:D}).map((e=>P[e]||e)):[]),[w,O,Q,K,P,D]),be=(0,a.Ye)((()=>[...new Set([D>4&&Q.indexOf(b.gt.StandardContractualClauses)>-1&&se.standardContractualClauses,D>6&&de&&pe.map((e=>{switch(e){case"SCCs":return se.standardContractualClauses;case"Adequacy decision":return se.adequacyDecision;case"BCRs":return se.bindingCorporateRules;case"Other":return se.other;default:return""}}))].flat().filter(Boolean))]),[D,Q]),{privacy:ke,legIntClaim:Se}=(null==ie?void 0:ie[0])||{langId:"",privacy:"",legIntClaim:""},we=(0,a.I4)((function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((e=>`${(t?B:F)[e].name}${W?` (${ae}: ${u(S(W,e,!1),"d")})`:""}`)).join(", ")}),[F,B,W]);return k(l,null,k(m.X,{isChecked:me,isDisabled:ve,fontSize:te,onToggle:ye,after:k(f.O,{onToggle:r,showMore:oe.showMore,hideMore:oe.hideMore})},k("strong",null,Y)),i&&k(a.HY,null,!!ue&&k(y.l,{label:se.provider,value:ue.split(";").join(", ")}),k(y.l,{label:se.providerPrivacyPolicyUrl,value:ke}),"legInt"===x&&k(y.l,{label:oe.legIntClaim,value:Se}),!!d&&k(y.l,{label:se.ePrivacyUSA,value:de?se.yes:2===X?se.unknown:1===X?se.yes:se.no}),Ce.length>0&&k(y.l,{label:se.dataProcessingInUnsafeCountries,value:Ce.join(", ")}),be.length>0&&k(y.l,{label:se.appropriateSafeguard,value:be.join(", ")}),ee.length>0&&k(y.l,{label:ne.purposes.title,value:we(ee)}),G.length>0&&k(y.l,{label:ne.specialPurposes.title,value:we(G,!0)}),H.length>0&&k(y.l,{label:ne.features.title,value:H.map((e=>U[e].name)).join(", ")}),$.length>0&&k(y.l,{label:ne.specialFeatures.title,value:$.map((e=>N[e].name)).join(", ")}),(null==z?void 0:z.length)>0&&k(y.l,{label:ne.dataCategories.title,value:z.map((e=>V[e].name)).join(", ")}),k(y.l,{label:se.usesCookies,value:Z,printValueAs:"boolean"}),Z&&k(y.l,{label:se.duration,value:J<=0?"Session":u(J,"s")}),k(y.l,{label:se.cookieRefresh,value:_,printValueAs:"boolean"}),k(y.l,{label:se.usesNonCookieAccess,value:q,printValueAs:"boolean"}),null==ce||null===(n=ce.disclosures)||void 0===n?void 0:n.map((e=>{let{type:t,identifier:n,domain:a,domains:o,maxAgeSeconds:s,cookieRefresh:l,purposes:i}=e;return k(y.l,{key:`${t}-${n}-${Y}`,label:se.technicalCookieDefinition,value:k("span",{style:{fontFamily:"monospace"}},n)},k(y.l,{label:se.type,value:I(t)}),!!o&&k(y.l,{label:se.host,value:k("span",{style:{fontFamily:"monospace"}},o.join(","))})||!!a&&k(y.l,{label:se.host,value:k("span",{style:{fontFamily:"monospace"}},a)}),null!==s&&k(y.l,{label:se.duration,value:s<=0?"Session":u(s,"s")}),k(y.l,{label:se.cookieRefresh,value:l,printValueAs:"boolean"}),!(null==i||!i.length)&&k(y.l,{label:ne.purposes.title,value:i.map((e=>{var t;return null===(t=F[e])||void 0===t?void 0:t.name})).filter(Boolean).join(", ")}))}))))};function I(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}var O=n(1864),P=n(130),D=n(748).h;const x=()=>{const e=(0,o.S)(),{tcfFilterBy:t,i18n:{tcf:{vendors:n,filterNoVendors:a}}}=e,s=(0,O.m)(t),l=s.length>0;return D(P.Z,{headline:n},s.map((e=>{let{id:t}=e;return D(w,{key:t,id:t})})),!l&&a)};var A=n(5666),E=n(540),L=n(3809),T=n(4533),M=n(748).h;const F=e=>{let{declaration:t,id:n}=e;const{Link:s,Cookie:i}=(0,g.Y)().extend(...l.A).extend(...C.w),[r,c]=(0,a.eJ)(!1),u=(0,v.E)(),{tcf:{gvl:d,model:p},tcfFilterBy:h,group:{descriptionFontSize:b},activeAction:k,i18n:{purpose:w,tcf:{showMore:I,hideMore:O,example:P,vendors:D,vendorsCount:x,dataRetentionPeriod:F}},designVersion:B}=(0,o.S)(),{[t]:{[n.toString()]:U}}=d,{name:N,description:V,illustrations:Y}=U,R=["specialPurposes","features","dataCategories"].indexOf(t)>-1,j="history"===k||R,G=R?void 0:p["specialFeatures"===t?"specialFeatureOptins":"legInt"===h?"purposeLegitimateInterests":"purposeConsents"],H=R||!(null==G||!G.has(n)),[$,z]=(0,a.eJ)(H);(0,a.d4)((()=>{z(H)}),[H]);const Z=(0,a.I4)((e=>{try{G[e?"set":"unset"](n),z(e)}catch(e){}}),[n,G,z]),J=(0,a.Ye)((()=>(0,A.K)(d,p,n,t,"legInt"===h,!0)),[d,p,n,t,h]);return M(i,null,M(m.X,{hideCheckbox:-1===["purposes","specialFeatures"].indexOf(t),isChecked:$,isDisabled:j,fontSize:b,onToggle:Z,after:M(f.O,{onToggle:c,showMore:I,hideMore:O})},M("strong",null,N),B>6&&M(a.HY,null," (",(0,E.D)(J.length,...x),")")),r&&M(a.HY,null,M(y.l,{label:w,value:(0,L.E)(V)},(null==Y?void 0:Y.length)>0&&Y.map(((e,t)=>M(y.l,{key:e,label:`${P} #${t+1}`,value:e})))),M(y.l,{label:D,value:(0,T.e)(J.map((e=>{let{id:a,name:o,urls:l,dataRetention:i}=e;return M(s,{key:a,href:(null==l?void 0:l[0].privacy)||"about:blank",target:"_blank",rel:"noreferrer"},o,["purposes","specialPurposes"].indexOf(t)>-1&&i?` (${F}: ${u(S(i,n,!1),"d")})`:"")})),", ")})))};var B=n(9969),U=n(748).h;const N=e=>{let{declaration:t}=e;const n=(0,o.S)(),{i18n:{tcf:{declarations:{[t]:{title:s,desc:l}}}}}=n,i=function(e){const t=(0,o.S)(),{tcf:{gvl:n,model:s},tcfFilterBy:l}=t,{[e]:i}=n;return(0,a.Ye)((()=>(0,B.m)(e,n,s,l,!0)),[i,n,s,e,l])}(t);return i.length>0?U(P.Z,{headline:s},l,i.map((e=>{let{id:n}=e;return U(F,{key:n,declaration:t,id:n})}))):null};var V=n(3797),Y=n(8080),R=n(748).h;const j=["purposes","specialPurposes","features","specialFeatures","dataCategories"],G=()=>{const e=(0,o.S)(),{tcfFilterBy:t,suspense:n,i18n:{legitimateInterest:l,consent:i,tcf:{filterText:r,standard:c,standardDesc:p}},set:g}=e;return R(a.HY,null,R(P.Z,{headline:c,style:s.L,borderless:!0},p,R("div",{style:s.L},R("span",{"aria-hidden":!0},r)," ",R(u,{legend:r,active:t,onChange:e=>g({tcfFilterBy:e}),items:[{key:"legInt",value:l},{key:"consent",value:i}]}))),R(Y.Y,{promise:n.lazyLoadedDataForSecondView,suspenseProbs:{fallback:R(d.X,null)}},R(V.c,null,R(x,null),j.map((e=>R(N,{key:e,declaration:e}))))))}},7442:(e,t,n)=>{n.d(t,{p:()=>o});var a=n(748).h;const o=e=>{let{type:t,isDisabled:o,isBold:s}=e;const{Cookie:l}=(0,n(6810).Y)().extend(...n(7431).w),{gcmConsent:i,updateGcmConsentTypeChecked:r,group:{descriptionFontSize:c},i18n:{gcm:{purposes:{[t]:u}}}}=(0,n(749).w)();return a(l,null,a(n(7400).X,{isChecked:i.indexOf(t)>-1,isDisabled:o,fontSize:c,onToggle:e=>r(t,e)},a("span",{style:{fontWeight:s?"bold":void 0}},u)))}},574:(e,t,n)=>{n.r(t),n.d(t,{Cookie:()=>b});var a=n(6270),o=n(749),s=n(7400),l=n(729),i=n(1159),r=n(8441),c=n(3849),u=n(9576),d=n(1717),p=n(3809),g=n(7442),v=n(6107),h=n(748).h;const m=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:n,provider:a,providerContact:s={},providerPrivacyPolicyUrl:m,providerLegalNoticeUrl:f,legalBasis:y,ePrivacyUSA:C,dataProcessingInCountries:b,dataProcessingInCountriesSpecialTreatments:k,isEmbeddingOnlyExternalResources:S,technicalDefinitions:w,codeDynamics:I,googleConsentModeConsentTypes:O},isEssentialGroup:P,isDisabled:D}=e;const{i18n:x,isEPrivacyUSA:A,isDataProcessingInUnsafeCountries:E,iso3166OneAlpha2:L,dataProcessingInUnsafeCountriesSafeCountries:T,designVersion:M,websiteOperator:F,isGcm:B}=(0,o.w)(),U=(0,r.E)(),N={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},V=(0,l.Ye)((()=>E?(0,v.D)({dataProcessingInCountries:b,safeCountries:T,specialTreatments:k.filter((e=>-1===[d.gt.StandardContractualClauses].indexOf(e))),designVersion:M}).map((e=>L[e]||e)):[]),[E,T,k,b,L,M]),{legalNotice:Y,privacyPolicy:R,contactForm:j}=(0,c.p)(),G=(0,l.Ye)((()=>{if(n&&F){const{address:e,country:t,contactEmail:n,contactPhone:a}=F;return{provider:[e,L[t]||t].filter(Boolean).join(", "),contact:{email:n,phone:a,link:j},legalNoticeUrl:!1===Y?"":Y.url,privacyPolicyUrl:!1===R?"":R.url}}return{provider:a,contact:s,privacyPolicyUrl:m,legalNoticeUrl:f}}),[n,a,s,m,f,F,Y,R,j]),H=(0,l.Ye)((()=>Object.values(G.contact).filter(Boolean).length>0),[G.contact]);return h(l.HY,null,!!t&&h(i.l,{label:x.purpose,value:(0,p.E)(t)}),h(i.l,{label:x.legalBasis,value:"legal-requirement"===y?x.legalRequirement:"legitimate-interest"===y||P?x.legitimateInterest:x.consent}),B&&O.length>0&&h(i.l,{label:x.gcm.dataProcessingInService,printValueAs:"empty"},h("div",{style:{display:"inline-block"}},h(i.l,{printValueAs:"empty"},O.map((e=>h(g.p,{key:e,type:e,isDisabled:D})))))),h(i.l,{label:x.provider,value:G.provider},H&&h(l.HY,null,h(i.l,{label:x.providerContactPhone,value:G.contact.phone,printValueAs:"phone"}),h(i.l,{label:x.providerContactEmail,value:G.contact.email,printValueAs:"mail"}),h(i.l,{label:x.providerContactLink,value:G.contact.link}))),h(i.l,{label:x.providerPrivacyPolicyUrl,value:G.privacyPolicyUrl}),h(i.l,{label:x.providerLegalNoticeUrl,value:G.legalNoticeUrl}),!!A&&h(i.l,{label:x.ePrivacyUSA,value:C,printValueAs:"boolean"}),V.length>0&&h(i.l,{label:x.dataProcessingInUnsafeCountries,value:V.join(", ")}),M>4&&k.indexOf(d.gt.StandardContractualClauses)>-1&&h(i.l,{label:x.appropriateSafeguard,value:x.standardContractualClauses}),!S&&w.map((e=>{let{type:t,name:n,host:a,duration:o,durationUnit:s,isSessionDuration:l,purpose:r}=e;return h(i.l,{key:`${t}-${n}-${a}`,label:x.technicalCookieDefinition,monospace:!0,value:(0,u.c)(n,I)},h(i.l,{label:x.type,value:N[t].name}),h(i.l,{label:x.purpose,value:r}),!!a&&h(i.l,{label:x.host,value:a,monospace:!0}),h(i.l,{label:x.duration,value:["local","indexedDb"].indexOf(t)>-1?x.noExpiration:l||"session"===t?"Session":U(o,s)}))})))};var f=n(9718),y=n(7431),C=n(748).h;const b=e=>{let{cookie:t,checked:n,disabled:l,onToggle:i,propertyListProps:r={}}=e;const{Cookie:c}=(0,f.R)().extend(...y.w),{name:u}=t,{group:{descriptionFontSize:d}}=(0,o.w)();return C(c,null,C(s.X,{isChecked:n,isDisabled:l,fontSize:d,onToggle:i},C("strong",null,u)),C(m,(0,a.Z)({cookie:t},r,{isDisabled:!n})))}},1159:(e,t,n)=>{n.d(t,{l:()=>o});var a=n(748).h;const o=e=>{let{label:t,value:o,children:s,printValueAs:l,monospace:i}=e;const r=(0,n(9718).R)(),{Link:c,CookieProperty:u}=r.extend(...n(1440).A).extend(...n(7431).w),d=(0,n(749).w)(),{i18n:{yes:p,no:g}}=d;let v="string"==typeof o&&o.startsWith("http")&&(0,n(4385).C)(o)?a(c,{href:o,target:"_blank",rel:"noopener noreferrer"},o):"string"==typeof o?"phone"===l?a(c,{target:"_blank",href:`tel:${o.replace(/\s+/g,"")}`},o):"mail"===l?a(c,{target:"_blank",href:`mailto:${o}`},o):a("span",{dangerouslySetInnerHTML:{__html:o}}):o;return"boolean"===l&&(v=v?p:g),o||!1===o||"empty"===l?a(n(729).HY,null,a(u,null,t&&a("strong",null,t,": "),a("span",{role:"presentation",style:{fontFamily:i?"monospace":void 0}},v)),a(u,null,!!s&&a("div",null,s))):null}},3797:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(748).h;const o=e=>{let{children:t}=e;const{GroupList:o}=(0,n(9718).R)().extend(...n(7431).w);return a(o,null,t)}},387:(e,t,n)=>{n.d(t,{O:()=>o});var a=n(748).h;const o=e=>{let{onToggle:t,children:o,showMore:s,hideMore:l,...i}=e;const{Link:r}=(0,n(9718).R)().extend(...n(1440).A),[c,u]=(0,n(729).eJ)(!1),d=(0,n(1204).q)();return a(n(729).HY,null,"  •  ",a(r,(0,n(6270).Z)({href:"#",onClick:e=>{const n=!c;u(n),null==t||t(n),e.preventDefault()}},o?{"aria-expanded":c,"aria-controls":d}:{},i),c?l:s),o&&a("div",{id:d},c&&o))}},8441:(e,t,n)=>{function a(){const{i18n:{durationUnit:e},designVersion:t}=(0,n(749).w)();return(0,n(729).I4)(((a,o)=>t<6?e[o]:(0,n(540).D)(a,e.n1[o],e.nx[o])),[e])}n.d(t,{E:()=>a})},3809:(e,t,n)=>{n.d(t,{E:()=>o});const a=/(\r\n|\r|\n|<br[ ]?\/>)/g,o=e=>"string"==typeof e?e.split(a).map(((e,t)=>e.match(a)?(0,n(729).az)("br",{key:t}):e)):e}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.5.3/c86685b9dd59b7dfc357ea149e199af3/banner_tcf-pro-banner-lazy.pro.js.map