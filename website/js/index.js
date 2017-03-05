/**
 * Created by Administrator on 2017/2/15 0015.
 */
require(["jquery","carousel"],function($,Carousel){
    var $searchIpt = $("#search-ipt");
    $("#search span").on('click',function(){
        alert($searchIpt.val());
    });
    $searchIpt.on('keypress',function(e){
        if(e.which == 13){
            alert($searchIpt.val());
        }
    });
    var carousel = new Carousel();
    carousel.init();
});