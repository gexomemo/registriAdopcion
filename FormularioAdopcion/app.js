const nombre = document.getElementById("name")
const apellido = document.getElementById("ape")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  /*Validaciones en javascript*/
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido es muy corto por lo cual no es valido<br>`
        entrar = true
    }
    if(ape.value.length <4){
        warnings += `El apellido no es valido pues es muy corto<br>`
        entrar = true
    }
    if(nombre.value.length <200){
        warnings += `El mensahe debe de ser de por lo menos 200 caracteres<br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Registro ENVIADO de forma correcta"
    }
})