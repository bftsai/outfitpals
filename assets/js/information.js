//axios
import axios from 'axios';

const posterNickName = document.querySelector(".posterNickName");
const posterIntroduce = document.querySelector(".posterIntroduce");
const outfitStyle = document.querySelector(".outfitStyle");
const brands = document.querySelector(".brands");
const postImg = document.querySelector(".postImg");
const postTitle = document.querySelector(".postTitle");
const postContent = document.querySelector(".postContent");
const posterInfo = document.querySelector(".posterInfo");
const posterMore = document.querySelector(".posterMore");
const posterOther = document.querySelector(".posterOther");

const like = document.querySelector(".like");
const favorite = document.querySelector(".favorite");


const postrId = location.href.split("=")[1];

        axios.get(`http://localhost:3000/posts/${postrId}?_expand=user`)
        .then(res => {
            posterNickName.textContent = res.data.user.name;
            posterIntroduce.textContent = res.data.user.introduce;
            posterInfo.innerHTML = `<p class="posts__user__height ps-3 fs-9 fs-lg-7">${res.data.user.height}cm ${res.data.user.weight}kg</p>`;
            outfitStyle.textContent = res.data.outfitStyle;
            postImg.innerHTML = `<img src=${res.data.imgUrl} style="width: 500px; height: 440px;"
            class="postImg object-fit-cover">`;
            postTitle.textContent = res.data.title;
            postContent.textContent = res.data.body;
            posterMore.innerHTML = `<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${res.data.user.name}的穿搭</button>`
            posterOther.innerHTML = `<h2 class="text-center ">查看${res.data.user.name}的其他搭配</h2>`
            const sty = document.querySelector(".sty")
            const stys = res.data.brands;
               if(stys.length <2){
                   sty.innerHTML =` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill  ms-3">${stys[0]}</button>
                   </div>`
                   
               }else{
                   
                   sty.innerHTML = ` <p class="fs-3 d-flex justify-content-center ms-3">服飾品牌</p>
                   <div class="d-flex justify-content-center">
                       <button type="button" class="btn btn-primary btn-pill ms-3">${stys[0]}</button>
                   </div>        
                   <button type="button" class="btn btn-primary btn-pill mt-3 ms-3">${stys[1]}</button>`
   
               }
               let user = res.data.userId
               const reserve = document.querySelector(".reserve")
               reserve.addEventListener("click",function(){
                    window.location.href = "http://localhost:5173/outfitpals/pages/others.html?userId=" + user + "&page=1";
               })

               function showMore() {
                const longText = document.getElementById('longText');
                longText.style.maxHeight = 'none';
              }

        })
        



// 測試收藏功能
// function favoriteData() {

//     axios.get('http://localhost:3000/favorites/2?_expand=user&_expand=post')
//         .then(res => {
//             let data = res.data;
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error.response);
//         });
// }
// favoriteData()