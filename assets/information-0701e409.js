import{c as d,a as u,b as r}from"./main-4f4ff050.js";const h=document.querySelector(".posterNickName"),g=document.querySelector(".posterIntroduce"),v=document.querySelector(".outfitStyle");document.querySelector(".brands");const x=document.querySelector(".postImg"),S=document.querySelector(".postTitle"),k=document.querySelector(".postContent"),q=document.querySelector(".posterInfo"),p=document.querySelector(".posterMore"),$=document.querySelector(".posterOther"),L=new bootstrap.Modal(document.getElementById("myModa2")),w=document.querySelector(".likecount"),I=document.querySelector(".collectcount");document.querySelector(".like");document.querySelector(".favorite");function M(t){const s=document.cookie.split(";").map(o=>o.trim());for(const o of s){const[n,c]=o.split("=");if(n===t)return decodeURIComponent(c)}return null}const m=M("outfitpalsToken"),T=location.href.split("=")[1];console.log(m);d.get(`${u}posts/${T}?_expand=user`).then(t=>{let s=t.data.user.id;h.textContent=t.data.user.name,g.textContent=t.data.user.introduce,q.innerHTML=`<p class="posts__user__height ps-3 fs-9 fs-lg-7">${t.data.user.height}cm ${t.data.user.weight}kg</p>`,v.textContent=t.data.outfitStyle,x.innerHTML=`<img src=${t.data.imgUrl} style="width: 500px; height: 440px;"
            class="postImg object-fit-cover">`,S.textContent=t.data.title,k.textContent=t.data.body,p.innerHTML=`<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${t.data.user.name}的穿搭</button>`,$.innerHTML=`<h2 class="text-center ">查看${t.data.user.name}的其他搭配</h2>`,w.innerHTML=`${t.data.likeCounts}`,I.innerHTML=`${t.data.favoriteCounts}`;const o=document.querySelector(".sty"),n=t.data.brands.split(new RegExp("[ \b]"));n.length<2?o.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill  ms-3">${n[0]}</button>
                   </div>`:o.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill ms-3">${n[0]}</button>
                   </div>        
                   <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${n[1]}</button>`;let c=t.data.userId;const i=document.querySelector(".reserve");m!=null?i.addEventListener("click",function(){window.location.href=`${r}/others.html?userId=`+c+"&page=1"}):i.addEventListener("click",function(){L.show()}),p.addEventListener("click",function(){window.location.href=`${r}/others.html?userId=`+c+"&page=1"});const y=document.querySelector(".more");y.innerHTML=`
                                    <div class="container d-flex justify-content-center  ">
                                        <div class=" post row justify-content-around ">

                                        </div>
                                    </div>
                                
                                `,d.get(`${u}posts?userId=${s}`).then(l=>{const f=document.querySelector(".post");for(let e=0;e<3;e++)f.innerHTML+=`<div class="col-4 my-4">
                                                        <a  >
                                                            <div class="card card1" style="width: 350px; height: 450px;" id="${l.data[e].id}">
                                                                <img src="${l.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                            </div>
                                                        </a>
                                                    </div>`;document.querySelectorAll(".card1").forEach(function(e,H){let b=e.getAttribute("id").trim();e.addEventListener("click",function(a){a.stopPropagation(),a.preventDefault(),window.location.href=`${r}/information.html?postId=`+b})})})});
