function de(){const w=document.querySelector("input[name='Gesamtwert']"),m=document.querySelector("[data-name='price']"),h=document.querySelector("[data-name='personal']"),b=document.querySelector("[data-name='discount-section']"),g=document.querySelector("[data-name='price-section']"),Y=document.querySelectorAll("input[name='Versicherung']"),v=document.querySelectorAll("input[name='Zahlung']"),s=document.querySelector("[data-name='coverage-section']"),D=document.querySelector("[data-name='sinfonima-wording']"),L=document.querySelector("[data-name='iamsound-wording']"),q=document.querySelector("[data-name='discount-code']"),E=document.querySelector("[data-name='discount-price']"),A=document.querySelector("[data-name='list-disclaimer']"),I=document.querySelector("[data-name='next-disclaimer']"),_=document.querySelector("[data-name='secure-section']"),ee=document.querySelectorAll("[name='Proberaum']"),te=document.querySelectorAll("[name='Bewohnt']"),O=document.querySelector("[data-success='request']"),C=document.querySelector("[data-success='online']"),M=document.querySelector("[data-success='incomplete']"),N=document.querySelector("form");let k,c,l,o,a,x,P;s.style.display="none",b.style.display="none",M.style.display="none",q.addEventListener("keyup",i),w.addEventListener("keyup",i),v.forEach(e=>e.addEventListener("click",i)),Y.forEach(e=>e.addEventListener("click",i)),s.addEventListener("click",i),s.addEventListener("click",i),_.addEventListener("click",i),ee.forEach(e=>e.addEventListener("click",i)),te.forEach(e=>e.addEventListener("click",i));function i(){var H,G,R,W,Z,j,$,K,Q,X;k=(H=document.querySelector("input[name='Zahlung']:checked"))==null?void 0:H.value,c=(G=document.querySelector("input[name='Versicherung']:checked"))==null?void 0:G.value;let e=w.value.replace(/\.(?:\d{1,2})$/,"");l=parseInt(e.replace(".","")),x=(R=document.querySelector("input[name='Deckung']:checked"))==null?void 0:R.value,P=q==null?void 0:q.value;const y=["tzouitxbq21","jntpvoe21"];c==="IM SOUND"?(D.style.display="none",L.style.display="inline",b.style.display="block"):(D.style.display="inline",L.style.display="none",b.style.display="none",p("request")),l&&c==="IM SOUND"&&(g.style.display="block"),(!l||l===0||!k||!c||c==="SINFONIMA")&&(g.style.display="none",h.style.display="none",s.style.display="none"),l<=3e3&c==="SINFONIMA"?(o=53.55,h.style.display="none",s.style.display="none"):l<=4e4&&c==="IM SOUND"?(o=l*.01785,l>2e4?(s.style.display="block",x==="Stationaer"&&(o=l*.00714)):s.style.display="none",o=Math.max(o,71.4),h.style.display="none"):(l>4e4&&c==="IM SOUND"||l>3e3&&c==="SINFONIMA")&&(g.style.display="none",s.style.display="none",h.style.display="block");function ce(t){let u="";for(let d=0;d<t.length;d++){let n=t.charCodeAt(d);u+=String.fromCharCode(n+1)}return u}let B=ce(P.toLowerCase());function oe(t){let u=!1;return y.forEach(d=>{d===t&&(u=!0)}),u}oe(B)&&c==="IM SOUND"?(B===y[0]?(document.querySelector("input[value='Jaehrlich']").checked=!0,U(),v[0].disabled=!0,k="Jährlich",a=l*.016065,a=Math.max(a,23.8),s.style.display="none"):(a=o*.9,a=z(a)),E.innerHTML=f(a)+" €",E.style.display="block",m.innerHTML=f(o)+" €",m.style.textDecoration="line-through",m.style.opacity="0.5"):(v.forEach(t=>t.disabled=!1),m.style.textDecoration="none",m.style.opacity="1",E.style.display="none",a=null);function z(t){return k==="Monatlich"&&!v[0].disabled?t/12*1.05:t}o=z(o),o=Math.round(o*100)/100;function f(t){return t.toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})}m.innerHTML=f(o)+" €";const F=document.querySelectorAll("[data-flow='request']"),J=document.querySelectorAll("[data-flow='online']"),r=document.querySelector("input[name='flow']");let S=document.querySelector("input[name='Beitrag']");if(l<=2e4&&c==="IM SOUND"){let t=function(){if(r)return;const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","flow"),n.setAttribute("value","online"),N.prepend(n)},d=function(){if(S)return;const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","Beitrag"),n.value=f(u)+" €",N.prepend(n),S=document.querySelector("input[name='Beitrag']")};var me=t,pe=d;J.forEach(n=>n.style.display="block"),F.forEach(n=>n.style.display="none"),t();let u=a||o;d(),S.value=f(u)+" €",l>1e4?(A.style.display="block",I.style.display="none"):(A.style.display="none",I.style.display="block")}else r&&r.remove(),S&&S.remove(),F.forEach(t=>t.style.display="block"),J.forEach(t=>t.style.display="none"),A.style.display="none",I.style.display="none",p("request");let ae=(W=document.querySelector("[name='Schloss20mm']:checked"))==null?void 0:W.value,ie=(Z=document.querySelector("[name='Schliesszylinder']:checked"))==null?void 0:Z.value,se=(j=document.querySelector("[name='Sicherheitsbeschlaege']:checked"))==null?void 0:j.value,re=($=document.querySelector("[name='Pilzkopfverriegelung']:checked"))==null?void 0:$.value,ue=(K=document.querySelector("[name='Fenster']:checked"))==null?void 0:K.value,T=(Q=document.querySelector("[name='Proberaum']:checked"))==null?void 0:Q.value,V=(X=document.querySelector("[name='Bewohnt']:checked"))==null?void 0:X.value;c==="IM SOUND"&&T==="Nein"&&r||c==="IM SOUND"&&V==="Ja"&&r?(r.value="online",p("online")):T==="Ja"&&V==="Nein"&&r&&(ae==="Nein"||ie==="Nein"||se==="Nein"||ue==="Ja"&&re==="Nein"?(r.value="incomplete",p("incomplete")):(r.value="online",p("online")))}let ne=document.querySelectorAll(".w-radio-input");function p(e){e==="request"?O.style.display="block":O.style.display="none",e==="online"?C.style.display="block":C.style.display="none",e==="incomplete"?M.style.display="block":M.style.display="none"}function le(){let e=navigator.userAgent?navigator.userAgent:""+navigator.oscpu?navigator.oscpu:"";if(!e)return;const y=document.createElement("input");y.setAttribute("type","hidden"),y.setAttribute("name","meta"),y.setAttribute("value",e),N.prepend(y)}le(),i();function U(){ne.forEach(e=>e.nextSibling.checked==!0?e.classList.add("w--redirected-checked"):e.classList.remove("w--redirected-checked"))}U()}document.addEventListener("DOMContentLoaded",de);
