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


function getData() {

    axios.get('http://localhost:3000/posts/1?_expand=user')
        .then(res => {
            let data = res.data;
            console.log(data);
            renderData(data);
        })
        .catch(error => {
            console.log(error.response);
        });
}

function renderData(data) {
    posterNickName.textContent = data.user[`nick name`];
    posterIntroduce.textContent = data.user.introduce;
    posterInfo.innerHTML = `<p class="posts__user__height ps-3 fs-9 fs-lg-7">${data.user.height}cm ${data.user.weight}kg</p>`;
    outfitStyle.textContent = data.outfitStyle;
    postImg.innerHTML = `<img src=${data.imgUrl} style="width: 500px; height: 440px;"
    class="postImg object-fit-cover">`;
    console.log(postImg);
    
    postTitle.textContent = data.title;
    postContent.textContent = data.body;
    posterMore.innerHTML = `<button type="button" class=" btn btn-primary fs-3 arrowBtn2">看更多${data.user[`nick name`]}的穿搭</button>`
    posterOther.innerHTML = `<h2 class="text-center ">查看${data.user[`nick name`]}的其他搭配</h2>`

    // 品牌渲染（最多兩個排版較合適）
    let str = '<p class=" fs-5 fs-lg-2 text-nowrap">服飾品牌</p>';
    data.brands.forEach(item => {
        str += `<button type="button" class="brands btn btn-primary btn-pill">${item}</button>`;
        console.log(str);
    });
    brands.innerHTML = str;
}
// getData();

// 測試收藏功能
function favoriteData() {

    axios.get('http://localhost:3000/favorites/2?_expand=user&_expand=post')
        .then(res => {
            let data = res.data;
            console.log(data);
        })
        .catch(error => {
            console.log(error.response);
        });
}
favoriteData()