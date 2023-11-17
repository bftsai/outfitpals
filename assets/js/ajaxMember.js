const apiUrl='http://localhost:3000/';
export const ajaxMember={
    data: [],
    async register(obj){
        try {
            const register=await axios.post(`${apiUrl}register`,obj);
            if(register.status==201){
                await this.patchUsers({
                    "sign time": `${new Date()}`,
                    email: obj.email,
                    "third party": false
                });
                localStorage.outfitpalsToken=register.data.accessToken;
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
        const patchUsers=await axios.patch(`${apiUrl}users/${id}`,obj);
    },
    async signIn(obj){
        try {
            const signIn=await axios.post(`${apiUrl}signin`,obj);
            if(signIn.status===200){
                console.log(signIn);
                localStorage.outfitpalsToken=signIn.data.accessToken;
                this.data=signIn.data.user;

                memberIndex.classList.add('opacity-0');
                setTimeout(() => {
                    account.value='';
                    pwd.value='';
                    memberIndex.classList.add('d-none');
                    memberSignInProfile.classList.remove('d-none');
                    setTimeout(() => {
                        memberSignInProfile.classList.remove('opacity-0');
                    }, 0);
                }, 400);
                this.renderMemberSignInProfileForm();
                //location.href='https://bftsai.github.io/outfitpals/index.html';
            }
        } catch (err) {
            console.log(err.response.data);
            memberIndexForm.classList.add('was-validated');
            account.classList.add('is-invalid');
            account.nextElementSibling.textContent=err.response.data;
            account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
        }
    },
    renderMemberSignInProfileForm(){
        let str=`
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
                <p class="fs-lg-5">${this.data['nick name']}</p>
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
                <p class="fs-lg-5">${this.data['reservation time']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>開放預約地點</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['reservation location']}</p>
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
                <p class="fs-lg-5">${this.data['outfit price']}</p>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-4 col-lg-2">
                <p>逛街愛店</p>
            </div>
            <div class="col-6 col-lg-4 col-xl-3">
                <p class="fs-lg-5">${this.data['love store']}</p>
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
            <div class="col-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInProfileRevise" type="submit">修改</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberMainPage" type="submit">我的主頁</button>
            </div>
        </div>
        <div class="row justify-content-center py-9 py-lg-13 c-confirm-btn-group">
            <div class="col-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberCollect" type="submit">我的收藏</button>
            </div>
        </div>`;
      memberSignInProfileForm.innerHTML=str;
      memberSignInProfileForm.addEventListener('click',e=>{
        //revise profile
        if(e.target.className.includes('memberSignInProfileRevise')){
            console.log(this.data);
            this.renderMemberSignInForm();
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
    
    },
    renderMemberSignInForm(){
        let str=`
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
            <div class="col-lg-2 d-flex align-items-center">
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
            <div class="col-lg-2 d-flex align-items-center">
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
            <div class="col-lg-2 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInNickName" class="form-label">暱稱</label>
            </div>
            <div class="col-lg-6">
            <input type="text" name="nick name" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInNickName" placeholder="請輸入暱稱" value="${this.data['nick name']}" required>
            <div class="invalid-feedback">
                請輸入暱稱
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center">
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
            <div class="col-lg-2 d-flex align-items-center">
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
            <div class="col-lg-2 d-flex align-items-center">
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
            <div class="col-lg-2 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInSex" class="form-label">性別</label>
            </div>
            <div class="col-lg-6">
            <input class="form-check-input" type="radio" name="性別" id="signInMale" ${this.data.sex==='Male'? 'checked':''}>
            <label class="form-check-label" for="signInMale" required>
                男生
            </label>
            <input class="form-check-input" type="radio" name="性別" id="signInFemale" ${this.data.sex==='Female'? 'checked':''}>
            <label class="form-check-label" for="signInFemale">
                女生
            </label>
            <div class="invalid-feedback">
                請選擇性別
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationTime" class="form-label">開放預約時間</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInReservationTime" name="開放預約時間" required>
                <option disabled>請選擇開放預約時間</option>
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
            <div class="col-lg-2 d-flex align-items-center">
            <span class="material-symbols-outlined fs-lg-5 me-2">
                star
            </span>
            <label for="signInReservationLocation" class="form-label">開放預約地點</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInReservationLocation" placeholder="請輸入開放預約地點" name="開放預約地點" value="${this.data['reservation location']}" required>
            <div class="invalid-feedback">
                請輸入開放預約地點
            </div>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInHeight" class="form-label">身高</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInHeight" placeholder="請輸入身高" name="身高" value="${this.data.height}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInWeight" class="form-label">體重</label>
            </div>
            <div class="col-lg-6">
            <input type="number" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInWeight" placeholder="請輸入體重" name="體重" value="${this.data.weight}">
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInPopArea" class="form-label">活動範圍</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInPopArea" name="活動範圍">
                <option ${this.data.PopArea==="" ? 'selected':''}  disabled>請選擇活動範圍</option>
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
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInStyle" class="form-label">打扮風格</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInStyle" name="打扮風格">
                <option ${this.data.style==="" ? 'selected':''} disabled>請選擇打扮風格</option>
                <option>日系</option>
                <option>韓系</option>
                <option>中國風</option>
                <option>歐系</option>
                <option>美系</option>
            </select>
            </div>
        </div>
        <div class="row justify-content-center align-items-center mb-3 fs-lg-5">
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInOutfitPrice" class="form-label">穿搭價位</label>
            </div>
            <div class="col-lg-6">
            <select class="form-select fs-lg-5 py-lg-3 px-lg-7" id="signInOutfitPrice" name="穿搭價位" value="${this.data['outfit price']==="" ? '請選擇穿搭價位':this.data['outfit price']}">
                <option ${this.data['outfit price']==="" ? 'selected':''} disabled>請選擇穿搭價位</option>
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
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
            <label for="signInLoveStore" class="form-label">逛街愛店</label>
            </div>
            <div class="col-lg-6">
            <input type="text" class="form-control fs-lg-5 py-lg-3 px-lg-7" id="signInLoveStore" placeholder="請輸入逛街愛店" name="逛街愛店" value="${this.data['love store']}">
            </div>
        </div>
        <div class="row justify-content-center align-items-start mb-3 fs-lg-5">
            <div class="col-lg-2">
            <i class="fa-solid fa-star" style="color: transparent;"></i>
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
            <div class="col-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseSubmit" type="submit">修改</button>
            </div>
            <div class="col-3 d-flex">
                <button class="btn btn-black18 fs-lg-5 text-primary py-lg-3 px-lg-7 flex-grow-1 memberSignInReviseCancel" type="button">取消</button>
            </div>
        </div>`;
        memberSignInForm.innerHTML=str;
        document.getElementById('signInReservationTime').selectedIndex=this.data['reservation time selectedIndex'];
        document.getElementById('signInPopArea').selectedIndex=this.data['PopArea selectedIndex'];
        document.getElementById('signInStyle').selectedIndex=this.data['style selectedIndex'];
        document.getElementById('signInOutfitPrice').selectedIndex=this.data['outfit price selectedIndex'];
    },
    async delete(id){
        try {
            const deleted=await axios.delete(`${apiUrl}users/${id}`);
        } catch (err) {
            console.log(err);
        }
    }
};