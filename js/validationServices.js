const form3 = document.getElementById("form3");

//*nombre
const nombre3 = document.getElementById("nombre")
const NameErrors3 = document.querySelector(".footer__form__form__grid__input_name__error")
const input3 = document.querySelector(".footer__form__form__grid__input_name")

//*email
const mail3 = document.getElementById("email")
const emailErrors3 = document.querySelector(".footer__form__form__grid__input_email__error")
const inputEmail3 = document.querySelector(".footer__form__form__grid__input_email")

//*Phone
const phone3 = document.getElementById("telefono")
const phoneErrors3 =document.querySelector(".footer__form__form__grid__input_phone__error")
const inputPhone3 = document. querySelector(".footer__form__form__grid__input_phone")

//*Direction
const direction3 = document.getElementById("empresa")
const directionErrors3 =document.querySelector(".footer__form__form__grid__input_company__error")
const inputDirection3 = document. querySelector(".footer__form__form__grid__input_company")

//*Salida
const nombreCfe3 = document.getElementById("salida")
const nombreCfeErrors3 =document.querySelector(".footer__form__form__grid__input_from__error")
const inputnombreCfe3 = document. querySelector(".footer__form__form__grid__input_from")

//*Destino
const numberCfe3 = document.getElementById("destino")
const numberCfeErrors3 =document.querySelector(".footer__form__form__grid__input_to__error")
const inputnumberCfe3 = document. querySelector(".footer__form__form__grid__input_to")

//*Mensaje
const mensaje3 = document.getElementById("mensaje")
const mensajeErrors3 =document.querySelector(".footer__form__form__grid__input_coments__error")
const inputMensaje3 = document. querySelector(".footer__form__form__grid__input_coments")


function Validation3(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //*Reset Error
    //*Name
    NameErrors3.classList.remove('footer__form__form__grid__input_name__error--active')
    input3.classList.remove('footer__form__form__grid__input_name--active')

     //*Email
    emailErrors3.classList.remove('footer__form__form__grid__input_email__error--active')
    inputEmail3.classList.remove('footer__form__form__grid__input_email--active')

     //*Phone
    phoneErrors3.classList.remove('footer__form__form__grid__input_phone__error--active')
    inputPhone3.classList.remove('footer__form__form__grid__input_phone--active')

     //*Direction
    directionErrors3.classList.remove('footer__form__form__grid__input_company__error--active')
    inputDirection3.classList.remove('footer__form__form__grid__input_company--active')

    //*nombre_cfe
    nombreCfeErrors3.classList.remove('footer__form__form__grid__input_from__error--active')
    inputnombreCfe3.classList.remove('footer__form__form__grid__input_from--active')

     //*number_cfe
    numberCfeErrors3.classList.remove('footer__form__form__grid__input_to__error--active')
    inputnumberCfe3.classList.remove('footer__form__form__grid__input_to--active')

    //*textarea_cfe
    mensajeErrors3.classList.remove('footer__form__form__grid__input_coments--active')
    inputMensaje3.classList.remove('footer__form__form__grid__input_coments--active')

    if(nombre3.value == "" ){
        NameErrors3.classList.add('footer__form__form__grid__input_name__error--active')
        input3.classList.add('footer__form__form__grid__input_name--active')
    }

    if(!regexEmail.test(mail3.value || mail3.value.length == "" )){
        emailErrors3.classList.add('footer__form__form__grid__input_email__error--active')
        inputEmail3.classList.add ('footer__form__form__grid__input_email--active')
    }

    if(phone3.value.length == ""){
        phoneErrors3.classList.add('footer__form__form__grid__input_phone__error--active')
        inputPhone3.classList.add('footer__form__form__grid__input_phone--active')
    }

    if(direction3.value.length == ""){
        directionErrors3.classList.add('footer__form__form__grid__input_company__error--active')
        inputDirection3.classList.add('footer__form__form__grid__input_company--active')
    }


    if(nombreCfe3.value.length == ""){
        nombreCfeErrors3.classList.add('footer__form__form__grid__input_from__error--active')
        inputnombreCfe3.classList.add('footer__form__form__grid__input_from--active')
    }

    if(numberCfe3.value.length == ""){
        numberCfeErrors3.classList.add('footer__form__form__grid__input_to__error--active')
        inputnumberCfe3.classList.add('footer__form__form__grid__input_to--active')
    }

    if(mensaje3.value.length == ""){
        mensajeErrors3.classList.add('footer__form__form__grid__input_coments__error--active')
        inputMensaje3.classList.add('footer__form__form__grid__input_coments--active')
    }


    if(nombre3.value !== "" && mail3.value !=="" && phone3.value !== "" && direction3.value !== "" && nombreCfe3.value !== "" && numberCfe3.value !== "" && mensaje3.value !== ""){

        let datos3 = new FormData(form3);

        peticion3 = {
            method:'POST',
            body:datos3,
        }
    
        fetch('./correoServices.php', peticion3)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

        location.replace('./gracias.html');

    }  
}

form3.addEventListener("submit", Validation3)
