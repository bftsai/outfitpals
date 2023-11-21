import"./main-daaf18eb.js";const L="https://outfitpals-web-server.onrender.com/";function r(e){const s=document.cookie.split(";").find(a=>{if(a.split("=")[0].trim()===e)return a});return s===void 0?void 0:s.split("=")[1]}const w={data:[],async register(e){try{const s=await axios.post(`${L}register`,e);if(s.status==201){document.cookie=`outfitpalsToken=${s.data.accessToken}`,document.cookie=`outfitpalsId=${s.data.user.id}`,document.cookie=`outfitpalsThirdParty=${s.data.user["third party"]}`;const a=Number(r("outfitpalsId")),n=r("outfitpalsToken");await this.patchUsers(a,n,{"sign time":`${new Date}`}),signUpMail.value=account.value,signUpPwd.value=pwd.value,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignUpData.classList.remove("d-none"),setTimeout(()=>{memberSignUpData.classList.remove("opacity-0")},0)},400)}}catch(s){console.log(s.response),memberIndexForm.classList.add("was-validated"),account.classList.add("is-invalid"),account.nextElementSibling.textContent=s.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")}},async patchUsers(e,s,a){console.log(e,s,a);try{const n=await axios.patch(`${L}600/users/${e}`,a,{headers:{authorization:`Bearer ${s}`}})}catch(n){console.log(n)}},async signIn(e){try{const s=await axios.post(`${L}signin`,e);console.log(s),s.status===200&&(document.cookie=`outfitpalsToken=${s.data.accessToken}`,document.cookie=`outfitpalsId=${s.data.user.id}`,document.cookie=`outfitpalsThirdParty=${s.data.user["third party"]}`,this.data=s.data.user,memberIndex.classList.add("opacity-0"),setTimeout(()=>{account.value="",pwd.value="",memberIndex.classList.add("d-none"),memberSignInProfile.classList.remove("d-none"),setTimeout(()=>{memberSignInProfile.classList.remove("opacity-0")},0)},400),this.renderMemberSignInProfileForm())}catch(s){console.log(s.response.data),memberIndexForm.classList.add("was-validated"),s.response.data.includes("user")?(account.classList.add("is-invalid"),account.nextElementSibling.textContent=s.response.data,account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);")):(pwd.classList.add("is-invalid"),pwd.nextElementSibling.textContent=s.response.data,pwd.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);"))}},async renderMemberSignInProfileForm(){const e=Number(r("outfitpalsId")),s=r("outfitpalsToken");this.data=(await axios.get(`${L}users/${e}`,{headers:{authorization:`Bearer ${s}`}})).data;let a=`
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
        </div>`;memberSignInProfileForm.innerHTML=a,memberSignInProfileForm.addEventListener("click",n=>{n.target.className.includes("memberSignInProfileRevise")&&(this.renderMemberSignInForm(),memberSignInProfile.classList.add("opacity-0"),setTimeout(()=>{memberSignInProfile.classList.add("d-none"),memberSignInData.classList.remove("d-none"),setTimeout(()=>{memberSignInData.classList.remove("opacity-0")},0)},400))})},renderMemberSignInForm(){let e=`
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
        </div>`;memberSignInForm.innerHTML=e,document.getElementById("signInReservationTime").selectedIndex=this.data["reservation time selectedIndex"],document.getElementById("signInPopArea").selectedIndex=this.data["PopArea selectedIndex"],document.getElementById("signInStyle").selectedIndex=this.data["style selectedIndex"],document.getElementById("signInOutfitPrice").selectedIndex=this.data["outfit price selectedIndex"];const s=document.getElementById("signInImg"),a=document.querySelector(".signInPhoto");s.addEventListener("change",n=>{let d=new FileReader;d.addEventListener("load",m=>{a.setAttribute("src",m.target.result)}),d.readAsDataURL(n.target.files[0])})},async signOut(e){document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''",location.href="http://localhost:5173/outfitpals/pages/member.html"},async delete(e){try{const s=await axios.delete(`${L}users/${e}`);document.cookie="outfitpalsToken= ''",document.cookie="outfitpalsId= ''",document.cookie="outfitpalsThirdParty= ''"}catch(s){console.log(s)}}},l={regexp:new RegExp(""),checkAccount(e,s){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),s===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkSignUpIndexPwd(e,s){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),s===""?(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),!1)},checkMail(e,s){return this.regexp=new RegExp("^[\\w\\d-]+\\@[\\d\\w]{3,}\\.[\\d\\w]{3,}(\\.[\\d\\w]{2,})?$"),s===""?(e.nextElementSibling.textContent="請輸入電子郵件",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，電子郵件不包含特殊字元（如：!、#、$、%、^）",!1)},checkName(e,s){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{5,}$"),s===""?(e.nextElementSibling.textContent="請輸入姓名",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，姓名不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)},checkPwd(e,s){return this.regexp=new RegExp("^[A-Z][\\d\\w]{7,}$"),s===""?(e.nextElementSibling.textContent="請輸入密碼",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，密碼第一個為大寫英文，不包含特殊字元（如：!、@、#、$、%、^），最少 8 位英數字",!1)},checkNickName(e,s){return this.regexp=new RegExp("^[一-龥_a-zA-Z\\d ]{1,}$"),s===""?(e.nextElementSibling.textContent="請輸入暱稱",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，暱稱最少三個英數字，不包含特殊字元（如：!、@、#、$、%、^）",!1)},checkBirth(e,s){return this.regexp=new RegExp("^[\\d]{4}-[\\d]{2}-[\\d]{2}$"),s===""?(e.nextElementSibling.textContent="請輸入生日",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，請輸入西元年/月/日",!1)},checkTel(e,s){return this.regexp=new RegExp("^09[\\d]{8}$"),s===""?(e.nextElementSibling.textContent="請輸入手機號碼",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，格式為0912345678",!1)},checkReservationLocation(e,s){return this.regexp=new RegExp("^[一-龥_a-zA-Z ]{2,}$"),s===""?(e.nextElementSibling.textContent="請輸入開放預約地點",!1):this.regexp.test(s)?(e.classList.remove("is-invalid"),e.classList.remove("is-invalid-customer"),e.classList.add("is-valid-customer"),!0):(e.classList.remove("is-valid-customer"),e.classList.add("is-invalid"),e.classList.add("is-invalid-customer"),e.nextElementSibling.textContent="格式錯誤，不包含數字或特殊字元（如：!、@、#、$、%、^）",!1)}};async function A(e,s,a,n,d,m,g,$,B,u,v,p,f,b,y,I,x,h,k){k.classList.add("was-validated");let i={};if(s.addEventListener("keyup",t=>{l.checkName(t.target,t.target.value)}),s.addEventListener("paste",t=>{l.checkName(t.target,t.target.value)}),a.addEventListener("keyup",t=>{l.checkPwd(t.target,t.target.value)}),a.addEventListener("paste",t=>{l.checkPwd(t.target,t.target.value)}),n.addEventListener("keyup",t=>{l.checkNickName(t.target,t.target.value)}),n.addEventListener("paste",t=>{l.checkNickName(t.target,t.target.value)}),d.addEventListener("keyup",t=>{l.checkBirth(t.target,t.target.value)}),d.addEventListener("paste",t=>{l.checkBirth(t.target,t.target.value)}),m.addEventListener("keyup",t=>{l.checkMail(t.target,t.target.value)}),m.addEventListener("paste",t=>{l.checkMail(t.target,t.target.value)}),g.addEventListener("keyup",t=>{l.checkTel(t.target,t.target.value)}),g.addEventListener("paste",t=>{l.checkTel(t.target,t.target.value)}),v.addEventListener("keyup",t=>{l.checkReservationLocation(t.target,t.target.value)}),v.addEventListener("paste",t=>{l.checkReservationLocation(t.target,t.target.value)}),l.checkName(s,s.value)&&l.checkPwd(a,a.value)&&l.checkNickName(n,n.value)&&l.checkBirth(d,d.value)&&l.checkTel(g,g.value)&&l.checkReservationLocation(v,v.value)&&k.checkValidity()){i.image=e.getAttribute("src"),i.name=s.value,i.password=a.value,i["nick name"]=n.value,i.birthday=d.value,i.tel=g.value,i.email=m.value,i["reservation time"]=u.value,i["reservation time selectedIndex"]=u.selectedIndex,i["reservation location"]=v.value,i.height=p.value?p.value:"",i.weight=f.value?f.value:"",i.PopArea=b.value,i["PopArea selectedIndex"]=b.selectedIndex,i.style=y.value,i["style selectedIndex"]=y.selectedIndex,i["outfit price"]=I.value,i["outfit price selectedIndex"]=I.selectedIndex,i["love store"]=x.value?x.value:"",i.introduce=h.value?h.value:"",$.checked===!0?i.sex="Male":i.sex="Female";const t=Number(r("outfitpalsId")),C=r("outfitpalsToken");await w.patchUsers(t,C,i),location.href="https://bftsai.github.io/outfitpals/member.html",signUpPhoto.setAttribute("src","../assets/images/member/user-solid.svg"),s.value="",a.value="",n.value="",d.value="",g.value="",m.value="",u.selectedIndex=0,v.value="",p.value="",f.value="",b.selectedIndex=0,y.selectedIndex=0,I.selectedIndex=0,x.value="",h.value=""}else console.log("all false")}const T=document.querySelector(".member-index"),P=document.querySelector(".memberIndexForm");document.querySelector(".member-signUpData");const M=document.querySelector(".memberSignUpForm"),j=document.querySelector(".member-signInProfile");document.querySelector(".memberSignInProfileForm");document.querySelector(".member-signInData");const R=document.querySelector(".memberSignInForm"),N=document.querySelector(".signInBtn"),F=document.querySelector(".signUpBtn"),E=document.querySelector(".gmailSignIn"),S=document.querySelector(".gmailSignUp"),c=document.getElementById("account"),o=document.getElementById("pwd"),D=document.getElementById("signUpImg");let q=document.querySelector(".signUpPhoto");const O=document.getElementById("signUpPwd"),z=document.getElementById("signUpMail"),H=document.getElementById("signUpName"),W=document.getElementById("signUpNickName"),Z=document.getElementById("signUpBirth"),V=document.getElementById("signUpTel"),_=document.getElementById("signUpMale"),G=document.getElementById("signUpFemale"),J=document.getElementById("signUpReservationTime"),K=document.getElementById("signUpReservationLocation"),Q=document.getElementById("signUpHeight"),X=document.getElementById("signUpWeight"),Y=document.getElementById("signUpPopArea"),ee=document.getElementById("signUpStyle"),se=document.getElementById("signUpOutfitPrice"),te=document.getElementById("signUpLoveStore"),le=document.getElementById("signUpIntroduce"),U=document.querySelector(".memberIndexSubmit"),ie=document.querySelector(".memberIndexCancel"),ae=document.querySelector(".memberSignUpSubmit");r("outfitpalsThirdParty")==="false"&&r("outfitpalsToken")&&r("outfitpalsId")&&(T.classList.add("opacity-0"),c.value="",o.value="",w.renderMemberSignInProfileForm(),T.classList.add("d-none"),j.classList.remove("d-none"),j.classList.remove("opacity-0"));N.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(s=>{s.classList.remove("active")}),c.value="",o.value="",U.textContent="登入",P.classList.remove("was-validated"),c.classList.remove("is-invalid"),c.setAttribute("style",""),o.classList.remove("is-invalid"),o.setAttribute("style",""),e.target.classList.add("active"),S.classList.add("opacity-0"),setTimeout(()=>{S.classList.add("d-none"),E.classList.remove("d-none"),setTimeout(()=>{E.classList.remove("opacity-0")},0)},400)});F.addEventListener("click",e=>{[...e.target.offsetParent.children].forEach(s=>{s.classList.remove("active")}),c.value="",o.value="",U.textContent="註冊",P.classList.remove("was-validated"),c.classList.remove("is-invalid"),c.setAttribute("style",""),o.classList.remove("is-invalid"),o.setAttribute("style",""),e.target.classList.add("active"),E.classList.add("opacity-0"),setTimeout(()=>{E.classList.add("d-none"),S.classList.remove("d-none"),setTimeout(()=>{S.classList.remove("opacity-0")},0)},400)});U.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),P.classList.add("was-validated"),l.checkAccount(c,c.value),l.checkSignUpIndexPwd(o,o.value),c.addEventListener("keyup",s=>{l.checkAccount(s.target,s.target.value)}),c.addEventListener("paste",s=>{l.checkAccount(s.target,s.target.value)}),o.addEventListener("keyup",s=>{l.checkSignUpIndexPwd(s.target,s.target.value)}),o.addEventListener("paste",s=>{l.checkSignUpIndexPwd(s.target,s.target.value)}),l.checkAccount(c,c.value)&&l.checkSignUpIndexPwd(o,o.value)){let s={};s.email=c.value,s.password=o.value,s["third party"]="false",N.className.includes("active")?w.signIn(s):w.register(s)}});ie.addEventListener("click",e=>{c.value="",o.value=""});D.addEventListener("change",e=>{let s=new FileReader;s.addEventListener("load",a=>{q.setAttribute("src",a.target.result)}),s.readAsDataURL(e.target.files[0])});ae.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),A(q,H,O,W,Z,z,V,_,G,J,K,Q,X,Y,ee,se,te,le,M)});R.addEventListener("click",e=>{document.getElementById("signInImg");const s=document.querySelector(".signInPhoto"),a=document.getElementById("signInPwd"),n=document.getElementById("signInMail"),d=document.getElementById("signInName"),m=document.getElementById("signInNickName"),g=document.getElementById("signInBirth"),$=document.getElementById("signInTel"),B=document.getElementById("signInMale"),u=document.getElementById("signInFemale"),v=document.getElementById("signInReservationTime"),p=document.getElementById("signInReservationLocation"),f=document.getElementById("signInHeight"),b=document.getElementById("signInWeight"),y=document.getElementById("signInPopArea"),I=document.getElementById("signInStyle"),x=document.getElementById("signInOutfitPrice"),h=document.getElementById("signInLoveStore"),k=document.getElementById("signInIntroduce");e.target.className.includes("memberSignInReviseSubmit")?(e.preventDefault(),e.stopPropagation(),A(s,d,a,m,g,n,$,B,u,v,p,f,b,y,I,x,h,k,R)):e.target.className.includes("memberSignInReviseCancel")&&(location.href="http://localhost:5173/outfitpals/pages/member.html")},!1);
