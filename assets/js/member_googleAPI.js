// 登入之後
function onSignIn(response){
    var base64Url = response.credential.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(JSON.parse(jsonPayload));
    return JSON.parse(jsonPayload);
    
};

/*
    JWT 線上編譯網站
    https://jwt.io/#debugger

    [JS] Google 第三方登入 API - GSI
    https://vii120.coderbridge.io/2022/06/23/google-signin-gsi/

    JWT JS 解碼教學
    https://stackoverflow.com/questions/63202266/how-to-extract-full-information-of-the-users-using-google-one-tap-signin

    npm install jwt-decode 專門解碼 JWT (待驗證)
    https://www.npmjs.com/package/jwt-decode
*/
