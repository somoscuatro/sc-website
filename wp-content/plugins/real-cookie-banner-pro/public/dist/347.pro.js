"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[347],{30766:(e,t,s)=>{s.d(t,{S:()=>u});var i=s(3713),n=s(41594),r=s(69527),o=s(16899),a=s(8489),l=s(93769),d=s(57899),c=s(7835);const u=e=>{let{hideCheckbox:t,isPartial:s,isChecked:u,isDisabled:h,fontSize:p,onToggle:f,children:m,after:v,...g}=e;const{checkbox:{className:x,style:b},Label:y}=(0,d.o)().extend(...c.I),j=s?a.A:l.A,S=(0,r.p)();return(0,i.jsxs)(y,{children:[!t&&(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:u,disabled:h,className:x,style:b({fontSize:p}),onChange:e=>{const{checked:t}=e.target;null==f||f(t)},"aria-labelledby":S}),(0,i.jsx)(o.r,{"aria-hidden":!0,icon:j,...g})]}),m&&(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{id:S,"aria-hidden":!0,children:m}),v&&(0,i.jsx)("span",{onClick:e=>{e.stopPropagation()},children:v})]})]})}},24265:(e,t,s)=>{s.d(t,{y:()=>r});var i=s(50360),n=s(57899);function r(){return(0,n.o)().extend(...i.Z)}},50360:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(65263),n=s(71685),r=s.n(n);const o=(e,t)=>{let s,n,o;t?o=t({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:i.dD,height:i.dD}):(s=e("width"),n=e("height"));const a=[],l=()=>a.forEach(((e,t,s)=>{e(),s.splice(t,1)})),d=(e,t)=>{let i;void 0===t&&(t=[]);const d=()=>{e&&(r().clear(i),i=r().measure((()=>{const{width:t,height:i}=e.getBoundingClientRect(),{clientHeight:a,scrollHeight:l,scrollTop:d,offsetHeight:c}=e,u=a<l,h=Math.ceil(d+c+3)>=l;(0!==t||0!==i||e.offsetParent)&&r().mutate((()=>{o?o[1]({width:t,height:i,scrollbar:u,scrolledTop:0===d,scrolledBottom:h}):(e.style.setProperty(s,`${t}px`),e.style.setProperty(n,`${i}px`))}))})))};for(const s of[e,...t]){if(!s)continue;s.addEventListener("animationend",d),s.addEventListener("scroll",d);const e=new ResizeObserver(d);e.observe(s),a.push((()=>{e.disconnect(),s.removeEventListener("animationend",d),s.removeEventListener("scroll",d)}))}return l};return t?[d,o[0],l]:[d,{width:s,height:n},l]},a=(e,t)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${t()}/100))`,l=[Symbol("extendBannerStylesheet"),(e,t)=>{let{computed:s,rule:n,boolIf:r,boolNot:l,boolSwitch:d,jsx:c,variable:u,className:h,vars:p,varName:f,plugin:m}=e,{unsetDialogStyles:v,customize:{activeAction:g,pageRequestUuid4:x},boolLargeOrMobile:b,isMobile:y,layout:{dialogPosition:j,dialogMaxWidth:S,dialogMargin:C,dialogBorderRadius:A,bannerPosition:k,overlay:w,overlayBg:I,overlayBgAlpha:P,overlayBlur:T},design:{boxShadowEnabled:O,boxShadowColor:N,boxShadowOffsetX:D,boxShadowOffsetY:_,boxShadowBlurRadius:F,boxShadowSpreadRadius:L,boxShadowColorAlpha:B,fontSize:E,borderWidth:$,borderColor:R,textAlign:V,fontInheritFamily:M,fontFamily:z,fontWeight:W,fontColor:J},mobile:q,layout:G,individualLayout:U}=t;const Y={headline:h(),description:h(),firstButton:h()},H=o(f,p),K=o(f,p),Z=o(f,p),X=o(f,p),Q=o(f,p),ee=u(g,(0,i.$S)(g,["history"])),te=u(!1,void 0,"individual"),{isDialog:se,isBanner:ie}=s([y,G.type],(e=>{let[t,s]=e;const i=t?"banner":s;return{type:i,isDialog:"dialog"===i,isBanner:"banner"===i}})),ne=s([j],(e=>{let[t]=e;return[t.startsWith("top")?"flex-start":t.startsWith("bottom")?"flex-end":"center",t.endsWith("Center")?"center":t.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign");let re="none";re=r(w,`blur(${T()})`);const[oe]=c("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:E("l"),background:r(w,a(I,P)),pointerEvents:r(w,"all","none"),backdropFilter:re,transform:"translateZ(0)"}),[ae]=c("dialog",{classNames:["align",v],display:"flex",width:"100%",height:"100%",alignItems:r(se,ne(0)),justifyContent:r(se,ne(1))},{tabIndex:0,"aria-labelledby":Y.headline,"aria-describedby":Y.description}),le=r({when:se,then:{when:[te,l(U.inheritDialogMaxWidth)],then:U.dialogMaxWidth(),or:S()},or:"100%"}),{alignment:de}=q,ce=`${b($,r)} solid ${R()}`,ue=r(se,A()),[,he]=n({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:le,width:le,textAlign:V("val"),fontFamily:r(M,"inherit",z()),fontWeight:W(),color:J("hex"),margin:r({when:[se,l(j["is-middlecenter"])],then:C(),or:r(se,"10px")}),borderRadius:ue,boxShadow:r(O,`${D()} ${_()} ${F()} ${L()} rgba(${N("r")} ${N("g")} ${N("b")} / ${B()})`),alignSelf:r({when:y,then:d([[de("is-bottom"),"flex-end"],[de("is-top"),"flex-start"],[de("is-center"),"center"]]),or:{when:ie,then:d([[k("is-top"),"flex-start"],[k("is-bottom"),"flex-end"]])}}),borderTop:r({when:[ie,k("is-bottom")],then:ce}),borderBottom:r({when:[ie,k("is-top")],then:ce})}),pe={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};n({forceSelector:`#${x}, #${x} *`,...pe}),m("modifyRule",(e=>{if("unset"===e.all)for(const t in pe)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=pe[t])}));const fe=`${r(se,$("l"),"0px")} solid ${R()}`;return{a11yIds:Y,isDialog:se,isBanner:ie,activeAction:ee,dimsOverlay:H,dimsContent:K,dimsHeader:Z,dimsFooter:X,dimsRightSidebar:Q,individualPrivacyOpen:te,Dialog:ae,Overlay:oe,inner:he,footerBorderStyle:{borderBottomLeftRadius:ue,borderBottomRightRadius:ue,borderLeft:fe,borderRight:fe,borderBottom:fe},headerBorderStyle:{borderTopLeftRadius:ue,borderTopRightRadius:ue,borderLeft:fe,borderRight:fe,borderTop:fe}}}]},5600:(e,t,s)=>{s.r(t),s.d(t,{TcfVendorConfigurationForm:()=>ue});var i=s(3713),n=s(41594),r=s(57922),o=s(19117),a=s(75792),l=s(18197),d=s(91386),c=s(18654),u=s(95498),h=s(69665),p=s(9316),f=s(22201),m=s(2868),v=s(77381),g=s(52372),x=s(25346);const b=Symbol(),y=()=>(0,x.NV)(b);var j=s(91505),S=s(11265),C=s(9551);const A=()=>{const{__:e}=(0,v.s)(),{vendor:{id:t,name:s}}=y();return(0,i.jsx)(d.A.Item,{label:e("Provider"),children:(0,i.jsx)(C.A,{value:s,readOnly:!0,addonAfter:e("Vendor ID: %d",t)})})};var k=s(81533);const w=()=>{const{__:e}=(0,v.s)();return(0,i.jsxs)(d.A.Item,{label:e("Status"),required:!0,children:[(0,i.jsx)(d.A.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:e("Please choose a status!")}],children:(0,i.jsxs)(k.Ay.Group,{children:[(0,i.jsx)(k.Ay.Button,{value:"publish",children:e("Enabled")}),(0,i.jsx)(k.Ay.Button,{value:"private",children:e("Disabled")}),(0,i.jsx)(k.Ay.Button,{value:"draft",children:e("Draft")})]})}),(0,i.jsx)("p",{className:"description",children:e('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.')})]})},I=()=>{const{__:e}=(0,v.s)(),{vendor:{additionalInformation:t}}=y();return(0,i.jsx)(d.A.Item,{label:e("Legal address"),children:(0,i.jsx)(C.A.TextArea,{value:(null==t?void 0:t.legalAddress.split(";").join("\n"))||"",readOnly:!0,autoSize:!0})})},P=()=>{const{__:e}=(0,v.s)(),{vendor:{urls:t}}=y(),{privacy:s,legIntClaim:n}=(null==t?void 0:t[0])||{langId:"",privacy:"",legIntClaim:""};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A.Item,{label:e("Privacy policy of the provider"),children:(0,i.jsx)(C.A,{value:s,readOnly:!0})}),(0,i.jsx)(d.A.Item,{label:e("Explanation of the legitimate interest"),children:(0,i.jsx)(C.A,{value:n,readOnly:!0})})]})};var T=s(6196),O=s(19393);const N=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:t,vendor:{additionalInformation:s}}=y();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.A.Item,{label:e("Territorial scope"),children:[(0,i.jsx)(T.A,{mode:"multiple",disabled:!0,value:(null==s?void 0:s.territorialScope)?[...s.territorialScope]:[],children:Object.keys(t).map((e=>(0,i.jsx)(T.A.Option,{value:e,children:t[e]},e)))}),(0,i.jsx)("p",{className:"description",children:e("The EU/EEA/EFTA/UK jurisdictions where the vendor operates in the context of its TCF registration. Note that this is different from the place of establishment.")}),(0,i.jsx)(O.A,{checked:null==s?void 0:s.internationalTransfers,disabled:!0}),(0,i.jsxs)("span",{children:["  ",e("This vendor transfers data outside EU/EEA")]})]}),(null==s?void 0:s.internationalTransfers)&&(0,i.jsx)(d.A.Item,{label:e("Transfer mechanism"),children:(0,i.jsxs)(T.A,{mode:"multiple",disabled:!0,value:(null==s?void 0:s.transferMechanisms)?[...s.transferMechanisms]:[],children:[(0,i.jsx)(T.A.Option,{value:"Adequacy decision",children:e("Adequacy decision")}),(0,i.jsx)(T.A.Option,{value:"SCCs",children:e("Standard contractual clauses")}),(0,i.jsx)(T.A.Option,{value:"BCRs",children:e("Binding corporate rules")}),(0,i.jsx)(T.A.Option,{value:"Other",children:e("Other")})]})})]})},D=()=>{const{__:e}=(0,v.s)(),{iso3166OneAlpha2:t}=y();return(0,i.jsxs)(d.A.Item,{label:e("Data processing in countries"),children:[(0,i.jsx)(d.A.Item,{name:"dataProcessingInCountries",noStyle:!0,children:(0,i.jsx)(T.A,{mode:"multiple",showSearch:!0,optionFilterProp:"children",maxTagCount:"responsive",children:Object.keys(t).map((e=>(0,i.jsx)(T.A.Option,{value:e,children:t[e]},e)))})}),(0,i.jsx)("p",{className:"description",children:e("Data is usually processed in the countries where the vendor has its headquarter or servers. You should check with your service provider where your users' data is processed.")})]})};var _=s(64715),F=s(45854),L=s(85232),B=s(58659),E=s(87711),$=s(76210);const R=()=>{const{__:e,_i:t}=(0,v.s)(),{iso3166OneAlpha2:s,territorialLegalBasis:n,predefinedDataProcessingInSafeCountriesLists:r,vendor:{additionalInformation:o}}=y(),a=(0,L.o)({__:e,_i:t,predefinedDataProcessingInSafeCountriesLists:r,iso3166OneAlpha2:s,territorialLegalBasis:n}),{dataProcessingInUnsafeCountriesArticles:l,dataProcessingInUnsafeCountriesArticlesLinks:c}=(0,B.j)({predefinedDataProcessingInSafeCountriesLists:r,iso3166OneAlpha2:s})(n);return(0,i.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>JSON.stringify(e.dataProcessingInCountries)!==JSON.stringify(t.dataProcessingInCountries)||JSON.stringify(e.dataProcessingInCountriesSpecialTreatments)!==JSON.stringify(t.dataProcessingInCountriesSpecialTreatments),children:u=>{let{getFieldValue:h}=u;const p=h("dataProcessingInCountries"),f=h("dataProcessingInCountriesSpecialTreatments"),{unsafeCountries:m,allowedSpecialTreatments:v}=(0,$.F)({territorialLegalBasis:n,predefinedDataProcessingInSafeCountriesLists:r,service:{dataProcessingInCountries:p,dataProcessingInCountriesSpecialTreatments:f}}),x=a.filter((e=>{let{value:t}=e;return v.indexOf(t)>-1})).map((t=>{var s;const n=(null==o||null==(s=o.transferMechanisms)?void 0:s.indexOf("SCCs"))>-1;return t.value===g.ak.StandardContractualClauses?{...t,disabled:n,label:n?(0,i.jsx)(_.A,{title:e("The vendor states that standard contractual clauses must be concluded with it in any case. Please make sure that you have a corresponding contract with him!"),overlayStyle:{maxWidth:500},placement:"bottomLeft",children:t.label}):t.label}:t}));return(0,i.jsxs)(d.A.Item,{label:e("Safety mechanisms for data transmission"),style:{display:0===x.length?"none":void 0},children:[(0,i.jsx)("p",{className:"description",style:{margin:"0px 0px 10px 0px"},children:t(e("You have selected countries which are considered as unsafe (%s). If you activate one of this safety mechanisms, you do not ask for consent according to {{article/}}, if this kind of consent is activated at all in the settings.",m.map((e=>s[e])).join(", ")),{article:(0,E.i)(l.map(((e,t)=>(0,i.jsx)("a",{href:c[t],target:"_blank",rel:"noreferrer",children:e},e))),e(" or "))})}),(0,i.jsx)(d.A.Item,{name:"dataProcessingInCountriesSpecialTreatments",noStyle:!0,children:(0,i.jsx)(F.A.Group,{options:x})})]})}})},V=6,M=()=>{const{__:e}=(0,v.s)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.r,{offset:V,children:e("General vendor configuration")}),(0,i.jsx)(A,{}),(0,i.jsx)(w,{}),(0,i.jsx)(I,{}),(0,i.jsx)(P,{}),(0,i.jsx)(N,{}),(0,i.jsx)(D,{}),(0,i.jsx)(R,{})]})};var z=s(65805),W=s(73491),J=s(2406),q=s(19488);const{Column:G}=z.A,U={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},Y=250,H=()=>{const{__:e,_i:t,_n:s}=(0,v.s)(),{vendor:r,declarations:{purposes:o,specialPurposes:a}}=y(),{dataRetention:l}=r,c=(0,n.useMemo)((()=>Object.values(o).map((e=>r.purposes.indexOf(e.id)>-1||r.legIntPurposes.indexOf(e.id)>-1?{purpose:e,type:"normal"}:void 0)).concat(Object.values(a).map((e=>r.specialPurposes.indexOf(e.id)>-1?{purpose:e,type:"special"}:void 0))).filter(Boolean)),[r,o,a]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.r,{offset:V,description:t(e('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:(0,i.jsx)("strong",{}),aGdpr:(0,i.jsx)("a",{href:e("https://gdpr-text.com/read/article-6/"),target:"_blank",rel:"noreferrer"})}),children:e("Purposes and special purposes")}),(0,i.jsxs)(z.A,{dataSource:c,rowKey:e=>{let{purpose:{id:t},type:s}=e;return`${s}${t}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,i.jsx)(G,{width:Y,title:e("Name"),dataIndex:"name",render:(e,t)=>{let{purpose:{name:s}}=t;return s}},"name"),(0,i.jsx)(G,{title:e("Enabled"),dataIndex:"enabled",render:(e,t)=>{let{purpose:{id:s},type:n}=t;return(0,i.jsx)(d.A.Item,{...U,name:"special"===n?void 0:["restrictivePurposes",n,s.toString(),"enabled"],valuePropName:"checked",children:(0,i.jsx)(O.A,{size:"small",disabled:"normal"!==n,defaultChecked:"special"===n||void 0})})}},"enabled"),(0,i.jsx)(G,{title:e("Legal basis"),dataIndex:"name",render:(t,s)=>{let{purpose:{id:n},type:o}=s;return(0,i.jsx)(d.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>{var s,i;return(null==(s=e.restrictivePurposes[o])?void 0:s[n].enabled)!==(null==(i=t.restrictivePurposes[o])?void 0:i[n].enabled)},children:t=>{let{getFieldValue:s}=t;return(0,i.jsx)(d.A.Item,{...U,name:"special"===o?void 0:["restrictivePurposes",o,n.toString(),"legInt"],children:(0,i.jsxs)(T.A,{size:"small",disabled:-1===r.flexiblePurposes.indexOf(n)||!s(["restrictivePurposes",o,n.toString(),"enabled"]),defaultValue:"special"===o?"no":void 0,children:[(0,i.jsx)(T.A.Option,{value:"yes",children:e("Legitimate interest")}),(0,i.jsx)(T.A.Option,{value:"no",children:e("Consent")})]})})}})}},"name"),(0,i.jsx)(G,{title:e("Description"),dataIndex:"description",render:(t,s)=>{let{purpose:{description:n,illustrations:r},type:o}=s;return(0,i.jsxs)(_.A,{title:r.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,i.jsx)("ul",{children:r.map((e=>(0,i.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,i.jsx)(q.A,{style:{cursor:"pointer",opacity:.5}})," ",n," ","special"===o&&(0,i.jsx)(W.A,{color:"warning",children:e("Special purpose")})]})}},"description"),(0,i.jsx)(G,{title:e("Data retention period"),dataIndex:"dataRetention",render:(t,i)=>{let{purpose:{id:n},type:r}=i;const o=(0,J.kd)(l,n,"special"===r);return o?s("%d day","%d days",o,o):e("Not defined")}},"dataRetention")]})]})};var K,Z,X,Q=s(28101),ee=s(96077);!function(e){e.v2="v2",e.v3="v3"}(K||(K={})),function(e){e.Cookie="cookie",e.Web="web",e.App="app"}(Z||(Z={})),function(e){e.Bulgarian="bg",e.Catalan="ca",e.Czech="cs",e.Danish="da",e.German="de",e.Greek="el",e.Spanish="es",e.Estonian="et",e.Basque="eus",e.Finnish="fi",e.French="fr",e.Galician="gl",e.Croatian="hr",e.Hungarian="hu",e.Italian="it",e.Japanese="ja",e.Lithuanian="lt",e.Latvian="lv",e.Maltese="mt",e.Dutch="nl",e.Norwegian="no",e.Polish="pl",e.Portuguese="pt",e.Romanian="ro",e.SerbianCyrillic="sr-Cyrl",e.SerbianLatin="sr-Latn",e.Russian="ru",e.Slovak="sk",e.Slovenian="sl",e.Swedish="sv",e.Turkish="tr",e.Chinese="zh"}(X||(X={}));const{Column:te}=z.A,se=()=>{const{__:e,_i:t,_n:s}=(0,v.s)(),{vendor:{usesCookies:r,usesNonCookieAccess:o,cookieMaxAgeSeconds:a,cookieRefresh:l,deviceStorageDisclosureUrl:d,deviceStorageDisclosureViolation:c,deviceStorageDisclosure:u},declarations:{purposes:h}}=y(),p=(0,n.useMemo)((()=>{const e=(null==u?void 0:u.disclosures.length)?[...u.disclosures]:[];return o&&e.unshift({type:Z.Web,identifier:"*",purposes:void 0,cookieRefresh:void 0,domain:"*",maxAgeSeconds:null}),r&&e.unshift({type:Z.Cookie,identifier:"*",purposes:void 0,cookieRefresh:l,domain:"*",maxAgeSeconds:a}),e}),[o,r,a,l,u]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(S.r,{offset:V,description:t(e("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Rectial 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:(0,i.jsx)("a",{href:e("https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32009L0136"),target:"_blank",rel:"noreferrer"})}),children:[e("Device Storage Disclosure")," (",e("Technical cookie information"),")"]}),c?(0,i.jsxs)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"10px 0"},children:[(0,i.jsx)("p",{children:t(e('TCF vendors must disclose their cookies, among other things, in accordance with the {{a}}"Vendor Device Storage & Operational Disclosures"{{/a}} specification. However, this vendor fails to comply with the specification, so that the mandatory information for obtaining informed consent as defined by the GDPR cannot be read. You as a website operator can therefore not obtain valid consent for this vendor.'),{a:(0,i.jsx)("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/7c79f48b033f783d98da922152430657097f5ab2/TCFv2/Vendor%20Device%20Storage%20&%20Operational%20Disclosures.md",target:"_blank",rel:"noreferrer"})})}),(0,i.jsx)("p",{children:t(e("You can find the vendor's faulty device storage disclosure at {{a}}%s{{/a}}. Please contact the vendor and ask for a standard compliant device disclosures!",d),{a:(0,i.jsx)("a",{href:d,target:"_blank",rel:"noreferrer"})})}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:e("Problem:")})," ",e("no-disclosures"===c?"The vendor does not provide any disclosures.":"disclosure-no-domains"===c?"The vendor does not specify for one or multiple cookies for which domains they are valid.":"disclosure-no-purposes"===c?"The vendor does not specify the purpose for one or multiple cookies.":"disclosure-no-cookie-refresh"===c?"The vendor does not specify for one or multiple cookies if the cookie does refresh.":"disclosure-no-max-age-seconds"===c?"The vendor does not specify the age in seconds for one or multiple cookies.":"The vendor provides a technically non-machine-readable variant of the data, which differs significantly from the defined standard.")]})]}):(0,i.jsxs)(z.A,{locale:{emptyText:(0,i.jsx)(Q.A,{description:e("This vendor does not provide any device storage disclosure.")})},dataSource:p,pagination:{pageSize:15,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,showSizeChanger:!1},rowKey:e=>{let{identifier:t,type:s}=e;return`${s}${t}`},size:"small",bordered:!0,children:[(0,i.jsx)(te,{width:Y,title:e("Cookie type"),dataIndex:"cookieType",render:(e,t)=>{let{type:s}=t;return(0,J.p7)(s)}},"cookieType"),(0,i.jsx)(te,{title:e("Identifier"),dataIndex:"identifier",render:(t,s)=>{let{identifier:n}=s;return n?(0,i.jsx)("code",{children:n}):e("Not defined")}},"identifier"),(0,i.jsx)(te,{title:e("Domain"),dataIndex:"domain",render:(t,s)=>{let{domains:n,domain:r}=s;return n?(0,i.jsx)("code",{children:n.join(",")}):r?(0,i.jsx)("code",{children:r}):e("Not defined")}},"domain"),(0,i.jsx)(te,{title:e("Duration"),dataIndex:"duration",render:(t,s)=>{let{maxAgeSeconds:n,cookieRefresh:r}=s;return null!==n?(0,i.jsxs)(i.Fragment,{children:[n<=0?(0,i.jsx)(_.A,{title:e("This cookie is active as long as the session is active"),children:(0,i.jsx)("span",{children:e("Session")})}):(0,i.jsxs)("span",{children:[n," ",e("second(s)")]}),r&&(0,i.jsx)(W.A,{icon:(0,i.jsx)(ee.A,{}),style:{marginLeft:10},children:e("Refresh")})]}):e("Not defined")}},"duration"),(0,i.jsx)(te,{title:e("Purposes"),dataIndex:"purposes",render:(t,n)=>{let{purposes:r}=n;return r?r.length?(0,i.jsx)(_.A,{title:(0,i.jsx)("ul",{style:{margin:0,padding:0},children:r.map((e=>(0,i.jsx)("li",{children:h[e].name},e)))}),children:s("%d purpose","%d purposes",r.length,r.length)}):e("None"):e("Unknown")}},"purposes")]})]})},{Column:ie}=z.A,ne=()=>{const{__:e}=(0,v.s)(),{vendor:t,declarations:{features:s,specialFeatures:r}}=y(),o=(0,n.useMemo)((()=>Object.values(s).map((e=>t.features.indexOf(e.id)>-1?{feature:e,isSpecial:!1}:void 0)).concat(Object.values(r).map((e=>t.specialFeatures.indexOf(e.id)>-1?{feature:e,isSpecial:!0}:void 0))).filter(Boolean)),[t,s,r]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.r,{offset:V,description:e("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes."),children:e("Features and special features")}),(0,i.jsxs)(z.A,{locale:{emptyText:(0,i.jsx)(Q.A,{description:e("This vendor has not listed any used features.")})},dataSource:o,rowKey:e=>{let{feature:{id:t},isSpecial:s}=e;return`${t}-${s}`},size:"small",bordered:!0,pagination:!1,style:{marginBottom:25},children:[(0,i.jsx)(ie,{width:Y,title:e("Name"),dataIndex:"name",render:(e,t)=>{let{feature:{name:s}}=t;return s}},"name"),(0,i.jsx)(ie,{title:e("Description"),dataIndex:"description",render:(t,s)=>{let{feature:{description:n,illustrations:r},isSpecial:o}=s;return(0,i.jsxs)(_.A,{title:r.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("strong",{children:[e("Illustrations"),": "]}),(0,i.jsx)("ul",{children:r.map((e=>(0,i.jsx)("li",{children:e},e)))})]}),placement:"bottomLeft",overlayInnerStyle:{width:500},children:[(0,i.jsx)(q.A,{style:{cursor:"pointer",opacity:.5}})," ",n," ",o&&(0,i.jsx)(W.A,{color:"warning",children:e("Special feature")})]})}},"description")]})]})},{Column:re}=z.A,oe=()=>{const{__:e}=(0,v.s)(),{vendor:t,declarations:{dataCategories:s}}=y(),r=(0,n.useMemo)((()=>Object.values(s).filter((e=>t.dataDeclaration.indexOf(e.id)>-1))),[t,s]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.r,{offset:V,description:e("Data categories are specified by the vendor and are immutable. They describe the characteristics of which personal data is processed."),children:e("Data categories")}),(0,i.jsxs)(z.A,{locale:{emptyText:(0,i.jsx)(Q.A,{description:e("This vendor has not listed any data categories.")})},dataSource:r,rowKey:"id",size:"small",bordered:!0,pagination:!1,children:[(0,i.jsx)(re,{width:Y,title:e("Name"),dataIndex:"name"},"name"),(0,i.jsx)(re,{title:e("Description"),dataIndex:"description"},"description")]})]})};var ae=s(3680);const le=()=>{const{__:e,_x:t}=(0,v.s)(),{isEdit:s}=y();return!s&&(0,i.jsx)(d.A.Item,{name:"templateCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:e("Please confirm that you have checked the contents of the service.")}],wrapperCol:{offset:j.sN.labelCol.span},children:(0,i.jsxs)(F.A,{children:[t("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.","legal-text")," ",(0,i.jsx)(ae.Y,{url:e("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")})]})})},de=()=>{const{__:e}=(0,v.s)(),t=(0,n.useRef)();return(0,i.jsxs)("div",{ref:t,children:[(0,i.jsx)(M,{}),(0,i.jsx)(se,{}),(0,i.jsx)(H,{}),(0,i.jsx)(ne,{}),(0,i.jsx)(oe,{}),(0,i.jsxs)(d.A.Item,{className:"rcb-antd-form-sticky-submit",labelCol:{span:0},wrapperCol:{span:24},children:[(0,i.jsx)(le,{}),(0,i.jsx)(d.A.Item,{wrapperCol:{offset:V},children:(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("input",{type:"submit",className:"button button-primary",value:e("Save")})})})]})]})};var ce=s(79275);const ue=(0,r.PA)((e=>{let{vendor:t,navigateAfterCreation:s=!0,scrollToTop:r=!0,onCreated:y}=e;const{message:S}=o.A.useApp(),{vendorConfiguration:C,id:A,queried:k,fetched:w,link:I}=(0,p.E)(),P=(0,h.useNavigate)(),{tcfStore:T,optionStore:{territorialLegalBasis:O,others:{iso3166OneAlpha2:N,frontend:{predefinedDataProcessingInSafeCountriesLists:D}}}}=(0,u.g)(),{vendorConfigurations:_,declarations:F}=T,[L,B]=(0,n.useState)(t),{prompt:E,form:$,isBusy:R,defaultValues:V,overrideValues:M,onFinish:z,onFinishFailed:W,onValuesChange:J,contextValue:q}=function(e){const{__:t}=(0,v.s)(),{attributes:s,template:i,vendor:n,declarations:r,isEdit:o}=e,a={status:"publish",restrictivePurposes:{normal:{}},dataProcessingInCountries:[],dataProcessingInCountriesSpecialTreatments:[],templateCheck:!1,...s||{}};if(n&&r)for(const e of[...n.legIntPurposes,...n.purposes].filter(Boolean))a.restrictivePurposes.normal[e.toString()]={enabled:!0,legInt:n.legIntPurposes.indexOf(e)>-1&&-1===n.specialPurposes.indexOf(e)?"yes":"no"};return{...(0,m.S)({...e,handleSave:async s=>{if(0===Object.values(s.restrictivePurposes.normal).filter((e=>{let{enabled:t}=e;return t})).length+n.specialPurposes.length)throw t("You need to enable at least one purpose!");return await e.handleSave(s)},defaultValues:a,i18n:{successMessage:t("You have successfully saved the TCF vendor configuration."),validationError:t("The TCF vendor configuration could not be saved due to missing/invalid form values."),unloadConfirm:t("You have unsaved changes. If you leave this page, your changes will be discarded.")}}),defaultValues:a,overrideValues:e=>{var t,s;return(null==n||null==(s=n.additionalInformation)||null==(t=s.transferMechanisms)?void 0:t.indexOf("SCCs"))>-1&&e.dataProcessingInCountriesSpecialTreatments.push(g.ak.StandardContractualClauses),e},contextValue:{isEdit:o,vendor:n,declarations:r,defaultTemplateValues:i?a:{}}}}({isEdit:w,handleSave:async e=>{const{status:t,restrictivePurposes:i={normal:{}},dataProcessingInCountries:n,dataProcessingInCountriesSpecialTreatments:r,...o}=e;try{const e={...o,vendorId:L.data.id,restrictivePurposes:JSON.stringify(i),dataProcessingInCountries:JSON.stringify(n),dataProcessingInCountriesSpecialTreatments:JSON.stringify(r)};if(delete e.templateCheck,k)C.setStatus(t),C.setMeta(e),await C.patch();else{const s=new f.p(_,{status:t,meta:{...e}});await s.persist(),null==y||y(s)}return()=>s&&P(I.slice(1))}catch(e){throw S.error(e.responseJSON.message),e}},declarations:F,vendor:null==L?void 0:L.data}),G=M(w?{status:C.data.status,restrictivePurposes:JSON.parse(JSON.stringify(C.restrictivePurposes)),dataProcessingInCountries:JSON.parse(JSON.stringify(C.dataProcessingInCountries)),dataProcessingInCountriesSpecialTreatments:JSON.parse(JSON.stringify(C.dataProcessingInCountriesSpecialTreatments)),templateCheck:!0}:V);(0,n.useEffect)((()=>{C.vendorModel&&B(C.vendorModel)}),[C]),(0,n.useEffect)((()=>{k&&!w&&_.getSingle({params:{id:A,context:"edit"}})}),[k,w]),(0,n.useEffect)((()=>{r&&(0,c.V)(0)}),[]);const U=k&&!w||!L||!F,[Y,H]=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,x.gm)(b,...t)}({...q,territorialLegalBasis:O,iso3166OneAlpha2:N,predefinedDataProcessingInSafeCountriesLists:D},{},{inherit:["vendor"],deps:[U]});return U?(0,i.jsx)(ce.e,{maxWidth:"fixed",children:(0,i.jsx)(a.A,{active:!0,paragraph:{rows:8}})}):(0,i.jsx)(ce.e,{maxWidth:"fixed",children:(0,i.jsx)(Y,{value:H,children:(0,i.jsxs)(l.A,{spinning:R,children:[E,(0,i.jsx)(d.A,{name:`tcf-vendor-${A}`,form:$,...j.sN,initialValues:G,onFinish:z,onFinishFailed:W,onValuesChange:J,scrollToFirstError:{behavior:"smooth",block:"center"},labelWrap:!0,children:(0,i.jsx)(de,{})})]})})})}))},4387:(e,t,s)=>{s.d(t,{t:()=>a});var i=s(69665),n=s(95498),r=s(41594),o=s(11276);const a=()=>{const e=(0,i.useParams)(),{cookieStore:t}=(0,n.g)(),s=+e.blocker,a=isNaN(+s)?0:+s,l=!!s,d=t.blockers.entries.get(a)||new o.g(t.blockers,{id:0}),c=(0,r.useCallback)((e=>{let{key:t}=e;return`#/blocker/edit/${t}`}),[d]);return{blocker:d,id:a,queried:l,fetched:0!==d.key,link:"#/blocker",editLink:c,addLink:"#/blocker/new"}}},9316:(e,t,s)=>{s.d(t,{E:()=>a});var i=s(69665),n=s(95498),r=s(41594),o=s(22201);const a=()=>{const{tcfStore:e}=(0,n.g)(),t=+(0,i.useParams)().vendorConfiguration,s=isNaN(+t)?0:+t,a=!!t,l=e.vendorConfigurations.entries.get(s)||new o.p(e.vendorConfigurations,{id:0}),d=(0,r.useCallback)((e=>{let{key:t}=e;return`#/cookies/tcf-vendors/edit/${t}`}),[l]);return{vendorConfiguration:l,id:s,queried:a,fetched:0!==l.key,link:"#/cookies/tcf-vendors",editLink:d,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.8.4/c1a4baeeecaad972dfe1b428c446f9f0/347.pro.js.map