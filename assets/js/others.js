function handleUserIdParameter() {                               //提前選染url
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    // 在這裡可以根據 userId 做一些處理，例如發送請求獲取相應的數據
    console.log("userId from URL:", userId);

    // 在這裡可以執行相應的邏輯，例如渲染頁面
}

// 在頁面加載時執行處理 URL 中的 userId 參數
window.onload = handleUserIdParameter;

const thumbLinks = document.querySelectorAll(".thumb-link");
const thumb= document.querySelectorAll(".thumb");

const othersmain = document.querySelector("#othersmain")
const reserve = document.querySelector("#reserve")
const unopen = document.querySelector("#unopen")


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


const d1 = document.querySelector(".d1")                                         
const d2 = document.querySelector(".d2")                                              
const d3 = document.querySelector(".d3")                                              
const d4 = document.querySelector(".d4")                                              
const usetime = document.querySelector(".usetime")                                              
                                        
const bkdep = document.querySelector(".bkdep")     //查看其他人

const nologin = document.querySelector('#nologin');
const gologin = document.querySelector('#gologin');
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const myModa2 = new bootstrap.Modal(document.getElementById('myModa2'));

//個人資料渲染
const other = document.querySelector(".other")    


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




//123456@gmail.com
//26416387@gmail.com
function init(){                                        //登入器
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
const id = location.href.split("=")[1];


axios.get(`http://localhost:3000/users?id=${id}`)
.then(function(res){
    other.innerHTML=`<div class="col-6  d-flex">
                        <div class="circle-box" style="width: 150px; height: 150px;"></div>
                        <div class="d-flex position-relative">
                            <div>
                                <div class="row justify-content-center align-items-center" >
                                    <div class="col">
                                        <strong class="display-4 text-nowrap">${res.data[0].name}</strong>
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
                    <div class="col-3 d-flex align-items-center">
                        <div>
                            <p class="fs-2">服飾風格</p>
                            <div class="d-flex">
                                <button type="button" class="btn btn-primary btn-pill ms-3">${res.data[0].style}</button>
                            </div>
                            <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">OnniStyle</button>
                        </div>
                    </div>`
    
})



if (storedToken != null) {   //判斷登陸
        axios.get(`http://localhost:3000/personal?userId=${id}`)

        
        .then(function(res){

            if(res.data.length == 0){     //判斷是否第一次登陸
                nologin.addEventListener("click",function(){
                    myModa2.show();   
                })
            }
            const isopen =res.data[0].isopen;
            const otherdate = res.data[0].otherdate.split(",");
            const okday = res.data[0].okday;
            const dataid = res.data[0].id

            if (isopen === true) {  //判斷是否開預約
                usetime.textContent = `${res.data[0].oktime}`
                d1.innerHTML = `<label class="form-check-label d4" for="flexCheckDefault">${res.data[0].pos1}</label>`
                d2.innerHTML = `<label class="form-check-label d4" for="flexCheckDefault">${res.data[0].pos2}</label>`
                d3.innerHTML = `<label class="form-check-label d4" for="flexCheckDefault">${res.data[0].pos3}</label>`
                d4.innerHTML = `<label class="form-check-label d4" for="flexCheckDefault">${res.data[0].pos4}</label>`
            

            
            //本月渲染
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
            months.innerHTML = `<strong class="fs-2"  id="months">${thisYear}-${seeMonth}月</strong>`;

            let dateInfo = [];  //存取本月
            td.forEach(function(td,index){
                const iElement = td.querySelector('i.bi.bi-calendar-x-fill.text-danger');
                if (iElement) {
                        dateInfo.push({day:index, hasIcon: true });
                } else {
                         dateInfo.push({day:index, hasIcon: false });
                }
            })
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
                            td.innerHTML='<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center"</i>' ;
                        }
                    }else{
                        if (td.classList.contains("go")) {
                            td.classList.remove("go");
                            td.innerHTML = originalContents2[index];
                            dates.pop();
                            

                        } else {
                            dates.push(`${seeMonth}/${e.target.textContent}`)
                            td.classList.add("go");
                            td.innerHTML='<i class="bi bi-calendar-plus-fill text-warning d-flex justify-content-center"</i>' ;
                        }
                    }
                
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
            //發送預約
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

            //貼文總覽切換
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
                        unopen.classList.add('d-none')
                    } else {
                        reserve.classList.remove('d-none')
                        othersmain.classList.add('d-none')
                        unopen.classList.add('d-none')
                    }
                });
            }

            //push 到 json
            let alltoala = []
            go.addEventListener("click",function(){
                let location = []
                let want = text.value
                let postTime= new Date().toUTCString()

                let reservationTime =`${thisYear}年 ${dates} ${oc1.value}:${mu1.value}~${oc2.value}:${mu2.value}`
                checkboxElements.forEach(function (checkbox, index) {
                    if (checkbox.checked) {
                        var labelElement = document.querySelector('.d' + (index + 1));
                        location.push(labelElement.innerText.trim()) 
                    }
                });
                
                let dat = {

                    "posterId": id, //貼文id 
                    "userId": userId, //留言者id 
                    "body": want, //留言內容
                    "reservationTime": reservationTime, //留言預約時間
                    "location": location, //留言碰面地址
                    "state": false, //預約狀態，預設都給boolean 值false
                    "postTime": postTime //留言時間，麻煩要先轉到 UTCstring

                }
                alltoala.push(dat)

                ans.innerHTML = `<p>${want}</p>`
            })
            // axios.post("http://localhost:3000/reserve" , alltoala)     
             console.log(alltoala)


            //判斷是否開預約
            }else if (isopen !== true) {
                //貼文總覽切換
                for (let i = 0; i < thumbLinks.length; i++) {
    
                    thumbLinks[i].addEventListener("click", function (event) {
                        event.preventDefault(); // 防止頁面跳轉
                
                        for (let j = 0; j < thumbLinks.length; j++) {
                            thumbLinks[j].querySelector('.thumb').classList.remove("active");
                        }
                
                        this.querySelector('.thumb').classList.add("active");
                
                        if (this.querySelector('.thumb').textContent === "貼文總覽") {
                            othersmain.classList.remove('d-none')
                            unopen.classList.add('d-none')
                        } else {
                            unopen.classList.remove('d-none')
                            othersmain.classList.add('d-none')
                        }
                    });
                }

                bkdep.addEventListener("click",function(){
                    window.location.href = "http://localhost:5173/outfitpals/pages/development.html";
                })

            }
        })
//判斷登陸

}else{

    nologin.addEventListener("click",function(){
        myModal.show();
        
    })
    
    gologin.addEventListener("click",function(){
        window.location.href = "http://localhost:5173/outfitpals/pages/member.html";
    })

}








