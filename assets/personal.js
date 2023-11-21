const thumbLinks = document.querySelectorAll(".thumb-link");
const thumb= document.querySelectorAll(".thumb");

const personalMain = document.querySelector("#personalmain")
const reserve = document.querySelector("#reserve")

const reservebtn = document.querySelector("#reservebtn")
const personalnav = document.querySelector("#personalnav")
const personalselect = document.querySelector("#personalselect")
const collect = document.querySelector("#collect")

const goback = document.querySelector("#goback")


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



