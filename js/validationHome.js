const form = document.getElementById("form");

//*nombre
const nombre = document.getElementById("nombre")
const NameErrors = document.querySelector(".footer__form__form__grid__input_name__error")
const input = document.querySelector(".footer__form__form__grid__input_name")

//*email
const mail = document.getElementById("email")
const emailErrors = document.querySelector(".footer__form__form__grid__input_email__error")
const inputEmail = document.querySelector(".footer__form__form__grid__input_email")

//*Phone
const phone = document.getElementById("telefono")
const phoneErrors =document.querySelector(".footer__form__form__grid__input_phone__error")
const inputPhone = document. querySelector(".footer__form__form__grid__input_phone")

//*Direction
const direction = document.getElementById("empresa")
const directionErrors =document.querySelector(".footer__form__form__grid__input_company__error")
const inputDirection = document. querySelector(".footer__form__form__grid__input_company")

//*Salida
const nombreCfe = document.getElementById("salida")
const nombreCfeErrors =document.querySelector(".footer__form__form__grid__input_from__error")
const inputnombreCfe = document. querySelector(".footer__form__form__grid__input_from")

//*Destino
const numberCfe = document.getElementById("destino")
const numberCfeErrors =document.querySelector(".footer__form__form__grid__input_to__error")
const inputnumberCfe = document. querySelector(".footer__form__form__grid__input_to")

//*Mensaje
const mensaje = document.getElementById("mensaje")
const mensajeErrors =document.querySelector(".footer__form__form__grid__input_coments__error")
const inputMensaje = document. querySelector(".footer__form__form__grid__input_coments")


function Validation(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //*Reset Error
    //*Name
    NameErrors.classList.remove('footer__form__form__grid__input_name__error--active')
    input.classList.remove('footer__form__form__grid__input_name--active')

     //*Email
    emailErrors.classList.remove('footer__form__form__grid__input_email__error--active')
    inputEmail.classList.remove('footer__form__form__grid__input_email--active')

     //*Phone
    phoneErrors.classList.remove('footer__form__form__grid__input_phone__error--active')
    inputPhone.classList.remove('footer__form__form__grid__input_phone--active')

     //*Direction
    directionErrors.classList.remove('footer__form__form__grid__input_company__error--active')
    inputDirection.classList.remove('footer__form__form__grid__input_company--active')

    //*nombre_cfe
    nombreCfeErrors.classList.remove('footer__form__form__grid__input_from__error--active')
    inputnombreCfe.classList.remove('footer__form__form__grid__input_from--active')

     //*number_cfe
    numberCfeErrors.classList.remove('footer__form__form__grid__input_to__error--active')
    inputnumberCfe.classList.remove('footer__form__form__grid__input_to--active')

    //*textarea_cfe
    mensajeErrors.classList.remove('footer__form__form__grid__input_coments--active')
    inputMensaje.classList.remove('footer__form__form__grid__input_coments--active')

    if(nombre.value == "" ){
        NameErrors.classList.add('footer__form__form__grid__input_name__error--active')
        input.classList.add('footer__form__form__grid__input_name--active')
    }

    if(!regexEmail.test(mail.value || mail.value.length == "" )){
        emailErrors.classList.add('footer__form__form__grid__input_email__error--active')
        inputEmail.classList.add ('footer__form__form__grid__input_email--active')
    }

    if(phone.value.length == ""){
        phoneErrors.classList.add('footer__form__form__grid__input_phone__error--active')
        inputPhone.classList.add('footer__form__form__grid__input_phone--active')
    }

    if(direction.value.length == ""){
        directionErrors.classList.add('footer__form__form__grid__input_company__error--active')
        inputDirection.classList.add('footer__form__form__grid__input_company--active')
    }


    if(nombreCfe.value.length == ""){
        nombreCfeErrors.classList.add('footer__form__form__grid__input_from__error--active')
        inputnombreCfe.classList.add('footer__form__form__grid__input_from--active')
    }

    if(numberCfe.value.length == ""){
        numberCfeErrors.classList.add('footer__form__form__grid__input_to__error--active')
        inputnumberCfe.classList.add('footer__form__form__grid__input_to--active')
    }

    if(mensaje.value.length == ""){
        mensajeErrors.classList.add('footer__form__form__grid__input_coments__error--active')
        inputMensaje.classList.add('footer__form__form__grid__input_coments--active')
    }


    if(nombre.value !== "" && mail.value !=="" && phone.value !== "" && direction.value !== "" && nombreCfe.value !== "" && numberCfe.value !== "" && mensaje.value !== ""){

        let datos = new FormData(form);

        peticion = {
            method:'POST',
            body:datos,
        }
    
        fetch('./correoHome.php', peticion)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

        location.replace('./gracias.html');

    }  
}

form.addEventListener("submit", Validation)
