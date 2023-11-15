/*
    JWT 線上編譯網站
    https://jwt.io/#debugger

    [JS] Google 第三方登入 API - GSI
    https://vii120.coderbridge.io/2022/06/23/google-signin-gsi/

    JWT JS 解碼教學
    https://stackoverflow.com/questions/63202266/how-to-extract-full-information-of-the-users-using-google-one-tap-signin

    npm install jwt-decode 專門解碼 JWT (待驗證)
    https://www.npmjs.com/package/jwt-decode
*/
//axios
//json-server
const apiUrl='http://localhost:3000/';
//member pages
const memberIndex=document.querySelector('.member-index');
const memberSignUpData=document.querySelector('.member-signUpData');
//signUp index
//signIn signUp Btn
const signInBtn=document.querySelector('.signInBtn');
const signUpBtn=document.querySelector('.signUpBtn');
const account=document.getElementById('account');
const pwd=document.getElementById('pwd');
//member signUp input
const profileImage=document.getElementById('profileImage'); //input
let profilePhoto=document.querySelector('.profilePhoto'); //image
const signUpPwd=document.getElementById('signUpPwd');
const signUpMail=document.getElementById('signUpMail');
const signUpName=document.getElementById('signUpName');
const signUpNickName=document.getElementById('signUpNickName');
const signUpBirth=document.getElementById('signUpBirth');
const signUpTel=document.getElementById('signUpTel');
const signUpMale=document.getElementById('signUpMale');
const signUpFemale=document.getElementById('signUpFemale');
const signUpReservationTime=document.getElementById('signUpReservationTime');
const signUpReservationLocation=document.getElementById('signUpReservationLocation');
const signUpHeight=document.getElementById('signUpHeight');
const signUpWeight=document.getElementById('signUpWeight');
const signUpPopArea=document.getElementById('signUpPopArea');
const signUpStyle=document.getElementById('signUpStyle');
const signUpOutfitPrice=document.getElementById('signUpOutfitPrice');
const signUpLoveStore=document.getElementById('signUpLoveStore');
const signUpIntroduce=document.getElementById('signUpIntroduce');
//ajax
const ajax={
    async register(obj){
        try {
            const register=await axios.post(`${apiUrl}register`,obj);
            localStorage.outfitpalsToken=register.data.accessToken;
            if(register.status===201){
                signUpMail.value=obj.email;
                signUpPwd.value=obj.password;
                profilePhoto.setAttribute('src',obj.image);
                signUpName.value=obj.name;
                signUpNickName.value=obj['nick name'];

                memberIndex.classList.add('opacity-0');
                setTimeout(() => {
                    account.value='';
                    pwd.value='';
                    memberIndex.classList.add('d-none');
                    memberSignUpData.classList.remove('d-none');
                    setTimeout(() => {
                        memberSignUpData.classList.remove('opacity-0')
                    }, 0);
                }, 400);
            }
        } catch (err) {
            console.log(err);
            alert('google 帳號已被使用');
        }
    },
    async patchUsers(obj){
        let id=0;
        const getUsers=(await axios.get(`${apiUrl}users`)).data;
        getUsers.forEach(item=>{
            if(item.email===obj.email){
                id=item.id;
            }
        });
        const patchUsers=await axios.patch(`${apiUrl}users/${id}`,obj)
    },
    async signIn(){
        const signIn=await axios.post(`${apiUrl}signin`,obj);
    },
    async delete(id){
        try {
            const deleted=await axios.delete(`${apiUrl}users/${id}`);
        } catch (err) {
            console.log(err);
        }
    }
};
// Google third party login
function onSignIn(response){
    var base64Url = response.credential.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(response);
    console.log(JSON.parse(jsonPayload));
    window.localStorage.googleToken=response.credential;

    if(signInBtn.className.includes('active')){

    }else{
        let signObj={};
        signObj.email=JSON.parse(jsonPayload).email;
        signObj.password=`Google${JSON.parse(jsonPayload).sub}`;
        signObj.image=JSON.parse(jsonPayload).picture;
        signObj.name=JSON.parse(jsonPayload).name;
        signObj['nick name']=JSON.parse(jsonPayload).given_name;

        ajax.register(signObj);
    }
};
const gmailSignUp=document.querySelector('.gmailSignUp');
gmailSignUp.addEventListener('click',e=>{
    console.log('gmailSignUp');
})



//console.log(signInBtn.className.includes('active'));



