import './assets/scss/all.scss';
// import $ from "jquery";
// import axios from 'axios';
//pagination
$(document).ready(function () {
    $('.pagination .page-num').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    $('.pagination .page-prev').click(function (e) { 
        e.preventDefault();
        if($('.pagination .active').text()==='1'){
            return ;
        }else{
            $('.pagination .active').removeClass('active').parent().prev().find('.page-num').addClass('active');
        }
    });
    $('.pagination .page-next').click(function (e) { 
        e.preventDefault();
        if($('.pagination .active').text()==='3'){
            return ;
        }else{
            $('.pagination .active').removeClass('active').parent().next().find('.page-num').addClass('active');
        }
    });
});