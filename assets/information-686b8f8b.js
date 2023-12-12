import"./main-0576168d.js";import{a}from"./axios-28bc18a3.js";const d="https://outfitpals-web-server.onrender.com/",n="https://bftsai.github.io/outfitpals",f=document.querySelector(".posterNickName"),h=document.querySelector(".posterIntroduce"),b=document.querySelector(".outfitStyle");document.querySelector(".brands");const g=document.querySelector(".postImg"),v=document.querySelector(".postTitle"),x=document.querySelector(".postContent"),S=document.querySelector(".posterInfo"),l=document.querySelector(".posterMore"),q=document.querySelector(".posterOther");document.querySelector(".like");document.querySelector(".favorite");const $=location.href.split("=")[1];a.get(`${d}444/posts/${$}?_expand=user`).then(t=>{let u=t.data.user.id;f.textContent=t.data.user.name,h.textContent=t.data.user.introduce,S.innerHTML=`<p class="posts__user__height ps-3 fs-9 fs-lg-7">${t.data.user.height}cm ${t.data.user.weight}kg</p>`,b.textContent=t.data.outfitStyle,g.innerHTML=`<img src=${t.data.imgUrl} style="width: 500px; height: 440px;"
            class="postImg object-fit-cover">`,v.textContent=t.data.title,x.textContent=t.data.body,l.innerHTML=`<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${t.data.user.name}的穿搭</button>`,q.innerHTML=`<h2 class="text-center ">查看${t.data.user.name}的其他搭配</h2>`;const s=document.querySelector(".sty"),o=t.data.brands;o.length<2?s.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill  ms-3">${o[0]}</button>
                   </div>`:s.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill ms-3">${o[0]}</button>
                   </div>        
                   <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${o[1]}</button>`;let r=t.data.userId;document.querySelector(".reserve").addEventListener("click",function(){window.location.href=`${n}/others.html?userId=`+r+"&page=1"}),l.addEventListener("click",function(){window.location.href=`${n}/others.html?userId=`+r+"&page=1"});const p=document.querySelector(".more");p.innerHTML=`
                                    <div class="container d-flex justify-content-center  ">
                                        <div class=" post row justify-content-around ">

                                        </div>
                                    </div>
                                
                                `,a.get(`${d}posts?userId=${u}`).then(c=>{const m=document.querySelector(".post");for(let e=0;e<3;e++)m.innerHTML+=`<div class="col-4 my-4">
                                                        <a  >
                                                            <div class="card card1" style="width: 350px; height: 450px;" id="${c.data[e].id}">
                                                                <img src="${c.data[e].imgUrl}" style="width: 350px; height: 450px;" class="object-fit-cover img">
                                                            </div>
                                                        </a>
                                                    </div>`;document.querySelectorAll(".card1").forEach(function(e,L){let y=e.getAttribute("id").trim();e.addEventListener("click",function(i){i.stopPropagation(),i.preventDefault(),window.location.href=`${n}/information.html?postId=`+y})})})});
