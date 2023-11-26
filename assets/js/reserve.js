//axios
import axios from 'axios';
//jQuery
import $ from "jquery";
//customer function
import { ajaxMember,cookieValue } from "./ajaxMember";

//spinner
const spinner=document.querySelector('.memberSpinner');
//switch reserveMyDiscuss reserveManageAppointments
$(document).ready(function () {
    $('.btn-group .btn').click(function (e) { 
        e.preventDefault();
        spinner.classList.remove('d-none');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        reserveComponent.render();
    });
});
//JS
const locationUrl='http://localhost:5173/outfitpals/pages/reserve.html';


const reserveBtnGroup=document.querySelector('.c-switch-btn-group');
const reserveContent=document.querySelector('.reserve-content');
const backToReserveAll=[...document.querySelectorAll('.backToReserve')];
//my discuss
const reserveMyDiscuss=document.querySelector('.reserve-myDiscuss');
const reserveMyDiscussRadioForm=document.querySelector('.reserve-myDiscuss-Radio-Form');
const reserveMyDiscussRadioCancel=document.getElementById('reserve-myDiscussCancel');
const reserveMyDiscussTextarea=document.querySelector('.reserve-myDiscuss textarea');
const reserveMyDiscussConfirmGroup=document.querySelector('.reserveMyDiscussConfirmGroup');
const reserveMyDiscussConfirmSubmit=document.querySelector('.reserveMyDiscussConfirmSubmit');
const reserveMyDiscussConfirmCancel=document.querySelector('.reserveMyDiscussConfirmCancel');
//manage appointment
const reserveManageAppointments=document.querySelector('.reserve-manageAppointments');
const reserveManageAppointmentsRadioForm=document.querySelector('.reserve-manageAppointments-Radio-Form')
const reserveManageAppointmentsRadioCheck=document.getElementById('reserve-manageAppointmentsApprove');
const reserveManageAppointmentsRadioCancel=document.getElementById('reserve-manageAppointmentsCancel');
const reserveManageAppointmentsTextarea=document.querySelector('.reserve-manageAppointments textarea');
const reserveManageAppointmentsConfirmGroup=document.querySelector('.reserveManageAppointmentsConfirmGroup');
const reserveManageAppointmentsConfirmSubmit=document.querySelector('.reserveManageAppointmentsConfirmSubmit');
const reserveManageAppointmentsConfirmCancel=document.querySelector('.reserveManageAppointmentsConfirmCancel');

const pagination=document.querySelector('.pagination');


const reserveComponent={
    data:{},
    getPostArr(){
        const postArr=ajaxMember.getPosts();
        return postArr;
    },
    getCommentPostArr(id){
        const postArr=ajaxMember.getPostsById(id);
        return postArr;
    },
    getCommentObj(id){
        const commentsArr=ajaxMember.getComment(id);
        return commentsArr;
    },
    getPostCommentArr(id){
        const commentsArr=ajaxMember.getPostComment(id);
        return commentsArr;
    },
    getUserComment(id){
        const commentsArr=ajaxMember.getUserComment(id);
        return commentsArr;
    },
    getUserData(id){
        const commentUser=ajaxMember.getUserData(id);
        return commentUser;
    },
    async render(){
        const postArr=await this.getPostArr(); //取得登入者貼文
        const commentArr=await this.getUserComment(cookieValue('outfitpalsId'));
        const stateDom=[...reserveBtnGroup.children[0].children[0].children[0].children].find(item=>{
            if(item.className.includes('active')){
                return item;
            }
        });
        if(stateDom.textContent==='我的預約'){
            reserveContent.innerHTML='';
            if(commentArr.length!==0){
                commentArr.forEach(async (item,index)=>{
                    const userData=await this.getUserData(item.userId);
                    const time=new Date(item.postTime).toLocaleString('chinese',{hour12:false}).split(' ')[0];

                    const li=document.createElement('li');
                    li.className='row justify-content-between justify-content-lg-center align-items-center py-7 border border-grey1D';
                    li.setAttribute('data-id',item.id);
                    reserveContent.appendChild(li);
                    const col3=document.createElement('div');
                    col3.className='col-3 col-lg-2';
                    li.appendChild(col3);
                    const img=document.createElement('img');
                    img.className='object-fit-cover rounded-circle d-block mx-auto';
                    img.src=userData.image;
                    img.alt='personal pic';
                    col3.appendChild(img);

                    const col5=document.createElement('div');
                    col5.className='col-5 col-sm-6 col-lg-8';
                    li.appendChild(col5);
                    const cardBody=document.createElement('div');
                    cardBody.className='card-body position-relative';
                    col5.appendChild(cardBody);
                    const cardTitle=document.createElement('p');
                    cardTitle.className='card-title fs-5 fs-lg-3 fw-bold';
                    cardTitle.textContent=userData.name;
                    let cardText=document.createElement('p');
                    cardText.className='card-text multiline-ellipsis';
                    cardText.textContent=item.body;
                    const badge=document.createElement('span');
                    badge.className='badge rounded-pill text-bg-greyE9 text-grey66 position-absolute fs-lg-8 top-10 start-100 start-sm-75 start-md-50 start-lg-30';
                    badge.textContent=item.state===false? '預約中':(badge.textContent=item.state==='accept'? '預約成功':(badge.textContent=item.state==='reject'? '已拒絕':'已取消'));
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(cardText);
                    cardBody.appendChild(badge);

                    const col4=document.createElement('div');
                    col4.className='col-4 col-sm-3 col-lg-2';
                    li.appendChild(col4);
                    cardText=document.createElement('p');
                    cardText.className='card-text text-grey9F fs-8 text-end text-md-center';
                    cardText.textContent=time;
                    col4.appendChild(cardText);

                    spinner.classList.add('d-none');
                    
                    const reserveContentAllLi=[...document.querySelectorAll('.reserve-content li')];
                    reserveContentAllLi[index].addEventListener('click',async e=>{
                        spinner.classList.remove('d-none');
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
                                spinner.classList.add('d-none');
                            }, 0);
                        }, 400);

                        const commentId=e.target.closest('li').getAttribute('data-id');
                        reserveMyDiscuss.setAttribute('data-id',commentId);
                        const comment=await reserveComponent.getCommentObj(commentId);
                        const time=new Date(comment.postTime).toLocaleString('chinese',{hour12:false}).split(' ')[0];
                        const posterData=await reserveComponent.getUserData(comment.userId);
                        
                        if(comment.state==='accept'||comment.state==='reject'||comment.state==='cancel'){
                            reserveMyDiscussRadioForm.classList.add('d-none');
                            reserveMyDiscussConfirmGroup.classList.add('d-none');
                        }else if(comment.state===false){
                            reserveMyDiscussRadioForm.classList.remove('d-none');
                            reserveMyDiscussConfirmGroup.classList.remove('d-none');
                        }

                        const image=document.querySelector('.reserve-myDiscuss .image');
                        const name=document.querySelector('.reserve-myDiscuss .name');
                        const date=document.querySelector('.reserve-myDiscuss .date');
                        const reservationTime=document.querySelector('.reserve-myDiscuss .reservationTime');
                        const location=document.querySelector('.reserve-myDiscuss .location');
                        const state=document.querySelector('.reserve-myDiscuss .state');
                        const commentBody=document.querySelector('.reserve-myDiscuss .commentBody');

                        image.src=posterData.image;
                        name.textContent=posterData.name;
                        date.textContent=time;
                        reservationTime.textContent=comment.reservationTime;
                        location.textContent=comment.location;
                        state.textContent=comment.state===false? '預約中':(comment.state==='accept'?'預約成功':(comment.state==='reject'?'已拒絕':'已取消'));
                        commentBody.textContent=comment.body;
                    });
                });
            }
            
        }else if(stateDom.textContent==='預約管理'){
            reserveContent.innerHTML='';
            if(postArr.length!==0){
                postArr.forEach(async item=>{
                    const postId=item.id;
                    const commentsArr=await this.getPostCommentArr(postId) //取得所有回覆貼文的留言
                    
                    commentsArr.forEach(async (item,index)=>{
                        const userData=await this.getUserData(item.userId); //按順序取得所有回覆者的個資
                        const time=new Date(item.postTime).toLocaleString('chinese',{hour12:false}).split(' ')[0];
                        
                        const li=document.createElement('li');
                        li.className='row justify-content-between justify-content-lg-center align-items-center py-7 border border-grey1D';
                        li.setAttribute('data-id',item.id);
                        reserveContent.appendChild(li);

                        const col3=document.createElement('div');
                        col3.className='col-3 col-lg-2';
                        li.appendChild(col3);
                        const img=document.createElement('img');
                        img.className='object-fit-cover rounded-circle d-block mx-auto';
                        img.src=userData.image;
                        img.alt='personal pic';
                        col3.appendChild(img);

                        const col5=document.createElement('div');
                        col5.className='col-5 col-sm-6 col-lg-8';
                        li.appendChild(col5);

                        const cardBody=document.createElement('div');
                        cardBody.className='card-body position-relative';
                        col5.appendChild(cardBody);

                        const cardTitle=document.createElement('p');
                        cardTitle.className='card-title fs-5 fs-lg-3 fw-bold';
                        cardTitle.textContent=userData.name;
                        let cardText=document.createElement('p');
                        cardText.className='card-text multiline-ellipsis';
                        cardText.textContent=item.body;
                        const badge=document.createElement('span');
                        badge.className='badge rounded-pill text-bg-greyE9 text-grey66 position-absolute fs-lg-8 top-10 start-100 start-sm-75 start-md-50 start-lg-30';
                        badge.textContent=item.state===false? '預約中':(badge.textContent=item.state==='accept'? '預約成功':(badge.textContent=item.state==='reject'? '已拒絕':'已取消'));
                        cardBody.appendChild(cardTitle);
                        cardBody.appendChild(cardText);
                        cardBody.appendChild(badge);

                        const col4=document.createElement('div');
                        col4.className='col-4 col-sm-3 col-lg-2';
                        li.appendChild(col4);
                        cardText=document.createElement('p');
                        cardText.className='card-text text-grey9F fs-8 text-end text-md-center';
                        cardText.textContent=time;
                        col4.appendChild(cardText);
                        spinner.classList.add('d-none');

                        const reserveContentAllLi=[...document.querySelectorAll('.reserve-content li')];
                        //reserve into reserveManageAppointments
                        reserveContentAllLi.forEach(item=>{
                            if(Number(item.getAttribute('data-id'))===postId){
                                item.addEventListener('click',async e=>{
                                    spinner.classList.remove('d-none');
                                    reserveBtnGroup.classList.add('opacity-0');
                                    reserveContent.classList.add('opacity-0');
                                    pagination.classList.add('opacity-0');
                                    setTimeout(() => {
                                        reserveBtnGroup.classList.add('d-none');
                                        reserveContent.classList.add('d-none');
                                        pagination.classList.add('d-none');
                                        reserveManageAppointments.classList.remove('d-none');
                                        setTimeout(() => {
                                            reserveManageAppointments.classList.remove('opacity-0');
                                            spinner.classList.add('d-none');
                                        }, 0);
                                    }, 400);

                                    const commentId=e.target.closest('li').getAttribute('data-id');
                                    reserveManageAppointments.setAttribute('data-id',commentId);
                                    const comment=await reserveComponent.getCommentObj(commentId);
                                    const time=new Date(comment.postTime).toLocaleString('chinese',{hour12:false}).split(' ')[0];
                                    const commenterData=await reserveComponent.getUserData(comment.userId);
        
                                    if(comment.state==='accept'||comment.state==='reject'||comment.state==='cancel'){
                                        reserveManageAppointmentsRadioForm.classList.add('d-none');
                                        reserveManageAppointmentsConfirmGroup.classList.add('d-none');
                                    }else if(comment.state===false){
                                        reserveManageAppointmentsRadioForm.classList.remove('d-none');
                                        reserveManageAppointmentsConfirmGroup.classList.remove('d-none');
                                    }

                                    const image=document.querySelector('.reserve-manageAppointments .image');
                                    const name=document.querySelector('.reserve-manageAppointments .name');
                                    const date=document.querySelector('.reserve-manageAppointments .date');
                                    const reservationTime=document.querySelector('.reserve-manageAppointments .reservationTime');
                                    const location=document.querySelector('.reserve-manageAppointments .location');
                                    const state=document.querySelector('.reserve-manageAppointments .state');
                                    const commentBody=document.querySelector('.reserve-manageAppointments .commentBody');
                                    
                                    image.src=commenterData.image;
                                    name.textContent=commenterData.name;
                                    date.textContent=time;
                                    reservationTime.textContent=comment.reservationTime;
                                    location.textContent=comment.location;
                                    state.textContent=comment.state===false? '預約中':(comment.state==='accept'? '預約成功':(comment.state==='reject'? '已拒絕':'已取消'));
                                    commentBody.textContent=comment.body;
                                })
                            }
                        });
                    });
                });
            }
        }
    },
};

reserveComponent.render();

//reserve my discuss
reserveMyDiscussRadioCancel.addEventListener('click',e=>{
    console.log('click');
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
reserveMyDiscussConfirmSubmit.addEventListener('click',async e=>{
    e.preventDefault();
    spinner.classList.remove('d-none');
    try {
        let obj={}
        if(reserveMyDiscussRadioCancel.checked===true){
            const id=reserveMyDiscuss.getAttribute('data-id');
            obj.state='cancel';
            await ajaxMember.patchComment(id,obj);
            spinner.classList.add('d-none');
            location.href=locationUrl;
        }
    } catch (err) {
        console.log(err);
        spinner.classList.add('d-none');
    }
})
reserveMyDiscussConfirmCancel.addEventListener('click',e=>{
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
//reserveMyDiscuss back to reserve
backToReserveAll[0].addEventListener('click',e=>{
    spinner.classList.remove('d-none');
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
            spinner.classList.add('d-none');
        }, 0);
    }, 400);
});

//reserve manage appointment
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

reserveManageAppointmentsConfirmSubmit.addEventListener('click',async e=>{
    e.preventDefault();
    try {
        spinner.classList.remove('d-none');
        let obj={}
        const id=reserveManageAppointments.getAttribute('data-id');
        if(reserveManageAppointmentsRadioCheck.checked===true){
            obj.state='accept';
            await ajaxMember.patchComment(id,obj);
            spinner.classList.add('d-none');
        }else if(reserveManageAppointmentsRadioCancel.checked===true){
            obj.state='reject';
            await ajaxMember.patchComment(id,obj);
            spinner.classList.add('d-none');
        }
        location.href=locationUrl;
    } catch (err) {
        console.log(err);
        spinner.classList.add('d-none');
    }
});

reserveManageAppointmentsConfirmCancel.addEventListener('click',e=>{
    spinner.classList.remove('d-none');
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
            spinner.classList.add('d-none');
        }, 0);
    }, 400);
});
//reserveManageAppointments back to reserve
backToReserveAll[1].addEventListener('click',e=>{
    spinner.classList.remove('d-none');
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
            spinner.classList.add('d-none');
        }, 0);
    }, 400);
});


let obj={}
obj.state=false;
function patchComment(id,obj) {  
    ajaxMember.patchComment(id,obj);
}
// patchComment(5,obj)
