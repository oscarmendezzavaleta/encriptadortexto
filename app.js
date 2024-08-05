//-------------------------------------------ICONS--------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll("#icon");

    icons.forEach(function(i) {
        i.addEventListener("mouseover", function() {
            i.style.transition = "color 0.3s ease-in, transform 0.2s ease-in";
            i.style.transform = "translateY(-5px)";
            i.style.color = "white";
        });
        i.addEventListener("mouseout", function() {
            i.style.transition = "color 0.3s ease-in, transform 0.2s ease-in";
            i.style.transform = "translateY(0px)";
            i.style.color = "#1b0100"; 
        });
    });

//-------------------------------------CARRUSEL COLORES---------------------------------
const parrafo = document.getElementById("parrafo");

    function colorAleatorio() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    function cambiarColor() {
        const color = colorAleatorio();
        parrafo.style.color = color;
    }

setInterval(cambiarColor, 80);
});


//------------------------------------------1ENCRIP----------------------------------
//------------------------------------------1ENCRIP----------------------------------
//------------------------------------------1ENCRIP----------------------------------
//  creo una  constante con las letras  a poder encriptarse
const encriptado = {
    'e': 'enter',
    'o': 'ober',
    'i': 'imes',
    'a': 'ai',
    'u': 'ufat'
  };
  
  //  equivalencia
  const desencriptado = {
    'enter': 'e',
    'ober': 'o',
    'imes': 'i',
    'ai': 'a',
    'ufat': 'u'
  };

//funcion regular que nos pemrite el uso de las minusculas
const soloMinusculas = /^[a-z\s]+$/;

//------------------------------------FUNCION ENCRIPTAR TEXTO---------------------------
function encriptar(){
    var texto = document.getElementById("txt").value;

    //MENSAJE DE ERROR
    if (texto === "") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No ingresaste texto.",
          showConfirmButton: false,
          timer: 1000,
        });
        document.getElementById("img-error").style.display = "block";
        document.getElementById("msg-error").style.display = "block";
        document.getElementById("resultado").style.display = "none";
        return;
      }

    if (!soloMinusculas.test(texto)) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El texto debe contener solo minúsculas sin tildes.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
    }

    //REEMPLAZANDO CARACTERES
    let cifrarTexto = texto;
    //Bucle para recorrer todo el texto, key (letra), value (texto que reemplazará)
    for (const [key, value] of Object.entries(encriptado)) {
        //Crea una expresion regular 'g' que todas las ocurrencias
        cifrarTexto = cifrarTexto.replace(new RegExp(key, 'g'), value);
    }
    //Llama al metodo para mostrar en la caja
    mostrarResultado(cifrarTexto);
}

//----------------------------------FUNCION DESENCRIPTAR TEXTO---------------------------
function desencriptar() {
    var texto = document.getElementById("txt").value;
  
    //MENSAJE DE ERROR
    if (texto === "") {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No ingresaste texto.",
          showConfirmButton: false,
          timer: 1000,
        });
        document.getElementById("img-error").style.display = "block";
        document.getElementById("msg-error").style.display = "block";
        document.getElementById("resultado").style.display = "none";
        return;
    }

    if (!soloMinusculas.test(texto)) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El texto debe contener solo minúsculas sin tildes.",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
    }

    //REEMPLAZANDO CARACTERES
    let descifrarTexto = texto;
    //Bucle para recorrer todo el texto, key (letra), value (texto que reemplazará)
    for (const [key, value] of Object.entries(desencriptado)) {
        //Crea una expresion regular 'g' que todas las ocurrencias
        descifrarTexto = descifrarTexto.replace(new RegExp(key, 'g'), value);
    }
    //Llama al metodo para mostrar en la caja
    mostrarResultado(descifrarTexto);
  }

//--------------------------------FUNCION MOSTRAR RESULTADOS---------------------------
function mostrarResultado(texto) {
    document.getElementById("img-error").style.display = "none";
    document.getElementById("msg-error").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
    document.getElementById("txt-2").innerHTML = texto;
  }

//--------------------------------FUNCION COPIAR TEXTO------------------------------------
function copiarTexto() {
    var contenidoTxt = document.getElementById("txt-2").value;
    navigator.clipboard.writeText(contenidoTxt);
  
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Texto copiado al portapapeles",
      showConfirmButton: false,
      timer: 1100,
    });
  }

//------------------------------MENSAJE DISCORD--------------------------------------------
function msgDc(){
  Swal.fire({
    position: "center",
    title: "DISCORD: mad_cats",
    showConfirmButton: true,
    timer: 5000,
  });
}

//Llamar a los metodos
document.querySelector(".btn-enc").onclick = encriptar;
document.querySelector(".btn-desc").onclick = desencriptar;
document.querySelector(".copy").onclick = copiarTexto;
document.querySelector(".icondc").onclick = msgDc;


