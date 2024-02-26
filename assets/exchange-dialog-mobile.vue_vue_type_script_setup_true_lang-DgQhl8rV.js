import{d as M,w as $,ax as Y,aa as J,o as T,n as E,q as r,A as S,t,aA as Q,P as O,R as ee,aB as ae,T as te,c as z,v as s,aC as se,r as D,e as le,f as V,g as l,N as p,i as f,j as H,p as C,k as ne,l as B,m as oe,s as o,u as ie,x as N,y as L,z as j,B as G,C as P,D as A,E as ce,F as re,G as Z,H as de,I as ue}from"./index-DOWG_QFa.js";import{b as pe,_ as fe,a as U}from"./kx-tabs-tab.vue_vue_type_script_setup_true_lang-BYvJbcWX.js";import{_ as me,a as R}from"./kx-tabs-panel.vue_vue_type_script_setup_true_lang-CBa6ghOK.js";import{u as xe,_ as ge,a as W,b as ve}from"./useExchangeDialog-D3zyibQV.js";import{c as _e}from"./index-DAunUY-_.js";const F=Symbol("dialogSymbol"),he=M({__name:"kx-dialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","close"],setup(g,{emit:d}){const c=g,m=d,w=()=>m("update:modelValue",!1),x=()=>{w()};return $(()=>c.modelValue,u=>{document.body.classList.toggle("kx-dialog--hidden",u),u||m("close")},{immediate:!0}),Y(F,{visible:J(()=>c.modelValue),closeDialog:w}),(u,a)=>(T(),E(ae,{name:"kx-dialog-fade",appear:""},{default:r(()=>[S(t("div",{onClick:Q(x,["self"]),class:"fixed inset-0 w-screen h-screen z-50 bg-[rgba(0,0,0,0.80)] grid place-content-center"},[O(u.$slots,"default")],512),[[ee,u.modelValue]])]),_:3}))}}),we=["width","height"],be=t("path",{d:"M30 6L6 30M6 6L30 30",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ye=[be],Te=M({__name:"kx-dialog-close",props:{size:{default:"36"},width:{default:"36"},height:{default:"36"}},setup(g){const d=g;let c=d.width.replace("px",""),m=d.height.replace("px","");d.size&&(c=d.size,m=d.size);const w={width:`${c}px`,height:`${m}px`},x=te(F),u=()=>x==null?void 0:x.closeDialog();return(a,v)=>(T(),z("div",{onClick:u,style:w,class:"inline-flex"},[O(a.$slots,"default",{},()=>[(T(),z("svg",{width:s(c),height:s(m),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",fill:"none"},ye,8,we))])]))}}),Be={},ke={class:"kx-dialog-content"};function Ce(g,d){return T(),z("div",ke,[O(g.$slots,"default")])}const Le=se(Be,[["render",Ce]]),De={class:"w-full py-[13px] flex gap-2.5 items-center justify-center rounded-[50px] bg-[var(--primary-color)] whitespace-nowrap"},Ve=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none"},[t("g",{"clip-path":"url(#clip0_3647_12988)"},[t("path",{d:"M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z",fill:"#191919"})]),t("defs",null,[t("clipPath",{id:"clip0_3647_12988"},[t("rect",{width:"24",height:"24",fill:"white"})])])],-1),Ae={class:"font-medium text-[var(--primary-black-color)]"},$e={class:"pt-[13px] pr-[13px] flex justify-end"},Ee={class:"relative py-[15px] pl-[10px] space-y-[5px] bg-[#50596821] rounded-[10px]"},Se=t("div",{class:"text-[14px] font-medium text-white leading-none"}," Start Trading ",-1),ze=t("div",{class:"text-[10px] text-[#B9BDC3] font-Pragmatica"}," Allocate your funds for trading to begin the KYEX experience. ",-1),Me={class:"flex items-center justify-between px-2.5 py-3 rounded-[5px] bg-[#50596854] font-Pragmatica"},Oe=t("span",{class:"text-[12px] text-[#B9BDC3]"},"Asset",-1),Ie={class:"flex items-center justify-between p-2.5 py-3 rounded-[5px] bg-[#50596854] font-Pragmatica"},He=t("span",{class:"text-[12px] text-[#B9BDC3]"},"balance",-1),Ne={class:"text-[14px] text-white"},je={class:"px-[10px] py-[15px] text-[12px] border border-[#505968] rounded-lg leading-base"},Ge={class:"px-[15px] pb-[25px] text-[12px] font-Transducer"},Pe={class:"relative py-[15px] pl-[10px] space-y-[5px] bg-[#50596821] rounded-[10px]"},Ze=t("div",{class:"text-[14px] font-medium text-white leading-none"}," Settle Balance ",-1),Ue=t("div",{class:"text-[10px] text-[#B9BDC3] font-Pragmatica"}," Collate trading balance to send back to your funding origins. ",-1),Re={class:"flex items-center justify-between px-2.5 py-3 rounded-[5px] bg-[#50596854] font-Pragmatica"},We=t("span",{class:"text-[12px] text-[#B9BDC3]"},"Asset",-1),Fe={class:"flex items-center justify-between p-2.5 py-3 rounded-[5px] bg-[#50596854] font-Pragmatica"},Ke=t("span",{class:"text-[12px] text-[#B9BDC3]"},"balance",-1),qe={class:"text-[14px] text-white"},Xe={class:"px-[10px] py-[15px] text-[12px] border border-[#505968] rounded-lg leading-base"},Ye={class:"px-[15px] pb-[25px] text-[12px] font-Transducer"},sa=M({__name:"exchange-dialog-mobile",props:{visible:{type:Boolean,default:!1},fundingOrSettlement:{default:"funding"}},setup(g){const d=g,{cwdBalance:c,cwdChainId:m,cwdAddress:w,erc20s:x,btcWalletAddress:u,selectedCoin:a,sendAmount:v,withdrawAmount:_}=xe(),k=D(d.visible),K=async()=>{if(v.value<=0){C("should > 0");return}try{if(l().startLoading(),A[a.value.name].onChainId<0)try{await ce(v.value)}catch{C("btc fund error"),l().stopLoading()}else m!=A[a.value.name].onChainId&&await V(A[a.value.name].onChainId),await re(a.value.value,v.value,c.value,w.value),B("交易创建成功！请在钱包内检查"),setTimeout(async()=>{await l().refreshZrc20sOnTx(),l().stopLoading(),k.value=!1},300)}catch(e){console.log(e),B("切换链失败，请重试！操作需要切换对应的链来执行充值"),l().stopLoading()}},q=async()=>{if(_.value<=0){C("should > 0");return}try{l().startLoading(),f().cwdChainId!=7001?(B("切换至zeta链以完成提币"),V(7001).then(async()=>{await Z(a.value.value,_.value)})):(console.log("我要转：",_.value,a),await Z(a.value.value,_.value)),await de(200),setTimeout(async()=>{await l().refreshZrc20sOnTx(),await l().refreshErc20s(),l().stopLoading(),k.value=!1},300)}catch(e){console.log(e),l().stopLoading()}},b=D(d.fundingOrSettlement);le(()=>{c.value=x.value[5]});const h=D(0),y=async e=>{try{await ue(e),c.value=x.value[String(e)]}catch(i){console.log(i)}};$(b,async()=>{if(b.value!="funding")try{await V(7001),await l().refreshZrc20s();let e;l().startLoading(),a.value.name==="ETH"?e=p[1].mainToken:a.value.name==="GETH"?e=p[5].mainToken:a.value.name==="TBNB"?e=p[97].mainToken:a.value.name==="DOGE"?e=p[2e3].mainToken:a.value.name==="MATIC"?e=p[80001].mainToken:(a.value.name,e=void 0),console.log("tokenis",e),e?(console.log(f().zrc20s),await H(e),console.log(f().zrc20s),h.value=f().zrc20s[e.toLowerCase()],console.log(h.value)):h.value=0,l().stopLoading()}catch{b.value="funding",C("需要切换到zetachain以获取资产进行提款"),l().stopLoading()}}),$(a,async()=>{if(b.value==="funding"){if(l().startLoading(),a.value.name==="ETH")await y(5);else if(a.value.name==="GETH")await y(5);else if(a.value.name==="TBNB")await y(97);else if(a.value.name==="DOGE")await y(2e3);else if(a.value.name==="MATIC")await y(80001);else if(a.value.name==="AZETA")await y(7001);else if(a.value.name==="BTC"){try{const e=await ne();B("获得btc账户："+e[0]),u.value=[],u.value.push(e[0]),console.log("starting get balance..."),await oe(),B("btc balance="+f().btcWalletAsset),console.log("finishing get balance...")}catch{console.log(500,500,500,500)}c.value=f().btcWalletAsset}else c.value=0;l().stopLoading()}else{let e;l().startLoading(),a.value.name==="ETH"?e=p[1].mainToken:a.value.name==="GETH"?e=p[5].mainToken:a.value.name==="TBNB"?e=p[97].mainToken:a.value.name==="DOGE"?e=p[2e3].mainToken:a.value.name==="MATIC"?e=p[80001].mainToken:(a.value.name,e=void 0),console.log("tokenis",e),e?(console.log(f().zrc20s),await H(e),console.log(f().zrc20s),h.value=f().zrc20s[e.toLowerCase()],console.log(h.value)):h.value=0,l().stopLoading()}});const[X,I]=_e();return(e,i)=>(T(),E(s(he),{modelValue:k.value,"onUpdate:modelValue":i[5]||(i[5]=n=>k.value=n)},{default:r(()=>[o(s(X),null,{default:r(({$slots:n})=>[t("button",De,[Ve,t("span",Ae,[(T(),E(ie(n.default)))])])]),_:1}),o(s(Le),{class:"w-[calc(100vw-40px)] bg-[#191919]"},{default:r(()=>[t("div",$e,[o(s(Te),{size:"18"})]),o(s(pe),{class:"mt-[13px]",modelValue:b.value,"onUpdate:modelValue":i[4]||(i[4]=n=>b.value=n),"active-color":"var(--primary-color)","in-active-color":"#B9BDC3"},{default:r(()=>[o(s(fe),{class:"half-1px-b gap-0 text-[15px] font-Transducer"},{default:r(()=>[o(s(U),{value:"funding",class:"flex-1 text-center grid place-content-center"},{default:r(({active:n})=>[t("span",{class:"py-2.5 border-b-[1px]",style:N({borderBottomColor:n?"var(--primary-color)":"var(--primary-black-color)"})}," Funding ",4)]),_:1}),o(s(U),{value:"settlement",class:"flex-1 text-center grid place-content-center"},{default:r(({active:n})=>[t("span",{class:"py-2.5 border-b-[1px] border-transparent",style:N({borderBottomColor:n?"var(--primary-color)":"var(--primary-black-color)"})}," Settlement ",4)]),_:1})]),_:1}),o(s(me),{class:"leading-base px-[15px]"},{default:r(()=>[o(s(R),{value:"funding",class:"mt-[15px] grid gird-rows-4 gap-y-[15px]"},{default:r(()=>[t("div",Ee,[Se,ze,o(ge)]),t("div",Me,[Oe,o(W,{modelValue:s(a),"onUpdate:modelValue":i[0]||(i[0]=n=>L(a)?a.value=n:null)},null,8,["modelValue"])]),t("div",Ie,[He,t("span",Ne,j(s(c)),1)]),t("label",je,[S(t("input",{type:"number",class:"w-full bg-transparent outline-none text-[12px] text-[#B9BDC3]","onUpdate:modelValue":i[1]||(i[1]=n=>L(v)?v.value=n:null),placeholder:"Amount"},null,512),[[G,s(v)]])]),t("div",Ge,[o(s(I),{onClick:K},{default:r(()=>[P(" Allocate For Trading ")]),_:1})])]),_:1}),o(s(R),{value:"settlement",class:"mt-[15px] grid gird-rows-4 gap-y-[15px]"},{default:r(()=>[t("div",Pe,[Ze,Ue,o(ve)]),t("div",Re,[We,o(W,{modelValue:s(a),"onUpdate:modelValue":i[2]||(i[2]=n=>L(a)?a.value=n:null)},null,8,["modelValue"])]),t("div",Fe,[Ke,t("span",qe,j(h.value),1)]),t("label",Xe,[S(t("input",{type:"number",class:"w-full bg-transparent outline-none text-[12px] text-[#B9BDC3]","onUpdate:modelValue":i[3]||(i[3]=n=>L(_)?_.value=n:null),placeholder:"Amount"},null,512),[[G,s(_)]])]),t("div",Ye,[o(s(I),{onClick:q},{default:r(()=>[P(" Settlement ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]))}});export{sa as _};
