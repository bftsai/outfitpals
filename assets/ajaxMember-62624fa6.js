import{a as l}from"./main-6b184395.js";const a="http://localhost:3000/",r="http://localhost:5173/outfitpals/pages/member.html";function o(t){const e=document.cookie.split(";").find(s=>{if(s.split("=")[0].trim()===t)return s});return e===void 0?void 0:e.split("=")[1]}const i=document.querySelector(".memberSpinner"),m={data:[],async getUserData(t){try{const e=await l.get(`${a}440/users/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});return this.data=e.data,this.data}catch(e){this.signOut(),console.log(e)}},async register(t){try{i.classList.remove("d-none");const e=await l.post(`${a}register`,t);if(e.status===201){document.cookie=`outfitpalsToken=${e.data.accessToken}`,document.cookie=`outfitpalsId=${e.data.user.id}`,document.cookie=`outfitpalsThirdParty=${e.data.user["third party"]}`;const s=Number(o("outfitpalsId")),n=o("outfitpalsToken");await this.patchUsers(s,n,{"sign time":new Date().toUTCString()}),await this.postPersonal(),signUpMail.value=account.value,signUpPwd.value=pwd.value,i.classList.add("d-none"),memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignUpData.classList.remove("d-none"),setTimeout(()=>{memberSignUpData.classList.remove("opacity-0")},0)},400)}}catch(e){console.log(e.response),memberIndexForm.classList.add("was-validated"),account.classList.add("is-invalid"),account.classList.add("is-invalid-customer"),account.nextElementSibling.textContent=e.response.data,i.classList.add("d-none")}},async postPersonal(){try{const t=await l.post(`${a}personal`,{isopen:!1,userId:Number(o("outfitpalsId")),otherdate:[],pos1:"請填寫",pos2:"請填寫",pos3:"請填寫",pos4:"請填寫",okday:[],oktime:"12:00~12:00"})}catch(t){console.log(t)}},async deleteUser(t){try{i.classList.remove("d-none");const e=await l.delete(`${a}600/users/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});i.classList.add("d-none"),location.href=r,document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''"}catch(e){console.log(e)}},async patchUsers(t,e,s){try{i.classList.remove("d-none");const n=await l.patch(`${a}600/users/${t}`,s,{headers:{authorization:`Bearer ${e}`}});i.classList.add("d-none")}catch(n){i.classList.add("d-none"),this.signOut(),console.log(n)}},async signIn(t){try{i.classList.remove("d-none");const e=await l.post(`${a}signin`,t);e.status===200&&(document.cookie=`outfitpalsToken=${e.data.accessToken}`,document.cookie=`outfitpalsId=${e.data.user.id}`,document.cookie=`outfitpalsThirdParty=${e.data.user["third party"]}`,this.data=e.data.user,i.classList.add("d-none"),memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignInProfile.classList.remove("d-none"),setTimeout(()=>{memberSignInProfile.classList.remove("opacity-0")},0)},400),this.renderMemberSignInProfileForm())}catch(e){console.log(e.response.data),i.classList.add("d-none"),memberIndexForm.classList.add("was-validated"),e.response.data.includes("user")?(account.classList.add("is-invalid"),account.nextElementSibling.textContent=e.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(pwd.classList.add("is-invalid"),pwd.nextElementSibling.textContent=e.response.data,pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))}},async signOut(){i.classList.remove("d-none"),document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''",location.href=r,i.classList.add("d-none")},async renderMemberSignInProfileForm(){const t=Number(o("outfitpalsId")),e=o("outfitpalsToken");i.classList.remove("d-none"),this.data=(await l.get(`${a}600/users/${t}`,{headers:{authorization:`Bearer ${e}`}})).data,i.classList.add("d-none");let s=`
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
                <p class="fs-lg-5">${this.data["nick name"]}</p>
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
                <p class="fs-lg-5">${this.data["outfit price"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>逛街愛店</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["love store"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>自我介紹</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data.introduce}</p>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInProfileRevise" type="button">修改</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <a href='personal.html?page=1' class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberMainPage" type="button">我的主頁</a>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberCollect" type="button">我的收藏</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
            <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignOut" type="button">登出</button>
            </div>
        </div>`;memberSignInProfileForm.innerHTML=s,memberSignInProfileForm.addEventListener("click",c=>{c.target.className.includes("memberSignInProfileRevise")&&(this.renderMemberSignInForm(),memberSignInProfile.classList.add("opacity-0"),setTimeout(()=>{memberSignInProfile.classList.add("d-none"),memberSignInData.classList.remove("d-none"),setTimeout(()=>{memberSignInData.classList.remove("opacity-0")},0)},400))}),document.querySelector(".memberSignOut").addEventListener("click",c=>{c.preventDefault(),this.signOut()})},renderMemberSignInForm(){let t=`
        <div class="row mb-3 fs-lg-5">
            <div class="col">
            <div class="mb-3 d-flex flex-column align-items-center">
                <img class="signInPhoto mb-3" src="${this.data.image}" alt="profile pic" style="width: 80px;height: 80px;border-radius: 50%;">
                <label for="signInImg" class="signInImg form-label text-secondary">選擇大頭貼</label>
                <input class="form-control d-none" type="file" id="signInImg" accept="image/png,image/jpeg,image/gif,image/png">
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5 fs-lg=5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInName" class="form-label">姓名</label>
            </div>
            <div class="col-lg-6">
            <input type="name" name="name" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInName" placeholder="請輸入姓名" value="${this.data.name}" required>
            <div class="invalid-feedback">
                請輸入姓名
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInPwd" class="form-label">密碼</label>
            </div>
            <div class="col-lg-6">
            <input type="password" name="pwd" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInPwd" placeholder="請輸入密碼" required>
            <div class="invalid-feedback">
                請輸入密碼
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInNickName" class="form-label">暱稱</label>
            </div>
            <div class="col-lg-6">
            <input type="text" name="nick name" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInNickName" placeholder="請輸入暱稱" value="${this.data["nick name"]}" required>
            <div class="invalid-feedback">
                請輸入暱稱
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInBirth" class="form-label">生日</label>
            </div>
            <div class="col-lg-6">
            <input type="date" name="birthday" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInBirth" placeholder="請輸入生日" value="${this.data.birthday}" required>
            <div class="invalid-feedback">
                請輸入生日
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInMail" class="form-label">電子信箱</label>
            </div>
            <div class="col-lg-6">
            <input type="email" name="email" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInMail" placeholder="請輸入電子信箱" value="${this.data.email}" required>
            <div class="invalid-feedback">
                請輸入電子信箱
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInTel" class="form-label">手機號碼</label>
            </div>
            <div class="col-lg-6">
            <input type="tel" name="tel" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInTel" placeholder="請輸入手機號碼" value="${this.data.tel}" required>
            <div class="invalid-feedback">
                請輸入手機號碼
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInSex" class="form-label">性別</label>
            </div>
            <div class="col-lg-6">
            <input class="form-check-input" type="radio" name="性別" id="signInMale" ${this.data.sex==="Male"?"checked":""}>
            <label class="form-check-label" for="signInMale" required>
                男生
            </label>
            <input class="form-check-input" type="radio" name="性別" id="signInFemale" ${this.data.sex==="Female"?"checked":""}>
            <label class="form-check-label" for="signInFemale">
                女生
            </label>
            <div class="invalid-feedback">
                請選擇性別
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInHeight" class="form-label">身高</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInHeight" placeholder="請輸入身高" name="身高" value="${this.data.height}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInWeight" class="form-label">體重</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInWeight" placeholder="請輸入體重" name="體重" value="${this.data.weight}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInPopArea" class="form-label">活動範圍</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInPopArea" name="活動範圍">
                <option value="" disabled>請選擇活動範圍</option>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>新竹市</option>
                <option>台中市</option>
                <option>苗栗市</option>
                <option>台南市</option>
                <option>高雄市</option>
                <option>屏東市</option>
                <option>宜蘭市</option>
                <option>花蓮市</option>
                <option>台東市</option>
                <option>綠島</option>
                <option>金門</option>
                <option>馬祖</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInStyle" class="form-label">打扮風格</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInStyle" name="打扮風格">
                <option value="" disabled>請選擇打扮風格</option>
                <option>日系</option>
                <option>韓系</option>
                <option>中國風</option>
                <option>歐系</option>
                <option>美系</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInOutfitPrice" class="form-label">穿搭價位</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInOutfitPrice" name="穿搭價位">
                <option value="" disabled>請選擇穿搭價位</option>
                <option>$1,000 以下</option>
                <option>$2,001～$3,000</option>
                <option>$3,001～$4,000</option>
                <option>$4,001～$5,000</option>
                <option>$5,001～$6,000</option>
                <option>無上限</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInLoveStore" class="form-label">逛街愛店</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInLoveStore" placeholder="請輸入逛街愛店" name="逛街愛店" value="${this.data["love store"]}">
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-lg-2 mb-3 mb-lg-0">
            <span class="material-symbols-outlined" style="color: transparent;">
                star
            </span>
            <label for="signInIntroduce" class="form-label">自我介紹</label>
            </div>
            <div class="col-lg-6">
            <textarea class="form-control fs-lg-5 py-lg-3 px-lg-7" name="自我介紹" id="signInIntroduce" cols="30" rows="10" placeholder="請輸入自我介紹">${this.data.introduce}</textarea>
            </div>
        </div>
        <div class="row justify-content-center align-items-start fs-lg-5">
            <div class="col-lg-8 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <span>為必填欄位</p>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-lg-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseSubmit" type="submit">修改</button>
            </div>
            <div class="col-6 col-lg-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseCancel" type="button">取消</button>
            </div>
        </div>`;if(memberSignInForm.innerHTML=t,o("outfitpalsThirdParty")==="google"){const n=document.getElementById("signInPwd"),c=document.getElementById("signInMail");n.value=this.data["g-pwd"],n.setAttribute("disabled",""),c.setAttribute("disabled","")}document.getElementById("signInPopArea").selectedIndex=this.data["PopArea selectedIndex"],document.getElementById("signInStyle").selectedIndex=this.data["style selectedIndex"],document.getElementById("signInOutfitPrice").selectedIndex=this.data["outfit price selectedIndex"];const e=document.getElementById("signInImg"),s=document.querySelector(".signInPhoto");e.addEventListener("change",n=>{let c=new FileReader;c.addEventListener("load",d=>{s.setAttribute("src",d.target.result)}),c.readAsDataURL(n.target.files[0])})},async postPosts(t){try{await this.getUserData(o("outfitpalsId")),t.author=this.data.name,t.postTime=new Date().toUTCString();const e=await l.post(`${a}600/posts`,t,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});console.log(e)}catch(e){console.log(e)}},async getPosts(){try{return(await l.get(`${a}600/posts?userId=${o("outfitpalsId")}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(t){console.log(t)}},async getPostsById(t){try{return(await l.get(`${a}440/posts?PostId=${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(e){console.log(e)}},async deletePosts(t){try{const e=await l.delete(`${a}600/posts/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});console.log(e)}catch(e){console.log(e)}},async postComment(t){try{t.postTime=new Date().toUTCString();const e=await l.post(`${a}600/comments`,t,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});console.log(e)}catch(e){console.log(e)}},async getComment(t){try{return(await l.get(`${a}440/comments/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(e){console.log(e)}},async deleteComment(t){try{const e=await l.delete(`${a}600/comments/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});console.log(e)}catch(e){console.log(e)}},async patchComment(t,e){try{const s=await l.patch(`${a}660/comments/${t}`,e,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}});return console.log(s),s}catch(s){console.log(s)}},async getAllUserComment(t){try{return(await l.get(`${a}440/comments?userId=${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(e){console.log(e)}},async getAllPostComment(t){try{return(await l.get(`${a}440/comments?posterId=${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(e){console.log(e)}},async getPostComment(t,e){try{return(await l.get(`${a}440/comments?posterId=${t}&_page=${e}&_limit=1`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(s){console.log(s)}},async getUserComment(t,e){try{return(await l.get(`${a}440/comments?userId=${t}&_page=${e}&_limit=1`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})).data}catch(s){console.log(s)}},async postProfile(t){try{const e=await l.post(`${a}profile`,t)}catch(e){console.log(e)}},async getProfile(){try{const t=(await l.get(`${a}profile`)).data}catch(t){console.log(t)}},async deleteProfile(t){try{const e=await l.delete(`${a}600/profile/${t}`,{headers:{authorization:`Bearer ${o("outfitpalsToken")}`}})}catch(e){console.log(e)}},async patchPersonalOtherday(t,e){try{const s=(await l.get(`${a}personal?userId=${t}`)).data[0];s.otherdate.push(e);const n=(await l.patch(`${a}personal/${t}`,s)).data;console.log(n)}catch(s){console.log(s)}}};export{m as a,o as c};
