import"./main-56f4b848.js";import{c as r,a as b}from"./ajaxMember-e4a1da22.js";const M="http://localhost:5173/outfitpals/pages/member.html",n={regexp:new RegExp(""),checkAccount(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkSignUpIndexPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),!1)},checkMail(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{5,}$"),t===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)},checkPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",!1)},checkNickName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),t===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",!1)},checkBirth(e,t){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),t===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",!1)},checkTel(e,t){return this.regexp=new RegExp("^09[\\d]{8}$"),t===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",!1)},checkReservationLocation(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),t===""?(e.nextElementSibling.textContent="請輸入開放預約地點",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)}};async function C(e,t,l,d,o,c,m,U,P,v,g,u,I,L,h,f,x,E,y){if(y.classList.add("was-validated"),t.addEventListener("keyup",s=>{n.checkName(s.target,s.target.value)}),t.addEventListener("paste",s=>{n.checkName(s.target,s.target.value)}),l.addEventListener("keyup",s=>{n.checkPwd(s.target,s.target.value)}),l.addEventListener("paste",s=>{n.checkPwd(s.target,s.target.value)}),d.addEventListener("keyup",s=>{n.checkNickName(s.target,s.target.value)}),d.addEventListener("paste",s=>{n.checkNickName(s.target,s.target.value)}),o.addEventListener("keyup",s=>{n.checkBirth(s.target,s.target.value)}),o.addEventListener("paste",s=>{n.checkBirth(s.target,s.target.value)}),c.addEventListener("keyup",s=>{n.checkMail(s.target,s.target.value)}),c.addEventListener("paste",s=>{n.checkMail(s.target,s.target.value)}),m.addEventListener("keyup",s=>{n.checkTel(s.target,s.target.value)}),m.addEventListener("paste",s=>{n.checkTel(s.target,s.target.value)}),g.addEventListener("keyup",s=>{n.checkReservationLocation(s.target,s.target.value)}),g.addEventListener("paste",s=>{n.checkReservationLocation(s.target,s.target.value)}),n.checkName(t,t.value)&&n.checkPwd(l,l.value)&&n.checkNickName(d,d.value)&&n.checkBirth(o,o.value)&&n.checkTel(m,m.value)&&n.checkReservationLocation(g,g.value)&&y.checkValidity()){let s={};s.image=e.getAttribute("src"),s.name=t.value,s.password=l.value,s["nick name"]=d.value,s.birthday=o.value,s.tel=m.value,s.email=c.value,s["reservation time"]=v.value,s["reservation time selectedIndex"]=v.selectedIndex,s["reservation location"]=g.value,s.height=u.value?u.value:"",s.weight=I.value?I.value:"",s.PopArea=L.value,s["PopArea selectedIndex"]=L.selectedIndex,s.style=h.value,s["style selectedIndex"]=h.selectedIndex,s["outfit price"]=f.value,s["outfit price selectedIndex"]=f.selectedIndex,s["love store"]=x.value?x.value:"",s.introduce=E.value?E.value:"",U.checked===!0?s.sex="Male":s.sex="Female";const q=Number(r("outfitpalsId")),$=r("outfitpalsToken");await b.patchUsers(q,$,s),location.href=M,signUpPhoto.src=e.getAttribute("src"),t.value="",l.value="",d.value="",o.value="",m.value="",c.value="",v.selectedIndex=0,g.value="",u.value="",I.value="",L.selectedIndex=0,h.selectedIndex=0,f.selectedIndex=0,x.value="",E.value=""}else console.log("all false")}const F="http://localhost:5173/outfitpals/pages/member.html",R=document.querySelector(".member-index"),B=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const D=document.querySelector(".memberSignUpForm"),N=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const T=document.querySelector(".memberSignInForm"),A=document.querySelector(".signInBtn"),j=document.querySelector(".signUpBtn"),S=document.querySelector(".gmailSignIn"),k=document.querySelector(".gmailSignUp"),i=document.getElementById("account"),a=document.getElementById("pwd"),H=document.getElementById("signUpImg");let p=document.querySelector(".signUpPhoto");const O=document.getElementById("signUpPwd"),W=document.getElementById("signUpMail"),Z=document.getElementById("signUpName"),z=document.getElementById("signUpNickName"),V=document.getElementById("signUpBirth"),_=document.getElementById("signUpTel"),G=document.getElementById("signUpMale"),J=document.getElementById("signUpFemale"),K=document.getElementById("signUpReservationTime"),Q=document.getElementById("signUpReservationLocation"),X=document.getElementById("signUpHeight"),Y=document.getElementById("signUpWeight"),ee=document.getElementById("signUpPopArea"),te=document.getElementById("signUpStyle"),se=document.getElementById("signUpOutfitPrice"),ne=document.getElementById("signUpLoveStore"),ie=document.getElementById("signUpIntroduce"),w=document.querySelector(".memberIndexSubmit"),ae=document.querySelector(".memberIndexCancel"),le=document.querySelector(".memberSignUpSubmit");(r("outfitpalsThirdParty")==="false"||r("outfitpalsThirdParty")==="google")&&r("outfitpalsToken")&&r("outfitpalsId")&&(R.classList.add("opacity-0"),i.value="",a.value="",b.renderMemberSignInProfileForm(),R.classList.add("d-none"),N.classList.remove("d-none"),N.classList.remove("opacity-0"));A.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),i.value="",a.value="",w.textContent="登入",B.classList.remove("was-validated"),i.classList.remove("is-invalid"),i.classList.remove("is-valid-customer"),i.classList.remove("is-invalid-customer"),i.setAttribute("style",""),a.classList.remove("is-invalid"),a.classList.remove("is-valid-customer"),a.classList.remove("is-invalid-customer"),a.setAttribute("style",""),e.target.classList.add("active"),k.classList.add("opacity-0"),setTimeout(()=>{k.classList.add("d-none"),S.classList.remove("d-none"),setTimeout(()=>{S.classList.remove("opacity-0")},0)},400)});j.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),i.value="",a.value="",w.textContent="註冊",B.classList.remove("was-validated"),i.classList.remove("is-invalid"),i.setAttribute("style",""),a.classList.remove("is-invalid"),a.setAttribute("style",""),e.target.classList.add("active"),S.classList.add("opacity-0"),setTimeout(()=>{S.classList.add("d-none"),k.classList.remove("d-none"),setTimeout(()=>{k.classList.remove("opacity-0")},0)},400)});w.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),B.classList.add("was-validated"),n.checkAccount(i,i.value),n.checkSignUpIndexPwd(a,a.value),i.addEventListener("keyup",t=>{n.checkAccount(t.target,t.target.value)}),i.addEventListener("paste",t=>{n.checkAccount(t.target,t.target.value)}),a.addEventListener("keyup",t=>{n.checkSignUpIndexPwd(t.target,t.target.value)}),a.addEventListener("paste",t=>{n.checkSignUpIndexPwd(t.target,t.target.value)}),n.checkAccount(i,i.value)&&n.checkSignUpIndexPwd(a,a.value)){let t={};t.email=i.value,t.password=a.value,t["third party"]="false",A.className.includes("active")?b.signIn(t):b.register(t)}});ae.addEventListener("click",e=>{i.value="",a.value=""});H.addEventListener("change",e=>{let t=new FileReader;t.addEventListener("load",l=>{p.setAttribute("src",l.target.result)}),t.readAsDataURL(e.target.files[0])});function ce(e){console.log(e);let t=new Image,l=e.match(/\.jpg/)?"image/jpeg":"image/png";return new Promise((d,o)=>{t.onload=function(){let c=document.createElement("canvas");c.width=this.naturalWidth,c.height=this.naturalHeight,c.getContext("2d").drawImage(this,0,0),d(c.toDataURL(l,1))},t.onerror=function(){o("Error: Image load failed")},t.src=e})}le.addEventListener("click",async e=>{e.preventDefault(),e.stopPropagation(),r("outfitpalsThirdParty")==="false"&&await ce(p.getAttribute("src")).then(t=>{p.src=t}).catch(t=>{console.log(t)}),C(p,Z,O,z,V,W,_,G,J,K,Q,X,Y,ee,te,se,ne,ie,D)});T.addEventListener("click",e=>{document.getElementById("signInImg");const t=document.querySelector(".signInPhoto"),l=document.getElementById("signInPwd"),d=document.getElementById("signInMail"),o=document.getElementById("signInName"),c=document.getElementById("signInNickName"),m=document.getElementById("signInBirth"),U=document.getElementById("signInTel"),P=document.getElementById("signInMale"),v=document.getElementById("signInFemale"),g=document.getElementById("signInReservationTime"),u=document.getElementById("signInReservationLocation"),I=document.getElementById("signInHeight"),L=document.getElementById("signInWeight"),h=document.getElementById("signInPopArea"),f=document.getElementById("signInStyle"),x=document.getElementById("signInOutfitPrice"),E=document.getElementById("signInLoveStore"),y=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),C(t,o,l,c,m,d,U,P,v,g,u,I,L,h,f,x,E,y,T)):e.target.className.includes("memberSignInReviseCancel")&&(location.href=F)},!1);Number(r("outfitpalsId"));console.log(new Date().toUTCString());Number(r("outfitpalsId"));
