const banner=document.querySelector("#banner"),spanBanner=document.querySelector("#spanBanner"),reload=document.querySelector("#reload"),tecnologia=document.querySelector("#tecnologia"),tecnologias=["PHP","JS","HTML","CSS","MYSQL","PYTHON","SASS"],colores=["#8B1874","#B71375","#FC4F00","#F79540","#9E6F21","#FFEEB3","#B8E7E1","#FF6969","#C9A7EB","#05BFDB","#00FFCA","#088395"],circle=document.querySelectorAll(".circle"),bibliografia=document.querySelector("#info_me-bibliografia"),selected=document.querySelector(".selected"),social=document.querySelectorAll(".social_icon"),shapeFill=document.querySelector(".shape-fill");let validador=!0;const projects={id:"",likes:""};function iniciarApp(){consultarAPI(),bibliografia.innerText="Estudie en la Universidad Tamaulipeca, donde exitosamente termine  la carrera de Ingeniería en Sistemas. Logré  la certificacion PCEP™ Certified Entry-Level Python Programmer de Python Institute",banner.style.backgroundColor=aleatorio(colores),spanBanner.style.color=banner.style.backgroundColor,selected.style.backgroundColor=banner.style.backgroundColor,shapeFill.style.fill=banner.style.backgroundColor,tecnologia.innerText="TECNOLOGIAS QUE UTILIZO  "+aleatorio(tecnologias),social.forEach(e=>{e.style.color=banner.style.backgroundColor}),reload.addEventListener("click",reloadAnimation),setInterval(()=>{tecnologia.innerText="TECNOLOGIAS QUE UTILIZO  "+aleatorio(tecnologias)},3e3)}function eliminarStyles(e){e.forEach(e=>{e.classList.contains("selected")&&e.classList.remove("selected")}),circle.forEach(e=>{e.classList.contains("selected")||(e.style.backgroundColor="white")})}function aleatorio(e=[]){return e[Math.floor(Math.random()*e.length)]}function setEtiquetasStyle(){document.querySelectorAll(".category").forEach(e=>{"HTML"===e.textContent&&(e.style.color="rgb(106, 190, 205)"),"CSS"===e.textContent&&(e.style.color="rgb(62, 84, 163)"),"JS"===e.textContent&&(e.style.color="rgb(207, 99, 144)"),"API"===e.textContent&&(e.style.color="rgb(170, 215, 66)"),"SASS"===e.textContent&&(e.style.color="#DD58D6"),"MYSQL"===e.textContent&&(e.style.color="#FF8551"),"PHP"===e.textContent&&(e.style.color="#1F6E8C")})}function reloadAnimation(e){e.target.classList.add("reload"),banner.style.backgroundColor=aleatorio(colores),spanBanner.style.color=banner.style.backgroundColor,shapeFill.style.fill=banner.style.backgroundColor,circle.forEach(e=>{e.classList.contains("selected")&&(e.style.backgroundColor=banner.style.backgroundColor)}),social.forEach(e=>{e.style.color=banner.style.backgroundColor}),setTimeout(t=>{e.target.classList.remove("reload")},1e3)}async function consultarAPI(){try{const e=location.origin+"/api/projects",t=await fetch(e);showprojects(await t.json())}catch(e){console.error(e)}}function showprojects(e){e.proyectos.forEach(t=>{const a=document.querySelector(".projects-cards"),o=document.createElement("DIV"),n=document.createElement("IMG"),r=document.createElement("DIV"),i=document.createElement("H3"),c=document.createElement("DIV"),l=document.createElement("DIV"),s=document.createElement("DIV"),d=document.createElementNS("http://www.w3.org/2000/svg","svg"),u=document.createElementNS("http://www.w3.org/2000/svg","path"),m=document.createElement("P");m.classList.add("countHeart");document.createElement("P");const g=document.createElement("DIV"),y=document.createElement("A"),p=document.createElement("A");if(o.classList.add("card"),n.src=t.imagen,n.alt=t.titulo,r.classList.add("info"),i.innerHTML=t.titulo,y.innerHTML='<i class="fa-brands fa-github social_icon"></i>',y.href=t.repo,p.innerHTML='<i class="fa-solid fa-link"></i>',p.href=t.url,y.target="_blank",p.target="_blank",g.append(y,p),c.classList.add("info_more"),l.classList.add("etiqueta"),e.categorias.some(e=>e.proyectos_id===t.id)){e.categorias.filter(e=>e.proyectos_id===t.id).forEach(e=>{l.innerHTML+=`<p class="category">${e.categoria}</p>`})}s.classList.add("actions"),d.classList.add("heart"),d.setAttribute("viewBox","0 0 32 29.6"),d.dataset.idProject=t.id,u.setAttribute("d","M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"),d.appendChild(u),d.onclick=function(){like(t)},m.innerText=t.likes,m.dataset.idProject=t.id,s.append(d,m),c.append(l,s),r.append(i,g,c),o.append(n,r),a.appendChild(o)}),setEtiquetasStyle()}async function like(e){const t=document.querySelector(`[data-id-project="${e.id}"]`);projects.id=t.dataset.idProject,projects.likes=e.likes;const a=new FormData;a.append("id",projects.id),a.append("likes",projects.likes);try{const t=location.origin+"/api/like",o=await fetch(t,{method:"POST",body:a});if(await o.json()){document.querySelectorAll(".countHeart").forEach(t=>{if(t.dataset.idProject==projects.id){let a=e.likes++;t.innerText=parseInt(a)+1}})}}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",()=>{iniciarApp()}),circle.forEach(e=>{e.addEventListener("click",e=>{eliminarStyles(circle),e.target.style.backgroundColor=banner.style.backgroundColor,e.target.classList.add("selected"),1==e.target.id&&(bibliografia.innerText="Estudie en la Universidad Tamaulipeca, donde exitosamente termine  la carrera de Ingeniería en Sistemas. Logré la certificacion PCEP™ Certified Entry-Level Python Programmer de Python Institute"),2==e.target.id&&(bibliografia.innerText="En el año 2021 me gradué y me invitaron a dar clases ahi mismo. Acepte ya que me gusta compartir lo que mas me gusta hacer y juntarme con personas que les gusta tambien esto. ❤️"),3==e.target.id&&(bibliografia.innerText="En el año 2022 asisti al evento de tecnologia mas grande de México Talent Land. Fue una genial experiencia, que me ha permitido adquirir valiosas habilidades y conocer a personas maravillosas ."),4==e.target.id&&(bibliografia.innerText='Me gusta tambien la ciberseguridad y espero algun dia llegar a obtener la OSCP.\n "No hay especialización sin repetición" ')})});