import{c as s,a as n,b as N}from"./main-4f4ff050.js";import"./jquery-fb83c0b5.js";function A(P){const t=document.cookie.split(";").map(f=>f.trim());for(const f of t){const[w,b]=f.split("=");if(w===P)return decodeURIComponent(b)}return null}A("outfitpalsToken");const v=A("outfitpalsId");s.get(`${n}posts?_expand=user`).then(function(P){let t=P.data,f,w,b,q,C,M;const R=location.href.split("=")[1];document.querySelector(".post").innerHTML=`<div class="row justify-content-center post1">
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
                                                    `;const y=9,$=[".post1",".post2",".post3"],T=(R-1)*y;$.forEach(e=>{const o=document.querySelector(e);o.innerHTML=""});const D=T+y;for(let e=T;e<D&&e<t.length;e++){const o=e%y;$.forEach((p,l)=>{if(o>=l*(y/$.length)&&o<(l+1)*(y/$.length)){const g=document.querySelector(p),x=t[e].imgUrl;t[e].hasOwnProperty("user")&&t[e].user.hasOwnProperty("image")&&(f=t[e].user.image,w=t[e].user.name,b=t[e].user.height,q=t[e].user.weight,C=t[e].userId,M=t[e].id),g.innerHTML+=`<div class="col-4">
                                                    
                                                        <div class="card card1" style="width: 350px; height: 450px;">
                                                            <img src="${x}" style="width: 350px; height: 350px;" class="object-fit-cover img">
                                                                <div class="card-body dontmove" id="${M}">
                                                                    <div class="row">
                                                                        <div class="col-8 mt-2 d-flex ">
                                                                            <div class="circle-box others" id=" ${C}" style="width: 50px; height: 50px;background: url('${f}') center center / cover no-repeat;"></div>
                                                                            <div class="ms-2">
                                                                                <strong>${w}</strong>
                                                                                <p class="fs-6  text-nowrap" style="opacity: 0.4;">${b}cm ${q}kg</p>
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
                                                    </div>`}})}const H=document.querySelector(".page");let O=100;if(t.length>0){H.innerHTML="";for(let e=1;e<=Math.min(O,Math.ceil(t.length/8));e++)H.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${e}</a></li>`}const V=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1,l=p+1;o.set("page",l);var g=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,g)}),V.addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1;if(p>1){var l=p-1;o.set("page",l);var g=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,g)}}),document.querySelectorAll(".card1").forEach(function(e,o){e.addEventListener("click",function(m){m.stopPropagation(),m.preventDefault()});const p=e.querySelector(".dontmove"),l=e.querySelector(".others"),g=e.querySelector(".img");let x=l.getAttribute("id").trim(),i=p.getAttribute("id").trim();const L=e.querySelector(".icon"),I=e.querySelector(".icon2");let k=!1,U,j;s.get(`${n}favorites?userId=${v}`).then(function(m){let c=[];m.data.forEach(async function(h){c.push(h.postId)}),c.forEach(function(h,a){L.children.length===0&&c[a]==i&&(L.innerHTML+='<p class="bi display-6 mt-2 collect bi-bookmark-fill icollect"></p>')}),L.children.length===0&&c[o]!=i&&(L.innerHTML+='<p class="bi bi-bookmark display-6 mt-2 collect" ></p>');const r=e.querySelector(".collect");r.addEventListener("click",async function(h){if(!k){k=!0;try{r.classList.toggle("bi-bookmark"),r.classList.toggle("bi-bookmark-fill"),r.classList.toggle("icollect"),j=t.find(u=>u.id==i).favoriteCounts;let d=parseInt(j);r.classList.contains("icollect")?(d++,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.post(`${n}favorites`,{userId:Number(v),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.get(`${n}favorites?postId=${i}&userId=${v}`).then(u=>{let E=u.data[0].id;s.delete(`${n}favorites/${E}`).then(S=>{}).catch(S=>{console.error("Delete request error:",S),S.response&&console.error("Server responded with:",S.response.data)})}))}catch(a){console.error("Error:",a)}finally{k=!1}}})}),s.get(`${n}likes?userId=${v}`).then(function(m){let c=[];m.data.forEach(async function(h){c.push(h.postId)}),c.forEach(function(h,a){I.children.length===0&&c[a]==i&&(I.innerHTML+='<p class="bi display-6 mt-2 me-3 love bi-heart-fill ilove" style="position: relative; top: 2px;"></p>')}),I.children.length===0&&c[o]!=i&&(I.innerHTML+='<p class="bi bi-heart display-6 mt-2 me-3 love" style="position: relative; top: 2px;" ></p>');const r=e.querySelector(".love");r.addEventListener("click",async function(h){if(!k){k=!0;try{r.classList.toggle("bi-heart"),r.classList.toggle("bi-heart-fill"),r.classList.toggle("ilove"),U=t.find(u=>u.id==i).likeCounts;let d=parseInt(U);r.classList.contains("ilove")?(d++,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.post(`${n}likes`,{userId:Number(v),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.get(`${n}likes?postId=${i}&userId=${v}`).then(u=>{let E=u.data[0].id;console.log(u.data),s.delete(`${n}likes/${E}`)}))}catch(a){console.error("Error:",a)}}})}),l.addEventListener("click",function(){window.location.href=`${N}/others.html?userId=`+x+"&page=1"}),g.addEventListener("click",function(){window.location.href=`${N}/information.html?postId=`+i})})});
