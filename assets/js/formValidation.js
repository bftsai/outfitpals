//check validation tool
export const checkSign={
    regexp:new RegExp(''),
    checkAccount(str){
        this.regexp=new RegExp('^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$');
        if(str===''){
            account.nextElementSibling.textContent=`請輸入電子郵件`;
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
            signUpMail.nextElementSibling.textContent=`請輸入電子郵件`;
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
};
//signUp validation
export function signUpValidation() {  
    
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
        memberObj.image=signUpPhoto.getAttribute('src');
        memberObj.name=signUpName.value;
        memberObj.password=signUpPwd.value;
        memberObj['nick name']=signUpNickName.value;
        memberObj.birthday=signUpBirth.value;
        memberObj.tel=signUpTel.value;
        memberObj.email=signUpMail.value;
        memberObj['reservation time']=signUpReservationTime.selectedIndex;
        memberObj['reservation location']=signUpReservationLocation.value;
        memberObj.height=signUpHeight.value ? signUpHeight.value:"";
        memberObj.weight=signUpWeight.value ? signUpWeight.value:"";
        memberObj.PopArea=signUpPopArea.selectedIndex;
        memberObj.style=signUpStyle.selectedIndex;
        memberObj['outfit price']=signUpOutfitPrice.selectedIndex;
        memberObj['love store']=signUpLoveStore.value ? signUpLoveStore.value:"";
        memberObj.introduce=signUpIntroduce.value ? signUpIntroduce.value:"";
        if(signUpMale.checked===true){
            memberObj.sex='Male';
        }else{
            memberObj.sex='Female';
        }
        ajax.patchUsers(memberObj);
        //https://bftsai.github.io/outfitpals/index.html
        location.href='http://localhost:5173/outfitpals/pages/index.html';
    }else{
        console.log('all false');
    }
};