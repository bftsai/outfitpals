//member pages
const memberIndex=document.querySelector('.member-index');
const memberIndexForm=document.querySelector('.memberIndexForm');
const memberSignUpData=document.querySelector('.member-signUpData');
const memberSignUpForm=document.querySelector('.memberSignUpForm');
const memberSignInProfile=document.querySelector('.member-signInProfile');
const memberSignInProfileForm=document.querySelector('.memberSignInProfileForm');
const memberSignInData=document.querySelector('.member-signInData');
const memberSignInForm=document.querySelector('.memberSignInForm');
//signIn signUp Btn
const signInBtn=document.querySelector('.signInBtn');
const signUpBtn=document.querySelector('.signUpBtn');
const gmailSignIn=document.querySelector('.gmailSignIn');
const gmailSignUp=document.querySelector('.gmailSignUp');
//member index input
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

//submit 
const memberIndexSubmit=document.querySelector('.memberIndexSubmit');
const memberIndexCancel=document.querySelector('.memberIndexCancel');
const memberSignUpSubmit=document.querySelector('.memberSignUpSubmit');

import { checkSign, signUpValidation } from './formValidation.js';
import { ajaxMember, cookieValue } from './ajaxMember.js';

//init
if(cookieValue('outfitpalsThirdParty')==='false'){
    if(cookieValue('outfitpalsToken')&&cookieValue('outfitpalsId')){
        memberIndex.classList.add('opacity-0');
        account.value='';
        pwd.value='';
        ajaxMember.renderMemberSignInProfileForm();
        memberIndex.classList.add('d-none');
        memberSignInProfile.classList.remove('d-none');
        memberSignInProfile.classList.remove('opacity-0');
    }
}
//sign index
signInBtn.addEventListener('click',e=>{
    [...e.target.offsetParent.children].forEach(item=>{
        item.classList.remove('active');
    });
    account.value='';
    pwd.value='';
    memberIndexSubmit.textContent='登入';  
    memberIndexForm.classList.remove('was-validated');
    account.classList.remove('is-invalid');
    account.setAttribute("style","");
    pwd.classList.remove('is-invalid');
    pwd.setAttribute("style","");  

    e.target.classList.add('active');
    gmailSignUp.classList.add('opacity-0');
    setTimeout(()=>{
        gmailSignUp.classList.add('d-none');
        gmailSignIn.classList.remove('d-none');
        setTimeout(() => {
            gmailSignIn.classList.remove('opacity-0');
        }, 0);
    },400);
});
signUpBtn.addEventListener('click',e=>{
    [...e.target.offsetParent.children].forEach(item=>{
        item.classList.remove('active');
    });
    account.value='';
    pwd.value='';
    memberIndexSubmit.textContent='註冊';
    memberIndexForm.classList.remove('was-validated');
    account.classList.remove('is-invalid');
    account.setAttribute("style","");
    pwd.classList.remove('is-invalid');
    pwd.setAttribute("style","");
    

    e.target.classList.add('active');
    gmailSignIn.classList.add('opacity-0');
    setTimeout(()=>{
        gmailSignIn.classList.add('d-none');
        gmailSignUp.classList.remove('d-none');
        setTimeout(() => {
            gmailSignUp.classList.remove('opacity-0');
        }, 0);
    },400);
    
});
memberIndexSubmit.addEventListener('click',e=>{
    e.preventDefault();
    e.stopPropagation();
    memberIndexForm.classList.add('was-validated');

    checkSign.checkAccount(account,account.value);
    checkSign.checkSignUpIndexPwd(pwd,pwd.value);
    account.addEventListener('keyup',e=>{
        checkSign.checkAccount(e.target,e.target.value);
    });
    account.addEventListener('paste',e=>{
        checkSign.checkAccount(e.target,e.target.value);
    });
    pwd.addEventListener('keyup',e=>{
        checkSign.checkSignUpIndexPwd(e.target,e.target.value);
    });
    pwd.addEventListener('paste',e=>{
        checkSign.checkSignUpIndexPwd(e.target,e.target.value);
    });
    
    if(checkSign.checkAccount(account,account.value)&&checkSign.checkSignUpIndexPwd(pwd,pwd.value)){
        let obj={};
        obj.email=account.value;
        obj.password=pwd.value;
        obj['third party']='false';

        if(signInBtn.className.includes('active')){
            ajaxMember.signIn(obj);
        }else{
            ajaxMember.register(obj);
        }
    }
});
memberIndexCancel.addEventListener('click',e=>{
    account.value='';
    pwd.value='';
});


//signUp
//upload pic
signUpImg.addEventListener('change',e=>{
    let reader=new FileReader();
    reader.addEventListener('load',e=>{
        signUpPhoto.setAttribute('src',e.target.result);
    });
    // 第二種寫法
    // reader.onload=(e)=>{
    //     signUpPhoto.setAttribute("src",e.target.result);
    // };
    reader.readAsDataURL(e.target.files[0]);
});

memberSignUpSubmit.addEventListener('click',e=>{
    e.preventDefault();
    e.stopPropagation();

    signUpValidation(signUpPhoto,signUpName,signUpPwd,signUpNickName,signUpBirth,signUpMail,signUpTel,signUpMale,signUpFemale,signUpReservationTime,signUpReservationLocation,signUpHeight,signUpWeight,signUpPopArea,signUpStyle,signUpOutfitPrice,signUpLoveStore,signUpIntroduce,memberSignUpForm);
});

memberSignInForm.addEventListener('click',e=>{
    const signInImg=document.getElementById('signInImg');
    const signInPhoto=document.querySelector('.signInPhoto');
    const signInPwd=document.getElementById('signInPwd');
    const signInMail=document.getElementById('signInMail');
    const signInName=document.getElementById('signInName');
    const signInNickName=document.getElementById('signInNickName');
    const signInBirth=document.getElementById('signInBirth');
    const signInTel=document.getElementById('signInTel');
    const signInMale=document.getElementById('signInMale');
    const signInFemale=document.getElementById('signInFemale');
    const signInReservationTime=document.getElementById('signInReservationTime');
    const signInReservationLocation=document.getElementById('signInReservationLocation');
    const signInHeight=document.getElementById('signInHeight');
    const signInWeight=document.getElementById('signInWeight');
    const signInPopArea=document.getElementById('signInPopArea');
    const signInStyle=document.getElementById('signInStyle');
    const signInOutfitPrice=document.getElementById('signInOutfitPrice');
    const signInLoveStore=document.getElementById('signInLoveStore');
    const signInIntroduce=document.getElementById('signInIntroduce');
    
    if(e.target.className.includes('memberSignInReviseSubmit')){
        e.preventDefault();
        e.stopPropagation();

        signUpValidation(signInPhoto,signInName,signInPwd,signInNickName,signInBirth,signInMail,signInTel,signInMale,signInFemale,signInReservationTime,signInReservationLocation,signInHeight,signInWeight,signInPopArea,signInStyle,signInOutfitPrice,signInLoveStore,signInIntroduce,memberSignInForm);
    }else if(e.target.className.includes('memberSignInReviseCancel')){
        location.href='http://localhost:5173/outfitpals/pages/member.html';
    }
},false);



// ajaxMember.delete(2)
// ajaxMember.signOut(4)
// axios.post(`${apiUrl}/register`,{
//     email: 'test@gamil.com',
//     "password": '123456789'
// })
//     .then(res=>{
//         console.log(res);
//     })
// const apiUrl='https://outfitpals-web-server.onrender.com/';
// axios.get(`${apiUrl}users`)
//     .then(res=>{
//         console.log(res);
//     })



