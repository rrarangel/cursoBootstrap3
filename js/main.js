
$(function(){
        //alert("Bem Vindo!");
    
    //remove o fundo escurecido
    $("#mod01").modal({backdrop:false, keyboard:false});
    
    //Abre a janela modal
    $("#mod01").modal("show");
    
    //fecha a janela modal apos 3 segundos
    setTimeout(function(){ 
               $("#mod01").modal("hide")},3000);
    
});
