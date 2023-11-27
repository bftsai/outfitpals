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




let days = document.getElementsByTagName("td"); //將td標籤放入days物件集合中
var today = new Date();
var thisMonth = today.getMonth();
var seeMonth = thisMonth + 1;
var thisYear = today.getFullYear();
var firstDateOfThisMonth = new Date(thisYear, thisMonth, 1); //建立今年今月1日的 Date日期物件
var firstDateDayOfThisMonth = firstDateOfThisMonth.getDay(); //取得今年今月1日是禮拜幾
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //儲存每月的天數，其中2月為28或29
if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29; //若是閏年，2月設為29日
let to = today.getDate();

// 填今月日期在TD格子上，從今年今月1日是禮拜幾開始填1~今月天數
for (var i = 1; i <= monthDays[thisMonth]; i++) {
    days[firstDateDayOfThisMonth + to - 2].setAttribute("id", "current-day");
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
    var currentDayElement = document.getElementById("current-day");
    if (currentDayElement) {
        currentDayElement.removeAttribute("id");
    }

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
    var currentDayElement = document.getElementById("current-day");
    if (currentDayElement) {
        currentDayElement.removeAttribute("id");
    }

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
            td.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>' 
        }
    });
});

