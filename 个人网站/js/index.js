/**
 * Created by Administrator on 2017/2/17 0017.
 */
$(function(){
    var $name = false;
    var $email = false;
    var $message = false;
    $('#div .btn').mouseover(function() {
        if($name && $email && $message){
            $("#div .btn").css("cursor","pointer");
        }else{
            $("#div .btn").css("cursor","not-allowed");
        }
    });
    $("#drop").on('click',function(){
        $("#drop1").animate({
            height: "toggle"
        },500,'swing');
    });
    $("#drop1 li > a").on('click',function(){
        $("#drop1").animate({
            height: "toggle"
        },500,'swing');
    });
    $("#name").blur(function(){
        if($(this).val()==""){
            $("#name + .help-block").css("opacity",1);
            $name = false;
        }else{
            $("#name + .help-block").css("opacity",0);
            $name = true;
        }
    });
    $("#email").blur(function(){
        var $filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var $em=$(this).val();
        if($filter.test($em)){
            $("#email + .help-block").css("opacity",0);
            $email = true;
        }
        else{
            $("#email + .help-block").css("opacity",1);
            $email = false;
        }
    });
    $("#messages").blur(function(){
        if($(this).val()==""){
            $("#messages + .help-block").css("opacity",1);
            $message = false;
        }else{
            $("#messages + .help-block").css("opacity",0);
            $message = true;
        }
    });
    $("#cproject img").hover(
        function(){
        $(this).addClass('shadow');
    },
        function(){
            $(this).removeClass('shadow');
        });
    $("#cproject a").hover(
        function(){ 
            $(this).finish().animate({
                top: "-=5"
            },300,'swing');
    },
        function(){
            $(this).finish().animate({
                top: "+=5"
            },300,'swing');
            
        });

    $(window).on("scroll", function(){
        if($(this).scrollTop() < $("#about").offset().top - 100){
            $("li:eq(0) > a").css({
                color: "#44b272"
            });
            $("li:not(:eq(0)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() < $("#about").offset().top - 200){
            $("#drop1 li:eq(0) > a").css({
                color: "#44b272"
            });
            $("#drop1 li:not(:eq(0)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#about").offset().top - 100){
            $("li:eq(1) > a").css({
                color: "#44b272"
            });
            $("li:not(:eq(1)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#about").offset().top - 200){
            $("#drop1 li:eq(1) > a").css({
                color: "#44b272"
            });
            $("#drop1 li:not(:eq(1)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#about").offset().top - 400){
            $("#about").css({
                opacity: 1
            });
        }
        if($(this).scrollTop() > $("#service").offset().top - 100){
            $("li:eq(2) > a").css({
                color: "#44b272"
            });
            $("li:not(:eq(2)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#service").offset().top - 200){
            $("#drop1 li:eq(2) > a").css({
                color: "#44b272"
            });
            $("#drop1 li:not(:eq(2)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#service").offset().top - 400){
            $("#service").css({
                opacity: 1
            });
        }
        if($(this).scrollTop() > $("#recent").offset().top - 100){
            $("li:eq(3) > a").css({
                color: "#44b272"
            });
            $("li:not(:eq(3)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#recent").offset().top - 200){
            $("#drop1 li:eq(3) > a").css({
                color: "#44b272"
            });
            $("#drop1 li:not(:eq(3)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#recent").offset().top - 400){
            $("#recent").css({
                opacity: 1
            });
        }
        if($(this).scrollTop() > $("#contact").offset().top - 100){
            $("li:eq(4) > a").css({
                color: "#44b272"
            });
            $("li:not(:eq(4)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#contact").offset().top - 200){
            $("#drop1 li:eq(4) > a").css({
                color: "#44b272"
            });
            $("#drop1 li:not(:eq(4)) > a").css({
                color: "#fff"
            });
        }
        if($(this).scrollTop() > $("#contact").offset().top - 400){
            $("#contact").css({
                opacity: 1
            });
        }
    });
});