"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[203],{52372:(e,t,n)=>{var r,o,i,s;n.d(t,{ak:()=>i,iQ:()=>o,um:()=>s}),Object.freeze(["name","headline","subHeadline","providerNotice","groupNotice","legalBasisNotice","technicalHandlingNotice","createContentBlockerNotice","sccConclusionInstructionsNotice"]),Object.freeze(["codeOnPageLoad","codeOptIn","codeOptOut","createContentBlockerNotice","deleteTechnicalDefinitionsAfterOptOut","dynamicFields","executeCodeOptInWhenNoTagManagerConsentIsGiven","executeCodeOptOutWhenNoTagManagerConsentIsGiven","googleConsentModeConsentTypes","groupNotice","isProviderCurrentWebsite","legalBasis","legalBasisNotice","provider","providerContact","providerLegalNoticeUrl","providerNotice","providerPrivacyPolicyUrl","providerText","purposes","purposeText","shouldUncheckContentBlockerCheckbox","shouldUncheckContentBlockerCheckboxWhenOneOf","tagManagerOptInEventName","tagManagerOptOutEventName","technicalHandlingNotice"]),Object.freeze(["name","codeOnPageLoad","googleConsentModeConsentTypes","codeOptIn","codeOptOut","createContentBlockerNotice","dataProcessingInCountries","dataProcessingInCountriesSpecialTreatments","deleteTechnicalDefinitionsAfterOptOut","dynamicFields","executeCodeOptInWhenNoTagManagerConsentIsGiven","executeCodeOptOutWhenNoTagManagerConsentIsGiven","executePriority","group","groupNotice","isCdn","isEmbeddingOnlyExternalResources","isProviderCurrentWebsite","legalBasis","legalBasisNotice","provider","providerNotice","providerPrivacyPolicyUrl","providerLegalNoticeUrl","purposes","sccConclusionInstructionsNotice","shouldUncheckContentBlockerCheckbox","shouldUncheckContentBlockerCheckboxWhenOneOf","tagManagerOptInEventName","tagManagerOptOutEventName","technicalDefinitions","technicalHandlingNotice"]),function(e){e.Essential="essential",e.Functional="functional",e.Statistics="statistics",e.Marketing="marketing"}(r||(r={})),function(e){e.Consent="consent",e.LegitimateInterest="legitimate-interest",e.LegalRequirement="legal-requirement"}(o||(o={})),function(e){e.ContractualAssurancesWithSubProcessors="contractual-assurances-with-sub-processors",e.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework="provider-is-self-certified-trans-atlantic-data-privacy-framework",e.StandardContractualClauses="standard-contractual-clauses",e.BindingCorporateRules="binding-corporate-rules"}(i||(i={})),function(e){e.AdStorage="ad_storage",e.AdUserData="ad_user_data",e.AdPersonalization="ad_personalization",e.AnalyticsStorage="analytics_storage",e.FunctionalityStorage="functionality_storage",e.PersonalizationStorage="personalization_storage",e.SecurityStorage="security_storage"}(s||(s={})),Object.freeze(["id","logo","logoId","release","releaseId","extends","next","nextId","pre","preId","extendsId","translationIds","extendedTemplateId","translationInfo","purposeIds","dynamicFieldIds","technicalDefinitionIds","translatableRequiredFields","translatedRequiredFields","translatableOptionalFields","translatedOptionalFields","translationFlaggedFields","version"])},77944:(e,t,n)=>{function r(e){return[...new Set(e.map((e=>{let{googleConsentModeConsentTypes:t}=e;return[...t]})).flat())]}n.d(t,{h:()=>r})},5998:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(9923);function o(e,t,n,o,i){void 0===i&&(i=!1);const{[e]:s}=t,a=Object.values(s),c=a.reduce(((s,a)=>{let{id:c}=a;return s[c]=(0,r.L)(t,n,c,e,"legInt"===o,i).length,s}),{});return a.filter((e=>{let{id:t}=e;return c[t]}))}},9923:(e,t,n)=>{n.d(t,{L:()=>o});var r=n(42831);function o(e,t,n,o,i,s){void 0===s&&(s=!1);let a={};switch(o){case"features":a=e.getVendorsWithFeature(n);break;case"specialFeatures":a=e.getVendorsWithSpecialFeature(n);break;case"specialPurposes":a=e.getVendorsWithSpecialPurpose(n);break;case"purposes":a=i?e.getVendorsWithLegIntPurpose(n):e.getVendorsWithConsentPurpose(n);break;case"dataCategories":a=Object.values(e.vendors).reduce(((e,t)=>{var r;return(null==(r=t.dataDeclaration)?void 0:r.includes(n))&&(e[t.id]=t),e}),{});break;default:a=e.getVendorsWithConsentPurpose(n)}"purposes"===o&&(a={...a,...e.getVendorsWithFlexiblePurpose(n)});const c=Object.values(a).filter((e=>"purposes"!==o||(0,r.n)(t,n,i,e)));return s&&c.sort(((e,t)=>e.name.localeCompare(t.name))),c}},42831:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(97086);function o(e,t,n,o){let{id:i,legIntPurposes:s}=o;var a;const c=e.publisherRestrictions.getRestrictions(i),l=c.map((e=>{let{purposeId:n,restrictionType:o}=e;return n===t&&o===r.h.NOT_ALLOWED&&n})).filter(Boolean);if(l.indexOf(t)>-1)return!1;let d=null==(a=c.filter((e=>{let{purposeId:n,restrictionType:o}=e;return n===t&&o!==r.h.NOT_ALLOWED}))[0])?void 0:a.restrictionType;return d||(d=s.indexOf(t)>-1?r.h.REQUIRE_LI:r.h.REQUIRE_CONSENT),!(n&&d===r.h.REQUIRE_CONSENT||!n&&d===r.h.REQUIRE_LI)}},16899:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(3713),o=n(41594),i=n(21503);const s=e=>{let{icon:t,...n}=e;const s=(0,o.useMemo)((()=>(0,i.Q)(t,{extraSVGAttrs:{style:"width:auto;height:100%;",fill:"currentColor"}})),[t]);return(0,r.jsx)("div",{...n,dangerouslySetInnerHTML:{__html:s}})}},36021:(e,t,n)=>{n.d(t,{Y:()=>i,d:()=>s});var r=n(25346);const o=Symbol(),i=()=>(0,r.NV)(o),s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.gm)(o,...t)}},44857:(e,t,n)=>{n.d(t,{K:()=>i,t:()=>s});var r=n(25346);const o=Symbol(),i=()=>(0,r.NV)(o),s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.gm)(o,...t)}},57899:(e,t,n)=>{n.d(t,{d:()=>s,o:()=>i});var r=n(25346);const o=Symbol(),i=()=>(0,r.NV)(o),s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.gm)(o,...t)}},44342:(e,t,n)=>{n.d(t,{JY:()=>$,BP:()=>P,$D:()=>A,bM:()=>D});var r=n(3713),o=n(77944),i=n(19003),s=n(88758),a=n(40062),c=n(41594),l=n(5998),d=n(36021),u=n(7835),p=n(57899),g=n(16899),f=n(69527);const v=e=>{let{children:t}=e;const{AccordionList:n}=(0,p.o)().extend(...u.I);return(0,r.jsx)(n,{children:t})},h=e=>{let{children:t,title:n,icon:o,iconExpanded:i,expandable:s=!0}=e;const{accordionArrow:a,AccordionDescription:l,AccordionItem:d,AccordionButton:v,AccordionTitle:h,accordionItemActive:m,accordionItemDisabled:b}=(0,p.o)().extend(...u.I),[C,x]=(0,c.useState)(!1),y=(0,f.p)();return(0,r.jsxs)(d,{onClick:()=>s&&x(!C),className:[C&&m,!s&&b].filter(Boolean).join(" "),children:[(0,r.jsxs)(v,{...s?{}:{disabled:"disabled"},"aria-expanded":C,"aria-controls":y,href:"#",onClick:e=>e.preventDefault(),children:[!!o&&(0,r.jsx)(g.r,{icon:C&&i?i:o,className:a}),(0,r.jsx)(h,{children:n})]}),(0,r.jsx)("div",{id:y,children:C&&s&&(0,r.jsx)(l,{children:t})})]})};var m=n(37136),b=n(22143),C=n(92936),x=n(58285);const y=()=>{const e=(0,d.Y)(),{tcf:{gvl:t,model:n},texts:{tcfStacksCustomName:o,tcfStacksCustomDescription:i},bodyDesign:{accordionArrowType:s},isListServicesNotice:a}=e,{vendors:u,stacks:p,purposes:{1:g}}=t,f=(0,c.useMemo)((()=>{const e=(0,l.i)("purposes",t,n,"legInt").filter((e=>{let{id:t}=e;return 1===t})),r=(0,l.i)("purposes",t,n,"consent").filter((e=>{let{id:t}=e;return 1===t}));return e.length>0||r.length>0}),[u,t,n]),y="none"!==s?"filled"===s?m.A:b.A:void 0,I="none"!==s?"filled"===s?C.A:x.A:void 0;return(0,r.jsxs)(v,{children:[f&&(0,r.jsx)(h,{title:g.name,icon:y,iconExpanded:I,children:g.description}),Object.values(p).map((e=>{let{id:t,name:n,description:o}=e;return(0,r.jsx)(h,{title:n,icon:y,iconExpanded:I,children:o},t)})),!a&&(0,r.jsx)(h,{title:o,icon:y,iconExpanded:I,children:i})]})};var I=n(8489);const k=e=>{let{services:t}=e;const n=(0,o.h)(t),{i18n:{gcm:{purposes:s}}}=(0,i.b)();return(0,r.jsx)(v,{children:n.map((e=>(0,r.jsx)(h,{title:s[e],icon:I.A,expandable:!1},e)))})};var O=n(52372),S=n(76210);function A(e,t){const n=e.filter(Boolean);return n.length>1&&n.splice(n.length-1,0,"{{andSeparator}}"),n.join(", ").replace(/,\s+{{andSeparator}},\s+/g,t)}const $=e=>(t,n)=>{void 0===n&&(n="");const r=t.filter(Boolean),o=r.map((e=>{let[t]=e;return t})),i=r.map((e=>{let[,t]=e;return t})).filter(Boolean);return 0===o.length?n:`${n}${N}${o.join(",")}</sup>${i.length?`<span class="${e}">(${i.join(", ")})</span>`:""}`};function P(e,t,n){return`${e} ${e>1?n:t}`}const N='<sup aria-hidden="true" style="vertical-align:top;line-height:100%;position:initial;">';function D(e){let{services:t,disableListServicesNotice:n,disableTcfPurposes:c}=e;const{blocker:l,groups:d,isAgeNotice:u,isGcm:g,isGcmListPurposes:f,ageNoticeAgeLimit:v,isListServicesNotice:h,isDataProcessingInUnsafeCountries:m,dataProcessingInUnsafeCountriesSafeCountries:b,texts:{description:C,dataProcessingInUnsafeCountries:x,ageNoticeBanner:I,ageNoticeBlocker:N,listServicesNotice:D,listServicesLegitimateInterestNotice:B,consentForwardingExternalHosts:w},tcf:T,consentForwardingExternalHosts:E,individualPrivacyOpen:j,individualTexts:{description:L},designVersion:W,territorialLegalBasis:F,predefinedDataProcessingInSafeCountriesLists:U,i18n:{andSeparator:R,territorialLegalBasisArticles:z,gcm:_,tcf:M,dataProcessingInUnsafeCountries:G},keepVariablesInTexts:H}=(0,i.b)(),{privacyPolicy:V}=(0,s.s)(),{screenReaderOnlyClass:Q}=(0,p.o)(),[q,Y]=[(0,a.E)("consent"),(0,a.E)("legInt")],J=$(Q),K=W>9?"D":"U",Z=d.map(((e,t)=>e.items.map((n=>{const{legalBasis:r}=n;return{service:n,legalBasis:e.isEssential&&W>=4&&"consent"===r?O.iQ.LegitimateInterest:r,group:e,groupIdx:t}})))).flat();let X="";E&&!H&&(X=w.replace(/{{websites}}/g,E.join(", ")));let ee=[l?[l.description,W>2&&C].filter(Boolean).join("\n\n"):j?L:C,X].filter(Boolean).join(" ");H||(ee=ee.replace(/{{privacyPolicy}}(.*){{\/privacyPolicy}}/gi,V?`<a href="${V.url}" target="_blank">$1</a>`:"$1"));const te=t.filter((e=>{let{dataProcessingInCountries:t,dataProcessingInCountriesSpecialTreatments:n}=e;return(W>9?(0,S.F)({predefinedDataProcessingInSafeCountriesLists:U,isDataProcessingInUnsafeCountries:m,territorialLegalBasis:F,service:{dataProcessingInCountries:t,dataProcessingInCountriesSpecialTreatments:n}}).filter((e=>e.startsWith("D"))):(0,S.z)({dataProcessingInCountries:t,safeCountries:b,specialTreatments:n})).length>0})),ne=(null==T?void 0:T.gvl)?Object.values(T.gvl.vendors).filter((e=>{const{dataProcessingInCountries:t,dataProcessingInCountriesSpecialTreatments:n}=T.original.vendorConfigurations[e.id];return(W>9?(0,S.F)({predefinedDataProcessingInSafeCountriesLists:U,isDataProcessingInUnsafeCountries:m,territorialLegalBasis:F,service:{dataProcessingInCountries:t,dataProcessingInCountriesSpecialTreatments:n}}).filter((e=>e.startsWith("D"))):(0,S.z)({dataProcessingInCountries:t,safeCountries:b,specialTreatments:n})).length>0})):[];let re=(te.length>0||ne.length>0)&&(m?x:"");re&&!H&&(re=re.replace(/{{legalBasis}}/g,(()=>A(F.map((e=>z[e].dataProcessingInUnsafeCountries||"")),R))));let oe=u?l?N:I:"";oe&&!H&&(oe=oe.replace(/{{minAge}}/gi,`${v}`));let ie="";if(h&&!n){const e=D.toLowerCase(),t=e.indexOf("{{services}}")>-1&&e.indexOf("{{servicegroups}}")>-1,n=A(Z.map((e=>{let{service:n,legalBasis:r,groupIdx:o,group:{name:i,isEssential:s}}=e;const{name:a}=n;if(!("legal-requirement"===r||W<4&&s||B&&"consent"!==r))return J([t&&[`${o+1}`,i],re&&te.indexOf(n)>-1&&[K,G]],a)})),R),r=B?A(Z.map((e=>{let{service:n,legalBasis:r,groupIdx:o,group:{name:i}}=e;const{name:s}=n;if("legitimate-interest"===r)return J([t&&[`${o+1}`,i],re&&te.indexOf(n)>-1&&[K,G]],s)})),R):"";if(n){const e=`${n}${r}`,o=A(d.map(((n,r)=>{let{name:o}=n;const i=`${r+1}`;return-1===e.indexOf(`>${i}`)?"":J([t&&[i]],o)})),R);ie=`<span>${D}</span>`,H||(ie=ie.replace(/{{services}}/gi,n).replace(/{{serviceGroups}}/gi,o)),re&&(re+=J([[K]]))}r&&(ie+=` <span>${B}</span>`,H||(ie=ie.replace(/{{services}}/gi,r)))}const se=[];if(T&&!j&&!c){let{teaching:e}=M;const{vendorsCount:[t,n]}=M;H||(e=e.replace(/{{consentCount}}/gi,P(q.length,t,n)).replace(/{{legIntCount}}/gi,P(Y.length,t,n)));const o=` <span>${e}</span>`;se.push((0,r.jsx)(y,{},"tcf")),W>7?se.unshift(o):ie+=o}const ae=[];return!j&&g&&f&&(0,o.h)(t).length&&ae.push(_.teaching,(0,r.jsx)(k,{services:t},"gcm")),{description:ee,teachings:[re,oe,ie,se,ae].flat().filter(Boolean)}}},40062:(e,t,n)=>{n.d(t,{E:()=>i});var r=n(41594),o=n(36021);function i(e){const{tcf:t}=(0,o.Y)();if(!t)return[];const{gvl:{vendors:n},model:i}=t;return(0,r.useMemo)((()=>Object.values(n).filter((t=>{let{["consent"===e?"purposes":"legIntPurposes"]:n}=t;return"consent"===e||n.length>0})).sort(((e,t)=>{let{name:n}=e,{name:r}=t;return n<r?-1:n>r?1:0}))),[n,e,i])}},69527:(e,t,n)=>{n.d(t,{p:()=>i});var r=n(41594),o=n(57899);function i(e){const{functions:{className:t}}=e||(0,o.o)();return(0,r.useMemo)((()=>t()),[])}},19003:(e,t,n)=>{n.d(t,{b:()=>i});var r=n(36021),o=n(44857);function i(){const e=(0,r.Y)(),t=(0,o.K)();return e.groups?e:t}},88758:(e,t,n)=>{n.d(t,{s:()=>o});var r=n(19003);function o(){const{links:e=[],websiteOperator:t}=(0,r.b)(),n=e.filter((e=>{let{label:t,url:n}=e;return t&&n})),o=n.find((e=>{let{pageType:t}=e;return"privacyPolicy"===t})),i=n.find((e=>{let{pageType:t}=e;return"legalNotice"===t}));return{privacyPolicy:!!o&&{url:o.url,label:o.label},legalNotice:!!i&&{url:i.url,label:i.label},contactForm:(null==t?void 0:t.contactFormUrl)||void 0}}},76210:(e,t,n)=>{n.d(t,{F:()=>o,z:()=>i});var r=n(52372);function o(e){let{predefinedDataProcessingInSafeCountriesLists:t,isDataProcessingInUnsafeCountries:n,territorialLegalBasis:o,service:i}=e,s=[];const a=o.indexOf("gdpr-eprivacy")>-1,c=o.indexOf("dsg-switzerland")>-1,{GDPR:l,DSG:d,"GDPR+DSG":u,ADEQUACY_CH:p,ADEQUACY_EU:g}=t;c&&a?s=u:a?s=l:c&&(s=d);let f=[];const v=[],h={};if(i){const{dataProcessingInCountries:e,dataProcessingInCountriesSpecialTreatments:t}=i;f=e.filter((e=>-1===s.indexOf(e)));const o=f.indexOf("US")>-1;if(o&&v.push(r.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework),f.length>0){const e=[...a?g:[],...c?p:[]];(f.filter((t=>-1===e.indexOf(t))).length>0||o)&&(v.push(r.ak.StandardContractualClauses),-1===t.indexOf(r.ak.StandardContractualClauses)&&v.push(r.ak.ContractualAssurancesWithSubProcessors));const i=t.indexOf(r.ak.StandardContractualClauses)>-1,s=!i&&t.indexOf(r.ak.ContractualAssurancesWithSubProcessors)>-1,u=o&&t.indexOf(r.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework)>-1,m=t.indexOf(r.ak.BindingCorporateRules)>-1,b=e=>!a&&!c||"US"!==e||u,C=i?"B":s?"C":m?"E":n?"D":void 0;for(const e of f){const t=[],n=g.filter(b).indexOf(e)>-1,r=p.filter(b).indexOf(e)>-1;c&&a?(-1===l.indexOf(e)&&t.push(n?"A-EU":"D"===C?"D-EU":C),-1===d.indexOf(e)&&t.push(r?"A-CH":"D"===C?"D-CH":C)):a?t.push(n?"A":C):c&&t.push(r?"A":C),h[e]=[...new Set(t.filter(Boolean))]}}}return{isGdpr:a,isDsg:c,safeCountries:s,unsafeCountries:f,allowedSpecialTreatments:v,result:h,filter:e=>Object.entries(h).map((t=>{let[n,r]=t;return r.some(e)?n:void 0})).filter(Boolean)}}function i(e){let{dataProcessingInCountries:t,safeCountries:n=[],specialTreatments:o=[],isDisplay:i}=e,s=o;return i&&(s=s.filter((e=>r.ak.StandardContractualClauses!==e))),t.filter((e=>!(s.indexOf(r.ak.StandardContractualClauses)>-1)&&(-1===n.indexOf(e)||"US"===e&&-1===s.indexOf(r.ak.ProviderIsSelfCertifiedTransAtlanticDataPrivacyFramework))))}},87711:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(3713),o=n(41594);function i(e,t){const n=e.filter(Boolean);return 0===n.length?null:n.reduce(((e,n,i)=>e.length?[...e,(0,r.jsx)(o.Fragment,{children:t},i),n]:[n]),[])}},65276:(e,t,n)=>{n.d(t,{P:()=>r});const r=e=>new Promise((t=>setTimeout((()=>t(e)),0)))},7835:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(65263);const o=[Symbol("extendCommonStylesheet"),(e,t)=>{let{control:n,className:o,rule:i,boolIf:s,jsx:a}=e,{a11yFocusStyle:c,boolLargeOrMobile:l,bodyDesign:d,design:u,group:p,layout:g,screenReaderOnlyClass:f,scaleHorizontal:v,isMobile:h}=t;const[m]=a("a",{all:"unset",cursor:"pointer",color:p.linkColor(),textDecoration:u.linkTextDecoration(),pseudos:{":hover":{color:p.linkHoverColor(),textDecoration:u.linkTextDecoration()}}}),[b]=a("label",{all:"unset"}),[C,x]=n({fontSize:15},{fontSize:r.dD},(e=>{let{fontSize:t}=e;const n=l(p.checkboxBorderWidth,s),[,r]=i({classNames:["checkbox",f],pseudos:{"+div":{aspectRatio:"1/1",height:`calc((${t()} + ${n} * 2 + 6px) * ${s(h,v(),"1")})`,boxSizing:"border-box",display:"inline-block",marginRight:"10px",lineHeight:0,verticalAlign:"middle",padding:"3px",borderRadius:g.borderRadius(),cursor:"pointer",borderStyle:"solid",borderWidth:n,backgroundColor:p.checkboxBg(),color:p.checkboxBg(),borderColor:p.checkboxBorderColor()},":checked+div":{backgroundColor:p.checkboxActiveBg(),color:p.checkboxActiveColor(),borderColor:p.checkboxActiveBorderColor()},"[disabled]+div":{cursor:"not-allowed",opacity:"0.5"},":focus-visible+div":c.outline,"+div+span":{verticalAlign:"middle",cursor:"pointer"},":focus-visible+div+span>span:first-of-type":c.text}});return r})),{fontColor:y}=u,[I]=a("select",{background:"transparent",border:0,fontSize:s(d.descriptionInheritFontSize,l(u.fontSize,s),l(d.descriptionFontSize,s)),color:y("hex"),borderBottom:`1px solid rgba(${y("r")} ${y("g")} ${y("b")} / 50%)`,pseudos:{">option":{background:u.bg()}}}),[k]=a("fieldset",{classNames:"group-button",all:"unset",pseudos:{">label":{all:"unset"}}}),[,O]=i({classNames:["group-button-item",f],pseudos:{"+span":{padding:"5px 10px",color:p.linkColor(),borderRadius:g.borderRadius(),textDecoration:u.linkTextDecoration(),opacity:.8,cursor:"pointer",borderWidth:l(d.acceptAllBorderWidth,s),borderStyle:"solid",borderColor:"transparent"},":checked+span":{opacity:1,cursor:"initial",textDecoration:"initial",background:d.acceptAllBg(),color:d.acceptAllFontColor(),borderColor:d.acceptAllBorderColor()},":not(:checked)+span:hover,:focus-visible+span":{opacity:1,textDecoration:u.linkTextDecoration()},":focus-visible+span":c.outline}}),S=l(d.accordionBorderWidth,s),A=l(d.accordionTitleFontSize,s),[$]=a("div",{classNames:"accordions",margin:l(d.accordionMargin,s),textAlign:"left",lineHeight:"1.5",pseudos:{">div":{borderWidth:"0px",borderTopWidth:S,borderStyle:"solid",borderColor:d.accordionBorderColor()},">div:last-of-type":{borderBottomWidth:S},"+p":{marginTop:"15px"}}}),P=o(),N=o(),[D]=a("div",{classNames:"accordion-item",cursor:"pointer",padding:d.accordionPadding("l"),background:d.accordionBg(),pseudos:{[`.${P},:has(>a:focus-visible)`]:{background:d.accordionActiveBg()},[`:hover:not(.${P},.${N})`]:{background:d.accordionHoverBg()},">a":{display:"flex",alignItems:"center"},[`.${N}`]:{cursor:"initial"}}}),[B]=a("a",{classNames:"accordion-button",all:"unset"}),[,w]=i({classNames:"accordion-arrow",width:A,height:A,flex:`0 0 ${A}`,lineHeight:A,float:"left",marginRight:"10px",color:d.accordionArrowColor()}),[T]=a("div",{classNames:"accordion-title",fontSize:A,color:d.accordionTitleFontColor(),fontWeight:d.accordionTitleFontWeight()}),[E]=a("div",{classNames:"accordion-description",fontSize:l(d.accordionDescriptionFontSize,s),color:d.accordionDescriptionFontColor(),fontWeight:d.accordionDescriptionFontWeight(),margin:l(d.accordionDescriptionMargin,s)});return{checkbox:{style:C,className:x},Link:m,Label:b,Select:I,ButtonGroup:k,buttonGroupItem:O,AccordionList:$,AccordionItem:D,AccordionButton:B,AccordionTitle:T,AccordionDescription:E,accordionArrow:w,accordionItemActive:P,accordionItemDisabled:N}}]},6101:(e,t,n)=>{n.d(t,{G:()=>i,u:()=>o});var r=n(98499);const o=(e,t)=>{let{mainElement:n}=t;n.dispatchEvent(new CustomEvent(`${r._2}${e}`,{detail:{}}))},i=(e,t)=>{let{mainElement:n,varsVal:o}=e,{variable:i,vars:s}=t;return(e,t,a,c)=>{let l;const d=e.map((e=>"function"==typeof e?e(!1):void 0)),u=()=>t(d.map((e=>o.get(e)))),p=((e,t)=>{if("raf"===e){let e=!1;return()=>{e||(window.requestAnimationFrame((()=>{t(),e=!1})),e=!0)}}{let n;return()=>{clearTimeout(n),n=setTimeout(t,e)}}})(c||0,(()=>l(u())));for(const e of d)n.addEventListener(`${r._2}${e}`,p);const g=u(),f="object"!=typeof g||Array.isArray(g)?(()=>{const e=i(g,void 0,a);return l=e.update,e})():(()=>{const e=s(g,void 0);return[,l]=e,e[0]})();return f.update=()=>p(),f}}},26687:(e,t,n)=>{n.d(t,{G:()=>r,s:()=>o});const r=" ",o=(e,t)=>{let{variable:n,vars:o}=t;const i=(e,t,s)=>{let a,c,l;if("object"!=typeof e||Array.isArray(e))a=e,c=t,l=s;else{const{when:t,then:n,or:r}=e;a=t,c=n,l=r}if(l=l||r,Array.isArray(a)){const e={when:void 0,then:void 0,or:void 0};let t=e;const{length:n}=a;for(let e=0;e<n;e++)t.when=a[e],t.or=l,e===n-1?t.then=c:(t.then={when:void 0,then:void 0,or:l},t=t.then);return i(e)}{"string"==typeof a&&a.startsWith("--")&&(a=`var(${a})`);const[e]=o({true:"object"==typeof c?i(c):c,false:`${"function"==typeof a?a():a} ${"object"==typeof l?i(l):l}`});if("inherit"===l)throw new Error('Due to the nature how conditionals work in CSS, it is not allowed to use "inherit" as a falsy value. Please reverse your condition with the help of "boolNot" or use another value.');return n(e.false(!0,e.true()))()}},s=(e,t)=>{const n={when:void 0,then:void 0,or:void 0},{length:r}=e;let o=n;for(let n=0;n<r;n++){const[i,s]=e[n];o.when=i,o.then=s,n===r-1?o.or=t:(o.or={when:void 0,then:void 0,or:void 0},o=o.or)}return i(n)};return{boolIf:i,boolSwitch:s,boolNot:e=>{let t=e;return"string"==typeof t&&t.startsWith("var(")&&(t=t.slice(4,-1)),`var(${"function"==typeof t?t(!1):t}-not)`},boolOr:e=>s(e.map((e=>[e,"initial"])),r)}}},65263:(e,t,n)=>{n.d(t,{yq:()=>p,gJ:()=>A,Kn:()=>x,xj:()=>S,tZ:()=>O,g9:()=>I,$S:()=>y,a$:()=>k,tD:()=>m,dD:()=>b,g$:()=>C});var r=n(98499),o=n(6101);const i={},s="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",a=s.replace(/\//g,"\\/"),c=new RegExp(`[${a}]`,"g");function l(e){if(i[e])return i[e];const t=e.trim().toLowerCase().replace(c,(e=>"aaaaeeeeiiiioooouuuunc------".charAt(s.indexOf(e)))).replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");return i[e]=t,t}var d=n(26687),u=n(45939);const p=(e,t)=>{const{className:n,isExtension:i,rules:s,id:a,element:c}=e,u=i&&!t?n.split("-ext")[0]:n,p=t?a.split("-ext")[0]:a,v=t=>`--${p}-${e.inc++}${t?`-${t}`:""}`,m=(t,n,i)=>{const a=v(i);e.varsVal.set(a,t),s.set(u,s.get(u)||{});const c=s.get(u),l=f(t,n);return h(a,l,((e,t)=>{c[e]=t})),((e,t,n,i)=>{const{element:s}=e,a=(e,n)=>{void 0===e&&(e=!0);const r=`${t}${["number","string"].indexOf(typeof e)>-1?`-${e}`:""}`;return["boolean","number","string"].indexOf(typeof e)>-1&&!1!==e?`var(${r}${n?`, ${n}`:""})`:t},c=new Map;return h(t,n,((e,t,n)=>{void 0!==n&&(a[n]=e),c.set(e,t)})),a.update=(n,l)=>{let d=l||s.textContent;if(!l&&!s.textContent)return s.addEventListener(r.Iy,(()=>a.update(n)),{once:!0}),d;let u=!1;const p=f(n,i);return h(t,p,((e,t)=>{c.get(e)!==t&&(c.set(e,t),d=g(d,e,t),u=!0)})),u&&(l||(s.textContent=d),e.varsVal.set(t,n),(0,o.u)(t,e)),d},a})(e,a,l,n)};return{varName:v,variable:m,vars:(e,t,n)=>{void 0===n&&(n=!0);const r={};for(const o in e){const i=e[o],s=null==t?void 0:t[o];r[o]=m(i,s,n?l(o):void 0)}return[r,e=>{let{textContent:t}=c;for(const o in e){var n;t=null==(n=r[o])?void 0:n.update(e[o],t)}return t!==c.textContent&&(c.textContent=t),t},e=>{const n={},o=(e,t)=>{if(e.endsWith("-not"))throw new Error(`Boolish variable "${e}" cannot be created as style-attribute in your HTML tag as this is not supported by browsers. Alternatively, use a classname and pseudos to toggle styles.`);n[e]=""===t?d.G:t};for(const n in e){const i=r[n];if(!i)continue;const s=i(!1),a=null==t?void 0:t[n];h(s,f(e[n],a),o)}return n}]}}},g=(e,t,n)=>e.replace(new RegExp(`^((?:    |      )${t}: )(.*)?;$`,"m"),`$1${n};`),f=(e,t)=>"string"==typeof e&&e.startsWith("var(--")?e:t?t(e):e,v=e=>"boolean"==typeof e?e?"initial":"":Array.isArray(e)?e.join(" "):e,h=(e,t,n)=>{const r=[],o=(e,t)=>{"boolean"==typeof t&&n(`${e}-not`,v(!t))},i=(e,t,r)=>{if("string"==typeof t&&t.indexOf("function () {")>-1)throw new Error(`${e} contains a serialized function ("${t}").`);n(e,t,r)};if(Array.isArray(t)){i(e,t.map(v).join(" "));for(let n=0;n<t.length;n++){const s=`${e}-${n}`;o(s,t[n]),i(s,v(t[n]),n),r.push(n)}}else if("object"==typeof t)for(const n in t){const s=`${e}-${l(n)}`;o(s,t[n]),i(s,v(t[n]),n),r.push(n)}else o(e,t),i(e,v(t));return r},m=e=>t=>`${t}${e}`,b=m("px"),C=("px",e=>e.map((e=>`${e}px`)));const x=e=>{const{r:t,g:n,b:r}=(0,u.E)(e);return{r:t,g:n,b:r,hex:e}},y=(e,t)=>e=>({...t.reduce(((t,n)=>(t[`is-${n.toLowerCase()}`]=e===n,t)),{}),...k(!1)(e)}),I=(e,t)=>e=>({...t.reduce(((t,n)=>(t[`has-${n.toLowerCase()}`]=e.indexOf(n)>-1,t)),{})}),k=e=>(void 0===e&&(e=!0),t=>{const n=null==t?void 0:t.length,r=t||"";return{"is-empty":!n,"is-filled":!!n,val:e?JSON.stringify(r):r}}),O=e=>({"is-set":void 0!==e}),S=e=>'"undefined"',A=function(e,t){return Object.keys(e).reduce(((e,n)=>(e[n]=t,e)),{})}},98499:(e,t,n)=>{n.d(t,{Iy:()=>r,_2:()=>i,kt:()=>o});const r="stylesheet-created",o="stylesheet-toggle",i="css-var-update-"},45939:(e,t,n)=>{n.d(t,{E:()=>r});const r=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0}}},79275:(e,t,n)=>{n.d(t,{e:()=>o});var r=n(3713);const o=e=>{let{children:t,maxWidth:n="auto",style:o={}}=e;return(0,r.jsx)("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===n?1300:n,...o},children:t})}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.8.4/3a9b73a511f65e1e071f9bf4da3f8540/203.pro.js.map