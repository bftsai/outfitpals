import"./main-988f3ba4.js";const e=document.querySelectorAll(".thumb-link");document.querySelectorAll(".thumb");const n=document.querySelector("#othersmain"),o=document.querySelector("#reserve");for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(r){r.preventDefault();for(let s=0;s<e.length;s++)e[s].querySelector(".thumb").classList.remove("active");this.querySelector(".thumb").classList.add("active"),this.querySelector(".thumb").textContent==="貼文總覽"?(n.classList.remove("d-none"),o.classList.add("d-none")):(o.classList.remove("d-none"),n.classList.add("d-none"))});
