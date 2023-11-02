const account=document.getElementById('account');
// Bootstrap Validation
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    function IsEmail(email) {
        //正規表達式
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        };
    };
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            }
            
        }, false);
        //customer 
        account.addEventListener('keyup', event => {
            if(account.value===''){
                document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                document.getElementById('account').nextElementSibling.textContent=`請輸入您的Email`;
            }else if (!IsEmail(account.value)) {
                event.preventDefault();
                event.stopPropagation();
                account.setAttribute("style","border-color: var(--bs-form-invalid-border-color);background-image: url('../assets/images/member/invalid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                document.getElementById('account').nextElementSibling.setAttribute("style","display: block");
                document.getElementById('account').nextElementSibling.textContent=`Email 格式錯誤`;
            }else{
                event.preventDefault();
                event.stopPropagation();
                account.setAttribute("style","border-color: var(--bs-form-valid-border-color);background-image: url('../assets/images/member/valid.png');background-repeat: no-repeat;background-position: right calc(0.375em + 0.1875rem) center;background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);");
                document.getElementById('account').nextElementSibling.setAttribute("style","display: none");
            }
            
        }, false);
    });
})();



    