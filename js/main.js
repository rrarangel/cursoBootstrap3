
$(function(){
        //alert("Bem Vindo!");
    
    //remove o fundo escurecido
    $("#mod01").modal({backdrop:false, keyboard:false});
    
    //Abre a janela modal
    $("#mod01").modal("show");
    
    //fecha a janela modal apos 3 segundos
    setTimeout(function(){ 
               $("#mod01").modal("hide")},3000);
    
    $(".tooltip1").tooltip({
        animation:false,
        //delay : {show: 100, hide:2000},
        title: "Titulo padrão",
        //trigger : "over"
    });
    
    $(".ppv").popover({
        title: "Titulo do PopOver",
        trigger: 'hover focus'
    });
    
});
