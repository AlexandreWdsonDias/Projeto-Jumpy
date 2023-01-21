function cadastra(){

    if(document.getElementById("fnome").value == ""){
        erroCampo()
        break
    }

    if(document.getElementById("femail").value == ""){
        erroCampo()
        break
    }

    if(document.getElementById("ffone").value == ""){
        erroCampo()
        break
    }

    if(document.getElementById("fcpf").value == ""){
        erroCampo()
        break
    }
    
    if(document.getElementById("fsenha").value == ""){
        erroCampo()
        break
    }
}

function erroCampo(){
    const vazio = document.getElementsByClassName("obrigatorio");
    vazio.style.color = "red";
}
