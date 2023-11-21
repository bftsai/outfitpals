import"./main-321b60bf.js";const k="https://outfitpals-web-server.onrender.com/";function g(e){const t=document.cookie.split(";").find(l=>{if(l.split("=")[0].trim()===e)return l});return t===void 0?void 0:t.split("=")[1]}const S={data:[],async register(e){try{const t=await axios.post(`${k}register`,e);if(t.status==201){document.cookie=`outfitpalsToken=${t.data.accessToken}`,document.cookie=`outfitpalsId=${t.data.user.id}`,document.cookie=`outfitpalsThirdParty=${t.data.user["third party"]}`;const l=Number(g("outfitpalsId")),n=g("outfitpalsToken");await this.patchUsers(l,n,{"sign time":`${new Date}`}),signUpMail.value=account.value,signUpPwd.value=pwd.value,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignUpData.classList.remove("d-none"),setTimeout(()=>{memberSignUpData.classList.remove("opacity-0")},0)},400)}}catch(t){console.log(t.response),memberIndexForm.classList.add("was-validated"),account.classList.add("is-invalid"),account.nextElementSibling.textContent=t.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")}},async patchUsers(e,t,l){try{const n=await axios.patch(`${k}600/users/${e}`,l,{headers:{authorization:`Bearer ${t}`}})}catch(n){console.log(n)}},async signIn(e){try{const t=await axios.post(`${k}signin`,e);console.log(t),t.status===200&&(document.cookie=`outfitpalsToken=${t.data.accessToken}`,document.cookie=`outfitpalsId=${t.data.user.id}`,document.cookie=`outfitpalsThirdParty=${t.data.user["third party"]}`,this.data=t.data.user,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignInProfile.classList.remove("d-none"),setTimeout(()=>{memberSignInProfile.classList.remove("opacity-0")},0)},400),this.renderMemberSignInProfileForm())}catch(t){console.log(t.response.data),memberIndexForm.classList.add("was-validated"),t.response.data.includes("user")?(account.classList.add("is-invalid"),account.nextElementSibling.textContent=t.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(pwd.classList.add("is-invalid"),pwd.nextElementSibling.textContent=t.response.data,pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))}},async renderMemberSignInProfileForm(){const e=Number(g("outfitpalsId")),t=g("outfitpalsToken");this.data=(await axios.get(`${k}users/${e}`,{headers:{authorization:`Bearer ${t}`}})).data;let l=`
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
        </div>`;memberSignInProfileForm.innerHTML=l,memberSignInProfileForm.addEventListener("click",n=>{n.target.className.includes("memberSignInProfileRevise")&&(this.renderMemberSignInForm(),memberSignInProfile.classList.add("opacity-0"),setTimeout(()=>{memberSignInProfile.classList.add("d-none"),memberSignInData.classList.remove("d-none"),setTimeout(()=>{memberSignInData.classList.remove("opacity-0")},0)},400))})},renderMemberSignInForm(){let e=`
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
        </div>`;memberSignInForm.innerHTML=e,document.getElementById("signInReservationTime").selectedIndex=this.data["reservation time selectedIndex"],document.getElementById("signInPopArea").selectedIndex=this.data["PopArea selectedIndex"],document.getElementById("signInStyle").selectedIndex=this.data["style selectedIndex"],document.getElementById("signInOutfitPrice").selectedIndex=this.data["outfit price selectedIndex"];const t=document.getElementById("signInImg"),l=document.querySelector(".signInPhoto");t.addEventListener("change",n=>{let d=new FileReader;d.addEventListener("load",r=>{l.setAttribute("src",r.target.result)}),d.readAsDataURL(n.target.files[0])})},async signOut(e){document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''",location.href="http://localhost:5173/outfitpals/pages/member.html"},async delete(e){try{const t=await axios.delete(`${k}users/${e}`);document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''"}catch(t){console.log(t)}}},i={regexp:new RegExp(""),checkAccount(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkSignUpIndexPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),!1)},checkMail(e,t){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),t===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{5,}$"),t===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)},checkPwd(e,t){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),t===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",!1)},checkNickName(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),t===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",!1)},checkBirth(e,t){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),t===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",!1)},checkTel(e,t){return this.regexp=new RegExp("^09[\\d]{8}$"),t===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",!1)},checkReservationLocation(e,t){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),t===""?(e.nextElementSibling.textContent="請輸入開放預約地點",!1):this.regexp.test(t)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)}};async function N(e,t,l,n,d,r,m,v,T,p,u,f,b,y,I,h,x,L,w){w.classList.add("was-validated");let a={};if(t.addEventListener("keyup",s=>{i.checkName(s.target,s.target.value)}),t.addEventListener("paste",s=>{i.checkName(s.target,s.target.value)}),l.addEventListener("keyup",s=>{i.checkPwd(s.target,s.target.value)}),l.addEventListener("paste",s=>{i.checkPwd(s.target,s.target.value)}),n.addEventListener("keyup",s=>{i.checkNickName(s.target,s.target.value)}),n.addEventListener("paste",s=>{i.checkNickName(s.target,s.target.value)}),d.addEventListener("keyup",s=>{i.checkBirth(s.target,s.target.value)}),d.addEventListener("paste",s=>{i.checkBirth(s.target,s.target.value)}),r.addEventListener("keyup",s=>{i.checkMail(s.target,s.target.value)}),r.addEventListener("paste",s=>{i.checkMail(s.target,s.target.value)}),m.addEventListener("keyup",s=>{i.checkTel(s.target,s.target.value)}),m.addEventListener("paste",s=>{i.checkTel(s.target,s.target.value)}),u.addEventListener("keyup",s=>{i.checkReservationLocation(s.target,s.target.value)}),u.addEventListener("paste",s=>{i.checkReservationLocation(s.target,s.target.value)}),i.checkName(t,t.value)&&i.checkPwd(l,l.value)&&i.checkNickName(n,n.value)&&i.checkBirth(d,d.value)&&i.checkTel(m,m.value)&&i.checkReservationLocation(u,u.value)&&w.checkValidity()){a.image=e.getAttribute("src"),a.name=t.value,a.password=l.value,a["nick name"]=n.value,a.birthday=d.value,a.tel=m.value,a.email=r.value,a["reservation time"]=p.value,a["reservation time selectedIndex"]=p.selectedIndex,a["reservation location"]=u.value,a.height=f.value?f.value:"",a.weight=b.value?b.value:"",a.PopArea=y.value,a["PopArea selectedIndex"]=y.selectedIndex,a.style=I.value,a["style selectedIndex"]=I.selectedIndex,a["outfit price"]=h.value,a["outfit price selectedIndex"]=h.selectedIndex,a["love store"]=x.value?x.value:"",a.introduce=L.value?L.value:"",v.checked===!0?a.sex="Male":a.sex="Female";const s=Number(g("outfitpalsId")),q=g("outfitpalsToken");await S.patchUsers(s,q,a),location.href="https://bftsai.github.io/outfitpals/member.html",signUpPhoto.src=e.getAttribute("src"),t.value="",l.value="",n.value="",d.value="",m.value="",r.value="",p.selectedIndex=0,u.value="",f.value="",b.value="",y.selectedIndex=0,I.selectedIndex=0,h.selectedIndex=0,x.value="",L.value=""}else console.log("all false")}const j=document.querySelector(".member-index"),U=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const M=document.querySelector(".memberSignUpForm"),R=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const A=document.querySelector(".memberSignInForm"),C=document.querySelector(".signInBtn"),F=document.querySelector(".signUpBtn"),$=document.querySelector(".gmailSignIn"),P=document.querySelector(".gmailSignUp"),c=document.getElementById("account"),o=document.getElementById("pwd"),D=document.getElementById("signUpImg");let E=document.querySelector(".signUpPhoto");const H=document.getElementById("signUpPwd"),O=document.getElementById("signUpMail"),z=document.getElementById("signUpName"),W=document.getElementById("signUpNickName"),Z=document.getElementById("signUpBirth"),V=document.getElementById("signUpTel"),_=document.getElementById("signUpMale"),G=document.getElementById("signUpFemale"),J=document.getElementById("signUpReservationTime"),K=document.getElementById("signUpReservationLocation"),Q=document.getElementById("signUpHeight"),X=document.getElementById("signUpWeight"),Y=document.getElementById("signUpPopArea"),ee=document.getElementById("signUpStyle"),te=document.getElementById("signUpOutfitPrice"),se=document.getElementById("signUpLoveStore"),le=document.getElementById("signUpIntroduce"),B=document.querySelector(".memberIndexSubmit"),ie=document.querySelector(".memberIndexCancel"),ae=document.querySelector(".memberSignUpSubmit");g("outfitpalsThirdParty")==="false"&&g("outfitpalsToken")&&g("outfitpalsId")&&(j.classList.add("opacity-0"),c.value="",o.value="",S.renderMemberSignInProfileForm(),j.classList.add("d-none"),R.classList.remove("d-none"),R.classList.remove("opacity-0"));C.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),c.value="",o.value="",B.textContent="登入",U.classList.remove("was-validated"),c.classList.remove("is-invalid"),c.setAttribute("style",""),o.classList.remove("is-invalid"),o.setAttribute("style",""),e.target.classList.add("active"),P.classList.add("opacity-0"),setTimeout(()=>{P.classList.add("d-none"),$.classList.remove("d-none"),setTimeout(()=>{$.classList.remove("opacity-0")},0)},400)});F.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(t=>{t.classList.remove("active")}),c.value="",o.value="",B.textContent="註冊",U.classList.remove("was-validated"),c.classList.remove("is-invalid"),c.setAttribute("style",""),o.classList.remove("is-invalid"),o.setAttribute("style",""),e.target.classList.add("active"),$.classList.add("opacity-0"),setTimeout(()=>{$.classList.add("d-none"),P.classList.remove("d-none"),setTimeout(()=>{P.classList.remove("opacity-0")},0)},400)});B.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),U.classList.add("was-validated"),i.checkAccount(c,c.value),i.checkSignUpIndexPwd(o,o.value),c.addEventListener("keyup",t=>{i.checkAccount(t.target,t.target.value)}),c.addEventListener("paste",t=>{i.checkAccount(t.target,t.target.value)}),o.addEventListener("keyup",t=>{i.checkSignUpIndexPwd(t.target,t.target.value)}),o.addEventListener("paste",t=>{i.checkSignUpIndexPwd(t.target,t.target.value)}),i.checkAccount(c,c.value)&&i.checkSignUpIndexPwd(o,o.value)){let t={};t.email=c.value,t.password=o.value,t["third party"]="false",C.className.includes("active")?S.signIn(t):S.register(t)}});ie.addEventListener("click",e=>{c.value="",o.value=""});D.addEventListener("change",e=>{let t=new FileReader;t.addEventListener("load",l=>{E.setAttribute("src",l.target.result)}),t.readAsDataURL(e.target.files[0])});ae.addEventListener("click",async e=>{e.preventDefault(),e.stopPropagation();function t(l){let n=new Image,d=l.match(/\.jpg/)?"image/jpeg":"image/png";return new Promise((r,m)=>{n.onload=function(){let v=document.createElement("canvas");v.width=this.naturalWidth,v.height=this.naturalHeight,v.getContext("2d").drawImage(this,0,0),r(v.toDataURL(d,1))},n.onerror=function(){m("Error: Image load failed")},n.src=l})}await t(E.getAttribute("src")).then(l=>{E.src=l}).catch(l=>{console.log(l)}),N(E,z,H,W,Z,O,V,_,G,J,K,Q,X,Y,ee,te,se,le,M)});A.addEventListener("click",e=>{document.getElementById("signInImg");const t=document.querySelector(".signInPhoto"),l=document.getElementById("signInPwd"),n=document.getElementById("signInMail"),d=document.getElementById("signInName"),r=document.getElementById("signInNickName"),m=document.getElementById("signInBirth"),v=document.getElementById("signInTel"),T=document.getElementById("signInMale"),p=document.getElementById("signInFemale"),u=document.getElementById("signInReservationTime"),f=document.getElementById("signInReservationLocation"),b=document.getElementById("signInHeight"),y=document.getElementById("signInWeight"),I=document.getElementById("signInPopArea"),h=document.getElementById("signInStyle"),x=document.getElementById("signInOutfitPrice"),L=document.getElementById("signInLoveStore"),w=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),N(t,d,l,r,m,n,v,T,p,u,f,b,y,I,h,x,L,w,A)):e.target.className.includes("memberSignInReviseCancel")&&(location.href="http://localhost:5173/outfitpals/pages/member.html")},!1);
