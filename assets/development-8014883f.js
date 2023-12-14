import{c as s,a as n,b as j}from"./main-4f4ff050.js";import"./jquery-fb83c0b5.js";function N(S){const t=document.cookie.split(";").map(h=>h.trim());for(const h of t){const[k,w]=h.split("=");if(k===S)return decodeURIComponent(w)}return null}N("outfitpalsToken");const I=N("outfitpalsId");s.get(`${n}posts?_expand=user`).then(function(S){let t=S.data,h,k,w,E,q,C;const A=location.href.split("=")[1];document.querySelector(".post").innerHTML=`<div class="row justify-content-center post1">
                                                        </div>
                                                        <div class="row justify-content-center mt-5 post2">
                                                        </div>
                                                        <div class="row justify-content-center mt-5 post3">
                                                        </div>
                                                        <div class="pe-5 me-5 mt-5">
                                                        <nav aria-label="Page navigation example">
                                                        <ul class="pagination justify-content-lg-center my-3">
                                                            <li class="page-item"><a href="" class="page-link border-0 l"><i class="bi bi-chevron-left "></i></a></li>
                                                            <div class = "page d-flex">

                                                            </div>
                                                            <li class="page-item"><a href="" class="page-link border-0 r"><i class="bi bi-chevron-right"></i></a></li>
                                                        </ul>
                                                        </nav>
                                                        </div>
                                                    `;const y=9,b=[".post1",".post2",".post3"],M=(A-1)*y;b.forEach(e=>{const o=document.querySelector(e);o.innerHTML=""});const R=M+y;for(let e=M;e<R&&e<t.length;e++){const o=e%y;b.forEach((p,l)=>{if(o>=l*(y/b.length)&&o<(l+1)*(y/b.length)){const u=document.querySelector(p),P=t[e].imgUrl;t[e].hasOwnProperty("user")&&t[e].user.hasOwnProperty("image")&&(h=t[e].user.image,k=t[e].user.name,w=t[e].user.height,E=t[e].user.weight,q=t[e].userId,C=t[e].id),u.innerHTML+=`<div class="col-4">
                                                    
                                                        <div class="card card1" style="width: 350px; height: 450px;">
                                                            <img src="${P}" style="width: 350px; height: 350px;" class="object-fit-cover img">
                                                                <div class="card-body dontmove" id="${C}">
                                                                    <div class="row">
                                                                        <div class="col-8 mt-2 d-flex ">
                                                                            <div class="circle-box others" id=" ${q}" style="width: 50px; height: 50px;background: url('${h}') center center / cover no-repeat;"></div>
                                                                            <div class="ms-2">
                                                                                <strong>${k}</strong>
                                                                                <p class="fs-6  text-nowrap" style="opacity: 0.4;">${w}cm ${E}kg</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-1  icon2">
                                                                            
                                                                        </div>
                                                                        <div class="col-1 ms-3 icon">
                                                                            
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                </div>
                                                        </div>                                                   
                                                    </div>`}})}const T=document.querySelector(".page");let O=100;if(t.length>0){T.innerHTML="";for(let e=1;e<=Math.min(O,Math.ceil(t.length/8));e++)T.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${e}</a></li>`}const D=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1,l=p+1;o.set("page",l);var u=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,u)}),D.addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1;if(p>1){var l=p-1;o.set("page",l);var u=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,u)}}),document.querySelectorAll(".card1").forEach(function(e,o){e.addEventListener("click",function(v){v.stopPropagation(),v.preventDefault()});const p=e.querySelector(".dontmove"),l=e.querySelector(".others"),u=e.querySelector(".img");let P=l.getAttribute("id").trim(),i=p.getAttribute("id").trim();const $=e.querySelector(".icon"),L=e.querySelector(".icon2");let m=!1,H,U;s.get(`${n}favorites?userId=${I}`).then(function(v){let c=[];v.data.forEach(async function(g){c.push(g.postId)}),c.forEach(function(g,a){$.children.length===0&&c[a]==i&&($.innerHTML+='<p class="bi display-6 mt-2 collect bi-bookmark-fill icollect"></p>')}),$.children.length===0&&c[o]!=i&&($.innerHTML+='<p class="bi bi-bookmark display-6 mt-2 collect" ></p>');const r=e.querySelector(".collect");r.addEventListener("click",async function(g){if(!m){m=!0;try{r.classList.toggle("bi-bookmark"),r.classList.toggle("bi-bookmark-fill"),r.classList.toggle("icollect"),U=t.find(f=>f.id==i).favoriteCounts;let d=parseInt(U);r.classList.contains("icollect")?(d++,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.post(`${n}favorites`,{userId:Number(I),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.get(`${n}favorites?postId=${i}`).then(f=>{let x=f.data[0].id;s.delete(`${n}favorites/${x}`)}))}catch(a){console.error("Error:",a)}finally{m=!1}}})}),s.get(`${n}likes?userId=${I}`).then(function(v){let c=[];v.data.forEach(async function(g){c.push(g.postId)}),c.forEach(function(g,a){L.children.length===0&&c[a]==i&&(L.innerHTML+='<p class="bi display-6 mt-2 me-3 love bi-heart-fill ilove" style="position: relative; top: 2px;"></p>')}),L.children.length===0&&c[o]!=i&&(L.innerHTML+='<p class="bi bi-heart display-6 mt-2 me-3 love" style="position: relative; top: 2px;" ></p>');const r=e.querySelector(".love");r.addEventListener("click",async function(g){if(!m){m=!0;try{r.classList.toggle("bi-heart"),r.classList.toggle("bi-heart-fill"),r.classList.toggle("ilove"),H=t.find(f=>f.id==i).likeCounts;let d=parseInt(H);r.classList.contains("ilove")?(d++,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.post(`${n}likes`,{userId:Number(I),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.get(`${n}likes/${i}`).then(f=>{let x=f.data.id;s.delete(`${n}likes/${x}`)}))}catch(a){console.error("Error:",a)}finally{m=!1}}})}),l.addEventListener("click",function(){window.location.href=`${j}/others.html?userId=`+P+"&page=1"}),u.addEventListener("click",function(){window.location.href=`${j}/information.html?postId=`+i})})});
