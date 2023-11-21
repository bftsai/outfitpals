
import 'https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js';
const dataUrl='http://localhost:3000';
let obj={
    email: 'red@mail.com',
    password: "123456",
    name: "Red"
}
axios.get(`${dataUrl}/users`)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err.response);
    })


new Swiper("#swiper-1", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        800: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 2
        }
    }
});