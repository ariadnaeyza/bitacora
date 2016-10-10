window.addEventListener('load',function(){
    
    //VARIABLES
    var botonTexto = document.getElementById("texto");
    var botonCita = document.getElementById("cita")
    var botonLink = document.getElementById("link");
    var botonFrase = document.getElementById("frase");
    var receptor = document.getElementById("receptor");

    //FUNCIONES
    
    function postTexto(){
        var titulo = document.createElement("textarea");
        titulo.placeholder="Escribe un 'Titulo'...";
        var titutoTitulo = document.createElement("label");
        titutoTitulo.innerHTML="Titulo:";
        var textArea = document.createElement("textarea");    
        textArea.placeholder="Escriba un texto...";
        var textAreaTitulo = document.createElement("label");
        textAreaTitulo.innerHTML="Texto:"
        var botonBorrar = document.createElement("button");
        botonBorrar.innerHTML="ELIMINAR";
        var botonAgregar = document.createElement("button");
        botonAgregar.innerHTML="AGREGAR";

        titulo.classList.add("materialize-textarea");
        textArea.classList.add("materialize-textarea");
        textArea.getAttribute("id","icon_prefix2");
        textArea.rows = "6";
        botonBorrar.classList.add("btn-large", "waves-effect","red");
        botonAgregar.classList.add("botonAgregar","btn-large", "waves-effect","pink");

        receptor.appendChild(titutoTitulo);
        receptor.appendChild(titulo);
        receptor.appendChild(textAreaTitulo);
        receptor.appendChild(textArea);
        receptor.appendChild(botonBorrar);
        receptor.appendChild(botonAgregar);

        botonBorrar.addEventListener("click", function(){
            this.parentElement.remove();
        });  
    }
    
    function postCita(){
        postTexto.call(this);
        
    }
    
    function postLink(){
        postTexto.call(this);
        
    }
    
    function postFrase(){
        postTexto.call(this);
        
    }
    
    function postPublicar(){
        

    }
    
    
    //EVENTOS
    botonTexto.addEventListener("click",function(){
        postTexto();
    });
    botonCita.addEventListener("click",function(){
        postCita();
    });
    botonLink.addEventListener("click",function(){
        postLink();
    });
    botonFrase.addEventListener("click",function(){
        postFrase();
    });
     

});