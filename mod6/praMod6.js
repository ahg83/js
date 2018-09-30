
    var t = $("#crono");

    function initializelista() {
    var li = $("#liPartials");
    	li.html="";
    };
    function parar()    { clearInterval(t);  t=undefined; };

    function cambiar()  { 
        
        if (!t) 
            arrancar(); 
        else{
            
            parar(); 
            writePartial();
            }
    };
    
    
    function writePartial (){
        $("#liPartials").html = "<br>"+ localStorage.c + "</br>";
    };