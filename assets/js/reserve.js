//jQuery
$(document).ready(function () {
    $('.btn-group .btn').click(function (e) { 
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});

//JS
const reserveBtnGroup=document.querySelector('.reserve-btn-group');
const reserveContent=document.querySelector('.reserve-content');
const reserveContentAllLi=[...document.querySelectorAll('.reserve-content li')];
const reserveMyDicuss=document.querySelector('.reserve-myDicuss');
const reserveManageAppointments=document.querySelector('.reserve-manageAppointments');
const pagination=document.querySelector('.pagination');

reserveContentAllLi.forEach(item=>{
    item.addEventListener('click',e=>{
        let stateDom=[...reserveBtnGroup.children[0].children[0].children[0].children].find(item=>{
            if(item.className.includes('active')){
                return item;
            }
        });
        console.log(stateDom.textContent);
        if(stateDom.textContent==='我的預約'){
            reserveBtnGroup.classList.add('d-none');
            reserveContent.classList.add('d-none');
            pagination.classList.add('d-none');
            reserveMyDicuss.classList.remove('d-none');
        }else{
            reserveBtnGroup.classList.add('d-none');
            reserveContent.classList.add('d-none');
            pagination.classList.add('d-none');
            reserveManageAppointments.classList.remove('d-none');
        }
       
    })
})