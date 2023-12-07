const pagination=document.querySelector('.pagination');
const paginationPrev=document.querySelector('.pagination .prev');
const paginationNext=document.querySelector('.pagination .next');
pagination.addEventListener('click',e=>{
    if(e.target.nodeName==='UL'){
        return
    }
    if(Number(e.target.textContent)!==0){
        [...pagination.children].forEach(item=>{
            item.children[0].classList.remove('active')
        })
        e.target.classList.add('active');
    }else{
        if(e.target.closest('a').className.includes('page-prev')){
            for (let i = 2; i < pagination.childElementCount-1; i++) {
                if(pagination.children[i].children[0].className.includes('active')){
                    pagination.children[i].children[0].classList.remove('active');
                    pagination.children[i-1].children[0].classList.add('active');
                }
            }
        }else if(e.target.closest('a').className.includes('page-next')){
            for (let i = 1; i < pagination.childElementCount-2; i++) {
                if(pagination.children[i].children[0].className.includes('active')){
                    pagination.children[i].children[0].classList.remove('active');
                    pagination.children[i+1].children[0].classList.add('active');
                }
            }
        }
    }
})
