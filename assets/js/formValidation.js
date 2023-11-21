import { ajaxMember, cookieValue } from "./ajaxMember";

//check validation tool
export const checkSign={
    regexp:new RegExp(''),
    checkAccount(input,str){
        this.regexp=new RegExp('^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入電子郵件`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkSignUpIndexPwd(input,str){
        this.regexp=new RegExp('^[A-Z][\\d\\w]{7,}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkMail(input,str){
        this.regexp=new RegExp('^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入電子郵件`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkName(input,str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]{5,}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入姓名`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkPwd(input,str){
        this.regexp=new RegExp('^[A-Z][\\d\\w]{7,}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入密碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkNickName(input,str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\\d\x20]{1,}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入暱稱`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkBirth(input,str){
        this.regexp=new RegExp('^[\\d]{4}-[\\d]{2}-[\\d]{2}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入生日`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，請輸入西元年/月/日`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkTel(input,str){
        this.regexp=new RegExp('^09[\\d]{8}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入手機號碼`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，格式為0912345678`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    },
    checkReservationLocation(input,str){
        this.regexp=new RegExp('^[\u4e00-\u9fa5_a-zA-Z\x20]{2,}$');
        if(str===''){
            input.nextElementSibling.textContent=`請輸入開放預約地點`;
            return false;
        }else if(!(this.regexp.test(str))){
            input.classList.add('is-invalid');
            input.nextElementSibling.textContent=`格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）`;
            input.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
            return false;
        }else{
            input.classList.remove('is-invalid');
            input.setAttribute('style','border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);');
            return true;
        }
    }
};
//signUp validation
export async function signUpValidation(imgSrc,name,pwd,nickName,birth,email,tel,male,female,reservationTime,reservationLocation,height,weight,popArea,style,price,loveStore,introduce,memberForm) {  

    memberForm.classList.add('was-validated');

    let memberObj={};

    name.addEventListener('keyup',e=>{
        checkSign.checkName(e.target,e.target.value);
    });
    name.addEventListener('paste',e=>{
        checkSign.checkName(e.target,e.target.value);
    });

    pwd.addEventListener('keyup',e=>{
        checkSign.checkPwd(e.target,e.target.value);
    });
    pwd.addEventListener('paste',e=>{
        checkSign.checkPwd(e.target,e.target.value);
    });

    nickName.addEventListener('keyup',e=>{
        checkSign.checkNickName(e.target,e.target.value);
    });
    nickName.addEventListener('paste',e=>{
        checkSign.checkNickName(e.target,e.target.value);
    });

    birth.addEventListener('keyup',e=>{
        checkSign.checkBirth(e.target,e.target.value);
    });
    birth.addEventListener('paste',e=>{
        checkSign.checkBirth(e.target,e.target.value);
    });

    email.addEventListener('keyup',e=>{
        checkSign.checkMail(e.target,e.target.value);
    });
    email.addEventListener('paste',e=>{
        checkSign.checkMail(e.target,e.target.value);
    });

    tel.addEventListener('keyup',e=>{
        checkSign.checkTel(e.target,e.target.value);
    });
    tel.addEventListener('paste',e=>{
        checkSign.checkTel(e.target,e.target.value);
    });

    reservationLocation.addEventListener('keyup',e=>{
        checkSign.checkReservationLocation(e.target,e.target.value);
    });
    reservationLocation.addEventListener('paste',e=>{
        checkSign.checkReservationLocation(e.target,e.target.value);
    });
    
    if(checkSign.checkName(name,name.value)&&checkSign.checkPwd(pwd,pwd.value)&&checkSign.checkNickName(nickName,nickName.value)&&checkSign.checkBirth(birth,birth.value)&&checkSign.checkTel(tel,tel.value)&&checkSign.checkReservationLocation(reservationLocation,reservationLocation.value)&&memberForm.checkValidity()){
        memberObj.image=imgSrc.getAttribute('src');
        memberObj.name=name.value;
        memberObj.password=pwd.value;
        memberObj['nick name']=nickName.value;
        memberObj.birthday=birth.value;
        memberObj.tel=tel.value;
        memberObj.email=email.value;
        memberObj['reservation time']=reservationTime.value;
        memberObj['reservation time selectedIndex']=reservationTime.selectedIndex;
        memberObj['reservation location']=reservationLocation.value;
        memberObj.height=height.value ? height.value:"";
        memberObj.weight=weight.value ? weight.value:"";
        memberObj.PopArea=popArea.value;
        memberObj['PopArea selectedIndex']=popArea.selectedIndex;
        memberObj.style=style.value;
        memberObj['style selectedIndex']=style.selectedIndex;
        memberObj['outfit price']=price.value;
        memberObj['outfit price selectedIndex']=price.selectedIndex;
        memberObj['love store']=loveStore.value ? loveStore.value:"";
        memberObj.introduce=introduce.value ? introduce.value:"";
        if(male.checked===true){
            memberObj.sex='Male';
        }else{
            memberObj.sex='Female';
        }
        const outfitpalsId=Number(cookieValue('outfitpalsId'));
        const outfitpalsToken=cookieValue('outfitpalsToken');

        await ajaxMember.patchUsers(outfitpalsId,outfitpalsToken,memberObj);
        location.href='https://bftsai.github.io/outfitpals/member.html';
        // location.href='http://localhost:5173/outfitpals/pages/member.html';
        signUpPhoto.setAttribute('src','../assets/images/member/user-solid.svg');
        name.value='';
        pwd.value='';
        nickName.value='';
        birth.value='';
        tel.value='';
        email.value='';
        reservationTime.selectedIndex=0;
        reservationLocation.value='';
        height.value='';
        weight.value='';
        popArea.selectedIndex=0;
        style.selectedIndex=0;
        price.selectedIndex=0;
        loveStore.value='';
        introduce.value='';
    }else{
        console.log('all false');
    }
};