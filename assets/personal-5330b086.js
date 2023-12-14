import{a as I,b as Z}from"./main-4f4ff050.js";const E=document.querySelectorAll(".thumb-link");document.querySelectorAll(".thumb");const P=document.querySelector("#personalmain"),D=document.querySelector("#reserve"),W=document.querySelector("#personalnav"),X=document.querySelector("#personalselect"),C=document.querySelector("#collect"),T=document.querySelector("#noopen"),M=document.querySelector("#nopost"),se=document.querySelector(".setting"),oe=document.querySelector("#left"),ae=document.querySelector("#right"),N=document.querySelector("#months"),O=document.querySelectorAll("td"),ce=document.querySelector("#open"),ie=document.querySelector(".close"),R=document.querySelector(".p1"),V=document.querySelector(".p2"),J=document.querySelector(".p3"),z=document.querySelector(".p4"),Y=document.querySelector(".t1"),F=document.querySelector(".m1"),_=document.querySelector(".t2"),G=document.querySelector(".m2"),le=document.querySelector(".personal"),re=document.querySelector(".otherspost");document.querySelector(".collectpost");let l=document.getElementsByTagName("td");var B=new Date,A=B.getMonth()+1,L=B.getMonth(),n=L+1,h=B.getFullYear(),de=new Date(h,L,1),ee=de.getDay(),j=[31,28,31,30,31,30,31,31,30,31,30,31];(h%4==0&&h%100!=0||h%400==0)&&(j[1]=29);let K=B.getDate();l[ee+K-2].setAttribute("id","current-day");function te(f){const a=document.cookie.split(";").map(v=>v.trim());for(const v of a){const[b,S]=v.split("=");if(b===f)return decodeURIComponent(S)}return null}const Q=te("outfitpalsToken"),U=te("outfitpalsId");axios.get(`${I}640/users?id=${U}`,{headers:{authorization:`Bearer ${Q}`}}).then(function(f){le.innerHTML=`
                        <div class="col-2  d-flex"> <div class="circle-box" style="width: 150px; height: 150px;background: url('${f.data[0].image}') center center / cover no-repeat;"></div></div>
                        <div class="col-6  d-flex">
                       
                            <div class="d-flex position-relative ">
                                <div class="ms-2">
                                    <div class="row ms-5 align-items-center" >
                                        <div class="col">
                                            <strong class="display-6 text-nowrap">${f.data[0].name}</strong>
                                            </div>
                                            <div class="col">
                                            <p class="fs-4 mt-3 text-nowrap" style="opacity: 0.4;">${f.data[0].height}cm ${f.data[0].weight}kg</p>
                                            </div>
                                    </div>
                                    <p class="ms-5 mt-5">${f.data[0].introduce}</p>
                                    <div class="d-flex">
                                        <p class="ms-5">活動範圍 :</p>
                                        <p>${f.data[0].PopArea}</p>
                                    </div>
                                    <div class="d-flex">
                                        <p class="ms-5">穿搭價位 :</p>
                                        <p>${f.data[0]["outfit price"]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-2 d-flex align-items-center">
                        <div class = "sty">
                        
                        </div>
                    </div>
                    <div class="col-2 d-flex align-items-center mt-3">
                    <button type="button" class="btn btn-primary fs-5 " id="reservebtn">我的收藏</button> 
                    </div> 
                    `;const a=document.querySelector(".sty"),v=f.data[0].style.split(" ");v.length<2?a.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">穿衣風格</p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-pill  ms-3">${v[0]}</button>
                </div>`:a.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">穿衣風格</p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-pill ms-3">${v[0]}</button>
                </div>        
                <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${v[1]}</button>`,document.querySelector("#reservebtn").addEventListener("click",function(){W.classList.add("d-none"),X.classList.add("d-none"),D.classList.add("d-none"),P.classList.add("d-none"),M.classList.add("d-none"),C.classList.remove("d-none"),C.innerHTML=`
                <div class="container ">
                    <div class="row my-6 align-items-center" >
                            <div class="col-6 d-flex justify-content-center">
                                <div class="d-flex align-items-center ">
                                    <div class="circle-box" style="width: 100px; height: 100px;background: url('${f.data[0].image}') center center / cover no-repeat;"></div>
                                    <strong class="display-6 ms-3 text-nowrap">${f.data[0].name}</strong>
                                </div>
                            </div>
                            <div class="col-6 d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary ps-5 ms-5" id="goback">返回我的主頁</button> 
                            </div>
                    </div>                        
                </div>
                 <hr class="m-1">
                 <br>`,C.innerHTML+=`<div class="container mb-5 ">
                    <div class="row justify-content-between mt-4 ms-5 coll">

                    </div>
                </div> `,document.querySelector("#goback").addEventListener("click",function(){C.classList.add("d-none"),M.classList.add("d-none"),W.classList.remove("d-none"),X.classList.remove("d-none"),P.classList.remove("d-none")});const H=document.querySelector(".coll");axios.get(`${I}favorites?_expand=post&userId=${U}`).then(function(w){console.log(w.data),H.innerHTML+=`<div class="container mb-5 ">
                    <div class="row justify-content-center mt-4  coll" id="cardRow"></div>
                    </div>`;const $=document.getElementById("cardRow");for(let y=0;y<w.data.length;y++)$.innerHTML+=`<div class="col-lg-4 col-md-6">
                                                <div class="card card1" style="width: 350px; height: 450px;" id="${w.data[y].post.id}">
                                                    <img src="${w.data[y].post.imgUrl}" style="width: 350px; height: 400px;" class="object-fit-cover bg-cover" >
                                                    <div class="card-body dontmove">                                                                                                 
                                                    </div>
                                                </div>
                                            </div>`;document.querySelectorAll(".card1").forEach(function(y,x){let q=y.getAttribute("id").trim();y.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),window.location.href=`${Z}/information.html?postId=`+q})})})})});axios.get(`${I}440/posts?userId=${U}`,{headers:{authorization:`Bearer ${Q}`}}).then(function(f){console.log(f);let a=f.data;const v=location.href.split("=")[1];if(a.length!=0){re.innerHTML=`<div class="row justify-content-center post1">
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
                                `;const b=9,S=[".post1",".post2",".post3"],H=(v-1)*b,w=H+b;for(let s=H;s<w&&s<a.length;s++){const d=s%b;S.forEach((m,g)=>{if(d>=g*(b/S.length)&&d<(g+1)*(b/S.length)){const e=document.querySelector(m),r=a[s].imgUrl,o=a[s].id;e.innerHTML+=`<div class="col-4">
                                                                            <div class="card card1" style="width: 350px; height: 450px;" id="${o}">
                                                                                <img src="${r}" style="width: 350px; height: 450px;" class="object-fit-cover bg-cover" >
                                                                            </div>
                                                                        </div>`}})}document.querySelectorAll(".card1").forEach(function(s,d){let m=s.getAttribute("id").trim();s.addEventListener("click",function(g){g.stopPropagation(),g.preventDefault(),window.location.href=`${Z}/information.html?postId=`+m})});const k=document.querySelector(".page");let y=100;if(a.length>0)for(let s=1;s<=Math.min(y,Math.ceil(a.length/8));s++)k.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${s}</a></li>`;const x=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(s){const d=new URLSearchParams(window.location.search);var m=parseInt(d.get("page"))||1,g=m+1;d.set("page",g);var e=window.location.origin+window.location.pathname+"?"+d.toString();window.history.replaceState({},document.title,e)}),x.addEventListener("click",function(s){const d=new URLSearchParams(window.location.search);var m=parseInt(d.get("page"))||1;if(m>1){var g=m-1;d.set("page",g);var e=window.location.origin+window.location.pathname+"?"+d.toString();window.history.replaceState({},document.title,e)}})}else M.classList.remove("d-none"),C.classList.add("d-none"),T.classList.add("d-none"),M.classList.add("d-none")}).catch(f=>{console.log(f.response)});Q!=null&&function(){try{axios.get(`${I}personal?userId=${U}`).then(function(a){const v=a.data[0].isopen,[b,S,H,w]=a.data[0].oktime.split(/[~:]/),$=a.data[0].otherdate,k=a.data[0].okday,y=a.data[0].id;if(v===!0){R.placeholder=JSON.stringify(a.data[0].pos1).replace(/"/g,""),V.placeholder=JSON.stringify(a.data[0].pos2).replace(/"/g,""),J.placeholder=JSON.stringify(a.data[0].pos3).replace(/"/g,""),z.placeholder=JSON.stringify(a.data[0].pos4).replace(/"/g,""),Y.placeholder=b,F.placeholder=S,_.placeholder=H,G.placeholder=w;for(var x=1;x<=j[L];x++){var q=ee+x-2;q>=0&&q<l.length&&(l[q].innerHTML=x,$.forEach(function(e){let r=e.split("/")[1],o=e.split("/")[0];parseInt(r)===x&&n===parseInt(o)&&(l[q].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),k.forEach(function(e){let r=e.split("/")[1],o=e.split("/")[0];parseInt(r)===x&&n===parseInt(o)&&(l[q].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')}))}let s=[];O.forEach(function(e,r){e.querySelector("i.bi.bi-calendar-x-fill.text-danger")?s.push({day:r,hasIcon:!0}):s.push({day:r,hasIcon:!1})}),N.innerHTML=`<strong class="fs-2"  id="months">${h}-${n}月</strong>`,oe.addEventListener("click",function(){O.forEach(function(t,u){t.innerHTML="　"});var e=document.getElementById("current-day");e&&e.removeAttribute("id"),n>1?(n-=1,L-=1):n===1&&(n=12,L=11,h-=1);var r=new Date(h,L,1),o=r.getDay();o===0&&(o=7),(h%4==0&&h%100!=0||h%400==0)&&(j[1]=29);for(var c=1;c<=j[L];c++){var i=o+c-2;i>=0&&i<l.length&&(n==A?(l[i].innerHTML=c,$.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),k.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})):(l[i].innerHTML=c,g[i]=c,$.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),k.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})))}N.innerHTML=`<strong class="fs-2"  id="months">${h}-${n}月</strong>`,n==A&&l[o+K-2].setAttribute("id","current-day")}),ae.addEventListener("click",function(){O.forEach(function(t,u){t.innerHTML="　"});var e=document.getElementById("current-day");e&&e.removeAttribute("id"),n<12?(n+=1,L+=1):n===12&&(n=1,L=0,h+=1);var r=new Date(h,L,1),o=r.getDay();o===0&&(o=7),(h%4==0&&h%100!=0||h%400==0)&&(j[1]=29);for(var c=1;c<=j[L];c++){var i=o+c-2;i>=0&&i<l.length&&(n==A?(l[i].innerHTML=c,$.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),k.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})):(l[i].innerHTML=c,g[i]=c,$.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),k.forEach(function(t){let u=t.split("/")[1],p=t.split("/")[0];parseInt(u)===c&&n===parseInt(p)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})))}N.innerHTML=`<strong class="fs-2"  id="months">${h}-${n}月</strong>`,n==A&&l[o+K-2].setAttribute("id","current-day")});let d=[];const m=[],g=[];O.forEach(function(e,r){m[r]=e.innerHTML,e.addEventListener("click",function(o){A==n?e.classList.contains("go")?(e.classList.remove("go"),e.innerHTML=m[r],d.pop()):(d.push(`${n}/${o.target.textContent}`),e.classList.add("go"),e.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>'):e.classList.contains("go")?(e.classList.remove("go"),e.innerHTML=g[r],d.pop()):(d.push(`${n}/${o.target.textContent}`),e.classList.add("go"),e.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>')})});for(let e=0;e<E.length;e++)E[e].addEventListener("click",function(r){r.preventDefault();for(let o=0;o<E.length;o++)E[o].querySelector(".thumb").classList.remove("active");this.querySelector(".thumb").classList.add("active"),this.querySelector(".thumb").textContent==="貼文總覽"?(P.classList.remove("d-none"),D.classList.add("d-none"),T.classList.add("d-none"),M.classList.add("d-none")):(T.classList.add("d-none"),D.classList.remove("d-none"),P.classList.add("d-none"),M.classList.add("d-none"))});se.addEventListener("click",function(){let e=Y.value||Y.placeholder,r=F.value||F.placeholder,o=_.value||_.placeholder,c=G.value||G.placeholder,i=R.value||R.placeholder,t=V.value||V.placeholder,u=J.value||J.placeholder,p=z.value||z.placeholder,ne=`${e}:${r}~${o}:${c}`;axios.patch(`${I}personal/${y}`,{pos1:i,pos2:t,pos3:u,pos4:p,okday:d,oktime:ne})}),ie.addEventListener("click",function(){axios.patch(`${I}personal/${y}`,{isopen:!1}).then(function(e){T.classList.remove("d-none"),D.classList.add("d-none"),M.classList.add("d-none"),location.reload()})})}else if(v!==!0){for(let s=0;s<E.length;s++)E[s].addEventListener("click",function(d){d.preventDefault();for(let m=0;m<E.length;m++)E[m].querySelector(".thumb").classList.remove("active");this.querySelector(".thumb").classList.add("active"),this.querySelector(".thumb").textContent==="貼文總覽"?(P.classList.remove("d-none"),T.classList.add("d-none"),M.classList.add("d-none")):(T.classList.remove("d-none"),P.classList.add("d-none"),M.classList.add("d-none"))});ce.addEventListener("click",function(){axios.patch(`${I}personal/${y}`,{isopen:!0}).then(function(){T.classList.add("d-none"),D.classList.remove("d-none"),M.classList.add("d-none"),location.reload()}).then(function(){T.classList.add("d-none"),D.classList.remove("d-none"),location.reload()})})}})}catch(a){console.error("Error fetching data:",a)}}();
