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
const memberIndexForm=document.querySelector('.memberIndexForm');
const memberSignUpData=document.querySelector('.member-signUpData');
const memberSignUpForm=document.querySelector('.memberSignUpForm');
const memberSignInProfile=document.querySelector('.member-signInProfile');
const memberSignInProfileForm=document.querySelector('.memberSignInProfileForm');
const memberSignInData=document.querySelector('.member-signInData');
const memberSignInForm=document.querySelector('.memberSignInForm');
//signUp index
//signIn signUp Btn
const signInBtn=document.querySelector('.signInBtn');
const signUpBtn=document.querySelector('.signUpBtn');
const account=document.getElementById('account');
const pwd=document.getElementById('pwd');
//member signUp input
const signUpImg=document.getElementById('signUpImg'); //input
let signUpPhoto=document.querySelector('.signUpPhoto'); //image
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
//member signIn
const signInPhoto=document.querySelector('.signInPhoto') //img
const signInImg=document.getElementById('signInImg') //input
const signInName=document.querySelector('.signInName');
const signInPwd=document.querySelector('.signInPwd');
const signInNickName=document.querySelector('.signInNickName');
const signInBirth=document.querySelector('.signInBirth');
const signInMail=document.querySelector('.signInMail');
const signInTel=document.querySelector('.signInTel');
const signInMale=document.querySelector('.signInMale');
const signInFemale=document.querySelector('.signInFemale');
const signInReservationTime=document.querySelector('.signInReservationTime');
const signInReservationLocation=document.querySelector('.signInReservationLocation');
const signInHeight=document.querySelector('.signInHeight');
const signInWeight=document.querySelector('.signInWeight');
const signInPopArea=document.querySelector('.signInPopArea');
const signInStyle=document.querySelector('.signInStyle');
const signInOutfitPrice=document.querySelector('.signInOutfitPrice');
const signInLoveStore=document.querySelector('.signInLoveStore');
const signInIntroduce=document.querySelector('.signInIntroduce');

//ajax
const ajax={
    data:[],
    async register(obj){
        try {
            const register=await axios.post(`${apiUrl}register`,obj);
            if(register.status===201){
                await this.patchUsers({
                    "sign time": `${new Date()}`,
                    email: obj.email,
                    "third party": "google"
                });
                localStorage.outfitpalsToken=register.data.accessToken;
                signUpMail.value=obj.email;
                signUpPwd.value=obj.password;
                signUpPhoto.setAttribute('src',obj.image);
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
    async signIn(obj){
        try {
            const signIn=await axios.post(`${apiUrl}signin`,obj);
            if(signIn.status===200){
                console.log(signIn);
                localStorage.outfitpalsToken=signIn.data.accessToken;
                this.data=signIn.data.user;

                memberIndex.classList.add('opacity-0');
                setTimeout(() => {
                    account.value='';
                    pwd.value='';
                    memberIndex.classList.add('d-none');
                    memberSignInProfile.classList.remove('d-none');
                    setTimeout(() => {
                        memberSignInProfile.classList.remove('opacity-0')
                    }, 0);
                }, 400);
                this.renderMemberSignInProfileForm();
                //location.href='https://bftsai.github.io/outfitpals/index.html';
            }
        } catch (err) {
            alert(err.response.data);
        }
    },
    renderMemberSignInProfileForm(){
        let str=`
        <div class="row mb-3 fs-lg-5">
            <div class="col">
                <div class="mb-3 d-flex flex-column align-items-center">
                    <img class="mb-3" src="${this.data.image}" alt="profile pic" style="width: 80px;height: 80px;border-radius: 50%;">
                </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5 fs-lg=5">
            <div class="col-4 col-lg-2">
                <p>姓名</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.name}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>密碼</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">********</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>暱稱</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['nick name']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>生日</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.birthday}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>電子信箱</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.email}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>手機號碼</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.tel}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>性別</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.sex}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約時間</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['reservation time']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約地點</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['reservation location']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>身高</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.height}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>體重</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.weight}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>活動範圍</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.PopArea}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>打扮風格</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.style}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>穿搭價位</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['outfit price']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>逛街愛店</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['love store']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>自我介紹</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.introduce}</p>
            </div>
        </div>`;
      memberSignInProfileForm.innerHTML=str;
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

    let signObj={};
    if(signInBtn.className.includes('active')){
        signObj.email=JSON.parse(jsonPayload).email;
        signObj.password=`Google${JSON.parse(jsonPayload).sub}`;

        ajax.signIn(signObj);
    }else{
        signObj.email=JSON.parse(jsonPayload).email;
        signObj.password=`Google${JSON.parse(jsonPayload).sub}`;
        signObj.image=JSON.parse(jsonPayload).picture;
        signObj.name=JSON.parse(jsonPayload).name;
        signObj['nick name']=JSON.parse(jsonPayload).given_name;

        ajax.register(signObj);
    }
};
const gmailSignUp=document.querySelector('.gmailSignUp');

