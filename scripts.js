function actualizar(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
    document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());
};
//Cambio de colores de botones hover
$(".boton-menu").hover(function(){
    $(this).addClass("hover")
}, function(){
    $(this).removeClass("hover")
})
//Cambio de colores de botones select y display de panel
$(".boton-menu").click(function(){
    $(this).toggleClass("select")

    var panId = $(this).attr("id") + "panel";
    $("#"+panId).toggleClass("oculto")

    var panelesActivos = 4 - $(".oculto").length;
    $(".panel").width(($(window).width()/panelesActivos)-10);
});
$(".panel").height(($(window).height()-$("#header").height()-10)+"px");
actualizar();
$("textarea").on('change keyup paste', function(){
    actualizar();
})