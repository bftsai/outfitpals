let outfitpalsToken = getCookie('outfitpalsToken')

const signupBtn = document.querySelector('.signupBtn')
const loginShow = document.querySelectorAll('.loginShow')

// 取出特定cookie的值，name記得帶字串
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
 
//   判斷是否有token，切換header樣式
if(outfitpalsToken) {
    signupBtn.classList.add('d-none')
    loginShow.forEach(item => {
        item.classList.remove('d-none')
    })
} else {
    signupBtn.classList.remove('d-none')
    loginShow.forEach(item => {
        item.classList.add('d-none')
})
}


//   判斷是否在貼文牆，切換header樣式
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/outfitpals/pages/development.html') {
        search.classList.remove('d-none');
        switchBar.classList.remove('d-none');
        switchBarHr.classList.remove('d-none');
    }
});

// 以下為搜尋列表顯示及隱藏
const header = document.querySelector("header")
const search = document.querySelector(".search") //搜尋Btn
const searchList = document.querySelector(".searchList")
const sidebar = document.querySelector(".sidebar")
const switchBar = document.querySelector(".switchBar")
const switchBarHr = document.querySelector(".switchBarHr")
const thumb = document.querySelectorAll(".thumb")
const thumbLinks = document.querySelectorAll(".thumb-link");
const toggle = document.querySelector("#toggle")
const row = document.querySelector(".rows")

// 當 search 元素被點擊時，防止事件冒泡
search.addEventListener("click", function (event) {
    event.stopPropagation();
});


for (let i = 0; i < thumbLinks.length; i++) {
    thumbLinks[i].addEventListener("click", function (event) {

        event.preventDefault(); // 防止頁面跳轉
        for (let j = 0; j < thumbLinks.length; j++) {
            thumbLinks[j].querySelector('.thumb').classList.remove("active");
        }
        this.querySelector('.thumb').classList.add("active");
    });
}

    search.addEventListener('click', (event)=>{
        // event.preventDefault();
        header.classList.toggle('sidebar-toggled');
        const clickedElement = event.target;
        
        // 如果點擊事件發生在 search 元素以外的地方
        if (search.contains(clickedElement)) {
            // 隱藏 search 元素
            search.classList.add('d-none');
            // 顯示row元素
            row.classList.remove('d-none')
            sidebar.classList.remove('d-none')
        }

    })

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname === '/outfitpals/pages/development.html') {
            document.addEventListener("click",function(event){
                const clickedElement = event.target;
                if (!searchList.contains(clickedElement)) {
                    // 隱藏 search 元素
                    header.classList.remove('sidebar-toggled');
                    search.classList.remove('d-none');
                    row.classList.add('d-none')
                    sidebar.classList.add('d-none')
                }
            })
        }
    });