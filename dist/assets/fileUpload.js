window.addEventListener("LR_DATA_OUTPUT",r=>{var t,l;let n=[];if((l=(t=r.detail)==null?void 0:t.data)==null||l.forEach(i=>n.push({fileName:i.originalFilename,url:i.cdnUrl})),n.length<1)return;const a=document.querySelector("form"),e=document.createElement("input");e.type="text",e.name="files",e.value=JSON.stringify(n),e.style.display="none",a.appendChild(e)});
