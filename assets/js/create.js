//axios
import axios from 'axios';

const addTitle = document.querySelector('.addTitle')
const addBody = document.querySelector('.addBody')
const addOutfitStyle = document.querySelector('.addOutfitStyle')
const addBrands = document.querySelector('.addBrands')
const createPost = document.querySelector('.createPost')
const outfitpalsId = getCookie('outfitpalsId')
console.log(outfitpalsId);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

//upload pic
const upLoadImg=document.getElementById('upLoadImg'); //input btn
let upLoadPhoto=document.querySelector('.upLoadPhoto'); //image

upLoadImg.addEventListener('change',e=>{  
    let reader=new FileReader();
    reader.addEventListener('load',e=>{
        upLoadPhoto.setAttribute('src',e.target.result);    
        console.log(upLoadPhoto.getAttribute('src'));
    });
    reader.readAsDataURL(e.target.files[0]);
    
});


createPost.addEventListener('click',function(e){
    let obj = {
        "title": addTitle.value,
        "body": addBody.value,
        "imgUrl": upLoadPhoto.getAttribute('src'),
        "userId": outfitpalsId,
        "postTime": new Date().toUTCString(),
        "likeCounts": 0,
        "favoriteCounts": 0,
        "outfitStyle": addOutfitStyle.value,
        "brands": addBrands.value
    }
    console.log(obj);
    createPosts(obj)
})

function createPosts(obj){

    axios.post('http://localhost:3000/posts', obj)
    .then(res => {
        console.log(`建立貼文成功`);
        console.log(res);
    })
    .catch(error => {
        console.log(error.response);
    });
}