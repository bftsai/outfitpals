import{a as l}from"./main-e6a9fc99.js";const u="https://outfitpals-web-server.onrender.com/",c="https://bftsai.github.io/outfitpals",h=document.querySelector(".posterNickName"),b=document.querySelector(".posterIntroduce"),g=document.querySelector(".outfitStyle");document.querySelector(".brands");const v=document.querySelector(".postImg"),x=document.querySelector(".postTitle"),S=document.querySelector(".postContent"),q=document.querySelector(".posterInfo"),p=document.querySelector(".posterMore"),$=document.querySelector(".posterOther"),k=new bootstrap.Modal(document.getElementById("myModa2"));document.querySelector(".like");document.querySelector(".favorite");function w(t){const r=document.cookie.split(";").map(o=>o.trim());for(const o of r){const[n,s]=o.split("=");if(n===t)return decodeURIComponent(s)}return null}const I=w("outfitpalsToken"),L=location.href.split("=")[1];l.get(`${u}/posts/${L}?_expand=user`).then(t=>{let r=t.data.user.id;h.textContent=t.data.user.name,b.textContent=t.data.user.introduce,q.innerHTML=`<p class="posts__user__height ps-3 fs-9 fs-lg-7">${t.data.user.height}cm ${t.data.user.weight}kg</p>`,g.textContent=t.data.outfitStyle,v.innerHTML=`<img src=${t.data.imgUrl} style="width: 500px; height: 440px;"
            class="postImg object-fit-cover">`,x.textContent=t.data.title,S.textContent=t.data.body,p.innerHTML=`<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${t.data.user.name}的穿搭</button>`,$.innerHTML=`<h2 class="text-center ">查看${t.data.user.name}的其他搭配</h2>`;const o=document.querySelector(".sty"),n=t.data.brands;n.length<2?o.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill  ms-3">${n}</button>
                   </div>`:o.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill ms-3">${n}</button>
                   </div>        
                   <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${n}</button>`;let s=t.data.userId;const i=document.querySelector(".reserve");I!=null?i.addEventListener("click",function(){window.location.href=`${c}/others.html?userId=`+s+"&page=1"}):i.addEventListener("click",function(){k.show()}),p.addEventListener("click",function(){window.location.href=`${c}/others.html?userId=`+s+"&page=1"});const m=document.querySelector(".more");m.innerHTML=`
                                    <div class="container d-flex justify-content-center  ">
                                        <div class=" post row justify-content-around ">

                                        </div>
                                    </div>
                                
                                `,l.get(`${u}posts?userId=${r}`).then(a=>{const f=document.querySelector(".post");for(let e=0;e<3;e++)f.innerHTML+=`<div class="col-4 my-4">
                                                        <a  >
                                                            <div class="card card1" style="width: 350px; height: 450px;" id="${a.data[e].id}">
                                                                <img src="${a.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                            </div>
                                                        </a>
                                                    </div>`;document.querySelectorAll(".card1").forEach(function(e,T){let y=e.getAttribute("id").trim();e.addEventListener("click",function(d){d.stopPropagation(),d.preventDefault(),window.location.href=`${c}/information.html?postId=`+y})})})});
