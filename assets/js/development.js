// const thumb = document.querySelectorAll(".thumb")
// const thumbLinks = document.querySelectorAll(".thumb-link");
// const search = document.querySelector(".search")
// const body = document.querySelector(".bodys")
// const header = document.querySelector("header")
// const toggle = document.querySelector("#toggle")
// const row = document.querySelector(".rows")

// // 當 search 元素被點擊時，防止事件冒泡
// search.addEventListener("click", function (event) {
//     event.stopPropagation();
// });


// for (let i = 0; i < thumbLinks.length; i++) {
//     thumbLinks[i].addEventListener("click", function (event) {

//         event.preventDefault(); // 防止頁面跳轉
//         for (let j = 0; j < thumbLinks.length; j++) {
//             thumbLinks[j].querySelector('.thumb').classList.remove("active");
//         }
//         this.querySelector('.thumb').classList.add("active");
//     });
// }



//     search.addEventListener('click', ()=>{
//         // event.preventDefault();
//         header.classList.toggle('sidebar-toggled');
//         const clickedElement = event.target;
        
//         // 如果點擊事件發生在 search 元素以外的地方
//         if (search.contains(clickedElement)) {
//             // 隱藏 search 元素
//             search.classList.add('d-none');
//             row.classList.remove('d-none')
//         }

//     })
//     body.addEventListener("click",function(){
//         const clickedElement = event.target;
//         if (!search.contains(clickedElement)) {
//             // 隱藏 search 元素
//             header.classList.remove('sidebar-toggled');
//             search.classList.remove('d-none');
//             row.classList.add('d-none')
//         }
        
    //}


        axios.get("http://localhost:3000/posts?_expand=user")
        .then(function(res){
            let postdata =res.data
            let userImage;
            let username ;
            let height;
            let weight
            const page = location.href.split("=")[1];
            document.querySelector(".post").innerHTML=`<div class="row justify-content-between post1">
                                                        </div>
                                                        <div class="row justify-content-between mt-5 post2">
                                                        </div>
                                                        <div class="row justify-content-between mt-5 post3">
                                                        </div>
                                                        <div class="pe-5 me-5 mt-5">
                                                        <nav aria-label="Page navigation example">
                                                        <ul class="pagination justify-content-lg-center my-3">
                                                            <li class="page-item"><a href="" class="page-link border-0 l"><i class="bi bi-chevron-left "></i></a></li>
                                                            <div class = "page d-flex">

                                                            </div>
                                                            <li class="page-item"><a href="" class="page-link border-0 r"><i class="bi bi-chevron-right"></i></a></li>
                                                        </ul>
                                                        </nav>
                                                        </div>
                                                    `


            const postsPerPage = 9;
            const postContainers = [".post1", ".post2", ".post3"];

            const startIndex = (page - 1) * postsPerPage;
                            
            // // 清空所有容器，只需要在分页循环外清空一次
            // postContainers.forEach(containerClass => {
            //     const container = document.querySelector(containerClass);
            //     container.innerHTML = '';
            // });
            const endIndex = startIndex + postsPerPage;
            for (let i = startIndex; i < endIndex && i < postdata.length; i++) {
                const postIndex = i % postsPerPage;
            
                // 通过嵌套循环，将每个容器的生成逻辑移到循环内部
                postContainers.forEach((containerClass, index) => {                                
                    if (postIndex >= index * (postsPerPage / postContainers.length) &&
                        postIndex < (index + 1) * (postsPerPage / postContainers.length)) {
                        const container = document.querySelector(containerClass);
                        const imgUrl = postdata[i].imgUrl;
                        

                        if (postdata[i].hasOwnProperty('user') && postdata[i].user.hasOwnProperty('image')) {
                            userImage = postdata[i].user.image;
                            username = postdata[i].user.name;
                            height = postdata[i].user.height
                            weight = postdata[i].user.weight
                          }
                        // console.log(`postIndex: ${postIndex}, index * (postsPerPage / postContainers.length): ${index * (postsPerPage / postContainers.length)}, (index + 1) * (postsPerPage / postContainers.length): ${(index + 1) * (postsPerPage / postContainers.length)}`);
                        container.innerHTML += `<div class="col-4">
                                                    <a href="" >
                                                        <div class="card card1" style="width: 350px; height: 450px;">
                                                            <img src="${imgUrl}" style="width: 350px; height: 350px;" class="object-fit-cover">
                                                            <div class="card-body ">
                                                                <div class="row">
                                                                    <div class="col mt-2 d-flex others">
                                                                        <div class="circle-box" style="width: 50px; height: 50px;background: url('${userImage}') center center / cover no-repeat;"></div>
                                                                        <div class="ms-2">
                                                                            <strong>${username}</strong>
                                                                            <p class="fs-6  text-nowrap" style="opacity: 0.4;">${height}cm ${weight}kg</p>
                                                                        </div>
                                                                    </div>
                                                                <div class="col-2 d-flex flex-row-reverse">
                                                                    <p class="bi bi-bookmark display-6 mt-2 love" ></p>
                                                                    <p class="bi bi-heart display-6 mt-2 me-3 collect" style="position: relative; top: 2px;" ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>`;
                }

                document.querySelector(".others").addEventListener("click",function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    var userId = res.data[i].userId;
                    console.log(userId)
                    // 使用 window.location.href 將頁面導航到另一個 URL，這裡的 URL 中包含 userId 參數
                    window.location.href = "http://localhost:5173/outfitpals/pages/others.html?userId=" + userId + "&page=1";
                })
            });
        }
        const one = document.querySelector(".page"); 
        let maxPages = 100; 
        if (postdata.length > 0) {
            one.innerHTML = '';
                for (let i = 1; i <= Math.min(maxPages, Math.ceil(postdata.length / 8)); i++) {
                    one.innerHTML += `<li class="page-item"><a href="#" class="page-link border-0">${i}</a></li>`;
                }
            }
            const l = document.querySelector(".l"); 
            const r = document.querySelector(".r"); 
            r.addEventListener("click", function(event) {
                const urlParams = new URLSearchParams(window.location.search);
                var currentPage = parseInt(urlParams.get('page')) || 1;
                var newPage = currentPage + 1;
                urlParams.set('page', newPage);
                // 构建新的URL
                var newUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();      
                // 通过替换当前页面历史记录来更新地址栏而不刷新页面
                window.history.replaceState({}, document.title, newUrl);
            });
            l.addEventListener("click", function(event) {
                const urlParams = new URLSearchParams(window.location.search);
                var currentPage = parseInt(urlParams.get('page')) || 1;
                if(currentPage > 1 ){
                    var newPage = currentPage - 1;
                    urlParams.set('page', newPage);
                    // 构建新的URL
                    var newUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();      
                    // 通过替换当前页面历史记录来更新地址栏而不刷新页面
                    window.history.replaceState({}, document.title, newUrl);
                }
    
            });
        


        
    })



    // axios.get(`http://localhost:3000/posts`)
    // .then(function(res){

    // })