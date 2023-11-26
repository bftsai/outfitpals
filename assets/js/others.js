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

       
    //     }
    // })
    let want = text.value
    ans.innerHTML = `<p>${want}</p>`
})
 // axios.post("http://localhost:3000/reserve" , alltoala)     
console.log(alltoala)


let days = document.getElementsByTagName("td"); //將td標籤放入days物件集合中
var today = new Date();
var thisMonth = today.getMonth();
var seeMonth = thisMonth + 1;
var thisYear = today.getFullYear();
var firstDateOfThisMonth = new Date(thisYear, thisMonth, 1); //建立今年今月1日的 Date日期物件
var firstDateDayOfThisMonth = firstDateOfThisMonth.getDay(); //取得今年今月1日是禮拜幾
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //儲存每月的天數，其中2月為28或29
if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29; //若是閏年，2月設為29日
let to = today.getDate()-1;

// 填今月日期在TD格子上，從今年今月1日是禮拜幾開始填1~今月天數
for (var i = 1; i <= monthDays[thisMonth]; i++) {
    days[firstDateDayOfThisMonth + to - 1].setAttribute("id", "current-day");
    var index = firstDateDayOfThisMonth + i - 2;

    if (index >= 0 && index < days.length) {
        days[index].innerHTML = i;
    }
}

months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;

left.addEventListener("click", function() {
    td.forEach(function(td, index) {
        td.innerHTML = "　";
    });

    if (seeMonth > 1) {
        seeMonth -= 1;
        thisMonth -= 1;
    } else if (seeMonth === 1) {
        seeMonth = 12;
        thisMonth = 11;
        thisYear -= 1;
    }

    var firstDateOfThisMonth = new Date(thisYear, thisMonth, 1);
    var firstDateDayOfThisMonth = firstDateOfThisMonth.getDay();

    if (firstDateDayOfThisMonth === 0) {
        firstDateDayOfThisMonth = 7; // 將星期日（0）轉換為星期七（7）
    }
    if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29; 
    for (var i = 1; i <= monthDays[thisMonth]; i++) {
        var index = firstDateDayOfThisMonth + i - 2;
    
        if (index >= 0 && index < days.length) {
            days[index].innerHTML = i;
        }
    }

    months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
});

right.addEventListener("click", function() {
    td.forEach(function(td, index) {
        td.innerHTML = "　";
    });

    if (seeMonth < 12) {
        seeMonth += 1;
        thisMonth += 1;
    } else if (seeMonth === 12) {
        seeMonth = 1;
        thisMonth = 0;
        thisYear += 1;
    }

    var firstDateOfThisMonth = new Date(thisYear, thisMonth, 1);
    var firstDateDayOfThisMonth = firstDateOfThisMonth.getDay();

    if (firstDateDayOfThisMonth === 0) {
        firstDateDayOfThisMonth = 7; // 將星期日（0）轉換為星期七（7）
    }
    if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29; 
    for (var i = 1; i <= monthDays[thisMonth]; i++) {
        var index = firstDateDayOfThisMonth + i - 2;
    
        if (index >= 0 && index < days.length) {
            days[index].innerHTML = i;
        }
    }

    months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
});




const originalContents = [];
td.forEach(function(td, index) {
    originalContents[index] = td.innerHTML;

    td.addEventListener("click", function(e) {
        // 切換 'go' 類別
        if (td.classList.contains("go")) {
            td.classList.remove("go");
            td.innerHTML = originalContents[index];
        } else {
            td.classList.add("go");
            td.innerHTML = '<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center"</i>';
        }
    });
});