//jQuery
//seitch reserveMyDicuss reserveManageAppointments
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
const reserveMyDicuss=document.querySelector('.reserve-myDicuss');
const reserveManageAppointments=document.querySelector('.reserve-manageAppointments');
const pagination=document.querySelector('.pagination');
const backToReserveAll=[...document.querySelectorAll('.backToReserve')];

//reserve into reserveMyDicuss or reserveManageAppointments
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
                reserveMyDicuss.classList.remove('d-none');
                setTimeout(() => {
                    reserveMyDicuss.classList.remove('opacity-0');
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
//reserveMyDicuss back to reserve
backToReserveAll[0].addEventListener('click',e=>{
    reserveMyDicuss.classList.add('opacity-0');
    setTimeout(() => {
        reserveBtnGroup.classList.remove('d-none');
        reserveContent.classList.remove('d-none');
        pagination.classList.remove('d-none');
        reserveMyDicuss.classList.add('d-none');
        setTimeout(() => {
            reserveBtnGroup.classList.remove('opacity-0');
            reserveContent.classList.remove('opacity-0');
            pagination.classList.remove('opacity-0');
        }, 0);
    }, 400);
});
//reserveManageAppointments back to reserve
backToReserveAll[1].addEventListener('click',e=>{
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