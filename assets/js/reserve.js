//axios
import axios from 'axios';
//jQuery
//switch reserveMyDiscuss reserveManageAppointments
$(document).ready(function () {
    $('.btn-group .btn').click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});
//JS
const reserveBtnGroup=document.querySelector('.c-switch-btn-group');
const reserveContent=document.querySelector('.reserve-content');
const reserveContentAllLi=[...document.querySelectorAll('.reserve-content li')];
const reserveMyDiscuss=document.querySelector('.reserve-myDiscuss');
const reserveMyDiscussRadioCancel=document.getElementById('reserve-myDiscussCancel');
const reserveMyDiscussTextarea=document.querySelector('.reserve-myDiscuss textarea');
const reserveMyDiscussConfirmSubmit=document.querySelector('.reserveMyDiscussConfirmSubmit');
const reserveMyDiscussConfirmCancel=document.querySelector('.reserveMyDiscussConfirmCancel');
const reserveManageAppointments=document.querySelector('.reserve-manageAppointments');
const pagination=document.querySelector('.pagination');
const reserveManageAppointmentsRadioCheck=document.getElementById('reserve-manageAppointmentsApprove');
const reserveManageAppointmentsRadioCancel=document.getElementById('reserve-manageAppointmentsCancel');
const reserveManageAppointmentsTextarea=document.querySelector('.reserve-manageAppointments textarea');
const reserveManageAppointmentsConfirmSubmit=document.querySelector('.reserveManageAppointmentsConfirmSubmit');
const reserveManageAppointmentsConfirmCancel=document.querySelector('.reserveManageAppointmentsConfirmCancel');
const backToReserveAll=[...document.querySelectorAll('.backToReserve')];

//reserve into reserveMyDiscuss or reserveManageAppointments
reserveContentAllLi.forEach(item=>{
    item.addEventListener('click',e=>{
        let stateDom=[...reserveBtnGroup.children[0].children[0].children[0].children].find(item=>{
            if(item.className.includes('active')){
                return item;
            }
        });
        if(stateDom.textContent==='我的預約'){
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
            }, 400);
        }else{
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
                }, 0);
            }, 400);
        }
    })
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