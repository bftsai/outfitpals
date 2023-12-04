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


    axios.get("http://localhost:3000/posts")
    .then(function(res){
        document.querySelector(".card1").innerHTML=`<img src="/assets/images/reserve/female-1.svg" style="width: 350px; height: 350px;"                 class="object-fit-cover">
                                    <div class="card-body ">
                                        <div class="row">
                                            <div class="col mt-2 d-flex others" onclick="handleCardClick(event)">
                                             <div class="circle-box" style="background-image: url('/assets/images/reserve/female-1.svg');"></div>
                                                <div class="ms-2">
                                                    <strong>${res.data[0].author}</strong>
                                                    <p>${res.data[0].body}</p>
                                                </div>
                                             </div>
                                            <div class="col-2 d-flex flex-row-reverse">
                                                <p class="bi bi-bookmark display-6 mt-2" onclick="handleIconClick(event)"></p>
                                                <p class="bi bi-heart display-6 mt-2 me-3" style="position: relative; top: 2px;" onclick="handleIconClick(event)"></p>
                                            </div>
                                        </div>
                                    </div>`

                                    var userId = res.data[0].userId;
                                    console.log(userId)
        document.querySelector(".others").addEventListener("click",function(){
            var userId = res.data[4].userId;
            console.log(userId)
            // 使用 window.location.href 將頁面導航到另一個 URL，這裡的 URL 中包含 userId 參數
            window.location.href = "http://localhost:5173/outfitpals/pages/others.html?userId=" + userId;
        })
        
    })