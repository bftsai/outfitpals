import{a}from"./main-f50f3ee1.js";const r="https://outfitpals-web-server.onrender.com/",d=document.querySelector(".addTitle"),l=document.querySelector(".addBody"),u=document.querySelector(".addOutfitStyle"),i=document.querySelector(".addBrands"),m=document.querySelector(".createPost"),g=document.querySelector(".userAvatar"),s=document.querySelector(".userName");console.log(s);const c=p("outfitpalsId");function p(t){const o=`; ${document.cookie}`.split(`; ${t}=`);if(o.length===2)return o.pop().split(";").shift()}function f(){a.get(`${r}users?id=${c}`).then(t=>{let e=t.data[0].image,o=t.data[0]["nick name"];v(e,o)}).catch(t=>console.log(t.response))}function v(t,e){g.innerHTML=`<img src="${t}" alt="userAvatar">`,s.textContent=e}f();const y=document.getElementById("upLoadImg");let n=document.querySelector(".upLoadPhoto");y.addEventListener("change",t=>{let e=new FileReader;e.addEventListener("load",o=>{n.setAttribute("src",o.target.result),console.log(n.getAttribute("src"))}),e.readAsDataURL(t.target.files[0])});m.addEventListener("click",function(t){let e={title:d.value,body:l.value,imgUrl:n.getAttribute("src"),userId:c,postTime:new Date().toUTCString(),likeCounts:0,favoriteCounts:0,outfitStyle:u.value,brands:i.value};S(e)});function S(t){a.post(`${r}posts`,t).then(e=>{console.log("建立貼文成功"),console.log(e.data),e.data.id}).catch(e=>{console.log(e.response)})}
