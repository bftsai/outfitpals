const thumbLinks = document.querySelectorAll(".thumb-link");
const thumb= document.querySelectorAll(".thumb");

const personalMain = document.querySelector("#personalmain")
const reserve = document.querySelector("#reserve")

const reservebtn = document.querySelector("#reservebtn")
const personalnav = document.querySelector("#personalnav")
const personalselect = document.querySelector("#personalselect")
const collect = document.querySelector("#collect")

const goback = document.querySelector("#goback")


const left = document.querySelector("#left")
const right = document.querySelector("#right")
const months = document.querySelector("#months")

const td = document.querySelectorAll("td")

for (let i = 0; i < thumbLinks.length; i++) {
    
    thumbLinks[i].addEventListener("click", function (event) {
        event.preventDefault(); // 防止頁面跳轉

        for (let j = 0; j < thumbLinks.length; j++) {
            thumbLinks[j].querySelector('.thumb').classList.remove("active");
        }

        this.querySelector('.thumb').classList.add("active");

        if (this.querySelector('.thumb').textContent === "貼文總覽") {
            personalMain.classList.remove('d-none')
            reserve.classList.add('d-none')
        } else {
            reserve.classList.remove('d-none')
            personalMain.classList.add('d-none')
        }
    });
}


reservebtn.addEventListener("click",function(){
    personalnav.classList.add("d-none")
    personalselect.classList.add("d-none")
    reserve.classList.add('d-none')
    personalMain.classList.add('d-none')
    collect.classList.remove('d-none')

})



goback.addEventListener("click",function(){
    collect.classList.add('d-none')
    personalnav.classList.remove("d-none")
    personalselect.classList.remove("d-none")
    personalMain.classList.remove('d-none')
})



let year = 2023
let month = 1
months.innerHTML = `<strong class="fs-2"  id="months">${year}-${month}月</strong>`;

left.addEventListener("click" , function(){
    if (month>1 ){
        month -= 1;
        months.innerHTML = `<strong class="fs-2"  id="months">${year}-${month}月</strong>`;
    }if(month==1){
        month = 13
        year -= 1
    }

})

right.addEventListener("click" , function(){
    if (month<12 ){
        month+= 1;
        months.innerHTML = `<strong class="fs-2"  id="months">${year}-${month}月</strong>`;
    }if(month==12){
        month = 0
        year += 1
    }
})


td.forEach(function(td,index){
    if(!td.classList.contains("a")){
        td.addEventListener("click",function(){
            td.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>'           
        })
    }

});