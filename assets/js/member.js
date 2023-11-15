// const { values } = require("json-server-auth");
//Google API
/*

    https://jwt.io/#debugger-io?token=%22eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1ZjRiZjQ2ZTUyYjMxZDliNjI0OWY3MzA5YWQwMzM4NDAwNjgwY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NzA2MTcyNDQ5ODktc2JpZzRlM2YzbjBxMGcxdjRjNzMwdGN0ODdmbmc2OTguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQ5NTI4MTYwNDI0NTA5NzYyODgiLCJlbWFpbCI6InRzYWkxOTkxMTAyNkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk5MDMxNzgyLCJuYW1lIjoiQkYgVHNhaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJb1otNlRSUDV4N0ZsV09JQng1YXRVM3RYUi1Bck16SWZWWFRYRjR6SzljS0U9czk2LWMiLCJnaXZlbl9uYW1lIjoiQkYiLCJmYW1pbHlfbmFtZSI6IlRzYWkiLCJsb2NhbGUiOiJ6aC1UVyIsImlhdCI6MTY5OTAzMjA4MiwiZXhwIjoxNjk5MDM1NjgyLCJqdGkiOiJlNjk2YjU2MGUxZWRkYWUyNDQzNTA2MzgwZDk2ZmFkYmE4ZDkxNDlkIn0.PMJSUVhjIcSCRi0JAvzRpLwdVlecoKG2WVtqGHvF-SoyKXYuWcZiw6MZ5eqvW_Yc8DXLXxWGWzSSweQvpoQehoxrI063VB2czFH1MeLpXSMi1g79o5aVQWjAa5k8KObJ70QPApCiRMFwrsRqibDUyy6vpaTw2sgMKvBx1e6uS62bOLwQy7YC4mhjbOmp8qHcFcmg63eVbNZd_DdOS6nRVBNTipyLcw_uS6TdSClbtVqEyXU1aFPi2lKl6Ju4U50vq-arvV6HuiwvWBSQLEcgRO7D3ktkn7HERlPDS_wzKF-FCTYQDfxDgJMkYAdC8mu0erbjdpRhBJQu3qCG_2zIJg%22&publicKey=%7B%0A%20%20%22e%22%3A%20%22AQAB%22%2C%0A%20%20%22kty%22%3A%20%22RSA%22%2C%0A%20%20%22n%22%3A%20%22q5hcowR4IuPiSvHbwj9Rv9j2XRnrgbAAFYBqoLBwUV5GVIiNPKnQBYa8ZEIK2naj9gqpo3DU9lx7d7RzeVlzCS5eUA2LV94--KbT0YgIJnApj5-hyDIaevI1Sf2YQr_cntgVLvxqfW1n9ZvbQSitz5Tgh0cplZvuiWMFPu4_mh6B3ShEKIl-qi-h0cZJlRcIf0ZwkfcDOTE8bqEzWUvlCpCH9FK6Mo9YLjw5LroBcHdUbOg3Keu0uW5SCEi-2XBQgCF6xF3kliciwwnv2HhCPyTiX0paM_sT2uKspYock-IQglQ2TExoJqbYZe6CInSHiAA68fkSkJQDnuRZE7XTJQ%22%0A%7D

*/

//member pages
const memberIndex=document.querySelector('.member-index');
const memberIndexForm=document.querySelector('.memberIndexForm');
const memberSignUpData=document.querySelector('.member-signUpData');
const memberSignUpForm=document.querySelector('.memberSignUpData');
//signIn signUp Btn
const signInBtn=document.querySelector('.signInBtn');
const signUpBtn=document.querySelector('.signUpBtn');
const gmailSignIn=document.querySelector('.gmailSignIn');
const gmailSignUp=document.querySelector('.gmailSignUp');
//member index input
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

//submit 
const memberIndexSubmit=document.querySelector('.memberIndexSubmit');
const memberIndexCancel=document.querySelector('.memberIndexCancel');
const memberSignUpSubmit=document.querySelector('.memberSignUpSubmit');
//signIn validation
function checkSignInForm(){
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            event.stopPropagation();
            form.classList.add('was-validated');
            account.addEventListener('keyup',e=>{
                checkSign.checkMail(e.target.value);
            });
            account.addEventListener('paste',e=>{
                checkSign.checkMail(e.target.value);
            });
            pwd.addEventListener('keyup',e=>{
                checkSign.checkMail(e.target.value);
            });
            pwd.addEventListener('paste',e=>{
                checkSign.checkMail(e.target.value);
            });
        }, false);
    });
};
//axios
//json-server
const apiUrl='http://localhost:3000/';
const ajax={
    async register(obj){
        try {
            const register=await axios.post(`${apiUrl}register`,obj);
            localStorage.outfitpalsToken=register.data.accessToken;
            if(register.status==201){
                signUpMail.value=account.value;
                signUpPwd.value=pwd.value;
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
            console.log(err.response);
            memberIndexForm.classList.add('was-validated');
            account.classList.add('is-invalid');
            account.nextElementSibling.textContent=err.response.data;
            account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
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
//check validation tool
const checkSign={
    regexp:new RegExp(''),
    checkAccount(str){
        this.regexp=new RegExp('^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$');
        if(str===''){
            account.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            account.classList.add('is-invalid');
            account.nextElementSibling.textContent=`格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）`;
            account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            account.classList.remove('is-invalid');
            account.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkSignUpIndexPwd(str){
        this.regexp=new RegExp('^[A-Z][\\d\\w]{7,}$');
        if(str===''){
            pwd.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            pwd.classList.add('is-invalid');
            pwd.nextElementSibling.textContent=`格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字`;
            pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            pwd.classList.remove('is-invalid');
            pwd.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkMail(str){
        this.regexp=new RegExp('^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$');
        if(str===''){
            signUpMail.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpMail.classList.add('is-invalid');
            signUpMail.nextElementSibling.textContent=`格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）`;
            signUpMail.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpMail.classList.remove('is-invalid');
            signUpMail.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkPwd(str){
        this.regexp=new RegExp('^[A-Z][\\d\\w]{7,}$');
        if(str===''){
            pwd.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            pwd.classList.add('is-invalid');
            pwd.nextElementSibling.textContent=`格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字`;
            pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            pwd.classList.remove('is-invalid');
            pwd.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkName(str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]{5,}$');
        if(str===''){
            signUpName.nextElementSibling.textContent=`請輸入姓名`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpName.classList.add('is-invalid');
            signUpName.nextElementSibling.textContent=`格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）`;
            signUpName.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpName.classList.remove('is-invalid');
            signUpName.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkNickName(str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\\d\x20]{1,}$');
        if(str===''){
            signUpNickName.nextElementSibling.textContent=`請輸入暱稱`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpNickName.classList.add('is-invalid');
            signUpNickName.nextElementSibling.textContent=`格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）`;
            signUpNickName.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpNickName.classList.remove('is-invalid');
            signUpNickName.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkBirth(str){
        this.regexp=new RegExp('^[\\d]{4}-[\\d]{2}-[\\d]{2}$');
        if(str===''){
            signUpBirth.nextElementSibling.textContent=`請輸入生日`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpBirth.classList.add('is-invalid');
            signUpBirth.nextElementSibling.textContent=`格式錯誤，請輸入西元年/月/日`;
            signUpBirth.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpBirth.classList.remove('is-invalid');
            signUpBirth.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkTel(str){
        this.regexp=new RegExp('^09[\\d]{8}$');
        if(str===''){
            signUpTel.nextElementSibling.textContent=`請輸入手機號碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpTel.classList.add('is-invalid');
            signUpTel.nextElementSibling.textContent=`格式錯誤，格式為0912345678`;
            signUpTel.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpTel.classList.remove('is-invalid');
            signUpTel.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkReservationLocation(str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]{2,}$');
        if(str===''){
            signUpReservationLocation.nextElementSibling.textContent=`請輸入開放預約地點`;
            return false;
        }else if(!(this.regexp.test(str))){
            signUpReservationLocation.classList.add('is-invalid');
            signUpReservationLocation.nextElementSibling.textContent=`格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）`;
            signUpReservationLocation.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            signUpReservationLocation.classList.remove('is-invalid');
            signUpReservationLocation.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    }
}
//signUp validation
function signUpValidation() {  
    
    memberSignUpForm.classList.add('was-validated');

    let memberObj={};

    signUpName.addEventListener('keyup',e=>{
        checkSign.checkName(e.target.value);
    });
    signUpName.addEventListener('paste',e=>{
        checkSign.checkName(e.target.value);
    });

    signUpNickName.addEventListener('keyup',e=>{
        checkSign.checkNickName(e.target.value);
    });
    signUpNickName.addEventListener('paste',e=>{
        checkSign.checkNickName(e.target.value);
    });

    signUpBirth.addEventListener('keyup',e=>{
        checkSign.checkBirth(e.target.value);
    });
    signUpBirth.addEventListener('paste',e=>{
        checkSign.checkBirth(e.target.value);
    });

    signUpMail.addEventListener('keyup',e=>{
        checkSign.checkMail(e.target.value);
    });
    signUpMail.addEventListener('paste',e=>{
        checkSign.checkMail(e.target.value);
    });

    signUpTel.addEventListener('keyup',e=>{
        checkSign.checkTel(e.target.value);
    });
    signUpTel.addEventListener('paste',e=>{
        checkSign.checkTel(e.target.value);
    });

    signUpReservationLocation.addEventListener('keyup',e=>{
        checkSign.checkReservationLocation(e.target.value);
    });
    signUpReservationLocation.addEventListener('paste',e=>{
        checkSign.checkReservationLocation(e.target.value);
    });
    
    if(checkSign.checkName(signUpName.value)&&checkSign.checkNickName(signUpNickName.value)&&checkSign.checkBirth(signUpBirth.value)&&checkSign.checkTel(signUpTel.value)&&checkSign.checkReservationLocation(signUpReservationLocation.value)&&memberSignUpForm.checkValidity()){
        console.log('all check');
        memberObj.image=profilePhoto.getAttribute('src');
        memberObj.name=signUpName.value;
        memberObj.password=signUpPwd.value;
        memberObj['nick name']=signUpNickName.value;
        memberObj.birthday=signUpBirth.value;
        memberObj.tel=signUpTel.value;
        memberObj.email=signUpMail.value;
        memberObj['reservation time']=signUpReservationTime.value;
        memberObj['reservation location']=signUpReservationLocation.value;
        memberObj.height=signUpHeight.value;
        memberObj.weight=signUpWeight.value;
        memberObj.PopArea=signUpPopArea.value;
        memberObj.style=signUpStyle.value;
        memberObj['outfit price']=signUpOutfitPrice.value;
        memberObj['love store']=signUpLoveStore.value;
        memberObj.introduce=signUpIntroduce.value;
        if(signUpMale.checked===true){
            memberObj.sex='male';
        }else{
            memberObj.sex='female';
        }
        ajax.patchUsers(memberObj);
        //https://bftsai.github.io/outfitpals/index.html
        location.href='http://localhost:5173/outfitpals/pages/index.html';
    }else{
        console.log('all false');
    }
};

checkSignInForm();
signInBtn.addEventListener('click',e=>{
    [...e.target.offsetParent.children].forEach(item=>{
        item.classList.remove('active');
    });
    memberIndexSubmit.textContent='登入';
    /*
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            
            account.addEventListener('keyup',e=>{
                checkSign.checkMail(e.target.value);
            });
            account.addEventListener('paste',e=>{
                checkSign.checkMail(e.target.value);
            });
            pwd.addEventListener('keyup',e=>{
                checkSign.checkPwd(e.target.value);
            });
            pwd.addEventListener('paste',e=>{
                checkSign.checkPwd(e.target.value);
            });

        }, false);
    });
    */

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
    
    memberIndexSubmit.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();
        memberIndexForm.classList.add('was-validated');

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
        if(checkSign.checkAccount(account.value)&&checkSign.checkPwd(pwd.value)){
            let obj={};
            obj.email=account.value;
            obj.password=pwd.value;

            ajax.register(obj);
        }
    });

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
profileImage.addEventListener('change',e=>{
    let reader=new FileReader();
    reader.onload=(e)=>{
        profilePhoto.setAttribute("src",e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
});

memberSignUpSubmit.addEventListener('click',e=>{
    e.preventDefault();
    e.stopPropagation();
    signUpValidation();
});
memberIndexCancel.addEventListener('click',e=>{
    account.value='';
    pwd.value='';
    //https://bftsai.github.io/outfitpals/index.html
    location.href='https://bftsai.github.io/outfitpals/index.html';
});
// ajax.delete(2)
// axios.post(`${apiUrl}/register`,{
//     email: 'test@gamil.com',
//     "password": '123456789'
// })
//     .then(res=>{
//         console.log(res);
//     })