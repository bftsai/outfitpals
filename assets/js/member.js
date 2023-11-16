// const { values } = require("json-server-auth");
//Google API
/*

    https://jwt.io/#debugger-io?token=%22eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1ZjRiZjQ2ZTUyYjMxZDliNjI0OWY3MzA5YWQwMzM4NDAwNjgwY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQ5NTI4MTYwNDI0NTA5NzYyODgiLCJlbWFpbCI6InRzYWkxOTkxMTAyNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk5MDMxNzgyLCJuYW1lIjoiQkYgVHNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJb1otNlRSUDV4N0ZsV09JQng1YXRVM3RYUi1Bck16SWZWWFRYRjR6SzljS0U9czk2LWMiLCJnaXZlbl9uYW1lIjoiQkYiLCJmYW1pbHlfbmFtZSI6IlRzYWkiLCJsb2NhbGUiOiJ6aC1UVyIsImlhdCI6MTY5OTAzMjA4MiwiZXhwIjoxNjk5MDM1NjgyLCJqdGkiOiJlNjk2YjU2MGUxZWRkYWUyNDQzNTA2MzgwZDk2ZmFkYmE4ZDkxNDlkIn0.PMJSUVhjIcSCRi0JAvzRpLwdVlecoKG2WVtqGHvF-SoyKXYuWcZiw6MZ5eqvW_Yc8DXLXxWGWzSSweQvpoQehoxrI063VB2czFH1MeLpXSMi1g79o5aVQWjAa5k8KObJ70QPApCiRMFwrsRqibDUyy6vpaTw2sgMKvBx1e6uS62bOLwQy7YC4mhjbOmp8qHcFcmg63eVbNZd_DdOS6nRVBNTipyLcw_uS6TdSClbtVqEyXU1aFPi2lKl6Ju4U50vq-arvV6HuiwvWBSQLEcgRO7D3ktkn7HERlPDS_wzKF-FCTYQDfxDgJMkYAdC8mu0erbjdpRhBJQu3qCG_2zIJg%22&publicKey=%7B%0A%20%20%22e%22%3A%20%22AQAB%22%2C%0A%20%20%22kty%22%3A%20%22RSA%22%2C%0A%20%20%22n%22%3A%20%22q5hcowR4IuPiSvHbwj9Rv9j2XRnrgbAAFYBqoLBwUV5GVIiNPKnQBYa8ZEIK2naj9gqpo3DU9lx7d7RzeVlzCS5eUA2LV94--KbT0YgIJnApj5-hyDIaevI1Sf2YQr_cntgVLvxqfW1n9ZvbQSitz5Tgh0cplZvuiWMFPu4_mh6B3ShEKIl-qi-h0cZJlRcIf0ZwkfcDOTE8bqEzWUvlCpCH9FK6Mo9YLjw5LroBcHdUbOg3Keu0uW5SCEi-2XBQgCF6xF3kliciwwnv2HhCPyTiX0paM_sT2uKspYock-IQglQ2TExoJqbYZe6CInSHiAA68fkSkJQDnuRZE7XTJQ%22%0A%7D

*/

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

import { checkSign,signUpValidation } from './formValidation.js';
import { ajaxMember } from './ajaxMember.js';

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

    checkSign.checkAccount(account.value);
    checkSign.checkSignUpIndexPwd(pwd.value);
    account.addEventListener('keyup',e=>{
        checkSign.checkAccount(e.target.value);
    });
    account.addEventListener('paste',e=>{
        checkSign.checkAccount(e.target.value);
    });
    pwd.addEventListener('keyup',e=>{
        checkSign.checkSignUpIndexPwd(e.target.value);
    });
    pwd.addEventListener('paste',e=>{
        checkSign.checkSignUpIndexPwd(e.target.value);
    });
    
    if(checkSign.checkAccount(account.value)&&checkSign.checkSignUpIndexPwd(pwd.value)){
        let obj={};
        obj.email=account.value;
        obj.password=pwd.value;

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
    //https://bftsai.github.io/outfitpals/index.html
    location.href='https://bftsai.github.io/outfitpals/index.html';
});


//signUp
//upload pic
signUpImg.addEventListener('change',e=>{
    let reader=new FileReader();
    reader.onload=(e)=>{
        signUpPhoto.setAttribute("src",e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
});

memberSignUpSubmit.addEventListener('click',e=>{
    e.preventDefault();
    e.stopPropagation();
    signUpValidation();
});

memberSignInProfileForm.addEventListener('click',e=>{
    //revice profile
    if(e.target.className.includes('memberSignInProfileRevise')){
        console.log(ajaxMember.data);
        ajaxMember.renderMemberSignInForm();
        memberSignInProfile.classList.add('opacity-0');
        setTimeout(() => {
            memberSignInProfile.classList.add('d-none');
            memberSignInData.classList.remove('d-none');
            setTimeout(() => {
                memberSignInData.classList.remove('opacity-0');
            }, 0);
        }, 400);
    }
});



// ajaxMember.delete(2)
// axios.post(`${apiUrl}/register`,{
//     email: 'test@gamil.com',
//     "password": '123456789'
// })
//     .then(res=>{
//         console.log(res);
//     })
// axios.get(`${apiUrl}users`)
//     .then(res=>{
//         console.log(res.data[1]['sign time']);
//     })