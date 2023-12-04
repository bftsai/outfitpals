//兩頁換頁
const thumbLinks = document.querySelectorAll(".thumb-link");  
const thumb= document.querySelectorAll(".thumb");

const personalMain = document.querySelector("#personalmain")
const reserve = document.querySelector("#reserve")

const reservebtn = document.querySelector("#reservebtn")
const personalnav = document.querySelector("#personalnav")
const personalselect = document.querySelector("#personalselect")
const collect = document.querySelector("#collect")
const noopen = document.querySelector("#noopen")

//按鈕
const goback = document.querySelector("#goback")
const setting = document.querySelector(".setting")

//日期
const left = document.querySelector("#left")
const right = document.querySelector("#right")
const months = document.querySelector("#months")

const td = document.querySelectorAll("td")

//開啟預約按鈕
const open = document.querySelector("#open")
const close = document.querySelector(".close")

//時間地點


const p1 = document.querySelector(".p1")                                         
const p2 = document.querySelector(".p2")                                              
const p3 = document.querySelector(".p3")                                              
const p4 = document.querySelector(".p4")                                              
const t1 = document.querySelector(".t1")                                              
const m1 = document.querySelector(".m1")                                              
const t2 = document.querySelector(".t2")                                              
const m2 = document.querySelector(".m2")

//個人資料渲染
const personal = document.querySelector(".personal")                                               



//時間
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
days[firstDateDayOfThisMonth + to - 2].setAttribute("id", "current-day"); //今天日期


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//123456@gmail.com
//26416387@gmail.com
function init(){
    axios.post("http://localhost:3000/login",{
        "email": "123456@gmail.com",
        "password":"A123456789"
    })
    .then(function(response){
        const token=response.data.accessToken
        document.cookie=`outfitpalsToken=${response.data.accessToken}`
        document.cookie=`userId=${response.data.user.id}`
        console.log('用户已登录:',token);
    })
    .catch(function(error){
        console.log('並沒有登錄')
    })
    
}
init();




function getCookie(name) {  
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return null;
}


const storedToken = getCookie("outfitpalsToken");
const userId = getCookie("userId");
// history.pushState(null, null, `?id=${userId}`);
// const id = location.href.split("=")[1];

axios.get(`http://localhost:3000/users?id=${userId}`)
.then(function(res){

    

    personal.innerHTML=`
                        <div class="col-6  d-flex">
                        <div class="circle-box" style="width: 150px; height: 150px;"></div>
                        <div class="d-flex position-relative ">
                            <div>
                                <div class="row justify-content-center align-items-center" >
                                    <div class="col">
                                        <strong class="display-5 text-nowrap">${res.data[0].name}</strong>
                                        </div>
                                        <div class="col">
                                            <p class="fs-3 mt-3" style="opacity: 0.4;">${res.data[0].height}cm ${res.data[0].weight}kg</p>
                                    </div>
                                </div>
                                <p class="ms-5">你好！我是Selen～喜歡可以多層次穿搭的冬天</p>
                                <div class="d-flex">
                                    <p class="ms-5">活動範圍 :</p>
                                    <p>${res.data[0].PopArea}</p>
                                </div>
                                <div class="d-flex">
                                    <p class="ms-5">穿搭價位 :</p>
                                    <p>${res.data[0]["outfit price"]}</p>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <div>
                            <p class="fs-2">服飾品牌</p>
                            <div class="d-flex">
                                <button type="button" class="btn btn-primary btn-pill ms-3">OnniStyle</button>
                            </div>
                            <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">OnniStyle</button>
                        </div>
                    </div>


                    <div class="col-3 d-flex align-items-center mt-3">
                    <button type="button" class="btn btn-primary fs-3 " id="reservebtn">我的收藏</button> 
                    </div> `
})




if (storedToken != null) {     //判斷登入
    function fetchData() {
        try {
            axios.get(`http://localhost:3000/personal?userId=${userId}`)
            .then(function(res){
                
                if(res.data.length == 0){     //判斷是否第一次登陸
                    axios.post(`http://localhost:3000/personal`,{
                        "isopen": false,
                        "userId": userId,
                        "otherdate": "",
                        "pos1": "請填寫",
                        "pos2": "請填寫",
                        "pos3": "請填寫",
                        "pos4": "請填寫",
                        "okday":[],
                        "oktime":"12:00~12:00" ,
                    })
                }else{
                    const isopen =res.data[0].isopen;
                    const [startHour, startMinute, endHour, endMinute] = res.data[0].oktime.split(/[~:]/);
                    const otherdate = res.data[0].otherdate.split(",");
                    const okday = res.data[0].okday;
                    const dataid = res.data[0].id
                    
                    
                    if (isopen === true) {
                        //渲染
                        p1.placeholder =  JSON.stringify(res.data[0].pos1).replace(/"/g, '');
                        p2.placeholder =  JSON.stringify(res.data[0].pos2).replace(/"/g, '');
                        p3.placeholder =  JSON.stringify(res.data[0].pos3).replace(/"/g, '');
                        p4.placeholder =  JSON.stringify(res.data[0].pos4).replace(/"/g, '');
                        t1.placeholder =  startHour
                        m1.placeholder =  startMinute
                        t2.placeholder =  endHour
                        m2.placeholder =  endMinute
                        //日曆
                        for (var i = 1; i <= monthDays[thisMonth]; i++) {
                            var index = firstDateDayOfThisMonth + i - 2;
                            if (index >= 0 && index < days.length) {
                                days[index].innerHTML = i;
                                otherdate.forEach(function(a) {  //被預約
                                    let useday = a.split("/")[1];
                                    let useMonth = a.split("/")[0];
                                    if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                        days[index].innerHTML = '<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>';
                                    }
                                });
                                okday.forEach(function(a) {  //可預約
                                    let useday = a.split("/")[1];
                                    let useMonth = a.split("/")[0];
                                    if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                        days[index].innerHTML = '<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">';
                                    }
                                });
                            }
    
                        }
                        let dateInfo = [];  //存取本月
                        td.forEach(function(td,index){
                            const iElement = td.querySelector('i.bi.bi-calendar-x-fill.text-danger');
                            if (iElement) {
                                    dateInfo.push({day:index, hasIcon: true });
                            } else {
                                    dateInfo.push({day:index, hasIcon: false });
                            }
                        })                        
                        months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
    
    
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
                                for (var i = 1; i <= monthDays[thisMonth]; i++) {    //渲染
                                    var index = firstDateDayOfThisMonth + i - 2;
    
                                    if (index >= 0 && index < days.length) {
                                        if(seeMonth == useMonth){
                                            days[index].innerHTML = i;
                                            otherdate.forEach(function(a) {  //被預約
                                                let useday = a.split("/")[1];
                                                let useMonth = a.split("/")[0];
                                                if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                    days[index].innerHTML = '<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>';
                                                }
                                            });
                                            okday.forEach(function(a) {  //可預約
                                                let useday = a.split("/")[1];
                                                let useMonth = a.split("/")[0];
                                                if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                    days[index].innerHTML = '<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">';
                                                }
                                            });
                                        }else{
                                           days[index].innerHTML = i;
                                           originalContents2[index] = i; //保存原有html 確保切換icon不會跑掉
                                           otherdate.forEach(function(a) {  //被預約
                                            let useday = a.split("/")[1];
                                            let useMonth = a.split("/")[0];
                                            if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                days[index].innerHTML = '<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>';
                                            }
                                            });
                                            okday.forEach(function(a) {  //可預約
                                                let useday = a.split("/")[1];
                                                let useMonth = a.split("/")[0];
                                                if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                    days[index].innerHTML = '<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">';
                                                }
                                            });
                                        }
                                    }
                                }
                                // updateDates();
                                months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
    
                                if(seeMonth == useMonth){//今天日期
                                    let newCurrentDayElement = days[firstDateDayOfThisMonth + to - 2];
                                    newCurrentDayElement.setAttribute("id", "current-day");
                                }
    
                        });
                        
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
                                    if(seeMonth == useMonth){
                                        days[index].innerHTML = i;
                                        otherdate.forEach(function(a) {  //被預約
                                            let useday = a.split("/")[1];
                                            let useMonth = a.split("/")[0];
                                            if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                days[index].innerHTML = '<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>';
                                            }
                                        });
                                        okday.forEach(function(a) {  //可預約
                                            let useday = a.split("/")[1];
                                            let useMonth = a.split("/")[0];
                                            if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                days[index].innerHTML = '<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">';
                                            }
                                        });
                                    }else{
                                       days[index].innerHTML = i;
                                       originalContents2[index] = i; //保存原有html 確保切換icon不會跑掉
                                       otherdate.forEach(function(a) {  //被預約
                                        let useday = a.split("/")[1];
                                        let useMonth = a.split("/")[0];
                                        if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                            days[index].innerHTML = '<i class="bi bi-calendar-x-fill d-flex justify-content-center text-danger"></i>';
                                        }
                                         });
                                         okday.forEach(function(a) {  //可預約
                                            let useday = a.split("/")[1];
                                            let useMonth = a.split("/")[0];
                                            if (parseInt(useday) === i && seeMonth===parseInt(useMonth)) { // 注意這裡使用 parseInt 將 useday 轉換為數字
                                                days[index].innerHTML = '<i class="bi bi-calendar2-check-fill d-flex justify-content-center text-info">';
                                            }
                                        });
                                    }
                                }
                            }
                            // updateDates();
                            months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;
    
                            if(seeMonth == useMonth){ //今天日期
                                let newCurrentDayElement = days[firstDateDayOfThisMonth + to - 2];
                                newCurrentDayElement.setAttribute("id", "current-day");
                            }
                        });
    
                        let dates = [] //push 要用的資料
                        const originalContents = [];
                        const originalContents2 = [];
    
    
                        //icon切換
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
                                        td.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>' ;
                                    }
                                }else{
                                    if (td.classList.contains("go")) {
                                        td.classList.remove("go");
                                        td.innerHTML = originalContents2[index];
                                        dates.pop();
                                        
    
                                    } else {
                                        dates.push(`${seeMonth}/${e.target.textContent}`)
                                        td.classList.add("go");
                                        td.innerHTML='<i class="bi bi-calendar2-check-fill text-info d-flex justify-content-center "></i>' ;
                                    }
                                }
                            
                            });
                        });
    
                       
    
                        //貼文切換
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
                                    noopen.classList.add('d-none')
                                } else {
                                    noopen.classList.add('d-none')
                                    reserve.classList.remove('d-none')
                                    personalMain.classList.add('d-none')
                                }
                            });
                        }
    
                            //修改資料
                            setting.addEventListener("click", function () {
                                let t1Value = t1.value || t1.placeholder;
                                let m1Value = m1.value || m1.placeholder;
                                let t2Value = t2.value || t2.placeholder;
                                let m2Value = m2.value || m2.placeholder;
                                ////////////////////////////////////////
                                let pos1 = p1.value|| p1.placeholder
                                let pos2 = p2.value|| p2.placeholder
                                let pos3 = p3.value|| p3.placeholder
                                let pos4 = p4.value|| p4.placeholder
                                let oktim = `${t1Value}:${m1Value}~${t2Value}:${m2Value}`
                                axios.patch(`http://localhost:3000/personal/${dataid}`, {
                                    "pos1": pos1,
                                    "pos2": pos2,
                                    "pos3":pos3,
                                    "pos4":pos4,
                                    "okday":dates,
                                    "oktime":oktim,
                                    
                                })
                           });
                            //關閉預約功能
                           close.addEventListener("click",function(){
                            axios.patch(`http://localhost:3000/personal/${dataid}`, {
                                "isopen": false,
                            })
                                .then(function (response) {
                                    noopen.classList.remove('d-none');
                                    reserve.classList.add('d-none');
                                    location.reload();
                                })
                           })
    
    
    
                    } else if (isopen !== true) {
                        //貼文切換
                        for (let i = 0; i < thumbLinks.length; i++) {
            
                            thumbLinks[i].addEventListener("click", function (event) {
                                event.preventDefault(); // 防止頁面跳轉
                        
                                for (let j = 0; j < thumbLinks.length; j++) {
                                    thumbLinks[j].querySelector('.thumb').classList.remove("active");
                                }
                        
                                this.querySelector('.thumb').classList.add("active");
                        
                                if (this.querySelector('.thumb').textContent === "貼文總覽") {
                                    personalMain.classList.remove('d-none')
                                    noopen.classList.add('d-none')
                                } else {
                                    noopen.classList.remove('d-none')
                                    personalMain.classList.add('d-none')
                                }
                            });
                        }
                        //為使用者開啟 預約功能
                        open.addEventListener("click", function () {
                            axios.patch(`http://localhost:3000/personal/${dataid}`,{
                                    "isopen": true,
                            })
                            .then(function () {
                                // 这里添加你的其他逻辑，包括 noopen.classList.add('d-none')
                                noopen.classList.add('d-none');
                                reserve.classList.remove('d-none')
                                location.reload();
                            })
                        });
                    }
                }

            })
            


        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();


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
}










// function setCookie(name, value, days) {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//     const cookieString = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
//     document.cookie = cookieString;
// }













