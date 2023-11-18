import"./main-4b3b3cdb.js";const x="http://localhost:3000/",E={data:[],async register(e){try{const t=await axios.post(`${x}register`,e);t.status==201&&(localStorage.outfitpalsToken=t.data.accessToken,localStorage.outfitpalsId=t.data.user.id,localStorage.outfitpalsThirdParty=!1,await this.patchUsers(Number(localStorage.outfitpalsId),localStorage.outfitpalsToken,{"sign time":`${new Date}`,email:e.email,"third party":!1}),signUpMail.value=account.value,signUpPwd.value=pwd.value,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignUpData.classList.remove("d-none"),setTimeout(()=>{memberSignUpData.classList.remove("opacity-0")},0)},400))}catch(t){console.log(t.response),memberIndexForm.classList.add("was-validated"),account.classList.add("is-invalid"),account.nextElementSibling.textContent=t.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")}},async patchUsers(e,t,o){try{const c=await axios.patch(`${x}600/users/${e}`,o,{headers:{authorization:`Bearer ${t}`}})}catch(c){console.log(c)}},async signIn(e){try{const t=await axios.post(`${x}signin`,e);t.status===200&&(localStorage.outfitpalsToken=t.data.accessToken,localStorage.outfitpalsId=t.data.user.id,this.data=t.data.user,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignInProfile.classList.remove("d-none"),setTimeout(()=>{memberSignInProfile.classList.remove("opacity-0")},0)},400),this.renderMemberSignInProfileForm())}catch(t){console.log(t.response.data),memberIndexForm.classList.add("was-validated"),t.response.data.includes("user")?(account.classList.add("is-invalid"),account.nextElementSibling.textContent=t.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(pwd.classList.add("is-invalid"),pwd.nextElementSibling.textContent=t.response.data,pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))}},async renderMemberSignInProfileForm(){this.data=(await axios.get(`${x}users/${localStorage.outfitpalsId}`,{headers:{authorization:`Bearer ${localStorage.outfitpalsToken}`}})).data;let e=`
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
                <p>開放預約時間</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["reservation time"]}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約地點</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data["reservation location"]}</p>
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
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInProfileRevise" type="submit">修改</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberMainPage" type="submit">我的主頁</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-6 col-sm-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberCollect" type="submit">我的收藏</button>
            </div>
        </div>`;memberSignInProfileForm.innerHTML=e,memberSignInProfileForm.addEventListener("click",t=>{t.target.className.includes("memberSignInProfileRevise")&&(this.renderMemberSignInForm(),memberSignInProfile.classList.add("opacity-0"),setTimeout(()=>{memberSignInProfile.classList.add("d-none"),memberSignInData.classList.remove("d-none"),setTimeout(()=>{memberSignInData.classList.remove("opacity-0")},0)},400))})},renderMemberSignInForm(){let e=`
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
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationTime" class="form-label">開放預約時間</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInReservationTime" name="開放預約時間" required>
                <option value="" disabled>請選擇開放預約時間</option>
                <option>無</option>
                <option>09：00～12：00</option>
                <option>13：00～17：00</option>
                <option>18：00～22：00</option>
            </select>
            <div class="invalid-feedback">
                請選擇開放預約時間
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center mb-3 mb-lg-0">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationLocation" class="form-label">開放預約地點</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInReservationLocation" placeholder="請輸入開放預約地點" name="開放預約地點" value="${this.data["reservation location"]}" required>
            <div class="invalid-feedback">
                請輸入開放預約地點
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
        </div>`;memberSignInForm.innerHTML=e,document.getElementById("signInReservationTime").selectedIndex=this.data["reservation time selectedIndex"],document.getElementById("signInPopArea").selectedIndex=this.data["PopArea selectedIndex"],document.getElementById("signInStyle").selectedIndex=this.data["style selectedIndex"],document.getElementById("signInOutfitPrice").selectedIndex=this.data["outfit price selectedIndex"];const t=document.getElementById("signInImg"),o=document.querySelector(".signInPhoto");document.getElementById("signInPwd"),document.getElementById("signInMail"),document.getElementById("signInName"),document.getElementById("signInNickName"),document.getElementById("signInBirth"),document.getElementById("signInTel"),document.getElementById("signInMale"),document.getElementById("signInFemale"),document.getElementById("signInReservationTime"),document.getElementById("signInReservationLocation"),document.getElementById("signInHeight"),document.getElementById("signInWeight"),document.getElementById("signInPopArea"),document.getElementById("signInStyle"),document.getElementById("signInOutfitPrice"),document.getElementById("signInLoveStore"),document.getElementById("signInIntroduce"),t.addEventListener("change",c=>{let r=new FileReader;r.addEventListener("load",d=>{o.setAttribute("src",d.target.result)}),r.readAsDataURL(c.target.files[0])})},async delete(e){try{const t=await axios.delete(`${x}users/${e}`)}catch(t){console.log(t)}}},l={regexp:new RegExp(""),checkAccount(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkSignUpIndexPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkMail(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{5,}$"),t===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkNickName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),t===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkBirth(e,t){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),t===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkTel(e,t){return this.regexp=new RegExp("^09[\\d]{8}$"),t===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)},checkReservationLocation(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),t===""?(e.nextElementSibling.textContent="請輸入開放預約地點",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url(../assets/images/member/valid.png);background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!0):(e.classList.add("is-invalid"),e.nextElementSibling.textContent="格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）",e.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"),!1)}};async function Q(e,t,o,c,r,d,g,L,U,v,m,u,p,b,f,y,I,h,k){k.classList.add("was-validated");let a={};t.addEventListener("keyup",s=>{l.checkName(s.target,s.target.value)}),t.addEventListener("paste",s=>{l.checkName(s.target,s.target.value)}),o.addEventListener("keyup",s=>{l.checkPwd(s.target,s.target.value)}),o.addEventListener("paste",s=>{l.checkPwd(s.target,s.target.value)}),c.addEventListener("keyup",s=>{l.checkNickName(s.target,s.target.value)}),c.addEventListener("paste",s=>{l.checkNickName(s.target,s.target.value)}),r.addEventListener("keyup",s=>{l.checkBirth(s.target,s.target.value)}),r.addEventListener("paste",s=>{l.checkBirth(s.target,s.target.value)}),d.addEventListener("keyup",s=>{l.checkMail(s.target,s.target.value)}),d.addEventListener("paste",s=>{l.checkMail(s.target,s.target.value)}),g.addEventListener("keyup",s=>{l.checkTel(s.target,s.target.value)}),g.addEventListener("paste",s=>{l.checkTel(s.target,s.target.value)}),m.addEventListener("keyup",s=>{l.checkReservationLocation(s.target,s.target.value)}),m.addEventListener("paste",s=>{l.checkReservationLocation(s.target,s.target.value)}),l.checkName(t,t.value)&&l.checkPwd(o,o.value)&&l.checkNickName(c,c.value)&&l.checkBirth(r,r.value)&&l.checkTel(g,g.value)&&l.checkReservationLocation(m,m.value)&&k.checkValidity()?(a.image=e.getAttribute("src"),a.name=t.value,a.password=o.value,a["nick name"]=c.value,a.birthday=r.value,a.tel=g.value,a.email=d.value,a["reservation time"]=v.value,a["reservation time selectedIndex"]=v.selectedIndex,a["reservation location"]=m.value,a.height=u.value?u.value:"",a.weight=p.value?p.value:"",a.PopArea=b.value,a["PopArea selectedIndex"]=b.selectedIndex,a.style=f.value,a["style selectedIndex"]=f.selectedIndex,a["outfit price"]=y.value,a["outfit price selectedIndex"]=y.selectedIndex,a["love store"]=I.value?I.value:"",a.introduce=h.value?h.value:"",L.checked===!0?a.sex="Male":a.sex="Female",await E.patchUsers(Number(localStorage.outfitpalsId),localStorage.outfitpalsToken,a),location.href="http://localhost:5173/outfitpals/pages/member.html",signUpPhoto.setAttribute("src","../assets/images/member/user-solid.svg"),t.value="",o.value="",c.value="",r.value="",g.value="",d.value="",v.selectedIndex=0,m.value="",u.value="",p.value="",b.selectedIndex=0,f.selectedIndex=0,y.selectedIndex=0,I.value="",h.value=""):console.log("all false")}const A=document.querySelector(".member-index"),$=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const Y=document.querySelector(".memberSignUpForm"),j=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const R=document.querySelector(".memberSignInForm"),X=document.querySelector(".signInBtn"),ee=document.querySelector(".signUpBtn"),S=document.querySelector(".gmailSignIn"),w=document.querySelector(".gmailSignUp"),n=document.getElementById("account"),i=document.getElementById("pwd"),te=document.getElementById("signUpImg");let B=document.querySelector(".signUpPhoto");const T=document.getElementById("signUpPwd"),N=document.getElementById("signUpMail"),M=document.getElementById("signUpName"),C=document.getElementById("signUpNickName"),q=document.getElementById("signUpBirth"),F=document.getElementById("signUpTel"),z=document.getElementById("signUpMale"),D=document.getElementById("signUpFemale"),H=document.getElementById("signUpReservationTime"),O=document.getElementById("signUpReservationLocation"),W=document.getElementById("signUpHeight"),Z=document.getElementById("signUpWeight"),_=document.getElementById("signUpPopArea"),V=document.getElementById("signUpStyle"),G=document.getElementById("signUpOutfitPrice"),J=document.getElementById("signUpLoveStore"),K=document.getElementById("signUpIntroduce"),P=document.querySelector(".memberIndexSubmit"),se=document.querySelector(".memberIndexCancel"),le=document.querySelector(".memberSignUpSubmit");localStorage.outfitpalsThirdParty==="false"&&localStorage.outfitpalsToken&&localStorage.outfitpalsId&&(A.classList.add("opacity-0"),n.value="",i.value="",E.renderMemberSignInProfileForm(),A.classList.add("d-none"),j.classList.remove("d-none"),j.classList.remove("opacity-0"));X.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),n.value="",i.value="",P.textContent="登入",$.classList.remove("was-validated"),n.classList.remove("is-invalid"),n.setAttribute("style",""),i.classList.remove("is-invalid"),i.setAttribute("style",""),e.target.classList.add("active"),w.classList.add("opacity-0"),setTimeout(()=>{w.classList.add("d-none"),S.classList.remove("d-none"),setTimeout(()=>{S.classList.remove("opacity-0")},0)},400)});ee.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),n.value="",i.value="",P.textContent="註冊",$.classList.remove("was-validated"),n.classList.remove("is-invalid"),n.setAttribute("style",""),i.classList.remove("is-invalid"),i.setAttribute("style",""),e.target.classList.add("active"),S.classList.add("opacity-0"),setTimeout(()=>{S.classList.add("d-none"),w.classList.remove("d-none"),setTimeout(()=>{w.classList.remove("opacity-0")},0)},400)});P.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),$.classList.add("was-validated"),l.checkAccount(n,n.value),l.checkSignUpIndexPwd(i,i.value),n.addEventListener("keyup",t=>{l.checkAccount(t.target,t.target.value)}),n.addEventListener("paste",t=>{l.checkAccount(t.target,t.target.value)}),i.addEventListener("keyup",t=>{l.checkSignUpIndexPwd(t.target,t.target.value)}),i.addEventListener("paste",t=>{l.checkSignUpIndexPwd(t.target,t.target.value)}),l.checkAccount(n,n.value)&&l.checkSignUpIndexPwd(i,i.value)){let t={};t.email=n.value,t.password=i.value,X.className.includes("active")?E.signIn(t):E.register(t)}});se.addEventListener("click",e=>{n.value="",i.value=""});te.addEventListener("change",e=>{let t=new FileReader;t.addEventListener("load",o=>{B.setAttribute("src",o.target.result)}),t.readAsDataURL(e.target.files[0])});le.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),console.log(B.value,M.value,T.value,C.value,q.value,N.value,F.value,z.value,D.value,H.value,O.value,W.value,Z.value,_.value,V.value,G.value,J.value,K.value),Q(B,M,T,C,q,N,F,z,D,H,O,W,Z,_,V,G,J,K,Y)});R.addEventListener("click",e=>{document.getElementById("signInImg");const t=document.querySelector(".signInPhoto"),o=document.getElementById("signInPwd"),c=document.getElementById("signInMail"),r=document.getElementById("signInName"),d=document.getElementById("signInNickName"),g=document.getElementById("signInBirth"),L=document.getElementById("signInTel"),U=document.getElementById("signInMale"),v=document.getElementById("signInFemale"),m=document.getElementById("signInReservationTime"),u=document.getElementById("signInReservationLocation"),p=document.getElementById("signInHeight"),b=document.getElementById("signInWeight"),f=document.getElementById("signInPopArea"),y=document.getElementById("signInStyle"),I=document.getElementById("signInOutfitPrice"),h=document.getElementById("signInLoveStore"),k=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),Q(t,r,o,d,g,c,L,U,v,m,u,p,b,f,y,I,h,k,R)):e.target.className.includes("memberSignInReviseCancel")&&(location.href="http://localhost:5173/outfitpals/pages/member.html")},!1);
