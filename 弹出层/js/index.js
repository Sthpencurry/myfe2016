require(["dialog"], function(Dialog){
    var oOpen = document.getElementById("open");
    oOpen.onclick = function(){
        var settings = {
            width : 500,
            height : 400,
            title : "我的弹出层",
            content : "login.html"
        };

        var dialog = new Dialog();
        dialog.open(settings);
    };

});