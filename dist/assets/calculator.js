function he(){const C=document.querySelector("input[name='Gesamtwert']"),y=document.querySelector("[data-name='price']"),h=document.querySelector("[data-name='personal']"),g=document.querySelector("[data-name='discount-section']"),k=document.querySelector("[data-name='price-section']"),te=document.querySelectorAll("input[name='Versicherung']"),S=document.querySelectorAll("input[name='Zahlung']"),u=document.querySelector("[data-name='coverage-section']"),F=document.querySelector("[data-name='sinfonima-wording']"),P=document.querySelector("[data-name='iamsound-wording']"),q=document.querySelector("[data-name='discount-code']"),E=document.querySelector("[data-name='discount-price']"),b=document.querySelector("[data-name='list-disclaimer']"),w=document.querySelector("[data-name='next-disclaimer']"),ne=document.querySelector("[data-name='secure-section']"),le=document.querySelectorAll("[name='Proberaum']"),oe=document.querySelectorAll("[name='Bewohnt']"),ce=document.querySelectorAll("input[name='flow']"),x=document.querySelector("[data-success='request']"),B=document.querySelector("[data-success='online']"),I=document.querySelector("[data-success='incomplete']"),A=document.querySelector("form");let v,n,t,a,i,U,z;u.style.display="none",g.style.display="none",I.style.display="none",q.addEventListener("keyup",s),C.addEventListener("keyup",s),S.forEach(e=>e.addEventListener("input",s)),te.forEach(e=>e.addEventListener("input",s)),u.addEventListener("click",s),ne.addEventListener("click",s),le.forEach(e=>e.addEventListener("input",s)),oe.forEach(e=>e.addEventListener("click",s)),ce.forEach(e=>e.addEventListener("input",s));function s(){var G,W,Z,j,$,K,Q,X,Y,_,ee;v=(G=document.querySelector("input[name='Zahlung']:checked"))==null?void 0:G.value,n=(W=document.querySelector("input[name='Versicherung']:checked"))==null?void 0:W.value;let e=C.value.replace(/\.(?:\d{1,2})$/,"");t=parseInt(e.replace(".","")),U=(Z=document.querySelector("input[name='Deckung']:checked"))==null?void 0:Z.value,z=q==null?void 0:q.value;const l=["tzouitxbq21","jntpvoe21"];n==="IM SOUND"?(F.style.display="none",P.style.display="inline",g.style.display="block"):(F.style.display="inline",P.style.display="none",g.style.display="none",d("request")),t&&n==="IM SOUND"&&(k.style.display="block"),(!t||t===0||!v||!n||n==="SINFONIMA")&&(k.style.display="none",h.style.display="none",u.style.display="none"),t<=3e3&n==="SINFONIMA"?(a=53.55,h.style.display="none",u.style.display="none"):t<=4e4&&n==="IM SOUND"?(a=t*.01785,t>2e4?(u.style.display="block",U==="Stationaer"&&(a=t*.00714)):u.style.display="none",a=Math.max(a,71.4),h.style.display="none"):(t>4e4&&n==="IM SOUND"||t>3e3&&n==="SINFONIMA")&&(k.style.display="none",u.style.display="none",h.style.display="block");function m(c){let o="";for(let f=0;f<c.length;f++){let fe=c.charCodeAt(f);o+=String.fromCharCode(fe+1)}return o}let T=m(z.toLowerCase());function re(c){let o=!1;return l.forEach(f=>{f===c&&(o=!0)}),o}re(T)&&n==="IM SOUND"?(T===l[0]?(document.querySelector("input[value='Jaehrlich']").checked=!0,J(),S[0].disabled=!0,v="Jährlich",i=t*.016065,i=Math.max(i,23.8),u.style.display="none"):(i=a*.9,i=V(i)),E.innerHTML=p(i)+" €",E.style.display="block",y.innerHTML=p(a)+" €",y.style.textDecoration="line-through",y.style.opacity="0.5"):(S.forEach(c=>c.disabled=!1),y.style.textDecoration="none",y.style.opacity="1",E.style.display="none",i=null);function V(c){return v==="Monatlich"&&!S[0].disabled?c/12*1.05:c}a=V(a),a=Math.round(a*100)/100,y.innerHTML=p(a)+" €";const N=document.querySelectorAll("[data-flow='request']"),D=document.querySelectorAll("[data-flow='online']"),L=document.querySelectorAll("[data-flow='online-partial']");let r=(j=document.querySelector("[name='flow']:checked"))==null?void 0:j.value,O=document.querySelector("input[name='Beitrag']");t<=2e4&&n==="IM SOUND"?(console.log("Flow: (potentially) online",r,t,n),r==="online"?(console.log("Flow: fully online",r,t,n),L.forEach(o=>o.style.display="block"),D.forEach(o=>o.style.display="block"),N.forEach(o=>o.style.display="none"),d("online")):r==="online-partial"&&(console.log("Flow: online partial",r,t,n),D.forEach(o=>o.style.display="none"),N.forEach(o=>o.style.display="block"),d("request")),L.forEach(o=>o.style.display="block"),ae(O,i||a),t>1e4&&r==="online"?(b.style.display="block",w.style.display="none"):(b.style.display="none",w.style.display="block")):(console.log("Flow: Request",r,t,n),O&&O.remove(),N.forEach(c=>c.style.display="block"),L.forEach(c=>c.style.display="none"),D.forEach(c=>c.style.display="none"),b.style.display="none",w.style.display="none",d("request"));let ue=($=document.querySelector("[name='Schloss20mm']:checked"))==null?void 0:$.value,de=(K=document.querySelector("[name='Schliesszylinder']:checked"))==null?void 0:K.value,ye=(Q=document.querySelector("[name='Sicherheitsbeschlaege']:checked"))==null?void 0:Q.value,me=(X=document.querySelector("[name='Pilzkopfverriegelung']:checked"))==null?void 0:X.value,pe=(Y=document.querySelector("[name='Fenster']:checked"))==null?void 0:Y.value,H=(_=document.querySelector("[name='Proberaum']:checked"))==null?void 0:_.value,R=(ee=document.querySelector("[name='Bewohnt']:checked"))==null?void 0:ee.value;n==="IM SOUND"&&H==="Nein"&&r==="online"||n==="IM SOUND"&&R==="Ja"&&r==="online"?(M("sicher"),d("online")):H==="Ja"&&R==="Nein"&&r==="online"&&(ue==="Nein"||de==="Nein"||ye==="Nein"||pe==="Ja"&&me==="Nein"?(M("unsicher"),d("incomplete")):(M("sicher"),d("online")))}function M(e){let l=document.querySelector("input[name='Sicherheit']");l||(l=document.createElement("input"),l.setAttribute("type","hidden"),l.setAttribute("name","Sicherheit"),A.prepend(l)),l.value=e}function ae(e,l){if(!e){const m=document.createElement("input");m.setAttribute("type","hidden"),m.setAttribute("name","Beitrag"),m.value=p(l)+" €",A.prepend(m)}e=document.querySelector("input[name='Beitrag']"),e.value=p(l)+" €"}function p(e){return e.toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})}let ie=document.querySelectorAll(".w-radio-input");function d(e){e==="request"?x.style.display="block":x.style.display="none",e==="online"?B.style.display="block":B.style.display="none",e==="incomplete"?I.style.display="block":I.style.display="none"}function se(){let e=navigator.userAgent?navigator.userAgent:""+navigator.oscpu?navigator.oscpu:"";if(!e)return;const l=document.createElement("input");l.setAttribute("type","hidden"),l.setAttribute("name","meta"),l.setAttribute("value",e),A.prepend(l)}se(),s();function J(){ie.forEach(e=>e.nextSibling.checked==!0?e.classList.add("w--redirected-checked"):e.classList.remove("w--redirected-checked"))}J()}document.addEventListener("DOMContentLoaded",he);
