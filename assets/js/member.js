// const { values } = require("json-server-auth");
//Google API
/*

    https://jwt.io/#debugger-io?token=%22eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1ZjRiZjQ2ZTUyYjMxZDliNjI0OWY3MzA5YWQwMzM4NDAwNjgwY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQ5NTI4MTYwNDI0NTA5NzYyODgiLCJlbWFpbCI6InRzYWkxOTkxMTAyNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk5MDMxNzgyLCJuYW1lIjoiQkYgVHNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJb1otNlRSUDV4N0ZsV09JQng1YXRVM3RYUi1Bck16SWZWWFRYRjR6SzljS0U9czk2LWMiLCJnaXZlbl9uYW1lIjoiQkYiLCJmYW1pbHlfbmFtZSI6IlRzYWkiLCJsb2NhbGUiOiJ6aC1UVyIsImlhdCI6MTY5OTAzMjA4MiwiZXhwIjoxNjk5MDM1NjgyLCJqdGkiOiJlNjk2YjU2MGUxZWRkYWUyNDQzNTA2MzgwZDk2ZmFkYmE4ZDkxNDlkIn0.PMJSUVhjIcSCRi0JAvzRpLwdVlecoKG2WVtqGHvF-SoyKXYuWcZiw6MZ5eqvW_Yc8DXLXxWGWzSSweQvpoQehoxrI063VB2czFH1MeLpXSMi1g79o5aVQWjAa5k8KObJ70QPApCiRMFwrsRqibDUyy6vpaTw2sgMKvBx1e6uS62bOLwQy7YC4mhjbOmp8qHcFcmg63eVbNZd_DdOS6nRVBNTipyLcw_uS6TdSClbtVqEyXU1aFPi2lKl6Ju4U50vq-arvV6HuiwvWBSQLEcgRO7D3ktkn7HERlPDS_wzKF-FCTYQDfxDgJMkYAdC8mu0erbjdpRhBJQu3qCG_2zIJg%22&publicKey=%7B%0A%20%20%22e%22%3A%20%22AQAB%22%2C%0A%20%20%22kty%22%3A%20%22RSA%22%2C%0A%20%20%22n%22%3A%20%22q5hcowR4IuPiSvHbwj9Rv9j2XRnrgbAAFYBqoLBwUV5GVIiNPKnQBYa8ZEIK2naj9gqpo3DU9lx7d7RzeVlzCS5eUA2LV94--KbT0YgIJnApj5-hyDIaevI1Sf2YQr_cntgVLvxqfW1n9ZvbQSitz5Tgh0cplZvuiWMFPu4_mh6B3ShEKIl-qi-h0cZJlRcIf0ZwkfcDOTE8bqEzWUvlCpCH9FK6Mo9YLjw5LroBcHdUbOg3Keu0uW5SCEi-2XBQgCF6xF3kliciwwnv2HhCPyTiX0paM_sT2uKspYock-IQglQ2TExoJqbYZe6CInSHiAA68fkSkJQDnuRZE7XTJQ%22%0A%7D

*/

//signIn signUp Btn
const signInBtn=document.querySelector('.signInBtn');
const signUpBtn=document.querySelector('.signUpBtn');
const gmailSignIn=document.querySelector('.gmailSignIn');
const gmailSignUp=document.querySelector('.gmailSignUp');
//member index input
const account=document.getElementById('account');
const pwd=document.getElementById('pwd');
//member signUp input
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
const memberSignUpSubmit=document.querySelector('.memberSignUpSubmit');
function checkSignInForm(){
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });
};
function checkSignUpForm(){
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    function IsEmail(email) {
        //正規表達式
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
        return false;
        }else{
        return true;
        };
    };
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            //customer 
            form.classList.add('was-validated');
            //check email
            if(!IsEmail(account.value)){
                account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                document.getElementById('account').nextElementSibling.textContent=`Email 格式錯誤`;
            }else{
                signUpMail.value=account.value;
            }
            account.addEventListener('input', event => {
                if(account.value===''){
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                    document.getElementById('account').nextElementSibling.textContent=`請輸入您的Email`;
                }else if (!IsEmail(account.value)) {
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                    document.getElementById('account').nextElementSibling.textContent=`Email 格式錯誤`;
                }else{
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url('../assets/images/member/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: none");
                    signUpMail.value=account.value;
                }
                
            }, false);
            account.addEventListener('paste', event => {
                //form.classList.add('was-validated');
                if(account.value===''){
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                    document.getElementById('account').nextElementSibling.textContent=`請輸入您的Email`;
                }else if (!IsEmail(account.value)) {
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                    document.getElementById('account').nextElementSibling.textContent=`Email 格式錯誤`;
                }else{
                    event.stopPropagation();
                    account.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url('../assets/images/member/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    document.getElementById('account').nextElementSibling.setAttribute("style","display: none");
                    signUpMail.value=account.value;
                }
                
            }, false);
            //check pwd
            const pwdRegExp=new RegExp('^[A-Z][A-Za-z0-9_]{7,}');
            if(pwd.value!==''&&!(pwdRegExp.test(pwd.value))){
                pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url(../assets/images/member/invalid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                pwd.nextElementSibling.textContent=`請輸入英文大寫為首，合計最少 8 位英數字`;
                pwd.nextElementSibling.setAttribute("style","display:block");
            }else{
                signUpPwd.value=pwd.value;
            }
            pwd.addEventListener('keyup',e=>{
                if(pwdRegExp.test(pwd.value)){
                    pwd.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url('../assets/images/member/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    pwd.nextElementSibling.setAttribute("style","display:none");
                    signUpPwd.value=pwd.value;
                }else{
                    pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url(../assets/images/member/invalid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    pwd.nextElementSibling.textContent=`請輸入英文大寫為首，合計最少 8 位英數字`;
                    pwd.nextElementSibling.setAttribute("style","display:block");
                }
            },false);
            pwd.addEventListener('paste',e=>{
                if(pwdRegExp.test(pwd.value)){
                    pwd.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url('../assets/images/member/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    pwd.nextElementSibling.setAttribute("style","display:none");
                    signUpPwd.value=pwd.value;
                }else{
                    pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);padding-right: calc(1.5em + 0.75rem);background-image: url(../assets/images/member/invalid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                    pwd.nextElementSibling.textContent=`請輸入英文大寫為首，合計最少 8 位英數字`;
                    pwd.nextElementSibling.setAttribute("style","display:block");
                }
            },false);
        }, false);
    });
};
const checkSignUp={
    regexp:new RegExp(''),
    checkName(str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]+$');
        if(this.regexp.test(str)){
            console.log('yes');
            return true;
        }else{
            console.log('err');
            return false;
        }
    },
    checkNickName(){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]+$');
        if(this.regexp.test(str)){
            console.log('yes');
            return true;
        }else{
            console.log('err');
            return false;
        }
    },
    checkBirth(){
        this.regexp=new RegExp('^[\\d]{4}/[\\d]{2\[\\d]{2}}$');
        if(this.regexp.test(str)){
            console.log('yes');
            return true;
        }else{
            console.log('err');
            return false;
        }
    },
    checkTel(){
        this.regexp=new RegExp('^09[\\d]{8}$');
        if(this.regexp.test(str)){
            console.log('yes');
            return true;
        }else{
            console.log('err');
            return false;
        }
    }
}
//signUp validation
function signUpValidation() {  
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
      
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');

            if (!form.checkValidity()||!checkSignUp.checkName(signUpName)||!checkSignUp.checkNickName(signUpNickName)||!checkSignUp.checkBirth(signUpBirth)||!checkSignUp.checkTel(signUpTel)) {
                signUpName.addEventListener('keyup',e=>{
                    checkSignUp.checkName(e.target.value);
                    checkSignUp.checkNickName(e.target.value);
                    checkSignUp.checkBirth(e.target.value);
                    checkSignUp.checkTel(e.target.value);
                });
                signUpName.addEventListener('paste',e=>{
                    checkSignUp.checkName(e.target.value);
                    checkSignUp.checkNickName(e.target.value);
                    checkSignUp.checkBirth(e.target.value);
                    checkSignUp.checkTel(e.target.value);
                });
            }
    
        }, false)
    });
};

checkSignInForm();
signInBtn.addEventListener('click',e=>{
    [...e.target.offsetParent.children].forEach(item=>{
        item.classList.remove('active');
    });
    memberIndexSubmit.textContent='登入';
    checkSignInForm();
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
    memberIndexSubmit.textContent='註冊';
    checkSignUpForm();
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

//signUp
//upload pic
const profileImage=document.getElementById('profileImage'); //input
let profilePhoto=document.querySelector('.profilePhoto'); //image
profileImage.addEventListener('change',e=>{
    let reader=new FileReader();
    reader.onload=(e)=>{
        profilePhoto.setAttribute("src",e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
});

memberSignUpSubmit.addEventListener('click',e=>{
    signUpValidation();
})