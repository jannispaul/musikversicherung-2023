function ue(){const w=document.querySelector("input[name='Gesamtwert']"),m=document.querySelector("[data-name='price']"),h=document.querySelector("[data-name='personal']"),b=document.querySelector("[data-name='discount-section']"),g=document.querySelector("[data-name='price-section']"),X=document.querySelectorAll("input[name='Versicherung']"),v=document.querySelectorAll("input[name='Zahlung']"),s=document.querySelector("[data-name='coverage-section']"),D=document.querySelector("[data-name='sinfonima-wording']"),L=document.querySelector("[data-name='iamsound-wording']"),q=document.querySelector("[data-name='discount-code']"),E=document.querySelector("[data-name='discount-price']"),A=document.querySelector("[data-name='list-disclaimer']"),I=document.querySelector("[data-name='next-disclaimer']"),Y=document.querySelector("[data-name='secure-section']"),_=document.querySelectorAll("[name='Proberaum']"),ee=document.querySelectorAll("[name='Bewohnt']"),O=document.querySelector("[data-success='request']"),C=document.querySelector("[data-success='online']"),M=document.querySelector("[data-success='incomplete']"),N=document.querySelector("form");let k,c,l,o,d,U,x;s.style.display="none",b.style.display="none",M.style.display="none",q.addEventListener("keyup",a),w.addEventListener("keyup",a),v.forEach(e=>e.addEventListener("click",a)),X.forEach(e=>e.addEventListener("click",a)),s.addEventListener("click",a),s.addEventListener("click",a),Y.addEventListener("click",a),_.forEach(e=>e.addEventListener("click",a)),ee.forEach(e=>e.addEventListener("click",a));function a(){var V,H,G,R,W,Z,j,$,K,Q;k=(V=document.querySelector("input[name='Zahlung']:checked"))==null?void 0:V.value,c=(H=document.querySelector("input[name='Versicherung']:checked"))==null?void 0:H.value;let e=w.value.replace(/\.(?:\d{1,2})$/,"");l=parseInt(e.replace(".","")),U=(G=document.querySelector("input[name='Deckung']:checked"))==null?void 0:G.value,x=q==null?void 0:q.value;const y=["tzouitxbq21","jntpvoe21"];c==="IM SOUND"?(D.style.display="none",L.style.display="inline",b.style.display="block"):(D.style.display="inline",L.style.display="none",b.style.display="none",p("request")),l&&c==="IM SOUND"&&(g.style.display="block"),(!l||l===0||!k||!c||c==="SINFONIMA")&&(g.style.display="none",h.style.display="none",s.style.display="none"),l<=3e3&c==="SINFONIMA"?(o=53.55,h.style.display="none",s.style.display="none"):l<4e4&&c==="IM SOUND"?(o=l*.01785,l>2e4?(s.style.display="block",U==="Stationaer"&&(o=l*.00714)):s.style.display="none",o=Math.max(o,71.4),h.style.display="none"):(l>=4e4&&c==="IM SOUND"||l>3e3&&c==="SINFONIMA")&&(g.style.display="none",s.style.display="none",h.style.display="block");function le(t){let r="";for(let u=0;u<t.length;u++){let n=t.charCodeAt(u);r+=String.fromCharCode(n+1)}return r}let P=le(x.toLowerCase());function ce(t){let r=!1;return y.forEach(u=>{u===t&&(r=!0)}),r}ce(P)&&c==="IM SOUND"?(P===y[0]&&(document.querySelector("input[value='Jaehrlich']").checked=!0,B(),v[0].disabled=!0,k="Jährlich"),d=l*.016065,d<23.8&&(d=23.8),E.innerHTML=f(d)+" €",E.style.display="block",m.innerHTML=f(o)+" €",m.style.textDecoration="line-through",m.style.opacity="0.5"):(v.forEach(t=>t.disabled=!1),m.style.textDecoration="none",m.style.opacity="1",E.style.display="none",d=null),k==="Monatlich"&&!v[0].disabled&&(o=o/12*1.05),o=Math.round(o*100)/100;function f(t){return t.toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})}m.innerHTML=f(o)+" €";const z=document.querySelectorAll("[data-flow='request']"),F=document.querySelectorAll("[data-flow='online']"),i=document.querySelector("input[name='flow']");let S=document.querySelector("input[name='Beitrag']");if(l<=2e4&&c==="IM SOUND"){let t=function(){if(i)return;const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","flow"),n.setAttribute("value","online"),N.prepend(n)},u=function(){if(S)return;const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","Beitrag"),n.value=f(r)+" €",N.prepend(n),S=document.querySelector("input[name='Beitrag']")};var ye=t,me=u;F.forEach(n=>n.style.display="block"),z.forEach(n=>n.style.display="none"),t();let r=d||o;u(),S.value=f(r)+" €",l>1e4?(A.style.display="block",I.style.display="none"):(A.style.display="none",I.style.display="block")}else i&&i.remove(),S&&S.remove(),z.forEach(t=>t.style.display="block"),F.forEach(t=>t.style.display="none"),A.style.display="none",I.style.display="none",p("request");let oe=(R=document.querySelector("[name='Schloss20mm']:checked"))==null?void 0:R.value,ae=(W=document.querySelector("[name='Schliesszylinder']:checked"))==null?void 0:W.value,ie=(Z=document.querySelector("[name='Sicherheitsbeschlaege']:checked"))==null?void 0:Z.value,se=(j=document.querySelector("[name='Pilzkopfverriegelung']:checked"))==null?void 0:j.value,re=($=document.querySelector("[name='Fenster']:checked"))==null?void 0:$.value,J=(K=document.querySelector("[name='Proberaum']:checked"))==null?void 0:K.value,T=(Q=document.querySelector("[name='Bewohnt']:checked"))==null?void 0:Q.value;c==="IM SOUND"&&J==="Nein"&&i||c==="IM SOUND"&&T==="Ja"&&i?(i.value="online",p("online")):J==="Ja"&&T==="Nein"&&i&&(oe==="Nein"||ae==="Nein"||ie==="Nein"||re==="Ja"&&se==="Nein"?(i.value="incomplete",p("incomplete")):(i.value="online",p("online")))}let te=document.querySelectorAll(".w-radio-input");function p(e){e==="request"?O.style.display="block":O.style.display="none",e==="online"?C.style.display="block":C.style.display="none",e==="incomplete"?M.style.display="block":M.style.display="none"}function ne(){let e=navigator.userAgent?navigator.userAgent:""+navigator.oscpu?navigator.oscpu:"";if(!e)return;const y=document.createElement("input");y.setAttribute("type","hidden"),y.setAttribute("name","meta"),y.setAttribute("value",e),N.prepend(y)}ne(),a();function B(){te.forEach(e=>e.nextSibling.checked==!0?e.classList.add("w--redirected-checked"):e.classList.remove("w--redirected-checked"))}B()}document.addEventListener("DOMContentLoaded",ue);
