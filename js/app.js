window.addEventListener('load',function(){
    
    var botonTexto = document.getElementById("texto");
    var botonCita = document.getElementById("cita")
    var botonLink = document.getElementById("link");
    var botonFrase = document.getElementById("frase");
    var receptor = document.getElementById("receptor");
    
    function postTexto(){
        var postTexto = document.createElement("div");
        var titulo = document.createElement("textarea");
        titulo.placeholder="Escribe un 'Titulo'...";
        var titutoTitulo = document.createElement("label");
        titutoTitulo.innerHTML="Titulo:";
        var texto = document.createElement("textarea");    
        texto.placeholder="Escriba un texto...";
        var textoTitulo = document.createElement("label");
        textoTitulo.innerHTML="Texto:"
        var botonBorrar = document.createElement("button");
        botonBorrar.innerHTML="ELIMINAR";
        var botonAgregar = document.createElement("button");
        botonAgregar.innerHTML="AGREGAR";

        receptor.appendChild(postTexto);
        postTexto.appendChild(titutoTitulo);
        postTexto.appendChild(titulo);
        postTexto.appendChild(textoTitulo);
        postTexto.appendChild(texto);
        postTexto.appendChild(botonBorrar);
        postTexto.appendChild(botonAgregar);

        postTexto.classList.add("postTexto")
        titulo.classList.add("materialize-textarea", "titulo");
        texto.classList.add("materialize-textarea", "texto");
        texto.getAttribute("id","icon_prefix2");
        texto.rows = "6";
        botonBorrar.classList.add("botonBorrar","btn-large","waves-effect","red");
        botonAgregar.classList.add("botonAgregar","btn-large", "waves-effect","pink");

        botonAgregar.addEventListener("click", function(e){
            e.preventDefault();
            
            if(titulo.value.length == 0){
                alert("El textarea esta vacio");
                titulo.style.display = "block";
                texto.style.display = "inline-block";
                return false;
            } else if (texto.value.length == 0){
                alert("El textarea esta vacio");
                texto.style.display = "inline-block";
                return false;
            }
            
            if(titulo.value.length == 0){
                alert("El textarea esta vacio");
                titulo.style.display = "block";
                texto.style.display = "inline-block";
                return false;
            } else if (texto.value.length == 0){
                alert("El textarea esta vacio");
                texto.style.display = "inline-block";
                return false;
            }
            
            postTexto.style.display = "none";
            
            var post = document.createElement("div");
            var hTitulo = document.createElement("h2");
            var pTexto = document.createElement("p");
            var newBtnBorrar = document.createElement("button");
            
            receptor.appendChild(post);
            post.appendChild(hTitulo);
            post.appendChild(pTexto);
            post.appendChild(newBtnBorrar);
            
            hTitulo.innerHTML = titulo.value;
            pTexto.innerHTML = texto.value;
            newBtnBorrar.innerHTML = "ELIMINAR";
            
            post.classList.add("post");
            hTitulo.classList.add("hTitulo");
            pTexto.classList.add("pTexto");
            newBtnBorrar.classList.add("botonBorrar","btn-large","waves-effect","red","center-align");
            
            newBtnBorrar.addEventListener("click",function(e){
                e.preventDefault();
                this.parentElement.remove();  
            });
        });
        botonBorrar.addEventListener("click", function(e){
            e.preventDefault();
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

    botonTexto.addEventListener("click",function(e){
        e.preventDefault();
        receptor.style.display="block";
        postTexto();
    });
    botonCita.addEventListener("click",function(e){
        e.preventDefault();
        postCita();
        receptor.style.display="block";
    });
    botonLink.addEventListener("click",function(e){
        e.preventDefault();
        postLink();
    });
    botonFrase.addEventListener("click",function(e){
        e.preventDefault();
        postFrase();
        receptor.style.display="block";
    });
});