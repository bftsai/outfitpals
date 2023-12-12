import"./main-e6a9fc99.js";const q="https://outfitpals-web-server.onrender.com/",ee="https://bftsai.github.io/outfitpals",E=document.querySelectorAll(".thumb-link");document.querySelectorAll(".thumb");const j=document.querySelector("#personalmain"),C=document.querySelector("#reserve"),X=document.querySelector("#personalnav"),Z=document.querySelector("#personalselect"),U=document.querySelector("#collect"),H=document.querySelector("#noopen"),se=document.querySelector(".setting"),oe=document.querySelector("#left"),ae=document.querySelector("#right"),V=document.querySelector("#months"),B=document.querySelectorAll("td"),ie=document.querySelector("#open"),ce=document.querySelector(".close"),z=document.querySelector(".p1"),J=document.querySelector(".p2"),Y=document.querySelector(".p3"),F=document.querySelector(".p4"),_=document.querySelector(".t1"),G=document.querySelector(".m1"),K=document.querySelector(".t2"),Q=document.querySelector(".m2"),le=document.querySelector(".personal"),re=document.querySelector(".otherspost");document.querySelector(".collectpost");let l=document.getElementsByTagName("td");var R=new Date,A=R.getMonth()+1,b=R.getMonth(),n=b+1,p=R.getFullYear(),de=new Date(p,b,1),te=de.getDay(),D=[31,28,31,30,31,30,31,31,30,31,30,31];(p%4==0&&p%100!=0||p%400==0)&&(D[1]=29);let W=R.getDate();l[te+W-2].setAttribute("id","current-day");function ne(f){const c=document.cookie.split(";").map(v=>v.trim());for(const v of c){const[L,x]=v.split("=");if(L===f)return decodeURIComponent(x)}return null}const O=ne("outfitpalsToken"),N=ne("outfitpalsId");axios.get(`${q}640/users?id=${N}`,{headers:{authorization:`Bearer ${O}`}}).then(function(f){console.log(f.data),le.innerHTML=`
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
                    `;const c=document.querySelector(".sty"),v=f.data[0].style.split(" ");v.length<2?c.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">穿衣風格</p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-pill  ms-3">${v[0]}</button>
                </div>`:c.innerHTML=` <p class="fs-3 d-flex justify-content-center ms-3">穿衣風格</p>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-pill ms-3">${v[0]}</button>
                </div>        
                <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${v[1]}</button>`,document.querySelector("#reservebtn").addEventListener("click",function(){X.classList.add("d-none"),Z.classList.add("d-none"),C.classList.add("d-none"),j.classList.add("d-none"),U.classList.remove("d-none"),U.innerHTML=`
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
                 <br>`,U.innerHTML+=`<div class="container mb-5 ">
                    <div class="row justify-content-between mt-4 ms-5 coll">

                    </div>
                </div> `,document.querySelector("#goback").addEventListener("click",function(){U.classList.add("d-none"),X.classList.remove("d-none"),Z.classList.remove("d-none"),j.classList.remove("d-none")});const I=document.querySelector(".coll");axios.get(`${q}660/favorites?_expand=post&userId=${N}`,{headers:{authorization:`Bearer ${O}`}}).then(function(w){console.log(w.data),I.innerHTML+=`<div class="container mb-5 ">
                    <div class="row justify-content-center mt-4  coll" id="cardRow"></div>
                    </div>`;const S=document.getElementById("cardRow");for(let y=0;y<w.data.length;y++)S.innerHTML+=`<div class="col-lg-4 col-md-6">
                                                <div class="card card1" style="width: 350px; height: 450px;" id="${w.data[y].id}">
                                                    <img src="${w.data[y].post.imgUrl}" style="width: 350px; height: 400px;" class="object-fit-cover bg-cover" >
                                                    <div class="card-body dontmove">                                                                                                 
                                                        <strong>eric</strong>
                                                    </div>
                                                </div>
                                            </div>`;document.querySelectorAll(".card1").forEach(function(y,M){let k=y.getAttribute("id").trim();y.addEventListener("click",function(s){s.stopPropagation(),s.preventDefault(),window.location.href=`${ee}/information.html?postId=`+k})})})})});axios.get(`${q}600/posts?userId=${N}`,{headers:{authorization:`Bearer ${O}`}}).then(function(f){let c=f.data;const v=location.href.split("=")[1];re.innerHTML=`<div class="row justify-content-center post1">
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
                    `;const L=9,x=[".post1",".post2",".post3"],I=(v-1)*L,w=I+L;for(let s=I;s<w&&s<c.length;s++){const r=s%L;x.forEach((h,g)=>{if(r>=g*(L/x.length)&&r<(g+1)*(L/x.length)){const e=document.querySelector(h),d=c[s].imgUrl,o=c[s].id;e.innerHTML+=`<div class="col-4">
                                                                <div class="card card1" style="width: 350px; height: 450px;" id="${o}">
                                                                    <img src="${d}" style="width: 350px; height: 450px;" class="object-fit-cover bg-cover" >
                                                                </div>
                                                            </div>`}})}document.querySelectorAll(".card1").forEach(function(s,r){let h=s.getAttribute("id").trim();s.addEventListener("click",function(g){g.stopPropagation(),g.preventDefault(),window.location.href=`${ee}/information.html?postId=`+h})});const $=document.querySelector(".page");let y=100;if(c.length>0)for(let s=1;s<=Math.min(y,Math.ceil(c.length/8));s++)$.innerHTML+=`<li class="page-item"><a href="#" class="page-link border-0">${s}</a></li>`;const M=document.querySelector(".l");document.querySelector(".r").addEventListener("click",function(s){const r=new URLSearchParams(window.location.search);var h=parseInt(r.get("page"))||1,g=h+1;r.set("page",g);var e=window.location.origin+window.location.pathname+"?"+r.toString();window.history.replaceState({},document.title,e)}),M.addEventListener("click",function(s){const r=new URLSearchParams(window.location.search);var h=parseInt(r.get("page"))||1;if(h>1){var g=h-1;r.set("page",g);var e=window.location.origin+window.location.pathname+"?"+r.toString();window.history.replaceState({},document.title,e)}})});O!=null&&function(){try{axios.get(`${q}600/personal?userId=${N}`,{headers:{authorization:`Bearer ${O}`}}).then(function(c){const v=c.data[0].isopen,[L,x,I,w]=c.data[0].oktime.split(/[~:]/),S=c.data[0].otherdate,$=c.data[0].okday,y=c.data[0].id;if(v===!0){z.placeholder=JSON.stringify(c.data[0].pos1).replace(/"/g,""),J.placeholder=JSON.stringify(c.data[0].pos2).replace(/"/g,""),Y.placeholder=JSON.stringify(c.data[0].pos3).replace(/"/g,""),F.placeholder=JSON.stringify(c.data[0].pos4).replace(/"/g,""),_.placeholder=L,G.placeholder=x,K.placeholder=I,Q.placeholder=w;for(var M=1;M<=D[b];M++){var k=te+M-2;k>=0&&k<l.length&&(l[k].innerHTML=M,S.forEach(function(e){let o=e.split("月")[1].split("號")[0],i=e.split("號")[0].split("月")[0];parseInt(o)===M&&n===parseInt(i)&&(l[k].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),$.forEach(function(e){let d=e.split("/")[1],o=e.split("/")[0];parseInt(d)===M&&n===parseInt(o)&&(l[k].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')}))}let s=[];B.forEach(function(e,d){e.querySelector("i.bi.bi-calendar-x-fill.text-danger")?s.push({day:d,hasIcon:!0}):s.push({day:d,hasIcon:!1})}),V.innerHTML=`<strong class="fs-2"  id="months">${p}-${n}月</strong>`,oe.addEventListener("click",function(){B.forEach(function(t,m){t.innerHTML="　"});var e=document.getElementById("current-day");e&&e.removeAttribute("id"),n>1?(n-=1,b-=1):n===1&&(n=12,b=11,p-=1);var d=new Date(p,b,1),o=d.getDay();o===0&&(o=7),(p%4==0&&p%100!=0||p%400==0)&&(D[1]=29);for(var a=1;a<=D[b];a++){var i=o+a-2;i>=0&&i<l.length&&(n==A?(l[i].innerHTML=a,S.forEach(function(t){let u=t.split("月")[1].split("號")[0],T=t.split("號")[0].split("月")[0];parseInt(u)===a&&n===parseInt(T)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),$.forEach(function(t){let m=t.split("/")[1],u=t.split("/")[0];parseInt(m)===a&&n===parseInt(u)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})):(l[i].innerHTML=a,g[i]=a,S.forEach(function(t){let u=t.split("月")[1].split("號")[0],T=t.split("號")[0].split("月")[0];parseInt(u)===a&&n===parseInt(T)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),$.forEach(function(t){let m=t.split("/")[1],u=t.split("/")[0];parseInt(m)===a&&n===parseInt(u)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})))}V.innerHTML=`<strong class="fs-2"  id="months">${p}-${n}月</strong>`,n==A&&l[o+W-2].setAttribute("id","current-day")}),ae.addEventListener("click",function(){B.forEach(function(t,m){t.innerHTML="　"});var e=document.getElementById("current-day");e&&e.removeAttribute("id"),n<12?(n+=1,b+=1):n===12&&(n=1,b=0,p+=1);var d=new Date(p,b,1),o=d.getDay();o===0&&(o=7),(p%4==0&&p%100!=0||p%400==0)&&(D[1]=29);for(var a=1;a<=D[b];a++){var i=o+a-2;i>=0&&i<l.length&&(n==A?(l[i].innerHTML=a,S.forEach(function(t){let u=t.split("月")[1].split("號")[0],T=t.split("號")[0].split("月")[0];parseInt(u)===a&&n===parseInt(T)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),$.forEach(function(t){let m=t.split("/")[1],u=t.split("/")[0];parseInt(m)===a&&n===parseInt(u)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})):(l[i].innerHTML=a,g[i]=a,S.forEach(function(t){let u=t.split("月")[1].split("號")[0],T=t.split("號")[0].split("月")[0];parseInt(u)===a&&n===parseInt(T)&&(l[i].innerHTML='<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>')}),$.forEach(function(t){let m=t.split("/")[1],u=t.split("/")[0];parseInt(m)===a&&n===parseInt(u)&&(l[i].innerHTML='<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">')})))}V.innerHTML=`<strong class="fs-2"  id="months">${p}-${n}月</strong>`,n==A&&l[o+W-2].setAttribute("id","current-day")});let r=[];const h=[],g=[];B.forEach(function(e,d){h[d]=e.innerHTML,e.addEventListener("click",function(o){A==n?e.classList.contains("go")?(e.classList.remove("go"),e.innerHTML=h[d],r.pop()):(r.push(`${n}/${o.target.textContent}`),e.classList.add("go"),e.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>'):e.classList.contains("go")?(e.classList.remove("go"),e.innerHTML=g[d],r.pop()):(r.push(`${n}/${o.target.textContent}`),e.classList.add("go"),e.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>')})});for(let e=0;e<E.length;e++)E[e].addEventListener("click",function(d){d.preventDefault();for(let o=0;o<E.length;o++)E[o].querySelector(".thumb").classList.remove("active");this.querySelector(".thumb").classList.add("active"),this.querySelector(".thumb").textContent==="貼文總覽"?(j.classList.remove("d-none"),C.classList.add("d-none"),H.classList.add("d-none")):(H.classList.add("d-none"),C.classList.remove("d-none"),j.classList.add("d-none"))});se.addEventListener("click",function(){let e=_.value||_.placeholder,d=G.value||G.placeholder,o=K.value||K.placeholder,a=Q.value||Q.placeholder,i=z.value||z.placeholder,t=J.value||J.placeholder,m=Y.value||Y.placeholder,u=F.value||F.placeholder,P=`${e}:${d}~${o}:${a}`;axios.patch(`${q}personal/${y}`,{pos1:i,pos2:t,pos3:m,pos4:u,okday:r,oktime:P})}),ce.addEventListener("click",function(){axios.patch(`${q}personal/${y}`,{isopen:!1}).then(function(e){H.classList.remove("d-none"),C.classList.add("d-none"),location.reload()})})}else if(v!==!0){for(let s=0;s<E.length;s++)E[s].addEventListener("click",function(r){r.preventDefault();for(let h=0;h<E.length;h++)E[h].querySelector(".thumb").classList.remove("active");this.querySelector(".thumb").classList.add("active"),this.querySelector(".thumb").textContent==="貼文總覽"?(j.classList.remove("d-none"),H.classList.add("d-none")):(H.classList.remove("d-none"),j.classList.add("d-none"))});ie.addEventListener("click",function(){axios.patch(`${q}personal/${y}`,{isopen:!0}).then(function(){H.classList.add("d-none"),C.classList.remove("d-none"),location.reload()})})}})}catch(c){console.error("Error fetching data:",c)}}();
