const form4 = document.getElementById("form4");

//*nombre
const nombre4 = document.getElementById("nombre")
const NameErrors4 = document.querySelector(".footer__form__form__grid__input_name__error")
const input4 = document.querySelector(".footer__form__form__grid__input_name")

//*email
const mail4 = document.getElementById("email")
const emailErrors4 = document.querySelector(".footer__form__form__grid__input_email__error")
const inputEmail4 = document.querySelector(".footer__form__form__grid__input_email")

//*Phone
const phone4 = document.getElementById("telefono")
const phoneErrors4 =document.querySelector(".footer__form__form__grid__input_phone__error")
const inputPhone4 = document. querySelector(".footer__form__form__grid__input_phone")

//*Direction
const direction4 = document.getElementById("empresa")
const directionErrors4 =document.querySelector(".footer__form__form__grid__input_company__error")
const inputDirection4 = document. querySelector(".footer__form__form__grid__input_company")

//*Salida
const nombreCfe4 = document.getElementById("salida")
const nombreCfeErrors4 =document.querySelector(".footer__form__form__grid__input_from__error")
const inputnombreCfe4 = document. querySelector(".footer__form__form__grid__input_from")

//*Destino
const numberCfe4 = document.getElementById("destino")
const numberCfeErrors4 =document.querySelector(".footer__form__form__grid__input_to__error")
const inputnumberCfe4 = document. querySelector(".footer__form__form__grid__input_to")

//*Mensaje
const mensaje4 = document.getElementById("mensaje")
const mensajeErrors4 =document.querySelector(".footer__form__form__grid__input_coments__error")
const inputMensaje4 = document. querySelector(".footer__form__form__grid__input_coments")


function Validation4(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //*Reset Error
    //*Name
    NameErrors4.classList.remove('footer__form__form__grid__input_name__error--active')
    input4.classList.remove('footer__form__form__grid__input_name--active')

     //*Email
    emailErrors4.classList.remove('footer__form__form__grid__input_email__error--active')
    inputEmail4.classList.remove('footer__form__form__grid__input_email--active')

     //*Phone
    phoneErrors4.classList.remove('footer__form__form__grid__input_phone__error--active')
    inputPhone4.classList.remove('footer__form__form__grid__input_phone--active')

     //*Direction
    directionErrors4.classList.remove('footer__form__form__grid__input_company__error--active')
    inputDirection4.classList.remove('footer__form__form__grid__input_company--active')

    //*nombre_cfe
    nombreCfeErrors4.classList.remove('footer__form__form__grid__input_from__error--active')
    inputnombreCfe4.classList.remove('footer__form__form__grid__input_from--active')

     //*number_cfe
    numberCfeErrors4.classList.remove('footer__form__form__grid__input_to__error--active')
    inputnumberCfe4.classList.remove('footer__form__form__grid__input_to--active')

    //*textarea_cfe
    mensajeErrors4.classList.remove('footer__form__form__grid__input_coments--active')
    inputMensaje4.classList.remove('footer__form__form__grid__input_coments--active')

    if(nombre4.value == "" ){
        NameErrors4.classList.add('footer__form__form__grid__input_name__error--active')
        input4.classList.add('footer__form__form__grid__input_name--active')
    }

    if(!regexEmail.test(mail4.value || mail4.value.length == "" )){
        emailErrors4.classList.add('footer__form__form__grid__input_email__error--active')
        inputEmail4.classList.add ('footer__form__form__grid__input_email--active')
    }

    if(phone4.value.length == ""){
        phoneErrors4.classList.add('footer__form__form__grid__input_phone__error--active')
        inputPhone4.classList.add('footer__form__form__grid__input_phone--active')
    }

    if(direction4.value.length == ""){
        directionErrors4.classList.add('footer__form__form__grid__input_company__error--active')
        inputDirection4.classList.add('footer__form__form__grid__input_company--active')
    }


    if(nombreCfe4.value.length == ""){
        nombreCfeErrors4.classList.add('footer__form__form__grid__input_from__error--active')
        inputnombreCfe4.classList.add('footer__form__form__grid__input_from--active')
    }

    if(numberCfe4.value.length == ""){
        numberCfeErrors4.classList.add('footer__form__form__grid__input_to__error--active')
        inputnumberCfe4.classList.add('footer__form__form__grid__input_to--active')
    }

    if(mensaje4.value.length == ""){
        mensajeErrors4.classList.add('footer__form__form__grid__input_coments__error--active')
        inputMensaje4.classList.add('footer__form__form__grid__input_coments--active')
    }


    if(nombre4.value !== "" && mail4.value !=="" && phone4.value !== "" && direction4.value !== "" && nombreCfe4.value !== "" && numberCfe4.value !== "" && mensaje4.value !== ""){

        let datos4 = new FormData(form4);

        peticion4 = {
            method:'POST',
            body:datos4,
        }
    
        fetch('./correoCobertura.php', peticion4)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

        location.replace('./gracias.html');

    }  
}

form4.addEventListener("submit", Validation4)
