const thumb = document.querySelectorAll(".thumb")
const thumbLinks = document.querySelectorAll(".thumb-link");
const search = document.querySelector(".search")
const body = document.querySelector(".bodys")
const header = document.querySelector("header")
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



    search.addEventListener('click', ()=>{
        // event.preventDefault();
        header.classList.toggle('sidebar-toggled');
        const clickedElement = event.target;
        
        // 如果點擊事件發生在 search 元素以外的地方
        if (search.contains(clickedElement)) {
            // 隱藏 search 元素
            search.classList.add('d-none');
            row.classList.remove('d-none')
        }

    })
    body.addEventListener("click",function(){
        const clickedElement = event.target;
        if (!search.contains(clickedElement)) {
            // 隱藏 search 元素
            header.classList.remove('sidebar-toggled');
            search.classList.remove('d-none');
            row.classList.add('d-none')
        }
        
    })
