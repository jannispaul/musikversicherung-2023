function T(){let u=document.querySelectorAll('[data-name="value-info"]');const s=document.querySelector('[modal-content="value-info"]'),y=document.querySelector('[data-name="coverage-info"]'),p=document.querySelector('[modal-content="coverage-info"]'),v=document.querySelector('[data-name="modal-close"]'),c=document.querySelector('[data-name="modal"]');u.forEach(r=>r.addEventListener("click",()=>{c.style.display="flex",s.style.display="block",p.style.display="none"})),y.addEventListener("click",()=>{c.style.display="flex",s.style.display="none",p.style.display="block"}),v.addEventListener("click",()=>{c.style.display="none"}),c.addEventListener("click",r=>{r.target===r.currentTarget&&(c.style.display="none")}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(c.style.display="none")})}(function(){const u=document.querySelector("[data-form='multi-step'] form"),s=u.dataset.name,y=document.querySelectorAll("[data-form='step']"),p=document.querySelector("[data-form='success']"),v=document.querySelector("[data-form='error']"),c=document.querySelectorAll("[data-form='next-btn']"),r=document.querySelectorAll("[data-form='submit-btn']"),L=document.querySelectorAll("[data-form='step-indicator']"),C=document.querySelectorAll("[data-condition-name]"),O=document.querySelectorAll("[data-condition-el]"),V=document.querySelector("[data-repeat='item']");let i=0;function F(e){return e.offsetParent!==null}function I(){C.forEach(e=>{k(e)})}function E(e){y.forEach((o,t)=>{var a,l;t===i?o.style.display="block":o.style.display="none",t===i?(a=L[t])==null||a.classList.add("active"):(l=L[t])==null||l.classList.remove("active")}),window.scrollTo({top:0}),I(),m()}function b(e=!1){let o=!0;const t=Array.from(y[i].querySelectorAll("input[required], textarea[required], select[required]"));for(let a=0;a<t.length;a++){if(!F(t[a]))continue;if(!(e?t[a].checkValidity():t[a].reportValidity()))return o=!1}return o}function m(e){b(!0)?(c.forEach(t=>t.classList.remove("disabled")),r==null||r.forEach(t=>t.classList.remove("disabled"))):(c.forEach(t=>t.classList.add("disabled")),r==null||r.forEach(t=>t.classList.add("disabled")))}function D(){O.forEach(e=>e.style.display="none")}function H(){i>0&&i--,E()}function J(){b()&&(i<y.length&&i++,E())}function M(e){let o=document.querySelectorAll("[data-repeat='item']"),t="";return o.forEach((a,l)=>{var q,S,f;const n=(q=a.querySelector("[name*='Instrument']"))==null?void 0:q.value,d=(S=a.querySelector("[name*='Instrumentenwert']"))==null?void 0:S.value,h=(f=a.querySelector("[name*='Wertart']:checked"))==null?void 0:f.value;n&&d&&h&&(t+=n+`
`+h+`
`+d+`

`)}),e.append("Instruments",t),e}function R(e){let o=new FormData(u);if(!b())return;M(o);for(const n of o.entries())console.log(`${n[0]}, ${n[1]}`);const t=document.querySelector("[data-form='submit']");t&&(t.innerHTML="Sendet...",t.disabled=!0);const a={method:"POST",body:o,redirect:"follow"},l=u.action;fetch(l,a).then(function(n){if(n.ok){u.style.display="none",p.style.display="block",window.scrollTo({top:0,behavior:"smooth"});const d=document.querySelector(".lottie-trigger");if(!d)return;d.click(),localStorage.removeItem(s)}}).catch(function(n){console.error("Error: ",n),p.style.display="none",v.style.display="block"})}function k(e){var l;let o;if(e.dataset.conditionName?o=e:o=e.querySelector("[data-condition-name]"),!(o!=null&&o.dataset))return;let t=document.querySelectorAll(`[data-condition-el="${o.dataset.conditionName}"]`);const a=(l=o.querySelector(":checked"))==null?void 0:l.value;t.forEach(n=>{var S;const d=(S=n==null?void 0:n.dataset)==null?void 0:S.condition.split(",").map(f=>f.trim());function h(f,N){return f.some(A=>Array.from(A)[0]==="!"?A.substring(1)!==N:A===N)}const q=h(d,a);o&&(q?n.style.display="block":n.style.display="none")})}function x(e){return e.name.length>0?e.name:e.id.length>0?e.id:null}function $(e){if(!e.target.closest("[data-form='multi-step']"))return;var o=x(e.target);if(!o)return;let t=localStorage.getItem(s);t=t?JSON.parse(t):{},e.target.type==="checkbox"?t[o]=e.target.checked?"on":"off":t[o]=e.target.value,localStorage.setItem(s,JSON.stringify(t))}function P(){let e=localStorage.getItem(s);if(!e)return;e=JSON.parse(e);let o=document.querySelectorAll("[data-auto-save] input, [data-auto-save] textarea, [data-auto-save] select");Array.prototype.slice.call(o).forEach(function(t){let a=x(t);a&&(a.includes("files")||e[a]&&(t.type==="checkbox"?t.checked=e[a]==="on":t.type==="radio"?t.checked=e[a]===t.value:t.value=e[a]))}),I()}let g=1;function W(e){return document.querySelectorAll("[data-repeat='item']")}function U(e){W().length<=1||(e.remove(),g--,m())}function j(){g++;const e=document.querySelectorAll("[data-repeat='item']");let o=V.cloneNode(!0);o.querySelectorAll("input").forEach((a,l)=>{a.type==="text"||a.type==="number"?(a.value="",a.name+=g):a.type==="radio"&&(a.checked=!1,a.name+=g,a.id+=g)}),e[e.length-1].after(o),m(),T()}function z(){P(),D(),E(),m(),T()}z(),document.addEventListener("input",function(e){m(),$(e)},!1),document.addEventListener("keypress",function(e){e.key==="Enter"&&w(e)}),document.addEventListener("click",w);function w(e){e.target.matches("[data-form='next-btn']")&&J(),e.target.matches("[data-form='back-btn']")&&H(),e.target.closest("[data-condition]")&&k(e.target.closest("[data-condition]")),e.target.closest("[data-repeat='delete-item']")&&U(e.target.closest("[data-repeat='item']")),e.target.closest("[data-repeat='add-item']")&&j(e.target.closest("[data-repeat='add-item']")),e.target.matches("[data-form='submit-btn']")&&R()}document.addEventListener("change",function(e){m(),e.target.closest("[data-condition-name]")&&k(e.target.closest("[data-condition-name]"))},!0)})();
