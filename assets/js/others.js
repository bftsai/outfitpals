const thumbLinks = document.querySelectorAll(".thumb-link");
const thumb= document.querySelectorAll(".thumb");

const othersmain = document.querySelector("#othersmain")
const reserve = document.querySelector("#reserve")


const left = document.querySelector("#left")
const right = document.querySelector("#right")
const months = document.querySelector("#months")

const td = document.querySelectorAll("td")


const checkboxElements = document.querySelectorAll('.checkbox');
const ctn = document.querySelector(".ctn")
const pos = document.querySelector(".pos")


const go = document.querySelector("#go")
const doublecheck = document.querySelector(".doublecheck")
const text = document.querySelector(".text")
const ans = document.querySelector(".ans")
const ans3 = document.querySelector(".ans3")

for (let i = 0; i < thumbLinks.length; i++) {
    
    thumbLinks[i].addEventListener("click", function (event) {
        event.preventDefault(); // 防止頁面跳轉

        for (let j = 0; j < thumbLinks.length; j++) {
            thumbLinks[j].querySelector('.thumb').classList.remove("active");
        }

        this.querySelector('.thumb').classList.add("active");

        if (this.querySelector('.thumb').textContent === "貼文總覽") {
            othersmain.classList.remove('d-none')
            reserve.classList.add('d-none')
        } else {
            reserve.classList.remove('d-none')
            othersmain.classList.add('d-none')
        }
    });
}
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
        td.addEventListener("click",function(e){
            td.classList.add("go")
            td.innerHTML='<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center " id="icon"></i>'   
        })
    }
});



ctn.addEventListener("click",function(){
    pos.innerHTML = '';
    ans3.innerHTML = '';
    text.value = '';
    checkboxElements.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            var labelElement = document.querySelector('.d' + (index + 1));
            var labelText = labelElement.innerText.trim();
            pos.innerHTML += `<li>${labelText}</li>`;
            ans3.innerHTML += `<li>${labelText}</li>`
        }
    });
    
})

doublecheck.addEventListener("change",function(){
    go.disabled = !doublecheck.checked;
})

let alltoala = []
go.addEventListener("click",function(){
    
    // td.forEach(function(o){
       
    //     if(o.classList.contains("go")){
    //         const row = o.getAttribute('data-row');
    //         const col = o.getAttribute('data-col');
    //         let dat = {
    //             "year":year,
    //             "month":month,
    //             "Week":col,
    //             "date":row
    //         }
    //         alltoala.push(dat)
    //         alltoala.push(dat)
    //         alltoala.push(dat)
    //         alltoala.push(dat)
       
    //     }
    // })
    let want = text.value
    ans.innerHTML = `<p>${want}</p>`
})
 // axios.post("http://localhost:3000/reserve" , alltoala)     
console.log(alltoala)

