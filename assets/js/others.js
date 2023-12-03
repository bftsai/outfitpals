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
const tim = document.querySelector(".tim")
const tim2 = document.querySelector(".tim2")


const go = document.querySelector("#go")
const doublecheck = document.querySelector(".doublecheck")
const text = document.querySelector(".text")
const ans = document.querySelector(".ans")
const ans3 = document.querySelector(".ans3")


const oc1 = document.querySelector(".oc1")
const mu1 = document.querySelector(".mu1")
const oc2 = document.querySelector(".oc2")
const mu2 = document.querySelector(".mu2")



//日期
let days = document.getElementsByTagName("td"); //將td標籤放入days物件集合中
var today = new Date();
var useMonth = today.getMonth()+ 1;
var thisMonth = today.getMonth();
var seeMonth = thisMonth + 1;
var thisYear = today.getFullYear();
var firstDateOfThisMonth = new Date(thisYear, thisMonth, 1); //建立今年今月1日的 Date日期物件
var firstDateDayOfThisMonth = firstDateOfThisMonth.getDay(); //取得今年今月1日是禮拜幾
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //儲存每月的天數，其中2月為28或29
if ((thisYear % 4 == 0 && thisYear % 100 != 0) || (thisYear % 400 == 0)) monthDays[1] = 29; //若是閏年，2月設為29日
let to = today.getDate();
// 填今月日期在TD格子上，從今年今月1日是禮拜幾開始填1~今月天數
days[firstDateDayOfThisMonth + to - 2].setAttribute("id", "current-day");




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
    tim.innerHTML = `<li>${oc1.value}:${mu1.value}~${oc2.value}:${mu2.value}</li>`;
    tim2.innerHTML = `<li>${oc1.value}:${mu1.value}~${oc2.value}:${mu2.value}</li>`;
    checkboxElements.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            var labelElement = document.querySelector('.d' + (index + 1));
            var labelText = labelElement.innerText.trim();
            pos.innerHTML += `<li>${labelText}</li>`;
            ans3.innerHTML += `<li>${labelText}</li>`;
            
            
        }
    });
    
})

let dates = [] //push 要用的資料

const originalContents = [];
const originalContents2 = [];




for (var i = 1; i <= monthDays[thisMonth]; i++) {

    var index = firstDateDayOfThisMonth + i - 2;

    if (index >= 0 && index < days.length) {
        days[index].innerHTML = i;
        
    }
}
//最一開始
months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
//向左渲染
left.addEventListener("click", function() {

    td.forEach(function(td, index) {
        
        td.innerHTML = "　";
        
    });
    ////////////////////////////
    var currentDayElement = document.getElementById("current-day");
    if (currentDayElement) {
        currentDayElement.removeAttribute("id");
    }
    ////////////////////////////
    if (seeMonth > 1) {
        seeMonth -= 1;
        thisMonth -= 1;
    } else if (seeMonth === 1) {
        seeMonth = 12;
        thisMonth = 11;
        thisYear -= 1;
    }
    ////////////////////////////
    
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
                originalContents2[index] = i;
            }
    
        }
        months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
        
        if(seeMonth == useMonth){
            let newCurrentDayElement = days[firstDateDayOfThisMonth + to - 2];
            newCurrentDayElement.setAttribute("id", "current-day");
        }
});

//向右渲染
right.addEventListener("click", function() {
    td.forEach(function(td, index) {
        td.innerHTML = "　";
    });
    //////////////////////////////////
    var currentDayElement = document.getElementById("current-day");
    if (currentDayElement) {
        currentDayElement.removeAttribute("id");
    }

    ////////////////////////////
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
            originalContents2[index] = i; //保存原有html 確保切換icon不會跑掉
        }
    }
    
    months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
    
    if(seeMonth == useMonth){
        let newCurrentDayElement = days[firstDateDayOfThisMonth + to - 2];
        newCurrentDayElement.setAttribute("id", "current-day");
    }
});



//icon輸入
td.forEach(function(td, index) {
    originalContents[index] = td.innerHTML;

    td.addEventListener("click", function(e) {
        if(useMonth == seeMonth){
            if (td.classList.contains("go")) {
                td.classList.remove("go");
                td.innerHTML = originalContents[index];
                dates.pop();
            } else {
                dates.push(`${seeMonth}/${e.target.textContent}`)
                td.classList.add("go");
                td.innerHTML = '<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center"</i>';
            }
        }else{
            if (td.classList.contains("go")) {
                td.classList.remove("go");
                td.innerHTML = originalContents2[index];
                dates.pop();

            } else {
                dates.push(`${seeMonth}/${e.target.textContent}`)
                td.classList.add("go");
                td.innerHTML = '<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center"</i>';
            }
        }
        // 切換 'go' 類別
       
    });
});



//{body 必填}
text.addEventListener("change",function(){
    let want = text.value
    doublecheck.disabled= (want=="")
})   
doublecheck.addEventListener("change",function(){
    go.disabled = !doublecheck.checked;
})


//push 到 json
let alltoala = []
go.addEventListener("click",function(){
    let location = []
    let want = text.value
    let postTime= new Date().toUTCString()
    let time = `${oc1.value}:${mu1.value}~${oc2.value}:${mu2.value}`
    checkboxElements.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            var labelElement = document.querySelector('.d' + (index + 1));
            location.push(labelElement.innerText.trim()) 
        }
    });
    
     let dat = {
        "postId": 5,
        "userId": "1",
        "postTime": postTime,
        "location":location,
        "body":want,
        "year":thisYear,
        "date": dates,
        "time":time,
        "state": false,
        "checked": false,
        
  
    }
    alltoala.push(dat)

    ans.innerHTML = `<p>${want}</p>`
})
 // axios.post("http://localhost:3000/reserve" , alltoala)     
console.log(alltoala)