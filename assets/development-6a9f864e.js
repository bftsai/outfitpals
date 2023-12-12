import{a as d}from"./main-e6a9fc99.js";const p="https://outfitpals-web-server.onrender.com/",q="https://bftsai.github.io/outfitpals";function T(k){const t=document.cookie.split(";").map(c=>c.trim());for(const c of t){const[v,w]=c.split("=");if(v===k)return decodeURIComponent(w)}return null}T("outfitpalsToken");const A=T("outfitpalsId");d.get(`${p}posts?_expand=user`).then(function(k){let t=k.data,c,v,w,L,P,$;const U=location.href.split("=")[1];document.querySelector(".post").innerHTML=`<div class="row justify-content-center post1">
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
                                                    `;const u=9,y=[".post1",".post2",".post3"],x=(U-1)*u;y.forEach(e=>{const o=document.querySelector(e);o.innerHTML=""});const M=x+u;for(let e=x;e<M&&e<t.length;e++){const o=e%u;y.forEach((n,r)=>{if(o>=r*(u/y.length)&&o<(r+1)*(u/y.length)){const a=document.querySelector(n),i=t[e].imgUrl;t[e].hasOwnProperty("user")&&t[e].user.hasOwnProperty("image")&&(c=t[e].user.image,v=t[e].user.name,w=t[e].user.height,L=t[e].user.weight,P=t[e].userId,$=t[e].id),a.innerHTML+=`<div class="col-4">
                                                    <a href="" >
                                                        <div class="card card1" style="width: 350px; height: 450px;">
                                                            <img src="${i}" style="width: 350px; height: 350px;" class="object-fit-cover img">
                                                                <div class="card-body dontmove" id="${$}">
                                                                    <div class="row">
                                                                        <div class="col mt-2 d-flex ">
                                                                            <div class="circle-box others" id=" ${P}" style="width: 50px; height: 50px;background: url('${c}') center center / cover no-repeat;"></div>
                                                                            <div class="ms-2">
                                                                                <strong>${v}</strong>
                                                                                <p class="fs-6  text-nowrap" style="opacity: 0.4;">${w}cm ${L}kg</p>
                                                                            </div>
                                                                        </div>
                                                                    <div class="col-2 d-flex flex-row-reverse">
                                                                        <p class="bi bi-bookmark display-6 mt-2 collect" ></p>
                                                                        <p class="bi bi-heart display-6 mt-2 me-3 love" style="position: relative; top: 2px;" ></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>`}})}const S=document.querySelector(".page");let j=100;if(t.length>0){S.innerHTML="";for(let e=1;e<=Math.min(j,Math.ceil(t.length/8));e++)S.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${e}</a></li>`}const H=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var n=parseInt(o.get("page"))||1,r=n+1;o.set("page",r);var a=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,a)}),H.addEventListener("click",function(e){const o=new URLSearchParams(window.location.search);var n=parseInt(o.get("page"))||1;if(n>1){var r=n-1;o.set("page",r);var a=window.location.origin+window.location.pathname+"?"+o.toString();window.history.replaceState({},document.title,a)}}),document.querySelectorAll(".card1").forEach(function(e){e.addEventListener("click",function(b){b.stopPropagation(),b.preventDefault()});const o=e.querySelector(".dontmove"),n=e.querySelector(".others"),r=e.querySelector(".img");let a=n.getAttribute("id").trim(),i=o.getAttribute("id").trim();const g=e.querySelector(".love"),m=e.querySelector(".collect");let l=!1,I,C;g.addEventListener("click",async function(b){if(!l){l=!0;try{g.classList.toggle("bi-heart"),g.classList.toggle("bi-heart-fill"),g.classList.toggle("ilove"),I=t.find(s=>s.id==i).likeCounts,await new Promise(s=>setTimeout(s,3e3));let h=parseInt(I)+1;if(g.classList.contains("ilove")){const s=await d.patch(`${p}posts/${i}`,{likeCounts:h})}else{const s=await d.patch(`${p}posts/${i}`,{likeCounts:h-1})}}catch(f){console.error("Error:",f)}finally{l=!1}}}),m.addEventListener("click",async function(b){if(!l){l=!0;try{m.classList.toggle("bi-bookmark"),m.classList.toggle("bi-bookmark-fill"),m.classList.toggle("icollect"),C=t.find(s=>s.id==i).favoriteCounts,await new Promise(s=>setTimeout(s,3e3));let h=parseInt(C)+1;if(m.classList.contains("icollect")){const s=await d.patch(`${p}posts/${i}`,{favoriteCounts:h});d.post(`${p}favorites`,{userId:Number(A),postId:Number(i)}).then(function(E){}).catch(function(E){console.error("GET 请求失败:",E)})}else{const s=await d.patch(`${p}posts/${i}`,{favoriteCounts:h-1})}}catch(f){console.error("Error:",f)}finally{l=!1}}}),n.addEventListener("click",function(){window.location.href=`${q}/others.html?userId=`+a+"&page=1"}),r.addEventListener("click",function(){window.location.href=`${q}/information.html?postId=`+i})})});
