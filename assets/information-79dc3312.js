import{c as m,a as f,b as s}from"./main-4f4ff050.js";const g=document.querySelector(".posterNickName"),b=document.querySelector(".posterIntroduce"),v=document.querySelector(".outfitStyle");document.querySelector(".brands");const x=document.querySelector(".postImg"),$=document.querySelector(".postTitle"),S=document.querySelector(".postContent"),w=document.querySelector(".posterInfo"),l=document.querySelector(".posterMore"),k=document.querySelector(".posterOther"),q=new bootstrap.Modal(document.getElementById("myModa2")),L=document.querySelector(".likecount"),M=document.querySelector(".collectcount");document.querySelector(".like");document.querySelector(".favorite");function T(t){const a=document.cookie.split(";").map(n=>n.trim());for(const n of a){const[c,i]=n.split("=");if(c===t)return decodeURIComponent(i)}return null}const r=T("outfitpalsToken"),I=location.href.split("=")[1];m.get(`${f}posts/${I}?_expand=user`).then(t=>{let a=t.data.user.id;g.textContent=t.data.user.name,b.textContent=t.data.user.introduce,w.innerHTML=`<p class="posts__user__height ps-3 fs-9 fs-lg-7">${t.data.user.height}cm ${t.data.user.weight}kg</p>`,v.textContent=t.data.outfitStyle,x.innerHTML=`<img src=${t.data.imgUrl} style="width: 500px; height: 440px;"
            class="postImg object-fit-cover">`,$.textContent=t.data.title,S.textContent=t.data.body,l.innerHTML=`<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${t.data.user.name}的穿搭</button>`,k.innerHTML=`<h2 class="text-center ">查看${t.data.user.name}的其他搭配</h2>`,L.innerHTML=`${t.data.likeCounts}`,M.innerHTML=`${t.data.favoriteCounts}`;const n=document.querySelector(".sty"),c=t.data.brands.split(new RegExp("[ \b]"));c.length<2?n.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill  ms-3">${c[0]}</button>
                   </div>`:n.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill ms-3">${c[0]}</button>
                   </div>        
                   <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${c[1]}</button>`;let i=t.data.userId;const u=document.querySelector(".reserve");r!==""||r!==null?u.addEventListener("click",function(){window.location.href=`${s}/others.html?userId=`+i+"&page=1"}):u.addEventListener("click",function(){q.show()}),r!==""||r!==null?l.addEventListener("click",function(){window.location.href=`${s}/others.html?userId=`+i+"&page=1"}):l.addEventListener("click",function(){window.location.href=`${s}/member.html`});const y=document.querySelector(".more");y.innerHTML=`
                                    <div class="container d-flex justify-content-center  ">
                                        <div class=" post row justify-content-around ">

                                        </div>
                                    </div>
                                
                                `,m.get(`${f}posts?userId=${a}`).then(o=>{const d=document.querySelector(".post");if(o.data.length==1)for(let e=0;e<1;e++)d.innerHTML+=`<div class="col-4 my-4">
                                                            <a  >
                                                                <div class="card card1" style="width: 350px; height: 450px;" id="${o.data[e].id}">
                                                                    <img src="${o.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                                </div>
                                                            </a>
                                                        </div>`;else if(o.data.length==2)for(let e=0;e<2;e++)d.innerHTML+=`<div class="col-4 my-4">
                                                            <a  >
                                                                <div class="card card1" style="width: 350px; height: 450px;" id="${o.data[e].id}">
                                                                    <img src="${o.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                                </div>
                                                            </a>
                                                        </div>`;else for(let e=0;e<3;e++)d.innerHTML+=`<div class="col-4 my-4">
                                                            <a  >
                                                                <div class="card card1" style="width: 350px; height: 450px;" id="${o.data[e].id}">
                                                                    <img src="${o.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                                </div>
                                                            </a>
                                                        </div>`;document.querySelectorAll(".card1").forEach(function(e,C){let h=e.getAttribute("id").trim();e.addEventListener("click",function(p){p.stopPropagation(),p.preventDefault(),window.location.href=`${s}/information.html?postId=`+h})})})});
