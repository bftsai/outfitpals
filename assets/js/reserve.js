//axios
import axios from 'axios';
//jQuery
import $ from "jquery";
//customer function
import { ajaxMember,cookieValue } from "./ajaxMember";

//switch reserveMyDiscuss reserveManageAppointments
$(document).ready(function () {
    $('.btn-group .btn').click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        reserveComponent.render();
    });
});
//JS
const reserveBtnGroup=document.querySelector('.c-switch-btn-group');
const reserveContent=document.querySelector('.reserve-content');


const reserveManageAppointments=document.querySelector('.reserve-manageAppointments');
const pagination=document.querySelector('.pagination');
const reserveManageAppointmentsRadioCheck=document.getElementById('reserve-manageAppointmentsApprove');
const reserveManageAppointmentsRadioCancel=document.getElementById('reserve-manageAppointmentsCancel');
const reserveManageAppointmentsTextarea=document.querySelector('.reserve-manageAppointments textarea');
const reserveManageAppointmentsConfirmSubmit=document.querySelector('.reserveManageAppointmentsConfirmSubmit');
const reserveManageAppointmentsConfirmCancel=document.querySelector('.reserveManageAppointmentsConfirmCancel');
const backToReserveAll=[...document.querySelectorAll('.backToReserve')];

const reserveComponent={
    data:{},
    async getPostArr(){
        try {
            const postArr=await ajaxMember.getPosts();
            return postArr;
        } catch (err) {
            console.log(err);
        }
    },
    async getCommentArr(id){
        try {
            const commentsArr=await ajaxMember.getComment(id);
            return commentsArr;
        } catch (err) {
            console.log(err);
        }
    },
    async getUserData(id){
        try {
            const commentUser=await ajaxMember.getUserData(id);
            return commentUser;
        } catch (err) {
            console.log(err);
        }
    },
    async render(){
        let strReserveContentMyDiscuss='',strReserveManageAppointments='';
        const postArr=await this.getPostArr(); //取得登入者貼文
        const stateDom=[...reserveBtnGroup.children[0].children[0].children[0].children].find(item=>{
            if(item.className.includes('active')){
                return item;
            }
        });
        
        postArr.forEach(async item=>{
            
            const postId=item.id;
            const commentsArr=await this.getCommentArr(postId) //取得所有回覆貼文的留言
            
            commentsArr.forEach(async item=>{
                const userData=await this.getUserData(item.userId); //按順序取得所有回覆者的個資
                const time=new Date(item.postTime).toLocaleString('chinese',{hour12:false}).split(' ')[0];
                if(item.state===false){
                    strReserveContentMyDiscuss+=`<li class="row justify-content-between justify-content-lg-center align-items-center py-7 border border-grey1D" data-id=${userData.id}>
                    <div class="col-3 col-lg-2">
                    <img src="${userData.image}" class="object-fit-cover rounded-circle d-block mx-auto" alt="personal pic">
                    </div>
                    <div class="col-5 col-sm-6 col-lg-8">
                    <div class="card-body position-relative">
                        <p class="card-title fs-5 fs-lg-3 fw-bold">${userData.name}</p>
                        <p class="card-text multiline-ellipsis">
                        ${item.body}
                        </p>
                        <span class="badge rounded-pill text-bg-greyE9 text-grey66 position-absolute fs-lg-8 top-10 start-100 start-sm-75 start-md-50 start-lg-30">預約中</span>
                    </div>
                    </div>
                    <div class="col-4 col-sm-3 col-lg-2">
                    <p class="card-text text-grey9F fs-8 text-end text-md-center">
                        ${time}
                    </p>
                    </div>
                    </li>`;
                }else if(item.state===true){
                    strReserveManageAppointments+=`<li class="row justify-content-between justify-content-lg-center align-items-center py-7 border border-grey1D" data-id=${userData.id}>
                    <div class="col-3 col-lg-2">
                    <img src="${userData.image}" class="object-fit-cover rounded-circle d-block mx-auto" alt="personal pic">
                    </div>
                    <div class="col-5 col-sm-6 col-lg-8">
                    <div class="card-body position-relative">
                        <p class="card-title fs-5 fs-lg-3 fw-bold">${userData.name}</p>
                        <p class="card-text multiline-ellipsis">
                        ${item.body}
                        </p>
                        <span class="badge rounded-pill text-bg-greyE9 text-grey66 position-absolute fs-lg-8 top-10 start-100 start-sm-75 start-md-50 start-lg-30">預約中</span>
                    </div>
                    </div>
                    <div class="col-4 col-sm-3 col-lg-2">
                    <p class="card-text text-grey9F fs-8 text-end text-md-center">
                        ${time}
                    </p>
                    </div>
                    </li>`;
                }
                
                if(stateDom.textContent==='我的預約'){
                    reserveContent.innerHTML=strReserveContentMyDiscuss;
                }else if(stateDom.textContent==='預約管理'){
                    reserveContent.innerHTML=strReserveManageAppointments;
                }
                

                const reserveContentAllLi=[...document.querySelectorAll('.reserve-content li')];
                //reserve into reserveMyDiscuss or reserveManageAppointments
                reserveContentAllLi.forEach(item=>{
                    item.addEventListener('click',e=>{
                        reserveBtnGroup.classList.add('opacity-0');
                        reserveContent.classList.add('opacity-0');
                        pagination.classList.add('opacity-0');
                        setTimeout(() => {
                            reserveBtnGroup.classList.add('d-none');
                            reserveContent.classList.add('d-none');
                            pagination.classList.add('d-none');
                            reserveMyDiscuss.classList.remove('d-none');
                            setTimeout(() => {
                                reserveMyDiscuss.classList.remove('opacity-0');
                            }, 0);

                            // reserveManageAppointments
                            // reserveManageAppointments.classList.remove('d-none');
                            // setTimeout(() => {
                            //     reserveManageAppointments.classList.remove('opacity-0');
                            // }, 0);
                        }, 400);
                        
                        console.log(e.target.closest('li').getAttribute('data-id'));
                        let strReserveMyDiscuss=
                            `<p>
                            <span class="material-symbols-outlined fs-lg-1 fw-bold py-7 py-lg-9 px-3 px-7 backToReserve">
                            arrow_back_ios
                            </span>
                            </p>
                            <div class="row justify-content-around align-items-center border-bottom border-grey9F py-7 py-lg-9">
                                <div class="col-3 col-lg-2">
                                <img class="rounded-circle object-fit-cover" src="../assets/images/reserve/female-1.svg" alt="personal pic">
                                </div>
                                <div class="col-5 col-lg-6">
                                <p class="fs-4 fs-lg-2 fw-bold">Wang ming</p>
                                </div>
                                <div class="col-4 col-lg-2">
                                <p class="fw-bold text-grey9F fs-8 fs-lg-7 text-end text-lg-start">
                                    2023/10/26
                                </p>
                                </div>
                            </div>
                            <div class="row py-7 py-lg-9">
                                <div class="col-12">
                                <p class="fs-lg-4 fw-bold">預約時間：112年10月5號 15:00</p>
                                </div>
                                <div class="col-12">
                                <p class="fs-lg-4 fw-bold">地點：<a href="#">忠孝復興站1號出口</a></p>
                                </div>
                                <div class="col-8 col-lg-9">
                                <p class="fs-lg-4 fw-bold">狀態：預約中</p>
                                </div>
                                <div class="col-4 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input fs-lg-4" type="radio" name="reserve-myDiscuss" id="reserve-myDiscussCancel">
                                    <label class="form-check-label fw-bold fs-lg-4" for="reserve-myDiscussCancel">
                                    取消預約
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div class="row flex-column">
                                <div class="col-8 d-flex">
                                <p class="bg-black text-primary fs-lg-4 p-3 p-lg-7 rounded-4 mb-7 mb-lg-9">
                                    哈摟，我很喜歡你的穿搭，希望能有機會跟您約時間碰面，想請您幫忙研究如何穿搭比較好，如有興趣，再麻煩撥空回覆，萬分感謝！
                                </p>
                                </div>
                                <div class="col-8 d-flex align-self-end">
                                <p class="bg-primary text-white fs-lg-4 p-3 p-lg-7 rounded-4 ms-auto text-end mb-7 mb-lg-9">
                                    好啊，那我們就當天見！
                                </p>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-10">
                                <textarea class="w-100 p-3 p-lg-7 fs-lg-4 mb-7 mb-lg-9" name="" id="" placeholder="請輸入文字..."></textarea>
                                </div>
                                <div class="col-6">
                                <div class="c-confirm-btn-group btn-group w-100 mb-7 mb-lg-9" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-black18 text-primary active py-lg-3 px-lg-7 reserveMyDiscussConfirmSubmit" disabled>送出</button>
                                    <button type="button" class="btn btn-black18 text-primary py-lg-3 px-lg-7 reserveMyDiscussConfirmCancel">取消</button>
                                </div>
                                </div>
                            </div>`;
                        const reserveMyDiscuss=document.querySelector('.reserve-myDiscuss');
                        const reserveMyDiscussRadioCancel=document.getElementById('reserve-myDiscussCancel');
                        const reserveMyDiscussTextarea=document.querySelector('.reserve-myDiscuss textarea');
                        const reserveMyDiscussConfirmSubmit=document.querySelector('.reserveMyDiscussConfirmSubmit');
                        const reserveMyDiscussConfirmCancel=document.querySelector('.reserveMyDiscussConfirmCancel');
                        //reserveMyDiscuss-
                        reserveMyDiscussRadioCancel.addEventListener('click',e=>{
                            if(reserveMyDiscussRadioCancel.checked===true){
                                reserveMyDiscussConfirmSubmit.disabled=false;
                            }
                        });
                        reserveMyDiscussTextarea.addEventListener('keyup',e=>{
                            if(reserveMyDiscussTextarea.value!==''){
                                reserveMyDiscussConfirmSubmit.disabled=false;
                            }else{
                                reserveMyDiscussConfirmSubmit.disabled=true;
                            }
                        });
                        reserveMyDiscussConfirmCancel.addEventListener('click',e=>{
                            reserveMyDiscussTextarea.value='';
                            reserveMyDiscussRadioCancel.checked=false;
                            reserveMyDiscussConfirmSubmit.disabled=true;
                        });
                        //reserveMyDiscuss back to reserve
                        backToReserveAll[0].addEventListener('click',e=>{
                            reserveMyDiscussTextarea.value='';
                            reserveMyDiscussRadioCancel.checked=false;
                            reserveMyDiscussConfirmSubmit.disabled=true;
                            reserveMyDiscuss.classList.add('opacity-0');
                            setTimeout(() => {
                                reserveBtnGroup.classList.remove('d-none');
                                reserveContent.classList.remove('d-none');
                                pagination.classList.remove('d-none');
                                reserveMyDiscuss.classList.add('d-none');
                                setTimeout(() => {
                                    reserveBtnGroup.classList.remove('opacity-0');
                                    reserveContent.classList.remove('opacity-0');
                                    pagination.classList.remove('opacity-0');
                                }, 0);
                            }, 400);
                        });
                    })
                });
            });
        });
    },
};
reserveComponent.render();



//reserveManageAppointments back to reserve
backToReserveAll[1].addEventListener('click',e=>{
    reserveManageAppointmentsTextarea.value='';
    reserveManageAppointmentsRadioCheck.checked=false;
    reserveManageAppointmentsRadioCancel.checked=false;
    reserveManageAppointmentsConfirmSubmit.disabled=true;
    reserveManageAppointments.classList.add('opacity-0');
    setTimeout(() => {
        reserveBtnGroup.classList.remove('d-none');
        reserveContent.classList.remove('d-none');
        pagination.classList.remove('d-none');
        reserveManageAppointments.classList.add('d-none');
        setTimeout(() => {
            reserveBtnGroup.classList.remove('opacity-0');
            reserveContent.classList.remove('opacity-0');
            pagination.classList.remove('opacity-0');
        }, 0);
    }, 400);
});

//reserveManageAppointments
document.querySelector('.reserve-manageAppointments .row:nth-child(3)').addEventListener('click',e=>{
    if(reserveManageAppointmentsRadioCheck.checked===true||reserveManageAppointmentsRadioCancel.checked===true){
        reserveManageAppointmentsConfirmSubmit.disabled=false;
    }
});
reserveManageAppointmentsTextarea.addEventListener('keyup',e=>{
    if(reserveManageAppointmentsTextarea.value!==''){
        reserveManageAppointmentsConfirmSubmit.disabled=false;
    }else{
        reserveManageAppointmentsConfirmSubmit.disabled=true;
    }
});
reserveManageAppointmentsConfirmCancel.addEventListener('click',e=>{
    reserveManageAppointmentsTextarea.value='';
    reserveManageAppointmentsRadioCheck.checked=false;
    reserveManageAppointmentsRadioCancel.checked=false;
    reserveManageAppointmentsConfirmSubmit.disabled=true;
});

