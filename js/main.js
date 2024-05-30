const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const telefono = document.getElementById("tel")
const comentario = document.getElementById("comentario")
const cbox = document.getElementById("cbox1")
const form = document.getElementById("form")
const aviso = document.getElementById("aviso")
const adver = document.getElementById("advertencia")

form.addEventListener("submit", e=>{
  e.preventDefault()
    let advertencia = ""
    let enter = false
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (nombre.value.length <2){
      advertencia += `El nombre no es valido <br>` 
      enter = true
      aviso.innerHTML = ""
    }
    
    if (apellido.value.length <2){
      advertencia += `El apellido no es valido <br>` 
      enter = true
      aviso.innerHTML = ""
    }

    if(!emailVal.test(email.value)){
      advertencia += `El email no es valido <br>`
      enter = true
      aviso.innerHTML = ""
    }

    if (telefono.value.length <8 || telefono.value.length >20){
      advertencia += `El numero de telefono no es valido <br>`
      enter = true
      aviso.innerHTML = ""
    }

    if (comentario.value.length <1){
      advertencia += `El contenido de la consulta no es valida <br>` 
      enter = true
      aviso.innerHTML = ""
    }

    if (!cbox.checked){
      advertencia += `No aceptaste los terminos y condiciones <br>`
      enter = true
      aviso.innerHTML = ""
    }

    if(enter){
      adver.innerHTML = advertencia
    }else{
      adver.innerHTML = ""
      aviso.innerHTML = "Enviado!"
    }
})