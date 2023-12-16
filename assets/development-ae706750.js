import{c as s,a as n,b as q}from"./main-4f4ff050.js";import"./jquery-fb83c0b5.js";function A(x){const t=document.cookie.split(";").map(m=>m.trim());for(const m of t){const[k,$]=m.split("=");if(k===x)return decodeURIComponent($)}return null}A("outfitpalsToken");const f=A("outfitpalsId");s.get(`${n}posts?_expand=user`).then(function(x){let t=x.data,m,k,$,C,M,T;const R=location.href.split("=")[1];document.querySelector(".post").innerHTML=`<div class="row justify-content-center post1">
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
                                                    `;const y=9,b=[".post1",".post2",".post3"],H=(R-1)*y;b.forEach(e=>{const o=document.querySelector(e);o.innerHTML=""});const D=H+y;for(let e=H;e<D&&e<t.length;e++){const o=e%y;b.forEach((p,l)=>{if(o>=l*(y/b.length)&&o<(l+1)*(y/b.length)){const g=document.querySelector(p),L=t[e].imgUrl;t[e].hasOwnProperty("user")&&t[e].user.hasOwnProperty("image")&&(m=t[e].user.image,k=t[e].user.name,$=t[e].user.height,C=t[e].user.weight,M=t[e].userId,T=t[e].id),g.innerHTML+=`<div class="col-4">
                                                    
                                                        <div class="card card1" style="width: 350px; height: 450px;">
                                                            <img src="${L}" style="width: 350px; height: 350px;" class="object-fit-cover img">
                                                                <div class="card-body dontmove" id="${T}">
                                                                    <div class="row">
                                                                        <div class="col-8 mt-2 d-flex ">
                                                                            <div class="circle-box others" id=" ${M}" style="width: 50px; height: 50px;background: url('${m}') center center / cover no-repeat;"></div>
                                                                            <div class="ms-2">
                                                                                <strong>${k}</strong>
                                                                                <p class="fs-6  text-nowrap" style="opacity: 0.4;">${$}cm ${C}kg</p>
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
                                                    </div>`}})}const U=document.querySelector(".page");let O=100;if(t.length>0){U.innerHTML="";for(let e=1;e<=Math.min(O,Math.ceil(t.length/8));e++)U.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${e}</a></li>`}const V=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1,l=p+1;o.set("page",l);var g=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,g)}),V.addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var p=parseInt(o.get("page"))||1;if(p>1){var l=p-1;o.set("page",l);var g=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,g)}}),document.querySelectorAll(".card1").forEach(function(e,o){e.addEventListener("click",function(v){v.stopPropagation(),v.preventDefault()});const p=e.querySelector(".dontmove"),l=e.querySelector(".others"),g=e.querySelector(".img");let L=l.getAttribute("id").trim(),i=p.getAttribute("id").trim();const I=e.querySelector(".icon"),S=e.querySelector(".icon2");let w=!1,j,N;s.get(`${n}favorites?userId=${f}`).then(function(v){let c=[];v.data.forEach(async function(h){c.push(h.postId)}),c.forEach(function(h,a){I.children.length===0&&c[a]==i&&(I.innerHTML+='<p class="bi display-6 mt-2 collect bi-bookmark-fill icollect"></p>')}),I.children.length===0&&c[o]!=i&&(I.innerHTML+='<p class="bi bi-bookmark display-6 mt-2 collect" ></p>');const r=e.querySelector(".collect");r.addEventListener("click",async function(h){if(!w){w=!0;try{r.classList.toggle("bi-bookmark"),r.classList.toggle("bi-bookmark-fill"),r.classList.toggle("icollect"),N=t.find(u=>u.id==i).favoriteCounts;let d=parseInt(N);r.classList.contains("icollect")?(d++,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.post(`${n}favorites`,{userId:Number(f),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{favoriteCounts:d}),s.get(`${n}favorites?postId=${i}&userId=${f}`).then(u=>{let E=u.data[0].id;s.delete(`${n}favorites/${E}`).then(P=>{}).catch(P=>{console.error("Delete request error:",P),P.response&&console.error("Server responded with:",P.response.data)})}))}catch(a){console.error("Error:",a)}finally{w=!1}}})}),s.get(`${n}likes?userId=${f}`).then(function(v){let c=[];v.data.forEach(async function(h){c.push(h.postId)}),c.forEach(function(h,a){S.children.length===0&&c[a]==i&&(S.innerHTML+='<p class="bi display-6 mt-2 me-3 love bi-heart-fill ilove" style="position: relative; top: 2px;"></p>')}),S.children.length===0&&c[o]!=i&&(S.innerHTML+='<p class="bi bi-heart display-6 mt-2 me-3 love" style="position: relative; top: 2px;" ></p>');const r=e.querySelector(".love");r.addEventListener("click",async function(h){if(!w){w=!0;try{r.classList.toggle("bi-heart"),r.classList.toggle("bi-heart-fill"),r.classList.toggle("ilove"),j=t.find(u=>u.id==i).likeCounts;let d=parseInt(j);r.classList.contains("ilove")?(d++,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.post(`${n}likes`,{userId:Number(f),postId:Number(i)})):(d--,s.patch(`${n}posts/${i}`,{likeCounts:d}),s.get(`${n}likes?postId=${i}&userId=${f}`).then(u=>{let E=u.data[0].id;console.log(u.data),s.delete(`${n}likes/${E}`)}))}catch(a){console.error("Error:",a)}}})}),l.addEventListener("click",function(){L!=f?window.location.href=`${q}/others.html?userId=`+L+"&page=1":window.location.href=`${q}/personal.html?page=1`}),g.addEventListener("click",function(){window.location.href=`${q}/information.html?postId=`+i})})});
