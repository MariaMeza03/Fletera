const form2 = document.getElementById("form2");

//*nombre
const nombre2 = document.getElementById("nombre")
const NameErrors2 = document.querySelector(".footer__form__form__grid__input_name__error")
const input2 = document.querySelector(".footer__form__form__grid__input_name")

//*email
const mail2 = document.getElementById("email")
const emailErrors2 = document.querySelector(".footer__form__form__grid__input_email__error")
const inputEmail2 = document.querySelector(".footer__form__form__grid__input_email")

//*Phone
const phone2 = document.getElementById("telefono")
const phoneErrors2 =document.querySelector(".footer__form__form__grid__input_phone__error")
const inputPhone2 = document. querySelector(".footer__form__form__grid__input_phone")

//*Direction
const direction2 = document.getElementById("empresa")
const directionErrors2 =document.querySelector(".footer__form__form__grid__input_company__error")
const inputDirection2 = document. querySelector(".footer__form__form__grid__input_company")

//*Salida
const nombreCfe2 = document.getElementById("salida")
const nombreCfeErrors2 =document.querySelector(".footer__form__form__grid__input_from__error")
const inputnombreCfe2 = document. querySelector(".footer__form__form__grid__input_from")

//*Destino
const numberCfe2 = document.getElementById("destino")
const numberCfeErrors2 =document.querySelector(".footer__form__form__grid__input_to__error")
const inputnumberCfe2 = document. querySelector(".footer__form__form__grid__input_to")

//*Mensaje
const mensaje2 = document.getElementById("mensaje")
const mensajeErrors2 =document.querySelector(".footer__form__form__grid__input_coments__error")
const inputMensaje2 = document. querySelector(".footer__form__form__grid__input_coments")


function Validation2(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,2})+$/


    //*Reset Error
    //*Name
    NameErrors2.classList.remove('footer__form__form__grid__input_name__error--active')
    input2.classList.remove('footer__form__form__grid__input_name--active')

     //*Email
    emailErrors2.classList.remove('footer__form__form__grid__input_email__error--active')
    inputEmail2.classList.remove('footer__form__form__grid__input_email--active')

     //*Phone
    phoneErrors2.classList.remove('footer__form__form__grid__input_phone__error--active')
    inputPhone2.classList.remove('footer__form__form__grid__input_phone--active')

     //*Direction
    directionErrors2.classList.remove('footer__form__form__grid__input_company__error--active')
    inputDirection2.classList.remove('footer__form__form__grid__input_company--active')

    //*nombre_cfe
    nombreCfeErrors2.classList.remove('footer__form__form__grid__input_from__error--active')
    inputnombreCfe2.classList.remove('footer__form__form__grid__input_from--active')

     //*number_cfe
    numberCfeErrors2.classList.remove('footer__form__form__grid__input_to__error--active')
    inputnumberCfe2.classList.remove('footer__form__form__grid__input_to--active')

    //*textarea_cfe
    mensajeErrors2.classList.remove('footer__form__form__grid__input_coments--active')
    inputMensaje2.classList.remove('footer__form__form__grid__input_coments--active')

    if(nombre2.value == "" ){
        NameErrors2.classList.add('footer__form__form__grid__input_name__error--active')
        input2.classList.add('footer__form__form__grid__input_name--active')
    }

    if(!regexEmail.test(mail2.value || mail2.value.length == "" )){
        emailErrors2.classList.add('footer__form__form__grid__input_email__error--active')
        inputEmail2.classList.add ('footer__form__form__grid__input_email--active')
    }

    if(phone2.value.length == ""){
        phoneErrors2.classList.add('footer__form__form__grid__input_phone__error--active')
        inputPhone2.classList.add('footer__form__form__grid__input_phone--active')
    }

    if(direction2.value.length == ""){
        directionErrors2.classList.add('footer__form__form__grid__input_company__error--active')
        inputDirection2.classList.add('footer__form__form__grid__input_company--active')
    }


    if(nombreCfe2.value.length == ""){
        nombreCfeErrors2.classList.add('footer__form__form__grid__input_from__error--active')
        inputnombreCfe2.classList.add('footer__form__form__grid__input_from--active')
    }

    if(numberCfe2.value.length == ""){
        numberCfeErrors2.classList.add('footer__form__form__grid__input_to__error--active')
        inputnumberCfe2.classList.add('footer__form__form__grid__input_to--active')
    }

    if(mensaje2.value.length == ""){
        mensajeErrors2.classList.add('footer__form__form__grid__input_coments__error--active')
        inputMensaje2.classList.add('footer__form__form__grid__input_coments--active')
    }


    if(nombre2.value !== "" && mail2.value !=="" && phone2.value !== "" && direction2.value !== "" && nombreCfe2.value !== "" && numberCfe2.value !== "" && mensaje2.value !== ""){

        let datos2 = new FormData(form2);

        peticion2 = {
            method:'POST',
            body:datos2,
        }
    
        fetch('./correoUnidades.php', peticion2)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

        location.replace('./gracias.html');

    }  
}

form2.addEventListener("submit", Validation2)
