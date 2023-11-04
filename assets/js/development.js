const thumb = document.querySelectorAll(".thumb")

    for(let i = 0  ; i<thumb.length ; i++){
        thumb[i].addEventListener("click",function(){
            for(let j = 0 ; j<thumb.length;j++){
                thumb[j].classList.remove("active")
            }
            this.classList.add("active")
        })
    }

